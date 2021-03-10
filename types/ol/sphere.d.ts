import { Coordinate } from './coordinate';
import Geometry from './geom/Geometry';
import { ProjectionLike } from './proj';

/**
 * Object literal with options for the {@link getLength} or {@link getArea}
 * functions.
 */
export interface SphereMetricOptions {
    projection?: ProjectionLike;
    radius?: number;
}
/**
 * The mean Earth radius (1/3 * (2a + b)) for the WGS84 ellipsoid.
 * https://en.wikipedia.org/wiki/Earth_radius#Mean_radius
 */
export const DEFAULT_RADIUS: number;
/**
 * Get the spherical area of a geometry.  This is the area (in meters) assuming
 * that polygon edges are segments of great circles on a sphere.
 */
export function getArea(geometry: Geometry, opt_options?: SphereMetricOptions): number;
/**
 * Get the great circle distance (in meters) between two geographic coordinates.
 */
export function getDistance(c1: any[], c2: any[], opt_radius?: number): number;
/**
 * Get the spherical length of a geometry.  This length is the sum of the
 * great circle distances between coordinates.  For polygons, the length is
 * the sum of all rings.  For points, the length is zero.  For multi-part
 * geometries, the length is the sum of the length of each part.
 */
export function getLength(geometry: Geometry, opt_options?: SphereMetricOptions): number;
/**
 * Returns the coordinate at the given distance and bearing from c1.
 */
export function offset(c1: Coordinate, distance: number, bearing: number, opt_radius?: number): Coordinate;
