/**
 * pipeS :: Semigroupoid s => (s a b, ..., s y z) -> s a z
 */
declare function pipeS<Z>(f: (...args: any[]) => unknown, g: ReadonlyArray<(y: unknown) => Z>): Z;

export default pipeS;
