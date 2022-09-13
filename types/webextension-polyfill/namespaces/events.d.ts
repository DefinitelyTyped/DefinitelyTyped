/**
 * Namespace: browser.events
 * Generated from Mozilla sources. Do not manually edit!
 *
 * The <code>chrome.events</code> namespace contains common types used by APIs dispatching events to notify you when
 * something interesting happens.
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
export namespace Events {
    /**
     * Description of a declarative rule for handling events.
     */
    interface Rule {
        /**
         * Optional identifier that allows referencing this rule.
         * Optional.
         */
        id?: string;

        /**
         * Tags can be used to annotate rules and perform operations on sets of rules.
         * Optional.
         */
        tags?: string[];

        /**
         * List of conditions that can trigger the actions.
         */
        conditions: any[];

        /**
         * List of actions that are triggered if one of the condtions is fulfilled.
         */
        actions: any[];

        /**
         * Optional priority of this rule. Defaults to 100.
         * Optional.
         */
        priority?: number;
    }

    /**
     * An object which allows the addition and removal of listeners for a Chrome event.
     */
    interface Event<T extends (...args: any[]) => any> {
        /**
         * Registers an event listener <em>callback</em> to an event.
         *
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * @param ...params Further parameters, depending on the event.
         */
        addListener(callback: T, ...params: any[]): void;

        /**
         * Deregisters an event listener <em>callback</em> from an event.
         *
         * @param callback Listener that shall be unregistered.
         */
        removeListener(callback: T): void;

        /**
         * @param callback Listener whose registration status shall be tested.
         * @returns True if <em>callback</em> is registered to the event.
         */
        hasListener(callback: T): boolean;

        /**
         * @returns True if any event listeners are registered to the event.
         */
        hasListeners(): boolean;
    }

    /**
     * Filters URLs for various criteria. See <a href='events#filtered'>event filtering</a>. All criteria are case sensitive.
     */
    interface UrlFilter {
        /**
         * Matches if the host name of the URL contains a specified string. To test whether a host name component has a prefix
         * 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the
         * beginning of the host name. Similarly, hostContains can be used to match against component suffix ('foo.')
         * and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last components need to be done
         * separately using hostSuffix, because no implicit dot is added at the end of the host name.
         * Optional.
         */
        hostContains?: string;

        /**
         * Matches if the host name of the URL is equal to a specified string.
         * Optional.
         */
        hostEquals?: string;

        /**
         * Matches if the host name of the URL starts with a specified string.
         * Optional.
         */
        hostPrefix?: string;

        /**
         * Matches if the host name of the URL ends with a specified string.
         * Optional.
         */
        hostSuffix?: string;

        /**
         * Matches if the path segment of the URL contains a specified string.
         * Optional.
         */
        pathContains?: string;

        /**
         * Matches if the path segment of the URL is equal to a specified string.
         * Optional.
         */
        pathEquals?: string;

        /**
         * Matches if the path segment of the URL starts with a specified string.
         * Optional.
         */
        pathPrefix?: string;

        /**
         * Matches if the path segment of the URL ends with a specified string.
         * Optional.
         */
        pathSuffix?: string;

        /**
         * Matches if the query segment of the URL contains a specified string.
         * Optional.
         */
        queryContains?: string;

        /**
         * Matches if the query segment of the URL is equal to a specified string.
         * Optional.
         */
        queryEquals?: string;

        /**
         * Matches if the query segment of the URL starts with a specified string.
         * Optional.
         */
        queryPrefix?: string;

        /**
         * Matches if the query segment of the URL ends with a specified string.
         * Optional.
         */
        querySuffix?: string;

        /**
         * Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if
         * they match the default port number.
         * Optional.
         */
        urlContains?: string;

        /**
         * Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL
         * if they match the default port number.
         * Optional.
         */
        urlEquals?: string;

        /**
         * Matches if the URL (without fragment identifier) matches a specified regular expression.
         * Port numbers are stripped from the URL if they match the default port number. The regular expressions use the <a
         * href="https://github.com/google/re2/blob/master/doc/syntax.txt">RE2 syntax</a>.
         * Optional.
         */
        urlMatches?: string;

        /**
         * Matches if the URL without query segment and fragment identifier matches a specified regular expression.
         * Port numbers are stripped from the URL if they match the default port number. The regular expressions use the <a
         * href="https://github.com/google/re2/blob/master/doc/syntax.txt">RE2 syntax</a>.
         * Optional.
         */
        originAndPathMatches?: string;

        /**
         * Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL
         * if they match the default port number.
         * Optional.
         */
        urlPrefix?: string;

        /**
         * Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if
         * they match the default port number.
         * Optional.
         */
        urlSuffix?: string;

        /**
         * Matches if the scheme of the URL is equal to any of the schemes specified in the array.
         * Optional.
         */
        schemes?: string[];

        /**
         * Matches if the port of the URL is contained in any of the specified port lists. For example <code>[80, 443, [1000, 1200]]
         * </code> matches all requests on port 80, 443 and in the range 1000-1200.
         * Optional.
         */
        ports?: Array<number | [number, number]>;
    }

    interface Static {
        [s: string]: unknown;
    }
}
