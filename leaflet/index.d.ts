// Type definitions for Leaflet.js 1.0.2
// Project: https://github.com/Leaflet/Leaflet
// Definitions by: Alejandro Sánchez <https://github.com/alejo90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="geojson" />

type NativeMouseEvent = MouseEvent;
type NativeKeyboardEvent = KeyboardEvent;

declare namespace L {
    export class Class {
        static extend(props: any): any/* how to return constructor of self extended type ? */;
        static include(props: any): any /* how to return self extended type ? */;
        static mergeOptions(props: any): any /* how to return self extended type ? */;
        static addInitHook(initHookFn: () => void): any/* how to return self extended type ? */;
    }

    export class Transformation {
        constructor(a: number, b: number, c: number, d: number);

        transform(point: Point, scale?: number): Point;

        untransform(point: Point, scale?: number): Point;
    }

    export namespace LineUtil {
        export function simplify(points: Array<Point>, tolerance: number): Array<Point>;

        export function simplify(points: Array<PointTuple>, tolerance: number): Array<Point>;

        export function pointToSegmentDistance(p: Point, p1: Point, p2: Point): number;

        export function pointToSegmentDistance(p: PointTuple, p1: PointTuple, p2: PointTuple): number;

        export function closestPointOnSegment(p: Point, p1: Point, p2: Point): Point;

        export function closestPointOnSegment(p: PointTuple, p1: PointTuple, p2: PointTuple): Point;
    }

    export namespace PolyUtil {
        export function clipPolygon(points: Array<Point>, bounds: Bounds, round?: boolean): Array<Point>;

        export function clipPolygon(points: Array<PointTuple>, bounds: BoundsLiteral, round?: boolean): Array<Point>;
    }

    export class DomUtil {
        static get(id: string): HTMLElement;
        static get(id: HTMLElement): HTMLElement;
        static getStyle(el: HTMLElement, styleAttrib: string): string;
        static create(tagName: String, className?: String, container?: HTMLElement): HTMLElement;
        static remove(el: HTMLElement):void;
        static empty(el: HTMLElement):void;
        static toFront(el: HTMLElement):void;
        static toBack(el: HTMLElement):void;
        static hasClass(el: HTMLElement, name: String): Boolean;
        static addClass(el: HTMLElement, name: String):void;
        static removeClass(el: HTMLElement, name: String):void;
        static setClass(el: HTMLElement, name: String):void;
        static getClass(el: HTMLElement): String;
        static setOpacity(el: HTMLElement, opacity: Number):void;
        static testProp(props: String[]): String|boolean/*=false*/;
        static setTransform(el: HTMLElement, offset: Point, scale?: Number):void;
        static setPosition(el: HTMLElement, position: Point):void;
        static getPosition(el: HTMLElement): Point;
        static disableTextSelection(): void;
        static enableTextSelection(): void;
        static disableImageDrag(): void;
        static enableImageDrag(): void;
        static preventOutline(el: HTMLElement): void;
        static restoreOutline(): void;
    }

    export interface CRS {
        latLngToPoint(latlng: LatLngExpression, zoom: number): Point;
        pointToLatLng(point: PointExpression, zoom: number): LatLng;
        project(latlng: LatLngExpression): Point;
        unproject(point: PointExpression): LatLng;
        scale(zoom: number): number;
        zoom(scale: number): number;
        getProjectedBounds(zoom: number): Bounds;
        distance(latlng1: LatLngExpression, latlng2: LatLngExpression): number;
        wrapLatLng(latlng: LatLngExpression): LatLng;

        code: string;
        wrapLng: [number, number];
        wrapLat: [number, number];
        infinite: boolean;
    }

    export namespace CRS {
        export const EPSG3395: CRS;
        export const EPSG3857: CRS;
        export const EPSG4326: CRS;
        export const Earth: CRS;
        export const Simple: CRS;
    }

    export interface Projection {
        project(latlng: LatLngExpression): Point;
        unproject(point: PointExpression): LatLng;

        bounds: LatLngBounds;
    }

    export namespace Projection {
        export const LonLat: Projection;
        export const Mercator: Projection;
        export const SphericalMercator: Projection;
    }

    export interface LatLng {
        equals(otherLatLng: LatLngExpression, maxMargin?: number): boolean;
        toString(): string;
        distanceTo(otherLatLng: LatLngExpression): number;
        wrap(): LatLng;
        toBounds(sizeInMeters: number): LatLngBounds;

        lat: number;
        lng: number;
        alt: number;
    }

    export interface LatLngLiteral {
        lat: number;
        lng: number;
    }

    export type LatLngTuple = [number, number];

    type LatLngExpression = LatLng | LatLngLiteral | LatLngTuple;

    export function latLng(latitude: number, longitude: number, altitude?: number): LatLng;

    export function latLng(coords: LatLngTuple): LatLng;

    export function latLng(coords: [number, number, number]): LatLng;

    export function latLng(coords: LatLngLiteral): LatLng;

    export function latLng(coords: {lat: number, lng: number, alt: number}): LatLng;

    export interface LatLngBounds {
        extend(latlng: LatLngExpression): this;
        extend(otherBounds: LatLngBoundsExpression): this;
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
        contains(otherBounds: LatLngBoundsExpression): boolean;
        contains(latlng: LatLngExpression): boolean;
        intersects(otherBounds: LatLngBoundsExpression): boolean;
        overlaps(otherBounds: BoundsExpression): boolean; // investigate if this is really bounds and not latlngbounds
        toBBoxString(): string;
        equals(otherBounds: LatLngBoundsExpression): boolean;
        isValid(): boolean;
    }

    export type LatLngBoundsLiteral = Array<LatLngTuple>;

    type LatLngBoundsExpression = LatLngBounds | LatLngBoundsLiteral;

    export function latLngBounds(southWest: LatLngExpression, northEast: LatLngExpression): LatLngBounds;

    export function latLngBounds(latlngs: LatLngBoundsLiteral): LatLngBounds;

    export type PointTuple = [number, number];

    export interface Point {
        clone(): Point;
        add(otherPoint: PointExpression): Point; // investigate if this mutates or returns a new instance
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
    }

    type PointExpression = Point | PointTuple;

    export function point(x: number, y: number, round?: boolean): Point;

    export function point(coords: PointTuple): Point;

    export function point(coords: {x: number, y: number}): Point;

    export type BoundsLiteral = Array<PointTuple>;

    export interface Bounds {
        extend(point: PointExpression): this;
        getCenter(round?: boolean): Point;
        getBottomLeft(): Point;
        getTopRight(): Point;
        getSize(): Point;
        contains(otherBounds: BoundsExpression): boolean;
        contains(point: PointExpression): boolean;
        intersects(otherBounds: BoundsExpression): boolean;
        overlaps(otherBounds: BoundsExpression): boolean;

        min: Point;
        max: Point;
    }

    type BoundsExpression = Bounds | BoundsLiteral;

    export function bounds(topLeft: PointExpression, bottomRight: PointExpression): Bounds;

    export function bounds(points: Array<Point>): Bounds;

    export function bounds(points: BoundsLiteral): Bounds;

    export type EventHandlerFn = (event: Event) => void;

    export type EventHandlerFnMap = {[type: string]: EventHandlerFn};

    /**
     * A set of methods shared between event-powered classes (like Map and Marker).
     * Generally, events allow you to execute some function when something happens
     * with an object (e.g. the user clicks on the map, causing the map to fire
     * 'click' event).
     */
    export abstract class Evented extends Class {
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
    export class Draggable extends Evented {
        constructor(element: HTMLElement, dragStartTarget?: HTMLElement, preventOutline?: boolean);

        enable(): void;

        disable(): void;

        finishDrag(): void;
    }

    interface LayerOptions {
        pane?: string;
    }

    interface InteractiveLayerOptions extends LayerOptions {
        interactive?: boolean;
    }

    export class Layer extends Evented {
        constructor(options?: LayerOptions);
        addTo(map: Map): this;
        remove(): this;
        removeFrom(map: Map): this;
        getPane(name?: string): HTMLElement;

        // Popup methods
        bindPopup(content: string, options?: PopupOptions): this;
        bindPopup(content: HTMLElement, options?: PopupOptions): this;
        bindPopup(content: (layer: Layer) => Content, options?: PopupOptions): this;
        bindPopup(content: Popup): this;
        unbindPopup(): this;
        openPopup(): this;
        openPopup(latlng: LatLngExpression): this;
        closePopup(): this;
        togglePopup(): this;
        isPopupOpen(): boolean;
        setPopupContent(content: string): this;
        setPopupContent(content: HTMLElement): this;
        setPopupContent(content: Popup): this;
        getPopup(): Popup;

        // Tooltip methods
        bindTooltip(content: string, options?: TooltipOptions): this;
        bindTooltip(content: HTMLElement, options?: TooltipOptions): this;
        bindTooltip(content: (layer: Layer) => Content, options?: TooltipOptions): this;
        bindTooltip(content: Tooltip, options?: TooltipOptions): this;
        unbindTooltip(): this;
        openTooltip(): this;
        openTooltip(latlng: LatLngExpression): this;
        closeTooltip(): this;
        toggleTooltip(): this;
        isTooltipOpen(): boolean;
        setTooltipContent(content: string): this;
        setTooltipContent(content: HTMLElement): this;
        setTooltipContent(content: Tooltip): this;
        getTooltip(): Tooltip;

        // Extension methods
        onAdd(map: Map): this;
        onRemove(map: Map): this;
        getEvents(): {[name: string]: (event: Event) => void};
        getAttribution(): string;
        beforeAdd(map: Map): this;
    }

    export interface GridLayerOptions {
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

    export interface GridLayer extends Layer {
        bringToFront(): this;
        bringToBack(): this;
        getAttribution(): string;
        getContainer(): HTMLElement;
        setOpacity(opacity: number): this;
        setZIndex(zIndex: number): this;
        isLoading(): boolean;
        redraw(): this;
        getTileSize(): Point;
    }

    export function gridLayer(options?: GridLayerOptions): GridLayer;

    export interface TileLayerOptions extends GridLayerOptions {
        minZoom?: number;
        maxZoom?: number;
        maxNativeZoom?: number;
        subdomains?: string | Array<string>;
        errorTileUrl?: string;
        zoomOffset?: number;
        tms?: boolean;
        zoomReverse?: boolean;
        detectRetina?: boolean;
        crossOrigin?: boolean;
        [name: string]: any;
    }

    export interface TileLayer extends GridLayer {
        setUrl(url: string, noRedraw?: boolean): this;
    }

    export function tileLayer(urlTemplate: string, options?: TileLayerOptions): TileLayer;

    export interface WMSOptions extends TileLayerOptions {
        layers: string;
        styles?: string;
        format?: string;
        transparent?: boolean;
        version?: string;
        crs?: CRS;
        uppercase?: boolean;
    }

    export interface WMS extends TileLayer {
        setParams(params: any, noRedraw?: boolean): this;
    }

    export namespace tileLayer {
        export function wms(baseUrl: string, options?: WMSOptions): WMS;
    }

    export interface ImageOverlayOptions extends LayerOptions {
        opacity?: number;
        alt?: string;
        interactive?: boolean;
        attribution?: string;
        crossOrigin?: boolean;
    }

    export interface ImageOverlay extends Layer {
        setOpacity(opacity: number): this;
        bringToFront(): this;
        bringToBack(): this;
        setUrl(url: string): this;

        /** Update the bounds that this ImageOverlay covers */
        setBounds(bounds: LatLngBounds): this;

        /** Get the bounds that this ImageOverlay covers */
        getBounds(): LatLngBounds;

        /** Get the img element that represents the ImageOverlay on the map */
        getElement(): HTMLImageElement;
    }

    export function imageOverlay(imageUrl: string, bounds: LatLngBoundsExpression, options?: ImageOverlayOptions): ImageOverlay;

    export type LineCapShape = 'butt' | 'round' | 'square' | 'inherit';

    export type LineJoinShape = 'miter' | 'round' | 'bevel' | 'inherit';

    export type FillRule = 'nonzero' | 'evenodd' | 'inherit';

    export interface PathOptions extends InteractiveLayerOptions {
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

    export interface Path extends Layer {
        redraw(): this;
        setStyle(style: PathOptions): this;
        bringToFront(): this;
        bringToBack(): this;
    }

    export interface PolylineOptions extends PathOptions {
        smoothFactor?: number;
        noClip?: boolean;
    }

    interface InternalPolyline extends Path {
        getLatLngs(): Array<LatLng>;
        setLatLngs(latlngs: Array<LatLngExpression>): this;
        isEmpty(): boolean;
        getCenter(): LatLng;
        getBounds(): LatLngBounds;
        addLatLng(latlng: LatLngExpression): this;
        addLatLng(latlng: Array<LatLngExpression>): this; // these three overloads aren't explicitly noted in the docs
    }

    export interface Polyline extends InternalPolyline {
        toGeoJSON(): GeoJSON.LineString | GeoJSON.MultiLineString;
    }

    export function polyline(latlngs: Array<LatLngExpression>, options?: PolylineOptions): Polyline;
    export function polyline(latlngs: Array<Array<LatLngExpression>>, options?: PolylineOptions): Polyline;

    export interface Polygon extends InternalPolyline {
        toGeoJSON(): GeoJSON.Polygon | GeoJSON.MultiPolygon;
    }

    export function polygon(latlngs: Array<LatLngExpression>, options?: PolylineOptions): Polygon;

    export function polygon(latlngs: Array<Array<LatLngExpression>>, options?: PolylineOptions): Polygon;

    export interface Rectangle extends Polygon {
        setBounds(latLngBounds: LatLngBoundsExpression): this;
    }

    export function rectangle(latLngBounds: LatLngBoundsExpression, options?: PolylineOptions): Rectangle;

    export interface CircleMarkerOptions extends PathOptions {
        radius?: number;
    }

    export interface CircleMarker extends Path {
        toGeoJSON(): GeoJSON.Point;
        setLatLng(latLng: LatLngExpression): this;
        getLatLng(): LatLng;
        setRadius(radius: number): this;
        getRadius(): number;
    }

    export function circleMarker(latlng: LatLngExpression, options?: CircleMarkerOptions): CircleMarker;

    export interface CircleOptions extends PathOptions {
        radius?: number;
    }

    export interface Circle extends CircleMarker {
        setRadius(radius: number): this;
        getRadius(): number;
        getBounds(): LatLngBounds;
    }

    export function circle(latlng: LatLngExpression, options?: CircleOptions): Circle;
    export function circle(latlng: LatLngExpression, radius: number, options?: CircleOptions): Circle;

    export interface RendererOptions extends LayerOptions {
        padding?: number;
    }

    export interface Renderer extends Layer {}

    export interface SVG extends Renderer {}

    export namespace SVG {
        export function create(name: string): SVGElement;

        export function pointsToPath(rings: Array<Point>, close: boolean): string;

        export function pointsToPath(rings: Array<PointTuple>, close: boolean): string;
    }

    export function svg(options?: RendererOptions): SVG;

    export interface Canvas extends Renderer {}

    export function canvas(options?: RendererOptions): Canvas;

    /**
     * Used to group several layers and handle them as one.
     * If you add it to the map, any layers added or removed from the group will be
     * added/removed on the map as well. Extends Layer.
     */
    export interface LayerGroup extends Layer {
        /**
         * Returns a GeoJSON representation of the layer group (as a GeoJSON GeometryCollection).
         */
        toGeoJSON(): GeoJSON.GeometryCollection;

        /**
         * Adds the given layer to the group.
         */
        addLayer(layer: Layer): this;

        /**
         * Removes the given layer from the group.
         */
        removeLayer(layer: Layer): this;

        /**
         * Removes the layer with the given internal ID from the group.
         */
        removeLayer(id: number): this;

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
        invoke(methodName: string, ...params: Array<any>): this;

        /**
         * Iterates over the layers of the group,
         * optionally specifying context of the iterator function.
         */
        eachLayer(fn: (layer: Layer) => void, context?: any): this;

        /**
         * Returns the layer with the given internal ID.
         */
        getLayer(id: number): Layer;

        /**
         * Returns an array of all the layers added to the group.
         */
        getLayers(): Array<Layer>;

        /**
         * Calls setZIndex on every layer contained in this group, passing the z-index.
         */
        setZIndex(zIndex: number): this;

        /**
         * Returns the internal ID for a layer
         */
        getLayerId(layer: Layer): number;
    }

    /**
     * Create a layer group, optionally given an initial set of layers.
     */
    export function layerGroup(layers: Array<Layer>): LayerGroup;

    /**
     * Extended LayerGroup that also has mouse events (propagated from
     * members of the group) and a shared bindPopup method.
     */
    export interface FeatureGroup extends LayerGroup {
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
    export function featureGroup(layers?: Array<Layer>): FeatureGroup;

    type StyleFunction = (feature: GeoJSON.Feature<GeoJSON.GeometryObject>) => PathOptions;

    export interface GeoJSONOptions extends LayerOptions {
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
        pointToLayer?: (geoJsonPoint: GeoJSON.Feature<GeoJSON.Point>, latlng: LatLng) => Layer; // should import GeoJSON typings

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
        onEachFeature?: (feature: GeoJSON.Feature<GeoJSON.GeometryObject>, layer: Layer) => void;

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
        filter?: (geoJsonFeature: GeoJSON.Feature<GeoJSON.GeometryObject>) => boolean;

        /**
         * A Function that will be used for converting GeoJSON coordinates to LatLngs.
         * The default is the coordsToLatLng static method.
         */
        coordsToLatLng?: (coords: [number, number] | [number, number, number]) => LatLng; // check if LatLng has an altitude property
    }

    export class GeoJSON {
        /**
         * Creates a Layer from a given GeoJSON feature. Can use a custom pointToLayer
         * and/or coordsToLatLng functions if provided as options.
         */
        static geometryToLayer(featureData: GeoJSON.Feature<GeoJSON.GeometryObject>, options?: GeoJSONOptions): Layer;

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
        static latLngToCoords(latlng: LatLng): [number, number, number]; // A three tuple can be assigned to a two or three tuple


        /**
         * Reverse of coordsToLatLngs closed determines whether the first point should be
         * appended to the end of the array to close the feature, only used when levelsDeep is 0.
         * False by default.
         */
        static latLngsToCoords(latlngs: any[], levelsDeep?: number, closed?: boolean): any[];  // Using any[] to avoid artificially limiting valid calls

        /**
         * Normalize GeoJSON geometries/features into GeoJSON features.
         */
        static asFeature(geojson: GeoJSON.GeometryObject): GeoJSON.Feature<GeoJSON.GeometryObject>;

        static asFeature(geojson: GeoJSON.Feature<GeoJSON.GeometryObject>): GeoJSON.Feature<GeoJSON.GeometryObject>;

    }

    /**
     * Represents a GeoJSON object or an array of GeoJSON objects.
     * Allows you to parse GeoJSON data and display it on the map. Extends FeatureGroup.
     */
    export interface GeoJSON extends FeatureGroup {
        /**
         * Adds a GeoJSON object to the layer.
         */
        addData(data: GeoJSON.GeoJsonObject): Layer;

        /**
         * Resets the given vector layer's style to the original GeoJSON style,
         * useful for resetting style after hover events.
         */
        resetStyle(layer: Layer): Layer;

        /**
         * Changes styles of GeoJSON vector layers with the given style function.
         */
        setStyle(style: StyleFunction): this;

    }

    /**
     * Creates a GeoJSON layer.
     *
     * Optionally accepts an object in GeoJSON format to display on the
     * map (you can alternatively add it later with addData method) and
     * an options object.
     */
    export function geoJSON(geojson?: GeoJSON.GeoJsonObject, options?: GeoJSONOptions): GeoJSON;

    type Zoom = boolean | 'center';

    export interface MapOptions {
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
        layers?: Array<Layer>;
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

    export type ControlPosition = 'topleft' | 'topright' | 'bottomleft' | 'bottomright';

    export interface ControlOptions {
        position?: ControlPosition;
    }

    export interface Control {
        getPosition(): ControlPosition;
        setPosition(position: ControlPosition): this;
        getContainer(): HTMLElement;
        addTo(map: Map): this;
        remove(): this;

        // Extension methods
        onAdd(map: Map): HTMLElement;
        onRemove(map: Map): void;
    }

    export namespace Control {
        export interface ZoomOptions extends ControlOptions {
            zoomInText?: string;
            zoomInTitle?: string;
            zoomOutText?: string;
            zoomOutTitle?: string;
        }

        export interface Zoom extends Control {}

        export interface AttributionOptions extends ControlOptions {
            prefix?: string | boolean;
        }

        export interface Attribution extends Control {
            setPrefix(prefix: string): this;
            addAttribution(text: string): this;
            removeAttribution(text: string): this;
        }

        export interface LayersOptions extends ControlOptions {
            collapsed?: boolean;
            autoZIndex?: boolean;
            hideSingleBase?: boolean;
        }

        export interface Layers extends Control {
            addBaseLayer(layer: Layer, name: string): this;
            addOverlay(layer: Layer, name: string): this;
            removeLayer(layer: Layer): this;
            expand(): this;
            collapse(): this;
        }

        export interface ScaleOptions extends ControlOptions {
            maxWidth?: number;
            metric?: boolean;
            imperial?: boolean;
            updateWhenIdle?: boolean;
        }

        export interface Scale extends Control {}
    }

    export namespace control {
        export function zoom(options: Control.ZoomOptions): Control.Zoom;

        export function attribution(options: Control.AttributionOptions): Control.Attribution;

        type LayersObject = {[name: string]: Layer};

        export function layers(baseLayers?: LayersObject, overlays?: LayersObject, options?: Control.LayersOptions): Control.Layers;

        export function scale(options?: Control.ScaleOptions): Control.Scale;
    }

    interface DivOverlayOptions {
        offset?: PointExpression;
        zoomAnimation?: boolean;
        className?: string;
        pane?: string;
    }

    export interface PopupOptions extends DivOverlayOptions {
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

    export interface Popup extends Layer {
        getLatLng(): LatLng;
        setLatLng(latlng: LatLngExpression): this;
        getContent(): Content;
        setContent(htmlContent: string): this;
        setContent(htmlContent: HTMLElement): this;
        setContent(htmlContent: (source: Layer) => Content): this;
        getElement(): Content;
        update(): void;
        isOpen(): boolean;
        bringToFront(): this;
        bringToBack(): this;
        openOn(map: Map): this;
    }

    export function popup(options?: PopupOptions, source?: Layer): Popup;

    export type Direction = 'right' | 'left' | 'top' | 'bottom' | 'center' | 'auto';

    export interface TooltipOptions extends DivOverlayOptions {
        pane?: string;
        offset?: PointExpression;
        direction?: Direction;
        permanent?: boolean;
        sticky?: boolean;
        interactive?: boolean;
        opacity?: number;
    }

    export interface Tooltip extends Layer {}

    export function tooltip(options?: TooltipOptions, source?: Layer): Tooltip;

    export interface ZoomOptions {
        animate?: boolean;
    }

    export interface PanOptions {
        animate?: boolean;
        duration?: number;
        easeLinearity?: number;
        noMoveStart?: boolean;
    }

    export interface ZoomPanOptions extends ZoomOptions, PanOptions {}

    export interface FitBoundsOptions extends ZoomOptions, PanOptions {
        paddingTopLeft?: PointExpression;
        paddingBottomRight?: PointExpression;
        padding?: PointExpression;
        maxZoom?: number;
    }

    export interface LocateOptions {
        watch?: boolean;
        setView?: boolean;
        maxZoom?: number;
        timeout?: number;
        maximumAge?: number;
        enableHighAccuracy?: boolean;
    }

    export interface Handler {
        enable(): this;
        disable(): this;
        enabled(): boolean;

        // Extension methods
        addHooks(): void;
        removeHooks(): void;
    }

    export interface Event {
        type: string;
        target: any;
    }

    export interface MouseEvent extends Event {
        latlng: LatLng;
        layerPoint: Point;
        containerPoint: Point;
        originalEvent: NativeMouseEvent;
    }

    export interface KeyboardEvent extends Event {
        originalEvent: NativeKeyboardEvent;
    }

    export interface LocationEvent extends Event {
        latlng: LatLng;
        bounds: LatLngBounds;
        accuracy: number;
        altitude: number;
        altitudeAccuracy: number;
        heading: number;
        speed: number;
        timestamp: number;
    }

    export interface ErrorEvent extends Event {
        message: string;
        code: number;
    }

    export interface LayerEvent extends Event {
        layer: Layer;
    }

    export interface LayersControlEvent extends LayerEvent {
        name: string;
    }

    export interface TileEvent extends Event {
        tile: HTMLImageElement;
        coords: Point; // apparently not a normal point, since docs say it has z (zoom)
    }

    export interface TileErrorEvent extends TileEvent {
        error: Error;
    }

    export interface ResizeEvent extends Event {
        oldSize: Point;
        newSize: Point;
    }

    export interface GeoJSONEvent extends Event {
        layer: Layer;
        properties: any;
        geometryType: string;
        id: string;
    }

    export interface PopupEvent extends Event {
        popup: Popup;
    }

    export interface TooltipEvent extends Event {
        tooltip: Tooltip;
    }

    export interface DragEndEvent extends Event {
        distance: number;
    }

    export interface ZoomAnimEvent extends Event {
        center: LatLng;
        zoom: number;
        noUpdate: boolean;
    }

    export namespace DomEvent {
        export function on(el: HTMLElement, types: string, fn: (ev: Event) => any, context?: any): typeof DomEvent;

        export function on(el: HTMLElement, eventMap: {[eventName: string]: Function}, context?: any): typeof DomEvent;

        export function off(el: HTMLElement, types: string, fn: (ev: Event) => any, context?: any): typeof DomEvent;

        export function off(el: HTMLElement, eventMap: {[eventName: string]: Function}, context?: any): typeof DomEvent;

        export function stopPropagation(ev: Event): typeof DomEvent;

        export function disableScrollPropagation(el: HTMLElement): typeof DomEvent;

        export function disableClickPropagation(el: HTMLElement): typeof DomEvent;

        export function preventDefault(ev: Event): typeof DomEvent;

        export function stop(ev: Event): typeof DomEvent;

        export function getMousePosition(ev: Event, container?: HTMLElement): Point;

        export function getWheelDelta(ev: Event): number;

        export function addListener(el: HTMLElement, types: string, fn: (ev: Event) => any, context?: any): typeof DomEvent;

        export function addListener(el: HTMLElement, eventMap: {[eventName: string]: Function}, context?: any): typeof DomEvent;

        export function removeListener(el: HTMLElement, types: string, fn: (ev: Event) => any, context?: any): typeof DomEvent;

        export function removeListener(el: HTMLElement, eventMap: {[eventName: string]: Function}, context?: any): typeof DomEvent;
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

    export interface Map extends Evented {
        getRenderer(layer: Path): Renderer;

        // Methods for layers and controls
        addControl(control: Control): this;
        removeControl(control: Control): this;
        addLayer(layer: Layer): this;
        removeLayer(layer: Layer): this;
        hasLayer(layer: Layer): boolean;
        eachLayer(fn: (layer: Layer) => void, context?: any): this;
        openPopup(popup: Popup): this;
        openPopup(content: string, latlng: LatLngExpression, options?: PopupOptions): this;
        openPopup(content: HTMLElement, latlng: LatLngExpression, options?: PopupOptions): this;
        closePopup(popup?: Popup): this;
        openTooltip(tooltip: Tooltip): this;
        openTooltip(content: string, latlng: LatLngExpression, options?: TooltipOptions): this;
        openTooltip(content: HTMLElement, latlng: LatLngExpression, options?: TooltipOptions): this;
        closeTooltip(tooltip?: Tooltip): this;

        // Methods for modifying map state
        setView(center: LatLngExpression, zoom: number, options?: ZoomPanOptions): this;
        setZoom(zoom: number, options?: ZoomPanOptions): this;
        zoomIn(delta?: number, options?: ZoomOptions): this;
        zoomOut(delta?: number, options?: ZoomOptions): this;
        setZoomAround(latlng: LatLngExpression, zoom: number, options?: ZoomOptions): this;
        setZoomAround(offset: Point, zoom: number, options?: ZoomOptions): this;
        fitBounds(bounds: LatLngBoundsExpression, options?: FitBoundsOptions): this;
        fitWorld(options?: FitBoundsOptions): this;
        panTo(latlng: LatLngExpression, options?: PanOptions): this;
        panBy(offset: PointExpression): this;
        setMaxBounds(bounds: LatLngBoundsExpression): this;
        setMinZoom(zoom: number): this;
        setMaxZoom(zoom: number): this;
        panInsideBounds(bounds: LatLngBoundsExpression, options?: PanOptions): this;
        invalidateSize(options: ZoomPanOptions): this;
        invalidateSize(animate: boolean): this;
        stop(): this;
        flyTo(latlng: LatLngExpression, zoom?: number, options?: ZoomPanOptions): this;
        flyToBounds(bounds: LatLngBoundsExpression, options?: FitBoundsOptions): this;

        // Other methods
        addHandler(name: string, HandlerClass: () => Handler): this; // HandlerClass is actually a constructor function, is this the right way?
        remove(): this;
        createPane(name: string, container?: HTMLElement): HTMLElement;
        getPane(pane: string): HTMLElement;
        getPane(pane: HTMLElement): HTMLElement;
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
        distance(latlng1: LatLngExpression, latlng2: LatLngExpression): number;
        containerPointToLayerPoint(point: PointExpression): Point;
        layerPointToContainerPoint(point: PointExpression): Point;
        layerPointToContainerPoint(point: PointTuple): Point;
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
        tap: Handler;
        touchZoom: Handler;
    }

    export function map(id: string, options?: MapOptions): Map;

    export function map(el: HTMLElement, options?: MapOptions): Map;

    export interface IconOptions extends LayerOptions {
        iconUrl: string;
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

    export interface Icon extends Layer {
        createIcon(oldIcon?: HTMLElement): HTMLElement;
        createShadow(oldIcon?: HTMLElement): HTMLElement;
    }

    export interface IconDefault extends Icon {
        imagePath: string;
    }

    export class Icon {
        constructor(options: IconOptions);
    }

    export namespace Icon {
        export class Default extends Icon {
            constructor(options?: IconOptions);
            imagePath: string;
        }
    }

    export function icon(options: IconOptions): Icon;

    export interface DivIconOptions extends LayerOptions {
        html?: string;
        bgPos?: PointExpression;
        iconSize?: PointExpression;
        iconAnchor?: PointExpression;
        popupAnchor?: PointExpression;
        className?: string;
    }

    export class DivIcon extends Icon {
        constructor(options?: DivIconOptions);
    }

    export function divIcon(options?: DivIconOptions): DivIcon;

    export interface MarkerOptions extends InteractiveLayerOptions {
        icon?: Icon;
        draggable?: boolean;
        keyboard?: boolean;
        title?: string;
        alt?: string;
        zIndexOffset?: number;
        opacity?: number;
        riseOnHover?: boolean;
        riseOffset?: number;
    }

    export class Marker extends Layer {
        constructor(latlng: LatLngExpression, options?: MarkerOptions);
        getLatLng(): LatLng;
        setLatLng(latlng: LatLngExpression): this;
        setZIndexOffset(offset: number): this;
        setIcon(icon: Icon): this;
        setOpacity(opacity: number): this;
        getElement(): Element;

        // Properties
        dragging: Handler;
    }

    export function marker(latlng: LatLngExpression, options?: MarkerOptions): Marker;

    export namespace Browser {
        export const ie: boolean;
        export const ielt9: boolean;
        export const edge: boolean;
        export const webkit: boolean;
        export const gecko: boolean;
        export const android: boolean;
        export const android23: boolean;
        export const chrome: boolean;
        export const safari: boolean;
        export const win: boolean;
        export const ie3d: boolean;
        export const webkit3d: boolean;
        export const gecko3d: boolean;
        export const opera12: boolean;
        export const any3d: boolean;
        export const mobile: boolean;
        export const mobileWebkit: boolean;
        export const mobiWebkit3d: boolean;
        export const mobileOpera: boolean;
        export const mobileGecko: boolean;
        export const touch: boolean;
        export const msPointer: boolean;
        export const pointer: boolean;
        export const retina: boolean;
        export const canvas: boolean;
        export const vml: boolean;
        export const svg: boolean;
    }
}

declare module 'leaflet' {
    export = L;
}
