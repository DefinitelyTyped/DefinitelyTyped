// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.menu.d.ts" />
/// <reference path="github-electron.native-image.d.ts" />

declare namespace Electron {

	class MenuItem {
		constructor(options?: MenuItemOptions);
		options: MenuItemOptions;
	}

	interface MenuItemOptions {
		/**
		 * Callback when the menu item is clicked.
		 */
		click?: Function;
		/**
		 * Call the selector of first responder when clicked (OS X only).
		 */
		selector?: string;
		/**
		 * Can be normal, separator, submenu, checkbox or radio.
		 */
		type?: string;
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
		role?: string;
	}
}
