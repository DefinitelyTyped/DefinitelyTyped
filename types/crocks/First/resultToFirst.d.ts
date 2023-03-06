import { UnaryFunction } from '../internal/types';
import Result from '../Result';
import First from './First';

declare function resultToFirst(val: Result): First;
declare function resultToFirst(fn: UnaryFunction): UnaryFunction;

export default resultToFirst;
