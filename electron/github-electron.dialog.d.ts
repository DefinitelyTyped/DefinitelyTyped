// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.browser-window.d.ts" />
/// <reference path="github-electron.native-image.d.ts" />

declare namespace Electron {
	/**
	 * The dialog module provides APIs to show native system dialogs, such as opening files or alerting,
	 * so web applications can deliver the same user experience as native applications.
	 */
	interface Dialog {
		/**
		 * Note: On Windows and Linux an open dialog can not be both a file selector and a directory selector,
		 * so if you set properties to ['openFile', 'openDirectory'] on these platforms, a directory selector will be shown.
		 *
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns On success, returns an array of file paths chosen by the user,
		 * otherwise returns undefined.
		 */
		showOpenDialog(browserWindow: BrowserWindow, options: OpenDialogOptions, callback?: (fileNames: string[]) => void): string[];
		/**
		 * Note: On Windows and Linux an open dialog can not be both a file selector and a directory selector,
		 * so if you set properties to ['openFile', 'openDirectory'] on these platforms, a directory selector will be shown.
		 *
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns On success, returns an array of file paths chosen by the user,
		 * otherwise returns undefined.
		 */
		showOpenDialog(options: OpenDialogOptions, callback?: (fileNames: string[]) => void): string[];
		/**
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns On success, returns the path of file chosen by the user, otherwise
		 * returns undefined.
		 */
		showSaveDialog(browserWindow: BrowserWindow, options: SaveDialogOptions, callback?: (fileName: string) => void): string;
		/**
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns On success, returns the path of file chosen by the user, otherwise
		 * returns undefined.
		 */
		showSaveDialog(options: SaveDialogOptions, callback?: (fileName: string) => void): string;
		/**
		 * Shows a message box. It will block until the message box is closed.
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns The index of the clicked button.
		 */
		showMessageBox(browserWindow: BrowserWindow, options: ShowMessageBoxOptions, callback?: (response: any) => void): number;
		/**
		 * Shows a message box. It will block until the message box is closed.
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns The index of the clicked button.
		 */
		showMessageBox(options: ShowMessageBoxOptions, callback?: (response: any) => void): number;
		/**
		 * Displays a modal dialog that shows an error message.
		 *
		 * This API can be called safely before the ready event the app module emits,
		 * it is usually used to report errors in early stage of startup.
		 * If called before the app readyevent on Linux, the message will be emitted to stderr,
		 * and no GUI dialog will appear.
		 */
		showErrorBox(title: string, content: string): void;
	}

	interface OpenDialogOptions {
		title?: string;
		defaultPath?: string;
		/**
		 * File types that can be displayed or selected.
		 */
		filters?: {
			name: string;
			/**
			 * Extensions without wildcards or dots (e.g. 'png' is good but '.png' and '*.png' are bad).
			 * To show all files, use the '*' wildcard (no other wildcard is supported).
			 */
			extensions: string[];
		}[];
		/**
		 * Contains which features the dialog should use.
		 */
		properties?: ('openFile' | 'openDirectory' | 'multiSelections' | 'createDirectory')[];
	}

	interface SaveDialogOptions {
		title?: string;
		defaultPath?: string;
		/**
		 * File types that can be displayed, see dialog.showOpenDialog for an example.
		 */
		filters?: {
			name: string;
			extensions: string[];
		}[];
	}

	interface ShowMessageBoxOptions {
		/**
		 * On Windows, "question" displays the same icon as "info", unless you set an icon using the "icon" option.
		 */
		type?: 'none' | 'info' | 'error' | 'question' | 'warning';
		/**
		 * Texts for buttons.
		 */
		buttons?: string[];
		/**
		 * Index of the button in the buttons array which will be selected by default when the message box opens.
		 */
		defaultId?: number;
		/**
		 * Title of the message box (some platforms will not show it).
		 */
		title?: string;
		/**
		 * Contents of the message box.
		 */
		message?: string;
		/**
		 * Extra information of the message.
		 */
		detail?: string;
		icon?: NativeImage;
		/**
		 * The value will be returned when user cancels the dialog instead of clicking the buttons of the dialog.
		 * By default it is the index of the buttons that have "cancel" or "no" as label,
		 * or 0 if there is no such buttons. On OS X and Windows the index of "Cancel" button
		 * will always be used as cancelId, not matter whether it is already specified.
		 */
		cancelId?: number;
		/**
		 * On Windows Electron will try to figure out which one of the buttons are common buttons
		 * (like "Cancel" or "Yes"), and show the others as command links in the dialog.
		 * This can make the dialog appear in the style of modern Windows apps.
		 * If you don’t like this behavior, you can set noLink to true.
		 */
		noLink?: boolean;
	}
}
