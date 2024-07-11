//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.windows
 *
 * Use the <code>browser.windows</code> API to interact with browser windows. You can use this API to create, modify,
 * and rearrange windows in the browser.
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";
import { Tabs } from "./tabs";

export namespace Windows {
    /**
     * The type of browser window this is. Under some circumstances a Window may not be assigned type property,
     * for example when querying closed windows from the $(ref:sessions) API.
     */
    type WindowType = "normal" | "popup" | "panel" | "app" | "devtools";

    /**
     * The state of this browser window. Under some circumstances a Window may not be assigned state property,
     * for example when querying closed windows from the $(ref:sessions) API.
     */
    type WindowState = "normal" | "minimized" | "maximized" | "fullscreen" | "docked";

    interface Window {
        /**
         * The ID of the window. Window IDs are unique within a browser session. Under some circumstances a Window may not be
         * assigned an ID, for example when querying windows using the $(ref:sessions) API, in which case a session ID may be
         * present.
         * Optional.
         */
        id?: number;

        /**
         * Whether the window is currently the focused window.
         */
        focused: boolean;

        /**
         * The offset of the window from the top edge of the screen in pixels. Under some circumstances a Window may not be
         * assigned top property, for example when querying closed windows from the $(ref:sessions) API.
         * Optional.
         */
        top?: number;

        /**
         * The offset of the window from the left edge of the screen in pixels. Under some circumstances a Window may not be
         * assigned left property, for example when querying closed windows from the $(ref:sessions) API.
         * Optional.
         */
        left?: number;

        /**
         * The width of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned width
         * property, for example when querying closed windows from the $(ref:sessions) API.
         * Optional.
         */
        width?: number;

        /**
         * The height of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned height
         * property, for example when querying closed windows from the $(ref:sessions) API.
         * Optional.
         */
        height?: number;

        /**
         * Array of $(ref:tabs.Tab) objects representing the current tabs in the window.
         * Optional.
         */
        tabs?: Tabs.Tab[];

        /**
         * Whether the window is incognito.
         */
        incognito: boolean;

        /**
         * The type of browser window this is.
         * Optional.
         */
        type?: WindowType;

        /**
         * The state of this browser window.
         * Optional.
         */
        state?: WindowState;

        /**
         * Whether the window is set to be always on top.
         */
        alwaysOnTop: boolean;

        /**
         * The session ID used to uniquely identify a Window obtained from the $(ref:sessions) API.
         * Optional.
         */
        sessionId?: string;

        /**
         * The title of the window. Read-only.
         * Optional.
         */
        title?: string;
    }

    /**
     * Specifies what type of browser window to create. The 'panel' and 'detached_panel' types create a popup unless the
     * '--enable-panels' flag is set.
     */
    type CreateType = "normal" | "popup" | "panel" | "detached_panel";

    /**
     * Specifies whether the $(ref:windows.Window) returned should contain a list of the $(ref:tabs.Tab) objects.
     */
    interface GetInfo {
        /**
         * If true, the $(ref:windows.Window) returned will have a <var>tabs</var> property that contains a list of the $(ref:tabs.
         * Tab) objects. The <code>Tab</code> objects only contain the <code>url</code>, <code>title</code> and <code>
         * favIconUrl</code> properties if the extension's manifest file includes the <code>"tabs"</code> permission.
         * Optional.
         */
        populate?: boolean;
    }

    /**
     * Specifies properties used to filter the $(ref:windows.Window) returned and to determine whether they should contain a
     * list of the $(ref:tabs.Tab) objects.
     */
    interface GetAllGetInfoType extends GetInfo {
        /**
         * If set, the $(ref:windows.Window) returned will be filtered based on its type. If unset the default filter is set to
         * <code>['app', 'normal', 'panel', 'popup']</code>, with <code>'app'</code> and <code>'panel'</code>
         * window types limited to the extension's own windows.
         * Optional.
         */
        windowTypes?: WindowType[];
    }

    interface CreateCreateDataType {
        /**
         * A URL or array of URLs to open as tabs in the window. Fully-qualified URLs must include a scheme (i.e. 'http://www.
         * google.com', not 'www.google.com'). Relative URLs will be relative to the current page within the extension.
         * Defaults to the New Tab Page.
         * Optional.
         */
        url?: string | string[];

        /**
         * The id of the tab for which you want to adopt to the new window.
         * Optional.
         */
        tabId?: number;

        /**
         * The number of pixels to position the new window from the left edge of the screen. If not specified,
         * the new window is offset naturally from the last focused window. This value is ignored for panels.
         * Optional.
         */
        left?: number;

        /**
         * The number of pixels to position the new window from the top edge of the screen. If not specified,
         * the new window is offset naturally from the last focused window. This value is ignored for panels.
         * Optional.
         */
        top?: number;

        /**
         * The width in pixels of the new window, including the frame. If not specified defaults to a natural width.
         * Optional.
         */
        width?: number;

        /**
         * The height in pixels of the new window, including the frame. If not specified defaults to a natural height.
         * Optional.
         */
        height?: number;

        /**
         * If true, the new window will be focused. If false, the new window will be opened in the background and the currently
         * focused window will stay focused. Defaults to true.
         * Optional.
         */
        focused?: boolean;

        /**
         * Whether the new window should be an incognito window.
         * Optional.
         */
        incognito?: boolean;

        /**
         * Specifies what type of browser window to create. The 'panel' and 'detached_panel' types create a popup unless the
         * '--enable-panels' flag is set.
         * Optional.
         */
        type?: CreateType;

        /**
         * The initial state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with 'left',
         * 'top', 'width' or 'height'.
         * Optional.
         */
        state?: WindowState;

        /**
         * Allow scripts to close the window.
         * Optional.
         */
        allowScriptsToClose?: boolean;

        /**
         * The CookieStoreId to use for all tabs that were created when the window is opened.
         * Optional.
         */
        cookieStoreId?: string;

        /**
         * A string to add to the beginning of the window title.
         * Optional.
         */
        titlePreface?: string;
    }

    interface UpdateUpdateInfoType {
        /**
         * The offset from the left edge of the screen to move the window to in pixels. This value is ignored for panels.
         * Optional.
         */
        left?: number;

        /**
         * The offset from the top edge of the screen to move the window to in pixels. This value is ignored for panels.
         * Optional.
         */
        top?: number;

        /**
         * The width to resize the window to in pixels. This value is ignored for panels.
         * Optional.
         */
        width?: number;

        /**
         * The height to resize the window to in pixels. This value is ignored for panels.
         * Optional.
         */
        height?: number;

        /**
         * If true, brings the window to the front. If false, brings the next window in the z-order to the front.
         * Optional.
         */
        focused?: boolean;

        /**
         * If true, causes the window to be displayed in a manner that draws the user's attention to the window,
         * without changing the focused window. The effect lasts until the user changes focus to the window.
         * This option has no effect if the window already has focus. Set to false to cancel a previous draw attention request.
         * Optional.
         */
        drawAttention?: boolean;

        /**
         * The new state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with 'left', 'top',
         * 'width' or 'height'.
         * Optional.
         */
        state?: WindowState;

        /**
         * A string to add to the beginning of the window title.
         * Optional.
         */
        titlePreface?: string;
    }

    interface Static {
        /**
         * Gets details about a window.
         *
         * @param windowId
         * @param getInfo Optional.
         */
        get(windowId: number, getInfo?: GetInfo): Promise<Window>;

        /**
         * Gets the $(topic:current-window)[current window].
         *
         * @param getInfo Optional.
         */
        getCurrent(getInfo?: GetInfo): Promise<Window>;

        /**
         * Gets the window that was most recently focused &mdash; typically the window 'on top'.
         *
         * @param getInfo Optional.
         */
        getLastFocused(getInfo?: GetInfo): Promise<Window>;

        /**
         * Gets all windows.
         *
         * @param getInfo Optional. Specifies properties used to filter the $(ref:windows.Window)
         * returned and to determine whether they should contain a list of the $(ref:tabs.Tab) objects.
         */
        getAll(getInfo?: GetAllGetInfoType): Promise<Window[]>;

        /**
         * Creates (opens) a new browser with any optional sizing, position or default URL provided.
         *
         * @param createData Optional.
         */
        create(createData?: CreateCreateDataType): Promise<Window>;

        /**
         * Updates the properties of a window. Specify only the properties that you want to change; unspecified properties will be
         * left unchanged.
         *
         * @param windowId
         * @param updateInfo
         */
        update(windowId: number, updateInfo: UpdateUpdateInfoType): Promise<Window>;

        /**
         * Removes (closes) a window, and all the tabs inside it.
         *
         * @param windowId
         */
        remove(windowId: number): Promise<void>;

        /**
         * Fired when a window is created.
         *
         * @param window Details of the window that was created.
         */
        onCreated: Events.Event<(window: Window) => void>;

        /**
         * Fired when a window is removed (closed).
         *
         * @param windowId ID of the removed window.
         */
        onRemoved: Events.Event<(windowId: number) => void>;

        /**
         * Fired when the currently focused window changes. Will be $(ref:windows.WINDOW_ID_NONE)
         * if all browser windows have lost focus. Note: On some Linux window managers, WINDOW_ID_NONE will always be sent
         * immediately preceding a switch from one browser window to another.
         *
         * @param windowId ID of the newly focused window.
         */
        onFocusChanged: Events.Event<(windowId: number) => void>;

        /**
         * The windowId value that represents the absence of a browser window.
         */
        WINDOW_ID_NONE: -1;

        /**
         * The windowId value that represents the $(topic:current-window)[current window].
         */
        WINDOW_ID_CURRENT: -2;
    }
}
