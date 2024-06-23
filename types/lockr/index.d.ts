declare var Lockr: lockr.LockrStatic;

declare namespace lockr {
    interface LockrStatic {
        /**
         * The prefix used by lockr.
         */
        prefix: string;

        /**
         * Set a key to a particular value or a hash object (Object or Array) under a hash key.
         * @param key
         * @param value
         */
        set(key: string, value: string | number | Object): void;

        /**
         * Set a key to a particular value or a hash object (Object or Array) under a hash key.
         * @param key
         * @param value
         */
        set<T>(key: string, value: T[]): void;

        /**
         * Removes all data associated to a key.
         * @param key
         */
        rm(key: string): void;

        /**
         * Returns the saved value for given key, even if the saved value is hash object.
         * If value is null or undefined it returns a default value.
         * @param key
         * @param defaultValue
         */
        get<T>(key: string, defaultValue?: T): T;

        /**
         * Adds a unique value to a particular set under a hash key.
         * @param key
         * @param value
         */
        sadd(key: string, value: string | number | Object): void;

        /**
         * Adds a unique value to a particular set under a hash key.
         * @param key
         * @param value
         */
        sadd<T>(key: string, value: T[]): void;

        /**
         * Returns the values of a particular set under a hash key.
         * @param key
         */
        smembers(key: string): Array<string | number | Object>;

        /**
         * Returns the values of a particular set under a hash key.
         * @param key
         */
        smembers<T>(key: string): T[];

        /**
         * Returns whether the value exists in a particular set under a hash key.
         * @param key
         * @param value
         */
        sismember(key: string, value: string | number | Object): boolean;

        /**
         * Returns whether the value exists in a particular set under a hash key.
         * @param key
         * @param value
         */
        sismember<T>(key: string, value: T[]): boolean;

        /**
         * Removes a value from a particular set under a hash key.
         * @param key
         * @param value
         */
        srem(key: string, value: string | number | Object): void;

        /**
         * Removes a value from a particular set under a hash key.
         * @param key
         * @param value
         */
        srem<T>(key: string, value: T[]): void;

        /**
         * Returns all saved values & objects, in an Array.
         */
        getAll(): Array<string | number | Object>;

        /**
         * Empties localStorage.
         */
        flush(): void;

        /**
         * Returns all keys without (if set) prefix
         */
        keys(): string[];
    }
}

declare module "lockr" {
    export = Lockr;
}
