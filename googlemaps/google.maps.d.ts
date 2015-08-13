// Type definitions for Google Maps JavaScript API 3.20
// Project: https://developers.google.com/maps/
// Definitions by: Folia A/S <http://www.folia.dk>, Chris Wrench <https://github.com/cgwrench>
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
    /***** Map *****/
    export class Map extends MVCObject {
        constructor(mapDiv: Element, opts?: MapOptions);fitBounds(bounds: LatLngBounds): void;
        getBounds(): LatLngBounds;
        getCenter(): LatLng;
        getDiv(): Element;
        getHeading(): number;
        getMapTypeId(): MapTypeId|string;
        getProjection(): Projection;
        getStreetView(): StreetViewPanorama;
        getTilt(): number;
        getZoom(): number;
        panBy(x: number, y: number): void;
        panTo(latLng: LatLng|LatLngLiteral): void;
        panToBounds(latLngBounds: LatLngBounds): void;
        setCenter(latlng: LatLng|LatLngLiteral): void;
        setHeading(heading: number): void;
        setMapTypeId(mapTypeId: MapTypeId|string): void;
        setOptions(options: MapOptions): void;
        setStreetView(panorama: StreetViewPanorama): void;
        setTilt(tilt: number): void;
        setZoom(zoom: number): void;
        controls: MVCArray[]; //Array<MVCArray<Node>>
        data: Data;
        mapTypes: MapTypeRegistry;
        overlayMapTypes: MVCArray; // MVCArray<MapType>
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
        mapTypeIds?: (MapTypeId|string)[];
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
        position?: ControlPosition;
    }

    export interface RotateControlOptions {
        position?: ControlPosition;
    }

    export interface ScaleControlOptions {
        style?: ScaleControlStyle;
    }

    export enum ScaleControlStyle {
        DEFAULT
    }

    export interface StreetViewControlOptions {
        position?: ControlPosition;
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

    /***** Data *****/
    export class Data extends MVCObject {
        constructor(options?: Data.DataOptions);
        add(feature: Data.Feature|Data.FeatureOptions): Data.Feature;
        addGeoJson(geoJson: Object, options?: Data.GeoJsonOptions): Data.Feature[];
        contains(feature: Data.Feature): boolean;
        forEach(callback: (feature: Data.Feature) => void): void;
        getControlPosition(): ControlPosition;
        getControls(): string[]; 
        getDrawingMode(): string;        
        getFeatureById(id: number|string): Data.Feature;
        getMap(): Map;
        getStyle(): Data.StylingFunction|Data.StyleOptions;
        loadGeoJson(url: string, options?: Data.GeoJsonOptions, callback?: (features: Data.Feature[]) => void): void;
        overrideStyle(feature: Data.Feature, style: Data.StyleOptions): void;
        remove(feature: Data.Feature): void;
        revertStyle(feature?: Data.Feature): void;
        setControlPosition(controlPosition: ControlPosition): void;
        setControls(controls: string[]): void;
        setDrawingMode(drawingMode: string): void;
        setMap(map: Map): void;
        setStyle(style: Data.StylingFunction|Data.StyleOptions): void;
        toGeoJson(callback: (feature: Object) => void): void;
    }

    export module Data {
        export interface DataOptions {
            controlPosition?: ControlPosition;
            controls?: string[];
            drawingMode?: string;
            featureFactory?: (geometry: Data.Geometry) => Data.Feature;
            map?: Map;
            style?: Data.StylingFunction|Data.StyleOptions;
        }

        export interface GeoJsonOptions {
            idPropertyName?: string;
        }

        export interface StyleOptions {
            clickable?: boolean;
            cursor?: string;
            draggable?: boolean;
            editable?: boolean;
            fillColor?: string;
            fillOpacity?: number;
            icon?: string|Icon|Symbol;
            shape?: MarkerShape;
            strokeColor?: string;
            strokeOpacity?: number;
            strokeWeight?: number;
            title?: string;
            visible?: boolean;
            zIndex?: number;
        }

        export type StylingFunction = (feature: Data.Feature) => Data.StyleOptions;

        export class Feature {
            constructor(options?: Data.FeatureOptions);
            forEachProperty(callback: (value: any, name: string) => void): void;
            getGeometry(): Data.Geometry;
            getId(): number|string;
            getProperty(name: string): any;
            removeProperty(name: string): void;
            setGeometry(newGeometry: Data.Geometry|LatLng|LatLngLiteral): void;
            setProperty(name: string, newValue: any): void;
            toGeoJson(callback: (feature: Object) => void): void;
        }

        export interface FeatureOptions {
            geometry?: Data.Geometry|LatLng|LatLngLiteral;
            id?: number|string;
            properties?: Object;
        }

        export class Geometry {
            getType(): string;
        }
        
        export class Point extends Data.Geometry {
            constructor(latLng: LatLng|LatLngLiteral);
            get(): LatLng;
        }
        
        export class MultiPoint extends Data.Geometry {
            constructor(elements: (LatLng|LatLngLiteral)[]);
            getArray(): LatLng[];
            getAt(n: number): LatLng;
            getLength(): number;
        }
        
        export class LineString extends Data.Geometry {
            constructor(elements: (LatLng|LatLngLiteral)[]);
            getArray(): LatLng[];
            getAt(n: number): LatLng;
            getLength(): number;
        }
        
        export class MultiLineString extends Data.Geometry {
            constructor(elements: (Data.LineString|(LatLng|LatLngLiteral)[])[]); 
            getArray(): Data.LineString[];
            getAt(n: number): Data.LineString;
            getLength(): number;
        }
        
        export class LinearRing extends Data.Geometry {
            constructor(elements: (LatLng|LatLngLiteral)[]); 
            getArray(): LatLng[];
            getAt(n: number): LatLng;
            getLength(): number;
        }
        
        export class Polygon extends Data.Geometry {
            constructor(elements: (Data.LinearRing|(LatLng|LatLngLiteral)[])[]); 
            getArray(): Data.LinearRing[];
            getAt(n: number): Data.LinearRing;
            getLength(): number;
        }
        
        export class MultiPolygon extends Data.Geometry {
            constructor(elements: (Data.Polygon|(LinearRing|(LatLng|LatLngLiteral)[])[])[]);
            getArray(): Data.Polygon[];
            getAt(n: number): Data.Polygon;
            getLength(): number;
        }
        
        export class GeometryCollection extends Data.Geometry {
            constructor(elements: (Data.Geometry[]|LatLng[]|LatLngLiteral)[]);
            getArray(): Data.Geometry[];
            getAt(n: number): Data.Geometry;
            getLength(): number;
        }
        
        export interface MouseEvent extends google.maps.MouseEvent {
            feature: Data.Feature;
        }
        
        export interface AddFeatureEvent {
            feature: Data.Feature;
        }
        
        export interface RemoveFeatureEvent {
            feature: Data.Feature;
        }
        
        export interface SetGeometryEvent  {
            feature: Data.Feature;
            newGeometry: Data.Geometry;
            oldGeometry: Data.Geometry;
        }
        
        export interface SetPropertyEvent  {
            feature: Data.Feature;
            name: string;
            newValue: any;
            oldValue: any;
        } 
        
        export interface RemovePropertyEvent  {
            feature: Data.Feature;
            name: string;
            oldValue: any;
        }           
    }

    /***** Overlays *****/
    export class Marker extends MVCObject {
        static MAX_ZINDEX: number;
        constructor(opts?: MarkerOptions);
        getAnimation(): Animation;
        getAttribution(): Attribution;
        getClickable(): boolean;
        getCursor(): string;
        getDraggable(): boolean;
        getIcon(): string|Icon|Symbol;
        getMap(): Map|StreetViewPanorama;
        getOpacity(): number;
        getPlace(): Place;
        getPosition(): LatLng;
        getShape(): MarkerShape;
        getTitle(): string;
        getVisible(): boolean;
        getZIndex(): number;
        setAnimation(animation: Animation): void;
        setAttribution(attribution: Attribution): void;
        setClickable(flag: boolean): void;
        setCursor(cursor: string): void;
        setDraggable(flag: boolean): void;
        setIcon(icon: string|Icon|Symbol): void;
        setMap(map: Map|StreetViewPanorama): void;
        getOpacity(opacity: number): void;
        setOptions(options: MarkerOptions): void;
        setPlace(place: Place): void;
        setPosition(latlng: LatLng|LatLngLiteral): void;
        setShape(shape: MarkerShape): void;
        setTitle(title: string): void;
        setVisible(visible: boolean): void;
        setZIndex(zIndex: number): void;
    }

    export interface MarkerOptions {
        /**
         * The offset from the marker's position to the tip of an InfoWindow 
         * that has been opened with the marker as anchor.
         */
        anchorPoint?: Point;
        /** Which animation to play when marker is added to a map. */
        animation?: Animation;
        /** 
         * If true, the marker receives mouse and touch events.
         * @default true
         */
        clickable?: boolean;
        /** Mouse cursor to show on hover. */
        cursor?: string;
        /** 
         * If true, the marker can be dragged.
         * @default false
         */
        draggable?: boolean;
       /**
         * Icon for the foreground. 
         * If a string is provided, it is treated as though it were an Icon with the string as url.
         * @type {(string|Icon|Symbol)}
         */
        icon?: string|Icon|Symbol;
        /**
         * Map on which to display Marker.
         * @type {(Map|StreetViewPanorama)}
         * 
         */
        map?: Map|StreetViewPanorama;
        /** The marker's opacity between 0.0 and 1.0. */
        opacity?: number;
        /**
         * Optimization renders many markers as a single static element.
         * Optimized rendering is enabled by default.
         * Disable optimized rendering for animated GIFs or PNGs, or when each
         * marker must be rendered as a separate DOM element (advanced usage
         * only).
         */
        optimized?: boolean;
        /**
         * Place information, used to identify and describe the place 
         * associated with this Marker. In this context, 'place' means a
         * business, point of interest or geographic location. To allow a user
         * to save this place, open an info window anchored on this marker.
         * The info window will contain information about the place and an
         * option for the user to save it. Only one of position or place can
         * be specified.
         */
        place?: Place;
        /**
         * Marker position. Required.
         */
        position: LatLng;
        /** Image map region definition used for drag/click. */
        shape?: MarkerShape;
        /** Rollover text. */
        title?: string;
        /** If true, the marker is visible. */
        visible?: boolean;
        /**
         * All markers are displayed on the map in order of their zIndex, 
         * with higher values displaying in front of markers with lower values.
         * By default, markers are displayed according to their vertical position on screen, 
         * with lower markers appearing in front of markers further up the screen.
         */
        zIndex?: number;
    }

    export interface Icon {
        /**
         * The position at which to anchor an image in correspondence to the
         * location of the marker on the map. By default, the anchor is
         * located along the center point of the bottom of the image.
         */
        anchor?: Point;
        /**
         * The origin of the label relative to the top-left corner of the icon
         * image, if a label is supplied by the marker. By default, the origin
         * is located in the center point of the image.
         */
        labelOrigin?: Point;
        /**
         * The position of the image within a sprite, if any. By default, the
         * origin is located at the top left corner of the image (0, 0).
         */
        origin?: Point;
        /**
         * The size of the entire image after scaling, if any. Use this
         * property to stretch/ shrink an image or a sprite.
         */
        scaledSize?: Size;
        /**
         * The display size of the sprite or image. When using sprites, you
         * must specify the sprite size. If the size is not provided, it will
         * be set when the image loads.
         */
        size?: Size;
        /** The URL of the image or sprite sheet. */
        url?: string;
    }

    export interface MarkerShape {
        coords?: number[];
        type?: string;
    }

    export interface Symbol {
        /**
         * The position of the symbol relative to the marker or polyline. 
         * The coordinates of the symbol's path are translated left and up by the anchor's x and y coordinates respectively. 
         * By default, a symbol is anchored at (0, 0). 
         * The position is expressed in the same coordinate system as the symbol's path.
         */
        anchor?: Point;
        /**
         * The symbol's fill color. 
         * All CSS3 colors are supported except for extended named colors. For symbol markers, this defaults to 'black'. 
         * For symbols on polylines, this defaults to the stroke color of the corresponding polyline.
         */
        fillColor?: string;
        /**
         * The symbol's fill opacity.
         * @default 0
         */
        fillOpacity?: number;
        /**
         * The symbol's path, which is a built-in symbol path, or a custom path expressed using SVG path notation. Required.
         * @type {(SymbolPath|string)}
         */
        path?: SymbolPath|string;
        /**
         * The angle by which to rotate the symbol, expressed clockwise in degrees. 
         * Defaults to 0. 
         * A symbol in an IconSequence where fixedRotation is false is rotated relative to the angle of the edge on which it lies.
         */
        rotation?: number;
        /**
         * The amount by which the symbol is scaled in size. 
         * For symbol markers, this defaults to 1; after scaling, the symbol may be of any size. 
         * For symbols on a polyline, this defaults to the stroke weight of the polyline; 
         * after scaling, the symbol must lie inside a square 22 pixels in size centered at the symbol's anchor.
         */
        scale?: number;
        /**
         * The symbol's stroke color. All CSS3 colors are supported except for extended named colors. 
         * For symbol markers, this defaults to 'black'.
         * For symbols on a polyline, this defaults to the stroke color of the polyline.
         */
        strokeColor?: string;
        /**
         * The symbol's stroke opacity. For symbol markers, this defaults to 1. 
         * For symbols on a polyline, this defaults to the stroke opacity of the polyline.
         */
        strokeOpacity?: number;
        /** The symbol's stroke weight. Defaults to the scale of the symbol.v*/
        strokeWeight?: number;
    }

    /** Built-in symbol paths. */
    export enum SymbolPath {
        /** A backward-pointing closed arrow. */
        BACKWARD_CLOSED_ARROW,
        /** A backward-pointing open arrow. */
        BACKWARD_OPEN_ARROW,
        /** A circle. */
        CIRCLE,
        /** A forward-pointing closed arrow. */
        FORWARD_CLOSED_ARROW,
        /** A forward-pointing open arrow. */
        FORWARD_OPEN_ARROW
    }

    export enum Animation {
        BOUNCE,
        DROP
    }

    /**
     * An overlay that looks like a bubble and is often connected to a marker.
     * This class extends MVCObject. 
     */
    export class InfoWindow extends MVCObject {
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
        getContent(): string|Element;
        getPosition(): LatLng;
        getZIndex(): number;
        /**
         * Opens this InfoWindow on the given map. Optionally, an InfoWindow can be associated with an anchor.
         * In the core API, the only anchor is the Marker class.
         * However, an anchor can be any MVCObject that exposes a LatLng position property and optionally 
         * a Point anchorPoint property for calculating the pixelOffset (see InfoWindowOptions).
         * The anchorPoint is the offset from the anchor's position to the tip of the InfoWindow.
         */
        open(map?: Map|StreetViewPanorama, anchor?: MVCObject): void;
        setContent(content: string|Node): void;
        setOptions(options: InfoWindowOptions): void;
        setPosition(position: LatLng): void;
        setZIndex(zIndex: number): void;
    }

    export interface InfoWindowOptions {
        /**
         * Content to display in the InfoWindow. This can be an HTML element, a plain-text string, or a string containing HTML.
         * The InfoWindow will be sized according to the content.
         * To set an explicit size for the content, set content to be a HTML element with that size.
         * @type {(string|Node)}
         */
        content?: string|Node;
        /**
         * Disable auto-pan on open. By default, the info window will pan the map so that it is fully visible when it opens.
         */
        disableAutoPan?: boolean;
        /**
         * Maximum width of the infowindow, regardless of content's width.
         * This value is only considered if it is set before a call to open.
         * To change the maximum width when changing content, call close, setOptions, and then open.
         */
        maxWidth?: number;
        /**
         * The offset, in pixels, of the tip of the info window from the point on the map 
         * at whose geographical coordinates the info window is anchored. 
         * If an InfoWindow is opened with an anchor, the pixelOffset will be calculated from the anchor's anchorPoint property.
         */
        pixelOffset?: Size;
        /**
         * The LatLng at which to display this InfoWindow. If the InfoWindow is opened with an anchor, the anchor's position will be used instead.
         */
        position?: LatLng|LatLngLiteral;
        /**
         * All InfoWindows are displayed on the map in order of their zIndex, 
         * with higher values displaying in front of InfoWindows with lower values. 
         * By default, InfoWindows are displayed according to their latitude, 
         * with InfoWindows of lower latitudes appearing in front of InfoWindows at higher latitudes.
         * InfoWindows are always displayed in front of markers.
         */
        zIndex?: number;
    }

    export class Polyline extends MVCObject {
        constructor(opts?: PolylineOptions);
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getPath(): MVCArray; // MVCArray<LatLng>
        getVisible(): boolean;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map): void;
        setOptions(options: PolylineOptions): void;
        setPath(path: MVCArray|LatLng[]|LatLngLiteral[]): void; // MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
        setVisible(visible: boolean): void;
    }

    export interface PolylineOptions {
        clickable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        geodesic?: boolean;
        icons?: IconSequence[];
        map?: Map;
        path?: MVCArray|LatLng[]|LatLngLiteral[]; // MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
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
        constructor(opts?: PolygonOptions);
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getPath(): MVCArray; // MVCArray<LatLng>
        getPaths(): MVCArray; // MVCArray<MVCArray<LatLng>>
        getVisible(): boolean;
        setDraggable(draggable: boolean): void;
        setEditable(editable: boolean): void;
        setMap(map: Map): void;
        setOptions(options: PolygonOptions): void;
        setPath(path: MVCArray|LatLng[]|LatLngLiteral[]): void;
        setPaths(paths: MVCArray): void;
        setPaths(paths: MVCArray[]): void;
        setPaths(path: LatLng[]): void;
        setPaths(path: LatLng[][]): void;
        setPaths(path: LatLngLiteral[]): void;
        setPaths(path: LatLngLiteral[][]): void;
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
        paths?: any[]; // MVCArray<MVCArray<LatLng>>|MVCArray<LatLng>|Array<Array<LatLng|LatLngLiteral>>|Array<LatLng|LatLngLiteral>
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
        constructor(opts?: RectangleOptions);
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
        constructor(opts?: CircleOptions);
        getBounds(): LatLngBounds;
        getCenter(): LatLng;
        getDraggable(): boolean;
        getEditable(): boolean;
        getMap(): Map;
        getRadius(): number;
        getVisible(): boolean;
        setCenter(center: LatLng|LatLngLiteral): void;
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
        constructor(url: string, bounds: LatLngBounds, opts?: GroundOverlayOptions);
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
        getMap(): Map|StreetViewPanorama;
        getPanes(): MapPanes;
        getProjection(): MapCanvasProjection;
        onAdd(): void;
        onRemove(): void;
        setMap(map: Map|StreetViewPanorama): void;
    }

    export interface MapPanes {
        floatPane: Element;
        mapPane: Element;
        markerLayer: Element;
        overlayLayer: Element;
        overlayMouseTarget: Element;
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
        geocode(request: GeocoderRequest, callback: (results: GeocoderResult[], status: GeocoderStatus) => void ): void;
    }

    export interface GeocoderRequest {
        address?: string;
        bounds?: LatLngBounds;
        componentRestrictions?: GeocoderComponentRestrictions;
        location?: LatLng|LatLngLiteral;
        region?: string;
    }

    export interface GeocoderComponentRestrictions {
        administrativeArea?: string;
        country?: string;
        locality?: string;
        postalCode?: string;
        route?: string;
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
        partial_match: boolean;
        postcode_localities: string[]        
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
        constructor(opts?: DirectionsRendererOptions);
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
        route(request: DirectionsRequest, callback: (result: DirectionsResult, status: DirectionsStatus) => void ): void;
    }

    export interface DirectionsRequest {
        avoidFerries?: boolean;
        avoidHighways?: boolean;
        avoidTolls?: boolean;
        destination?: LatLng|string;
        durationInTraffic?: boolean;
        optimizeWaypoints?: boolean;
        origin?: LatLng|string;
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
        modes: TransitMode[];
        routingPreference: TransitRoutePreference;
    }

    export enum TransitMode {
        BUS,
        RAIL,
        SUBWAY,
        TRAIN,
        TRAM
    } 
    
    export enum TransitRoutePreference
    {
        FEWER_TRANSFERS,
        LESS_WALKING
    }
    
    export interface TransitFare { }

    export interface DirectionsWaypoint {
        location: LatLng|string;
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
        fare: TransitFare;
        legs: DirectionsLeg[];
        overview_path: LatLng[];
        overview_polyline: string;
        warnings: string[];
        waypoint_order: number[];        
    }

    export interface DirectionsLeg {
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
        type: VehicleType;
    }
    
    export enum VehicleType
    {
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
        TROLLEYBUS
    }

    export class ElevationService {
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
        getMaxZoomAtLatLng(latlng: LatLng|LatLngLiteral, callback: (result: MaxZoomResult) => void ): void;
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
        getDistanceMatrix(request: DistanceMatrixRequest, callback: (response: DistanceMatrixResponse, status: DistanceMatrixStatus) => void ): void;
    }

    export interface DistanceMatrixRequest {
        avoidFerries?: boolean;
        avoidHighways?: boolean;
        avoidTolls?: boolean;
        destinations?: LatLng[]|string[];
        durationInTraffic?: boolean;
        origins?: LatLng[]|string[];
        region?: string;
        transitOptions?: TransitOptions;
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
        fare: TransitFare;
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
    
    /***** Save to Google Maps *****/
    export interface Attribution {
        iosDeepLinkId?: string;
        source?: string;
        webUrl?: string;
    }

    export interface Place {
        location?: LatLng|LatLngLiteral;
        placeId?: string;
        query?: string;
    }
    
    export class SaveWidget {
        constructor(container: Node, opts?: SaveWidgetOptions);
        getAttribution(): Attribution;
        getPlace(): Place;
        setAttribution(attribution: Attribution): void;
        setOptions(opts: SaveWidgetOptions): void;
        setPlace(place: Place): void;        
    }
    
    export interface SaveWidgetOptions{
        attribution?: Attribution;
        place?: Place;
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
        constructor();
        set(id: string, mapType: MapType): void;
    }

    export interface Projection {
        fromLatLngToPoint(latLng: LatLng, point?: Point): Point;
        fromPointToLatLng(pixel: Point, noWrap?: boolean): LatLng;
    }

    export class ImageMapType extends MVCObject implements MapType {
        constructor(opts: ImageMapTypeOptions);
        getOpacity(): number;
        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
        releaseTile(tile: Element): void;
        setOpacity(opacity: number): void;
    }

    export interface ImageMapTypeOptions {
        alt?: string;
        getTileUrl(tileCoord: Point, zoom: number): string;
        maxZoom?: number;
        minZoom?: number;
        name?: string;
        opacity?: number;
        tileSize?: Size;
    }

    export class StyledMapType extends MVCObject implements MapType {
        constructor(styles: MapTypeStyle[], options?: StyledMapTypeOptions);
        getTile(tileCoord: Point, zoom: number, ownerDocument: Document): Element;
        releaseTile(tile: Element): void;
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
            natural?: {
              landcover?: string;
              terrain?: string;  
            };
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

    export interface MapTypeStyleElementType {
        all?: string;
        geometry?: {
            fill?: string;
            stroke?: string;
        };
        labels?: {
            icon?: string;
            text?: {
                fill?: string;
                stroke?: string;
            }
        };
    }

    export interface MapTypeStyler {
        color?: string;
        gamma?: number;
        hue?: string;
        invert_lightness?: boolean;
        lightness?: number;
        saturation?: number;
        visibility?: string;
    }

    /***** Layers *****/
    export class BicyclingLayer extends MVCObject {
        constructor();
        getMap(): Map;
        setMap(map: Map): void;
    }

    export class FusionTablesLayer extends MVCObject {
        constructor(options: FusionTablesLayerOptions);
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
        infoWindowHtml?: string;
        latLng?: LatLng;
        pixelOffset?: Size;
        row?: Object; // Object<FusionTablesCell>
    }

    export interface FusionTablesCell {
        columnName?: string;
        value?: string;
    }

    export class KmlLayer extends MVCObject {
        constructor(opts?: KmlLayerOptions);
        getDefaultViewport(): LatLngBounds;
        getMap(): Map;
        getMetadata(): KmlLayerMetadata;
        getStatus(): KmlLayerStatus;
        getUrl(): string;
        getZIndex(): number;
        setMap(map: Map): void;
        setUrl(url: string): void;
        setZIndez(zIndex: number): void;
    }

    export interface KmlLayerOptions {
        clickable?: boolean;
        map?: Map;
        preserveViewport?: boolean;
        screenOverlays?: boolean;
        suppressInfoWindows?: boolean;
        url?: string;
        zIndex?: number;
    }

    export interface KmlLayerMetadata {
        author: KmlAuthor;
        description: string;
        hasScreenOverlays: boolean;
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
        constructor();
        getMap(): void;
        setMap(map: Map): void;
    }

    export class TransitLayer extends MVCObject {
        constructor();
        getMap(): void;
        setMap(map: Map): void;
    }

    /***** Street View *****/
    export class StreetViewPanorama {
        constructor(container: Element, opts?: StreetViewPanoramaOptions);
        controls: MVCArray[]; // Array<MVCArray<Node>>
        getLinks(): StreetViewLink[];
        getLocation():  StreetViewLocation;
        getPano(): string;
        getPhotographerPov(): StreetViewPov;
        getPosition(): LatLng;
        getPov(): StreetViewPov;
        getStatus(): StreetViewStatus;
        getVisible(): boolean;
        getZoom(): number;
        registerPanoProvider(provider: (input: string) => StreetViewPanoramaData): void;
        setLinks(links: Array<StreetViewLink>): void;
        setOptions(options: StreetViewPanoramaOptions): void;
        setPano(pano: string): void;
        setPosition(latLng: LatLng|LatLngLiteral): void;
        setPov(pov: StreetViewPov): void;
        setVisible(flag: boolean): void;
        setZoom(zoom: number): void;
    }

    export interface StreetViewPanoramaOptions {
        addressControl?: boolean;
        addressControlOptions?: StreetViewAddressControlOptions;
        clickToGo?: boolean;
        disableDefaultUi?: boolean;
        disableDoubleClickZoom?: boolean;
        enableCloseButton?: boolean;
        imageDateControl?: boolean;
        linksControl?: boolean;
        panControl?: boolean;
        panControlOptions?: PanControlOptions;
        pano?: string;
        panoProvider?: (input: string) => StreetViewPanoramaData;
        position?: LatLng|LatLngLiteral;
        pov?: StreetViewPov;
        scrollwheel?: boolean;
        visible?: boolean;
        zoomControl?: boolean;
        zoomControlOptions?: ZoomControlOptions;
    }

    export interface StreetViewAddressControlOptions {
        position?: ControlPosition;
    }

    export interface StreetViewLink {
        description?: string;
        heading?: number;
        pano?: string;
    }

    export interface StreetViewPov {
        heading?: number;
        pitch?: number;
    }

    export interface StreetViewPanoramaData {
        copyright?: string;
        imageDate?: string;
        links?: StreetViewLink[];
        location?: StreetViewLocation;
        tiles?: StreetViewTileData;
    }

    export interface StreetViewLocation {
        description?: string;
        latLng?: LatLng;
        pano?: string;
        shortDescription?: string;
    }

    export interface StreetViewTileData {
        getTileUrl(pano: string, tileZoom: number, tileX: number, tileY: number): string;
        centerHeading?: number;
        tileSize?: Size;
        worldSize?: Size;
    }

    export class StreetViewService {
        getPanoramaById(pano: string, callback: (streetViewPanoramaData: StreetViewPanoramaData, streetViewStatus: StreetViewStatus) => void): void;
        getPanoramaByLocation(latlng: LatLng|LatLngLiteral, radius: number, callback: (streetViewPanoramaData: StreetViewPanoramaData, streetViewStatus: StreetViewStatus) => void ): void;
    }

    export enum StreetViewStatus {
        OK,
        UNKNOWN_ERROR,
        ZERO_RESULTS
    }
    
    export class StreetViewCoverageLayer extends MVCObject  {
        getMap(): Map;
        setMap(map: Map): void;
    }

    /***** Events *****/
    export interface MapsEventListener { }

    export class event {
        static addDomListener(instance: Object, eventName: string, handler: Function, capture?: boolean): MapsEventListener;
        static addDomListenerOnce(instance: Object, eventName: string, handler: Function, capture?: boolean): MapsEventListener;
        static addListener(instance: Object, eventName: string, handler: Function): MapsEventListener;
        static addListenerOnce(instance: Object, eventName: string, handler: Function): MapsEventListener;
        static clearInstanceListeners(instance: Object): void;
        static clearListeners(instance: Object, eventName: string): void;
        static removeListener(listener: MapsEventListener): void;
        static trigger(instance: any, eventName: string, ...args: any[]): void;
    }

    export interface MouseEvent {
        stop(): void;
        latLng: LatLng;
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
    export class LatLng {
        /**
         * Creates a LatLng object representing a geographic point.
         * Note the ordering of latitude and longitude.
         * @param lat Latitude is specified in degrees within the range [-90, 90].
         * @param lng Longitude is specified in degrees within the range [-180, 180].
         * @param noWrap Set noWrap to true to enable values outside of this range.
         */
        constructor(lat: number, lng: number, noWrap?: boolean);
        /** Comparison function. */
        equals(other: LatLng): boolean;
        /** Returns the latitude in degrees. */
        lat(): number;
        /** Returns the longitude in degrees. */
        lng(): number;
        /** Converts to string representation. */
        toString(): string;
        /** Returns a string of the form "lat,lng". We round the lat/lng values to 6 decimal places by default. */
        toUrlValue(precision?: number): string;
    }

    export type LatLngLiteral = { lat: number; lng: number }

    export class LatLngBounds {
        constructor(sw?: LatLng, ne?: LatLng);
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

    export class Size {
        constructor(width: number, height: number, widthUnit?: string, heightUnit?: string);
        height: number;
        width: number;
        equals(other: Size): boolean;
        toString(): string;
    }

    /***** MVC *****/
    export class MVCObject {
        constructor();
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
        constructor(array?: any[]);
        clear(): void;
        forEach(callback: (elem: any, i: number) => void): void;
        getArray(): any[];
        getAt(i: number): any;
        getLength(): number;
        insertAt(i: number, elem: any): void;
        pop(): any;
        push(elem: any): number;
        removeAt(i: number): any;
        setAt(i: number, elem: any): void;
    }

    /***** Geometry Library *****/
    export module geometry {
        export class encoding {
            static decodePath(encodedPath: string): LatLng[];
            static encodePath(path: any[]): string; // LatLng[]|MVCArray<LatLng>
        }

        export class spherical {
            static computeArea(path: any[], radius?: number): number; // LatLng[]|MVCArray<LatLng>
            static computeDistanceBetween(from: LatLng, to: LatLng, radius?: number): number;
            static computeHeading(from: LatLng, to: LatLng): number;
            static computeLength(path: any[], radius?: number): number; // LatLng[]|MVCArray<LatLng>
            static computeOffset(from: LatLng, distance: number, heading: number, radius?: number): LatLng;
            static computeOffsetOrigin(to: LatLng, distance: number, heading: number, radius?: number): LatLng;
            static computeSignedArea(loop: any[], radius?: number): number; // LatLng[]|MVCArray<LatLng>
            static interpolate(from: LatLng, to: LatLng, fraction: number): LatLng;
        }

        export class poly {
            static containsLocation(point: LatLng, polygon: Polygon): boolean;
            static isLocationOnEdge(point: LatLng, poly: Polygon|Polyline, tolerance?: number): boolean;
        }
    }

    /***** AdSense Library *****/
    export module adsense {
        export class AdUnit extends MVCObject {
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
            setMap(map: Map): void;
            setPosition(position: ControlPosition): void;
            setTextColor(textColor: string): void;
            setTitleColor(titleColor: string): void;
            setUrlColor(urlColor: string): void;
        }

        export interface AdUnitOptions {
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

        export enum AdFormat {
            BANNER,
            BUTTON,
            HALF_BANNER,
            LARGE_HORIZONTAL_LINK_UNIT,
            LARGE_RECTANGLE,
            LARGE_VERTICAL_LINK_UNIT,
            LEADERBOARD,
            MEDIUM_RECTANGLE,
            MEDIUM_VERTICAL_LINK_UNIT,
            SKYSCRAPER,
            SMALL_HORIZONTAL_LINK_UNIT,
            SMALL_RECTANGLE,
            SMALL_SQUARE,
            SMALL_VERTICAL_LINK_UNIT,
            SQUARE,
            VERTICAL_BANNER,
            WIDE_SKYSCRAPER,
            X_LARGE_VERTICAL_LINK_UNIT
        }
    }

    /***** Places Library *****/
    export module places {
        export class Autocomplete extends MVCObject {
            constructor(inputField: HTMLInputElement, opts?: AutocompleteOptions);
            getBounds(): LatLngBounds;
            getPlace(): PlaceResult;
            setBounds(bounds: LatLngBounds): void;
            setComponentRestrictions(restrictions: ComponentRestrictions): void;
            setTypes(types: string[]): void;
        }

        export interface AutocompleteOptions  {
            bounds?: LatLngBounds;
            componentRestrictions?: ComponentRestrictions;
            types?: string[];
        }

        export interface AutocompletePrediction {
            description: string;
            matched_substrings: PredictionSubstring[];
            place_id: string;
            terms: PredictionTerm[];
            types: string[]
        }
        
        export interface PredictionTerm {
            offset: number;
            value: string;
        }
           
        export interface PredictionSubstring {
            length: number;
            offset: number;
        }       
        
        export class AutocompleteService {
            constructor();
            getPlacePredictions(request: AutocompletionRequest, callback: (result: AutocompletePrediction[], status: PlacesServiceStatus) => void): void;
            getQueryPredictions(request: QueryAutocompletionRequest, callback: (result: QueryAutocompletePrediction[], status: PlacesServiceStatus) => void): void;
        }

        export interface AutocompletionRequest {
            bounds?: LatLngBounds;
            componentRestrictions?: ComponentRestrictions;
            input: string;            
            location?: LatLng;
            offset?: number;
            radius?: number;
            types?: string[];
        }
        
        export interface ComponentRestrictions {
            country: string;
        }

        export interface PlaceAspectRating {
            rating: number;
            type: string;
        }
        
        export interface PlaceDetailsRequest  {
            placeId: string;
        }
        
        export interface PlaceGeometry {
            location: LatLng;
            viewport: LatLngBounds;
        }

        export interface PlacePhoto {
            height: number;
            html_attributions: string[];
            width: number;
            getUrl(opts: PhotoOptions): string;
        }
        
        export interface PhotoOptions {
            maxHeight?: number;
            maxWidth?: number;
        }

        export interface PlaceResult {
            address_components: GeocoderAddressComponent[];
            aspects: PlaceAspectRating[];
            formatted_address: string;
            formatted_phone_number: string;
            geometry: PlaceGeometry;
            html_attributions: string[];
            icon: string;
            international_phone_number: string;
            name: string;
            permanently_closed: boolean;
            photos: PlacePhoto[];
            place_id: string;
            price_level: number;
            rating: number;
            reviews: PlaceReview[];
            types: string[];
            url: string;
            vicinity: string;
            website: string;
        }

        export interface PlaceReview {
            aspects: PlaceAspectRating[];
            author_name: string;
            author_url: string;
            language: string;
            text: string;
        }
        
        export interface PlaceSearchPagination {
            nextPage(): void;
            hasNextPage: boolean;
        }

        export interface PlaceSearchRequest {
            bounds: LatLngBounds;
            keyword: string;
            location: LatLng|LatLngLiteral;
            maxPriceLevel?: number;
            minPriceLevel?: number;
            name: string;
            openNow: boolean;
            radius: number;
            rankBy: RankBy;
            types: string[];
        }

        export class PlacesService {
            constructor(attrContainer: HTMLDivElement|Map);
            getDetails(request: PlaceDetailsRequest, callback: (result: PlaceResult, status: PlacesServiceStatus) => void): void;
            nearbySearch(request: PlaceSearchRequest, callback: (results: PlaceResult[], status: PlacesServiceStatus, pagination: PlaceSearchPagination) => void): void;
            radarSearch(request: RadarSearchRequest, callback: (results: PlaceResult[], status: PlacesServiceStatus) => void): void;
            textSearch(request: TextSearchRequest, callback: (results: PlaceResult[], status: PlacesServiceStatus) => void): void;
        }

        export enum PlacesServiceStatus {
            INVALID_REQUEST,
            OK,
            OVER_QUERY_LIMIT,
            REQUEST_DENIED,
            UNKNOWN_ERROR,
            ZERO_RESULTS
        }

        export interface QueryAutocompletePrediction {
            description: string;
            matched_substrings: PredictionSubstring[];
            place_id: string;
            terms: PredictionTerm[];
        }

        export interface QueryAutocompletionRequest {
            bounds?: LatLngBounds;
            input?: string;
            location?: LatLng;
            radius?: number;
        }

        export interface RadarSearchRequest {
            bounds?: LatLngBounds;
            keyword: string;
            location: LatLng|LatLngLiteral;
            name: string;
            radius: number;
            types: string[];
        }

        export enum RankBy {
            DISTANCE,
            PROMINENCE
        }

        export class SearchBox extends MVCObject {
            constructor(inputField: HTMLInputElement, opts?: SearchBoxOptions);
            getBounds(): LatLngBounds;
            getPlaces(): PlaceResult[];
            setBounds(bounds: LatLngBounds): void;
        }

        export interface SearchBoxOptions {
            bounds: LatLngBounds;
        }

        export interface TextSearchRequest {
            bounds?: LatLngBounds;
            location: LatLng|LatLngLiteral;
            query: string;
            radius: number;
            types: string[];
        }
    }

    /***** Drawing Library *****/
    export module drawing {
        export class DrawingManager extends MVCObject {
            constructor(options?: DrawingManagerOptions);
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
            overlay: Marker|Polygon|Polyline|Rectangle|Circle;
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

    /***** Visualization Library *****/
    export module visualization {
        export class MapsEngineLayer extends MVCObject {
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
            setMap(map: Map): void;
            setMapId(mapId: string): void;
            setOpacity(opacity: number): void;
            setOptions(options: MapsEngineLayerOptions): void;
            setZIndex(zIndex: number): void;
        }
        
        export interface MapsEngineLayerOptions {
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
        
        export interface MapsEngineLayerProperties {
            name: string;
        }
        
        export interface MapsEngineMouseEvent {
            featureId?: string;
            infoWindowHtml?: string;
            latLng?: LatLng;
            pixelOffset?: Size;
        }
        
        export enum MapsEngineStatus {
            INVALID_LAYER,
            OK,
            UNKNOWN_ERROR   
        }
        
        export class HeatmapLayer extends MVCObject {
            constructor(opts?: HeatmapLayerOptions);
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
