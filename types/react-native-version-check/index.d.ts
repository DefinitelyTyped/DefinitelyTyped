import { RequestInit } from "node-fetch";
declare namespace VersionCheck {
    /**
     * Returns device's country code of 2 characters.
     */
    function getCountry(): Promise<string>;
    /**
     * Returns package name of app.
     */
    function getPackageName(): string;
    /**
     * Returns current app build number.
     */
    function getCurrentBuildNumber(): number;
    /**
     * Returns url of Play Market or App Store of app.
     */
    function getStoreUrl(option?: {
        /**
         * App ID
         */
        appID?: string | undefined;
        packageName?: string | undefined;
        /**
         * @default true
         */
        ignoreErrors?: boolean | undefined;
    }): Promise<string>;
    /**
     * Returns url of App Store of app.
     */
    function getAppStoreUrl(option?: {
        /**
         * App ID
         */
        appID?: string | undefined;
        /**
         * @default true
         */
        ignoreErrors?: boolean | undefined;
    }): Promise<string>;
    /**
     * Returns url of Play Store of app.
     */
    function getPlayStoreUrl(option?: {
        /**
         * Package Name
         */
        packageName?: string | undefined;
        /**
         * @default true
         */
        ignoreErrors?: boolean | undefined;
    }): Promise<string>;
    /**
     * Returns current app version.
     */
    function getCurrentVersion(): string;
    /**
     * Returns the latest app version parsed from url. Returns null when parsing error occurs.
     */
    function getLatestVersion(option?: {
        /**
         * @default false
         */
        forceUpdate?: boolean | undefined;
        /**
         * provider name or function that returns promise or value of the latest version
         */
        provider?: (() => string) | string | undefined;
        /**
         * isomorphic-fetch options (https://github.github.io/fetch/)
         */
        fetchOptions?: RequestInit | undefined;
        /**
         * @default true
         */
        ignoreErrors?: boolean | undefined;
        /**
         * Package name or function that returns promise or value of package name
         */
        packageName?: string | (() => string) | undefined;
        /**
         * Country code where the playstore or appstore app is available. i.e: "US"
         */
        country?: string | undefined;
    }): Promise<string>;
    /**
     * Returns an object contains with boolean value whether update needed, current version and latest version.
     * Current and the latest app versions are first split by delimiter, and check each split numbers into depth.
     */
    function needUpdate(option?: {
        /**
         * app's Package Name
         */
        packageName?: string | undefined;
        /**
         * app's current version from getCurrentVersion()
         */
        currentVersion?: string | undefined;
        /**
         * app's latest version from getLatestVersion()
         */
        latestVersion?: string | undefined;
        /**
         * @default Infinity
         */
        depth?: number | undefined;
        /**
         * @default false
         */
        forceUpdate?: boolean | undefined;
        /**
         * provider name or function that returns promise or value of the latest version
         */
        provider?: (() => string) | string | undefined;
        /**
         * isomorphic-fetch options (https://github.github.io/fetch/)
         */
        fetchOptions?: RequestInit | undefined;
        /**
         * @default true
         */
        ignoreErrors?: boolean | undefined;
    }): Promise<{
        isNeeded: boolean;
        currentVersion: string;
        latestVersion: string;
        storeUrl: string;
    }>;
}
export default VersionCheck;
