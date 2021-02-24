import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  ipcMain.on('hello', (e, message) => {
    console.log(message, 'from ipcRender')
    e.reply('world', 'from hello')
  })

  console.log('render index html:', join(__dirname, 'render', 'index.html'))
  win.loadFile(join(__dirname, 'render', 'index.html'))
})
