// Type definitions for google-map-react 2.1
// Project: https://github.com/google-map-react/google-map-react
// Definitions by: Honza Brecka <https://github.com/honzabrecka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

declare class googleMapReact extends React.Component<googleMapReact.Props> {}

declare namespace googleMapReact {
    type BootstrapURLKeys = ({ key: string } | { client: string; v: string }) & {
        language?: string;
        region?: string;
        libraries?: string[] | string;
    };

    interface MapTypeStyle {
        elementType?: string;
        featureType?: string;
        stylers: any[];
    }

    interface MapOptions {
        // Any options from https://developers.google.com/maps/documentation/javascript/reference/3/#MapOptions
        // excluding 'zoom' and 'center' which get set via props.
        backgroundColor?: string;
        clickableIcons?: boolean;
        controlSize?: number;
        disableDefaultUI?: boolean;
        disableDoubleClickZoom?: boolean;
        draggable?: boolean;
        draggableCursor?: string;
        draggingCursor?: string;
        fullscreenControl?: boolean;
        fullscreenControlOptions?: { position: number };
        gestureHandling?: string;
        heading?: number;
        keyboardShortcuts?: boolean;
        mapTypeControl?: boolean;
        mapTypeControlOptions?: any;
        mapTypeId?: string;
        minZoom?: number;
        maxZoom?: number;
        noClear?: boolean;
        options?: (maps: Maps) => Props;
        panControl?: boolean;
        panControlOptions?: { position: number };
        rotateControl?: boolean;
        rotateControlOptions?: { position: number };
        scaleControl?: boolean;
        scaleControlOptions?: any;
        scrollwheel?: boolean;
        streetView?: any;
        streetViewControl?: boolean;
        streetViewControlOptions?: { position: number };
        styles?: MapTypeStyle[];
        tilt?: number;
        zoomControl?: boolean;
        zoomControlOptions?: { position: number };
        minZoomOverride?: boolean; // Not a standard option; specific to google-map-react: https://github.com/google-map-react/google-map-react/pull/154
    }

    interface Maps {
        Animation: any;
        ControlPosition: any;
        MapTypeControlStyle: any;
        MapTypeId: any;
        NavigationControlStyle: any;
        ScaleControlStyle: any;
        StrokePosition: any;
        SymbolPath: any;
        ZoomControlStyle: any;
        DirectionsStatus: any;
        DirectionsTravelMode: any;
        DirectionsUnitSystem: any;
        DistanceMatrixStatus: any;
        DistanceMatrixElementStatus: any;
        ElevationStatus: any;
        GeocoderLocationType: any;
        GeocoderStatus: any;
        KmlLayerStats: any;
        MaxZoomStatus: any;
        StreetViewStatus: any;
        TransitMode: any;
        TransitRoutePreference: any;
        TravelMode: any;
        UnitSystem: any;
    }

    interface Bounds {
        nw: Coords;
        ne: Coords;
        sw: Coords;
        se: Coords;
    }

    interface Point {
        x: number;
        y: number;
    }

    interface NESWBounds {
        ne: Coords;
        sw: Coords;
        nw?: Coords;
        se?: Coords;
    }

    interface Coords {
        lat: number;
        lng: number;
    }

    interface Size {
        width: number;
        height: number;
    }

    interface ClickEventValue extends Point, Coords {
        event: any;
    }

    interface ChangeEventValue {
        center: Coords;
        zoom: number;
        bounds: Bounds;
        marginBounds: Bounds;
        size: Size;
    }

    interface Position {
        lat: number;
        lng: number;
        weight?: number;
    }

    interface Heatmap {
        positions: Position[];
        options: {
            radius?: number;
            opacity?: number;
        };
    }

    interface Props {
        bootstrapURLKeys?: BootstrapURLKeys;
        defaultCenter?: Coords;
        center?: Coords;
        defaultZoom?: number;
        zoom?: number;
        heatmapLibrary?: boolean;
        hoverDistance?: number;
        options?: MapOptions | ((maps: Maps) => MapOptions);
        margin?: any[];
        debounced?: boolean;
        draggable?: boolean;
        layerTypes?: string[];
        onClick?(value: ClickEventValue): any;
        onChange?(value: ChangeEventValue): any;
        resetBoundsOnResize?: boolean;
        onChildClick?(hoverKey: any, childProps: any): void;
        onChildMouseEnter?(hoverKey: any, childProps: any): void;
        onChildMouseLeave?(hoverKey: any, childProps: any): void;
        onChildMouseDown?(childKey: any, childProps: any, mouse: any): void;
        onChildMouseUp?(childKey: any, childProps: any, mouse: any): void;
        onChildMouseMove?(childKey: any, childProps: any, mouse: any): void;
        onDrag?(map: any): void;
        onDragEnd?(map: any): void;
        onZoomAnimationStart?(args: any): void;
        onZoomAnimationEnd?(args: any): void;
        onMapTypeIdChange?(args: any): void;
        distanceToMouse?(pt: Point, mousePos: Point, markerProps?: object): number;
        googleMapLoader?(bootstrapURLKeys: any): void;
        onGoogleApiLoaded?(maps: { map: any; maps: any; ref: Element | null }): void;
        onTilesLoaded?(): void;
        yesIWantToUseGoogleMapApiInternals?: boolean;
        style?: React.HTMLProps<HTMLDivElement>;
        shouldUnregisterMapOnUnmount?: boolean;
        heatmap?: Heatmap;
    }

    interface ChildComponentProps extends Coords {
        $hover?: boolean;
    }

    interface Tile extends Point {
        zoom: number;
    }

    function convertNeSwToNwSe(boundCorder: { ne: Coords; sw: Coords }): { nw: Coords; se: Coords };

    function convertNwSeToNeSw(boundCorder: { nw: Coords; se: Coords }): { ne: Coords; sw: Coords };

    function fitBounds(
        bounds: NESWBounds,
        size: Size,
    ): {
        center: { lat: number; lng: number };
        zoom: number;
        newBounds: Bounds;
    };

    function meters2ScreenPixels(meters: number, coords: Coords, zoom: number): { w: number; h: number };

    function tile2LatLng(point: Point, zoom: number): { coords: Coords };

    function latLng2Tile(coords: Coords, zoom: number): { point: Point };

    function getTilesIds(start: { from: number; to: number }, zoom: number): Tile[];
}

export = googleMapReact;
