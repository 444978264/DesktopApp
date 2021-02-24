export interface ServerChannel {
  call<T>(channelName: string): Promise<T>
}
