// JSBox Cache API TypeScript Declaration

declare namespace CacheTypes {
    interface SetAsyncOptions {
        key: string;
        value: any;
        handler: (result: any) => void;
    }

    interface GetAsyncOptions {
        key: string;
        handler: (result: any) => void;
    }

    interface RemoveAsyncOptions {
        key: string;
        handler: () => void;
    }

    interface ClearAsyncOptions {
        handler?: () => void;
    }
}

interface JBCache {
    set(key: string, value: any): void;
    setAsync(options: CacheTypes.SetAsyncOptions): void;
    get(key: string): any;
    getAsync(options: CacheTypes.GetAsyncOptions): void;
    remove(key: string): void;
    removeAsync(options: CacheTypes.RemoveAsyncOptions): void;
    clear(): void;
    clearAsync(options: CacheTypes.ClearAsyncOptions): void;
}

declare const $cache: JBCache;
