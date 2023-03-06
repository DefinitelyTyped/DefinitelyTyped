import { VariadicFunction } from '../internal/types';

/**
 * curry :: ((a, b, ...) -> z) -> a -> b -> ... -> z
 */
declare function curry(fn: VariadicFunction): any;

export default curry;
