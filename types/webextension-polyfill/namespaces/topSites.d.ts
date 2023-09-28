//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.topSites
 *
 * Use the chrome.topSites API to access the top sites that are displayed on the new tab page.
 * Permissions: "topSites"
 *
 * Comments found in source JSON schema files:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
export namespace TopSites {
    /**
     * An object encapsulating a most visited URL, such as the URLs on the new tab page.
     */
    interface MostVisitedURL {
        /**
         * The most visited URL.
         */
        url: string;

        /**
         * The title of the page.
         * Optional.
         */
        title?: string;

        /**
         * Data URL for the favicon, if available.
         * Optional.
         */
        favicon?: string;

        /**
         * The entry type, either <code>url</code> for a normal page link, or <code>search</code> for a search shortcut.
         * Optional.
         */
        type?: MostVisitedURLTypeEnum;
    }

    interface GetOptionsType {
        /**
         * The number of top sites to return, defaults to the value used by Firefox
         * Optional.
         */
        limit?: number;

        /**
         * Limit the result to a single top site link per domain
         * Optional.
         */
        onePerDomain?: boolean;

        /**
         * Include sites that the user has blocked from appearing on the Firefox new tab.
         * Optional.
         */
        includeBlocked?: boolean;

        /**
         * Include sites favicon if available.
         * Optional.
         */
        includeFavicon?: boolean;

        /**
         * Include sites that the user has pinned on the Firefox new tab.
         * Optional.
         */
        includePinned?: boolean;

        /**
         * Include search shortcuts appearing on the Firefox new tab.
         * Optional.
         */
        includeSearchShortcuts?: boolean;

        /**
         * Return the sites that exactly appear on the user's new-tab page. When true, all other options are ignored except limit
         * and includeFavicon. If the user disabled newtab Top Sites, the newtab parameter will be ignored.
         * Optional.
         */
        newtab?: boolean;
    }

    /**
     * The entry type, either <code>url</code> for a normal page link, or <code>search</code> for a search shortcut.
     */
    type MostVisitedURLTypeEnum = "url" | "search";

    interface Static {
        /**
         * Gets a list of top sites.
         *
         * @param options Optional.
         */
        get(options?: GetOptionsType): Promise<MostVisitedURL[]>;
    }
}
