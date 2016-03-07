declare module goog {
    function require(name: 'goog.userAgent.product'): typeof goog.userAgent.product;
}

declare module goog.userAgent.product {

    /**
     * Whether the code is running on the Opera web browser.
     * @type {boolean}
     */
    var OPERA: boolean;

    /**
     * Whether the code is running on an IE web browser.
     * @type {boolean}
     */
    var IE: boolean;

    /**
     * Whether the code is running on the Firefox web browser.
     * @type {boolean}
     */
    var FIREFOX: boolean;

    /**
     * Whether the code is running on an iPhone or iPod touch.
     *
     * iPod touch is considered an iPhone for legacy reasons.
     * @type {boolean}
     */
    var IPHONE: boolean;

    /**
     * Whether the code is running on an iPad.
     * @type {boolean}
     */
    var IPAD: boolean;

    /**
     * Whether the code is running on AOSP browser or WebView inside
     * a pre KitKat Android phone or tablet.
     * @type {boolean}
     */
    var ANDROID: boolean;

    /**
     * Whether the code is running on the Chrome web browser on any platform
     * or AOSP browser or WebView in a KitKat+ Android phone or tablet.
     * @type {boolean}
     */
    var CHROME: boolean;

    /**
     * Whether the code is running on the desktop Safari web browser.
     * Note: the legacy behavior here is only true for Safari not running
     * on iOS.
     * @type {boolean}
     */
    var SAFARI: boolean;
}
