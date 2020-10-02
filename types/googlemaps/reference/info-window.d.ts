declare namespace google.maps {
    interface InfoWindowHandlerMap {
        /**
         * This event is fired when the close button was clicked.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.closeclick Maps JavaScript API}
         * @see {@link InfoWindow#close}
         */
        closeclick: [];

        /**
         * This event is fired when the content property changes.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.content_changed Maps JavaScript API}
         * @see {@link InfoWindowOptions#content}
         * @see {@link InfoWindow#getContent}
         * @see {@link InfoWindow#setContent}
         */
        content_changed: [];

        /**
         * This event is fired when the `<div>` containing the {@link InfoWindow}'s content is attached to the DOM. You
         * may wish to monitor this event if you are building out your info window content dynamically.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.domready Maps JavaScript API}
         */
        domready: [];

        /**
         * This event is fired when the position property changes.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.position_changed Maps JavaScript API}
         * @see {@link InfoWindowOptions#position}
         * @see {@link InfoWindow#getPosition}
         * @see {@link InfoWindow#setPosition}
         */
        position_changed: [];

        /**
         * This event is fired when the InfoWindow's zIndex changes.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.zindex_changed Maps JavaScript API}
         * @see {@link InfoWindowOptions#zIndex}
         * @see {@link InfoWindow#getZIndex}
         * @see {@link InfoWindow#setZIndex}
         */
        zindex_changed: [];
    }

    /**
     * An overlay that looks like a bubble and is often connected to a marker.
     * This class extends MVCObject.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow Maps JavaScript API}
     */
    class InfoWindow extends MVCObject {
        /**
         * Creates an info window with the given options. An {@link InfoWindow} can be placed on a map at a particular
         * position or above a marker, depending on what is specified in the options. Unless auto-pan is disabled, an
         * {@link InfoWindow} will pan the map to make itself visible when it is opened. After constructing an
         * {@link InfoWindow}, you must call open to display it on the map. The user can click the close button on the
         * {@link InfoWindow} to remove it from the map, or the developer can call {@link close}() for the same effect.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.constructor Maps JavaScript API}
         */
        constructor(opts?: InfoWindowOptions);

        /**
         * @see {@link InfoWindowHandlerMap#closeclick closeclick} event
         * @see {@link InfoWindowHandlerMap#content_changed content_changed} event
         * @see {@link InfoWindowHandlerMap#domready domready} event
         * @see {@link InfoWindowHandlerMap#position_changed position_changed} event
         * @see {@link InfoWindowHandlerMap#zindex_changed zindex_changed} event
         */
        addListener<N extends keyof InfoWindowHandlerMap>(
            eventName: N,
            handler: MVCEventHandler<this, InfoWindowHandlerMap[N]>,
        ): MapsEventListener;

        addListener(eventName: string, handler: MVCEventHandler<this, unknown[]>): MapsEventListener;

        /**
         * Closes this {@link InfoWindow} by removing it from the DOM structure.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.close Maps JavaScript API}
         * @see {@link InfoWindowHandlerMap#closeclick closeclick} event
         * @see {@link open}
         */
        close(): void;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getContent Maps JavaScript API}
         * @see {@link InfoWindowOptions#content}
         * @see {@link InfoWindowHandlerMap#content_changed content_changed} event
         * @see {@link setContent}
         */
        getContent(): string | Node;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getPosition Maps JavaScript API}
         * @see {@link InfoWindowOptions#position}
         * @see {@link InfoWindowHandlerMap#position_changed position_changed} event
         * @see {@link setPosition}
         */
        getPosition(): LatLng;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getZIndex Maps JavaScript API}
         * @see {@link InfoWindowOptions#zIndex}
         * @see {@link InfoWindowHandlerMap#zindex_changed zindex_changed} event
         * @see {@link setZIndex}
         */
        getZIndex(): number;

        // TODO: Strict `position` & `anchorPoint` in `anchor` argument
        /**
         * Opens this {@link InfoWindow} on the given map. Optionally, an {@link InfoWindow} can be associated with an
         * anchor. In the core API, the only anchor is the {@link Marker} class. However, an anchor can be any
         * {@link MVCObject} that exposes a {@link LatLng} position property and optionally a {@link Point} anchorPoint
         * property for calculating the {@link InfoWindowOptions#pixelOffset pixelOffset}. The anchorPoint is the offset
         * from the anchor's position to the tip of the {@link InfoWindow}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.open Maps JavaScript API}
         * @see {@link close}
         */
        open(map?: Map | StreetViewPanorama, anchor?: MVCObject): void;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.setContent Maps JavaScript API}
         * @see {@link InfoWindowOptions#content}
         * @see {@link InfoWindowHandlerMap#content_changed content_changed} event
         * @see {@link getContent}
         */
        setContent(content: string | Node): void;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.setOptions Maps JavaScript API}
         */
        setOptions(options: InfoWindowOptions): void;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.setPosition Maps JavaScript API}
         * @see {@link InfoWindowOptions#position}
         * @see {@link InfoWindowHandlerMap#position_changed position_changed} event
         * @see {@link getPosition}
         */
        setPosition(position: LatLng | LatLngLiteral): void;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.setZIndex Maps JavaScript API}
         * @see {@link InfoWindowOptions#zIndex}
         * @see {@link InfoWindowHandlerMap#zindex_changed zindex_changed} event
         * @see {@link getZIndex}
         */
        setZIndex(zIndex: number): void;
    }

    /**
     * {@link InfoWindowOptions} object used to define the properties that can be set on a {@link InfoWindow}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindowOptions Maps JavaScript API}
     * @see {@link InfoWindow#setOptions}
     */
    interface InfoWindowOptions {
        /**
         * Content to display in the {@link InfoWindow}. This can be an HTML element, a plain-text string, or a string
         * containing HTML. The InfoWindow will be sized according to the content. To set an explicit size for the
         * content, set content to be a HTML element with that size.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindowOptions.content Maps JavaScript API}
         * @see {@link InfoWindow#getContent}
         * @see {@link InfoWindow#setContent}
         */
        content?: string | Node;

        /**
         * Disable auto-pan on open. By default, the {@link InfoWindow} will pan the map so that it is fully visible
         * when it opens.
         * @see {@link https://developers.google.com/maps/documetntation/javascript/reference/info-window#InfoWindowOptions.disableAutoPan Maps JavaScript API}
         */
        disableAutoPan?: boolean;

        /**
         * Maximum width of the {@link InfoWindow}, regardless of content's width. This value is only considered if it
         * is set before a call to open. To change the maximum width when changing content, call close,
         * {@link InfoWindow#setOptions setOptions}, and then open.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindowOptions.maxWidth Maps JavaScript API}
         */
        maxWidth?: number;

        /**
         * The offset, in pixels, of the tip of the info window from the point on the map at whose geographical
         * coordinates the info window is anchored. If an {@link InfoWindow} is opened with an anchor, the
         * {@link pixelOffset} will be calculated from the anchor's {@link MarkerOptions#anchorPoint anchorPoint}
         * property.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindowOptions.pixelOffset Maps JavaScript API}
         */
        pixelOffset?: Size;

        /**
         * The {@link LatLng} at which to display this {@link InfoWindow}. If the {@link InfoWindow} is opened with an
         * anchor, the anchor's position will be used instead.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindowOptions.position Maps JavaScript API}
         * @see {@link InfoWindow#getPosition}
         * @see {@link InfoWindow#setPosition}
         */
        position?: LatLng | LatLngLiteral;

        /**
         * All {@link InfoWindow} are displayed on the map in order of their {@link zIndex}, with higher values
         * displaying in front of {@link InfoWindow} with lower values. By default, {@link InfoWindow} are displayed
         * according to their latitude, with {@link InfoWindow} of lower latitudes appearing in front of
         * {@link InfoWindow} at higher latitudes. {@link InfoWindow} are always displayed in front of markers.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindowOptions.zIndex Maps JavaScript API}
         * @see {@link InfoWindow#getZIndex}
         * @see {@link InfoWindow#setZIndex}
         */
        zIndex?: number;
    }
}
