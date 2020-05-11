// Type definitions for electron-window-state 2.0.0
// Project: https://github.com/mawie81/electron-window-state
// Definitions by: rhysd <https://github.com/rhysd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="electron" />

/*
 * Load the previous state with fallback to defaults
 */
declare function windowStateKeeper(opts: ElectronWindowState.WindowStateKeeperOptions): ElectronWindowState.WindowState;
export = windowStateKeeper;

declare namespace ElectronWindowState {
	interface WindowState {
		/*
		 * The saved x coordinate of the loaded state.
		 * undefined if the state has not been saved yet.
		 */
		x: number;
		/*
		 * The saved y coordinate of the loaded state.
		 * undefined if the state has not been saved yet.
		 */
		y: number;
		/*
		 * The saved width of loaded state.
		 * defaultWidth if the state has not been saved yet.
		 */
		width: number;
		/*
		 * The saved heigth of loaded state.
		 * defaultHeight if the state has not been saved yet.
		 */
		height: number;
		/*
		 * true if the window state was saved while the the window was maximized.
		 * undefined if the state has not been saved yet.
		 */
		isMaximized: boolean;
		/*
		 * true if the window state was saved while the the window was in full screen
		 * mode. undefined if the state has not been saved yet.
		 */
		isFullScreen: boolean;
		/*
		 * Register listeners on the given BrowserWindow for events that are related
		 * to size or position changes (resize, move).
		 * It will also restore the window's maximized or full screen state.
		 * When the window is closed we automatically remove the listeners and save the state.
		 */
		manage(win: Electron.BrowserWindow): void;
		/*
		 * Saves the current state of the given BrowserWindow.
		 * This exists mostly for legacy purposes, and in most cases it's better to just use manage.
		 */
		saveState(win: Electron.BrowserWindow): void;
	}
	interface WindowStateKeeperOptions {
		/*
		 * The width that should be returned if no file exists yet. Defaults to 800.
		 */
		defaultWidth?: number;
		/*
		 * The height that should be returned if no file exists yet. Defaults to 600.
		 */
		defaultHeight?: number;
		/*
		 * The path where the state file should be written to.
		 * Defaults to app.getPath('userData')
		 */
		path?: string;
		/*
		 * The name of file. Defaults to window-state.json
		 */
		file?: string;
		/*
		 * Should we automatically maximize the window,
		 * if it was last closed maximized. Defaults to true
		 */
		maximize?: boolean;
		/*
		 * Should we automatically restore the window to full screen,
		 * if it was last closed full screen. Defaults to true
		 */
		fullScreen?: boolean;
	}
}
