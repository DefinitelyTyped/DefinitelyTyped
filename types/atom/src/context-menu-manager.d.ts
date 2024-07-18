import { Disposable } from "../index";

/** Provides a registry for commands that you'd like to appear in the context menu. */
export interface ContextMenuManager {
    /** Add context menu items scoped by CSS selectors. */
    add(itemsBySelector: { [key: string]: readonly ContextMenuOptions[] }): Disposable;
}

export type ContextMenuOptions = ContextMenuItemOptions | { type: "separator" };

export interface ContextMenuItemOptions {
    /** The menu item's label. */
    label?: string | undefined;

    /**
     *  The command to invoke on the target of the right click that invoked the
     *  context menu.
     */
    command?: string | undefined;

    /**
     *  Whether the menu item should be clickable. Disabled menu items typically
     *  appear grayed out. Defaults to true.
     */
    enabled?: boolean | undefined;

    /** An array of additional items. */
    submenu?: readonly ContextMenuOptions[] | undefined;

    /** Whether the menu item should appear in the menu. Defaults to true. */
    visible?: boolean | undefined;

    /**
     *  A function that is called on the item each time a context menu is created
     *  via a right click.
     */
    created?(event: Event): void;

    /**
     *  A function that is called to determine whether to display this item on a
     *  given context menu deployment.
     */
    shouldDisplay?(event: Event): void;

    /** Place this menu item before the menu items representing the given commands. */
    before?: readonly string[] | undefined;

    /** Place this menu item after the menu items representing the given commands. */
    after?: readonly string[] | undefined;

    /**
     * Place this menu item's group before the containing group of the menu items
     * representing the given commands.
     */
    beforeGroupContaining?: readonly string[] | undefined;

    /**
     * Place this menu item's group after the containing group of the menu items
     * representing the given commands.
     */
    afterGroupContaining?: readonly string[] | undefined;
}
