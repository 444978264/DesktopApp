import { app, BrowserWindow } from 'electron'
import { join } from 'path'
app.on('ready', () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  console.log('render index html:', join(__dirname, 'render', 'index.html'))
  win.loadFile(join(__dirname, 'render', 'index.html'))
})
