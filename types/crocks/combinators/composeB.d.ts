/**
 * The Bluebird
 * composeB :: (b -> c) -> (a -> b) -> a -> c
 */
declare function composeB<A, B, C>(f: (b: B) => C, g: (a: A) => B): (x: A) => C;
declare function composeB<A, B, C>(f: (b: B) => C): (g: (a: A) => B) => (x: A) => C;

export default composeB;
