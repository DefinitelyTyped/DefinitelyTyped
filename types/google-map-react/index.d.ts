// Type definitions for google-map-react 2.1
// Project: https://github.com/google-map-react/google-map-react
// Definitions by: Honza Brecka <https://github.com/honzabrecka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

declare class googleMapReact extends React.Component<googleMapReact.Props> {}

declare namespace googleMapReact {
    type BootstrapURLKeys = ({ key: string } | { client: string; v: string }) & {
        language?: string | undefined;
        region?: string | undefined;
        libraries?: string[] | string | undefined;
        id?: string | undefined
    };

    interface MapTypeStyle {
        elementType?: string | undefined;
        featureType?: string | undefined;
        stylers: any[];
    }

    interface MapOptions {
        // Any options from https://developers.google.com/maps/documentation/javascript/reference/3/#MapOptions
        // excluding 'zoom' and 'center' which get set via props.
        backgroundColor?: string | undefined;
        clickableIcons?: boolean | undefined;
        controlSize?: number | undefined;
        disableDefaultUI?: boolean | undefined;
        disableDoubleClickZoom?: boolean | undefined;
        draggable?: boolean | undefined;
        draggableCursor?: string | undefined;
        draggingCursor?: string | undefined;
        fullscreenControl?: boolean | undefined;
        fullscreenControlOptions?: { position: number } | undefined;
        gestureHandling?: string | undefined;
        heading?: number | undefined;
        keyboardShortcuts?: boolean | undefined;
        mapTypeControl?: boolean | undefined;
        mapTypeControlOptions?: any;
        mapTypeId?: string | undefined;
        minZoom?: number | undefined;
        maxZoom?: number | undefined;
        noClear?: boolean | undefined;
        options?: ((maps: Maps) => Props) | undefined;
        panControl?: boolean | undefined;
        panControlOptions?: { position: number } | undefined;
        rotateControl?: boolean | undefined;
        rotateControlOptions?: { position: number } | undefined;
        scaleControl?: boolean | undefined;
        scaleControlOptions?: any;
        scrollwheel?: boolean | undefined;
        streetView?: any;
        streetViewControl?: boolean | undefined;
        streetViewControlOptions?: { position: number } | undefined;
        styles?: MapTypeStyle[] | undefined;
        tilt?: number | undefined;
        zoomControl?: boolean | undefined;
        zoomControlOptions?: { position: number } | undefined;
        minZoomOverride?: boolean | undefined; // Not a standard option; specific to google-map-react: https://github.com/google-map-react/google-map-react/pull/154
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
        nw?: Coords | undefined;
        se?: Coords | undefined;
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
        weight?: number | undefined;
    }

    interface Heatmap {
        positions: Position[];
        options: {
            radius?: number | undefined;
            opacity?: number | undefined;
        };
    }

    interface Props {
        bootstrapURLKeys?: BootstrapURLKeys | undefined;
        defaultCenter?: Coords | undefined;
        center?: Coords | undefined;
        defaultZoom?: number | undefined;
        zoom?: number | undefined;
        heatmapLibrary?: boolean | undefined;
        hoverDistance?: number | undefined;
        options?: MapOptions | ((maps: Maps) => MapOptions) | undefined;
        margin?: any[] | undefined;
        debounced?: boolean | undefined;
        draggable?: boolean | undefined;
        layerTypes?: string[] | undefined;
        onClick?(value: ClickEventValue): any;
        onChange?(value: ChangeEventValue): any;
        resetBoundsOnResize?: boolean | undefined;
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
        yesIWantToUseGoogleMapApiInternals?: boolean | undefined;
        style?: React.CSSProperties | undefined;
        shouldUnregisterMapOnUnmount?: boolean | undefined;
        heatmap?: Heatmap | undefined;
    }

    interface ChildComponentProps extends Coords {
        $hover?: boolean | undefined;
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
