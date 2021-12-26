import Maybe from '../Maybe';

declare function Last(val: unknown): Last;

declare class Last {
    equals(val: unknown): boolean;
    concat(val: Last): Last;
    option(val: unknown): any;
    valueOf(): Maybe;
    static empty(): Last;
    static of(val: unknown): Last;
}

export default Last;
