/**
 * Provides client-side access to the authoritative PHP-generated User Agent
 * information supplied by the server.
 */
declare namespace UserAgent {
    /**
     * Check if the User Agent browser matches `query`.
     *
     * `query` should be a string like "Chrome" or "Chrome > 33".
     *
     * Valid browser names include:
     *
     * - ACCESS NetFront
     * - AOL
     * - Amazon Silk
     * - Android
     * - BlackBerry
     * - BlackBerry PlayBook
     * - Chrome
     * - Chrome for iOS
     * - Chrome frame
     * - Facebook PHP SDK
     * - Facebook for iOS
     * - Firefox
     * - IE
     * - IE Mobile
     * - Mobile Safari
     * - Motorola Internet Browser
     * - Nokia
     * - Openwave Mobile Browser
     * - Opera
     * - Opera Mini
     * - Opera Mobile
     * - Safari
     * - UIWebView
     * - Unknown
     * - webOS
     * - etc...
     *
     * An authoritative list can be found in the PHP `BrowserDetector` class and
     * related classes in the same file (see calls to `new UserAgentBrowser` here:
     * https://fburl.com/50728104).
     *
     * @note Function results are memoized
     */
    function isBrowser(query: string): boolean;

    /**
     * Check if the User Agent browser uses a 32 or 64 bit architecture.
     *
     * @note Function results are memoized
     */
    function isBrowserArchitecture(query: string): boolean;

    /**
     * Check if the User Agent device matches `query`.
     *
     * `query` should be a string like "iPhone" or "iPad".
     *
     * Valid device names include:
     *
     * - Kindle
     * - Kindle Fire
     * - Unknown
     * - iPad
     * - iPhone
     * - iPod
     * - etc...
     *
     * An authoritative list can be found in the PHP `DeviceDetector` class and
     * related classes in the same file (see calls to `new UserAgentDevice` here:
     * https://fburl.com/50728332).
     *
     * @note Function results are memoized
     */
    function isDevice(query: string): boolean;

    /**
     * Check if the User Agent rendering engine matches `query`.
     *
     * `query` should be a string like "WebKit" or "WebKit >= 537".
     *
     * Valid engine names include:
     *
     * - Gecko
     * - Presto
     * - Trident
     * - WebKit
     * - etc...
     *
     * An authoritative list can be found in the PHP `RenderingEngineDetector`
     * class related classes in the same file (see calls to `new
     * UserAgentRenderingEngine` here: https://fburl.com/50728617).
     *
     * Function results are memoized
     */
    function isEngine(query: string): boolean;

    /**
     * Check if the User Agent platform matches `query`.
     *
     * `query` should be a string like "Windows" or "iOS 5 - 6".
     *
     * Valid platform names include:
     *
     * - Android
     * - BlackBerry OS
     * - Java ME
     * - Linux
     * - Mac OS X
     * - Mac OS X Calendar
     * - Mac OS X Internet Account
     * - Symbian
     * - SymbianOS
     * - Windows
     * - Windows Mobile
     * - Windows Phone
     * - iOS
     * - iOS Facebook Integration Account
     * - iOS Facebook Social Sharing UI
     * - webOS
     * - Chrome OS
     * - etc...
     *
     * An authoritative list can be found in the PHP `PlatformDetector` class and
     * related classes in the same file (see calls to `new UserAgentPlatform`
     * here: https://fburl.com/50729226).
     *
     * Function results are memoized
     */
    function isPlatform(query: string): boolean;

    /**
     * Check if the User Agent platform is a 32 or 64 bit architecture.
     *
     * Function results are memoized
     */
    function isPlatformArchitecture(query: string): boolean;
}

// tslint:disable-next-line export-just-namespace
export = UserAgent;
