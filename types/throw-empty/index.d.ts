declare function throwEmpty<T>(x: T): T extends null | undefined ? never : T;

export = throwEmpty;
