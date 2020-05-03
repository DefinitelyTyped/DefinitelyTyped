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
//                 Bat-Orshikh Baavgaikhuu <https://github.com/Bat-Orshikh>
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

/// <reference path="./reference/map.d.ts" />
/// <reference path="./reference/coordinates.d.ts" />
/// <reference path="./reference/event.d.ts" />
/// <reference path="./reference/control.d.ts" />
/// <reference path="./reference/geometry.d.ts" />

/// <reference path="./reference/marker.d.ts" />
/// <reference path="./reference/info-window.d.ts" />
/// <reference path="./reference/polygon.d.ts" />
/// <reference path="./reference/data.d.ts" />
/// <reference path="./reference/overlay-view.d.ts" />
/// <reference path="./reference/kml.d.ts" />
/// <reference path="./reference/image-overlay.d.ts" />
/// <reference path="./reference/drawing.d.ts" />
/// <reference path="./reference/visualization.d.ts" />
/// <reference path="./reference/max-zoom.d.ts" />

/// <reference path="./reference/street-view.d.ts" />
/// <reference path="./reference/street-view-service.d.ts" />

/// <reference path="./reference/places-widget.d.ts" />
/// <reference path="./reference/places-service.d.ts" />
/// <reference path="./reference/places-autocomplete-service.d.ts" />
/// <reference path="./reference/geocoder.d.ts" />

/// <reference path="./reference/directions.d.ts" />
/// <reference path="./reference/distance-matrix.d.ts" />
/// <reference path="./reference/elevation.d.ts" />

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

    type GestureHandlingOptions = 'cooperative' | 'greedy' | 'none' | 'auto';

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

    enum ZoomControlStyle {
        DEFAULT = 0,
        SMALL = 1,
        LARGE = 2,
    }

    type DrawingMode = 'Point' | 'LineString' | 'Polygon';

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

    /***** Save to Google Maps *****/
    interface Attribution {
        iosDeepLinkId?: string;
        source?: string;
        webUrl?: string;
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

    class MapTypeRegistry extends MVCObject {
        constructor();
        set(id: string, mapType: MapType): void;
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
        interface RadarSearchRequest {
            bounds?: LatLngBounds | LatLngBoundsLiteral;
            keyword?: string;
            location?: LatLng | LatLngLiteral;
            name?: string;
            radius?: number;
            types?: string[] /* Deprecated. Will be removed February 16, 2017 */;
            type?: string;
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

        class MouseEvent {
            stop(): void;
        }

        class MapsEventListener {}
    }
}
