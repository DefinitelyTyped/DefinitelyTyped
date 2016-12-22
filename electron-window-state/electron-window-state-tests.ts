

import {app, BrowserWindow} from 'electron';
import windowStateKeeper = require('electron-window-state');

let win: Electron.BrowserWindow = null;

app.on('ready', function () {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });

  win = new BrowserWindow({
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height,
  });

  mainWindowState.manage(win);
});

const s2 = windowStateKeeper({
  defaultWidth: 1000,
  defaultHeight: 800,
  file: '' + '/foo.json',
  path: '',
  maximize: true,
  fullScreen: false,
});

console.log(s2.isMaximized, s2.isFullScreen);

s2.saveState(win);
