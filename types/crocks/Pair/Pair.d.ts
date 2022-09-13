import { BinaryFunction, UnaryFunction } from '../internal/types';

declare function Pair(val1: unknown, val2: unknown): Pair;

declare class Pair {
    equals(val: unknown): boolean;
    concat(val: Pair): Pair;
    map(fn: UnaryFunction): Pair;
    bimap(fn1: UnaryFunction, fn2: UnaryFunction): Pair;
    ap(val: Pair): Pair;
    chain(fn: (val: unknown) => Pair): Pair;
    sequence(val: unknown): any;
    traverse(val: unknown): any;
    extend(fn: (val: Pair) => any): Pair;
    swap(fn1: UnaryFunction, fn2: UnaryFunction): Pair;
    fst(): any;
    snd(): any;
    toArray(): [any, any];
    merge(fn: BinaryFunction): any;
}

export default Pair;
