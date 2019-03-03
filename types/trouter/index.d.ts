// Type definitions for trouter 2.0
// Project: https://github.com/lukeed/trouter
// Definitions by: Markus Lanz <https://github.com/stahlstift>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace Trouter {
    interface FindResult<T> {
        params: { [k: string]: string; };
        handlers: T[];
    }

    type ValidMethods = 'get' | 'head' | 'patch' | 'options' |
        'connect' | 'delete' | 'trace' | 'post' | 'put';

    type FindReturn<T> = FindResult<T> | false;
}

declare class Trouter<T = any> {
    constructor();

    find(method: Trouter.ValidMethods, url: string): Trouter.FindReturn<T>;

    add(method: Trouter.ValidMethods, pattern: string, ...handlers: T[]): this;

    all(pattern: string, ...handlers: T[]): this;

    get(pattern: string, ...handlers: T[]): this;

    head(pattern: string, ...handlers: T[]): this;

    patch(pattern: string, ...handlers: T[]): this;

    options(pattern: string, ...handlers: T[]): this;

    connect(pattern: string, ...handlers: T[]): this;

    delete(pattern: string, ...handlers: T[]): this;

    trace(pattern: string, ...handlers: T[]): this;

    post(pattern: string, ...handlers: T[]): this;

    put(pattern: string, ...handlers: T[]): this;
}

export default Trouter;
