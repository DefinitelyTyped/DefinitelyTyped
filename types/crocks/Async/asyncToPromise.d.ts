import { UnaryFunction } from '../internal/types';
import Async from './Async';

/**
 * asyncToPromise :: Async e a -> Promise a e
 * asyncToPromise :: (a -> Async e b) -> a -> Promise b e
 */
declare function asyncToPromise(val: Async): Promise<any>;
declare function asyncToPromise(fn: UnaryFunction): UnaryFunction;

export default asyncToPromise;
