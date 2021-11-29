import { UnaryFunction } from '../internal/types';

declare function Pred(fn: UnaryFunction): Pred;

declare class Pred {
    concat(val: Pred): Pred;
    contramap(fn: UnaryFunction): Pred;
    valueOf(): UnaryFunction;
    runWith(val: unknown): boolean;
    static empty(): Pred;
}

export default Pred;
