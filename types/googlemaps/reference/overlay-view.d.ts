declare namespace google.maps {
    class OverlayView extends MVCObject {
        draw(): void;
        getMap(): Map | StreetViewPanorama;
        getPanes(): MapPanes;
        getProjection(): MapCanvasProjection;
        onAdd(): void;
        onRemove(): void;
        setMap(map: Map | StreetViewPanorama | null): void;
        /**
         * Stops click, tap, drag, and wheel events on the element from bubbling up to the map. Use this to prevent map dragging and zooming, as well as map "click" events.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView.preventMapHitsAndGesturesFrom Maps JavaScript API}
         */
        static preventMapHitsAndGesturesFrom(element: Element): void;
        /**
         * Stops click or tap on the element from bubbling up to the map. Use this to prevent the map from triggering "click" events.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView.preventMapHitsFrom Maps JavaScript API}
         */
        static preventMapHitsFrom(element: Element): void;
    }

    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapPanes Maps JavaScript API} */
    interface MapPanes {
        /**
         * This pane contains the info window. (Pane 4).
         * It is above all map overlays.
         * @see {@link overlayMouseTarget pane below}
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapPanes.floatPane Maps JavaScript API}
         */
        readonly floatPane: Element;

        /**
         * This pane is the lowest pane and is above the tiles. (Pane 0).
         * It may not receive DOM events.
         * @see {@link overlayLayer pane above}
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapPanes.mapPane Maps JavaScript API}
         */
        readonly mapPane: Element;

        /**
         * This pane contains markers. (Pane 2).
         * It may not receive DOM events.
         * @see {@link floatPane pane above}
         * @see {@link overlayLayer pane below}
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapPanes.markerLayer Maps JavaScript API}
         */
        readonly markerLayer: Element;

        /**
         * This pane contains polylines, polygons, ground overlays and tile layer overlays. (Pane 1).
         * It may not receive DOM events.
         * @see {@link markerLayer pane above}
         * @see {@link mapPane pane below}
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapPanes.overlayLayer Maps JavaScript API}
         */
        readonly overlayLayer: Element;

        /**
         * This pane contains elements that receive DOM events. (Pane 3).
         * @see {@link floatPane pane above}
         * @see {@link markerLayer pane below}
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapPanes.overlayMouseTarget Maps JavaScript API}
         */
        readonly overlayMouseTarget: Element;
    }

    // TODO: replace to interface https://developers.google.com/maps/documentation/javascript/reference/overlay-view#MapCanvasProjection
    class MapCanvasProjection extends MVCObject {
        fromContainerPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;
        fromDivPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;
        fromLatLngToContainerPixel(latLng: LatLng): Point;
        fromLatLngToDivPixel(latLng: LatLng): Point;
        getWorldWidth(): number;
    }
}
