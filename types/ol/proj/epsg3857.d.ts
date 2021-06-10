import { Extent } from '../extent';
import Projection from './Projection';

export const EXTENT: Extent;
export const HALF_SIZE: number;
/**
 * Maximum safe value in y direction
 */
export const MAX_SAFE_Y: number;
/**
 * Projections equal to EPSG:3857.
 */
export const PROJECTIONS: Projection[];
/**
 * Radius of WGS84 sphere
 */
export const RADIUS: number;
export const WORLD_EXTENT: Extent;
/**
 * Transformation from EPSG:4326 to EPSG:3857.
 */
export function fromEPSG4326(input: number[], opt_output?: number[], opt_dimension?: number): number[];
/**
 * Transformation from EPSG:3857 to EPSG:4326.
 */
export function toEPSG4326(input: number[], opt_output?: number[], opt_dimension?: number): number[];
