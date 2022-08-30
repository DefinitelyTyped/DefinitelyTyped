import { UnaryFunction } from '../internal/types';

/**
 * mreduceMap :: Monoid m, Foldable f => m -> (b -> a) -> f b -> a
 */
declare function mreduceMap(m: object, fn: UnaryFunction, f: object): any;
declare function mreduceMap(m: object, fn: UnaryFunction): (f: object) => any;
declare function mreduceMap(m: object): (fn: UnaryFunction) => (f: object) => any;

export default mreduceMap;
