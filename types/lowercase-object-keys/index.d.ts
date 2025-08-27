type LowercaseObjectKeysResult<T extends object> = {
    [K in keyof T as K extends string ? Lowercase<K> : K]: T[K];
};

declare function lowercaseObjectKeys<T extends object>(object: T): LowercaseObjectKeysResult<T>;

export = lowercaseObjectKeys;
