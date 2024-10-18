declare namespace _debounce {
    const debounce: typeof _debounce;
}

declare function _debounce<A extends Function>(
    f: A,
    interval?: number,
    immediate?: boolean,
): A & { clear(): void } & { flush(): void };

export = _debounce;
