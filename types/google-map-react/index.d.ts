import * as React from "react";

declare class googleMapReact extends React.Component<googleMapReact.Props> {}

declare namespace googleMapReact {
    type BootstrapURLKeys = ({ key: string } | { client: string }) & {
        version?: string | undefined;
        language?: string | undefined;
        region?: string | undefined;
        libraries?: string[] | string | undefined;
        id?: string | undefined;
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
        mapId?: string | undefined;
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
        Animation: {
            BOUNCE: number;
            DROP: number;
            Qz: number;
            Uz: number;
        };
        ControlPosition: {
            BOTTOM: number;
            BOTTOM_CENTER: number;
            BOTTOM_LEFT: number;
            BOTTOM_RIGHT: number;
            CENTER: number;
            LEFT: number;
            LEFT_BOTTOM: number;
            LEFT_CENTER: number;
            LEFT_TOP: number;
            RIGHT: number;
            RIGHT_BOTTOM: number;
            RIGHT_CENTER: number;
            RIGHT_TOP: number;
            TOP: number;
            TOP_CENTER: number;
            TOP_LEFT: number;
            TOP_RIGHT: number;
        };
        DirectionsStatus: {
            INVALID_REQUEST: string;
            MAX_WAYPOINTS_EXCEEDED: string;
            NOT_FOUND: string;
            OK: string;
            OVER_QUERY_LIMIT: string;
            REQUEST_DENIED: string;
            UNKNOWN_ERROR: string;
            ZERO_RESULTS: string;
        };
        /** @deprecated - Use `TravelMode` instead */
        DirectionsTravelMode: {
            BICYCLING: string;
            DRIVING: string;
            TRANSIT: string;
            TWO_WHEELER: string;
            WALKING: string;
        };
        /** @deprecated - Use `UnitSystem` instead */
        DirectionsUnitSystem: {
            IMPERIAL: number;
            METRIC: number;
        };
        DistanceMatrixStatus: {
            INVALID_REQUEST: string;
            MAX_DIMENSIONS_EXCEEDED: string;
            MAX_ELEMENTS_EXCEEDED: string;
            OK: string;
            OVER_QUERY_LIMIT: string;
            REQUEST_DENIED: string;
            UNKNOWN_ERROR: string;
        };
        DistanceMatrixElementStatus: {
            NOT_FOUND: string;
            OK: string;
            ZERO_RESULTS: string;
        };
        ElevationStatus: {
            INVALID_REQUEST: string;
            OK: string;
            OVER_QUERY_LIMIT: string;
            REQUEST_DENIED: string;
            UNKNOWN_ERROR: string;
            yz: string;
        };
        GeocoderLocationType: {
            APPROXIMATE: string;
            GEOMETRIC_CENTER: string;
            RANGE_INTERPOLATED: string;
            ROOFTOP: string;
        };
        GeocoderStatus: {
            OK: string;
            UNKNOWN_ERROR: string;
            OVER_QUERY_LIMIT: string;
            REQUEST_DENIED: string;
            INVALID_REQUEST: string;
            ZERO_RESULTS: string;
            ERROR: string;
        };
        KmlLayerStatus: {
            DOCUMENT_NOT_FOUND: string;
            DOCUMENT_TOO_LARGE: string;
            FETCH_ERROR: string;
            INVALID_DOCUMENT: string;
            INVALID_REQUEST: string;
            LIMITS_EXCEEDED: string;
            OK: string;
            TIMED_OUT: string;
            UNKNOWN: string;
        };
        MapTypeControlStyle: {
            DEFAULT: number;
            DROPDOWN_MENU: number;
            HORIZONTAL_BAR: number;
            INSET: number;
            INSET_LARGE: number;
        };
        MapTypeId: {
            HYBRID: string;
            ROADMAP: string;
            SATELLITE: string;
            TERRAIN: string;
        };
        MaxZoomStatus: {
            ERROR: string;
            OK: string;
        };
        NavigationControlStyle: {
            ANDROID: number;
            DEFAULT: number;
            Ot: number;
            SMALL: number;
            Vz: number;
            ZOOM_PAN: number;
        };
        RenderingType: {
            RASTER: string;
            UNINITIALIZED: string;
            VECTOR: string;
        };
        ScaleControlStyle: {
            DEFAULT: number;
        };
        StreetViewPreference: {
            BEST: string;
            NEAREST: string;
        };
        StreetViewStatus: {
            OK: string;
            UNKNOWN_ERROR: string;
            ZERO_RESULTS: string;
        };
        StreetViewSource: {
            DEFAULT: string;
            OUTDOOR: string;
        };
        StrokePosition: {
            CENTER: number;
            INSIDE: number;
            OUTSIDE: number;
        };
        SymbolPath: {
            CIRCLE: number;
            BACKWARD_CLOSED_ARROW: number;
            BACKWARD_OPEN_ARROW: number;
            FORWARD_CLOSED_ARROW: number;
            FORWARD_OPEN_ARROW: number;
        };
        TrafficModel: {
            BEST_GUESS: string;
            OPTIMISTIC: string;
            PESSIMISTIC: string;
        };
        TransitMode: {
            BUS: string;
            RAIL: string;
            SUBWAY: string;
            TRAIN: string;
            TRAM: string;
        };
        TransitRoutePreference: {
            FEWER_TRANSFERS: string;
            LESS_WALKING: string;
        };
        TravelMode: {
            BICYCLING: string;
            DRIVING: string;
            TRANSIT: string;
            TWO_WHEELER: string;
            WALKING: string;
        };
        UnitSystem: {
            IMPERIAL: number;
            METRIC: number;
        };
        /**
         * @deprecated - The Zoom control is available in only one style, and
         * `google.maps.ZoomControlStyle` is therefore no longer available.
         */
        ZoomControlStyle: {
            DEFAULT: number;
            LARGE: number;
            Ot: number;
            SMALL: number;
        };
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
        children?: React.ReactNode;
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
