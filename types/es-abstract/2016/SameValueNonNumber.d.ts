/**
 * @throws {TypeError} If `x` or `y` is a `number` or they're different types.
 */
declare function SameValueNonNumber(
    x: string | boolean | symbol | object | null | undefined,
    y: string | boolean | symbol | object | null | undefined,
): boolean;
export = SameValueNonNumber;
