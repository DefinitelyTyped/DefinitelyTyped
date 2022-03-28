/**
 * The Starling
 * substitution :: (a -> b -> c) -> (a -> b) -> a -> c
 */
declare function substitution<A, B, C>(f: (a: A, b: B) => C, g: (a: A) => B, x: A): C;
declare function substitution<A, B, C>(f: (a: A, b: B) => C, g: (a: A) => B): (x: A) => C;
declare function substitution<A, B, C>(f: (a: A, b: B) => C): (g: (a: A) => B) => (x: A) => C;

export default substitution;
