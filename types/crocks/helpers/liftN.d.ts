import { VariadicFunction } from '../internal/types';

/**
 * liftN :: Applicative m => Number -> ((*) -> a) -> (*m) -> m a
 */
declare function liftN(n: number, fn: VariadicFunction): VariadicFunction;

export default liftN;
