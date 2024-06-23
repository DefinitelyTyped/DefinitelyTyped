/**
 * tap :: (a -> b) -> a -> a
 */
declare function tap<A>(fn: (a: A) => any): (a: A) => A;

export default tap;
