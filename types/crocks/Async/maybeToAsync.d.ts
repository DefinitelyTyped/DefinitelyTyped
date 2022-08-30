import { UnaryFunction } from '../internal/types';
import Maybe from '../Maybe';
import Async from './Async';

/**
 * maybeToAsync :: e -> Maybe a -> Async e a
 * maybeToAsync :: e -> (a -> Maybe b) -> a -> Async e b
 */
declare function maybeToAsync(val: Maybe): Async;
declare function maybeToAsync(fn: UnaryFunction): UnaryFunction;

export default maybeToAsync;
