const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const createWindow = () => {
  const win = new BrowserWindow({
    width: 875,
    height: 550,
    webPreferences:{
      preload: path.join([__dirname + '/Addons/Sprites/PL1/Idle.png',
                          __dirname + '/Addons/Sprites/PL2/Idle.png'])
    }
  })

  win.loadFile('charsel.html')
}

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