declare module goog {
    function require(name: 'goog.debug.DevCss'): typeof goog.debug.DevCss;
    function require(name: 'goog.debug.DevCss.UserAgent'): typeof goog.debug.DevCss.UserAgent;
}

declare module goog.debug {

    /**
     * A class for solving development CSS issues/emulating the CSS Compiler.
     * @param {goog.debug.DevCss.UserAgent=} opt_userAgent The user agent, if not
     *     passed in, will be determined using goog.userAgent.
     * @param {number|string=} opt_userAgentVersion The user agent's version.
     *     If not passed in, will be determined using goog.userAgent.
     * @throws {Error} When userAgent detection fails.
     * @constructor
     * @final
     */
    class DevCss {
        constructor(opt_userAgent?: goog.debug.DevCss.UserAgent, opt_userAgentVersion?: number|string);
        
        /**
         * Rewrites the CSSOM as needed to activate any useragent-specific selectors.
         * @param {boolean=} opt_enableIe6ReadyHandler If true(the default), and the
         *     userAgent is ie6, we set a document "ready" event handler to walk the DOM
         *     and make combined selector className changes. Having this parameter also
         *     aids unit testing.
         */
        activateBrowserSpecificCssRules(opt_enableIe6ReadyHandler?: boolean): void;
    }
}

declare module goog.debug.DevCss {

    /**
     * A list of possible user agent strings.
     * @enum {string}
     */
    type UserAgent = string;
    var UserAgent: {
        OPERA: UserAgent;
        IE: UserAgent;
        GECKO: UserAgent;
        FIREFOX: UserAgent;
        WEBKIT: UserAgent;
        SAFARI: UserAgent;
        MOBILE: UserAgent;
    };

    /**
     * A list of strings that may be used for matching in CSS files/development.
     * @enum {string}
     * @private
     */
    type CssToken_ = string;
    var CssToken_: {
        USERAGENT: CssToken_;
        SEPARATOR: CssToken_;
        LESS_THAN: CssToken_;
        GREATER_THAN: CssToken_;
        LESS_THAN_OR_EQUAL: CssToken_;
        GREATER_THAN_OR_EQUAL: CssToken_;
        IE6_SELECTOR_TEXT: CssToken_;
        IE6_COMBINED_GLUE: CssToken_;
    };
}
