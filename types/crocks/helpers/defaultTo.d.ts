/**
 * defaultTo :: a -> b -> a
 */
declare function defaultTo<A>(a: A, b: any): A;
declare function defaultTo<A>(a: A): (b: any) => A;

export default defaultTo;
