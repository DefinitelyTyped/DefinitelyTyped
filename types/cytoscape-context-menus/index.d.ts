import cytoscape = require("cytoscape");

declare const contextMenus: cytoscape.Ext;

export = contextMenus;
export as namespace contextMenus;

declare namespace contextMenus {
    interface MenuOptions {
        /**
         * The event that brings up the context menu.
         * Possible options: https://js.cytoscape.org/#events/user-input-device-events
         * Default: 'cxttap'
         */
        evtType?: string;
        /**
         * List of initial menu items.
         * Default: []
         */
        menuItems?: MenuItem[];
        /**
         * List of css classes to apply to the menu items.
         * Default: ['cy-context-menus-cxt-menuitem']
         */
        menuItemClasses?: string[];
        /**
         * List of css classes to apply to the context menu.
         * Default: ['cy-context-menus-cxt-menu']
         */
        contextMenuClasses?: string[];
        /**
         * Indicates that the menu item has a submenu.
         * Default: { src: 'assets/submenu-indicator-default.svg', width: 12, height: 12 }
         */
        submenuIndicator?: {
            src: string;
            width: number;
            height: number;
        };
    }

    interface MenuItem {
        /**
         * ID of the menu item.
         */
        id: string;
        /**
         * Tooltip text of the menu item.
         */
        tooltipText?: string;
        /**
         * Whether the item be initially disabled.
         */
        disabled?: boolean;
        /**
         * Menu icon.
         */
        image?: {
            src: string;
            width: number;
            height: number;
            y: number;
            x: number;
        };
        /**
         * Display content of the menu item.
         */
        content: string;
        /**
         * Filters the elements to have this menu item on the context menu event.
         * If the selector is not truthy, no elements will have this menu item.
         */
        selector: string;
        /**
         * Whether the item will be shown.
         */
        show?: boolean;
        /**
         * Shows the listed menu items as a submenu for this item.
         * An item must have either a submenu or onClickFunction or both.
         */
        submenu?: MenuItem[];
        /**
         * Whether the core instance will have this item on context menu event.
         */
        coreAsWell?: boolean;
        /**
         * The function to be executed when the menu item is clicked.
         */
        onClickFunction?: (
            event:
                | cytoscape.EventObject
                | cytoscape.EventObjectCore
                | cytoscape.EventObjectNode
                | cytoscape.EventObjectEdge,
        ) => void;
        /**
         * Whether the menu item will have a trailing divider.
         */
        hasTrailingDivider?: boolean;
    }

    interface ContextMenu {
        /**
         * Returns whether the extension is active.
         */
        isActive: () => boolean | undefined;
        /**
         * Appends given menu item to the menu items list.
         * If parentID is specified, the item is inserted to the submenu of the item with parentID.
         * If the parent has no submenu then it will automatically be created.
         * Otherwise, the specified item will be inserted to the root of the context menu.
         * @param item Menu item to append.
         * @param parentID [optional] ID of the parent menu item.
         */
        appendMenuItem: (item: MenuItem, parentID?: string) => cytoscape.Core | undefined;
        /**
         * Appends given menu items to the menu items list.
         * @param items Menu items to append.
         * @param parentID [optional] ID of the parent menu item.
         */
        appendMenuItems: (items: MenuItem[], parentID?: string) => cytoscape.Core | undefined;
        /**
         * Removes the menu item with the given ID and its submenu along with it.
         * @param itemID ID of the menu item to remove.
         */
        removeMenuItem: (itemID: string) => cytoscape.Core | undefined;
        /**
         * Sets whether the menu item with given ID will have a following divider.
         * @param itemID ID of the menu item.
         * @param status Whether the menu item will have a following divider.
         */
        setTrailingDivider: (itemID: string, status: boolean) => cytoscape.Core | undefined;
        /**
         * Inserts given item before the existing item with the given ID.
         * @param item Menu item to insert.
         * @param existingItemID ID of the existing menu item.
         */
        insertBeforeMenuItem: (item: MenuItem, existingItemID: string) => cytoscape.Core | undefined;
        /**
         * Moves the item with the given ID to the submenu of the parent with the given ID or to the root with the specified options.
         *
         * If options is a string, then it is the Id of the parent.
         * If options is an object, then old properties are overwritten by them and the menu item is moved to the root.
         * Otherwise, the item is not moved.
         * If options is null or not provided, then the item is moved the root.
         * @param itemID ID of the menu item to move.
         * @param options [optional] Object with menu item properties coreAsWell and/or selector.
         */
        moveToSubmenu: (
            itemID: string,
            options?: { coreAsWell?: string; selector?: string } | string | null,
        ) => cytoscape.Core | undefined;
        /**
         * Inserts the item before the existing item with the given ID and moves it to the submenu that contains the existing item.
         * @param itemID ID of the menu item to move.
         * @param existingItemID ID of the existing menu item.
         */
        moveBeforeOtherMenuItem: (itemID: string, existingItemID: string) => cytoscape.Core | undefined;
        /**
         * Disables the menu item with the given ID.
         * @param itemID ID of the menu item to disable.
         */
        disableMenuItem: (itemID: string) => cytoscape.Core | undefined;
        /**
         * Enables the menu item with the given ID.
         * @param itemID ID of the menu item to enable.
         */
        enableMenuItem: (itemID: string) => cytoscape.Core | undefined;
        /**
         * Shows the menu item with the given ID.
         * @param itemID ID of the menu item to show.
         */
        showMenuItem: (itemID: string) => cytoscape.Core | undefined;
        /**
         * Hides the menu item with the given ID.
         * @param itemID ID of the menu item to hide.
         */
        hideMenuItem: (itemID: string) => cytoscape.Core | undefined;
        /**
         * Destroys the extension instance.
         */
        destroy: () => cytoscape.Core | undefined;
    }
}

declare global {
    namespace cytoscape {
        interface Core {
            /**
             * Initializes and/or returns the context menu instance.
             * @param options The options for the context menu or "get" to get the current instance.
             */
            contextMenus: (options: contextMenus.MenuOptions | string) => contextMenus.ContextMenu;
        }
    }
}
