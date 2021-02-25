type Listener<T> = [(e: T) => void, any] | ((e: T) => void)
export type Disposable = {
  dispose(): void
}
export type EmitterEvent<T> = (
  Listener: (e: T) => any,
  ctx?: any,
  disposables?: any
) => Disposable
export class Emitter<T> {
  private static noop = function () {}
  private _onDidFirstListen: Function
  private _onDidLastRemove: Function
  private _listeners: Set<Listener<T>>
  private _deliveryQueue: Set<[Listener<T>, T]>
  private _event: EmitterEvent<T>
  get event(): EmitterEvent<T> {
    if (!this._event) {
      this._event = (
        listener: (e: T) => any,
        ctx: any
        // disposables: () => void
      ) => {
        if (!this._listeners) {
          this._listeners = new Set()
        }
        const isFirst = this._listeners.size === 0
        if (isFirst && this._onDidFirstListen) {
          this._onDidFirstListen()
        }
        const listenerCache: Listener<T> = ctx ? [listener, ctx] : listener
        this._listeners.add(listenerCache)
        const remove = () => {
          this._listeners.delete(listenerCache)
        }
        const result = {
          dispose: () => {
            remove()
            const isLast = this._listeners.size === 0
            result.dispose = Emitter.noop
            if (isLast && this._onDidLastRemove) {
              this._onDidLastRemove()
            }
          },
        }
        return result
      }
    }
    return this._event
  }
  fire(event: T): void {
    if (this._listeners) {
      if (!this._deliveryQueue) {
        this._deliveryQueue = new Set()
      }
      this._listeners.forEach((listener) => {
        this._deliveryQueue.add([listener, event])
      })

      if (this._deliveryQueue.size > 0) {
        this._deliveryQueue.forEach(([listener, event]) => {
          try {
            if (typeof listener === 'function') {
              listener.call(undefined, event)
            } else if (Array.isArray(listener)) {
              const [listen, ctx] = listener
              listen.call(ctx, event)
            }
          } catch (error) {
            // todo catch error
          }
        })
      }
    }
  }
  onDidFirstListen(callback = Emitter.noop) {
    this._onDidFirstListen = callback
  }
  onDidLastRemove(callback = Emitter.noop) {
    this._onDidLastRemove = callback
  }
}
