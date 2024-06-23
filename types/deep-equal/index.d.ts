interface DeepEqualOptions {
    strict: boolean;
}

declare function deepEqual(
    actual: any,
    expected: any,
    opts?: DeepEqualOptions,
): boolean;

export = deepEqual;
