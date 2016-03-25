// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.event-emitter.d.ts" />
/// <reference path="github-electron.web-contents.d.ts" />

declare namespace Electron {

	class IpcMain extends EventEmitter {
		on(event: string, listener: (event: IpcMainEvent, ...args: any[]) => any): this;
	}

	interface IpcMainEvent {
		returnValue?: any;
		sender: WebContents;
	}
}
