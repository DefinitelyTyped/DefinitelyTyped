// Type definitions for non-npm package Tampermonkey 4.x
// Project: https://tampermonkey.net
// Definitions by: Steven Wang <https://github.com/silverwzw>
//                 Nikolay Borzov <https://github.com/nikolay-borzov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This definition is based on the API reference of Tampermonkey
// https://tampermonkey.net/documentation.php
// TypeScript Version: 3.3

declare namespace Tampermonkey {
    type ValueChangeListener = (
        name: string,
        oldValue: any,
        newValue: any,
        remote: boolean
    ) => void;

    // Response

    enum ReadyState {
        Unsent = 0,
        Opened = 1,
        HeadersReceived = 2,
        Loading = 3,
        Done = 4
    }

    interface ResponseBase {
        readonly responseHeaders: string;
        readonly readyState: ReadyState;
        readonly response: any;
        readonly responseText: string;
        readonly responseXML: Document | null;
        readonly status: number;
        readonly statusText: string;
    }

    interface ProgressResponseBase {
        done: number;
        lengthComputable: boolean;
        loaded: number;
        position: number;
        total: number;
        totalSize: number;
    }

    interface ErrorResponse extends ResponseBase {
        readonly error: string;
    }

    interface Response<TContext> extends ResponseBase {
        readonly finalUrl: string;
        readonly context: TContext;
    }

    interface ProgressResponse<TContext>
        extends Response<TContext>,
            ProgressResponseBase {}

    // Request

    interface RequestHeaders {
        readonly [header: string]: string;
    }

    type RequestEventListener<TResponse> = (
        this: TResponse,
        response: TResponse
    ) => void;

    interface Request<TContext = object> {
        method?: 'GET' | 'HEAD' | 'POST';
        /** Destination URL */
        url: string;
        /**
         * i.e. user-agent, referer... (some special headers are not supported
         * by Safari and Android browsers)
         */
        headers?: RequestHeaders;
        /** String to send via a POST request */
        data?: string;
        /** Send the data string in binary mode */
        binary?: boolean;
        /** Timeout in ms */
        timeout?: number;
        /** Property which will be added to the response object */
        context?: TContext;
        responseType?: 'arraybuffer' | 'blob' | 'json';
        /** MIME type for the request */
        overrideMimeType?: string;
        /** Don't send cookies with the requests (please see the fetch notes) */
        anonymous?: boolean;
        /**
         * (Beta) Use a fetch instead of a xhr request(at Chrome this causes
         * `xhr.abort`, `details.timeout` and `xhr.onprogress` to not work and
         * makes `xhr.onreadystatechange` receive only readyState 4 events)
         */
        fetch?: boolean;
        /** Username for authentication */
        username?: string;
        password?: string;

        // Events

        /** Callback to be executed if the request was aborted */
        onabort?(): void;
        /** Callback to be executed if the request ended up with an error */
        onerror?: RequestEventListener<ErrorResponse>;
        /** Callback to be executed if the request started to load */
        onloadstart?: RequestEventListener<Response<TContext>>;
        /** Callback to be executed if the request made some progress */
        onprogress?: RequestEventListener<ProgressResponse<TContext>>;
        /** Callback to be executed if the request's ready state changed */
        onreadystatechange?: RequestEventListener<Response<TContext>>;
        /** Callback to be executed if the request failed due to a timeout */
        ontimeout?(): void;
        /** Callback to be executed if the request was loaded */
        onload?: RequestEventListener<Response<TContext>>;
    }

    // Download Response

    interface DownloadProgressResponse extends ProgressResponseBase {
        readonly finalUrl: string;
    }

    interface DownloadErrorResponse {
        /**
         * Error reason
         * - `not_enabled` - the download feature isn't enabled by the user
         * - `not_whitelisted` - the requested file extension is not
         * whitelisted
         * - `not_permitted` - the user enabled the download feature, but did
         * not give the downloads permission
         * - `not_supported` - the download feature isn't supported by the
         * browser/version
         * - `not_succeeded` - the download wasn't started or failed, the
         * details attribute may provide more information
         */
        error:
            | 'not_enabled'
            | 'not_whitelisted'
            | 'not_permitted'
            | 'not_supported'
            | 'not_succeeded';
        /** Detail about that error */
        details?: string;
    }

    // Download Request

    interface DownloadRequest {
        /** URL from where the data should be downloaded */
        url: string;
        /**
         * Filename - for security reasons the file extension needs to be
         * whitelisted at Tampermonkey options page
         */
        name: string;
        headers?: RequestHeaders;
        /** Show 'Save As' dialog */
        saveAs?: boolean;
        timeout?: number;
        /** Callback to be executed if this download ended up with an error */
        onerror?: RequestEventListener<DownloadErrorResponse>;
        /** Callback to be executed if this download finished */
        ontimeout?(): void;
        /** Callback to be executed if this download finished */
        onload?(): void;
        /** Callback to be executed if this download failed due to a timeout */
        onprogress?: RequestEventListener<DownloadProgressResponse>;
    }

    interface AbortHandle<TReturn> {
        abort(): TReturn;
    }

    interface OpenTabOptions {
        /** Decides whether the new tab should be focused */
        active?: boolean;
        /** Inserts the new tab after the current one */
        insert?: boolean;
        /** Makes the browser re-focus the current tab on close */
        setParent?: boolean;
    }

    interface OpenTabObject {
        /** Closes tab */
        close(): void;
        /** Set closed listener */
        onclosed?(): void;
        closed: boolean;
    }

    interface NotificationThis extends Notification {
        id: string;
    }

    type NotificationOnClick = (this: NotificationThis) => void;
    /** `clicked` is `true` when `text` was set */
    type NotificationOnDone = (this: NotificationThis, clicked: boolean) => void;

    interface Notification {
        /** Text of the notification (optional if highlight is set) */
        text?: string;
        /** Notification title. If not specified the script name is used */
        title?: string;
        image?: string;
        /** Flag whether to highlight the tab that sends the notification */
        highlight?: boolean;
        /** Time after that the notification will be hidden. `0` = disabled */
        timeout?: number;
        /**
         * Called when the notification is closed (no matter if this was
         * triggered by a timeout or a click) or the tab was highlighted
         */
        onclick?: NotificationOnClick;
        /** Called in case the user clicks the notification */
        ondone?: NotificationOnDone;
    }

    interface TextNotification extends Notification {
        /** Text of the notification (optional if highlight is set) */
        text: string;
    }

    interface HighlightNotification extends Notification {
        text?: undefined;
        highlight: true;
    }

    type NotificationDetails = TextNotification | HighlightNotification;
}

/**
 * The unsafeWindow object provides full access to the pages javascript
 * functions and variables
 */
declare var unsafeWindow: Window;

// Styles

/**
 * Adds the given style to the document and returns the injected style element.
 */
declare function GM_addStyle(css: string): HTMLStyleElement;

// Storage

/** Sets the value of `name` to the storage */
declare function GM_setValue(name: string, value: any): void;

/**
 * Adds a change listener to the storage and returns the listener ID.
 * The `remote` argument of the callback function shows whether this value was
 * modified from the instance of another tab (`true`) or within this script
 * instance (`false`). Therefore this functionality can be used by scripts of
 * different browser tabs to communicate with each other.
 * @param name Name of the observed variable
 */
declare function GM_addValueChangeListener(
    name: string,
    listener: Tampermonkey.ValueChangeListener
): number;

/** Removes a change listener by its ID */
declare function GM_removeValueChangeListener(listenerId: number): void;

/** Gets the value of 'name' from storage */
declare function GM_getValue<TValue>(
    name: string,
    defaultValue?: TValue
): TValue;

/** Deletes 'name' from storage */
declare function GM_deleteValue(name: string): void;

/** Lists all names of the storage */
declare function GM_listValues(): string[];

// Resources

/** Get the content of a predefined `@resource` tag at the script header */
declare function GM_getResourceText(name: string): string;

/**
 * Get the base64 encoded URI of a predefined `@resource` tag at the script
 * header
 */
declare function GM_getResourceURL(name: string): string;

// Menu commands

/**
 * Register a menu to be displayed at the Tampermonkey menu at pages where this
 * script runs and returns a menu command ID.
 */
declare function GM_registerMenuCommand(
    name: string,
    onClick: () => void,
    accessKey?: string
): number;

/**
 *  Unregister a menu command that was previously registered by
 * `GM_registerMenuCommand` with the given menu command ID.
 */
declare function GM_unregisterMenuCommand(menuCommandId: number): void;

// Requests

/** Makes an xmlHttpRequest */
declare function GM_xmlhttpRequest<TContext = any>(
    details: Tampermonkey.Request<TContext> // tslint:disable-line:no-unnecessary-generics
): Tampermonkey.AbortHandle<void>;

/** Downloads a given URL to the local disk */
declare function GM_download(
    details: Tampermonkey.DownloadRequest
): Tampermonkey.AbortHandle<boolean>;
declare function GM_download(
    url: string,
    name: string
): Tampermonkey.AbortHandle<boolean>;

// Tabs

/** Saves the tab object to reopen it after a page unload */
declare function GM_saveTab(obj: object): void;

/** Gets a object that is persistent as long as this tab is open */
declare function GM_getTab(callback: (obj: any) => void): void;

/** Gets all tab objects as a hash to communicate with other script instances */
declare function GM_getTabs(
    callback: (tabsMap: { [tabId: number]: any }) => void
): void;

// Utils

/** Log a message to the console */
declare function GM_log(...message: any[]): void;

/**
 * Opens a new tab with this url.
 * The options object can have the following properties:
 * - `active` decides whether the new tab should be focused,
 * - `insert` that inserts the new tab after the current one and
 * - `setParent` makes the browser re-focus the current tab on close.
 *
 * Otherwise the new tab is just appended.
 * If `options` is boolean (loadInBackground) it has the opposite meaning of
 * active and was added to achieve Greasemonkey 3.x compatibility.
 *
 * If neither active nor loadInBackground is given, then the tab will not be
 * focused.
 * @returns Object with the function `close`, the listener `onclosed` and a flag
 * called `closed`.
 */
declare function GM_openInTab(
    url: string,
    options?: Tampermonkey.OpenTabOptions | boolean
): Tampermonkey.OpenTabObject;

/**
 * Shows a HTML5 Desktop notification and/or highlight the current tab.
 * @param ondone If specified used instead of `details.ondone`
 */
declare function GM_notification(
    details: Tampermonkey.NotificationDetails,
    ondone?: Tampermonkey.NotificationOnDone
): void;

/**
 * Shows a HTML5 Desktop notification and/or highlight the current tab.
 * @param text Text of the notification
 * @param title Notification title. If not specified the script name is used
 * @param onclick Called in case the user clicks the notification
 */
declare function GM_notification(
    text: string,
    title?: string,
    image?: string,
    onclick?: Tampermonkey.NotificationOnClick
): void;

/**
 * Copies data into the clipboard.
 * The parameter 'info' can be an object like
 * `{ type: 'text', mimetype: 'text/plain'}` or just a string expressing the
 * type ("text" or "html").
 */
declare function GM_setClipboard(
    data: string,
    info?: string | { type?: string; mimetype?: string }
): void;
