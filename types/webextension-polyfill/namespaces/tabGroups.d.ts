//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Events } from "./events";

/**
 * Namespace: browser.tabGroups
 */
export namespace TabGroups {
    /**
     * The group's color, using 'grey' spelling for compatibility with Chromium.
     */
    type Color = "blue" | "cyan" | "grey" | "green" | "orange" | "pink" | "purple" | "red" | "yellow";

    /**
     * State of a tab group inside of an open window.
     */
    interface TabGroup {
        /**
         * Whether the tab group is collapsed or expanded in the tab strip.
         */
        collapsed: boolean;

        /**
         * User-selected color name for the tab group's label/icons.
         */
        color: Color;

        /**
         * Unique ID of the tab group.
         */
        id: number;

        /**
         * User-defined name of the tab group.
         * Optional.
         */
        title?: string;

        /**
         * Window that the tab group is in.
         */
        windowId: number;
    }

    interface MoveMovePropertiesType {
        /**
         * The position in the window to move the group to. After moving, the first tab in the group is at this index. <code>
         * -1</code> moves the group to the end of the window.
         */
        index: number;

        /**
         * The ID of the window to move the group to. If not specified, the group is left in its current window.
         * Groups can only be moved to "normal" window types.
         * Optional.
         */
        windowId?: number;
    }

    interface QueryQueryInfoType {
        /**
         * Optional.
         */
        collapsed?: boolean;

        /**
         * Optional.
         */
        color?: Color;

        /**
         * Optional.
         */
        title?: string;

        /**
         * The ID of the parent window, or <code>windows.WINDOW_ID_CURRENT</code> for the current window.
         * Optional.
         */
        windowId?: number;
    }

    interface UpdateUpdatePropertiesType {
        /**
         * Optional.
         */
        collapsed?: boolean;

        /**
         * Optional.
         */
        color?: Color;

        /**
         * Optional.
         */
        title?: string;
    }

    interface OnRemovedRemoveInfoType {
        /**
         * True when the tab group is being closed because its window is being closed.
         */
        isWindowClosing: boolean;
    }

    interface Static {
        /**
         * Retrieves details about the specified group.
         */
        get(groupId: number): Promise<TabGroup>;

        /**
         * Move a group within, or to another window.
         */
        move(groupId: number, moveProperties: MoveMovePropertiesType): Promise<TabGroup>;

        /**
         * Return all grups, or find groups with specified properties.
         */
        query(queryInfo: QueryQueryInfoType): Promise<TabGroup[]>;

        /**
         * Modifies state of a specified group.
         */
        update(groupId: number, updateProperties: UpdateUpdatePropertiesType): Promise<TabGroup>;

        /**
         * Fired when a tab group is created.
         */
        onCreated: Events.Event<(group: TabGroup) => void>;

        /**
         * Fired when a tab group is moved, within a window or to another window.
         */
        onMoved: Events.Event<(group: TabGroup) => void>;

        /**
         * Fired when a tab group is removed.
         */
        onRemoved: Events.Event<(group: TabGroup, removeInfo: OnRemovedRemoveInfoType) => void>;

        /**
         * Fired when a tab group is updated.
         */
        onUpdated: Events.Event<(group: TabGroup) => void>;

        /**
         * An ID that represents the absence of a group.
         */
        TAB_GROUP_ID_NONE: -1;
    }
}
