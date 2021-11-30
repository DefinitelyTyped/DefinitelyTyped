import Either from '../Either';
import { UnaryFunction } from '../internal/types';
import First from './First';

declare function eitherToFirst(val: Either): First;
declare function eitherToFirst(fn: UnaryFunction): UnaryFunction;

export default eitherToFirst;
