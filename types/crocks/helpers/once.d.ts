import { VariadicFunction } from '../internal/types';

/**
 * once :: ((*) -> a) -> ((*) -> a)
 */
declare function once(fn: VariadicFunction): VariadicFunction;

export default once;
