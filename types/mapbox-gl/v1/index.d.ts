// Type definitions for Mapbox GL JS 1.13
// Project: https://github.com/mapbox/mapbox-gl-js
// Definitions by: Dominik Bruderer <https://github.com/dobrud>
//                 Karl-Aksel Puulmann <https://github.com/macobo>
//                 Dmytro Gokun <https://github.com/dmytro-gokun>
//                 Liam Clarke <https://github.com/LiamAttClarke>
//                 Vladimir Dashukevich <https://github.com/life777>
//                 Marko Klopets <https://github.com/mklopets>
//                 André Fonseca <https://github.com/amxfonseca>
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

    export function supported(options?: { failIfMajorPerformanceCaveat?: boolean | undefined }): boolean;

    /**
     * Clears browser storage used by this library. Using this method flushes the Mapbox tile cache that is managed by this library.
     * Tiles may still be cached by the browser in some cases.
     */
    export function clearStorage(callback?: (err?: Error) => void): void;

    export function setRTLTextPlugin(pluginURL: string, callback: (error: Error) => void, deferred?: boolean): void;
    export function getRTLTextPluginStatus(): PluginStatus;

    /**
     * Initializes resources like WebWorkers that can be shared across maps to lower load
     * times in some situations. `mapboxgl.workerUrl` and `mapboxgl.workerCount`, if being
     * used, must be set before `prewarm()` is called to have an effect.
     *
     * By default, the lifecycle of these resources is managed automatically, and they are
     * lazily initialized when a Map is first created. By invoking `prewarm()`, these
     * resources will be created ahead of time, and will not be cleared when the last Map
     * is removed from the page. This allows them to be re-used by new Map instances that
     * are created later. They can be manually cleared by calling
     * `mapboxgl.clearPrewarmedResources()`. This is only necessary if your web page remains
     * active but stops using maps altogether.
     *
     * This is primarily useful when using GL-JS maps in a single page app, wherein a user
     * would navigate between various views that can cause Map instances to constantly be
     * created and destroyed.
     */
    export function prewarm(): void;

    /**
     * Clears up resources that have previously been created by `mapboxgl.prewarm()`.
     * Note that this is typically not necessary. You should only call this function
     * if you expect the user of your app to not return to a Map view at any point
     * in your application.
     */
    export function clearPrewarmedResources(): void;

    type PluginStatus = 'unavailable' | 'loading' | 'loaded' | 'error';

    type LngLatLike =
        | [number, number]
        | LngLat
        | { lng: number; lat: number }
        | { lon: number; lat: number }
        | [number, number];

    type LngLatBoundsLike = LngLatBounds | [LngLatLike, LngLatLike] | [number, number, number, number] | LngLatLike;
    type PointLike = Point | [number, number];
    type Offset = number | PointLike | { [_: string]: PointLike };

    type ExpressionName =
        // Types
        | 'array'
        | 'boolean'
        | 'collator'
        | 'format'
        | 'literal'
        | 'number'
        | 'object'
        | 'string'
        | 'image'
        | 'to-boolean'
        | 'to-color'
        | 'to-number'
        | 'to-string'
        | 'typeof'
        // Feature data
        | 'feature-state'
        | 'geometry-type'
        | 'id'
        | 'line-progress'
        | 'properties'
        // Lookup
        | 'at'
        | 'get'
        | 'has'
        | 'in'
        | 'index-of'
        | 'length'
        | 'slice'
        // Decision
        | '!'
        | '!='
        | '<'
        | '<='
        | '=='
        | '>'
        | '>='
        | 'all'
        | 'any'
        | 'case'
        | 'match'
        | 'coalesce'
        // Ramps, scales, curves
        | 'interpolate'
        | 'interpolate-hcl'
        | 'interpolate-lab'
        | 'step'
        // Variable binding
        | 'let'
        | 'var'
        // String
        | 'concat'
        | 'downcase'
        | 'is-supported-script'
        | 'resolved-locale'
        | 'upcase'
        // Color
        | 'rgb'
        | 'rgba'
        // Math
        | '-'
        | '*'
        | '/'
        | '%'
        | '^'
        | '+'
        | 'abs'
        | 'acos'
        | 'asin'
        | 'atan'
        | 'ceil'
        | 'cos'
        | 'e'
        | 'floor'
        | 'ln'
        | 'ln2'
        | 'log10'
        | 'log2'
        | 'max'
        | 'min'
        | 'pi'
        | 'round'
        | 'sin'
        | 'sqrt'
        | 'tan'
        // Zoom, Heatmap
        | 'zoom'
        | 'heatmap-density';

    type Expression = [ExpressionName, ...any[]];

    type Anchor =
        | 'center'
        | 'left'
        | 'right'
        | 'top'
        | 'bottom'
        | 'top-left'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-right';

    /**
     * Map
     */
    export class Map extends Evented {
        constructor(options?: MapboxOptions);

        addControl(
            control: Control | IControl,
            position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left',
        ): this;

        removeControl(control: Control | IControl): this;

        /**
         * Checks if a control exists on the map.
         *
         * @param {IControl} control The {@link IControl} to check.
         * @returns {boolean} True if map contains control.
         * @example
         */
        hasControl(control: IControl): boolean;

        resize(eventData?: EventData): this;

        getBounds(): LngLatBounds;

        getMaxBounds(): LngLatBounds | null;

        setMaxBounds(lnglatbounds?: LngLatBoundsLike): this;

        setMinZoom(minZoom?: number | null): this;

        getMinZoom(): number;

        setMaxZoom(maxZoom?: number | null): this;

        getMaxZoom(): number;

        setMinPitch(minPitch?: number | null): this;

        getMinPitch(): number;

        setMaxPitch(maxPitch?: number | null): this;

        getMaxPitch(): number;

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
        queryRenderedFeatures(
            pointOrBox?: PointLike | [PointLike, PointLike],
            options?: { layers?: string[] | undefined; filter?: any[] | undefined } & FilterOptions,
        ): MapboxGeoJSONFeature[];

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
                sourceLayer?: string | undefined;
                filter?: any[] | undefined;
            } & FilterOptions,
        ): MapboxGeoJSONFeature[];

        setStyle(style: mapboxgl.Style | string, options?: { diff?: boolean | undefined; localIdeographFontFamily?: string | undefined }): this;

        getStyle(): mapboxgl.Style;

        isStyleLoaded(): boolean;

        addSource(id: string, source: AnySourceData): this;

        isSourceLoaded(id: string): boolean;

        areTilesLoaded(): boolean;

        removeSource(id: string): this;

        getSource(id: string): AnySourceImpl;

        addImage(
            name: string,
            image:
                | HTMLImageElement
                | ArrayBufferView
                | { width: number; height: number; data: Uint8Array | Uint8ClampedArray }
                | ImageData
                | ImageBitmap,
            options?: { pixelRatio?: number | undefined; sdf?: boolean | undefined },
        ): this;

        hasImage(name: string): boolean;

        removeImage(name: string): this;

        loadImage(url: string, callback: Function): this;

        listImages(): string[];

        addLayer(layer: mapboxgl.AnyLayer, before?: string): this;

        moveLayer(id: string, beforeId?: string): this;

        removeLayer(id: string): this;

        getLayer(id: string): mapboxgl.AnyLayer;

        setFilter(layer: string, filter?: any[] | boolean | null, options?: FilterOptions | null): this;

        setLayerZoomRange(layerId: string, minzoom: number, maxzoom: number): this;

        getFilter(layer: string): any[];

        setPaintProperty(layer: string, name: string, value: any, klass?: string): this;

        getPaintProperty(layer: string, name: string): any;

        setLayoutProperty(layer: string, name: string, value: any): this;

        getLayoutProperty(layer: string, name: string): any;

        setLight(options: mapboxgl.Light, lightOptions?: any): this;

        getLight(): mapboxgl.Light;

        setFeatureState(
            feature: FeatureIdentifier | mapboxgl.MapboxGeoJSONFeature,
            state: { [key: string]: any },
        ): void;

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

        /**
         * Gets and sets a Boolean indicating whether the map will visualize
         * the padding offsets.
         *
         * @name showPadding
         * @type {boolean}
         * @instance
         * @memberof Map
         */
        showPadding: boolean;

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

        /**
         * Returns the current padding applied around the map viewport.
         *
         * @memberof Map#
         * @returns The current padding around the map viewport.
         */
        getPadding(): PaddingOptions;

        /**
         * Sets the padding in pixels around the viewport.
         *
         * Equivalent to `jumpTo({padding: padding})`.
         *
         * @memberof Map#
         * @param padding The desired padding. Format: { left: number, right: number, top: number, bottom: number }
         * @param eventData Additional properties to be added to event objects of events triggered by this method.
         * @fires movestart
         * @fires moveend
         * @returns {Map} `this`
         * @example
         * // Sets a left padding of 300px, and a top padding of 50px
         * map.setPadding({ left: 300, top: 50 });
         */
        setPadding(padding: PaddingOptions, eventData?: EventData): this;

        rotateTo(bearing: number, options?: mapboxgl.AnimationOptions, eventData?: EventData): this;

        resetNorth(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

        resetNorthPitch(options?: mapboxgl.AnimationOptions | null, eventData?: mapboxgl.EventData | null): this;

        snapToNorth(options?: mapboxgl.AnimationOptions, eventData?: mapboxgl.EventData): this;

        getPitch(): number;

        setPitch(pitch: number, eventData?: EventData): this;

        cameraForBounds(bounds: LngLatBoundsLike, options?: CameraForBoundsOptions): CameraForBoundsResult | undefined;

        fitBounds(bounds: LngLatBoundsLike, options?: mapboxgl.FitBoundsOptions, eventData?: mapboxgl.EventData): this;

        fitScreenCoordinates(
            p0: PointLike,
            p1: PointLike,
            bearing: number,
            options?: AnimationOptions & CameraOptions,
            eventData?: EventData,
        ): this;

        jumpTo(options: mapboxgl.CameraOptions, eventData?: mapboxgl.EventData): this;

        easeTo(options: mapboxgl.EaseToOptions, eventData?: mapboxgl.EventData): this;

        flyTo(options: mapboxgl.FlyToOptions, eventData?: mapboxgl.EventData): this;

        isEasing(): boolean;

        stop(): this;

        on<T extends keyof MapLayerEventType>(
            type: T,
            layer: string,
            listener: (ev: MapLayerEventType[T] & EventData) => void,
        ): this;
        on<T extends keyof MapEventType>(type: T, listener: (ev: MapEventType[T] & EventData) => void): this;
        on(type: string, listener: (ev: any) => void): this;

        once<T extends keyof MapLayerEventType>(
            type: T,
            layer: string,
            listener: (ev: MapLayerEventType[T] & EventData) => void,
        ): this;
        once<T extends keyof MapEventType>(type: T, listener: (ev: MapEventType[T] & EventData) => void): this;
        once(type: string, listener: (ev: any) => void): this;

        off<T extends keyof MapLayerEventType>(
            type: T,
            layer: string,
            listener: (ev: MapLayerEventType[T] & EventData) => void,
        ): this;
        off<T extends keyof MapEventType>(type: T, listener: (ev: MapEventType[T] & EventData) => void): this;
        off(type: string, listener: (ev: any) => void): this;

        scrollZoom: ScrollZoomHandler;

        boxZoom: BoxZoomHandler;

        dragRotate: DragRotateHandler;

        dragPan: DragPanHandler;

        keyboard: KeyboardHandler;

        doubleClickZoom: DoubleClickZoomHandler;

        touchZoomRotate: TouchZoomRotateHandler;

        touchPitch: TouchPitchHandler;
    }

    export interface MapboxOptions {
        /**
         * If true, the gl context will be created with MSA antialiasing, which can be useful for antialiasing custom layers.
         * This is false by default as a performance optimization.
         */
        antialias?: boolean | undefined;

        /** If true, an attribution control will be added to the map. */
        attributionControl?: boolean | undefined;

        bearing?: number | undefined;

        /** Snap to north threshold in degrees. */
        bearingSnap?: number | undefined;

        /** The initial bounds of the map. If bounds is specified, it overrides center and zoom constructor options. */
        bounds?: LngLatBoundsLike | undefined;

        /** If true, enable the "box zoom" interaction (see BoxZoomHandler) */
        boxZoom?: boolean | undefined;

        /** initial map center */
        center?: LngLatLike | undefined;

        /**
         * The max number of pixels a user can shift the mouse pointer during a click for it to be
         * considered a valid click (as opposed to a mouse drag).
         *
         * @default 3
         */
        clickTolerance?: number | undefined;

        /**
         * If `true`, Resource Timing API information will be collected for requests made by GeoJSON
         * and Vector Tile web workers (this information is normally inaccessible from the main
         * Javascript thread). Information will be returned in a `resourceTiming` property of
         * relevant `data` events.
         *
         * @default false
         */
        collectResourceTiming?: boolean | undefined;

        /**
         * If `true`, symbols from multiple sources can collide with each other during collision
         * detection. If `false`, collision detection is run separately for the symbols in each source.
         *
         * @default true
         */
        crossSourceCollisions?: boolean | undefined;

        /** ID of the container element */
        container: string | HTMLElement;

        /** String or strings to show in an AttributionControl.
         * Only applicable if options.attributionControl is `true`. */
        customAttribution?: string | string[] | undefined;

        /** If true, enable the "drag to pan" interaction (see DragPanHandler). */
        dragPan?: boolean | undefined;

        /** If true, enable the "drag to rotate" interaction (see DragRotateHandler). */
        dragRotate?: boolean | undefined;

        /** If true, enable the "double click to zoom" interaction (see DoubleClickZoomHandler). */
        doubleClickZoom?: boolean | undefined;

        /** If `true`, the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL.
         * For example, `http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60`.
         * An additional string may optionally be provided to indicate a parameter-styled hash,
         * e.g. http://path/to/my/page.html#map=2.59/39.26/53.07/-24.1/60&foo=bar, where foo
         * is a custom parameter and bar is an arbitrary hash distinct from the map hash.
         * */
        hash?: boolean | string | undefined;

        /**
         * Controls the duration of the fade-in/fade-out animation for label collisions, in milliseconds.
         * This setting affects all symbol layers. This setting does not affect the duration of runtime
         * styling transitions or raster tile cross-fading.
         *
         * @default 300
         */
        fadeDuration?: number | undefined;

        /** If true, map creation will fail if the implementation determines that the performance of the created WebGL context would be dramatically lower than expected. */
        failIfMajorPerformanceCaveat?: boolean | undefined;

        /** A fitBounds options object to use only when setting the bounds option. */
        fitBoundsOptions?: FitBoundsOptions | undefined;

        /** If false, no mouse, touch, or keyboard listeners are attached to the map, so it will not respond to input */
        interactive?: boolean | undefined;

        /** If true, enable keyboard shortcuts (see KeyboardHandler). */
        keyboard?: boolean | undefined;

        /** A patch to apply to the default localization table for UI strings, e.g. control tooltips.
         * The `locale` object maps namespaced UI string IDs to translated strings in the target language;
         * see `src/ui/default_locale.js` for an example with all supported string IDs.
         * The object may specify all UI strings (thereby adding support for a new translation) or
         * only a subset of strings (thereby patching the default translation table).
         */
        locale?: { [key: string]: string } | undefined;

        /**
         * If specified, defines a CSS font-family for locally overriding generation of glyphs in the
         * 'CJK Unified Ideographs' and 'Hangul Syllables' ranges. In these ranges, font settings from
         * the map's style will be ignored, except for font-weight keywords (light/regular/medium/bold).
         * The purpose of this option is to avoid bandwidth-intensive glyph server requests.
         *
         * @default null
         */
        localIdeographFontFamily?: string | undefined;

        /**
         * A string representing the position of the Mapbox wordmark on the map.
         *
         * @default "bottom-left"
         */
        logoPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | undefined;

        /** If set, the map is constrained to the given bounds. */
        maxBounds?: LngLatBoundsLike | undefined;

        /** Maximum pitch of the map. */
        maxPitch?: number | undefined;

        /** Maximum zoom of the map. */
        maxZoom?: number | undefined;

        /** Minimum pitch of the map. */
        minPitch?: number | undefined;

        /** Minimum zoom of the map. */
        minZoom?: number | undefined;

        /** If true, The maps canvas can be exported to a PNG using map.getCanvas().toDataURL();. This is false by default as a performance optimization. */
        preserveDrawingBuffer?: boolean | undefined;

        /**
         * The initial pitch (tilt) of the map, measured in degrees away from the plane of the
         * screen (0-60).
         *
         * @default 0
         */
        pitch?: number | undefined;

        /**
         * If `false`, the map's pitch (tilt) control with "drag to rotate" interaction will be disabled.
         *
         * @default true
         */
        pitchWithRotate?: boolean | undefined;

        /**
         * If `false`, the map won't attempt to re-request tiles once they expire per their HTTP
         * `cacheControl`/`expires` headers.
         *
         * @default true
         */
        refreshExpiredTiles?: boolean | undefined;

        /**
         * If `true`, multiple copies of the world will be rendered, when zoomed out.
         *
         * @default true
         */
        renderWorldCopies?: boolean | undefined;

        /** If true, enable the "scroll to zoom" interaction */
        scrollZoom?: boolean | undefined;

        /** stylesheet location */
        style?: mapboxgl.Style | string | undefined;

        /** If  true, the map will automatically resize when the browser window resizes */
        trackResize?: boolean | undefined;

        /**
         * A callback run before the Map makes a request for an external URL. The callback can be
         * used to modify the url, set headers, or set the credentials property for cross-origin requests.
         *
         * @default null
         */
        transformRequest?: TransformRequestFunction | undefined;

        /** If true, enable the "pinch to rotate and zoom" interaction (see TouchZoomRotateHandler). */
        touchZoomRotate?: boolean | undefined;

        /** If true, the "drag to pitch" interaction is enabled */
        touchPitch?: boolean | undefined;

        /** Initial zoom level */
        zoom?: number | undefined;

        /**
         * The maximum number of tiles stored in the tile cache for a given source. If omitted, the
         * cache will be dynamically sized based on the current viewport.
         *
         * @default null
         */
        maxTileCacheSize?: number | undefined;

        /**
         * If specified, map will use this token instead of the one defined in mapboxgl.accessToken.
         *
         * @default null
         */
        accessToken?: string | undefined;
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
        credentials?: 'same-origin' | 'include' | undefined;

        /**
         * The headers to be sent with the request.
         */
        headers?: { [header: string]: any } | undefined;

        method?: 'GET' | 'POST' | 'PUT' | undefined;

        collectResourceTiming?: boolean | undefined;
    }

    export type TransformRequestFunction = (url: string, resourceType: ResourceType) => RequestParameters;

    export interface PaddingOptions {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }

    export interface FeatureIdentifier {
        id?: string | number | undefined;
        source: string;
        sourceLayer?: string | undefined;
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
        constructor(map: mapboxgl.Map, options?: { bearingSnap?: number | undefined; pitchWithRotate?: boolean | undefined });

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

        /**
         * Returns true if the handler is enabled and has detected the start of a
         * zoom/rotate gesture.
         *
         * @returns {boolean} `true` if the handler is enabled and has detected the
         * start of a zoom/rotate gesture.
         */
        isActive(): boolean;

        /**
         * Disables the "keyboard pan/rotate" interaction, leaving the
         * "keyboard zoom" interaction enabled.
         *
         * @example
         *   map.keyboard.disableRotation();
         */
        disableRotation(): void;

        /**
         * Enables the "keyboard pan/rotate" interaction.
         *
         * @example
         *   map.keyboard.enable();
         *   map.keyboard.enableRotation();
         */
        enableRotation(): void;
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

    export class TouchPitchHandler {
        constructor(map: mapboxgl.Map);

        enable(): void;

        isActive(): boolean;

        isEnabled(): boolean;

        disable(): void;
    }

    export interface IControl {
        onAdd(map: Map): HTMLElement;

        onRemove(map: Map): void;

        getDefaultPosition?: (() => string) | undefined;
    }

    /**
     * Control
     */
    export class Control extends Evented implements IControl {
        onAdd(map: Map): HTMLElement;
        onRemove(map: Map): void;
        getDefaultPosition?: (() => string) | undefined;
    }

    /**
     * Navigation
     */
    export class NavigationControl extends Control {
        constructor(options?: { showCompass?: boolean | undefined; showZoom?: boolean | undefined; visualizePitch?: boolean | undefined });
    }

    export class PositionOptions {
        enableHighAccuracy?: boolean | undefined;
        timeout?: number | undefined;
        maximumAge?: number | undefined;
    }

    /**
     * Geolocate
     */
    export class GeolocateControl extends Control {
        constructor(options?: {
            positionOptions?: PositionOptions | undefined;
            fitBoundsOptions?: FitBoundsOptions | undefined;
            trackUserLocation?: boolean | undefined;
            showAccuracyCircle?: boolean | undefined;
            showUserLocation?: boolean | undefined;
        });
        trigger(): boolean;
    }

    /**
     * Attribution
     */
    export class AttributionControl extends Control {
        constructor(options?: { compact?: boolean | undefined; customAttribution?: string | string[] | undefined });
    }

    /**
     * Scale
     */
    export class ScaleControl extends Control {
        constructor(options?: { maxWidth?: number | undefined; unit?: string | undefined });

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
        container?: HTMLElement | null | undefined;
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
         * Sets the popup's offset.
         *
         * @param offset Sets the popup's offset.
         * @returns {Popup} `this`
         */
        setOffset(offset?: Offset | null): this;

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
        closeButton?: boolean | undefined;

        closeOnClick?: boolean | undefined;

        /**
         * @param {boolean} [options.closeOnMove=false] If `true`, the popup will closed when the map moves.
         */
        closeOnMove?: boolean | undefined;

        /**
         * @param {boolean} [options.focusAfterOpen=true] If `true`, the popup will try to focus the
         *   first focusable element inside the popup.
         */
        focusAfterOpen?: boolean | null | undefined;

        anchor?: Anchor | undefined;

        offset?: Offset | null | undefined;

        className?: string | undefined;

        maxWidth?: string | undefined;
    }

    export interface Style {
        bearing?: number | undefined;
        center?: number[] | undefined;
        glyphs?: string | undefined;
        layers?: AnyLayer[] | undefined;
        metadata?: any;
        name?: string | undefined;
        pitch?: number | undefined;
        light?: Light | undefined;
        sources?: Sources | undefined;
        sprite?: string | undefined;
        transition?: Transition | undefined;
        version: number;
        zoom?: number | undefined;
    }

    export interface Transition {
        delay?: number | undefined;
        duration?: number | undefined;
    }

    export interface Light {
        anchor?: 'map' | 'viewport' | undefined;
        position?: number[] | undefined;
        'position-transition'?: Transition | undefined;
        color?: string | undefined;
        'color-transition'?: Transition | undefined;
        intensity?: number | undefined;
        'intensity-transition'?: Transition | undefined;
    }

    export interface Sources {
        [sourceName: string]: AnySourceData;
    }

    export type PromoteIdSpecification = { [key: string]: string } | string;

    export type AnySourceData =
        | GeoJSONSourceRaw
        | VideoSourceRaw
        | ImageSourceRaw
        | CanvasSourceRaw
        | VectorSource
        | RasterSource
        | RasterDemSource;

    interface VectorSourceImpl extends VectorSource {
        /**
         * Sets the source `tiles` property and re-renders the map.
         *
         * @param {string[]} tiles An array of one or more tile source URLs, as in the TileJSON spec.
         * @returns {VectorTileSource} this
         */
        setTiles(tiles: ReadonlyArray<string>): VectorSourceImpl;

        /**
         * Sets the source `url` property and re-renders the map.
         *
         * @param {string} url A URL to a TileJSON resource. Supported protocols are `http:`, `https:`, and `mapbox://<Tileset ID>`.
         * @returns {VectorTileSource} this
         */
        setUrl(url: string): VectorSourceImpl;
    }

    export type AnySourceImpl =
        | GeoJSONSource
        | VideoSource
        | ImageSource
        | CanvasSource
        | VectorSourceImpl
        | RasterSource
        | RasterDemSource;

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

        getClusterChildren(
            clusterId: number,
            callback: (error: any, features: GeoJSON.Feature<GeoJSON.Geometry>[]) => void,
        ): this;

        getClusterLeaves(
            cluserId: number,
            limit: number,
            offset: number,
            callback: (error: any, features: GeoJSON.Feature<GeoJSON.Geometry>[]) => void,
        ): this;
    }

    export interface GeoJSONSourceOptions {
        data?: GeoJSON.Feature<GeoJSON.Geometry> | GeoJSON.FeatureCollection<GeoJSON.Geometry> | string | undefined;

        maxzoom?: number | undefined;

        attribution?: string | undefined;

        buffer?: number | undefined;

        tolerance?: number | undefined;

        cluster?: number | boolean | undefined;

        clusterRadius?: number | undefined;

        clusterMaxZoom?: number | undefined;

        /**
         * Minimum number of points necessary to form a cluster if clustering is enabled. Defaults to `2`.
         */
        clusterMinPoints?: number | undefined;

        clusterProperties?: object | undefined;

        lineMetrics?: boolean | undefined;

        generateId?: boolean | undefined;

        promoteId?: PromoteIdSpecification | undefined;

        filter?: any;
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
        urls?: string[] | undefined;

        coordinates?: number[][] | undefined;
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
        url?: string | undefined;

        coordinates?: number[][] | undefined;
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

        animate?: boolean | undefined;

        canvas: string | HTMLCanvasElement;
    }

    interface VectorSource extends Source {
        type: 'vector';
        url?: string | undefined;
        tiles?: string[] | undefined;
        bounds?: number[] | undefined;
        scheme?: 'xyz' | 'tms' | undefined;
        minzoom?: number | undefined;
        maxzoom?: number | undefined;
        attribution?: string | undefined;
        promoteId?: PromoteIdSpecification | undefined;
    }

    interface RasterSource extends Source {
        type: 'raster';
        url?: string | undefined;
        tiles?: string[] | undefined;
        bounds?: number[] | undefined;
        minzoom?: number | undefined;
        maxzoom?: number | undefined;
        tileSize?: number | undefined;
        scheme?: 'xyz' | 'tms' | undefined;
        attribution?: string | undefined;
    }

    interface RasterDemSource extends Source {
        type: 'raster-dem';
        url?: string | undefined;
        tiles?: string[] | undefined;
        bounds?: number[] | undefined;
        minzoom?: number | undefined;
        maxzoom?: number | undefined;
        tileSize?: number | undefined;
        attribution?: string | undefined;
        encoding?: 'terrarium' | 'mapbox' | undefined;
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

        /** Returns the approximate distance between a pair of coordinates in meters
         * Uses the Haversine Formula (from R.W. Sinnott, "Virtues of the Haversine", Sky and Telescope, vol. 68, no. 2, 1984, p. 159) */
        distanceTo(lngLat: LngLat): number;

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
        extend(obj: mapboxgl.LngLatLike | mapboxgl.LngLatBoundsLike): this;

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
        isEmpty(): boolean;

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
        z?: number | undefined;

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

        getRotationAlignment(): Alignment;

        setRotationAlignment(alignment: Alignment): this;

        getPitchAlignment(): Alignment;

        setPitchAlignment(alignment: Alignment): this;
    }

    type Alignment = 'map' | 'viewport' | 'auto';

    export interface MarkerOptions {
        /** DOM element to use as a marker. The default is a light blue, droplet-shaped SVG marker */
        element?: HTMLElement | undefined;

        /** The offset in pixels as a PointLike object to apply relative to the element's center. Negatives indicate left and up. */
        offset?: PointLike | undefined;

        /** A string indicating the part of the Marker that should be positioned closest to the coordinate set via Marker.setLngLat.
         * Options are `'center'`, `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-left'`, `'top-right'`, `'bottom-left'`, and `'bottom-right'`.
         * The default value os `'center'`
         */
        anchor?: Anchor | undefined;

        /** The color to use for the default marker if options.element is not provided. The default is light blue (#3FB1CE). */
        color?: string | undefined;

        /** A boolean indicating whether or not a marker is able to be dragged to a new position on the map. The default value is false */
        draggable?: boolean | undefined;

        /**
         * The max number of pixels a user can shift the mouse pointer during a click on the marker for it to be considered a valid click
         * (as opposed to a marker drag). The default (0) is to inherit map's clickTolerance.
         */
        clickTolerance?: number | null | undefined;

        /** The rotation angle of the marker in degrees, relative to its `rotationAlignment` setting. A positive value will rotate the marker clockwise.
         * The default value is 0.
         */
        rotation?: number | undefined;

        /** `map` aligns the `Marker`'s rotation relative to the map, maintaining a bearing as the map rotates.
         * `viewport` aligns the `Marker`'s rotation relative to the viewport, agnostic to map rotations.
         * `auto` is equivalent to `viewport`.
         * The default value is `auto`
         */
        rotationAlignment?: Alignment | undefined;

        /** `map` aligns the `Marker` to the plane of the map.
         * `viewport` aligns the `Marker` to the plane of the viewport.
         * `auto` automatically matches the value of `rotationAlignment`.
         * The default value is `auto`.
         */
        pitchAlignment?: Alignment | undefined;

        /** The scale to use for the default marker if options.element is not provided.
         * The default scale (1) corresponds to a height of `41px` and a width of `27px`.
         */
        scale?: number | undefined;
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
        transition?: boolean | undefined;
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
        type:
            | 'mousedown'
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

    export type MapLayerMouseEvent = MapMouseEvent & { features?: MapboxGeoJSONFeature[] | undefined };

    export class MapTouchEvent extends MapboxEvent<TouchEvent> {
        type: 'touchstart' | 'touchend' | 'touchcancel';

        point: Point;
        lngLat: LngLat;
        points: Point[];
        lngLats: LngLat[];

        preventDefault(): void;
        defaultPrevented: boolean;
    }

    export type MapLayerTouchEvent = MapTouchEvent & { features?: MapboxGeoJSONFeature[] | undefined };

    export class MapWheelEvent extends MapboxEvent<WheelEvent> {
        type: 'wheel';

        preventDefault(): void;
        defaultPrevented: boolean;
    }

    export interface MapBoxZoomEvent extends MapboxEvent<MouseEvent> {
        type: 'boxzoomstart' | 'boxzoomend' | 'boxzoomcancel';

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
     * FilterOptions
     */
    export interface FilterOptions {
        /**
         * Whether to check if the filter conforms to the Mapbox GL Style Specification.
         * Disabling validation is a performance optimization that should only be used
         * if you have previously validated the values you will be passing to this function.
         */
        validate?: boolean | null | undefined;
    }

    /**
     * AnimationOptions
     */
    export interface AnimationOptions {
        /** Number in milliseconds */
        duration?: number | undefined;
        /**
         * A function taking a time in the range 0..1 and returning a number where 0 is the initial
         * state and 1 is the final state.
         */
        easing?: ((time: number) => number) | undefined;
        /** point, origin of movement relative to map center */
        offset?: PointLike | undefined;
        /** When set to false, no animation happens */
        animate?: boolean | undefined;

        /** If `true`, then the animation is considered essential and will not be affected by `prefers-reduced-motion`.
         * Otherwise, the transition will happen instantly if the user has enabled the `reduced motion` accesibility feature in their operating system.
         */
        essential?: boolean | undefined;
    }

    /**
     * CameraOptions
     */
    export interface CameraOptions {
        /** Map center */
        center?: LngLatLike | undefined;
        /** Map zoom level */
        zoom?: number | undefined;
        /** Map rotation bearing in degrees counter-clockwise from north */
        bearing?: number | undefined;
        /** Map angle in degrees at which the camera is looking at the ground */
        pitch?: number | undefined;
        /** If zooming, the zoom center (defaults to map center) */
        around?: LngLatLike | undefined;
    }

    export interface CameraForBoundsOptions extends CameraOptions {
        padding?: number | PaddingOptions | undefined;
        offset?: PointLike | undefined;
        maxZoom?: number | undefined;
    }

    // The Mapbox docs say that if the result is defined, it will have zoom, center and bearing set.
    // In practice center is always a {lat, lng} object.
    export type CameraForBoundsResult = Required<Pick<CameraOptions, 'zoom' | 'bearing'>> & {
        /** Map center */
        center: { lng: number; lat: number };
    };

    /**
     * FlyToOptions
     */
    export interface FlyToOptions extends AnimationOptions, CameraOptions {
        curve?: number | undefined;
        minZoom?: number | undefined;
        speed?: number | undefined;
        screenSpeed?: number | undefined;
        maxDuration?: number | undefined;
    }

    /**
     * EaseToOptions
     */
    export interface EaseToOptions extends AnimationOptions, CameraOptions {
        delayEndEvents?: number | undefined;
    }

    export interface FitBoundsOptions extends mapboxgl.FlyToOptions {
        linear?: boolean | undefined;
        padding?: number | mapboxgl.PaddingOptions | undefined;
        offset?: mapboxgl.PointLike | undefined;
        maxZoom?: number | undefined;
        maxDuration?: number | undefined;
    }

    /**
     * MapEvent
     */
    export type MapEventType = {
        error: ErrorEvent;

        load: MapboxEvent;
        idle: MapboxEvent;
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
    };

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
    };

    export type AnyLayout =
        | BackgroundLayout
        | FillLayout
        | FillExtrusionLayout
        | LineLayout
        | SymbolLayout
        | RasterLayout
        | CircleLayout
        | HeatmapLayout
        | HillshadeLayout;

    export type AnyPaint =
        | BackgroundPaint
        | FillPaint
        | FillExtrusionPaint
        | LinePaint
        | SymbolPaint
        | RasterPaint
        | CirclePaint
        | HeatmapPaint
        | HillshadePaint;

    interface Layer {
        id: string;
        type: string;

        metadata?: any;
        ref?: string | undefined;

        source?: string | AnySourceData | undefined;

        'source-layer'?: string | undefined;

        minzoom?: number | undefined;
        maxzoom?: number | undefined;

        interactive?: boolean | undefined;

        filter?: any[] | undefined;
        layout?: Layout | undefined;
        paint?: object | undefined;
    }

    interface BackgroundLayer extends Layer {
        type: 'background';
        layout?: BackgroundLayout | undefined;
        paint?: BackgroundPaint | undefined;
    }

    interface CircleLayer extends Layer {
        type: 'circle';
        layout?: CircleLayout | undefined;
        paint?: CirclePaint | undefined;
    }

    interface FillExtrusionLayer extends Layer {
        type: 'fill-extrusion';
        layout?: FillExtrusionLayout | undefined;
        paint?: FillExtrusionPaint | undefined;
    }

    interface FillLayer extends Layer {
        type: 'fill';
        layout?: FillLayout | undefined;
        paint?: FillPaint | undefined;
    }

    interface HeatmapLayer extends Layer {
        type: 'heatmap';
        layout?: HeatmapLayout | undefined;
        paint?: HeatmapPaint | undefined;
    }

    interface HillshadeLayer extends Layer {
        type: 'hillshade';
        layout?: HillshadeLayout | undefined;
        paint?: HillshadePaint | undefined;
    }

    interface LineLayer extends Layer {
        type: 'line';
        layout?: LineLayout | undefined;
        paint?: LinePaint | undefined;
    }

    interface RasterLayer extends Layer {
        type: 'raster';
        layout?: RasterLayout | undefined;
        paint?: RasterPaint | undefined;
    }

    interface SymbolLayer extends Layer {
        type: 'symbol';
        layout?: SymbolLayout | undefined;
        paint?: SymbolPaint | undefined;
    }

    export type AnyLayer =
        | BackgroundLayer
        | CircleLayer
        | FillExtrusionLayer
        | FillLayer
        | HeatmapLayer
        | HillshadeLayer
        | LineLayer
        | RasterLayer
        | SymbolLayer
        | CustomLayerInterface;

    // See https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface
    export interface CustomLayerInterface {
        /** A unique layer id. */
        id: string;

        /* The layer's type. Must be "custom". */
        type: 'custom';

        /* Either "2d" or "3d". Defaults to  "2d". */
        renderingMode?: '2d' | '3d' | undefined;

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
        stops?: any[][] | undefined;
        property?: string | undefined;
        base?: number | undefined;
        type?: 'identity' | 'exponential' | 'interval' | 'categorical' | undefined;
        default?: any;
        colorSpace?: 'rgb' | 'lab' | 'hcl' | undefined;
    }

    type Visibility = 'visible' | 'none';

    export interface Layout {
        visibility?: Visibility | undefined;
    }

    export interface BackgroundLayout extends Layout {}

    export interface BackgroundPaint {
        'background-color'?: string | Expression | undefined;
        'background-color-transition'?: Transition | undefined;
        'background-pattern'?: string | undefined;
        'background-pattern-transition'?: Transition | undefined;
        'background-opacity'?: number | Expression | undefined;
        'background-opacity-transition'?: Transition | undefined;
    }

    export interface FillLayout extends Layout {
        'fill-sort-key'?: number | Expression | undefined;
    }

    export interface FillPaint {
        'fill-antialias'?: boolean | Expression | undefined;
        'fill-opacity'?: number | StyleFunction | Expression | undefined;
        'fill-opacity-transition'?: Transition | undefined;
        'fill-color'?: string | StyleFunction | Expression | undefined;
        'fill-color-transition'?: Transition | undefined;
        'fill-outline-color'?: string | StyleFunction | Expression | undefined;
        'fill-outline-color-transition'?: Transition | undefined;
        'fill-translate'?: number[] | undefined;
        'fill-translate-transition'?: Transition | undefined;
        'fill-translate-anchor'?: 'map' | 'viewport' | undefined;
        'fill-pattern'?: string | Expression | undefined;
        'fill-pattern-transition'?: Transition | undefined;
    }

    export interface FillExtrusionLayout extends Layout {}

    export interface FillExtrusionPaint {
        'fill-extrusion-opacity'?: number | Expression | undefined;
        'fill-extrusion-opacity-transition'?: Transition | undefined;
        'fill-extrusion-color'?: string | StyleFunction | Expression | undefined;
        'fill-extrusion-color-transition'?: Transition | undefined;
        'fill-extrusion-translate'?: number[] | Expression | undefined;
        'fill-extrusion-translate-transition'?: Transition | undefined;
        'fill-extrusion-translate-anchor'?: 'map' | 'viewport' | undefined;
        'fill-extrusion-pattern'?: string | Expression | undefined;
        'fill-extrusion-pattern-transition'?: Transition | undefined;
        'fill-extrusion-height'?: number | StyleFunction | Expression | undefined;
        'fill-extrusion-height-transition'?: Transition | undefined;
        'fill-extrusion-base'?: number | StyleFunction | Expression | undefined;
        'fill-extrusion-base-transition'?: Transition | undefined;
        'fill-extrusion-vertical-gradient'?: boolean | undefined;
    }

    export interface LineLayout extends Layout {
        'line-cap'?: 'butt' | 'round' | 'square' | undefined;
        'line-join'?: 'bevel' | 'round' | 'miter' | Expression | undefined;
        'line-miter-limit'?: number | Expression | undefined;
        'line-round-limit'?: number | Expression | undefined;
        'line-sort-key'?: number | Expression | undefined;
    }

    export interface LinePaint {
        'line-opacity'?: number | StyleFunction | Expression | undefined;
        'line-opacity-transition'?: Transition | undefined;
        'line-color'?: string | StyleFunction | Expression | undefined;
        'line-color-transition'?: Transition | undefined;
        'line-translate'?: number[] | Expression | undefined;
        'line-translate-transition'?: Transition | undefined;
        'line-translate-anchor'?: 'map' | 'viewport' | undefined;
        'line-width'?: number | StyleFunction | Expression | undefined;
        'line-width-transition'?: Transition | undefined;
        'line-gap-width'?: number | StyleFunction | Expression | undefined;
        'line-gap-width-transition'?: Transition | undefined;
        'line-offset'?: number | StyleFunction | Expression | undefined;
        'line-offset-transition'?: Transition | undefined;
        'line-blur'?: number | StyleFunction | Expression | undefined;
        'line-blur-transition'?: Transition | undefined;
        'line-dasharray'?: number[] | Expression | undefined;
        'line-dasharray-transition'?: Transition | undefined;
        'line-pattern'?: string | Expression | undefined;
        'line-pattern-transition'?: Transition | undefined;
        'line-gradient'?: Expression | undefined;
    }

    export interface SymbolLayout extends Layout {
        'symbol-placement'?: 'point' | 'line' | 'line-center' | undefined;
        'symbol-spacing'?: number | Expression | undefined;
        'symbol-avoid-edges'?: boolean | undefined;
        'symbol-z-order'?: 'viewport-y' | 'source' | undefined;
        'icon-allow-overlap'?: boolean | StyleFunction | Expression | undefined;
        'icon-ignore-placement'?: boolean | Expression | undefined;
        'icon-optional'?: boolean | undefined;
        'icon-rotation-alignment'?: 'map' | 'viewport' | 'auto' | undefined;
        'icon-size'?: number | StyleFunction | Expression | undefined;
        'icon-text-fit'?: 'none' | 'both' | 'width' | 'height' | undefined;
        'icon-text-fit-padding'?: number[] | Expression | undefined;
        'icon-image'?: string | StyleFunction | Expression | undefined;
        'icon-rotate'?: number | StyleFunction | Expression | undefined;
        'icon-padding'?: number | Expression | undefined;
        'icon-keep-upright'?: boolean | undefined;
        'icon-offset'?: number[] | StyleFunction | Expression | undefined;
        'icon-anchor'?: Anchor | StyleFunction | Expression | undefined;
        'icon-pitch-alignment'?: 'map' | 'viewport' | 'auto' | undefined;
        'text-pitch-alignment'?: 'map' | 'viewport' | 'auto' | undefined;
        'text-rotation-alignment'?: 'map' | 'viewport' | 'auto' | undefined;
        'text-field'?: string | StyleFunction | Expression | undefined;
        'text-font'?: string | string[] | Expression | undefined;
        'text-size'?: number | StyleFunction | Expression | undefined;
        'text-max-width'?: number | StyleFunction | Expression | undefined;
        'text-line-height'?: number | Expression | undefined;
        'text-letter-spacing'?: number | Expression | undefined;
        'text-justify'?: 'auto' | 'left' | 'center' | 'right' | Expression | undefined;
        'text-anchor'?: Anchor | StyleFunction | Expression | undefined;
        'text-max-angle'?: number | Expression | undefined;
        'text-rotate'?: number | StyleFunction | Expression | undefined;
        'text-padding'?: number | Expression | undefined;
        'text-keep-upright'?: boolean | undefined;
        'text-transform'?: 'none' | 'uppercase' | 'lowercase' | StyleFunction | Expression | undefined;
        'text-offset'?: number[] | Expression | undefined;
        'text-allow-overlap'?: boolean | undefined;
        'text-ignore-placement'?: boolean | undefined;
        'text-optional'?: boolean | undefined;
        'text-radial-offset'?: number | Expression | undefined;
        'text-variable-anchor'?: Anchor[] | undefined;
        'text-writing-mode'?: ('horizontal' | 'vertical')[] | undefined;
        'symbol-sort-key'?: number | Expression | undefined;
    }

    export interface SymbolPaint {
        'icon-opacity'?: number | StyleFunction | Expression | undefined;
        'icon-opacity-transition'?: Transition | undefined;
        'icon-color'?: string | StyleFunction | Expression | undefined;
        'icon-color-transition'?: Transition | undefined;
        'icon-halo-color'?: string | StyleFunction | Expression | undefined;
        'icon-halo-color-transition'?: Transition | undefined;
        'icon-halo-width'?: number | StyleFunction | Expression | undefined;
        'icon-halo-width-transition'?: Transition | undefined;
        'icon-halo-blur'?: number | StyleFunction | Expression | undefined;
        'icon-halo-blur-transition'?: Transition | undefined;
        'icon-translate'?: number[] | Expression | undefined;
        'icon-translate-transition'?: Transition | undefined;
        'icon-translate-anchor'?: 'map' | 'viewport' | undefined;
        'text-opacity'?: number | StyleFunction | Expression | undefined;
        'text-opacity-transition'?: Transition | undefined;
        'text-color'?: string | StyleFunction | Expression | undefined;
        'text-color-transition'?: Transition | undefined;
        'text-halo-color'?: string | StyleFunction | Expression | undefined;
        'text-halo-color-transition'?: Transition | undefined;
        'text-halo-width'?: number | StyleFunction | Expression | undefined;
        'text-halo-width-transition'?: Transition | undefined;
        'text-halo-blur'?: number | StyleFunction | Expression | undefined;
        'text-halo-blur-transition'?: Transition | undefined;
        'text-translate'?: number[] | Expression | undefined;
        'text-translate-transition'?: Transition | undefined;
        'text-translate-anchor'?: 'map' | 'viewport' | undefined;
    }

    export interface RasterLayout extends Layout {}

    export interface RasterPaint {
        'raster-opacity'?: number | Expression | undefined;
        'raster-opacity-transition'?: Transition | undefined;
        'raster-hue-rotate'?: number | Expression | undefined;
        'raster-hue-rotate-transition'?: Transition | undefined;
        'raster-brightness-min'?: number | Expression | undefined;
        'raster-brightness-min-transition'?: Transition | undefined;
        'raster-brightness-max'?: number | Expression | undefined;
        'raster-brightness-max-transition'?: Transition | undefined;
        'raster-saturation'?: number | Expression | undefined;
        'raster-saturation-transition'?: Transition | undefined;
        'raster-contrast'?: number | Expression | undefined;
        'raster-contrast-transition'?: Transition | undefined;
        'raster-fade-duration'?: number | Expression | undefined;
        'raster-resampling'?: 'linear' | 'nearest' | undefined;
    }

    export interface CircleLayout extends Layout {
        'circle-sort-key'?: number | Expression | undefined;
    }

    export interface CirclePaint {
        'circle-radius'?: number | StyleFunction | Expression | undefined;
        'circle-radius-transition'?: Transition | undefined;
        'circle-color'?: string | StyleFunction | Expression | undefined;
        'circle-color-transition'?: Transition | undefined;
        'circle-blur'?: number | StyleFunction | Expression | undefined;
        'circle-blur-transition'?: Transition | undefined;
        'circle-opacity'?: number | StyleFunction | Expression | undefined;
        'circle-opacity-transition'?: Transition | undefined;
        'circle-translate'?: number[] | Expression | undefined;
        'circle-translate-transition'?: Transition | undefined;
        'circle-translate-anchor'?: 'map' | 'viewport' | undefined;
        'circle-pitch-scale'?: 'map' | 'viewport' | undefined;
        'circle-pitch-alignment'?: 'map' | 'viewport' | undefined;
        'circle-stroke-width'?: number | StyleFunction | Expression | undefined;
        'circle-stroke-width-transition'?: Transition | undefined;
        'circle-stroke-color'?: string | StyleFunction | Expression | undefined;
        'circle-stroke-color-transition'?: Transition | undefined;
        'circle-stroke-opacity'?: number | StyleFunction | Expression | undefined;
        'circle-stroke-opacity-transition'?: Transition | undefined;
    }

    export interface HeatmapLayout extends Layout {}

    export interface HeatmapPaint {
        'heatmap-radius'?: number | StyleFunction | Expression | undefined;
        'heatmap-radius-transition'?: Transition | undefined;
        'heatmap-weight'?: number | StyleFunction | Expression | undefined;
        'heatmap-intensity'?: number | StyleFunction | Expression | undefined;
        'heatmap-intensity-transition'?: Transition | undefined;
        'heatmap-color'?: string | StyleFunction | Expression | undefined;
        'heatmap-opacity'?: number | StyleFunction | Expression | undefined;
        'heatmap-opacity-transition'?: Transition | undefined;
    }

    export interface HillshadeLayout extends Layout {}

    export interface HillshadePaint {
        'hillshade-illumination-direction'?: number | Expression | undefined;
        'hillshade-illumination-anchor'?: 'map' | 'viewport' | undefined;
        'hillshade-exaggeration'?: number | Expression | undefined;
        'hillshade-exaggeration-transition'?: Transition | undefined;
        'hillshade-shadow-color'?: string | Expression | undefined;
        'hillshade-shadow-color-transition'?: Transition | undefined;
        'hillshade-highlight-color'?: string | Expression | undefined;
        'hillshade-highlight-color-transition'?: Transition | undefined;
        'hillshade-accent-color'?: string | Expression | undefined;
        'hillshade-accent-color-transition'?: Transition | undefined;
    }
}
