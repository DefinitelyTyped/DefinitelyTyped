type Accessor<T> = (item: T) => number;

declare function gcd(firstValue: number, secondValue: number, ...values: ReadonlyArray<number>): number;
declare function gcd(values: [number, number, ...ReadonlyArray<number>]): number;
declare function gcd<T>(values: [T, T, ...ReadonlyArray<T>], accessor: Accessor<T>): number;
// If provided an array with a length less than 2 or a single integer argument, the function returns `null`.
declare function gcd(singleValue: number | [number]): null;
declare function gcd<T>(singleValueArray: [T], accessor: Accessor<T>): null;
declare function gcd(...values: ReadonlyArray<number>): number | null;
declare function gcd(singleValue: ReadonlyArray<number>): number | null;
declare function gcd<T>(singleValue: ReadonlyArray<T>, accessor: Accessor<T>): number | null;

export = gcd;
