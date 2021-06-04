const { app, BrowserWindow } = require('electron')
require('@electron/remote/main').initialize()

const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    x: 0,
      y: 0,
    width: 1200,
    height: 930,
    frame: false,
      resizable: true,
      movable: false,
      backgroundColor: '#666333',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()

  win.setAlwaysOnTop(true)
  win.on('focus', () => {
      win.focus()
  })

  // win.setMenuBarVisibility(true)

  // win.hide()
  //
  // win.show()

    win.on('hide', (e) => {
        // Navigate the window back when the user hits their mouse back button
        // if (cmd === 'browser-backward' && win.webContents.canGoBack()) {
        //     console.log('test')
        //
        //     win.webContents.goBack()
        // }
    })

    // mainWindow.on('minimize',function(event){
    //     event.preventDefault()
    //     mainWindow.hide()
    // })
    //
    // mainWindow.on('close', function (event) {
    //     if(!application.isQuiting){
    //         event.preventDefault()
    //         mainWindow.hide()
    //     }
    //
    //     return false
    // })

  // win.loadURL('https://трансплант.net')
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



console.log('start app')

