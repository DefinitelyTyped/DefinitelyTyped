declare function compare<T>(fn: (item: T) => any): (a: T, b: T) => -1 | 0 | 1;
declare function compare<T>(sign: number, fn: (item: T) => any): (a: T, b: T) => -1 | 0 | 1;
export = compare;
