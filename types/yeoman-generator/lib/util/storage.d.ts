import { Editor } from "mem-fs-editor";
import Generator = require("../..");

declare namespace Storage {
    /**
     * Provides options for the {@link Storage `Storage`} class.
     */
    interface StorageOptions {
        /**
         * A value indicating whether the name should be treated as a lodash path.
         */
        lodashPath: boolean;

        /**
         * A value indicating whether json object cache should be disabled.
         */
        disableCache: boolean;

        /**
         * A value indicating whether the cache should not be cleaned after each fs change.
         */
        disableCacheByFile: boolean;
    }
}

/**
 * Storage instances handle a json file where Generator authors can store data.
 *
 * The {@link Generator `Generator`} class instantiates the storage named {@link Generator.config `config`} by default.
 */
declare class Storage {
    /**
     * Initializes a new instance of the {@link Storage `Storage`} class.
     *
     * @param name The name of the new storage (this is a namespace).
     * @param fs A mem-fs editor instance.
     * @param configPath The filepath used as a storage.
     * @param options Storage options.
     */
    constructor(name: string, fs: Editor, configPath: string, options?: Storage.StorageOptions);

    /**
     * Creates a proxy object.
     */
    createProxy(): object;

    /**
     * Creates a child storage.
     *
     * @param path The relative property-path of the key to create a new storage.
     */
    createStorage(path: string): Storage;

    /**
     * Recreates the store with {@link defaults `defaults`} value and schedules a save. If keys already exist, the initial value is kept.
     *
     * @param defaults The key-value object to store.
     */
    defaults(defaults: Record<string, any>): Record<string, any>;

    /**
     * Deletes a key from the store and schedules a save.
     *
     * @param key The key under which the value is stored.
     */
    delete(key: string): void;

    /**
     * Gets a stored value
     *
     * @param key The key under which the value is stored.
     */
    get(key: string): any;

    /**
     * Gets all the stored values.
     */
    getAll(): Record<string, any>;

    /**
     * Gets a stored value from a property-path.
     *
     * @param path The property-path under which the value is stored.
     */
    getPath(path: string): any;

    /**
     * Saves a new object of values.
     */
    save(): void;

    /**
     * Merges the specified {@link content `content`} into the storage.
     *
     * @param content
     * The content to merge into the storage.
     *
     * @returns
     * The content of the storage.
     */
    merge(content: Record<string, any>): Record<string, any>;

    /**
     * Assigns a key to a value and schedules a save.
     *
     * @param key The key under which the value is stored.
     * @param value Any valid JSON type value.
     */
    set<T extends any>(key: string, value: T): T;

    /**
     * Assigns a lodash path to a value and schedules a save.
     *
     * @param path The property-path under which the value is stored.
     * @param value Any valid JSON type value.
     */
    setPath<T extends any>(path: string, value: T): T;
}

export = Storage;
