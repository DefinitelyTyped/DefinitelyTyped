interface IHashtable<TKey, TValue> {
    put(key: TKey, value: TValue): TValue;
    putAll(
        hashtable: IHashtable<TKey, TValue>,
        conflictCallback?: (key: TKey, thisValue: TValue, value: TValue) => TValue,
    ): void;

    get(key: TKey): TValue;
    containsKey(key: TKey): boolean;
    containsValue(value: TValue): boolean;

    clear(): void;
    isEmpty(): boolean;

    keys(): TKey[];
    values(): TValue[];
    entries(): any[][];

    remove(key: TKey): TValue;
    size(): number;

    clone(): IHashtable<TKey, TValue>;
    each(callback: (key: TKey, value: TValue) => void): void;

    equals(hashtable: IHashtable<TKey, TValue>): boolean;
    toQueryString(): string;
}

interface IHashtableOptions<TKey> {
    hashCode?: ((key: TKey) => any) | undefined;
    equals?: ((key1: TKey, key2: TKey) => boolean) | undefined;
    replaceDuplicateKey?: boolean | undefined;
}

interface IHashtableStatic {
    new<TKey, TValue>(): IHashtable<TKey, TValue>;
    new<TKey, TValue>(options: IHashtableOptions<TKey>): IHashtable<TKey, TValue>;
    new<TKey, TValue>(
        hashCode?: (value: TValue) => any,
        equals?: (value1: TValue, value2: TValue) => boolean,
    ): IHashtable<TKey, TValue>;
}

declare var Hashtable: IHashtableStatic;

declare module "hashtable" {
    export = Hashtable;
}
