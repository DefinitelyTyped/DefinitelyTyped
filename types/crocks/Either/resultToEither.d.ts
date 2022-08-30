import { UnaryFunction } from '../internal/types';
import Result from '../Result';
import Either from './Either';

/**
 * resultToEither :: Result e a -> Either e a
 * resultToEither :: (a -> Result e b) -> a -> Either e a
 */
declare function resultToEither(val: Result): Either;
declare function resultToEither(fn: UnaryFunction): UnaryFunction;

export default resultToEither;
