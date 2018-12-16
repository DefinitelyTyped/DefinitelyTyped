// Type definitions for react-aria-menubutton 5.1
// Project: https://github.com/davidtheclark/react-aria-menubutton
// Definitions by: Muhammad Fawwaz Orabi <https://github.com/forabi>
//                 Chris Rohlfs <https://github.com/crohlfs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface WrapperState {
	isOpen: boolean;
}

export interface WrapperProps<T extends HTMLElement>
	extends React.HTMLAttributes<T> {
	/**
	 * A callback to run when the user makes a selection
	 * (i.e. clicks or presses Enter or Space on a `MenuItem`).
	 * It will be passed the value of the selected `MenuItem` and
	 * the React `SyntheticEvent`.
	 */
	onSelection?(value: any, event: React.SyntheticEvent<T>): any;

	/**
	 * A callback to run when the menu is opened or closed.
	 */
	onMenuToggle?(obj: WrapperState): any;

	/**
	 * By default, it does automatically close.
	 * If false, the menu will not automatically close when a
	 * selection is made. Default: `true`.
	 */
	closeOnSelection?: boolean;

	isOpen?: boolean;

	tag?: T["tagName"];
}

/**
 * A simple component to group a `Button`/`Menu`/`MenuItem` set,
 * coordinating their interactions. It should wrap your entire menu button
 * widget.
 * All `Button`, `Menu`, and `MenuItem` components must be nested within a
 * `Wrapper` component.
 * Each wrapper can contain only one `Button`, only one `Menu`, and
 * multiple `MenuItem`s.
 */
export class Wrapper extends React.Component<WrapperProps<HTMLElement>> {}

export interface ButtonProps<T extends HTMLElement>
	extends React.HTMLAttributes<T> {
	/**
	 * If true, the element is disabled
	 * (aria-disabled='true', not in tab order, clicking has no effect).
	 */
	disabled?: boolean;

	/**
	 * The HTML tag for this element. Default: 'span'.
	 */
	tag?: T["tagName"];
}

/**
 * A React component to wrap the content of your
 * menu-button-pattern's button.
 * The `Button` component itself acts as a UI button (with tab-index, role, etc.),
 * so you probably do not want to pass an HTML `<button>` element as its child.
 * Each `Button` must be wrapped in a Wrapper, and each Wrapper can wrap only
 * one `Button`.
 */
export class Button extends React.Component<ButtonProps<HTMLElement>> {}

export interface MenuProps<T extends HTMLElement>
	extends React.HTMLAttributes<T> {
	/**
	 * The HTML tag for this element. Default: 'span'.
	 */
	tag?: T["tagName"];
}

/**
 * A React component to wrap the content of your menu-button-pattern's menu.
 */
export class Menu extends React.Component<MenuProps<HTMLElement>> {}

export interface MenuItemProps<T extends HTMLElement>
	extends React.HTMLAttributes<T> {
	/**
	 * If value has a value, it will be passed to the onSelection handler
	 * when the `MenuItem` is selected
	 */
	value?: string | boolean | number;

	/**
	 * If `text` has a value, its first letter will be the letter a user can
	 * type to navigate to that item.
	 */
	text?: string;

	/**
	 * The HTML tag for this element. Default: 'span'.
	 */
	tag?: T["tagName"];
}

/**
 * A React component to wrap the content of one of your
 * menu-button-pattern's menu items.
 * Each `MenuItem` must be wrapped in a `Wrapper`,
 * and each Wrapper can wrap multiple `MenuItem`s.
 * When a `MenuItem` is selected (by clicking or focusing and hitting Enter
 * or Space), it calls the `onSelection` handler you passed ariaMenuButton
 * when creating this set of components.
 * It passes that handler a value and the event. The value it passes is
 * determined as follows:
 * * If the `MenuItem` has a `value` prop, that is passed.
 * * If the `MenuItem` has no `value` prop, the component's child is passed
 * (so it better be simple text!).
 */
export class MenuItem extends React.Component<MenuItemProps<HTMLElement>> {}

/**
 * Open a modal programmatically.
 * For this to work, you must provide an id prop to the Wrapper of the menu.
 * That id should be your first argument to `openMenu()`.
 */
export function openMenu(
	wrapperId: string,
	openOptions?: {
		/**
		 * If `true`, the menu's first item will receive focus when the
		 * menu opens. Default: `false`.
		 */
		focusMenu: boolean;
	}
): void;

/**
 * Close a modal programmatically.
 * For this to work, you must provide an id prop to the Wrapper of the menu.
 * That id should be your first argument to `closeMenu()`.
 */
export function closeMenu(
	wrapperId: string,
	closeOptions?: {
		/**
		 * If `true`, the widget's button will receive focus when the
		 * menu closes. Default: `false`.
		 */
		focusMenu: boolean;
	}
): void;
