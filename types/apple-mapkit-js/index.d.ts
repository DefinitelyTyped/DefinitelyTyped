// Type definitions for MapKit JS 5.4
// Project: https://developer.apple.com/reference/mapkitjs, https://github.com/lukemizuhashi/apple-mapkit-js
// Definitions by: Philipp Jean-Jacques <https://github.com/kilghaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare namespace mapkit {
    let maps: Map[];
    let language: string;
    const build: string;
    const version: string;

    function init(options: MapKitInitOptions): void;

    function importGeoJSON(data: string | object, callback?: (error: Error, result: ItemCollection) => void | GeoJSONDelegate): ItemCollection | Error;

    function addEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;

    function removeEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;

    interface MapKitInitOptions {
        language?: string;
        authorizationCallback?: (done: (token: string) => void) => void;
    }

    class Annotation {
        northLatitude: number;
        eastLongitude: number;
        southLatitude: number;
        westLongitude: number;
        title: string;
        subtitle: string;
        accessibilityLabel: string;
        draggable: boolean;
        calloutEnabled: boolean;
        animates: boolean;
        appearanceAnimation: string;
        anchorOffset: DOMPoint;
        calloutOffset: DOMPoint;
        callout: AnnotationCalloutDelegate;
        size: object;
        displayPriority: number;
        collisionMode: string;
        clusteringIdentifier: string;
        padding: Padding;
        data: any;
        visible: boolean;
        enabled: boolean;
        selected: boolean;

        constructor(coordinate: Coordinate,
                    factory: (coordinate: Coordinate, options: AnnotationConstructorOptions) => Element, options?: AnnotationConstructorOptions);

        copy(): BoundingRegion;

        toCoordinateRegion(): CoordinateRegion;

        addEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;

        removeEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;
    }

    class MarkerAnnotation extends Annotation {
        subtitleVisibility: FeatureVisibility;
        titleVisibility: FeatureVisibility;
        color: string;
        glyphColor: string;
        glyphText: string;
        glyphImage: any;
        selectedGlyphImage: any;

        constructor(coordinate: Coordinate, options?: MarkerAnnotationConstructorOptions);
    }

    class ImageAnnotation extends Annotation {
        url?: { [key: number]: string };

        constructor(coordinate: Coordinate, options?: ImageAnnotationConstructorOptions);
    }

    interface ImageAnnotationConstructorOptions extends AnnotationConstructorOptions {
        url?: { [key: number]: string };
    }

    interface MarkerAnnotationConstructorOptions extends AnnotationConstructorOptions {
        titleVisibility?: string;
        subtitleVisibility?: string;
        color?: string;
        glyphColor?: string;
        glyphText?: string;
        glyphImage?: any;
        selectedGlyphImage?: any;
    }

    interface AnnotationConstructorOptions extends OverlayOptions {
        title?: string;
        subtitle?: string;
        accessibilityLabel?: string;
        draggable?: boolean;
        calloutEnabled?: boolean;
        animates?: boolean;
        appearanceAnimation?: string;
        anchorOffset?: DOMPoint;
        calloutOffset?: DOMPoint;
        callout?: AnnotationCalloutDelegate;
        size?: object;
        displayPriority?: number;
        collisionMode?: string;
        clusteringIdentifier?: string;
        padding?: Padding;
    }

    interface AnnotationCalloutDelegate {
        calloutAnchorOffsetForAnnotation(annotation: Annotation, size: { width: number, height: number }): DOMPoint;

        calloutShouldAppearForAnnotation(annotation: Annotation): boolean;

        calloutShouldAnimateForAnnotation(annotation: Annotation): boolean;

        calloutAppearanceAnimationForAnnotation(annotation: Annotation): string;

        calloutContentForAnnotation(annotation: Annotation): Element;

        calloutElementForAnnotation(annotation: Annotation): Element;

        calloutLeftAccessoryForAnnotation(annotation: Annotation): Element;

        calloutRightAccessoryForAnnotation(annotation: Annotation): Element;
    }

    namespace Annotation {
        enum CollisionMode {
            Rectangle = 'rectangle',
            Circle = 'circle'
        }

        enum DisplayPriority {
            Low = 250,
            High = 750,
            Require = 1000
        }
    }

    class BoundingRegion {
        northLatitude: number;
        eastLongitude: number;
        southLatitude: number;
        westLongitude: number;

        constructor(northLatitude: number, eastLongitude: number, southLatitude: number, westLongitude: number);

        copy(): BoundingRegion;

        toCoordinateRegion(): CoordinateRegion;
    }

    class CircleOverlay implements Overlay {
        coordinate: Coordinate;
        radius: number;
        data: any;
        enabled: boolean;
        map: Map;
        selected: boolean;
        style: Style;
        visible: boolean;

        constructor(coordinate: Coordinate, radius: number, options?: StylesOverlayOptions);

        addEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;

        removeEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;
    }

    class CoordinateRegion {
        center: Coordinate;
        span: CoordinateSpan;

        constructor(center: Coordinate, span: CoordinateSpan);

        copy(): CoordinateRegion;

        equals(coordinateSpan: CoordinateRegion): boolean;

        toBoundingRegion(): BoundingRegion;

        toMapRect(): MapRect;
    }

    class Coordinate {
        latitude: number;
        longitude: number;

        constructor(latitude: number, longitude: number);

        copy(): Coordinate;

        equals(coordinate: Coordinate): boolean;

        toMapPoint(): MapPoint;

        toUnwrappedMapPoint(): MapPoint;
    }

    class Directions {
        constructor(options?: DirectionsConstructorOptions);

        route(request: DirectionsRequest, callback: (error: Error, response: DirectionsResponse) => void): number;

        cancel(id: number): boolean;
    }

    interface DirectionsRequest {
        origin: string | Coordinate | Place;
        destination: string | Coordinate | Place;
        transportType: Directions.Transport;
        requestsAlternateRoutes: boolean;
    }

    interface DirectionsResponse {
        request: DirectionsRequest;
        routes: Route[];
    }

    interface Route {
        path: Coordinate[][];
        polyline: PolylineOverlay;
        steps: RouteStep[];
        name: string;
        distance: number;
        expectedTravelTime: number;
        transportType: Directions.Transport;
    }

    interface RouteStep {
        path: Coordinate[];
        instructions: string;
        distance: number;
        transportType: Directions.Transport;
    }

    interface DirectionsConstructorOptions {
        language?: string;
    }

    namespace Directions {
        enum Transport {
            Automobile = 'automobile',
            Walking = 'walking'
        }
    }

    class CoordinateSpan {
        latitudeDelta: number;
        longitudeDelta: number;

        constructor(latitudeDelta: number, longitudeDelta: number);

        copy(): CoordinateSpan;

        equals(coordinateSpan: CoordinateSpan): boolean;
    }

    enum FeatureVisibility {
        Adaptive = 'adaptive',
        Hidden = 'hidden',
        Visible = 'visible'
    }

    class Geocoder {
        getsUserLocation: boolean;
        language: string;

        constructor(options?: GeocoderConstructorOptions);

        lookup(place: string, callback: GeocoderLookupCallback, options?: GeocoderLookupOptions): number;

        reverseLookup(coordinate: Coordinate, callback: GeocoderLookupCallback, options?: GeocoderReverseLookupOptions): number;

        cancel(id: number): boolean;
    }

    type GeocoderLookupCallback = (error: Error, data: GeocoderResponse) => void;

    interface GeocoderLookupOptions {
        language?: string;
        coordinate?: Coordinate;
        region?: CoordinateRegion;
        limitToCountries?: string;
    }

    interface GeocoderReverseLookupOptions {
        language?: string;
    }

    interface GeocoderResponse {
        results: Place[];
    }

    interface Place {
        name: string;
        coordinate: Coordinate;
        formattedAddress: string;
        region: CoordinateRegion;
        countryCode: string;
    }

    interface GeocoderConstructorOptions {
        language: string;
        getsUserLocation: boolean;
    }

    interface GeoJSONDelegate {
        itemForFeature(item: Annotation | Overlay | ItemCollection, geoJSON: any): ItemType;

        itemForFeatureCollection(itemCollection: ItemCollection, geoJSON: any): ItemType;

        itemForLineString(overlay: PolylineOverlay, geoJSON: any): ItemType;

        itemForMultiLineString(itemCollection: ItemCollection, geoJSON: any): ItemType;

        itemForPoint(coordinate: Coordinate, geoJSON: any): ItemType;

        itemForMultiPoint(itemCollection: ItemCollection, geoJSON: any): ItemType;

        itemForPolygon(overlay: PolygonOverlay, geoJSON: any): ItemType;

        itemForMultiPolygon(itemCollection: ItemCollection, geoJSON: any): ItemType;

        styleForOverlay(overlay: Overlay, geoJSON: any): Style;

        geoJSONDidComplete(result: ItemCollection, geoJSON: any): void;

        geoJSONDidError(error: Error, geoJSON: any): void;
    }

    type ItemType = Annotation | Overlay | Annotation[] | Overlay[];

    interface ItemCollection {
        data: any;
        getFlattenedItemList: Annotation[] | Overlay[];
        items: Annotation[] | Overlay[] | ItemCollection;
    }

    class Map {
        tileOverlays: TileOverlay[];
        readonly element: Element;
        readonly userLocationAnnotation: Annotation;
        annotations: Annotation[];
        center: Coordinate;
        colorScheme: Map.ColorSchemes;
        isRotationEnabled: boolean;
        isScrollEnabled: boolean;
        isZoomEnabled: boolean;
        mapType: Map.MapTypes;
        overlays: Overlay[];
        padding: Padding;
        region: CoordinateRegion;
        rotation: number;
        selectedAnnotation: Annotation;
        selectedOverlay: Overlay;
        showsCompass: boolean;
        showsMapTypeControl: boolean;
        showsPointsOfInterest: boolean;
        showsScale: boolean;
        showsUserLocation: boolean;
        showsUserLocationControl: boolean;
        showsZoomControl: boolean;
        tintColor: string;
        tracksUserLocation: boolean;
        visibleMapRect: MapRect;

        constructor(parent?: string | HTMLElement, options?: MapConstructorOptions);

        showItems(items: ReadonlyArray<Annotation> | ReadonlyArray<Overlay>, options?: MapShowItemsOptions): Annotation[] | Overlay[];

        annotationsInMapRect(mapRect: MapRect): Annotation[];

        addAnnotation(annotation: Annotation): Annotation;

        addAnnotations(annotations: ReadonlyArray<Annotation>): Annotation[];

        removeAnnotation(annotation: Annotation): Annotation;

        removeAnnotations(annotations: ReadonlyArray<Annotation>): Annotation[];

        overlaysAtPoint(point: DOMPoint): Overlay[];

        addOverlay(overlay: Overlay): Overlay;

        addOverlays(overlays: ReadonlyArray<Overlay>): Overlay[];

        removeOverlay(overlay: Overlay): Overlay;

        removeOverlays(overlays: ReadonlyArray<Overlay>): Overlay[];

        topOverlayAtPoint(point: DOMPoint): Overlay;

        addTileOverlay(tileOverlay: TileOverlay): TileOverlay;

        addTileOverlays(tileOverlays: ReadonlyArray<TileOverlay>): TileOverlay[];

        removeTileOverlay(tileOverlay: TileOverlay): TileOverlay;

        removeTileOverlays(tileOverlays: ReadonlyArray<TileOverlay>): TileOverlay[];

        convertCoordinateToPointOnPage(coordinate: Coordinate): DOMPoint;

        convertPointOnPageToCoordinate(point: DOMPoint): Coordinate;

        addEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;

        removeEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;

        destroy(): void;
    }

    enum MapEvent {
        RegionChange = 'region-change-start',
        RegionChangeEnd = 'region-change-end',
        ScrollStart = 'scroll-start',
        ScrollEnd = 'scroll-end',
        ZoomStart = 'zoom-start',
        ZoomEnd = 'zoom-end',
        MapTypeChange = 'map-type-change'
    }

    enum AnnotationEvent {
        Select = 'select',
        Deselect = 'deselect',
        DragStart = 'drag-start',
        Dragging = 'dragging',
        DragEnd = 'drag-end'
    }

    enum UserLocationEvent {
        UserLocationChange = 'user-location-change',
        UserLocationError = 'user-location-error'
    }

    interface MapConstructorOptions {
        visibleMapRect?: MapRect;
        region?: CoordinateRegion;
        center?: Coordinate;
        rotation?: number;
        tintColor?: string;

        colorScheme?: Map.ColorSchemes;
        mapType?: Map.MapTypes;
        padding?: Padding;
        showsMapTypeControl?: boolean;
        isRotationEnabled?: boolean;
        showsCompass?: boolean;
        isZoomEnabled?: boolean;
        showsZoomControl?: boolean;
        isScrollEnabled?: boolean;
        showsScale?: boolean;
        annotations?: Annotation[];
        selectedAnnotation?: Annotation;
        overlays?: Overlay[];
        selectedOverlay?: Overlay;
        showsPointsOfInterest?: boolean;
        showsUserLocation?: boolean;
        tracksUserLocation?: boolean;
        showsUserLocationControl?: boolean;

        annotationForCluster?: (clusterAnnotation: Annotation) => Annotation;
    }

    interface MapShowItemsOptions {
        animate?: boolean;
        padding?: Padding;
        minimumSpan?: CoordinateSpan;
    }

    namespace Map {
        enum ColorSchemes {
            Light = 'light',
            Dark = 'dark'
        }

        enum MapTypes {
            Satellite = 'satellite',
            Hybrid = 'hybrid',
            Standard = 'standard'
        }
    }

    class MapPoint {
        x: number;
        y: number;

        constructor(x: number, y: number);

        copy(): MapPoint;

        equals(point: MapPoint): boolean;

        toCoordinate(): Coordinate;
    }

    class MapRect {
        origin: MapPoint;
        size: MapSize;

        constructor(x: number, y: number, width: number, height: number);

        maxX(): number;

        maxY(): number;

        midX(): number;

        midY(): number;

        minX(): number;

        minY(): number;

        copy(): MapRect;

        equals(rect: MapRect): boolean;

        scale(scaleFactor: number, scaleCenter: MapPoint): MapRect;

        toCoordinateRegion(): CoordinateRegion;
    }

    class MapSize {
        width: number;
        height: number;

        constructor(width: number, height: number);

        copy(): MapSize;

        equals(size: MapSize): boolean;
    }

    interface Overlay extends OverlayOptions {
        style: Style;
        map: Map;

        addEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;

        removeEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;
    }

    interface OverlayOptions {
        data?: any;
        visible?: boolean;
        enabled?: boolean;
        selected?: boolean;
    }

    class PolygonOverlay {
        points: Coordinate[];
        data: any;
        enabled: boolean;
        map: Map;
        selected: boolean;
        style: Style;
        visible: boolean;

        constructor(points: ReadonlyArray<Coordinate>, options?: StylesOverlayOptions);

        addEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;

        removeEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;
    }

    class Padding {
        latitude: number;
        longitude: number;

        constructor(options?: PaddingConstructorOptions | number[]);

        copy(): Coordinate;

        equals(coordinate: Coordinate): boolean;

        toMapPoint(): MapPoint;

        toUnwrappedMapPoint(): MapPoint;
    }

    interface PaddingConstructorOptions {
        top: number;
        right: number;
        bottom: number;
        left: number;
    }

    class PolylineOverlay {
        points: Coordinate[];
        data: any;
        enabled: boolean;
        map: Map;
        selected: boolean;
        style: Style;
        visible: boolean;

        constructor(points: ReadonlyArray<Coordinate>, options?: StylesOverlayOptions);

        addEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;

        removeEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;
    }

    class Search {
        constructor(options?: SearchConstructorOptions);

        search(query: string | SearchAutocompleteResult, callback: SearchCallback | SearchDelegate, options?: SearchOptions): number;

        autocomplete(query: string, callback: AutoCompleteCallback | SearchDelegate, options?: SearchOptions): number;

        cancel(id: number): boolean;
    }

    type SearchCallback = () => void;
    type AutoCompleteCallback = () => void;

    interface SearchDelegate {
        autocompleteDidComplete?: (data: SearchAutocompleteResponse) => void;
        autocompleteDidError?: (error: Error) => void;
        searchDidComplete?: (response: SearchResponse) => void;
        searchDidError?: (error: Error) => void;
    }

    interface SearchAutocompleteResponse {
        query: string;
        results: SearchAutocompleteResult[];
    }

    interface SearchResponse {
        query: string;
        boundingRegion: CoordinateRegion;
        places: Place[];
    }

    interface SearchAutocompleteResult {
        displayLines: string[];
        coordinate: Coordinate;
    }

    interface SearchOptions {
        language?: string;
        coordinate?: Coordinate;
        region?: CoordinateRegion;
    }

    interface SearchConstructorOptions {
        language?: string;
        getsUserLocation?: boolean;
        coordinate?: Coordinate;
        region?: CoordinateRegion;
    }

    class Style {
        strokeColor: string;
        strokeOpacity: number;
        lineWidth: number;
        lineCap: string;
        lineJoin: string;
        lineDash: number[];
        lineDashOffset: number;
        fillColor: string;
        fillOpacity: number;
        fillRule: string;

        constructor(options?: StyleConstructorOptions);
    }

    interface StyleConstructorOptions {
        strokeColor?: string;
        strokeOpacity?: number;
        lineWidth?: number;
        lineCap?: string;
        lineJoin?: string;
        lineDash?: number[];
        lineDashOffset?: number;
        fillColor?: string;
        fillOpacity?: number;
        fillRule?: string;
    }

    interface StylesOverlayOptions extends OverlayOptions {
        style?: Style;
    }

    class TileOverlay {
        urlTemplate: string | TileCallbackFunction;
        data: object;
        maximumZ: number;
        minimumZ: number;
        opacity: number;

        constructor(urlTemplate: string | TileCallbackFunction, options?: TileOverlayConstructorOptions);

        reload(): void;

        addEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;

        removeEventListener(type: string, listener: (type: string) => void, thisObject?: any): void;
    }

    type TileCallbackFunction = (x: number, y: number, z: number, scale: number, data: any) => string;

    interface TileOverlayConstructorOptions {
        minimumZ?: number;
        maximumZ?: number;
        opacity?: number;
        data?: object;
    }
}
