import type { PredicateFunction } from '../internal/types';
import Pred from '../Pred';

/**
 * or :: ((a -> Boolean) | Pred) -> ((a -> Boolean) | Pred) -> a -> Boolean
 */
declare function or<A>(p: PredicateFunction<A> | Pred, q: PredicateFunction<A> | Pred): (x: A) => boolean;
declare function or<A>(p: PredicateFunction<A> | Pred): (q: PredicateFunction<A> | Pred) => (x: A) => boolean;

export default or;
