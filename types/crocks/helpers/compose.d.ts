/**
 * compose :: ((y -> z), ..., (a -> b)) -> a -> z
 */
declare function compose<Z>(f: ReadonlyArray<(y: unknown) => Z>, g: (...args: any[]) => unknown): Z;

export default compose;
