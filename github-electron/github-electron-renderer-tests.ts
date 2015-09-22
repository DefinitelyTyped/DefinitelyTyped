/// <reference path="./github-electron-renderer.d.ts" />
import ipc = require('ipc');
import remote = require('remote');
import WebFrame = require('web-frame');
import Clipboard = require('clipboard');
import CrashReporter = require('crash-reporter');
import NativeImage = require('native-image');
import Screen = require('screen');
import Shell = require('shell');

import fs = require('fs');

// In renderer process (web page).
// https://github.com/atom/electron/blob/master/docs/api/ipc-renderer.md
console.log(ipc.sendSync('synchronous-message', 'ping')); // prints "pong"

ipc.on('asynchronous-reply', (arg: any) => {
	console.log(arg); // prints "pong"
});
ipc.send('asynchronous-message', 'ping');

// remote
// https://github.com/atom/electron/blob/master/docs/api/remote.md

var BrowserWindow: typeof GitHubElectron.BrowserWindow = remote.require('browser-window');
var win = new BrowserWindow({ width: 800, height: 600 });
win.loadUrl('https://github.com');

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

WebFrame.setZoomFactor(2);

WebFrame.setSpellCheckProvider('en-US', true, {
	spellCheck: text => {
		return !(require('spellchecker').isMisspelled(text));
	}
});

// clipboard
// https://github.com/atom/electron/blob/master/docs/api/clipboard.md

Clipboard.writeText('Example String');
Clipboard.writeText('Example String', 'selection');
console.log(Clipboard.readText('selection'));

// crash-reporter
// https://github.com/atom/electron/blob/master/docs/api/crash-reporter.md

CrashReporter.start({
	productName: 'YourName',
	companyName: 'YourCompany',
	submitUrl: 'https://your-domain.com/url-to-submit',
	autoSubmit: true
});

// NativeImage
// https://github.com/atom/electron/blob/master/docs/api/native-image.md

var Tray: typeof GitHubElectron.Tray = remote.require('Tray');
var appIcon2 = new Tray('/Users/somebody/images/icon.png');
var window2 = new BrowserWindow({ icon: '/Users/somebody/images/window.png' });
var image = Clipboard.readImage();
var appIcon3 = new Tray(image);
var appIcon4 = new Tray('/Users/somebody/images/icon.png');

// screen
// https://github.com/atom/electron/blob/master/docs/api/screen.md

var app: GitHubElectron.App = remote.require('app');

var mainWindow: GitHubElectron.BrowserWindow = null;

app.on('ready', () => {
	var size = Screen.getPrimaryDisplay().workAreaSize;
	mainWindow = new BrowserWindow({ width: size.width, height: size.height });
});

app.on('ready', () => {
	var displays = Screen.getAllDisplays();
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

Shell.openExternal('https://github.com');
