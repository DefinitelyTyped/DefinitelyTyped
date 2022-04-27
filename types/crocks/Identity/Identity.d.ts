import { UnaryFunction } from '../internal/types';

declare function Identity(val: unknown): Identity;

declare class Identity {
    equals(val: unknown): boolean;
    concat(val: Identity): Identity;
    map(fn: UnaryFunction): Identity;
    ap(val: Identity): Identity;
    sequence(val: unknown): any;
    traverse(val: unknown): any;
    chain(fn: UnaryFunction): Identity;
    valueOf(): any;
    static of(val: unknown): Identity;
}

export default Identity;
