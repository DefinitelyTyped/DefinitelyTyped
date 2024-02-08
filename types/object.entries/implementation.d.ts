declare function ObjectEntries<T extends object>(obj: T): Array<[keyof T, T[keyof T]]>;

export = ObjectEntries;
