import { UnaryFunction } from '../internal/types';
import Maybe from '../Maybe';
import Last from './Last';

declare function maybeToLast(val: Maybe): Last;
declare function maybeToLast(fn: UnaryFunction): UnaryFunction;

export default maybeToLast;
