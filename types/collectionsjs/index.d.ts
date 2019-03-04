// Type definitions for collectionsjs 0.3
// Project: https://github.com/logaretm/collectionsjs#readme
// Definitions by: Jaymeh <https://github.com/jaymeh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

export default class Collection<T> {
    constructor(items?: T[]);
    add(item: T): Collection<T>;
    all(): Collection<T>;
    average(property?: string | ((property?: number) => number)): number;
    chunk(size: number): Collection<T>;
    collect(collectable: T[]): Collection<T>;
    concat(collection: T[]|Collection<T>): Collection<T>;
    contains(closure: ((item: T) => boolean)): boolean;
    count(): number;
    each(callback: (item: T) => void): Collection<T>;
    filter(callback: (item: T) => boolean): Collection<T>;
    find(item: any): number;
    first(callback?: ((item: T) => boolean)|null): T;
    flatten(deep?: boolean): Collection<T>;
    get(index: number): T;
    has(item: T): boolean;
    join(separator?: string): string;
    keys(): Collection<T>;
    last(callback?: ((item: T) => boolean)|null): T;
    map(callback: (item: T) => any): Collection<T>;
    pluck(property: string): Collection<T>;
    push(item: T): Collection<T>;
    reduce(callback: (previous: T, current: T) => any, initial: any): any;
    reject(callback: (item: T) => boolean): Collection<T>;
    remove(item: any): boolean;
    reverse(): Collection<T>;
    skip(count: number): Collection<T>;
    slice(start: number, end?: number): Collection<T>;
    sort(compare?: () => boolean): Collection<T>;
    sortBy(property: string, order?: string): Collection<T>;
    stringify(): string;
    sum(property?: string|null): any;
    take(count: number): Collection<T>;
    macro(name: string, callback: (...args: any) => any): any;
    unique(callback?: string|null|((item: T) => any)): Collection<T>;
    values(): Collection<T>;
    where(callback: ((item: T) => boolean)|string, value?: any): Collection<T>;
    zip(array: T[]|Collection<T>): Collection<T>;
}
