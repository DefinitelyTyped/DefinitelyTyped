// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Electron {

	interface Shell {
		/**
		 * Show the given file in a file manager. If possible, select the file.
		 */
		showItemInFolder(fullPath: string): void;
		/**
		 * Open the given file in the desktop's default manner.
		 */
		openItem(fullPath: string): void;
		/**
		 * Open the given external protocol URL in the desktop's default manner
		 * (e.g., mailto: URLs in the default mail user agent).
		 */
		openExternal(url: string): void;
		/**
		 * Move the given file to trash and returns boolean status for the operation.
		 */
		moveItemToTrash(fullPath: string): void;
		/**
		 * Play the beep sound.
		 */
		beep(): void;
	}
}
