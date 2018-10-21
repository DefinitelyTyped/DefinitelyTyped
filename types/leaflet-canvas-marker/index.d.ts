// Type definitions for leaflet-canvas-marker 0.2
// Project: https://github.com/eJuke/Leaflet.Canvas-Markers#readme
// Definitions by: Slaven Kopić <https://github.com/slaven3kopic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    class CanvasIconLayer extends Layer {
        /**
         * Sets options and resets event listeners
         * @param options L.Class options
         */
        initialize(options: any): this;
        /**
         * Sets options
         * @param options L.Class options
         */
        setOptions(options: any): this;
        /**
         * Redraws the CanvasIconLayer
         */
        redraw(): this;
        /**
         * Adds markers to CanvasIconLayer
         * @param markers Array containing Leaflet markers
         */
        addMarkers(markers: Marker[]): this;
        /**
         * Adds marker to CanvasIconLayer
         * @param marker Leaflet marker
         */
        addMarker(marker: Marker): this;
        /**
         * Adds layer to CanvasIconLayer
         * @param layer Leaflet layer
         */
        addLayer(layer: Layer): this;
        /**
         * Adds layers to CanvasIconLayer
         * @param layers Array containing Leaflet layers
         */
        addLayers(layers: Layer[]): this;
        /**
         * Removes layer from CanvasIconLayer
         * @param layer Leaflet layer
         */
        removeLayer(layer: Layer): this;
        /**
         * Removes marker from CanvasIconLayer
         * @param marker Leaflet marker
         * @param redraw Redraw CanvasIconLayer after removing marker
         */
        removeMarker(marker: Marker, redraw: boolean): this;
        /**
         * Initializes CanvasIconLayer and adds different event listeners
         * @param map Leaflet map
         */
        onAdd(map: Map): this;
        /**
         * Removes CanvasIconLayer and removes different event listeners
         * @param map Leaflet map
         */
        onRemove(map: Map): this;
        /**
         * Adds CanvasIconLayer to map
         * @param map Leaflet map
         */
        addTo(map: Map): this;
        /**
         * Removes layers from CanvasIconLayer
         */
        clearLayers(): this;

        /**
         * Adds click event listener
         * @param listener Function that runs when the click event occurs
         */
        addOnClickListener(listener: () => any): this;

        /**
         * Adds hover event listener
         * @param listener Function that runs when the hover event occurs
         */
        addOnHoverListener(listener: () => any): this;

    }

    function canvasIconLayer(options: any): CanvasIconLayer;
}
