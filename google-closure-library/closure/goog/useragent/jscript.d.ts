declare module goog {
    function require(name: 'goog.userAgent.jscript'): typeof goog.userAgent.jscript;
}

declare module goog.userAgent.jscript {

    /**
     * Whether we detect that the user agent is using Microsoft JScript.
     * @type {boolean}
     */
    var HAS_JSCRIPT: boolean;

    /**
     * The installed version of JScript.
     * @type {string}
     */
    var VERSION: string;

    /**
     * Whether the installed version of JScript is as new or newer than a given
     * version.
     * @param {string} version The version to check.
     * @return {boolean} Whether the installed version of JScript is as new or
     *     newer than the given version.
     */
    function isVersion(version: string): boolean;
}
