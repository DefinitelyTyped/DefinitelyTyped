// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare namespace Electron {
	/**
	 * The power-monitor module is used to monitor power state changes.
	 * You should not use this module until the ready event of the app module is emitted.
	 */
	interface PowerMonitor extends NodeJS.EventEmitter {
		/**
		 * Emitted when the system is suspending.
		 */
		on(event: 'suspend', listener: Function): this;
		/**
		 * Emitted when system is resuming.
		 */
		on(event: 'resume', listener: Function): this;
		/**
		 * Emitted when the system changes to AC power.
		 */
		on(event: 'on-ac', listener: Function): this;
		/**
		 * Emitted when system changes to battery power.
		 */
		on(event: 'on-battery', listener: Function): this;
		on(event: string, listener: Function): this;
	}
}
