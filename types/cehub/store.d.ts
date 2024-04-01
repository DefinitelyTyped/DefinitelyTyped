/// <reference types="node" />
declare type OnDidAnyChangeCallback<T> = (newValue?: Readonly<T>, oldValue?: Readonly<T>) => void;
declare type Unsubscribe = () => typeof import('events').EventEmitter;
declare type OnDidChangeCallback<T> = (newValue?: T, oldValue?: T) => void;

declare interface StoreFunctions<T extends Record<string, any> = Record<string, unknown>> {
    /**
   Get an item.

   @param key - The key of the item to get.
   @param defaultValue - The default value if the item does not exist.
   */
    get<Key extends keyof T> (key: Key): T[Key];
    get<Key extends keyof T> (key: Key, defaultValue: Required<T>[Key]): Required<T>[Key];
    get<Key extends string, Value = unknown> (key: Exclude<Key, keyof T>, defaultValue?: Value): Value;
    /**
   Set an item or multiple items at once.

   @param {key|object} - You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a key to access nested properties. Or a hashmap of items to set at once.
   @param value - Must be JSON serializable. Trying to set the type `undefined`, `function`, or `symbol` will result in a `TypeError`.
   */
    set<Key extends keyof T> (key: Key, value?: T[Key]): void;
    set (key: string, value: unknown): void;
    set (object: Partial<T>): void;
    /**
    Check if an item exists.

    @param key - The key of the item to check.
    */
    has<Key extends keyof T> (key: Key | string): boolean;
    /**
    Reset items to their default values, as defined by the `defaults` or `schema` option.

    @see `clear()` to reset all items.

    @param keys - The keys of the items to reset.
    */
    reset<Key extends keyof T> (...keys: Key[]): void;
    /**
    Delete an item.

    @param key - The key of the item to delete.
    */
    delete<Key extends keyof T> (key: Key): void;
    /**
    Delete all items.

    This resets known items to their default values, if defined by the `defaults` or `schema` option.
    */
    clear (): void;
    /**
    Watches the given `key`, calling `callback` on any changes.

    @param key - The key wo watch.
    @param callback - A callback function that is called on any changes. When a `key` is first set `oldValue` will be `undefined`, and when a key is deleted `newValue` will be `undefined`.
    @returns A function, that when called, will unsubscribe.
    */
    onDidChange<Key extends keyof T> (key: Key, callback: OnDidChangeCallback<T[Key]>): Unsubscribe;
    /**
    Watches the whole config object, calling `callback` on any changes.

    @param callback - A callback function that is called on any changes. When a `key` is first set `oldValue` will be `undefined`, and when a key is deleted `newValue` will be `undefined`.
    @returns A function, that when called, will unsubscribe.
    */
    onDidAnyChange (callback: OnDidAnyChangeCallback<T>): Unsubscribe;
    get size (): number;
    get store (): T;
    set store (value: T);
}
