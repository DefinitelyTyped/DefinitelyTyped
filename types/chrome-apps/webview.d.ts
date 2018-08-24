// Type definitions for Chrome packaged application development
// Project: http://developer.chrome.com/apps/
// Definitions by: Nikolai Ommundsen <https://github.com/niikoo>, Adam Lay <https://github.com/AdamLay>, MIZUNE Pine <https://github.com/pine613>, MIZUSHIMA Junki <https://github.com/mzsm>, Ingconst Stepanyan <https://github.com/RReverser>, Adam Pyle <https://github.com/pyle>, Matthew Kimber <https://github.com/matthewkimber>, otiai10 <https://github.com/otiai10>, couven92 <https://github.com/couven92>, RReverser <https://github.com/rreverser>, sreimer15 <https://github.com/sreimer15>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/////////////////
// Webview Tag //
/////////////////
/**
 * Use the webview tag to actively load live content from the web over the network and embed it in your Chrome App.
 * Your app can control the appearance of the *webview* and interact with the web content, initiate navigations in
 * an embedded web page, react to error events that happen within it.
 */

declare class HTMLWebViewElement extends HTMLElement {
    /** Create a new element */
    constructor ();

    /** This sets the guest content's window.name object.**/
    name: string;

    /**
     * Returns the visible URL. Mirrors the logic in the browser's omnibox: either returning a pending new navigation if initiated by the embedder page, or the last committed navigation. Writing to this attribute initiates top-level navigation.
     * Assigning src its own value will reload the current page.
     * The src attribute cannot be cleared or removed once it has been set, unless the webview is removed from the DOM.
     * The src attribute can also accept data URLs, such as 'data:text/plain,Hello, world!'.
     */
    src: string;

    /**
     * Storage partition ID used by the webview tag.
     * If the storage partition ID starts with persist: (partition='persist:googlepluswidgets'),
     * the webview will use a persistent storage partition available to all guests in the app with the same storage partition ID.
     * If the ID is unset or if there is no 'persist': prefix, the webview will use an in-memory storage partition.
     * his value can only be modified before the first navigation, since the storage partition of an active renderer process cannot change.
     * Subsequent attempts to modify the value will fail with a DOM exception.
     * By assigning the same partition ID, multiple webviews can share the same storage partition.
     */
    partition?: string;

    /**
     * If present, portions of the embedder could be visible through the webview,
     * where the contents are transparent. Without allowtransparency enabled,
     * no part of the embedder will be shown through the webview,
     * even if elements exist that are specified as transparent.
     * This does not affect transparency within the contents of the webview itself.
     */
    allowtransparency?: boolean;

    /**
     * If 'on', the webview container will automatically resize within the bounds specified by the attributes minwidth, minheight, maxwidth, and maxheight.
     * These constraints do not impact the webview UNLESS autosize is enabled.
     * When autosize is enabled, the webview container size cannot be less than the minimum values or greater than the maximum.
     */
    autosize?: 'on';

    /**
     * Object reference which can be used to post messages into the guest page.
     */
    contentWindow: WebView.ContentWindow;

    /** Interface which provides access to webRequest events on the guest page. */
    request: WebView.WebRequestEventInterface;

    /** Similar to chrome's ContextMenus API, but applies to webview instead of browser.
     * Use the webview.contextMenus API to add items to webview's context menu.
     * You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages. */
    contextMenus: WebView.ContextMenus;
    /**
     * Fired when the guest window attempts to close itself.
     * The following example code navigates the webview to about:blank when the guest attempts to close itself.
     */
    addEventListener(type: 'close', listener: (this: HTMLWebViewElement) => void, useCapture?: boolean): void;
    /**
     * Fired when the guest window logs a console message.
     * The following example code forwards all log messages to the embedder's console without regard for log level or other properties.
     */
    addEventListener(type: 'consolemessage', listener: (this: HTMLWebViewElement, ev: WebView.ConsoleMessage) => void, useCapture?: boolean): void;
    /**
     * Fired when the guest window fires a load event, i.e., when a new document is loaded. This does not include page navigation within the current document or asynchronous resource loads.
     * The following example code modifies the default font size of the guest's body element after the page loads:
     * @example
     * webview.addEventListener('contentload', function() {
     *  webview.executeScript({ code: 'document.body.style.fontSize = '42px'' })
     * });
     */
    addEventListener(type: 'contentload', listener: (this: HTMLWebViewElement) => void, useCapture?: boolean): void;
    /**
     * Fired when the guest window attempts to open a modal dialog via window.alert, window.confirm, or window.prompt.
     * Handling this event will block the guest process until each event listener returns or the dialog object becomes unreachable (if preventDefault() was called.)
     * The default behavior is to cancel the dialog.
     */
    addEventListener(type: 'dialog', listener: (this: HTMLWebViewElement, ev: WebView.Dialog) => void, useCapture?: boolean): void;
    /**
     * Fired when the process rendering the guest web content has exited.
     */
    addEventListener(type: 'exit', listener: (this: HTMLWebViewElement, ev: WebView.Exit) => void, useCapture?: boolean): void;
    /**
     * Fired when new find results are available for an active find request. This might happen multiple times for a single find request as matches are found.
     */
    addEventListener(type: 'findupdate', listener: (this: HTMLWebViewElement, ev: WebView.FindUpdate) => void, useCapture?: boolean): void;
    /**
     * Fired when a top-level load has aborted without committing. An error message will be printed to the console unless the event is default-prevented.
     * Note: When a resource load is aborted, a loadabort event will eventually be followed by a loadstop event, even if all committed loads since the last loadstop event (if any) were aborted.
     * Note: When the load of either an about URL or a JavaScript URL is aborted, loadabort will be fired and then the webview will be navigated to 'about:blank'.
     */
    addEventListener(type: 'loadabort', listener: (this: HTMLWebViewElement, ev: WebView.LoadAbort) => void, useCapture?: boolean): void;
    /**
     * Fired when a load has committed. This includes navigation within the current document as well as subframe document-level loads, but does not include asynchronous resource loads.
     */
    addEventListener(type: 'loadcommit', listener: (this: HTMLWebViewElement, ev: WebView.LoadCommit) => void, useCapture?: boolean): void;
    /**
     * Fired when a top-level load request has redirected to a different URL.
     */
    addEventListener(type: 'loadredirect', listener: (this: HTMLWebViewElement, ev: WebView.LoadRedirect) => void, useCapture?: boolean): void;
    /**
     * Fired when a load has begun.
     */
    addEventListener(type: 'loadstart', listener: (this: HTMLWebViewElement, ev: WebView.LoadStart) => void, useCapture?: boolean): void;
    /**
     * Fired when all frame-level loads in a guest page (including all its subframes) have completed.
     * This includes navigation within the current document as well as subframe document-level loads, but does not include asynchronous resource loads.
     * This event fires every time the number of document-level loads transitions from one (or more) to zero. For example, if a page that has already finished loading (i.e., loadstop already fired once) creates a new iframe which loads a page, then a second loadstop will fire when the iframe page load completes.
     * This pattern is commonly observed on pages that load ads.
     * Note: When a committed load is aborted, a loadstop event will eventually follow a loadabort event, even if all committed loads since the last loadstop event (if any) were aborted.
     */
    addEventListener(type: 'loadstop', listener: (this: HTMLWebViewElement) => void, useCapture?: boolean): void;
    /**
     * Fired when the guest page attempts to open a new browser window.
     * The following example code will create and navigate a new webview in the embedder for each requested new window:
     * @example
     * webview.addEventListener('newwindow', function(e) {
     *  const newWebview = document.createElement('webview');
     *  document.body.appendChild(newWebview);
     *  e.window.attach(newWebview);
     * });
     */
    addEventListener(type: 'newwindow', listener: (this: HTMLWebViewElement, ev: WebView.NewWindow) => void, useCapture?: boolean): void;
    /**
     * Fired when the guest page needs to request special permission from the embedder.
     * The following example code will grant the guest page access to the webkitGetUserMedia API.
     * Note that an app using this example code must itself specify audioCapture and/or videoCapture manifest permissions:
     * @example
     * webview.addEventListener('permissionrequest', function(e) {
     *  if (e.permission === 'media') {
     *      e.request.allow();
     *  }
     * });
     */
    addEventListener(type: 'permissionrequest', listener: (this: HTMLWebViewElement, ev: WebView.PermissionRequest) => void, useCapture?: boolean): void;
    /** Fired when the process rendering the guest web content has become responsive again after being unresponsive. */
    addEventListener(type: 'response', listener: (this: HTMLWebViewElement, ev: WebView.ProcessResponsive) => void, useCapture?: boolean): void;
    /** Fired when the embedded web content has been resized via autosize. Only fires if autosize is enabled. */
    addEventListener(type: 'sizechanged', listener: (this: HTMLWebViewElement, ev: WebView.SizeChanged) => void, useCapture?: boolean): void;
    /** Fired when the process rendering the guest web content has become unresponsive. This event will be generated once with a matching responsive event if the guest begins to respond again. */
    addEventListener(type: 'unresponsive', listener: (this: HTMLWebViewElement, ev: WebView.ProcessUnresponsive) => void, useCapture?: boolean): void;
    /** Fired when the page's zoom changes. */
    addEventListener(type: 'zoomchange', listener: (this: HTMLWebViewElement, ev: WebView.ZoomChange) => void, useCapture?: boolean): void;
    /**
     * Queries audio state.
     * @since Chrome 62.
     **/
    getAudioState(callback: (audible: boolean) => void): void;

    /**
     * Sets audio mute state of the webview.
     * @param mute Mute audio value
     * @since Chrome 62.
     */
    setAudioMuted(mute: boolean): void;

    /**
     * Queries whether audio is muted.
     * @since Chrome 62.
     */
    isAudioMuted(callback: (muted: boolean) => void): void;

    /**
     * Captures the visible region of the webview.
     * @param callback Provides a data URL which encodes an image of the visible area of the captured webview.
     *                 May be assigned to the 'src' property of an HTML Image element for display.
     * @since Chrome 50.
     */
    captureVisibleRegion(callback: (dataUrl: string) => void): void;
    /**
     * Captures the visible region of the webview.
     * @param options Extension type
     * @param callback Provides a data URL which encodes an image of the visible area of the captured webview.
     *                 May be assigned to the 'src' property of an HTML Image element for display.
     * @since Chrome 50.
     */
    captureVisibleRegion(options: chrome.extensionTypes.ImageDetails, callback: (dataUrl: string) => void): void;

    /**
    * Adds content script injection rules to the webview.
    * When the webview navigates to a page matching one or more rules, the associated scripts will be injected.
    * You can programmatically add rules or update existing rules.
    * The following example adds two rules to the webview: 'myRule' and 'anotherRule'.
    * @example
    * webview.addContentScripts([
    * {
    *    name: 'myRule',
    *    matches: ['http://www.foo.com/*'],
    *    css: { files: ['mystyles.css'] },
    *    js: { files: ['jquery.js', 'myscript.js'] },
    *    run_at: 'document_start'
    *  },
    *  {
    *    name: 'anotherRule',
    *    matches: ['http://www.bar.com/*'],
    *    js: { code: 'document.body.style.backgroundColor = 'red';' },
    *    run_at: 'document_end'
    *  }]);
    * ...
    * // Navigates webview.
    * webview.src = 'http://www.foo.com';
    *
    * @description
    * You can defer addContentScripts call until you needs to inject scripts.
    * The following example shows how to overwrite an existing rule.
    * @example
    * webview.addContentScripts([{
    *    name: 'rule',
    *    matches: ['http://www.foo.com/*'],
    *    js: { files: ['scriptA.js'] },
    *    run_at: 'document_start'}]);
    *
    * // Do something.
    * webview.src = 'http://www.foo.com/*';
    * ...
    * // Overwrite 'rule' defined before.
    * webview.addContentScripts([{
    *   name: 'rule',
    *   matches: ['http://www.bar.com/*'],
    *   js: { files: ['scriptB.js'] },
    *   run_at: 'document_end'}]);
    * @description
    * If webview has been naviagted to the origin (e.g., foo.com) and
    * calls webview.addContentScripts to add 'myRule',
    * you need to wait for next navigation to make the scripts injected.
    * If you want immediate injection, executeScript will do the right thing.
    * Rules are preserved even if the guest process crashes
    * or is killed or even if the webview is reparented.
    * Refer to the /extensions/content_scripts documentation for more details.
    * @param {ContentScriptDetails[]} contentScriptList Details of the content scripts to add.
    * @since Chrome 44.
    */
    addContentScripts(contentScriptList: WebView.ContentScriptDetails[]): void;

    /**
     * Navigates backward one history entry if possible.
     * Equivalent to go(-1).
     * @param [callback] Called after the navigation has either failed or completed successfully. Success parameter indicates whether the navigation was successful.
     */
    back(callback?: (success: boolean) => void): void;

    /**
     * Indicates whether or not it is possible to navigate backward through history.
     * The state of this function is cached, and updated before each loadcommit,
     * so the best place to call it is on loadcommit.
     */
    canGoBack(): void;

    /**
     * Indicates whether or not it is possible to navigate forward through history.
     * The state of this function is cached, and updated before each loadcommit,
     * so the best place to call it is on loadcommit.
     */
    canGoForward(): void;

    /**
     * Clears browsing data for the webview partition.
     * @param options Options determining which data to clear.
     * @param types The types of data to be cleared.
     * @param callback Called after the data has been successfully cleared.
     * @since Chrome 33.
     */
    clearData(options: WebView.ClearDataOptions, types: WebView.ClearDataTypeSet, callback?: () => void): void;

    /**
     * Injects JavaScript code into the guest page.
     * The following sample code uses script injection
     * to set the guest page's background color to red:
     * @example
     * webview.executeScript({ code: 'document.body.style.backgroundColor = 'red'' });
     * @param details  Details of the script to run.
     * @param [callback] Called after all the JavaScript has been executed.
     */
    executeScript(details: WebView.InjectDetails, callback?: (result?: any[]) => void): void;

    /**
     * Initiates a find-in-page request.
     * @param searchText The string to find in the page.
     * @param [options]  Options for the find request.
     * @param [callback] Called after all find results have been returned for this find request.
     *                 Provides optionally:
     *                 results: Contains all of the results of the find request.
     *                 results can be omitted if it is not utilized in the callback function body;
     *                 e.g. if the callback is only used to discern when the find request has completed.
     */
    find(searchText: string, options?: WebView.FindOptions, callback?: (results?: WebView.FindCallbackResults) => void): void;

    /**
     * Navigates forward one history entry if possible. Equivalent to go(1).
     * @param [callback] Called after the navigation has either failed or completed successfully.
     *                   Provides *success* which indicates whether the navigation was successful.
     */
    forward(callback?: (success: boolean) => void): void;

    /**
     * Returns Chrome's internal process ID for the guest web page's current process,
     * allowing embedders to know how many guests would be affected by terminating
     * the process. Two guests will share a process only if they belong to the same
     * app and have the same **storage partition ID**. The call is synchronous and returns
     * the embedder's cached notion of the current process ID. The process ID isn't
     * the same as the operating system's process ID.
     */
    getProcessId(): chrome.integer;

    /**
     * Returns the user agent string used by the webview for guest page requests.
     * @since Since Chrome 33.
     */
    getUserAgent(): string;

    /**
     * Gets the current zoom factor.
     * @param callback Called after the current zoom factor is retrieved. Provides the current zoom factor.
     * @since Chrome 36.
     */
    getZoom(callback: (zoomFactor: chrome.double) => void): void;

    /**
     * Gets the current zoom mode.
     * @param callback Called with the webview's current zoom mode.
     * @since Since Chrome 43.
     */
    getZoomMode(callback: (ZoomMode: WebView.ZoomMode) => void): void;

    /**
     * Navigates to a history entry using a history index relative to the current navigation.
     * If the requested navigation is impossible, this method has no effect.
     * @param relativeIndex Relative history index to which the webview should be navigated.
     *                      For example, a value of 2 will navigate forward 2 history entries if possible;
     *                        a value of -3 will navigate backward 3 entries.
     * @param [callback] Called after the navigation has either failed or completed successfully.
     *                   Provides a boolean, *success*, which indicates whether the navigation was successful.
     */
    go(relativeIndex: chrome.integer, callback?: (success: boolean) => void): void;

    /**
     * Injects CSS into the guest page.
     * @param details Details of the CSS to insert.
     * @param callback Called after the CSS has been inserted.
     */
    insertCSS(details: WebView.InjectDetails, callback?: () => void): void;

    /**
     * Indicates whether or not the webview's user agent string has been overridden by *setUserAgentOverride*.
     * @since Since Chrome 33.
     */
    isUserAgentOverridden(): void;

    /**
     * Prints the contents of the webview.
     * This is equivalent to calling scripted print function from the webview itself.
     * @since Since Chrome 38.
     */
    print(): void;

    /** Reloads the current top-level page. */
    reload(): void;

    /**
     * Removes content scripts from a webview.
     * The following example removes 'myRule' which was added before.
     * @example webview.removeContentScripts(['myRule']);
     * @description You can remove all the rules by calling:
     * @example webview.removeContentScripts();
     * @param scriptNameList A list of names of content scripts that will be removed.
     *                       If the list is empty, all the content scripts added to the webview will be removed.
     * @since Chrome 44.
     */
    removeContentScripts(scriptNameList?: string[]): void;

    /**
     * Override the user agent string used by the webview for guest page requests.
     * @param userAgent The user agent string to use.
     * @since Since Chrome 33.
     */
    setUserAgentOverride(userAgent: string): void;

    /**
     * Changes the zoom factor of the page.
     * The scope and persistence of this change
     * are determined by the webview's current zoom mode.
     * @param zoomFactor The new zoom factor.
     * @param [callback] Called after the page has been zoomed.
     * @since Since Chrome 36.
     */
    setZoom(zoomFactor: chrome.double, callback?: () => void): void;

    /**
     * Sets the zoom mode of the webview.
     * @param ZoomMode Defines how zooming is handled in the webview.
     * @param [callback] Called after the zoom mode has been changed.
     * @since Since Chrome 43.
     */
    setZoomMode(ZoomMode: WebView.ZoomMode, callback?: () => void): void;

    /** Stops loading the current webview navigation if in progress. */
    stop(): void;

    /**
     * @todo TODO Fix action param
     * Ends the current find session (clearing all highlighting)
     * and cancels all find requests in progress.
     * @param action Determines what to do with the active match after the find session has ended.
     *               *clear* will clear the highlighting over the active match;
     *               keep will keep the active match highlighted;
     *               activate will keep the active match highlighted and simulate a user click on that match.
     *               The default action is keep.
     * @since Since Chrome 35.
     */
    stopFinding(action?: 'clear' | 'keep' | 'activate'): void;

    /**
     * Loads a data URL with a specified base URL used for relative links.
     * Optionally, a virtual URL can be provided to be shown to the user instead of the data URL.
     * @param dataUrl The data URL to load.
     * @param baseUrl The base URL that will be used for relative links.
     * @param virtualUrl The URL that will be displayed to the user (in the address bar).
     * @since Since Chrome 40.
     */
    loadDataWithBaseUrl(dataUrl: string, baseUrl: string, virtualUrl?: string): void;

    /**
     * Forcibly kills the guest web page's renderer process.
     * This may affect multiple webview tags in the current app if they share the same process,
     * but it will not affect webview tags in other apps.
     */
    terminate(): void;
}
declare namespace WebView {
    /** Options that determine what data should be cleared by *clearData* */
    interface ClearDataOptions {
        /**
         * Clear data accumulated on or after this date,
         * represented in milliseconds since the epoch
         * (accessible via the getTime method of the JavaScript Date object).
         * If absent, defaults to 0 (which would remove all browsing data).
         * @default 0
         */
        since?: chrome.integer;
    }

    interface WindowEvent extends chrome.events.Event<() => void> { }

    interface ConsoleEvent extends Event {
        /** The severity level of the log message. Ranges from 0 to 4. */
        level: chrome.integer;
        /** The logged message contents.*/
        message: string;
        /** The line number of the message source.*/
        line: chrome.integer;
        /** A string identifying the resource which logged the message. */
        sourceId: string;
    }

    type ExitEventReason =
        'normal' |
        'abnormal' |
        'crash' |
        'kill';
    interface ExitEvent extends Event {
        /** Chrome's internal ID of the process that exited. */
        processID: chrome.integer;
        /** String indicating the reason for the exit. */
        reason: ExitEventReason;
    }

    /**
     * Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     */
    interface InjectDetails {
        /**
         * JavaScript or CSS code to inject.
         *
         * **Warning**
         * Be careful using the *code* parameter.
         * Incorrect use of it may open your app to
         * cross site scripting attacks.
         * @see[More information]{@link https://en.wikipedia.org/wiki/Cross-site_scripting}
         */
        code?: string,
        /**
         * JavaScript or CSS file to inject.
         */
        file?: string
    }

    /**
      * WebView element from html
     */


    /** A set of data types. Missing properties are interpreted as false. */
    interface ClearDataTypeSet {
        /** Websites' appcaches. */
        appcache?: boolean;
        /**
         * The browser's cache. Note: when removing data, this clears the entire cache; it is not limited to the range you specify.
         * @since Available since Chrome 43.
         */
        cache?: boolean;
        /** The partition's cookies. */
        cookies?: boolean;
        /** The partition's session cookies. */
        sessionCookies?: boolean;
        /** The partition's persistent cookies. */
        persistentCookies?: boolean;
        /** Websites' filesystems. */
        fileSystems?: boolean;
        /** Websites' IndexedDB data. */
        indexedDB?: boolean;
        /** Websites' local storage data. */
        localStorage?: boolean;
        /** Websites' WebSQL data. */
        webSQL?: boolean;
    }
    /**
    * The different contexts a menu can appear in.
    * Specifying 'all' is equivalent to the combination of all other contexts.
    **/
    type ContextType =
        'all' |
        'page' |
        'frame' |
        'selection' |
        'link' |
        'editable' |
        'image' |
        'video' |
        'audio';
    /**
     * Details of the script or CSS to inject.
     * Either the code or the file property must be set,
     * but both may not be set at the same time.
     **/
    interface InjectDetails {
        /**
         * JavaScript or CSS code to inject.
         * Warning: Be careful using the code parameter.
         * Incorrect use of it may open your app to xss attacks.
         */
        code?: string;

        /** JavaScript or CSS file to inject. */
        file?: string
    }
    /** The type of injection item: code or a set of files. */
    interface InjectionItems {
        /** JavaScript code or CSS to be injected into matching pages. */
        code?: string
        /**
         * The list of JavaScript or CSS files to be injected into matching pages.
         * These are injected in the order they appear in this array.
         */
        files?: any[]
    }
    /** Details of the content script to inject. **/
    interface ContentScriptDetails {
        /** The name of the content script to inject. */
        name: string

        /** Specifies which pages this content script will be injected into. */
        matches: any[]

        /** Excludes pages that this content script would otherwise be injected into. */
        exclude_matches?: any[]

        /** JavaScript or CSS file to inject. */
        file?: string
    }
    /** The type of injection item: code or a set of files. */
    interface InjectionItems {
        /** JavaScript code or CSS to be injected into matching pages. */
        code?: string
        /**
         * Whether to insert the content script on about:blank and about:srcdoc.
         * Content scripts will only be injected on pages when their inherit URL
         * is matched by one of the declared patterns in the matches field.
         * The inherit URL is the URL of the document that created the frame or window.
         * Content scripts cannot be inserted in sandboxed frames.
         */
        match_about_blank?: boolean;

        /**
         * The CSS code or a list of CSS files to be injected into matching pages.
         * These are injected in the order they appear,
         * before any DOM is constructed or displayed for the page.
         */
        css?: InjectionItems;

        /**
         * The JavaScript code or a list of JavaScript files to be injected into matching pages.
         * These are injected in the order they appear.
         */
        js?: InjectionItems;

        /**
         * The soonest that the JavaScript or CSS will be injected into the tab.
         * Defaults to 'document_idle'.
         */
        run_at?: chrome.extensionTypes.RunAt;

        /**
         * If all_frames is true, this implies that the JavaScript or CSS should be injected into all frames of current page.
         * By default, all_frames is false and the JavaScript or CSS is only injected into the top frame.
         * @default false
         */
        all_frames?: boolean;

        /**
         * Applied after matches to include only those URLs that also match this glob.
         * Intended to emulate the @include Greasemonkey keyword.
         */
        include_globs?: string[];

        /**
         * Applied after matches to exclude URLs that match this glob.
         * Intended to emulate the @exclude Greasemonkey keyword.
         */
        exclude_globs?: string[];
    }
    interface ContextMenuCreateProperties {

        /**
         * The type of menu item. Defaults to 'normal' if not specified.
         */
        type?: chrome.ToStringLiteral<typeof chrome.contextMenus.ItemType>;

        /**
         * The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension.
         */
        id?: string;

        /**
         * The text to be displayed in the item; this is -required- unless type is 'separator'.
         * When the context is 'selection', you can use %s within the string to show the selected text.
         * For example, if this parameter's value is 'Translate '%s' to Pig Latin' and the user selects
         * the word 'cool', the context menu item for the selection is 'Translate 'cool' to Pig Latin'.
         */
        title?: string;

        /**
         * The initial state of a checkbox or radio item:
         * true for selected and false for unselected.
         * Only one radio item can be selected at a time in a given group of radio items.
         */
        checked?: boolean

        /**
         * List of contexts this menu item will appear in.
         * Defaults to ['page'] if not specified.
         */
        contexts?: any[];

        /**
         * A function that will be called back when the menu item is clicked.
         */
        onclick?: (info: any) => void

        /**
         * The ID of a parent menu item; this makes the item a child of a previously added item.
         */
        parentId?: chrome.integer | string;

        /**
         * Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see <a href='match_patterns'>Match Patterns</a>.
         */
        documentUrlPatterns?: any[];

        /**
         * Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.
         */
        targetUrlPatterns?: any[];

        /**
         * Whether this context menu item is enabled or disabled. Defaults to true.
         */
        enabled?: boolean;
    }
    interface ContextMenuUpdateProperties {
        /** The type of menu item. */
        type?: WebView.ContextType;

        /** The text to be displayed in the item */
        title?: string;

        /**
         * The state of a checkbox or radio item: true for selected and false for unselected.
         * Only one radio item can be selected at a time in a given group of radio items.
         */
        checked?: boolean;

        /**
         * List of contexts this menu item will appear in.
         */
        contexts?: any[];

        /**
         * A function that will be called back when the menu item is clicked.
        * @param callback
         */
        onclick?: (info: any) => void;

        /**
         * The ID of a parent menu item; this makes the item a child of a previously added item. <em>Note:</em> You cannot change an item to be a child of one of its own descendants.
         */
        parentId?: chrome.integer | string;

        /**
         * Lets you restrict the item to apply only to documents whose URL matches one of the given patterns.
         * (This applies to frames as well.)
         */
        documentUrlPatterns?: any[];

        /**
         * Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.
         */
        targetUrlPatterns?: any[];

        /**
         * Whether this context menu item is enabled or disabled.
         */
        enabled?: boolean;
    }
    interface ContextMenus {
        /**
         * Creates a new context menu item. Note that if an error occurs during creation,
         * you may not find out until the creation callback fires
         * (the details will be in chrome.runtime.lastError).
         * @param createProperties The properties used to create the item
         * @param [callback]
         */
        create(createProperties: object, callback?: () => void): void;

        /**
         * Updates a previously created context menu item.
         * @param id The ID of the item to update.
         * @param updateProperties The properties to update. Accepts the same values as the create function.
         * @param [callback]
         */
        update(id: chrome.integer | string, updateProperties: object, callback?: () => void): void;

        /**
         * Removes a context menu item.
         * @param menuItemId The ID of the context menu item to remove.
         * @param [callback]
         */
        remove(menuItemId: chrome.integer | string, callback?: () => void): void;

        /**
         * Removes all context menu items added to this webview.
         * @param [callback]
         */
        removeAll(callback?: () => void): void;

        /**
         * Fired before showing a context menu on this webview.
         * Can be used to disable this context menu by calling event.preventDefault().
         */
        onShow: chrome.events.Event<WebView.OnShowEvent>;
    }
    interface OnShowEvent {
        /** Call this to prevent showing the context menu. */
        preventDefault: () => void;
    }
    interface ContentWindow {
        /**
         * Posts a message to the embedded web content as long as the embedded
         * content is displaying a page from the target origin. This method is
         * available once the page has completed loading. Listen for the
         * contentload event and then call the method.
         *
         * The guest will be able to send replies to the embedder by posting message
         * to event.source on the message event it receives.
         *
         * This API is identical to the HTML5 postMessage API for communication
         * between web pages. The embedder may listen for replies by adding
         * a message event listener to its own frame.
         *
         * @param message Message object to send to the guest.
         * @param targetOrigin Specifies what the origin of the guest window must be for the event to be dispatched.
         */
        postMessage(message: any, targetOrigin: string): void;
    }
    interface DialogController {
        /**
         * Accept the dialog. Equivalent to clicking OK in an alert, confirm, or prompt dialog.
         * @param response The response string to provide to the guest when accepting a prompt dialog.
         */
        ok(response?: string): void;
        /** Reject the dialog. Equivalent to clicking Cancel in a confirm or prompt dialog. */
        cancel(): void;
    }
    /** Contains all of the results of the find request. */
    interface FindCallbackResults {
        /** The number of times searchText was matched on the page. */
        numberOfMatches: chrome.integer;
        /** The ordinal number of the current match. */
        activeMatchOrdinal: chrome.integer;
        /** Describes a rectangle around the active match in screen coordinates. */
        selectionRect: SelectionRect;
        /** Indicates whether this find request was canceled. */
        canceled: boolean;
    }
    interface FindOptions {
        /**
         * Flag to find matches in reverse order.
         * @default false
         */
        backward?: boolean;
        /**
         * Flag to match with case-sensitivity.
         * @default false
         */
        matchCase?: boolean;
    }
    interface NewWindow {
        /**
         * Attach the requested target page to an existing webview element.
        * @param webview The webview element to which the target page should be attached.
         */
        attach(webview: HTMLWebViewElement): void;
        /**
         * Cancel the new window request.
         */
        discard(): void;
    }
    interface PermissionRequestHandler {
        /** Allow the permission request. */
        allow(): void;
        /** Deny the permission request. This is the default behavior if allow is not called. */
        deny(): void;
    }
    /**
     * Describes a rectangle in screen coordinates.
     * The containment semantics are array-like; that is, the coordinate (left, top) is considered to be contained by the rectangle,
     * but the coordinate (left + width, top) is not.
     **/
    interface SelectionRect {
        /** Distance from the left edge of the screen to the left edge of the rectangle. */
        left: chrome.integer;
        /** Distance from the top edge of the screen to the top edge of the rectangle. */
        top: chrome.integer;
        /** Width of the rectangle. */
        width: chrome.integer;
        /** Height of the rectangle. */
        height: chrome.integer;
    }

    /** An HTTP Header, represented as an object containing a key and either a value or a binaryValue. */
    interface HttpHeader {
        name: string;
        value?: string;
        binaryValue?: ArrayBuffer;
    }

    interface ResourceRequest {
        url: string;
        /** The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request. */
        requestId: string;
        /** The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (type is main_frame or sub_frame), frameId indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab. */
        frameId: chrome.integer;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: chrome.integer;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: chrome.integer;
        /**
         * How the requested resource will be used.
         */
        type: chrome.webRequest.ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: chrome.double;
        /** The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used.
         * @since Since Chrome 63.
        */
        initiator?: string;
    }

    interface WebRequestDetails extends ResourceRequest {
        /** Standard HTTP method. */
        method: string;
    }

    interface WebRequestHeadersDetails extends WebRequestDetails {
        /** Optional. The HTTP request headers that are going to be sent out with this request. */
        requestHeaders?: HttpHeader[];
    }

    interface WebRequestBodyDetails extends WebRequestDetails {
        /**
         * Contains the HTTP request body data. Only provided if extraInfoSpec contains 'requestBody'.
         * @since Chrome 23.
         */
        requestBody: WebRequestBody;
    }

    /**
     * Contains data uploaded in a URL request.
     * @since Chrome 23.
     */
    interface UploadData {
        /** Optional. An ArrayBuffer with a copy of the data. */
        bytes?: ArrayBuffer;
        /** Optional. A string with the file's path and name. */
        file?: string;
    }

    interface WebRequestBody {
        /** Optional. Errors when obtaining request body data. */
        error?: string;
        /**
         * Optional.
         * If the request method is POST and the body is a sequence of key-value pairs encoded in UTF8, encoded as either multipart/form-data, or application/x-www-form-urlencoded, this dictionary is present and for each key contains the list of all values for that key. If the data is of another media type, or if it is malformed, the dictionary is not present. An example value of this dictionary is {'key': ['value1', 'value2']}.
         */
        formData?: { [key: string]: string[] };
        /**
         * Optional.
         * If the request method is PUT or POST, and the body is not already parsed in formData, then the unparsed request body elements are contained in this array.
         */
        raw?: UploadData[];
    }

    interface WebRequestFullDetails extends WebRequestHeadersDetails, WebRequestBodyDetails {
    }

    interface WebResponseDetails extends ResourceRequest {
        /** HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line). */
        statusLine: string;
        /**
         * Standard HTTP status code returned by the server.
         * @since Chrome 43.
         */
        statusCode: chrome.integer;
    }

    interface WebResponseHeadersDetails extends WebResponseDetails {
        /** Optional. The HTTP response headers that have been received with this response. */
        responseHeaders?: HttpHeader[];
        /** standard HTTP method i.e. GET, POST, PUT, etc. */
        method: string;
    }

    interface WebResponseCacheDetails extends WebResponseHeadersDetails {
        /**
         * Optional.
         * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
         */
        ip?: string;
        /** Indicates if this response was fetched from disk cache. */
        fromCache: boolean;
    }

    interface WebRedirectionResponseDetails extends WebResponseCacheDetails {
        /** The new URL. */
        redirectUrl: string;
    }

    /** An object describing filters to apply to webRequest events. */
    interface RequestFilter {
        /** Optional. */
        tabId?: chrome.integer;
        /**
         * A list of request types. Requests that cannot match any of the types will be filtered out.
         */
        types?: chrome.webRequest.ResourceType[];
        /** A list of URLs or URL patterns. Requests that cannot match any of the URLs will be filtered out. */
        urls: string[];

        /** Optional. */
        windowId?: chrome.integer;
    }

    interface AuthCredentials {
        username: string;
        password: string;
    }

    /** Returns value for event handlers that have the 'blocking' extraInfoSpec applied. Allows the event handler to modify network requests. */
    interface BlockingResponse {
        /**
         * If true, the request is cancelled.
         * Used in onBeforeRequest, this prevents the request from being sent. */
        cancel?: boolean;
        /**
         * Only used as a response to the onBeforeRequest and onHeadersReceived events.
         * If set, the original request is prevented from being sent/completed and is
         * instead redirected to the given URL. Redirections to non-HTTP schemes such
         * as data: are allowed. Redirects initiated by a redirect action use the
         * original request method for the redirect, with one exception: If the
         * redirect is initiated at the onHeadersReceived stage, then the redirect
         * will be issued using the GET method.
         */
        redirectUrl?: string;
        /**
         * Only used as a response to the onHeadersReceived event.
         * If set, the server is assumed to have responded with these
         * response headers instead. Only return responseHeaders if you really
         * want to modify the headers in order to limit the number of conflicts
         * (only one extension may modify responseHeaders for each request).
         */
        responseHeaders?: HttpHeader[];
        /**
         * Only used as a response to the onAuthRequired event.
         * If set, the request is made using the supplied credentials.
         */
        authCredentials?: AuthCredentials;
        /**
         * Only used as a response to the onBeforeSendHeaders event.
         * If set, the request is made with these request headers instead.
         */
        requestHeaders?: HttpHeader[];
    }

    interface WebAuthenticationChallengeDetails extends WebResponseHeadersDetails {
        /** The authentication scheme, e.g. Basic or Digest. */
        scheme: string;
        /** The authentication realm provided by the server, if there is one. */
        realm?: string;
        /** The server requesting authentication. */
        challenger: WebAuthChallenger;
        /** True for Proxy-Authenticate, false for WWW-Authenticate. */
        isProxy: boolean;
    }

    interface WebRequestBodyEvent extends chrome.events.Event<(details: WebRequestBodyDetails) => void> {
        addListener(callback: (details: WebRequestBodyDetails) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
    }

    interface WebRequestHeadersEvent extends chrome.events.Event<(details: WebRequestHeadersDetails) => void> {
        addListener(callback: (details: WebRequestHeadersDetails) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
    }

    interface _WebResponseHeadersEvent<T extends WebResponseHeadersDetails> extends chrome.events.Event<(details: T) => void> {
        addListener(callback: (details: T) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
    }

    interface WebResponseHeadersEvent extends _WebResponseHeadersEvent<WebResponseHeadersDetails> { }

    interface WebResponseCacheEvent extends _WebResponseHeadersEvent<WebResponseCacheDetails> { }

    interface WebRedirectionResponseEvent extends _WebResponseHeadersEvent<WebRedirectionResponseDetails> { }

    interface WebAuthenticationChallengeEvent extends chrome.events.Event<(details: WebAuthenticationChallengeDetails, callback?: (response: BlockingResponse) => void) => void> {
        addListener(callback: (details: WebAuthenticationChallengeDetails, callback?: (response: BlockingResponse) => void) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
    }

    interface WebResponseErrorEvent extends _WebResponseHeadersEvent<WebResponseErrorDetails> { }

    interface WebResponseErrorDetails extends WebResponseCacheDetails {
        /** The error description. This string is not guaranteed to remain backwards compatible between releases. You must not parse and act based upon its content. */
        error: string;
    }

    interface WebAuthChallenger {
        host: string;
        port: chrome.integer;
    }

    /**
     * Interface which provides access to webRequest events on the guest page.
     * @see[chrome.webRequest]{@link http://developer.chrome.com/extensions/webRequest}
     * extensions API for details on webRequest life cycle and related concepts.
     *
     * To illustrate how usage differs from the extensions webRequest API,
     * consider the following example code which blocks any guest requests
     * for URLs which match *://www.evil.com/*:
     * @example
     * webview.request.onBeforeRequest.addListener(
     *   function(details) { return {cancel: true}; }, {urls: ['*://www.evil.com/*']}, ['blocking']);
     * @description
     * Additionally, this interface supports declarative webRequest rules through onRequest and onMessage events.
     * @see[Docs]{@link http://developer.chrome.com/extensions/declarativeWebRequest.htmldeclarativeWebRequest}
     * @description
     * Note that conditions and actions for declarative webview webRequests should be instantiated
     * from their chrome.webViewRequest.* counterparts. The following example code declaratively
     * blocks all requests to 'example.com' on the webview myWebview:
     * @example const rule = { conditions: [ new chrome.webViewRequest.RequestMatcher({ url: { hostSuffix: 'example.com' } }) ], actions: [ new chrome.webViewRequest.CancelRequest() ] }; myWebview.request.onRequest.addRules([rule]);
     **/
    interface WebRequestEventInterface {
        /** Fired when a request is about to occur. */
        onBeforeRequest: WebRequestBodyEvent;
        /**
         * Fired before sending an HTTP request, once the request headers are available.
         * This may occur after a TCP connection is made to the server, but before any HTTP data is sent.
         */
        onBeforeSendHeaders: WebRequestHeadersEvent;
        /**
         * Fired just before a request is going to be sent to the server
         * (modifications of previous onBeforeSendHeaders callbacks
         * are visible by the time onSendHeaders is fired).
         */
        onSendHeaders: WebRequestHeadersEvent;
        /** Fired when HTTP response headers of a request have been received. */
        onHeadersReceived: WebResponseHeadersEvent;
        /**
         * Fired when an authentication failure is received.
         * The listener has three options: it can provide authentication credentials,
         * it can cancel the request and display the error page, or it can take no
         * action on the challenge. If bad user credentials are provided, this may be
         * called multiple times for the same request.
         */
        onAuthRequired: WebAuthenticationChallengeEvent;
        /**
         * Fired when the first byte of the response body is received.
         * For HTTP requests, this means that the status line and
         * response headers are available.
         */
        onResponseStarted: WebResponseCacheEvent;
        /** Fired when a server-initiated redirect is about to occur. */
        onBeforeRedirect: WebRedirectionResponseEvent;
        /** Fired when a request is completed. */
        onCompleted: WebResponseCacheEvent;
        /** Fired when an error occurs. */
        onErrorOccured: WebResponseErrorEvent;
        /**
         * Provides the Declarative Event API consisting of addRules, removeRules, and getRules.
         * This interface supports declarative webRequest rules through
         * **onRequest** and **onMessage** events.
         * @see[See declarativeWebRequest for API details.]{@link http://developer.chrome.com/extensions/declarativeWebRequest.html}
         */
        onRequest: chrome.webViewRequest.OnRequestEvent;
        /**
         * This interface supports declarative webRequest rules through
         * **onRequest** and **onMessage** events.
         * @see[See declarativeWebRequest for API details.]{@link http://developer.chrome.com/extensions/declarativeWebRequest.html}
         */
        onMessage: chrome.webViewRequest.OnMessageEvent;
    }
    /**
    * Defines the how zooming is handled in the webview.
    * Enum values:
    * 'per-origin'
    *   > Zoom changes will persist in the zoomed page's origin,
    *     i.e. all other webviews in the same partition that are
    *     navigated to that same origin will be zoomed as well.
    *     Moreover, per-origin zoom changes are saved with the origin,
    *     meaning that when navigating to other pages in the same origin,
    *     they will all be zoomed to the same zoom factor.
    * 'per-view'
    *   > Zoom changes only take effect in this webview,
    *     and zoom changes in other webviews will not affect
    *     the zooming of this webview. Also, per-view zoom
    *     changes are reset on navigation; navigating a webview
    *     will always load pages with their per-origin zoom factors
    *     (within the scope of the partition).
    * 'disabled'
    *   > Disables all zooming in the webview.
    *     The content will revert to the default zoom level,
    *     and all attempted zoom changes will be ignored.
    **/
    type ZoomMode =
        'per-origin' |
        'per-view' |
        'disabled';
    type ConsoleMessageLevel = -1 | 0 | 1 | 2;
    type LoadAbortReason =
        'ERR_ABORTED' |
        'ERR_INVALID_URL' |
        'ERR_DISALLOWED_URL_SCHEME' |
        'ERR_BLOCKED_BY_CLIENT' |
        'ERR_ADDRESS_UNREACHABLE' |
        'ERR_EMPTY_RESPONSE' |
        'ERR_FILE_NOT_FOUND' |
        'ERR_UNKNOWN_URL_SCHEME';
    interface ConsoleMessage {
        /**
         * The severity level of the log message.
         * Ranges from -1 to 2.
         * LOG_VERBOSE (console.debug) = -1
         * LOG_INFO (console.log, console.info) = 0
         * LOG_WARNING (console.warn) = 1
         * LOG_ERROR (console.error) = 2
         */
        level: ConsoleMessageLevel;
        /** The logged message contents. */
        message: string;
        /** The line number of the message source. */
        line: chrome.integer;
        /** A string identifying the resource which logged the message. */
        sourceId: string;
    }
    type DialogMessageType =
        'alert' |
        'confirm' |
        'prompt';

    interface Dialog {
        /**
         * The type of modal dialog requested by the guest.
         */
        messageType: DialogMessageType;
        /**
         * The text the guest attempted to display in the modal dialog.
         */
        messageText: string;
        /**
         * An interface that can be used to respond to the guest's modal request.
         */
        dialog: DialogController;
    }
    type ExitReason =
        'normal' |
        'abnormal' |
        'crash' |
        'kill';
    interface Exit {
        /** Chrome's internal ID of the process that exited. */
        processID: chrome.integer;
        /** String indicating the reason for the exit. */
        reason: ExitReason;
    }
    interface FindUpdate {
        /**
         * The string that is being searched for in the page.
         */
        searchText: string;
        /**
         * The number of matches found for searchText on the page so far.
         */
        numberOfMatches: chrome.integer;
        /**
         * The ordinal number of the current active match,
         * if it has been found. This will be 0 until then.
         */
        activeMatchOrdinal: chrome.integer;
        /**
         * Describes a rectangle around the active match,
         * if it has been found, in screen coordinates.
         */
        selectionRect: SelectionRect;
        /**
         * Indicates whether the find request was canceled.
         */
        canceled: boolean;
        /**
         * Indicates that all find requests have completed
         * and that no more findupdate events will be fired
         * until more find requests are made.
         */
        finalUpdate: string;
    }
    interface LoadAbort {
        /** Requested URL. */
        url: string;
        /** Whether the load was top-level or in a subframe. */
        isTopLevel: boolean;
        /**
         * Unique chrome.integer ID for the type of abort.
         * Note that this ID is `not` guaranteed to
         * remain backwards compatible between releases.
         * You must not act based upon this specific chrome.integer.
         */
        code: chrome.integer;
        /**
         * String indicating what type of abort occurred.
         * This string is `not` guaranteed to remain
         * backwards compatible between releases.
         * You must not parse and act based upon its content.
         * It is also possible that, in some cases,
         * an error not listed here could be reported.
         */
        reason: LoadAbortReason;
    }
    interface LoadCommit {
        /** The URL that committed. */
        url: string;
        /** Whether the load is top-level or in a subframe. */
        isTopLevel: boolean;
    }
    interface LoadRedirect {
        /** The requested URL before the redirect. */
        oldUrl: string;
        /** The new URL after the redirect. */
        newUrl: string;
        /** Whether or not the redirect happened at top-level or in a subframe. */
        isTopLevel: boolean;
    }
    interface LoadStart {
        /** Requested URL. */
        url: string;
        /** Whether the load is top-level or in a subframe. */
        isTopLevel: boolean;
    }
    type WindowOpenDisposition =
        'ignore' |
        'save_to_disk' |
        'current_tab' |
        'new_background_tab' |
        'new_foreground_tab' |
        'new_window' |
        'new_popup';
    interface NewWindow {
        /**
         * An interface that can be used to either attach the requested
         * target page to an existing webview element or explicitly
         * discard the request.
         **/
        window: NewWindow;

        /** The target URL requested for the new window. */
        targetUrl: string;

        /** The initial width requested for the new window. */
        initialWidth: chrome.integer;

        /** The initial height requested for the new window. */
        initialHeight: chrome.integer;

        /** The requested name of the new window. */
        name: string;

        /** The requested disposition of the new window. */
        windowOpenDisposition: WindowOpenDisposition;
    }
    type RequestedPermission =
        'media' |
        'geolocation' |
        'pointerLock' |
        'download' |
        'loadplugin' |
        'filesystem' |
        'fullscreen';
    interface PermissionRequest {
        /** The type of permission being requested. */
        permission: RequestedPermission;
        /** An object which holds details of the requested permission.*/
        request: PermissionRequestHandler;
    }
    interface ProcessResponsive {
        /** Chrome's internal ID of the process that became responsive. */
        processID: chrome.integer;
    }
    interface SizeChanged {
        /** Old width of embedded web content. */
        oldWidth: chrome.integer;
        /** Old height of embedded web content. */
        oldHeight: chrome.integer;
        /** New width of embedded web content. */
        newWidth: chrome.integer;
        /** New height of embedded web content. */
        newHeight: chrome.integer;
    }
    interface ProcessUnresponsive {
        /** Chrome's internal ID of the process that has become unresponsive. */
        processID: chrome.integer;
    }
    interface ZoomChange {
        /** The page's previous zoom factor. */
        oldzoomFactor: chrome.double;
        /** The new zoom factor that the page was zoomed to. */
        newzoomFactor: chrome.double;
    }
}

declare interface Document {
    createElement(element: 'webview'): HTMLWebViewElement;
}
