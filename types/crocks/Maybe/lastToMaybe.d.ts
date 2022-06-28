import { UnaryFunction } from '../internal/types';
import Last from '../Last';
import Maybe from './Maybe';

/**
 * lastToMaybe :: Last a -> Maybe a
 * lastToMaybe :: (a -> Last b) -> a -> Maybe b
 */
declare function lastToMaybe(val: Last): Maybe;
declare function lastToMaybe(fn: UnaryFunction): UnaryFunction;

export default lastToMaybe;
