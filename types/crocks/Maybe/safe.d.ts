import { UnaryFunction } from '../internal/types';
import Pred from '../Pred';
import Maybe from './Maybe';

/**
 * safe :: ((b -> Boolean) | Pred) -> b -> Maybe a
 */
declare function safe(pred: UnaryFunction | Pred, val: unknown): Maybe;
declare function safe(pred: UnaryFunction | Pred): (val: unknown) => Maybe;

export default safe;
