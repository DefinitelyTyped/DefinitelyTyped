type Accessor<T> = (item: T) => number;

declare function gcd(firstValue: number, secondValue: number, ...values: readonly number[]): number;
declare function gcd(values: [number, number, ...readonly number[]]): number;
declare function gcd<T>(values: [T, T, ...readonly T[]], accessor: Accessor<T>): number;
// If provided an array with a length less than 2 or a single integer argument, the function returns `null`.
declare function gcd(singleValue: number | [number]): null;
declare function gcd<T>(singleValueArray: [T], accessor: Accessor<T>): null;
declare function gcd(...values: readonly number[]): number | null;
declare function gcd(singleValue: readonly number[]): number | null;
declare function gcd<T>(singleValue: readonly T[], accessor: Accessor<T>): number | null;

export = gcd;
