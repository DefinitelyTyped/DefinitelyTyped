// Type definitions for Mapbox GL JS v0.45.0
// Project: https://github.com/mapbox/mapbox-gl-js
// Definitions by: Dominik Bruderer <https://github.com/dobrud>, Patrick Reames <https://github.com/patrickr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="geojson" />

declare namespace mapboxgl {
    let accessToken: string;
    let version: string;

    export function supported(options?: { failIfMajorPerformanceCaveat?: boolean }): boolean;

    export function setRTLTextPlugin(pluginURL: string, callback: Function): void;

    type LngLatLike = number[] | LngLat;
    type LngLatBoundsLike = number[][] | LngLatLike[] | LngLatBounds;
    type PointLike = number[] | Point;
    type Expression = any[];
    type Anchor = 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

    /**
     * Map
     */
    export class Map extends Evented {
        constructor(options?: MapboxOptions);

        addControl(control: Control, position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'): this;

        addControl(control: IControl, position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'): this;

        removeControl(control: Control): this;

        removeControl(control: IControl): this;

        resize(): this;

        getBounds(): mapboxgl.LngLatBounds;

        setMaxBounds(lnglatbounds?: LngLatBoundsLike): this;

        setMinZoom(minZoom?: number): this;

        getMinZoom(): number;

        setMaxZoom(maxZoom?: number): this;

        getMaxZoom(): number;

        project(lnglat: LngLatLike): mapboxgl.Point;

        unproject(point: PointLike): mapboxgl.LngLat;

        isMoving(): boolean;

        isZooming(): boolean;

        isRotating(): boolean;

        queryRenderedFeatures(pointOrBox?: PointLike | PointLike[], parameters?: { layers?: string[], filter?: any[] }): GeoJSON.Feature<GeoJSONGeometry>[];

        querySourceFeatures(sourceID: string, parameters?: { sourceLayer?: string, filter?: any[] }): GeoJSON.Feature<GeoJSONGeometry>[];

        setStyle(style: mapboxgl.Style | string): this;

        getStyle(): mapboxgl.Style;

        isStyleLoaded(): boolean;

        addSource(id: string, source: VectorSource | RasterSource | GeoJSONSource | ImageSource | VideoSource | GeoJSONSourceRaw): this;

        isSourceLoaded(id: string): boolean;

        areTilesLoaded(): boolean;

        removeSource(id: string): this;

        getSource(id: string): VectorSource | RasterSource | GeoJSONSource | ImageSource | VideoSource;

        addImage(name: string, image: HTMLImageElement | ArrayBufferView, options?: { width?: number, height?: number, pixelRatio?: number }): this;

        hasImage(name: string): boolean;

        removeImage(name: string): this;

        loadImage(url: string, callback: Function): this;

        addLayer(layer: mapboxgl.Layer, before?: string): this;

        moveLayer(id: string, beforeId?: string): this;

        removeLayer(id: string): this;

        getLayer(id: string): mapboxgl.Layer;

        setFilter(layer: string, filter?: any[]): this;

        setLayerZoomRange(layerId: string, minzoom?: number, maxzoom?: number): this;

        getFilter(layer: string): any[];

        setPaintProperty(layer: string, name: string, value: any, klass?: string): this;

        getPaintProperty(layer: string, name: string, klass?: string): any;

        setLayoutProperty(layer: string, name: string, value: any): this;

        getLayoutProperty(layer: string, name: string, klass?: string): any;

        setLight(options: mapboxgl.Light, lightOptions: any): this;

        getLight(): mapboxgl.Light;

        getContainer(): HTMLElement;

        getCanvasContainer(): HTMLElement;

        getCanvas(): HTMLCanvasElement;

        loaded(): boolean;

        remove(): void;

        onError(): void;

        showTileBoundaries: boolean;

        showCollisionBoxes: boolean;

        repaint: boolean;

        getCenter(): mapboxgl.LngLat;

        setCenter(center: LngLatLike, eventData?: mapboxgl.EventData): this;

        panBy(offset: number[], options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

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

        fitBounds(bounds: LngLatBoundsLike, options?: mapboxgl.FitBoundsOptions, eventData?: mapboxgl.EventData): this;

        jumpTo(options: mapboxgl.CameraOptions, eventData?: mapboxgl.EventData): this;

        easeTo(options: mapboxgl.CameraOptions | mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

        flyTo(options: mapboxgl.FlyToOptions, eventData?: mapboxgl.EventData): this;

        isMoving(): boolean;

        stop(): this;

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

        /** ID of the container element */
        container?: string | Element;

        /** If true, enable the "drag to pan" interaction (see DragPanHandler). */
        dragPan?: boolean;

        /** If true, enable the "drag to rotate" interaction (see DragRotateHandler). */
        dragRotate?: boolean;

        /** If true, enable the "double click to zoom" interaction (see DoubleClickZoomHandler). */
        doubleClickZoom?: boolean;

        /** If true, the map will track and update the page URL according to map position */
        hash?: boolean;

        /** If true, map creation will fail if the implementation determines that the performance of the created WebGL context would be dramatically lower than expected. */
        failIfMajorPerformanceCaveat?: boolean;

        /** If false, no mouse, touch, or keyboard listeners are attached to the map, so it will not respond to input */
        interactive?: boolean;

        /** If true, enable keyboard shortcuts (see KeyboardHandler). */
        keyboard?: boolean;

        logoPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

        /** If set, the map is constrained to the given bounds. */
        maxBounds?: LngLatBoundsLike;

        /** Maximum zoom of the map */
        maxZoom?: number;

        /** Minimum zoom of the map */
        minZoom?: number;

        /** If true, The maps canvas can be exported to a PNG using map.getCanvas().toDataURL();. This is false by default as a performance optimization. */
        preserveDrawingBuffer?: boolean;

        pitch?: number;

        refreshExpiredTiles?: boolean;

        renderWorldCopies?: boolean;

        /** If true, enable the "scroll to zoom" interaction */
        scrollZoom?: boolean;

        /** stylesheet location */
        style?: mapboxgl.Style | string;

        /** If  true, the map will automatically resize when the browser window resizes */
        trackResize?: boolean;

        /** If true, enable the "pinch to rotate and zoom" interaction (see TouchZoomRotateHandler). */
        touchZoomRotate?: boolean;

        /** Initial zoom level */
        zoom?: number;

        /** Maximum tile cache size for each layer. */
        maxTileCacheSize?: number;
    }

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

        getDefaultPosition(): string;
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
        constructor(options?: { compact?: boolean });
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
        type: 'vector' | 'raster' | 'geojson' | 'image' | 'video' | 'canvas';
    }

    export type GeoJSONGeometry = GeoJSON.Point | GeoJSON.LineString | GeoJSON.MultiPoint | GeoJSON.Polygon | GeoJSON.MultiLineString | GeoJSON.MultiPolygon | GeoJSON.GeometryCollection;

    /**
     * GeoJSONSource
     */

    export interface GeoJSONSourceRaw extends Source, GeoJSONSourceOptions {
        type: 'geojson';
    }

    export class GeoJSONSource implements GeoJSONSourceRaw {
        type: 'geojson';

        constructor(options?: mapboxgl.GeoJSONSourceOptions);

        setData(data: GeoJSON.Feature<GeoJSONGeometry> | GeoJSON.FeatureCollection<GeoJSONGeometry> | String): this;
    }

    export interface GeoJSONSourceOptions {
        data?: GeoJSON.Feature<GeoJSONGeometry> | GeoJSON.FeatureCollection<GeoJSONGeometry> | string;

        maxzoom?: number;

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
        minzoom?: number;
        maxzoom?: number;
    }

    interface RasterSource extends Source {
        type: 'raster';
        url?: string;
        tiles?: string[];
        minzoom?: number;
        maxzoom?: number;
        tileSize?: number;
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

        constructor(sw?: LngLatLike, ne?: LngLatLike);

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
    export class Marker {
        constructor(options?: mapboxgl.MarkerOptions);

        constructor(element?: HTMLElement, options?: mapboxgl.MarkerOptions);

        addTo(map: Map): this;

        remove(): this;

        getLngLat(): LngLat;

        setLngLat(lngLat: LngLatLike): this;

        setPopup(popup?: Popup): this;

        getPopup(): Popup;

        getOffset(): PointLike;

        setOffset(offset: PointLike): this;

        togglePopup(): this;
    }

    export interface MarkerOptions {
        element?: HTMLElement;

        offset?: PointLike;

        anchor?: Anchor;

        color?: string
    }

    /**
     * Evented
     */
    export class Evented {
        on(type: string, listener: Function): this;

        on(type: string, layer: string, listener: Function): this;

        off(type?: string | any, listener?: Function): this;

        off(type?: string | any, layer?: string, listener?: Function): this;

        once(type: string, listener: Function): this;
    }

    /**
     * StyleOptions
     */
    export interface StyleOptions {
        transition?: boolean;
    }

    /**
     * EventData
     */
    export class EventData {
        type: string;
        target: Map;
        originalEvent: Event;
        point: mapboxgl.Point;
        lngLat: mapboxgl.LngLat;
    }

    export class MapMouseEvent {
        type: string;
        target: Map;
        originalEvent: MouseEvent;
        point: mapboxgl.Point;
        lngLat: mapboxgl.LngLat;
        preventDefault(): void;
        defaultPrevented: boolean;
    }

    export class MapTouchEvent {
        type: string;
        map: Map;
        originalEvent: TouchEvent;
        point: mapboxgl.Point;
        lngLat: mapboxgl.LngLat;
        points: Point[];
        lngLats: LngLat[];
        preventDefault(): void;
        defaultPrevented: boolean;
    }

    export class MapBoxZoomEvent {
        originalEvent: MouseEvent;
        boxZoomBounds: LngLatBounds;
    }

    export class MapDataEvent {
        type: string;
        dataType: 'source' | 'style' | 'tile';
        isSourceLoaded?: boolean;
        source?: mapboxgl.Source;
        sourceDataType?: string;
        tile?: any;
        coord?: any;
    }

    export class MapWheelEvent {
        type: string;
        map: Map;
        originalEvent: MouseEvent;
        preventDefault(): void;
        defaultPrevented: boolean;
    }

    /**
     * AnimationOptions
     */
    export interface AnimationOptions {
        /** Number in milliseconds */
        duration?: number;
        easing?: Function;
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

    /**
     * FlyToOptions
     */
    export interface FlyToOptions extends AnimationOptions, CameraOptions {
        curve?: number;
        minZoom?: number;
        speed?: number;
        screenSpeed?: number;
        easing?: Function;
        maxDuration?: number;
    }

    export interface FitBoundsOptions extends mapboxgl.FlyToOptions {
        linear?: boolean;
        easing?: Function;
        padding?: number | mapboxgl.PaddingOptions;
        offset?: mapboxgl.PointLike;
        maxZoom?: number;
        maxDuration?: number;
    }

    /**
     * MapEvent
     */
    export interface MapEvent {
        resize?: void;
        webglcontextlost?: { originalEvent: WebGLContextEvent };
        webglcontextrestored?: { originalEvent: WebGLContextEvent };
        remove?: void;
        dataloading?: { data: mapboxgl.MapDataEvent };
        data?: { data: mapboxgl.MapDataEvent };
        render?: void;
        contextmenu?: { data: mapboxgl.MapMouseEvent };
        dblclick?: { data: mapboxgl.MapMouseEvent };
        click?: { data: mapboxgl.MapMouseEvent };
        tiledataloading?: { data: mapboxgl.MapDataEvent };
        sourcedataloading?: { data: mapboxgl.MapDataEvent };
        styledataloading?: { data: mapboxgl.MapDataEvent };
        touchcancel?: { data: mapboxgl.MapTouchEvent };
        touchmove?: { data: mapboxgl.MapTouchEvent };
        touchend?: { data: mapboxgl.MapTouchEvent };
        touchstart?: { data: mapboxgl.MapTouchEvent };
        mousemove?: { data: mapboxgl.MapMouseEvent };
        mouseup?: { data: mapboxgl.MapMouseEvent };
        mousedown?: { data: mapboxgl.MapMouseEvent };
        moveend?: { data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent };
        move?: { data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent };
        movestart?: { data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent };
        mouseout?: { data: mapboxgl.MapMouseEvent };
        load?: void;
        sourcedata?: { data: mapboxgl.MapDataEvent };
        styledata?: { data: mapboxgl.MapDataEvent };
        zoomend?: { data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent };
        zoom?: { data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent };
        zoomstart?: { data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent };
        boxzoomcancel?: { data: mapboxgl.MapBoxZoomEvent };
        boxzoomstart?: { data: mapboxgl.MapBoxZoomEvent };
        boxzoomend?: { data: mapboxgl.MapBoxZoomEvent };
        rotate?: { data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent };
        rotatestart?: { data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent };
        rotateend?: { data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent };
        drag?: { data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent };
        dragend?: { data: mapboxgl.MapMouseEvent | mapboxgl.MapTouchEvent };
        pitch?: { data: mapboxgl.EventData };
        wheel?: { data: mapboxgl.MapWheelEvent };
    }

    export interface Layer {
        id: string;
        type?: 'fill' | 'line' | 'symbol' | 'circle' | 'fill-extrusion' | 'raster' | 'background' | 'heatmap' | 'hillshade';

        metadata?: any;
        ref?: string;

        source?: string | VectorSource | RasterSource | GeoJSONSource | ImageSource | VideoSource | GeoJSONSourceRaw;

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
        'colorSpace'?: 'rgb' | 'lab' | 'interval';
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
        'fill-antialias'?: boolean;
        'fill-opacity'?: number | StyleFunction | Expression;
        'fill-opacity-transition'?: Transition;
        'fill-color'?: string | StyleFunction | Expression;
        'fill-color-transition'?: Transition;
        'fill-outline-color'?: string | StyleFunction | Expression;
        'fill-outline-color-transition'?: Transition;
        'fill-translate'?: number[] | Expression;
        'fill-translate-transition'?: Transition;
        'fill-translate-anchor'?: 'map' | 'viewport';
        'fill-pattern'?: string;
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
        'fill-extrusion-pattern'?: string;
        'fill-extrusion-pattern-transition'?: Transition;
        'fill-extrusion-height'?: number | StyleFunction | Expression;
        'fill-extrusion-height-transition'?: Transition;
        'fill-extrusion-base'?: number | StyleFunction | Expression;
        'fill-extrusion-base-transition'?: Transition;
    }

    export interface LineLayout {
        visibility?: 'visible' | 'none';

        'line-cap'?: 'butt' | 'round' | 'square';
        'line-join'?: 'bevel' | 'round' | 'miter';
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
        'line-pattern'?: string;
        'line-pattern-transition'?: Transition;
        'line-gradient'?: Expression;
    }

    export interface SymbolLayout {
        visibility?: 'visible' | 'none';

        'symbol-placement'?: 'point' | 'line';
        'symbol-spacing'?: number | Expression;
        'symbol-avoid-edges'?: boolean;
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
        'icon-anchor'?: Anchor;
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
        'text-anchor'?: Anchor;
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

declare module 'mapbox-gl' {
    export = mapboxgl;
}

declare module 'mapbox-gl/dist/mapbox-gl' {
    export = mapboxgl;
}
