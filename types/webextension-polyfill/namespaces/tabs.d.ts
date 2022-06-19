/**
 * Namespace: browser.tabs
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Use the <code>browser.tabs</code> API to interact with the browser's tab system. You can use this API to create, modify,
 * and rearrange tabs in the browser.
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";
import { Runtime } from "./runtime";
import { Windows } from "./windows";
import { ExtensionTypes } from "./extensionTypes";

export namespace Tabs {
    /**
     * An event that caused a muted state change.
     *
     * "user": A user input action has set/overridden the muted state.
     * "capture": Tab capture started, forcing a muted state change.
     * "extension": An extension, identified by the extensionId field, set the muted state.
     */
    type MutedInfoReason = "user" | "capture" | "extension";

    /**
     * Tab muted state and the reason for the last state change.
     */
    interface MutedInfo {
        /**
         * Whether the tab is prevented from playing sound (but hasn't necessarily recently produced sound).
         * Equivalent to whether the muted audio indicator is showing.
         */
        muted: boolean;

        /**
         * The reason the tab was muted or unmuted. Not set if the tab's mute state has never been changed.
         * Optional.
         */
        reason?: MutedInfoReason;

        /**
         * The ID of the extension that changed the muted state. Not set if an extension was not the reason the muted state last
         * changed.
         * Optional.
         */
        extensionId?: string;
    }

    /**
     * Tab sharing state for screen, microphone and camera.
     */
    interface SharingState {
        /**
         * If the tab is sharing the screen the value will be one of "Screen", "Window", or "Application",
         * or undefined if not screen sharing.
         * Optional.
         */
        screen?: string;

        /**
         * True if the tab is using the camera.
         */
        camera: boolean;

        /**
         * True if the tab is using the microphone.
         */
        microphone: boolean;
    }

    interface Tab {
        /**
         * The ID of the tab. Tab IDs are unique within a browser session. Under some circumstances a Tab may not be assigned an ID,
         * for example when querying foreign tabs using the $(ref:sessions) API, in which case a session ID may be present.
         * Tab ID can also be set to $(ref:tabs.TAB_ID_NONE) for apps and devtools windows.
         * Optional.
         */
        id?: number;

        /**
         * The zero-based index of the tab within its window.
         */
        index: number;

        /**
         * The ID of the window the tab is contained within.
         * Optional.
         */
        windowId?: number;

        /**
         * The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists.
         * Optional.
         */
        openerTabId?: number;

        /**
         * Whether the tab is highlighted. Works as an alias of active
         */
        highlighted: boolean;

        /**
         * Whether the tab is active in its window. (Does not necessarily mean the window is focused.)
         */
        active: boolean;

        /**
         * Whether the tab is pinned.
         */
        pinned: boolean;

        /**
         * The last time the tab was accessed as the number of milliseconds since epoch.
         * Optional.
         */
        lastAccessed?: number;

        /**
         * Whether the tab has produced sound over the past couple of seconds (but it might not be heard if also muted).
         * Equivalent to whether the speaker audio indicator is showing.
         * Optional.
         */
        audible?: boolean;

        /**
         * Current tab muted state and the reason for the last state change.
         * Optional.
         */
        mutedInfo?: MutedInfo;

        /**
         * The URL the tab is displaying. This property is only present if the extension's manifest includes the <code>"tabs"</code>
         * permission.
         * Optional.
         */
        url?: string;

        /**
         * The title of the tab. This property is only present if the extension's manifest includes the <code>"tabs"</code>
         * permission.
         * Optional.
         */
        title?: string;

        /**
         * The URL of the tab's favicon. This property is only present if the extension's manifest includes the <code>"tabs"</code>
         * permission. It may also be an empty string if the tab is loading.
         * Optional.
         */
        favIconUrl?: string;

        /**
         * Either <em>loading</em> or <em>complete</em>.
         * Optional.
         */
        status?: string;

        /**
         * True while the tab is not loaded with content.
         * Optional.
         */
        discarded?: boolean;

        /**
         * Whether the tab is in an incognito window.
         */
        incognito: boolean;

        /**
         * The width of the tab in pixels.
         * Optional.
         */
        width?: number;

        /**
         * The height of the tab in pixels.
         * Optional.
         */
        height?: number;

        /**
         * True if the tab is hidden.
         * Optional.
         */
        hidden?: boolean;

        /**
         * The session ID used to uniquely identify a Tab obtained from the $(ref:sessions) API.
         * Optional.
         */
        sessionId?: string;

        /**
         * The CookieStoreId used for the tab.
         * Optional.
         */
        cookieStoreId?: string;

        /**
         * Whether the document in the tab can be rendered in reader mode.
         * Optional.
         */
        isArticle?: boolean;

        /**
         * Whether the document in the tab is being rendered in reader mode.
         * Optional.
         */
        isInReaderMode?: boolean;

        /**
         * Current tab sharing state for screen, microphone and camera.
         * Optional.
         */
        sharingState?: SharingState;

        /**
         * Whether the tab is drawing attention.
         * Optional.
         */
        attention?: boolean;

        /**
         * The ID of this tab's successor, if any; $(ref:tabs.TAB_ID_NONE) otherwise.
         * Optional.
         */
        successorTabId?: number;

        /**
         * Whether the tab can be discarded automatically by the browser when resources are low.
         * Optional.
         */
        autoDiscardable?: boolean;

        /**
         * The URL the tab is navigating to, before it has committed. This property is only present if the extension's manifest
         * includes the "tabs" permission and there is a pending navigation.
         * Optional.
         */
        pendingUrl?: string;
    }

    /**
     * Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page; defaults to
     * <code>automatic</code>.
     *
     * "automatic": Zoom changes are handled automatically by the browser.
     * "manual": Overrides the automatic handling of zoom changes. The <code>onZoomChange</code> event will still be dispatched,
     * and it is the responsibility of the extension to listen for this event and manually scale the page.
     * This mode does not support <code>per-origin</code> zooming, and will thus ignore the <code>scope</code>
     * zoom setting and assume <code>per-tab</code>.
     * "disabled": Disables all zooming in the tab. The tab will revert to the default zoom level,
     * and all attempted zoom changes will be ignored.
     */
    type ZoomSettingsMode = "automatic" | "manual" | "disabled";

    /**
     * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults to <code>
     * per-origin</code> when in <code>automatic</code> mode, and <code>per-tab</code> otherwise.
     *
     * "per-origin": Zoom changes will persist in the zoomed page's origin, i.e. all other tabs navigated to that same origin
     * will be zoomed as well. Moreover, <code>per-origin</code> zoom changes are saved with the origin,
     * meaning that when navigating to other pages in the same origin, they will all be zoomed to the same zoom factor.
     * The <code>per-origin</code> scope is only available in the <code>automatic</code> mode.
     * "per-tab": Zoom changes only take effect in this tab, and zoom changes in other tabs will not affect the zooming of this
     * tab. Also, <code>per-tab</code> zoom changes are reset on navigation; navigating a tab will always load pages with their
     * <code>per-origin</code> zoom factors.
     */
    type ZoomSettingsScope = "per-origin" | "per-tab";

    /**
     * Defines how zoom changes in a tab are handled and at what scope.
     */
    interface ZoomSettings {
        /**
         * Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page; defaults to
         * <code>automatic</code>.
         * Optional.
         */
        mode?: ZoomSettingsMode;

        /**
         * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults to <code>
         * per-origin</code> when in <code>automatic</code> mode, and <code>per-tab</code> otherwise.
         * Optional.
         */
        scope?: ZoomSettingsScope;

        /**
         * Used to return the default zoom level for the current tab in calls to tabs.getZoomSettings.
         * Optional.
         */
        defaultZoomFactor?: number;
    }

    /**
     * Defines the page settings to be used when saving a page as a pdf file.
     */
    interface PageSettings {
        /**
         * The name of the file. May include optional .pdf extension.
         * Optional.
         */
        toFileName?: string;

        /**
         * The page size unit: 0 = inches, 1 = millimeters. Default: 0.
         * Optional.
         */
        paperSizeUnit?: number;

        /**
         * The paper width in paper size units. Default: 8.5.
         * Optional.
         */
        paperWidth?: number;

        /**
         * The paper height in paper size units. Default: 11.0.
         * Optional.
         */
        paperHeight?: number;

        /**
         * The page content orientation: 0 = portrait, 1 = landscape. Default: 0.
         * Optional.
         */
        orientation?: number;

        /**
         * The page content scaling factor: 1.0 = 100% = normal size. Default: 1.0.
         * Optional.
         */
        scaling?: number;

        /**
         * Whether the page content should shrink to fit the page width (overrides scaling). Default: true.
         * Optional.
         */
        shrinkToFit?: boolean;

        /**
         * Whether the page background colors should be shown. Default: false.
         * Optional.
         */
        showBackgroundColors?: boolean;

        /**
         * Whether the page background images should be shown. Default: false.
         * Optional.
         */
        showBackgroundImages?: boolean;

        /**
         * The spacing between the left header/footer and the left edge of the paper (inches). Default: 0.
         * Optional.
         */
        edgeLeft?: number;

        /**
         * The spacing between the right header/footer and the right edge of the paper (inches). Default: 0.
         * Optional.
         */
        edgeRight?: number;

        /**
         * The spacing between the top of the headers and the top edge of the paper (inches). Default: 0
         * Optional.
         */
        edgeTop?: number;

        /**
         * The spacing between the bottom of the footers and the bottom edge of the paper (inches). Default: 0.
         * Optional.
         */
        edgeBottom?: number;

        /**
         * The margin between the page content and the left edge of the paper (inches). Default: 0.5.
         * Optional.
         */
        marginLeft?: number;

        /**
         * The margin between the page content and the right edge of the paper (inches). Default: 0.5.
         * Optional.
         */
        marginRight?: number;

        /**
         * The margin between the page content and the top edge of the paper (inches). Default: 0.5.
         * Optional.
         */
        marginTop?: number;

        /**
         * The margin between the page content and the bottom edge of the paper (inches). Default: 0.5.
         * Optional.
         */
        marginBottom?: number;

        /**
         * The text for the page's left header. Default: '&T'.
         * Optional.
         */
        headerLeft?: string;

        /**
         * The text for the page's center header. Default: ''.
         * Optional.
         */
        headerCenter?: string;

        /**
         * The text for the page's right header. Default: '&U'.
         * Optional.
         */
        headerRight?: string;

        /**
         * The text for the page's left footer. Default: '&PT'.
         * Optional.
         */
        footerLeft?: string;

        /**
         * The text for the page's center footer. Default: ''.
         * Optional.
         */
        footerCenter?: string;

        /**
         * The text for the page's right footer. Default: '&D'.
         * Optional.
         */
        footerRight?: string;
    }

    /**
     * Whether the tabs have completed loading.
     */
    type TabStatus = "loading" | "complete";

    /**
     * The type of window.
     */
    type WindowType = "normal" | "popup" | "panel" | "app" | "devtools";

    /**
     * Event names supported in onUpdated.
     */
    type UpdatePropertyName =
        | "attention"
        | "audible"
        | "discarded"
        | "favIconUrl"
        | "hidden"
        | "isArticle"
        | "mutedInfo"
        | "pinned"
        | "sharingState"
        | "status"
        | "title"
        | "url";

    /**
     * An object describing filters to apply to tabs.onUpdated events.
     */
    interface UpdateFilter {
        /**
         * A list of URLs or URL patterns. Events that cannot match any of the URLs will be filtered out.
         * Filtering with urls requires the <code>"tabs"</code> or  <code>"activeTab"</code> permission.
         * Optional.
         */
        urls?: string[];

        /**
         * A list of property names. Events that do not match any of the names will be filtered out.
         * Optional.
         */
        properties?: UpdatePropertyName[];

        /**
         * Optional.
         */
        tabId?: number;

        /**
         * Optional.
         */
        windowId?: number;
    }

    interface ConnectConnectInfoType {
        /**
         * Will be passed into onConnect for content scripts that are listening for the connection event.
         * Optional.
         */
        name?: string;

        /**
         * Open a port to a specific $(topic:frame_ids)[frame] identified by <code>frameId</code> instead of all frames in the tab.
         * Optional.
         */
        frameId?: number;
    }

    interface SendMessageOptionsType {
        /**
         * Send a message to a specific $(topic:frame_ids)[frame] identified by <code>frameId</code>
         * instead of all frames in the tab.
         * Optional.
         */
        frameId?: number;
    }

    interface CreateCreatePropertiesType {
        /**
         * The window to create the new tab in. Defaults to the $(topic:current-window)[current window].
         * Optional.
         */
        windowId?: number;

        /**
         * The position the tab should take in the window. The provided value will be clamped to between zero and the number of
         * tabs in the window.
         * Optional.
         */
        index?: number;

        /**
         * The URL to navigate the tab to initially. Fully-qualified URLs must include a scheme (i.e. 'http://www.google.com',
         * not 'www.google.com'). Relative URLs will be relative to the current page within the extension.
         * Defaults to the New Tab Page.
         * Optional.
         */
        url?: string;

        /**
         * Whether the tab should become the active tab in the window. Does not affect whether the window is focused (see
         * $(ref:windows.update)). Defaults to <var>true</var>.
         * Optional.
         */
        active?: boolean;

        /**
         * Whether the tab should be pinned. Defaults to <var>false</var>
         * Optional.
         */
        pinned?: boolean;

        /**
         * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly created tab.
         * Optional.
         */
        openerTabId?: number;

        /**
         * The CookieStoreId for the tab that opened this tab.
         * Optional.
         */
        cookieStoreId?: string;

        /**
         * Whether the document in the tab should be opened in reader mode.
         * Optional.
         */
        openInReaderMode?: boolean;

        /**
         * Whether the tab is marked as 'discarded' when created.
         * Optional.
         */
        discarded?: boolean;

        /**
         * The title used for display if the tab is created in discarded mode.
         * Optional.
         */
        title?: string;

        /**
         * Whether the tab should be muted when created.
         * Optional.
         */
        muted?: boolean;
    }

    interface DuplicateDuplicatePropertiesType {
        /**
         * The position the new tab should take in the window. The provided value will be clamped to between zero and the number of
         * tabs in the window.
         * Optional.
         */
        index?: number;

        /**
         * Whether the tab should become the active tab in the window. Does not affect whether the window is focused (see
         * $(ref:windows.update)). Defaults to <var>true</var>.
         * Optional.
         */
        active?: boolean;
    }

    interface QueryQueryInfoType {
        /**
         * Whether the tabs are active in their windows.
         * Optional.
         */
        active?: boolean;

        /**
         * Whether the tabs are drawing attention.
         * Optional.
         */
        attention?: boolean;

        /**
         * Whether the tabs are pinned.
         * Optional.
         */
        pinned?: boolean;

        /**
         * Whether the tabs are audible.
         * Optional.
         */
        audible?: boolean;

        /**
         * Whether the tabs are muted.
         * Optional.
         */
        muted?: boolean;

        /**
         * Whether the tabs are highlighted.  Works as an alias of active.
         * Optional.
         */
        highlighted?: boolean;

        /**
         * Whether the tabs are in the $(topic:current-window)[current window].
         * Optional.
         */
        currentWindow?: boolean;

        /**
         * Whether the tabs are in the last focused window.
         * Optional.
         */
        lastFocusedWindow?: boolean;

        /**
         * Whether the tabs have completed loading.
         * Optional.
         */
        status?: TabStatus;

        /**
         * True while the tabs are not loaded with content.
         * Optional.
         */
        discarded?: boolean;

        /**
         * True while the tabs are hidden.
         * Optional.
         */
        hidden?: boolean;

        /**
         * Match page titles against a pattern.
         * Optional.
         */
        title?: string;

        /**
         * Match tabs against one or more $(topic:match_patterns)[URL patterns]. Note that fragment identifiers are not matched.
         * Optional.
         */
        url?: string | string[];

        /**
         * The ID of the parent window, or $(ref:windows.WINDOW_ID_CURRENT) for the $(topic:current-window)[current window].
         * Optional.
         */
        windowId?: number;

        /**
         * The type of window the tabs are in.
         * Optional.
         */
        windowType?: WindowType;

        /**
         * The position of the tabs within their windows.
         * Optional.
         */
        index?: number;

        /**
         * The CookieStoreId used for the tab.
         * Optional.
         */
        cookieStoreId?: string[] | string;

        /**
         * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
         * Optional.
         */
        openerTabId?: number;

        /**
         * True for any screen sharing, or a string to specify type of screen sharing.
         * Optional.
         */
        screen?: "Screen" | "Window" | "Application" | boolean;

        /**
         * True if the tab is using the camera.
         * Optional.
         */
        camera?: boolean;

        /**
         * True if the tab is using the microphone.
         * Optional.
         */
        microphone?: boolean;

        /**
         * Whether the tabs can be discarded automatically by the browser when resources are low.
         * Optional.
         */
        autoDiscardable?: boolean;
    }

    interface HighlightHighlightInfoType {
        /**
         * The window that contains the tabs.
         * Optional.
         */
        windowId?: number;

        /**
         * If true, the $(ref:windows.Window) returned will have a <var>tabs</var> property that contains a list of the $(ref:tabs.
         * Tab) objects. The <code>Tab</code> objects only contain the <code>url</code>, <code>title</code> and <code>
         * favIconUrl</code> properties if the extension's manifest file includes the <code>"tabs"</code> permission. If false,
         * the $(ref:windows.Window) won't have the <var>tabs</var> property.
         * Optional.
         */
        populate?: boolean;

        /**
         * One or more tab indices to highlight.
         */
        tabs: number[] | number;
    }

    interface UpdateUpdatePropertiesType {
        /**
         * A URL to navigate the tab to.
         * Optional.
         */
        url?: string;

        /**
         * Whether the tab should be active. Does not affect whether the window is focused (see $(ref:windows.update)).
         * Optional.
         */
        active?: boolean;

        /**
         * Adds or removes the tab from the current selection.
         * Optional.
         */
        highlighted?: boolean;

        /**
         * Whether the tab should be pinned.
         * Optional.
         */
        pinned?: boolean;

        /**
         * Whether the tab should be muted.
         * Optional.
         */
        muted?: boolean;

        /**
         * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
         * Optional.
         */
        openerTabId?: number;

        /**
         * Whether the load should replace the current history entry for the tab.
         * Optional.
         */
        loadReplace?: boolean;

        /**
         * The ID of this tab's successor. If specified, the successor tab must be in the same window as this tab.
         * Optional.
         */
        successorTabId?: number;

        /**
         * Whether the tab should be discarded automatically by the browser when resources are low.
         * Optional.
         */
        autoDiscardable?: boolean;
    }

    interface MoveMovePropertiesType {
        /**
         * Defaults to the window the tab is currently in.
         * Optional.
         */
        windowId?: number;

        /**
         * The position to move the window to. -1 will place the tab at the end of the window.
         */
        index: number;
    }

    interface ReloadReloadPropertiesType {
        /**
         * Whether using any local cache. Default is false.
         * Optional.
         */
        bypassCache?: boolean;
    }

    interface MoveInSuccessionOptionsType {
        /**
         * Whether to move the tabs before (false) or after (true) tabId in the succession. Defaults to false.
         * Optional.
         */
        append?: boolean;

        /**
         * Whether to link up the current predecessors or successor (depending on options.append)
         * of tabId to the other side of the chain after it is prepended or appended. If true,
         * one of the following happens: if options.append is false, the first tab in the array is set as the successor of any
         * current predecessors of tabId; if options.append is true, the current successor of tabId is set as the successor of the
         * last tab in the array. Defaults to false.
         * Optional.
         */
        insert?: boolean;
    }

    /**
     * Lists the changes to the state of the tab that was updated.
     */
    interface OnUpdatedChangeInfoType {
        /**
         * The tab's new attention state.
         * Optional.
         */
        attention?: boolean;

        /**
         * The tab's new audible state.
         * Optional.
         */
        audible?: boolean;

        /**
         * True while the tab is not loaded with content.
         * Optional.
         */
        discarded?: boolean;

        /**
         * The tab's new favicon URL. This property is only present if the extension's manifest includes the <code>"tabs"</code>
         * permission.
         * Optional.
         */
        favIconUrl?: string;

        /**
         * The tab's new hidden state.
         * Optional.
         */
        hidden?: boolean;

        /**
         * Whether the document in the tab can be rendered in reader mode.
         * Optional.
         */
        isArticle?: boolean;

        /**
         * The tab's new muted state and the reason for the change.
         * Optional.
         */
        mutedInfo?: MutedInfo;

        /**
         * The tab's new pinned state.
         * Optional.
         */
        pinned?: boolean;

        /**
         * The tab's new sharing state for screen, microphone and camera.
         * Optional.
         */
        sharingState?: SharingState;

        /**
         * The status of the tab. Can be either <em>loading</em> or <em>complete</em>.
         * Optional.
         */
        status?: string;

        /**
         * The title of the tab if it has changed. This property is only present if the extension's manifest includes the <code>
         * "tabs"</code> permission.
         * Optional.
         */
        title?: string;

        /**
         * The tab's URL if it has changed. This property is only present if the extension's manifest includes the <code>
         * "tabs"</code> permission.
         * Optional.
         */
        url?: string;
    }

    interface OnMovedMoveInfoType {
        windowId: number;

        fromIndex: number;

        toIndex: number;
    }

    interface OnActivatedActiveInfoType {
        /**
         * The ID of the tab that has become active.
         */
        tabId: number;

        /**
         * The ID of the tab that was previously active, if that tab is still open.
         * Optional.
         */
        previousTabId?: number;

        /**
         * The ID of the window the active tab changed inside of.
         */
        windowId: number;
    }

    interface OnHighlightedHighlightInfoType {
        /**
         * The window whose tabs changed.
         */
        windowId: number;

        /**
         * All highlighted tabs in the window.
         */
        tabIds: number[];
    }

    interface OnDetachedDetachInfoType {
        oldWindowId: number;

        oldPosition: number;
    }

    interface OnAttachedAttachInfoType {
        newWindowId: number;

        newPosition: number;
    }

    interface OnRemovedRemoveInfoType {
        /**
         * The window whose tab is closed.
         */
        windowId: number;

        /**
         * True when the tab is being closed because its window is being closed.
         */
        isWindowClosing: boolean;
    }

    interface OnZoomChangeZoomChangeInfoType {
        tabId: number;

        oldZoomFactor: number;

        newZoomFactor: number;

        zoomSettings: ZoomSettings;
    }

    /**
     * Fired when a tab is updated.
     */
    interface onUpdatedEvent
        extends Events.Event<(tabId: number, changeInfo: OnUpdatedChangeInfoType, tab: Tab) => void> {
        /**
         * Registers an event listener <em>callback</em> to an event.
         *
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * @param filter Optional. A set of filters that restricts the events that will be sent to this listener.
         */
        addListener(
            callback: (tabId: number, changeInfo: OnUpdatedChangeInfoType, tab: Tab) => void,
            filter?: UpdateFilter
        ): void;
    }

    interface Static {
        /**
         * Retrieves details about the specified tab.
         *
         * @param tabId
         */
        get(tabId: number): Promise<Tab>;

        /**
         * Gets the tab that this script call is being made from. May be undefined if called from a non-tab context (for example: a
         * background page or popup view).
         */
        getCurrent(): Promise<Tab>;

        /**
         * Connects to the content script(s) in the specified tab. The $(ref:runtime.onConnect)
         * event is fired in each content script running in the specified tab for the current extension. For more details,
         * see $(topic:messaging)[Content Script Messaging].
         *
         * @param tabId
         * @param connectInfo Optional.
         * @returns A port that can be used to communicate with the content scripts running in the specified tab.
         * The port's $(ref:runtime.Port) event is fired if the tab closes or does not exist.
         */
        connect(tabId: number, connectInfo?: ConnectConnectInfoType): Runtime.Port;

        /**
         * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response
         * is sent back.  The $(ref:runtime.onMessage) event is fired in each content script running in the specified tab for the
         * current extension.
         *
         * @param tabId
         * @param message
         * @param options Optional.
         */
        sendMessage(tabId: number, message: any, options?: SendMessageOptionsType): Promise<any>;

        /**
         * Creates a new tab.
         *
         * @param createProperties
         */
        create(createProperties: CreateCreatePropertiesType): Promise<Tab>;

        /**
         * Duplicates a tab.
         *
         * @param tabId The ID of the tab which is to be duplicated.
         * @param duplicateProperties Optional.
         */
        duplicate(tabId: number, duplicateProperties?: DuplicateDuplicatePropertiesType): Promise<Tab>;

        /**
         * Gets all tabs that have the specified properties, or all tabs if no properties are specified.
         *
         * @param queryInfo
         */
        query(queryInfo: QueryQueryInfoType): Promise<Tab[]>;

        /**
         * Highlights the given tabs.
         *
         * @param highlightInfo
         */
        highlight(highlightInfo: HighlightHighlightInfoType): Promise<Windows.Window>;

        /**
         * Modifies the properties of a tab. Properties that are not specified in <var>updateProperties</var> are not modified.
         *
         * @param tabId Optional. Defaults to the selected tab of the $(topic:current-window)[current window].
         * @param updateProperties
         */
        update(tabId: number | undefined, updateProperties: UpdateUpdatePropertiesType): Promise<Tab>;

        /**
         * Modifies the properties of a tab. Properties that are not specified in <var>updateProperties</var> are not modified.
         *
         * @param updateProperties
         */
        update(updateProperties: UpdateUpdatePropertiesType): Promise<Tab>;

        /**
         * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and
         * from normal (window.type === "normal") windows.
         *
         * @param tabIds The tab or list of tabs to move.
         * @param moveProperties
         */
        move(tabIds: number | number[], moveProperties: MoveMovePropertiesType): Promise<Tab | Tab[]>;

        /**
         * Reload a tab.
         *
         * @param tabId Optional. The ID of the tab to reload; defaults to the selected tab of the current window.
         * @param reloadProperties Optional.
         */
        reload(tabId?: number, reloadProperties?: ReloadReloadPropertiesType): Promise<void>;

        /**
         * Warm up a tab
         *
         * @param tabId The ID of the tab to warm up.
         */
        warmup(tabId: number): void;

        /**
         * Closes one or more tabs.
         *
         * @param tabIds The tab or list of tabs to close.
         */
        remove(tabIds: number | number[]): Promise<void>;

        /**
         * discards one or more tabs.
         *
         * @param tabIds The tab or list of tabs to discard.
         */
        discard(tabIds: number | number[]): Promise<void>;

        /**
         * Detects the primary language of the content in a tab.
         *
         * @param tabId Optional. Defaults to the active tab of the $(topic:current-window)[current window].
         */
        detectLanguage(tabId?: number): Promise<string>;

        /**
         * Toggles reader mode for the document in the tab.
         *
         * @param tabId Optional. Defaults to the active tab of the $(topic:current-window)[current window].
         */
        toggleReaderMode(tabId?: number): Promise<void>;

        /**
         * Captures an area of a specified tab. You must have $(topic:declare_permissions)[&lt;all_urls&gt;]
         * permission to use this method.
         *
         * @param tabId Optional. The tab to capture. Defaults to the active tab of the current window.
         * @param options Optional.
         */
        captureTab(tabId?: number, options?: ExtensionTypes.ImageDetails): Promise<string>;

        /**
         * Captures an area of the currently active tab in the specified window. You must have $(topic:declare_permissions)
         * [&lt;all_urls&gt;] permission to use this method.
         *
         * @param windowId Optional. The target window. Defaults to the $(topic:current-window)[current window].
         * @param options Optional.
         */
        captureVisibleTab(windowId?: number, options?: ExtensionTypes.ImageDetails): Promise<string>;

        /**
         * Injects JavaScript code into a page. For details, see the $(topic:content_scripts)[programmatic injection]
         * section of the content scripts doc.
         *
         * @param tabId Optional. The ID of the tab in which to run the script; defaults to the active tab of the current window.
         * @param details Details of the script to run.
         * @returns Called after all the JavaScript has been executed.
         */
        executeScript(tabId: number | undefined, details: ExtensionTypes.InjectDetails): Promise<any[]>;

        /**
         * Injects JavaScript code into a page. For details, see the $(topic:content_scripts)[programmatic injection]
         * section of the content scripts doc.
         *
         * @param details Details of the script to run.
         * @returns Called after all the JavaScript has been executed.
         */
        executeScript(details: ExtensionTypes.InjectDetails): Promise<any[]>;

        /**
         * Injects CSS into a page. For details, see the $(topic:content_scripts)[programmatic injection]
         * section of the content scripts doc.
         *
         * @param tabId Optional. The ID of the tab in which to insert the CSS; defaults to the active tab of the current window.
         * @param details Details of the CSS text to insert.
         * @returns Called when all the CSS has been inserted.
         */
        insertCSS(tabId: number | undefined, details: ExtensionTypes.InjectDetails): Promise<void>;

        /**
         * Injects CSS into a page. For details, see the $(topic:content_scripts)[programmatic injection]
         * section of the content scripts doc.
         *
         * @param details Details of the CSS text to insert.
         * @returns Called when all the CSS has been inserted.
         */
        insertCSS(details: ExtensionTypes.InjectDetails): Promise<void>;

        /**
         * Removes injected CSS from a page. For details, see the $(topic:content_scripts)[programmatic injection]
         * section of the content scripts doc.
         *
         * @param tabId Optional. The ID of the tab from which to remove the injected CSS; defaults to the active tab of the
         * current window.
         * @param details Details of the CSS text to remove.
         * @returns Called when all the CSS has been removed.
         */
        removeCSS(tabId: number | undefined, details: ExtensionTypes.InjectDetails): Promise<void>;

        /**
         * Removes injected CSS from a page. For details, see the $(topic:content_scripts)[programmatic injection]
         * section of the content scripts doc.
         *
         * @param details Details of the CSS text to remove.
         * @returns Called when all the CSS has been removed.
         */
        removeCSS(details: ExtensionTypes.InjectDetails): Promise<void>;

        /**
         * Zooms a specified tab.
         *
         * @param tabId Optional. The ID of the tab to zoom; defaults to the active tab of the current window.
         * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor.
         * Values greater than zero specify a (possibly non-default) zoom factor for the tab.
         * @returns Called after the zoom factor has been changed.
         */
        setZoom(tabId: number | undefined, zoomFactor: number): Promise<void>;

        /**
         * Zooms a specified tab.
         *
         * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor.
         * Values greater than zero specify a (possibly non-default) zoom factor for the tab.
         * @returns Called after the zoom factor has been changed.
         */
        setZoom(zoomFactor: number): Promise<void>;

        /**
         * Gets the current zoom factor of a specified tab.
         *
         * @param tabId Optional. The ID of the tab to get the current zoom factor from; defaults to the active tab of the current
         * window.
         * @returns Called with the tab's current zoom factor after it has been fetched.
         */
        getZoom(tabId?: number): Promise<number>;

        /**
         * Sets the zoom settings for a specified tab, which define how zoom changes are handled.
         * These settings are reset to defaults upon navigating the tab.
         *
         * @param tabId Optional. The ID of the tab to change the zoom settings for; defaults to the active tab of the current
         * window.
         * @param zoomSettings Defines how zoom changes are handled and at what scope.
         * @returns Called after the zoom settings have been changed.
         */
        setZoomSettings(tabId: number | undefined, zoomSettings: ZoomSettings): Promise<void>;

        /**
         * Sets the zoom settings for a specified tab, which define how zoom changes are handled.
         * These settings are reset to defaults upon navigating the tab.
         *
         * @param zoomSettings Defines how zoom changes are handled and at what scope.
         * @returns Called after the zoom settings have been changed.
         */
        setZoomSettings(zoomSettings: ZoomSettings): Promise<void>;

        /**
         * Gets the current zoom settings of a specified tab.
         *
         * @param tabId Optional. The ID of the tab to get the current zoom settings from; defaults to the active tab of the
         * current window.
         * @returns Called with the tab's current zoom settings.
         */
        getZoomSettings(tabId?: number): Promise<ZoomSettings>;

        /**
         * Prints page in active tab.
         */
        print(): void;

        /**
         * Shows print preview for page in active tab.
         *
         * @returns Called after print preview entered.
         */
        printPreview(): Promise<void>;

        /**
         * Saves page in active tab as a PDF file.
         *
         * @param pageSettings The page settings used to save the PDF file.
         * @returns Called after save as dialog closed.
         */
        saveAsPDF(pageSettings: PageSettings): Promise<string>;

        /**
         * Shows one or more tabs.
         *
         * @param tabIds The TAB ID or list of TAB IDs to show.
         */
        show(tabIds: number | number[]): Promise<void>;

        /**
         * Hides one or more tabs. The <code>"tabHide"</code> permission is required to hide tabs.  Not all tabs are hidable.
         * Returns an array of hidden tabs.
         *
         * @param tabIds The TAB ID or list of TAB IDs to hide.
         */
        hide(tabIds: number | number[]): Promise<number[]>;

        /**
         * Removes an array of tabs from their lines of succession and prepends or appends them in a chain to another tab.
         *
         * @param tabIds An array of tab IDs to move in the line of succession. For each tab in the array,
         * the tab's current predecessors will have their successor set to the tab's current successor,
         * and each tab will then be set to be the successor of the previous tab in the array.
         * Any tabs not in the same window as the tab indicated by the second argument (or the first tab in the array,
         * if no second argument) will be skipped.
         * @param tabId Optional. The ID of a tab to set as the successor of the last tab in the array, or $(ref:tabs.TAB_ID_NONE)
         * to leave the last tab without a successor. If options.append is true, then this tab is made the predecessor of the
         * first tab in the array instead.
         * @param options Optional.
         */
        moveInSuccession(tabIds: number[], tabId?: number, options?: MoveInSuccessionOptionsType): void;

        /**
         * Navigate to next page in tab's history, if available
         *
         * @param tabId Optional. The ID of the tab to navigate forward.
         */
        goForward(tabId?: number): Promise<void>;

        /**
         * Navigate to previous page in tab's history, if available.
         *
         * @param tabId Optional. The ID of the tab to navigate backward.
         */
        goBack(tabId?: number): Promise<void>;

        /**
         * Fired when a tab is created. Note that the tab's URL may not be set at the time this event fired,
         * but you can listen to onUpdated events to be notified when a URL is set.
         *
         * @param tab Details of the tab that was created.
         */
        onCreated: Events.Event<(tab: Tab) => void>;

        /**
         * Fired when a tab is updated.
         */
        onUpdated: onUpdatedEvent;

        /**
         * Fired when a tab is moved within a window. Only one move event is fired, representing the tab the user directly moved.
         * Move events are not fired for the other tabs that must move in response. This event is not fired when a tab is moved
         * between windows. For that, see $(ref:tabs.onDetached).
         *
         * @param tabId
         * @param moveInfo
         */
        onMoved: Events.Event<(tabId: number, moveInfo: OnMovedMoveInfoType) => void>;

        /**
         * Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired,
         * but you can listen to onUpdated events to be notified when a URL is set.
         *
         * @param activeInfo
         */
        onActivated: Events.Event<(activeInfo: OnActivatedActiveInfoType) => void>;

        /**
         * Fired when the highlighted or selected tabs in a window changes.
         *
         * @param highlightInfo
         */
        onHighlighted: Events.Event<(highlightInfo: OnHighlightedHighlightInfoType) => void>;

        /**
         * Fired when a tab is detached from a window, for example because it is being moved between windows.
         *
         * @param tabId
         * @param detachInfo
         */
        onDetached: Events.Event<(tabId: number, detachInfo: OnDetachedDetachInfoType) => void>;

        /**
         * Fired when a tab is attached to a window, for example because it was moved between windows.
         *
         * @param tabId
         * @param attachInfo
         */
        onAttached: Events.Event<(tabId: number, attachInfo: OnAttachedAttachInfoType) => void>;

        /**
         * Fired when a tab is closed.
         *
         * @param tabId
         * @param removeInfo
         */
        onRemoved: Events.Event<(tabId: number, removeInfo: OnRemovedRemoveInfoType) => void>;

        /**
         * Fired when a tab is replaced with another tab due to prerendering or instant.
         *
         * @param addedTabId
         * @param removedTabId
         */
        onReplaced: Events.Event<(addedTabId: number, removedTabId: number) => void>;

        /**
         * Fired when a tab is zoomed.
         *
         * @param ZoomChangeInfo
         */
        onZoomChange: Events.Event<(ZoomChangeInfo: OnZoomChangeZoomChangeInfoType) => void>;

        /**
         * An ID which represents the absence of a browser tab.
         */
        TAB_ID_NONE: -1;
    }
}
