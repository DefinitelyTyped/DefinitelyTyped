// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.event-emitter.d.ts" />
/// <reference path="github-electron.web-contents.d.ts" />

declare namespace Electron {
	/**
	 * The ipcMain module handles asynchronous and synchronous messages
	 * sent from a renderer process (web page).
	 * Messages sent from a renderer will be emitted to this module.
	 */
	class IpcMain extends EventEmitter {
		addListener(channel: string, listener: IpcMainEventListener): this;
		on(channel: string, listener: IpcMainEventListener): this;
		once(channel: string, listener: IpcMainEventListener): this;
		removeListener(channel: string, listener: IpcMainEventListener): this;
		removeAllListeners(channel?: string): this;
	}

	type IpcMainEventListener = (event: IpcMainEvent, ...args: any[]) => void;

	interface IpcMainEvent {
		/**
		 * Set this to the value to be returned in a synchronous message.
		 */
		returnValue?: any;
		/**
		 * Returns the webContents that sent the message, you can call sender.send
		 * to reply to the asynchronous message.
		 */
		sender: WebContents;
	}
}
