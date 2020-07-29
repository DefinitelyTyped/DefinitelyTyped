// Type definitions for unl-core 2.0
// Project: https://github.com/u-n-l/core-js
// Definitions by: UNL Network B.V. <https://github.com/u-n-l>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export enum Direction {
    North = 'N',
    South = 'S',
    East = 'E',
    West = 'W',
}

export enum ElevationType {
    floor = 'floor',
    heightincm = 'heightincm',
}

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

export interface Bounds {
    sw: Point;
    ne: Point;
    elevation: number;
    elevationType: ElevationType;
}

export interface Point {
    lat: number;
    lon: number;
    elevation: number;
    elevationType: ElevationType;
}

export interface EncodeOptions {
    elevation: number;
    elevationType: ElevationType;
}

export interface LocationIdWithElevation {
    elevation: number;
    elevationType: ElevationType;
    locationId: string;
}

/**
 * Encodes latitude/longitude to locationId, either to specified precision or to automatically
 * evaluated precision.
 *
 * @param   lat - Latitude in degrees.
 * @param   lon - Longitude in degrees.
 * @param   [precision] - Number of characters in resulting locationId.
 * @param   [options] - Number of options. Including elevation
 * @returns LocationId of supplied latitude/longitude.
 * @throws  Invalid coordinates.
 *
 * @example
 *     var locationId = LocationId.encode(52.205, 0.119, 7); // => 'u120fxw'
 *     var locationId = LocationId.encode(52.205, 0.119, 7, { elevation: 9, elevationType: 'floor'}); // => 'u120fxw@9'
 */

export function encode(latitude: number, longitude: number, precision?: number, options?: EncodeOptions): string;

/**
 * Decode locationId to latitude/longitude and elevation (location is approximate centre of locationId cell,
 *     to reasonable precision).
 *
 * @param   locationId - LocationId string to be converted to latitude/longitude.
 * @returns Center of locationId and elevation.
 * @throws  Invalid locationId.
 *
 * @example
 *     var latlon = LocationId.decode('u120fxw'); // => { lat: 52.205, lon: 0.1188, elevation:0, elevationType:floor }
 *     var latlon = LocationId.decode('u120fxw@3'); // => { lat: 52.205, lon: 0.1188, elevation:3, elevationType:floor }
 *     var latlon = LocationId.decode('u120fxw#87'); // => { lat: 52.205, lon: 0.1188, elevation:87, elevationType:heightincm }
 */
export function decode(locationId: string): Point;

/**
 * Returns SW/NE latitude/longitude bounds of specified locationId.
 *
 * @param   locationId - Cell that bounds are required of.
 * @returns Bounds
 * @throws  Invalid locationId.
 */
export function bounds(locationId: string): Bounds;

/**
 * Determines adjacent cell in given direction.
 *
 * @param   locationId - Cell to which adjacent cell is required.
 * @param   direction - Direction from locationId (N/S/E/W).
 * @returns LocationId of adjacent cell.
 * @throws  Invalid locationId.
 */
export function adjacent(locationId: string, direction: Direction | string): string;

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
 * Returns grid lines for specified SW/NE latitude/longitude bounds and precision.
 *
 * @param   bounds - The bound whithin to return the grid lines.
 * @param   precision - Number of characters to consider for the locationId of a grid cell.
 * @returns grid lines
 */
export function gridLines(bounds: Bounds, precision: number): Array<[[number, number], [number, number]]>;
