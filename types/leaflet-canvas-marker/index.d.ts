// Type definitions for leaflet-canvas-marker 0.2
// Project: https://github.com/eJuke/Leaflet.Canvas-Markers#readme
// Definitions by: Slaven Kopić <https://github.com/slaven3kopic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    class CanvasIconLayer extends L.Layer {
        
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
         * @param {Array<L.Marker>} markers Array containing Leaflet markers
         */
        addMarkers(markers: Array<L.Marker>): this;

        /**
         * Adds marker to CanvasIconLayer
         * @param {L.Marker} marker Leaflet marker
         */
        addMarker(marker: L.Marker): this;

        /**
         * Adds layer to CanvasIconLayer
         * @param {L.Layer} layer Leaflet layer
         */
        addLayer(layer: L.Layer): this;

        /**
         * Adds layers to CanvasIconLayer
         * @param {Array<L.Layer>} layers Array containing Leaflet layers
         */
        addLayers(layers: Array<L.Layer>): this;

        /**
         * Removes layer from CanvasIconLayer
         * @param {L.Layer} layer Leaflet layer
         */
        removeLayer(layer: L.Layer): this;

        /**
         * Removes marker from CanvasIconLayer
         * @param {L.Marker} marker Leaflet marker
         * @param {boolean} redraw Redraw CanvasIconLayer after removing marker
         */
        removeMarker(marker: L.Marker, redraw: boolean): this;

        /**
         * Initializes CanvasIconLayer and adds different event listeners
         * @param {L.Map} map Leaflet map
         */
        onAdd(map: L.Map): this;

        /**
         * Removes CanvasIconLayer and removes different event listeners
         * @param {L.Map} map Leaflet map
         */
        onRemove(map: L.Map): this;

        /**
         * Adds CanvasIconLayer to map
         * @param {L.Map} map Leaflet map
         */
        addTo(map: L.Map): this;

        /**
         * Removes layers from CanvasIconLayer
         */
        clearLayers(): this;

        /**
         * Adds click event listener
         * @param {() => any} listener Function that runs when the click event occurs
         */
        addOnClickListener(listener: () => any): this;

        /**
         * Adds hover event listener
         * @param {() => any} listener Function that runs when the hover event occurs
         */
        addOnHoverListener(listener: () => any): this;

    }

    function canvasIconLayer(options: any): CanvasIconLayer;
}