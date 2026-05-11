declare module "sdk/base64" {
    /**
     * Creates a base-64 encoded ASCII string from a string of binary data
     * @param data the data to encode
     * @param charset The charset of the string to encode (optional). The only accepted value is "utf-8".
     *        In order to encode and decode Unicode strings, the charset parameter needs to be set
     */
    export function encode(data: string, charset?: string): string;

    /**
     * @param data the encoded data
     * @param charset
     */
    export function decode(data: string, charset?: string): string;
}

declare module "sdk/clipboard" {
    /**
     * get the contents of the system clipboard
     * @param datatype [text|html|image] Retrieve the clipboard contents only if matching this type
     */
    export function get(datatype?: "text" | "html" | "image"): string;

    /**
     * Replace the contents of the user's clipboard with the provided data
     * @param data The data to put on the clipboard
     * @param datatype [text|html|image] The type of the data
     */
    export function set(data: string, datatype?: "text" | "html" | "image"): void;
}

declare module "sdk/context-menu" {
    /**
     * The context determines when the menu item will be visible
     */
    interface Context {
        // a base context
    }

    /**
     * The page context occurs when the user invokes the context menu on a non-interactive portion of the page
     */
    export var PageContext: PageContext;

    interface PageContext extends Context {
        (): Object;
    }

    /**
     * This context occurs when the menu is invoked on a page in which the user has made a selection
     */
    export var SelectionContext: SelectionContext;

    interface SelectionContext extends Context {
        (): Object;
    }

    /**
     * This context occurs when the menu is invoked on a node that either matches selector, a CSS selector,
     * or has an ancestor that matches
     * @param selector may include multiple selectors separated by commas, e.g., "a[href], img"
     */
    export var SelectorContext: SelectorContext;

    interface SelectorContext extends Context {
        (selector: string): Object;
    }

    /**
     * This context occurs when the menu is invoked on pages with particular URLs
     * also see {@link sdk/page-mod} module which uses a similar match pattern
     * @param matchPattern pattern string or an array of match pattern strings
     */
    export var URLContext: URLContext;

    interface URLContext extends Context {
        (matchPattern: string): Object;
    }

    /**
     * This context occurs when the function returns a true value
     * @param predicateFunction The function is passed an object with properties describing the menu invocation context
     */
    export var PredicateContext: PredicateContext;

    interface PredicateContext extends Context {
        (
            predicateFunction: (
                context: {
                    documentType: string;
                    documentURL: string;
                    targetName: string;
                    targetID?: string | undefined;
                    isEditable: boolean;
                    selectionText?: string | undefined;
                    srcURL?: string | undefined;
                    linkURL?: string | undefined;
                    value?: string | undefined;
                },
            ) => boolean,
        ): Object;
    }

    interface ItemContext extends Array<Context> {
        // a list of Context that also has add, remove methods
        add: (context: Context) => void;
        remove: (context: Context) => void;
    }

    interface Item {
        context: ItemContext;
        destroy: () => void;
        label: string;
        image: string | URL;
        data: any;
        parentMenu?: Menu | undefined;
        contentScript?: string | string[] | undefined;
        contentScriptFile?: string | string[] | undefined;
    }
    /**
     * A menu item
     */
    export function Item(
        options: {
            label: string;
            image?: string | undefined;
            accessKey?: string | undefined;
            context?: Context | Context[] | undefined;
            contentScript?: string | undefined;
            contentScriptFile?: string | undefined;
            data?: any;
            onMessage?: ((message?: any) => any) | undefined;
        },
    ): Item;

    /**
     * A menu separator
     */
    export function Separator(): Separator;

    interface Separator {
        parentMenu: Menu;
        destroy: () => void;
    }

    interface Menu {
        addItem: (item: ItemMenuSeparator) => void;
        removeItem: (item: ItemMenuSeparator) => void;
        destroy: () => void;
        label: string;
        items: ItemMenuSeparator[];
        image: string | URL;
        context: ItemContext;
        parentMenu?: Menu | undefined;
        contentScript: string | string[];
        contentScriptFile: string | string[];
    }

    type ItemMenuSeparator = Item | Menu | Separator;

    /**
     * A labeled menu item that expands into a submenu
     * @param options
     */
    export function Menu(
        options: {
            label: string;
            items: ItemMenuSeparator[];
            image?: string | undefined;
            context?: Context[] | undefined;
            contentScript?: string | string[] | undefined;
            contentScriptFile?: string | string[] | undefined;
            onMessage: (message?: any) => void;
        },
    ): Menu;
}

declare module "sdk/hotkeys" {
    interface Hotkey {
        destroy: () => void;
    }
    /**
     * Hotkey
     * Used to define a hotkey combination passing it the combination and a function to be called when the user
     * presses that combination
     */
    export function Hotkey(options: { combo: string; onPress: () => void }): Hotkey;
}

declare module "sdk/indexed-db" {
    // these interfaces are already provided by TypeScript

    interface IndexedImpl {
        indexedDB: IDBFactory;
        IDBKeyRange: IDBKeyRange;
        DOMException: DOMException;
    }

    export = IndexedImpl;
}

declare module "sdk/l10n" {
    /**
     * This function takes a string parameter which it uses as an identifier to look up and return a localized string in
     * the locale currently set for Firefox. Localized strings are supplied by the add-on developer in .properties
     * files stored in the add-ons "locale" directory
     * See {@link https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/l10n}
     * @param identifier An identifier for the localization of a particular string in the current locale
     * @param count If you're supplying different localizations for a string for singular or plural forms,
     *              this parameter is the number of items there are in this case
     * @param placeholder If you do not include the count parameter, you can supply one or more placeholder strings that
     *                    are to be inserted into the translated string at locations defined by the translator
     */
    export function get(identifier: string, count?: number, ...placeholder: string[]): string;
}

/**
 * Display transient, toaster-style desktop messages to the user
 */
declare module "sdk/notifications" {
    /**
     * @param options
     * @param options.title A string to display as the message's title
     * @param options.text A string to display as the body of the message
     * @param options.iconURL The URL of an icon to display inside the message. It may be a remote URL, a data URI,
     *                        or a URL returned by the {@link sdk/self} module
     * @param options.onClick A function to be called when the user clicks the message. It will be passed the value of data
     * @param options.data A string that will be passed to onClick
     */
    export function notify(
        options: {
            title?: string | undefined;
            text?: string | undefined;
            iconURL?: string | undefined;
            onClick?: ((data: string) => any) | undefined;
            data?: string | undefined;
        },
    ): void;
}

/**
 * Run scripts in the context of web pages whose URL matches a given pattern
 */
declare module "sdk/page-mod" {
    /**
     * @param options.include
     * @param options.contentStyle Lists stylesheets to attach, supplied as strings
     * @param options.contentStyleFile Lists stylesheets to attach, supplied in separate files
     * @param options.contentScriptOptions Defines read-only values accessible to content scripts
     * @param options.attachTo Controls whether to attach scripts to tabs that were already open when the page-mod
     *                         was created, and whether to attach scripts to iframes as well as the topmost document
     * @param options.contentScriptWhen Controls the point during document load at which content scripts are attached
     * @param options.exclude Has the same syntax as include, but specifies the URLs to which content scripts should not
     *                        be attached, even if they match include: so it's a way of excluding a subset of the URLs
     *                        that include specifies. The exclude option is new in Firefox 32
     * @param options.onAttach This event is emitted when the page-mod's content scripts are attached to a document
     *                         whose URL matches the page-mod's include pattern
     * @param options.onError This event is emitted when an uncaught runtime error occurs in one of the page-mod's content scripts
     */
    export function PageMod(
        options: {
            include: string | string[] | RegExp | RegExp[];
            contentScript?: string | string[] | undefined;
            contentScriptFile?: string | string[] | undefined;
            contentStyle?: string | string[] | undefined;
            contentStyleFile?: string | string[] | undefined;
            contentScriptOptions?: any;
            attachTo?: attachmentMode | attachmentMode[] | undefined;
            contentScriptWhen?: "start" | "ready" | "end" | undefined;
            exclude?: string | string[] | undefined;
            onAttach?: ((worker: FFAddonSDK.ContentWorker) => any) | undefined;
            onError?: ((error: Error) => any) | undefined;
        },
    ): PageMod;

    type attachmentMode = "existing" | "top" | "frame";

    interface PageMod {
        destroy: () => void;
        include: string | string[] | RegExp | RegExp[];
    }
}

/**
 * Create a permanent, invisible page and access its DOM
 */
declare module "sdk/page-worker" {
    /**
     * @param options.contentURL The URL of the content to load in the worker
     * @param options.contentScript A string or an array of strings containing the texts of content scripts to load.
     *                              Content scripts specified by this option are loaded after those specified by the
     *                              contentScriptFile option.
     * @param options.contentScriptFile A local file URL or an array of local file URLs of content scripts to load
     *                                  Content scripts specified by this option are loaded before those specified
     *                                  by the contentScript option
     * @param options.include This is useful when your page worker loads a page which will redirect to other pages.
     *                        These define the documents to which the page-worker's content worker applies
     * @param options.contentScriptWhen When to load the content scripts
     *                                  "start": load content scripts immediately after the document element for the page
     *                                    is inserted into the DOM, but before the DOM content itself has been loaded
     *                                  "ready": load content scripts once DOM content has been loaded, corresponding
     *                                    to the DOMContentLoaded event
     *                                  "end": load content scripts once all the content (DOM, JS, CSS, images) for the
     *                                    page has been loaded, at the time the window.onload event fires
     * @param options.contentScriptOptions Read-only value exposed to content scripts under self.options property
     */
    export function Page(
        options: {
            contentURL?: string | undefined;
            contentScript?: string | string[] | undefined;
            contentScriptFile?: string | string[] | undefined;
            contentScriptWhen?: "start" | "ready" | "end" | undefined;
            onMessage?: ((message: string) => any) | undefined;
            allow?: { script: boolean } | undefined;
            contentScriptOptions?: any;
            include?: string | string[] | RegExp | RegExp[] | undefined;
        },
    ): PageWorker;

    interface PageWorker {
        port: FFAddonSDK.Port;
        contentURL?: string | undefined;
        destroy: () => void;
        postMessage: (message: string) => void;
        on: (event: "message" | "error", handler: (arg?: "message" | Error) => any) => void;
        removeListener: (event: string, listener: Function) => void;
        allow?: { script: boolean } | undefined;
        include?: string | string[] | RegExp | RegExp[] | undefined;
        contentScriptFile?: string | string[] | undefined;
        contentScript?: string | string[] | undefined;
    }
}

/**
 * Creates transient dialogs to implement part of an add-on's user interface
 */
declare module "sdk/panel" {
    /**
   * @param options.contentURL The URL of the content to load in the panel. That is, they can't refer to remote scripts
   * @param options.width The width of the panel in pixels
   * @param options.height The height of the panel in pixels
   * @param options.contentScript A string or an array of strings containing the texts of content scripts to load.
   *                              Content scripts specified by this property are loaded after those specified by the
   *                              contentScriptFile property
   * @param options.contentScriptFile A URL or an array of URLs. The URLs point to scripts to load into the panel
   * @param [options.contentScriptWhen="end"]
   * @param options.contentStyle A string or an array of strings containing the texts of stylesheets to load.
   *                             Stylesheets specified by this property are loaded after those specified by the
   *                             contentStyleFile property
   * @param options.contentStyleFile A URL or an array of URLs. The URLs point to CSS stylesheets to load into the panel
   * @param options.position The position of the panel. Ignored if the panel is opened by a widget.
                             This may be one of three things:
                              1. a toggle button. If this is supplied the panel will be shown attached to the button
                              2. a widget object. If this is supplied the panel will be shown attached to the widget.
                              3. an object which specifies where in the window the panel should be shown
   * @param [options.focus=true] Set to false to prevent taking the focus away when the panel is shown.
   *                             Only turn this off if necessary, to prevent accessibility issues
   * @param options.allow An optional object describing permissions for the content. It should contain a single key
   *                      named script whose value is a boolean that indicates whether or not to execute script in the content
   * @param [options.contextMenu=false] Whether to show a context menu when the user context-clicks in the panel.
   *                                    The context menu will be the same one that's displayed in web pages
   */

    export function Panel(
        options: {
            contentURL?: string | URL | undefined;
            width?: number | undefined;
            height?: number | undefined;
            contentScript?: string | string[] | undefined;
            contentScriptFile?: string | string[] | undefined;
            contentScriptWhen?: "start" | "ready" | "end" | undefined;
            contentScriptOptions?: any;
            contentStyle?: string | string[] | undefined;
            contentStyleFile?: string | string[] | undefined;
            position?: PanelPosition | undefined;
            allow?: { script?: boolean | undefined } | undefined;
            focus?: boolean | undefined;
            contextMenu?: boolean | undefined;
            onMessage?: ((message: string) => any) | undefined;
            onShow?: (() => any) | undefined;
            onHide?: (() => any) | undefined;
            onError?: ((error: Error) => any) | undefined;
        },
    ): Panel;

    interface Panel {
        show: (
            options?: {
                width?: number | undefined;
                height?: number | undefined;
                position?: PanelPosition | undefined;
                focus?: boolean | undefined;
            },
        ) => void;
        hide: () => void;
        resize: (width: number, height: number) => void;
        destroy: () => void;
        postMessage: (message: string) => void;
        on: (event: "show" | "hide" | "message" | "error", handler: (arg?: Error | any) => any) => void;
        removeListener: (event: string, listener: Function) => void;
        port: FFAddonSDK.Port;
        isShowing: boolean;
        height: number;
        width: number;
        focus: boolean;
        contentURL?: string | URL | undefined;
        allow?: { script: boolean } | undefined;
        contentScriptFile?: string | string[] | undefined;
        contentScript?: string | string[] | undefined;
        contentScriptWhen: "start" | "ready" | "end";
        contentScriptOptions?: any;
    }
    type PanelPosition = FFAddonSDK.ToggleButton | FFAddonSDK.Widget | {
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
    };
}

/**
 * Interact with Firefox's Password Manager to add, retrieve and remove stored credentials
 */
declare module "sdk/passwords" {
    /**
     * This function is used to retrieve a credential, or a list of credentials, stored in the Password Manager
     * @param options.onComplete The callback function that is called once the function completes successfully
     */
    export function search(
        options: {
            onComplete: (credentials: Credential[]) => any;
            username?: string | undefined;
            url?: string | undefined;
            password?: string | undefined;
            formSubmitURL?: string | undefined;
            realm?: string | undefined;
            usernameField?: string | undefined;
            passwordField?: string | undefined;
            onError?: ((error: FFAddonSDK.NSIException) => any) | undefined;
        },
    ): void;

    /**
     * This function is used to store a credential in the Password Manager.
     * It takes an options object as an argument: this contains all the properties for the new credential.
     * As different sorts of credentials contain different properties, the appropriate options differ depending
     * on the sort of credential being stored
     */
    export function store(
        options: Credential & {
            onComplete?: (() => any) | undefined;
            onError?: ((error: FFAddonSDK.NSIException) => any) | undefined;
        },
    ): void;

    /**
     * Removes a stored credential
     */
    export function remove(
        options: Credential & {
            onComplete?: (() => any) | undefined;
            onError?: ((error: FFAddonSDK.NSIException) => any) | undefined;
        },
    ): void;

    interface Credential {
        username: string;
        password: string;
        url?: string | undefined;
        formSubmitURL?: string | undefined;
        realm?: string | undefined;
        usernameField?: string | undefined;
        passwordField?: string | undefined;
    }
}

/**
 * Check whether a given object is private, so an add-on can respect private browsing
 */
declare module "sdk/private-browsing" {
    export function isPrivate(object: FFAddonSDK.Tab | FFAddonSDK.ContentWorker | FFAddonSDK.BrowserWindow): boolean;
}

declare module "sdk/querystring" {
    /**
     * Utility functions for working with query strings
     */

    /**
     * Serializes an object containing name:value pairs into a query string
     * @param object {Object} The data to convert to a query string
     * @param [separator='&'] The string to use as a separator between each name:value pair
     * @param [assignment='='] The string to use between each name and its corresponding value
     */
    export function stringify(object: Object, separator?: string, assignment?: string): string;

    /**
     * Parse a query string into an object containing name:value pairs
     */
    export function parse(querystring: string, separator?: string, assignment?: string): Object;

    /**
     * The escape function used by stringify to encodes a string safely matching RFC 3986 for
     * application/x-www-form-urlencoded
     */
    export function escape(query: string): string;

    /**
     * The unescape function used by parse to decode a string safely
     */
    export function unescape(query: string): string;
}

/**
 * Make simple network requests
 */
declare module "sdk/request" {
    /**
     * This constructor creates a request object that can be used to make network requests
     * @param options.url This is the url to which the request will be made
     * @param options.onComplete This function will be called when the request has received a response
     *                           (or in terms of XHR, when readyState == 4)
     * @param options.headers An unordered collection of name/value pairs representing headers to send with the request
     * @param options.content The content to send to the server. If content is a string, it should be URL-encoded
     *                        (use encodeURIComponent). If content is an object, it should be a collection of name/value pairs.
     *                        Nested objects & arrays should encode safely.
     *                        For GET and HEAD requests, the query string (content) will be appended to the URL.
     *                        For POST and PUT requests, it will be sent as the body of the request
     * @param [options.contentType='application/x-www-form-urlencoded'] The type of content to send to the server
     *                                                                  This explicitly sets the Content-Type header
     * @param options.overrideMimeType Use this string to override the MIME type returned by the server in the response's
     *                                 Content-Type header. You can use this to treat the content as a different MIME type,
     *                                 or to force text to be interpreted using a specific character
     * @param [options.anonymous=false] If true, the request will be sent without cookies or authentication headers
     */
    export function Request(
        options: {
            url?: string | FFAddonSDK.SDKURL | undefined;
            onComplete?: ((response: Response) => any) | undefined;
            headers?: Object | undefined;
            content?: string | Object | undefined;
            contentType?: string | undefined;
            anonymous?: boolean | undefined;
            overrideMimeType?: string | undefined;
        },
    ): Request;
    // a strongly-typed generic variant of the request
    export function Request<ResponseType>(
        options: {
            url?: string | FFAddonSDK.SDKURL | undefined;
            onComplete?: ((response: STResponse<ResponseType>) => any) | undefined;
            headers?: Object | undefined;
            content?: string | Object | undefined;
            contentType?: string | undefined;
            anonymous?: boolean | undefined;
            overrideMimeType?: string | undefined;
        },
    ): STRequest<ResponseType>;

    interface BaseRequest {
        get: () => void;
        post: () => void;
        head: () => void;
        put: () => void;
        delete: () => void;
        url: string | FFAddonSDK.SDKURL;
        headers: Object;
        content: string;
        contentType: string;
    }

    interface Request extends BaseRequest {
        response: Response;
    }

    interface STRequest<ResponseType> extends BaseRequest {
        response: STResponse<ResponseType>;
    }

    interface BaseResponse {
        url: string;
        text: string;
        status: number;
        statusText: string;
        headers: Object;
        anonymous: boolean;
    }

    interface Response extends BaseResponse {
        json: Object;
    }

    interface STResponse<T> {
        json: T;
    }
}

/**
 * Get and set text and HTML selections in the current web page
 */
declare module "sdk/selection" {
    // TODO: enable module iteration to return 'selection' items

    // there's no way I know of to limit the event to 'select' only and so this hack
    // this should not even be an argument to the function but I'm not Firefox
    export function on(event: "select" | "select", handler: () => any): void;
    export function removeListener(event: "select" | "select", handler: Function): void;
    /**
     * Gets or sets the current selection as plain text. Setting the selection removes all current selections,
     * inserts the specified text at the location of the first selection, and selects the new text.
     * Getting the selection when there is no current selection returns null.
     * Setting the selection when there is no current selection throws an exception
     * Getting the selection when isContiguous is true returns the text of the first selection
     */
    export var text: string;
    /**
     * Gets or sets the current selection as HTML. Setting the selection removes all current selections,
     * inserts the specified text at the location of the first selection, and selects the new text.
     * Getting the selection when there is no current selection returns null.
     * Setting the selection when there is no current selection throws an exception.
     * Getting the selection when isContiguous is true returns the text of the first selection
     */
    export var html: string;
    /**
     * true if the current selection is a single, contiguous selection,
     * and false if there are two or more discrete selections, each of which may or may not be spatially adjacent.
     */
    export const isContiguous: boolean;
}

/**
 * Access data that is bundled with the add-on, and add-on metadata
 */

declare module "sdk/self" {
    /**
     * This property represents an add-on associated unique URI string
     * This URI can be used for APIs which require a valid URI string, such as the passwords module
     */
    export const uri: string;

    /**
     * This property is a printable string that is unique for each add-on.
     * It comes from the id property set in the package.json file in the main package (i.e. the package in which you run jpm xpi)
     * While not generally of use to add-on code directly, it can be used by internal API code to index local storage
     * and other resources that are associated with a particular add-on.
     */
    export const id: string;

    /**
     * This property contains the add-on's short name. It comes from the name property in the main package's package.json file
     */
    export const name: string;

    /**
     * This property contains the add-on's version string. It comes from the version property set in the package.json file in the main package
     */
    export const version: string;

    /**
     * A property that indicates why the addon was loaded
     */
    export const loadReason: "install" | "enable" | "startup" | "upgrade" | "downgrade";

    /**
     * This property indicates whether or not the add-on supports private browsing
     * It comes from the private-browsing key in the add-on's package.json file
     */
    export const isPrivateBrowsingSupported: boolean;

    export namespace data {
        /**
         * The data.load() method returns the contents of an embedded data file, as a string.
         * It is most useful for data that will be modified or parsed in some way, such as JSON, XML, plain text,
         * or perhaps an HTML template. For data that can be displayed directly in a content frame, use data.url()
         * @param name The filename to be read, relative to the package's data directory.
         *             Each package that uses the self module will see its own data directory
         */
        export function load(name: string): string;

        /**
         * The data.url() method returns a resource:// url that points at an embedded data file.
         * It is most useful for data that can be displayed directly in a content frame.
         * The url can be passed to a content frame constructor, such as the {@link Panel}
         */
        export function url(name: string): string;
    }
}

/**
 * Store preferences across application restarts
 */
declare module "sdk/simple-prefs" {
    /**
     * Registers an event listener that will be called when a preference is changed
     * @param prefName The name of the preference to watch for changes. Empty name '' listens for all preferences
     * @param listener
     */
    export function on(prefName: string, listener: (prefName: string) => any): void;

    /**
     * Unregisters an event listener for the specified preference
     */
    export function removeListener(prefName: string, listener: Function): void;

    export const prefs: Object;
}

/**
 * Lets an add-on store data so that it's retained across Firefox restarts
 */
declare module "sdk/simple-storage" {
    export const storage: any;
    export const quotaUsage: number;
    export function on(event: "OverQuota" | "OverQuota", handler: () => any): void;
}

/**
 * Query the add-on's environment and access arguments passed to it
 */
declare module "sdk/system" {
    /**
     * Quits the host application with the specified code
     * @param [code=0]
     */
    export function exit(code: number): void;

    /**
     * Firefox enables you to get the path to certain "special" directories, such as the desktop or the profile directory.
     * This function exposes that functionality to add-on authors
     * @param id see [@link https://developer.mozilla.org/en-US/docs/Code_snippets/File_I_O#Getting_files_in_special_directories}
     */
    export function pathFor(id: string): string;

    /**
     * This object provides access to environment variables
     */
    export const env: any;

    /**
     * The type of operating system you're running on
     */
    export const platform: string;

    /**
     * The type of processor architecture you're running on. This will be one of: "arm","ia32", or"x64"
     */
    export const architecture: string;

    /**
     * The type of compiler used to build the host application. For example: "msvc", "n32", "gcc2", "gcc3", "sunc", "ibmc"
     */
    export const compiler: string;

    /**
     * An identifier for the specific build, derived from the build date. This is useful if you're trying to target individual nightly builds
     */
    export const build: string;

    /**
     * The UUID for the host application. For example, "{ec8030f7-c20a-464f-9b0e-13a3a9e97384}" for Firefox
     */
    export const id: string;

    /**
     * The human-readable name for the host application. For example, "Firefox"
     */
    export const name: string;

    /**
     * The version of the host application
     */
    export const version: string;

    /**
     * The version of XULRunner that underlies the host application
     */
    export const platformVersion: string;

    /**
     * The name of the host application's vendor, for example: "Mozilla"
     */
    export const vendor: string;
}

/**
 * Open, manipulate, and access tabs, and receive tab events
 */
declare module "sdk/tabs" {
    // TODO: allow enumerating this module as a list of tabs

    /**
     * Opens a new tab. The new tab will open in the active window or in a new window, depending on the inNewWindow option
     * @param options String URL to be opened in the new tab or an options object
     * @param [options.inNewWindow=false] Determine whether the new tab should be private or not
     *                                    If your add-on does not support private browsing this will have no effect
     * @param options.inBackground tab will be opened to the right of the active tab and will not be active
     * @param options.onOpen This event is emitted when a new tab is opened. This does not mean that the content has loaded,
     *                       only that the browser tab itself is fully visible to the user.
     *                       Properties relating to the tab's content (for example: title, favicon, and url) will not be
     *                       correct at this point. If you need to access these properties, listen for the ready event.
     * @param options.onClose This event is emitted when a tab is closed. When a window is closed this event will be
     *                        emitted for each of the open tabs in that window
     * @param options.onReady This event is emitted when the DOM for a tab's content is ready.
     *                        It is equivalent to the DOMContentLoaded event for the given content page.
     *                        A single tab will emit this event every time the DOM is loaded: so it will be emitted again
     *                        if the tab's location changes or the content is reloaded.
     *                        After this event has been emitted, all properties relating to the tab's content can be used.
     */
    export function open(
        options: string | {
            url: string;
            inNewWindow?: boolean | undefined;
            inBackground?: boolean | undefined;
            isPinned?: boolean | undefined;
            onOpen?: ((tab: FFAddonSDK.Tab) => any) | undefined;
            onClose?: ((tab: FFAddonSDK.Tab) => any) | undefined;
            onReady?: ((tab: FFAddonSDK.Tab) => any) | undefined;
            onLoad?: ((tab: FFAddonSDK.Tab) => any) | undefined;
            onPageShow?: ((tab: FFAddonSDK.Tab) => any) | undefined;
            onActivate?: ((tab: FFAddonSDK.Tab) => any) | undefined;
            onDeactivate?: ((tab: FFAddonSDK.Tab) => any) | undefined;
        },
    ): void;

    export function on(
        event: "open" | "close" | "ready" | "load" | "pageshow" | "activate" | "deactivate",
        handler: (tab: FFAddonSDK.Tab) => any,
    ): void;

    /**
     * The currently active tab in the active window
     */
    export const activeTab: FFAddonSDK.Tab;

    /**
     * The number of open tabs across all windows
     */
    export const length: number;
}

/**
 * Set one-off and periodic timers
 */
declare module "sdk/timers" {
    /**
     * Schedules callback to be called in ms milliseconds. Any additional arguments are passed straight through to the callback
     */
    export function setTimeout(callback: (...args: any[]) => any, timeoutMS: number): TIMEOUT_ID;

    /**
     * Given an ID returned from setTimeout(), prevents the callback with the ID from being called (if it hasn't yet been called)
     */
    export function clearTimeout(timerID: TIMEOUT_ID): void;

    /**
     * Schedules callback to be called repeatedly every ms milliseconds
     * Any additional arguments are passed straight through to the callback
     */
    export function setInterval(callback: (...args: any[]) => any, timeoutMS: number): INTERVAL_ID;

    /**
     * Given an ID returned from setInterval(), prevents the callback with the ID from being called again
     */
    export function clearInterval(intervalID: INTERVAL_ID): void;

    type TIMEOUT_ID = number;
    type INTERVAL_ID = number;
}

/**
 * Add a button to the Firefox user interface
 * With this module you can create buttons that display icons and can respond to click events
 */
declare module "sdk/ui/button/action" {
    /**
     * Creates an action button
     * @param options.id The button's ID. This is used internally to keep track of this button
     *                   The ID must be unique within your add-on
     * @param options.label The button's human-readable label. When the button is in the toolbar,
     *                      this appears in a tooltip, and when the button is in the menu,
     *                      it appears underneath the button as a legend
     * @param options.icon One or more icons for the button
     */
    export function ActionButton(
        options: {
            id: string;
            label: string;
            icon: FFAddonSDK.Icon;
            onClick?: ((state: FFAddonSDK.ActionButton) => any) | undefined;
            onChange?: ((state: FFAddonSDK.ActionButtonState) => any) | undefined;
            disabled?: boolean | undefined;
            badge?: string | number | undefined;
            badgeColor?: string | undefined;
        },
    ): FFAddonSDK.ActionButton;
}

/**
 * Add a toggle button to the Firefox user interface
 * With this module you can create buttons that function like a check box, representing an on/off choice
 */
declare module "sdk/ui/button/toggle" {
    /**
     * Creates a toggle button
     * @param options.id The button's ID. This is used internally to keep track of this button
     *                   The ID must be unique within your add-on
     * @param options.label The button's human-readable label. When the button is in the toolbar,
     *                      this appears in a tooltip, and when the button is in the menu,
     *                      it appears underneath the button as a legend
     * @param options.icon One or more icons for the button
     */
    export function ToggleButton(
        options: {
            id: string;
            label: string;
            icon: FFAddonSDK.Icon;
            onChange?: ((state: FFAddonSDK.ToggleButtonState) => any) | undefined;
            onClick?: ((state: FFAddonSDK.ToggleButtonState) => any) | undefined;
            badge?: string | number | undefined;
            badgeColor?: string | undefined;
            disabled?: boolean | undefined;
            checked?: boolean | undefined;
        },
    ): FFAddonSDK.ToggleButton;
}

/**
 * Create HTML iframes, using bundled HTML, CSS and JavaScript,
 * that can be added to a designated area of the Firefox user interface. At the moment you can only add frames to a toolbar
 */

declare module "sdk/ui/frame" {
    /**
   * Creates a frame. Once created, the frame needs to be added to a toolbar for it to be visible
   * @param options.url A URL pointing to the HTML file specifying the frame's content.
   *                    The file must be bundled with the add-on under its "data" directory
   * @param options.name The frame's name. This must be unique within your add-on.
       This is used to generate an ID to to keep track of the frame. If you don't supply a name, the ID is derived from
       the frame's URL, meaning that if you don't supply a name, you may not create two frames with the same URL
   * @param options.onReady This event is emitted while a frame instance is being loaded, at the point where it becomes
   *        possible to interact with the frame although sub-resources may still be in the process of loading
   *        It's the equivalent of the point where the frame's document.readyState becomes "interactive"
   * @param options.onAttach This event is emitted whenever a new frame instance is constructed and the browser has
   *        started to load its document: for example, when the user opens a new browser window, if that window has a
   *        toolbar containing this frame. Since the event is dispatched asynchronously, the document may already be
   *        loaded by the time the event is received.
   *        At this point, you should not try to send messages to scripts hosted in the frame
   *        because the frame scripts may not have been loaded
   * @param options.onDetach This event is emitted when a frame instance is unloaded: for example, when the user
   *        closes a browser window, if that window has a toolbar containing this frame.
   *        After receiving this message, you ahould not attempt to communicate with the frame scripts
   */
    export function Frame(
        options: {
            url: string;
            name?: string | undefined;
            onMessage?: ((message: FFAddonSDK.FrameEvent) => any) | undefined;
            onReady?: ((event: FFAddonSDK.FrameEvent) => any) | undefined;
            onLoad?: ((event: FFAddonSDK.FrameEvent) => any) | undefined;
            onAttach?: ((event: FFAddonSDK.FrameEvent) => any) | undefined;
            onDetach?: ((event: FFAddonSDK.FrameEvent) => any) | undefined;
        },
    ): FFAddonSDK.Frame;
}

/**
 * Add a toolbar to the Firefox user interface. A toolbar is a horizontal strip of user interface real estate
 */
declare module "sdk/ui/toolbar" {
    /**
     * @param options.title The toolbar's title. This appears as the name of the toolbar in the Firefox "Toolbars" menu
     *        It must be unique
     * @param options.title An array of items to appear in the toolbar. Each item in items must be an action button,
     *        a toggle button, or a frame instance. Buttons each take up a fixed width.
     *        If more than one frame is supplied here, the frames each occupy an equal vertical strip of the toolbar
     * @param options.onAttach This event is emitted when the toolbar is first loaded.
     *        Note that since there is only one toolbar for the whole browser, opening another browser window does not
     *        cause this event to be emitted again. After this event the toolbar's properties are available
     */
    export function Toolbar(
        options: {
            title: string;
            items: ToolbarItem[];
            hidden?: boolean | undefined;
            onAttach?: ((toolbar: Toolbar) => any) | undefined;
            onDetach?: ((toolbar: Toolbar) => any) | undefined;
            onShow?: ((toolbar: Toolbar) => any) | undefined;
            onHide?: ((toolbar: Toolbar) => any) | undefined;
        },
    ): Toolbar;

    interface Toolbar {
        title: string;
        items: ToolbarItem[];
        hidden: boolean;
        on: (event: "show" | "hide" | "attach" | "detach", handler: (toolbar: Toolbar) => any) => void;
        once: (event: "show" | "hide" | "attach" | "detach", handler: (toolbar: Toolbar) => any) => void;
        removeListener: (event: "show" | "hide" | "attach" | "detach", handler: Function) => void;
        off: (event: "show" | "hide" | "attach" | "detach", handler: Function) => void;
        destroy: () => void;
    }

    type ToolbarItem = FFAddonSDK.Frame | FFAddonSDK.ActionButton | FFAddonSDK.ToggleButton;
}

/**
 * Enables you to create sidebars. A sidebar is a vertical strip of user interface real estate for your add-on that's
 * attached to the left-hand side of the browser window. You specify its content using HTML, CSS, and JavaScript,
 * and the user can show or hide it in the same way they can show or hide the built-in sidebars
 */
declare module "sdk/ui/sidebar" {
    /**
     * @param options.id The id of the sidebar. This is used to identify this sidebar in its chrome window. It must be unique
     */
    export function Sidebar(
        options: {
            id?: string | undefined;
            title: string;
            url: string;
            onShow?: (() => any) | undefined;
            onHide?: (() => any) | undefined;
            onAttach?: ((worker: SidebarWorker) => any) | undefined;
            onDetach?: (() => any) | undefined;
            onReady?: ((worker: SidebarWorker) => any) | undefined;
        },
    ): Sidebar;

    interface Sidebar {
        id: string;
        title: string;
        url: string;
        show: (window?: FFAddonSDK.BrowserWindow) => void;
        hide: (window?: FFAddonSDK.BrowserWindow) => void;
        on: (event: "show" | "hide" | "attach" | "detach" | "ready", handler: (worker: SidebarWorker) => any) => void;
        once: (event: "show" | "hide" | "attach" | "detach" | "ready", handler: (worker: SidebarWorker) => any) => void;
        removeListener: (event: "show" | "hide" | "attach" | "detach" | "ready", handler: Function) => void;
        dispose: () => void;
    }

    interface SidebarWorker {
        port: FFAddonSDK.Port;
    }
}

/**
 * Construct, validate, and parse URLs
 */
declare module "sdk/url" {
    /**
     * The URL constructor creates an object that represents a URL, verifying that the provided string is a valid URL in the process.
     * Any API in the SDK which has a URL parameter will accept URL objects, not raw strings, unless otherwise noted
     * @param source A string to be converted into a URL. If source is not a valid URI, this constructor will throw an exception
     * @param base Used to resolve relative source URLs into absolute ones
     */
    export function URL(source: string, base?: string): FFAddonSDK.SDKURL;

    /**
     * The DataURL constructor creates an object that represents a data: URL,
     * verifying that the provided string is a valid data: URL in the process
     * @param uri A string to be parsed as Data URL. If is not a valid URI, this constructor will throw an exception
     */
    export function DataURL(uri: string): DataURL;

    /**
     * Attempts to convert the given URL to a native file path. This function will automatically attempt to resolve
     * non-file protocols, such as the resource: protocol, to their place on the file system.
     * An exception is raised if the URL can't be converted; otherwise, the native file path is returned as a string
     */
    export function toFilename(url: FFAddonSDK.SDKURL): string;

    /**
     * Converts the given native file path to a file: URL
     */
    export function toFileName(url: string): string;

    /**
     * Checks the validity of a URI. isValidURI("http://mozilla.org") would return true,
     * whereas isValidURI("mozilla.org") would return false
     */
    export function isValidURI(uri: string): boolean;

    /**
     * Returns the top-level domain for the given URL: that is, the highest-level domain under which individual domains may be registered
     */
    export function getTLD(url: string): string;

    interface DataURL {
        toString: () => string;
        mimeType: string;
        parameters: Object;
        base64: string;
        data: string;
    }
}

/**
 * Enumerate and examine open browser windows, open new windows, and listen for window events
 */
declare module "sdk/windows" {
    export const browserWindows: BrowserWindows;

    interface BrowserWindows extends Array<FFAddonSDK.BrowserWindow> {
        /**
         * Open a new window
         * @param options.isPrivate determines whether the new window should be private or not
         */
        open: (
            options: string | {
                url: string;
                isPrivate?: boolean | undefined;
                onOpen?: ((window: FFAddonSDK.BrowserWindow) => any) | undefined;
                onClose?: ((window: FFAddonSDK.BrowserWindow) => any) | undefined;
                onActivate?: ((window: FFAddonSDK.BrowserWindow) => any) | undefined;
                onDeactivate?: ((window: FFAddonSDK.BrowserWindow) => any) | undefined;
            },
        ) => FFAddonSDK.BrowserWindow;
        on: (
            event: "open" | "close" | "activate" | "deactivate",
            handler: (window: FFAddonSDK.BrowserWindow) => any,
        ) => void;
        activeWindow: FFAddonSDK.BrowserWindow;
    }
}

declare namespace FFAddonSDK {
    interface BrowserWindow {
        title: string;
        activate: () => void;
        close: (callback?: () => void) => void;
        tabs: Tab[];
    }

    interface SDKURL {
        scheme: string;
        userPass: string;
        host: string;
        port: string;
        path: string;
        hostname: string;
        pathname: string;
        hash: string;
        href: string;
        origin: string;
        protocol: string;
        search: string;
        toString: () => string;
        toJSON: () => string;
    }

    interface FrameEvent {
        origin: string;
        source: Frame;
        data?: any;
    }

    interface Frame {
        url: URL;
        postMessage: (message: string, target: string) => void;
        on: (event: "attach" | "detach" | "load" | "ready" | "message", handler: (event: FrameEvent) => any) => void;
        once: (event: "attach" | "detach" | "load" | "ready" | "message", handler: (event: FrameEvent) => any) => void;
        removeListener: (event: "attach" | "detach" | "load" | "ready" | "message", handler: Function) => void;
        off: (event: "attach" | "detach" | "load" | "ready" | "message", handler: Function) => void;
        destroy: () => void;
    }

    type Icon = string | { "16"?: string | undefined; "32"?: string | undefined; "64"?: string | undefined };

    interface ToggleButtonState {
        id: string;
        label: string;
        badge: string;
        checked: boolean;
        disabled: boolean;
    }

    interface ToggleButton extends ToggleButtonState {
        click: () => void;
        on: (event: "click" | "change", handler: (state: ToggleButtonState) => any) => void;
        once: (event: "click" | "change", handler: (state: ToggleButtonState) => any) => void;
        removeListener: (event: string, handler: Function) => void;
        state: (
            target: "window" | "tab" | Tab | BrowserWindow | ToggleButton,
            state?: {
                disabled?: boolean | undefined;
                label?: string | undefined;
                icon?: Icon | undefined;
                checked?: boolean | undefined;
                badge?: string | number | undefined;
                badgeColor?: string | undefined;
            },
        ) => ToggleButtonState;
        destroy: () => void;
    }

    interface ActionButtonState {
        id: string;
        label: string;
        disabled: boolean;
        icon: FFAddonSDK.Icon;
        badge: string | number;
        badgeColor: string;
    }

    interface ActionButton extends ActionButtonState {
        // there's a compromise here by always returning ActionButtonState. It will return undefined if no options are passed
        state: (
            target: BrowserWindow | Tab | ActionButton | "window" | "tab",
            state?: { disabled?: boolean | undefined; label?: string | undefined; icon?: Icon | undefined },
        ) => ActionButtonState;
        click: () => void;
        destroy: () => void;
        on: (event: "click" | "click", handler: (state: ActionButtonState) => any) => void;
        once: (event: "click" | "click", handler: (state: ActionButtonState) => any) => void;
        removeListener: (event: "click" | "click", handler: Function) => void;
    }

    interface Tab {
        title: string;
        url: string;
        id: string;
        favicon: string;
        contentType: string;
        index: number;
        isPinned: boolean;
        window: BrowserWindow;
        readyState: "uninitialized" | "loading" | "interactive" | "complete";
        on: (
            event: "ready" | "load" | "pageshow" | "activate" | "deactivate" | "close",
            handler: (tab: Tab) => any,
        ) => void;
        attach: (
            options: {
                contentScript?: string | string[] | undefined;
                contentScriptFile?: string | string[] | undefined;
                contentScriptOptions?: Object | undefined;
                onMessage?: ((message: string) => any) | undefined;
                onError?: ((error: Error) => any) | undefined;
            },
        ) => ContentWorker;
        activate: () => void;
        pin: () => void;
        unpin: () => void;
        close: (afterClose?: () => any) => void;
        reload: () => void;
        getThumbnail: () => string;
    }

    /**
     * The SDK port API
     * @see [port API]{@link https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/using_port}
     */
    interface Port {
        emit: (event: string, data?: any) => void;
        on: (event: string, handler: (data?: any) => any) => void;
    }

    interface ContentWorker {
        new(
            options: {
                window: Window;
                contentScript?: string | string[] | undefined;
                contentScriptFile?: string | string[] | undefined;
                onMessage: (data?: any) => any;
                onError: (data?: any) => any;
            },
        ): ContentWorker;
        url: URL;
        port: Port;
        tab: Tab;
        on: (event: "detach" | "message" | "error", handler: () => any) => void;
        postMessage: (data?: any) => void;
        destroy: () => void;
    }

    interface Widget {
    }

    /**
     * @see [nsIException]{@link https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIException}
     */
    interface NSIException {
        lineNumber: number;
        columnNumber: number;
        data: any;
        filename: string;
        inner?: NSIException | undefined;
        location?: any;
        message: string;
        name: string;
        result: any;
        toString: () => string;
    }
}
