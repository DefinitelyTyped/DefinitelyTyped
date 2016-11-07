/// <reference path="./github-electron.d.ts" />
import {
	app,
	autoUpdater,
	BrowserWindow,
	contentTracing,
	dialog,
	globalShortcut,
	ipcMain,
	Menu,
	MenuItem,
	powerMonitor,
	powerSaveBlocker,
	protocol,
	Tray,
	clipboard,
	crashReporter,
	nativeImage,
	screen,
	shell,
	session,
	systemPreferences,
	webContents
} from 'electron';

import * as path from 'path';

// Quick start
// https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow: Electron.BrowserWindow = null;

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
	mainWindow.loadURL(`file://${__dirname}/index.html`);
	mainWindow.loadURL('file://foo/bar', {userAgent: 'cool-agent', httpReferrer: 'greateRefferer'});
	mainWindow.webContents.loadURL('file://foo/bar', {userAgent: 'cool-agent', httpReferrer: 'greateRefferer'});

	mainWindow.webContents.openDevTools();
	mainWindow.webContents.toggleDevTools();
	mainWindow.webContents.openDevTools({mode: 'detach'});
	mainWindow.webContents.closeDevTools();
	mainWindow.webContents.addWorkSpace('/path/to/workspace');
	mainWindow.webContents.removeWorkSpace('/path/to/workspace');
	var opened: boolean = mainWindow.webContents.isDevToolsOpened()
	var focused = mainWindow.webContents.isDevToolsFocused();
	// Emitted when the window is closed.
	mainWindow.on('closed', () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});

	mainWindow.webContents.print({silent: true, printBackground: false});
	mainWindow.webContents.print();

	mainWindow.webContents.printToPDF({
		marginsType: 1,
		pageSize: 'A3',
		printBackground: true,
		printSelectionOnly: true,
		landscape: true,
	}, (error: Error, data: Buffer) => {});

	mainWindow.webContents.printToPDF({}, (err, data) => {});

	mainWindow.webContents.executeJavaScript('return true;');
	mainWindow.webContents.executeJavaScript('return true;', true);
	mainWindow.webContents.executeJavaScript('return true;', true, (result: boolean) => console.log(result));
	mainWindow.webContents.insertText('blah, blah, blah');
	mainWindow.webContents.startDrag({file: '/path/to/img.png', icon: nativeImage.createFromPath('/path/to/icon.png')});
	mainWindow.webContents.findInPage('blah');
	mainWindow.webContents.findInPage('blah', {
		forward: true,
		matchCase: false,
	});
	mainWindow.webContents.stopFindInPage('clearSelection');
	mainWindow.webContents.stopFindInPage('keepSelection');
	mainWindow.webContents.stopFindInPage('activateSelection');

	mainWindow.loadURL('https://github.com');

	mainWindow.webContents.on('did-finish-load', function() {
		mainWindow.webContents.savePage('/tmp/test.html', 'HTMLComplete', function(error) {
		if (!error)
			console.log("Save page successfully");
		});
	});

	try {
		mainWindow.webContents.debugger.attach("1.1");
	} catch(err) {
		console.log("Debugger attach failed : ", err);
	};

	mainWindow.webContents.debugger.on('detach', function(event, reason) {
		console.log("Debugger detached due to : ", reason);
	});

	mainWindow.webContents.debugger.on('message', function(event, method, params) {
		if (method == "Network.requestWillBeSent") {
			if (params.request.url == "https://www.github.com") {
				win.webContents.debugger.detach();
			}
		}
	});

	mainWindow.webContents.debugger.sendCommand("Network.enable");
	mainWindow.webContents.capturePage(image => {
		console.log(image.toDataURL());
	});
	mainWindow.webContents.capturePage({x: 0, y: 0, width: 100, height: 200}, image => {
		console.log(image.toPNG());
	});
});

app.commandLine.appendSwitch('enable-web-bluetooth');

app.on('ready', () => {
	mainWindow.webContents.on('select-bluetooth-device', (event, deviceList, callback) => {
		event.preventDefault();

		let result = (() => {
			for (let device of deviceList) {
				if (device.deviceName === 'test') {
					return device;
				}
			}
			return null;
		})();

		if (!result) {
			callback('');
		} else {
			callback(result.deviceId);
		}
	});
});

// Locale
app.getLocale();

// Desktop environment integration
// https://github.com/atom/electron/blob/master/docs/tutorial/desktop-environment-integration.md

app.addRecentDocument('/Users/USERNAME/Desktop/work.type');
app.clearRecentDocuments();
var dockMenu = Menu.buildFromTemplate([
	<Electron.MenuItemOptions>{
		label: 'New Window',
		click: () => {
			console.log('New Window');
		}
	},
	<Electron.MenuItemOptions>{
		label: 'New Window with Settings',
		submenu: [
			<Electron.MenuItemOptions>{ label: 'Basic' },
			<Electron.MenuItemOptions>{ label: 'Pro' }
		]
	},
	<Electron.MenuItemOptions>{ label: 'New Command...' },
	<Electron.MenuItemOptions>{
		label: 'Edit',
		submenu: [
			{
				label: 'Undo',
				accelerator: 'CmdOrCtrl+Z',
				role: 'undo'
			},
			{
				label: 'Redo',
				accelerator: 'Shift+CmdOrCtrl+Z',
				role: 'redo'
			},
			{
				type: 'separator'
			},
			{
				label: 'Cut',
				accelerator: 'CmdOrCtrl+X',
				role: 'cut'
			},
			{
				label: 'Copy',
				accelerator: 'CmdOrCtrl+C',
				role: 'copy'
			},
			{
				label: 'Paste',
				accelerator: 'CmdOrCtrl+V',
				role: 'paste'
			},
		]
	},
]);
app.dock.setMenu(dockMenu);
app.dock.setBadge('foo');
var id = app.dock.bounce('informational');
app.dock.cancelBounce(id);
app.dock.setIcon('/path/to/icon.png');
app.dock.setBadgeCount(app.dock.getBadgeCount() + 1);

app.setUserTasks([
	<Electron.Task>{
		program: process.execPath,
		arguments: '--new-window',
		iconPath: process.execPath,
		iconIndex: 0,
		title: 'New Window',
		description: 'Create a new window'
	}
]);
app.setUserTasks([]);

app.setJumpList([
	{
		type: 'custom',
		name: 'Recent Projects',
		items: [
			{ type: 'file', path: 'C:\\Projects\\project1.proj' },
			{ type: 'file', path: 'C:\\Projects\\project2.proj' }
		]
	},
	{ // has a name so type is assumed to be "custom"
		name: 'Tools',
		items: [
		{
			type: 'task',
			title: 'Tool A',
			program: process.execPath,
			args: '--run-tool-a',
			iconPath: process.execPath,
			iconIndex: 0,
			description: 'Runs Tool A'
		},
		{
			type: 'task',
			title: 'Tool B',
			program: process.execPath,
			args: '--run-tool-b',
			iconPath: process.execPath,
			iconIndex: 0,
			description: 'Runs Tool B'
		}]
	},
	{
		type: 'frequent'
	},
	{ // has no name and no type so type is assumed to be "tasks"
		items: [
		{
			type: 'task',
			title: 'New Project',
			program: process.execPath,
			args: '--new-project',
			description: 'Create a new project.'
		},
		{
			type: 'separator'
		},
		{
			type: 'task',
			title: 'Recover Project',
			program: process.execPath,
			args: '--recover-project',
			description: 'Recover Project'
		}]
	}
]);

if (app.isUnityRunning()) {
}
if (app.isAccessibilitySupportEnabled()) {
}
app.setLoginItemSettings({openAtLogin: true, openAsHidden: false});
console.log(app.getLoginItemSettings().wasOpenedAtLogin);
app.setAboutPanelOptions({
	applicationName: 'Test',
	version: '1.2.3'
});

var window = new BrowserWindow();
window.setProgressBar(0.5);
window.setRepresentedFilename('/etc/passwd');
window.setDocumentEdited(true);

// Online/Offline Event Detection
// https://github.com/atom/electron/blob/master/docs/tutorial/online-offline-events.md

var onlineStatusWindow: Electron.BrowserWindow;

app.on('ready', () => {
	onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false });
	onlineStatusWindow.loadURL(`file://${__dirname}/online-status.html`);
});
app.on('accessibility-support-changed', (_, enabled) => console.log('accessibility: ' + enabled));

ipcMain.on('online-status-changed', (event: any, status: any) => {
	console.log(status);
});

// Synopsis
// https://github.com/atom/electron/blob/master/docs/api/synopsis.md

app.on('ready', () => {
	window = new BrowserWindow({
		width: 800,
		height: 600,
		titleBarStyle: 'hidden-inset',
	});
	window.loadURL('https://github.com');
});

// Supported Chrome command line switches
// https://github.com/atom/electron/blob/master/docs/api/chrome-command-line-switches.md

app.commandLine.appendSwitch('remote-debugging-port', '8315');
app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');
app.commandLine.appendSwitch('vmodule', 'console=0');

// systemPreferences
// https://github.com/electron/electron/blob/master/docs/api/system-preferences.md

var browserOptions = {
	width: 1000,
	height: 800,
	transparent: false,
	frame: true
};

// Make the window transparent only if the platform supports it.
if (process.platform !== 'win32' || systemPreferences.isAeroGlassEnabled()) {
	browserOptions.transparent = true;
	browserOptions.frame = false;
}

if (process.platform === 'win32') {
	systemPreferences.on('color-changed', () => { console.log('color changed'); });
	systemPreferences.on('inverted-color-scheme-changed', (_, inverted) => console.log(inverted ? 'inverted' : 'not inverted'));
	console.log('Color for menu is', systemPreferences.getColor('menu'));
}

// Create the window.
var win = new BrowserWindow(browserOptions);

// Navigate.
if (browserOptions.transparent) {
	win.loadURL('file://' + __dirname + '/index.html');
} else {
  	// No transparency, so we load a fallback that uses basic styles.
  	win.loadURL('file://' + __dirname + '/fallback.html');
}

// app
// https://github.com/atom/electron/blob/master/docs/api/app.md

app.on('certificate-error', function(event, webContents, url, error, certificate, callback) {
	if (url == "https://github.com") {
		// Verification logic.
		event.preventDefault();
		callback(true);
	} else {
		callback(false);
	}
});

app.on('select-client-certificate', function(event, webContents, url, list, callback) {
	event.preventDefault();
	callback(list[0]);
});

app.on('login', function(event, webContents, request, authInfo, callback) {
	event.preventDefault();
	callback('username', 'secret');
});

var win = new BrowserWindow({show: false})
win.once('ready-to-show', () => {
	win.show();
});

app.relaunch({args: process.argv.slice(1).concat(['--relaunch'])});
app.exit(0);

// auto-updater
// https://github.com/atom/electron/blob/master/docs/api/auto-updater.md

autoUpdater.setFeedURL('http://mycompany.com/myapp/latest?version=' + app.getVersion());
autoUpdater.checkForUpdates();
autoUpdater.quitAndInstall();

autoUpdater.on('error', (error) => {
	console.log('error', error);
});

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName, releaseDate, updateURL) => {
	console.log('update-downloaded', releaseNotes, releaseName, releaseDate, updateURL);
});

// browser-window
// https://github.com/atom/electron/blob/master/docs/api/browser-window.md

var win = new BrowserWindow({ width: 800, height: 600, show: false });
win.on('closed', () => {
	win = null;
});

win.loadURL('https://github.com');
win.show();

var toolbarRect = document.getElementById('toolbar').getBoundingClientRect();
win.setSheetOffset(toolbarRect.height);

var installed = BrowserWindow.getDevToolsExtensions().hasOwnProperty('devtron');

// content-tracing
// https://github.com/atom/electron/blob/master/docs/api/content-tracing.md

const options = {
	categoryFilter: '*',
	traceOptions: 'record-until-full,enable-sampling'
}

contentTracing.startRecording(options, function() {
	console.log('Tracing started');
	setTimeout(function() {
		contentTracing.stopRecording('', function(path) {
			console.log('Tracing data recorded to ' + path);
		});
	}, 5000);
});

// dialog
// https://github.com/atom/electron/blob/master/docs/api/dialog.md

// variant without browserWindow
var openDialogResult: string[] = dialog.showOpenDialog({
  title: 'Testing showOpenDialog',
  defaultPath: '/var/log/syslog',
  filters: [{name: '', extensions: ['']}],
	properties: ['openFile', 'openDirectory', 'multiSelections']
});

// variant with browserWindow
openDialogResult = dialog.showOpenDialog(win, {
  title: 'Testing showOpenDialog',
  defaultPath: '/var/log/syslog',
  filters: [{name: '', extensions: ['']}],
	properties: ['openFile', 'openDirectory', 'multiSelections']
});

// global-shortcut
// https://github.com/atom/electron/blob/master/docs/api/global-shortcut.md

// Register a 'ctrl+x' shortcut listener.
var ret = globalShortcut.register('ctrl+x', () => {
	console.log('ctrl+x is pressed');
});
if (!ret)
	console.log('registerion fails');

// Check whether a shortcut is registered.
console.log(globalShortcut.isRegistered('ctrl+x'));

// Unregister a shortcut.
globalShortcut.unregister('ctrl+x');

// Unregister all shortcuts.
globalShortcut.unregisterAll();

// ipcMain
// https://github.com/atom/electron/blob/master/docs/api/ipc-main-process.md

ipcMain.on('asynchronous-message', (event: Electron.IpcMainEvent, arg: any) => {
	console.log(arg);  // prints "ping"
	event.sender.send('asynchronous-reply', 'pong');
});

ipcMain.on('synchronous-message', (event: Electron.IpcMainEvent, arg: any) => {
	console.log(arg);  // prints "ping"
	event.returnValue = 'pong';
});

var winWindows = new BrowserWindow({
	width: 800,
	height: 600,
	show: false,
	thickFrame: false,
	type: 'toolbar',
});

// menu-item
// https://github.com/atom/electron/blob/master/docs/api/menu-item.md

var menuItem = new MenuItem({});

menuItem.label = 'Hello World!';
menuItem.click = (menuItem, browserWindow) => {
	console.log('click', menuItem, browserWindow);
};

// menu
// https://github.com/atom/electron/blob/master/docs/api/menu.md

var menu = new Menu();
menu.append(new MenuItem({ label: 'MenuItem1', click: () => { console.log('item 1 clicked'); } }));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));
menu.insert(0, menuItem);

console.log(menu.items);

var pos = screen.getCursorScreenPoint();
menu.popup(null, pos.x, pos.y);

// main.js
var template = <Electron.MenuItemOptions[]>[
	{
		label: 'Electron',
		submenu: [
			{
				label: 'About Electron',
				role: 'about'
			},
			{
				type: 'separator'
			},
			{
				label: 'Services',
				role: 'services',
				submenu: []
			},
			{
				type: 'separator'
			},
			{
				label: 'Hide Electron',
				accelerator: 'Command+H',
				role: 'hide'
			},
			{
				label: 'Hide Others',
				accelerator: 'Command+Shift+H',
				role: 'hideothers'
			},
			{
				label: 'Show All',
				role: 'unhide'
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
				role: 'undo'
			},
			{
				label: 'Redo',
				accelerator: 'Shift+Command+Z',
				role: 'redo'
			},
			{
				type: 'separator'
			},
			{
				label: 'Cut',
				accelerator: 'Command+X',
				role: 'cut'
			},
			{
				label: 'Copy',
				accelerator: 'Command+C',
				role: 'copy'
			},
			{
				label: 'Paste',
				accelerator: 'Command+V',
				role: 'paste'
			},
			{
				label: 'Select All',
				accelerator: 'Command+A',
				role: 'selectall'
			}
		]
	},
	{
		label: 'View',
		submenu: [
			{
				label: 'Reload',
				accelerator: 'Command+R',
				click: (item, focusedWindow) => {
					if (focusedWindow) {
						focusedWindow.webContents.reloadIgnoringCache();
					}
				}
			},
			{
				label: 'Toggle DevTools',
				accelerator: 'Alt+Command+I',
				click: (item, focusedWindow) => {
					if (focusedWindow) {
						focusedWindow.webContents.toggleDevTools();
					}
				}
			},
			{
				type: 'separator'
			},
			{
				label: 'Actual Size',
				accelerator: 'CmdOrCtrl+0',
				click: (item, focusedWindow) => {
					if (focusedWindow) {
						focusedWindow.webContents.setZoomLevel(0)
					}
				}
			},
			{
				label: 'Zoom In',
				accelerator: 'CmdOrCtrl+Plus',
				click: (item, focusedWindow) => {
					if (focusedWindow) {
						const { webContents } = focusedWindow;
						webContents.getZoomLevel((zoomLevel) => {
							webContents.setZoomLevel(zoomLevel + 0.5)
						});
					}
				}
			},
			{
				label: 'Zoom Out',
				accelerator: 'CmdOrCtrl+-',
				click: (item, focusedWindow) => {
					if (focusedWindow) {
						const { webContents } = focusedWindow;
						webContents.getZoomLevel((zoomLevel) => {
							webContents.setZoomLevel(zoomLevel - 0.5)
						});
					}
				}
			}
		]
	},
	{
		label: 'Window',
		submenu: [
			{
				label: 'Minimize',
				accelerator: 'Command+M',
				role: 'minimize'
			},
			{
				label: 'Close',
				accelerator: 'Command+W',
				role: 'close'
			},
			{
				type: 'separator'
			},
			{
				label: 'Bring All to Front',
				role: 'front'
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
	powerMonitor.on('suspend', () => {
		console.log('The system is going to sleep');
	});
	powerMonitor.on('resume', () => {
		console.log('The system has resumed from sleep');
	});
	powerMonitor.on('on-ac', () => {
		console.log('The system changed to AC power')
	});
	powerMonitor.on('on-battery', () => {
		console.log('The system changed to battery power');
	});
});

// power-save-blocker
// https://github.com/atom/electron/blob/master/docs/api/power-save-blocker.md

var id = powerSaveBlocker.start('prevent-display-sleep');
console.log(powerSaveBlocker.isStarted(id));

powerSaveBlocker.stop(id);

// protocol
// https://github.com/atom/electron/blob/master/docs/api/protocol.md

app.on('ready', () => {
	protocol.registerStandardSchemes(['https']);
	protocol.registerServiceWorkerSchemes(['https']);

	protocol.registerFileProtocol('atom', (request, callback) => {
		callback(`${__dirname}/${request.url}`);
	});

	protocol.registerBufferProtocol('atom', (request, callback) => {
		callback({mimeType: 'text/html', data: new Buffer('<h5>Response</h5>')});
	});

	protocol.registerStringProtocol('atom', (request, callback) => {
		callback('Hello World!');
	});

	protocol.registerHttpProtocol('atom', (request, callback) => {
		callback({url: request.url, method: request.method});
	});

	protocol.unregisterProtocol('atom', (error) => {
		console.log(error ? error.message : 'ok');
	});

	protocol.isProtocolHandled('atom', (handled) => {
		console.log(handled);
	});
});

// tray
// https://github.com/atom/electron/blob/master/docs/api/tray.md

var appIcon: Electron.Tray = null;
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
	appIcon.popUpContextMenu(contextMenu, {x: 100, y: 100});

	appIcon.on('click', (event, bounds) => {
		console.log('click', event, bounds);
	});

	appIcon.on('ballon-show', () => {
		console.log('ballon-show');
	});

	appIcon.displayBalloon({
		title: 'Hello World!'
	});
});

// clipboard
// https://github.com/atom/electron/blob/master/docs/api/clipboard.md

clipboard.writeText('Example String');
clipboard.writeText('Example String', 'selection');
clipboard.writeBookmark('foo', 'http://example.com');
clipboard.writeBookmark('foo', 'http://example.com', 'selection');
console.log(clipboard.readText('selection'));
console.log(clipboard.availableFormats());
console.log(clipboard.readBookmark().title);
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
	autoSubmit: true,
	extra: {
		someKey: "value"
	}
});

console.log(crashReporter.getLastCrashReport());
console.log(crashReporter.getUploadedReports());

// nativeImage
// https://github.com/atom/electron/blob/master/docs/api/native-image.md

var appIcon2 = new Tray('/Users/somebody/images/icon.png');
var window2 = new BrowserWindow({ icon: '/Users/somebody/images/window.png' });
var image = clipboard.readImage();
var appIcon3 = new Tray(image);
var appIcon4 = new Tray('/Users/somebody/images/icon.png');

let image2 = nativeImage.createFromPath('/Users/somebody/images/icon.png');

// process
// https://github.com/electron/electron/blob/master/docs/api/process.md

console.log(process.versions.electron);
console.log(process.versions.chrome);
console.log(process.type);
console.log(process.resourcesPath);
console.log(process.mas);
console.log(process.windowsStore);
process.noAsar = true;
process.crash();
process.hang();
process.setFdLimit(8192);

// screen
// https://github.com/atom/electron/blob/master/docs/api/screen.md

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

	screen.on('display-added', (event, display) => {
		console.log('display-added', display);
	});

	screen.on('display-removed', (event, display) => {
		console.log('display-removed', display);
	});

	screen.on('display-metrics-changed', (event, display, changes) => {
		console.log('display-metrics-changed', display, changes);
	});
});

// shell
// https://github.com/atom/electron/blob/master/docs/api/shell.md

shell.showItemInFolder('/home/user/Desktop/test.txt');
shell.openItem('/home/user/Desktop/test.txt');
shell.moveItemToTrash('/home/user/Desktop/test.txt');

shell.openExternal('https://github.com', {
	activate: false
});

shell.beep();

shell.writeShortcutLink('/home/user/Desktop/shortcut.lnk', 'update', shell.readShortcutLink('/home/user/Desktop/shortcut.lnk'));

// session
// https://github.com/atom/electron/blob/master/docs/api/session.md

session.defaultSession.on('will-download', (event, item, webContents) => {
	event.preventDefault();
	require('request')(item.getURL(), (data: any) => {
		require('fs').writeFileSync('/somewhere', data);
	});
});

// Query all cookies.
session.defaultSession.cookies.get({}, (error, cookies) => {
	console.log(cookies);
});

// Query all cookies associated with a specific url.
session.defaultSession.cookies.get({ url : "http://www.github.com" }, (error, cookies) => {
	console.log(cookies);
});

// Set a cookie with the given cookie data;
// may overwrite equivalent cookies if they exist.
var cookie = { url : "http://www.github.com", name : "dummy_name", value : "dummy" };
session.defaultSession.cookies.set(cookie, (error) => {
	if (error) {
		console.error(error);
	}
});

// In the main process.
session.defaultSession.on('will-download', (event, item, webContents) => {
	// Set the save path, making Electron not to prompt a save dialog.
	item.setSavePath('/tmp/save.pdf');
	console.log(item.getSavePath());
	console.log(item.getMimeType());
	console.log(item.getFilename());
	console.log(item.getTotalBytes());

	item.on('updated', (event, state) => {
		if (state === 'interrupted') {
			console.log('Download is interrupted but can be resumed');
		} else if (state === 'progressing') {
			if (item.isPaused()) {
				console.log('Download is paused');
			} else {
				console.log(`Received bytes: ${item.getReceivedBytes()}`);
			}
		}
	});

	item.on('done', function(e, state) {
		if (state == "completed") {
			console.log("Download successfully");
		} else {
			console.log(`Download failed: ${state}`)
		}
	});
});

// To emulate a GPRS connection with 50kbps throughput and 500 ms latency.
session.defaultSession.enableNetworkEmulation({
	latency: 500,
	downloadThroughput: 6400,
	uploadThroughput: 6400
});

// To emulate a network outage.
session.defaultSession.enableNetworkEmulation({
	offline: true
});

session.defaultSession.setCertificateVerifyProc((hostname, cert, callback) => {
	callback((hostname === 'github.com') ? true : false);
});

session.defaultSession.setPermissionRequestHandler(function(webContents, permission, callback) {
	if (webContents.getURL() === 'github.com') {
		if (permission == "notifications") {
			callback(false);
			return;
		}
	}

	callback(true);
});

// consider any url ending with `example.com`, `foobar.com`, `baz`
// for integrated authentication.
session.defaultSession.allowNTLMCredentialsForDomains('*example.com, *foobar.com, *baz')

// consider all urls for integrated authentication.
session.defaultSession.allowNTLMCredentialsForDomains('*')

// Modify the user agent for all requests to the following urls.
var filter = {
	urls: ["https://*.github.com/*", "*://electron.github.io"]
};

session.defaultSession.webRequest.onBeforeSendHeaders(filter, function(details, callback) {
	details.requestHeaders['User-Agent'] = "MyAgent";
	callback({cancel: false, requestHeaders: details.requestHeaders});
});

app.on('ready', function () {
	const protocol = session.defaultSession.protocol
	protocol.registerFileProtocol('atom', function (request, callback) {
		var url = request.url.substr(7);
		callback({path: path.normalize(__dirname + '/' + url)});
	}, function (error) {
		if (error) {
			console.error('Failed to register protocol');
		}
	})
});

// webContents
// https://github.com/electron/electron/blob/master/docs/api/web-contents.md

console.log(webContents.getAllWebContents());
console.log(webContents.getFocusedWebContents());

var win = new BrowserWindow({
	webPreferences: {
		offscreen: true
	}
});

win.webContents.on('paint', (event, dirty, image) => {
	console.log(dirty, image.getBitmap());
});

win.loadURL('http://github.com');
