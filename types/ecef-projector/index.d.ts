/**
 * Convert [geodetic coordinates](https://en.wikipedia.org/wiki/World_Geodetic_System) ([lat,lon, alt])
 * to [ECEF coordinates](http://en.wikipedia.org/wiki/ECEF) (cartesian [x,y,z]).
 *
 * @param latitude Latitude in degrees.
 * @param longitude Longitude in degrees.
 * @param altitude
 * @return Return `xyz` coordinates in meters.
 *
 * @example
 * import { project } from 'ecef-projector';
 *
 * const [x, y, z] = project(37.8043722, -122.2708026, 0.0);
 * console.log(x, y, z);
 * // => -2694044.411163704 -4266368.805505009 3888310.602231939
 */
export function project(latitude: number, longitude: number, altitude: number): [x: number, y: number, z: number];

/**
 * Convert [ECEF coordinates](http://en.wikipedia.org/wiki/ECEF) (cartesian [x,y,z]) to
 * [geodetic coordinates](https://en.wikipedia.org/wiki/World_Geodetic_System) ([lat,lon, alt]).
 *
 * @return Return coordinates latitude and longitude in degrees and altitude.
 *
 * @example
 * import { unproject } from 'ecef-projector';
 *
 * const [lat, lon, alt] = unproject(-2694044.411163704, -4266368.805505009, 3888310.602231939);
 * console.log(lat, lon, alt);
 * // => 37.80437220000001 -122.27080260000001 0
 */
export function unproject(x: number, y: number, z: number): [latitude: number, longitude: number, altitude: number];
