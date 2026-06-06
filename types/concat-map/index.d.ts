export = concat_map;

declare function concat_map<T, R>(xs: T[], fn: (x: T, i: number) => R | R[]): R[];
