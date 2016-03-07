declare module goog {
    function require(name: 'goog.labs.userAgent.util'): typeof goog.labs.userAgent.util;
}

declare module goog.labs.userAgent.util {

    /**
     * Applications may override browser detection on the built in
     * navigator.userAgent object by setting this string. Set to null to use the
     * browser object instead.
     * @param {?string=} opt_userAgent The User-Agent override.
     */
    function setUserAgent(opt_userAgent?: string): void;

    /**
     * @return {string} The user agent string.
     */
    function getUserAgent(): string;

    /**
     * @param {string} str
     * @return {boolean} Whether the user agent contains the given string, ignoring
     *     case.
     */
    function matchUserAgent(str: string): boolean;

    /**
     * @param {string} str
     * @return {boolean} Whether the user agent contains the given string.
     */
    function matchUserAgentIgnoreCase(str: string): boolean;

    /**
     * Parses the user agent into tuples for each section.
     * @param {string} userAgent
     * @return {!Array<!Array<string>>} Tuples of key, version, and the contents
     *     of the parenthetical.
     */
    function extractVersionTuples(userAgent: string): Array<Array<string>>;
}
