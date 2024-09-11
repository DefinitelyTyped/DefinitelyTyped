//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Events } from "./events";

/**
 * Namespace: browser.tabGroups
 */
export namespace TabGroups {
    /**
     * "grey": grey color.
     * "blue": blue color.
     * "red": red color.
     * "yellow": yellow color.
     * "green": green color.
     * "pink": pink color.
     * "purple": purple color.
     * "cyan": cyan color.
     * "orange": orange color.
     */
    type ColorEnum = "grey" | "blue" | "red" | "yellow" | "green" | "pink" | "purple" | "cyan" | "orange";

    interface TabGroup {
        /**
         * Whether the group is collapsed. A collapsed group is one whose tabs are hidden.
         */
        collapsed: boolean;

        /**
         * The group's color.
         */
        color: ColorEnum;

        /**
         * The ID of the group. Group IDs are unique within a browser session.
         */
        id: number;

        /**
         * The title of the group.
         * Optional.
         */
        title?: string;

        /**
         * The ID of the window that contains the group.
         */
        windowId: number;
    }

    interface MoveMovePropertiesType {
        /**
         * The position to move the group to. Use -1 to place the group at the end of the window.
         */
        index: number;

        /**
         * The window to move the group to. Defaults to the window the group is currently in.
         * Optional.
         */
        windowId?: number;
    }

    interface QueryQueryInfoType {
        /**
         * Whether the groups are collapsed.
         * Optional.
         */
        collapsed?: boolean;

        /**
         * The color of the groups.
         * Optional.
         */
        color?: ColorEnum;

        /**
         * Match group titles against a pattern.
         * Optional.
         */
        title?: string;

        /**
         * The ID of the parent window, or <code>windows.WINDOW_ID_CURRENT</code> for the <code>current window</code>.
         * Optional.
         */
        windowId?: number;
    }

    interface UpdateUpdatePropertiesType {
        /**
         * Whether the group should be collapsed.
         * Optional.
         */
        collapsed?: number;

        /**
         * The color of the group.
         * Optional.
         */
        color?: ColorEnum;

        /**
         * The title of the group.
         * Optional.
         */
        title?: string;
    }

    interface Static {
        /**
         * Retrieves details about the specified group.
         */
        get(groupId: number): Promise<TabGroup>;

        /**
         * Moves the group and all its tabs within its window, or to a new window.
         */
        move(groupId: number, moveProperties: MoveMovePropertiesType): Promise<TabGroup | undefined>;

        /**
         * Moves the group and all its tabs within its window, or to a new window.
         */
        query(queryInfo: QueryQueryInfoType): Promise<TabGroup[]>;

        /**
         * Moves the group and all its tabs within its window, or to a new window.
         */
        update(groupId: number, updateProperties: UpdateUpdatePropertiesType): Promise<TabGroup | undefined>;

        /**
         * Fired when a group is created.
         */
        onCreated: Events.Event<(group: TabGroup) => void>;

        /**
         * Fired when a group is moved within a window. Move events are still fired for the individual tabs within the group,
         * as well as for the group itself. This event is not fired when a group is moved between windows; instead,
         * it will be removed from one window and created in another.
         */
        onMoved: Events.Event<(group: TabGroup) => void>;

        /**
         * Fired when a group is closed, either directly by the user or automatically because it contained zero tabs.
         */
        onRemoved: Events.Event<(group: TabGroup) => void>;

        /**
         * Fired when a group is updated.
         */
        onUpdated: Events.Event<(group: TabGroup) => void>;

        /**
         * An ID that represents the absence of a group.
         */
        TAB_GROUP_ID_NONE: -1;
    }
}
