declare module goog {
    function require(name: 'goog.ui.CookieEditor'): typeof goog.ui.CookieEditor;
}

declare module goog.ui {

    /**
     * Displays and edits the value of a cookie.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class CookieEditor extends goog.ui.Component {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Sets the cookie which this component will edit.
         * @param {string} cookieKey Cookie key.
         */
        selectCookie(cookieKey: string): void;
    }
}
