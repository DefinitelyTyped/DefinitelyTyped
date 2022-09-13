/**
 * pipeP :: Promise p => ((a -> p b d), ..., (y -> p z d)) -> a -> p z d
 */
declare function pipeP<Z>(f: (...args: any[]) => unknown, g: ReadonlyArray<(y: unknown) => Z>): Z;

export default pipeP;
