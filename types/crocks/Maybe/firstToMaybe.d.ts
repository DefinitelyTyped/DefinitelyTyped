import { UnaryFunction } from '../internal/types';
import First from '../First';
import Maybe from './Maybe';

/**
 * firstToMaybe :: First a -> Maybe a
 * firstToMaybe :: (a -> First b) -> a -> Maybe b
 */
declare function firstToMaybe(val: First): Maybe;
declare function firstToMaybe(fn: UnaryFunction): UnaryFunction;

export default firstToMaybe;
