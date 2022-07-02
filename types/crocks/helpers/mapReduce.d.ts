import { BinaryFunction, UnaryFunction } from '../internal/types';

/**
 * mapReduce :: Foldable f => (a -> b) -> (c -> b -> c) -> c -> f a -> c
 */
declare function mapReduce<C>(fn1: UnaryFunction, fn2: BinaryFunction, c: C, f: any[]): C;
declare function mapReduce<C>(fn1: UnaryFunction, fn2: BinaryFunction, c: C): (f: any[]) => C;
declare function mapReduce<C>(fn1: UnaryFunction, fn2: BinaryFunction): (c: C) => (f: any[]) => C;
declare function mapReduce<C>(fn1: UnaryFunction): (fn2: BinaryFunction) => (c: C) => (f: any[]) => C;

export default mapReduce;
