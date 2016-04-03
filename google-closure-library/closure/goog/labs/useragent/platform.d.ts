declare module goog {
    function require(name: 'goog.labs.userAgent.platform'): typeof goog.labs.userAgent.platform;
}

declare module goog.labs.userAgent.platform {

    /**
     * @return {boolean} Whether the platform is Android.
     */
    function isAndroid(): boolean;

    /**
     * @return {boolean} Whether the platform is iPod.
     */
    function isIpod(): boolean;

    /**
     * @return {boolean} Whether the platform is iPhone.
     */
    function isIphone(): boolean;

    /**
     * @return {boolean} Whether the platform is iPad.
     */
    function isIpad(): boolean;

    /**
     * @return {boolean} Whether the platform is iOS.
     */
    function isIos(): boolean;

    /**
     * @return {boolean} Whether the platform is Mac.
     */
    function isMacintosh(): boolean;

    /**
     * Note: ChromeOS is not considered to be Linux as it does not report itself
     * as Linux in the user agent string.
     * @return {boolean} Whether the platform is Linux.
     */
    function isLinux(): boolean;

    /**
     * @return {boolean} Whether the platform is Windows.
     */
    function isWindows(): boolean;

    /**
     * @return {boolean} Whether the platform is ChromeOS.
     */
    function isChromeOS(): boolean;

    /**
     * The version of the platform. We only determine the version for Windows,
     * Mac, and Chrome OS. It doesn't make much sense on Linux. For Windows, we only
     * look at the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given
     * version 0.0.
     *
     * @return {string} The platform version or empty string if version cannot be
     *     determined.
     */
    function getVersion(): string;

    /**
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the browser version is higher or the same as the
     *     given version.
     */
    function isVersionOrHigher(version: string|number): boolean;
}
