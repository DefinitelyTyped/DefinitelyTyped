declare function every<A extends ArrayLike<any>>(
    array: A,
    predicate: (value: A extends ArrayLike<infer T> ? T : any, index: number, array: A) => unknown,
): boolean;
export = every;
