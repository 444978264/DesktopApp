import { Disposable, Emitter, EmitterEvent } from './Emitter'

interface NodeEmitter {
  on(event: string | symbol, listener: Function): unknown
  removeListener(event: string | symbol, listener: Function): unknown
}

export class Event {
  static fromEvent<T>(
    emitter: NodeEmitter,
    eventName: string,
    map: (...args: any[]) => T = (id) => id
  ): EmitterEvent<T> {
    const eventEmitter = new Emitter<T>()
    const fn = (...args: any[]) => eventEmitter.fire(map.apply(null, args))
    eventEmitter.onDidFirstListen(function () {
      console.log('onDidFirstListen', eventName)
      emitter.on(eventName, fn)
    })
    eventEmitter.onDidLastRemove(function () {
      console.log('onDidLastRemove', eventName)
      emitter.removeListener(eventName, fn)
    })
    return eventEmitter.event
  }

  static filter<T>(
    event: EmitterEvent<T>,
    filter: (...args: any[]) => boolean
  ): EmitterEvent<T> {
    return Event.snapshot(function (listener, ctx, disposables) {
      return event(
        function listenerWrap(...params) {
          if (filter(...params)) {
            listener.apply(ctx, params)
          }
        },
        ctx,
        disposables
      )
    })
  }
  // 快照
  static snapshot<T>(event: EmitterEvent<T>) {
    let listener: Disposable
    const emitter = new Emitter<T>()
    emitter.onDidFirstListen(function () {
      listener = event(emitter.fire, emitter)
    })
    emitter.onDidLastRemove(function () {
      listener.dispose()
    })
    return emitter.event
  }
}
