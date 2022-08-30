import { UnaryFunction } from '../internal/types';
import Pred from '../Pred';
import Maybe from './Maybe';

/**
 * safeLift :: ((c -> Boolean) | Pred) -> (a -> b) -> c -> Maybe b
 */
declare function safeLift(pred: UnaryFunction | Pred, fn: UnaryFunction, val: unknown): Maybe;
declare function safeLift(pred: UnaryFunction | Pred, fn: UnaryFunction): (val: unknown) => Maybe;
declare function safeLift(pred: UnaryFunction | Pred): (fn: UnaryFunction) => (val: unknown) => Maybe;

export default safeLift;
