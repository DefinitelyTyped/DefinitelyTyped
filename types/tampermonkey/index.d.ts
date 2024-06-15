// This definition is based on the API reference of Tampermonkey
// https://tampermonkey.net/documentation.php
// TypeScript Version: 3.3

declare namespace Tampermonkey {
    /**
     * @param key The key whose value has changed.
     * @param oldValue The previous value of the key.
     * @param newValue The new value of the key
     * @param remote A boolean indicating whether the change originated from a different userscript instance.
     */
    type ValueChangeListener = (name: string, oldValue: any, newValue: any, remote: boolean) => void;

    // Response

    enum ReadyState {
        Unsent = 0,
        Opened = 1,
        HeadersReceived = 2,
        Loading = 3,
        Done = 4,
    }

    interface ResponseBase {
        readonly responseHeaders: string;
        /** The request's `readyState`. */
        readonly readyState: ReadyState;
        /** The response data as object if `details.responseType` was set. */
        readonly response: any;
        /** The response data as plain string. */
        readonly responseText: string;
        /** The response data as an XML document. */
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
        /** The final URL after all redirects from where the data was loaded. */
        readonly finalUrl: string;
        readonly context: TContext;
    }

    interface ProgressResponse<TContext> extends Response<TContext>, ProgressResponseBase {}

    // Request

    interface RequestHeaders {
        readonly [header: string]: string;
    }

    type RequestEventListener<TResponse> = (this: TResponse, response: TResponse) => void;

    interface Request<TContext = object> {
        method?: "GET" | "HEAD" | "POST";
        /** The destination URL */
        url: string | URL;
        /**
         * i.e. user-agent, referer... (some special headers are not supported
         * by Safari and Android browsers)
         */
        headers?: RequestHeaders;
        /** Data to send via a POST request */
        data?: string | Blob | File | object | any[] | FormData | URLSearchParams;
        /** Controls what to happen when a redirect is detected (build 6180+, enforces fetch mode). */
        redirect?: "follow" | "error" | "manual";
        /** A cookie to be patched into the sent cookie set */
        cookie?: string;
        /** Object containing the partition key to be used for sent and received partitioned cookies */
        cookiePartition?: {
            /** String representing the top frame site for partitioned cookies */
            topLevelSite?: string;
        };
        /** Send the data string in binary mode */
        binary?: boolean;
        /** Don't cache the resource */
        nocache?: boolean;
        /** Revalidate maybe cached content */
        revalidate?: boolean;
        /** Timeout in ms */
        timeout?: number;
        /** Property which will be added to the response object */
        context?: TContext;
        responseType?: "arraybuffer" | "blob" | "json" | "stream";
        /** MIME type for the request */
        overrideMimeType?: string;
        /** Don't send cookies with the requests (enforces `fetch` mode) */
        anonymous?: boolean;
        /**
         * (Beta) Use a fetch instead of a xhr request (at Chrome this causes
         * `xhr.abort`, `details.timeout` and `xhr.onprogress` to not work and
         * makes `xhr.onreadystatechange` receive only readyState 4 events)
         */
        fetch?: boolean;
        /** Username for authentication */
        user?: string;
        /** Password for authentication */
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
        error: "not_enabled" | "not_whitelisted" | "not_permitted" | "not_supported" | "not_succeeded";
        /** Detail about that error */
        details?: string;
    }

    // Download Request

    interface DownloadRequest {
        /**
         * The URL of the file to download. This must be a valid URL and
         * must point to a file that is accessible to the user.
         */
        url: string;
        /**
         * The name to use for the downloaded file. This should include the file's extension,
         * such as `.txt` or `.pdf`. For security reasons the file extension needs to be
         * whitelisted at Tampermonkey's options page.
         */
        name: string;
        /**
         * An object containing HTTP headers to include in the download request.
         * See `GM_xmlhttpRequest` for more details.
         */
        headers?: RequestHeaders;
        /**
         * A boolean value indicating whether to use the user's default download location,
         * or to prompt the user to choose a different location.
         * This option works in browser API mode only.
         */
        saveAs?: boolean;
        timeout?: number;
        /**
         * A string that control what happens when a file with this name already exists.
         * This option works in browser API mode only. Please check
         * [this link](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/FilenameConflictAction)
         * for more details.
         */
        conflictAction?: "uniquify" | "overwrite" | "prompt";
        /** A function to call if the download fails or is cancelled. */
        onerror?: RequestEventListener<DownloadErrorResponse>;
        /** A callback to be executed if this download failed due to a timeout. */
        ontimeout?(): void;
        /** A function to call when the download has completed successfully. */
        onload?(): void;
        /** Callback to be executed if this download failed due to a timeout */
        onprogress?: RequestEventListener<DownloadProgressResponse>;
    }

    interface AbortHandle<TReturn> {
        abort(): TReturn;
    }

    interface OpenTabOptions {
        /** A boolean value indicating whether the new tab should be active (selected) or not (default is `false`). */
        active?: boolean;
        /**
         * An integer indicating the position at which the new tab should be inserted in the tab strip.
         * The default is `false`, which means the new tab will be added to the end of the tab strip.
         */
        insert?: number | boolean;
        /** A boolean value indicating whether the new tab should be considered a child of the current tab (default is `false`). */
        setParent?: boolean;
        /** A boolean value that makes the tab being opened inside a incognito mode/private mode window. */
        incognito?: boolean;
    }

    interface OpenTabObject {
        /** Closes tab */
        close(): void;
        /** Set closed listener */
        onclose?(): void;
        closed: boolean;
    }

    interface NotificationThis extends Notification {
        id: string;
    }

    type NotificationOnClick = (this: NotificationThis) => void;
    /** `clicked` is `true` when `text` was set */
    type NotificationOnDone = (this: NotificationThis, clicked: boolean) => void;

    interface Notification {
        /** A string containing the message to display in the notification (optional if highlight is set). */
        text?: string;
        /** The title of the notification. If not specified the script name is used. */
        title?: string;
        /**
         * This tag will be used to identify this notification. This way you can update existing notifications
         * by calling `GM_notification` again and using the same tag. If you don't provide a tag,
         * a new notification will be created every time.
         */
        tag?: string;
        /** The URL of an image to display in the notification. */
        image?: string;
        /** Flag whether to highlight the tab that sends the notification. */
        highlight?: boolean;
        /** Whether to play or not play a sound. */
        silent?: boolean;
        /**
         * The time, in milliseconds, after which the notification
         * should automatically close. `0` = disabled.
         */
        timeout?: number;
        /**
         * A URL to load when the user clicks on the notification. You can prevent loading the URL
         * by calling `event.preventDefault()` in the `onclick` event handler.
         */
        url?: string;
        /**
         * Called when the notification is closed (no matter if this was
         * triggered by a timeout or a click) or the tab was highlighted.
         */
        onclick?: NotificationOnClick;
        /** Called in case the user clicks the notification. */
        ondone?: NotificationOnDone;
    }

    interface TextNotification extends Notification {
        /** Text of the notification (optional if highlight is set) */
        text: string;
    }

    interface HighlightNotification extends Notification {
        /** A string containing the message to display in the notification. */
        text?: undefined;
        /** Whether to highlight the tab that sends the notfication (required unless text is set) */
        highlight: true;
    }

    type NotificationDetails = TextNotification | HighlightNotification;

    // Interfaces for GM_info

    /**
     * The metadata that the user can override in the settings
     * for example run-at or excludes
     */
    interface ScriptMetadataOverrides {
        merge_connects: boolean;
        merge_excludes: boolean;
        merge_includes: boolean;
        merge_matches: boolean;
        orig_connects: string[];
        orig_excludes: string[];
        orig_includes: string[];
        orig_matches: string[];
        orig_noframes: string | null;
        orig_run_at: string | null;
        use_blockers: string[];
        use_connects: string[];
        use_excludes: string[];
        use_includes: string[];
        use_matches: string[];
    }

    /**
     * The options that the user of the userscript
     * can set in the settings (!== overrides)
     */
    interface ScriptSettings {
        check_for_updates: boolean;
        comment: string | null;
        compat_foreach: boolean;
        compat_metadata: boolean;
        compat_powerful_this: boolean | null;
        compat_prototypes: boolean;
        compat_wrappedjsobject: boolean;
        compatopts_for_requires: boolean;
        noframes: boolean | null;
        run_at: string;
        sandbox: string | null;
        tab_types: string | null;
        unwrap: boolean | null;

        override: ScriptMetadataOverrides;
    }

    /**
     * The resources from the metadata block (@resources)
     * that tampermonkey should preload
     */
    interface ScriptResource {
        name: string;
        url?: string;
        content?: string;
        meta?: string;
        error?: string;
    }

    interface WebRequestRule {
        selector: {
            include?: string | string[];
            match?: string | string[];
            exclude?: string | string[];
        } | string;
        action: string | {
            cancel?: boolean;
            redirect?: {
                url: string;
                from?: string;
                to?: string;
            } | string;
        };
    }

    /**
     * `.. | null` means if it was not explicitely set in the metadata
     * block it is null
     */
    interface ScriptMetadata {
        antifeatures: Record<string, Record<string, string>>;
        author: string | null;

        blockers: string[];

        copyright: string | null;
        deleted?: number;
        description: string | null;
        description_i18n: Record<string, string> | null;
        downloadURL: string | null;
        enabled?: boolean;
        evilness: number;
        excludes: string[];
        fileURL?: string | null;
        grant: string[];
        header: string;
        homepage: string | null;
        icon: string | null;
        icon64: string | null;
        includes: string[];
        lastModified: number;
        matches: string[];
        name: string;
        name_i18n: Record<string, string> | null;
        namespace: string | null;
        options: ScriptSettings;

        position: number;
        resources: ScriptResource[];

        /**
         * Never null, defaults to document-idle
         */
        "run-at": string;

        supportURL: string | null;
        sync?: {
            imported?: number;
        };
        system?: boolean;
        unwrap: boolean;
        updateURL: string | null;
        uuid: string;
        version: string;
        webRequest: WebRequestRule[] | null;
    }

    interface ScriptInfo {
        downloadMode: "native" | "browser" | "disabled";
        isFirstPartyIsolation?: boolean;
        isIncognito: boolean;
        script: ScriptMetadata;
        sandboxMode: "js" | "raw" | "dom";

        /**
         * In tampermonkey it's "Tampermonkey"
         * but I'll leave it as string so this can be used
         * for other managers
         */
        scriptHandler: string;

        scriptMetaStr: string | null;
        scriptSource: string;
        scriptUpdateURL: string | null;
        scriptWillUpdate: boolean;

        /** This refers to tampermonkey's version */
        version?: string;
    }

    type ContentType = string | { type?: string; mimetype?: string };

    // GM_webRequest
    interface WebRequestRuleParam {
        /**
         * Specifies the URLs for which the rule should be triggered.
         * String value is shortening for `{ include: [selector] }`.
         */
        selector: string | {
            /** URLs, patterns, and regexpes for rule triggering. */
            include?: string | string[];
            /** URLs and patterns for rule triggering. */
            match?: string | string[];
            /** URLs, patterns, and regexpes for not triggering the rule. */
            exclude?: string | string[];
        };
        /**
         * Specifies to do with the request.
         * String value `cancel` is shortening for `{ cancel: true }`.
         */
        action: "cancel" | {
            /** Whether to cancel the request. */
            cancel?: boolean;
            /**
             * Redirect to some URL which must be included in any
             * `@match` or `@include` header.
             * When a string, redirects to a given static URL.
             */
            redirect?: string | {
                /** A RegExp to extract some parts of the URL (for example `"([^:]+)://match.me/(.*)"`). */
                from: string;
                /** Pattern for substitution (for example `"$1://redirected.to/$2"`). */
                to: string;
            };
        };
    }

    type WebRequestListener = (
        /** The type of the action. */
        info: "cancel" | "redirect",
        message: "ok" | "error",
        /** Info about the request and rule. */
        details: {
            /** The triggered rule */
            rule: WebRequestRuleParam;
            /** The URL of the request. */
            url?: string;
            /** Where the request was redirected. */
            redirect_url?: string;
            /** Error description. */
            description?: string;
        },
    ) => void;

    // GM_cookie.*
    interface Cookie {
        /** The domain of the cookie. */
        domain: string;
        /** The first-party domain of the cookie. */
        firstPartyDomain?: string;
        /** The partition key of the cookie. */
        partitionKey?: {
            /** The top frame site of the cookie. */
            topLevelSite?: string;
        };
        /** Indicates whether the cookie is a host-only cookie. */
        hostOnly: boolean;
        /** Indicates whether the cookie is an HTTP-only cookie. */
        httpOnly: boolean;
        /** The name of the cookie. */
        name: string;
        /** The path of the cookie. */
        path: string;
        /** The `SameSite` attribute of the cookie */
        sameSite: string;
        /** Whether the cookie requires a secure connection. */
        secure: boolean;
        /** Whether the cookie is a session cookie. */
        session: boolean;
        /** The value of the cookie. */
        value: string;
        /** The date the cookie expires in seconds since the Unix epoch. */
        expirationDate?: number;
    }

    interface ListCookiesDetails {
        /** The URL to retrieve cookies from (defaults to current document URL). */
        url?: string;
        /** The domain of the cookies to retrieve. */
        domain?: string;
        /** The name of the cookies to retrieve. */
        name?: string;
        /** The path of the cookies to retrieve. */
        path?: string;
        /**
         * Object containing the partition key to be used for sent and received partitioned cookies.
         * Use an empty object to retrieve all cookies.
         */
        partitionKey?: {
            /** String representing the top frame site of the cookies */
            topLevelSite?: string;
        };
    }

    type ListCookiesCallback = (
        /** An array containing the retrieved cookies. */
        cookies: Cookie[],
        /** An error message if an error occurred, `null` otherwise. */
        error: string | null,
    ) => void;

    interface SetCookiesDetails {
        /**
         * The URL to associate the cookie with. If not specified,
         * the cookie is associated with the current document's URL.
         */
        url?: string;
        /** The name of the cookie. */
        name: string;
        /** The value of the cookie. */
        value: string;
        /** The domain of the cookie. */
        domain?: string;
        /** The first-party domain of the cookie. */
        firstPartyDomain?: string;
        /** The partition key of the cookie. */
        partitionKey?: {
            /** The top frame site of the cookie. */
            topLevelSite?: string;
        };
        /** The path of the cookie. */
        path?: string;
        /** Whether the cookie should only be sent over HTTPS. */
        secure?: boolean;
        /** Whether the cookie should be marked as `HttpOnly`. */
        httpOnly?: boolean;
        /**
         * The expiration date of the cookie in seconds since the Unix epoch.
         * If not specified, the cookie never expires.
         */
        expirationDate?: number;
    }

    interface DeleteCookiesDetails {
        /**
         * The URL associated with the cookie. If `url` is not specified,
         * the current document's URL will be used.
         */
        url: string;
        /** The name of the cookie to delete. */
        name: string;
        /** The first party domain of the cookie to delete. */
        firstPartyDomain: string;
        /** The partition key of the cookie to delete. */
        partitionKey: {
            /** The top frame site of the cookies. */
            topLevelSite?: string;
        };
    }
}

/**
 * The unsafeWindow object provides full access to the pages JavaScript
 * functions and variables
 */
declare var unsafeWindow:
    & Window
    & Omit<
        typeof globalThis,
        | "GM_addElement"
        | "GM_addStyle"
        | "GM_addValueChangeListener"
        | "GM_deleteValue"
        | "GM_download"
        | "GM_getResourceText"
        | "GM_getResourceURL"
        | "GM_getTab"
        | "GM_getTabs"
        | "GM_getValue"
        | "GM_info"
        | "GM_listValues"
        | "GM_log"
        | "GM_notification"
        | "GM_openInTab"
        | "GM_registerMenuCommand"
        | "GM_removeValueChangeListener"
        | "GM_saveTab"
        | "GM_setClipboard"
        | "GM_setValue"
        | "GM_unregisterMenuCommand"
        | "GM_xmlhttpRequest"
        | "GM"
    >;

/**
 * Patched onurlchange attribute based on document {@link https://www.tampermonkey.net/documentation.php#meta:grant}
 * @url https://www.tampermonkey.net/documentation.php#meta:grant
 */
interface Window {
    /**
     * check before use addEventListener
     *
     * According to the documentation and code, the value can currently only be of type null
     * @url https://www.tampermonkey.net/documentation.php#meta:grant
     * @example
     * if (window.onurlchange === null) {
     *   window.addEventListener('urlchange', (info) => console.log(info));
     * }
     */
    onurlchange: null;
    addEventListener(type: "urlchange", listener: (urlObject: { url: string }) => void): void;
}

/**
 * `GM_addElement` allows Tampermonkey scripts to add new elements to the page
 * that Tampermonkey is running on. This can be useful for a variety of purposes,
 * such as adding `script` and `img` tags if the page limits these elements
 * with a content security policy (CSP).
 *
 * The resulting HTML element will be attached to document head or body.
 *
 * @url https://www.tampermonkey.net/documentation.php#api:GM_addElement
 * @param tagName Specifies the HTML element tag name.
 * @param attributes Attributes that applied to the HTML element.
 * For suitable `attributes`, please consult the appropriate documentation. For example:
 *
 * - [`script` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
 * - [`img` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
 * - [`style` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
 * @returns The injected HTML element
 */
declare function GM_addElement(tagName: string, attributes: object): HTMLElement;

/**
 * `GM_addElement` allows Tampermonkey scripts to add new elements to the page
 * that Tampermonkey is running on. This can be useful for a variety of purposes,
 * such as adding `script` and `img` tags if the page limits these elements
 * with a content security policy (CSP).
 *
 * @url https://www.tampermonkey.net/documentation.php#api:GM_addElement
 * @param parentNode The node the resulting HTML element will be attached to.
 * @param tagName Specifies the HTML element tag name.
 * @param attributes Attributes that applied to the HTML element.
 * For suitable `attributes`, please consult the appropriate documentation. For example:
 *
 * - [`script` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
 * - [`img` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
 * - [`style` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
 *
 * @returns The injected HTML element
 */
declare function GM_addElement(
    parentNode: Element,
    tagName: string,
    attributes: object,
): HTMLElement;

// Styles

/**
 * Applies the given style to the document.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_addStyle
 * @param css The styles to apply.
 * @returns The injected style element.
 */
declare function GM_addStyle(css: string): HTMLStyleElement;

// Storage

/**
 * Sets the value of a specific key in the userscript's storage.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_setValue
 * @param name A string specifying the key for which the value should be set.
 * @param value The value to be set for the key.
 */
declare function GM_setValue(name: string, value: any): void;

/**
 * Adds a listener for changes to the value of a specific key in the userscript's storage.
 * This functionality can be used by scripts of different browser tabs to communicate with each other.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_addValueChangeListener
 * @param name A string specifying the key for which changes should be monitored.
 * @param listener A callback function that will be called when the value of the key changes.
 * @returns A `listenerId` value that can be used to remove the listener later using `GM_removeValueChangeListener`.
 */
declare function GM_addValueChangeListener(name: string, listener: Tampermonkey.ValueChangeListener): number;

/**
 * Removes a change listener by its ID.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_removeValueChangeListener
 */
declare function GM_removeValueChangeListener(listenerId: number): void;

/**
 * Retrieves the value of a specific key in the extension's storage.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_getValue
 * @param name A string specifying the key for which the value should be retrieved.
 * @param defaultValue A default value to be returned if the key does not exist in the extension's storage.
 * @returns The value of the specified key from the extension's storage, or the default value if the key does not exist.
 */
declare function GM_getValue<TValue>(name: string, defaultValue?: TValue): TValue;

/**
 * Deletes `name` from the userscript's storage.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_deleteValue
 * @param name A string specifying the key that should be deleted from storage.
 */
declare function GM_deleteValue(name: string): void;

/**
 * Returns a list of keys of all stored data.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_listValues
 */
declare function GM_listValues(): string[];

// Resources

/**
 * Retrieves the text of a resource (such as a JavaScript or CSS file)
 * that has been included in a userscript via @resource.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_getResourceText
 * @param name The name of the resource to retrieve.
 * @returns The text of the resource as a string.
 */
declare function GM_getResourceText(name: string): string;

/**
 * Get the base64 encoded URI of a predefined `@resource` tag at the script
 * header
 * @url https://www.tampermonkey.net/documentation.php#api:GM_getResourceURL
 * @param name The name of the resource to retrieve.
 * @returns The URL of the resource as a string.
 */
declare function GM_getResourceURL(name: string): string;

// Menu commands

/**
 * Adds a new entry to the userscript's menu in the browser,
 * and specifies a function to be called when the menu item is selected.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_registerMenuCommand
 * @param name A string containing the text to display for the menu item.
 * @param onclick A function to be called when the menu item is selected.
 *                The function will be passed a single parameter,
 *                which is the currently active tab. As of Tampermonkey 4.14,
 *                a `MouseEvent` or `KeyboardEvent` is passed as function argument.
 * @param optionsOrAccessKey An access key or options to customize the menu item.
 * @returns A menu entry ID that can be used to unregister the command.
 */
declare function GM_registerMenuCommand(
    name: string,
    onClick: (
        event: MouseEvent | KeyboardEvent,
    ) => void,
    optionsOrAccessKey?: string | {
        /**
         * An optional number that was returned by a previous `GM_registerMenuCommand` call.
         * If specified, the according menu item will be updated with the new options.
         * If not specified or the menu item can't be found, a new menu item will be created.
         */
        id?: number | string;
        /**
         * An optional access key for the menu item. This can be used to create a shortcut for the menu item.
         * For example, if the access key is "s", the user can select the menu item by pressing "s"
         * when Tampermonkey's popup-menu is open. Please note that there are browser-wide shortcuts
         * configurable to open Tampermonkey's popup-menu.
         */
        accessKey?: string;
        /**
         * An optional boolean parameter that specifies whether the popup menu should be closed
         * after the menu item is clicked. The default value is `true`. Please note that this setting
         * has no effect on the menu command section that is added to the page's context menu.
         */
        autoClose?: boolean;
        /**
         * An optional string that specifies the title of the menu item. This is displayed
         * as a tooltip when the user hovers the mouse over the menu item.
         */
        title?: string;
    },
): number;

/**
 * Removes an existing entry from the userscript's menu in the browser
 * that was previously registered by `GM_registerMenuCommand` or `GM.registerMenuCommand`
 * with the given menu command ID.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_unregisterMenuCommand
 * @param menuCommandId The id of the menu item to remove.
 */
declare function GM_unregisterMenuCommand(menuCommandId: number): void;

// Requests

/**
 * Sends an HTTP request and handles the response.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_xmlhttpRequest
 * @param details An object containing the details of the request to be sent
 *                and the callback functions to be called when the response is received.
 */
declare function GM_xmlhttpRequest<TContext = any>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
    details: Tampermonkey.Request<TContext>,
): Tampermonkey.AbortHandle<void>;

/**
 * Downloads a file from a specified URL and save it to the user's local machine.
 * Note: The browser might modify the desired filename. Especially a file extension might
 * be added if the browser finds this to be safe to download at the current OS.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_download
 * @param details Details about the download.
 */
declare function GM_download(details: Tampermonkey.DownloadRequest): Tampermonkey.AbortHandle<boolean>;
/**
 * Downloads a file from a specified URL and save it to the user's local machine.
 * Note: The browser might modify the desired filename. Especially a file extension might
 * be added if the browser finds this to be safe to download at the current OS.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_download
 * @param url The URL of the file to download. This must be a valid URL and must point to a file that is accessible to the user.
 * @param name The name to use for the downloaded file. This should include the file's extension,
 *             such as `.txt` or `.pdf`. For security reasons the file extension needs to be whitelisted
 *             at Tampermonkey's options page
 */
declare function GM_download(url: string, name: string): Tampermonkey.AbortHandle<boolean>;

// Tabs

/**
 * Saves information about a tab so that it can be retrieved later
 * using the `GM_getTab` function.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_saveTab
 * @param tab An object containing the information to be saved about the tab.
 * @param callback An optional callback function
 */
declare function GM_saveTab(tab: object, callback?: () => void): void;

/**
 * Gets a object that is persistent as long as this tab is open
 * @url https://www.tampermonkey.net/documentation.php#api:GM_getTab
 * @param callback Function that will be called with an object that is persistent as long as this tab is open.
 */
declare function GM_getTab(callback: (obj: any) => void): void;

/**
 * Gets all tab objects as a hash to communicate with other script instances
 * @url https://www.tampermonkey.net/documentation.php#api:GM_getTabs
 * @param callback A callback function that will be called with the information about the tabs..
 */
declare function GM_getTabs(
    callback: (
        /**
         * The `tabsMap` object that is passed to the callback function contains objects,
         * with each object representing the saved tab information stored by `GM_saveTab`.
         */
        tabsMap: { [tabId: number]: any },
    ) => void,
): void;

// Utils

/**
 * Returns information about the script and Tampermonkey.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_info
 */
declare var GM_info: Tampermonkey.ScriptInfo;

/**
 * Logs a message to the console
 * @url https://www.tampermonkey.net/documentation.php#api:GM_log
 */
declare function GM_log(...message: any[]): void;

/**
 * Opens a new tab with this url.
 * The options object can have the following properties:
 * - `active` decides whether the new tab should be focused,
 * - `insert` that inserts the new tab after the current one and
 * - `setParent` makes the browser re-focus the current tab on close.
 *
 * Otherwise the new tab is just appended.
 * If `options` is boolean (`loadInBackground`) it has the opposite meaning of
 * active and was added to achieve Greasemonkey 3.x compatibility.
 *
 * If neither `active` nor `loadInBackground` is given, then the tab will not be
 * focused.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_openInTab
 * @param url The URL of the page to open in the new tab.
 * @param options An object that can be used to customize the behavior of the new tab.
 * @returns An object with the function `close`, the listener `onclose` and a flag
 * called `closed`.
 */
declare function GM_openInTab(
    url: string,
    options?: Tampermonkey.OpenTabOptions | boolean,
): Tampermonkey.OpenTabObject;

/**
 * Shows an HTML5 Desktop notification and/or highlight the current tab
 * using a provided message and other optional parameters.
 *
 * Since v5.0, if no `url` and no `tag` is provided in `details` argument, the notification will close
 * when the userscript unloads (e.g. when the page is reloaded or the tab is closed).
 * @url https://www.tampermonkey.net/documentation.php#api:GM_notification
 * @param details Notification parameters.
 * @param ondone A callback function that will be called when the notification is closed
 *              (no matter if this was triggered by a timeout or a click) or the tab was highlighted.
 *              If specified, used instead of `details.ondone`.
 */
declare function GM_notification(
    details: Tampermonkey.NotificationDetails,
    ondone?: Tampermonkey.NotificationOnDone,
): void;

/**
 * Shows an HTML5 Desktop notification and/or highlight the current tab
 * using a provided message and other optional parameters.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_notification
 * @param text A string containing the message to display in the notification.
 * @param title The title of the notification. If not specified, the script name is used.
 * @param image The URL of an image to display in the notification.
 * @param onClick A callback function that will be called when the user clicks on the notification.
 */
declare function GM_notification(
    text: string,
    title?: string,
    image?: string,
    onClick?: Tampermonkey.NotificationOnClick,
): void;

/**
 * Sets the text of the clipboard to a specified value.
 * The parameter 'info' can be an object like
 * `{ type: 'text', mimetype: 'text/plain'}` or just a string expressing the
 * type ("text" or "html").
 * @url https://www.tampermonkey.net/documentation.php#api:GM_setClipboard
 * @param data The string to set as the clipboard text.
 * @param info A string expressing the type `text` or `html` or an object.
 * @param callback An optional callback function that is called when the clipboard has been set.
 */
declare function GM_setClipboard(
    data: string,
    info?: Tampermonkey.ContentType,
    callback?: () => void,
): void;

/**
 * `GM_webRequest` (re-)registers rules for web request manipulations
 * and the listener of triggered rules. If you need to just register rules
 * it's better to use `@webRequest` header. Note, `webRequest` proceeds only requests
 * with types `sub_frame`, `script`, `xhr` and `websocket`.
 * **Note: this API is experimental and might change at any time.**
 * It might also disappear or change during manifest v3 migration.
 * @url https://www.tampermonkey.net/documentation.php#api:GM_webRequest
 * @param rules An array of rules.
 * @param listener A function called when the rule is triggered. It cannot impact on the rule action.
 * @returns An object with an `.abort()` method.
 */
declare function GM_webRequest(
    rules: Tampermonkey.WebRequestRuleParam[],
    listener?: Tampermonkey.WebRequestListener,
): Tampermonkey.AbortHandle<void>;

// GM_cookie.*

// https://stackoverflow.com/a/59987826
// for GM_cookie.delete()
type AtLeastOneOf<T> = { [K in keyof T]: Pick<T, K> }[keyof T];

declare var GM_cookie: {
    /**
     * Retrieves all cookies whose properties match those given.
     * Tampermonkey checks if the script has `@include` or `@match`
     * access to given `details.url` arguments!
     *
     * **Note: the `GM_cookie` API is experimental and might
     * return a `not supported` error at some Tampermonkey versions.**
     * @url https://www.tampermonkey.net/documentation.php#api:GM_cookie.list
     * @param details Object containing properties of the cookies to retrieve.
     * @param callback Function to be called when the cookies have been retrieved.
     */
    list(
        details?: Tampermonkey.ListCookiesDetails,
        callback?: Tampermonkey.ListCookiesCallback,
    ): void;

    /**
     * Sets a cookie with the given details. Supported properties
     * [are defined here](https://developer.chrome.com/extensions/cookies#method-set).
     *
     * **Note: the `GM_cookie` API is experimental and might
     * return a `not supported` error at some Tampermonkey versions.**
     * @url https://www.tampermonkey.net/documentation.php##api:GM_cookie.set
     * @param details An object containing the details of the cookie to be set.
     * @param callback A function to be called when the operation is complete.
     */
    set(
        details: Tampermonkey.SetCookiesDetails,
        callback?: (
            /**
             * If there was an error setting the cookie, this contains
             * an error message. Otherwise, it is `undefined`.
             */
            error?: string,
        ) => void,
    ): void;

    /**
     * Deletes a cookie whose properties match those given.
     *
     * **Note: the `GM_cookie` API is experimental and might
     * return a `not supported` error at some Tampermonkey versions.**
     * @url https://www.tampermonkey.net/documentation.php##api:GM_cookie.delete
     * @param details An object containing the details of the cookie to be deleted.
     * @param callback Function called when the cookie has been deleted or when an error has occurred.
     */
    delete(
        details: AtLeastOneOf<Tampermonkey.DeleteCookiesDetails>,
        callback?: (
            /** An error message, or `undefined` if the cookie was deleted successfully. */
            error?: string,
        ) => void,
    ): void;
};

// GM.*

/**
 * `GM` has all the `GM_*` APIs in promisified form
 */
declare var GM: Readonly<{
    // Styles

    /**
     * Adds the given style to the document and returns the injected style element.
     */
    addStyle(css: string): Promise<HTMLStyleElement>;

    // Storage

    /** Sets the value of `name` to the storage */
    setValue(name: string, value: any): Promise<void>;

    /** Gets the value of 'name' from storage */
    getValue<TValue>(name: string, defaultValue?: TValue): Promise<TValue>;

    /** Deletes 'name' from storage */
    deleteValue(name: string): Promise<void>;

    /** Lists all names of the storage */
    listValues(): Promise<string[]>;

    /**
     * Adds a change listener to the storage and returns the listener ID.
     * The `remote` argument of the callback function shows whether this value was
     * modified from the instance of another tab (`true`) or within this script
     * instance (`false`). Therefore this functionality can be used by scripts of
     * different browser tabs to communicate with each other.
     * @param name Name of the observed variable
     */
    addValueChangeListener(name: string, listener: Tampermonkey.ValueChangeListener): Promise<number>;

    /** Removes a change listener by its ID */
    removeValueChangeListener(listenerId: number): Promise<void>;

    // Resources

    /** Get the content of a predefined `@resource` tag at the script header */
    getResourceText(name: string): Promise<string>;

    /**
     * Get the base64 encoded URI of a predefined `@resource` tag at the script
     * header
     */
    getResourceUrl(name: string): Promise<string>;

    // Menu commands

    /**
     * Register a menu to be displayed at the Tampermonkey menu at pages where this
     * script runs and returns a menu command ID.
     * @param accessKey The key to use for keyboard shortcuts
     */
    registerMenuCommand(name: string, onClick: () => void, accessKey?: string): Promise<number>;
    /**
     *  Unregister a menu command that was previously registered by
     * `GM_registerMenuCommand` or `GM.registerMenuCommand` with the given menu command ID.
     */
    unregisterMenuCommand(menuCommandId: number): Promise<void>;

    // Requests

    /**
     * Makes an xmlHttpRequest
     *
     * @throws {Tampermonkey.ErrorResponse}
     */
    xmlHttpRequest<TContext = any>(
        // onload and the like still work
        details: Tampermonkey.Request<TContext>, // eslint-disable-line @definitelytyped/no-unnecessary-generics
    ): Promise<Tampermonkey.Response<TContext>>;

    // GM_download has two signatures, GM.download has one
    /**
     * Downloads a given URL to the local disk
     *
     * @throws {Tampermonkey.DownloadErrorResponse}
     */
    download(details: Tampermonkey.DownloadRequest): Promise<void>;

    // Tabs

    /** Saves the tab object to reopen it after a page unload */
    saveTab(obj: any): Promise<void>;

    /** Gets a object that is persistent as long as this tab is open */
    getTab(): Promise<any>;

    /** Gets all tab objects as a hash to communicate with other script instances */
    getTabs(): Promise<{ [tabId: number]: any }>;

    // Utils
    info: Tampermonkey.ScriptInfo;

    /** Log a message to the console */
    log(...message: any[]): Promise<void>;

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
     * @returns Object with the function `close`, the listener `onclose` and a flag
     * called `closed`.
     */
    openInTab(url: string, options?: Tampermonkey.OpenTabOptions | boolean): Promise<Tampermonkey.OpenTabObject>;

    /**
     * Shows a HTML5 Desktop notification and/or highlight the current tab.
     * @param ondone If specified used instead of `details.ondone`
     * @returns True if the notification was clicked
     */
    notification(details: Tampermonkey.NotificationDetails, ondone?: Tampermonkey.NotificationOnDone): Promise<boolean>;

    /**
     * Shows a HTML5 Desktop notification and/or highlight the current tab.
     * @param text Text of the notification
     * @param title Notification title. If not specified the script name is used
     * @param onclick Called in case the user clicks the notification
     * @returns True if the notification was clicked
     */
    notification(
        text: string,
        title?: string,
        image?: string,
        onclick?: Tampermonkey.NotificationOnClick,
    ): Promise<boolean>;

    /**
     * Copies data into the clipboard.
     * The parameter 'info' can be an object like
     * `{ type: 'text', mimetype: 'text/plain'}` or just a string expressing the
     * type ("text" or "html").
     */
    setClipboard(data: string, info?: Tampermonkey.ContentType): Promise<void>;
}>;
