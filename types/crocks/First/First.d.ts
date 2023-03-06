import Maybe from '../Maybe';

declare function First(val: unknown): First;

declare class First {
    equals(val: unknown): boolean;
    concat(val: First): First;
    option(val: unknown): any;
    valueOf(): Maybe;
    static empty(): First;
    static of(val: unknown): First;
}

export default First;
