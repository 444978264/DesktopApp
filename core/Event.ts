import { Emitter, EmitterEvent } from './Emitter'

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
}
