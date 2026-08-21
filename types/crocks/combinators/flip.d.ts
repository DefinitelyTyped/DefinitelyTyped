/**
 * The Cardinal
 * flip :: (a -> b -> c) -> b -> a -> c
 */
declare function flip<A, B, C>(f: (a: A, b: B) => C): (y: B, x: A) => C;
declare function flip<A, B, C>(f: (a: A, b: B) => C): (y: B) => (x: A) => C;

export default flip;
