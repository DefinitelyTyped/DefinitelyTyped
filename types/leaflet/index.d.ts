// Type definitions for Leaflet.js 1.0
// Project: https://github.com/Leaflet/Leaflet
// Definitions by: Alejandro Sánchez <https://github.com/alejo90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="geojson" />

type NativeMouseEvent = MouseEvent;
type NativeKeyboardEvent = KeyboardEvent;

// Import to avoid conflicts with the GeoJSON class of leaflet
import GeoJSONFeature = GeoJSON.Feature;
import GeoJSONLineString = GeoJSON.LineString;
import GeoJSONMultiLineString = GeoJSON.MultiLineString;
import GeoJSONPolygon = GeoJSON.Polygon;
import GeoJSONMultiPolygon = GeoJSON.MultiPolygon;
import GeoJSONFeatureCollection = GeoJSON.FeatureCollection;
import GeoJSONGeometryObject = GeoJSON.GeometryObject;
import GeoJSONGeometryCollection = GeoJSON.GeometryCollection;
import GeoJSONPoint = GeoJSON.Point;
import GeoJSONMultiPoint = GeoJSON.MultiPoint;
import GeoJSONGeoJsonObject = GeoJSON.GeoJsonObject;

declare namespace L {
    class Class {
        static extend(props: any): any/* how to return constructor of self extended type ? */;
        static include(props: any): any /* how to return self extended type ? */;
        static mergeOptions(props: any): any /* how to return self extended type ? */;
        static addInitHook(initHookFn: () => void): any/* how to return self extended type ? */;
    }

    class Transformation {
        constructor(a: number, b: number, c: number, d: number);

        transform(point: Point, scale?: number): Point;

        untransform(point: Point, scale?: number): Point;
    }

    namespace LineUtil {
        function simplify(points: Point[], tolerance: number): Point[];

        function pointToSegmentDistance(p: Point, p1: Point, p2: Point): number;

        function closestPointOnSegment(p: Point, p1: Point, p2: Point): Point;
    }

    namespace PolyUtil {
        function clipPolygon(points: Point[], bounds: BoundsExpression, round?: boolean): Point[];
    }

    namespace DomUtil {
        /**
         * Get Element by its ID or with the given HTML-Element
         */
        function get(element: string | HTMLElement): HTMLElement | null;
        function getStyle(el: HTMLElement, styleAttrib: string): string | null;
        function create(tagName: string, className?: string, container?: HTMLElement): HTMLElement;
        function remove(el: HTMLElement): void;
        function empty(el: HTMLElement): void;
        function toFront(el: HTMLElement): void;
        function toBack(el: HTMLElement): void;
        function hasClass(el: HTMLElement, name: string): boolean;
        function addClass(el: HTMLElement, name: string): void;
        function removeClass(el: HTMLElement, name: string): void;
        function setClass(el: HTMLElement, name: string): void;
        function getClass(el: HTMLElement): string;
        function setOpacity(el: HTMLElement, opacity: number): void;
        function testProp(props: string[]): string | false;
        function setTransform(el: HTMLElement, offset: Point, scale?: number): void;
        function setPosition(el: HTMLElement, position: Point): void;
        function getPosition(el: HTMLElement): Point;
        function disableTextSelection(): void;
        function enableTextSelection(): void;
        function disableImageDrag(): void;
        function enableImageDrag(): void;
        function preventOutline(el: HTMLElement): void;
        function restoreOutline(): void;
    }

    interface CRS {
        latLngToPoint(latlng: LatLngExpression, zoom: number): Point;
        pointToLatLng(point: PointExpression, zoom: number): LatLng;
        project(latlng: LatLng | LatLngLiteral): Point;
        unproject(point: PointExpression): LatLng;
        scale(zoom: number): number;
        zoom(scale: number): number;
        getProjectedBounds(zoom: number): Bounds;
        distance(latlng1: LatLngExpression, latlng2: LatLngExpression): number;
        wrapLatLng(latlng: LatLng | LatLngLiteral): LatLng;

        code?: string;
        wrapLng?: [number, number];
        wrapLat?: [number, number];
        infinite: boolean;
    }

    namespace CRS {
        const EPSG3395: CRS;
        const EPSG3857: CRS;
        const EPSG4326: CRS;
        const Earth: CRS;
        const Simple: CRS;
    }

    interface Projection {
        project(latlng: LatLng | LatLngLiteral): Point;
        unproject(point: PointExpression): LatLng;

        bounds: Bounds;
    }

    namespace Projection {
        const LonLat: Projection;
        const Mercator: Projection;
        const SphericalMercator: Projection;
    }

    class LatLng {
        constructor(latitude: number, longitude: number, altitude?: number);
        equals(otherLatLng: LatLngExpression, maxMargin?: number): boolean;
        toString(): string;
        distanceTo(otherLatLng: LatLngExpression): number;
        wrap(): LatLng;
        toBounds(sizeInMeters: number): LatLngBounds;

        lat: number;
        lng: number;
        alt?: number;
    }

    interface LatLngLiteral {
        lat: number;
        lng: number;
    }

    type LatLngTuple = [number, number];

    type LatLngExpression = LatLng | LatLngLiteral | LatLngTuple;

    function latLng(latitude: number, longitude: number, altitude?: number): LatLng;

    function latLng(coords: LatLngTuple | [number, number, number] | LatLngLiteral | {lat: number, lng: number, alt?: number}): LatLng;

    class LatLngBounds {
        constructor(southWest: LatLngExpression, northEast: LatLngExpression);
        constructor(latlngs: LatLngBoundsLiteral);
        extend(latlngOrBounds: LatLngExpression | LatLngBoundsExpression): this;
        pad(bufferRatio: number): LatLngBounds; // does this modify the current instance or does it return a new one?
        getCenter(): LatLng;
        getSouthWest(): LatLng;
        getNorthEast(): LatLng;
        getNorthWest(): LatLng;
        getSouthEast(): LatLng;
        getWest(): number;
        getSouth(): number;
        getEast(): number;
        getNorth(): number;
        contains(otherBoundsOrLatLng: LatLngBoundsExpression | LatLngExpression): boolean;
        intersects(otherBounds: LatLngBoundsExpression): boolean;
        overlaps(otherBounds: BoundsExpression): boolean; // investigate if this is really bounds and not latlngbounds
        toBBoxString(): string;
        equals(otherBounds: LatLngBoundsExpression): boolean;
        isValid(): boolean;
    }

    type LatLngBoundsLiteral = LatLngTuple[]; // Must be [LatLngTuple, LatLngTuple], cant't change because Map.setMaxBounds

    type LatLngBoundsExpression = LatLngBounds | LatLngBoundsLiteral;

    function latLngBounds(southWest: LatLngExpression, northEast: LatLngExpression): LatLngBounds;

    function latLngBounds(latlngs: LatLngBoundsLiteral): LatLngBounds;

    type PointTuple = [number, number];

    class Point {
        constructor(x: number, y: number, round?: boolean);
        clone(): Point;
        add(otherPoint: PointExpression): Point; // non-destructive, returns a new point
        subtract(otherPoint: PointExpression): Point;
        divideBy(num: number): Point;
        multiplyBy(num: number): Point;
        scaleBy(scale: PointExpression): Point;
        unscaleBy(scale: PointExpression): Point;
        round(): Point;
        floor(): Point;
        ceil(): Point;
        distanceTo(otherPoint: PointExpression): number;
        equals(otherPoint: PointExpression): boolean;
        contains(otherPoint: PointExpression): boolean;
        toString(): string;
        x: number;
        y: number;
    }

    type PointExpression = Point | PointTuple;

    function point(x: number, y: number, round?: boolean): Point;

    function point(coords: PointTuple | {x: number, y: number}): Point;

    type BoundsLiteral = [PointTuple, PointTuple];

    class Bounds {
        constructor(topLeft: PointExpression, bottomRight: PointExpression);
        constructor(points: Point[] | BoundsLiteral);
        extend(point: PointExpression): this;
        getCenter(round?: boolean): Point;
        getBottomLeft(): Point;
        getTopRight(): Point;
        getSize(): Point;
        contains(pointOrBounds: BoundsExpression | PointExpression): boolean;
        intersects(otherBounds: BoundsExpression): boolean;
        overlaps(otherBounds: BoundsExpression): boolean;

        min?: Point;
        max?: Point;
    }

    type BoundsExpression = Bounds | BoundsLiteral;

    function bounds(topLeft: PointExpression, bottomRight: PointExpression): Bounds;

    function bounds(points: Point[] | BoundsLiteral): Bounds;

    type EventHandlerFn = (event: Event) => void;

    interface EventHandlerFnMap {
        [type: string]: EventHandlerFn;
    }

    /**
     * A set of methods shared between event-powered classes (like Map and Marker).
     * Generally, events allow you to execute some function when something happens
     * with an object (e.g. the user clicks on the map, causing the map to fire
     * 'click' event).
     */
    abstract class Evented extends Class {
        /**
         * Adds a listener function (fn) to a particular event type of the object.
         * You can optionally specify the context of the listener (object the this
         * keyword will point to). You can also pass several space-separated types
         * (e.g. 'click dblclick').
         */
        on(type: string, fn: EventHandlerFn, context?: any): this;

        /**
         * Adds a set of type/listener pairs, e.g. {click: onClick, mousemove: onMouseMove}
         */
        on(eventMap: EventHandlerFnMap): this;

        /* tslint:disable:unified-signatures */ // With an eventMap there are no additional arguments allowed
        /**
         * Removes a previously added listener function. If no function is specified,
         * it will remove all the listeners of that particular event from the object.
         * Note that if you passed a custom context to on, you must pass the same context
         * to off in order to remove the listener.
         */
        off(type: string, fn?: EventHandlerFn, context?: any): this;

        /**
         * Removes a set of type/listener pairs.
         */
        off(eventMap: EventHandlerFnMap): this;
        /* tslint:enable */
        /**
         * Removes all listeners to all events on the object.
         */
        off(): this;

        /**
         * Fires an event of the specified type. You can optionally provide a data
         * object — the first argument of the listener function will contain its properties.
         * The event might can optionally be propagated to event parents.
         */
        fire(type: string, data?: any, propagate?: boolean): this;

        /**
         * Returns true if a particular event type has any listeners attached to it.
         */
        listens(type: string): boolean;

        /**
         * Behaves as on(...), except the listener will only get fired once and then removed.
         */
        once(type: string, fn: EventHandlerFn, context?: any): this;

        /**
         * Behaves as on(...), except the listener will only get fired once and then removed.
         */
        once(eventMap: EventHandlerFnMap): this;

        /**
         * Adds an event parent - an Evented that will receive propagated events
         */
        addEventParent(obj: Evented): this;

        /**
         * Removes an event parent, so it will stop receiving propagated events
         */
        removeEventParent(obj: Evented): this;

        /**
         * Alias for on(...)
         *
         * Adds a listener function (fn) to a particular event type of the object.
         * You can optionally specify the context of the listener (object the this
         * keyword will point to). You can also pass several space-separated types
         * (e.g. 'click dblclick').
         */
        addEventListener(type: string, fn: EventHandlerFn, context?: any): this;

        /**
         * Alias for on(...)
         *
         * Adds a set of type/listener pairs, e.g. {click: onClick, mousemove: onMouseMove}
         */
        addEventListener(eventMap: EventHandlerFnMap): this;

        /**
         * Alias for off(...)
         *
         * Removes a previously added listener function. If no function is specified,
         * it will remove all the listeners of that particular event from the object.
         * Note that if you passed a custom context to on, you must pass the same context
         * to off in order to remove the listener.
         */
        removeEventListener(type: string, fn: EventHandlerFn, context?: any): this;

        /**
         * Alias for off(...)
         *
         * Removes a set of type/listener pairs.
         */
        removeEventListener(eventMap: EventHandlerFnMap): this;

        /**
         * Alias for off()
         *
         * Removes all listeners to all events on the object.
         */
        clearAllEventListeners(): this;

        /**
         * Alias for once(...)
         *
         * Behaves as on(...), except the listener will only get fired once and then removed.
         */
        addOneTimeEventListener(type: string, fn: EventHandlerFn, context?: any): this;

        /**
         * Alias for once(...)
         *
         * Behaves as on(...), except the listener will only get fired once and then removed.
         */
        addOneTimeEventListener(eventMap: EventHandlerFnMap): this;

        /**
         * Alias for fire(...)
         *
         * Fires an event of the specified type. You can optionally provide a data
         * object — the first argument of the listener function will contain its properties.
         * The event might can optionally be propagated to event parents.
         */
        fireEvent(type: string, data?: any, propagate?: boolean): this;

        /**
         * Alias for listens(...)
         *
         * Returns true if a particular event type has any listeners attached to it.
         */
        hasEventListeners(type: string): boolean;
    }

    /**
     * A class for making DOM elements draggable (including touch support).
     * Used internally for map and marker dragging. Only works for elements
     * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
     */
    class Draggable extends Evented {
        constructor(element: HTMLElement, dragStartTarget?: HTMLElement, preventOutline?: boolean);

        enable(): void;

        disable(): void;

        finishDrag(): void;
    }

    interface LayerOptions {
        pane?: string;
        attribution?: string;
    }

    interface InteractiveLayerOptions extends LayerOptions {
        interactive?: boolean;
    }

    class Layer extends Evented {
        constructor(options?: LayerOptions);
        addTo(map: Map): this;
        remove(): this;
        removeFrom(map: Map): this;
        getPane(name?: string): HTMLElement | undefined;

        // Popup methods
        bindPopup(content: ((layer: Layer) => Content) | Content | Popup, options?: PopupOptions): this;
        unbindPopup(): this;
        openPopup(latlng?: LatLngExpression): this;
        closePopup(): this;
        togglePopup(): this;
        isPopupOpen(): boolean;
        setPopupContent(content: Content | Popup): this;
        getPopup(): Popup | undefined;

        // Tooltip methods
        bindTooltip(content: ((layer: Layer) => Content) | Tooltip | Content, options?: TooltipOptions): this;
        unbindTooltip(): this;
        openTooltip(latlng?: LatLngExpression): this;
        closeTooltip(): this;
        toggleTooltip(): this;
        isTooltipOpen(): boolean;
        setTooltipContent(content: Content | Tooltip): this;
        getTooltip(): Tooltip | undefined;

        // Extension methods
        onAdd(map: Map): this;
        onRemove(map: Map): this;
        getEvents?(): {[name: string]: (event: Event) => void};
        getAttribution?(): string | null;
        beforeAdd?(map: Map): this;
    }

    interface GridLayerOptions {
        tileSize?: number | Point;
        opacity?: number;
        updateWhenIdle?: boolean;
        updateWhenZooming?: boolean;
        updateInterval?: number;
        attribution?: string;
        zIndex?: number;
        bounds?: LatLngBoundsExpression;
        minZoom?: number;
        maxZoom?: number;
        noWrap?: boolean;
        pane?: string;
        className?: string;
        keepBuffer?: number;
    }

    class GridLayer extends Layer {
        constructor(options?: GridLayerOptions);
        bringToFront(): this;
        bringToBack(): this;
        getContainer(): HTMLElement | null;
        setOpacity(opacity: number): this;
        setZIndex(zIndex: number): this;
        isLoading(): boolean;
        redraw(): this;
        getTileSize(): Point;
    }

    function gridLayer(options?: GridLayerOptions): GridLayer;

    interface TileLayerOptions extends GridLayerOptions {
        minZoom?: number;
        maxZoom?: number;
        maxNativeZoom?: number;
        minNativeZoom?: number;
        subdomains?: string | string[];
        errorTileUrl?: string;
        zoomOffset?: number;
        tms?: boolean;
        zoomReverse?: boolean;
        detectRetina?: boolean;
        crossOrigin?: boolean;
        [name: string]: any;
    }

    class TileLayer extends GridLayer {
        constructor(urlTemplate: string, options?: TileLayerOptions);
        setUrl(url: string, noRedraw?: boolean): this;

        options: TileLayerOptions;
    }

    function tileLayer(urlTemplate: string, options?: TileLayerOptions): TileLayer;

    namespace TileLayer {
        class WMS extends TileLayer {
            constructor(baseUrl: string, options: WMSOptions);
            setParams(params: WMSParams, noRedraw?: boolean): this;

            wmsParams: WMSParams;
            options: WMSOptions;
        }
    }

    interface WMSOptions extends TileLayerOptions {
        layers?: string;
        styles?: string;
        format?: string;
        transparent?: boolean;
        version?: string;
        crs?: CRS;
        uppercase?: boolean;
    }

    interface WMSParams {
        format?: string;
        layers: string;
        request?: string;
        service?: string;
        styles?: string;
        version?: string;
        transparent?: boolean;
        width?: number;
        height?: number;
    }

    namespace tileLayer {
        function wms(baseUrl: string, options?: WMSOptions): TileLayer.WMS;
    }

    interface ImageOverlayOptions extends LayerOptions {
        opacity?: number;
        alt?: string;
        interactive?: boolean;
        attribution?: string;
        crossOrigin?: boolean;
    }

    class ImageOverlay extends Layer {
        constructor(imageUrl: string, bounds: LatLngBoundsExpression, options?: ImageOverlayOptions);
        setOpacity(opacity: number): this;
        bringToFront(): this;
        bringToBack(): this;
        setUrl(url: string): this;

        /** Update the bounds that this ImageOverlay covers */
        setBounds(bounds: LatLngBounds): this;

        /** Get the bounds that this ImageOverlay covers */
        getBounds(): LatLngBounds;

        /** Get the img element that represents the ImageOverlay on the map */
        getElement(): HTMLImageElement | undefined;

        options: ImageOverlayOptions;
    }

    function imageOverlay(imageUrl: string, bounds: LatLngBoundsExpression, options?: ImageOverlayOptions): ImageOverlay;

    type LineCapShape = 'butt' | 'round' | 'square' | 'inherit';

    type LineJoinShape = 'miter' | 'round' | 'bevel' | 'inherit';

    type FillRule = 'nonzero' | 'evenodd' | 'inherit';

    interface PathOptions extends InteractiveLayerOptions {
        stroke?: boolean;
        color?: string;
        weight?: number;
        opacity?: number;
        lineCap?: LineCapShape;
        lineJoin?: LineJoinShape;
        dashArray?: string;
        dashOffset?: string;
        fill?: boolean;
        fillColor?: string;
        fillOpacity?: number;
        fillRule?: FillRule;
        renderer?: Renderer;
        className?: string;
    }

    abstract class Path extends Layer {
        redraw(): this;
        setStyle(style: PathOptions): this;
        bringToFront(): this;
        bringToBack(): this;
        getElement(): Element | undefined;

        options: PathOptions;
    }

    interface PolylineOptions extends PathOptions {
        smoothFactor?: number;
        noClip?: boolean;
    }

    class InternalPolyline extends Path {
        getLatLngs(): LatLng[];
        setLatLngs(latlngs: LatLngExpression[]): this;
        isEmpty(): boolean;
        getCenter(): LatLng;
        getBounds(): LatLngBounds;
        addLatLng(latlng: LatLngExpression | LatLngExpression[]): this;

        options: PolylineOptions;
    }

    class Polyline extends InternalPolyline {
        constructor(latlngs: LatLngExpression[], options?: PolylineOptions);
        toGeoJSON(): GeoJSONFeature<GeoJSONLineString | GeoJSONMultiLineString>;

        feature?: GeoJSONFeature<GeoJSONLineString | GeoJSONMultiLineString>;
    }

    function polyline(latlngs: LatLngExpression[], options?: PolylineOptions): Polyline;

    class Polygon extends InternalPolyline {
        constructor(latlngs: LatLngExpression[], options?: PolylineOptions);
        toGeoJSON(): GeoJSONFeature<GeoJSONPolygon | GeoJSONMultiPolygon>;

        feature?: GeoJSONFeature<GeoJSONPolygon | GeoJSONMultiPolygon>;
    }

    function polygon(latlngs: LatLngExpression[], options?: PolylineOptions): Polygon;

    class Rectangle extends Polygon {
        constructor(latLngBounds: LatLngBoundsExpression, options?: PolylineOptions);
        setBounds(latLngBounds: LatLngBoundsExpression): this;
    }

    function rectangle(latLngBounds: LatLngBoundsExpression, options?: PolylineOptions): Rectangle;

    interface CircleMarkerOptions extends PathOptions {
        radius?: number;
    }

    class CircleMarker extends Path {
        constructor(latlng: LatLngExpression, options?: CircleMarkerOptions);
        toGeoJSON(): GeoJSONFeature<GeoJSONPoint>;
        setLatLng(latLng: LatLngExpression): this;
        getLatLng(): LatLng;
        setRadius(radius: number): this;
        getRadius(): number;

        options: CircleMarkerOptions;
        feature?: GeoJSONFeature<GeoJSONPoint>;
    }

    function circleMarker(latlng: LatLngExpression, options?: CircleMarkerOptions): CircleMarker;

    class Circle extends CircleMarker {
        constructor(latlng: LatLngExpression, options?: CircleMarkerOptions);
        constructor(latlng: LatLngExpression, radius: number, options?: CircleMarkerOptions); // deprecated!
        getBounds(): LatLngBounds;
    }

    function circle(latlng: LatLngExpression, options?: CircleMarkerOptions): Circle;
    function circle(latlng: LatLngExpression, radius: number, options?: CircleMarkerOptions): Circle; // deprecated!

    interface RendererOptions extends LayerOptions {
        padding?: number;
    }

    class Renderer extends Layer {
        constructor(options?: RendererOptions);

        options: RendererOptions;
    }

    class SVG extends Renderer {}

    namespace SVG {
        function create(name: string): SVGElement;

        function pointsToPath(rings: PointExpression[], close: boolean): string;
    }

    function svg(options?: RendererOptions): SVG;

    class Canvas extends Renderer {}

    function canvas(options?: RendererOptions): Canvas;

    /**
     * Used to group several layers and handle them as one.
     * If you add it to the map, any layers added or removed from the group will be
     * added/removed on the map as well. Extends Layer.
     */
    class LayerGroup extends Layer {
        constructor(layers: Layer[]);
        /**
         * Returns a GeoJSON representation of the layer group (as a GeoJSON GeometryCollection, GeoJSONFeatureCollection or Multipoint).
         */
        toGeoJSON(): GeoJSONFeatureCollection<GeoJSONGeometryObject> | GeoJSONFeature<GeoJSONMultiPoint> | GeoJSONGeometryCollection;

        /**
         * Adds the given layer to the group.
         */
        addLayer(layer: Layer): this;

        /**
         * Removes the layer with the given internal ID or the given layer from the group.
         */
        removeLayer(layer: number | Layer): this;

        /**
         * Returns true if the given layer is currently added to the group.
         */
        hasLayer(layer: Layer): boolean;

        /**
         * Removes all the layers from the group.
         */
        clearLayers(): this;

        /**
         * Calls methodName on every layer contained in this group, passing any additional parameters.
         * Has no effect if the layers contained do not implement methodName.
         */
        invoke(methodName: string, ...params: any[]): this;

        /**
         * Iterates over the layers of the group,
         * optionally specifying context of the iterator function.
         */
        eachLayer(fn: (layer: Layer) => void, context?: any): this;

        /**
         * Returns the layer with the given internal ID.
         */
        getLayer(id: number): Layer | undefined;

        /**
         * Returns an array of all the layers added to the group.
         */
        getLayers(): Layer[];

        /**
         * Calls setZIndex on every layer contained in this group, passing the z-index.
         */
        setZIndex(zIndex: number): this;

        /**
         * Returns the internal ID for a layer
         */
        getLayerId(layer: Layer): number;

        feature?: GeoJSONFeatureCollection<GeoJSONGeometryObject> | GeoJSONFeature<GeoJSONMultiPoint> | GeoJSONGeometryCollection;
    }

    /**
     * Create a layer group, optionally given an initial set of layers.
     */
    function layerGroup(layers: Layer[]): LayerGroup;

    /**
     * Extended LayerGroup that also has mouse events (propagated from
     * members of the group) and a shared bindPopup method.
     */
    class FeatureGroup extends LayerGroup {
        /**
         * Sets the given path options to each layer of the group that has a setStyle method.
         */
        setStyle(style: PathOptions): this;

        /**
         * Brings the layer group to the top of all other layers
         */
        bringToFront(): this;

        /**
         * Brings the layer group to the top [sic] of all other layers
         */
        bringToBack(): this;

        /**
         * Returns the LatLngBounds of the Feature Group (created from
         * bounds and coordinates of its children).
         */
        getBounds(): LatLngBounds;
    }

    /**
     * Create a feature group, optionally given an initial set of layers.
     */
    function featureGroup(layers?: Layer[]): FeatureGroup;

    type StyleFunction = (feature?: GeoJSONFeature<GeoJSONGeometryObject>) => PathOptions;

    interface GeoJSONOptions extends LayerOptions {
        /**
         * A Function defining how GeoJSON points spawn Leaflet layers.
         * It is internally called when data is added, passing the GeoJSON point
         * feature and its LatLng.
         *
         * The default is to spawn a default Marker:
         *
         * ```
         * function(geoJsonPoint, latlng) {
         *     return L.marker(latlng);
         * }
         * ```
         */
        pointToLayer?(geoJsonPoint: GeoJSONFeature<GeoJSONPoint>, latlng: LatLng): Layer; // should import GeoJSON typings

        /**
         * A Function defining the Path options for styling GeoJSON lines and polygons,
         * called internally when data is added.
         *
         * The default value is to not override any defaults:
         *
         * ```
         * function (geoJsonFeature) {
         *     return {}
         * }
         * ```
         */
        style?: StyleFunction;

        /**
         * A Function that will be called once for each created Feature, after it
         * has been created and styled. Useful for attaching events and popups to features.
         *
         * The default is to do nothing with the newly created layers:
         *
         * ```
         * function (feature, layer) {}
         * ```
         */
        onEachFeature?(feature: GeoJSONFeature<GeoJSONGeometryObject>, layer: Layer): void;

        /**
         * A Function that will be used to decide whether to show a feature or not.
         *
         * The default is to show all features:
         *
         * ```
         * function (geoJsonFeature) {
         *     return true;
         * }
         * ```
         */
        filter?(geoJsonFeature: GeoJSONFeature<GeoJSONGeometryObject>): boolean;

        /**
         * A Function that will be used for converting GeoJSON coordinates to LatLngs.
         * The default is the coordsToLatLng static method.
         */
        coordsToLatLng?(coords: [number, number] | [number, number, number]): LatLng; // check if LatLng has an altitude property
    }

    /**
     * Represents a GeoJSON object or an array of GeoJSON objects.
     * Allows you to parse GeoJSON data and display it on the map. Extends FeatureGroup.
     */
    class GeoJSON extends FeatureGroup {
        /**
         * Creates a Layer from a given GeoJSON feature. Can use a custom pointToLayer
         * and/or coordsToLatLng functions if provided as options.
         */
        static geometryToLayer(featureData: GeoJSONFeature<GeoJSONGeometryObject>, options?: GeoJSONOptions): Layer;

        /**
         * Creates a LatLng object from an array of 2 numbers (longitude, latitude) or
         * 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
         */
        static coordsToLatLng(coords: [number, number] | [number, number, number]): LatLng;

        /**
         * Creates a multidimensional array of LatLngs from a GeoJSON coordinates array.
         * levelsDeep specifies the nesting level (0 is for an array of points, 1 for an array of
         * arrays of points, etc., 0 by default).
         * Can use a custom coordsToLatLng function.
         */
        static coordsToLatLngs(
            coords: any[],
            levelsDeep?: number,
            coordsToLatLng?: (coords: [number, number] | [number, number, number]) => LatLng): any[]; // Using any[] to avoid artificially limiting valid calls

        /**
         * Reverse of coordsToLatLng
         */
        static latLngToCoords(latlng: LatLng): [number, number] | [number, number, number];

        /**
         * Reverse of coordsToLatLngs closed determines whether the first point should be
         * appended to the end of the array to close the feature, only used when levelsDeep is 0.
         * False by default.
         */
        static latLngsToCoords(latlngs: any[], levelsDeep?: number, closed?: boolean): any[];  // Using any[] to avoid artificially limiting valid calls

        /**
         * Normalize GeoJSON geometries/features into GeoJSON features.
         */
        static asFeature(geojson: GeoJSONFeature<GeoJSONGeometryObject> | GeoJSONGeometryObject): GeoJSONFeature<GeoJSONGeometryObject>;

        constructor(geojson?: GeoJSONGeoJsonObject, options?: GeoJSONOptions)
        /**
         * Adds a GeoJSON object to the layer.
         */
        addData(data: GeoJSONGeoJsonObject): Layer;

        /**
         * Resets the given vector layer's style to the original GeoJSON style,
         * useful for resetting style after hover events.
         */
        resetStyle(layer: Layer): Layer;

        /**
         * Changes styles of GeoJSON vector layers with the given style function.
         */
        setStyle(style: StyleFunction): this;

        options: GeoJSONOptions;
    }

    /**
     * Creates a GeoJSON layer.
     *
     * Optionally accepts an object in GeoJSON format to display on the
     * map (you can alternatively add it later with addData method) and
     * an options object.
     */
    function geoJSON(geojson?: GeoJSONGeoJsonObject, options?: GeoJSONOptions): GeoJSON;

    type Zoom = boolean | 'center';

    interface MapOptions {
        preferCanvas?: boolean;

        // Control options
        attributionControl?: boolean;
        zoomControl?: boolean;

        // Interaction options
        closePopupOnClick?: boolean;
        zoomSnap?: number;
        zoomDelta?: number;
        trackResize?: boolean;
        boxZoom?: boolean;
        doubleClickZoom?: Zoom;
        dragging?: boolean;

        // Map state options
        crs?: CRS;
        center?: LatLngExpression;
        zoom?: number;
        minZoom?: number;
        maxZoom?: number;
        layers?: Layer[];
        maxBounds?: LatLngBoundsExpression;
        renderer?: Renderer;

        // Animation options
        fadeAnimation?: boolean;
        markerZoomAnimation?: boolean;
        transform3DLimit?: number;
        zoomAnimation?: boolean;
        zoomAnimationThreshold?: number;

        // Panning inertia options
        inertia?: boolean;
        inertiaDeceleration?: number;
        inertiaMaxSpeed?: number;
        easeLinearity?: number;
        worldCopyJump?: boolean;
        maxBoundsViscosity?: number;

        // Keyboard navigation options
        keyboard?: boolean;
        keyboardPanDelta?: number;

        // Mousewheel options
        scrollWheelZoom?: Zoom;
        wheelDebounceTime?: number;
        wheelPxPerZoomLevel?: number;

        // Touch interaction options
        tap?: boolean;
        tapTolerance?: number;
        touchZoom?: Zoom;
        bounceAtZoomLimits?: boolean;
    }

    type ControlPosition = 'topleft' | 'topright' | 'bottomleft' | 'bottomright';

    interface ControlOptions {
        position?: ControlPosition;
    }

    class Control extends Class {
        constructor(options?: ControlOptions);
        getPosition(): ControlPosition;
        setPosition(position: ControlPosition): this;
        getContainer(): HTMLElement | undefined;
        addTo(map: Map): this;
        remove(): this;

        // Extension methods
        onAdd?(map: Map): HTMLElement;
        onRemove?(map: Map): void;

        options: ControlOptions;
    }

    namespace Control {
        interface ZoomOptions extends ControlOptions {
            zoomInText?: string;
            zoomInTitle?: string;
            zoomOutText?: string;
            zoomOutTitle?: string;
        }

        class Zoom extends Control {
            constructor(options?: ZoomOptions);
            options: ZoomOptions;
        }

        interface AttributionOptions extends ControlOptions {
            prefix?: string | boolean;
        }

        class Attribution extends Control {
            constructor(options?: AttributionOptions);
            setPrefix(prefix: string): this;
            addAttribution(text: string): this;
            removeAttribution(text: string): this;
            options: AttributionOptions;
        }

        interface LayersOptions extends ControlOptions {
            collapsed?: boolean;
            autoZIndex?: boolean;
            hideSingleBase?: boolean;
        }

        interface LayersObject {
            [name: string]: Layer;
        }

        class Layers extends Control {
            constructor(baseLayers?: LayersObject, overlays?: LayersObject, options?: Control.LayersOptions);
            addBaseLayer(layer: Layer, name: string): this;
            addOverlay(layer: Layer, name: string): this;
            removeLayer(layer: Layer): this;
            expand(): this;
            collapse(): this;
            options: LayersOptions;
        }

        interface ScaleOptions extends ControlOptions {
            maxWidth?: number;
            metric?: boolean;
            imperial?: boolean;
            updateWhenIdle?: boolean;
        }

        class Scale extends Control {
            constructor(options?: Control.ScaleOptions);
            options: ScaleOptions;
        }
    }

    namespace control {
        function zoom(options?: Control.ZoomOptions): Control.Zoom;

        function attribution(options?: Control.AttributionOptions): Control.Attribution;

        function layers(baseLayers?: Control.LayersObject, overlays?: Control.LayersObject, options?: Control.LayersOptions): Control.Layers;

        function scale(options?: Control.ScaleOptions): Control.Scale;
    }

    interface DivOverlayOptions {
        offset?: PointExpression;
        zoomAnimation?: boolean;
        className?: string;
        pane?: string;
    }

    interface PopupOptions extends DivOverlayOptions {
        maxWidth?: number;
        minWidth?: number;
        maxHeight?: number;
        autoPan?: boolean;
        autoPanPaddingTopLeft?: PointExpression;
        autoPanPaddingBottomRight?: PointExpression;
        autoPanPadding?: PointExpression;
        keepInView?: boolean;
        closeButton?: boolean;
        autoClose?: boolean;
        closeOnClick?: boolean;
    }

    type Content = string | HTMLElement;

    class Popup extends Layer {
        constructor(options?: PopupOptions, source?: Layer);
        getLatLng(): LatLng | undefined;
        setLatLng(latlng: LatLngExpression): this;
        getContent(): Content | ((source: Layer) => Content) | undefined;
        setContent(htmlContent: ((source: Layer) => Content) | Content): this;
        getElement(): HTMLElement | undefined;
        update(): void;
        isOpen(): boolean;
        bringToFront(): this;
        bringToBack(): this;
        openOn(map: Map): this;

        options: PopupOptions;
    }

    function popup(options?: PopupOptions, source?: Layer): Popup;

    type Direction = 'right' | 'left' | 'top' | 'bottom' | 'center' | 'auto';

    interface TooltipOptions extends DivOverlayOptions {
        pane?: string;
        offset?: PointExpression;
        direction?: Direction;
        permanent?: boolean;
        sticky?: boolean;
        interactive?: boolean;
        opacity?: number;
    }

    class Tooltip extends Layer {
        constructor(options?: TooltipOptions, source?: Layer);
        setOpacity(val: number): void;
        getLatLng(): LatLng | undefined;
        setLatLng(latlng: LatLngExpression): this;
        getContent(): Content | undefined;
        setContent(htmlContent: ((source: Layer) => Content) | Content): this;
        getElement(): HTMLElement | undefined;
        update(): void;
        isOpen(): boolean;
        bringToFront(): this;
        bringToBack(): this;

        options: TooltipOptions;
    }

    function tooltip(options?: TooltipOptions, source?: Layer): Tooltip;

    interface ZoomOptions {
        animate?: boolean;
    }

    interface PanOptions {
        animate?: boolean;
        duration?: number;
        easeLinearity?: number;
        noMoveStart?: boolean;
    }

    /* tslint:disable:no-empty-interface */ // This is not empty, it extends two interfaces into one...
    interface ZoomPanOptions extends ZoomOptions, PanOptions {}
    /* tslint:enable */

    interface FitBoundsOptions extends ZoomOptions, PanOptions {
        paddingTopLeft?: PointExpression;
        paddingBottomRight?: PointExpression;
        padding?: PointExpression;
        maxZoom?: number;
    }

    interface LocateOptions {
        watch?: boolean;
        setView?: boolean;
        maxZoom?: number;
        timeout?: number;
        maximumAge?: number;
        enableHighAccuracy?: boolean;
    }

    class Handler extends Class {
        constructor(map: Map);
        enable(): this;
        disable(): this;
        enabled(): boolean;

        // Extension methods
        addHooks?(): void;
        removeHooks?(): void;
    }

    interface Event {
        type: string;
        target: any;
    }

    interface MouseEvent extends Event {
        latlng: LatLng;
        layerPoint: Point;
        containerPoint: Point;
        originalEvent: NativeMouseEvent;
    }

    interface KeyboardEvent extends Event {
        originalEvent: NativeKeyboardEvent;
    }

    interface LocationEvent extends Event {
        latlng: LatLng;
        bounds: LatLngBounds;
        accuracy: number;
        altitude: number;
        altitudeAccuracy: number;
        heading: number;
        speed: number;
        timestamp: number;
    }

    interface ErrorEvent extends Event {
        message: string;
        code: number;
    }

    interface LayerEvent extends Event {
        layer: Layer;
    }

    interface LayersControlEvent extends LayerEvent {
        name: string;
    }

    interface TileEvent extends Event {
        tile: HTMLImageElement;
        coords: Point; // apparently not a normal point, since docs say it has z (zoom)
    }

    interface TileErrorEvent extends TileEvent {
        error: Error;
    }

    interface ResizeEvent extends Event {
        oldSize: Point;
        newSize: Point;
    }

    interface GeoJSONEvent extends Event {
        layer: Layer;
        properties: any;
        geometryType: string;
        id: string;
    }

    interface PopupEvent extends Event {
        popup: Popup;
    }

    interface TooltipEvent extends Event {
        tooltip: Tooltip;
    }

    interface DragEndEvent extends Event {
        distance: number;
    }

    interface ZoomAnimEvent extends Event {
        center: LatLng;
        zoom: number;
        noUpdate: boolean;
    }

    namespace DomEvent {
        function on(el: HTMLElement, types: string, fn: EventHandlerFn, context?: any): typeof DomEvent;

        function on(el: HTMLElement, eventMap: {[eventName: string]: EventHandlerFn}, context?: any): typeof DomEvent;

        function off(el: HTMLElement, types: string, fn: EventHandlerFn, context?: any): typeof DomEvent;

        function off(el: HTMLElement, eventMap: {[eventName: string]: EventHandlerFn}, context?: any): typeof DomEvent;

        function stopPropagation(ev: Event): typeof DomEvent;

        function disableScrollPropagation(el: HTMLElement): typeof DomEvent;

        function disableClickPropagation(el: HTMLElement): typeof DomEvent;

        function preventDefault(ev: Event): typeof DomEvent;

        function stop(ev: Event): typeof DomEvent;

        function getMousePosition(ev: {clientX: number, clientY: number} /*MouseEvent from lib.d.ts*/, container?: HTMLElement): Point;

        function getWheelDelta(ev: Event): number;

        function addListener(el: HTMLElement, types: string, fn: EventHandlerFn, context?: any): typeof DomEvent;

        function addListener(el: HTMLElement, eventMap: {[eventName: string]: EventHandlerFn}, context?: any): typeof DomEvent;

        function removeListener(el: HTMLElement, types: string, fn: EventHandlerFn, context?: any): typeof DomEvent;

        function removeListener(el: HTMLElement, eventMap: {[eventName: string]: EventHandlerFn}, context?: any): typeof DomEvent;
    }

    interface DefaultMapPanes {
        mapPane: HTMLElement;
        tilePane: HTMLElement;
        overlayPane: HTMLElement;
        shadowPane: HTMLElement;
        markerPane: HTMLElement;
        tooltipPane: HTMLElement;
        popupPane: HTMLElement;
    }

    class Map extends Evented {
        constructor(element: string | HTMLElement, options?: MapOptions);
        getRenderer(layer: Path): Renderer;

        // Methods for layers and controls
        addControl(control: Control): this;
        removeControl(control: Control): this;
        addLayer(layer: Layer): this;
        removeLayer(layer: Layer): this;
        hasLayer(layer: Layer): boolean;
        eachLayer(fn: (layer: Layer) => void, context?: any): this;
        openPopup(popup: Popup): this;
        openPopup(content: Content, latlng: LatLngExpression, options?: PopupOptions): this;
        closePopup(popup?: Popup): this;
        openTooltip(tooltip: Tooltip): this;
        openTooltip(content: Content, latlng: LatLngExpression, options?: TooltipOptions): this;
        closeTooltip(tooltip?: Tooltip): this;

        // Methods for modifying map state
        setView(center: LatLngExpression, zoom: number, options?: ZoomPanOptions): this;
        setZoom(zoom: number, options?: ZoomPanOptions): this;
        zoomIn(delta?: number, options?: ZoomOptions): this;
        zoomOut(delta?: number, options?: ZoomOptions): this;
        setZoomAround(position: Point | LatLngExpression, zoom: number, options?: ZoomOptions): this;
        fitBounds(bounds: LatLngBoundsExpression, options?: FitBoundsOptions): this;
        fitWorld(options?: FitBoundsOptions): this;
        panTo(latlng: LatLngExpression, options?: PanOptions): this;
        panBy(offset: PointExpression): this;
        setMaxBounds(bounds: LatLngBoundsExpression): this;
        setMinZoom(zoom: number): this;
        setMaxZoom(zoom: number): this;
        panInsideBounds(bounds: LatLngBoundsExpression, options?: PanOptions): this;
        /**
         * Boolean for animate or advanced ZoomPanOptions
         */
        invalidateSize(options?: boolean | ZoomPanOptions): this;
        stop(): this;
        flyTo(latlng: LatLngExpression, zoom?: number, options?: ZoomPanOptions): this;
        flyToBounds(bounds: LatLngBoundsExpression, options?: FitBoundsOptions): this;

        // Other methods
        addHandler(name: string, HandlerClass: () => Handler): this; // HandlerClass is actually a constructor function, is this the right way?
        remove(): this;
        createPane(name: string, container?: HTMLElement): HTMLElement;
        /**
         * Name of the pane or the pane as HTML-Element
         */
        getPane(pane: string | HTMLElement): HTMLElement | undefined;
        getPanes(): {[name: string]: HTMLElement} & DefaultMapPanes;
        getContainer(): HTMLElement;
        whenReady(fn: () => void, context?: any): this;

        // Methods for getting map state
        getCenter(): LatLng;
        getZoom(): number;
        getBounds(): LatLngBounds;
        getMinZoom(): number;
        getMaxZoom(): number;
        getBoundsZoom(bounds: LatLngBoundsExpression, inside?: boolean): number;
        getSize(): Point;
        getPixelBounds(): Bounds;
        getPixelOrigin(): Point;
        getPixelWorldBounds(zoom?: number): Bounds;

        // Conversion methods
        getZoomScale(toZoom: number, fromZoom: number): number;
        getScaleZoom(scale: number, fromZoom: number): number;
        project(latlng: LatLngExpression, zoom: number): Point;
        unproject(point: PointExpression, zoom: number): LatLng;
        layerPointToLatLng(point: PointExpression): LatLng;
        latLngToLayerPoint(latlng: LatLngExpression): Point;
        wrapLatLng(latlng: LatLngExpression): LatLng;
        wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds;
        distance(latlng1: LatLngExpression, latlng2: LatLngExpression): number;
        containerPointToLayerPoint(point: PointExpression): Point;
        containerPointToLatLng(point: PointExpression): LatLng;
        layerPointToContainerPoint(point: PointExpression): Point;
        latLngToContainerPoint(latlng: LatLngExpression): Point;
        mouseEventToContainerPoint(ev: MouseEvent): Point;
        mouseEventToLayerPoint(ev: MouseEvent): Point;
        mouseEventToLatLng(ev: MouseEvent): LatLng;

        // Geolocation methods
        locate(options?: LocateOptions): this;
        stopLocate(): this;

        // Properties
        boxZoom: Handler;
        doubleClickZoom: Handler;
        dragging: Handler;
        keyboard: Handler;
        scrollWheelZoom: Handler;
        tap?: Handler;
        touchZoom: Handler;

        options: MapOptions;
    }

    /**
     * ID of a HTML-Element as string or the HTML-ELement itself
     */
    function map(element: string | HTMLElement, options?: MapOptions): Map;

    interface BaseIconOptions extends LayerOptions {
        iconUrl?: string;
        iconRetinaUrl?: string;
        iconSize?: PointExpression;
        iconAnchor?: PointExpression;
        popupAnchor?: PointExpression;
        shadowUrl?: string;
        shadowRetinaUrl?: string;
        shadowSize?: PointExpression;
        shadowAnchor?: PointExpression;
        className?: string;
    }

    interface IconOptions extends BaseIconOptions {
        iconUrl: string;
    }

    // This class does not exist in reality, it's just a way to provide
    // options of more specific types in the sub classes
    class BaseIcon extends Layer {
        createIcon(oldIcon?: HTMLElement): HTMLElement;
        createShadow(oldIcon?: HTMLElement): HTMLElement;
        options: BaseIconOptions;
    }

    class Icon extends BaseIcon {
        constructor(options: IconOptions);
        options: IconOptions;
    }

    namespace Icon {
        interface DefaultIconOptions extends BaseIconOptions {
            imagePath?: string;
        }

        class Default extends BaseIcon {
            static imagePath?: string;
            constructor(options?: DefaultIconOptions);
            options: DefaultIconOptions;
        }
    }

    function icon(options: IconOptions): Icon;

    interface DivIconOptions extends BaseIconOptions {
        html?: string | false;
        bgPos?: PointExpression;
        iconSize?: PointExpression;
        iconAnchor?: PointExpression;
        popupAnchor?: PointExpression;
        className?: string;
    }

    class DivIcon extends BaseIcon {
        constructor(options?: DivIconOptions);
        options: DivIconOptions;
    }

    function divIcon(options?: DivIconOptions): DivIcon;

    interface MarkerOptions extends InteractiveLayerOptions {
        icon?: Icon | DivIcon;
        clickable?: boolean;
        draggable?: boolean;
        keyboard?: boolean;
        title?: string;
        alt?: string;
        zIndexOffset?: number;
        opacity?: number;
        riseOnHover?: boolean;
        riseOffset?: number;
    }

    class Marker extends Layer {
        constructor(latlng: LatLngExpression, options?: MarkerOptions);
        getLatLng(): LatLng;
        setLatLng(latlng: LatLngExpression): this;
        setZIndexOffset(offset: number): this;
        setIcon(icon: Icon | DivIcon): this;
        setOpacity(opacity: number): this;
        getElement(): HTMLElement | undefined;

        // Properties
        options: MarkerOptions;
        dragging?: Handler;
    }

    function marker(latlng: LatLngExpression, options?: MarkerOptions): Marker;

    namespace Browser {
        const ie: boolean;
        const ielt9: boolean;
        const edge: boolean;
        const webkit: boolean;
        const gecko: boolean;
        const android: boolean;
        const android23: boolean;
        const chrome: boolean;
        const safari: boolean;
        const win: boolean;
        const ie3d: boolean;
        const webkit3d: boolean;
        const gecko3d: boolean;
        const opera12: boolean;
        const any3d: boolean;
        const mobile: boolean;
        const mobileWebkit: boolean;
        const mobileWebkit3d: boolean;
        const mobileOpera: boolean;
        const mobileGecko: boolean;
        const touch: boolean;
        const msPointer: boolean;
        const pointer: boolean;
        const retina: boolean;
        const canvas: boolean;
        const vml: boolean;
        const svg: boolean;
    }

    namespace Util {
        function extend(dest: any, src?: any): any;
        function create(proto: any, properties?: any): any;
        function bind(fn: () => void, ...obj: any[]): () => void;
        function stamp(obj: any): number;
        function throttle(fn: () => void, time: number, context: any): () => void;
        function wrapNum(num: number, range: number[], includeMax?: boolean): number;
        function falseFn(): false;
        function formatNum(num: number, digits?: number): number;
        function trim(str: string): string;
        function splitWords(str: string): string[];
        function setOptions(obj: any, options: any): any;
        function getParamString(obj: any, existingUrl?: string, uppercase?: boolean): string;
        function template(str: string, data: any): string;
        function isArray(obj: any): boolean;
        function indexOf(array: any[], el: any): number;
        function requestAnimFrame(fn: () => void, context?: any, immediate?: boolean): number;
        function cancelAnimFrame(id: number): void;
        let lastId: number;
        let emptyImageUrl: string;
    }
}

declare module 'leaflet' {
    export = L;
}
