// Type definitions for @mapbox/tile-cover 3.0
// Project: https://github.com/mapbox/tile-cover
// Definitions by: Jeff Dye <https://github.com/jeffbdye>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="geojson"/>

declare module '@mapbox/tile-cover' {
    /**
     * Given a geometry, create cells and return them in a format easily readable
     * by any software that reads GeoJSON.
     *
     * @alias geojson
     * @param {GeoJSON.Geometry} geom GeoJSON geometry
     * @param {Limits} limits an object with min_zoom and max_zoom properties
     * specifying the minimum and maximum level to be tiled.
     * @returns {GeoJSON.FeatureCollection} FeatureCollection of cells formatted as GeoJSON Features
     */
    export function geojson(geom: GeoJSON.Geometry, limits: Limits): GeoJSON.FeatureCollection;

    /**
     * Given a geometry, create cells and return them in their raw form,
     * as an array of cell identifiers.
     *
     * @alias tiles
     * @param {GeoJSON.Geometry} geom GeoJSON geometry
     * @param {Limits} limits an object with min_zoom and max_zoom properties
     * specifying the minimum and maximum level to be tiled.
     * @returns {Array<Array<number>>} An array of tiles given as [x, y, z] arrays
     */
    export function tiles(geom: GeoJSON.Geometry, limits: Limits): Array<Array<number>>;


    /**
     * Given a geometry, create cells and return them as
     * [quadkey](http://msdn.microsoft.com/en-us/library/bb259689.aspx) indexes.
     *
     * @alias indexes
     * @param {GeoJSON.Geometry} geom GeoJSON geometry
     * @param {Limits} limits an object with min_zoom and max_zoom properties
     * specifying the minimum and maximum level to be tiled.
     * @returns {Array<String>} An array of tiles given as quadkeys.
     */
    export function indexes(geom: GeoJSON.Geometry, limits: Limits): Array<string>;

    interface Limits {
        min_zoom: number;
        max_zoom: number;
    }
}
