// Type definitions for storage-helper 1.4
// Project: https://github.com/MatteoGabriele/storage-helper#readme
// Definitions by: Klaus Meinhardt <https://github.com/ajafff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function clear(): void;
export function showStorageLogger(enabled: boolean): void;
export function setItem(key: string, value: string, permanent?: boolean): void;
export function getItem(key: string): string | null;
export function removeItem(key: string): void;

declare const storageHelper: {
    setItem: typeof setItem;
    getItem: typeof getItem;
    removeItem: typeof removeItem;
    clear: typeof clear;
};

export default storageHelper;

export as namespace StorageHelper;
