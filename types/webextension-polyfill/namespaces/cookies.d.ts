//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.cookies
 *
 * Use the <code>browser.cookies</code> API to query and modify cookies, and to be notified when they change.
 * Permissions: "cookies"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";

export namespace Cookies {
    /**
     * A cookie's 'SameSite' state (https://tools.ietf.org/html/draft-west-first-party-cookies).
     * 'no_restriction' corresponds to a cookie set without a 'SameSite' attribute, 'lax' to 'SameSite=Lax',
     * and 'strict' to 'SameSite=Strict'.
     */
    type SameSiteStatus = "no_restriction" | "lax" | "strict";

    /**
     * The description of the storage partition of a cookie. This object may be omitted (null) if a cookie is not partitioned.
     */
    interface PartitionKey {
        /**
         * The first-party URL of the cookie, if the cookie is in storage partitioned by the top-level site.
         * Optional.
         */
        topLevelSite?: string;
    }

    /**
     * Represents information about an HTTP cookie.
     */
    interface Cookie {
        /**
         * The name of the cookie.
         */
        name: string;

        /**
         * The value of the cookie.
         */
        value: string;

        /**
         * The domain of the cookie (e.g. "www.google.com", "example.com").
         */
        domain: string;

        /**
         * True if the cookie is a host-only cookie (i.e. a request's host must exactly match the domain of the cookie).
         */
        hostOnly: boolean;

        /**
         * The path of the cookie.
         */
        path: string;

        /**
         * True if the cookie is marked as Secure (i.e. its scope is limited to secure channels, typically HTTPS).
         */
        secure: boolean;

        /**
         * True if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to client-side scripts).
         */
        httpOnly: boolean;

        /**
         * The cookie's same-site status (i.e. whether the cookie is sent with cross-site requests).
         */
        sameSite: SameSiteStatus;

        /**
         * True if the cookie is a session cookie, as opposed to a persistent cookie with an expiration date.
         */
        session: boolean;

        /**
         * The expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session cookies.
         * Optional.
         */
        expirationDate?: number;

        /**
         * The ID of the cookie store containing this cookie, as provided in getAllCookieStores().
         */
        storeId: string;

        /**
         * The first-party domain of the cookie.
         */
        firstPartyDomain: string;

        /**
         * The cookie's storage partition, if any. null if not partitioned.
         * Optional.
         */
        partitionKey?: PartitionKey;
    }

    /**
     * Represents a cookie store in the browser. An incognito mode window, for instance, uses a separate cookie store from a
     * non-incognito window.
     */
    interface CookieStore {
        /**
         * The unique identifier for the cookie store.
         */
        id: string;

        /**
         * Identifiers of all the browser tabs that share this cookie store.
         */
        tabIds: number[];

        /**
         * Indicates if this is an incognito cookie store
         */
        incognito: boolean;
    }

    /**
     * The underlying reason behind the cookie's change. If a cookie was inserted, or removed via an explicit call to
     * $(ref:cookies.remove), "cause" will be "explicit". If a cookie was automatically removed due to expiry,
     * "cause" will be "expired". If a cookie was removed due to being overwritten with an already-expired expiration date,
     * "cause" will be set to "expired_overwrite".  If a cookie was automatically removed due to garbage collection,
     * "cause" will be "evicted".  If a cookie was automatically removed due to a "set" call that overwrote it,
     * "cause" will be "overwrite". Plan your response accordingly.
     */
    type OnChangedCause = "evicted" | "expired" | "explicit" | "expired_overwrite" | "overwrite";

    /**
     * Details to identify the cookie being retrieved.
     */
    interface GetDetailsType {
        /**
         * The URL with which the cookie to retrieve is associated. This argument may be a full URL,
         * in which case any data following the URL path (e.g. the query string) is simply ignored.
         * If host permissions for this URL are not specified in the manifest file, the API call will fail.
         */
        url: string;

        /**
         * The name of the cookie to retrieve.
         */
        name: string;

        /**
         * The ID of the cookie store in which to look for the cookie. By default, the current execution context's cookie store
         * will be used.
         * Optional.
         */
        storeId?: string;

        /**
         * The first-party domain which the cookie to retrieve is associated. This attribute is required if First-Party Isolation
         * is enabled.
         * Optional.
         */
        firstPartyDomain?: string;

        /**
         * The storage partition, if the cookie is part of partitioned storage. By default, only non-partitioned cookies are
         * returned.
         * Optional.
         */
        partitionKey?: PartitionKey;
    }

    /**
     * Information to filter the cookies being retrieved.
     */
    interface GetAllDetailsType {
        /**
         * Restricts the retrieved cookies to those that would match the given URL.
         * Optional.
         */
        url?: string;

        /**
         * Filters the cookies by name.
         * Optional.
         */
        name?: string;

        /**
         * Restricts the retrieved cookies to those whose domains match or are subdomains of this one.
         * Optional.
         */
        domain?: string;

        /**
         * Restricts the retrieved cookies to those whose path exactly matches this string.
         * Optional.
         */
        path?: string;

        /**
         * Filters the cookies by their Secure property.
         * Optional.
         */
        secure?: boolean;

        /**
         * Filters out session vs. persistent cookies.
         * Optional.
         */
        session?: boolean;

        /**
         * The cookie store to retrieve cookies from. If omitted, the current execution context's cookie store will be used.
         * Optional.
         */
        storeId?: string;

        /**
         * Restricts the retrieved cookies to those whose first-party domains match this one.
         * This attribute is required if First-Party Isolation is enabled. To not filter by a specific first-party domain,
         * use `null` or `undefined`.
         * Optional.
         */
        firstPartyDomain?: string | null;

        /**
         * Selects a specific storage partition to look up cookies. Defaults to null, in which case only non-partitioned cookies
         * are retrieved. If an object iis passed, partitioned cookies are also included, and filtered based on the keys present in
         * the given PartitionKey description. An empty object ({}) returns all cookies (partitioned + unpartitioned),
         * a non-empty object (e.g. {topLevelSite: '...'}) only returns cookies whose partition match all given attributes.
         * Optional.
         */
        partitionKey?: PartitionKey;
    }

    /**
     * Details about the cookie being set.
     */
    interface SetDetailsType {
        /**
         * The request-URI to associate with the setting of the cookie. This value can affect the default domain and path values of
         * the created cookie. If host permissions for this URL are not specified in the manifest file, the API call will fail.
         */
        url: string;

        /**
         * The name of the cookie. Empty by default if omitted.
         * Optional.
         */
        name?: string;

        /**
         * The value of the cookie. Empty by default if omitted.
         * Optional.
         */
        value?: string;

        /**
         * The domain of the cookie. If omitted, the cookie becomes a host-only cookie.
         * Optional.
         */
        domain?: string;

        /**
         * The path of the cookie. Defaults to the path portion of the url parameter.
         * Optional.
         */
        path?: string;

        /**
         * Whether the cookie should be marked as Secure. Defaults to false.
         * Optional.
         */
        secure?: boolean;

        /**
         * Whether the cookie should be marked as HttpOnly. Defaults to false.
         * Optional.
         */
        httpOnly?: boolean;

        /**
         * The cookie's same-site status.
         * Optional.
         */
        sameSite?: SameSiteStatus;

        /**
         * The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted,
         * the cookie becomes a session cookie.
         * Optional.
         */
        expirationDate?: number;

        /**
         * The ID of the cookie store in which to set the cookie. By default, the cookie is set in the current execution context's
         * cookie store.
         * Optional.
         */
        storeId?: string;

        /**
         * The first-party domain of the cookie. This attribute is required if First-Party Isolation is enabled.
         * Optional.
         */
        firstPartyDomain?: string;

        /**
         * The storage partition, if the cookie is part of partitioned storage. By default, non-partitioned storage is used.
         * Optional.
         */
        partitionKey?: PartitionKey;
    }

    /**
     * Information to identify the cookie to remove.
     */
    interface RemoveDetailsType {
        /**
         * The URL associated with the cookie. If host permissions for this URL are not specified in the manifest file,
         * the API call will fail.
         */
        url: string;

        /**
         * The name of the cookie to remove.
         */
        name: string;

        /**
         * The ID of the cookie store to look in for the cookie. If unspecified, the cookie is looked for by default in the current
         * execution context's cookie store.
         * Optional.
         */
        storeId?: string;

        /**
         * The first-party domain associated with the cookie. This attribute is required if First-Party Isolation is enabled.
         * Optional.
         */
        firstPartyDomain?: string;

        /**
         * The storage partition, if the cookie is part of partitioned storage. By default, non-partitioned storage is used.
         * Optional.
         */
        partitionKey?: PartitionKey;
    }

    /**
     * Contains details about the cookie that's been removed.  If removal failed for any reason, this will be "null",
     * and $(ref:runtime.lastError) will be set.
     */
    interface RemoveCallbackDetailsType {
        /**
         * The URL associated with the cookie that's been removed.
         */
        url: string;

        /**
         * The name of the cookie that's been removed.
         */
        name: string;

        /**
         * The ID of the cookie store from which the cookie was removed.
         */
        storeId: string;

        /**
         * The first-party domain associated with the cookie that's been removed.
         */
        firstPartyDomain: string;

        /**
         * The storage partition, if the cookie is part of partitioned storage. null if not partitioned.
         * Optional.
         */
        partitionKey?: PartitionKey;
    }

    interface OnChangedChangeInfoType {
        /**
         * True if a cookie was removed.
         */
        removed: boolean;

        /**
         * Information about the cookie that was set or removed.
         */
        cookie: Cookie;

        /**
         * The underlying reason behind the cookie's change.
         */
        cause: OnChangedCause;
    }

    interface Static {
        /**
         * Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL,
         * the one with the longest path will be returned. For cookies with the same path length,
         * the cookie with the earliest creation time will be returned.
         *
         * @param details Details to identify the cookie being retrieved.
         */
        get(details: GetDetailsType): Promise<Cookie | null>;

        /**
         * Retrieves all cookies from a single cookie store that match the given information.  The cookies returned will be sorted,
         * with those with the longest path first.  If multiple cookies have the same path length,
         * those with the earliest creation time will be first.
         *
         * @param details Information to filter the cookies being retrieved.
         */
        getAll(details: GetAllDetailsType): Promise<Cookie[]>;

        /**
         * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
         *
         * @param details Details about the cookie being set.
         */
        set(details: SetDetailsType): Promise<Cookie>;

        /**
         * Deletes a cookie by name.
         *
         * @param details Information to identify the cookie to remove.
         */
        remove(details: RemoveDetailsType): Promise<RemoveCallbackDetailsType | null>;

        /**
         * Lists all existing cookie stores.
         */
        getAllCookieStores(): Promise<CookieStore[]>;

        /**
         * Fired when a cookie is set or removed. As a special case, note that updating a cookie's properties is implemented as a
         * two step process: the cookie to be updated is first removed entirely, generating a notification with "cause" of
         * "overwrite" .  Afterwards, a new cookie is written with the updated values, generating a second notification with
         * "cause" "explicit".
         *
         * @param changeInfo
         */
        onChanged: Events.Event<(changeInfo: OnChangedChangeInfoType) => void>;
    }
}
