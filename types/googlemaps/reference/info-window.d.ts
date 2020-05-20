declare namespace google.maps {
    /**
     * An overlay that looks like a bubble and is often connected to a marker.
     * This class extends MVCObject.
     */
    class InfoWindow extends MVCObject {
        /**
         * Creates an info window with the given options. An InfoWindow can be
         * placed on a map at a particular position or above a marker,
         * depending on what is specified in the options. Unless auto-pan is
         * disabled, an InfoWindow will pan the map to make itself visible
         * when it is opened. After constructing an InfoWindow, you must call
         * open to display it on the map. The user can click the close button
         * on the InfoWindow to remove it from the map, or the developer can
         * call close() for the same effect.
         */
        constructor(opts?: InfoWindowOptions);
        /** Closes this InfoWindow by removing it from the DOM structure. */
        close(): void;
        getContent(): string | Element;
        getPosition(): LatLng;
        getZIndex(): number;
        /**
         * Opens this InfoWindow on the given map. Optionally, an InfoWindow can be
         * associated with an anchor. In the core API, the only anchor is the Marker
         * class. However, an anchor can be any MVCObject that exposes a LatLng
         * position property and optionally a Point anchorPoint property for
         * calculating the pixelOffset (see InfoWindowOptions). The anchorPoint is
         * the offset from the anchor's position to the tip of the InfoWindow.
         */
        open(map?: Map | StreetViewPanorama, anchor?: MVCObject): void;
        setContent(content: string | Node): void;
        setOptions(options: InfoWindowOptions): void;
        setPosition(position: LatLng | LatLngLiteral): void;
        setZIndex(zIndex: number): void;
    }

    interface InfoWindowOptions {
        /**
         * Content to display in the InfoWindow. This can be an HTML element, a
         * plain-text string, or a string containing HTML. The InfoWindow will be
         * sized according to the content. To set an explicit size for the content,
         * set content to be a HTML element with that size.
         */
        content?: string | Node;
        /**
         * Disable auto-pan on open. By default, the info window will pan the map so
         * that it is fully visible when it opens.
         */
        disableAutoPan?: boolean;
        /**
         * Maximum width of the infowindow, regardless of content's width.
         * This value is only considered if it is set before a call to open.
         * To change the maximum width when changing content, call close,
         * setOptions, and then open.
         */
        maxWidth?: number;
        /**
         * The offset, in pixels, of the tip of the info window from the point on
         * the map at whose geographical coordinates the info window is anchored. If
         * an InfoWindow is opened with an anchor, the pixelOffset will be
         * calculated from the anchor's anchorPoint property.
         */
        pixelOffset?: Size;
        /**
         * The LatLng at which to display this InfoWindow. If the InfoWindow is
         * opened with an anchor, the anchor's position will be used instead.
         */
        position?: LatLng | LatLngLiteral;
        /**
         * All InfoWindows are displayed on the map in order of their zIndex,
         * with higher values displaying in front of InfoWindows with lower values.
         * By default, InfoWindows are displayed according to their latitude,
         * with InfoWindows of lower latitudes appearing in front of InfoWindows at
         * higher latitudes. InfoWindows are always displayed in front of markers.
         */
        zIndex?: number;
    }
}
