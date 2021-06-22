import { Extent } from '../extent';
import Projection from './Projection';

/**
 * Extent of the EPSG:4326 projection which is the whole world.
 */
export const EXTENT: Extent;
export const METERS_PER_UNIT: number;
/**
 * Projections equal to EPSG:4326.
 */
export const PROJECTIONS: Projection[];
/**
 * Semi-major radius of the WGS84 ellipsoid.
 */
export const RADIUS: number;
