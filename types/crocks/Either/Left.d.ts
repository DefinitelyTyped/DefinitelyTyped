import { UnaryFunction } from '../internal/types';
import Either from './Either';

declare function Left(val: unknown): Either;

declare class Left extends Either {
    equals(val: unknown): boolean;
    concat(val: Either): Either;
    map(fn: UnaryFunction): Left;
    valueOf(): any;
}

export default Left;
