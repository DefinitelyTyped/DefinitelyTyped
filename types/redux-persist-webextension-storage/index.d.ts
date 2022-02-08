// Type definitions for redux-persist-webextension-storage 1.0
// Project: https://github.com/ssorallen/redux-persist-webextension-storage
// Definitions by: Marton Lederer <https://github.com/martonlederer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface StorageInterface {
  getItem(key: string): Promise<any>;
  removeItem(key: string): Promise<void>;
  setItem(key: string, value: any): Promise<void>;
}

export const localStorage: StorageInterface;
export const syncStorage: StorageInterface;
export {};
