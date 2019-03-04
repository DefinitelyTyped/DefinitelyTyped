// Type definitions for collectionsjs 0.3
// Project: https://github.com/logaretm/collectionsjs#readme
// Definitions by: Jaymeh <https://github.com/jaymeh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

export default class Collection {
    constructor(items?: any);
    add(item: any): Collection;
    all(): Collection;
    average(property?: string | ((property?: number) => number)): number;
    chunk(size: number): Collection;
    collect(collectable: any[]|string): Collection;
    concat(collection: any[]|Collection): Collection;
    contains(closure: ((item: any) => boolean)): boolean;
    count(): number;
    each(callback: (item: any) => void): Collection;
    filter(callback: (item: any) => any): Collection;
    find(item: any): number;
    first(callback?: ((item: any) => any)|null): any;
    flatten(deep?: boolean): Collection;
    get(index: number): any;
    has(item: any): boolean;
    join(separator?: string): string;
    keys(): Collection;
    last(callback?: ((item: any) => any)|null): any;
    map(callback: (item: any) => any): Collection;
    pluck(property: string): Collection;
    push(item: any): Collection;
    reduce(callback: (previous: any, current: any) => any, initial: any): any;
    reject(callback: (item: any) => any): Collection;
    remove(item: any): boolean;
    skip(count: number): Collection;
    slice(start: number, end?: number): Collection;
    sort(compare?: () => any): Collection;
    sortBy(property: string, order?: string): Collection;
    stringify(): string;
    sum(property?: string|null): any;
    take(count: number): Collection;
    macro(name: string, callback: (...args: any) => any): any;
    unique(callback?: string|null|((item: any) => any)): Collection;
    values(): Collection;
    where(callback: ((item: any) => any)|string, value?: any): Collection;
    zip(array: any[]|Collection): Collection;
}
