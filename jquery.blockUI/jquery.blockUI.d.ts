// Type definitions for jQuery BlockUI Plugin
// Project: http://malsup.com/jquery/block/
// Definitions by: Jeffrey Lee <http://blog.darkthread.net/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />

interface JQBlockUIOptions {
    /** message displayed when blocking (use null for no message) */
    message?: any;
    /** title string; only used when theme == true  */
    title?: string;
    /** only used when theme == true (requires jquery-ui.js to be loaded) */
    draggable?: boolean;
    /** set to true to use with jQuery UI themes */
    theme?: boolean;

    /** 
     * styles for the message when blocking; if you wish to disable 
     * these and use an external stylesheet then do this in your code: 
     * $.blockUI.defaults.css = {}; 
     */
    css?: any;

    /** minimal style set used when themes are used  */
    themedCSS?: any;

    /** styles for the overlay */
    overlayCSS?: any;

    /** style to replace wait cursor before unblocking to correct issue of lingering wait cursor */
    cursorReset?: string;

    /** styles applied when using $.growlUI */
    growlCSS?: any;
    /** ifreamSrc for IE */
    iframeSrc?: string;

    /** force usage of iframe in non-IE browsers (handy for blocking applets) */
    forceIframe?: boolean;

    /** z-index for the blocking overlay */
    baseZ?: number;


    /** set true to have the message automatically centered for X */
    centerX?: boolean;
    /** set true to have the message automatically centered for Y */
    centerY?: boolean;

    /** 
     * allow body element to be stetched in ie6; this makes blocking look better
     * on "short" pages.  disable if you wish to prevent changes to the body height 
     */
    allowBodyStretch?: boolean;

    /** enable if you want key and mouse events to be disabled for content that is blocked */
    bindEvents?: boolean;

    /** be default blockUI will supress tab navigation from leaving blocking content(if bindEvents is true) */
    constrainTabKey?: boolean;

    /** fadeIn time in millis; set to 0 to disable fadeIn on block  */
    fadeIn?: number;

    /** fadeOut time in millis; set to 0 to disable fadeOut on unblock */
    fadeOut?: number;

    /** time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock */
    timeout?: number;

    /** disable if you don't want to show the overlay */
    showOverlay?: boolean;

    /** if true, focus will be placed in the first available input field when page blocking */
    focusInput?: boolean;

    /** callback method invoked when fadeIn has completed and blocking message is visible */
    onBlock?: () => void;

    /** 
     * callback method invoked when unblocking has completed; the callback is 
     * passed the element that has been unblocked (which is the window object for page 
     * blocks) and the options that were passed to the unblock call: 
     * onUnblock(element, options) 
     */
    onUnblock?: (element: any, options: any) => void;

    // don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493 
    /** quirksmodeOffsetHack */
    quirksmodeOffsetHack?: number;

    /** class name of the message block */
    blockMsgClass?: string;

    /** if it is already blocked, then ignore it (don't unblock and reblock) */
    ignoreIfBlocked?: boolean;
}

interface JQBlockUIStatic {
    /** default options */
    defaults?: JQBlockUIOptions;
    /** block user activity for the page */
    (): void;
    /**
     * block user activity for the page
     * @param options options 
     */
    (option: JQBlockUIOptions): void;
}

interface JQueryStatic {
    /** block user activity for the page */
    blockUI?: JQBlockUIStatic;
    /** unblock the page */
    unblockUI?: JQBlockUIStatic;
}

interface JQuery {
    /** 
     * block the element(s)
     * @param options block options
     */
    block(option?: JQBlockUIOptions): JQuery;
    /**
     * unblock the element(s)
     */
    unblock(option?: JQBlockUIOptions): JQuery;
}