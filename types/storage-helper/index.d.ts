// Type definitions for storage-helper 1.4
// Project: https://github.com/MatteoGabriele/storage-helper#readme
// Definitions by: Klaus Meinhardt <https://github.com/ajafff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export function clear(): void;
export function showStorageLogger(enabled: boolean): void;
export function setItem(key: string, value: string, permanent?: boolean): void;
export function getItem<T extends boolean | undefined = false, U = undefined>(key: string, parse?: T, fallback?: U): T extends true ? any : string | NonNullable<U> | null;
export function removeItem(key: string): void;

declare const storageHelper: {
    setItem: typeof setItem;
    getItem: typeof getItem;
    removeItem: typeof removeItem;
    clear: typeof clear;
};

export default storageHelper;

export as namespace StorageHelper;
