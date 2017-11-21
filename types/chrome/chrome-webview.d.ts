/// <reference path="chrome-app.d.ts" />
// Project: http://developer.chrome.com/apps/
// Definitions by: Nikolai Ommundsen <https://github.com/niikoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
//
// WebView ref: https://chromium.googlesource.com/chromium/src/+/a0d56194380757b87d9d687786acd8cb4284b3fa/chrome/common/extensions/api/webview_tag.json
//

export interface WebViewWindowEvent extends chrome.events.Event<() => void> {};

export interface WebViewConsoleEvent extends Event {
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
    export interface WebViewRule {
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
         * @memberof WebViewRule
         */
        tags?: string[];
  }

  /**
   * @description Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
   * @export
   * @interface InjectDetails
   */
  export interface WebViewInjectDetails {
    /**
     * @description JavaScript or CSS code to inject.<br><br><b>Warning:</b><br>Be careful using the <code>code</code> parameter. Incorrect use of it may open your app to <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">cross site scripting</a> attacks.
     * @type {string}
     * @memberof WebViewInjectDetails
     */
    code?: string,
    /**
     * @description JavaScript or CSS file to inject.
     * @type {string}
     * @memberof WebViewInjectDetails
     */
    file?: string
  }

export interface ChromeWebViewElementEventMap extends ElementEventMap {
    'message': WebViewConsoleEvent
}
export interface HTMLChromeWebViewElement extends Element {
    executeScript?: (details: WebViewInjectDetails, callback?: (result: any) => void) => void,
    src: string,
    contentWindow: Window
    addEventListener<K extends keyof ChromeWebViewElementEventMap>(type: K, listener: (this: HTMLChromeWebViewElement, ev: ChromeWebViewElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}
