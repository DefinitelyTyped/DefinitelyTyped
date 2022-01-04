import { BinaryFunction } from '../internal/types';

/**
 * liftA2 :: Applicative m => (a -> b -> c) -> m a -> m b -> m c
 */
declare function liftA2(fn: BinaryFunction): (a: unknown, b: unknown) => any;
declare function liftA2(fn: BinaryFunction): (a: unknown) => (b: unknown) => any;

export default liftA2;
