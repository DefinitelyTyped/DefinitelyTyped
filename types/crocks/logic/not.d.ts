import type { PredicateFunction } from '../internal/types';
import Pred from '../Pred';

/**
 * not :: ((a -> Boolean) | Pred) -> a -> Boolean
 */
declare function not<A>(p: PredicateFunction<A> | Pred): (x: A) => boolean;

export default not;
