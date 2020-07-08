/**
 * @throws {TypeError} If `x` or `y` is a `number` or they're different types.
 */
declare function SameValueNonNumber(
    x: object | null | undefined | string | boolean | symbol,
    y: object | null | undefined | string | boolean | symbol,
): boolean;
export = SameValueNonNumber;
