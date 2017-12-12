// Type definitions for electron-store 1.2
// Project: https://github.com/sindresorhus/electron-store
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ElectronStoreOptions {
  /**
   * Default config.
   */
  defaults?: {};

  /**
   * Name of the config file (without extension).
   */
  name?: string;

  /**
   * Storage file location. *Don't specify this unless absolutely necessary!*
   */
  cwd?: string;
}

declare class ElectronStore implements Iterable<[string, string | number | boolean | symbol | {}]> {
  constructor(options?: ElectronStoreOptions);

  /**
   * Sets an item.
   */
  set(key: string, value: any): void;

  /**
   * Sets multiple items at once.
   */
  set(object: {}): void;

  /**
   * Retrieves an item.
   */
  get(key: string, defaultValue?: any): any;

  /**
   * Checks if an item exists.
   */
  has(key: string): boolean;

  /**
   * Deletes an item.
   */
  delete(key: string): void;

  /**
   * Deletes all items.
   */
  clear(): void;

  /**
   * Open the storage file in the user's editor.
   */
  openInEditor(): void;

  /**
   * Gets the item count.
   */
  size: number;

  /**
   * Gets all the config as an object or replace the current config with an object.
   */
  store: {};

  /**
   * Gets the path to the config file.
   */
  path: string;

  [Symbol.iterator](): Iterator<[string, string | number | boolean | symbol | {}]>;
}

declare namespace ElectronStore {} // https://github.com/Microsoft/TypeScript/issues/5073

export = ElectronStore;
