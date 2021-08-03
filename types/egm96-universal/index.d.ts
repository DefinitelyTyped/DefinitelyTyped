// Type definitions for egm96-universal 1.0
// Project: https://github.com/nicolas-van/egm96-universal
// Definitions by: Kevin Wang <https://github.com/kevmo314>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Gets the mean sea level according to the EGM96.
 *
 * @param latitude The latitude in degrees
 * @param longitude The longitude in degrees
 * @returns The mean sea level in meters, relative to the WGS84 ellipsoid.
 */
export function meanSeaLevel(latitude: number, longitude: number): number;

/**
 * Converts a WGS84's ellipsoid-relative altitude to an EGM96-relative
 * altitude.
 *
 * @param latitude The latitude in degrees
 * @param longitude The longitude in degrees
 * @param altitude The altitude relative to the WGS84's ellipsoid in meters
 * @returns The altitude relative to EGM96 in meters
 */
export function ellipsoidToEgm96(latitude: number, longitude: number, altitude: number): number;

/**
 * Converts an EGM96-relative altitude to a WGS84's ellipsoid-relative
 * altitude.
 *
 * @param latitude The latitude in degrees
 * @param longitude The longitude in degrees
 * @param altitude The altitude relative to EGM96 in meters
 * @returns The altitude relative to the WGS84's ellipsoid in meters
 */
export function egm96ToEllipsoid(latitude: number, longitude: number, altitude: number): number;
