/**
 * Namespace: browser.search
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Use browser.search to interact with search engines.
 * Permissions: "search"
 *
 * Comments found in source JSON schema files:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
export namespace Search {
    /**
     * An object encapsulating a search engine
     */
    interface SearchEngine {
        name: string;

        isDefault: boolean;

        /**
         * Optional.
         */
        alias?: string;

        /**
         * Optional.
         */
        favIconUrl?: string;
    }

    interface SearchSearchPropertiesType {
        /**
         * Terms to search for.
         */
        query: string;

        /**
         * Search engine to use. Uses the default if not specified.
         * Optional.
         */
        engine?: string;

        /**
         * The ID of the tab for the search results. If not specified, a new tab is created.
         * Optional.
         */
        tabId?: number;
    }

    interface Static {
        /**
         * Gets a list of search engines.
         *
         * @returns A Promise that will be fulfilled with an array of search engine objects.
         */
        get(): Promise<SearchEngine[]>;

        /**
         * Perform a search.
         *
         * @param searchProperties
         */
        search(searchProperties: SearchSearchPropertiesType): void;
    }
}
