/**
 * isNil :: a -> Boolean
 */
declare function isNil(val: unknown): val is undefined | null | typeof NaN;

export default isNil;
