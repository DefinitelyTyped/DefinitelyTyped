// Type definitions for jStorage 0.3.0
// Project: http://www.jstorage.info/
// Definitions by: Danil Flores <https://github.com/dflor003/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module $.jStorage {

    class IStorageOptions {
        TTL: number;
    }

    interface IJStorage {
        [key: string]: any;
    }

    /**
     * Sets a key's value.
     *
     * @param key Key to set. If this value is not set or not
     *              a string an exception is raised.
     * @param value Value to set. This can be any value that is JSON
     *              compatible (Numbers, Strings, Objects etc.).
     * @param [options] - possible options to use
     * @param [options.TTL] - optional TTL value
     * @return the used value
     */
    function set <TValue>(key: string, value: TValue, options?: IStorageOptions): TValue;

    /**
     * Looks up a key in cache
     *
     * @param key - Key to look up.
     * @param defaultIfNotFound - Default value to return, if key didn't exist.
     * @return the key value, default value or null
     */
    function get <TValue>(key: string, defaultIfNotFound?: TValue): TValue;

    /**
     * Deletes a key from cache.
     *
     * @param key - Key to delete.
     * @return true if key existed or false if it didn't
     */
    function deleteKey(key: string): boolean;

    /**
     * Sets a TTL for a key, or remove it if ttl value is 0 or below
     *
     * @param key - key to set the TTL for
     * @param ttl - TTL timeout in milliseconds
     * @return true if key existed or false if it didn't
     */
    function setTTL(key: string, ttl: number): boolean;

    /**
     * Gets remaining TTL (in milliseconds) for a key or 0 when no TTL has been set
     *
     * @param key Key to check
     * @return Remaining TTL in milliseconds
     */
    function getTTL(key: string): number;

    /**
     * Deletes everything in cache.
     *
     * @return Always true
     */
    function flush(): boolean;

    /**
     * Returns a read-only copy of _storage
     *
     * @return Read-only copy of _storage
     */
    function storageObj(): IJStorage

    /**
     * Returns an index of all used keys as an array
     * ['key1', 'key2',..'keyN']
     *
     * @return Used keys
     */
    function index(): string[];

    /**
     * How much space in bytes does the storage take?
     *
     * @return Storage size in chars (not the same as in bytes,
     *                  since some chars may take several bytes)
     */
    function storageSize(): number;

    /**
     * Which backend is currently in use?
     *
     * @return Backend name
     */
    function currentBackend(): Storage;

    /**
     * Test if storage is available
     *
     * @return True if storage can be used
     */
    function storageAvailable(): boolean;

    /**
     * Register change listeners
     *
     * @param key Key name
     * @param callback Function to run when the key changes
     */
    function listenKeyChange(key: string, callback: (key: string, value: any) => void ): void;

    /**
     * Register change listeners
     *
     * @param key Key name
     * @param callback Function to run when the key changes
     */
    function listenKeyChange<TValue>(key: string, callback: (key: string, value: TValue) => void ): void;

    /**
     * Remove change listeners
     *
     * @param key Key name to unregister listeners against
     * @param [callback] If set, unregister the callback, if not - unregister all
     */
    function stopListening(key: string, callback?: Function): void;

    /**
     * Subscribe to a Publish/Subscribe event stream
     *
     * @param channel Channel name
     * @param callback Function to run when the something is published to the channel
     */
    function subscribe(channel: string, callback: (channel: string, value: any) => void ): void;

    /**
     * Subscribe to a Publish/Subscribe event stream
     *
     * @param channel Channel name
     * @param callback Function to run when the something is published to the channel
     */
    function subscribe<TValue>(channel: string, callback: (channel: string, value: TValue) => void ): void;

    /**
     * Publish data to an event stream
     *
     * @param channel Channel name
     * @param payload Payload to deliver
     */
    function publish(channel: string, payload: any): void;

    /**
     * Reloads the data from browser storage
     */
    function reInit(): void;
}