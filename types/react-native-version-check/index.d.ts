// Type definitions for react-native-version-check 3.4
// Project: https://github.com/kimxogus/react-native-version-check
// Definitions by: DELACOURT Vincent <https://github.com/vdelacou>
//                 Krishan <https://github.com/KrishyV>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RequestInit } from 'node-fetch';
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
        appID?: string;
        packageName?: string;
        /**
         * @default true
         */
        ignoreErrors?: boolean;
    }): Promise<string>;
    /**
     * Returns url of App Store of app.
     */
    function getAppStoreUrl(option?: {
        /**
         * App ID
         */
        appID?: string;
        /**
         * @default true
         */
        ignoreErrors?: boolean;
    }): Promise<string>;
    /**
     * Returns url of Play Store of app.
     */
    function getPlayStoreUrl(option?: {
        /**
         * Package Name
         */
        packageName?: string;
        /**
         * @default true
         */
        ignoreErrors?: boolean;
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
        forceUpdate?: boolean;
        /**
         * provider name or function that returns promise or value of the latest version
         */
        provider?: (() => string) | string;
        /**
         * isomorphic-fetch options (https://github.github.io/fetch/)
         */
        fetchOptions?: RequestInit;
        /**
         * @default true
         */
        ignoreErrors?: boolean;
        /**
         * Package name or function that returns promise or value of package name
         */
        packageName?: string | (() => string);
    }): Promise<string>;
    /**
     * Returns an object contains with boolean value whether update needed, current version and latest version.
     * Current and the latest app versions are first split by delimiter, and check each split numbers into depth.
     */
    function needUpdate(option?: {
        /**
         * app's Package Name
         */
        packageName?: string;
        /**
         * app's current version from getCurrentVersion()
         */
        currentVersion?: string;
        /**
         * app's latest version from getLatestVersion()
         */
        latestVersion?: string;
        /**
         * @default Infinity
         */
        depth?: number;
        /**
         * @default false
         */
        forceUpdate?: boolean;
        /**
         * provider name or function that returns promise or value of the latest version
         */
        provider?: (() => string) | string;
        /**
         * isomorphic-fetch options (https://github.github.io/fetch/)
         */
        fetchOptions?: RequestInit;
        /**
         * @default true
         */
        ignoreErrors?: boolean;
    }): Promise<{
        isNeeded: boolean;
        currentVersion: string;
        latestVersion: string;
        storeUrl: string;
    }>;
}
export default VersionCheck;
