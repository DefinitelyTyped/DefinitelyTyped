import First from '../First';
import { UnaryFunction } from '../internal/types';
import Last from './Last';

declare function firstToLast(val: First): Last;
declare function firstToLast(fn: UnaryFunction): UnaryFunction;

export default firstToLast;
