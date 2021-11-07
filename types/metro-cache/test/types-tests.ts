import { CacheStore } from 'metro-cache';

export const cacheStore: CacheStore<number> = {
    get: (key: Buffer): number | undefined | Promise<number> | Promise<undefined> => 123,
    set: (key: Buffer, value: number): void | Promise<void> => {},
    clear: (): void | Promise<void> => {},
};
