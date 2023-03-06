import { BinaryFunction, UnaryFunction } from '../internal/types';

declare function Equiv(fn: (val1: unknown, val2: unknown) => boolean): Equiv;

declare class Equiv {
    concat(val: Equiv): Equiv;
    contramap(fn: UnaryFunction): Equiv;
    compareWith(val1: unknown, val2: unknown): boolean;
    compareWith(val1: unknown): (val2: unknown) => boolean;
    valueOf(): BinaryFunction;
    static empty(): Equiv;
}

export default Equiv;
