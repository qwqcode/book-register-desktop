const {app, BrowserWindow, ipcMain} = require('electron')
const electronLocalshortcut = require('electron-localshortcut')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({show: false, width: 1250, height: 760, minWidth: 1250, minHeight: 760, center: true, icon: './icon.ico'})
  mainWindow.loadFile(__dirname + '/index.html')
  mainWindow.once('ready-to-show', () => {
    win.show()
  })
  mainWindow.maximize()
  mainWindow.setMenu(null)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  electronLocalshortcut.register(mainWindow, 'F12', () => {
    mainWindow.webContents.openDevTools()
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})