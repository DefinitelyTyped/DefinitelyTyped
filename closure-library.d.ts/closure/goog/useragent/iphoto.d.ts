declare module goog {
    function require(name: 'goog.userAgent.iphoto'): typeof goog.userAgent.iphoto;
}

declare module goog.userAgent.iphoto {

    /**
     * Whether the installed version of iPhoto is as new or newer than a given
     * version.
     * @param {string} version The version to check.
     * @return {boolean} Whether the installed version of iPhoto is as new or newer
     *     than a given version.
     */
    function isVersion(version: string): boolean;
}
