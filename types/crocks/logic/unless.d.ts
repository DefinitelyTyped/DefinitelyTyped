import type { PredicateFunction } from '../internal/types';
import Pred from '../Pred';

/**
 * unless :: ((a -> Boolean) | Pred) -> (a -> a) -> a -> a
 */
declare function unless<A, B>(p: PredicateFunction<A> | Pred, f: (x: A) => B): (x: A) => A | B;
declare function unless<A, B>(p: PredicateFunction<A> | Pred): (f: (x: A) => B) => (x: A) => A | B;

export default unless;
