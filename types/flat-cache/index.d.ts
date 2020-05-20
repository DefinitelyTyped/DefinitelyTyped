// Type definitions for flat-cache 2.0
// Project: https://github.com/royriojas/flat-cache#readme
// Definitions by: Kevin Pollet <https://github.com/kevinpollet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Cache {
    load(cacheId: string, cacheDir?: string): void;
    loadFile(pathToFile: string): void;
    all(): { [key: string]: any };
    keys(): string[];
    setKey(key: string, value: any): void;
    removeKey(key: string): void;
    getKey(key: string): any;
    save(noPrune?: boolean): void;
    removeCacheFile(): boolean;
    destroy(): void;
}

export function load(cacheId: string, cacheDir?: string): Cache;

export function create(cacheId: string, cacheDir?: string): Cache;

export function createFromFile(filePath: string): Cache;

export function clearCacheById(cacheId: string, cacheDir?: string): boolean;

export function clearAll(cacheDir?: string): boolean;
