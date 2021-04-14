import { ConfigValues, Disposable, ScopeDescriptor } from '../index';

/** Used to access all of Atom's configuration details. */
export interface Config {
    // Config Subscription
    /**
     *  Add a listener for changes to a given key path. This is different than ::onDidChange in
     *  that it will immediately call your callback with the current value of the config entry.
     */
    observe<T extends keyof ConfigValues>(keyPath: T, callback: (value: ConfigValues[T]) => void): Disposable;
    /**
     *  Add a listener for changes to a given key path. This is different than ::onDidChange in
     *  that it will immediately call your callback with the current value of the config entry.
     */
    observe<T extends keyof ConfigValues>(
        keyPath: T,
        options: { scope: string[] | ScopeDescriptor },
        callback: (value: ConfigValues[T]) => void,
    ): Disposable;

    /**
     *  Add a listener for changes to a given key path. If keyPath is not specified, your
     *  callback will be called on changes to any key.
     */
    // tslint:disable-next-line:no-any
    onDidChange<T = any>(callback: (values: { newValue: T; oldValue: T }) => void): Disposable;
    /**
     *  Add a listener for changes to a given key path. If keyPath is not specified, your
     *  callback will be called on changes to any key.
     */
    onDidChange<T extends keyof ConfigValues>(
        keyPath: T,
        callback: (values: { newValue: ConfigValues[T]; oldValue?: ConfigValues[T] }) => void,
    ): Disposable;
    /**
     *  Add a listener for changes to a given key path. If keyPath is not specified, your
     *  callback will be called on changes to any key.
     */
    onDidChange<T extends keyof ConfigValues>(
        keyPath: T,
        options: { scope: string[] | ScopeDescriptor },
        callback: (values: { newValue: ConfigValues[T]; oldValue?: ConfigValues[T] }) => void,
    ): Disposable;

    // Managing Settings
    /** Retrieves the setting for the given key. */
    get<T extends keyof ConfigValues>(
        keyPath: T,
        options?: {
            sources?: string[];
            excludeSources?: string[];
            scope?: string[] | ScopeDescriptor;
        },
    ): ConfigValues[T];

    /**
     *  Sets the value for a configuration setting.
     *  This value is stored in Atom's internal configuration file.
     */
    set<T extends keyof ConfigValues>(
        keyPath: T,
        value: ConfigValues[T],
        options?: { scopeSelector?: string; source?: string },
    ): void;

    /** Restore the setting at keyPath to its default value. */
    unset(keyPath: string, options?: { scopeSelector?: string; source?: string }): void;

    /**
     *  Get all of the values for the given key-path, along with their associated
     *  scope selector.
     */
    getAll<T extends keyof ConfigValues>(
        keyPath: T,
        options?: { sources?: string[]; excludeSources?: string[]; scope?: ScopeDescriptor },
    ): Array<{ scopeDescriptor: ScopeDescriptor; value: ConfigValues[T] }>;

    /**
     *  Get an Array of all of the source Strings with which settings have been added
     *  via ::set.
     */
    getSources(): string[];

    /**
     *  Retrieve the schema for a specific key path. The schema will tell you what type
     *  the keyPath expects, and other metadata about the config option.
     */
    getSchema(keyPath: string): object | null;

    /** Get the string path to the config file being used. */
    getUserConfigPath(): string;

    /**
     *  Suppress calls to handler functions registered with ::onDidChange and ::observe
     *  for the duration of callback. After callback executes, handlers will be called
     *  once if the value for their key-path has changed.
     */
    transact(callback: () => void): void;
}
