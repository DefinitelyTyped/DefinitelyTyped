declare module goog {
    function require(name: 'goog.events.BrowserFeature'): typeof goog.events.BrowserFeature;
}

declare module goog.events {

    /**
     * Enum of browser capabilities.
     * @enum {boolean}
     */
    type BrowserFeature = boolean;
    var BrowserFeature: {
        HAS_W3C_BUTTON: BrowserFeature;
        HAS_W3C_EVENT_SUPPORT: BrowserFeature;
        SET_KEY_CODE_TO_PREVENT_DEFAULT: BrowserFeature;
        HAS_NAVIGATOR_ONLINE_PROPERTY: BrowserFeature;
        HAS_HTML5_NETWORK_EVENT_SUPPORT: BrowserFeature;
        HTML5_NETWORK_EVENTS_FIRE_ON_BODY: BrowserFeature;
        TOUCH_ENABLED: BrowserFeature;
    };
}
