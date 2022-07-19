// Type definitions for leaflet.vectorgrid 1.3.0
// Project: https://github.com/Leaflet/Leaflet.VectorGrid
// Definitions by: Cody Duong <https://github.com/codyduong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as L from "leaflet";

declare module "leaflet" {
    export interface TileProps {
        tileCoord: L.Point;
        tileSize: string;
        options?: L.RendererOptions;
    }

    export type TileFactoryFunction<T extends L.Canvas.Tile | L.SVG.Tile> = (
        tileCoord: TileProps["tileCoord"],
        tileSize: TileProps["tileSize"],
        options: TileProps["tileSize"],
    ) => T

    export namespace Canvas {
        export class Tile extends L.Canvas {
            constructor(props: TileProps);
        }
    }
    export namespace canvas {
        export const tile: TileFactoryFunction<L.Canvas.Tile>
    }

    export namespace SVG {
        export class Tile extends L.SVG {
            constructor(props: TileProps);
        }
    }
    export namespace svg {
        export const tile: TileFactoryFunction<L.SVG.Tile>
    }

    export interface VectorGridOptions {
        /** A factory method which will be used to instantiate the per-tile renderers. */
        rendererFactory?: TileFactoryFunction<L.Canvas.Tile | L.SVG.Tile>
        /** A data structure holding initial symbolizer definitions for the vector features. */
        vectorTileLayerStyles?: Record<string, any>;
        /** Whether this VectorGrid fires Interactive Layer events. */
        interactive?: boolean;
        /**
         * A function that, given a vector feature, returns an unique identifier for it, e.g. function(feat) { return feat.properties.uniqueIdField; }. Must be defined for setFeatureStyle to work.
         */
        getFeatureId?: (...args: any[]) => unknown;

        /** max zoom to preserve detail on; can't be higher than 24 */
        maxZoom?: number;
        /** simplification tolerance (higher means simpler) */
        tolerance?: number;
        /** tile extent (both width and height) */
        extent?: number;
        /** tile buffer on each side */
        buffer?: number;
        /** logging level (0 to disable, 1 or 2) */
        debug?: number;
        /** whether to enable line metrics tracking for LineString/MultiLineString features */
        lineMetrics?: false; 
        /** name of a feature property to promote to feature.id. Cannot be used with `generateId` */
        promoteId?: null; // 
        /** whether to generate feature ids. Cannot be used with `promoteId` */
        generateId?: false;
        /** max zoom in the initial tile index */
        indexMaxZoom?: number;
        indexMaxPoints?: number;
        vectorTileLayerName?: "sliced" & string;
    }
    export namespace VectorGrid {
        export class Slicer extends L.GridLayer {
            constructor(props: L.VectorGridOptions);

            setFeatureStyle(id: number, layerstyle: L.PathOptions): this

            getDataLayerNames(): Array<any>
        }
    }
    export namespace vectorGrid {
        type TopoJSON = {
            type: string;
            [index: string]: any;
        };

        function slicer(data: TopoJSON, options: L.VectorGridOptions): VectorGrid.Slicer;
    }
}
