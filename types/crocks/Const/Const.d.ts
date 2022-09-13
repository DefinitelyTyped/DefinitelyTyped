import { UnaryFunction } from '../internal/types';

declare function Const(val: any): Const;

declare class Const {
    equals(val: unknown): boolean;
    concat(val: Const): Const;
    map(fn: UnaryFunction): Const;
    ap(val: Const): Const;
    valueOf(): any;
    static empty(): Const;
    static of(val: unknown): Const;
}

export default Const;
