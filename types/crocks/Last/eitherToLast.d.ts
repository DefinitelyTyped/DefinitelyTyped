import Either from '../Either';
import { UnaryFunction } from '../internal/types';
import Last from './Last';

declare function eitherToLast(val: Either): Last;
declare function eitherToLast(fn: UnaryFunction): UnaryFunction;

export default eitherToLast;
