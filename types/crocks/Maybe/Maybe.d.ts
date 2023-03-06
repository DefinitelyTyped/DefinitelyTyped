import { NullaryFunction, UnaryFunction } from '../internal/types';

interface Nothing extends Maybe {
    (): Nothing;
}

interface Just extends Maybe {
    (val: unknown): Just;
}

declare function Maybe(val: unknown): Maybe;

declare class Maybe {
    equals(val: unknown): boolean;
    concat(val: Maybe): Maybe;
    map(fn: UnaryFunction): Maybe;
    alt(val: Maybe): Maybe;
    ap(val: Maybe): Maybe;
    sequence(val: unknown): any;
    traverse(val: unknown): any;
    chain(fn: UnaryFunction): Maybe;
    coalesce(fn1: NullaryFunction, fn2: UnaryFunction): Maybe;
    bichain(fn1: NullaryFunction, fn2: UnaryFunction): Maybe;
    option(val: unknown): any;
    either(fn1: NullaryFunction, fn2: UnaryFunction): any;
    static of(val: unknown): Just;
    static zero(): Nothing;
    static Nothing: (val: unknown) => Nothing;
    static Just: (val: unknown) => Just;
}

export default Maybe;
