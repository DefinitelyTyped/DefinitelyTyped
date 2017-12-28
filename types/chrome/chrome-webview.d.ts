/// <reference path="chrome-app.d.ts" />

// Project: http://developer.chrome.com/apps/
// Definitions by: Nikolai Ommundsen <https://github.com/niikoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
//
// WebView ref: https://chromium.googlesource.com/chromium/src/+/64.0.3274.2/chrome/common/extensions/api/webview_tag.json
//


///////////////////
// <webview> Tag
///////////////////
/**
 * Use the <code>webview</code> tag to actively load live content from the web over the network and embed it in your Chrome App. Your app can control the appearance of the <code>webview</code> and interact with the web content, initiate navigations in an embedded web page, react to error events that happen within it, and more (see <a href=\"#usage\">Usage</a>).
 */
declare namespace chrome.webviewTag {
    /** Options that determine what data should be cleared by `clearData`. */
    export interface ClearDataOptions {
        /** Clear data accumulated on or after this date, represented in milliseconds since the epoch (accessible via the getTime method of the JavaScript <code>Date</code> object). If absent, defaults to <code>0</code> (which would remove all browsing data). */
        since: number;
    }
    export interface WindowEvent extends chrome.events.Event<() => void> {}

    export interface ConsoleEvent extends Event {
        /**
         * @description The severity level of the log message. Ranges from 0 to 4.
         * @type {number}
         * @memberof ConsoleEvent
         */
        level: number,
        /**
         * @description The logged message contents.
         * @type {string}
         * @memberof ConsoleEvent
         */
        message: string,
        /**
         * @description The line number of the message source.
         * @type {number}
         * @memberof ConsoleEvent
         */
        line: number,
        /**
         * @description A string identifying the resource which logged the message.
         * @type {string}
         * @memberof ConsoleEvent
         */
        sourceId: string
    }

    /** Description of a declarative rule for handling events. */
    export interface Rule {
        /** Optional priority of this rule. Defaults to 100.  */
        priority?: number;
        /** List of conditions that can trigger the actions. */
        conditions: any[];
        /** Optional. Optional identifier that allows referencing this rule.  */
        id?: string;
        /** List of actions that are triggered if one of the condtions is fulfilled. */
        actions: any[];
        /**
         * @description Tags can be used to annotate rules and perform operations on sets of rules.¨
         * @since Chrome 28
         * @type {string[]}
         * @memberof Rule
         */
        tags?: string[];
    }

    /**
     * @description Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @export
     * @interface InjectDetails
     */
    export interface InjectDetails {
        /**
         * @description JavaScript or CSS code to inject.<br><br><b>Warning:</b><br>Be careful using the <code>code</code> parameter. Incorrect use of it may open your app to <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">cross site scripting</a> attacks.
         * @type {string}
         * @memberof InjectDetails
         */
        code?: string,
        /**
         * @description JavaScript or CSS file to inject.
         * @type {string}
         * @memberof InjectDetails
         */
        file?: string
    }

    export interface WebViewElementEventMap extends ElementEventMap {
        'message': ConsoleEvent
    }

    /**
     * @description
     * @export
     * @interface HTMLWebViewElement
     * @extends {Element}
     */
    export interface HTMLWebViewElement extends Element {
        executeScript?: (details: InjectDetails, callback?: (result: any) => void) => void,
        src: string,
        contentWindow: Window
        addEventListener<K extends keyof WebViewElementEventMap>(type: K, listener: (this: HTMLWebViewElement, ev: WebViewElementEventMap[K]) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    }
}
