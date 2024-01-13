declare function inflight<A extends unknown[], R>(
    key: string | number | symbol,
    cb: (...args: A) => R,
): ((...args: A) => R) | null;

export = inflight;
