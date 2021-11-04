/** Get own enumerable property keys. */
declare function EnumerableOwnProperties(O: object, kind: 'key'): string[];

/** Get own enumerable property values. */
declare function EnumerableOwnProperties<T>(O: { [s: string]: T } | ArrayLike<T>, kind: 'value'): T[];

/** Get own enumerable property entries. */
declare function EnumerableOwnProperties<T>(
    O: { [s: string]: T } | ArrayLike<T>,
    kind: 'key+value',
): Array<[string, T]>;

/** Get own enumerable property entries. */
declare function EnumerableOwnProperties(O: object, kind: 'key+value'): Array<[string, any]>;

/** Get own enumerable properties. */
declare function EnumerableOwnProperties(O: object, kind: 'key' | 'value' | 'key+value'): any[];

export = EnumerableOwnProperties;
