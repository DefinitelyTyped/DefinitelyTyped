/**
 * psi :: (b -> b -> c) -> (a -> b) -> a -> a -> c
 */
declare function psi<A, B, C>(f: (x: B, y: B) => C, g: (a: A) => B): (x: A, y: A) => C;
declare function psi<A, B, C>(f: (x: B, y: B) => C): (g: (a: A) => B) => (x: A, y: A) => C;
declare function psi<A, B, C>(f: (x: B, y: B) => C, g: (a: A) => B): (x: A) => (y: A) => C;
declare function psi<A, B, C>(f: (x: B, y: B) => C): (g: (a: A) => B) => (x: A) => (y: A) => C;

export default psi;
