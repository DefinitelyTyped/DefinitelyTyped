/// <reference path="./github-electron-main.d.ts" />
import app = require('app');
import AutoUpdater = require('auto-updater');
import BrowserWindow = require('browser-window');
import ContentTracing = require('content-tracing');
import Dialog = require('dialog');
import GlobalShortcut = require('global-shortcut');
import ipc = require('ipc');
import Menu = require('menu');
import MenuItem = require('menu-item');
import PowerMonitor = require('power-monitor');
import Protocol = require('protocol');
import Tray = require('tray');
import Clipboard = require('clipboard');
import CrashReporter = require('crash-reporter');
import NativeImage = require('native-image');
import Screen = require('screen');
import Shell = require('shell');

import path = require('path');

// Quick start
// https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow: GitHubElectron.BrowserWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin')
		app.quit();
});

// Check single instance app
var shouldQuit = app.makeSingleInstance(function(commandLine, workingDirectory) {
  // Someone tried to run a second instance, we should focus our window
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
  return true;
});

if (shouldQuit) {
  app.quit();
  process.exit(0);
}

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', () => {
	// Create the browser window.
	mainWindow = new BrowserWindow({ width: 800, height: 600 });

	// and load the index.html of the app.
	mainWindow.loadUrl(`file://${__dirname}/index.html`);
	mainWindow.loadUrl('file://foo/bar', {userAgent: 'cool-agent', httpReferrer: 'greateRefferer'});
	mainWindow.webContents.loadUrl('file://foo/bar', {userAgent: 'cool-agent', httpReferrer: 'greateRefferer'});

	mainWindow.openDevTools()
	var opened: boolean = mainWindow.isDevToolsOpened()
	mainWindow.toggleDevTools()
	// Emitted when the window is closed.
	mainWindow.on('closed', () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});

	mainWindow.print({silent: true, printBackground: false});
	mainWindow.webContents.print({silent: true, printBackground: false});
	mainWindow.print();
	mainWindow.webContents.print();

	mainWindow.print({silent: true, printBackground: false});
	mainWindow.webContents.print({silent: true, printBackground: false});
	mainWindow.print();
	mainWindow.webContents.print();

	mainWindow.printToPDF({
		marginsType: 1,
		pageSize: 'A3',
		printBackground: true,
		printSelectionOnly: true,
		landscape: true,
	}, (error: Error, data: Buffer) => {});

	mainWindow.webContents.printToPDF({
		marginsType: 1,
		pageSize: 'A3',
		printBackground: true,
		printSelectionOnly: true,
		landscape: true,
	}, (error: Error, data: Buffer) => {});

	mainWindow.printToPDF({}, (err, data) => {});
	mainWindow.webContents.printToPDF({}, (err, data) => {});
});

// Desktop environment integration
// https://github.com/atom/electron/blob/master/docs/tutorial/desktop-environment-integration.md

app.addRecentDocument('/Users/USERNAME/Desktop/work.type');
app.clearRecentDocuments();
var dockMenu = Menu.buildFromTemplate([
	<GitHubElectron.MenuItemOptions>{
		label: 'New Window',
		click: () => {
			console.log('New Window');
		}
	},
	<GitHubElectron.MenuItemOptions>{
		label: 'New Window with Settings',
		submenu: [
			<GitHubElectron.MenuItemOptions>{ label: 'Basic' },
			<GitHubElectron.MenuItemOptions>{ label: 'Pro' }
		]
	},
	<GitHubElectron.MenuItemOptions>{ label: 'New Command...' }
]);
app.dock.setMenu(dockMenu);

app.setUserTasks([
	<GitHubElectron.Task>{
		program: process.execPath,
		arguments: '--new-window',
		iconPath: process.execPath,
		iconIndex: 0,
		title: 'New Window',
		description: 'Create a new window'
	}
]);
app.setUserTasks([]);

var window = new BrowserWindow();
window.setProgressBar(0.5);
window.setRepresentedFilename('/etc/passwd');
window.setDocumentEdited(true);

// Online/Offline Event Detection
// https://github.com/atom/electron/blob/master/docs/tutorial/online-offline-events.md

var onlineStatusWindow: GitHubElectron.BrowserWindow;

app.on('ready', () => {
	onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false });
	onlineStatusWindow.loadUrl(`file://${__dirname}/online-status.html`);
});

ipc.on('online-status-changed', (event: any, status: any) => {
	console.log(status);
});

// Synopsis
// https://github.com/atom/electron/blob/master/docs/api/synopsis.md

app.on('ready', () => {
	window = new BrowserWindow({
		width: 800,
		height: 600, 
		'title-bar-style': 'hidden-inset',
	});
	window.loadUrl('https://github.com');
});

// Supported Chrome command line switches
// https://github.com/atom/electron/blob/master/docs/api/chrome-command-line-switches.md

app.commandLine.appendSwitch('remote-debugging-port', '8315');
app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');
app.commandLine.appendSwitch('v', -1);
app.commandLine.appendSwitch('vmodule', 'console=0');

// auto-updater
// https://github.com/atom/electron/blob/master/docs/api/auto-updater.md

AutoUpdater.setFeedUrl('http://mycompany.com/myapp/latest?version=' + app.getVersion());

// browser-window
// https://github.com/atom/electron/blob/master/docs/api/browser-window.md

var win = new BrowserWindow({ width: 800, height: 600, show: false });
win.on('closed', () => {
	win = null;
});

win.loadUrl('https://github.com');
win.show();

// content-tracing
// https://github.com/atom/electron/blob/master/docs/api/content-tracing.md

ContentTracing.startRecording('*', ContentTracing.DEFAULT_OPTIONS, () => {
	console.log('Tracing started');

	setTimeout(() => {
		ContentTracing.stopRecording('', path => {
			console.log('Tracing data recorded to ' + path);
		});
	}, 5000);
});

// dialog
// https://github.com/atom/electron/blob/master/docs/api/dialog.md

console.log(Dialog.showOpenDialog({
	properties: ['openFile', 'openDirectory', 'multiSelections']
}));

// global-shortcut
// https://github.com/atom/electron/blob/master/docs/api/global-shortcut.md

// Register a 'ctrl+x' shortcut listener.
var ret = GlobalShortcut.register('ctrl+x', () => {
	console.log('ctrl+x is pressed');
});
if (!ret)
	console.log('registerion fails');

// Check whether a shortcut is registered.
console.log(GlobalShortcut.isRegistered('ctrl+x'));

// Unregister a shortcut.
GlobalShortcut.unregister('ctrl+x');

// Unregister all shortcuts.
GlobalShortcut.unregisterAll();

// ipc
// https://github.com/atom/electron/blob/master/docs/api/ipc-main-process.md

ipc.on('asynchronous-message', (event: any, arg: any) => {
	console.log(arg);  // prints "ping"
	event.sender.send('asynchronous-reply', 'pong');
});

ipc.on('synchronous-message', (event: any, arg: any) => {
	console.log(arg);  // prints "ping"
	event.returnValue = 'pong';
});

// menu
// https://github.com/atom/electron/blob/master/docs/api/menu.md

var menu = new Menu();
menu.append(new MenuItem({ label: 'MenuItem1', click: () => { console.log('item 1 clicked'); } }));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));

// main.js
var template = [
	{
		label: 'Electron',
		submenu: [
			{
				label: 'About Electron',
				selector: 'orderFrontStandardAboutPanel:'
			},
			{
				type: 'separator'
			},
			{
				label: 'Services',
				submenu: <any[]>[]
			},
			{
				type: 'separator'
			},
			{
				label: 'Hide Electron',
				accelerator: 'Command+H',
				selector: 'hide:'
			},
			{
				label: 'Hide Others',
				accelerator: 'Command+Shift+H',
				selector: 'hideOtherApplications:'
			},
			{
				label: 'Show All',
				selector: 'unhideAllApplications:'
			},
			{
				type: 'separator'
			},
			{
				label: 'Quit',
				accelerator: 'Command+Q',
				click: () => { app.quit(); }
			}
		]
	},
	{
		label: 'Edit',
		submenu: [
			{
				label: 'Undo',
				accelerator: 'Command+Z',
				selector: 'undo:'
			},
			{
				label: 'Redo',
				accelerator: 'Shift+Command+Z',
				selector: 'redo:'
			},
			{
				type: 'separator'
			},
			{
				label: 'Cut',
				accelerator: 'Command+X',
				selector: 'cut:'
			},
			{
				label: 'Copy',
				accelerator: 'Command+C',
				selector: 'copy:'
			},
			{
				label: 'Paste',
				accelerator: 'Command+V',
				selector: 'paste:'
			},
			{
				label: 'Select All',
				accelerator: 'Command+A',
				selector: 'selectAll:'
			}
		]
	},
	{
		label: 'View',
		submenu: [
			{
				label: 'Reload',
				accelerator: 'Command+R',
				click: () => { BrowserWindow.getFocusedWindow().reloadIgnoringCache(); }
			},
			{
				label: 'Toggle DevTools',
				accelerator: 'Alt+Command+I',
				click: () => { BrowserWindow.getFocusedWindow().toggleDevTools(); }
			}
		]
	},
	{
		label: 'Window',
		submenu: [
			{
				label: 'Minimize',
				accelerator: 'Command+M',
				selector: 'performMiniaturize:'
			},
			{
				label: 'Close',
				accelerator: 'Command+W',
				selector: 'performClose:'
			},
			{
				type: 'separator'
			},
			{
				label: 'Bring All to Front',
				selector: 'arrangeInFront:'
			}
		]
	},
	{
		label: 'Help',
		submenu: []
	}
];

menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu); // Must be called within app.on('ready', function(){ ... });

Menu.buildFromTemplate([
	{ label: '4', id: '4' },
	{ label: '5', id: '5' },
	{ label: '1', id: '1', position: 'before=4' },
	{ label: '2', id: '2' },
	{ label: '3', id: '3' }
]);

Menu.buildFromTemplate([
	{ label: 'a', position: 'endof=letters' },
	{ label: '1', position: 'endof=numbers' },
	{ label: 'b', position: 'endof=letters' },
	{ label: '2', position: 'endof=numbers' },
	{ label: 'c', position: 'endof=letters' },
	{ label: '3', position: 'endof=numbers' }
]);

// power-monitor
// https://github.com/atom/electron/blob/master/docs/api/power-monitor.md

app.on('ready', () => {
	PowerMonitor.on('suspend', () => {
		console.log('The system is going to sleep');
	});
});

// protocol
// https://github.com/atom/electron/blob/master/docs/api/protocol.md

app.on('ready', () => {
	Protocol.registerProtocol('atom', (request: any) => {
		var url = request.url.substr(7);
		return new Protocol.RequestFileJob(path.normalize(`${__dirname}/${url}`));
	});
});

// tray
// https://github.com/atom/electron/blob/master/docs/api/tray.md

var appIcon: GitHubElectron.Tray = null;
app.on('ready', () => {
	appIcon = new Tray('/path/to/my/icon');
	var contextMenu = Menu.buildFromTemplate([
		{ label: 'Item1', type: 'radio' },
		{ label: 'Item2', type: 'radio' },
		{ label: 'Item3', type: 'radio', checked: true },
		{ label: 'Item4', type: 'radio' },
	]);
	appIcon.setToolTip('This is my application.');
	appIcon.setContextMenu(contextMenu);
	appIcon.setImage('/path/to/new/icon');
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

var appIcon2 = new Tray('/Users/somebody/images/icon.png');
var window2 = new BrowserWindow({ icon: '/Users/somebody/images/window.png' });
var image = Clipboard.readImage();
var appIcon3 = new Tray(image);
var appIcon4 = new Tray('/Users/somebody/images/icon.png');

// screen
// https://github.com/atom/electron/blob/master/docs/api/screen.md

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
