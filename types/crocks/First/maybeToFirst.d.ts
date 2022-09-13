import { UnaryFunction } from '../internal/types';
import Maybe from '../Maybe';
import First from './First';

declare function maybeToFirst(val: Maybe): First;
declare function maybeToFirst(fn: UnaryFunction): UnaryFunction;

export default maybeToFirst;
