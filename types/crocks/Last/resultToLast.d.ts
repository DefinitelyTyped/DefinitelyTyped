import { UnaryFunction } from '../internal/types';
import Result from '../Result';
import Last from './Last';

declare function resultToLast(val: Result): Last;
declare function resultToLast(fn: UnaryFunction): UnaryFunction;

export default resultToLast;
