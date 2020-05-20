declare namespace google.maps {
    interface MapHandlerMap {
        /**
         * This event is fired when the viewport bounds have changed.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.bounds_changed Maps JavaScript API}
         * @see {@link Map#getBounds}
         * @see {@link Map#fitBounds}
         * @see {@link Map#panToBounds}
         */
        bounds_changed: [];

        /**
         * This event is fired when the map center property changes.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.center_changed Maps JavaScript API}
         * @see {@link MapOptions#center}
         * @see {@link Map#getCenter}
         * @see {@link Map#setCenter}
         */
        center_changed: [];

        /**
         * This event is fired when the user clicks on the map.
         * An ApiMouseEvent with properties for the clicked location is returned unless a place icon was clicked, in which case an IconMouseEvent with a placeid is returned.
         * IconMouseEvent and ApiMouseEvent are identical, except that IconMouseEvent has the placeid field.
         * The event can always be treated as an ApiMouseEvent when the placeid is not important.
         * The click event is not fired if a marker or infowindow was clicked.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.click Maps JavaScript API}
         */
        click: [MouseEvent | IconMouseEvent];

        /**
         * This event is fired when the user double-clicks on the map. Note that the click event will also fire, right before this one.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.dblclick Maps JavaScript API}
         */
        dblclick: [MouseEvent];

        /**
         * This event is repeatedly fired while the user drags the map.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.drag Maps JavaScript API}
         */
        drag: [];

        /**
         * This event is fired when the user stops dragging the map.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragend Maps JavaScript API}
         */
        dragend: [];

        /**
         * This event is fired when the user starts dragging the map.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragstart Maps JavaScript API}
         */
        dragstart: [];

        /**
         * This event is fired when the map heading property changes.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.heading_changed Maps JavaScript API}
         * @see {@link MapOptions#heading}
         * @see {@link Map#getHeading}
         * @see {@link Map#setHeading}
         */
        heading_changed: [];

        /**
         * This event is fired when the map becomes idle after panning or zooming.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.idle Maps JavaScript API}
         */
        idle: [];

        /**
         * This event is fired when the mapTypeId property changes.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.maptypeid_changed Maps JavaScript API}
         * @see {@link MapOptions#mapTypeId}
         * @see {@link Map#getMapTypeId}
         * @see {@link Map#setMapTypeId}
         */
        maptypeid_changed: [];

        /**
         * This event is fired whenever the user's mouse moves over the map container.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.mousemove Maps JavaScript API}
         */
        mousemove: [MouseEvent];

        /**
         * This event is fired when the user's mouse exits the map container.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseout Maps JavaScript API}
         */
        mouseout: [MouseEvent];

        /**
         * This event is fired when the user's mouse enters the map container.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseover Maps JavaScript API}
         */
        mouseover: [MouseEvent];

        /**
         * This event is fired when the projection has changed.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.projection_changed Maps JavaScript API}
         * @see {@link Map#getProjection}
         */
        projection_changed: [];

        /**
         * This event is fired when the DOM contextmenu event is fired on the map container.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.rightclick Maps JavaScript API}
         */
        rightclick: [MouseEvent];

        /**
         * This event is fired when the visible tiles have finished loading.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilesloaded Maps JavaScript API}
         */
        tilesloaded: [];

        /**
         * This event is fired when the map tilt property changes.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilt_changed Maps JavaScript API}
         * @see {@link MapOptions#tilt}
         * @see {@link Map#getTilt}
         * @see {@link Map#setTilt}
         */
        tilt_changed: [];

        /**
         * This event is fired when the map zoom property changes.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.zoom_changed Maps JavaScript API}
         * @see {@link MapOptions#zoom}
         * @see {@link Map#getZoom}
         * @see {@link Map#setZoom}
         */
        zoom_changed: [];
    }

    /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map Maps JavaScript API} */
    class Map<E extends Element = Element> extends MVCObject {
        /**
         * Creates a new map inside of the given HTML container, which is typically a DIV element.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.constructor Maps JavaScript API}
         */
        constructor(mapDiv: E, opts?: MapOptions);

        /**
         * @see {@link MapHandlerMap#bounds_changed bounds_changed} event
         * @see {@link MapHandlerMap#center_changed center_changed} event
         * @see {@link MapHandlerMap#click click} event
         * @see {@link MapHandlerMap#dblclick dblclick} event
         * @see {@link MapHandlerMap#drag drag} event
         * @see {@link MapHandlerMap#dragend dragend} event
         * @see {@link MapHandlerMap#dragstart dragstart} event
         * @see {@link MapHandlerMap#heading_changed heading_changed} event
         * @see {@link MapHandlerMap#idle idle} event
         * @see {@link MapHandlerMap#maptypeid_changed maptypeid_changed} event
         * @see {@link MapHandlerMap#mousemove mousemove} event
         * @see {@link MapHandlerMap#mouseout mouseout} event
         * @see {@link MapHandlerMap#mouseover mouseover} event
         * @see {@link MapHandlerMap#projection_changed projection_changed} event
         * @see {@link MapHandlerMap#rightclick rightclick} event
         * @see {@link MapHandlerMap#tilesloaded tilesloaded} event
         * @see {@link MapHandlerMap#tilt_changed tilt_changed} event
         * @see {@link MapHandlerMap#zoom_changed zoom_changed} event
         */
        addListener<N extends keyof MapHandlerMap>(
            eventName: N,
            handler: MVCEventHandler<this, MapHandlerMap[N]>,
        ): MapsEventListener;

        /** @deprecated */
        addListener(eventName: string, handler: MVCEventHandler<this, any[]>): MapsEventListener;

        /**
         * Sets the viewport to contain the given bounds.
         * Note: When the map is set to `display: none`, the `fitBounds` function reads the map's size as 0x0, and therefore does not do anything.
         * To change the viewport while the map is hidden, set the map to `visibility: hidden`, thereby ensuring the map div has an actual size.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds Maps JavaScript API}
         * @see {@link MapHandlerMap#bounds_changed event bounds_changed}
         * @see {@link getBounds}
         * @see {@link panBy}
         * @see {@link panTo}
         * @see {@link panToBounds}
         * @see {@link setCenter}
         */
        fitBounds(bounds: LatLngBounds | LatLngBoundsLiteral, padding?: number | Padding): void;

        /**
         * Returns the lat/lng bounds of the current viewport.
         * If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive.
         * If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is `null` or `undefined`.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.getBounds Maps JavaScript API}
         * @see {@link MapHandlerMap#bounds_changed bounds_changed} event
         * @see {@link fitBounds}
         * @see {@link getCenter}
         * @see {@link panToBounds}
         */
        getBounds(): LatLngBounds | null | undefined;

        /**
         * Returns the position displayed at the center of the map.
         * Note that this {@link LatLng} object is not wrapped.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.getCenter Maps JavaScript API}
         * @see {@link MapOptions#center}
         * @see {@link MapHandlerMap#center_changed center_changed} event
         * @see {@link getBounds}
         * @see {@link setCenter}
         */
        getCenter(): LatLng;

        /**
         * Returns the clickability of the map icons.
         * A map icon represents a point of interest, also known as a POI.
         * If the returned value is true, then the icons are clickable on the map.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.getClickableIcons Maps JavaScript API}
         * @see {@link MapOptions#clickableIcons}
         * @see {@link setClickableIcons}
         */
        getClickableIcons(): boolean;

        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.getDiv Maps JavaScript API} */
        getDiv(): E;

        /**
         * Returns the compass heading of aerial imagery.
         * The heading value is measured in degrees (clockwise) from cardinal direction North.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.getHeading Maps JavaScript API}
         * @see {@link MapOptions#heading}
         * @see {@link MapHandlerMap#heading_changed heading_changed} event
         * @see {@link setHeading}
         */
        getHeading(): number;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.getMapTypeId Maps JavaScript API}
         * @see {@link MapOptions#mapTypeId}
         * @see {@link MapHandlerMap#maptypeid_changed maptypeid_changed} event
         * @see {@link setMapTypeId}
         * @see {@link mapTypes}
         * @see {@link overlayMapTypes}
         */
        getMapTypeId(): MapTypeId;

        /**
         * If the map is not yet initialized (i.e. the mapType is still `null`) then the result is `null`.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.getProjection Maps JavaScript API}
         * @see {@link MapHandlerMap#projection_changed projection_changed} event
         */
        getProjection(): Projection | null;

        /**
         * Returns the default {@link StreetViewPanorama} bound to the map, which may be a default panorama embedded within the map, or the panorama set using {@link setStreetView}().
         * Changes to the map's {@link MapOptions#streetViewControl streetViewControl} will be reflected in the display of such a bound panorama.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.getStreetView Maps JavaScript API}
         * @see {@link MapOptions#streetView}
         * @see {@link setStreetView}
         */
        getStreetView(): StreetViewPanorama;

        /**
         * Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane.
         * The result will be 0 for imagery taken directly overhead or 45 for 45° imagery.
         * 45° imagery is only available for satellite and hybrid map types, within some locations, and at some zoom levels.
         * Note: This method does not return the value set by setTilt. See setTilt for details.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.getTilt Maps JavaScript API}
         * @see {@link MapOptions#tilt}
         * @see {@link MapHandlerMap#tilt_changed tilt_changed} event
         * @see {@link setTilt}
         */
        getTilt(): number;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.getZoom Maps JavaScript API}
         * @see {@link MapOptions#zoom}
         * @see {@link MapHandlerMap#zoom_changed zoom_changed} event
         * @see {@link getBounds}
         * @see {@link setZoom}
         */
        getZoom(): number;

        /**
         * Changes the center of the map by the given distance in pixels.
         * If the distance is less than both the width and height of the map, the transition will be smoothly animated.
         * Note that the map coordinate system increases from west to east (for x values) and north to south (for y values).
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.panBy Maps JavaScript API}
         * @see {@link panTo}
         * @see {@link panToBounds}
         * @see {@link setCenter}
         */
        panBy(x: number, y: number): void;

        /**
         * Changes the center of the map to the given {@link LatLng}.
         * If the change is less than both the width and height of the map, the transition will be smoothly animated.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo Maps JavaScript API}
         * @see {@link panBy}
         * @see {@link panToBounds}
         * @see {@link setCenter}
         */
        panTo(latLng: LatLng | LatLngLiteral): void;

        /**
         * Pans the map by the minimum amount necessary to contain the given {@link LatLngBounds}.
         * It makes no guarantee where on the map the bounds will be,
         * except that the map will be panned to show as much of the bounds as possible inside `{currentMapSizeInPx} - {padding}`.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds Maps JavaScript API}
         * @see {@link panBy}
         * @see {@link panTo}
         * @see {@link setCenter}
         */
        panToBounds(latLngBounds: LatLngBounds | LatLngBoundsLiteral, padding?: number | Padding): void;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.setCenter Maps JavaScript API}
         * @see {@link MapOptions#center}
         * @see {@link MapHandlerMap#center_changed center_changed} event
         * @see {@link fitBounds}
         * @see {@link getCenter}
         * @see {@link panBy}
         * @see {@link panTo}
         * @see {@link panToBounds}
         */
        setCenter(latlng: LatLng | LatLngLiteral): void;

        /**
         * Sets the compass heading for aerial imagery measured in degrees from cardinal direction North.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.setHeading Maps JavaScript API}
         * @see {@link MapOptions#heading}
         * @see {@link MapHandlerMap#heading_changed} event
         * @see {@link getHeading}
         */
        setHeading(heading: number): void;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.setMapTypeId Maps JavaScript API}
         * @see {@link MapOptions#mapTypeId}
         * @see {@link MapHandlerMap#maptypeid_changed} event
         * @see {@link getMapTypeId}
         * @see {@link mapTypes}
         * @see {@link overlayMapTypes}
         */
        setMapTypeId(mapTypeId: MapTypeId | string): void;

        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.setOptions Maps JavaScript API} */
        setOptions(options: MapOptions): void;

        /**
         * Binds a {@link StreetViewPanorama} to the map.
         * This panorama overrides the default {@link StreetViewPanorama}, allowing the map to bind to an external panorama outside of the map.
         * Setting the panorama to `null` binds the default embedded panorama back to the map.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.setStreetView Maps JavaScript API}
         * @see {@link MapOptions#streetView}
         * @see {@link getStreetView}
         */
        setStreetView(panorama: StreetViewPanorama | null): void;

        /**
         * Controls the automatic switching behavior for the angle of incidence of the map.
         * The only allowed values are `0` and `45`.
         * `setTilt(0)` causes the map to always use a 0° overhead view regardless of the zoom level and viewport.
         * `setTilt(45)` causes the tilt angle to automatically switch to 45 whenever 45° imagery is available for the current zoom level and viewport,
         * and switch back to 0 whenever 45° imagery is not available (this is the default behavior).
         * 45° imagery is only available for {@link MapTypeId.SATELLITE satellite} and {@link MapTypeId.HYBRID hybrid} map types, within some locations, and at some zoom levels.
         * Note: getTilt returns the current tilt angle, not the value set by `setTilt`.
         * Because getTilt and setTilt refer to different things, do not `bind`() the `tilt` property; doing so may yield unpredictable effects.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.setTilt Maps JavaScript API}
         * @see {@link MapOptions#tilt}
         * @see {@link MapHandlerMap#tilt_changed}
         * @see {@link getTilt}
         */
        setTilt(tilt: number): void;

        /**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.setZoom Maps JavaScript API}
         * @see {@link MapOptions#zoom}
         * @see {@link MapHandlerMap#zoom_changed zoom_changed} event
         * @see {@link fitBounds}
         * @see {@link getZoom}
         * @see {@link panToBounds}
         */
        setZoom(zoom: number): void;

        /**
         * Additional controls to attach to the map.
         * To add a control to the map, add the control's `<div>` to the {@link MVCArray} corresponding to the {@link ControlPosition} where it should be rendered.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.controls Maps JavaScript API}
         */
        controls: Array<MVCArray<Node>>;

        /**
         * An instance of {@link Data}, bound to the map.
         * Add features to this Data object to conveniently display them on this map.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.data Maps JavaScript API}
         */
        data: Data;

        /**
         * A registry of {@link MapType} instances by string ID.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.mapTypes Maps JavaScript API}
         */
        mapTypes: MapTypeRegistry;

        /**
         * Additional map types to overlay.
         * Overlay map types will display on top of the base map they are attached to, in the order in which they appear in the
         * `overlayMapTypes` array (overlays with higher index values are displayed in front of overlays with lower index values).
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.overlayMapTypes Maps JavaScript API}
         */
        overlayMapTypes: MVCArray<MapType>;

        /**
         * Controls whether the map icons are clickable or not. A map icon represents a point of interest, also known as a POI.
         * To disable the clickability of map icons, pass a value of `false` to this method.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map.setClickableIcons Maps JavaScript API}
         * @see {@link MapOptions#clickableIcons}
         * @see {@link getClickableIcons}
         */
        setClickableIcons(clickable: boolean): void;
    }

    type GestureHandlingOptions = 'cooperative' | 'greedy' | 'none' | 'auto';

    interface MapOptions {
        /**
         * Color used for the background of the Map div. This color will be visible
         * when tiles have not yet loaded as the user pans. This option can only be
         * set when the map is initialized.
         */
        backgroundColor?: string;
        /** The initial Map center. Required. */
        center?: LatLng | LatLngLiteral;
        /**
         * When false, map icons are not clickable. A map icon represents a point of
         * interest, also known as a POI. By default map icons are clickable.
         */
        clickableIcons?: boolean;
        /**
         * Size in pixels of the controls appearing on the map. This value must be
         * supplied directly when creating the Map, updating this value later may
         * bring the controls into an undefined state. Only governs the controls
         * made by the Maps API itself. Does not scale developer created custom
         * controls.
         */
        controlSize?: number;
        /** Enables/disables all default UI. May be overridden individually. */
        disableDefaultUI?: boolean;
        /** Enables/disables zoom and center on double click. Enabled by default. */
        disableDoubleClickZoom?: boolean;
        /**
         * If false, prevents the map from being dragged. Dragging is enabled by
         * default.
         */
        draggable?: boolean;
        /**
         * The name or url of the cursor to display when mousing over a draggable
         * map. This property uses the css cursor attribute to change the icon. As
         * with the css property, you must specify at least one fallback cursor that
         * is not a URL. For example: draggableCursor:
         * 'url(http://www.example.com/icon.png), auto;'.
         */
        draggableCursor?: string;
        /**
         * The name or url of the cursor to display when the map is being dragged.
         * This property uses the css cursor attribute to change the icon. As with
         * the css property, you must specify at least one fallback cursor that is
         * not a URL. For example: draggingCursor:
         * 'url(http://www.example.com/icon.png), auto;'.
         */
        draggingCursor?: string;
        /** The enabled/disabled state of the Fullscreen control. */
        fullscreenControl?: boolean;
        /** The display options for the Fullscreen control. */
        fullscreenControlOptions?: FullscreenControlOptions;
        /**
         * This setting controls how gestures on the map are handled.
         */
        gestureHandling?: GestureHandlingOptions;
        /**
         * The heading for aerial imagery in degrees measured clockwise from
         * cardinal direction North. Headings are snapped to the nearest available
         * angle for which imagery is available.
         */
        heading?: number;
        /**
         * If false, prevents the map from being controlled by the keyboard.
         * Keyboard shortcuts are enabled by default.
         */
        keyboardShortcuts?: boolean;
        /** The initial enabled/disabled state of the Map type control. */
        mapTypeControl?: boolean;
        /** The initial display options for the Map type control. */
        mapTypeControlOptions?: MapTypeControlOptions;
        /** The initial Map mapTypeId. Defaults to ROADMAP. */
        mapTypeId?: MapTypeId | string;
        /**
         * The maximum zoom level which will be displayed on the map. If omitted, or
         * set to null, the maximum zoom from the current map type is used instead.
         * Valid values: Integers between zero, and up to the supported maximum zoom
         * level.
         */
        maxZoom?: number;
        /**
         * The minimum zoom level which will be displayed on the map. If omitted, or
         * set to null, the minimum zoom from the current map type is used instead.
         * Valid values: Integers between zero, and up to the supported maximum zoom
         * level.
         */
        minZoom?: number;
        /** If true, do not clear the contents of the Map div. */
        noClear?: boolean;
        /**
         * The enabled/disabled state of the Pan control.
         * Note: The Pan control is not available in the new set of controls
         * introduced in v3.22 of the Google Maps JavaScript API. While using v3.22
         * and v3.23, you can choose to use the earlier set of controls rather than
         * the new controls, thus making the Pan control available as part of the
         * old control set. See {@link
         * https://developers.google.com/maps/articles/v322-controls-diff|What's New
         * in the v3.22 Map Controls}.
         */
        panControl?: boolean;
        /**
         * The display options for the Pan control.
         * Note: The Pan control is not available in the new set of controls
         * introduced in v3.22 of the Google Maps JavaScript API. While using v3.22
         * and v3.23, you can choose to use the earlier set of controls rather than
         * the new controls, thus making the Pan control available as part of the
         * old control set. See {@link
         * https://developers.google.com/maps/articles/v322-controls-diff|What's New
         * in the v3.22 Map Controls}.
         */
        panControlOptions?: PanControlOptions;
        /**
         * Defines a boundary that restricts the area of the map accessible to users.
         * When set, a user can only pan and zoom while the camera view stays inside the
         * limits of the boundary.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.restriction Maps JavaScript API}
         */
        restriction?: MapRestriction;
        /** The enabled/disabled state of the Rotate control. */
        rotateControl?: boolean;
        /** The display options for the Rotate control. */
        rotateControlOptions?: RotateControlOptions;
        /** The initial enabled/disabled state of the Scale control. */
        scaleControl?: boolean;
        /** The initial display options for the Scale control. */
        scaleControlOptions?: ScaleControlOptions;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is
         * enabled by default.
         */
        scrollwheel?: boolean;
        /**
         * A StreetViewPanorama to display when the Street View pegman is dropped on
         * the map. If no panorama is specified, a default StreetViewPanorama will
         * be displayed in the map's div when the pegman is dropped.
         */
        streetView?: StreetViewPanorama;
        /**
         * The initial enabled/disabled state of the Street View Pegman control.
         * This control is part of the default UI, and should be set to false when
         * displaying a map type on which the Street View road overlay should not
         * appear (e.g. a non-Earth map type).
         */
        streetViewControl?: boolean;
        /** The initial display options for the Street View Pegman control. */
        streetViewControlOptions?: StreetViewControlOptions;
        /**
         * Styles to apply to each of the default map types. Note that for
         * satellite/hybrid and terrain modes, these styles will only apply to
         * labels and geometry.
         */
        styles?: MapTypeStyle[];
        /**
         * Controls the automatic switching behavior for the angle of incidence of
         * the map. The only allowed values are 0 and 45. The value 0 causes the map
         * to always use a 0° overhead view regardless of the zoom level and
         * viewport. The value 45 causes the tilt angle to automatically switch to
         * 45 whenever 45° imagery is available for the current zoom level and
         * viewport, and switch back to 0 whenever 45° imagery is not available
         * (this is the default behavior). 45° imagery is only available for
         * satellite and hybrid map types, within some locations, and at some zoom
         * levels. Note: getTilt returns the current tilt angle, not the value
         * specified by this option. Because getTilt and this option refer to
         * different things, do not bind() the tilt property; doing so may yield
         * unpredictable effects.
         */
        tilt?: number;
        /**
         * The initial Map zoom level. Required. Valid values: Integers between
         * zero, and up to the supported maximum zoom level.
         */
        zoom?: number;
        /** The enabled/disabled state of the Zoom control. */
        zoomControl?: boolean;
        /** The display options for the Zoom control. */
        zoomControlOptions?: ZoomControlOptions;
    }

    interface MapTypeStyle {
        elementType?: MapTypeStyleElementType;
        featureType?: MapTypeStyleFeatureType;
        stylers?: MapTypeStyler[];
    }

    /**
     * This object is returned from various mouse events on the map and overlays,
     * and contains all the fields shown below.
     */
    interface MouseEvent {
        /** Prevents this event from propagating further. */
        stop(): void;
        /**
         * The latitude/longitude that was below the cursor when the event
         * occurred.
         */
        latLng: LatLng;
    }

    /**
     * This object is sent in an event when a user clicks on an icon on the map.
     * The place ID of this place is stored in the placeId member.
     * To prevent the default info window from showing up, call the stop() method
     * on this event to prevent it being propagated. Learn more about place IDs in
     * the Places API developer guide.
     */
    interface IconMouseEvent extends MouseEvent {
        /**
         * The place ID of the place that was clicked.
         * This place ID can be used to query more information about the feature
         * that was clicked.
         */
        placeId: string;
    }

    /**
     * Identifiers for common MapTypes. Specify these by value, or by using the
     * constant's name. For example, 'satellite' or
     * google.maps.MapTypeId.SATELLITE.
     */
    enum MapTypeId {
        /** This map type displays a transparent layer of major streets on satellite images. */
        HYBRID = 'hybrid',
        /** This map type displays a normal street map. */
        ROADMAP = 'roadmap',
        /** This map type displays satellite images. */
        SATELLITE = 'satellite',
        /** This map type displays maps with physical features such as terrain and vegetation. */
        TERRAIN = 'terrain',
    }

    class MapTypeRegistry extends MVCObject {
        constructor();
        set(id: string, mapType: MapType): void;
    }

    /**
     * A restriction that can be applied to the Map. The map's viewport will not
     * exceed these restrictions.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#MapRestriction Maps JavaScript API}
     */
    interface MapRestriction {
        /**
         * When set, a user can only pan and zoom inside the given bounds.
         * Bounds can restrict both longitude and latitude, or can restrict
         * latitude only. For latitude-only bounds use west and east longitudes
         * of -180 and 180, respectively.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#MapRestriction.latLngBounds Maps JavaScript API}
         */
        latLngBounds: LatLngBounds | LatLngBoundsLiteral;
        /**
         * By default bounds are relaxed, meaning that a user can zoom out
         * until the entire bounded area is in view. Bounds can be made more
         * restrictive by setting the strictBounds flag to true. This reduces
         * how far a user can zoom out, ensuring that everything outside of the
         * restricted bounds stays hidden.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#MapRestriction.strictBounds Maps JavaScript API}
         */
        strictBounds?: boolean;
    }

    class TrafficLayer extends MVCObject {
        constructor(opts?: TrafficLayerOptions);
        getMap(): Map;
        setMap(map: Map | null): void;
        setOptions(options: TrafficLayerOptions): void;
    }

    interface TrafficLayerOptions {
        autoRefresh?: boolean;
        map?: Map;
    }

    class TransitLayer extends MVCObject {
        constructor();
        getMap(): void;
        setMap(map: Map | null): void;
    }

    class BicyclingLayer extends MVCObject {
        constructor();
        getMap(): Map;
        setMap(map: Map | null): void;
    }
}
