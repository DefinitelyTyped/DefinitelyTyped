export as namespace chunk;

declare function chunk<T>(array: ArrayLike<T>, size?: number): T[][];

export = chunk;
