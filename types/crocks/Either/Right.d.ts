import { UnaryFunction } from '../internal/types';
import Either from './Either';

declare function Right(val: unknown): Either;

declare class Right extends Either {
    equals(val: unknown): boolean;
    concat(val: Either): Either;
    map(fn: UnaryFunction): Right;
    valueOf(): any;
}

export default Right;
