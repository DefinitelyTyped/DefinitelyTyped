/**
 * composeS :: Semigroupoid s => (s y z, ..., s a b) -> s a z
 */
declare function composeS<Z>(f: ReadonlyArray<(y: unknown) => Z>, g: (...args: any[]) => unknown): Z;

export default composeS;
