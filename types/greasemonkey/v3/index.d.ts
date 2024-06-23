// This definition is based on the API reference of Greasemonkey.
// http://wiki.greasespot.net/Greasemonkey_Manual:API

////////////////
// Global variable
////////////////

/**
 * Window object of the content page where the user script is running on.
 * @see {@link http://wiki.greasespot.net/UnsafeWindow}
 */
declare var unsafeWindow: Window;

/**
 * Meta data about the running user script.
 * @see {@link http://wiki.greasespot.net/GM_info}
 */
declare var GM_info: {
    script: {
        description: string;
        excludes: string[];
        includes: string[];
        matches: string[];
        name: string;
        namespace: string;
        resources: Object;
        "run-at": string;
        unwrap: boolean;
        version: string;
    };
    scriptMetaStr: string;
    scriptWillUpdate: boolean;
    version: string;
};

////////////////
// Values
////////////////

/**
 * Deletes an existing name / value pair from the script storage.
 * @param  name  a name of the pair to delete.
 * @see    {@link http://wiki.greasespot.net/GM_deleteValue}
 */
declare function GM_deleteValue(name: string): void;

/**
 * Retrieves a value from the script storage.
 * @param    name          a name to retrieve.
 * @param    defaultValue  a value to be returned when the name does not exist.
 * @returns  a retrieved value, or passed default value, or undefined.
 * @see      {@link http://wiki.greasespot.net/GM_getValue}
 */
declare function GM_getValue(name: string, defaultValue?: any): any;
declare function GM_getValue(name: string, defaultValue?: string): string;
declare function GM_getValue(name: string, defaultValue?: number): number;
declare function GM_getValue(name: string, defaultValue?: boolean): boolean;

/**
 * Retrieves an array of names stored in the script storage.
 * @returns  an array of names in the storage.
 * @see      {@link http://wiki.greasespot.net/GM_listValues}
 */
declare function GM_listValues(): string[];

/**
 * Stores a name / value pair to the script storage.
 * @param  name   a name of the pair.
 * @param  value  a value to be stored.
 * @see    {@link http://wiki.greasespot.net/GM_setValue}
 */
declare function GM_setValue(name: string, value: string): void;
declare function GM_setValue(name: string, value: boolean): void;
declare function GM_setValue(name: string, value: number): void;

////////////////
// Resources
////////////////

/**
 * Gets a content of a resouce defined by {@link http://wiki.greasespot.net/Metadata_Block#.40resource|@resource}.
 * @param    resourceName  a name of the resource to get.
 * @returns  the content of the resource.
 * @see      {@link http://wiki.greasespot.net/GM_getResourceText}
 */
declare function GM_getResourceText(resourceName: string): string;

/**
 * Gets a URL of a resource defined by {@link http://wiki.greasespot.net/Metadata_Block#.40resource|@resource}.
 * @param    resourceName  a name of the resource.
 * @returns  a URL that returns the content of the resource.
 * @see      {@link http://wiki.greasespot.net/GM_getResourceURL}
 */
declare function GM_getResourceURL(resourceName: string): string;

////////////////
// Utilities
////////////////

/**
 * Adds CSS to the content page.
 * @param  css  a CSS string. It can have multiple style definitions.
 * @see    {@link http://wiki.greasespot.net/GM_addStyle}
 */
declare function GM_addStyle(css: string): void;

/**
 * Writes a message as a log to the console with the script identifier.
 * @param  message  a message to be written.
 * @see    {@link http://wiki.greasespot.net/GM_log}
 */
declare function GM_log(message: any): void;

/**
 * Opens a URL in a new tab.
 * @param    url  a URL to open.
 * @returns  window object of the opened tab.
 * @see      {@link http://wiki.greasespot.net/GM_openInTab}
 */
declare function GM_openInTab(url: string): Window;

/**
 * Registers an item as a submenu of User Script Commands.
 * @param  caption      a caption of the menu item.
 * @param  commandFunc  a function to be invoked when the item has been selected.
 * @param  accessKey    a single character that can be used to select the item by keyboard.
 *                      It should be a letter in the caption.
 * @see    {@link http://wiki.greasespot.net/GM_registerMenuCommand}
 */
declare function GM_registerMenuCommand(caption: string, commandFunc: Function, accessKey?: string): void;

/**
 * Sets a text to the clipboard of the opeating system.
 * @param  text  a text to be set to the clipboard.
 * @see    {@link http://wiki.greasespot.net/GM_setClipboard}
 */
declare function GM_setClipboard(text: string): void;

////////////////
// XMLHttpRequest
////////////////

/**
 * Request options for {@link GM_xmlhttpRequest}.
 * @see {@link http://wiki.greasespot.net/GM_xmlhttpRequest#Arguments}
 */
interface GMXMLHttpRequestOptions {
    binary?: boolean | undefined;
    context?: any;
    data?: string | undefined;
    headers?: Object | undefined;
    method: string;
    onabort?: ((response: GMXMLHttpRequestResponse) => any) | undefined;
    onerror?: ((response: GMXMLHttpRequestResponse) => any) | undefined;
    onload?: ((response: GMXMLHttpRequestResponse) => any) | undefined;
    onprogress?: ((response: GMXMLHttpRequestProgressResponse) => any) | undefined;
    onreadystatechange?: ((response: GMXMLHttpRequestResponse) => any) | undefined;
    ontimeout?: ((response: GMXMLHttpRequestResponse) => any) | undefined;
    overrideMimeType?: string | undefined;
    password?: string | undefined;
    synchronous?: boolean | undefined;
    timeout?: number | undefined;
    upload?: {
        onabort?: ((response: GMXMLHttpRequestResponse) => any) | undefined;
        onerror?: ((response: GMXMLHttpRequestResponse) => any) | undefined;
        onload?: ((response: GMXMLHttpRequestResponse) => any) | undefined;
        onprogress?: ((response: GMXMLHttpRequestProgressResponse) => any) | undefined;
    } | undefined;
    url: string;
    user?: string | undefined;
}

/**
 * Response object for general events of {@link GM_xmlhttpRequest}.
 * @see {@link http://wiki.greasespot.net/GM_xmlhttpRequest#Response_Object}
 */
interface GMXMLHttpRequestResponse {
    readyState: number;
    responseHeaders: string;
    responseText: string;
    status: number;
    statusText: string;
    context: any;
    finalUrl: string;
}

/**
 * Response object for onprogress event of {@link GM_xmlhttpRequest}.
 */
interface GMXMLHttpRequestProgressResponse extends GMXMLHttpRequestResponse {
    lengthComputable: boolean;
    loaded: number;
    total: number;
}

/**
 * Returned object by {@link GM_xmlhttpRequest} in asynchronous mode.
 */
interface GMXMLHttpRequestAsyncResult {
    abort(): void;
}

/**
 * Returned object by {@link GM_xmlhttpRequest} in synchronouse mode.
 */
interface GMXMLHttpRequestSyncResult {
    abort(): void;
    finalUrl: string;
    readyState: number;
    responseHeaders: string;
    responseText: string;
    status: number;
    statusText: string;
}

/**
 * Returned object by {@link GM_xmlhttpRequest}.
 * @see  {@link http://wiki.greasespot.net/GM_xmlhttpRequest#Returns}
 */
interface GMXMLHttpRequestResult extends GMXMLHttpRequestAsyncResult, GMXMLHttpRequestSyncResult {
}

/**
 * Sends a HTTP request to a URL.
 * @param    options  options and callbacks for HTTP request.
 * @returns  an object which can abort the request.
 *           If the request is sent in the synchronous mode, it also contains the response information.
 * @see      {@link http://wiki.greasespot.net/GM_setClipboard}
 */
declare function GM_xmlhttpRequest(options: GMXMLHttpRequestOptions): GMXMLHttpRequestResult;
