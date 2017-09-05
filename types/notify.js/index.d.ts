// Type definitions for notify.js
// Project: https://github.com/notifyjs/notifyjs
// Definitions by: Bahman Nikkhahan <https://github.com/bahman616>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface NotificationOptions {
    // whether to hide the notification on click
    clickToHide: boolean;
    // whether to auto-hide the notification
    autoHide: boolean;
    // if autoHide, hide after milliseconds
    autoHideDelay: number;
    // show the arrow pointing at the element
    arrowShow: boolean;
    // arrow size in pixels
    arrowSize: number;
    // position defines the notification position though uses the defaults below
    position: string;
    // default positions
    elementPosition: string;
    globalPosition: string;
    // default style
    style: string;
    // default class (string or [string])
    className: string;
    // show animation
    showAnimation: string;
    // show animation duration
    showDuration: number;
    // hide animation
    hideAnimation: string;
    // hide animation duration
    hideDuration: number;
    // padding between element and notification
    gap: number;
}

interface JQueryStaticNotify {
    /**
     * notify user
     * @param element a jquery element
     * @param notificationdata global notification data
     * @param options notification options
     */
    (element?: any, notificationdata?: any, options?: NotificationOptions): JQueryStatic;

    /**
     * Add style
     * @param styleName style name
     * @param styleDefinition style definition object
     */
    addStyle(styleName: string, styleDefinition: any): any;

    /**
     * Remove style
     * @param styleName style name
     */
    removeStyle(styleName: string): any;

    /**
     * Get style
     * @param styleName style name
     */
    getStyle(styleName: string): any;

    /**
     * Insert css
     * @param cssText css text to insert
     */
    insertCSS(cssText: string): any;

    /**
     * Set defaults for notifications
     * @param options notification iptions
     */
    defaults(options: NotificationOptions): any;
}

interface JQueryStatic {
    notify: JQueryStaticNotify;
}

interface JQueryNotify {
    /**
     * notify user
     * @param element a jquery element
     * @param notificationdata global notification data
     * @param options notification options
     */
    (element?: any, notificationdata?: any, options?: NotificationOptions): JQuery;

    /**
     * Add style
     * @param styleName style name
     * @param styleDefinition style definition object
     */
    addStyle(styleName: string, styleDefinition: any): any;

    /**
     * Remove style
     * @param styleName style name
     */
    removeStyle(styleName: string): any;

    /**
     * Get style
     * @param styleName style name
     */
    getStyle(styleName: string): any;

    /**
     * Insert css
     * @param cssText css text to insert
     */
    insertCSS(cssText: string): any;

    /**
     * Set defaults for notifications
     * @param options notification iptions
     */
    defaults(options: NotificationOptions): any;

}

interface JQuery {
    notify: JQueryStaticNotify;
}
