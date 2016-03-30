// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="github-electron.app.d.ts" />
/// <reference path="github-electron.auto-updater.d.ts" />
/// <reference path="github-electron.browser-window.d.ts" />
/// <reference path="github-electron.clipboard.d.ts" />
/// <reference path="github-electron.content-tracing.d.ts" />
/// <reference path="github-electron.crash-reporter.d.ts" />
/// <reference path="github-electron.desktop-capturer.d.ts" />
/// <reference path="github-electron.dialog.d.ts" />
/// <reference path="github-electron.dom.d.ts" />
/// <reference path="github-electron.event-emitter.d.ts" />
/// <reference path="github-electron.global-shortcut.d.ts" />
/// <reference path="github-electron.ipc-main.d.ts" />
/// <reference path="github-electron.ipc-renderer.d.ts" />
/// <reference path="github-electron.menu.d.ts" />
/// <reference path="github-electron.menu-item.d.ts" />
/// <reference path="github-electron.native-image.d.ts" />
/// <reference path="github-electron.power-monitor.d.ts" />
/// <reference path="github-electron.power-save-blocker.d.ts" />
/// <reference path="github-electron.protocol.d.ts" />
/// <reference path="github-electron.remote.d.ts" />
/// <reference path="github-electron.screen.d.ts" />
/// <reference path="github-electron.session.d.ts" />
/// <reference path="github-electron.shell.d.ts" />
/// <reference path="github-electron.tray.d.ts" />
/// <reference path="github-electron.web-contents.d.ts" />
/// <reference path="github-electron.web-frame.d.ts" />

declare namespace Electron {

	interface CommonElectron {
		clipboard: Electron.Clipboard;
		crashReporter: Electron.CrashReporter;
		nativeImage: typeof Electron.NativeImage;
		shell: Electron.Shell;

		app: Electron.App;
		autoUpdater: Electron.AutoUpdater;
		BrowserWindow: typeof Electron.BrowserWindow;
		contentTracing: Electron.ContentTracing;
		dialog: Electron.Dialog;
		ipcMain: Electron.IpcMain;
		globalShortcut: Electron.GlobalShortcut;
		Menu: typeof Electron.Menu;
		MenuItem: typeof Electron.MenuItem;
		powerMonitor: Electron.PowerMonitor;
		powerSaveBlocker: Electron.PowerSaveBlocker;
		protocol: Electron.Protocol;
		screen: Electron.Screen;
		session: typeof Electron.Session;
		Tray: typeof Electron.Tray;
		hideInternalModules(): void;
	}

	interface ElectronMainAndRenderer extends CommonElectron {
		desktopCapturer: Electron.DesktopCapturer;
		ipcRenderer: Electron.IpcRenderer;
		remote: Electron.Remote;
		webFrame: Electron.WebFrame;
	}
}

declare module 'electron' {
	var electron: Electron.ElectronMainAndRenderer;
	export = electron;
}

interface NodeRequireFunction {
	(moduleName: 'electron'): Electron.ElectronMainAndRenderer;
}
