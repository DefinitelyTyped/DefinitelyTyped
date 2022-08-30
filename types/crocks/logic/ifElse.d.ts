import type { PredicateFunction } from '../internal/types';
import Pred from '../Pred';

/**
 * ifElse :: ((a -> Boolean) | Pred a) -> (a -> b) -> (a -> b) -> a -> b
 */
declare function ifElse<A, C>(p: PredicateFunction<A> | Pred, f: (x: A) => any, g: (x: A) => C): (x: A) => A | C;
declare function ifElse<A, C>(p: PredicateFunction<A> | Pred, f: (x: A) => any): (g: (x: A) => C) => (x: A) => A | C;
declare function ifElse<A, C>(p: PredicateFunction<A> | Pred): (f: (x: A) => any) => (g: (x: A) => C) => (x: A) => A | C;

export default ifElse;
