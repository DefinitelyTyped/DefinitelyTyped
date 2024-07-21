//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.tabGroups
 *
 * Use the <code>chrome.tabGroups</code> API to interact with the browser's tab grouping system. You can use this API to modify,
 * and rearrange tab groups in the browser.
 * To group and ungroup tabs, or to query what tabs are in groups, use the <code>browser.tabs</code> API.
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";

export namespace TabGroups {
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
        color?: boolean;

        /**
         * Match group titles against a pattern.
         * Optional.
         */
        title?: boolean;

        /**
         * The ID of the parent window, or windows.WINDOW_ID_CURRENT for the current window.
         * Optional.
         */
        windowId?: boolean;
    }

    interface UpdateUpdatePropertiesType {
        /**
         * Whether the group should be collapsed.
         * Optional.
         */
        collapsed?: boolean;

        /**
         * The color of the group.
         * Optional.
         */
        color?: boolean;

        /**
         * The title of the group.
         * Optional.
         */
        title?: boolean;
    }

    interface Static {
        /**
         * Retrieves details about the specified group.
         *
         * @param groupId
         */
        get(groupId: number): Promise<TabGroup>;

        /**
         * Moves the group and all its tabs within its window, or to a new window.
         *
         * @param groupId The ID of the group to move.
         * @param moveProperties
         */
        move(groupId: number, moveProperties: MoveMovePropertiesType): Promise<TabGroup | undefined>;

        /**
         * Gets all groups that have the specified properties, or all groups if no properties are specified.
         *
         * @param queryInfo
         */
        query(queryInfo: QueryQueryInfoType): Promise<TabGroup[]>;

        /**
         * Modifies the properties of a group. Properties that are not specified in <var>updateProperties</var> are not modified.
         *
         * @param groupId The ID of the group to modify.
         * @param updateProperties
         */
        update(groupId: number, updateProperties: UpdateUpdatePropertiesType): Promise<TabGroup | undefined>;

        /**
         * Fired when a group is created.
         *
         * @param group Details of the tabGroup that was created.
         */
        onCreated: Events.Event<(group: TabGroup) => void>;

        /**
         * Fired when a group is moved within a window.
         * Move events are still fired for the individual tabs within the group, as well as for the group itself.
         * This event is not fired when a group is moved between windows;
         * instead, it will be removed from one window and created in another.
         *
         * @param group Details of the tabGroup that was moved.
         */
        onMoved: Events.Event<(group: TabGroup) => void>;

        /**
         * Fired when a group is closed, either directly by the user or automatically because it contained zero tabs.
         *
         * @param group Details of the tabGroup that was removed.
         */
        onRemoved: Events.Event<(group: TabGroup) => void>;

        /**
         * Fired when a group is updated.
         *
         * @param group Details of the tabGroup that was updated.
         */
        onUpdated: Events.Event<(group: TabGroup) => void>;

        /**
         * An ID that represents the absence of a group.
         */
        TAB_GROUP_ID_NONE: -1;
    }
}
