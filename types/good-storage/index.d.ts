// Type definitions for good-storage 1.1
// Project: https://github.com/ustbhuangyi/storage
// Definitions by: Wang KaiLing <https://github.com/wkl007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Storage {
    session: Storage;

    set(key: string, val?: any): any;

    get(key: string, def?: any): any;

    has(key: string): boolean;

    remove(key: string): void;

    clear(): void;

    getAll(): any;

    forEach(callback: () => void): void;
}

declare const storage: Storage;

export = storage;
