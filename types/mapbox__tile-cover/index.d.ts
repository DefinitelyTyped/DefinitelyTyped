import * as GeoJSON from "geojson";

/**
 * Given a geometry, create cells and return them in a format easily readable
 * by any software that reads GeoJSON.
 *
 * @alias geojson
 * @param geom GeoJSON geometry
 * @param limits an object with min_zoom and max_zoom properties
 * specifying the minimum and maximum level to be tiled.
 * @returns FeatureCollection of cells formatted as GeoJSON Features
 */
export function geojson(geom: GeoJSON.Geometry, limits: Limits): GeoJSON.FeatureCollection;

/**
 * Given a geometry, create cells and return them in their raw form,
 * as an array of cell identifiers.
 *
 * @alias tiles
 * @param geom GeoJSON geometry
 * @param limits an object with min_zoom and max_zoom properties
 * specifying the minimum and maximum level to be tiled.
 * @returns An array of tiles given as [x, y, z] arrays
 */
export function tiles(geom: GeoJSON.Geometry, limits: Limits): number[][];

/**
 * Given a geometry, create cells and return them as
 * [quadkey](http://msdn.microsoft.com/en-us/library/bb259689.aspx) indexes.
 *
 * @alias indexes
 * @param geom GeoJSON geometry
 * @param limits an object with min_zoom and max_zoom properties
 * specifying the minimum and maximum level to be tiled.
 * @returns An array of tiles given as quadkeys.
 */
export function indexes(geom: GeoJSON.Geometry, limits: Limits): string[];

export interface Limits {
    min_zoom: number;
    max_zoom: number;
}
