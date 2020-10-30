import { TransformFunction } from '../proj';
import Projection from './Projection';

/**
 * Registers a conversion function to convert coordinates from the source
 * projection to the destination projection.
 */
export function add(source: Projection, destination: Projection, transformFn: TransformFunction): void;
/**
 * Clear the transform cache.
 */
export function clear(): void;
/**
 * Get a transform given a source code and a destination code.
 */
export function get(sourceCode: string, destinationCode: string): TransformFunction | undefined;
/**
 * Unregisters the conversion function to convert coordinates from the source
 * projection to the destination projection.  This method is used to clean up
 * cached transforms during testing.
 */
export function remove(source: Projection, destination: Projection): TransformFunction;
