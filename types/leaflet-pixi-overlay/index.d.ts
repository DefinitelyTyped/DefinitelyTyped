import * as L from "leaflet";
import * as PIXI from "pixi.js";

declare module "leaflet" {
    interface PixiOverlayOptions {
        /**
         * How much to extend the clip area around the map view (relative to its size)
         * e.g. 0.1 would be 10% of map view in each direction
         * @default 0.1
         */
        padding?: number;
        /**
         * Force use of a 2d-canvas
         * @default false
         */
        forceCanvas?: boolean;
        /**
         * Help to prevent flicker when refreshing display on some devices (e.g. iOS devices)
         * It is ignored if rendering is done with 2d-canvas
         * @default false
         */
        doubleBuffering?: boolean;
        /**
         * Resolution of the renderer canvas
         * @default L.Browser.retina ? 2 : 1
         */
        resolution?: number;
        /**
         * Return the layer projection zoom level
         * @default projectionZoom
         */
        projectionZoom?: (map: L.Map) => number;
        /**
         * Destroy PIXI EventSystem
         * @default false
         */
        destroyInteractionManager?: boolean;
        /**
         * Customize PIXI EventSystem autoPreventDefault property
         * This option is ignored if destroyInteractionManager is set
         * @default true
         */
        autoPreventDefault?: boolean;
        /**
         * Enables drawing buffer preservation
         * @default false
         */
        preserveDrawingBuffer?: boolean;
        /**
         * Clear the canvas before the new render pass
         * @default true
         */
        clearBeforeRender?: boolean;
        /**
         * Filter move events that should trigger a layer redraw
         * @default () => false
         */
        shouldRedrawOnMove?: (e: L.LeafletEvent) => boolean;
        /**
         * The pane where the overlay will be added
         * @default 'overlayPane'
         */
        pane?: string;
    }

    type LatLngToLayerPointFn = (latLng: L.LatLngExpression, zoom?: number) => L.Point;
    type LayerPointToLatLngFn = (point: L.PointExpression, zoom?: number) => L.LatLng;

    interface PixiOverlayUtils {
        /**
         * Convert a LatLng to layer point
         * @param latLng The geographical point to convert
         * @param zoom Optional zoom level (defaults to initial zoom)
         */
        latLngToLayerPoint: LatLngToLayerPointFn;
        /**
         * Convert a layer point to LatLng
         * @param point The point to convert
         * @param zoom Optional zoom level (defaults to initial zoom)
         */
        layerPointToLatLng: LayerPointToLatLngFn;
        /**
         * Get the scale factor between current zoom and initial zoom
         * @param zoom Optional zoom level to compare with initial zoom
         */
        getScale(zoom?: number): number;
        /**
         * Get the PIXI renderer instance
         */
        getRenderer(): PIXI.Renderer;
        /**
         * Get the PIXI container
         */
        getContainer(): PIXI.Container;
        /**
         * Get the Leaflet map instance
         */
        getMap(): L.Map;
    }

    class PixiOverlay extends L.Layer {
        constructor(
            drawCallback: (utils: PixiOverlayUtils, event?: L.LeafletEvent) => void,
            pixiContainer: PIXI.Container,
            options?: PixiOverlayOptions,
        );

        /**
         * Manually trigger a redraw of the overlay
         * @param data Optional data to pass to the draw callback
         */
        redraw(data?: unknown): this;
        /**
         * Properly clean up the overlay before removing it
         */
        destroy(): void;
    }

    function pixiOverlay(
        drawCallback: (utils: PixiOverlayUtils, event?: L.LeafletEvent) => void,
        pixiContainer: PIXI.Container,
        options?: PixiOverlayOptions,
    ): PixiOverlay;
}
