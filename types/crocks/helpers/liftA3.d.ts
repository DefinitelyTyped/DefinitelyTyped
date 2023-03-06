import { TernaryFunction } from '../internal/types';

/**
 * liftA3 :: Applicative m => (a -> b -> c -> d) -> m a -> m b -> m c -> m d
 */
declare function liftA3(fn: TernaryFunction): (a: unknown, b: unknown, c: unknown) => any;
declare function liftA3(fn: TernaryFunction): (a: unknown, b: unknown) => (c: unknown) => any;
declare function liftA3(fn: TernaryFunction): (a: unknown) => (b: unknown) => (c: unknown) => any;

export default liftA3;
