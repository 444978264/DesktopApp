interface NodeEmitter {
  on(event: string | symbol, listener: Function): unknown
  removeListener(event: string | symbol, listener: Function): unknown
}

export class Event {
  static fromEvent<T>(
    emitter: NodeEmitter,
    eventName: string,
    map: (...arg: any[]) => T = (id) => id
  ) {
    // emitter.on(eventName, (e, arg) => {
    // })
  }
}
