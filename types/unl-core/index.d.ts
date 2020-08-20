// Type definitions for unl-core 2.0
// Project: https://github.com/u-n-l/core-js
// Definitions by: UNL Network B.V. <https://github.com/u-n-l>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export type Direction = 'N' | 'S' | 'E' | 'W';

export type ElevationType = 'floor' | 'heightincm';

export interface Neighbours {
    n: string;
    ne: string;
    e: string;
    se: string;
    s: string;
    sw: string;
    w: string;
    nw: string;
}

export interface Point {
    lat: number;
    lon: number;
}

export interface Bounds {
    sw: Point;
    ne: Point;
}

export interface BoundsWithElevation extends Bounds {
    elevation: number;
    elevationType: ElevationType;
}

export interface PointWithElevation extends Point {
    elevation: number;
    elevationType: ElevationType;
    bounds: BoundsWithElevation;
}

export interface EncodeOptions {
    elevation: number;
    elevationType: ElevationType;
}

export interface LocationIdWithElevation {
    locationId: string;
    elevation: number;
    elevationType: ElevationType;
}

/**
 * Encodes latitude/longitude coordinates to locationId, either to specified precision or
 * to default precision. Elevation information can be optionally specified in options parameter.
 *
 * @param   lat - Latitude in degrees.
 * @param   lon - Longitude in degrees.
 * @param   [precision] - Number of characters in resulting locationId. Default value is 9.
 * @param   [options] - Number of options. Including elevation
 * @returns LocationId of supplied latitude/longitude.
 * @throws  Invalid coordinates.
 *
 * @example
 *     var locationId = LocationId.encode(52.205, 0.119, 7); // => 'u120fxw'
 *     var locationId = LocationId.encode(52.205, 0.119, 7, { elevation: 9, elevationType: 'floor'}); // => 'u120fxw@9'
 */

export function encode(lat: number, lon: number, precision?: number, options?: EncodeOptions): string;

/**
 * Decode locationId to latitude/longitude and elevation (location is approximate centre of locationId cell,
 *     to reasonable precision).
 *
 * @param   locationId - LocationId string to be converted to latitude/longitude.
 * @returns Center of locationId and elevation.
 * @throws  Invalid locationId.
 *
 * @example
 *     var latlon = LocationId.decode('u120fxw'); // => { lat: 52.205, lon: 0.1188, elevation: 0, elevationType:  floor, bounds: {...}}
 *     var latlon = LocationId.decode('u120fxw@3'); // => { lat: 52.205, lon: 0.1188, elevation: 3, elevationType: floor, bounds: {...}}
 *     var latlon = LocationId.decode('u120fxw#87'); // => { lat: 52.205, lon: 0.1188, elevation: 87, elevationType: heightincm, bounds: {...}}
 */
export function decode(locationId: string): PointWithElevation;

/**
 * Returns SW/NE latitude/longitude bounds of specified locationId cell.
 *
 * @param   locationId - Cell that bounds are required of.
 * @returns Bounds
 * @throws  Invalid locationId.
 */
export function bounds(locationId: string): BoundsWithElevation;

/**
 * Determines adjacent cell in given direction.
 *
 * @param   locationId - Cell to which adjacent cell is required.
 * @param   direction - Direction from locationId (N/S/E/W).
 * @returns LocationId of adjacent cell.
 * @throws  Invalid locationId.
 */
export function adjacent(locationId: string, direction: Direction): string;

/**
 * Returns all 8 adjacent cells to specified locationId.
 *
 * @param   locationId - LocationId neighbours are required of.
 * @returns The neighbours
 * @throws  Invalid locationId.
 */
export function neighbours(locationId: string): Neighbours;

/**
 * Returns locationId and elevation properties.
 * It is mainly used by internal functions
 *
 * @param   locationIdWithElevation - LocationId with elevation chars.
 * @returns LocationIdWithElevation
 * @throws  Invalid locationId.
 */
export function excludeElevation(locationIdWithElevation: string): LocationIdWithElevation;

/**
 * Adds elevation chars and elevation
 * It is mainly used by internal functions
 *
 * @param   locationIdWithoutElevation - LocationId without elevation chars.
 * @param   elevation - Height of the elevation.
 * @param   elevationType - floor | heightincm.
 * @returns locationId with elevation
 * @throws  Invalid locationId.
 */
export function appendElevation(
    locationIdWithoutElevation: string,
    elevation: number,
    elevationType: ElevationType,
): string;

/**
 * Returns the vertical and horizontal lines that can be used to draw a UNL grid in the specified
 * SW/NE latitude/longitude bounds and precision. Each line is represented by an array of two
 * coordinates in the format: [[startLon, startLat], [endLon, endLat]].
 *
 * @param   bounds - The bound whithin to return the grid lines.
 * @param   [precision] - Number of characters to consider for the locationId of a grid cell. Default value is 9.
 * @returns grid lines
 */
export function gridLines(bounds: Bounds, precision?: number): Array<[[number, number], [number, number]]>;
