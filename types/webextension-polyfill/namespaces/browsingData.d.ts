/**
 * Namespace: browser.browsingData
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Use the <code>chrome.browsingData</code> API to remove browsing data from a user's local profile.
 * Permissions: "browsingData"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { ExtensionTypes } from "./extensionTypes";

export namespace BrowsingData {
    /**
     * Options that determine exactly what data will be removed.
     */
    interface RemovalOptions {
        /**
         * Remove data accumulated on or after this date, represented in milliseconds since the epoch (accessible via the <code>
         * getTime</code> method of the JavaScript <code>Date</code> object). If absent, defaults to 0 (which would remove all
         * browsing data).
         * Optional.
         */
        since?: ExtensionTypes.DateType;

        /**
         * Only remove data associated with these hostnames (only applies to cookies and localStorage).
         * Optional.
         */
        hostnames?: string[];

        /**
         * Only remove data associated with this specific cookieStoreId.
         * Optional.
         */
        cookieStoreId?: string;

        /**
         * An object whose properties specify which origin types ought to be cleared. If this object isn't specified,
         * it defaults to clearing only "unprotected" origins. Please ensure that you <em>really</em>
         * want to remove application data before adding 'protectedWeb' or 'extensions'.
         * Optional.
         */
        originTypes?: RemovalOptionsOriginTypesType;
    }

    /**
     * A set of data types. Missing data types are interpreted as <code>false</code>.
     */
    interface DataTypeSet {
        /**
         * The browser's cache. Note: when removing data, this clears the <em>entire</em> cache: it is not limited to the range you
         * specify.
         * Optional.
         */
        cache?: boolean;

        /**
         * The browser's cookies.
         * Optional.
         */
        cookies?: boolean;

        /**
         * The browser's download list.
         * Optional.
         */
        downloads?: boolean;

        /**
         * The browser's stored form data.
         * Optional.
         */
        formData?: boolean;

        /**
         * The browser's history.
         * Optional.
         */
        history?: boolean;

        /**
         * Websites' IndexedDB data.
         * Optional.
         */
        indexedDB?: boolean;

        /**
         * Websites' local storage data.
         * Optional.
         */
        localStorage?: boolean;

        /**
         * Server-bound certificates.
         * Optional.
         */
        serverBoundCertificates?: boolean;

        /**
         * Stored passwords.
         * Optional.
         */
        passwords?: boolean;

        /**
         * Plugins' data.
         * Optional.
         */
        pluginData?: boolean;

        /**
         * Service Workers.
         * Optional.
         */
        serviceWorkers?: boolean;
    }

    interface SettingsCallbackResultType {
        options: RemovalOptions;

        /**
         * All of the types will be present in the result, with values of <code>true</code> if they are both selected to be removed
         * and permitted to be removed, otherwise <code>false</code>.
         */
        dataToRemove: DataTypeSet;

        /**
         * All of the types will be present in the result, with values of <code>true</code> if they are permitted to be removed (e.
         * g., by enterprise policy) and <code>false</code> if not.
         */
        dataRemovalPermitted: DataTypeSet;
    }

    /**
     * An object whose properties specify which origin types ought to be cleared. If this object isn't specified,
     * it defaults to clearing only "unprotected" origins. Please ensure that you <em>really</em>
     * want to remove application data before adding 'protectedWeb' or 'extensions'.
     */
    interface RemovalOptionsOriginTypesType {
        /**
         * Normal websites.
         * Optional.
         */
        unprotectedWeb?: boolean;

        /**
         * Websites that have been installed as hosted applications (be careful!).
         * Optional.
         */
        protectedWeb?: boolean;

        /**
         * Extensions and packaged applications a user has installed (be _really_ careful!).
         * Optional.
         */
        extension?: boolean;
    }

    interface Static {
        /**
         * Reports which types of data are currently selected in the 'Clear browsing data' settings UI.
         * Note: some of the data types included in this API are not available in the settings UI,
         * and some UI settings control more than one data type listed here.
         */
        settings(): Promise<SettingsCallbackResultType>;

        /**
         * Clears various types of browsing data stored in a user's profile.
         *
         * @param options
         * @param dataToRemove The set of data types to remove.
         * @returns Called when deletion has completed.
         */
        remove(options: RemovalOptions, dataToRemove: DataTypeSet): Promise<void>;

        /**
         * Clears the browser's cache.
         *
         * @param options
         * @returns Called when the browser's cache has been cleared.
         */
        removeCache(options: RemovalOptions): Promise<void>;

        /**
         * Clears the browser's cookies and server-bound certificates modified within a particular timeframe.
         *
         * @param options
         * @returns Called when the browser's cookies and server-bound certificates have been cleared.
         */
        removeCookies(options: RemovalOptions): Promise<void>;

        /**
         * Clears the browser's list of downloaded files (<em>not</em> the downloaded files themselves).
         *
         * @param options
         * @returns Called when the browser's list of downloaded files has been cleared.
         */
        removeDownloads(options: RemovalOptions): Promise<void>;

        /**
         * Clears the browser's stored form data (autofill).
         *
         * @param options
         * @returns Called when the browser's form data has been cleared.
         */
        removeFormData(options: RemovalOptions): Promise<void>;

        /**
         * Clears the browser's history.
         *
         * @param options
         * @returns Called when the browser's history has cleared.
         */
        removeHistory(options: RemovalOptions): Promise<void>;

        /**
         * Clears websites' local storage data.
         *
         * @param options
         * @returns Called when websites' local storage has been cleared.
         */
        removeLocalStorage(options: RemovalOptions): Promise<void>;

        /**
         * Clears plugins' data.
         *
         * @param options
         * @returns Called when plugins' data has been cleared.
         */
        removePluginData(options: RemovalOptions): Promise<void>;

        /**
         * Clears the browser's stored passwords.
         *
         * @param options
         * @returns Called when the browser's passwords have been cleared.
         */
        removePasswords(options: RemovalOptions): Promise<void>;
    }
}
