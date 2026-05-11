// This definition is based on the API reference of Greasemonkey
// https://wiki.greasespot.net/Greasemonkey_Manual:API
// TypeScript Version: 3.2

declare namespace GM {
    interface ScriptInfo {
        /** Possibly empty string. */
        description: string;
        excludes: string[];
        includes: string[];
        matches: string[];
        name: string;
        /** Possibly empty string. */
        namespace: string;
        /**
         * An object keyed by resource name.
         * Each value is an object with keys `name` and `mimetype` and `url`
         * with string values.
         */
        resources: {
            [resourceName: string]: {
                name: string;
                mimetype: string;
                url: string;
            };
        };
        /** @default 'end' */
        runAt: "start" | "end" | "idle";
        uuid: string;
        /** Possibly empty string. */
        version: string;
    }

    type Value = string | boolean | number;

    interface Response<TContext> {
        readonly responseHeaders: string;
        readonly finalUrl: string;
        /** The same object passed into the original request */
        readonly context?: TContext | undefined;

        readonly readyState: 1 | 2 | 3 | 4;
        readonly response: any;
        readonly responseText: string;
        readonly responseXML: Document | false;
        readonly status: number;
        readonly statusText: string;
    }

    interface ProgressResponse<TContext> extends Response<TContext> {
        lengthComputable: boolean;
        loaded: number;
        total: number;
    }

    interface Request<TContext = any> {
        // Fields

        /**
         * The URL to make the request to. Must be an absolute URL, beginning
         * with the scheme. May be relative to the current page.
         */
        url: string;
        /** String type of HTTP request to make (E.G. "GET", "POST") */
        method:
            | "GET"
            | "POST"
            | "PUT"
            | "DELETE"
            | "PATCH"
            | "HEAD"
            | "TRACE"
            | "OPTIONS"
            | "CONNECT";
        /**
         * When true, the data is sent as a Blob
         * @default false
         */
        binary?: boolean | undefined;
        /**
         * Any object (Compatibility: 1.10+). This object will also be the
         * context property of the Response Object.
         */
        context?: TContext | undefined;
        /**
         * Data to send in the request body. Usually for POST method requests.
         * If the data field contains form-encoded data, you usually must also
         * set the header `'Content-Type': 'application/x-www-form-urlencoded'`
         * in the `headers` field.
         */
        data?: string | undefined;
        /** A set of headers to include in the request */
        headers?: {
            [header: string]: string;
        } | undefined;
        /**
         * A MIME type to specify with the request (e.g.
         * "text/html; charset=ISO-8859-1")
         */
        overrideMimeType?: string | undefined;
        /** User name to use for authentication purposes. */
        user?: string | undefined;
        /** Password to use for authentication purposes */
        password?: string | undefined;
        /** Decode the response as specified type. Default value is "text" */
        responseType?: XMLHttpRequestResponseType | undefined;
        /**
         * When `true`, this is a synchronous request.
         * Be careful: The entire Firefox UI will be locked and frozen until the
         * request completes.In this mode, more data will be available in the
         * return value.
         */
        synchronous?: boolean | undefined;
        /**
         * The number of milliseconds to wait before terminating the call. Zero
         * (the default) means wait forever.
         */
        timeout?: number | undefined;
        /**
         * Object containing optional function callbacks to monitor the upload
         * of data.
         */
        upload?: {
            onabort?(response: Response<TContext>): void;
            onerror?(response: Response<TContext>): void;
            onload?(response: Response<TContext>): void;
            onprogress?(response: ProgressResponse<TContext>): void;
        } | undefined;

        // Event handlers

        /** Will be called when the request is aborted */
        onabort?(response: Response<TContext>): void;
        /** Will be called if an error occurs while processing the request */
        onerror?(response: Response<TContext>): void;
        /** Will be called when the request has completed successfully */
        onload?(response: Response<TContext>): void;
        /** Will be called when the request progress changes */
        onprogress?(response: ProgressResponse<TContext>): void;
        /** Will be called repeatedly while the request is in progress */
        onreadystatechange?(response: Response<TContext>): void;
        /** Will be called if/when the request times out */
        ontimeout?(response: Response<TContext>): void;
    }
}

/**
 * Window object of the content page where the user script is running on.
 * @see {@link http://wiki.greasespot.net/UnsafeWindow}
 */
declare var unsafeWindow: Window;

declare var GM: {
    // Headers

    /**
     * Meta data about the running user script.
     * @see {@link https://wiki.greasespot.net/GM.info}
     */
    info: {
        /** An object containing data about the currently running script */
        script: GM.ScriptInfo;
        /**
         * A string, the entire literal Metadata Block (without the delimiters)
         * for the currently running script
         */
        scriptMetaStr: string;
        /**
         * The name of the user script engine handling this script's execution.
         * The string `Greasemonkey`
         */
        scriptHandler: string;
        /** The version of Greasemonkey, a string e.g. `4.0` */
        version: string;
    };

    // Values

    /**
     * Allows user script authors to persist simple values across page loads and
     * across origins.
     * Strings, booleans, and integers are currently the only allowed data types.
     * @see {@link https://wiki.greasespot.net/GM.setValue}
     * @param name The unique (within this script) name for this value.
     * Should be restricted to valid Javascript identifier characters.
     * @param value Any valid value of these types. Any other type may cause
     * undefined behavior, including crashes
     * @returns A Promise, resolved successfully with no value on success,
     * rejected with no value on failure
     */
    setValue(name: string, value: GM.Value): Promise<void>;

    /**
     * Retrieves a value that was set with `GM.setValue`
     * @see {@link https://wiki.greasespot.net/GM.getValue}
     * @param name The property name to get
     * @param defaultValue The default value to be returned when none has
     * previously been set
     * @returns A Promise, rejected in case of error and otherwise resolved with:
     * - When this name has been set - `string`, `integer` or `boolean` as
     * previously set
     * - When this name has not been set, and default is provided - The value
     * passed as default
     * - When this name has not been set, and default is not provided -
     * `undefined`
     * @example
     * // Retrieving the value associated with the name 'timezoneOffset' with a default value defined:
     * const timezoneOffset = await GM.getValue("timezoneOffset", -5)
     * @example
     * // For structured data used `JSON.stringify()` to place an object into storage and then `JSON.parse()` to convert it back
     * const storedObject = JSON.parse(await GM.getValue('foo', '{}'));
     */
    getValue(
        name: string,
    ): Promise<GM.Value | undefined>;
    getValue<TValue = GM.Value>(
        name: string,
        defaultValue: TValue,
    ): Promise<TValue>;

    /**
     * Deletes an existing name / value pair from storage.
     * @see {@link https://wiki.greasespot.net/GM.deleteValue}
     * @param name Property name to delete
     * @returns A Promise, resolved successfully with no value on success,
     * rejected with no value on failure.
     */
    deleteValue(name: string): Promise<void>;

    /**
     * Retrieves an array of preference names that this script has stored
     * @see {@link https://wiki.greasespot.net/GM.listValues}
     * @returns A Promise, rejected in case of error and otherwise resolved with
     * an string[] for previously set values
     */
    listValues(): Promise<string[]>;

    // Resources

    /**
     * Given a defined `@resource`, this method returns it as a URL
     * @see {@link https://wiki.greasespot.net/GM.getResourceUrl}
     * @param resourceName The name provided when the `@resource` was defined
     * @returns A Promise, rejected on failure and resolved with a string URL on
     * success.
     * Treat the result as opaque string. It will work where you need a URL
     * (for a `<link>` or `<style>` for CSS, for an `<img>` tag, or similar).
     */
    getResourceUrl(resourceName: string): Promise<string>;

    // Other

    /**
     * Displays a notification to the user, using the underlying operating
     * system's notification mechanism
     * @see {@link https://wiki.greasespot.net/GM.notification}
     * @param text The main notification text
     * @param title The title of the notification
     * @param image The URL for an image to display in the dialog. If not
     * provided, the Greasemonkey logo by default.
     * @param onClick Callback, triggered when the notification's button is
     * clicked.
     */
    notification(
        text: string,
        title: string,
        image?: string,
        onClick?: () => void,
    ): void;

    /**
     * Opens the specified URL in a new tab.
     * @see {@link https://wiki.greasespot.net/GM.openInTab}
     * @param url The URL to navigate the new tab to
     * @param openInBackground Force tab to/to not open in a background tab.
     * Default (unspecified) behavior honors Firefox configuration.
     */
    openInTab(url: string, openInBackground?: boolean): void;

    /**
     * Adds an item to the User Script Commands menu.
     * @param caption The caption to display on the menu item.
     * @param commandFunc The function to call when the menu item is selected.
     * @param accessKey A single character that can be used to select the
     * item when the menu is open. It should be a letter in the caption.
     * @see {@link https://wiki.greasespot.net/GM.registerMenuCommand}
     */
    registerMenuCommand(caption: string, commandFunc: () => void, accessKey?: string): void;

    /**
     * Sets the current contents of the operating system's clipboard
     * @see {@link https://wiki.greasespot.net/GM.setClipboard}
     */
    setClipboard(text: string): void;

    /**
     * Performs a similar function to the standard XMLHttpRequest object, but
     * allows these requests to cross the [same origin policy]{@link https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy} boundaries.
     * @see {@link https://wiki.greasespot.net/GM.xmlHttpRequest}
     */
    xmlHttpRequest(details: GM.Request): void;
};
