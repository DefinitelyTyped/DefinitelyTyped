declare function Call<T, R>(F: (this: T) => R, thisArg: T): R;
declare function Call<T, A extends readonly unknown[], R>(F: (this: T, ...args: A) => R, thisArg: T, args: Readonly<A>): R;
export = Call;
