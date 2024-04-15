//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.storage
 *
 * Use the <code>browser.storage</code> API to store, retrieve, and track changes to user data.
 * Permissions: "storage"
 *
 * Comments found in source JSON schema files:
 * Copyright 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";

export namespace Storage {
    interface StorageChange {
        /**
         * The old value of the item, if there was an old value.
         * Optional.
         */
        oldValue?: any;

        /**
         * The new value of the item, if there is a new value.
         * Optional.
         */
        newValue?: any;
    }

    interface StorageArea {
        /**
         * Gets one or more items from storage.
         *
         * @param keys Optional. A single key to get, list of keys to get, or a dictionary specifying default values (see
         * description of the object).  An empty list or object will return an empty result object.  Pass in <code>null</code>
         * to get the entire contents of storage.
         * @returns Callback with storage items, or on failure (in which case $(ref:runtime.lastError) will be set).
         */
        get(keys?: null | string | string[] | Record<string, any>): Promise<Record<string, any>>;

        /**
         * Sets multiple items.
         *
         * @param items <p>An object which gives each key/value pair to update storage with. Any other key/value pairs in storage
         * will not be affected.</p><p>Primitive values such as numbers will serialize as expected. Values with a <code>
         * typeof</code> <code>"object"</code> and <code>"function"</code> will typically serialize to <code>{}</code>,
         * with the exception of <code>Array</code> (serializes as expected), <code>Date</code>, and <code>Regex</code>
         * (serialize using their <code>String</code> representation).</p>
         * @returns Callback on success, or on failure (in which case $(ref:runtime.lastError) will be set).
         */
        set(items: Record<string, any>): Promise<void>;

        /**
         * Removes one or more items from storage.
         *
         * @param keys A single key or a list of keys for items to remove.
         * @returns Callback on success, or on failure (in which case $(ref:runtime.lastError) will be set).
         */
        remove(keys: string | string[]): Promise<void>;

        /**
         * Removes all items from storage.
         *
         * @returns Callback on success, or on failure (in which case $(ref:runtime.lastError) will be set).
         */
        clear(): Promise<void>;

        /**
         * Fired when one or more items change.
         *
         * @param changes Object mapping each key that changed to its corresponding $(ref:storage.StorageChange) for that item.
         */
        onChanged: Events.Event<(changes: StorageAreaOnChangedChangesType) => void>;
    }

    interface StorageAreaSync {
        /**
         * Gets one or more items from storage.
         *
         * @param keys Optional. A single key to get, list of keys to get, or a dictionary specifying default values (see
         * description of the object).  An empty list or object will return an empty result object.  Pass in <code>null</code>
         * to get the entire contents of storage.
         * @returns Callback with storage items, or on failure (in which case $(ref:runtime.lastError) will be set).
         */
        get(keys?: null | string | string[] | Record<string, any>): Promise<Record<string, any>>;

        /**
         * Gets the amount of space (in bytes) being used by one or more items.
         *
         * @param keys Optional. A single key or list of keys to get the total usage for. An empty list will return 0.
         * Pass in <code>null</code> to get the total usage of all of storage.
         * @returns Callback with the amount of space being used by storage, or on failure (in which case $(ref:runtime.lastError)
         * will be set).
         */
        getBytesInUse(keys?: null | string | string[]): Promise<number>;

        /**
         * Sets multiple items.
         *
         * @param items <p>An object which gives each key/value pair to update storage with. Any other key/value pairs in storage
         * will not be affected.</p><p>Primitive values such as numbers will serialize as expected. Values with a <code>
         * typeof</code> <code>"object"</code> and <code>"function"</code> will typically serialize to <code>{}</code>,
         * with the exception of <code>Array</code> (serializes as expected), <code>Date</code>, and <code>Regex</code>
         * (serialize using their <code>String</code> representation).</p>
         * @returns Callback on success, or on failure (in which case $(ref:runtime.lastError) will be set).
         */
        set(items: Record<string, any>): Promise<void>;

        /**
         * Removes one or more items from storage.
         *
         * @param keys A single key or a list of keys for items to remove.
         * @returns Callback on success, or on failure (in which case $(ref:runtime.lastError) will be set).
         */
        remove(keys: string | string[]): Promise<void>;

        /**
         * Removes all items from storage.
         *
         * @returns Callback on success, or on failure (in which case $(ref:runtime.lastError) will be set).
         */
        clear(): Promise<void>;

        /**
         * Fired when one or more items change.
         *
         * @param changes Object mapping each key that changed to its corresponding $(ref:storage.StorageChange) for that item.
         */
        onChanged: Events.Event<(changes: StorageAreaSyncOnChangedChangesType) => void>;
    }

    interface SyncStorageAreaSync extends StorageAreaSync {
        /**
         * The maximum total amount (in bytes) of data that can be stored in sync storage, as measured by the JSON stringification
         * of every value plus every key's length. Updates that would cause this limit to be exceeded fail immediately and set
         * $(ref:runtime.lastError).
         */
        QUOTA_BYTES: 102400;

        /**
         * The maximum size (in bytes) of each individual item in sync storage, as measured by the JSON stringification of its
         * value plus its key length. Updates containing items larger than this limit will fail immediately and set $(ref:runtime.
         * lastError).
         */
        QUOTA_BYTES_PER_ITEM: 8192;

        /**
         * The maximum number of items that can be stored in sync storage. Updates that would cause this limit to be exceeded will
         * fail immediately and set $(ref:runtime.lastError).
         */
        MAX_ITEMS: 512;

        /**
         * <p>The maximum number of <code>set</code>, <code>remove</code>, or <code>clear</code>
         * operations that can be performed each hour. This is 1 every 2 seconds, a lower ceiling than the short term higher
         * writes-per-minute limit.</p><p>Updates that would cause this limit to be exceeded fail immediately and set $(ref:runtime.
         * lastError).</p>
         */
        MAX_WRITE_OPERATIONS_PER_HOUR: 1800;

        /**
         * <p>The maximum number of <code>set</code>, <code>remove</code>, or <code>clear</code>
         * operations that can be performed each minute. This is 2 per second, providing higher throughput than writes-per-hour
         * over a shorter period of time.</p><p>Updates that would cause this limit to be exceeded fail immediately and set
         * $(ref:runtime.lastError).</p>
         */
        MAX_WRITE_OPERATIONS_PER_MINUTE: 120;
    }

    interface LocalStorageArea extends StorageArea {
        /**
         * The maximum amount (in bytes) of data that can be stored in local storage, as measured by the JSON stringification of
         * every value plus every key's length. This value will be ignored if the extension has the <code>unlimitedStorage</code>
         * permission. Updates that would cause this limit to be exceeded fail immediately and set $(ref:runtime.lastError).
         */
        QUOTA_BYTES: 5242880;
    }

    interface ManagedStorageArea extends StorageArea {
        /**
         * The maximum size (in bytes) of the managed storage JSON manifest file. Files larger than this limit will fail to load.
         */
        QUOTA_BYTES: 5242880;
    }

    /**
     * Object mapping each key that changed to its corresponding $(ref:storage.StorageChange) for that item.
     */
    interface StorageAreaOnChangedChangesType {
        [s: string]: StorageChange;
    }

    /**
     * Object mapping each key that changed to its corresponding $(ref:storage.StorageChange) for that item.
     */
    interface StorageAreaSyncOnChangedChangesType {
        [s: string]: StorageChange;
    }

    interface Static {
        /**
         * Fired when one or more items change.
         *
         * @param changes Object mapping each key that changed to its corresponding $(ref:storage.StorageChange) for that item.
         * @param areaName The name of the storage area (<code>"sync"</code>, <code>"local"</code> or <code>"managed"</code>)
         * the changes are for.
         */
        onChanged: Events.Event<(changes: Record<string, StorageChange>, areaName: string) => void>;

        sync: SyncStorageAreaSync;

        local: LocalStorageArea;

        managed: ManagedStorageArea;

        /**
         * Items in the <code>session</code> storage area are kept in memory, and only until the either browser or extension is
         * closed or reloaded.
         */
        session: StorageArea;
    }
}
