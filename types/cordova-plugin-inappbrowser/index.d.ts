// Type definitions for Apache Cordova InAppBrowser plugin 1.7
// Project: https://github.com/apache/cordova-plugin-inappbrowser
// Definitions by: Microsoft Open Technologies Inc <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Copyright (c) Microsoft Open Technologies Inc
// Licensed under the MIT license.
// TypeScript Version: 2.3
type channel = "loadstart" | "loadstop" | "loaderror" | "exit";

interface Window {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url     The URL to load.
     * @param  target  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    open(url: string, target?: string, options?: string, replace?: boolean): InAppBrowser;
}

/**
 * The object returned from a call to window.open.
 * NOTE: The InAppBrowser window behaves like a standard web browser, and can't access Cordova APIs.
 */
interface InAppBrowser extends Window {
    onloadstart(type: Event): void;
    onloadstop(type: InAppBrowserEvent): void;
    onloaderror(type: InAppBrowserEvent): void;
    onexit(type: InAppBrowserEvent): void;
    // addEventListener overloads
    /**
     * Adds a listener for an event from the InAppBrowser.
     * @param type      loadstart: event fires when the InAppBrowser starts to load a URL.
     *                  loadstop: event fires when the InAppBrowser finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowser encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: channel, callback: InAppBrowserEventListenerOrEventListenerObject): void;
    // removeEventListener overloads
    /**
     * Removes a listener for an event from the InAppBrowser.
     * @param type      The event to stop listening for.
     *                  loadstart: event fires when the InAppBrowser starts to load a URL.
     *                  loadstop: event fires when the InAppBrowser finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowser encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    removeEventListener(type: channel, callback: InAppBrowserEventListenerOrEventListenerObject): void;
    /** Closes the InAppBrowser window. */
    close(): void;
    /** Hides the InAppBrowser window. Calling this has no effect if the InAppBrowser was already hidden. */
    hide(): void;
    /**
     * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
     * if the InAppBrowser was already visible.
     */
    show(): void;
    /**
     * Injects JavaScript code into the InAppBrowser window.
     * @param script    Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the JavaScript code is injected.
     *                  If the injected script is of type code, the callback executes with
     *                  a single parameter, which is the return value of the script, wrapped in an Array.
     *                  For multi-line scripts, this is the return value of the last statement,
     *                  or the last expression evaluated.
     */
    executeScript(script: { code: string } | { file: string }, callback: (result: any) => void): void;
    /**
     * Injects CSS into the InAppBrowser window.
     * @param css       Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the CSS is injected.
     */
    insertCSS(css: { code: string } | { file: string }, callback: () => void): void;
}

type InAppBrowserEventListenerOrEventListenerObject = InAppBrowserEventListener | InAppBrowserEventListenerObject;

type InAppBrowserEventListener = (evt: InAppBrowserEvent) => void;

interface InAppBrowserEventListenerObject {
    handleEvent(evt: InAppBrowserEvent): void;
}

interface InAppBrowserEvent extends Event {
    /** the eventname, either loadstart, loadstop, loaderror, or exit. */
    type: string;
    /** the URL that was loaded. */
    url: string;
    /** the error code, only in the case of loaderror. */
    code: number;
    /** the error message, only in the case of loaderror. */
    message: string;
}

interface Cordova {
    InAppBrowser: InAppBrowser;
}
