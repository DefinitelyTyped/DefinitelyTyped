import { UnaryFunction } from '../internal/types';
import Last from '../Last';
import Either from './Either';

/**
 * lastToEither :: c -> Last a -> Either c a
 * lastToEither :: c -> (a -> Last b) -> a -> Either c a
 */
declare function lastToEither(val: Last): Either;
declare function lastToEither(fn: UnaryFunction): UnaryFunction;

export default lastToEither;
