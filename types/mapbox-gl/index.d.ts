// Type definitions for Mapbox GL JS v0.49.0
// Project: https://github.com/mapbox/mapbox-gl-js
// Definitions by: Dominik Bruderer <https://github.com/dobrud>, Patrick Reames <https://github.com/patrickr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="geojson" />

export = mapboxgl;
export as namespace mapboxgl;

declare namespace mapboxgl {
    let accessToken: string;
    let version: string;

    export function supported(options?: { failIfMajorPerformanceCaveat?: boolean }): boolean;

    export function setRTLTextPlugin(pluginURL: string, callback: (error: Error) => void): void;

    type LngLatLike = LngLat | { lng: number; lat: number; } | [number, number];
    type LngLatBoundsLike = LngLatBounds | [LngLatLike, LngLatLike] | [number, number, number, number];
    type PointLike = Point | [number, number];
    type Expression = any[];
    type Anchor = 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

    /**
     * Map
     */
    export class Map extends Evented {
        constructor(options?: MapboxOptions);

        addControl(control: Control | IControl, position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'): this;

        removeControl(control: Control | IControl): this;

        resize(eventData?: EventData): this;

        getBounds(): LngLatBounds;

        getMaxBounds(): LngLatBounds | null;

        setMaxBounds(lnglatbounds?: LngLatBoundsLike): this;

        setMinZoom(minZoom?: number): this;

        getMinZoom(): number;

        setMaxZoom(maxZoom?: number): this;

        getMaxZoom(): number;

        getRenderWorldCopies(): boolean;

        setRenderWorldCopies(renderWorldCopies?: boolean): this;

        project(lnglat: LngLatLike): mapboxgl.Point;

        unproject(point: PointLike): mapboxgl.LngLat;

        isMoving(): boolean;

        isZooming(): boolean;

        isRotating(): boolean;

        queryRenderedFeatures(pointOrBox?: PointLike | [PointLike, PointLike], parameters?: { layers?: string[], filter?: any[] }): MapboxGeoJSONFeature[];

        querySourceFeatures(sourceID: string, parameters?: { sourceLayer?: string, filter?: any[] }): MapboxGeoJSONFeature[];

        setStyle(style: mapboxgl.Style | string, options?: { diff?: boolean, localIdeographFontFamily?: string }): this;

        getStyle(): mapboxgl.Style;

        isStyleLoaded(): boolean;

        addSource(id: string, source: VectorSource | RasterSource | RasterDemSource | GeoJSONSource | ImageSource | VideoSource | GeoJSONSourceRaw): this;

        isSourceLoaded(id: string): boolean;

        areTilesLoaded(): boolean;

        removeSource(id: string): this;

        getSource(id: string): VectorSource | RasterSource | RasterDemSource | GeoJSONSource | ImageSource | VideoSource;

        addImage(name: string, image: HTMLImageElement | ArrayBufferView | { width: number, height: number, data: Uint8Array | Uint8ClampedArray } | ImageData, options?: { pixelRatio?: number, sdf?: boolean }): this;

        hasImage(name: string): boolean;

        removeImage(name: string): this;

        loadImage(url: string, callback: Function): this;

        listImages(): string[];

        addLayer(layer: mapboxgl.Layer, before?: string): this;

        moveLayer(id: string, beforeId?: string): this;

        removeLayer(id: string): this;

        getLayer(id: string): mapboxgl.Layer;

        setFilter(layer: string, filter?: any[]): this;

        setLayerZoomRange(layerId: string, minzoom: number, maxzoom: number): this;

        getFilter(layer: string): any[];

        setPaintProperty(layer: string, name: string, value: any, klass?: string): this;

        getPaintProperty(layer: string, name: string): any;

        setLayoutProperty(layer: string, name: string, value: any): this;

        getLayoutProperty(layer: string, name: string): any;

        setLight(options: mapboxgl.Light, lightOptions?: any): this;

        getLight(): mapboxgl.Light;

        setFeatureState(feature: { source: string, sourceLayer?: string, id: string | number } | mapboxgl.MapboxGeoJSONFeature, state: { [key: string]: any }): void;

        getFeatureState(feature: { source: string, sourceLayer?: string, id: string | number } | mapboxgl.MapboxGeoJSONFeature): { [key: string]: any };

        getContainer(): HTMLElement;

        getCanvasContainer(): HTMLElement;

        getCanvas(): HTMLCanvasElement;

        loaded(): boolean;

        remove(): void;

        showTileBoundaries: boolean;

        showCollisionBoxes: boolean;

        repaint: boolean;

        getCenter(): mapboxgl.LngLat;

        setCenter(center: LngLatLike, eventData?: mapboxgl.EventData): this;

        panBy(offset: PointLike, options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

        panTo(lnglat: LngLatLike, options?: mapboxgl.AnimationOptions, eventdata?: mapboxgl.EventData): this;

        getZoom(): number;

        setZoom(zoom: number, eventData?: mapboxgl.EventData): this;

        zoomTo(zoom: number, options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

        zoomIn(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

        zoomOut(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

        getBearing(): number;

        setBearing(bearing: number, eventData?: mapboxgl.EventData): this;

        rotateTo(bearing: number, options?: mapboxgl.AnimationOptions, eventData?: EventData): this;

        resetNorth(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

        snapToNorth(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

        getPitch(): number;

        setPitch(pitch: number, eventData?: EventData): this;

        cameraForBounds(bounds: LngLatBoundsLike, options?: CameraForBoundsOptions): CameraOptions | undefined;

        fitBounds(bounds: LngLatBoundsLike, options?: mapboxgl.FitBoundsOptions, eventData?: mapboxgl.EventData): this;

        fitScreenCoordinates(p0: PointLike, p1: PointLike, bearing: number, options?: AnimationOptions & CameraOptions, eventData?: EventData): this;

        jumpTo(options: mapboxgl.CameraOptions, eventData?: mapboxgl.EventData): this;

        easeTo(options: mapboxgl.CameraOptions & mapboxgl.AnimationOptions & {delayEndEvents?: number}, eventData?: mapboxgl.EventData): this;

        flyTo(options: mapboxgl.FlyToOptions, eventData?: mapboxgl.EventData): this;

        isEasing(): boolean;

        stop(): this;

        on<T extends keyof MapLayerEventType>(type: T, layer: string, listener: (ev: MapLayerEventType[T] & EventData) => void): this;
        on<T extends keyof MapEventType>(type: T, listener: (ev: MapEventType[T] & EventData) => void): this;
        on(type: string, listener: (ev: any) => void): this;

        once<T extends keyof MapLayerEventType>(type: T, layer: string, listener: (ev: MapLayerEventType[T] & EventData) => void): this;
        once<T extends keyof MapEventType>(type: T, listener: (ev: MapEventType[T] & EventData) => void): this;
        once(type: string, listener: (ev: any) => void): this;

        off<T extends keyof MapLayerEventType>(type: T, layer: string, listener: (ev: MapLayerEventType[T] & EventData) => void): this;
        off<T extends keyof MapEventType>(type: T, listener: (ev: MapEventType[T] & EventData) => void): this;
        off(type: string, listener: (ev: any) => void): this;

        scrollZoom: ScrollZoomHandler;

        boxZoom: BoxZoomHandler;

        dragRotate: DragRotateHandler;

        dragPan: DragPanHandler;

        keyboard: KeyboardHandler;

        doubleClickZoom: DoubleClickZoomHandler;

        touchZoomRotate: TouchZoomRotateHandler;
    }

    export interface MapboxOptions {
        /** If true, an attribution control will be added to the map. */
        attributionControl?: boolean;

        bearing?: number;

        /** Snap to north threshold in degrees. */
        bearingSnap?: number;

        /** If true, enable the "box zoom" interaction (see BoxZoomHandler) */
        boxZoom?: boolean;

        /** initial map center */
        center?: LngLatLike;

        /**
         * The max number of pixels a user can shift the mouse pointer during a click for it to be
         * considered a valid click (as opposed to a mouse drag).
         * 
         * @default 3
         */
        clickTolerance?: number;

        /**
         * If `true`, Resource Timing API information will be collected for requests made by GeoJSON
         * and Vector Tile web workers (this information is normally inaccessible from the main
         * Javascript thread). Information will be returned in a `resourceTiming` property of
         * relevant `data` events.
         * 
         * @default false
         */
        collectResourceTiming?: boolean;

        /**
         * If `true`, symbols from multiple sources can collide with each other during collision
         * detection. If `false`, collision detection is run separately for the symbols in each source.
         * 
         * @default true
         */
        crossSourceCollisions?: boolean;

        /** ID of the container element */
        container: string | Element;

        /** String or strings to show in an AttributionControl.
         * Only applicable if options.attributionControl is `true`. */
        customAttribution?: string | string[];

        /** If true, enable the "drag to pan" interaction (see DragPanHandler). */
        dragPan?: boolean;

        /** If true, enable the "drag to rotate" interaction (see DragRotateHandler). */
        dragRotate?: boolean;

        /** If true, enable the "double click to zoom" interaction (see DoubleClickZoomHandler). */
        doubleClickZoom?: boolean;

        /** If true, the map will track and update the page URL according to map position */
        hash?: boolean;

        /**
         * Controls the duration of the fade-in/fade-out animation for label collisions, in milliseconds.
         * This setting affects all symbol layers. This setting does not affect the duration of runtime
         * styling transitions or raster tile cross-fading.
         * 
         * @default 300
         */
        fadeDuration?: number;

        /** If true, map creation will fail if the implementation determines that the performance of the created WebGL context would be dramatically lower than expected. */
        failIfMajorPerformanceCaveat?: boolean;

        /** If false, no mouse, touch, or keyboard listeners are attached to the map, so it will not respond to input */
        interactive?: boolean;

        /** If true, enable keyboard shortcuts (see KeyboardHandler). */
        keyboard?: boolean;

        /**
         * If specified, defines a CSS font-family for locally overriding generation of glyphs in the
         * 'CJK Unified Ideographs' and 'Hangul Syllables' ranges. In these ranges, font settings from
         * the map's style will be ignored, except for font-weight keywords (light/regular/medium/bold).
         * The purpose of this option is to avoid bandwidth-intensive glyph server requests.
         * 
         * @default null
         */
        localIdeographFontFamily?: string;

        /**
         * A string representing the position of the Mapbox wordmark on the map.
         * 
         * @default "bottom-left"
         */
        logoPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

        /** If set, the map is constrained to the given bounds. */
        maxBounds?: LngLatBoundsLike;

        /** Maximum zoom of the map */
        maxZoom?: number;

        /** Minimum zoom of the map */
        minZoom?: number;

        /** If true, The maps canvas can be exported to a PNG using map.getCanvas().toDataURL();. This is false by default as a performance optimization. */
        preserveDrawingBuffer?: boolean;

        /**
         * The initial pitch (tilt) of the map, measured in degrees away from the plane of the
         * screen (0-60).
         * 
         * @default 0
         */
        pitch?: number;

        /**
         * If `false`, the map's pitch (tilt) control with "drag to rotate" interaction will be disabled.
         * 
         * @default true
         */
        pitchWithRotate?: boolean;

        /**
         * If `false`, the map won't attempt to re-request tiles once they expire per their HTTP
         * `cacheControl`/`expires` headers.
         * 
         * @default true
         */
        refreshExpiredTiles?: boolean;

        /**
         * If `true`, multiple copies of the world will be rendered, when zoomed out.
         * 
         * @default true
         */
        renderWorldCopies?: boolean;

        /** If true, enable the "scroll to zoom" interaction */
        scrollZoom?: boolean;

        /** stylesheet location */
        style?: mapboxgl.Style | string;

        /** If  true, the map will automatically resize when the browser window resizes */
        trackResize?: boolean;

        /**
         * A callback run before the Map makes a request for an external URL. The callback can be
         * used to modify the url, set headers, or set the credentials property for cross-origin requests.
         * 
         * @default null
         */
        transformRequest?: TransformRequestFunction;

        /** If true, enable the "pinch to rotate and zoom" interaction (see TouchZoomRotateHandler). */
        touchZoomRotate?: boolean;

        /** Initial zoom level */
        zoom?: number;

        /**
         * The maximum number of tiles stored in the tile cache for a given source. If omitted, the
         * cache will be dynamically sized based on the current viewport.
         * 
         * @default null
         */
        maxTileCacheSize?: number;
    }

    export type ResourceType = 
        | 'Unknown'
        | 'Style'
        | 'Source'
        | 'Tile'
        | 'Glyphs'
        | 'SpriteImage'
        | 'SpriteJSON'
        | 'Image';

    export interface RequestParameters {
        /**
         * The URL to be requested.
         */
        url: string;

        /**
         * Use `'include'` to send cookies with cross-origin requests.
         */
        credentials?: 'same-origin' | 'include';

        /**
         * The headers to be sent with the request.
         */
        headers?: { [header: string]: any };

        method?: 'GET' | 'POST' | 'PUT';

        collectResourceTiming?: boolean;
    }

    export type TransformRequestFunction = (url: string, resourceType: ResourceType) => RequestParameters;

    export interface PaddingOptions {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }

    /**
     * BoxZoomHandler
     */
    export class BoxZoomHandler {
        constructor(map: mapboxgl.Map);

        isEnabled(): boolean;

        isActive(): boolean;

        enable(): void;

        disable(): void;
    }

    /**
     * ScrollZoomHandler
     */
    export class ScrollZoomHandler {
        constructor(map: mapboxgl.Map);

        isEnabled(): boolean;

        enable(): void;

        disable(): void;
    }

    /**
     * DragPenHandler
     */
    export class DragPanHandler {
        constructor(map: mapboxgl.Map);

        isEnabled(): boolean;

        isActive(): boolean;

        enable(): void;

        disable(): void;
    }

    /**
     * DragRotateHandler
     */
    export class DragRotateHandler {
        constructor(map: mapboxgl.Map, options?: { bearingSnap?: number, pitchWithRotate?: boolean });

        isEnabled(): boolean;

        isActive(): boolean;

        enable(): void;

        disable(): void;
    }

    /**
     * KeyboardHandler
     */
    export class KeyboardHandler {
        constructor(map: mapboxgl.Map);

        isEnabled(): boolean;

        enable(): void;

        disable(): void;
    }

    /**
     * DoubleClickZoomHandler
     */
    export class DoubleClickZoomHandler {
        constructor(map: mapboxgl.Map);

        isEnabled(): boolean;

        enable(): void;

        disable(): void;
    }

    /**
     * TouchZoomRotateHandler
     */
    export class TouchZoomRotateHandler {
        constructor(map: mapboxgl.Map);

        isEnabled(): boolean;

        enable(): void;

        disable(): void;

        disableRotation(): void;

        enableRotation(): void;
    }

    export interface IControl {
        onAdd(map: Map): HTMLElement;

        onRemove(map: Map): any;

        getDefaultPosition?: () => string;
    }

    /**
     * Control
     */
    export class Control extends Evented {
    }

    /**
     * Navigation
     */
    export class NavigationControl extends Control {
		constructor(options?: {showCompass?: boolean, showZoom?: boolean});
    }

    export class PositionOptions {
        enableHighAccuracy?: boolean;
        timeout?: number;
        maximumAge?: number;
    }

    /**
     * Geolocate
     */
    export class GeolocateControl extends Control {
        constructor(options?: { positionOptions?: PositionOptions, fitBoundsOptions?: FitBoundsOptions, trackUserLocation?: boolean, showUserLocation?: boolean });
        trigger(): boolean;
    }

    /**
     * Attribution
     */
    export class AttributionControl extends Control {
        constructor(options?: { compact?: boolean, customAttribution?: string | string[] });
    }

    /**
     * Scale
     */
    export class ScaleControl extends Control {
        constructor(options?: { maxWidth?: number, unit?: string })

        setUnit(unit: 'imperial' | 'metric' | 'nautical'): void;
    }

    /**
     * Fullscreen
     */
    export class FullscreenControl extends Control {
        constructor();
    }

    /**
     * Popup
     */
    export class Popup extends Evented {
        constructor(options?: mapboxgl.PopupOptions);

        addTo(map: mapboxgl.Map): this;

        isOpen(): boolean;

        remove(): this;

        getLngLat(): mapboxgl.LngLat;

        setLngLat(lnglat: LngLatLike): this;

        setText(text: string): this;

        setHTML(html: string): this;

        setDOMContent(htmlNode: Node): this;
    }

    export interface PopupOptions {
        closeButton?: boolean;

        closeOnClick?: boolean;

        anchor?: Anchor;

        offset?: number | PointLike | { [key: string]: PointLike; };

        className?: string;
    }

    export interface Style {
        bearing?: number;
        center?: number[];
        glyphs?: string;
        layers?: Layer[];
        metadata?: any;
        name?: string;
        pitch?: number;
        light?: Light;
        sources?: any;
        sprite?: string;
        transition?: Transition;
        version: number;
        zoom?: number;
    }

    export interface Transition {
        delay?: number;
        duration?: number;
    }

    export interface Light {
        'anchor'?: 'map' | 'viewport';
        'position'?: number[];
        'position-transition'?: Transition;
        'color'?: string;
        'color-transition'?: Transition;
        'intensity'?: number;
        'intensity-transition'?: Transition;
    }

    export interface Source {
        type: 'vector' | 'raster' | 'raster-dem' | 'geojson' | 'image' | 'video' | 'canvas';
    }

    /**
     * GeoJSONSource
     */

    export interface GeoJSONSourceRaw extends Source, GeoJSONSourceOptions {
        type: 'geojson';
    }

    export class GeoJSONSource implements GeoJSONSourceRaw {
        type: 'geojson';

        constructor(options?: mapboxgl.GeoJSONSourceOptions);

        setData(data: GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry> | String): this;

        getClusterExpansionZoom(clusterId: number, callback: (error: any, zoom: number) => void): this;

        getClusterChildren(clusterId: number, callback: (error: any, features: GeoJSON.Feature<GeoJSON.Geometry>[]) => void): this;

        getClusterLeaves(cluserId: number, limit: number, offset: number, callback: (error: any, features: GeoJSON.Feature<GeoJSON.Geometry>[]) => void): this;
    }

    export interface GeoJSONSourceOptions {
        data?: GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry> | string;

        maxzoom?: number;

        attribution?: string;

        buffer?: number;

        tolerance?: number;

        cluster?: number | boolean;

        clusterRadius?: number;

        clusterMaxZoom?: number;

        lineMetrics?: boolean;
    }

    /**
     * VideoSource
     */
    export interface VideoSource extends VideoSourceOptions {
    }

    export class VideoSource implements Source {
        type: 'video';

        constructor(options?: mapboxgl.VideoSourceOptions);

        getVideo(): HTMLVideoElement;

        setCoordinates(coordinates: number[][]): this;
    }

    export interface VideoSourceOptions {
        urls?: string[];

        coordinates?: number[][];
    }

    /**
     * ImageSource
     */
    export interface ImageSource extends ImageSourceOptions {
    }

    export class ImageSource implements Source {
        type: 'image';

        constructor(options?: mapboxgl.ImageSourceOptions);

        setCoordinates(coordinates: number[][]): this;
    }

    export interface ImageSourceOptions {
        url?: string;

        coordinates?: number[][];
    }

    /**
     * CanvasSource
     */
    export class CanvasSource implements Source, CanvasSourceOptions {
        type: 'canvas';

        coordinates: number[][];

        canvas: string | HTMLCanvasElement;

        play(): void;

        pause(): void;

        getCanvas(): HTMLCanvasElement;

        setCoordinates(coordinates: number[][]): this;
    }

    export interface CanvasSourceOptions {
        coordinates: number[][];

        animate?: boolean;

        canvas: string | HTMLCanvasElement;
    }

    interface VectorSource extends Source {
        type: 'vector';
        url?: string;
        tiles?: string[];
        bounds?: number[];
        scheme?: 'xyz' | 'tms';
        minzoom?: number;
        maxzoom?: number;
        attribution?: string;
    }

    interface RasterSource extends Source {
        type: 'raster';
        url?: string;
        tiles?: string[];
        bounds?: number[];
        minzoom?: number;
        maxzoom?: number;
        tileSize?: number;
        scheme?: 'xyz' | 'tms';
        attribution?: string;
    }

    interface RasterDemSource extends Source {
        type: 'raster-dem';
        url?: string;
        tiles?: string[];
        bounds?: number[];
        minzoom?: number;
        maxzoom?: number;
        tileSize?: number;
        attribution?: string;
        encoding?: 'terrarium' | 'mapbox';
    }

    /**
     * LngLat
     */
    export class LngLat {
        lng: number;
        lat: number;

        constructor(lng: number, lat: number);

        /** Return a new LngLat object whose longitude is wrapped to the range (-180, 180). */
        wrap(): mapboxgl.LngLat;

        /** Return a LngLat as an array */
        toArray(): number[];

        /** Return a LngLat as a string */
        toString(): string;

        toBounds(radius: number): LngLatBounds;

        static convert(input: LngLatLike): mapboxgl.LngLat;
    }

    /**
     * LngLatBounds
     */
    export class LngLatBounds {
        sw: LngLatLike;
        ne: LngLatLike;

        constructor(boundsLike?: [LngLatLike, LngLatLike] | [number, number, number, number]);
        constructor(sw: LngLatLike, ne: LngLatLike);

        setNorthEast(ne: LngLatLike): this;

        setSouthWest(sw: LngLatLike): this;

        /** Extend the bounds to include a given LngLat or LngLatBounds. */
        extend(obj: mapboxgl.LngLat | mapboxgl.LngLatBounds): this;

        /** Get the point equidistant from this box's corners */
        getCenter(): mapboxgl.LngLat;

        /** Get southwest corner */
        getSouthWest(): mapboxgl.LngLat;

        /** Get northeast corner */
        getNorthEast(): mapboxgl.LngLat;

        /** Get northwest corner */
        getNorthWest(): mapboxgl.LngLat;

        /** Get southeast corner */
        getSouthEast(): mapboxgl.LngLat;

        /** Get west edge longitude */
        getWest(): number;

        /** Get south edge latitude */
        getSouth(): number;

        /** Get east edge longitude */
        getEast(): number;

        /** Get north edge latitude */
        getNorth(): number;

        /** Returns a LngLatBounds as an array */
        toArray(): number[][];

        /** Return a LngLatBounds as a string */
        toString(): string;

        /** Returns a boolean */
        isEmpty(): boolean

        /** Convert an array to a LngLatBounds object, or return an existing LngLatBounds object unchanged. */
        static convert(input: LngLatBoundsLike): mapboxgl.LngLatBounds;
    }

    /**
     * Point
     */
        // Todo: Pull out class to seperate definition for Module "point-geometry"
    export class Point {
        x: number;
        y: number;

        constructor(x: number, y: number);

        clone(): Point;

        add(p: Point): Point;

        sub(p: Point): Point;

        mult(k: number): Point;

        div(k: number): Point;

        rotate(a: number): Point;

        matMult(m: number): Point;

        unit(): Point;

        perp(): Point;

        round(): Point;

        mag(): number;

        equals(p: Point): boolean;

        dist(p: Point): number;

        distSqr(p: Point): number;

        angle(): number;

        angleTo(p: Point): number;

        angleWidth(p: Point): number;

        angleWithSep(x: number, y: number): number;

        static convert(a: PointLike): Point;
    }

    /**
     * Marker
     */
    export class Marker extends Evented {
        constructor(options?: mapboxgl.MarkerOptions);

        constructor(element?: HTMLElement, options?: mapboxgl.MarkerOptions);

        addTo(map: Map): this;

        remove(): this;

        getLngLat(): LngLat;

        setLngLat(lngLat: LngLatLike): this;

        getElement(): HTMLElement;

        setPopup(popup?: Popup): this;

        getPopup(): Popup;

        togglePopup(): this;

        getOffset(): PointLike;

        setOffset(offset: PointLike): this;

        setDraggable(shouldBeDraggable: boolean): this;

        isDraggable(): boolean;
    }

    export interface MarkerOptions {
        element?: HTMLElement;

        offset?: PointLike;

        anchor?: Anchor;

        color?: string

        draggable?: boolean;
    }

    /**
     * Evented
     */
    export class Evented {
        on(type: string, listener: Function): this;

        off(type?: string | any, listener?: Function): this;

        once(type: string, listener: Function): this;

        // https://github.com/mapbox/mapbox-gl-js/issues/6522
        fire(type: string, properties?: { [key: string]: any }): this;
    }

    /**
     * StyleOptions
     */
    export interface StyleOptions {
        transition?: boolean;
    }

    export type MapboxGeoJSONFeature = GeoJSON.Feature<GeoJSON.Geometry> & {
        layer: Layer;
        source: string;
        sourceLayer: string;
        state: { [key: string]: any };
    };

    export type EventData = { [key: string]: any };

    export class MapboxEvent<TOrig = undefined> {
        type: string;
        target: Map;
        originalEvent: TOrig;
    }

    export class MapMouseEvent extends MapboxEvent<MouseEvent> {
        type: 'mousedown'
            | 'mouseup'
            | 'click'
            | 'dblclick'
            | 'mousemove'
            | 'mouseover'
            | 'mouseenter'
            | 'mouseleave'
            | 'mouseout'
            | 'contextmenu';

        point: Point;
        lngLat: LngLat;

        preventDefault(): void;
        defaultPrevented: boolean;
    }

    export type MapLayerMouseEvent = MapMouseEvent & { features?: MapboxGeoJSONFeature[]; };

    export class MapTouchEvent extends MapboxEvent<TouchEvent> {
        type: 'touchstart'
            | 'touchend'
            | 'touchcancel';

        point: Point;
        lngLat: LngLat;
        points: Point[];
        lngLats: LngLat[];

        preventDefault(): void;
        defaultPrevented: boolean;
    }

    export type MapLayerTouchEvent = MapTouchEvent & { features?: MapboxGeoJSONFeature[]; };

    export class MapWheelEvent extends MapboxEvent<WheelEvent> {
        type: 'wheel';

        preventDefault(): void;
        defaultPrevented: boolean;
    }

    export interface MapBoxZoomEvent extends MapboxEvent<MouseEvent> {
        type: 'boxzoomstart'
            | 'boxzoomend'
            | 'boxzoomcancel';

        boxZoomBounds: LngLatBounds;
    }

    export type MapDataEvent = MapSourceDataEvent | MapStyleDataEvent;

    export interface MapStyleDataEvent extends MapboxEvent {
        dataType: 'style';
    }

    export interface MapSourceDataEvent extends MapboxEvent {
        dataType: 'source';
        isSourceLoaded: boolean;
        source: Style;
        sourceId: string;
        sourceDataType: 'metadata' | 'content';
        tile: any;
        coord: Coordinate;
    }

    export interface Coordinate {
        canonical: CanonicalCoordinate;
        wrap: number;
        key: number;
    }

    export interface CanonicalCoordinate {
        x: number;
        y: number;
        z: number;
        key: number;
        equals(coord: CanonicalCoordinate): boolean;
    }

    export interface MapContextEvent extends MapboxEvent<WebGLContextEvent> {
        type: 'webglcontextlost' | 'webglcontextrestored';
    }

    export class ErrorEvent extends MapboxEvent {
        type: 'error';
        error: Error;
    }

    /**
     * AnimationOptions
     */
    export interface AnimationOptions {
        /** Number in milliseconds */
        duration?: number;
        /**
         * A function taking a time in the range 0..1 and returning a number where 0 is the initial
         * state and 1 is the final state.
         */
        easing?: (time: number) => number;
        /** point, origin of movement relative to map center */
        offset?: PointLike;
        /** When set to false, no animation happens */
        animate?: boolean;
    }

    /**
     * CameraOptions
     */
    export interface CameraOptions {
        /** Map center */
        center?: LngLatLike;
        /** Map zoom level */
        zoom?: number;
        /** Map rotation bearing in degrees counter-clockwise from north */
        bearing?: number;
        /** Map angle in degrees at which the camera is looking at the ground */
        pitch?: number;
        /** If zooming, the zoom center (defaults to map center) */
        around?: LngLatLike;
    }

    export interface CameraForBoundsOptions extends CameraOptions {
        padding?: number | PaddingOptions;
        offset?: PointLike;
        maxZoom?: number;
    }

    /**
     * FlyToOptions
     */
    export interface FlyToOptions extends AnimationOptions, CameraOptions {
        curve?: number;
        minZoom?: number;
        speed?: number;
        screenSpeed?: number;
        maxDuration?: number;
    }

    export interface FitBoundsOptions extends mapboxgl.FlyToOptions {
        linear?: boolean;
        padding?: number | mapboxgl.PaddingOptions;
        offset?: mapboxgl.PointLike;
        maxZoom?: number;
        maxDuration?: number;
    }

    /**
     * MapEvent
     */
    export type MapEventType = {
        error: ErrorEvent;

        load: MapboxEvent;
        remove: MapboxEvent;
        render: MapboxEvent;
        resize: MapboxEvent;

        webglcontextlost: MapContextEvent;
        webglcontextrestored: MapContextEvent;

        dataloading: MapDataEvent;
        data: MapDataEvent;
        tiledataloading: MapDataEvent;
        sourcedataloading: MapSourceDataEvent;
        styledataloading: MapStyleDataEvent;
        sourcedata: MapSourceDataEvent;
        styledata: MapStyleDataEvent;

        boxzoomcancel: MapBoxZoomEvent;
        boxzoomstart: MapBoxZoomEvent;
        boxzoomend: MapBoxZoomEvent;

        touchcancel: MapTouchEvent;
        touchmove: MapTouchEvent;
        touchend: MapTouchEvent;
        touchstart: MapTouchEvent;

        click: MapMouseEvent;
        contextmenu: MapMouseEvent;
        dblclick: MapMouseEvent;
        mousemove: MapMouseEvent;
        mouseup: MapMouseEvent;
        mousedown: MapMouseEvent;
        mouseout: MapMouseEvent;
        mouseover: MapMouseEvent;

        movestart: MapboxEvent<MouseEvent | TouchEvent | WheelEvent | undefined>;
        move: MapboxEvent<MouseEvent | TouchEvent | WheelEvent | undefined>;
        moveend: MapboxEvent<MouseEvent | TouchEvent | WheelEvent | undefined>;

        zoomstart: MapboxEvent<MouseEvent | TouchEvent | WheelEvent | undefined>;
        zoom: MapboxEvent<MouseEvent | TouchEvent | WheelEvent | undefined>;
        zoomend: MapboxEvent<MouseEvent | TouchEvent | WheelEvent | undefined>;

        rotatestart: MapboxEvent<MouseEvent | TouchEvent | undefined>;
        rotate: MapboxEvent<MouseEvent | TouchEvent | undefined>;
        rotateend: MapboxEvent<MouseEvent | TouchEvent | undefined>;

        dragstart: MapboxEvent<MouseEvent | TouchEvent | undefined>;
        drag: MapboxEvent<MouseEvent | TouchEvent | undefined>;
        dragend: MapboxEvent<MouseEvent | TouchEvent | undefined>;

        pitchstart: MapboxEvent<MouseEvent | TouchEvent | undefined>;
        pitch: MapboxEvent<MouseEvent | TouchEvent | undefined>;
        pitchend: MapboxEvent<MouseEvent | TouchEvent | undefined>;

        wheel: MapWheelEvent;
    }

    export type MapLayerEventType = {
        click: MapLayerMouseEvent;
        dblclick: MapLayerMouseEvent;
        mousedown: MapLayerMouseEvent;
        mouseup: MapLayerMouseEvent;
        mousemove: MapLayerMouseEvent;
        mouseenter: MapLayerMouseEvent;
        mouseleave: MapLayerMouseEvent;
        mouseover: MapLayerMouseEvent;
        mouseout: MapLayerMouseEvent;
        contextmenu: MapLayerMouseEvent;

        touchstart: MapLayerTouchEvent;
        touchend: MapLayerTouchEvent;
        touchcancel: MapLayerTouchEvent;
    }

    export interface Layer {
        id: string;
        type?: 'fill' | 'line' | 'symbol' | 'circle' | 'fill-extrusion' | 'raster' | 'background' | 'heatmap' | 'hillshade';

        metadata?: any;
        ref?: string;

        source?: string | VectorSource | RasterSource | RasterDemSource | GeoJSONSource | ImageSource | VideoSource | GeoJSONSourceRaw;

        'source-layer'?: string;

        minzoom?: number;
        maxzoom?: number;

        interactive?: boolean;

        filter?: any[];
        layout?: BackgroundLayout | FillLayout | FillExtrusionLayout | LineLayout | SymbolLayout | RasterLayout | CircleLayout | HeatmapLayout | HillshadeLayout;
        paint?: BackgroundPaint | FillPaint | FillExtrusionPaint | LinePaint | SymbolPaint | RasterPaint | CirclePaint | HeatmapPaint | HillshadePaint;
    }

    export interface StyleFunction {
        stops?: any[][];
        property?: string;
        base?: number;
        type?: 'identity' | 'exponential' | 'interval' | 'categorical';
        default?: any;
        'colorSpace'?: 'rgb' | 'lab' | 'hcl';
    }

    export interface BackgroundLayout {
        visibility?: 'visible' | 'none';
    }

    export interface BackgroundPaint {
        'background-color'?: string | Expression;
        'background-color-transition'?: Transition;
        'background-pattern'?: string;
        'background-pattern-transition'?: Transition;
        'background-opacity'?: number | Expression;
        'background-opacity-transition'?: Transition;
    }

    export interface FillLayout {
        visibility?: 'visible' | 'none';
    }

    export interface FillPaint {
        'fill-antialias'?: boolean | Expression;
        'fill-opacity'?: number | StyleFunction | Expression;
        'fill-opacity-transition'?: Transition;
        'fill-color'?: string | StyleFunction | Expression;
        'fill-color-transition'?: Transition;
        'fill-outline-color'?: string | StyleFunction | Expression;
        'fill-outline-color-transition'?: Transition;
        'fill-translate'?: number[];
        'fill-translate-transition'?: Transition;
        'fill-translate-anchor'?: 'map' | 'viewport';
        'fill-pattern'?: string | Expression;
        'fill-pattern-transition'?: Transition;
    }

    export interface FillExtrusionLayout {
        visibility?: 'visible' | 'none';
    }

    export interface FillExtrusionPaint {
        'fill-extrusion-opacity'?: number | Expression;
        'fill-extrusion-opacity-transition'?: Transition;
        'fill-extrusion-color'?: string | StyleFunction | Expression;
        'fill-extrusion-color-transition'?: Transition;
        'fill-extrusion-translate'?: number[] | Expression;
        'fill-extrusion-translate-transition'?: Transition;
        'fill-extrusion-translate-anchor'?: 'map' | 'viewport';
        'fill-extrusion-pattern'?: string | Expression;
        'fill-extrusion-pattern-transition'?: Transition;
        'fill-extrusion-height'?: number | StyleFunction | Expression;
        'fill-extrusion-height-transition'?: Transition;
        'fill-extrusion-base'?: number | StyleFunction | Expression;
        'fill-extrusion-base-transition'?: Transition;
    }

    export interface LineLayout {
        visibility?: 'visible' | 'none';

        'line-cap'?: 'butt' | 'round' | 'square';
        'line-join'?: 'bevel' | 'round' | 'miter' | Expression;
        'line-miter-limit'?: number | Expression;
        'line-round-limit'?: number | Expression;
    }

    export interface LinePaint {
        'line-opacity'?: number | StyleFunction | Expression;
        'line-opacity-transition'?: Transition;
        'line-color'?: string | StyleFunction | Expression;
        'line-color-transition'?: Transition;
        'line-translate'?: number[] | Expression;
        'line-translate-transition'?: Transition;
        'line-translate-anchor'?: 'map' | 'viewport';
        'line-width'?: number | StyleFunction | Expression;
        'line-width-transition'?: Transition;
        'line-gap-width'?: number | StyleFunction | Expression;
        'line-gap-width-transition'?: Transition;
        'line-offset'?: number | StyleFunction | Expression;
        'line-offset-transition'?: Transition;
        'line-blur'?: number | StyleFunction | Expression;
        'line-blur-transition'?: Transition;
        'line-dasharray'?: number[];
        'line-dasharray-transition'?: Transition;
        'line-pattern'?: string | Expression;
        'line-pattern-transition'?: Transition;
        'line-gradient'?: Expression;
    }

    export interface SymbolLayout {
        visibility?: 'visible' | 'none';

        'symbol-placement'?: 'point' | 'line' | 'line-center';
        'symbol-spacing'?: number | Expression;
        'symbol-avoid-edges'?: boolean;
        'symbol-z-order'?: 'viewport-y' | 'source';
        'icon-allow-overlap'?: boolean | StyleFunction;
        'icon-ignore-placement'?: boolean;
        'icon-optional'?: boolean;
        'icon-rotation-alignment'?: 'map' | 'viewport' | 'auto';
        'icon-size'?: number | StyleFunction | Expression;
        'icon-text-fit'?: 'none' | 'both' | 'width' | 'height';
        'icon-text-fit-padding'?: number[] | Expression;
        'icon-image'?: string | StyleFunction | Expression;
        'icon-rotate'?: number | StyleFunction | Expression;
        'icon-padding'?: number | Expression;
        'icon-keep-upright'?: boolean;
        'icon-offset'?: number[] | StyleFunction | Expression;
        'icon-anchor'?: Anchor | StyleFunction | Expression;
        'icon-pitch-alignment'?: 'map' | 'viewport' | 'auto';
        'text-pitch-alignment'?: 'map' | 'viewport' | 'auto';
        'text-rotation-alignment'?: 'map' | 'viewport' | 'auto';
        'text-field'?: string | StyleFunction;
        'text-font'?: string | string[];
        'text-size'?: number | StyleFunction | Expression;
        'text-max-width'?: number | Expression;
        'text-line-height'?: number | Expression;
        'text-letter-spacing'?: number | Expression;
        'text-justify'?: 'left' | 'center' | 'right';
        'text-anchor'?: Anchor | StyleFunction | Expression;
        'text-max-angle'?: number | Expression;
        'text-rotate'?: number | StyleFunction | Expression;
        'text-padding'?: number | Expression;
        'text-keep-upright'?: boolean;
        'text-transform'?: 'none' | 'uppercase' | 'lowercase' | StyleFunction | Expression;
        'text-offset'?: number[] | Expression;
        'text-allow-overlap'?: boolean;
        'text-ignore-placement'?: boolean;
        'text-optional'?: boolean;
    }

    export interface SymbolPaint {
        'icon-opacity'?: number | StyleFunction | Expression;
        'icon-opacity-transition'?: Transition;
        'icon-color'?: string | StyleFunction | Expression;
        'icon-color-transition'?: Transition;
        'icon-halo-color'?: string | StyleFunction | Expression;
        'icon-halo-color-transition'?: Transition;
        'icon-halo-width'?: number | StyleFunction | Expression;
        'icon-halo-width-transition'?: Transition;
        'icon-halo-blur'?: number | StyleFunction | Expression;
        'icon-halo-blur-transition'?: Transition;
        'icon-translate'?: number[] | Expression;
        'icon-translate-transition'?: Transition;
        'icon-translate-anchor'?: 'map' | 'viewport';
        'text-opacity'?: number | StyleFunction | Expression;
        'text-opacity-transition'?: Transition;
        'text-color'?: string | StyleFunction | Expression;
        'text-color-transition'?: Transition;
        'text-halo-color'?: string | StyleFunction | Expression;
        'text-halo-color-transition'?: Transition;
        'text-halo-width'?: number | StyleFunction | Expression;
        'text-halo-width-transition'?: Transition;
        'text-halo-blur'?: number | StyleFunction | Expression;
        'text-halo-blur-transition'?: Transition;
        'text-translate'?: number[] | Expression;
        'text-translate-transition'?: Transition;
        'text-translate-anchor'?: 'map' | 'viewport';
    }

    export interface RasterLayout {
        visibility?: 'visible' | 'none';
    }

    export interface RasterPaint {
        'raster-opacity'?: number | Expression;
        'raster-opacity-transition'?: Transition;
        'raster-hue-rotate'?: number | Expression;
        'raster-hue-rotate-transition'?: Transition;
        'raster-brightness-min'?: number | Expression;
        'raster-brightness-min-transition'?: Transition;
        'raster-brightness-max'?: number | Expression;
        'raster-brightness-max-transition'?: Transition;
        'raster-saturation'?: number | Expression;
        'raster-saturation-transition'?: Transition;
        'raster-contrast'?: number | Expression;
        'raster-contrast-transition'?: Transition;
        'raster-fade-duration'?: number | Expression;
        'raster-resample'?: 'linear' | 'nearest';
    }

    export interface CircleLayout {
        visibility?: 'visible' | 'none';
    }

    export interface CirclePaint {
        'circle-radius'?: number | StyleFunction | Expression;
        'circle-radius-transition'?: Transition;
        'circle-color'?: string | StyleFunction | Expression;
        'circle-color-transition'?: Transition;
        'circle-blur'?: number | StyleFunction | Expression;
        'circle-blur-transition'?: Transition;
        'circle-opacity'?: number | StyleFunction | Expression;
        'circle-opacity-transition'?: Transition;
        'circle-translate'?: number[] | Expression;
        'circle-translate-transition'?: Transition;
        'circle-translate-anchor'?: 'map' | 'viewport';
        'circle-pitch-scale'?: 'map' | 'viewport';
        'circle-pitch-alignment'?: 'map' | 'viewport';
        'circle-stroke-width'?: number | StyleFunction | Expression;
        'circle-stroke-width-transition'?: Transition;
        'circle-stroke-color'?: string | StyleFunction | Expression;
        'circle-stroke-color-transition'?: Transition;
        'circle-stroke-opacity'?: number | StyleFunction | Expression;
        'circle-stroke-opacity-transition'?: Transition;
    }

    export interface HeatmapLayout {
        visibility?: 'visible' | 'none';
    }

    export interface HeatmapPaint {
        'heatmap-radius'?: number | Expression;
        'heatmap-radius-transition'?: Transition;
        'heatmap-weight'?: number | StyleFunction | Expression;
        'heatmap-intensity'?: number | Expression;
        'heatmap-intensity-transition'?: Transition;
        'heatmap-color'?: string | Expression;
        'heatmap-opacity'?: number | Expression;
        'heatmap-opacity-transition'?: Transition;
    }

    export interface HillshadeLayout {
        visibility?: 'visible' | 'none';
    }

    export interface HillshadePaint {
        'hillshade-illumination-direction'?: number | Expression;
        'hillshade-illumination-anchor'?: 'map' | 'viewport';
        'hillshade-exaggeration'?: number | Expression;
        'hillshade-exaggeration-transition'?: Transition;
        'hillshade-shadow-color'?: string | Expression;
        'hillshade-shadow-color-transition'?: Transition;
        'hillshade-highlight-color'?: string | Expression;
        'hillshade-highlight-color-transition'?: Transition;
        'hillshade-accent-color'?: string | Expression;
        'hillshade-accent-color-transition'?: Transition;
    }
}
