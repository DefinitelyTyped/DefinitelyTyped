declare function every<T>(
    this: T[] | IArguments,
    callbackfn: (value: T, index?: number, array?: T[]) => boolean,
    thisArg?: unknown,
): boolean;

export = every;
