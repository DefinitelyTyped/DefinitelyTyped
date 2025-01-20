/**
 * pipeK :: Chain m => ((a -> m b), ..., (y -> m z)) -> a -> m z
 */
declare function pipeK<Z>(f: (...args: any[]) => unknown, g: ReadonlyArray<(y: unknown) => Z>): Z;

export default pipeK;
