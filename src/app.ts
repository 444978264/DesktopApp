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

  onMessage(function ({ event, message }) {
    console.log(message, 'from hello')
    event.reply('world', 'from win:' + event.sender.id)
  })

  onMessage(function ({ event, message }) {
    console.log(message, 'copy from hello')
    event.reply('cyf', 'copy from win:' + event.sender.id)
  })

  console.log('render index html:', join(__dirname, 'render', 'index.html'))
  win.loadFile(join(__dirname, 'render', 'index.html'))
})
