declare function ObjectEntries<T extends object>(
    obj: T,
): Array<[Exclude<keyof T, "__proto__">, T[Exclude<keyof T, "__proto__">]]>;

export = ObjectEntries;
