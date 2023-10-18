export type Direction = "N" | "S" | "E" | "W";

export type ElevationType = "floor" | "heightincm";

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
    n: number;
    e: number;
    s: number;
    w: number;
}

export interface PointWithElevation extends Point {
    elevation: number;
    elevationType: ElevationType;
    bounds: Bounds;
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

export interface Address {
    geohash: string;
    words: string;
    coordinates: PointWithElevation;
    bounds: Bounds;
}

export interface Polyhash {
    precision: number;
    data: string[];
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
 * Returns N/S latitudes & E/W longitudes bounding the specified locationId cell.
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
 * N,E,S,W bounds and precision. Each line is represented by an array of two
 * coordinates in the format: [[startLon, startLat], [endLon, endLat]].
 *
 * @param   bounds - The bounds whose grid-lines are requested
 * @param   [precision] - Number of characters to consider for the locationId of a grid cell. Default value is 9.
 * @returns grid lines
 */
export function gridLines(bounds: Bounds, precision?: number): Array<[[number, number], [number, number]]>;

/**
 * Returns the human-readable address of a given location (either coordinates or UNL cell id)
 *
 * @param location - the location (Id or lat-lon coordinates) of the point for which you would like the address
 * @param apiKey - Your UNL API key used to access the location APIs
 * @param langCode - 2 letter language code of response (default: en)
 * @param count - the number of words in the returned address (only valid for coordinate calls)
 */
export function toWords(location: string, apiKey: string, langCode: string, count: number): Address;

/**
 * Returns the coordinates of a given address
 *
 * @param words - the words representing the point for which you would like the coordinates
 * @param apiKey - Your UNL API key used to access the location APIs
 * @param langCode - 2 letter language code of response (default: en)
 */
export function fromWords(words: string, apiKey: string, langCode: string): Address;

// Polyhash

/**
 * Converts an array of points into a Polyhash, locationId-polygon
 *
 * @param points - An array of latitude longitude coordinates, making up a polygon
 * @param locationIdPrecision - The precision of the output locationId polygon (Polyhash)
 * @param shouldDeflate - if false, returned Polyhash will have full-length, inflated locationIds (default: false)
 */
export function toPolyhash(points: number[][], locationIdPrecision: number): Polyhash[];

/**
 * Returns an array of coordinates, the polygon represented by the given Polyhash
 *
 * @param polyhash - The Polyhash object to be turned back into coordinates
 */
export function toCoordinates(polyhash: string[]): number[][];

/**
 * Compress the given Polyhash object
 *
 * @param polyhash - The Polyhash object to be compressed
 */
export function compressPolyhash(polyhash: Polyhash[]): string;

/**
 * Return the Polyhash object represented by the compressed signature
 *
 * @param compressedPolyhash
 */
export function decompressPolyhash(compressedPolyhash: string): string[];

/**
 * Convert the given polygon into a cluster of locationIds
 *
 * @param points
 * @param locationIdPrecision
 */
export function toCluster(points: number[][], locationIdPrecision: number): Polyhash[];

/**
 * Convert a list of deflated locationIds into its full-length equivalent
 * @param deflatedList
 */
export function inflate(deflatedList: Polyhash[]): string[];

/**
 * Return a deflated list of locationIds
 *
 * @param locationIds
 */
export function deflate(locationIds: string[]): Polyhash[];

/**
 * Convert locationId array into Polyhash, removes the common prefix and group them by precision
 * @param locationIds
 */
export function groupByPrefix(locationIds: string[]): string[][];
