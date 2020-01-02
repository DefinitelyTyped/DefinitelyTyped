// Type definitions for Google Maps JavaScript API 3.39
// Project: https://developers.google.com/maps/
// Definitions by: Chris Wrench <https://github.com/cgwrench>,
//                 Kiarash Ghiaseddin <https://github.com/Silver-Connection>,
//                 Grant Hutchins <https://github.com/nertzy>,
//                 Denis Atyasov <https://github.com/xaolas>,
//                 Michael McMullin <https://github.com/mrmcnerd>,
//                 Martin Costello <https://github.com/martincostello>,
//                 Sven Kreiss <https://github.com/svenkreiss>
//                 Umar Bolatov <https://github.com/bolatovumar>
//                 Michael Gauthier <https://github.com/gauthierm>
//                 Colin Doig <https://github.com/captain-igloo>
//                 Dmitry Demensky <https://github.com/demensky>
//                 Vladimir Dashukevich <https://github.com/life777>
//                 Simon Haenisch <https://github.com/simonhaenisch>
//                 Gavin Nitta <https://github.com/gshigeto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 3.0

/*
The MIT License

Copyright (c) 2012 Folia A/S. http://www.folia.dk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

declare namespace google.maps {
    /**
     * Version of the Google Maps JavaScript API that the browser has loaded.
     * Like '3.38.11'.
     * @see {@link https://developers.google.com/maps/documentation/javascript/versions#version-checks Maps JavaScript API}
     */
    const version: string;

    /***** Map *****/

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

    interface Padding {
        bottom: number;
        left: number;
        right: number;
        top: number;
    }

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

    /***** Controls *****/
    /** Options for the rendering of the map type control. */
    interface MapTypeControlOptions {
        /** IDs of map types to show in the control. */
        mapTypeIds?: Array<MapTypeId | string>;
        /**
         * Position id. Used to specify the position of the control on the map.
         * The default position is TOP_RIGHT.
         */
        position?: ControlPosition;
        /** Style id. Used to select what style of map type control to display. */
        style?: MapTypeControlStyle;
    }

    enum MapTypeControlStyle {
        DEFAULT = 0,
        HORIZONTAL_BAR = 1,
        DROPDOWN_MENU = 2,
        INSET = 3,
        INSET_LARGE = 4,
    }

    type GestureHandlingOptions = 'cooperative' | 'greedy' | 'none' | 'auto';

    /** Options for the rendering of the pan control. */
    interface PanControlOptions {
        /**
         * Position id. Used to specify the position of the control on the map.
         * The default position is TOP_LEFT.
         */
        position?: ControlPosition;
    }

    /** Options for the rendering of the rotate control. */
    interface RotateControlOptions {
        /**
         * Position id. Used to specify the position of the control on the map.
         * The default position is TOP_LEFT.
         */
        position?: ControlPosition;
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

    /** Options for the rendering of the scale control. */
    interface ScaleControlOptions {
        /** Style id. Used to select what style of scale control to display. */
        style?: ScaleControlStyle;
    }

    enum ScaleControlStyle {
        DEFAULT = 0,
    }

    /** Options for the rendering of the Street View pegman control on the map. */
    interface StreetViewControlOptions {
        /**
         * Position id. Used to specify the position of the control on the map. The
         * default position is embedded within the navigation (zoom and pan)
         * controls. If this position is empty or the same as that specified in the
         * zoomControlOptions or panControlOptions, the Street View control will be
         * displayed as part of the navigation controls. Otherwise, it will be
         * displayed separately.
         */
        position?: ControlPosition;
    }

    /** Options for the rendering of the zoom control. */
    interface ZoomControlOptions {
        /**
         * Position id. Used to specify the position of the control on the map.
         * The default position is TOP_LEFT.
         */
        position?: ControlPosition;
        style?: ZoomControlStyle;
    }

    enum ZoomControlStyle {
        DEFAULT = 0,
        SMALL = 1,
        LARGE = 2,
    }

    /**
     * Identifiers used to specify the placement of controls on the map. Controls
     * are positioned relative to other controls in the same layout position.
     * Controls that are added first are positioned closer to the edge of the map.
     */
    enum ControlPosition {
        /** Elements are positioned in the center of the bottom row. */
        BOTTOM_CENTER = 11,
        /**
         * Elements are positioned in the bottom left and flow towards the middle.
         * Elements are positioned to the right of the Google logo.
         */
        BOTTOM_LEFT = 10,
        /**
         * Elements are positioned in the bottom right and flow towards the middle.
         * Elements are positioned to the left of the copyrights.
         */
        BOTTOM_RIGHT = 12,
        /**
         * Elements are positioned on the left, above bottom-left elements, and flow
         * upwards.
         */
        LEFT_BOTTOM = 6,
        /** Elements are positioned in the center of the left side. */
        LEFT_CENTER = 4,
        /**
         * Elements are positioned on the left, below top-left elements, and flow
         * downwards.
         */
        LEFT_TOP = 5,
        /**
         * Elements are positioned on the right, above bottom-right elements, and
         * flow upwards.
         */
        RIGHT_BOTTOM = 9,
        /** Elements are positioned in the center of the right side. */
        RIGHT_CENTER = 8,
        /** Elements are positioned on the right, below top-right elements, and flow downwards. */
        RIGHT_TOP = 7,
        /** Elements are positioned in the center of the top row. */
        TOP_CENTER = 2,
        /** Elements are positioned in the top right and flow towards the middle. */
        TOP_LEFT = 1,
        /** Elements are positioned in the top right and flow towards the middle. */
        TOP_RIGHT = 3,
    }

    type DrawingMode = 'Point' | 'LineString' | 'Polygon';

    /***** Data *****/
    class Data extends MVCObject {
        constructor(options?: Data.DataOptions);
        add(feature: Data.Feature | Data.FeatureOptions): Data.Feature;
        addGeoJson(geoJson: object, options?: Data.GeoJsonOptions): Data.Feature[];
        contains(feature: Data.Feature): boolean;
        forEach(callback: (feature: Data.Feature) => void): void;
        getControlPosition(): ControlPosition;
        getControls(): DrawingMode[];
        getDrawingMode(): DrawingMode | null;
        getFeatureById(id: number | string): Data.Feature;
        getMap(): Map;
        getStyle(): Data.StylingFunction | Data.StyleOptions;
        loadGeoJson(url: string, options?: Data.GeoJsonOptions, callback?: (features: Data.Feature[]) => void): void;
        overrideStyle(feature: Data.Feature, style: Data.StyleOptions): void;
        remove(feature: Data.Feature): void;
        revertStyle(feature?: Data.Feature): void;
        setControlPosition(controlPosition: ControlPosition): void;
        setControls(controls: DrawingMode[] | null): void;
        setDrawingMode(drawingMode: DrawingMode | null): void;
        setMap(map: Map | null): void;
        setStyle(style: Data.StylingFunction | Data.StyleOptions): void;
        toGeoJson(callback: (feature: object) => void): void;
    }

    namespace Data {
        interface DataOptions {
            controlPosition?: ControlPosition;
            controls?: DrawingMode[] | null;
            drawingMode?: DrawingMode | null;
            featureFactory?: (geometry: Geometry) => Feature;
            map?: Map;
            style?: StylingFunction | StyleOptions;
        }

        interface GeoJsonOptions {
            idPropertyName?: string;
        }

        interface StyleOptions {
            clickable?: boolean;
            cursor?: string;
            draggable?: boolean;
            editable?: boolean;
            fillColor?: string;
            fillOpacity?: number;
            // tslint:disable-next-line:no-unnecessary-qualifier
            icon?: string | Icon | google.maps.Symbol;
            shape?: MarkerShape;
            strokeColor?: string;
            strokeOpacity?: number;
            strokeWeight?: number;
            title?: string;
            visible?: boolean;
            zIndex?: number;
        }

        type StylingFunction = (feature: Feature) => StyleOptions;

        class Feature {
            constructor(options?: FeatureOptions);
            forEachProperty(callback: (value: any, name: string) => void): void;
            getGeometry(): Geometry;
            getId(): number | string;
            getProperty(name: string): any;
            removeProperty(name: string): void;
            setGeometry(newGeometry: Geometry | LatLng | LatLngLiteral): void;
            setProperty(name: string, newValue: any): void;
            toGeoJson(callback: (feature: object) => void): void;
        }

        interface FeatureOptions {
            geometry?: Geometry | LatLng | LatLngLiteral;
            id?: number | string;
            properties?: object;
        }

        class Geometry {
            getType(): string;
            forEachLatLng(callback: (latLng: LatLng) => void): void;
        }

        class Point extends Geometry {
            constructor(latLng: LatLng | LatLngLiteral);
            get(): LatLng;
        }

        class MultiPoint extends Geometry {
            constructor(elements: Array<LatLng | LatLngLiteral>);
            getArray(): LatLng[];
            getAt(n: number): LatLng;
            getLength(): number;
        }

        class LineString extends Geometry {
            constructor(elements: Array<LatLng | LatLngLiteral>);
            getArray(): LatLng[];
            getAt(n: number): LatLng;
            getLength(): number;
        }

        class MultiLineString extends Geometry {
            constructor(elements: Array<LineString | Array<LatLng | LatLngLiteral>>);
            getArray(): LineString[];
            getAt(n: number): LineString;
            getLength(): number;
        }

        class LinearRing extends Geometry {
            constructor(elements: Array<LatLng | LatLngLiteral>);
            getArray(): LatLng[];
            getAt(n: number): LatLng;
            getLength(): number;
        }

        class Polygon extends Geometry {
            constructor(elements: Array<LinearRing | Array<LatLng | LatLngLiteral>>);
            getArray(): LinearRing[];
            getAt(n: number): LinearRing;
            getLength(): number;
        }

        class MultiPolygon extends Geometry {
            constructor(elements: Array<Polygon | Array<LinearRing | Array<LatLng | LatLngLiteral>>>);
            getArray(): Polygon[];
            getAt(n: number): Polygon;
            getLength(): number;
        }

        class GeometryCollection extends Geometry {
            constructor(elements: Array<Geometry[] | LatLng[] | LatLngLiteral>);
            getArray(): Geometry[];
            getAt(n: number): Geometry;
            getLength(): number;
        }

        // tslint:disable-next-line:no-unnecessary-qualifier
        interface MouseEvent extends google.maps.MouseEvent {
            feature: Feature;
        }

        interface AddFeatureEvent {
            feature: Feature;
        }

        interface RemoveFeatureEvent {
            feature: Feature;
        }

        interface SetGeometryEvent {
            feature: Feature;
            newGeometry: Geometry;
            oldGeometry: Geometry;
        }

        interface SetPropertyEvent {
            feature: Feature;
            name: string;
            newValue: any;
            oldValue: any;
        }

        interface RemovePropertyEvent {
            feature: Feature;
            name: string;
            oldValue: any;
        }
    }

    /***** Overlays *****/

    type MarkerChangeOptionEventNames =
        | 'animation_changed'
        | 'clickable_changed'
        | 'cursor_changed'
        | 'draggable_changed'
        | 'flat_changed'
        | 'icon_changed'
        | 'position_changed'
        | 'shape_changed'
        | 'title_changed'
        | 'visible_changed'
        | 'zindex_changed';

    type MarkerMouseEventNames =
        | 'click'
        | 'dblclick'
        | 'drag'
        | 'dragend'
        | 'dragstart'
        | 'mousedown'
        | 'mouseout'
        | 'mouseover'
        | 'mouseup'
        | 'rightclick';

    /**
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker Maps JavaScript API}
     */
    class Marker extends MVCObject {
        /**
         * The maximum default `z-index` that the API will assign to a marker. You
         * may set a higher `z-index` to bring a marker to the front.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.MAX_ZINDEX Maps JavaScript API}
         */
        static readonly MAX_ZINDEX: number;

        /**
         * Creates a marker with the options specified. If a map is specified, the
         * marker is added to the map upon construction. Note that the position must
         * be set for the marker to display.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.constructor Maps JavaScript API}
         */
        constructor(opts?: ReadonlyMarkerOptions);

        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getAnimation Maps JavaScript API} */
        getAnimation(): Animation | null | undefined;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getClickable Maps JavaScript API} */
        getClickable(): boolean;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getCursor Maps JavaScript API} */
        getCursor(): string | null | undefined;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getDraggable Maps JavaScript API} */
        getDraggable(): boolean | null | undefined;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getIcon Maps JavaScript API} */
        getIcon(): string | ReadonlyIcon | ReadonlySymbol | null | undefined;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getLabel Maps JavaScript API} */
        getLabel(): ReadonlyMarkerLabel | null | undefined;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getMap Maps JavaScript API} */
        getMap(): Map | StreetViewPanorama | null | undefined;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getOpacity Maps JavaScript API} */
        getOpacity(): number | null | undefined;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getPosition Maps JavaScript API} */
        getPosition(): LatLng | null | undefined;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getShape Maps JavaScript API} */
        getShape(): MarkerShape | null | undefined;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getTitle Maps JavaScript API} */
        getTitle(): string | null | undefined;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getVisible Maps JavaScript API} */
        getVisible(): boolean;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.getZIndex Maps JavaScript API} */
        getZIndex(): number | null | undefined;
        /**
         * Start an animation. Any ongoing animation will be cancelled. Currently
         * supported animations are: {@link Animation.BOUNCE BOUNCE},
         * {@link Animation.DROP DROP}. Passing in `null` will cause any animation
         * to stop.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setAnimation Maps JavaScript API}
         */
        setAnimation(animation: Animation | null): void;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setClickable Maps JavaScript API} */
        setClickable(flag: boolean): void;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setCursor Maps JavaScript API} */
        setCursor(cursor: string | null): void;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setDraggable Maps JavaScript API} */
        setDraggable(flag: boolean | null): void;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setIcon Maps JavaScript API} */
        setIcon(icon: string | ReadonlyIcon | ReadonlySymbol | null): void;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setLabel Maps JavaScript API} */
        setLabel(label: string | ReadonlyMarkerLabel | null): void;
        /**
         * Renders the marker on the specified map or panorama. If map is set to
         * `null`, the marker will be removed.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setMap Maps JavaScript API}
         */
        setMap(map: Map | StreetViewPanorama | null): void;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setOpacity Maps JavaScript API} */
        setOpacity(opacity: number | null): void;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setOptions Maps JavaScript API} */
        setOptions(options: ReadonlyMarkerOptions): void;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setPosition Maps JavaScript API} */
        setPosition(latlng: LatLng | ReadonlyLatLngLiteral | null): void;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setShape Maps JavaScript API} */
        setShape(shape: MarkerShape | null): void;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setTitle Maps JavaScript API} */
        setTitle(title: string | null): void;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setVisible Maps JavaScript API} */
        setVisible(visible: boolean): void;
        /** @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.setZIndex Maps JavaScript API} */
        setZIndex(zIndex: number | null): void;
        addListener(eventName: MarkerChangeOptionEventNames, handler: (this: Marker) => void): MapsEventListener;
        addListener(
            eventName: MarkerMouseEventNames,
            handler: (this: Marker, event: MouseEvent) => void,
        ): MapsEventListener;
        /** @deprecated */
        addListener(eventName: string, handler: (this: Marker, ...args: any[]) => void): MapsEventListener;
    }

    /**
     * `MarkerOptions` object used to define the properties that can be set on a
     * {@link Marker}.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions Maps JavaScript API}
     */
    interface MarkerOptions {
        /**
         * The offset from the marker's position to the tip of an InfoWindow that
         * has been opened with the marker as anchor.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.anchorPoint Maps JavaScript API}
         */
        anchorPoint?: Point;
        /**
         * Which animation to play when marker is added to a map.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.animation Maps JavaScript API}
         */
        animation?: Animation;
        /**
         * If `true`, the marker receives mouse and touch events.
         * @default true
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.clickable Maps JavaScript API}
         */
        clickable?: boolean;
        /**
         * If `false`, disables cross that appears beneath the marker when dragging.
         * @default true
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.crossOnDrag Maps JavaScript API}
         */
        crossOnDrag?: boolean;
        /**
         * Mouse cursor to show on hover.
         * @default 'pointer'
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.cursor Maps JavaScript API}
         * @see {@link CSSStyleDeclaration#cursor}
         */
        cursor?: string;
        /**
         * If `true`, the marker can be dragged.
         * @default false
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.draggable Maps JavaScript API}
         */
        draggable?: boolean;
        /**
         * Icon for the foreground. If a `string` is provided, it is treated as
         * though it were an {@link Icon} with the `string` as {@link Icon#url url}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.icon Maps JavaScript API}
         */
        // tslint:disable-next-line:no-unnecessary-qualifier
        icon?: string | Icon | google.maps.Symbol;
        /**
         * Adds a label to the marker. The label can either be a `string`, or a
         * {@link MarkerLabel} object.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.label Maps JavaScript API}
         */
        label?: string | MarkerLabel;
        /**
         * Map on which to display Marker.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.map Maps JavaScript API}
         */
        map?: Map | StreetViewPanorama;
        /**
         * The marker's opacity between 0.0 and 1.0.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.opacity Maps JavaScript API}
         * @default 1.0
         */
        opacity?: number;
        /**
         * Optimization renders many markers as a single static element. Optimized
         * rendering is enabled by default. Disable optimized rendering for animated
         * GIFs or PNGs, or when each marker must be rendered as a separate DOM
         * element (advanced usage only).
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.optimized Maps JavaScript API}
         */
        optimized?: boolean;
        /**
         * Marker position.
         * **Note that the `position` must be set for the marker to display.**
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.position Maps JavaScript API}
         */
        position?: LatLng | LatLngLiteral;
        /**
         * Image map region definition used for drag/click.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.shape Maps JavaScript API}
         */
        shape?: MarkerShape;
        /**
         * Rollover text.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.title Maps JavaScript API}
         * @see {@link HTMLElement#title}
         */
        title?: string;
        /**
         * If `true`, the marker is visible.
         * @default true
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.visible Maps JavaScript API}
         */
        visible?: boolean;
        /**
         * All markers are displayed on the map in order of their `zIndex`, with
         * higher values displaying in front of markers with lower values. By
         * default, markers are displayed according to their vertical position on
         * screen, with lower markers appearing in front of markers further up the
         * screen.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.zIndex Maps JavaScript API}
         */
        zIndex?: number;
    }

    /** @see {@link MarkerOptions} */
    interface ReadonlyMarkerOptions {
        /** @see {@link MarkerOptions#anchorPoint} */
        readonly anchorPoint?: Point;
        /** @see {@link MarkerOptions#animation} */
        readonly animation?: Animation;
        /** @see {@link MarkerOptions#clickable} */
        readonly clickable?: boolean;
        /** @see {@link MarkerOptions#crossOnDrag} */
        readonly crossOnDrag?: boolean;
        /** @see {@link MarkerOptions#cursor} */
        readonly cursor?: string;
        /** @see {@link MarkerOptions#draggable} */
        readonly draggable?: boolean;
        /** @see {@link MarkerOptions#icon} */
        readonly icon?: string | ReadonlyIcon | ReadonlySymbol;
        /** @see {@link MarkerOptions#label} */
        readonly label?: string | ReadonlyMarkerLabel;
        /** @see {@link MarkerOptions#map} */
        readonly map?: Map | StreetViewPanorama;
        /** @see {@link MarkerOptions#opacity} */
        readonly opacity?: number;
        /** @see {@link MarkerOptions#optimized} */
        readonly optimized?: boolean;
        /** @see {@link MarkerOptions#place} */
        readonly place?: Place;
        /** @see {@link MarkerOptions#position} */
        readonly position?: LatLng | ReadonlyLatLngLiteral;
        /** @see {@link MarkerOptions#shape} */
        readonly shape?: MarkerShape;
        /** @see {@link MarkerOptions#title} */
        readonly title?: string;
        /** @see {@link MarkerOptions#visible} */
        readonly visible?: boolean;
        /** @see {@link MarkerOptions#zIndex} */
        readonly zIndex?: number;
    }

    /**
     * A structure representing a Marker icon image.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon Maps JavaScript API}
     */
    interface Icon {
        /**
         * The position at which to anchor an image in correspondence to the
         * location of the marker on the map. By default, the anchor is located
         * along the center point of the bottom of the image.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon.anchor Maps JavaScript API}
         */
        anchor?: Point;
        /**
         * The origin of the label relative to the top-left corner of the icon
         * image, if a label is supplied by the marker. By default, the origin is
         * located in the center point of the image.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon.labelOrigin Maps JavaScript API}
         */
        labelOrigin?: Point;
        /**
         * The position of the image within a sprite, if any.
         * @default new google.maps.Point(0, 0)
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon.origin Maps JavaScript API}
         */
        origin?: Point;
        /**
         * The size of the entire image after scaling, if any. Use this property to
         * stretch/shrink an image or a sprite.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon.scaledSize Maps JavaScript API}
         */
        scaledSize?: Size;
        /**
         * The display size of the sprite or image. When using sprites, you must
         * specify the sprite size. If the size is not provided, it will be set when
         * the image loads.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon.size Maps JavaScript API}
         */
        size?: Size;
        /**
         * The URL of the image or sprite sheet.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Icon.url Maps JavaScript API}
         */
        url: string;
    }

    /** @see {@link Icon} */
    interface ReadonlyIcon {
        /** @see {@link Icon#anchor} */
        readonly anchor?: Point;
        /** @see {@link Icon#labelOrigin} */
        readonly labelOrigin?: Point;
        /** @see {@link Icon#origin} */
        readonly origin?: Point;
        /** @see {@link Icon#scaledSize} */
        readonly scaledSize?: Size;
        /** @see {@link Icon#size} */
        readonly size?: Size;
        /** @see {@link Icon#url} */
        readonly url: string;
    }

    /**
     * These options specify the appearance of a marker label. A marker label is a
     * single character of text which will appear inside the marker. If you are
     * using it with a custom marker, you can reposition it with the
     * {@link Icon#labelOrigin labelOrigin} property in the {@link Icon} class.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel Maps JavaScript API}
     */
    interface MarkerLabel {
        /**
         * The color of the label text.
         * @default 'black'
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel.color Maps JavaScript API}
         * @see {@link CSSStyleDeclaration#color}
         */
        color?: string;
        /**
         * The font family of the label text.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel.fontFamily Maps JavaScript API}
         * @see {@link CSSStyleDeclaration#fontFamily}
         */
        fontFamily?: string;
        /**
         * The font size of the label text.
         * @default '14px'
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel.fontSize Maps JavaScript API}
         * @see {@link CSSStyleDeclaration#fontSize}
         */
        fontSize?: string;
        /**
         * The font weight of the label text.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel.fontWeight Maps JavaScript API}
         * @see {@link CSSStyleDeclaration#fontWeight}
         */
        fontWeight?: string;
        /**
         * The text to be displayed in the label.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel.text Maps JavaScript API}
         */
        text: string;
    }

    /** @see {@link MarkerLabel} */
    interface ReadonlyMarkerLabel {
        /** @see {@link MarkerLabel#color} */
        color?: string;
        /** @see {@link MarkerLabel#fontFamily} */
        fontFamily?: string;
        /** @see {@link MarkerLabel#fontSize} */
        fontSize?: string;
        /** @see {@link MarkerLabel#fontWeight} */
        fontWeight?: string;
        /** @see {@link MarkerLabel#text} */
        text: string;
    }

    interface MarkerShapePolyCoords extends Array<number> {
        0: number;
        1: number;
        2: number;
        3: number;
    }

    interface MarkerShapeCircle {
        type: 'circle';
        /**
         * Coords is **[x1,y1,r]** where x1,y2 are the coordinates of the center of
         * the circle, and r is the radius of the circle.
         */
        coords: [number, number, number];
    }

    interface MarkerShapeRect {
        type: 'rect';
        /**
         * Coords is **[x1,y1,x2,y2]** where x1,y1 are the coordinates of the
         * upper-left corner of the rectangle and x2,y2 are the coordinates of the
         * lower-right coordinates of the rectangle.
         */
        coords: [number, number, number, number];
    }

    interface MarkerShapePoly {
        type: 'poly';
        /**
         * Coords is **[x1,y1,x2,y2...xn,yn]** where each x,y pair contains the
         * coordinates of one vertex of the polygon.
         */
        coords: MarkerShapePolyCoords;
    }

    /**
     * This object defines the clickable region of a marker image. The shape
     * consists of two properties — `type` and `coord` — which define the
     * non-transparent region of an image.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerShape Maps JavaScript API}
     */
    type MarkerShape = MarkerShapeCircle | MarkerShapeRect | MarkerShapePoly;

    /**
     * Describes a symbol, which consists of a vector path with styling. A symbol
     * can be used as the icon of a marker, or placed on a polyline.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol Maps JavaScript API}
     */
    interface Symbol {
        /**
         * The position of the symbol relative to the marker or polyline. The
         * coordinates of the symbol's path are translated left and up by the
         * anchor's x and y coordinates respectively. The position is expressed in
         * the same coordinate system as the symbol's path.
         * @default new google.maps.Point(0, 0)
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.anchor Maps JavaScript API}
         */
        anchor?: Point;
        /**
         * The symbol's fill color. All CSS3 colors are supported except for
         * extended named colors. For symbol markers, this defaults to 'black'.
         * For symbols on polylines, this defaults to the stroke color of the
         * corresponding polyline.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.fillColor Maps JavaScript API}
         */
        fillColor?: string;
        /**
         * The symbol's fill opacity.
         * @default 1
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.fillOpacity Maps JavaScript API}
         */
        fillOpacity?: number;
        /**
         * The origin of the label relative to the origin of the path, if label is
         * supplied by the marker. The origin is expressed in the same coordinate
         * system as the symbol's path. This property is unused for symbols on
         * polylines.
         * @default new google.maps.Point(0, 0)
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.labelOrigin Maps JavaScript API}
         */
        labelOrigin?: Point;
        /**
         * The symbol's path, which is a built-in symbol path, or a custom path
         * expressed using
         * {@link http://www.w3.org/TR/SVG/paths.html#PathData SVG path notation}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.path Maps JavaScript API}
         */
        path: SymbolPath | string;
        /**
         * The angle by which to rotate the symbol, expressed clockwise in degrees.
         * A symbol in an {@link IconSequence} where
         * {@link IconSequence#fixedRotation fixedRotation} is false is rotated
         * relative to the angle of the edge on which it lies.
         * @default 0
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.rotation Maps JavaScript API}
         */
        rotation?: number;
        /**
         * The amount by which the symbol is scaled in size. For symbol markers,
         * this defaults to 1; after scaling, the symbol may be of any size. For
         * symbols on a polyline, this defaults to the stroke weight of the
         * polyline; after scaling, the symbol must lie inside a square 22 pixels in
         * size centered at the symbol's anchor.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.scale Maps JavaScript API}
         */
        scale?: number;
        /**
         * The symbol's stroke color. All CSS3 colors are supported except for
         * extended named colors. For symbol markers, this defaults to 'black'. For
         * symbols on a polyline, this defaults to the stroke color of the polyline.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.strokeColor Maps JavaScript API}
         */
        strokeColor?: string;
        /**
         * The symbol's stroke opacity. For symbol markers, this defaults to 1. For
         * symbols on a polyline, this defaults to the stroke opacity of the
         * polyline.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.strokeOpacity Maps JavaScript API}
         */
        strokeOpacity?: number;
        /**
         * The symbol's stroke weight. Defaults to the scale of the symbol.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol.strokeWeight Maps JavaScript API}
         */
        strokeWeight?: number;
    }

    /** @see {@link Symbol} */
    interface ReadonlySymbol {
        /** @see {@link Symbol#anchor} */
        readonly anchor?: Point;
        /** @see {@link Symbol#fillColor} */
        readonly fillColor?: string;
        /** @see {@link Symbol#fillOpacity} */
        readonly fillOpacity?: number;
        /** @see {@link Symbol#labelOrigin} */
        readonly labelOrigin?: Point;
        /** @see {@link Symbol#path} */
        readonly path: SymbolPath | string;
        /** @see {@link Symbol#rotation} */
        readonly rotation?: number;
        /** @see {@link Symbol#scale} */
        readonly scale?: number;
        /** @see {@link Symbol#strokeColor} */
        readonly strokeColor?: string;
        /** @see {@link Symbol#strokeOpacity} */
        readonly strokeOpacity?: number;
        /** @see {@link Symbol#strokeWeight} */
        readonly strokeWeight?: number;
    }

    /**
     * Built-in symbol paths.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#SymbolPath Maps JavaScript API}
     */
    enum SymbolPath {
        /**
         * A backward-pointing closed arrow.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#SymbolPath.BACKWARD_CLOSED_ARROW Maps JavaScript API}
         */
        BACKWARD_CLOSED_ARROW = 3,
        /**
         * A backward-pointing open arrow.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#SymbolPath.BACKWARD_OPEN_ARROW Maps JavaScript API}
         */
        BACKWARD_OPEN_ARROW = 4,
        /**
         * A circle.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#SymbolPath.CIRCLE Maps JavaScript API}
         */
        CIRCLE = 0,
        /**
         * A forward-pointing closed arrow.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#SymbolPath.FORWARD_CLOSED_ARROW Maps JavaScript API}
         */
        FORWARD_CLOSED_ARROW = 1,
        /**
         * A forward-pointing open arrow.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#SymbolPath.FORWARD_OPEN_ARROW Maps JavaScript API}
         */
        FORWARD_OPEN_ARROW = 2,
    }

    /**
     * Animations that can be played on a marker. Use the
     * {@link Marker#setAnimation setAnimation} method on Marker or the
     * {@link MarkerOptions#animation animation} option to play an animation.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Animation Maps JavaScript API}
     */
    enum Animation {
        /**
         * Marker bounces until animation is stopped.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Animation.BOUNCE Maps JavaScript API}
         */
        BOUNCE = 1,
        /**
         * Marker falls from the top of the map ending with a small bounce.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/marker#Animation.DROP Maps JavaScript API}
         */
        DROP = 2,
    }

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

    class Polyline extends MVCObject {
        constructor(opts?: PolylineOptions);
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getPath(): MVCArray<LatLng>;
        getVisible(): boolean;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map | null): void;
        setOptions(options: PolylineOptions): void;
        setPath(path: MVCArray<LatLng> | LatLng[] | LatLngLiteral[]): void;
        setVisible(visible: boolean): void;
    }

    interface PolylineOptions {
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        clickable?: boolean;
        /**
         * If set to true, the user can drag this shape over the map.
         * The geodesic property defines the mode of dragging. Defaults to false.
         */
        draggable?: boolean;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        editable?: boolean;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions are
         * maintained relative to the surface of the earth. Defaults to false.
         */
        geodesic?: boolean;
        /** The icons to be rendered along the polyline. */
        icons?: IconSequence[];
        /** Map on which to display Polyline. */
        map?: Map;
        /**
         * The ordered sequence of coordinates of the Polyline.
         * This path may be specified using either a simple array of LatLngs, or an
         * MVCArray of LatLngs. Note that if you pass a simple array, it will be
         * converted to an MVCArray Inserting or removing LatLngs in the MVCArray
         * will automatically update the polyline on the map.
         */
        path?: MVCArray<LatLng> | LatLng[] | LatLngLiteral[];
        /**
         * The stroke color. All CSS3 colors are supported except for extended
         * named colors.
         */
        strokeColor?: string;
        /** The stroke opacity between 0.0 and 1.0. */
        strokeOpacity?: number;
        /** The stroke width in pixels. */
        strokeWeight?: number;
        /** Whether this polyline is visible on the map. Defaults to true. */
        visible?: boolean;
        /** The zIndex compared to other polys. */
        zIndex?: number;
    }

    interface IconSequence {
        fixedRotation?: boolean;
        // tslint:disable-next-line:no-unnecessary-qualifier
        icon?: google.maps.Symbol;
        offset?: string;
        repeat?: string;
    }

    class Polygon extends MVCObject {
        constructor(opts?: PolygonOptions);
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        /** Retrieves the first path. */
        getPath(): MVCArray<LatLng>;
        /** Retrieves the paths for this polygon. */
        getPaths(): MVCArray<MVCArray<LatLng>>;
        getVisible(): boolean;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map | null): void;
        setOptions(options: PolygonOptions): void;
        setPath(path: MVCArray<LatLng> | LatLng[] | LatLngLiteral[]): void;
        setPaths(
            paths:
                | MVCArray<MVCArray<LatLng>>
                | MVCArray<LatLng>
                | LatLng[][]
                | LatLngLiteral[][]
                | LatLng[]
                | LatLngLiteral[],
        ): void;
        setVisible(visible: boolean): void;
    }

    interface PolygonOptions {
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */
        clickable?: boolean;
        /**
         * If set to true, the user can drag this shape over the map.
         * The geodesic property defines the mode of dragging. Defaults to false.
         */
        draggable?: boolean;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        editable?: boolean;
        /**
         * The fill color. All CSS3 colors are supported except for extended named
         * colors.
         */
        fillColor?: string;
        /** The fill opacity between 0.0 and 1.0 */
        fillOpacity?: number;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions are
         * maintained relative to the surface of the earth. Defaults to false.
         */
        geodesic?: boolean;
        /** Map on which to display Polygon. */
        map?: Map;
        /**
         * The ordered sequence of coordinates that designates a closed loop. Unlike
         * polylines, a polygon may consist of one or more paths. As a result, the
         * paths property may specify one or more arrays of LatLng coordinates.
         * Paths are closed automatically; do not repeat the first vertex of the
         * path as the last vertex. Simple polygons may be defined using a single
         * array of LatLngs. More complex polygons may specify an array of arrays.
         * Any simple arrays are converted into MVCArrays. Inserting or removing
         * LatLngs from the MVCArray will automatically update the polygon on the
         * map.
         */
        paths?:
            | MVCArray<MVCArray<LatLng>>
            | MVCArray<LatLng>
            | LatLng[][]
            | LatLngLiteral[][]
            | LatLng[]
            | LatLngLiteral[];
        /**
         * The stroke color.
         * All CSS3 colors are supported except for extended named colors.
         */
        strokeColor?: string;
        /** The stroke opacity between 0.0 and 1.0 */
        strokeOpacity?: number;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        strokePosition?: StrokePosition;
        /** The stroke width in pixels. */
        strokeWeight?: number;
        /** Whether this polygon is visible on the map. Defaults to true. */
        visible?: boolean;
        /** The zIndex compared to other polys. */
        zIndex?: number;
    }

    interface PolyMouseEvent extends MouseEvent {
        edge?: number;
        path?: number;
        vertex?: number;
    }

    class Rectangle extends MVCObject {
        constructor(opts?: RectangleOptions);
        getBounds(): LatLngBounds;
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getVisible(): boolean;
        setBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map | null): void;
        setOptions(options: RectangleOptions): void;
        setVisible(visible: boolean): void;
    }

    interface RectangleOptions {
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        clickable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        fillColor?: string;
        fillOpacity?: number;
        map?: Map;
        strokeColor?: string;
        strokeOpacity?: number;
        strokePosition?: StrokePosition;
        strokeWeight?: number;
        visible?: boolean;
        zIndex?: number;
    }

    /** A circle on the Earth's surface; also known as a "spherical cap". */
    class Circle extends MVCObject {
        /**
         * Create a circle using the passed CircleOptions, which specify the
         * center, radius, and style.
         */
        constructor(opts?: CircleOptions);
        /** Gets the LatLngBounds of this Circle. */
        getBounds(): LatLngBounds;
        /** Returns the center of this circle. */
        getCenter(): LatLng;
        /** Returns whether this circle can be dragged by the user. */
        getDraggable(): boolean;
        /** Returns whether this circle can be edited by the user. */
        getEditable(): boolean;
        /** Returns the map on which this circle is displayed. */
        getMap(): Map;
        /** Returns the radius of this circle (in meters). */
        getRadius(): number;
        /** Returns whether this circle is visible on the map. */
        getVisible(): boolean;
        /** Sets the center of this circle. */
        setCenter(center: LatLng | LatLngLiteral): void;
        /** If set to true, the user can drag this circle over the map. */
        setDraggable(draggable: boolean): void;
        /**
         * If set to true, the user can edit this circle by dragging the control
         * points shown at the center and around the circumference of the circle.
         */
        setEditable(editable: boolean): void;
        /**
         * Renders the circle on the specified map. If map is set to null, the
         * circle will be removed.
         */
        setMap(map: Map | null): void;
        setOptions(options: CircleOptions): void;
        /** Sets the radius of this circle (in meters). */
        setRadius(radius: number): void;
        /** Hides this circle if set to false. */
        setVisible(visible: boolean): void;
    }

    interface CircleOptions {
        /** The center */
        center?: LatLng | LatLngLiteral;
        /** Indicates whether this Circle handles mouse events. Defaults to true. */
        clickable?: boolean;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to
         * false.
         */
        draggable?: boolean;
        /**
         * If set to true, the user can edit this circle by dragging the control
         * points shown at the center and around the circumference of the circle.
         * Defaults to false.
         */
        editable?: boolean;
        /**
         * The fill color. All CSS3 colors are supported except for extended named
         * colors.
         */
        fillColor?: string;
        /** The fill opacity between 0.0 and 1.0 */
        fillOpacity?: number;
        /** Map on which to display Circle. */
        map?: Map;
        /** The radius in meters on the Earth's surface */
        radius?: number;
        /**
         * The stroke color. All CSS3 colors are supported except for extended
         * named colors.
         */
        strokeColor?: string;
        /** The stroke opacity between 0.0 and 1.0 */
        strokeOpacity?: number;
        /**
         * The stroke position. Defaults to CENTER. This property is not supported
         * on Internet Explorer 8 and earlier.
         */
        strokePosition?: StrokePosition;
        /** The stroke width in pixels. */
        strokeWeight?: number;
        /** Whether this circle is visible on the map. Defaults to true. */
        visible?: boolean;
        /** The zIndex compared to other polys. */
        zIndex?: number;
    }

    interface CircleLiteral extends CircleOptions {
        /** The center of the Circle. */
        center?: LatLng | LatLngLiteral;
        /** The radius in meters on the Earth's surface. */
        radius?: number;
    }

    /**
     * The possible positions of the stroke on a polygon.
     */
    enum StrokePosition {
        /**
         * The stroke is centered on the polygon's path, with half the stroke inside
         * the polygon and half the stroke outside the polygon.
         */
        CENTER = 0,
        /** The stroke lies inside the polygon. */
        INSIDE = 1,
        /** The stroke lies outside the polygon. */
        OUTSIDE = 2,
    }

    class GroundOverlay extends MVCObject {
        constructor(url: string, bounds: LatLngBounds | LatLngBoundsLiteral, opts?: GroundOverlayOptions);
        getBounds(): LatLngBounds;
        getMap(): Map;
        getOpacity(): number;
        getUrl(): string;
        setMap(map: Map | null): void;
        setOpacity(opacity: number): void;
    }

    interface GroundOverlayOptions {
        clickable?: boolean;
        map?: Map;
        opacity?: number;
    }

    class OverlayView extends MVCObject {
        draw(): void;
        getMap(): Map | StreetViewPanorama;
        getPanes(): MapPanes;
        getProjection(): MapCanvasProjection;
        onAdd(): void;
        onRemove(): void;
        setMap(map: Map | StreetViewPanorama | null): void;
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

    class MapCanvasProjection extends MVCObject {
        fromContainerPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;
        fromDivPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;
        fromLatLngToContainerPixel(latLng: LatLng): Point;
        fromLatLngToDivPixel(latLng: LatLng): Point;
        getWorldWidth(): number;
    }

    /***** Services *****/
    class Geocoder {
        geocode(request: GeocoderRequest, callback: (results: GeocoderResult[], status: GeocoderStatus) => void): void;
    }

    interface GeocoderRequest {
        address?: string;
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        componentRestrictions?: GeocoderComponentRestrictions;
        location?: LatLng | LatLngLiteral;
        placeId?: string;
        region?: string;
    }

    interface GeocoderComponentRestrictions {
        administrativeArea?: string;
        country?: string | string[];
        locality?: string;
        postalCode?: string;
        route?: string;
    }

    enum GeocoderStatus {
        ERROR = 'ERROR',
        INVALID_REQUEST = 'INVALID_REQUEST',
        OK = 'OK',
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
        REQUEST_DENIED = 'REQUEST_DENIED',
        UNKNOWN_ERROR = 'UNKNOWN_ERROR',
        ZERO_RESULTS = 'ZERO_RESULTS',
    }

    interface GeocoderResult {
        address_components: GeocoderAddressComponent[];
        formatted_address: string;
        geometry: GeocoderGeometry;
        partial_match: boolean;
        place_id: string;
        postcode_localities: string[];
        types: string[];
    }

    interface GeocoderAddressComponent {
        long_name: string;
        short_name: string;
        types: string[];
    }

    interface GeocoderGeometry {
        bounds: LatLngBounds;
        location: LatLng;
        location_type: GeocoderLocationType;
        viewport: LatLngBounds;
    }

    enum GeocoderLocationType {
        APPROXIMATE = 'APPROXIMATE',
        GEOMETRIC_CENTER = 'GEOMETRIC_CENTER',
        RANGE_INTERPOLATED = 'RANGE_INTERPOLATED',
        ROOFTOP = 'ROOFTOP',
    }

    class DirectionsRenderer extends MVCObject {
        constructor(opts?: DirectionsRendererOptions);
        getDirections(): DirectionsResult;
        getMap(): Map;
        getPanel(): Element;
        getRouteIndex(): number;
        setDirections(directions: DirectionsResult): void;
        setMap(map: Map | null): void;
        setOptions(options: DirectionsRendererOptions): void;
        setPanel(panel: Element): void;
        setRouteIndex(routeIndex: number): void;
    }

    interface DirectionsRendererOptions {
        directions?: DirectionsResult;
        draggable?: boolean;
        hideRouteList?: boolean;
        infoWindow?: InfoWindow;
        map?: Map;
        markerOptions?: MarkerOptions;
        panel?: Element;
        polylineOptions?: PolylineOptions;
        preserveViewport?: boolean;
        routeIndex?: number;
        suppressBicyclingLayer?: boolean;
        suppressInfoWindows?: boolean;
        suppressMarkers?: boolean;
        suppressPolylines?: boolean;
    }

    class DirectionsService {
        route(request: DirectionsRequest, callback: (result: DirectionsResult, status: DirectionsStatus) => void): void;
    }

    /** A directions query to be sent to the DirectionsService. */
    interface DirectionsRequest {
        /**
         * If true, instructs the Directions service to avoid ferries where
         * possible. Optional.
         */
        avoidFerries?: boolean;
        /**
         * If true, instructs the Directions service to avoid highways where
         * possible. Optional.
         */
        avoidHighways?: boolean;
        /**
         * If true, instructs the Directions service to avoid toll roads where
         * possible. Optional.
         */
        avoidTolls?: boolean;
        /**
         * Location of destination. This can be specified as either a string to be
         * geocoded, or a LatLng, or a Place. Required.
         */
        destination?: string | LatLng | LatLngLiteral | Place;
        /** Deprecated. Use drivingOptions field instead */
        durationInTraffic?: boolean;
        /**
         * Settings that apply only to requests where travelMode is DRIVING. This
         * object will have no effect for other travel modes.
         */
        drivingOptions?: DrivingOptions;
        /**
         * If set to true, the DirectionService will attempt to re-order the
         * supplied intermediate waypoints to minimize overall cost of the route. If
         * waypoints are optimized, inspect DirectionsRoute.waypoint_order in the
         * response to determine the new ordering.
         */
        optimizeWaypoints?: boolean;
        /**
         * Location of origin. This can be specified as either a string to be
         * geocoded, or a LatLng, or a Place. Required.
         */
        origin?: string | LatLng | LatLngLiteral | Place;
        /** Whether or not route alternatives should be provided. Optional. */
        provideRouteAlternatives?: boolean;
        /** Region code used as a bias for geocoding requests. Optional. */
        region?: string;
        /**
         * Settings that apply only to requests where travelMode is TRANSIT. This
         * object will have no effect for other travel modes.
         */
        transitOptions?: TransitOptions;
        /** Type of routing requested. Required. */
        travelMode?: TravelMode;
        /**
         * Preferred unit system to use when displaying distance. Defaults to the
         * unit system used in the country of origin.
         */
        unitSystem?: UnitSystem;
        /**
         * Array of intermediate waypoints. Directions will be calculated from the
         * origin to the destination by way of each waypoint in this array. The
         * maximum allowed waypoints is 8, plus the origin, and destination. Premium
         * Plan customers are allowed 23 waypoints, plus the origin, and
         * destination. Waypoints are not supported for transit directions.
         * Optional.
         */
        waypoints?: DirectionsWaypoint[];
    }

    enum TravelMode {
        BICYCLING = 'BICYCLING',
        DRIVING = 'DRIVING',
        TRANSIT = 'TRANSIT',
        TWO_WHEELER = 'TWO_WHEELER',
        WALKING = 'WALKING',
    }

    enum UnitSystem {
        METRIC = 0,
        IMPERIAL = 1,
    }

    interface TransitOptions {
        arrivalTime?: Date;
        departureTime?: Date;
        modes?: TransitMode[];
        routingPreference?: TransitRoutePreference;
    }

    enum TransitMode {
        BUS = 'BUS',
        RAIL = 'RAIL',
        SUBWAY = 'SUBWAY',
        TRAIN = 'TRAIN',
        TRAM = 'TRAM',
    }

    enum TransitRoutePreference {
        FEWER_TRANSFERS = 'FEWER_TRANSFERS',
        LESS_WALKING = 'LESS_WALKING',
    }

    interface TransitFare {
        currency: string;
        value: number;
    }

    interface DrivingOptions {
        departureTime: Date;
        trafficModel?: TrafficModel;
    }

    enum TrafficModel {
        BEST_GUESS = 'bestguess',
        OPTIMISTIC = 'optimistic',
        PESSIMISTIC = 'pessimistic',
    }

    /**
     * A DirectionsWaypoint represents a location between origin and destination
     * through which the trip should be routed.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsWaypoint Maps JavaScript API}
     */
    interface DirectionsWaypoint {
        /**
         * Waypoint location. Can be an address string, a {@link LatLng}, or a
         * {@link Place}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsWaypoint.location Maps JavaScript API}
         */
        location?: string | LatLng | Place;
        /**
         * If `true`, indicates that this waypoint is a stop between the origin and
         * destination. This has the effect of splitting the route into two legs. If
         * `false`, indicates that the route should be biased to go through this
         * waypoint, but not split into two legs. This is useful if you want to
         * create a route in response to the user dragging waypoints on a map.
         * @default true
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsWaypoint.stopover Maps JavaScript API}
         */
        stopover?: boolean;
    }

    enum DirectionsStatus {
        INVALID_REQUEST = 'INVALID_REQUEST',
        MAX_WAYPOINTS_EXCEEDED = 'MAX_WAYPOINTS_EXCEEDED',
        NOT_FOUND = 'NOT_FOUND',
        OK = 'OK',
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
        REQUEST_DENIED = 'REQUEST_DENIED',
        UNKNOWN_ERROR = 'UNKNOWN_ERROR',
        ZERO_RESULTS = 'ZERO_RESULTS',
    }

    interface DirectionsResult {
        geocoded_waypoints: DirectionsGeocodedWaypoint[];
        routes: DirectionsRoute[];
    }

    /**
     * A single geocoded waypoint.
     */
    interface DirectionsGeocodedWaypoint {
        partial_match: boolean;
        place_id: string;
        types: string[];
    }

    /**
     * A single route containing a set of legs in a DirectionsResult.
     * Note that though this object is "JSON-like," it is not strictly JSON,
     * as it directly and indirectly includes LatLng objects.
     */
    interface DirectionsRoute {
        /** The bounds for this route. */
        bounds: LatLngBounds;
        /** Copyrights text to be displayed for this route. */
        copyrights: string;
        /**
         * The total fare for the whole transit trip. Only applicable to transit
         * requests.
         */
        fare: TransitFare;
        /**
         * An array of DirectionsLegs, each of which contains information about the
         * steps of which it is composed. There will be one leg for each stopover
         * waypoint or destination specified. So a route with no stopover waypoints
         * will contain one DirectionsLeg and a route with one stopover waypoint
         * will contain two.
         */
        legs: DirectionsLeg[];
        /**
         * An array of LatLngs representing the entire course of this route. The
         * path is simplified in order to make it suitable in contexts where a small
         * number of vertices is required (such as Static Maps API URLs).
         */
        overview_path: LatLng[];
        /**
         * An encoded polyline representation of the route in overview_path.
         * This polyline is an approximate (smoothed) path of the resulting
         * directions.
         */
        overview_polyline: string;
        /** Warnings to be displayed when showing these directions. */
        warnings: string[];
        /**
         * If optimizeWaypoints was set to true, this field will contain the
         * re-ordered permutation of the input waypoints. For example, if the input
         * was: Origin: Los Angeles Waypoints: Dallas, Bangor, Phoenix Destination:
         * New York and the optimized output was ordered as follows: Origin: Los
         * Angeles Waypoints: Phoenix, Dallas, Bangor Destination: New York then
         * this field will be an Array containing the values [2, 0, 1]. Note that
         * the numbering of waypoints is zero-based. If any of the input waypoints
         * has stopover set to false, this field will be empty, since route
         * optimization is not available for such queries.
         */
        waypoint_order: number[];
    }

    interface DirectionsLeg {
        arrival_time: Time;
        departure_time: Time;
        distance: Distance;
        duration: Duration;
        duration_in_traffic: Duration;
        end_address: string;
        end_location: LatLng;
        start_address: string;
        start_location: LatLng;
        steps: DirectionsStep[];
        via_waypoints: LatLng[];
    }

    interface BaseDirectionsStep {
        distance: Distance;
        duration: Duration;
        end_location: LatLng;
        instructions: string;
        path: LatLng[];
        start_location: LatLng;
        transit: TransitDetails;
        travel_mode: TravelMode;
    }

    interface DirectionsStep extends BaseDirectionsStep {
        /**
         * This field will only be available if travel_mode is set to TRANSIT.
         */
        steps: BaseDirectionsStep[];
    }

    interface Distance {
        text: string;
        value: number;
    }

    interface Duration {
        text: string;
        value: number;
    }

    interface Time {
        text: string;
        time_zone: string;
        value: Date;
    }

    interface TransitDetails {
        arrival_stop: TransitStop;
        arrival_time: Time;
        departure_stop: TransitStop;
        departure_time: Time;
        headsign: string;
        headway: number;
        line: TransitLine;
        num_stops: number;
    }

    interface TransitStop {
        location: LatLng;
        name: string;
    }

    interface TransitLine {
        agencies: TransitAgency[];
        color: string;
        icon: string;
        name: string;
        short_name: string;
        text_color: string;
        url: string;
        vehicle: TransitVehicle;
    }

    interface TransitAgency {
        name: string;
        phone: string;
        url: string;
    }

    interface TransitVehicle {
        icon: string;
        local_icon: string;
        name: string;
        type: VehicleType;
    }

    enum VehicleType {
        BUS,
        CABLE_CAR,
        COMMUTER_TRAIN,
        FERRY,
        FUNICULAR,
        GONDOLA_LIFT,
        HEAVY_RAIL,
        HIGH_SPEED_TRAIN,
        INTERCITY_BUS,
        METRO_RAIL,
        MONORAIL,
        OTHER,
        RAIL,
        SHARE_TAXI,
        SUBWAY,
        TRAM,
        TROLLEYBUS,
    }

    class ElevationService {
        getElevationAlongPath(
            request: PathElevationRequest,
            callback: (results: ElevationResult[], status: ElevationStatus) => void,
        ): void;
        getElevationForLocations(
            request: LocationElevationRequest,
            callback: (results: ElevationResult[], status: ElevationStatus) => void,
        ): void;
    }

    interface LocationElevationRequest {
        locations: LatLng[];
    }

    interface PathElevationRequest {
        path?: LatLng[];
        samples?: number;
    }

    interface ElevationResult {
        elevation: number;
        location: LatLng;
        resolution: number;
    }

    enum ElevationStatus {
        INVALID_REQUEST = 'INVALID_REQUEST',
        OK = 'OK',
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
        REQUEST_DENIED = 'REQUEST_DENIED',
        UNKNOWN_ERROR = 'UNKNOWN_ERROR',
    }

    class MaxZoomService {
        getMaxZoomAtLatLng(latlng: LatLng | LatLngLiteral, callback: (result: MaxZoomResult) => void): void;
    }

    interface MaxZoomResult {
        status: MaxZoomStatus;
        zoom: number;
    }

    enum MaxZoomStatus {
        ERROR = 'ERROR',
        OK = 'OK',
    }

    class DistanceMatrixService {
        getDistanceMatrix(
            request: DistanceMatrixRequest,
            callback: (response: DistanceMatrixResponse, status: DistanceMatrixStatus) => void,
        ): void;
    }

    interface DistanceMatrixRequest {
        avoidFerries?: boolean;
        avoidHighways?: boolean;
        avoidTolls?: boolean;
        destinations?: string[] | LatLng[] | LatLngLiteral[] | Place[];
        drivingOptions?: DrivingOptions;
        durationInTraffic?: boolean;
        origins?: string[] | LatLng[] | LatLngLiteral[] | Place[];
        region?: string;
        transitOptions?: TransitOptions;
        travelMode?: TravelMode;
        unitSystem?: UnitSystem;
    }

    interface DistanceMatrixResponse {
        destinationAddresses: string[];
        originAddresses: string[];
        rows: DistanceMatrixResponseRow[];
    }

    interface DistanceMatrixResponseRow {
        elements: DistanceMatrixResponseElement[];
    }

    interface DistanceMatrixResponseElement {
        distance: Distance;
        duration: Duration;
        duration_in_traffic: Duration;
        fare: TransitFare;
        status: DistanceMatrixElementStatus;
    }

    enum DistanceMatrixStatus {
        INVALID_REQUEST = 'INVALID_REQUEST',
        MAX_DIMENSIONS_EXCEEDED = 'MAX_DIMENSIONS_EXCEEDED',
        MAX_ELEMENTS_EXCEEDED = 'MAX_ELEMENTS_EXCEEDED',
        OK = 'OK',
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
        REQUEST_DENIED = 'REQUEST_DENIED',
        UNKNOWN_ERROR = 'UNKNOWN_ERROR',
    }

    enum DistanceMatrixElementStatus {
        NOT_FOUND = 'NOT_FOUND',
        OK = 'OK',
        ZERO_RESULTS = 'ZERO_RESULTS',
    }

    /***** Save to Google Maps *****/
    interface Attribution {
        iosDeepLinkId?: string;
        source?: string;
        webUrl?: string;
    }

    interface Place {
        location?: LatLng | LatLngLiteral;
        placeId?: string;
        query?: string;
    }

    class SaveWidget {
        constructor(container: Node, opts?: SaveWidgetOptions);
        getAttribution(): Attribution;
        getPlace(): Place;
        setAttribution(attribution: Attribution): void;
        setOptions(opts: SaveWidgetOptions): void;
        setPlace(place: Place): void;
    }

    interface SaveWidgetOptions {
        attribution?: Attribution;
        place?: Place;
    }

    /***** Map Types *****/
    interface MapType {
        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
        releaseTile(tile: Element): void;
        alt?: string;
        maxZoom?: number;
        minZoom?: number;
        name?: string;
        projection?: Projection;
        radius?: number;
        tileSize?: Size;
    }

    class MapTypeRegistry extends MVCObject {
        constructor();
        set(id: string, mapType: MapType): void;
    }

    interface Projection {
        fromLatLngToPoint(latLng: LatLng, point?: Point): Point;
        fromPointToLatLng(pixel: Point, noWrap?: boolean): LatLng;
    }

    class ImageMapType extends MVCObject implements MapType {
        constructor(opts: ImageMapTypeOptions);
        getOpacity(): number;
        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
        releaseTile(tile: Element): void;
        setOpacity(opacity: number): void;
        alt: string;
        maxZoom: number;
        minZoom: number;
        name: string;
        projection: Projection;
        radius: number;
        tileSize: Size;
    }

    interface ImageMapTypeOptions {
        alt?: string;
        getTileUrl(tileCoord: Point, zoom: number): string;
        maxZoom?: number;
        minZoom?: number;
        name?: string;
        opacity?: number;
        tileSize: Size;
    }

    class StyledMapType extends MVCObject implements MapType {
        constructor(styles: MapTypeStyle[], options?: StyledMapTypeOptions);
        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
        releaseTile(tile: Element): void;
        alt: string;
        maxZoom: number;
        minZoom: number;
        name: string;
        projection: Projection;
        radius: number;
        tileSize: Size;
    }

    interface StyledMapTypeOptions {
        alt?: string;
        maxZoom?: number;
        minZoom?: number;
        name?: string;
    }

    interface MapTypeStyle {
        elementType?: MapTypeStyleElementType;
        featureType?: MapTypeStyleFeatureType;
        stylers?: MapTypeStyler[];
    }

    type MapTypeStyleFeatureType =
        | 'all'
        | 'administrative'
        | 'administrative.country'
        | 'administrative.land_parcel'
        | 'administrative.locality'
        | 'administrative.neighborhood'
        | 'administrative.province'
        | 'landscape'
        | 'landscape.man_made'
        | 'landscape.natural'
        | 'landscape.natural.landcover'
        | 'landscape.natural.terrain'
        | 'poi'
        | 'poi.attraction'
        | 'poi.business'
        | 'poi.government'
        | 'poi.medical'
        | 'poi.park'
        | 'poi.place_of_worship'
        | 'poi.school'
        | 'poi.sports_complex'
        | 'road'
        | 'road.arterial'
        | 'road.highway'
        | 'road.highway.controlled_access'
        | 'road.local'
        | 'transit'
        | 'transit.line'
        | 'transit.station'
        | 'transit.station.airport'
        | 'transit.station.bus'
        | 'transit.station.rail'
        | 'water';

    type MapTypeStyleElementType =
        | 'all'
        | 'geometry'
        | 'geometry.fill'
        | 'geometry.stroke'
        | 'labels'
        | 'labels.icon'
        | 'labels.text'
        | 'labels.text.fill'
        | 'labels.text.stroke';

    interface MapTypeStyler {
        color?: string;
        gamma?: number;
        hue?: string;
        invert_lightness?: boolean;
        lightness?: number;
        saturation?: number;
        visibility?: string;
        weight?: number;
    }

    /***** Layers *****/
    class BicyclingLayer extends MVCObject {
        constructor();
        getMap(): Map;
        setMap(map: Map | null): void;
    }

    class FusionTablesLayer extends MVCObject {
        constructor(options: FusionTablesLayerOptions);
        getMap(): Map;
        setMap(map: Map | null): void;
        setOptions(options: FusionTablesLayerOptions): void;
    }

    interface FusionTablesLayerOptions {
        clickable?: boolean;
        heatmap?: FusionTablesHeatmap;
        map?: Map;
        query?: FusionTablesQuery;
        styles?: FusionTablesStyle[];
        suppressInfoWindows?: boolean;
    }

    interface FusionTablesQuery {
        from?: string;
        limit?: number;
        offset?: number;
        orderBy?: string;
        select?: string;
        where?: string;
    }

    interface FusionTablesStyle {
        markerOptions?: FusionTablesMarkerOptions;
        polygonOptions?: FusionTablesPolygonOptions;
        polylineOptions?: FusionTablesPolylineOptions;
        where?: string;
    }

    interface FusionTablesHeatmap {
        enabled: boolean;
    }

    interface FusionTablesMarkerOptions {
        iconName: string;
    }

    interface FusionTablesPolygonOptions {
        fillColor?: string;
        fillOpacity?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
    }

    interface FusionTablesPolylineOptions {
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
    }

    interface FusionTablesMouseEvent {
        infoWindowHtml?: string;
        latLng?: LatLng;
        pixelOffset?: Size;
        row?: object; // Object<FusionTablesCell>
    }

    interface FusionTablesCell {
        columnName?: string;
        value?: string;
    }

    class KmlLayer extends MVCObject {
        constructor(opts?: KmlLayerOptions);
        getDefaultViewport(): LatLngBounds;
        getMap(): Map;
        getMetadata(): KmlLayerMetadata;
        getStatus(): KmlLayerStatus;
        getUrl(): string;
        getZIndex(): number;
        setMap(map: Map | null): void;
        setUrl(url: string): void;
        setZIndex(zIndex: number): void;
        setOptions(options: KmlLayerOptions): void;
    }

    interface KmlLayerOptions {
        clickable?: boolean;
        map?: Map;
        preserveViewport?: boolean;
        screenOverlays?: boolean;
        suppressInfoWindows?: boolean;
        url?: string;
        zIndex?: number;
    }

    interface KmlLayerMetadata {
        author: KmlAuthor;
        description: string;
        hasScreenOverlays: boolean;
        name: string;
        snippet: string;
    }

    enum KmlLayerStatus {
        DOCUMENT_NOT_FOUND = 'DOCUMENT_NOT_FOUND',
        DOCUMENT_TOO_LARGE = 'DOCUMENT_TOO_LARGE',
        FETCH_ERROR = 'FETCH_ERROR',
        INVALID_DOCUMENT = 'INVALID_DOCUMENT',
        INVALID_REQUEST = 'INVALID_REQUEST',
        LIMITS_EXCEEDED = 'LIMITS_EXCEEDED',
        OK = 'OK',
        TIMED_OUT = 'TIMED_OUT',
        UNKNOWN = 'UNKNOWN',
    }

    interface KmlMouseEvent {
        featureData: KmlFeatureData;
        latLng: LatLng;
        pixelOffset: Size;
    }

    interface KmlFeatureData {
        author: KmlAuthor;
        description: string;
        id: string;
        infoWindowHtml: string;
        name: string;
        snippet: string;
    }

    interface KmlAuthor {
        email: string;
        name: string;
        uri: string;
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

    /***** Street View *****/
    class StreetViewPanorama extends MVCObject {
        constructor(container: Element, opts?: StreetViewPanoramaOptions);
        controls: Array<MVCArray<Node>>;
        getLinks(): StreetViewLink[];
        getLocation(): StreetViewLocation;
        getMotionTracking(): boolean;
        getPano(): string;
        getPhotographerPov(): StreetViewPov;
        getPosition(): LatLng;
        getPov(): StreetViewPov;
        getStatus(): StreetViewStatus;
        getVisible(): boolean;
        getZoom(): number;
        registerPanoProvider(provider: (input: string) => StreetViewPanoramaData, opts?: PanoProviderOptions): void;
        setLinks(links: StreetViewLink[]): void;
        setMotionTracking(motionTracking: boolean): void;
        setOptions(options: StreetViewPanoramaOptions): void;
        setPano(pano: string): void;
        setPosition(latLng: LatLng | LatLngLiteral): void;
        setPov(pov: StreetViewPov): void;
        setVisible(flag: boolean): void;
        setZoom(zoom: number): void;
    }

    /** Options for the rendering of the fullscreen control. */
    interface FullscreenControlOptions {
        /**
         * Position id. Used to specify the position of the control on the map.
         * The default position is RIGHT_TOP.
         */
        position?: ControlPosition;
    }

    interface StreetViewPanoramaOptions {
        addressControl?: boolean;
        addressControlOptions?: StreetViewAddressControlOptions;
        clickToGo?: boolean;
        disableDefaultUI?: boolean;
        disableDoubleClickZoom?: boolean;
        enableCloseButton?: boolean;
        fullscreenControl?: boolean;
        fullscreenControlOptions?: FullscreenControlOptions;
        imageDateControl?: boolean;
        linksControl?: boolean;
        motionTracking?: boolean;
        motionTrackingControl?: boolean;
        motionTrackingControlOptions?: MotionTrackingControlOptions;
        mode?: 'html4' | 'html5' | 'webgl';
        panControl?: boolean;
        panControlOptions?: PanControlOptions;
        pano?: string;
        panoProvider?: (input: string) => StreetViewPanoramaData;
        position?: LatLng | LatLngLiteral;
        pov?: StreetViewPov;
        scrollwheel?: boolean;
        visible?: boolean;
        zoom?: number;
        zoomControl?: boolean;
        zoomControlOptions?: ZoomControlOptions;
    }

    interface StreetViewAddressControlOptions {
        position?: ControlPosition;
    }

    interface StreetViewLink {
        description?: string;
        heading?: number;
        pano?: string;
    }

    interface StreetViewPov {
        heading?: number;
        pitch?: number;
    }

    interface StreetViewPanoramaData {
        copyright?: string;
        imageDate?: string;
        links?: StreetViewLink[];
        location?: StreetViewLocation;
        tiles?: StreetViewTileData;
    }

    interface StreetViewLocation {
        description?: string;
        latLng?: LatLng;
        pano?: string;
        shortDescription?: string;
    }

    interface StreetViewTileData {
        getTileUrl(pano: string, tileZoom: number, tileX: number, tileY: number): string;
        centerHeading?: number;
        tileSize?: Size;
        worldSize?: Size;
    }

    enum StreetViewPreference {
        BEST = 'best',
        NEAREST = 'nearest',
    }

    enum StreetViewSource {
        DEFAULT = 'default',
        OUTDOOR = 'outdoor',
    }

    interface StreetViewLocationRequest {
        location: LatLng | LatLngLiteral;
        preference?: StreetViewPreference;
        radius?: number;
        source?: StreetViewSource;
    }

    interface StreetViewPanoRequest {
        pano: string;
    }

    class StreetViewService {
        getPanorama(
            request: StreetViewLocationRequest | StreetViewPanoRequest,
            cb: (data: StreetViewPanoramaData | null, status: StreetViewStatus) => void,
        ): void;
        getPanoramaById(
            pano: string,
            callback: (streetViewPanoramaData: StreetViewPanoramaData, streetViewStatus: StreetViewStatus) => void,
        ): void;
        getPanoramaByLocation(
            latlng: LatLng | LatLngLiteral,
            radius: number,
            callback: (streetViewPanoramaData: StreetViewPanoramaData, streetViewStatus: StreetViewStatus) => void,
        ): void;
    }

    enum StreetViewStatus {
        OK = 'OK',
        UNKNOWN_ERROR = 'UNKNOWN_ERROR',
        ZERO_RESULTS = 'ZERO_RESULTS',
    }

    class StreetViewCoverageLayer extends MVCObject {
        getMap(): Map;
        setMap(map: Map | null): void;
    }

    interface MotionTrackingControlOptions {
        position?: ControlPosition;
    }

    interface PanoProviderOptions {
        /**
         * If set, the renderer will use technologies (like webgl) that only work when cors headers are appropiately set on the provided images.
         * It is the developer's task to serve the images correctly in combination with this flag, which might otherwise lead to SecurityErrors.
         */
        cors?: boolean;
    }

    /***** Events *****/
    interface MapsEventListener {
        /**
         * Removes the listener.  Equivalent to calling
         * google.maps.event.removeListener(listener).
         */
        remove(): void;
    }

    namespace event {
        /**
         * Cross browser event handler registration. This listener is removed by
         * calling removeListener(handle) for the handle that is returned by this
         * function.
         */
        function addDomListener(
            instance: object,
            eventName: string,
            handler: (event: Event) => void,
            capture?: boolean,
        ): MapsEventListener;
        /**
         * Wrapper around addDomListener that removes the listener after the first
         * event.
         */
        function addDomListenerOnce(
            instance: object,
            eventName: string,
            handler: (event: Event) => void,
            capture?: boolean,
        ): MapsEventListener;
        /**
         * Adds the given listener function to the given event name for the given
         * object instance. Returns an identifier for this listener that can be used
         * with removeListener().
         */
        function addListener(instance: object, eventName: string, handler: (...args: any[]) => void): MapsEventListener;
        /**
         * Like addListener, but the handler removes itself after handling the first
         * event.
         */
        function addListenerOnce(
            instance: object,
            eventName: string,
            handler: (...args: any[]) => void,
        ): MapsEventListener;
        /**
         * Removes all listeners for all events for the given instance.
         */
        function clearInstanceListeners(instance: object): void;
        /**
         * Removes all listeners for the given event for the given instance.
         */
        function clearListeners(instance: object, eventName: string): void;
        /**
         * Removes the given listener, which should have been returned by
         * addListener above. Equivalent to calling listener.remove().
         */
        function removeListener(listener: MapsEventListener): void;
        /**
         * Triggers the given event. All arguments after eventName are passed as
         * arguments to the listeners.
         */
        function trigger(instance: any, eventName: string, ...args: any[]): void;
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

    /* **** Base **** */

    /**
     * A LatLng is a point in geographical coordinates: latitude and longitude.
     *
     * * Latitude ranges between -90 and 90 degrees, inclusive. Values above or
     *   below this range will be clamped to the range [-90, 90]. This means
     *   that if the value specified is less than -90, it will be set to -90.
     *   And if the value is greater than 90, it will be set to 90.
     * * Longitude ranges between -180 and 180 degrees, inclusive. Values above
     *   or below this range will be wrapped so that they fall within the
     *   range. For example, a value of -190 will be converted to 170. A value
     *   of 190 will be converted to -170. This reflects the fact that
     *   longitudes wrap around the globe.
     *
     * Although the default map projection associates longitude with the
     * x-coordinate of the map, and latitude with the y-coordinate, the
     * latitude coordinate is always written first, followed by the longitude.
     * Notice that you cannot modify the coordinates of a LatLng. If you want
     * to compute another point, you have to create a new one.
     */
    class LatLng {
        /**
         * Creates a LatLng object representing a geographic point.
         * Note the ordering of latitude and longitude.
         * @param lat Latitude is specified in degrees within the range [-90, 90].
         * @param lng Longitude is specified in degrees within the range [-180,
         *     180].
         * @param noWrap Set noWrap to true to enable values outside of this range.
         */
        constructor(lat: number, lng: number, noWrap?: boolean);
        /**
         * Creates a LatLng object representing a geographic point.
         * @param literal Object literal.
         * @param noWrap Set noWrap to true to enable values outside of this range.
         */
        constructor(literal: LatLngLiteral, noWrap?: boolean);
        /** Comparison function. */
        equals(other: LatLng): boolean;
        /** Returns the latitude in degrees. */
        lat(): number;
        /** Returns the longitude in degrees. */
        lng(): number;
        /** Converts to string representation. */
        toString(): string;
        /**
         * Returns a string of the form "lat,lng". We round the lat/lng values to 6
         * decimal places by default.
         */
        toUrlValue(precision?: number): string;
        /**
         * Converts to JSON representation. This function is intended to be used
         * via JSON.stringify.
         */
        toJSON(): LatLngLiteral;
    }

    /**
     * Object literals are accepted in place of {@link LatLng} objects, as a
     * convenience, in many places. These are converted to {@link LatLng} objects
     * when the Maps API encounters them.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngLiteral Maps JavaScript API}
     */
    interface LatLngLiteral {
        /**
         * Latitude in degrees. Values will be clamped to the range [-90, 90]. This
         * means that if the value specified is less than -90, it will be set to
         * -90. And if the value is greater than 90, it will be set to 90.
         */
        lat: number;
        /**
         * Longitude in degrees. Values outside the range [-180, 180] will be
         * wrapped so that they fall within the range. For example, a value of -190
         * will be converted to 170. A value of 190 will be converted to -170. This
         * reflects the fact that longitudes wrap around the globe.
         */
        lng: number;
    }

    /** @see {@link LatLngLiteral}. */
    interface ReadonlyLatLngLiteral {
        /** @see {@link LatLngLiteral#lat} */
        readonly lat: number;
        /** @see {@link LatLngLiteral#lng} */
        readonly lng: number;
    }

    interface LatLngBoundsLiteral {
        east: number;
        north: number;
        south: number;
        west: number;
    }

    /**
     * A LatLngBounds instance represents a rectangle in geographical coordinates,
     * including one that crosses the 180 degrees longitudinal meridian.
     */
    class LatLngBounds {
        /**
         * Constructs a rectangle from the points at its south-west and north-east
         * corners.
         */
        constructor(sw?: LatLng | LatLngLiteral, ne?: LatLng | LatLngLiteral);
        /** Returns true if the given lat/lng is in this bounds. */
        contains(latLng: LatLng | LatLngLiteral): boolean;
        /** Returns true if this bounds approximately equals the given bounds. */
        equals(other: LatLngBounds | LatLngBoundsLiteral): boolean;
        /** Extends this bounds to contain the given point. */
        extend(point: LatLng | LatLngLiteral): LatLngBounds;
        /** Computes the center of this LatLngBounds */
        getCenter(): LatLng;
        /** Returns the north-east corner of this bounds. */
        getNorthEast(): LatLng;
        /** Returns the south-west corner of this bounds. */
        getSouthWest(): LatLng;
        /** Returns true if this bounds shares any points with the other bounds. */
        intersects(other: LatLngBounds | LatLngBoundsLiteral): boolean;
        /** Returns if the bounds are empty. */
        isEmpty(): boolean;
        /**
         * Converts to JSON representation. This function is intended to be used
         * via JSON.stringify.
         */
        toJSON(): LatLngBoundsLiteral;
        /** Converts the given map bounds to a lat/lng span. */
        toSpan(): LatLng;
        /** Converts to string. */
        toString(): string;
        /**
         * Returns a string of the form "lat_lo,lng_lo,lat_hi,lng_hi" for this
         * bounds, where "lo" corresponds to the southwest corner of the bounding
         * box, while "hi" corresponds to the northeast corner of that box.
         */
        toUrlValue(precision?: number): string;
        /**
         * Extends this bounds to contain the union of this and the given bounds.
         */
        union(other: LatLngBounds | LatLngBoundsLiteral): LatLngBounds;
    }

    class Point {
        /** A point on a two-dimensional plane. */
        constructor(x: number, y: number);
        /** The X coordinate */
        x: number;
        /** The Y coordinate */
        y: number;
        /** Compares two Points */
        equals(other: Point): boolean;
        /** Returns a string representation of this Point. */
        toString(): string;
    }

    class Size {
        constructor(width: number, height: number, widthUnit?: string, heightUnit?: string);
        height: number;
        width: number;
        equals(other: Size): boolean;
        toString(): string;
    }

    type MVCEventHandler<T extends MVCObject, A extends any[]> = (this: T, ...args: A) => void;

    /***** MVC *****/
    /** Base class implementing KVO. */
    class MVCObject {
        /**
         * The MVCObject constructor is guaranteed to be an empty function, and so
         * you may inherit from MVCObject by simply writing MySubclass.prototype =
         * new google.maps.MVCObject();. Unless otherwise noted, this is not true of
         * other classes in the API, and inheriting from other classes in the API is
         * not supported.
         */
        constructor();
        /**
         * Adds the given listener function to the given event name. Returns an
         * identifier for this listener that can be used with
         * google.maps.event.removeListener.
         */
        addListener(eventName: string, handler: MVCEventHandler<this, any[]>): MapsEventListener;
        /** Binds a View to a Model. */
        bindTo(key: string, target: MVCObject, targetKey?: string, noNotify?: boolean): void;
        changed(key: string): void;
        /** Gets a value. */
        get(key: string): any;
        /**
         * Notify all observers of a change on this property. This notifies both
         * objects that are bound to the object's property as well as the object
         * that it is bound to.
         */
        notify(key: string): void;
        /** Sets a value. */
        set(key: string, value: any): void;
        /** Sets a collection of key-value pairs. */
        setValues(values: any): void;
        /**
         * Removes a binding. Unbinding will set the unbound property to the current
         * value. The object will not be notified, as the value has not changed.
         */
        unbind(key: string): void;
        /** Removes all bindings. */
        unbindAll(): void;
    }

    /** This class extends MVCObject. */
    class MVCArray<T> extends MVCObject {
        /** A mutable MVC Array. */
        constructor(array?: T[]);
        /** Removes all elements from the array. */
        clear(): void;
        /**
         * Iterate over each element, calling the provided callback.
         * The callback is called for each element like: callback(element, index).
         */
        forEach(callback: (elem: T, i: number) => void): void;
        /**
         * Returns a reference to the underlying Array.
         * Warning: if the Array is mutated, no events will be fired by this object.
         */
        getArray(): T[];
        /** Returns the element at the specified index. */
        getAt(i: number): T;
        /** Returns the number of elements in this array. */
        getLength(): number;
        /** Inserts an element at the specified index. */
        insertAt(i: number, elem: T): void;
        /** Removes the last element of the array and returns that element. */
        pop(): T;
        /**
         * Adds one element to the end of the array and returns the new length of
         * the array.
         */
        push(elem: T): number;
        /** Removes an element from the specified index. */
        removeAt(i: number): T;
        /** Sets an element at the specified index. */
        setAt(i: number, elem: T): void;
    }

    /***** Geometry Library *****/
    namespace geometry {
        namespace encoding {
            function decodePath(encodedPath: string): LatLng[];
            function encodePath(path: LatLng[] | MVCArray<LatLng>): string;
        }

        /**
         * Utility functions for computing geodesic angles, distances and areas.
         * The default radius is Earth's radius of 6378137 meters.
         */
        namespace spherical {
            /**
             * Returns the area of a closed path.
             * The computed area uses the same units as the radius.
             * The radius defaults to the Earth's radius in meters,
             * in which case the area is in square meters.
             */
            function computeArea(path: LatLng[] | MVCArray<LatLng>, radius?: number): number;
            /**
             * Returns the distance, in meters, between two LatLngs.
             * You can optionally specify a custom radius.
             * The radius defaults to the radius of the Earth.
             */
            function computeDistanceBetween(from: LatLng, to: LatLng, radius?: number): number;
            /**
             * Returns the heading from one LatLng to another LatLng.
             * Headings are expressed in degrees clockwise from North within the range
             * [-180,180).
             */
            function computeHeading(from: LatLng, to: LatLng): number;
            /**
             * Returns the length of the given path.
             */
            function computeLength(path: LatLng[] | MVCArray<LatLng>, radius?: number): number;
            /**
             * Returns the LatLng resulting from moving a distance from an origin in
             * the specified heading (expressed in degrees clockwise from north).
             */
            function computeOffset(from: LatLng, distance: number, heading: number, radius?: number): LatLng;
            /**
             * Returns the location of origin when provided with a LatLng destination,
             * meters travelled and original heading. Headings are expressed in
             * degrees clockwise from North. This function returns null when no
             * solution is available.
             */
            function computeOffsetOrigin(to: LatLng, distance: number, heading: number, radius?: number): LatLng;
            /**
             * Returns the signed area of a closed path. The signed area may be used
             * to determine the orientation of the path. The computed area uses the
             * same units as the radius. The radius defaults to the Earth's radius in
             * meters, in which case the area is in square meters.
             */
            function computeSignedArea(loop: LatLng[] | MVCArray<LatLng>, radius?: number): number;
            /**
             * Returns the LatLng which lies the given fraction of the way between the
             * origin LatLng and the destination LatLng.
             */
            function interpolate(from: LatLng, to: LatLng, fraction: number): LatLng;
        }

        namespace poly {
            function containsLocation(point: LatLng, polygon: Polygon): boolean;
            function isLocationOnEdge(point: LatLng, poly: Polygon | Polyline, tolerance?: number): boolean;
        }
    }

    /***** AdSense Library *****/
    namespace adsense {
        class AdUnit extends MVCObject {
            constructor(container: Element, opts: AdUnitOptions);
            getBackgroundColor(): string;
            getBorderColor(): string;
            getChannelNumber(): string;
            getContainer(): Element;
            getFormat(): AdFormat;
            getMap(): Map;
            getPosition(): ControlPosition;
            getPublisherId(): string;
            getTextColor(): string;
            getTitleColor(): string;
            getUrlColor(): string;
            setBackgroundColor(backgroundColor: string): void;
            setBorderColor(borderColor: string): void;
            setChannelNumber(channelNumber: string): void;
            setFormat(format: AdFormat): void;
            setMap(map: Map | null): void;
            setPosition(position: ControlPosition): void;
            setTextColor(textColor: string): void;
            setTitleColor(titleColor: string): void;
            setUrlColor(urlColor: string): void;
        }

        interface AdUnitOptions {
            backgroundColor?: string;
            borderColor?: string;
            channelNumber?: string;
            format?: AdFormat;
            map?: Map;
            position?: ControlPosition;
            publisherId?: string;
            textColor?: string;
            titleColor?: string;
            urlColor?: string;
        }

        enum AdFormat {
            BANNER = '468x60_as',
            BUTTON = '125x125_as',
            HALF_BANNER = '234x60_as',
            LARGE_HORIZONTAL_LINK_UNIT = '728x15_0ads_al',
            LARGE_RECTANGLE = '336x280_as',
            LARGE_VERTICAL_LINK_UNIT = '180x90_0ads_al',
            LEADERBOARD = '728x90_as',
            MEDIUM_RECTANGLE = '300x250_as',
            MEDIUM_VERTICAL_LINK_UNIT = '160x90_0ads_al',
            SKYSCRAPER = '120x600_as',
            SMALL_HORIZONTAL_LINK_UNIT = '468x15_0ads_al',
            SMALL_RECTANGLE = '180x150_as',
            SMALL_SQUARE = '200x200_as',
            SMALL_VERTICAL_LINK_UNIT = '120x90_0ads_al',
            SQUARE = '250x250_as',
            VERTICAL_BANNER = '120x240_as',
            WIDE_SKYSCRAPER = '160x600_as',
            X_LARGE_VERTICAL_LINK_UNIT = '200x90_0ads_al',
        }
    }

    /***** Places Library *****/
    namespace places {
        class Autocomplete extends MVCObject {
            constructor(inputField: HTMLInputElement, opts?: AutocompleteOptions);
            getBounds(): LatLngBounds;
            getPlace(): PlaceResult;
            setBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void;
            setComponentRestrictions(restrictions: ComponentRestrictions): void;
            setFields(fields: string[] | undefined): void;
            setOptions(options: AutocompleteOptions): void;
            setTypes(types: string[]): void;
        }

        interface AutocompleteOptions {
            bounds?: LatLngBounds | LatLngBoundsLiteral;
            componentRestrictions?: ComponentRestrictions;
            placeIdOnly?: boolean;
            strictBounds?: boolean;
            types?: string[];
            type?: string;
            fields?: string[];
        }

        interface AutocompletePrediction {
            description: string;
            matched_substrings: PredictionSubstring[];
            place_id: string;
            reference: string;
            structured_formatting: AutocompleteStructuredFormatting;
            terms: PredictionTerm[];
            types: string[];
        }

        interface AutocompleteStructuredFormatting {
            main_text: string;
            main_text_matched_substrings: PredictionSubstring[];
            secondary_text: string;
        }

        interface OpeningHours {
            /**
             * @deprecated open_now is deprecated as of November 2019 and will be turned off in November 2020.
             *      Use the PlaceOpeningHours.isOpen function from a PlacesService.getDetails result instead.
             */
            open_now: boolean;
            periods: OpeningPeriod[];
            weekday_text: string[];
            isOpen(date?: Date): boolean;
        }

        interface OpeningPeriod {
            open: OpeningHoursTime;
            close?: OpeningHoursTime;
        }

        interface OpeningHoursTime {
            day: number;
            hours: number;
            minutes: number;
            nextDate: number;
            time: string;
        }

        interface PredictionTerm {
            offset: number;
            value: string;
        }

        interface PredictionSubstring {
            length: number;
            offset: number;
        }

        class AutocompleteService {
            constructor();
            getPlacePredictions(
                request: AutocompletionRequest,
                callback: (result: AutocompletePrediction[], status: PlacesServiceStatus) => void,
            ): void;
            getQueryPredictions(
                request: QueryAutocompletionRequest,
                callback: (result: QueryAutocompletePrediction[], status: PlacesServiceStatus) => void,
            ): void;
        }

        class AutocompleteSessionToken {}

        interface AutocompletionRequest {
            bounds?: LatLngBounds | LatLngBoundsLiteral;
            componentRestrictions?: ComponentRestrictions;
            input: string;
            location?: LatLng;
            offset?: number;
            radius?: number;
            sessionToken?: AutocompleteSessionToken;
            types?: string[];
        }

        interface ComponentRestrictions {
            country: string | string[];
        }

        type LocationBias =
            | LatLng
            | LatLngLiteral
            | LatLngBounds
            | LatLngBoundsLiteral
            | Circle
            | CircleLiteral
            | string;

        interface PlaceAspectRating {
            rating: number;
            type: string;
        }

        interface PlacePlusCode {
            compound_code?: string;
            global_code: string;
        }

        interface PlaceDetailsRequest {
            placeId: string;
            fields?: string[];
            sessionToken?: AutocompleteSessionToken;
        }

        interface PlaceGeometry {
            location: LatLng;
            viewport: LatLngBounds;
        }

        interface PlacePhoto {
            height: number;
            html_attributions: string[];
            width: number;
            getUrl(opts: PhotoOptions): string;
        }

        interface PhotoOptions {
            maxHeight?: number;
            maxWidth?: number;
        }

        interface PlaceResult {
            address_components?: GeocoderAddressComponent[];
            adr_address?: string;
            aspects?: PlaceAspectRating[];
            formatted_address?: string;
            formatted_phone_number?: string;
            geometry?: PlaceGeometry;
            html_attributions?: string[];
            icon?: string;
            id?: string;
            international_phone_number?: string;
            name: string;
            opening_hours?: OpeningHours;
            permanently_closed?: boolean;
            photos?: PlacePhoto[];
            place_id?: string;
            plus_code?: PlacePlusCode;
            price_level?: number;
            rating?: number;
            reviews?: PlaceReview[];
            types?: string[];
            url?: string;
            user_ratings_total?: number;
            /**
             * @deprecated utc_offset is deprecated as of November 2019 and will be turned off in November 2020.
             *      Use PlaceResult.utc_offset_minutes instead.
             */
            utc_offset?: number;
            utc_offset_minutes?: number;
            vicinity?: string;
            website?: string;
        }

        interface PlaceReview {
            aspects: PlaceAspectRating[];
            author_name: string;
            author_url: string;
            language: string;
            text: string;
        }

        interface PlaceSearchPagination {
            nextPage(): void;
            hasNextPage: boolean;
        }

        interface PlaceSearchRequest {
            bounds?: LatLngBounds | LatLngBoundsLiteral;
            keyword?: string;
            location?: LatLng | LatLngLiteral;
            maxPriceLevel?: number;
            minPriceLevel?: number;
            name?: string;
            openNow?: boolean;
            radius?: number;
            rankBy?: RankBy;
            types?: string[] /* Deprecated. Will be removed February 16, 2017 */;
            type?: string;
        }

        class PlacesService {
            constructor(attrContainer: HTMLDivElement | Map);
            findPlaceFromPhoneNumber(
                request: FindPlaceFromPhoneNumberRequest,
                callback: (results: PlaceResult[], status: PlacesServiceStatus) => void,
            ): void;
            findPlaceFromQuery(
                request: FindPlaceFromQueryRequest,
                callback: (results: PlaceResult[], status: PlacesServiceStatus) => void,
            ): void;
            getDetails(
                request: PlaceDetailsRequest,
                callback: (result: PlaceResult, status: PlacesServiceStatus) => void,
            ): void;
            nearbySearch(
                request: PlaceSearchRequest,
                callback: (
                    results: PlaceResult[],
                    status: PlacesServiceStatus,
                    pagination: PlaceSearchPagination,
                ) => void,
            ): void;
            /**
             * @deprecated Radar search is deprecated as of June 30, 2018. After that
             *     time, this feature will no longer be available.
             */
            radarSearch(
                request: RadarSearchRequest,
                callback: (results: PlaceResult[], status: PlacesServiceStatus) => void,
            ): void;
            textSearch(
                request: TextSearchRequest,
                callback: (
                    results: PlaceResult[],
                    status: PlacesServiceStatus,
                    pagination: PlaceSearchPagination,
                ) => void,
            ): void;
        }

        enum PlacesServiceStatus {
            INVALID_REQUEST = 'INVALID_REQUEST',
            NOT_FOUND = 'NOT_FOUND',
            OK = 'OK',
            OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
            REQUEST_DENIED = 'REQUEST_DENIED',
            UNKNOWN_ERROR = 'UNKNOWN_ERROR',
            ZERO_RESULTS = 'ZERO_RESULTS',
        }

        interface QueryAutocompletePrediction {
            description: string;
            matched_substrings: PredictionSubstring[];
            place_id: string;
            terms: PredictionTerm[];
        }

        interface QueryAutocompletionRequest {
            bounds?: LatLngBounds | LatLngBoundsLiteral;
            input?: string;
            location?: LatLng;
            offset?: number;
            radius?: number;
        }

        interface RadarSearchRequest {
            bounds?: LatLngBounds | LatLngBoundsLiteral;
            keyword?: string;
            location?: LatLng | LatLngLiteral;
            name?: string;
            radius?: number;
            types?: string[] /* Deprecated. Will be removed February 16, 2017 */;
            type?: string;
        }

        enum RankBy {
            PROMINENCE = 0,
            DISTANCE = 1,
        }

        class SearchBox extends MVCObject {
            constructor(inputField: HTMLInputElement, opts?: SearchBoxOptions);
            getBounds(): LatLngBounds;
            getPlaces(): PlaceResult[];
            setBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void;
        }

        interface SearchBoxOptions {
            bounds: LatLngBounds | LatLngBoundsLiteral;
        }

        interface TextSearchRequest {
            bounds?: LatLngBounds | LatLngBoundsLiteral;
            location?: LatLng | LatLngLiteral;
            query: string;
            radius?: number;
            types?: string[] /* Deprecated. Will be removed February 16, 2017 */;
            type?: string;
        }

        interface FindPlaceFromQueryRequest {
            fields: string[];
            locationBias?: LocationBias;
            query: string;
        }

        interface FindPlaceFromPhoneNumberRequest {
            fields: string[];
            locationBias?: LocationBias;
            phoneNumber: string;
        }
    }

    /***** Drawing Library *****/
    namespace drawing {
        class DrawingManager extends MVCObject {
            constructor(options?: DrawingManagerOptions);
            getDrawingMode(): OverlayType;
            getMap(): Map;
            setDrawingMode(drawingMode: OverlayType | null): void;
            setMap(map: Map | null): void;
            setOptions(options: DrawingManagerOptions): void;
        }

        /** Options for the drawing manager. */
        interface DrawingManagerOptions {
            /**
             * Options to apply to any new circles created with this DrawingManager.
             * The center and radius properties are ignored, and the map property of a
             * new circle is always set to the DrawingManager's map.
             */
            circleOptions?: CircleOptions;
            /**
             * The enabled/disabled state of the drawing control. Defaults to true.
             */
            drawingControl?: boolean;
            /** The display options for the drawing control. */
            drawingControlOptions?: DrawingControlOptions;
            /**
             * The DrawingManager's drawing mode, which defines the type of overlay to
             * be added on the map. Accepted values are 'marker', 'polygon',
             * 'polyline', 'rectangle', 'circle', or null. A drawing mode of null
             * means that the user can interact with the map as normal, and clicks do
             * not draw anything.
             */
            drawingMode?: OverlayType | null;
            /**
             * The Map to which the DrawingManager is attached, which is the Map on
             * which the overlays created will be placed.
             */
            map?: Map;
            /**
             * Options to apply to any new markers created with this DrawingManager.
             * The position property is ignored, and the map property of a new marker
             * is always set to the DrawingManager's map.
             */
            markerOptions?: MarkerOptions;
            /**
             * Options to apply to any new polygons created with this DrawingManager.
             * The paths property is ignored, and the map property of a new polygon is
             * always set to the DrawingManager's map.
             */
            polygonOptions?: PolygonOptions;
            /**
             * Options to apply to any new polylines created with this DrawingManager.
             * The path property is ignored, and the map property of a new polyline is
             * always set to the DrawingManager's map.
             */
            polylineOptions?: PolylineOptions;
            /**
             * Options to apply to any new rectangles created with this
             * DrawingManager. The bounds property is ignored, and the map property of
             * a new rectangle is always set to the DrawingManager's map.
             */
            rectangleOptions?: RectangleOptions;
        }

        interface DrawingControlOptions {
            drawingModes?: OverlayType[];
            position?: ControlPosition;
        }

        /** The properties of an overlaycomplete event on a DrawingManager.. */
        interface OverlayCompleteEvent {
            /** The completed overlay. */
            overlay: Marker | Polygon | Polyline | Rectangle | Circle;
            /** The completed overlay's type. */
            type: OverlayType;
        }

        /**
         * The types of overlay that may be created by the DrawingManager. Specify
         * these by value, or by using the constant's name. For example, 'polygon'
         * or google.maps.drawing.OverlayType.POLYGON.
         */
        enum OverlayType {
            /**
             * Specifies that the DrawingManager creates circles, and that the overlay
             * given in the overlaycomplete event is a circle.
             */
            CIRCLE = 'circle',
            /**
             * Specifies that the DrawingManager creates markers, and that the overlay
             * given in the overlaycomplete event is a marker.
             */
            MARKER = 'marker',
            /**
             * Specifies that the DrawingManager creates polygons, and that the
             * overlay given in the overlaycomplete event is a polygon.
             */
            POLYGON = 'polygon',
            /**
             * Specifies that the DrawingManager creates polylines, and that the
             * overlay given in the overlaycomplete event is a polyline.
             */
            POLYLINE = 'polyline',
            /**
             * Specifies that the DrawingManager creates rectangles, and that the
             * overlay given in the overlaycomplete event is a rectangle.
             */
            RECTANGLE = 'rectangle',
        }
    }

    /***** Visualization Library *****/
    namespace visualization {
        class MapsEngineLayer extends MVCObject {
            constructor(options: MapsEngineLayerOptions);
            getLayerId(): string;
            getLayerKey(): string;
            getMap(): Map;
            getMapId(): string;
            getOpacity(): number;
            getProperties(): MapsEngineLayerProperties;
            getStatus(): MapsEngineStatus;
            getZIndex(): number;
            setLayerId(layerId: string): void;
            setLayerKey(layerKey: string): void;
            setMap(map: Map | null): void;
            setMapId(mapId: string): void;
            setOpacity(opacity: number): void;
            setOptions(options: MapsEngineLayerOptions): void;
            setZIndex(zIndex: number): void;
        }

        interface MapsEngineLayerOptions {
            accessToken?: string;
            clickable?: boolean;
            fitBounds?: boolean;
            layerId?: string;
            layerKey?: string;
            map?: Map;
            mapId?: string;
            opacity?: number;
            suppressInfoWindows?: boolean;
            zIndex?: number;
        }

        interface MapsEngineLayerProperties {
            name: string;
        }

        interface MapsEngineMouseEvent {
            featureId?: string;
            infoWindowHtml?: string;
            latLng?: LatLng;
            pixelOffset?: Size;
        }

        enum MapsEngineStatus {
            INVALID_LAYER = 'INVALID_LAYER',
            OK = 'OK',
            UNKNOWN_ERROR = 'UNKNOWN_ERROR',
        }

        class HeatmapLayer extends MVCObject {
            constructor(opts?: HeatmapLayerOptions);
            getData(): MVCArray<LatLng | WeightedLocation>;
            getMap(): Map;
            setData(data: MVCArray<LatLng | WeightedLocation> | LatLng[] | WeightedLocation[]): void;
            setMap(map: Map | null): void;
            setOptions(options: HeatmapLayerOptions): void;
        }

        interface HeatmapLayerOptions {
            data: any;
            dissipating?: boolean;
            gradient?: string[];
            map?: Map;
            maxIntensity?: number;
            opacity?: number;
            radius?: number;
        }

        interface WeightedLocation {
            location: LatLng;
            weight: number;
        }

        class MouseEvent {
            stop(): void;
        }

        class MapsEventListener {}
    }
}
