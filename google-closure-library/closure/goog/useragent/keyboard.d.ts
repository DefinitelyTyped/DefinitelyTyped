declare module goog {
    function require(name: 'goog.userAgent.keyboard'): typeof goog.userAgent.keyboard;
}

declare module goog.userAgent.keyboard {

    /**
     * Whether the user agent is running in an environment that uses Mac-based
     * keyboard shortcuts.
     * @type {boolean}
     */
    var MAC_KEYBOARD: boolean;
}
