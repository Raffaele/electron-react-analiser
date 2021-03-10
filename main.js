
const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path');
const electronDl = require('electron-dl');

const isDev = !app.isPackaged;
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

electronDl();
ipcMain.on('notify', (_, message) => {
  switch(message.type) {
    case 'DOWNLOAD-RECORDS':
    const fileNameSuffix = Math.trunc(new Date().getTime()/10);
    const filename = `records-${fileNameSuffix}.json`;
    const messageStr = JSON.stringify(message.records, null, 4);
    const fileUrl = 'data:text/json;charset=utf-8,'+encodeURIComponent(messageStr);
    electronDl.download(win, fileUrl, {filename});
      break;
    default:
      throw 'invalid notification';
  }
  
})

app.whenReady().then(createWindow)
