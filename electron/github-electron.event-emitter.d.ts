// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare namespace Electron {
	class EventEmitter implements NodeJS.EventEmitter {
		addListener(event: string, listener: Function): this;
		on(event: string, listener: Function): this;
		once(event: string, listener: Function): this;
		removeListener(event: string, listener: Function): this;
		removeAllListeners(event?: string): this;
		setMaxListeners(n: number): this;
		getMaxListeners(): number;
		listeners(event: string): Function[];
		emit(event: string, ...args: any[]): boolean;
		listenerCount(type: string): number;
	}

	interface Event {
		preventDefault: Function;
		sender: EventEmitter;
	}
}
