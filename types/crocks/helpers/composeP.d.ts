/**
 * composeP :: Promise p => ((y -> p z c), ..., (a -> p b c)) -> a -> p z c
 */
declare function composeP<Z>(f: ReadonlyArray<(y: unknown) => Array<Promise<Z>>>, g: (...args: Array<Promise<any>>) => unknown): Promise<Z>;

export default composeP;
