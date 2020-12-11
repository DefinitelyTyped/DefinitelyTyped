/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
export declare class PnPClientStorageWrapper implements PnPClientStore {
    private store;
    defaultTimeoutMinutes: number;
    /**
     * True if the wrapped storage is available; otherwise, false
     */
    enabled: boolean;
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    constructor(store: Storage, defaultTimeoutMinutes?: number);
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    get<T>(key: string): T | null;
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    put(key: string, o: any, expire?: Date): void;
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    delete(key: string): void;
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    getOrPut<T>(key: string, getter: () => Promise<T>, expire?: Date): Promise<T>;
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    deleteExpired(): Promise<void>;
    /**
     * Used to determine if the wrapped storage is available currently
     */
    private test;
    /**
     * Creates the persistable to store
     */
    private createPersistable;
    /**
     * Deletes expired items added by this library in this.store and sets a timeout to call itself
     */
    private cacheExpirationHandler;
}
/**
 * Interface which defines the operations provided by a client storage object
 */
export interface PnPClientStore {
    /**
     * True if the wrapped storage is available; otherwise, false
     */
    enabled: boolean;
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    get(key: string): any;
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    put(key: string, o: any, expire?: Date): void;
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    delete(key: string): void;
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    getOrPut<T>(key: string, getter: () => Promise<T>, expire?: Date): Promise<T>;
    /**
     * Removes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    deleteExpired(): Promise<void>;
}
/**
 * A class that will establish wrappers for both local and session storage
 */
export declare class PnPClientStorage {
    private _local;
    private _session;
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    constructor(_local?: PnPClientStore | null, _session?: PnPClientStore | null);
    /**
     * Provides access to the local storage of the browser
     */
    readonly local: PnPClientStore;
    /**
     * Provides access to the session storage of the browser
     */
    readonly session: PnPClientStore;
    private getStore;
}
