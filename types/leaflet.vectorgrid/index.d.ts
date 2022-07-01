// Type definitions for leaflet.vectorgrid 1.3
// Project: https://github.com/IvanSanchez/Leaflet.VectorGrid#readme
// Definitions by: Adrian Cerbaro <https://github.com/adrianbrs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as L from 'leaflet';
import * as GeoJSON from 'geojson';
import { VectorTile } from '@mapbox/vector-tile';
import { TopoJSON } from 'topojson-specification';

declare module 'leaflet' {
    namespace Canvas {
        /**
         * `VectorGrid.Renderer` implementation class to render vector tiles with `<canvas>`
         */
        class Tile extends Canvas implements VectorGrid.Renderer {
            constructor(tileCoord: Coords, tileSize: Point, options?: RendererOptions);

            getCoord(): Coords;
            getContainer(): HTMLCanvasElement;
            getOffset(): Coords;
        }
    }

    namespace canvas {
        /**
         * `VectorGrid.RendererFactory` to render vector tiles with `<canvas>`
         */
        function tile(tileCoord: Coords, tileSize: Point, options?: RendererOptions): Canvas.Tile;
    }

    namespace SVG {
        /**
         * `VectorGrid.Renderer` implementation class to render vector tiles with SVG
         */
        class Tile extends SVG implements VectorGrid.Renderer {
            constructor(tileCoord: Coords, tileSize: Point, options?: RendererOptions);

            getCoord(): Coords;
            getContainer(): HTMLElement & SVGElement;
        }
    }

    namespace svg {
        /**
         * `VectorGrid.RendererFactory` to render vector tiles with SVG
         */
        function tile(tileCoord: Coords, tileSize: Point, options?: RendererOptions): SVG.Tile;
    }

    namespace VectorGrid {
        // tslint:disable-next-line:no-unnecessary-qualifier
        interface Renderer extends L.Renderer {
            getCoord(): Coords;
            getContainer(): HTMLElement;
        }

        interface RendererFactory<T extends Options = Options> {
            (tileCoord: Coords, tileSize: Point, options: T): Renderer;
        }

        type VectorTileLayerStyle = PathOptions | PathOptions[];

        interface VectorTileLayerStyleFactory {
            /**
             * A function for styling features dynamically, depending on their properties,
             * the map's zoom level, and the layer's geometry dimension (point, line, polygon)
             */
            (properties: GeoJSON.GeoJsonProperties, zoom: number, geometryDimension?: number): VectorTileLayerStyle;
        }

        /**
         * A layer style can be either:
         * - A set of `L.Path` options
         * - An array of sets of `L.Path` options
         * - A function that returns a set of `L.Path` options
         * - A function that returns an array of sets of `L.Path` options for point, line, and polygon styles respectively
         *
         * Layers with no style specified will use the default `L.Path` options.
         *
         * Polylines and polygons can be styled exactly like normal Leaflet `L.Path`, points can be styled like polygons using `L.CircleMarkers` or `L.Icons`.
         */
        interface VectorTileLayerStyles {
            [layerName: string]: VectorTileLayerStyle | VectorTileLayerStyleFactory;
        }

        /**
         * `VectorGrid` constructor options.
         */
        interface Options extends GridLayerOptions {
            /**
             * A factory method which will be used to instantiate the per-tile renderers.
             *
             * @default L.svg.tile
             */
            rendererFactory?: RendererFactory<this> | undefined;

            /**
             * A data structure holding initial symbolizer definitions for the vector features.
             *
             * A layer style can be either:
             * - A set of `L.Path` options
             * - An array of sets of `L.Path` options
             * - A function that returns a set of `L.Path` options
             * - A function that returns an array of sets of `L.Path` options for point, line, and polygon styles respectively
             *
             * Layers with no style specified will use the default `L.Path` options.
             *
             * Polylines and polygons can be styled exactly like normal Leaflet `L.Path`, points can be styled like polygons using `L.CircleMarkers` or `L.Icons`.
             *
             * @see {@link https://leaflet.github.io/Leaflet.VectorGrid/vectorgrid-api-docs.html#styling-vectorgrids}
             * @default {}
             */
            vectorTileLayerStyles?: VectorTileLayerStyles | undefined;

            /**
             * Whether this [`VectorGrid`](https://leaflet.github.io/Leaflet.VectorGrid/vectorgrid-api-docs.html#vectorgrid)
             * fires Interactive Layer events.
             *
             * @default false
             */
            interactive?: boolean | undefined;

            /**
             * A function that, given a vector feature, returns an unique identifier for it,
             * e.g. function(feat) { return feat.properties.uniqueIdField; }.
             * Must be defined for setFeatureStyle to work.
             */
            getFeatureId?: ((feature: GeoJSON.Feature) => string | number) | undefined;
        }

        /**
         * `VectorGrid.Slicer` options.
         *
         * Additionally to the [`VectorGrid`](https://leaflet.github.io/Leaflet.VectorGrid/vectorgrid-api-docs.html#vectorgrid) options,
         * [`VectorGrid.Slicer`](https://leaflet.github.io/Leaflet.VectorGrid/vectorgrid-api-docs.html#vectorgrid-slicer)
         * can take in any of the [geojson-vt options](https://github.com/mapbox/geojson-vt#options).
         */
        interface SlicerOptions extends Options {
            /**
             * Vector tiles contain a set of data layers, and those data layers contain features.
             * Thus, the slicer creates one data layer, with the name given in this option.
             * This is important for symbolizing the data.
             *
             * @default 'sliced'
             */
            vectorTileLayerName?: string | undefined;

            // ========== geojson-vt options ========== //

            /**
             * Max zoom to preserve detail on; can't be higher than `24`.
             *
             * @external geojson-vt
             * @see {@link https://github.com/mapbox/geojson-vt#options}
             * @default 14
             */
            maxZoom?: number | undefined;

            /**
             * Simplification tolerance (higher means simpler).
             *
             * @external geojson-vt
             * @see {@link https://github.com/mapbox/geojson-vt#options}
             * @default 3
             */
            tolerance?: number | undefined;

            /**
             * Tile extent (both width and height).
             *
             * @external geojson-vt
             * @see {@link https://github.com/mapbox/geojson-vt#options}
             * @default 4096
             */
            extent?: number | undefined;

            /**
             * Tile buffer on each side.
             *
             * @external geojson-vt
             * @see {@link https://github.com/mapbox/geojson-vt#options}
             * @default 64
             */
            buffer?: number | undefined;

            /**
             * Logging level (0 to disable, 1 or 2).
             *
             * @external geojson-vt
             * @see {@link https://github.com/mapbox/geojson-vt#options}
             * @default 0
             */
            debug?: number | undefined;

            /**
             * Whether to enable line metrics tracking for LineString/MultiLineString features.
             *
             * @external geojson-vt
             * @see {@link https://github.com/mapbox/geojson-vt#options}
             * @default false
             */
            lineMetrics?: boolean | undefined;

            /**
             * Name of a feature property to promote to feature.id. Cannot be used with `generateId`.
             *
             * @external geojson-vt
             * @see {@link https://github.com/mapbox/geojson-vt#options}
             * @default null
             */
            promoteId?: string | number | null | undefined;

            /**
             * Whether to generate feature ids. Cannot be used with `promoteId`.
             *
             * @external geojson-vt
             * @see {@link https://github.com/mapbox/geojson-vt#options}
             * @default false
             */
            generateId?: boolean | undefined;

            /**
             * Max zoom in the initial tile index.
             *
             * @external geojson-vt
             * @see {@link https://github.com/mapbox/geojson-vt#options}
             * @default 5
             */
            indexMaxZoom?: number | undefined;

            /**
             * Max number of points per tile in the index.
             *
             * @external geojson-vt
             * @see {@link https://github.com/mapbox/geojson-vt#options}
             * @default 100000
             */
            indexMaxPoints?: number | undefined;
        }

        /**
         * A `VectorGrid` for slicing up big GeoJSON or TopoJSON documents in vector
         * tiles, leveraging [`geojson-vt`](https://github.com/mapbox/geojson-vt).
         *
         * @example
         *
         * ```
         * var geoJsonDocument = {
         * 	type: 'FeatureCollection',
         * 	features: [ ... ]
         * };
         *
         * L.vectorGrid.slicer(geoJsonDocument, {
         * 	vectorTileLayerStyles: {
         * 		sliced: { ... }
         * 	}
         * }).addTo(map);
         *
         * ```
         *
         * `VectorGrid.Slicer` can also handle [TopoJSON](https://github.com/mbostock/topojson) transparently:
         * ```js
         * var layer = L.vectorGrid.slicer(topojson, options);
         * ```
         *
         * The TopoJSON format [implicitly groups features into "objects"](https://github.com/mbostock/topojson-specification/blob/master/README.md#215-objects).
         * These will be transformed into vector tile layer names when styling (the
         * `vectorTileLayerName` option is ignored when using TopoJSON).
         *
         */
        class Slicer extends VectorGrid {
            constructor(data: GeoJSON.GeoJSON | TopoJSON, options?: SlicerOptions);
            protected _getVectorTilePromise(coords: Coords): Promise<VectorTile>;

            options: SlicerOptions;
        }

        /**
         * `VectorGrid.Protobuf` options.
         *
         * As with `L.TileLayer`, the URL template might contain a reference to any option.
         */
        interface ProtobufOptions extends Options {
            /**
             * Akin to the subdomains option for L.TileLayer.
             *
             * @default 'abc'
             */
            subdomains?: string | string[] | undefined;

            /**
             * As with `L.TileLayer`, the URL template might contain a reference to any option.
             */
            [key: string]: any;
        }

        /**
         * A `VectorGrid` for vector tiles fetched from the internet.
         * Tiles are supposed to be protobufs (AKA "protobuffer" or "Protocol Buffers"),
         * containing data which complies with the
         * [MapBox Vector Tile Specification](https://github.com/mapbox/vector-tile-spec/tree/master/2.1).
         *
         * This is the format used by:
         * - Mapbox Vector Tiles
         * - Mapzen Vector Tiles
         * - ESRI Vector Tiles
         * - [OpenMapTiles hosted Vector Tiles](https://openmaptiles.com/hosting/)
         *
         * @example
         *
         * You must initialize a `VectorGrid.Protobuf` with a URL template, just like in
         * `L.TileLayer`s. The difference is that the template must point to vector tiles
         * (usually `.pbf` or `.mvt`) instead of raster (`.png` or `.jpg`) tiles, and that
         * you should define the styling for all the features.
         *
         * For OpenMapTiles, with a key from [https://openmaptiles.org/docs/host/use-cdn/](https://openmaptiles.org/docs/host/use-cdn/),
         * initialization looks like this:
         *
         * ```
         * L.vectorGrid.protobuf("https://free-{s}.tilehosting.com/data/v3/{z}/{x}/{y}.pbf.pict?key={key}", {
         * 	vectorTileLayerStyles: { ... },
         * 	subdomains: "0123",
         * 	key: 'abcdefghi01234567890',
         * 	maxNativeZoom: 14
         * }).addTo(map);
         * ```
         *
         * And for Mapbox vector tiles, it looks like this:
         *
         * ```
         * L.vectorGrid.protobuf("https://{s}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token={token}", {
         * 	vectorTileLayerStyles: { ... },
         * 	subdomains: "abcd",
         * 	token: "pk.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTS.TUVWXTZ0123456789abcde"
         * }).addTo(map);
         * ```
         */
        class Protobuf extends VectorGrid {
            constructor(url: string, options?: ProtobufOptions);
            protected _getVectorTilePromise(coords: Coords): Promise<VectorTile>;

            options: ProtobufOptions;
        }
    }

    /**
     * A [`VectorGrid`](https://leaflet.github.io/Leaflet.VectorGrid/vectorgrid-api-docs.html#vectorgrid)
     * is a generic, abstract class for displaying tiled vector data. it provides facilities for symbolizing
     * and rendering the data in the vector tiles, but lacks the functionality to fetch the vector tiles
     * from wherever they are.
     */
    abstract class VectorGrid extends GridLayer {
        constructor(options: VectorGrid.Options);

        options: VectorGrid.Options;

        /**
         * Given the unique ID for a vector features (as per the getFeatureId option), re-symbolizes
         * that feature across all tiles it appears in. Reverts the effects of a previous setFeatureStyle call.
         */
        setFeatureStyle(id: string | number, layerStyle: PathOptions): this;

        /**
         * Returns an array of strings, with all the known names of data layers in the vector tiles displayed.
         * Useful for introspection.
         */
        getDataLayerNames(): string[];

        /**
         * Given a coords object in the form of {x: Number, y: Number, z: Number}, this function must return a
         * Promise for a vector tile.
         */
        protected abstract _getVectorTilePromise(coords: Coords, tileBounds: LatLngBounds): Promise<VectorTile>;
    }

    /**
     * A `VectorGrid` is a generic, abstract class for displaying tiled vector data.
     * it provides facilities for symbolizing and rendering the data in the vector tiles,
     * but lacks the functionality to fetch the vector tiles from wherever they are.
     */
    function vectorGrid(options: VectorGrid.Options): VectorGrid;

    namespace vectorGrid {
        /**
         * Instantiates a new slicer VectorGrid with the given data and options.
         *
         * A `VectorGrid` for slicing up big GeoJSON or TopoJSON documents in vector
         * tiles, leveraging [`geojson-vt`](https://github.com/mapbox/geojson-vt).
         *
         * @example
         *
         * ```
         * var geoJsonDocument = {
         * 	type: 'FeatureCollection',
         * 	features: [ ... ]
         * };
         *
         * L.vectorGrid.slicer(geoJsonDocument, {
         * 	vectorTileLayerStyles: {
         * 		sliced: { ... }
         * 	}
         * }).addTo(map);
         *
         * ```
         *
         * `VectorGrid.Slicer` can also handle [TopoJSON](https://github.com/mbostock/topojson) transparently:
         * ```js
         * var layer = L.vectorGrid.slicer(topojson, options);
         * ```
         *
         * The TopoJSON format [implicitly groups features into "objects"](https://github.com/mbostock/topojson-specification/blob/master/README.md#215-objects).
         * These will be transformed into vector tile layer names when styling (the
         * `vectorTileLayerName` option is ignored when using TopoJSON).
         *
         */
        function slicer(data: GeoJSON.GeoJSON | TopoJSON, options?: VectorGrid.SlicerOptions): VectorGrid.Slicer;

        /**
         * Instantiates a new protobuf VectorGrid with the given URL template and options.
         *
         * A `VectorGrid` for vector tiles fetched from the internet.
         * Tiles are supposed to be protobufs (AKA "protobuffer" or "Protocol Buffers"),
         * containing data which complies with the
         * [MapBox Vector Tile Specification](https://github.com/mapbox/vector-tile-spec/tree/master/2.1).
         *
         * This is the format used by:
         * - Mapbox Vector Tiles
         * - Mapzen Vector Tiles
         * - ESRI Vector Tiles
         * - [OpenMapTiles hosted Vector Tiles](https://openmaptiles.com/hosting/)
         *
         * @example
         *
         * You must initialize a `VectorGrid.Protobuf` with a URL template, just like in
         * `L.TileLayer`s. The difference is that the template must point to vector tiles
         * (usually `.pbf` or `.mvt`) instead of raster (`.png` or `.jpg`) tiles, and that
         * you should define the styling for all the features.
         *
         * For OpenMapTiles, with a key from [https://openmaptiles.org/docs/host/use-cdn/](https://openmaptiles.org/docs/host/use-cdn/),
         * initialization looks like this:
         *
         * ```
         * L.vectorGrid.protobuf("https://free-{s}.tilehosting.com/data/v3/{z}/{x}/{y}.pbf.pict?key={key}", {
         * 	vectorTileLayerStyles: { ... },
         * 	subdomains: "0123",
         * 	key: 'abcdefghi01234567890',
         * 	maxNativeZoom: 14
         * }).addTo(map);
         * ```
         *
         * And for Mapbox vector tiles, it looks like this:
         *
         * ```
         * L.vectorGrid.protobuf("https://{s}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token={token}", {
         * 	vectorTileLayerStyles: { ... },
         * 	subdomains: "abcd",
         * 	token: "pk.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTS.TUVWXTZ0123456789abcde"
         * }).addTo(map);
         * ```
         */
        function protobuf(url: string, options?: VectorGrid.ProtobufOptions): VectorGrid.Protobuf;
    }
}
