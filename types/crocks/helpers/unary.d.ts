import { UnaryFunction, VariadicFunction } from '../internal/types';

/**
 * unary :: ((*) -> b) -> a -> b
 */
declare function unary(fn: VariadicFunction): UnaryFunction;

export default unary;
