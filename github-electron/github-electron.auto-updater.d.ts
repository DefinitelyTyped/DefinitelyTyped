// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.event-emitter.d.ts" />

declare namespace Electron {

	class AutoUpdater extends EventEmitter {
		/**
		 * Set the url and initialize the auto updater.
		 * The url cannot be changed once it is set.
		 */
		setFeedURL(url: string): void;
		/**
		 * Ask the server whether there is an update, you have to call setFeedURL
		 * before using this API
		 */
		checkForUpdates(): any;
		/**
		 * Restarts the app and installs the update after it has been downloaded.
		 * It should only be called after update-downloaded has been emitted.
		 */
		 quitAndInstall(): void;
	}
}
