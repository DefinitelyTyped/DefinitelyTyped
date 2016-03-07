declare module goog {
    function require(name: 'goog.userAgentTestUtil'): typeof goog.userAgentTestUtil;
    function require(name: 'goog.userAgentTestUtil.UserAgents'): typeof goog.userAgentTestUtil.UserAgents;
}

declare module goog.userAgentTestUtil {

    /**
     * Browser definitions.
     * @enum {string}
     */
    type UserAgents = string;
    var UserAgents: {
        GECKO: UserAgents;
        IE: UserAgents;
        OPERA: UserAgents;
        WEBKIT: UserAgents;
    };

    /**
     * Rerun the initialization code to set all of the goog.userAgent constants.
     * @suppress {accessControls}
     */
    function reinitializeUserAgent(): void;

    /**
     * Return whether a given user agent has been detected.
     * @param {string} agent Value in UserAgents.
     * @return {boolean} Whether the user agent has been detected.
     */
    function getUserAgentDetected(agent: string): boolean;
}
