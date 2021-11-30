import { UnaryFunction } from '../internal/types';
import Maybe from './Maybe';

/**
 * maybeToArray :: Maybe a -> [ a ]
 * maybeToArray :: (a -> Maybe b) -> a -> [ b ]
 */
declare function maybeToArray(val: Maybe): any[];
declare function maybeToArray(fn: UnaryFunction): UnaryFunction;

export default maybeToArray;
