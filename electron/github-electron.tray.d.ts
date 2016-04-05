// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.event-emitter.d.ts" />
/// <reference path="github-electron.menu.d.ts" />
/// <reference path="github-electron.native-image.d.ts" />
/// <reference path="github-electron.screen.d.ts" />

declare namespace Electron {
    /**
     * A Tray represents an icon in an operating system's notification area.
     */
	class Tray extends EventEmitter {
		/**
		 * Emitted when the tray icon is clicked.
		 * Note: The bounds payload is only implemented on OS X and Windows.
		 */
		on(event: 'click', listener: (modifiers: Modifiers, bounds: Bounds) => void): this;
		/**
		 * Emitted when the tray icon is right clicked.
         * Note: This is only implemented on OS X and Windows.
		 */
		on(event: 'right-click', listener: (modifiers: Modifiers, bounds: Bounds) => void): this;
		/**
		 * Emitted when the tray icon is double clicked.
		 * Note: This is only implemented on OS X and Windows.
		 */
		on(event: 'double-click', listener: (modifiers: Modifiers, bounds: Bounds) => void): this;
		/**
		 * Emitted when the tray balloon shows.
		 * Note: This is only implemented on Windows.
		 */
		on(event: 'balloon-show', listener: Function): this;
		/**
		 * Emitted when the tray balloon is clicked.
		 * Note: This is only implemented on Windows.
		 */
		on(event: 'balloon-click', listener: Function): this;
		/**
		 * Emitted when the tray balloon is closed because of timeout or user manually closes it.
		 * Note: This is only implemented on Windows.
		 */
		on(event: 'balloon-closed', listener: Function): this;
		/**
		 * Emitted when any dragged items are dropped on the tray icon.
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'drop', listener: Function): this;
		/**
		 * Emitted when dragged files are dropped in the tray icon.
		 * Note: This is only implemented on OS X
		 */
		on(event: 'drop-files', listener: (event: Event, files: string[]) => void): this;
		/**
		 * Emitted when a drag operation enters the tray icon.
		 * Note: This is only implemented on OS X
		 */
		on(event: 'drag-enter', listener: Function): this;
		/**
		 * Emitted when a drag operation exits the tray icon.
		 * Note: This is only implemented on OS X
		 */
		on(event: 'drag-leave', listener: Function): this;
		/**
		 * Emitted when a drag operation ends on the tray or ends at another location.
		 * Note: This is only implemented on OS X
		 */
		on(event: 'drag-end', listener: Function): this;
		on(event: string, listener: Function): this;
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
         * Popups the context menu of tray icon. When menu is passed,
         * the menu will showed instead of the tray's context menu.
         * The position is only available on Windows, and it is (0, 0) by default.
         * Note: This is only implemented on OS X and Windows.
         */
        popUpContextMenu(menu?: Menu, position?: {
           x: number;
           y: number;
        }): void;
		/**
		 * Sets the context menu for this icon.
		 */
		setContextMenu(menu: Menu): void;
	}

	interface Modifiers {
		altKey: boolean;
		shiftKey: boolean;
		ctrlKey: boolean;
		metaKey: boolean;
	}
}
