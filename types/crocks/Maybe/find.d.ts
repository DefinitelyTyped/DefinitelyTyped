import { UnaryFunction } from '../internal/types';
import Pred from '../Pred';
import Maybe from './Maybe';

/**
 * find :: Foldable f => ((a -> Boolean) | Pred) -> f a -> Maybe a
 */
declare function find(pred: UnaryFunction | Pred, val: any[]): Maybe;
declare function find(pred: UnaryFunction | Pred): (val: any[]) => Maybe;

export default find;
