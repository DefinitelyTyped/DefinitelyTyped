import * as geojson from "geojson";
import * as geojsonvt from "geojson-vt";
import * as L from "leaflet";

declare module "leaflet" {
    interface TileProps {
        tileCoord: geojsonvt.TileCoord;
        tileSize: Point;
        options?: RendererOptions;
    }

    type TileParameters = [
        tileCoord: TileProps["tileCoord"],
        tileSize: TileProps["tileSize"],
        options: TileProps["tileSize"],
    ];

    type TileFactoryFunction<T extends Canvas.Tile | SVG.Tile> = (...args: TileParameters) => T;

    namespace Canvas {
        class Tile extends Canvas {
            constructor(...args: TileParameters);

            _tileCoord: Point;
            _size: Point;
            _container: HTMLCanvasElement;
            _layers: Record<string, Layer>;
            _drawnLayers: Record<string, Layer>;
            _drawing: boolean;

            getCoord(): Point;
            getContainer(): HTMLCanvasElement;
            getOffset(): Point;
            onAdd(map: Map): this;
            addTo(map: Map): this;
            removeFrom(map: Map): this;

            _onClick(event: LeafletMouseEvent): void;
            _onMouseMove(event: LeafletMouseEvent): void;
            _updateIcon(layer: Layer): void;
        }
    }
    namespace canvas {
        const tile: TileFactoryFunction<Canvas.Tile>;
    }

    namespace SVG {
        class Tile extends SVG {
            constructor(props: TileProps);

            _tileCoord: TileProps["tileCoord"];
            _size: TileProps["tileSize"];
            _container: SVGViewElement;
            _layers: Record<string, Layer>;

            getCoord(): Point;
            getContainer(): SVGViewElement;
            onAdd(map: Map): this;
            addTo(map: Map): this;
            removeFrom(map: Map): this;

            _addPath(layer: Layer): void;
            _updateIcon(layer: Layer): void;
        }
    }
    namespace svg {
        const tile: TileFactoryFunction<SVG.Tile>;
    }

    interface VectorGridOptions<T extends Canvas.Tile | SVG.Tile = Canvas.Tile | SVG.Tile>
        extends geojsonvt.Options, GridLayerOptions
    {
        /** A factory method which will be used to instantiate the per-tile renderers. */
        rendererFactory?: TileFactoryFunction<T>;
        /** A data structure holding initial symbolizer definitions for the vector features. */
        vectorTileLayerStyles?: Record<string, PathOptions>;
        /** Whether this VectorGrid fires Interactive Layer events. */
        interactive?: boolean;
        /**
         * A function that, given a vector feature, returns an unique identifier for it, e.g.
         * `function(feat) { return feat.properties.uniqueIdField; }`.
         * Must be defined for `setFeatureStyle` to work.
         */
        getFeatureId?: (feature: geojsonvt.Feature) => string;
        /**
         * A Function that will be used to decide whether to include a feature or not
         * depending on feature properties and zoom, e.g.
         * `function(properties, zoom) { return true; }`.
         * The default is to include all features. Similar to GeoJSON filter option.
         */
        filter?: (properties: geojsonvt.Feature, zoom: number) => boolean;
    }
    type GetVectorGridRendererHelper<T extends HTMLCanvasElement | SVGViewElement> = T extends
        | HTMLCanvasElement
        | SVGViewElement ? Canvas.Tile | SVG.Tile
        : T extends HTMLCanvasElement ? Canvas.Tile
        : SVG.Tile;

    class VectorGrid<
        T extends HTMLCanvasElement | SVGViewElement = HTMLCanvasElement | SVGViewElement,
    > extends GridLayer {
        constructor(props: VectorGridOptions<GetVectorGridRendererHelper<T>>);

        options: VectorGridOptions;

        /**
         * Given the unique ID for a vector features (as per the `getFeatureId` option),
         * re-symbolizes that feature across all tiles it appears in.
         */
        setFeatureStyle(id: number, layerStyle: PathOptions): this;

        /**
         * Reverts the effects of a previous `setFeatureStyle` cal
         */
        resetFeatureStyle(id: number): this;

        /**
         * Sets filter function to filter displayed features.
         */
        setFilter(filterFn: VectorGridOptions["filter"]): this;

        /**
         * Returns an array of strings, with all the known names of data layers in
         * the vector tiles displayed. Useful for introspection.
         */
        getDataLayerNames(): string[];

        _updateStyles(
            feat: geojsonvt.Feature,
            renderer: GetVectorGridRendererHelper<T>,
            styleOptions: Record<string, PathOptions>,
        ): void;
        _createLayer(feat: geojsonvt.Feature, pxPerExtent: number, layerStyle: PathOptions): Layer;
    }
    namespace VectorGrid {
        interface SlicerOptions extends VectorGridOptions, geojsonvt.Options {
            vectorTileLayerName?: string;
        }

        class Slicer extends VectorGrid {
            constructor(data: geojson.GeoJSON, options?: SlicerOptions);
        }
        // Have a fetchOptions interface just in case user wants to do their own typesafety here
        // tslint:disable-next-line no-empty-interface
        interface ProtobufFetchOptions {}

        interface ProtobufOptions extends VectorGridOptions {
            /**
             * As with `TileLayer`, the URL template might contain a reference to
             * any option (see the example above and note the `{key}` or `token` in the URL
             * template, and the corresponding option).
             */
            section?: unknown;
            /**
             * Akin to the `subdomains` option for `TileLayer`.
             */
            subdomains?: string;
            /** options passed to `fetch`, e.g. {credentials: 'same-origin'} to send cookie for the current domain */
            fetchOptions?: Record<string, any> & ProtobufFetchOptions;
        }
        class Protobuf extends VectorGrid {
            constructor(url: string, options?: ProtobufOptions);

            options: ProtobufOptions;

            /**
             * Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
             */
            setUrl(url: string, noRedraw?: boolean): this;
            _getSubdomain: any;

            _isCurrentTile(coords: Coords, tileBounds: TileLayer.WMS): boolean;
            _getVectorTilePromise(coords: any, tileBounds: any): Promise<TileLayer>;
        }
    }
    namespace vectorGrid {
        function slicer(data: geojson.GeoJSON, options?: VectorGrid.SlicerOptions): VectorGrid.Slicer;
        function protobuf(url: string, options?: VectorGrid.ProtobufOptions): VectorGrid.Protobuf;
    }
}

/**
 * This class has docs on the API page but no export?
 */
declare class Symbolizer extends L.Class {
    initialize(feature: geojson.GeoJSON, pxPerExtent?: number): this;

    render(renderer: L.Canvas.Tile | L.SVG.Tile, style: L.PathOptions): void;
    /**
     * Supposedly there are more methods, but they are all declared as being
     * 'internal use only'
     */
}

export {};
