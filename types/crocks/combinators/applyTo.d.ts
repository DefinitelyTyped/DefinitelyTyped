/**
 * The Thrush
 * applyTo :: a -> (a -> b) -> b
 */
declare function applyTo<A, B>(val: A, fn: (x: A) => B): B;
declare function applyTo<A, B>(val: A): (fn: (x: A) => B) => B;

export default applyTo;
