declare module goog {
    function require(name: 'goog.userAgent.platform'): typeof goog.userAgent.platform;
}

declare module goog.userAgent.platform {

    /**
     * The version of the platform. We only determine the version for Windows and
     * Mac, since it doesn't make much sense on Linux. For Windows, we only look at
     * the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given version
     * 0.0
     * @type {string}
     */
    var VERSION: string;

    /**
     * Whether the user agent platform version is higher or the same as the given
     * version.
     *
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the user agent platform version is higher or the
     *     same as the given version.
     */
    function isVersion(version: string|number): boolean;
}
