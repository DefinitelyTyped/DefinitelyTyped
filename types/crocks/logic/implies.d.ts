import type { PredicateFunction } from '../internal/types';
import Pred from '../Pred';

/**
 * implies :: ((a -> Boolean) | Pred a) -> ((a -> Boolean) | Pred a) -> a -> Boolean
 */
declare function implies<A>(p: PredicateFunction<A> | Pred, q: PredicateFunction<A> | Pred): (x: A) => boolean;
declare function implies<A>(p: PredicateFunction<A> | Pred): (q: PredicateFunction<A> | Pred) => (x: A) => boolean;

export default implies;
