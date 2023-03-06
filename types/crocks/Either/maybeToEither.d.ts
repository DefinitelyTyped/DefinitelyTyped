import { UnaryFunction } from '../internal/types';
import Maybe from '../Maybe';
import Either from './Either';

/**
 * maybeToEither :: c -> Maybe a -> Either c a
 * maybeToEither :: c -> (a -> Maybe b) -> a -> Either c a
 */
declare function maybeToEither(val: Maybe): Either;
declare function maybeToEither(fn: UnaryFunction): UnaryFunction;

export default maybeToEither;
