// Type definitions for Google Geolocation 0.4.8
// Project: https://developers.google.com/maps/
// Definitions by: Folia A/S <http://www.folia.dk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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

declare module google.maps {

    /***** MVC *****/
    export class MVCObject {
        constructor ();
        addListener(eventName: string, handler: (...args: any[]) => void): MapsEventListener;
        bindTo(key: string, target: MVCObject, targetKey?: string, noNotify?: boolean): void;
        changed(key: string): void;
        get(key: string): any;
        notify(key: string): void;
        set(key: string, value: any): void;
        setValues(values: any): void;
        unbind(key: string): void;
        unbindAll(): void;
    }

    export class MVCArray extends MVCObject {
        constructor (array?: any[]);
        clear(): void;
        forEach(callback: (elem: any, index: number) => void ): void;
        getArray(): any[];
        getAt(i: number): any;
        getLength(): number;
        insertAt(i: number, elem: any): void;
        pop(): void;
        push(elem: any): number;
        removeAt(i: number): any;
        setAt(i: number, elem: any): void;
    }

    /***** Map *****/
    export class Map extends MVCObject {
        constructor (mapDiv: Element, opts?: MapOptions);
        fitBounds(bounds: LatLngBounds): void;
        getBounds(): LatLngBounds;
        getCenter(): LatLng;
        getDiv(): Element;
        getHeading(): number;
        getMapTypeId(): MapTypeId;
        getProjection(): Projection;
        getStreetView(): StreetViewPanorama;
        getTilt(): number;
        getZoom(): number;
        panBy(x: number, y: number): void;
        panTo(latLng: LatLng): void;
        panToBounds(latLngBounds: LatLngBounds): void;
        setCenter(latlng: LatLng): void;
        setHeading(heading: number): void;
        setMapTypeId(mapTypeId: MapTypeId): void;
        setOptions(options: MapOptions): void;
        setStreetView(panorama: StreetViewPanorama): void;
        setTilt(tilt: number): void;
        setZoom(zoom: number): void;
        controls: MVCArray[]; //Array.<MVCArray.<Node >>
        mapTypes: MapTypeRegistry;
        overlayMapTypes: MVCArray; // MVCArray.<MapType>
    }

    export interface MapOptions {
        backgroundColor?: string;
        center?: LatLng;
        disableDefaultUI?: boolean;
        disableDoubleClickZoom?: boolean;
        draggable?: boolean;
        draggableCursor?: string;
        draggingCursor?: string;
        heading?: number;
        keyboardShortcuts?: boolean;
        mapMaker?: boolean;
        mapTypeControl?: boolean;
        mapTypeControlOptions?: MapTypeControlOptions;
        navigationControl?: boolean;
        navigationControlOptions?: NavigationControlOptions;
        mapTypeId?: MapTypeId;
        maxZoom?: number;
        minZoom?: number;
        noClear?: boolean;
        overviewMapControl?: boolean;
        overviewMapControlOptions?: OverviewMapControlOptions;
        panControl?: boolean;
        panControlOptions?: PanControlOptions;
        rotateControl?: boolean;
        rotateControlOptions?: RotateControlOptions;
        scaleControl?: boolean;
        scaleControlOptions?: ScaleControlOptions;
        scrollwheel?: boolean;
        streetView?: StreetViewPanorama;
        streetViewControl?: boolean;
        streetViewControlOptions?: StreetViewControlOptions;
        styles?: MapTypeStyle[];
        tilt?: number;
        zoom?: number;
        zoomControl?: boolean;
        zoomControlOptions?: ZoomControlOptions;
    }

    export enum MapTypeId {
        HYBRID,
        ROADMAP,
        SATELLITE,
        TERRAIN
    }

    /***** Controls *****/
    export interface MapTypeControlOptions {
        mapTypeIds?: MapTypeId[];
        position?: ControlPosition;
        style?: MapTypeControlStyle;
    }

    export enum MapTypeControlStyle {
        DEFAULT,
        DROPDOWN_MENU,
        HORIZONTAL_BAR
    }

    export interface OverviewMapControlOptions {
        opened?: boolean;
    }

    export interface PanControlOptions {
        position: ControlPosition;
    }

    export interface RotateControlOptions {
        position: ControlPosition;
    }

    export interface ScaleControlOptions {
        position?: ControlPosition;
        style?: ScaleControlStyle;
    }

    export enum ScaleControlStyle {
        DEFAULT
    }

    export interface StreetViewControlOptions {
        position: ControlPosition;
    }

    export interface ZoomControlOptions {
        position?: ControlPosition;
        style?: ZoomControlStyle;
    }

    export enum ZoomControlStyle {
        DEFAULT,
        LARGE,
        SMALL
    }

    export enum ControlPosition {
        BOTTOM_CENTER,
        BOTTOM_LEFT,
        BOTTOM_RIGHT,
        LEFT_BOTTOM,
        LEFT_CENTER,
        LEFT_TOP,
        RIGHT_BOTTOM,
        RIGHT_CENTER,
        RIGHT_TOP,
        TOP_CENTER,
        TOP_LEFT,
        TOP_RIGHT
    }

    export interface NavigationControlOptions {
        position?: ControlPosition;
        style?: NavigationControlStyle;
    }

    export enum NavigationControlStyle {
        DEFAULT,
        SMALL,
        ANDROID,
        ZOOM_PAN
    }

    /***** Overlays *****/
    export class Marker extends MVCObject {
        static MAX_ZINDEX: number;
        constructor (opts?: MarkerOptions);
        getAnimation(): Animation;
        getClickable(): boolean;
        getCursor(): string;
        getDraggable(): boolean;
        getFlat(): boolean;
        getIcon(): MarkerImage;
        getMap(): any; // Map or StreetViewPanorama
        getPosition(): LatLng;
        getShadow(): MarkerImage;
        getShape(): MarkerShape;
        getTitle(): string;
        getVisible(): boolean;
        getZIndex(): number;
        setAnimation(animation: Animation): void;
        setClickable(flag: boolean): void;
        setCursor(cursor: string): void;
        setDraggable(flag: boolean): void;
        setFlat(flag: boolean): void;
        setIcon(icon: MarkerImage): void;
        setIcon(icon: string): void;
        setMap(map: Map): void;
        setMap(map: StreetViewPanorama): void;
        setOptions(options: MarkerOptions): void;
        setPosition(latlng: LatLng): void;
        setShadow(shadow: MarkerImage): void;
        setShadow(shadow: string): void;
        setShape(shape: MarkerShape): void;
        setTitle(title: string): void;
        setVisible(visible: boolean): void;
        setZIndex(zIndex: number): void;
    }

    export interface MarkerOptions {
        animation?: Animation;
        clickable?: boolean;
        cursor?: string;
        draggable?: boolean;
        flat?: boolean;
        icon?: any;
        map?: any;
        optimized?: boolean;
        position?: LatLng;
        raiseOnDrag?: boolean;
        shadow?: any;
        shape?: MarkerShape;
        title?: string;
        visible?: boolean;
        zIndex?: number;
    }

    export class MarkerImage {
        constructor (url: string, size?: Size, origin?: Point, anchor?: Point, scaledSize?: Size);
        anchor: Point;
        origin: Point;
        scaledSize: Size;
        size: Size;
        url: string;
    }

    export interface MarkerShape {
        coords?: number[];
        type?: string;
    }

    export interface Symbol {
        anchor?: Point;
        fillColor?: string;
        fillOpacity?: number;
        path?: any;
        rotation?: number;
        scale?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
    }

    export enum SymbolPath {
        BACKWARD_CLOSED_ARROW,
        BACKWARD_OPEN_ARROW,
        CIRCLE,
        FORWARD_CLOSED_ARROW,
        FORWARD_OPEN_ARROW
    }

    export enum Animation {
        BOUNCE,
        DROP
    }

    export class InfoWindow extends MVCObject {
        constructor (opts?: InfoWindowOptions);
        close(): void;
        getContent(): any; // string or Element
        getPosition(): LatLng;
        getZIndex(): number;
        open(map?: Map, anchor?: MVCObject): void;
        open(map?: StreetViewPanorama, anchor?: MVCObject): void;
        setContent(content: Node): void;
        setContent(content: string): void;
        setOptions(options: InfoWindowOptions): void;
        setPosition(position: LatLng): void;
        setZIndex(zIndex: number): void;
    }

    export interface InfoWindowOptions {
        content?: any;
        disableAutoPan?: boolean;
        maxWidth?: number;
        pixelOffset?: Size;
        position?: LatLng;
        zIndex?: number;
    }

    export class Polyline extends MVCObject {
        constructor (opts?: PolylineOptions);
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getPath(): MVCArray;
        getVisible(): boolean;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map): void;
        setOptions(options: PolylineOptions): void;
        setPath(path: MVCArray): void;
        setPath(path: LatLng[]): void;
        setVisible(visible: boolean): void;
    }

    export interface PolylineOptions {
        clickable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        geodesic?: boolean;
        icons?: IconSequence[];
        map?: Map;
        path?: any[];
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
        visible?: boolean;
        zIndex?: number;
    }

    export interface IconSequence {
        fixedRotation?: boolean;
        icon?: Symbol;
        offset?: string;
        repeat?: string;
    }

    export class Polygon extends MVCObject {
        constructor (opts?: PolygonOptions);
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getPath(): MVCArray;
        getPaths(): MVCArray;
        getVisible(): boolean;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map): void;
        setOptions(options: PolygonOptions): void;
        setPath(path: MVCArray): void;
        setPath(path: LatLng[]): void;
        setPaths(paths: MVCArray): void;
        setPaths(paths: MVCArray[]): void;
        setPaths(path: LatLng[]): void;
        setPaths(path: LatLng[][]): void;
        setVisible(visible: boolean): void;
    }

    export interface  PolygonOptions {
        clickable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        fillColor?: string;
        fillOpacity?: number;
        geodesic?: boolean;
        map?: Map;
        paths?: any[];
        strokeColor?: string;
        strokeOpacity?: number;
        strokePosition?: StrokePosition;
        strokeWeight?: number;
        visible?: boolean;
        zIndex?: number;
    }

    export interface PolyMouseEvent {
        edge?: number;
        path?: number;
        vertex?: number;
    }

    export class Rectangle extends MVCObject {
        constructor (opts?: RectangleOptions);
        getBounds(): LatLngBounds;
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getVisible(): boolean;
        setBounds(bounds: LatLngBounds): void;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map): void;
        setOptions(options: RectangleOptions): void;
        setVisible(visible: boolean): void;
    }

    export interface RectangleOptions {
        bounds?: LatLngBounds;
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

    export class Circle extends MVCObject {
        constructor (opts?: CircleOptions);
        getBounds(): LatLngBounds;
        getCenter(): LatLng;
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getRadius(): number;
        getVisible(): boolean;
        setCenter(center: LatLng): void;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map): void;
        setOptions(options: CircleOptions): void;
        setRadius(radius: number): void;
        setVisible(visible: boolean): void;
    }

    export interface CircleOptions {
        center?: LatLng;
        clickable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        fillColor?: string;
        fillOpacity?: number;
        map?: Map;
        radius?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokePosition?: StrokePosition;
        strokeWeight?: number;
        visible?: boolean;
        zIndex?: number;
    }
    
    export enum StrokePosition {
        CENTER,
        INSIDE,
        OUTSIDE
    }

    export class GroundOverlay extends MVCObject {
        constructor (url: string, bounds: LatLngBounds, opts?: GroundOverlayOptions);
        getBounds(): LatLngBounds;
        getMap(): Map;
        getOpacity(): number;
        getUrl(): string;
        setMap(map: Map): void;
        setOpacity(opacity: number): void;
    }

    export interface GroundOverlayOptions {
        clickable?: boolean;
        map?: Map;
        opacity?: number;
    }

    export class OverlayView extends MVCObject {
        draw(): void;
        getMap(): Map;
        getPanes(): MapPanes;
        getProjection(): MapCanvasProjection;
        onAdd(): void;
        onRemove(): void;
        setMap(map: Map): void;
        setMap(map: StreetViewPanorama): void;
    }

    export interface MapPanes {
        floatPane: Element;
        floatShadow: Element;
        mapPane: Element;
        overlayImage: Element;
        overlayLayer: Element;
        overlayMouseTarget: Element;
        overlayShadow: Element;
    }

    export class MapCanvasProjection extends MVCObject {
        fromContainerPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;
        fromDivPixelToLatLng(pixel: Point, nowrap?: boolean): LatLng;
        fromLatLngToContainerPixel(latLng: LatLng): Point;
        fromLatLngToDivPixel(latLng: LatLng): Point;
        getWorldWidth(): number;
    }

    /***** Services *****/
    export class Geocoder {
        constructor ();
        geocode(request: GeocoderRequest, callback: (results: GeocoderResult[], status: GeocoderStatus) => void ): void;
    }

    export interface GeocoderRequest {
        address?: string;
        bounds?: LatLngBounds;
        location?: LatLng;
        region?: string;
    }

    export enum GeocoderStatus {
        ERROR,
        INVALID_REQUEST,
        OK,
        OVER_QUERY_LIMIT,
        REQUEST_DENIED,
        UNKNOWN_ERROR,
        ZERO_RESULTS
    }

    export interface GeocoderResult {
        address_components: GeocoderAddressComponent[];
        formatted_address: string;
        geometry: GeocoderGeometry;
        types: string[];
    }

    export interface GeocoderAddressComponent {
        long_name: string;
        short_name: string;
        types: string[];
    }

    export interface GeocoderGeometry {
        bounds: LatLngBounds;
        location: LatLng;
        location_type: GeocoderLocationType;
        viewport: LatLngBounds;
    }

    export enum GeocoderLocationType {
        APPROXIMATE,
        GEOMETRIC_CENTER,
        RANGE_INTERPOLATED,
        ROOFTOP
    }

    export class DirectionsRenderer extends MVCObject {
        constructor (opts?: DirectionsRendererOptions);
        getDirections(): DirectionsResult;
        getMap(): Map;
        getPanel(): Element;
        getRouteIndex(): number;
        setDirections(directions: DirectionsResult): void;
        setMap(map: Map): void;
        setOptions(options: DirectionsRendererOptions): void;
        setPanel(panel: Element): void;
        setRouteIndex(routeIndex: number): void;
    }

    export interface DirectionsRendererOptions {
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

    export class DirectionsService {
        constructor ();
        route(request: DirectionsRequest, callback: (result: DirectionsResult, status: DirectionsStatus) => void ): void;
    }

    export interface DirectionsRequest {
        avoidHighways?: boolean;
        avoidTolls?: boolean;
        destination?: any;
        optimizeWaypoints?: boolean;
        origin?: any;
        provideRouteAlternatives?: boolean;
        region?: string;
        transitOptions?: TransitOptions;
        travelMode?: TravelMode;
        unitSystem?: UnitSystem;
        waypoints?: DirectionsWaypoint[];
    }

    export enum TravelMode {
        BICYCLING,
        DRIVING,
        TRANSIT,
        WALKING
    }

    export enum UnitSystem {
        IMPERIAL,
        METRIC
    }

    export interface TransitOptions {
        arrivalTime?: Date;
        departureTime?: Date;
    }

    export interface DirectionsWaypoint {
        location: any;
        stopover: boolean;
    }

    export enum DirectionsStatus {
        INVALID_REQUEST,
        MAX_WAYPOINTS_EXCEEDED,
        NOT_FOUND,
        OK,
        OVER_QUERY_LIMIT,
        REQUEST_DENIED,
        UNKNOWN_ERROR,
        ZERO_RESULTS
    }

    export interface DirectionsResult {
        routes: DirectionsRoute[];
    }

    export interface DirectionsRoute {
        bounds: LatLngBounds;
        copyrights: string;
        legs: DirectionsLeg[];
        overview_path: LatLng[];
        warnings: string[];
        waypoint_order: number[];
    }

    export interface DirectionsLeg {
        arrival_time: Distance;
        departure_time: Duration;
        distance: Distance;
        duration: Duration;
        end_address: string;
        end_location: LatLng;
        start_address: string;
        start_location: LatLng;
        steps: DirectionsStep[];
        via_waypoints: LatLng[];
    }

    export interface DirectionsStep {
        distance: Distance;
        duration: Duration;
        end_location: LatLng;
        instructions: string;
        path: LatLng[];
        start_location: LatLng;
        steps: DirectionsStep;
        transit: TransitDetails;
        travel_mode: TravelMode;
    }

    export interface Distance {
        text: string;
        value: number;
    }

    export interface Duration {
        text: string;
        value: number;
    }

    export interface Time {
        text: string;
        time_zone: string;
        value: Date;
    }

    export interface TransitDetails {
        arrival_stop: TransitStop;
        arrival_time: Time;
        departure_stop: TransitStop;
        departure_time: Time;
        headsign: string;
        headway: number;
        line: TransitLine;
        num_stops: number;
    }

    export interface TransitStop {
        location: LatLng;
        name: string;
    }

    export interface TransitLine {
        agencies: TransitAgency[];
        color: string;
        icon: string;
        name: string;
        short_name: string;
        text_color: string;
        url: string;
        vehicle: TransitVehicle;
    }

    export interface TransitAgency {
        name: string;
        phone: string;
        url: string;
    }

    export interface TransitVehicle {
        icon: string;
        local_icon: string;
        name: string;
        type: string;
    }

    export class ElevationService {
        constructor ();
        getElevationAlongPath(request: PathElevationRequest, callback: (results: ElevationResult[], status: ElevationStatus) => void ): void;
        getElevationForLocations(request: LocationElevationRequest, callback: (results: ElevationResult[], status: ElevationStatus) => void ): void;
    }

    export interface LocationElevationRequest {
        locations: LatLng[];
    }

    export interface PathElevationRequest {
        path?: LatLng[];
        samples?: number;
    }

    export interface ElevationResult {
        elevation: number;
        location: LatLng;
        resolution: number;
    }

    export enum ElevationStatus {
        INVALID_REQUEST,
        OK,
        OVER_QUERY_LIMIT,
        REQUEST_DENIED,
        UNKNOWN_ERROR
    }

    export class MaxZoomService {
        constructor ();
        getMaxZoomAtLatLng(latlng: LatLng, callback: (result: MaxZoomResult) => void ): void;
    }

    export interface MaxZoomResult {
        status: MaxZoomStatus;
        zoom: number;
    }

    export enum MaxZoomStatus {
        ERROR,
        OK
    }

    export class DistanceMatrixService {
        constructor ();
        getDistanceMatrix(request: DistanceMatrixRequest, callback: (response: DistanceMatrixResponse, status: DistanceMatrixStatus) => void ): void;
    }

    export interface DistanceMatrixRequest {
        avoidHighways?: boolean;
        avoidTolls?: boolean;
        destinations?: any[];
        origins?: any[];
        region?: string;
        travelMode?: TravelMode;
        unitSystem?: UnitSystem;
    }

    export interface DistanceMatrixResponse {
        destinationAddresses: string[];
        originAddresses: string[];
        rows: DistanceMatrixResponseRow[];
    }

    export interface DistanceMatrixResponseRow {
        elements: DistanceMatrixResponseElement[];
    }

    export interface DistanceMatrixResponseElement {
        distance: Distance;
        duration: Duration;
        status: DistanceMatrixElementStatus;
    }

    export enum DistanceMatrixStatus {
        INVALID_REQUEST,
        MAX_DIMENSIONS_EXCEEDED,
        MAX_ELEMENTS_EXCEEDED,
        OK,
        OVER_QUERY_LIMIT,
        REQUEST_DENIED,
        UNKNOWN_ERROR
    }

    export enum DistanceMatrixElementStatus {
        NOT_FOUND,
        OK,
        ZERO_RESULTS
    }

    /***** Map Types *****/
    export interface MapType {
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

    export class MapTypeRegistry extends MVCObject {
        constructor ();
        set(id: string, mapType: MapType): void;
    }

    export interface Projection {
        fromLatLngToPoint(latLng: LatLng, point?: Point): Point;
        fromPointToLatLng(pixel: Point, noWrap?: boolean): LatLng;
    }

    export class ImageMapType extends MVCObject implements MapType {
        constructor (opts: ImageMapTypeOptions);
        getOpacity(): number;
        setOpacity(opacity: number): void;
        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
        releaseTile(tile: Element): void;
    }

    export interface ImageMapTypeOptions {
        alt?: string;
        getTileUrl: (tileCoord: Point, zoom: number) => string;
        maxZoom?: number;
        minZoom?: number;
        name?: string;
        opacity?: number;
        tileSize?: Size;
    }

    export class StyledMapType {
        constructor (styles: MapTypeStyle[], options?: StyledMapTypeOptions);
    }

    export interface StyledMapTypeOptions {
        alt?: string;
        maxZoom?: number;
        minZoom?: number;
        name?: string;
    }

    export interface MapTypeStyle {
        elementType?: MapTypeStyleElementType;
        featureType?: MapTypeStyleFeatureType;
        stylers?: MapTypeStyler[];
    }

    export interface MapTypeStyleFeatureType {
        administrative?: {
            country?: string;
            land_parcel?: string;
            locality?: string;
            neighborhood?: string;
            province?: string;
        };
        all?: string;
        landscape?: {
            man_made?: string;
            natural?: string;
        };
        poi?: {
            attraction?: string;
            business?: string;
            government?: string;
            medical?: string;
            park?: string;
            place_of_worship?: string;
            school?: string;
            sports_complex?: string;
        };
        road?: {
            arterial?: string;
            highway?: {
                controlled_access?: string;
            };
            local?: string;
        };
        transit?: {
            line?: string;
            station?: {
                airport?: string;
                bus?: string;
                rail?: string;
            };
        };
        water?: string;
    }

    export enum MapTypeStyleElementType {
        all,
        geometry,
        labels
    }

    export interface MapTypeStyler {
        gamma?: number;
        hue?: string;
        invert_lightness?: boolean;
        lightness?: number;
        saturation?: number;
        visibility?: string;
    }

    /***** Layers *****/
    export class BicyclingLayer extends MVCObject {
        constructor ();
        getMap(): Map;
        setMap(map: Map): void;
    }

    export class FusionTablesLayer extends MVCObject {
        constructor (options: FusionTablesLayerOptions);
        getMap(): Map;
        setMap(map: Map): void;
        setOptions(options: FusionTablesLayerOptions): void;
    }

    export interface FusionTablesLayerOptions {
        clickable?: boolean;
        heatmap?: FusionTablesHeatmap;
        map?: Map;
        query?: FusionTablesQuery;
        styles?: FusionTablesStyle[];
        suppressInfoWindows?: boolean;
    }

    export interface FusionTablesQuery {
        from?: string;
        limit?: number;
        offset?: number;
        orderBy?: string;
        select?: string;
        where?: string;
    }

    export  interface FusionTablesStyle {
        markerOptions?: FusionTablesMarkerOptions;
        polygonOptions?: FusionTablesPolygonOptions;
        polylineOptions?: FusionTablesPolylineOptions;
        where?: string;
    }

    export interface FusionTablesHeatmap {
        enabled: boolean;
    }

    export interface FusionTablesMarkerOptions {
        iconName: string;
    }

    export interface FusionTablesPolygonOptions {
        fillColor?: string;
        fillOpacity?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
    }

    export interface FusionTablesPolylineOptions {
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
    }

    export interface FusionTablesMouseEvent {
        infoWindowHtml: string;
        latLng: LatLng;
        pixelOffset: Size;
        row: Object;
    }

    export interface FusionTablesCell {
        columnName: string;
        value: string;
    }

    export class KmlLayer extends MVCObject {
        constructor (url: string, opts?: KmlLayerOptions);
        getDefaultViewport(): LatLngBounds;
        getMap(): Map;
        getMetadata(): KmlLayerMetadata;
        getStatus(): KmlLayerStatus;
        getUrl(): string;
        setMap(map: Map): void;
    }

    export interface KmlLayerOptions {
        clickable?: boolean;
        map?: Map;
        preserveViewport?: boolean;
        suppressInfoWindows?: boolean;
    }

    export interface KmlLayerMetadata {
        author: KmlAuthor;
        description: string;
        name: string;
        snippet: string;
    }

    export enum KmlLayerStatus {
        DOCUMENT_NOT_FOUND,
        DOCUMENT_TOO_LARGE,
        FETCH_ERROR,
        INVALID_DOCUMENT,
        INVALID_REQUEST,
        LIMITS_EXCEEDED,
        OK,
        TIMED_OUT,
        UNKNOWN
    }

    export interface KmlMouseEvent {
        featureData: KmlFeatureData;
        latLng: LatLng;
        pixelOffset: Size;
    }

    export interface KmlFeatureData {
        author: KmlAuthor;
        description: string;
        id: string;
        infoWindowHtml: string;
        name: string;
        snippet: string;
    }

    export interface KmlAuthor {
        email: string;
        name: string;
        uri: string;
    }

    export class TrafficLayer extends MVCObject {
        constructor ();
        getMap(): void;
        setMap(map: Map): void;
    }

    export class TransitLayer extends MVCObject {
        constructor ();
        getMap(): void;
        setMap(map: Map): void;
    }

    /***** Street View *****/
    export class StreetViewPanorama {
        constructor (container: Element, opts?: StreetViewPanoramaOptions);
        controls: MVCArray[];
        getLinks(): StreetViewLink[];
        getPano(): string;
        getPosition(): LatLng;
        getPov(): StreetViewPov;
        getVisible(): boolean;
        registerPanoProvider(provider: (input: string) => StreetViewPanoramaData): void;
        setPano(pano: string): void;
        setPosition(latLng: LatLng): void;
        setPov(pov: StreetViewPov): void;
        setVisible(flag: boolean): void;

    }

    export interface StreetViewPanoramaOptions {
        addressControl?: boolean;
        addressControlOptions?: StreetViewAddressControlOptions;
        clickToGo?: boolean;
        disableDoubleClickZoom?: boolean;
        enableCloseButton?: boolean;
        imageDateControl?: boolean;
        linksControl?: boolean;
        panControl?: boolean;
        panControlOptions?: PanControlOptions;
        pano?: string;
        panoProvider?: (input: string) => StreetViewPanoramaData;
        position?: LatLng;
        pov?: StreetViewPov;
        scrollwheel?: boolean;
        visible?: boolean;
        zoomControl?: boolean;
        zoomControlOptions?: ZoomControlOptions;
    }

    export interface StreetViewAddressControlOptions {
        position: ControlPosition;
    }

    export interface StreetViewLink {
        description?: string;
        heading?: number;
        pano?: string;
    }

    export interface StreetViewPov {
        heading?: number;
        pitch?: number;
        zoom?: number;
    }

    export interface StreetViewPanoramaData {
        opyright?: string;
        imageDate?: string;
        links?: StreetViewLink[];
        location?: StreetViewLocation;
        tiles?: StreetViewTileData;
    }

    export interface StreetViewLocation {
        description?: string;
        latLng?: LatLng;
        pano?: string;
    }

    export interface StreetViewTileData {
        centerHeading?: number;
        tileSize?: Size;
        worldSize?: Size;
    }

    export class StreetViewService {
        getPanoramaById(pano: string, callback: (streetViewPanoramaData: StreetViewPanoramaData, streetViewStatus: StreetViewStatus) => void ): void;
        getPanoramaByLocation(latlng: LatLng, radius: number, callback: (streetViewPanoramaData: StreetViewPanoramaData, streetViewStatus: StreetViewStatus) => void ): void;
    }

    export enum StreetViewStatus {
        OK,
        UNKNOWN_ERROR,
        ZERO_RESULTS
    }

    /***** Event *****/
    export interface MapsEventListener { }

    export class event {
        static addDomListener(instance: any, eventName: string, handler: (event?: any, ...args: any[]) => void , capture?: boolean): MapsEventListener;
        static addDomListener(instance: any, eventName: string, handler: Function, capture?: boolean): MapsEventListener;
        static addDomListenerOnce(instance: any, eventName: string, handler: (event?: any, ...args: any[]) => void , capture?: boolean): MapsEventListener;
        static addDomListenerOnce(instance: any, eventName: string, handler: Function, capture?: boolean): MapsEventListener;
        static addListener(instance: any, eventName: string, handler: (event?: any, ...args: any[]) => void ): MapsEventListener;
        static addListener(instance: any, eventName: string, handler: Function): MapsEventListener;
        static addListenerOnce(instance: any, eventName: string, handler: (event?: any, ...args: any[]) => void ): MapsEventListener;
        static addListenerOnce(instance: any, eventName: string, handler: Function): MapsEventListener;
        static clearInstanceListeners(instance: any): void;
        static clearListeners(instance: any, eventName: string): void;
        static removeListener(listener: MapsEventListener): void;
        static trigger(instance: any, eventName: string, ...args: any[]): void;
    }

    export interface MouseEvent {
        stop(): void;
        latLng: LatLng;
    }

    /***** Base *****/
    export class LatLng {
        constructor (lat: number, lng: number, noWrap?: boolean);
        equals(other: LatLng): boolean;
        lat(): number;
        lng(): number;
        toString(): string;
        toUrlValue(precision?: number): string;

    }

    export class LatLngBounds {
        constructor (sw?: LatLng, ne?: LatLng);
        contains(latLng: LatLng): boolean;
        equals(other: LatLngBounds): boolean;
        extend(point: LatLng): LatLngBounds;
        getCenter(): LatLng;
        getNorthEast(): LatLng;
        getSouthWest(): LatLng;
        intersects(other: LatLngBounds): boolean;
        isEmpty(): boolean;
        toSpan(): LatLng;
        toString(): string;
        toUrlValue(precision?: number): string;
        union(other: LatLngBounds): LatLngBounds;
    }

    export class Point {
        constructor (x: number, y: number);
        x: number;
        y: number;
        equals(other: Point): boolean;
        toString(): string;
    }

    export class Size {
        constructor (width: number, height: number, widthUnit?: string, heightUnit?: string);
        height: number;
        width: number;
        equals(other: Size): boolean;
        toString(): string;
    }

    /***** Geometry Library *****/
    export module geometry {
        export class encoding {
            static decodePath(encodedPath: string): LatLng[];
            static encodePath(path: any[]): string;
        }

        export class spherical {
            static computeArea(path: any[], radius?: number): number;
            static computeDistanceBetween(from: LatLng, to: LatLng, radius?: number): number;
            static computeHeading(from: LatLng, to: LatLng): number;
            static computeLength(path: any[], radius?: number): number;
            static computeOffset(from: LatLng, distance: number, heading: number, radius?: number): LatLng;
            static computeSignedArea(loop: any[], radius?: number): number;
            static interpolate(from: LatLng, to: LatLng, fraction: number): LatLng;
        }

        export class poly {
            static containsLocation(point: LatLng, polygon: Polygon): boolean;
            static isLocationOnEdge(point: LatLng, poly: any, tolerance?: number): boolean;
        }
    }

    /***** AdSense Library *****/
    export module adsense {
        export class AdUnit extends MVCObject {
            constructor (container: Element, opts: AdUnitOptions);
            getChannelNumber(): string;
            getContainer(): Element;
            getFormat(): AdFormat;
            getMap(): Map;
            getPosition(): ControlPosition;
            getPublisherId(): string;
            setChannelNumber(channelNumber: string): void;
            setFormat(format: AdFormat): void;
            setMap(map: Map): void;
            setPosition(position: ControlPosition): void;
        }

        export interface AdUnitOptions {
            channelNumber?: string;
            format?: AdFormat;
            map?: Map;
            position?: ControlPosition;
            publisherId?: string;
        }

        export enum AdFormat {
            BANNER,
            BUTTON,
            HALF_BANNER,
            LARGE_RECTANGLE,
            LEADERBOARD,
            MEDIUM_RECTANGLE,
            SKYSCRAPER,
            SMALL_RECTANGLE,
            SMALL_SQUARE,
            SQUARE,
            VERTICAL_BANNER,
            WIDE_SKYSCRAPER
        }
    }

    /***** Panoramio Library *****/
    export module panoramio {
        export class PanoramioLayer extends MVCObject {
            constructor (opts?: PanoramioLayerOptions);
            getMap(): Map;
            getTag(): string;
            getUserId(): string;
            setMap(map: Map): void;
            setOptions(options: PanoramioLayerOptions): void;
            setTag(tag: string): void;
            setUserId(userId: string): void;
        }

        export interface PanoramioLayerOptions {
            map?: Map;
            suppressInfoWindows?: boolean;
            tag?: string;
            userId?: string;
        }

        export interface PanoramioFeature {
            author: string;
            photoId: string;
            title: string;
            url: string;
            userId: string;
        }

        export interface PanoramioMouseEvent {
            featureDetails: PanoramioFeature;
            infoWindowHtml: string;
            latLng: LatLng;
            pixelOffset: Size;
        }
    }

    export module places {

        export class Autocomplete extends MVCObject {
            constructor (inputField: HTMLInputElement, opts?: AutocompleteOptions);
            getBounds(): LatLngBounds;
            getPlace(): PlaceResult;
            setBounds(bounds: LatLngBounds): void;
            setComponentRestrictions(restrictions: ComponentRestrictions): void;
            setTypes(types: string[]): void;
        }

        export interface AutocompleteOptions {
            bounds?: LatLngBounds;
            componentRestrictions?: ComponentRestrictions;
            types?: string[];
        }

        export interface ComponentRestrictions {
            country: string;
        }

        export interface PlaceDetailsRequest {
            reference: string;
        }

        export interface PlaceGeometry {
            location: LatLng;
            viewport: LatLngBounds;
        }

        export interface PlaceResult {
            address_components: GeocoderAddressComponent[];
            formatted_address: string;
            formatted_phone_number: string;
            geometry: PlaceGeometry;
            html_attributions: string[];
            icon: string;
            id: string;
            international_phone_number: string;
            name: string;
            rating: number;
            reference: string;
            types: string[];
            url: string;
            vicinity: string;
            website: string;
        }

        export interface PlaceSearchRequest {
            bounds: LatLngBounds;
            keyword: string;
            location: LatLng;
            name: string;
            radius: number;
            rankBy: RankBy;
            types: string[];
        }

        export interface PlaceSearchPagination {
            nextPage(): void;
            hasNextPage: boolean;
        }

        export class PlacesService {
            constructor (attrContainer: HTMLDivElement);
            constructor (attrContainer: Map);
            getDetails(request: PlaceDetailsRequest, callback: (result: PlaceResult, status: PlacesServiceStatus) => void ): void;
            nearbySearch(request: PlaceSearchRequest, callback: (results: PlaceResult[], status: PlacesServiceStatus, pagination: PlaceSearchPagination) => void ): void;
            textSearch(request: TextSearchRequest, callback: (results: PlaceResult[], status: PlacesServiceStatus) => void ): void;
        }

        export enum PlacesServiceStatus {
            INVALID_REQUEST,
            OK,
            OVER_QUERY_LIMIT,
            REQUEST_DENIED,
            UNKNOWN_ERROR,
            ZERO_RESULTS
        }

        export enum RankBy {
            DISTANCE,
            PROMINENCE
        }
		
		export class SearchBox {
			constructor(inputField: HTMLInputElement, opts?: SearchBoxOptions);
			getBounds(): LatLngBounds;
			setBounds(bounds: LatLngBounds): void;
			getPlaces(): PlaceResult[];			
		}

		export interface SearchBoxOptions {
			bounds: LatLngBounds;
		}

        export interface TextSearchRequest {
            bounds: LatLngBounds;
            location: LatLng;
            query: string;
            radius: number;
        }
    }

    export module drawing {
        export class DrawingManager extends MVCObject {
            constructor (options?: DrawingManagerOptions);
            getDrawingMode(): OverlayType;
            getMap(): Map;
            setDrawingMode(drawingMode: OverlayType): void;
            setMap(map: Map): void;
            setOptions(options: DrawingManagerOptions): void;
        }

        export interface  DrawingManagerOptions {
            circleOptions?: CircleOptions;
            drawingControl?: boolean;
            drawingControlOptions?: DrawingControlOptions;
            drawingMode?: OverlayType;
            map?: Map;
            markerOptions?: MarkerOptions;
            polygonOptions?: PolygonOptions;
            polylineOptions?: PolylineOptions;
            rectangleOptions?: RectangleOptions;
        }

        export interface DrawingControlOptions {
            drawingModes?: OverlayType[];
            position?: ControlPosition;
        }

        export interface OverlayCompleteEvent {
            overlay: MVCObject;
            type: OverlayType;
        }

        export enum OverlayType {
            CIRCLE,
            MARKER,
            POLYGON,
            POLYLINE,
            RECTANGLE
        }
    }

    export module weather {
        export class CloudLayer extends MVCObject {
            constructor ();
            getMap(): Map;
            setMap(map: Map): void;
        }
        export class WeatherLayer extends MVCObject {
            constructor (opts?: WeatherLayerOptions);
            getMap(): Map;
            setMap(map: Map): void;
            setOptions(options: WeatherLayerOptions): void;
        }

        export interface WeatherLayerOptions {
            clickable: boolean;
            labelColor: LabelColor;
            map: Map;
            suppressInfoWindows: boolean;
            temperatureUnits: TemperatureUnit;
            windSpeedUnits: WindSpeedUnit;
        }

        export enum TemperatureUnit {
            CELSIUS,
            FAHRENHEIT
        }

        export enum WindSpeedUnit {
            KILOMETERS_PER_HOUR,
            METERS_PER_SECOND,
            MILES_PER_HOUR
        }

        export enum LabelColor {
            BLACK,
            WHITE
        }

        export interface WeatherMouseEvent {
            featureDetails: WeatherFeature;
            infoWindowHtml: string;
            latLng: LatLng;
            pixelOffset: Size;
        }

        export interface WeatherFeature {
            current: WeatherConditions;
            forecast: WeatherForecast[];
            location: string;
            temperatureUnit: TemperatureUnit;
            windSpeedUnit: WindSpeedUnit;
        }

        export interface WeatherConditions {
            day: string;
            description: string;
            high: number;
            humidity: number;
            low: number;
            shortDay: string;
            temperature: number;
            windDirection: string;
            windSpeed: number;
        }

        export interface WeatherForecast {
            day: string;
            description: string;
            high: number;
            low: number;
            shortDay: string;
        }
    }
    export module visualization {
        export class HeatmapLayer extends MVCObject {
            constructor (opts?: HeatmapLayerOptions);
            getData(): MVCArray;
            getMap(): Map;
            setData(data: MVCArray): void;
            setData(data: LatLng[]): void;
            setData(data: WeightedLocation[]): void;
            setMap(map: Map): void;
        }

        export interface HeatmapLayerOptions {
            data: any;
            dissipating?: boolean;
            gradient?: string[];
            map?: Map;
            maxIntensity?: number;
            opacity?: number;
            radius?: number;
        }

        export interface WeightedLocation {
            location: LatLng;
            weight: number;
        }

        export class MouseEvent {
            stop(): void;
        }

        export class MapsEventListener {

        }        
    }
}
