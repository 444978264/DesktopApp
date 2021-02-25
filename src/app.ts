import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { Event } from '../core/Event'
app.on('ready', () => {
  const onMessage = Event.fromEvent<{
    event: Electron.IpcMainEvent
    message: any
  }>(ipcMain, 'hello', (event, message) => {
    return { event, message }
  })

  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  const listener1 = onMessage(function ({ event, message }) {
    console.log(message, 'from hello')
    event.reply('world', 'from win:' + event.sender.id)
    listener1.dispose()
  })

  const listener2 = onMessage(function ({ event, message }) {
    console.log(message, 'copy from hello')
    event.reply('cyf', { aa: 'cyf', bb: [1, 2, 3, 4] })
    listener2.dispose()
  })

  console.log('render index html:', join(__dirname, 'render', 'index.html'))
  win.loadFile(join(__dirname, 'render', 'index.html'))
})
