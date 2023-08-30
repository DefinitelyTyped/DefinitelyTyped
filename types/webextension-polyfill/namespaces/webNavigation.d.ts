//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.webNavigation
 *
 * Use the <code>browser.webNavigation</code> API to receive notifications about the status of navigation requests
 * in-flight.
 * Permissions: "webNavigation"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";

export namespace WebNavigation {
    /**
     * Cause of the navigation. The same transition types as defined in the history API are used.
     * These are the same transition types as defined in the $(topic:transition_types)[history API] except with <code>
     * "start_page"</code> in place of <code>"auto_toplevel"</code> (for backwards compatibility).
     */
    type TransitionType =
        | "link"
        | "typed"
        | "auto_bookmark"
        | "auto_subframe"
        | "manual_subframe"
        | "generated"
        | "start_page"
        | "form_submit"
        | "reload"
        | "keyword"
        | "keyword_generated";

    type TransitionQualifier = "client_redirect" | "server_redirect" | "forward_back" | "from_address_bar";

    interface EventUrlFilters {
        url: Events.UrlFilter[];
    }

    /**
     * Information about the frame to retrieve information about.
     */
    interface GetFrameDetailsType {
        /**
         * The ID of the tab in which the frame is.
         */
        tabId: number;

        /**
         * The ID of the process runs the renderer for this tab.
         * Optional.
         */
        processId?: number;

        /**
         * The ID of the frame in the given tab.
         */
        frameId: number;
    }

    /**
     * Information about the requested frame, null if the specified frame ID and/or tab ID are invalid.
     */
    interface GetFrameCallbackDetailsType {
        /**
         * True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired.
         * Optional.
         */
        errorOccurred?: boolean;

        /**
         * The URL currently associated with this frame, if the frame identified by the frameId existed at one point in the given
         * tab. The fact that an URL is associated with a given frameId does not imply that the corresponding frame still exists.
         */
        url: string;

        /**
         * The ID of the tab in which the frame is.
         */
        tabId: number;

        /**
         * The ID of the frame. 0 indicates that this is the main frame; a positive value indicates the ID of a subframe.
         */
        frameId: number;

        /**
         * ID of frame that wraps the frame. Set to -1 of no parent frame exists.
         */
        parentFrameId: number;
    }

    /**
     * Information about the tab to retrieve all frames from.
     */
    interface GetAllFramesDetailsType {
        /**
         * The ID of the tab.
         */
        tabId: number;
    }

    interface GetAllFramesCallbackDetailsItemType {
        /**
         * True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired.
         * Optional.
         */
        errorOccurred?: boolean;

        /**
         * The ID of the tab in which the frame is.
         */
        tabId: number;

        /**
         * The ID of the frame. 0 indicates that this is the main frame; a positive value indicates the ID of a subframe.
         */
        frameId: number;

        /**
         * ID of frame that wraps the frame. Set to -1 of no parent frame exists.
         */
        parentFrameId: number;

        /**
         * The URL currently associated with this frame.
         */
        url: string;
    }

    interface OnBeforeNavigateDetailsType {
        /**
         * The ID of the tab in which the navigation is about to occur.
         */
        tabId: number;

        url: string;

        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe.
         * Frame IDs are unique for a given tab and process.
         */
        frameId: number;

        /**
         * ID of frame that wraps the frame. Set to -1 of no parent frame exists.
         */
        parentFrameId: number;

        /**
         * The time when the browser was about to start the navigation, in milliseconds since the epoch.
         */
        timeStamp: number;
    }

    interface OnCommittedDetailsType {
        /**
         * The ID of the tab in which the navigation occurs.
         */
        tabId: number;

        url: string;

        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe.
         * Frame IDs are unique within a tab.
         */
        frameId: number;

        /**
         * Cause of the navigation.
         */
        transitionType: TransitionType;

        /**
         * A list of transition qualifiers.
         */
        transitionQualifiers: TransitionQualifier[];

        /**
         * The time when the navigation was committed, in milliseconds since the epoch.
         */
        timeStamp: number;
    }

    interface OnDOMContentLoadedDetailsType {
        /**
         * The ID of the tab in which the navigation occurs.
         */
        tabId: number;

        url: string;

        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe.
         * Frame IDs are unique within a tab.
         */
        frameId: number;

        /**
         * The time when the page's DOM was fully constructed, in milliseconds since the epoch.
         */
        timeStamp: number;
    }

    interface OnCompletedDetailsType {
        /**
         * The ID of the tab in which the navigation occurs.
         */
        tabId: number;

        url: string;

        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe.
         * Frame IDs are unique within a tab.
         */
        frameId: number;

        /**
         * The time when the document finished loading, in milliseconds since the epoch.
         */
        timeStamp: number;
    }

    interface OnErrorOccurredDetailsType {
        /**
         * The ID of the tab in which the navigation occurs.
         */
        tabId: number;

        url: string;

        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe.
         * Frame IDs are unique within a tab.
         */
        frameId: number;

        /**
         * The time when the error occurred, in milliseconds since the epoch.
         */
        timeStamp: number;
    }

    interface OnCreatedNavigationTargetDetailsType {
        /**
         * The ID of the tab in which the navigation is triggered.
         */
        sourceTabId: number;

        /**
         * The ID of the process runs the renderer for the source tab.
         */
        sourceProcessId: number;

        /**
         * The ID of the frame with sourceTabId in which the navigation is triggered. 0 indicates the main frame.
         */
        sourceFrameId: number;

        /**
         * The URL to be opened in the new window.
         */
        url: string;

        /**
         * The ID of the tab in which the url is opened
         */
        tabId: number;

        /**
         * The time when the browser was about to create a new view, in milliseconds since the epoch.
         */
        timeStamp: number;
    }

    interface OnReferenceFragmentUpdatedDetailsType {
        /**
         * The ID of the tab in which the navigation occurs.
         */
        tabId: number;

        url: string;

        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe.
         * Frame IDs are unique within a tab.
         */
        frameId: number;

        /**
         * Cause of the navigation.
         */
        transitionType: TransitionType;

        /**
         * A list of transition qualifiers.
         */
        transitionQualifiers: TransitionQualifier[];

        /**
         * The time when the navigation was committed, in milliseconds since the epoch.
         */
        timeStamp: number;
    }

    interface OnTabReplacedDetailsType {
        /**
         * The ID of the tab that was replaced.
         */
        replacedTabId: number;

        /**
         * The ID of the tab that replaced the old tab.
         */
        tabId: number;

        /**
         * The time when the replacement happened, in milliseconds since the epoch.
         */
        timeStamp: number;
    }

    interface OnHistoryStateUpdatedDetailsType {
        /**
         * The ID of the tab in which the navigation occurs.
         */
        tabId: number;

        url: string;

        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe.
         * Frame IDs are unique within a tab.
         */
        frameId: number;

        /**
         * Cause of the navigation.
         */
        transitionType: TransitionType;

        /**
         * A list of transition qualifiers.
         */
        transitionQualifiers: TransitionQualifier[];

        /**
         * The time when the navigation was committed, in milliseconds since the epoch.
         */
        timeStamp: number;
    }

    /**
     * Fired when a navigation is about to occur.
     */
    interface onBeforeNavigateEvent extends Events.Event<(details: OnBeforeNavigateDetailsType) => void> {
        /**
         * Registers an event listener <em>callback</em> to an event.
         *
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * @param filters Optional. Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of
         * UrlFilter are ignored for this event.
         */
        addListener(callback: (details: OnBeforeNavigateDetailsType) => void, filters?: EventUrlFilters): void;
    }

    /**
     * Fired when a navigation is committed. The document (and the resources it refers to, such as images and subframes)
     * might still be downloading, but at least part of the document has been received from the server and the browser has
     * decided to switch to the new document.
     */
    interface onCommittedEvent extends Events.Event<(details: OnCommittedDetailsType) => void> {
        /**
         * Registers an event listener <em>callback</em> to an event.
         *
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * @param filters Optional. Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of
         * UrlFilter are ignored for this event.
         */
        addListener(callback: (details: OnCommittedDetailsType) => void, filters?: EventUrlFilters): void;
    }

    /**
     * Fired when the page's DOM is fully constructed, but the referenced resources may not finish loading.
     */
    interface onDOMContentLoadedEvent extends Events.Event<(details: OnDOMContentLoadedDetailsType) => void> {
        /**
         * Registers an event listener <em>callback</em> to an event.
         *
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * @param filters Optional. Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of
         * UrlFilter are ignored for this event.
         */
        addListener(callback: (details: OnDOMContentLoadedDetailsType) => void, filters?: EventUrlFilters): void;
    }

    /**
     * Fired when a document, including the resources it refers to, is completely loaded and initialized.
     */
    interface onCompletedEvent extends Events.Event<(details: OnCompletedDetailsType) => void> {
        /**
         * Registers an event listener <em>callback</em> to an event.
         *
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * @param filters Optional. Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of
         * UrlFilter are ignored for this event.
         */
        addListener(callback: (details: OnCompletedDetailsType) => void, filters?: EventUrlFilters): void;
    }

    /**
     * Fired when an error occurs and the navigation is aborted. This can happen if either a network error occurred,
     * or the user aborted the navigation.
     */
    interface onErrorOccurredEvent extends Events.Event<(details: OnErrorOccurredDetailsType) => void> {
        /**
         * Registers an event listener <em>callback</em> to an event.
         *
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * @param filters Optional. Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of
         * UrlFilter are ignored for this event.
         */
        addListener(callback: (details: OnErrorOccurredDetailsType) => void, filters?: EventUrlFilters): void;
    }

    /**
     * Fired when a new window, or a new tab in an existing window, is created to host a navigation.
     */
    interface onCreatedNavigationTargetEvent
        extends Events.Event<(details: OnCreatedNavigationTargetDetailsType) => void>
    {
        /**
         * Registers an event listener <em>callback</em> to an event.
         *
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * @param filters Optional. Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of
         * UrlFilter are ignored for this event.
         */
        addListener(callback: (details: OnCreatedNavigationTargetDetailsType) => void, filters?: EventUrlFilters): void;
    }

    /**
     * Fired when the reference fragment of a frame was updated. All future events for that frame will use the updated URL.
     */
    interface onReferenceFragmentUpdatedEvent
        extends Events.Event<(details: OnReferenceFragmentUpdatedDetailsType) => void>
    {
        /**
         * Registers an event listener <em>callback</em> to an event.
         *
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * @param filters Optional. Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of
         * UrlFilter are ignored for this event.
         */
        addListener(
            callback: (details: OnReferenceFragmentUpdatedDetailsType) => void,
            filters?: EventUrlFilters,
        ): void;
    }

    /**
     * Fired when the frame's history was updated to a new URL. All future events for that frame will use the updated URL.
     */
    interface onHistoryStateUpdatedEvent extends Events.Event<(details: OnHistoryStateUpdatedDetailsType) => void> {
        /**
         * Registers an event listener <em>callback</em> to an event.
         *
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * @param filters Optional. Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of
         * UrlFilter are ignored for this event.
         */
        addListener(callback: (details: OnHistoryStateUpdatedDetailsType) => void, filters?: EventUrlFilters): void;
    }

    interface Static {
        /**
         * Retrieves information about the given frame. A frame refers to an &lt;iframe&gt; or a &lt;frame&gt; of a web page and is
         * identified by a tab ID and a frame ID.
         *
         * @param details Information about the frame to retrieve information about.
         */
        getFrame(details: GetFrameDetailsType): Promise<GetFrameCallbackDetailsType | null>;

        /**
         * Retrieves information about all frames of a given tab.
         *
         * @param details Information about the tab to retrieve all frames from.
         */
        getAllFrames(details: GetAllFramesDetailsType): Promise<GetAllFramesCallbackDetailsItemType[] | null>;

        /**
         * Fired when a navigation is about to occur.
         */
        onBeforeNavigate: onBeforeNavigateEvent;

        /**
         * Fired when a navigation is committed. The document (and the resources it refers to, such as images and subframes)
         * might still be downloading, but at least part of the document has been received from the server and the browser has
         * decided to switch to the new document.
         */
        onCommitted: onCommittedEvent;

        /**
         * Fired when the page's DOM is fully constructed, but the referenced resources may not finish loading.
         */
        onDOMContentLoaded: onDOMContentLoadedEvent;

        /**
         * Fired when a document, including the resources it refers to, is completely loaded and initialized.
         */
        onCompleted: onCompletedEvent;

        /**
         * Fired when an error occurs and the navigation is aborted. This can happen if either a network error occurred,
         * or the user aborted the navigation.
         */
        onErrorOccurred: onErrorOccurredEvent;

        /**
         * Fired when a new window, or a new tab in an existing window, is created to host a navigation.
         */
        onCreatedNavigationTarget: onCreatedNavigationTargetEvent;

        /**
         * Fired when the reference fragment of a frame was updated. All future events for that frame will use the updated URL.
         */
        onReferenceFragmentUpdated: onReferenceFragmentUpdatedEvent;

        /**
         * Fired when the contents of the tab is replaced by a different (usually previously pre-rendered) tab.
         *
         * @param details
         */
        onTabReplaced: Events.Event<(details: OnTabReplacedDetailsType) => void>;

        /**
         * Fired when the frame's history was updated to a new URL. All future events for that frame will use the updated URL.
         */
        onHistoryStateUpdated: onHistoryStateUpdatedEvent;
    }
}
