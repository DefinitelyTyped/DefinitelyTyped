import Maybe from '../Maybe';

export function Tuple(val1: unknown, val2: unknown): Tuple;

export class Tuple {
    equals(val: unknown): boolean;
    concat(val: Tuple): Tuple;
    valueOf(): Maybe;
    static empty(): Tuple;
    static of(val: unknown): Tuple;
}
