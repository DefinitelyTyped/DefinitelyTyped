export = ExpiredStorage;

declare class ExpiredStorage {
    constructor(localStorage?: any);
    /**
     * Clear the entire storage and all keys in it.
     */
    clear(): void;
    /**
     * Get a json serializable value. This basically calls JSON.parse on the returned value.
     * @param key Item key to get (string).
     * @return Stored value (JSON.parsed), or undefined if not set / expired.
     */
    getJson(key: string): any;
    /**
     * Get item.
     * @param key: Item key to get (string).
     * @return Stored value, or undefined if not set / expired.
     */
    getItem(key: string): string | null;
    /**
     * Remove an item.
     * @param key Item key to remove (string).
     * @return Storage.removeItem() return code.
     */
    removeItem(key: string): any;
    /**
     * Set a json serializable value. This basically calls JSON.stringify on 'val' before setting it.
     * @param key Item key to set (string).
     * @param value Value to store (object, will be JSON.stringified).
     * @param expiration Expiration time, in seconds. If not provided, will not set expiration time.
     * @param return Storage.setItem() return code.
     */
    setJson(key: string, value: object, expirationTime?: number): any;
    /**
     * Set item.
     * @param key Item key to set (string).
     * @param value Value to store (string).
     * @param expiration Expiration time, in seconds. If not provided, will not set expiration time.
     * @return Storage.setItem() return code.
     */
    setItem(key: string, value: string, expiration?: number): any;
    /**
     * Get all keys in storage, not including internal keys used to store expiration.
     * @param includeExpired: if true, will also include expired keys.
     * @return Array with keys.
     */
    keys(includeExpired: boolean): string[] | null;
    /**
     * Get item time left to live.
     * @param key Item key to get (string).
     * @return Time left to expire (in seconds), or null if don't have expiration date.
     */
    getTimeLeft(key: string): number | null;
    /**
     * Clear expired keys.
     * If you never call this function, expired keys will remain until you try to get them / reset a new value.
     *
     * @param return: List of removed keys due to expiration.
     */
    clearExpired(): string[];
    /**
     * Return if an item is expired (don't remove it, even if expired).
     * @param key Item key to check (string).
     * @return True if expired, False otherwise.
     */
    isExpired(key: string): boolean;
    /**
     * Get item + metadata such as time left and if expired.
     * Even if item expired, will not remove it.
     * @param key Item key to get (string).
     * @return PeekInterface with: {value, timeLeft, isExpired}
     */
    peek(key: string): ExpiredStorage.PeekInterface;
    /**
     * Update expiration time for an item (note: doesn't validate that the item is set).
     * @param key: Item key to update expiration for (string).
     * @param expiration: New expiration time in seconds to set.
     * @return Storage.setItem() return code for setting new expiration.
     */
    updateExpiration(key: string, expiration: number): any;
}

declare namespace ExpiredStorage {
    interface PeekInterface {
        /**
         * The value of a [key]
         */
        value: string | null;
        /**
         * Time remaining until expiration
         */
        timeLeft: number | null;
        /**
         * Has the [key] expired or not
         */
        isExpired: boolean;
    }
}
