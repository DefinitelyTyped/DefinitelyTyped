//
// This definition is based on the API reference of FireMonkey
// https://erosman.github.io/support/content/help.html#Script-API

declare namespace GM {
    interface PlatformInfo {
        os: "mac" | "win" | "android" | "cros" | "linux" | "openbsd" | "fuchsia";
        arch: "arm" | "x86-32" | "x86-64";
    }

    interface BrowserInfo {
        name: "Firefox";
        vendor: "Mozilla";
        version: string;
        buildID: string;
    }
    interface ScriptInfo {
        name: string;
        version: string;
        description: string;
        matches: string[];
        excludeMatches: string[];
        includes: string[];
        excludes: string[];
        includeGlobs: string[];
        excludeGlobs: string[];
        "run-at": "document_start" | "document_end" | "document_idle";
        namespace: string | null;
        /**
         * An object keyed by resource name.
         * Each value is an object with keys `name` and `mimetype` and `url`
         *  with string values.
         */
        resources: {
            [resourceName: string]: {
                name: string;
                mimetype: string;
                url: string;
            };
        };
    }
    type Value = string | boolean | number | object;
    type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "TRACE" | "OPTIONS" | "CONNECT";
    interface Headers {
        [header: string]: string;
    }

    interface XMLRequest<TContext = any> {
        /**
         * The URL to make the request to. Must be an absolute URL, beginning
         * with the scheme. May be relative to the current page.
         */
        url: string | URL;
        /** String type of HTTP request to make (E.G. "GET", "POST") */
        method?: RequestMethod;
        /** A set of headers to include in the request */
        headers?: Headers;
        /**
         * Data to send in the request body. Usually for POST method requests.
         * If the data field contains form-encoded data, you usually must also
         * set the header `'Content-Type': 'application/x-www-form-urlencoded'`
         * in the `headers` field.
         */
        data?: string;
        /**
         * A MIME type to specify with the request (e.g.
         * "text/html; charset=ISO-8859-1")
         */
        overrideMimeType?: string;
        /** User name to use for authentication purposes. */
        user?: string;
        /** Password to use for authentication purposes */
        password?: string;
        /**
         * The number of milliseconds to wait before terminating the call. Zero
         * (the default) means wait forever.
         */
        timeout?: number;
        withCredentials?: boolean;
        responseType?: XMLHttpRequestResponseType;
        anonymous?: boolean;

        /** Callback Functions */
        /** Will be called when the request has completed successfully */
        onload?(response: XMLResponse<TContext>): void;
        /** Will be called if an error occurs while processing the request */
        onerror?(response: XMLResponse<TContext>): void;
        /** Will be called if/when the request times out */
        ontimeout?(response: XMLResponse<TContext>): void;
        /** Will be called when the request is aborted */
        onabort?(response: XMLResponse<TContext>): void;
    }
    interface XMLResponse<TContext> {
        readonly readyState: 1 | 2 | 3 | 4;
        readonly response: any;
        readonly responseHeaders: string;
        readonly responseText: string;
        readonly responseType?: string;
        readonly responseURL?: string;
        readonly responseXML: Document | undefined;
        readonly status: number;
        readonly statusText: string;
        readonly finalUrl: string;
    }

    interface FetchRequest {
        /** The request method */
        method?: RequestMethod;
        /** A set of headers to include in the request */
        headers?: Headers;
        /** Any body that you want to add to your request */
        body?: XMLHttpRequestBodyInit;
        /** The mode you want to use for the request */
        mode?: RequestMode;
        /** The request credentials you want to use for the request */
        credentials?: RequestCredentials;
        /** The cache mode you want to use for the request */
        cache?: RequestCache;
        /** The redirect mode */
        redirect?: RequestRedirect;
        /** A USVString */
        referrer?: "no-referrer" | "client" | URL;
        /** Specifies the value of the referer HTTP header */
        referrerPolicy?: ReferrerPolicy;
        /** Contains the subresource integrity value of the request */
        integrity?: string;
        /** The keepalive option can be used to allow the request to outlive the page. Fetch with the keepalive flag is a replacement for the Navigator.sendBeacon() API. */
        keepalive?: boolean;
        /** An AbortSignal object instance; allows you to communicate with a fetch request and abort it if desired via an AbortController */
        signal?: AbortSignal | string;
        /** Any headers you want to add to your request */
        responseType?: XMLHttpRequestResponseType;
        /**  If true, no cookie will be sent with the request. */
        anonymous?: boolean;
    }

    interface FetchResponse {
        readonly headers: string;
        readonly bodyUsed: boolean;
        readonly ok: boolean;
        readonly redirected: boolean;
        readonly status: number;
        readonly statusText: "OK";
        readonly type: "basic";
        readonly url: URL;

        // plus one of the following properties based on responseType, if method is not HEAD
        readonly text?: string;
        readonly json?: any;
        readonly blob?: Blob;
        readonly arrayBuffer?: ArrayBuffer;
        readonly formData?: FormData;
    }
}

/**
 * Window object of the content page where the user script is running on.
 * @see {@link https://erosman.github.io/support/content/help.html#unsafeWindow}
 */
declare var unsafeWindow: Window;

/**
 * exports content script function to the page script's scope, so the page script can call it.
 * @param func The function to export.
 * @param targetScope The object to attach the function to. This does not have to be the global window object: it could be any other object in the target window, or an object created by the caller.
 * @param options.defineAs determines the name of the function in _targetScope_. If this is omitted, you need to assign the return value of exportFunction() to an object in the target scope.
 * @param options.allowCrossOriginArguments do not check that arguments to the exported function are subsumed by the caller: this allows the caller to pass objects with a different origin
 * into the exported function, which can then use its privileged status to make cross-origin requests with them
 * @returns A function which has been created in the target context.
 * @example // defines a function, then exports it to a content window
 * exportFunction(notify, window, {defineAs: 'notify'});
 * @example // Instead of using defineAs, the script can assign the result of exportFunction to an object in the target scope
 * window.notify = exportFunction(notify, window);
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#exportfunction}
 */

declare function exportFunction<T>(
    func: T,
    targetScope: object,
    options?: { defineAs?: string; allowCrossOriginArguments?: boolean },
): T;

/**
 * This function provides a safe way to take an object defined in a privileged scope and create a structured clone of it in a less-privileged scope
 * @param obj The object to clone.
 * @param targetScope The object to attach the object to.
 * @param options.cloneFunctions if functions should be cloned. Cloned functions have the same semantics as functions exported using exportFunction()
 * @param options.wrapReflectors if objects reflected from C++, such as DOM objects, should be cloned.
 * @returns A reference to the cloned object.
 * @example // object without methods
 * unsafeWindow.messenger = cloneInto(obj, unsafeWindow);
 * @example // object with methods
 * unsafeWindow.messenger = cloneInto(obj, unsafeWindow, {cloneFunctions: true});
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#cloneinto}
 */
declare function cloneInto<T>(
    obj: T,
    targetScope: object,
    options?: { cloneFunctions?: boolean; wrapReflectors?: boolean },
): T;

// #region GM3 style APIs

declare var GM: {
    /**
     * Appends and returns an element with the specified attributes
     * @example
     * // loading an external script
     * const elem = GM.addElement('script', {src: 'https://....'});
     * elem.onload = () => console.log(elem, 'loaded');
     * @example
     * // appending to shadowRoot
     * const elem = GM_addElement(parentElement.shadowRoot, 'iframe', {src: 'https://....'});
     * @example
     * // appending to DOM
     * const elem = GM_addElement(parentElement, 'a', {href: 'https://....', title: 'Some title', target: '_blank', textContent: 'Some text'});
     * @see {@link https://erosman.github.io/support/content/help.html#addElement}
     */
    addElement(tagName: string, attributes: object): HTMLElement | void;
    addElement(parentNode: string, tagName: string, attributes: object): HTMLElement | void;

    /**
     * Utility function to inject script element.
     * @example
     * const js = `function sum(x, y) {
     *   return x + y;
     * }`;
     * GM_addScript(js);
     * @example
     * function someFunc() {
     *   ...
     * }
     * GM.addScript('(' + someFunc + ')();');
     * @see {@link https://erosman.github.io/support/content/help.html#addScript}
     */
    addScript(js: string): void;

    /**
     * Utility function to inject style element.
     * @example
     * const css = `body {
     *   border-top: 2px solid grey;
     * }`;
     * GM.addStyle(css);
     * @see {@link https://erosman.github.io/support/content/help.html#addStyle}
     */
    addStyle(css: string): void;

    /**
     * Script storage change listener that returns the key as listener ID
     * @see {@link https://erosman.github.io/support/content/help.html#addValueChangeListener}
     */
    addValueChangeListener(
        key: string,
        callback: (key?: string, oldValue?: string, newValue?: string, remote?: boolean) => void,
    ): string;

    /**
     * Deletes an existing name / value pair from storage.
     * @see {@link https://erosman.github.io/support/content/help.html#deleteValue}
     */
    deleteValue(key: string): Promise<void>;

    /**
     * Simple file download from the Internet.
     * @see {@link https://erosman.github.io/support/content/help.html#download}
     */
    download(url: string, filename?: string): Promise<number | undefined>;

    /**
     * An API is based on the {@link https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/fetch JavaScript Fetch API}
     * which provides the new Promise based interface for fetching resources (including {@link https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy across the network}).
     * It will seem familiar to anyone who has used XMLHttpRequest, but it provides a more powerful and flexible feature set
     * @see {@link https://erosman.github.io/support/content/help.html#fetch}
     */
    fetch(url: string | URL, init?: GM.FetchRequest): Promise<GM.FetchResponse>;

    /**
     * Given a defined `@resource`, this method fetches and returns the content of the url
     * @see {@link https://erosman.github.io/support/content/help.html#getResourceText}
     */
    getResourceText(resourceName: string): Promise<string | undefined>;

    /**
     * Given a defined `@resource`, this method returns it as a URL
     * @see {@link https://erosman.github.io/support/content/help.html#getResourceUrl}
     */
    getResourceUrl(resourceName: string): Promise<string | undefined>;

    /**
     * Retrieves a value that was set with `GM.setValue`
     * @see {@link https://erosman.github.io/support/content/help.html#getValue}
     */
    getValue(key: string): Promise<GM.Value>;
    getValue<TValue = GM.Value>(key: string, defaultValue?: TValue): Promise<TValue>;

    /**
     * An object container info about the running script.
     * @see {@link https://erosman.github.io/support/content/help.html#info}
     */
    info: {
        /**
         * The name of the user script engine handling this script's execution.
         * The string `FireMonkey`
         */
        scriptHandler: string;
        /** The version of FireMonkey, a string e.g. `2.60` */
        version: string;
        /**
         * A string, the entire literal Metadata Block (without the delimiters)
         * for the currently running script
         * In FireMonkey it's always null
         */
        scriptMetaStr: string | null;
        /** An object containing data about the currently running platform */
        platform: GM.PlatformInfo;
        /** An object containing data about the currently running browser */
        browser: GM.BrowserInfo;
        /** An object containing data about the currently running script */
        script: GM.ScriptInfo;
    };

    /**
     * Retrieves an array of preference names that this script has stored
     * @see {@link https://erosman.github.io/support/content/help.html#listValues}
     */
    listValues(): Promise<string[]>;

    /**
     * The API is added for convenience.
     * @see {@link https://erosman.github.io/support/content/help.html#log}
     */
    log(...data: any[]): void;

    /**
     * Displays a notification to the user, using the underlying operating
     * system's notification mechanism
     * @see {@link https://erosman.github.io/support/content/help.html#notification}
     */
    notification(text: string | { text: string; image?: Blob | string }): Promise<string>;

    /**
     * Opens the specified URL in a new tab.
     * @see {@link https://erosman.github.io/support/content/help.html#openInTab}
     */
    openInTab(url: string, openInBackground?: boolean): Promise<boolean>;

    /**
     * A utility to create popups on the webpage.
     * @see {@link https://erosman.github.io/support/content/help.html#popup}
     */
    popup(options?: {
        type?:
            | "center"
            | "slide-left"
            | "slide-right"
            | "slide-top"
            | "slide-bottom"
            | "panel-left"
            | "panel-right"
            | "panel-top"
            | "panel-bottom";
        modal?: boolean;
    }): {
        /** Can be used to add style to the popup */
        addStyle(css: string): void;
        /** Can be used to add multiple HTML element(s) to the popup */
        append(...data: HTMLElement[]): void;
        show(): void;
        hide(): void;
        remove(): void;
        host: HTMLElement;
        style: HTMLElement;
        content: HTMLElement;
        close: HTMLElement;
    };

    /**
     * Adds an item to the User Script Commands menu.
     * @example
     * // anonymous function
     * GM_registerMenuCommand('Hello, world (anon)', () => { alert('Hello, world! (anon)')});
     * @example
     * // named function
     * function sayHello() { alert('Hello, world! (named)')}
     * GM.registerMenuCommand('Hello, world (named)', sayHello);
     * @see {@link https://erosman.github.io/support/content/help.html#registerMenuCommand}
     */
    registerMenuCommand(name: string, onClick: () => void): void;

    /**
     * Remove storage change listener for key
     * @see {@link https://erosman.github.io/support/content/help.html#removeValueChangeListener}
     */
    removeValueChangeListener(key: string): void;

    /**
     * Sets the current contents of the operating system's clipboard
     * @see {@link https://erosman.github.io/support/content/help.html#setClipboard}
     */
    setClipboard(text: string): Promise<void>;

    /**
     * Allows user script authors to persist simple values across page loads and
     * across origins.
     * Strings, booleans, and integers are currently the only allowed data types.
     * @see {@link https://erosman.github.io/support/content/help.html#setValue}
     */
    setValue(key: string, value: GM.Value): Promise<void>;

    /**
     * removes an item from the User Script Commands menu.
     * @see {@link https://erosman.github.io/support/content/help.html#unregisterMenuCommand}
     */
    unregisterMenuCommand(name: string): void;

    /**
     * Performs a similar function to the standard XMLHttpRequest object, but
     * allows these requests to cross the {@link https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy same origin policy} boundaries.
     * @see {@link https://erosman.github.io/support/content/help.html#xmlHttpRequest}
     */
    xmlHttpRequest(init: GM.XMLRequest): Promise<void>;
};

// #endregion

// #region GM4 style APIs

declare var GM_addElement: typeof GM.addElement;
declare var GM_addScript: typeof GM.addScript;
declare var GM_addStyle: typeof GM.addStyle;
declare var GM_addValueChangeListener: typeof GM.addValueChangeListener;
declare var GM_download: typeof GM.download;
declare var GM_fetch: typeof GM.fetch;
declare var GM_info: typeof GM.info;
declare var GM_log: typeof GM.log;
declare var GM_notification: typeof GM.notification;
declare var GM_openInTab: typeof GM.openInTab;
declare var GM_popup: typeof GM.popup;
declare var GM_registerMenuCommand: typeof GM.registerMenuCommand;
declare var GM_removeValueChangeListener: typeof GM.removeValueChangeListener;
declare var GM_setClipboard: typeof GM.setClipboard;
declare var GM_unregisterMenuCommand: typeof GM.unregisterMenuCommand;
declare var GM_xmlHttpRequest: typeof GM.xmlHttpRequest;

/**
 * Allows user script authors to persist simple values across page loads and
 * across origins.
 * Strings, booleans, and integers are currently the only allowed data types.
 * @see {@link https://erosman.github.io/support/content/help.html#setValue}
 */
declare function GM_setValue(key: string, value: GM.Value): void;

/**
 * Retrieves an array of preference names that this script has stored
 * @see {@link https://erosman.github.io/support/content/help.html#listValues}
 */
declare function GM_listValues(): string[];

/**
 * Deletes an existing name / value pair from storage.
 * @see {@link https://erosman.github.io/support/content/help.html#deleteValue}
 */
declare function GM_deleteValue(key: string): void;

/**
 * Retrieves a value that was set with `GM.setValue`
 * @see {@link https://erosman.github.io/support/content/help.html#getValue}
 */
declare function GM_getValue(key: string): GM.Value;
declare function GM_getValue<TValue = GM.Value>(key: string, defaultValue?: TValue): TValue;

/**
 * Given a defined `@resource`, this method fetches and returns the content of the url
 * @see {@link https://erosman.github.io/support/content/help.html#getResourceText}
 */
declare function GM_getResourceText(resourceName: string): string | void;

/**
 * Given a defined `@resource`, this method returns it as a URL
 * @see {@link https://erosman.github.io/support/content/help.html#getResourceUrl}
 */
declare function GM_getResourceUrl(resourceName: string): string | void;

// #endregion
