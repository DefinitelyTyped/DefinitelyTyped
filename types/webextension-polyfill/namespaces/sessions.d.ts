/**
 * Namespace: browser.sessions
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Use the <code>chrome.sessions</code> API to query and restore tabs and windows from a browsing session.
 * Permissions: "sessions"
 *
 * Comments found in source JSON schema files:
 * Copyright 2013 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Tabs } from "./tabs";
import { Windows } from "./windows";
import { Events } from "./events";

export namespace Sessions {
    interface Filter {
        /**
         * The maximum number of entries to be fetched in the requested list. Omit this parameter to fetch the maximum number of
         * entries ($(ref:sessions.MAX_SESSION_RESULTS)).
         * Optional.
         */
        maxResults?: number;
    }

    interface Session {
        /**
         * The time when the window or tab was closed or modified, represented in milliseconds since the epoch.
         */
        lastModified: number;

        /**
         * The $(ref:tabs.Tab), if this entry describes a tab. Either this or $(ref:sessions.Session.window) will be set.
         * Optional.
         */
        tab?: Tabs.Tab;

        /**
         * The $(ref:windows.Window), if this entry describes a window. Either this or $(ref:sessions.Session.tab) will be set.
         * Optional.
         */
        window?: Windows.Window;
    }

    interface Device {
        info: string;

        /**
         * The name of the foreign device.
         */
        deviceName: string;

        /**
         * A list of open window sessions for the foreign device, sorted from most recently to least recently modified session.
         */
        sessions: Session[];
    }

    interface Static {
        /**
         * Forget a recently closed tab.
         *
         * @param windowId The windowId of the window to which the recently closed tab to be forgotten belongs.
         * @param sessionId The sessionId (closedId) of the recently closed tab to be forgotten.
         */
        forgetClosedTab(windowId: number, sessionId: string): Promise<void>;

        /**
         * Forget a recently closed window.
         *
         * @param sessionId The sessionId (closedId) of the recently closed window to be forgotten.
         */
        forgetClosedWindow(sessionId: string): Promise<void>;

        /**
         * Gets the list of recently closed tabs and/or windows.
         *
         * @param filter Optional.
         */
        getRecentlyClosed(filter?: Filter): Promise<Session[]>;

        /**
         * Reopens a $(ref:windows.Window) or $(ref:tabs.Tab), with an optional callback to run when the entry has been restored.
         *
         * @param sessionId Optional. The $(ref:windows.Window.sessionId), or $(ref:tabs.Tab.sessionId) to restore.
         * If this parameter is not specified, the most recently closed session is restored.
         */
        restore(sessionId?: string): Promise<Session>;

        /**
         * Set a key/value pair on a given tab.
         *
         * @param tabId The id of the tab that the key/value pair is being set on.
         * @param key The key which corresponds to the value being set.
         * @param value The value being set.
         */
        setTabValue(tabId: number, key: string, value: any): Promise<void>;

        /**
         * Retrieve a value that was set for a given key on a given tab.
         *
         * @param tabId The id of the tab whose value is being retrieved from.
         * @param key The key which corresponds to the value.
         */
        getTabValue(tabId: number, key: string): Promise<any>;

        /**
         * Remove a key/value pair that was set on a given tab.
         *
         * @param tabId The id of the tab whose key/value pair is being removed.
         * @param key The key which corresponds to the value.
         */
        removeTabValue(tabId: number, key: string): Promise<void>;

        /**
         * Set a key/value pair on a given window.
         *
         * @param windowId The id of the window that the key/value pair is being set on.
         * @param key The key which corresponds to the value being set.
         * @param value The value being set.
         */
        setWindowValue(windowId: number, key: string, value: any): Promise<void>;

        /**
         * Retrieve a value that was set for a given key on a given window.
         *
         * @param windowId The id of the window whose value is being retrieved from.
         * @param key The key which corresponds to the value.
         */
        getWindowValue(windowId: number, key: string): Promise<any>;

        /**
         * Remove a key/value pair that was set on a given window.
         *
         * @param windowId The id of the window whose key/value pair is being removed.
         * @param key The key which corresponds to the value.
         */
        removeWindowValue(windowId: number, key: string): Promise<void>;

        /**
         * Fired when recently closed tabs and/or windows are changed. This event does not monitor synced sessions changes.
         */
        onChanged: Events.Event<() => void>;

        /**
         * The maximum number of $(ref:sessions.Session) that will be included in a requested list.
         */
        MAX_SESSION_RESULTS: 25;
    }
}
