declare function sortBy<T>(...args: readonly string[]): (a: T, b: T) => number;
declare function sortBy<T>(...args: Array<string | ((key: string, value: any) => any)>): (a: T, b: T) => number;

export = sortBy;
