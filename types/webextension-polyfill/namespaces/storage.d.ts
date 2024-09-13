//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Events } from "./events";

/**
 * Namespace: browser.storage
 */
export namespace Storage {
    interface StorageChange {
        /**
         * The old value of the item, if there was an old value.
         * Optional.
         */
        oldValue?: unknown;

        /**
         * The new value of the item, if there is a new value.
         * Optional.
         */
        newValue?: unknown;
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
        get(keys?: null | string | string[] | Record<string, unknown>): Promise<Record<string, unknown>>;

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
        set(items: Record<string, unknown>): Promise<void>;

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
        get(keys?: null | string | string[] | Record<string, unknown>): Promise<Record<string, unknown>>;

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
        set(items: Record<string, unknown>): Promise<void>;

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

        /**
         * Items in the <code>sync</code> storage area are synced by the browser.
         */
        sync: StorageAreaSync;

        /**
         * Items in the <code>local</code> storage area are local to each machine.
         */
        local: StorageArea;

        /**
         * Items in the <code>managed</code> storage area are set by administrators or native applications,
         * and are read-only for the extension; trying to modify this namespace results in an error.
         */
        managed: StorageArea;

        /**
         * Items in the <code>session</code> storage area are kept in memory, and only until the either browser or extension is
         * closed or reloaded.
         */
        session: StorageArea;
    }
}
