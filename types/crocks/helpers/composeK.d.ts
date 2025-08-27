/**
 * composeK :: Chain m => ((y -> m z), ..., (a -> m b)) -> a -> m z
 */
declare function composeK<Z>(f: ReadonlyArray<(y: unknown) => Z>, g: (...args: any[]) => unknown): Z;

export default composeK;
