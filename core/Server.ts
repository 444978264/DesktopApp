import { ipcMain } from 'electron'
import { ServerChannel } from './ipc'

export class Server {
  static channels: Map<string, ServerChannel> = new Map()
  constructor() {}
  registerServer(channelName: string, channel: ServerChannel) {
    Server.channels.set(channelName, channel)
  }
}

export class ServerChannels extends Server {
  
}
