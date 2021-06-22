import Projection from './Projection';

/**
 * Add a projection to the cache.
 */
export function add(code: string, projection: Projection): void;
/**
 * Clear the projections cache.
 */
export function clear(): void;
/**
 * Get a cached projection by code.
 */
export function get(code: string): Projection;
