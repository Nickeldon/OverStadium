const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences:{
      preload: path.join(__dirname + '\\mainmen.html')
    }
  })
  win.loadURL(url.format({
    pathname: path.join(__dirname, '\\mainmen.html')
}));
}

// in main.js

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})