/**
 * Based on definitions of lib.dom and  lib.dom.iteralbe
 */
declare class URLSearchParams {
    constructor(init?: string[][] | Record<string, string> | string | URLSearchParams);

    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
    set(name: string, value: string): void;
    sort(): void;
    forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
    [Symbol.iterator](): IterableIterator<[string, string]>;

    entries(): IterableIterator<[string, string]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<string>;
}

export = URLSearchParams;
