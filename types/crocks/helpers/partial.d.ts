import { VariadicFunction } from '../internal/types';

/**
 * partial :: (((*) -> c), *) -> (*) -> c
 */
declare function partial(fn: VariadicFunction, ...args: unknown[]): VariadicFunction;

export default partial;
