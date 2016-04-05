// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.event-emitter.d.ts" />

declare namespace Electron {
	/**
	 * The ipcRenderer module provides a few methods so you can send synchronous
	 * and asynchronous messages from the render process (web page) to the main process.
	 * You can also receive replies from the main process.
	 */
	class IpcRenderer extends EventEmitter {
		addListener(channel: string, listener: IpcRendererEventListener): this;
		on(channel: string, listener: IpcRendererEventListener): this;
		once(channel: string, listener: IpcRendererEventListener): this;
		removeListener(channel: string, listener: IpcRendererEventListener): this;
		removeAllListeners(channel?: string): this;
		/**
		 * Send ...args to the renderer via channel in asynchronous message, the main
		 * process can handle it by listening to the channel event of ipc module.
		 */
		send(channel: string, ...args: any[]): void;
		/**
		 * Send ...args to the renderer via channel in synchronous message, and returns
		 * the result sent from main process. The main process can handle it by listening
		 * to the channel event of ipc module, and returns by setting event.returnValue.
		 * Note: Usually developers should never use this API, since sending synchronous
		 * message would block the whole renderer process.
		 * @returns The result sent from the main process.
		 */
		sendSync(channel: string, ...args: any[]): any;
		/**
		 * Like ipc.send but the message will be sent to the host page instead of the main process.
		 * This is mainly used by the page in <webview> to communicate with host page.
		 */
		sendToHost(channel: string, ...args: any[]): void;
	}

	type IpcRendererEventListener = (event: IpcRendererEvent, ...args: any[]) => void;

	interface IpcRendererEvent {
		/**
		 * You can call sender.send to reply to the asynchronous message.
		 */
		sender: IpcRenderer;
	}
}
