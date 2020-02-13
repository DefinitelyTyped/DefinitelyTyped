// Type definitions for Mapbox GL JS 1.7
// Project: https://github.com/mapbox/mapbox-gl-js
// Definitions by: Dominik Bruderer <https://github.com/dobrud>
//                 Patrick Reames <https://github.com/patrickr>
//                 Karl-Aksel Puulmann <https://github.com/macobo>
//                 Dmytro Gokun <https://github.com/dmytro-gokun>
//                 Liam Clarke <https://github.com/LiamAttClarke>
//                 Vladimir Dashukevich <https://github.com/life777>
//                 Marko Klopets <https://github.com/mklopets>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="geojson" />

export = mapboxgl;
export as namespace mapboxgl;

declare namespace mapboxgl {
    let accessToken: string;
    let version: string;
    let baseApiUrl: string;

    /**
     * Number of web workers instantiated on a page with GL JS maps.
     * By default, it is set to half the number of CPU cores (capped at 6).
     */
    let workerCount: number;

    /**
     * Maximum number of images (raster tiles, sprites, icons) to load in parallel, which affects performance in raster-heavy maps.
     * 16 by default.
    */
    let maxParallelImageRequests: number;

    export function supported(options?: { failIfMajorPerformanceCaveat?: boolean }): boolean;

    /**
     * Clears browser storage used by this library. Using this method flushes the Mapbox tile cache that is managed by this library.
     * Tiles may still be cached by the browser in some cases.
     */
    export function clearStorage(callback?: (err?: Error) => void): void;

    export function setRTLTextPlugin(pluginURL: string, callback: (error: Error) => void, deferred?: boolean): void;
    export function getRTLTextPluginStatus(): PluginStatus;

    type PluginStatus = 'unavailable' | 'loading' | 'loaded' | 'error';

    type LngLatLike = LngLat | { lng: number; lat: number; } | { lon: number; lat: number; } | [number, number];
    type LngLatBoundsLike = LngLatBounds | [LngLatLike, LngLatLike] | [number, number, number, number];
    type PointLike = Point | [number, number];

    type ExpressionName =
        // Types
        | 'array' | 'boolean' | 'collator' | 'format' | 'literal' | 'number' | 'object' | 'string'
        | 'to-boolean' | 'to-color' | 'to-number' | 'to-string' | 'typeof'
        // Feature data
        | 'feature-state' | 'geometry-type' | 'id' | 'line-progress' | 'properties'
        // Lookup
        | 'at' | 'get' | 'has' | 'length'
        // Decision
        | '!' | '!=' | '<' | '<=' | '==' | '>' | '>=' | 'all' | 'any' | 'case' | 'match' | 'coalesce'
        // Ramps, scales, curves
        | 'interpolate' | 'interpolate-hcl' | 'interpolate-lab' | 'step'
        // Variable binding
        | 'let' | 'var'
        // String
        | 'concat' | 'downcase' | 'is-supported-script' | 'resolved-locale' | 'upcase'
        // Color
        | 'rgb' | 'rgba'
        // Math
        | '-' | '*' | '/' | '%' | '^' | '+' | 'abs' | 'acos' | 'asin' | 'atan' | 'ceil' | 'cos' | 'e'
        | 'floor' | 'ln' | 'ln2' | 'log10' | 'log2' | 'max' | 'min' | 'pi' | 'round' | 'sin' | 'sqrt' | 'tan'
        // Zoom, Heatmap
        | 'zoom' | 'heatmap-density';

    type Expression = [ExpressionName, ...any[]]

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

        /**
         * Returns an array of GeoJSON Feature objects representing visible features that satisfy the query parameters.
         *
         * The properties value of each returned feature object contains the properties of its source feature. For GeoJSON sources, only string and numeric property values are supported (i.e. null, Array, and Object values are not supported).
         *
         * Each feature includes top-level layer, source, and sourceLayer properties. The layer property is an object representing the style layer to which the feature belongs. Layout and paint properties in this object contain values which are fully evaluated for the given zoom level and feature.
         *
         * Only features that are currently rendered are included. Some features will not be included, like:
         *
         * - Features from layers whose visibility property is "none".
         * - Features from layers whose zoom range excludes the current zoom level.
         * - Symbol features that have been hidden due to text or icon collision.
         *
         * Features from all other layers are included, including features that may have no visible contribution to the rendered result; for example, because the layer's opacity or color alpha component is set to 0.
         *
         * The topmost rendered feature appears first in the returned array, and subsequent features are sorted by descending z-order. Features that are rendered multiple times (due to wrapping across the antimeridian at low zoom levels) are returned only once (though subject to the following caveat).
         *
         * Because features come from tiled vector data or GeoJSON data that is converted to tiles internally, feature geometries may be split or duplicated across tile boundaries and, as a result, features may appear multiple times in query results. For example, suppose there is a highway running through the bounding rectangle of a query. The results of the query will be those parts of the highway that lie within the map tiles covering the bounding rectangle, even if the highway extends into other tiles, and the portion of the highway within each map tile will be returned as a separate feature. Similarly, a point feature near a tile boundary may appear in multiple tiles due to tile buffering.
         *
         * @param pointOrBox The geometry of the query region: either a single point or southwest and northeast points describing a bounding box. Omitting this parameter (i.e. calling Map#queryRenderedFeatures with zero arguments, or with only a  options argument) is equivalent to passing a bounding box encompassing the entire map viewport.
         * @param options
         */
        queryRenderedFeatures(pointOrBox?: PointLike | [PointLike, PointLike], options?: { layers?: string[], filter?: any[], validate?: boolean }): MapboxGeoJSONFeature[];

        /**
         * Returns an array of GeoJSON Feature objects representing features within the specified vector tile or GeoJSON source that satisfy the query parameters.
         *
         * In contrast to Map#queryRenderedFeatures, this function returns all features matching the query parameters, whether or not they are rendered by the current style (i.e. visible). The domain of the query includes all currently-loaded vector tiles and GeoJSON source tiles: this function does not check tiles outside the currently visible viewport.
         *
         * Because features come from tiled vector data or GeoJSON data that is converted to tiles internally, feature geometries may be split or duplicated across tile boundaries and, as a result, features may appear multiple times in query results. For example, suppose there is a highway running through the bounding rectangle of a query. The results of the query will be those parts of the highway that lie within the map tiles covering the bounding rectangle, even if the highway extends into other tiles, and the portion of the highway within each map tile will be returned as a separate feature. Similarly, a point feature near a tile boundary may appear in multiple tiles due to tile buffering.
         *
         * @param sourceID The ID of the vector tile or GeoJSON source to query.
         * @param parameters
         */
        querySourceFeatures(
            sourceID: string,
            parameters?: {
                sourceLayer?: string;
                filter?: any[];
                validate?: boolean;
            }
        ): MapboxGeoJSONFeature[];

        setStyle(style: mapboxgl.Style | string, options?: { diff?: boolean, localIdeographFontFamily?: string }): this;

        getStyle(): mapboxgl.Style;

        isStyleLoaded(): boolean;

        addSource(id: string, source: AnySourceData): this;

        isSourceLoaded(id: string): boolean;

        areTilesLoaded(): boolean;

        removeSource(id: string): this;

        getSource(id: string): AnySourceImpl;

        addImage(name: string, image: HTMLImageElement | ArrayBufferView | { width: number, height: number, data: Uint8Array | Uint8ClampedArray } | ImageData, options?: { pixelRatio?: number, sdf?: boolean }): this;

        hasImage(name: string): boolean;

        removeImage(name: string): this;

        loadImage(url: string, callback: Function): this;

        listImages(): string[];

        addLayer(layer: mapboxgl.Layer | mapboxgl.CustomLayerInterface, before?: string): this;

        moveLayer(id: string, beforeId?: string): this;

        removeLayer(id: string): this;

        getLayer(id: string): mapboxgl.Layer;

        setFilter(layer: string, filter?: any[] | null): this;

        setLayerZoomRange(layerId: string, minzoom: number, maxzoom: number): this;

        getFilter(layer: string): any[];

        setPaintProperty(layer: string, name: string, value: any, klass?: string): this;

        getPaintProperty(layer: string, name: string): any;

        setLayoutProperty(layer: string, name: string, value: any): this;

        getLayoutProperty(layer: string, name: string): any;

        setLight(options: mapboxgl.Light, lightOptions?: any): this;

        getLight(): mapboxgl.Light;

        setFeatureState(feature: FeatureIdentifier | mapboxgl.MapboxGeoJSONFeature, state: { [key: string]: any }): void;

        getFeatureState(feature: FeatureIdentifier | mapboxgl.MapboxGeoJSONFeature): { [key: string]: any };

        removeFeatureState(target: FeatureIdentifier | mapboxgl.MapboxGeoJSONFeature, key?: string): void;

        getContainer(): HTMLElement;

        getCanvasContainer(): HTMLElement;

        getCanvas(): HTMLCanvasElement;

        loaded(): boolean;

        remove(): void;

        triggerRepaint(): void;

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

        cameraForBounds(bounds: LngLatBoundsLike, options?: CameraForBoundsOptions): CameraForBoundsResult | undefined;

        fitBounds(bounds: LngLatBoundsLike, options?: mapboxgl.FitBoundsOptions, eventData?: mapboxgl.EventData): this;

        fitScreenCoordinates(p0: PointLike, p1: PointLike, bearing: number, options?: AnimationOptions & CameraOptions, eventData?: EventData): this;

        jumpTo(options: mapboxgl.CameraOptions, eventData?: mapboxgl.EventData): this;

        easeTo(options: mapboxgl.EaseToOptions, eventData?: mapboxgl.EventData): this;

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
        /**
         * If true, the gl context will be created with MSA antialiasing, which can be useful for antialiasing custom layers.
         * This is false by default as a performance optimization.
         */
        antialias?: boolean;

        /** If true, an attribution control will be added to the map. */
        attributionControl?: boolean;

        bearing?: number;

        /** Snap to north threshold in degrees. */
        bearingSnap?: number;

        /** The initial bounds of the map. If bounds is specified, it overrides center and zoom constructor options. */
        bounds?: LngLatBoundsLike;

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
        container: string | HTMLElement;

        /** String or strings to show in an AttributionControl.
         * Only applicable if options.attributionControl is `true`. */
        customAttribution?: string | string[];

        /** If true, enable the "drag to pan" interaction (see DragPanHandler). */
        dragPan?: boolean;

        /** If true, enable the "drag to rotate" interaction (see DragRotateHandler). */
        dragRotate?: boolean;

        /** If true, enable the "double click to zoom" interaction (see DoubleClickZoomHandler). */
        doubleClickZoom?: boolean;

        /** If `true`, the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL.
        * For example, `http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60`.
        * An additional string may optionally be provided to indicate a parameter-styled hash,
        * e.g. http://path/to/my/page.html#map=2.59/39.26/53.07/-24.1/60&foo=bar, where foo
        * is a custom parameter and bar is an arbitrary hash distinct from the map hash.
        * */
        hash?: boolean | string;

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

        /** A fitBounds options object to use only when setting the bounds option. */
        fitBoundsOptions?: FitBoundsOptions;

        /** If false, no mouse, touch, or keyboard listeners are attached to the map, so it will not respond to input */
        interactive?: boolean;

        /** If true, enable keyboard shortcuts (see KeyboardHandler). */
        keyboard?: boolean;

        /** A patch to apply to the default localization table for UI strings, e.g. control tooltips.
         * The `locale` object maps namespaced UI string IDs to translated strings in the target language;
         * see `src/ui/default_locale.js` for an example with all supported string IDs.
         * The object may specify all UI strings (thereby adding support for a new translation) or
         * only a subset of strings (thereby patching the default translation table).
        */
        locale?: { [key: string]: string };

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

        /** Maximum pitch of the map */
        maxPitch?: number,

        /** Maximum zoom of the map */
        maxZoom?: number;

        /** Minimum pitch of the map */
        minPitch?: number,

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

        /**
         * If specified, map will use this token instead of the one defined in mapboxgl.accessToken.
         *
         * @default null
         */
        accessToken?: string;
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

    export interface FeatureIdentifier {
        id?: string | number,
        source: string
        sourceLayer?: string
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

        setZoomRate(zoomRate: number): void;

        setWheelZoomRate(wheelZoomRate: number): void;
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
		constructor(options?: {
            showCompass?: boolean;
            showZoom?: boolean;
            visualizePitch?: boolean;
        });
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
     * FullscreenControl
     */
    export class FullscreenControl extends Control {
        constructor(options?: FullscreenControlOptions | null);
    }

    export interface FullscreenControlOptions {
        /**
         * A compatible DOM element which should be made full screen.
         * By default, the map container element will be made full screen.
         */
        container?: HTMLElement | null;
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

        /**
         * Sets the geographical location of the popup's anchor, and moves the popup to it. Replaces trackPointer() behavior.
         *
         * @param lnglat The geographical location to set as the popup's anchor.
         */
        setLngLat(lnglat: LngLatLike): this;

        /**
         * Tracks the popup anchor to the cursor position, on screens with a pointer device (will be hidden on touchscreens). Replaces the setLngLat behavior.
         * For most use cases, `closeOnClick` and `closeButton` should also be set to `false` here.
         */
        trackPointer(): this;

        /** Returns the `Popup`'s HTML element. */
        getElement(): HTMLElement;

        setText(text: string): this;

        setHTML(html: string): this;

        setDOMContent(htmlNode: Node): this;

        getMaxWidth(): string;

        setMaxWidth(maxWidth: string): this;

        /**
         * Adds a CSS class to the popup container element.
         *
         * @param {string} className Non-empty string with CSS class name to add to popup container
         *
         * @example
         * let popup = new mapboxgl.Popup()
         * popup.addClassName('some-class')
         */
        addClassName(className: string): void;

        /**
         * Removes a CSS class from the popup container element.
         *
         * @param {string} className Non-empty string with CSS class name to remove from popup container
         *
         * @example
         * let popup = new mapboxgl.Popup()
         * popup.removeClassName('some-class')
         */
        removeClassName(className: string): void;

        /**
         * Add or remove the given CSS class on the popup container, depending on whether the container currently has that class.
         *
         * @param {string} className Non-empty string with CSS class name to add/remove
         *
         * @returns {boolean} if the class was removed return false, if class was added, then return true
         *
         * @example
         * let popup = new mapboxgl.Popup()
         * popup.toggleClassName('toggleClass')
         */
        toggleClassName(className: string): void;
    }

    export interface PopupOptions {
        closeButton?: boolean;

        closeOnClick?: boolean;

        /**
        * @param {boolean} [options.closeOnMove=false] If `true`, the popup will closed when the map moves.
        */
        closeOnMove?: boolean;

        anchor?: Anchor;

        offset?: number | PointLike | { [key: string]: PointLike; };

        className?: string;

        maxWidth?: string;
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
        sources?: Sources;
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

    export interface Sources {
        [sourceName: string]: AnySourceData;
    }

    export type PromoteIdSpecification = {[key: string]: string} | string;

    export type AnySourceData = GeoJSONSourceRaw | VideoSourceRaw | ImageSourceRaw | CanvasSourceRaw | VectorSource | RasterSource | RasterDemSource

    export type AnySourceImpl = GeoJSONSource | VideoSource | ImageSource | CanvasSource | VectorSource | RasterSource | RasterDemSource

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

        generateId?: boolean;

        promoteId?: PromoteIdSpecification;
    }

    /**
     * VideoSource
     */
    export interface VideoSourceRaw extends Source, VideoSourceOptions {
        type: 'video';
    }

    export class VideoSource implements VideoSourceRaw {
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
    export interface ImageSourceRaw extends Source, ImageSourceOptions {
        type: 'image';
    }

    export class ImageSource implements ImageSourceRaw {
        type: 'image';

        constructor(options?: mapboxgl.ImageSourceOptions);

        updateImage(options: ImageSourceOptions): this;

        setCoordinates(coordinates: number[][]): this;
    }

    export interface ImageSourceOptions {
        url?: string;

        coordinates?: number[][];
    }

    /**
     * CanvasSource
     */
    export interface CanvasSourceRaw extends Source, CanvasSourceOptions {
        type: 'canvas';
    }

    export class CanvasSource implements CanvasSourceRaw {
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
        promoteId?: PromoteIdSpecification;
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

        /** Check if the point is within the bounding box. */
        contains(lnglat: LngLatLike): boolean;

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
     * MercatorCoordinate
     */
    export class MercatorCoordinate {
        /** The x component of the position. */
        x: number;

        /** The y component of the position. */
        y: number;

        /**
         * The z component of the position.
         *
         * @default 0
         */
        z?: number;

        constructor(x: number, y: number, z?: number);

        /** Returns the altitude in meters of the coordinate. */
        toAltitude(): number;

        /** Returns the LngLat for the coordinate. */
        toLngLat(): LngLat;

        /**
         * Returns the distance of 1 meter in MercatorCoordinate units at this latitude.
         *
         * For coordinates in real world units using meters, this naturally provides the
         * scale to transform into MercatorCoordinates.
         */
        meterInMercatorCoordinateUnits(): number;

        /** Project a LngLat to a MercatorCoordinate. */
        static fromLngLat(lngLatLike: LngLatLike, altitude?: number): MercatorCoordinate;
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

    type Alignment = 'map' | 'viewport' | 'auto';

    export interface MarkerOptions {
        /** DOM element to use as a marker. The default is a light blue, droplet-shaped SVG marker */
        element?: HTMLElement;

        /** The offset in pixels as a PointLike object to apply relative to the element's center. Negatives indicate left and up. */
        offset?: PointLike;

        /** A string indicating the part of the Marker that should be positioned closest to the coordinate set via Marker.setLngLat.
         * Options are `'center'`, `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-left'`, `'top-right'`, `'bottom-left'`, and `'bottom-right'`.
         * The default value os `'center'`
        */
        anchor?: Anchor;

        /** The color to use for the default marker if options.element is not provided. The default is light blue (#3FB1CE). */
        color?: string

        /** A boolean indicating whether or not a marker is able to be dragged to a new position on the map. The default value is false */
        draggable?: boolean;

        /** The rotation angle of the marker in degrees, relative to its `rotationAlignment` setting. A positive value will rotate the marker clockwise.
         * The default value is 0.
        */
        rotation?: number,

        /** `map` aligns the `Marker`'s rotation relative to the map, maintaining a bearing as the map rotates.
         * `viewport` aligns the `Marker`'s rotation relative to the viewport, agnostic to map rotations.
         * `auto` is equivalent to `viewport`.
         * The default value is `auto`
        */
        rotationAlignment?: Alignment,

        /** `map` aligns the `Marker` to the plane of the map.
         * `viewport` aligns the `Marker` to the plane of the viewport.
         * `auto` automatically matches the value of `rotationAlignment`.
         * The default value is `auto`.
         */
        pitchAlignment?: Alignment
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
        source: Source;
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

        /** If `true`, then the animation is considered essential and will not be affected by `prefers-reduced-motion`.
         * Otherwise, the transition will happen instantly if the user has enabled the `reduced motion` accesibility feature in their operating system.
         */
        essential?: boolean;
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

    // The Mapbox docs say that if the result is defined, it will have zoom, center and bearing set.
    // In practice center is always a {lat, lng} object.
    export type CameraForBoundsResult = Required<Pick<CameraOptions, 'zoom' | 'bearing'>> & {
        /** Map center */
        center: {lng: number; lat: number};
    };

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

    /**
     * EaseToOptions
     */
    export interface EaseToOptions extends AnimationOptions, CameraOptions {
        delayEndEvents?: number;
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

    export type AnyLayout = BackgroundLayout | FillLayout | FillExtrusionLayout | LineLayout | SymbolLayout | RasterLayout | CircleLayout | HeatmapLayout | HillshadeLayout;

    export interface Layer {
        id: string;
        type?: 'fill' | 'line' | 'symbol' | 'circle' | 'fill-extrusion' | 'raster' | 'background' | 'heatmap' | 'hillshade';

        metadata?: any;
        ref?: string;

        source?: string | AnySourceData;

        'source-layer'?: string;

        minzoom?: number;
        maxzoom?: number;

        interactive?: boolean;

        filter?: any[];
        layout?: AnyLayout;
        paint?: BackgroundPaint | FillPaint | FillExtrusionPaint | LinePaint | SymbolPaint | RasterPaint | CirclePaint | HeatmapPaint | HillshadePaint;
    }

    // See https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface
    export interface CustomLayerInterface {
        /** A unique layer id. */
        id: string;

        /* The layer's type. Must be "custom". */
        type: 'custom';

        /* Either "2d" or "3d". Defaults to  "2d". */
        renderingMode?: '2d' | '3d';

        /**
         * Optional method called when the layer has been removed from the Map with Map#removeLayer.
         * This gives the layer a chance to clean up gl resources and event listeners.
         * @param map The Map this custom layer was just added to.
         * @param gl The gl context for the map.
         */
        onRemove?(map: mapboxgl.Map, gl: WebGLRenderingContext): void;

        /**
         * Optional method called when the layer has been added to the Map with Map#addLayer.
         * This gives the layer a chance to initialize gl resources and register event listeners.
         * @param map The Map this custom layer was just added to.
         * @param gl The gl context for the map.
         */
        onAdd?(map: mapboxgl.Map, gl: WebGLRenderingContext): void;

        /**
         * Optional method called during a render frame to allow a layer to prepare resources
         * or render into a texture.
         *
         * The layer cannot make any assumptions about the current GL state and must bind a framebuffer
         * before rendering.
         * @param gl The map's gl context.
         * @param matrix The map's camera matrix. It projects spherical mercator coordinates to gl
         *               coordinates. The mercator coordinate  [0, 0] represents the top left corner of
         *               the mercator world and  [1, 1] represents the bottom right corner. When the
         *               renderingMode is  "3d" , the z coordinate is conformal. A box with identical
         *               x, y, and z lengths in mercator units would be rendered as a cube.
         *               MercatorCoordinate .fromLatLng can be used to project a  LngLat to a mercator
         *               coordinate.
         */
        prerender?(gl: WebGLRenderingContext, matrix: number[]): void;

        /**
         * Called during a render frame allowing the layer to draw into the GL context.
         *
         * The layer can assume blending and depth state is set to allow the layer to properly blend
         * and clip other layers. The layer cannot make any other assumptions about the current GL state.
         *
         * If the layer needs to render to a texture, it should implement the prerender method to do this
         * and only use the render method for drawing directly into the main framebuffer.
         *
         * The blend function is set to gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA). This expects
         * colors to be provided in premultiplied alpha form where the r, g and b values are already
         * multiplied by the a value. If you are unable to provide colors in premultiplied form you may
         * want to change the blend function to
         * gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA).
         *
         * @param gl The map's gl context.
         * @param matrix The map's camera matrix. It projects spherical mercator coordinates to gl
         *               coordinates. The mercator coordinate  [0, 0] represents the top left corner of
         *               the mercator world and  [1, 1] represents the bottom right corner. When the
         *               renderingMode is  "3d" , the z coordinate is conformal. A box with identical
         *               x, y, and z lengths in mercator units would be rendered as a cube.
         *               MercatorCoordinate .fromLatLng can be used to project a  LngLat to a mercator
         *               coordinate.
         */
        render(gl: WebGLRenderingContext, matrix: number[]): void;
    }

    export interface StyleFunction {
        stops?: any[][];
        property?: string;
        base?: number;
        type?: 'identity' | 'exponential' | 'interval' | 'categorical';
        default?: any;
        'colorSpace'?: 'rgb' | 'lab' | 'hcl';
    }

    type Visibility = 'visible' | 'none';

    export interface Layout {
        visibility?: Visibility;
    }

    export interface BackgroundLayout extends Layout {
    }

    export interface BackgroundPaint {
        'background-color'?: string | Expression;
        'background-color-transition'?: Transition;
        'background-pattern'?: string;
        'background-pattern-transition'?: Transition;
        'background-opacity'?: number | Expression;
        'background-opacity-transition'?: Transition;
    }

    export interface FillLayout extends Layout {
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

    export interface FillExtrusionLayout extends Layout {
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
        'fill-extrusion-vertical-gradient'?: boolean;
    }

    export interface LineLayout extends Layout {
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
        'line-dasharray'?: number[] | Expression;
        'line-dasharray-transition'?: Transition;
        'line-pattern'?: string | Expression;
        'line-pattern-transition'?: Transition;
        'line-gradient'?: Expression;
    }

    export interface SymbolLayout extends Layout {
        'symbol-placement'?: 'point' | 'line' | 'line-center';
        'symbol-spacing'?: number | Expression;
        'symbol-avoid-edges'?: boolean;
        'symbol-z-order'?: 'viewport-y' | 'source';
        'icon-allow-overlap'?: boolean | StyleFunction | Expression;
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
        'text-field'?: string | StyleFunction | Expression;
        'text-font'?: string | string[] | Expression;
        'text-size'?: number | StyleFunction | Expression;
        'text-max-width'?: number | Expression;
        'text-line-height'?: number | Expression;
        'text-letter-spacing'?: number | Expression;
        'text-justify'?: 'left' | 'center' | 'right' | Expression;
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

    export interface RasterLayout extends Layout {
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
        'raster-resampling'?: 'linear' | 'nearest';
    }

    export interface CircleLayout extends Layout {
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

    export interface HeatmapLayout extends Layout {
    }

    export interface HeatmapPaint {
        'heatmap-radius'?: number | StyleFunction | Expression;
        'heatmap-radius-transition'?: Transition;
        'heatmap-weight'?: number | StyleFunction | Expression;
        'heatmap-intensity'?: number | StyleFunction | Expression;
        'heatmap-intensity-transition'?: Transition;
        'heatmap-color'?: string | StyleFunction | Expression;
        'heatmap-opacity'?: number | StyleFunction | Expression;
        'heatmap-opacity-transition'?: Transition;
    }

    export interface HillshadeLayout extends Layout {
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
