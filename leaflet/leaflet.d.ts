// Type definitions for Leaflet.js 1.0.0
// Project: https://github.com/Leaflet/Leaflet
// Definitions by: Alejandro Sánchez <https://github.com/alejo90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../geojson/geojson.d.ts" />

type NativeMouseEvent = MouseEvent;

declare namespace L {
    export class Class {
        static extend(props:any):any/* how to return constructor of self extended type ? */;
        static include(props:any):any /* how to return self extended type ? */;
        static mergeOptions(props:any): any /* how to return self extended type ? */;
        static addInitHook(initHookFn: ()=> void): any/* how to return self extended type ? */;
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
        static getPosition(el: HTMLElement): Point
        static disableTextSelection(): void
        static enableTextSelection(): void
        static disableImageDrag(): void
        static enableImageDrag(): void
        static preventOutline(el: HTMLElement): void
        static restoreOutline(): void
    }

    export interface CRS {
        latLngToPoint(latlng: LatLng, zoom: number): Point;
        latLngToPoint(latlng: LatLngLiteral, zoom: number): Point;
        latLngToPoint(latlng: LatLngTuple, zoom: number): Point;
        pointToLatLng(point: Point): LatLng;
        pointToLatLng(point: PointTuple): LatLng;
        project(latlng: LatLng): Point;
        project(latlng: LatLngLiteral): Point;
        project(latlng: LatLngTuple): Point;
        unproject(point: Point): LatLng;
        unproject(point: PointTuple): LatLng;
        scale(zoom: number): number;
        zoom(scale: number): number;
        getProjectedBounds(zoom: number): Bounds;
        distance(latlng1: LatLng, latlng2: LatLng): number;
        distance(latlng1: LatLngLiteral, latlng2: LatLngLiteral): number;
        distance(latlng1: LatLngTuple, latlng2: LatLngTuple): number;
        wrapLatLng(latlng: LatLng): LatLng;
        wrapLatLng(latlng: LatLngLiteral): LatLng;
        wrapLatLng(latlng: LatLngTuple): LatLng;

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
        project(latlng: LatLng): Point;
        project(latlng: LatLngLiteral): Point;
        project(latlng: LatLngTuple): Point;
        unproject(point: Point): LatLng;
        unproject(point: PointTuple): LatLng;

        bounds: LatLngBounds;
    }

    export namespace Projection {
        export const LonLat: Projection;
        export const Mercator: Projection;
        export const SphericalMercator: Projection;
    }

    export interface LatLng {
        equals(otherLatLng: LatLng, maxMargin?: number): boolean;
        equals(otherLatLng: LatLngLiteral, maxMargin?: number): boolean;
        equals(otherLatLng: LatLngTuple, maxMargin?: number): boolean;
        toString(): string;
        distanceTo(otherLatLng: LatLng): number;
        distanceTo(otherLatLng: LatLngLiteral): number;
        distanceTo(otherLatLng: LatLngTuple): number;
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
        extend(latlng: LatLng): this;
        extend(latlng: LatLngLiteral): this;
        extend(latlng: LatLngTuple): this;
        extend(otherBounds: LatLngBounds): this;
        extend(otherBounds: LatLngBoundsLiteral): this;
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
        contains(otherBounds: LatLngBounds): boolean;
        contains(otherBounds: LatLngBoundsLiteral): boolean;
        contains(latlng: LatLng): boolean;
        contains(latlng: LatLngLiteral): boolean;
        contains(latlng: LatLngTuple): boolean;
        intersects(otherBounds: LatLngBounds): boolean;
        intersects(otherBounds: LatLngLiteral): boolean;
        overlaps(otherBounds: Bounds): boolean; // investigate if this is really bounds and not latlngbounds
        overlaps(otherBounds: BoundsLiteral): boolean;
        toBBoxString(): string;
        equals(otherBounds: LatLngBounds): boolean;
        equals(otherBounds: LatLngBoundsLiteral): boolean;
        isValid(): boolean;
    }

    export type LatLngBoundsLiteral = Array<LatLngTuple>;

    type LatLngBoundsExpression = LatLngBounds | LatLngBoundsLiteral;

    export function latLngBounds(southWest: LatLng, northEast: LatLng): LatLngBounds;

    export function latLngBounds(southWest: LatLngLiteral, northEast: LatLngLiteral): LatLngBounds;

    export function latLngBounds(southWest: LatLngTuple, northEast: LatLngTuple): LatLngBounds;

    export function latLngBounds(latlngs: LatLngBoundsLiteral): LatLngBounds;

    export type PointTuple = [number, number];

    export interface Point {
        clone(): Point;
        add(otherPoint: Point): Point; // investigate if this mutates or returns a new instance
        add(otherPoint: PointTuple): Point;
        subtract(otherPoint: Point): Point;
        subtract(otherPoint: PointTuple): Point;
        divideBy(num: number): Point;
        multiplyBy(num: number): Point;
        scaleBy(scale: Point): Point;
        scaleBy(scale: PointTuple): Point;
        unscaleBy(scale: Point): Point;
        unscaleBy(scale: PointTuple): Point;
        round(): Point;
        floor(): Point;
        ceil(): Point;
        distanceTo(otherPoint: Point): Point;
        distanceTo(otherPoint: PointTuple): Point;
        equals(otherPoint: Point): boolean;
        equals(otherPoint: PointTuple): boolean;
        contains(otherPoint: Point): boolean;
        contains(otherPoint: PointTuple): boolean;
        toString(): string;
    }

    type PointExpression = Point | PointTuple;

    export function point(x: number, y: number, round?: boolean): Point;

    export function point(coords: PointTuple): Point;

    export function point(coords: {x: number, y: number}): Point;

    export type BoundsLiteral = Array<PointTuple>;

    export interface Bounds {
        extend(point: Point): this;
        extend(point: PointTuple): this;
        getCenter(round?: boolean): Point;
        getBottomLeft(): Point;
        getTopRight(): Point;
        getSize(): Point;
        contains(otherBounds: Bounds): boolean;
        contains(otherBounds: BoundsLiteral): boolean;
        contains(point: Point): boolean;
        contains(point: PointTuple): boolean;
        intersects(otherBounds: Bounds): boolean;
        intersects(otherBounds: BoundsLiteral): boolean;
        overlaps(otherBounds: Bounds): boolean;
        overlaps(otherBounds: BoundsLiteral): boolean;

        min: Point;
        max: Point;
    }

    type BoundsExpression = Bounds | BoundsLiteral;

    export function bounds(topLeft: Point, bottomRight: Point): Bounds;

    export function bounds(topLeft: PointTuple, bottomRight: PointTuple): Bounds;

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
    export interface Evented extends Class {
        /**
         * Adds a listener function (fn) to a particular event type of the object.
         * You can optionally specify the context of the listener (object the this
         * keyword will point to). You can also pass several space-separated types
         * (e.g. 'click dblclick').
         */
        on(type: string, fn: EventHandlerFn, context?: Object): this;

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
        off(type: string, fn?: EventHandlerFn, context?: Object): this;

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
        fire(type: string, data?: Object, propagate?: boolean): this;

        /**
         * Returns true if a particular event type has any listeners attached to it.
         */
        listens(type: string): boolean;

        /**
         * Behaves as on(...), except the listener will only get fired once and then removed.
         */
        once(type: string, fn: EventHandlerFn, context?: Object): this;

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
        addEventListener(type: string, fn: EventHandlerFn, context?: Object): this;

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
        removeEventListener(type: string, fn: EventHandlerFn, context?: Object): this;

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
        addOneTimeEventListener(type: string, fn: EventHandlerFn, context?: Object): this;

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
        fireEvent(type: string, data?: Object, propagate?: boolean): this;

        /**
         * Alias for listens(...)
         *
         * Returns true if a particular event type has any listeners attached to it.
         */
        hasEventListeners(type: string): boolean;
    }

    interface LayerOptions {
        pane?: string;
    }

    interface InteractiveLayerOptions extends LayerOptions {
        interactive?: boolean;
    }

    export interface Layer extends Evented {
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
        openPopup(latlng: LatLng): this;
        openPopup(latlng: LatLngLiteral): this;
        openPopup(latlng: LatLngTuple): this;
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
        openTooltip(latlng: LatLng): this;
        openTooltip(latlng: LatLngLiteral): this;
        openTooltip(latlng: LatLngTuple): this;
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
        setParams(params: Object, noRedraw?: boolean): this;
    }

    export namespace tileLayer {
        export function wms(baseUrl: string, options: WMSOptions): WMS;
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
        setLatLngs(latlngs: Array<LatLng>): this;
        setLatLngs(latlngs: Array<LatLngLiteral>): this;
        setLatLngs(latlngs: Array<LatLngTuple>): this;
        isEmpty(): boolean;
        getCenter(): LatLng;
        getBounds(): LatLngBounds;
        addLatLng(latlng: LatLng): this;
        addLatLng(latlng: LatLngLiteral): this;
        addLatLng(latlng: LatLngTuple): this;
        addLatLng(latlng: Array<LatLng>): this; // these three overloads aren't explicitly noted in the docs
        addLatLng(latlng: Array<LatLngLiteral>): this;
        addLatLng(latlng: Array<LatLngTuple>): this;
    }

    export interface Polyline extends InternalPolyline {
        toGeoJSON(): GeoJSON.LineString | GeoJSON.MultiLineString;
    }

    export function polyline(latlngs: Array<LatLng>, options?: PolylineOptions): Polyline;

    export function polyline(latlngs: Array<LatLngLiteral>, options?: PolylineOptions): Polyline;

    export function polyline(latlngs: Array<LatLngTuple>, options?: PolylineOptions): Polyline;

    export function polyline(latlngs: Array<Array<LatLng>>, options?: PolylineOptions): Polyline;

    export function polyline(latlngs: Array<Array<LatLngLiteral>>, options?: PolylineOptions): Polyline;

    export function polyline(latlngs: Array<Array<LatLngTuple>>, options?: PolylineOptions): Polyline;

    export interface Polygon extends InternalPolyline {
        toGeoJSON(): GeoJSON.Polygon | GeoJSON.MultiPolygon;
    }

    export function polygon(latlngs: Array<LatLng>, options?: PolylineOptions): Polygon;

    export function polygon(latlngs: Array<LatLngLiteral>, options?: PolylineOptions): Polygon;

    export function polygon(latlngs: Array<LatLngTuple>, options?: PolylineOptions): Polygon;

    export function polygon(latlngs: Array<Array<LatLng>>, options?: PolylineOptions): Polygon;

    export function polygon(latlngs: Array<Array<LatLngLiteral>>, options?: PolylineOptions): Polygon;

    export function polygon(latlngs: Array<Array<LatLngTuple>>, options?: PolylineOptions): Polygon;

    export interface Rectangle extends Polygon {
        setBounds(latLngBounds: LatLngBounds): this;
        setBounds(latLngBounds: LatLngBoundsLiteral): this;
    }

    export function rectangle(latLngBounds: LatLngBounds, options?: PolylineOptions): Rectangle;

    export function rectangle(latLngBounds: LatLngBoundsLiteral, options?: PolylineOptions): Rectangle;

    export interface CircleMarkerOptions extends PathOptions {
        radius?: number;
    }

    export interface CircleMarker extends Path {
        toGeoJSON(): GeoJSON.Point;
        setLatLng(latLng: LatLng): this;
        setLatLng(latLng: LatLngLiteral): this;
        setLatLng(latLng: LatLngTuple): this;
        getLatLng(): LatLng;
        setRadius(radius: number): this;
        getRadius(): number;
    }

    export function circleMarker(latlng: LatLng, options?: CircleMarkerOptions): CircleMarker;

    export function circleMarker(latlng: LatLngLiteral, options?: CircleMarkerOptions): CircleMarker;

    export function circleMarker(latlng: LatLngLiteral, options?: CircleMarkerOptions): CircleMarker;

    export interface CircleOptions extends PathOptions {
        radius?: number;
    }

    export interface Circle extends CircleMarker {
        setRadius(radius: number): this;
        getRadius(): number;
        getBounds(): LatLngBounds;
    }

    export function circle(latlng: LatLng, options?: CircleOptions): Circle;

    export function circle(latlng: LatLngLiteral, options?: CircleOptions): Circle;

    export function circle(latlng: LatLngTuple, options?: CircleOptions): Circle;

    export function circle(latlng: LatLng, radius: number, options?: CircleOptions): Circle;

    export function circle(latlng: LatLngLiteral, radius: number, options?: CircleOptions): Circle;

    export function circle(latlng: LatLngTuple, radius: number, options?: CircleOptions): Circle;

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
        eachLayer(fn: (layer: Layer) => void, context?: Object): this;

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
        pointToLayer?: (geoJsonPoint: GeoJSON.Point, latlng: LatLng) => Layer; // should import GeoJSON typings

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

        /**
         * Creates a Layer from a given GeoJSON feature. Can use a custom pointToLayer
         * and/or coordsToLatLng functions if provided as options.
         */
        geometryToLayer(featureData: GeoJSON.Feature<GeoJSON.GeometryObject>, options?: GeoJSONOptions): Layer;

        /**
         * Creates a LatLng object from an array of 2 numbers (longitude, latitude) or
         * 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
         */
        coordsToLatLng(coords: [number, number]): LatLng;

        coordsToLatLng(coords: [number, number, number]): LatLng;

        /**
         * Creates a multidimensional array of LatLngs from a GeoJSON coordinates array.
         * levelsDeep specifies the nesting level (0 is for an array of points, 1 for an array of
         * arrays of points, etc., 0 by default).
         * Can use a custom coordsToLatLng function.
         */
        coordsToLatLngs(coords: Array<number>, levelsDeep?: number, coordsToLatLng?: (coords: [number, number] | [number, number, number]) => LatLng): LatLng[]; // Not entirely sure how to define arbitrarily nested arrays

        /**
         * Reverse of coordsToLatLng
         */
        latLngToCoords(latlng: LatLng): [number, number] | [number, number, number];

        /**
         * Reverse of coordsToLatLngs closed determines whether the first point should be
         * appended to the end of the array to close the feature, only used when levelsDeep is 0.
         * False by default.
         */
        latLngsToCoords(latlngs: Array<LatLng>, levelsDeep?: number, closed?: boolean): [number, number] | [number, number, number];

        /**
         * Normalize GeoJSON geometries/features into GeoJSON features.
         */
        asFeature(geojson: GeoJSON.GeometryObject): GeoJSON.Feature<GeoJSON.GeometryObject>;

        asFeature(geojson: GeoJSON.Feature<GeoJSON.GeometryObject>): GeoJSON.Feature<GeoJSON.GeometryObject>;
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
        target: any; // should this be Object and have users cast?
    }

    export interface MouseEvent extends Event {
        latlng: LatLng;
        layerPoint: Point;
        containerPoint: Point;
        originalEvent: NativeMouseEvent;
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
        properties: any; // any or Object?
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

    export namespace DomEvent {
        export function on(el: HTMLElement, types: string, fn: (ev: Event) => any, context?: Object): typeof DomEvent;

        export function on(el: HTMLElement, eventMap: {[eventName: string]: Function}, context?: Object): typeof DomEvent;

        export function off(el: HTMLElement, types: string, fn: (ev: Event) => any, context?: Object): typeof DomEvent;

        export function off(el: HTMLElement, eventMap: {[eventName: string]: Function}, context?: Object): typeof DomEvent;

        export function stopPropagation(ev: Event): typeof DomEvent;

        export function disableScrollPropagation(el: HTMLElement): typeof DomEvent;

        export function disableClickPropagation(el: HTMLElement): typeof DomEvent;

        export function preventDefault(ev: Event): typeof DomEvent;

        export function stop(ev: Event): typeof DomEvent;

        export function getMousePosition(ev: Event, container?: HTMLElement): Point;

        export function getWheelDelta(ev: Event): number;

        export function addListener(el: HTMLElement, types: string, fn: (ev: Event) => any, context?: Object): typeof DomEvent;

        export function addListener(el: HTMLElement, eventMap: {[eventName: string]: Function}, context?: Object): typeof DomEvent;

        export function removeListener(el: HTMLElement, types: string, fn: (ev: Event) => any, context?: Object): typeof DomEvent;

        export function removeListener(el: HTMLElement, eventMap: {[eventName: string]: Function}, context?: Object): typeof DomEvent;
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
        eachLayer(fn: (layer: Layer) => void, context?: Object): this;
        openPopup(popup: Popup): this;
        openPopup(content: string, latlng: LatLng, options?: PopupOptions): this;
        openPopup(content: string, latlng: LatLngLiteral, options?: PopupOptions): this;
        openPopup(content: string, latlng: LatLngTuple, options?: PopupOptions): this;
        openPopup(content: HTMLElement, latlng: LatLng, options?: PopupOptions): this;
        openPopup(content: HTMLElement, latlng: LatLngLiteral, options?: PopupOptions): this;
        openPopup(content: HTMLElement, latlng: LatLngTuple, options?: PopupOptions): this;
        closePopup(popup?: Popup): this;
        openTooltip(tooltip: Tooltip): this;
        openTooltip(content: string, latlng: LatLng, options?: TooltipOptions): this;
        openTooltip(content: string, latlng: LatLngLiteral, options?: TooltipOptions): this;
        openTooltip(content: string, latlng: LatLngTuple, options?: TooltipOptions): this;
        openTooltip(content: HTMLElement, latlng: LatLng, options?: TooltipOptions): this;
        openTooltip(content: HTMLElement, latlng: LatLngLiteral, options?: TooltipOptions): this;
        openTooltip(content: HTMLElement, latlng: LatLngTuple, options?: TooltipOptions): this;
        closeTooltip(tooltip?: Tooltip): this;

        // Methods for modifying map state
        setView(center: LatLng, zoom: number, options?: ZoomPanOptions): this;
        setView(center: LatLngLiteral, zoom: number, options?: ZoomPanOptions): this;
        setView(center: LatLngTuple, zoom: number, options?: ZoomPanOptions): this;
        setZoom(zoom: number, options: ZoomPanOptions): this;
        zoomIn(delta?: number, options?: ZoomOptions): this;
        zoomOut(delta?: number, options?: ZoomOptions): this;
        setZoomAround(latlng: LatLng, zoom: number, options: ZoomOptions): this;
        setZoomAround(latlng: LatLngLiteral, zoom: number, options: ZoomOptions): this;
        setZoomAround(latlng: LatLngTuple, zoom: number, options: ZoomOptions): this; // will the latlng version using tuple take precedence or will the point tuple version?
        setZoomAround(offset: Point, zoom: number, options: ZoomOptions): this;
        fitBounds(bounds: LatLngBounds, options: FitBoundsOptions): this;
        fitBounds(bounds: LatLngBoundsLiteral, options: FitBoundsOptions): this;
        fitWorld(options?: FitBoundsOptions): this;
        panTo(latlng: LatLng, options?: PanOptions): this;
        panTo(latlng: LatLngLiteral, options?: PanOptions): this;
        panTo(latlng: LatLngTuple, options?: PanOptions): this;
        panBy(offset: Point): this;
        panBy(offset: PointTuple): this;
        setMaxBounds(bounds: LatLngBounds): this;
        setMaxBounds(bounds: LatLngBoundsLiteral): this;
        setMinZoom(zoom: number): this;
        setMaxZoom(zoom: number): this;
        panInsideBounds(bounds: LatLngBounds, options?: PanOptions): this;
        panInsideBounds(bounds: LatLngBoundsLiteral, options?: PanOptions): this;
        invalidateSize(options: ZoomPanOptions): this;
        invalidateSize(animate: boolean): this;
        stop(): this;
        flyTo(latlng: LatLng, zoom?: number, options?: ZoomPanOptions): this;
        flyTo(latlng: LatLngLiteral, zoom?: number, options?: ZoomPanOptions): this;
        flyTo(latlng: LatLngTuple, zoom?: number, options?: ZoomPanOptions): this;
        flyToBounds(bounds: LatLngBounds, options?: FitBoundsOptions): this;
        flyToBounds(bounds: LatLngBoundsLiteral, options?: FitBoundsOptions): this;

        // Other methods
        addHandler(name: string, HandlerClass: () => Handler): this; // HandlerClass is actually a constructor function, is this the right way?
        remove(): this;
        createPane(name: string, container?: HTMLElement): HTMLElement;
        getPane(pane: string): HTMLElement;
        getPane(pane: HTMLElement): HTMLElement;
        getPanes(): {[name: string]: HTMLElement} & DefaultMapPanes;
        getContainer(): HTMLElement;
        whenReady(fn: () => void, context?: Object): this;

        // Methods for getting map state
        getCenter(): LatLng;
        getZoom(): number;
        getBounds(): LatLngBounds;
        getMinZoom(): number;
        getMaxZoom(): number;
        getBoundsZoom(bounds: LatLngBounds, inside?: boolean): number;
        getBoundsZoom(bounds: LatLngBoundsLiteral, inside?: boolean): number;
        getSize(): Point;
        getPixelBounds(): Bounds;
        getPixelOrigin(): Point;
        getPixelWorldBounds(zoom?: number): Bounds;

        // Conversion methods
        getZoomScale(toZoom: number, fromZoom: number): number;
        getScaleZoom(scale: number, fromZoom: number): number;
        project(latlng: LatLng, zoom: number): Point;
        project(latlng: LatLngLiteral, zoom: number): Point;
        project(latlng: LatLngTuple, zoom: number): Point;
        unproject(point: Point, zoom: number): LatLng;
        unproject(point: PointTuple, zoom: number): LatLng;
        layerPointToLatLng(point: Point): LatLng;
        layerPointToLatLng(point: PointTuple): LatLng;
        latLngToLayerPoint(latlng: LatLng): Point;
        latLngToLayerPoint(latlng: LatLngLiteral): Point;
        latLngToLayerPoint(latlng: LatLngTuple): Point;
        wrapLatLng(latlng: LatLng): LatLng;
        wrapLatLng(latlng: LatLngLiteral): LatLng;
        wrapLatLng(latlng: LatLngTuple): LatLng;
        distance(latlng1: LatLng, latlng2: LatLng): number;
        distance(latlng1: LatLngLiteral, latlng2: LatLngLiteral): number;
        distance(latlng1: LatLngTuple, latlng2: LatLngTuple): number;
        containerPointToLayerPoint(point: Point): Point;
        containerPointToLayerPoint(point: PointTuple): Point;
        layerPointToContainerPoint(point: Point): Point;
        layerPointToContainerPoint(point: PointTuple): Point;
        latLngToContainerPoint(latlng: LatLng): Point;
        latLngToContainerPoint(latlng: LatLngLiteral): Point;
        latLngToContainerPoint(latlng: LatLngTuple): Point;
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
     
    export namespace Icon {
        export const Default: IconDefault;
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

    export interface DivIcon extends Icon {}

    export function divIcon(options: DivIconOptions): DivIcon;

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

    export interface Marker extends Layer {
        getLatLng(): LatLng;
        setLatLng(latlng: LatLng): this;
        setLatLng(latlng: LatLngLiteral): this;
        setLatLng(latlng: LatLngTuple): this;
        setZIndexOffset(offset: number): this;
        setIcon(icon: Icon): this;
        setOpacity(opacity: number): this;

        // Properties
        dragging: Handler;
    }

    export function marker(latlng: LatLng, options?: MarkerOptions): Marker;

    export function marker(latlng: LatLngLiteral, options?: MarkerOptions): Marker;

    export function marker(latlng: LatLngTuple, options?: MarkerOptions): Marker;

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
