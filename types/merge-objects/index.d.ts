declare function mergeObjects<T extends object, U extends object>(object1: T, object2: U): T & U;

export = mergeObjects;
