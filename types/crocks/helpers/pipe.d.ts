/**
 * pipe :: ((a -> b), ..., (y -> z)) -> a -> z
 */
declare function pipe<Z>(f: (...args: any[]) => unknown, g: ReadonlyArray<(y: unknown) => Z>): Z;

export default pipe;
