import { UnaryFunction } from '../internal/types';
import Result from '../Result';
import Async from './Async';

/**
 * resultToAsync :: Result b a -> Async b a
 * resultToAsync :: (a -> Result c b) -> a -> Async c b
 */
declare function resultToAsync(val: Result): Async;
declare function resultToAsync(fn: UnaryFunction): UnaryFunction;

export default resultToAsync;
