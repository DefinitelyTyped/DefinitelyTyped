import { UnaryFunction, VariadicFunction } from '../internal/types';

declare function Arrow(fn: VariadicFunction): Arrow;

declare class Arrow {
    both(): Arrow;
    compose(val: Arrow): Arrow;
    contramap(fn: UnaryFunction): Arrow;
    first(): Arrow;
    map(fn: UnaryFunction): Arrow;
    promap(fn1: UnaryFunction, fn2: UnaryFunction): Arrow;
    runWith(val: unknown): any;
    second(): Arrow;
    static id(): Arrow;
}

export default Arrow;
