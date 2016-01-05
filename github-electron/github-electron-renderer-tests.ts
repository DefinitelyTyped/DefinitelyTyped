/// <reference path="./github-electron.d.ts" />
import {
	ipcRenderer,
	remote,
	webFrame,
	clipboard,
	crashReporter,
	nativeImage,
	screen,
	shell
} from 'electron';

import fs = require('fs');

// In renderer process (web page).
// https://github.com/atom/electron/blob/master/docs/api/ipc-renderer.md
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

ipcRenderer.on('asynchronous-reply', (arg: any) => {
	console.log(arg); // prints "pong"
});
ipcRenderer.send('asynchronous-message', 'ping');

// remote
// https://github.com/atom/electron/blob/master/docs/api/remote.md

var BrowserWindow: typeof GitHubElectron.BrowserWindow = remote.require('browser-window');
var win = new BrowserWindow({ width: 800, height: 600 });
win.loadURL('https://github.com');

remote.getCurrentWindow().on('close', () => {
	// blabla...
});

remote.getCurrentWindow().capturePage(buf => {
	fs.writeFile('/tmp/screenshot.png', buf, err => {
		console.log(err);
	});
});

remote.getCurrentWindow().capturePage(buf => {
	remote.require('fs').writeFile('/tmp/screenshot.png', buf, (err: Error) => {
		console.log(err);
	});
});

// web-frame
// https://github.com/atom/electron/blob/master/docs/api/web-frame.md

webFrame.setZoomFactor(2);

webFrame.setSpellCheckProvider('en-US', true, {
	spellCheck: text => {
		return !(require('spellchecker').isMisspelled(text));
	}
});

// clipboard
// https://github.com/atom/electron/blob/master/docs/api/clipboard.md

clipboard.writeText('Example String');
clipboard.writeText('Example String', 'selection');
console.log(clipboard.readText('selection'));

// crash-reporter
// https://github.com/atom/electron/blob/master/docs/api/crash-reporter.md

crashReporter.start({
	productName: 'YourName',
	companyName: 'YourCompany',
	submitURL: 'https://your-domain.com/url-to-submit',
	autoSubmit: true
});

// nativeImage
// https://github.com/atom/electron/blob/master/docs/api/native-image.md

var Tray: typeof GitHubElectron.Tray = remote.require('Tray');
var appIcon2 = new Tray('/Users/somebody/images/icon.png');
var window2 = new BrowserWindow({ icon: '/Users/somebody/images/window.png' });
var image = clipboard.readImage();
var appIcon3 = new Tray(image);
var appIcon4 = new Tray('/Users/somebody/images/icon.png');

// screen
// https://github.com/atom/electron/blob/master/docs/api/screen.md

var app: GitHubElectron.App = remote.require('app');

var mainWindow: GitHubElectron.BrowserWindow = null;

app.on('ready', () => {
	var size = screen.getPrimaryDisplay().workAreaSize;
	mainWindow = new BrowserWindow({ width: size.width, height: size.height });
});

app.on('ready', () => {
	var displays = screen.getAllDisplays();
	var externalDisplay: any = null;
	for (var i in displays) {
		if (displays[i].bounds.x > 0 || displays[i].bounds.y > 0) {
			externalDisplay = displays[i];
			break;
		}
	}

	if (externalDisplay) {
		mainWindow = new BrowserWindow({
			x: externalDisplay.bounds.x + 50,
			y: externalDisplay.bounds.y + 50,
		});
	}
});

// shell
// https://github.com/atom/electron/blob/master/docs/api/shell.md

shell.openExternal('https://github.com');
