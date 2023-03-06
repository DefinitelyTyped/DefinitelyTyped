import { UnaryFunction } from '../internal/types';
import Last from '../Last';
import Async from './Async';

/**
 * lastToAsync :: e -> Last a -> Async e a
 * lastToAsync :: e -> (a -> Last b) -> a -> Async e b
 */
declare function lastToAsync(val: Last): Async;
declare function lastToAsync(fn: UnaryFunction): UnaryFunction;

export default lastToAsync;
