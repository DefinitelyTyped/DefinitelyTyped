// Type definitions for clientjs 0.1
// Project: https://clientjs.org
// Definitions by: icopp <https://github.com/icopp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class ClientJS {
    constructor();

    /** @return A string containing this software version number. */
    getSoftwareVersion(): string;

    // Fingerprint methods

    /** @return A 32-bit integer representing the browser's fingerprint. */
    getFingerprint(): number;
    /**
     * @param datapoints Any number of datapoints that are (or can be coerced to
     *                   be) strings.
     * @return A 32-bit integer representing the cumulative fingerprint.
     */
    getCustomFingerprint(...datapoints: Array<string | number>): number;

    // User agent methods

    /** @return A string containing unparsed user agent. */
    getUserAgent(): string;
    /** @return A lowercase string containing the user agent. */
    getUserAgentLowerCase(): string;

    // Browser methods

    /** @return A string containing the browser name */
    getBrowser(): string;
    /** @return A string containing the browser version. */
    getBrowserVersion(): string;
    /** @return A string containing the major browser version. */
    getBrowserMajorVersion(): string;
    /** Check if the browser is IE. */
    isIE(): boolean;
    /** Check if the browser is Chrome. */
    isChrome(): boolean;
    /** Check if the browser is Firefox. */
    isFirefox(): boolean;
    /** Check if the browser is Safari. */
    isSafari(): boolean;
    /** Check if the browser is Opera. */
    isOpera(): boolean;
    /** Check if the browser is mobile Safari. */
    isMobileSafari(): boolean;

    // Engine methods

    /** @return A string containing the browser engine. */
    getEngine(): string;
    /** @return A string containing the browser engine version. */
    getEngineVersion(): string;

    // OS methods

    /** @return A string containing the OS. */
    getOS(): string;
    /** @return A string containing the OS version. */
    getOSVersion(): string;
    /** Check if the OS is Windows. */
    isWindows(): boolean;
    /** Check if the OS is Mac. */
    isMac(): boolean;
    /** Check if the OS is Linux. */
    isLinux(): boolean;
    /** Check if the OS is Ubuntu. */
    isUbuntu(): boolean;
    /** Check if the OS is Solaris. */
    isSolaris(): boolean;

    // Device methods

    /** @return A string containing the device. */
    getDevice(): string;
    /** @return A string containing the device type. */
    getDeviceType(): string;
    /** @return A string containing the device vendor. */
    getDeviceVendor(): string;

    // CPU methods

    /** @return A string containing the CPU architecture. */
    getCPU(): string;

    // Mobile methods

    /** Check if the browser is on a mobile device. */
    isMobile(): boolean;
    /** Check if the browser is on a major mobile device. */
    isMobileMajor(): boolean;
    /** Check if the browser is on an Android mobile device. */
    isMobileAndroid(): boolean;
    /** Check if the browser is on an Opera mobile device. */
    isMobileOpera(): boolean;
    /** Check if the browser is on a Windows mobile device. */
    isMobileWindows(): boolean;
    /** Check if the browser is on a Blackberry mobile device. */
    isMobileBlackBerry(): boolean;

    // iOS methods

    /** Check if the browser is on an Apple iOS device. */
    isMobileIOS(): boolean;
    /** Check if the browser is on an Apple iPhone. */
    isIphone(): boolean;
    /** Check if the browser is on an Apple iPad. */
    isIpad(): boolean;
    /** Check if the browser is on an Apple iPod. */
    isIpod(): boolean;

    // Screen methods

    /** @return A string containing screen information. */
    getScreenPrint(): string;
    /** @return A string containing the color depth. */
    getColorDepth(): string;
    /** @return A string containing the current resolution. */
    getCurrentResolution(): string;
    /** @return A string containing the available resolution. */
    getAvailableResolution(): string;
    /** @return A string containing the device horizontal DPI. */
    getDeviceXDPI(): string;
    /** @return A string containing the device vertical DPI. */
    getDeviceYDPI(): string;

    // Plugin methods

    /** @return A string containing a list of installed plugins. */
    getPlugins(): string;
    /** Check if Java is installed. */
    isJava(): boolean;
    /** @return A string containing the Java Version. */
    getJavaVersion(): string;
    /** Check if Flash is installed. */
    isFlash(): boolean;
    /** @return A string containing the Flash Version. */
    getFlashVersion(): string;
    /** Check if Silverlight is installed. */
    isSilverlight(): boolean;
    /** @return A string containing the Silverlight Version. */
    getSilverlightVersion(): string;

    // MIME type methods

    /** Check if MIME types are installed. */
    isMimeTypes(): boolean;
    /** A string containing a list of installed MIME types. */
    getMimeTypes(): string;

    // Font methods

    /** Check if `font` is installed. */
    isFont(font: string): boolean;
    /** A string containing a comma-separated list of installed fonts. */
    getFonts(): string;

    // Storage methods

    /** Check if local storage is avaliable. */
    isLocalStorage(): boolean;
    /** Check if session storage is avaliable. */
    isSessionStorage(): boolean;
    /** Check if cookies are avaliable. */
    isCookie(): boolean;

    // Time methods

    /** A lowercase string containing the time zone. */
    getTimeZone(): string;

    // Language methods

    /** A lowercase string containing the user language. */
    getLanguage(): string;
    /** A lowercase string containing the system language. */
    getSystemLanguage(): string;

    // Canvas methods

    /** Check if the canvas element is available. */
    isCanvas(): boolean;
    /** @return A string containing canvas image information */
    getCanvasPrint(): string;
}

export = ClientJS;
export as namespace ClientJS;
