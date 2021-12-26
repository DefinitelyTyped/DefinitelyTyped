import type { BinaryFunction, UnaryFunction } from '../internal/types';

/**
 * The Phoenix or Starling Prime
 * converge :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
 */
declare function converge(f: BinaryFunction, g: UnaryFunction, h: UnaryFunction): UnaryFunction;
declare function converge(f: BinaryFunction, g: UnaryFunction): (h: UnaryFunction) => UnaryFunction;
declare function converge(f: BinaryFunction): (g: UnaryFunction) => (h: UnaryFunction) => UnaryFunction;

export default converge;
