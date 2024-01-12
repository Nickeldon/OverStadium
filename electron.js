const electron = require('electron');
const {app, BrowserWindow} = electron
const url = require('url')
const path = require('path')

//require('electron-reload')(__dirname,{electron: path.join(__dirname, 'node_modules', '.bin', 'electron')})

let windowObj = null

function createWindow(){
  windowObj = new BrowserWindow({
    width: 1050,
    height: 617,
    alwaysOnTop: false,
    maximizable: false,
    minimizable: false,
    center: true,
    autoHideMenuBar: true,
    resizable: false
  });

  windowObj.loadURL(url.format(path.join(__dirname, 'mainmen.html')));

  windowObj.on('closed', () => {
    windowObj = null
  })

}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('ready', createWindow);
