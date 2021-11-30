import { UnaryFunction } from '../internal/types';
import Last from '../Last';
import First from './First';

declare function lastToFirst(val: Last): First;
declare function lastToFirst(fn: UnaryFunction): UnaryFunction;

export default lastToFirst;
