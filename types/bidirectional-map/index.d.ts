export default class BiMap<TValue> {
    constructor(object?: { [i: string]: TValue });
    size: number;

    set(key: string, value: TValue): void;
    get(key: string): TValue | undefined;
    getKey(value: TValue): string | undefined;
    clear(): void;
    delete(key: string): void;
    deleteValue(value: TValue): void;
    entries(): IterableIterator<[string, TValue]>;
    has(key: string): boolean;
    hasValue(value: TValue): boolean;
    keys(): IterableIterator<string>;
    values(): IterableIterator<TValue>;
}
