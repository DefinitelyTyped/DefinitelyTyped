// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.event-emitter.d.ts" />
/// <reference path="github-electron.menu.d.ts" />
/// <reference path="github-electron.native-image.d.ts" />

declare namespace Electron {

	class Tray extends EventEmitter {
		/**
		 * Creates a new tray icon associated with the image.
		 */
		constructor(image: NativeImage|string);
		/**
		 * Destroys the tray icon immediately.
		 */
		destroy(): void;
		/**
		 * Sets the image associated with this tray icon.
		 */
		setImage(image: NativeImage|string): void;
		/**
		 * Sets the image associated with this tray icon when pressed.
		 */
		setPressedImage(image: NativeImage): void;
		/**
		 * Sets the hover text for this tray icon.
		 */
		setToolTip(toolTip: string): void;
		/**
		 * Sets the title displayed aside of the tray icon in the status bar.
		 * Note: This is only implemented on OS X.
		 */
		setTitle(title: string): void;
		/**
		 * Sets whether the tray icon is highlighted when it is clicked.
		 * Note: This is only implemented on OS X.
		 */
		setHighlightMode(highlight: boolean): void;
		/**
		 * Displays a tray balloon.
		 * Note: This is only implemented on Windows.
		 */
		displayBalloon(options?: {
			icon?: NativeImage;
			title?: string;
			content?: string;
		}): void;
		/**
		 * Sets the context menu for this icon.
		 */
		setContextMenu(menu: Menu): void;
	}
}
