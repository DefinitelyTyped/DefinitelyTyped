// Type definitions for geojson-vt 3.2
// Project: https://github.com/mapbox/geojson-vt
// Definitions by: Cody Duong <https://github.com/codyduong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import * as GJ from 'geojson';

declare namespace geojsonvt {
    interface Options {
        /** max zoom to preserve detail on; can't be higher than 24 */
        maxZoom?: number;
        /** simplification tolerance (higher means simpler) */
        tolerance?: number;
        /** tile extent (both width and height) */
        extent?: number;
        /** tile buffer on each side */
        buffer?: number;
        /** logging level (0 to disable, 1 or 2) */
        debug?: 0 | 1 | 2;
        /** whether to enable line metrics tracking for LineString/MultiLineString features */
        lineMetrics?: false;
        /** name of a feature property to promote to feature.id. Cannot be used with `generateId` */
        promoteId?: null | string;
        /** whether to generate feature ids. Cannot be used with `promoteId` */
        generateId?: false;
        /** max zoom in the initial tile index */
        indexMaxZoom?: number;
        /** max number of points per tile in the index */
        indexMaxPoints?: number;
    }
    enum FeatureTypes {
        Unknown = 0,
        Point,
        Linestring,
        Polygon,
    }
    type Geometry = [number, number];
    /**
     * https://github.com/mapbox/vector-tile-spec/tree/master/2.1#42-features
     */
    interface Feature {
        /**
         * A feature MUST contain a geometry field.
         */
        geometry: Geometry[];
        /**
         * A feature MAY contain an id field. If a feature has an id field, the value of the id SHOULD be unique among the features of the parent layer.
         */
        id?: `${number}`;
        /**
         * A feature MUST contain a type field as described in the Geometry Types section.
         */
        type: FeatureTypes;
        /**
         * A feature MAY contain a tags field. Feature-level metadata, if any, SHOULD be stored in the tags field.
         */
        tags?: Record<string, any>;
    }
    type Features = Feature[];
    interface Source {
        geometry: number[][];
        maxX: number;
        maxY: number;
        minX: number;
        minY: number;
        tags?: Record<string, any>;
        type?: Exclude<GJ.GeoJsonGeometryTypes, 'GeometryCollection'>; // Converts all collections to single types
    }
    /**
     * Resulting tiles conform to the JSON equivalent of the vector tile specification.
     * https://github.com/mapbox/vector-tile-spec/
     */
    interface Tile {
        features: Features;
        numPoints: number;
        numSimplified: number;
        numFeatures: number;
        source: Source | null;
        x: number;
        y: number;
        z: number;
        // z2: number -- In the development/demo distribution this is z2, but in source code it is z?;
        transformed: boolean;
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    }
    interface TileCoord {
        x: number;
        y: number;
        z: number;
    }
    type TileCoords = TileCoord[];
    type Data = GJ.GeoJSON;
}

declare class GeoJSONVT {
    constructor(data: geojsonvt.Data, options: geojsonvt.Options);

    options: geojsonvt.Options;
    /**
     * Resulting tiles conform to the JSON equivalent of the vector tile specification.
     * https://github.com/mapbox/vector-tile-spec/
     */
    tiles: Record<`${number}`, geojsonvt.Tile>;
    tileCoords: geojsonvt.TileCoords;
    total: number;
    stats: Record<`z${number}`, number>;

    /**
     * splits features from a parent tile to sub-tiles.
     * @param features
     * @param z z / zoom coordinate of the parent tile
     * @param x x coordinate of the parent tile
     * @param y y coordinate of the parent tile
     * @param cz z / zoom coordinate of the target tile
     * @param cx x coordinate of the target tile
     * @param cy y coordinate of the target tile
     */
    splitTile(features: geojsonvt.Tile, z: number, x: number, y: number, cz: number, cx: number, cy: number): void;

    /**
     * gets a tile based on coordinates
     * @param z z / zoom coordinate (supports both number or string input)
     * @param x x coordinate (supports both number or string input)
     * @param y y coordinate (supports both number or string input)
     */
    getTile(z: number | string, x: number | string, y: number | string): null | geojsonvt.Tile;
}

declare function geojsonvt(data: geojsonvt.Data, options: geojsonvt.Options): GeoJSONVT;
export = geojsonvt;
