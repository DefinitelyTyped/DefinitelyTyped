// Type definitions for url-search-params 0.10
// Project: https://github.com/WebReflection/url-search-params
// Definitions by: Nick <https://github.com/nick121212>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class URLSearchParams {
    constructor(init?: string | URLSearchParams | any);
    append(name: string, value: any): void;
    delete(name: string): void;
    entries(pointer: string): Iterator<string>;
    get(name: string): string;
    getAll(): string[];
    has(name: string): boolean;
    keys(): Iterator<string>;
    set(name: string, value: any): void;
    values(pointer: string): Iterator<string>;
}

export = URLSearchParams;
