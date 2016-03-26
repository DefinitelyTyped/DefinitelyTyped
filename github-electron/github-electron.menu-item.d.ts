// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.browser-window.d.ts" />
/// <reference path="github-electron.menu.d.ts" />
/// <reference path="github-electron.native-image.d.ts" />

declare namespace Electron {
	/**
	 * The MenuItem allows you to add items to an application or context menu.
	 */
	class MenuItem {
		/**
		 * Create a new menu item.
		 */
		constructor(options: MenuItemOptions);

		click: (menuItem: MenuItem, browserWindow: BrowserWindow) => void;
		/**
		 * Read-only property.
		 */
		type: MenuItemType;
		/**
		 * Read-only property.
		 */
		role: MenuItemRole | MenuItemRoleMac;
		/**
		 * Read-only property.
		 */
		accelerator: string;
		/**
		 * Read-only property.
		 */
		icon: NativeImage | string;
		/**
		 * Read-only property.
		 */
		submenu: Menu | MenuItemOptions[];

		label: string;
		sublabel: string;
		enabled: boolean;
		visible: boolean;
		checked: boolean;
	}

	type MenuItemType = 'normal' | 'separator' | 'submenu' | 'checkbox' | 'radio';
	type MenuItemRole = 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'selectall' | 'minimize' | 'close';
	type MenuItemRoleMac = 'about' | 'hide' | 'hideothers' | 'unhide' | 'front' | 'window' | 'help' | 'services';

	interface MenuItemOptions {
		/**
		 * Callback when the menu item is clicked.
		 */
		click?: (menuItem: MenuItem, browserWindow: BrowserWindow) => void;
		/**
		 * Can be normal, separator, submenu, checkbox or radio.
		 */
		type?: MenuItemType;
		label?: string;
		sublabel?: string;
		/**
		 * An accelerator is string that represents a keyboard shortcut, it can contain
		 * multiple modifiers and key codes, combined by the + character.
		 *
		 * Examples:
		 *   Command+A
		 *   Ctrl+Shift+Z
		 *
		 * Platform notice: On Linux and Windows, the Command key would not have any effect,
		 * you can use CommandOrControl which represents Command on OS X and Control on
		 * Linux and Windows to define some accelerators.
		 *
		 * Available modifiers:
		 *   Command (or Cmd for short)
		 *   Control (or Ctrl for short)
		 *   CommandOrControl (or CmdOrCtrl for short)
		 *   Alt
		 *   Shift
		 *
		 * Available key codes:
		 *   0 to 9
		 *   A to Z
		 *   F1 to F24
		 *   Punctuations like ~, !, @, #, $, etc.
		 *   Plus
		 *   Space
		 *   Backspace
		 *   Delete
		 *   Insert
		 *   Return (or Enter as alias)
		 *   Up, Down, Left and Right
		 *   Home and End
		 *   PageUp and PageDown
		 *   Escape (or Esc for short)
		 *   VolumeUp, VolumeDown and VolumeMute
		 *   MediaNextTrack, MediaPreviousTrack, MediaStop and MediaPlayPause
		 */
		accelerator?: string;
		/**
		 * In Electron for the APIs that take images, you can pass either file paths
		 * or NativeImage instances. When passing null, an empty image will be used.
		 */
		icon?: NativeImage|string;
		enabled?: boolean;
		visible?: boolean;
		checked?: boolean;
		/**
		 * Should be specified for submenu type menu item, when it's specified the
		 * type: 'submenu' can be omitted for the menu item
		 */
		submenu?: Menu|MenuItemOptions[];
		/**
		 * Unique within a single menu. If defined then it can be used as a reference
		 * to this item by the position attribute.
		 */
		id?: string;
		/**
		 * This field allows fine-grained definition of the specific location within
		 * a given menu.
		 */
		position?: string;
		/**
		 * Define the action of the menu item, when specified the click property will be ignored
		 */
		role?: MenuItemRole | MenuItemRoleMac;
	}
}
