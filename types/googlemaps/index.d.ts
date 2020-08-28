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
//                 Justin Poehnelt <https://github.com/jpoehnelt>
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

/// <reference path="./style-reference.d.ts" />

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

    // TODO find source documentation
    interface Attribution {
        iosDeepLinkId?: string;
        source?: string;
        webUrl?: string;
    }

    // TODO find source documentation
    class SaveWidget {
        constructor(container: Node, opts?: SaveWidgetOptions);
        getAttribution(): Attribution;
        getPlace(): Place;
        setAttribution(attribution: Attribution): void;
        setOptions(opts: SaveWidgetOptions): void;
        setPlace(place: Place): void;
    }

    // TODO find source documentation
    interface SaveWidgetOptions {
        attribution?: Attribution;
        place?: Place;
    }

    // TODO find source documentation
    class FusionTablesLayer extends MVCObject {
        constructor(options: FusionTablesLayerOptions);
        getMap(): Map;
        setMap(map: Map | null): void;
        setOptions(options: FusionTablesLayerOptions): void;
    }

    // TODO find source documentation
    interface FusionTablesLayerOptions {
        clickable?: boolean;
        heatmap?: FusionTablesHeatmap;
        map?: Map;
        query?: FusionTablesQuery;
        styles?: FusionTablesStyle[];
        suppressInfoWindows?: boolean;
    }

    // TODO find source documentation
    interface FusionTablesQuery {
        from?: string;
        limit?: number;
        offset?: number;
        orderBy?: string;
        select?: string;
        where?: string;
    }

    // TODO find source documentation
    interface FusionTablesStyle {
        markerOptions?: FusionTablesMarkerOptions;
        polygonOptions?: FusionTablesPolygonOptions;
        polylineOptions?: FusionTablesPolylineOptions;
        where?: string;
    }

    // TODO find source documentation
    interface FusionTablesHeatmap {
        enabled: boolean;
    }

    // TODO find source documentation
    interface FusionTablesMarkerOptions {
        iconName: string;
    }

    // TODO find source documentation
    interface FusionTablesPolygonOptions {
        fillColor?: string;
        fillOpacity?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
    }

    // TODO find source documentation
    interface FusionTablesPolylineOptions {
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
    }

    // TODO find source documentation
    interface FusionTablesMouseEvent {
        infoWindowHtml?: string;
        latLng?: LatLng;
        pixelOffset?: Size;
        row?: object; // Object<FusionTablesCell>
    }

    // TODO find source documentation
    interface FusionTablesCell {
        columnName?: string;
        value?: string;
    }

    // TODO find source documentation
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

    namespace visualization {
        // TODO find source documentation
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

        // TODO find source documentation
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

        // TODO find source documentation
        interface MapsEngineLayerProperties {
            name: string;
        }

        // TODO find source documentation
        interface MapsEngineMouseEvent {
            featureId?: string;
            infoWindowHtml?: string;
            latLng?: LatLng;
            pixelOffset?: Size;
        }

        // TODO find source documentation
        enum MapsEngineStatus {
            INVALID_LAYER = 'INVALID_LAYER',
            OK = 'OK',
            UNKNOWN_ERROR = 'UNKNOWN_ERROR',
        }

        // TODO find source documentation
        class MouseEvent {
            stop(): void;
        }

        // TODO find source documentation
        class MapsEventListener {}
    }
}
