// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.browser-window.d.ts" />
/// <reference path="github-electron.native-image.d.ts" />

declare namespace Electron {

	interface Dialog {
		/**
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns On success, returns an array of file paths chosen by the user,
		 * otherwise returns undefined.
		 */
		showOpenDialog: typeof Electron.Dialog.showOpenDialog;
		/**
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns On success, returns the path of file chosen by the user, otherwise
		 * returns undefined.
		 */
		showSaveDialog: typeof Electron.Dialog.showSaveDialog;
		/**
		 * Shows a message box. It will block until the message box is closed. It returns .
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns The index of the clicked button.
		 */
		showMessageBox: typeof Electron.Dialog.showMessageBox;
		/**
		 * Runs a modal dialog that shows an error message. This API can be called safely
		 * before the ready event of app module emits, it is usually used to report errors
		 * in early stage of startup.
		 */
		showErrorBox(title: string, content: string): void;
	}

	namespace Dialog {
		/**
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns On success, returns an array of file paths chosen by the user,
		 * otherwise returns undefined.
		 */
		export function showOpenDialog(
			browserWindow?: BrowserWindow,
			options?: OpenDialogOptions,
			callback?: (fileNames: string[]) => void
			): string[];
		export function showOpenDialog(
			options?: OpenDialogOptions,
			callback?: (fileNames: string[]) => void
			): string[];

		interface OpenDialogOptions {
			title?: string;
			defaultPath?: string;
			/**
			 * File types that can be displayed or selected.
			 */
			filters?: {
				name: string;
				extensions: string[];
			}[];
			/**
			 * Contains which features the dialog should use, can contain openFile,
			 * openDirectory, multiSelections and createDirectory
			 */
			properties?: string|string[];
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

		/**
		 * @param browserWindow
		 * @param options
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns On success, returns the path of file chosen by the user, otherwise
		 * returns undefined.
		 */
		export function showSaveDialog(browserWindow?: BrowserWindow, options?: SaveDialogOptions, callback?: (fileName: string) => void): string;

		/**
		 * Shows a message box. It will block until the message box is closed. It returns .
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns The index of the clicked button.
		 */
		export function showMessageBox(
			browserWindow?: BrowserWindow,
			options?: ShowMessageBoxOptions,
			callback?: (response: any) => void
			): number;
		export function showMessageBox(
			options: ShowMessageBoxOptions,
			callback?: (response: any) => void
			): number;

		export interface ShowMessageBoxOptions {
			/**
			 * Can be "none", "info" or "warning".
			 */
			type?: string;
			/**
			 * Texts for buttons.
			 */
			buttons?: string[];
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
			noLink?: boolean;
			cancelId?: number;
		}
	}
}
