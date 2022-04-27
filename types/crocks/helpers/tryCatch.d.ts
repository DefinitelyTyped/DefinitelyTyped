import { VariadicFunction } from '../internal/types';

/**
 * tryCatch :: ((*) -> b) -> (*) -> Result e b
 */
declare function tryCatch(fn: VariadicFunction): VariadicFunction;

export default tryCatch;
