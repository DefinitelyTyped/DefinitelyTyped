//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.history
 *
 * Use the <code>browser.history</code> API to interact with the browser's record of visited pages. You can add, remove,
 * and query for URLs in the browser's history. To override the history page with your own version, see $(topic:override)
 * [Override Pages].
 * Permissions: "history"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";
import { ExtensionTypes } from "./extensionTypes";

export namespace History {
    /**
     * The $(topic:transition-types)[transition type] for this visit from its referrer.
     */
    type TransitionType =
        | "link"
        | "typed"
        | "auto_bookmark"
        | "auto_subframe"
        | "manual_subframe"
        | "generated"
        | "auto_toplevel"
        | "form_submit"
        | "reload"
        | "keyword"
        | "keyword_generated";

    /**
     * An object encapsulating one result of a history query.
     */
    interface HistoryItem {
        /**
         * The unique identifier for the item.
         */
        id: string;

        /**
         * The URL navigated to by a user.
         * Optional.
         */
        url?: string;

        /**
         * The title of the page when it was last loaded.
         * Optional.
         */
        title?: string;

        /**
         * When this page was last loaded, represented in milliseconds since the epoch.
         * Optional.
         */
        lastVisitTime?: number;

        /**
         * The number of times the user has navigated to this page.
         * Optional.
         */
        visitCount?: number;

        /**
         * The number of times the user has navigated to this page by typing in the address.
         * Optional.
         */
        typedCount?: number;
    }

    /**
     * An object encapsulating one visit to a URL.
     */
    interface VisitItem {
        /**
         * The unique identifier for the item.
         */
        id: string;

        /**
         * The unique identifier for this visit.
         */
        visitId: string;

        /**
         * When this visit occurred, represented in milliseconds since the epoch.
         * Optional.
         */
        visitTime?: number;

        /**
         * The visit ID of the referrer.
         */
        referringVisitId: string;

        /**
         * The $(topic:transition-types)[transition type] for this visit from its referrer.
         */
        transition: TransitionType;
    }

    interface SearchQueryType {
        /**
         * A free-text query to the history service.  Leave empty to retrieve all pages.
         */
        text: string;

        /**
         * Limit results to those visited after this date. If not specified, this defaults to 24 hours in the past.
         * Optional.
         */
        startTime?: ExtensionTypes.DateType;

        /**
         * Limit results to those visited before this date.
         * Optional.
         */
        endTime?: ExtensionTypes.DateType;

        /**
         * The maximum number of results to retrieve.  Defaults to 100.
         * Optional.
         */
        maxResults?: number;
    }

    interface GetVisitsDetailsType {
        /**
         * The URL for which to retrieve visit information.  It must be in the format as returned from a call to history.search.
         */
        url: string;
    }

    interface AddUrlDetailsType {
        /**
         * The URL to add. Must be a valid URL that can be added to history.
         */
        url: string;

        /**
         * The title of the page.
         * Optional.
         */
        title?: string;

        /**
         * The $(topic:transition-types)[transition type] for this visit from its referrer.
         * Optional.
         */
        transition?: TransitionType;

        /**
         * The date when this visit occurred.
         * Optional.
         */
        visitTime?: ExtensionTypes.DateType;
    }

    interface DeleteUrlDetailsType {
        /**
         * The URL to remove.
         */
        url: string;
    }

    interface DeleteRangeRangeType {
        /**
         * Items added to history after this date.
         */
        startTime: ExtensionTypes.DateType;

        /**
         * Items added to history before this date.
         */
        endTime: ExtensionTypes.DateType;
    }

    interface OnVisitRemovedRemovedType {
        /**
         * True if all history was removed.  If true, then urls will be empty.
         */
        allHistory: boolean;

        urls: string[];
    }

    interface OnTitleChangedChangedType {
        /**
         * The URL for which the title has changed
         */
        url: string;

        /**
         * The new title for the URL.
         */
        title: string;
    }

    interface Static {
        /**
         * Searches the history for the last visit time of each page matching the query.
         *
         * @param query
         */
        search(query: SearchQueryType): Promise<HistoryItem[]>;

        /**
         * Retrieves information about visits to a URL.
         *
         * @param details
         */
        getVisits(details: GetVisitsDetailsType): Promise<VisitItem[]>;

        /**
         * Adds a URL to the history with a default visitTime of the current time and a default $(topic:transition-types)
         * [transition type] of "link".
         *
         * @param details
         */
        addUrl(details: AddUrlDetailsType): Promise<void>;

        /**
         * Removes all occurrences of the given URL from the history.
         *
         * @param details
         */
        deleteUrl(details: DeleteUrlDetailsType): Promise<void>;

        /**
         * Removes all items within the specified date range from the history.  Pages will not be removed from the history unless
         * all visits fall within the range.
         *
         * @param range
         */
        deleteRange(range: DeleteRangeRangeType): Promise<void>;

        /**
         * Deletes all items from the history.
         */
        deleteAll(): Promise<void>;

        /**
         * Fired when a URL is visited, providing the HistoryItem data for that URL.  This event fires before the page has loaded.
         *
         * @param result
         */
        onVisited: Events.Event<(result: HistoryItem) => void>;

        /**
         * Fired when one or more URLs are removed from the history service.  When all visits have been removed the URL is purged
         * from history.
         *
         * @param removed
         */
        onVisitRemoved: Events.Event<(removed: OnVisitRemovedRemovedType) => void>;

        /**
         * Fired when the title of a URL is changed in the browser history.
         *
         * @param changed
         */
        onTitleChanged: Events.Event<(changed: OnTitleChangedChangedType) => void>;
    }
}
