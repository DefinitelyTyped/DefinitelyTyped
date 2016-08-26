//Created by Bahman Nikkhahan https://github.com/bahman616
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
     * notify user
     * @param styleName style name
     * @param styleDefinition style definition object
     */
    addStyle(styleName: string, styleDefinition: any);

    /**
     * notify user
     * @param styleName style name
     */
    removeStyle(styleName: string);

    /**
     * notify user
     * @param styleName style name
     */
    getStyle(styleName: string);

    /**
     * notify user
     * @param cssText css text to insert
     */
    insertCSS(cssText: string);

    /**
     * notify user
     * @param options notification iptions
     */
    defaults(options: NotificationOptions)
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
    (element?: any, notificationdata?: any, options?: NotificationOptions):  JQuery;

    /**
     * notify user
     * @param styleName style name
     * @param styleDefinition style definition object
     */
    addStyle(styleName: string, styleDefinition: any);

    /**
     * notify user
     * @param styleName style name
     */
    removeStyle(styleName: string);

    /**
     * notify user
     * @param styleName style name
     */
    getStyle(styleName: string);

    /**
     * notify user
     * @param cssText css text to insert
     */
    insertCSS(cssText: string);

    /**
     * notify user
     * @param options notification iptions
     */
    defaults(options: NotificationOptions)

}

interface JQuery {
    notify: JQueryStaticNotify;
}

