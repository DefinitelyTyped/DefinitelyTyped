// Type definitions for unl-core 1.0
// Project: https://github.com/u-n-l/core-js, http://www.movable-type.co.uk/scripts/geohash.html
// Definitions by: UNL Network B.V. <https://github.com/u-n-l>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export enum Direction {
    North = "N",
    South = "S",
    East = "E",
    West = "W"
}

export enum ElevationType {
    floor = "floor",
    heightincm = "heightincm"
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

export interface GeohashWithElevation {
    elevation: number;
    elevationType: ElevationType;
    geohash: string;
}

 /**
  * Encodes latitude/longitude to geohash, either to specified precision or to automatically
  * evaluated precision.
  *
  * @param   lat - Latitude in degrees.
  * @param   lon - Longitude in degrees.
  * @param   [precision] - Number of characters in resulting geohash.
  * @param   [options] - Number of options. Including elevation
  * @returns Geohash of supplied latitude/longitude.
  * @throws  Invalid geohash.
  *
  * @example
  *     var geohash = Geohash.encode(52.205, 0.119, 7); // => 'u120fxw'
  *     var geohash = Geohash.encode(52.205, 0.119, 7, { elevation: 9, elevationType: 'floor'}); // => 'u120fxw@9'
  */

export function encode(
    latitude: number,
    longitude: number,
    precision?: number,
    options?: EncodeOptions
): string;

/**
 * Decode geohash to latitude/longitude and elevation (location is approximate centre of geohash cell,
 *     to reasonable precision).
 *
 * @param   geohash - Geohash string to be converted to latitude/longitude.
 * @returns (Center of and elevation) geohashed location.
 * @throws  Invalid geohash.
 *
 * @example
 *     var latlon = Geohash.decode('u120fxw'); // => { lat: 52.205, lon: 0.1188, elevation:0, elevationType:floor }
 *     var latlon = Geohash.decode('u120fxw@3'); // => { lat: 52.205, lon: 0.1188, elevation:3, elevationType:floor }
 *     var latlon = Geohash.decode('u120fxw#87'); // => { lat: 52.205, lon: 0.1188, elevation:87, elevationType:heightincm }
 */
export function decode(geohash: string): Point;

/**
 * Returns SW/NE latitude/longitude bounds of specified geohash.
 *
 * @param   geohash - Cell that bounds are required of.
 * @returns Bounds
 * @throws  Invalid geohash.
 */
export function bounds(geohash: string): Bounds;

/**
 * Determines adjacent cell in given direction.
 *
 * @param   geohash - Cell to which adjacent cell is required.
 * @param   direction - Direction from geohash (N/S/E/W).
 * @returns Geocode of adjacent cell.
 * @throws  Invalid geohash.
 */
export function adjacent(geohash: string, direction: Direction | string): string;

/**
 * Returns all 8 adjacent cells to specified geohash.
 *
 * @param   geohash - Geohash neighbours are required of.
 * @returns The neighbours
 * @throws  Invalid geohash.
 */
export function neighbours(geohash: string): Neighbours;

/**
 * Returns geohash and elevation properties.
 * It is mainly used by internal functions
 *
 * @param   geohashWithElevation - Geohash with elevation chars.
 * @returns GeohashWithElevation
 * @throws  Invalid geohash.
 */
export function excludeElevation(geohashWithElevation: string): GeohashWithElevation;

/**
 * Adds elevation chars and elevation
 * It is mainly used by internal functions
 *
 * @param   geohashWithoutElevation - Geohash without elevation chars.
 * @param   elevation - Height of the elevation.
 * @param   elevationType - floor | heightincm.
 * @returns
 * @throws  Invalid geohash.
 */
export function appendElevation(geohashWithoutElevation: string, elevation: number, elevationType: ElevationType): string;
