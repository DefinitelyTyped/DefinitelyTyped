import { Disposable } from '../index';

/** Provides a registry for menu items that you'd like to appear in the application menu. */
export interface MenuManager {
    /** Adds the given items to the application menu. */
    add(items: ReadonlyArray<MenuOptions>): Disposable;

    /** Refreshes the currently visible menu. */
    update(): void;
}

export interface MenuOptions {
    /** The menu itme's label. */
    label: string;

    /** An array of sub menus. */
    submenu?: ReadonlyArray<MenuOptions>;

    /** The command to trigger when the item is clicked. */
    command?: string;
}
