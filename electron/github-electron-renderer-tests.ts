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

import * as fs from 'fs';

// In renderer process (web page).
// https://github.com/atom/electron/blob/master/docs/api/ipc-renderer.md
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

ipcRenderer.on('asynchronous-reply', (event: Electron.IpcRendererEvent, arg: any) => {
	console.log(arg); // prints "pong"
	event.sender.send('another-message', 'Hello World!');
});

ipcRenderer.send('asynchronous-message', 'ping');

// remote
// https://github.com/atom/electron/blob/master/docs/api/remote.md

var BrowserWindow = remote.BrowserWindow;
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

remote.getCurrentWebContents().print();

remote.getCurrentWindow().capturePage(buf => {
	remote.require('fs').writeFile('/tmp/screenshot.png', buf, (err: Error) => {
		console.log(err);
	});
});

// web-frame
// https://github.com/atom/electron/blob/master/docs/api/web-frame.md

webFrame.setZoomFactor(2);
console.log(webFrame.getZoomFactor());

webFrame.setZoomLevel(200);
console.log(webFrame.getZoomLevel());

webFrame.setZoomLevelLimits(50, 200);

webFrame.setSpellCheckProvider('en-US', true, {
	spellCheck: text => {
		return !(require('spellchecker').isMisspelled(text));
	}
});

webFrame.registerURLSchemeAsSecure('app');
webFrame.registerURLSchemeAsBypassingCSP('app');
webFrame.registerURLSchemeAsPrivileged('app');

webFrame.insertText('text');

webFrame.executeJavaScript('JSON.stringify({})', false, (result) => {
    console.log(result);
});

console.log(webFrame.getResourceUsage());
webFrame.clearCache();

// clipboard
// https://github.com/atom/electron/blob/master/docs/api/clipboard.md

clipboard.writeText('Example String');
clipboard.writeText('Example String', 'selection');
console.log(clipboard.readText('selection'));
console.log(clipboard.availableFormats());
clipboard.clear();

clipboard.write({
	html: '<html></html>',
	text: 'Hello World!',
	image: clipboard.readImage()
});

// crash-reporter
// https://github.com/atom/electron/blob/master/docs/api/crash-reporter.md

crashReporter.start({
	productName: 'YourName',
	companyName: 'YourCompany',
	submitURL: 'https://your-domain.com/url-to-submit',
	autoSubmit: true
});

// desktopCapturer
// https://github.com/atom/electron/blob/master/docs/api/desktop-capturer.md

var desktopCapturer = require('electron').desktopCapturer;

desktopCapturer.getSources({types: ['window', 'screen']}, function(error, sources) {
	if (error) throw error;
	for (var i = 0; i < sources.length; ++i) {
		if (sources[i].name == "Electron") {
				(navigator as any).webkitGetUserMedia({
				audio: false,
				video: {
					mandatory: {
						chromeMediaSource: 'desktop',
						chromeMediaSourceId: sources[i].id,
						minWidth: 1280,
						maxWidth: 1280,
						minHeight: 720,
						maxHeight: 720
					}
				}
			}, gotStream, getUserMediaError);
			return;
		}
	}
});

function gotStream(stream: any) {
	(document.querySelector('video') as HTMLVideoElement).src = URL.createObjectURL(stream);
}

function getUserMediaError(error: Error) {
	console.log('getUserMediaError', error);
}

// File object
// https://github.com/atom/electron/blob/master/docs/api/file-object.md

/*
<div id="holder">
  Drag your file here
</div>
*/

var holder = document.getElementById('holder');

holder.ondragover = function () {
    return false;
};

holder.ondragleave = holder.ondragend = function () {
    return false;
};

holder.ondrop = function (e) {
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    console.log('File you dragged here is', file.path);
    return false;
};

// nativeImage
// https://github.com/atom/electron/blob/master/docs/api/native-image.md

var Tray = remote.Tray;
var appIcon2 = new Tray('/Users/somebody/images/icon.png');
var window2 = new BrowserWindow({ icon: '/Users/somebody/images/window.png' });
var image = clipboard.readImage();
var appIcon3 = new Tray(image);
var appIcon4 = new Tray('/Users/somebody/images/icon.png');

// https://github.com/electron/electron/blob/master/docs/api/process.md

// preload.js
var _setImmediate = setImmediate;
var _clearImmediate = clearImmediate;
process.once('loaded', function() {
	global.setImmediate = _setImmediate;
	global.clearImmediate = _clearImmediate;
});

// screen
// https://github.com/atom/electron/blob/master/docs/api/screen.md

var app = remote.app;

var mainWindow: Electron.BrowserWindow = null;

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

// <webview>
// https://github.com/atom/electron/blob/master/docs/api/web-view-tag.md

var webview = document.createElement('webview');
webview.loadURL('https://github.com');

webview.addEventListener('console-message', function(e) {
	console.log('Guest page logged a message:', e.message);
});

webview.addEventListener('found-in-page', function(e) {
	if (e.result.finalUpdate) {
		webview.stopFindInPage("keepSelection");
	}
});

var requestId = webview.findInPage("test");

webview.addEventListener('new-window', function(e) {
	require('electron').shell.openExternal(e.url);
});

webview.addEventListener('close', function() {
	webview.src = 'about:blank';
});

// In embedder page.
webview.addEventListener('ipc-message', function(event) {
	console.log(event.channel); // Prints "pong"
});
webview.send('ping');
webview.capturePage((image) => { console.log(image); });

// In guest page.
ipcRenderer.on('ping', function() {
	ipcRenderer.sendToHost('pong');
});
