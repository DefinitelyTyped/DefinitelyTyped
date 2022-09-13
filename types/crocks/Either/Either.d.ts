import { UnaryFunction } from '../internal/types';

declare function Either(val: any): Either;

declare class Either {
    equals(val: unknown): boolean;
    concat(val: Either): Either;
    map(fn: UnaryFunction): Either;
    alt(val: Either): Either;
    bimap(fn1: UnaryFunction, fn2: UnaryFunction): Either;
    ap(val: Either): Either;
    sequence(val: unknown): any;
    traverse(val: unknown): any;
    chain(fn: UnaryFunction): Either;
    coalesce(fn1: UnaryFunction, fn2: UnaryFunction): Either;
    bichain(fn1: UnaryFunction, fn2: UnaryFunction): Either;
    swap(fn1: UnaryFunction, fn2: UnaryFunction): Either;
    either(fn1: UnaryFunction, fn2: UnaryFunction): any;
    valueOf(): any;
    static of(val: unknown): Either;
    static Left(val: unknown): Either;
    static Right(val: unknown): Either;
}

export default Either;
