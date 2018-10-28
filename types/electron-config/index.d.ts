// Type definitions for electron-config 0.2
// Project: https://github.com/sindresorhus/electron-config
// Definitions by: Jose M. Medina <https://github.com/mrfunkycold>, Daniel P. Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ElectronConfigOptions {
    /**
     * Default config.
     */
    defaults?: {};

    /**
     * Name of the config file (without extension).
     */
    name?: string;
}

declare class ElectronConfig implements Iterable<[string, string | number | boolean | symbol | {}]> {
    /**
     * gets the item count
     */
    size: number;

    /**
     * Get all the config as an object or replace the current config with an object
     */
    store: {};

    /**
     * Get the path to the config file.
     */
    path: string;
    constructor(options?: ElectronConfigOptions);

    /**
     * Sets an item
     */
    set(key: string, value: any): void;

    /**
     * Sets multiple items at once
     */
    set(object: {}): void;

    /**
     * deletes an item
     */
    delete(key: string): void;

    /**
     * retrieves an item
     */
    get(key: string): any;

    /**
     * Checks if an item exists
     */
    has(key: string): boolean;

    /**
     * deletes all items
     */
    clear(): void;

    [Symbol.iterator](): Iterator<[string, string | number | boolean | symbol | {}]>;
}

declare namespace ElectronConfig {} // https://github.com/Microsoft/TypeScript/issues/5073

export = ElectronConfig;
