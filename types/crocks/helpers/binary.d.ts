/**
 * binary :: ((*) -> c) -> a -> b -> c
 */
declare function binary<C>(fn: (...args: readonly any[]) => C): (a: any, b: any) => C;
declare function binary<C>(fn: (...args: readonly any[]) => C): (a: any) => (b: any) => C;

export default binary;
