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

    type GestureHandlingOptions = 'cooperative' | 'greedy' | 'none' | 'auto';

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
