// Type definitions for OpenLayers v3.6.0
// Project: http://openlayers.org/
// Definitions by: Wouter Goedhart <https://github.com/woutergd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module olx {

    interface AttributionOptions {

        /** HTML markup for this attribution. */
        html: string;
    }

    interface DeviceOrientationOptions {

        /**
         * Start tracking. Default is false.
         */
        tracking?: boolean;
    }

    interface FrameState {

        /**
         *
         */
        pixelRatio: number;

        /**
         *
         */
        time: number;

        /**
         *
         */
        viewState: olx.ViewState;
    }

    interface FeatureOverlayOptions {

        /**
         * Features
         */
        features?: Array<ol.Feature> | ol.Collection<ol.Feature> | ol.style.StyleFunction;

        /**
         * Map
         */
        map: ol.Map;

        /**
         * Style
         */
        style: ol.style.Style | Array<ol.style.Style>;
    }

    interface GeolocationOptions {

        /**
         * Start Tracking. Default is false.
         */
        tracking?: boolean;

        /**
         * Tracking options. See http://www.w3.org/TR/geolocation-API/#position_options_interface.
         */
        trackingOptions?: PositionOptions;

        /**
         * The projection the position is reported in.
         */
        projection?: ol.proj.ProjectionLike | ol.proj.Projection;
    }

    interface GraticuleOptions {

        /** Reference to an ol.Map object. */
        map?: ol.Map;

        /** The maximum number of meridians and parallels from the center of the map. The default value is 100, which means that at most 200 meridians and 200 parallels will be displayed. The default value is appropriate for conformal projections like Spherical Mercator. If you increase the value more lines will be drawn and the drawing performance will decrease. */
        maxLines?: number;

        /** The stroke style to use for drawing the graticule. If not provided, the lines will be drawn with rgba(0,0,0,0.2), a not fully opaque black. */
        strokeStyle?: ol.style.Stroke;

        /** The target size of the graticule cells, in pixels. Default value is 100 pixels. */
        targetSize?: number;
    }

    interface BaseWMSOptions {

        /** Attributions. */
        attributions?: Array<ol.Attribution>;

        /** WMS request parameters. At least a LAYERS param is required. STYLES is '' by default. VERSION is 1.3.0 by default. WIDTH, HEIGHT, BBOX and CRS (SRS for WMS version < 1.3.0) will be set dynamically. */
        params?: any;

        /** The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you are using the WebGL renderer or if you want to access pixel data with the Canvas renderer. See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail. */
        crossOrigin?: string;

        /** experimental Use the ol.Map#pixelRatio value when requesting the image from the remote server. Default is true. */
        hidpi?: boolean;

        /** experimental The type of the remote WMS server: mapserver, geoserver or qgis. Only needed if hidpi is true. Default is undefined. */
        serverType?: ol.source.wms.ServerType;

        /** WMS service URL. */
        url?: string;

        /** Logo. */
        logo?: olx.LogoOptions;

        /** experimental Projection. */
        projection?: ol.proj.ProjectionLike;
    }

    interface ImageWMSOptions extends BaseWMSOptions {

        /** experimental Optional function to load an image given a URL. */
        imageLoadFunction?: ol.ImageLoadFunctionType;

        /** Ratio. 1 means image requests are the size of the map viewport, 2 means twice the width and height of the map viewport, and so on. Must be 1 or higher. Default is 1.5. */
        ratio?: number;

        /** Resolutions. If specified, requests will be made for these resolutions only. */
        resolutions?: Array<number>;
    }

    interface TileWMSOptions {

        /** The size in pixels of the gutter around image tiles to ignore. By setting this property to a non-zero value, images will be requested that are wider and taller than the tile size by a value of 2 x gutter. Defaults to zero. Using a non-zero value allows artifacts of rendering at tile edges to be ignored. If you control the WMS service it is recommended to address "artifacts at tile edges" issues by properly configuring the WMS service. For example, MapServer has a tile_map_edge_buffer configuration parameter for this. See http://mapserver.org/output/tile_mode.html. */
        gutter?: number;

        /** Tile grid. Base this on the resolutions, tilesize and extent supported by the server. If this is not defined, a default grid will be used: if there is a projection extent, the grid will be based on that; if not, a grid based on a global extent with origin at 0,0 will be used. */
        tileGrid?: ol.tilegrid.TileGrid;

        /** experimental Maximum zoom. */
        maxZoom?: number;

        /** experimental Optional function to load a tile given a URL. */
        tileLoadFunction?: ol.TileLoadFunctionType;

        /** WMS service URL. */
        url?: string;

        /** WMS service urls. Use this instead of url when the WMS supports multiple urls for GetMap requests. */
        urls?: Array<string>;

        /** experimental The type of the remote WMS server. Currently only used when hidpi is true. Default is undefined. */
        serverType?: ol.source.wms.ServerType;

        /** experimental Whether to wrap the world horizontally. When set to false, only one world will be rendered. When true, tiles will be requested for one world only, but they will be wrapped horizontally to render multiple worlds. The default is true. */
        wrapX?: boolean;
    }
    /**
     * Object literal with config options for the map logo.
     */
    interface LogoOptions {
      /**
       * Link url for the logo. Will be followed when the logo is clicked.
       */
      href: string;

      /**
       * Image src for the logo
       */
      src: string;

    }

    interface MapOptions {

        /** Controls initially added to the map. If not specified, ol.control.defaults() is used. */
        controls?: any;

        /** The ratio between physical pixels and device-independent pixels (dips) on the device. If undefined then it gets set by using window.devicePixelRatio. */
        pixelRatio?: number;

        /** Interactions that are initially added to the map. If not specified, ol.interaction.defaults() is used. */
        interactions?: any;

        /** The element to listen to keyboard events on. This determines when the KeyboardPan and KeyboardZoom interactions trigger. For example, if this option is set to document the keyboard interactions will always trigger. If this option is not specified, the element the library listens to keyboard events on is the map target (i.e. the user-provided div for the map). If this is not document the target element needs to be focused for key events to be emitted, requiring that the target element has a tabindex attribute. */
        keyboardEventTarget?: any;

        /** Layers. If this is not defined, a map with no layers will be rendered. Note that layers are rendered in the order supplied, so if you want, for example, a vector layer to appear on top of a tile layer, it must come after the tile layer. */
        layers?: Array<any>

        /** When set to true, tiles will be loaded during animations. This may improve the user experience, but can also make animations stutter on devices with slow memory. Default is false. */
        loadTilesWhileAnimating?: boolean;

        /** When set to true, tiles will be loaded while interacting with the map. This may improve the user experience, but can also make map panning and zooming choppy on devices with slow memory. Default is false. */
        loadTilesWhileInteracting?: boolean;

        /** The map logo. A logo to be displayed on the map at all times. If a string is provided, it will be set as the image source of the logo. If an object is provided, the src property should be the URL for an image and the href property should be a URL for creating a link. To disable the map logo, set the option to false. By default, the OpenLayers 3 logo is shown. */
        logo?: any;

        /** Overlays initially added to the map. By default, no overlays are added. */
        overlays?: any;

        /** Renderer. By default, Canvas, DOM and WebGL renderers are tested for support in that order, and the first supported used. Specify a ol.RendererType here to use a specific renderer. Note that at present only the Canvas renderer supports vector data. */
        renderer?: any;

        /** The container for the map, either the element itself or the id of the element. If not specified at construction time, ol.Map#setTarget must be called for the map to be rendered. */
        target?: any;

        /** The map's view. No layer sources will be fetched unless this is specified at construction time or through ol.Map#setView. */
        view?: ViewOptions;
    }

    interface OverlayOptions {

        /**
         * The overlay element.
         */
        element?: Element;

        /**
         * Offsets in pixels used when positioning the overlay. The fist element in the array is the horizontal offset. A positive value shifts the overlay right. The second element in the array is the vertical offset. A positive value shifts the overlay down. Default is [0, 0].
         */
        offset?: Array<number>;

        /**
         * The overlay position in map projection.
         */
        position?: ol.Coordinate;

        /**
         * Defines how the overlay is actually positioned with respect to its position property. Possible values are 'bottom-left', 'bottom-center', 'bottom-right', 'center-left', 'center-center', 'center-right', 'top-left', 'top-center', and 'top-right'. Default is 'top-left'.
         */
        positioning?: ol.OverlayPositioning;

        /**
         * Whether event propagation to the map viewport should be stopped. Default is true. If true the overlay is placed in the same container as that of the controls (CSS class name ol-overlaycontainer-stopevent); if false it is placed in the container with CSS class name ol-overlaycontainer.
         */
        stopEvent?: boolean;

        /**
         * Whether the overlay is inserted first in the overlay container, or appended. Default is true. If the overlay is placed in the same container as that of the controls (see the stopEvent option) you will probably set insertFirst to true so the overlay is displayed below the controls.
         */
        insertFirst?: boolean;

        /**
         * If set to true the map is panned when calling setPosition, so that the overlay is entirely visible in the current viewport. The default is false.
         */
        autoPan?: boolean;

        /**
         * The options used to create a ol.animation.pan animation. This animation is only used when autoPan is enabled. By default the default options for ol.animation.pan are used. If set to null the panning is not animated.
         */
        autoPanAnimation?: olx.animation.PanOptions;

        /**
         * The margin (in pixels) between the overlay and the borders of the map when autopanning. The default is 20.
         */
        autoPanMargin?: number;
    }

    interface ViewOptions {

        /** The initial center for the view. The coordinate system for the center is specified with the projection option. Default is undefined, and layer sources will not be fetched if this is not set. */
        center?: ol.Coordinate;

        /** Rotation constraint. false means no constraint. true means no constraint, but snap to zero near zero. A number constrains the rotation to that number of values. For example, 4 will constrain the rotation to 0, 90, 180, and 270 degrees. The default is true. */
        constrainRotation?: boolean;

        /** Enable rotation. Default is true. If false a rotation constraint that always sets the rotation to zero is used. The constrainRotation option has no effect if enableRotation is false. */
        enableRotation?: boolean;

        /**The extent that constrains the center, in other words, center cannot be set outside this extent. Default is undefined. */
        extent?: ol.Extent;

        /** The maximum resolution used to determine the resolution constraint. It is used together with minResolution (or maxZoom) and zoomFactor. If unspecified it is calculated in such a way that the projection's validity extent fits in a 256x256 px tile. If the projection is Spherical Mercator (the default) then maxResolution defaults to 40075016.68557849 / 256 = 156543.03392804097. */
        maxResolution?: number;

        /** The minimum resolution used to determine the resolution constraint. It is used together with maxResolution (or minZoom) and zoomFactor. If unspecified it is calculated assuming 29 zoom levels (with a factor of 2). If the projection is Spherical Mercator (the default) then minResolution defaults to 40075016.68557849 / 256 / Math.pow(2, 28) = 0.0005831682455839253. */
        minResolution?: number;

        /** The maximum zoom level used to determine the resolution constraint. It is used together with minZoom (or maxResolution) and zoomFactor. Default is 28. Note that if minResolution is also provided, it is given precedence over maxZoom. */
        maxZoom?: number;

        /** The minimum zoom level used to determine the resolution constraint. It is used together with maxZoom (or minResolution) and zoomFactor. Default is 0. Note that if maxResolution is also provided, it is given precedence over minZoom. */
        minZoom?: number;

        /** The projection. Default is EPSG:3857 (Spherical Mercator). */
        projection?: ol.proj.ProjectionLike | ol.proj.Projection;

        /** The initial resolution for the view. The units are projection units per pixel (e.g. meters per pixel). An alternative to setting this is to set zoom. Default is undefined, and layer sources will not be fetched if neither this nor zoom are defined. */
        resolution?: number;

        /** Resolutions to determine the resolution constraint. If set the maxResolution, minResolution, minZoom, maxZoom, and zoomFactor options are ignored. */
        resolutions?: Array<number>;

        /** The initial rotation for the view in radians (positive rotation clockwise). Default is 0. */
        rotation?: number;

        /** Only used if resolution is not defined. Zoom level used to calculate the initial resolution for the view. The initial resolution is determined using the ol.View#constrainResolution method. */
        zoom?: number;

        /** The zoom factor used to determine the resolution constraint. Default is 2. */
        zoomFactor?: number;
    }

    interface ViewState {

        /**
         *
         */
        center: ol.Coordinate;

        /**
         *
         */
        projection: ol.proj.Projection;

        /**
         *
         */
        resolution: number;

        /**
         *
         */
        rotation: number;
    }

    interface Projection {
        /**
         * The SRS identifier code, e.g. EPSG:4326.
         */
        code: string;

        /**
        * Units. Required unless a proj4 projection is defined for code.
        */
        units?: ol.proj.Units;

        /**
        * The validity extent for the SRS.
        */
        extent?: Array<number>;

        /**
        * The axis orientation as specified in Proj4. The default is enu.
        */
        axisOrientation?: string;

        /**
        * Whether the projection is valid for the whole globe. Default is false.
        */
        global?: boolean;

        /**
        * experimental The world extent for the SRS.
        */
        worldExtent?: ol.Extent;

        /**
        *  experimental Function to determine resolution at a point. The function is called with
        *  a {number} view resolution and an {ol.Coordinate} as arguments, and returns the {number}
        *  resolution at the passed coordinate.
        */
        getPointResolution?: (resolution: number, coordinate: ol.Coordinate) => number;
    }

    module animation {

        interface BounceOptions {

            /**
             * The resolution to start the bounce from, typically map.getView().getResolution().
             */
            resolution: number;

            /**
             * The start time of the animation. Default is immediately.
             */
            start?: number;

            /**
             * The duration of the animation in milliseconds. Default is 1000.
             */
            duration?: number;

            /**
             * The easing function to use. Can be an ol.easing or a custom function. Default is ol.easing.upAndDown.
             */
            easing?: (t: number) => number;
        }

        interface PanOptions {

            /**
             * The resolution to start the bounce from, typically map.getView().getResolution().
             */
            source: ol.Coordinate;

            /**
             * The start time of the animation. Default is immediately.
             */
            start?: number;

            /**
             * The duration of the animation in milliseconds. Default is 1000.
             */
            duration?: number;

            /**
             * The easing function to use. Can be an ol.easing or a custom function. Default is ol.easing.upAndDown.
             */
            easing?: (t: number) => number;
        }

        interface RotateOptions {

            /**
             * The rotation value (in radians) to begin rotating from, typically map.getView().getRotation(). If undefined then 0 is assumed.
             */
            rotation?: number;

            /**
             * The rotation center/anchor. The map rotates around the center of the view if unspecified.
             */
            anchor?: ol.Coordinate;

            /**
             * The start time of the animation. Default is immediately.
             */
            start?: number;

            /**
             * The duration of the animation in milliseconds. Default is 1000.
             */
            duration?: number;

            /**
             * The easing function to use. Can be an ol.easing or a custom function. Default is ol.easing.upAndDown.
             */
            easing?: (t: number) => number
        }

        interface ZoomOptions {

            /**
             * The resolution to begin zooming from, typically map.getView().getResolution().
             */
            resolution: number;

            /**
             * The start time of the animation. Default is immediately.
             */
            start?: number;

            /**
             * The duration of the animation in milliseconds. Default is 1000.
             */
            duration?: number;

            /**
             * The easing function to use. Can be an ol.easing or a custom function. Default is ol.easing.upAndDown.
             */
            easing?: (t: number) => number
        }
    }

    module control {

        interface DefaultsOptions {

            /**
             * Attribution. Default is true.
             */
            attribution?: boolean;

            /**
             * Attribution options.
             */
            //TODO: Replace with olx.control.AttributionOptions
            attributionOptions?: any;

            /**
             * Rotate. Default is true;
             */
            rotate?: boolean;

            /**
             * Rotate options
             */
            //TODO: Replace with olx.control.RotateOptions
            rotateOptions?: any;

            /**
             * Zoom. Default is true
             */
            zoom?: boolean;

            /**
             *
             */
            //TODO: Replace with olx.control.ZoomOptions
            zoomOptions?: any;
        }
    }

    module interaction {
        interface DefaultsOptions {
            altShiftDragRotate?: boolean;
            doubleClickZoom?: boolean;
            keyboard?: boolean;
            mouseWheelZoom?: boolean;
            shiftDragZoom?: boolean;
            dragPan?: boolean;
            pinchRotate?: boolean;
            pinchZoom?: boolean;
            zoomDelta?: number;
            zoomDuration?: number;
          }
    }

    module layer {

        interface BaseOptions {

            /**
             * Brightness. Default is 0.
             */
            brightness?: number;

            /**
             * Contrast. Default is 1.
             */
            contrast?: number;

            /**
             * Hue. Default is 0.
             */
            hue?: number;

            /**
             * Opacity (0, 1). Default is 1.
             */
            opacity?: number;

            /**
             * Saturation. Default is 1.
             */
            saturation?: number;

            /**
             * Visibility. Default is true.
             */
            visible?: boolean;

            /**
             * The bounding extent for layer rendering. The layer will not be rendered outside of this extent.
             */
            extent?: ol.Extent;

            /**
             * The minimum resolution (inclusive) at which this layer will be visible.
             */
            minResolution?: number;

            /**
             * The maximum resolution (exclusive) below which this layer will be visible.
             */
            maxResolution?: number;
        }

        interface GroupOptions extends BaseOptions {

            /**
             * Child layers
             */
            layers?: Array<ol.layer.Base> | ol.Collection<ol.layer.Base>;
        }

        interface HeatmapOptions extends VectorOptions {

            /**
             * The color gradient of the heatmap, specified as an array of CSS color strings. Default is ['#00f', '#0ff', '#0f0', '#ff0', '#f00'].
             */
            gradient?: Array<String>;

            /**
             * Radius size in pixels. Default is 8.
             */
            radius?: number;

            /**
             * Blur size in pixels. Default is 15.
             */
            blur?: number;

            /**
             * Shadow size in pixels. Default is 250.
             */
            shadow?: number;
        }

        interface ImageOptions extends LayerOptions {
        }

        interface LayerOptions extends BaseOptions {

            /**
             * The layer source (or null if not yet set).
             */
            source?: ol.source.Source;
        }

        interface TileOptions extends LayerOptions {

            /**
             * Preload. Load low-resolution tiles up to preload levels. By default preload is 0, which means no preloading.
             */
            preload?: number;

            /**
             * Source for this layer.
             */
            source?: ol.source.Tile;

            /**
             * Use interim tiles on error. Default is true.
             */
            useInterimTilesOnError?: boolean;
        }

        interface VectorOptions extends LayerOptions {

            /**
             * When set to true, feature batches will be recreated during animations. This means that no vectors will be shown clipped, but the setting will have a performance impact for large amounts of vector data. When set to false, batches will be recreated when no animation is active. Default is false.
             */
            updateWhileAnimating?: boolean;

            /**
             * When set to true, feature batches will be recreated during interactions. See also updateWhileInteracting. Default is false.
             */
            updateWhileInteracting?: boolean;

            /**
             * Render order. Function to be used when sorting features before rendering. By default features are drawn in the order that they are created. Use null to avoid the sort, but get an undefined draw order.
             */
            // TODO: replace any with the expected function, unclear in documentation what the parameters are
            renderOrder?: any;

            /**
             * The buffer around the viewport extent used by the renderer when getting features from the vector source for the rendering or hit-detection. Recommended value: the size of the largest symbol, line width or label. Default is 100 pixels.
             */
            renderBuffer?: number;

            /**
             * Source.
             */
            source?: ol.source.Vector;

            /**
             * Layer style. See ol.style for default style which will be used if this is not defined.
             */
            style?: ol.style.Style | Array<ol.style.Style> | any;
        }
    }

    module source {

        interface VectorOptions {
            /**
             * Attributions.
             */
            attributions?: Array<ol.Attribution>;

            /**
             * Features. If provided as {@link ol.Collection}, the features in the source
             * and the collection will stay in sync.
             */
            features?: Array<ol.Feature> | ol.Collection<ol.Feature>;

            /**
             * The feature format used by the XHR feature loader when `url` is set.
             * Required if `url` is set, otherwise ignored. Default is `undefined`.
             */
            format?: ol.format.Feature;

            /**
             * The loader function used to load features, from a remote source for example.
             * Note that the source will create and use an XHR feature loader when `url` is
             * set.
             */
            loader?: ol.FeatureLoader;

            /**
             * Logo.
             */
            logo?: string | olx.LogoOptions;

            /**
             * The loading strategy to use. By default an {@link ol.loadingstrategy.all}
             * strategy is used, a one-off strategy which loads all features at once.
             */
            strategy?: ol.LoadingStrategy;

            /**
             * Setting this option instructs the source to use an XHR loader (see
             * {@link ol.featureloader.xhr}) and an {@link ol.loadingstrategy.all} for a
             * one-off download of all features from that URL.
             * Requires `format` to be set as well.
             */
            url?: string;

            /**
             * By default, an RTree is used as spatial index. When features are removed and
             * added frequently, and the total number of features is low, setting this to
             * `false` may improve performance.
             */
            useSpatialIndex?: boolean;

            /**
             * Wrap the world horizontally. Default is `true`. For vector editing across the
             * -180° and 180° meridians to work properly, this should be set to `false`. The
             * resulting geometry coordinates will then exceed the world bounds.
             */
            wrapX?: boolean;
        }
    }

    module style {

        interface FillOptions {
            color?: ol.Color | string;
        }

        interface StyleOptions {
            geometry?: string | ol.geom.Geometry | ol.style.GeometryFunction;
            fill?: ol.style.Fill;
            image?: ol.style.Image;
            stroke?: ol.style.Stroke;
            text?: ol.style.Text;
            zIndex?: number;
        }

        interface TextOptions {
          font?: string;
          offsetX?: number;
          offsetY?: number;
          scale?: number;
          rotation?: number;
          text?: string;
          textAlign?: string;
          textBaseline?: string;
          fill?: ol.style.Fill;
          stroke?: ol.style.Stroke;
        }
    }

    module tilegrid {

        interface TileGridOptions {

            /**
             * Extent for the tile grid. No tiles outside this extent will be requested by ol.source.Tile sources. When no origin or origins are configured, the origin will be set to the bottom-left corner of the extent. When no sizes are configured, they will be calculated from the extent.
             */
            extent?: ol.Extent;

            /**
             * Minimum zoom. Default is 0.
             */
            minZoom?: number;

            /**
             * Origin, i.e. the bottom-left corner of the grid. Default is null.
             */
            origin?: ol.Coordinate;

            /**
             * Origins, i.e. the bottom-left corners of the grid for each zoom level. If given, the array length should match the length of the resolutions array, i.e. each resolution can have a different origin.
             */
            origins?: Array<ol.Coordinate>;

            /**
             * Resolutions. The array index of each resolution needs to match the zoom level. This means that even if a minZoom is configured, the resolutions array will have a length of maxZoom + 1.
             */
            resolutions?: Array<number>;

            /**
             * Tile size. Default is [256, 256].
             */
            tileSize?: number | ol.Size;

            /**
             * Tile sizes. If given, the array length should match the length of the resolutions array, i.e. each resolution can have a different tile size.
             */
            tileSizes?: Array<number | ol.Size>;
        }

        interface WMTSOptions {

            /**
             * Extent for the tile grid. No tiles outside this extent will be requested by ol.source.WMTS sources. When no origin or origins are configured, the origin will be calculated from the extent. When no sizes are configured, they will be calculated from the extent.
             */
            extent?: ol.Extent;

            /**
             * Origin, i.e. the top-left corner of the grid.
             */
            origin?: ol.Coordinate;

            /**
             * Origins, i.e. the top-left corners of the grid for each zoom level. The length of this array needs to match the length of the resolutions array.
             */
            origins?: Array<ol.Coordinate>;

            /**
             * Resolutions. The array index of each resolution needs to match the zoom level. This means that even if a minZoom is configured, the resolutions array will have a length of maxZoom + 1
             */
            resolutions?: Array<number>;

            /**
             * matrix IDs. The length of this array needs to match the length of the resolutions array.
             */
            matrixIds?: Array<string>;

            /**
             * Number of tile rows and columns of the grid for each zoom level. The values here are the TileMatrixWidth and TileMatrixHeight advertised in the GetCapabilities response of the WMTS, and define the grid's extent together with the origin. An extent can be configured in addition, and will further limit the extent for which tile requests are made by sources.
             */
            sizes?: Array<ol.Size>;

            /**
             * Tile size.
             */
            tileSize?: number | ol.Size;

            /**
             * Tile sizes. The length of this array needs to match the length of the resolutions array.
             */
            tileSizes?: Array<number | ol.Size>;

            /**
             * Number of tile columns that cover the grid's extent for each zoom level. Only required when used with a source that has wrapX set to true, and only when the grid's origin differs from the one of the projection's extent. The array length has to match the length of the resolutions array, i.e. each resolution will have a matching entry here.
             */
            widths?: Array<number>;
        }

        interface XYZOptions {

            /**
             * Extent for the tile grid. The origin for an XYZ tile grid is the top-left corner of the extent. The zero level of the grid is defined by the resolution at which one tile fits in the provided extent. If not provided, the extent of the EPSG:3857 projection is used.
             */
            extent?: ol.Extent;

            /**
             * Maximum zoom. The default is ol.DEFAULT_MAX_ZOOM. This determines the number of levels in the grid set. For example, a maxZoom of 21 means there are 22 levels in the grid set.
             */
            maxZoom?: number;

            /**
             * Minimum zoom. Default is 0.
             */
            minZoom?: number;

            /**
             * Tile size in pixels. Default is [256, 256].
             */
            tileSize?: number | ol.Size;
        }

        interface ZoomifyOptions {

            /**
             * Resolutions
             */
            resolutions: Array<number>;
        }
    }

    module view {

        interface FitGeometryOptions {

            /**
             * Padding (in pixels) to be cleared inside the view. Values in the array are top, right, bottom and left padding. Default is [0, 0, 0, 0].
             */
            padding?: Array<number>;

            /**
             * Constrain the resolution. Default is true.
             */
            constrainResolution?: boolean;

            /**
             * Get the nearest extent. Default is false.
             */
            nearest?: boolean;

            /**
             * Minimum resolution that we zoom to. Default is 0.
             */
            minResolution?: number;

            /**
             * Maximum zoom level that we zoom to. If minResolution is given, this property is ignored.
             */
            maxZoom?: number;
        }
    }

    module format {

        interface GeoJSONOptions {

            /**
             * Default data projection.
             */
            defaultDataProjection?: ol.proj.ProjectionLike | ol.proj.Projection;

            /**
             * Geometry name to use when creating features
             */
            geometryName?: string;
        }

        interface ReadOptions {

            /**
             * Projection of the data we are reading. If not provided, the projection will be derived from the data (where possible) or the defaultDataProjection of the format is assigned (where set). If the projection can not be derived from the data and if no defaultDataProjection is set for a format, the features will not be reprojected.
             */
            dataProjection?: ol.proj.ProjectionLike | ol.proj.Projection;

            /**
             * Projection of the feature geometries created by the format reader. If not provided, features will be returned in the dataProjection.
             */
            featureProjection?: ol.proj.ProjectionLike | ol.proj.Projection;
        }

        interface WriteOptions {

            /**
             * Projection of the data we are writing. If not provided, the defaultDataProjection of the format is assigned (where set). If no defaultDataProjection is set for a format, the features will be returned in the featureProjection.
             */
            dataProjection?: ol.proj.ProjectionLike | ol.proj.Projection;

            /**
             * Projection of the feature geometries that will be serialized by the format writer.
             */
            featureProjection?: ol.proj.ProjectionLike | ol.proj.Projection;

            /**
             * When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If true, the right-hand rule will be applied. If false, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries.
             */
            rightHanded?: boolean;
        }
    }
}

/**
 * A high-performance, feature-packed library for all your mapping needs.
 */
declare module ol {

    interface TileLoadFunctionType{ (image: ol.Image, url: string): void }

    interface ImageLoadFunctionType{ (image: ol.Image, url: string): void }

    /**
     * An attribution for a layer source.
     */
    class Attribution {
        /**
         * @constructor
         * @param options Attribution options.
         */
        constructor(options: olx.AttributionOptions);

        /**
         * Get the attribution markup.
         * @returns The attribution HTML.
         */
        getHTML(): string;
    }

    /**
     * An expanded version of standard JS Array, adding convenience methods for manipulation. Add and remove changes to the Collection trigger a Collection event. Note that this does not cover changes to the objects within the Collection; they trigger events on the appropriate object, not on the Collection as a whole.
     */
    class Collection<T> extends ol.Object {

        /**
         * @constructor
         * @param values Array.
         */
        constructor(values: Array<T>)

        /**
         * Remove all elements from the collection.
         */
        clear(): void;

        /**
         * Add elements to the collection. This pushes each item in the provided array to the end of the collection.
         * @param arr Array.
         * @returns This collection.
         */
        extend(arr: Array<T>): Collection<T>;

        /**
         * Iterate over each element, calling the provided callback.
         * @param f The function to call for every element. This function takes 3 arguments (the element, the index and the array).
         * @param ref The object to use as this in f.
         */
        forEach(f: (element: T, index: number, array: Array<T>) => void, ref?: any): void;

        /**
         * Get a reference to the underlying Array object. Warning: if the array is mutated, no events will be dispatched by the collection, and the collection's "length" property won't be in sync with the actual length of the array.
         * @returns Array.
         */
        getArray(): Array<T>;

        /**
         * Get the length of this collection.
         * @returns The length of the array.
         */
        getLength(): number;

        /**
         * Insert an element at the provided index.
         * @param index Index.
         * @param elem Element.
         */
        insertAt(index: number, elem: T): void;

        /**
         * Get the element at the provided index.
         * @param index Index.
         * @returns Element.
         */
        item(index: number): T;

        /**
         * Remove the last element of the collection and return it. Return undefined if the collection is empty.
         * @returns Element
         */
        pop(): T;

        /**
         * Insert the provided element at the end of the collection.
         * @param Element.
         * @returns Length.
         */
        push(elem: T): number;

        /**
         * Remove the first occurrence of an element from the collection.
         * @param elem Element.
         * @returns The removed element or undefined if none found.
         */
        remove(elem: T): T;

        /**
         * Remove the element at the provided index and return it. Return undefined if the collection does not contain this index.
         * @param index Index.
         * @returns Value.
         */
        removeAt(index: number): T;

        /**
         * Set the element at the provided index.
         * @param index Index.
         * @param elem Element.
         */
        setAt(index: number, elem: T): void;
    }

    /**
     * Events emitted by ol.Collection instances are instances of this type.
     */
    class CollectionEvent<T> {

        /**
         * The element that is added to or removed from the collection.
         */
        element: T;
    }

    /**
     * The ol.DeviceOrientation class provides access to information from DeviceOrientation events.
     */
    class DeviceOrientation extends ol.Object {

        /**
         * @constructor
         * @param options Options.
         */
        constructor(options?: olx.DeviceOrientationOptions);

        /**
         * Rotation around the device z-axis (in radians).
         * @returns The euler angle in radians of the device from the standard Z axis.
         */
        getAlpha(): number;

        /**
         * Rotation around the device x-axis (in radians).
         * @returns The euler angle in radians of the device from the planar X axis.
         */
        getBeta(): number;

        /**
         * Rotation around the device y-axis (in radians).
         * @returns The euler angle in radians of the device from the planar Y axis.
         */
        getGamma(): number;

        /**
         * The heading of the device relative to north (in radians).
         * @returns The heading of the device relative to north, in radians, normalizing for different browser behavior.
         */
        getHeading(): number;

        /**
         * Determine if orientation is being tracked.
         * @returns Changes in device orientation are being tracked.
         */
        getTracking(): boolean;

        /**
         * Enable or disable tracking of device orientation events.
         * @param tracking The status of tracking changes to alpha, beta and gamma. If true, changes are tracked and reported immediately.
         */
        setTracking(tracking: boolean): void;
    }

    /**
     * Events emitted by ol.interaction.DragBox instances are instances of this type.
     */
    class DragBoxEvent {

        /**
         * The coordinate of the drag event.
         */
        coordinate: ol.Coordinate;
    }

    /**
     * A vector object for geographic features with a geometry and other attribute properties, similar to the features in vector file formats like GeoJSON.
     */
    class Feature extends ol.Object {

        /**
         * @constructor
         * @param geometry Geometry.
         */
        // TODO: replace any with Object <string, *>
        constructor(geometryOrProperties?: ol.geom.Geometry | any);

        /**
         * Clone this feature. If the original feature has a geometry it is also cloned. The feature id is not set in the clone.
         * @returns The clone.
         */
        clone(): Feature;

        /**
         * Get the feature's default geometry. A feature may have any number of named geometries. The "default" geometry (the one that is rendered by default) is set when calling ol.Feature#setGeometry.
         * @returns The default geometry for the feature.
         */
        getGeometry(): ol.geom.Geometry;

        /**
         * Get the name of the feature's default geometry. By default, the default geometry is named geometry.
         * @returns Get the property name associated with the default geometry for this feature.
         */
        getGeometryName(): string;

        /**
         * @returns Id.
         */
        getId(): string | number;

        /**
         * Get the feature's style. This return for this method depends on what was provided to the ol.Feature#setStyle method.
         * The feature style.
         */
        getStyle(): ol.style.Style | Array<ol.style.Style> | ol.FeatureStyleFunction;

        /**
         * Get the feature's style function.
         * @returns Return a function representing the current style of this feature.
         */
        getStyleFunction(): ol.FeatureStyleFunction;

        /**
         * Set the default geometry for the feature. This will update the property with the name returned by ol.Feature#getGeometryName.
         * @param geometry The new geometry.
         */
        setGeometry(geometry: ol.geom.Geometry): void;

        /**
         * Set the property name to be used when getting the feature's default geometry. When calling ol.Feature#getGeometry, the value of the property with this name will be returned.
         * @param name The property name of the default geometry.
         */
        setGeometryName(name: string): void;

        /**
         * Set the feature id. The feature id is considered stable and may be used when requesting features or comparing identifiers returned from a remote source. The feature id can be used with the ol.source.Vector#getFeatureById method.
         * @param id The feature id.
         */
        setId(id: number): void;

        /**
         * Set the feature id. The feature id is considered stable and may be used when requesting features or comparing identifiers returned from a remote source. The feature id can be used with the ol.source.Vector#getFeatureById method.
         * @param id The feature id.
         */
        setId(id: string): void;

        /**
         * Set the style for the feature. This can be a single style object, an array of styles, or a function that takes a resolution and returns an array of styles. If it is null the feature has no style (a null style).
         * @param style Style for this feature.
         */
        setStyle(style: ol.style.Style): void;

        /**
         * Set the style for the feature. This can be a single style object, an array of styles, or a function that takes a resolution and returns an array of styles. If it is null the feature has no style (a null style).
         * @param style Style for this feature.
         */
        setStyle(style: Array<ol.style.Style>): void;

        /**
         * Set the style for the feature. This can be a single style object, an array of styles, or a function that takes a resolution and returns an array of styles. If it is null the feature has no style (a null style).
         * @param style Style for this feature.
         */
        setStyle(style: ol.FeatureStyleFunction): void;
    }

    /**
     * A mechanism for changing the style of a small number of features on a temporary basis, for example highlighting.
     */
    class FeatureOverlay {

        /**
         * @constructor
         * @param options Options.
         */
        constructor(options?: olx.FeatureOverlayOptions);

        /**
         * Add a feature to the overlay.
         * @param feature Feature.
         */
        addFeature(feature: ol.Feature): void;

        /**
         * Get the features on the overlay.
         * @returns Features collection.
         */
        getFeatures: ol.Collection<ol.Feature>;

        /**
         * Get the map associated with the overlay.
         * @returns The map with which this feature overlay is associated.
         */
        getMap(): ol.Map;

        /**
         * Get the style for features. This returns whatever was passed to the style option at construction or to the setStyle method.
         * @returns Overlay style.
         */
        getStyle(): ol.style.Style | Array<ol.style.Style> | ol.style.StyleFunction;

        /**
         * Get the style function
         * @returns Style function
         */
        getStyleFunction(): ol.style.StyleFunction;

        /**
         * Remove a feature from the overlay.
         * @param feature The feature to be removed.
         */
        removeFeature(feature: ol.Feature): void;

        /**
         * Set the features for the overlay.
         * @param features Features collection.
         */
        setFeatures(features: ol.Collection<ol.Feature>): void;

        /**
         * Set the map for the overlay.
         * @param map Map.
         */
        setMap(map: ol.Map): void;

        /**
         * Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles.
         * @param style Overlay style
         */
        setStyle(style: ol.style.Style): void;

        /**
         * Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles.
         * @param style Overlay style
         */
        setStyle(style: Array<ol.style.Style>): void;

        /**
         * Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles.
         * @param style Overlay style
         */
        setStyle(style: ol.style.StyleFunction): void;
    }

    /**
     * Helper class for providing HTML5 Geolocation capabilities. The Geolocation API is used to locate a user's position.
     */
    class Geolocation extends ol.Object {

        /**
         * @constructor
         * @param options Options.
         */
        constructor(options?: olx.GeolocationOptions);

        /**
         * Get the accuracy of the position in meters.
         * @returns The accuracy of the position measurement in meters.
         */
        getAccuracy(): number;

        /**
         * Get a geometry of the position accuracy.
         * @returns A geometry of the position accuracy.
         */
        getAccuracyGeometry(): ol.geom.Geometry;

        /**
         * Get the altitude associated with the position.
         * @returns The altitude of the position in meters above mean sea level.
         */
        getAltitude(): number;

        /**
         * Get the altitude accuracy of the position.
         * @returns The accuracy of the altitude measurement in meters.
         */
        getAltitudeAccuracy(): number;

        /**
         * Get the heading as radians clockwise from North.
         * @returns The heading of the device in radians from north.
         */
        getHeading(): number;

        /**
         * Get the position of the device.
         * @returns The current position of the device reported in the current projection.
         */
        getPosition(): ol.Coordinate;

        /**
         * Get the projection associated with the position.
         * @returns The projection the position is reported in.
         */
        getProjection(): ol.proj.Projection;

        /**
         * Get the speed in meters per second.
         * @returns The instantaneous speed of the device in meters per second.
         */
        getSpeed(): number;

        /**
         * Determine if the device location is being tracked.
         * @returns The device location is being tracked.
         */
        getTracking(): boolean;

        /**
         * Get the tracking options.
         * @returns PositionOptions as defined by the HTML5 Geolocation spec.
         */
        getTrackingOptions(): PositionOptions;

        /**
         * Set the projection to use for transforming the coordinates.
         * @param projection The projection the position is reported in.
         */
        setProjection(projection: ol.proj.Projection): void;

        /**
         * Enable or disable tracking.
         * @param tracking Enable tracking
         */
        setTracking(tracking: boolean): void;

        /**
         * Set the tracking options.
         * @param PositionOptions as defined by the HTML5 Geolocation spec.
         */
        setTrackingOptions(options: PositionOptions): void;
    }

    /**
     * Render a grid for a coordinate system on a map.
     */
    class Graticule {
        /**
         * @constructor
         * @param options Options.
         */
        constructor(options?: olx.GraticuleOptions);

        /**
         * Get the map associated with this graticule.
         * @returns The map.
         */
        getMap(): Map;

        /**
         * Get the list of meridians. Meridians are lines of equal longitude.
         * @returns The meridians.
         */
        getMeridians(): Array<ol.geom.LineString>;

        /**
         * Get the list of parallels. Pallels are lines of equal latitude.
         * @returns The parallels.
         */
        getParallels(): Array<ol.geom.LineString>;

        /**
         * Set the map for this graticule.The graticule will be rendered on the provided map.
         * @param map Map
         */
        setMap(map: Map): void;
    }

    /**
     *
     */
    class Image extends ol.ImageBase {

        /**
         * Get the HTML image element (may be a Canvas, Image, or Video).
         * @param context Object.
         * @returns Image.
         */
        getImage(context: HTMLCanvasElement): Image;

        /**
         * Get the HTML image element (may be a Canvas, Image, or Video).
         * @param context Object.
         * @returns Image.
         */
        getImage(context: HTMLImageElement): Image;

        /**
         * Get the HTML image element (may be a Canvas, Image, or Video).
         * @param context Object.
         * @returns Image.
         */
        getImage(context: HTMLVideoElement): Image;
    }

    /**
     *
     */
    class ImageBase {
    }

    /**
     *
     */
    class ImageTile extends ol.Tile {

        /**
         * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
         * @param context Object.
         * @returns Image.
         */
        getImage(context: HTMLCanvasElement): Image;

        /**
         * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
         * @param context Object.
         * @returns Image.
         */
        getImage(context: HTMLImageElement): Image;

        /**
         * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
         * @param context Object.
         * @returns Image.
         */
        getImage(context: HTMLVideoElement): Image;

    }

    /**
     * Implementation of inertial deceleration for map movement.
     */
    class Kinetic {

        /**
         * @constructor
         * @param decay Rate of decay (must be negative).
         * @param Minimum velocity (pixels/millisecond).
         * @param Delay to consider to calculate the kinetic initial values (milliseconds).
         */
        constructor(decay: number, minVelocity: number, delay: number);
    }

    /**
     * The map is the core component of OpenLayers. For a map to render, a view, one or more layers, and a target container are needed.
     */
    class Map extends ol.Object {

        /**
         * @constructor
         * @params options Options.
         */
        constructor(options: olx.MapOptions);

        /**
         * Add the given control to the map.
         * @param control Control.
         */
        addControl(control: ol.control.Control): void;

        /**
         * Add the given interaction to the map.
         * @param interaction Interaction to add.
         */
        addInteraction(interaction: ol.interaction.Interaction): void;

        /**
         * Adds the given layer to the top of this map. If you want to add a layer elsewhere in the stack, use getLayers() and the methods available on ol.Collection.
         * @param Layer.
         */
        addLayer(layer: ol.layer.Base): void;

        /**
         * Add the given overlay to the map.
         * @param overlay Overlay.
         */
        addOverlay(overlay: ol.Overlay): void;

        /**
         * Add functions to be called before rendering. This can be used for attaching animations before updating the map's view. The ol.animation namespace provides several static methods for creating prerender functions.
         * @param var_args Any number of pre-render functions.
         */
        beforeRender(var_args: ol.PreRenderFunction): void;

        /**
         * Detect features that intersect a pixel on the viewport, and execute a callback with each intersecting feature. Layers included in the detection can be configured through opt_layerFilter. Feature overlays will always be included in the detection.
         * @param pixel Pixel.
         * @param callback Feature callback. The callback will be called with two arguments. The first argument is one feature at the pixel, the second is the layer of the feature. If the detected feature is not on a layer, but on a ol.FeatureOverlay, then the second argument to this function will be null. To stop detection, callback functions can return a truthy value.
         * @param ref Value to use as this when executing callback.
         * @param layerFilter Layer filter function. The filter function will receive one argument, the layer-candidate and it should return a boolean value. Only layers which are visible and for which this function returns true will be tested for features. By default, all visible layers will be tested. Feature overlays will always be tested.
         * @param ref2 Value to use as this when executing layerFilter.
         * @returns Callback result, i.e. the return value of last callback execution, or the first truthy callback return value.
         */
        forEachFeatureAtPixel(pixel: ol.Pixel, callback: (feature: ol.Feature, layer: ol.layer.Layer) => any, ref?: any, layerFilter?: (layerCandidate: ol.layer.Layer) => boolean, ref2?: any): void;

        /**
         * Detect layers that have a color value at a pixel on the viewport, and execute a callback with each matching layer. Layers included in the detection can be configured through opt_layerFilter. Feature overlays will always be included in the detection.
         * @param pixel Pixel.
         * @param callback Layer callback. Will receive one argument, the layer that contains the color pixel. If the detected color value is not from a layer, but from a ol.FeatureOverlay, then the argument to this function will be null. To stop detection, callback functions can return a truthy value.
         * @param ref Value to use as this when executing callback.
         * @param layerFilter Layer filter function. The filter function will receive one argument, the layer-candidate and it should return a boolean value. Only layers which are visible and for which this function returns true will be tested for features. By default, all visible layers will be tested. Feature overlays will always be tested.
         * @param ref2 Value to use as this when executing layerFilter.
         * @returns Callback result, i.e. the return value of last callback execution, or the first truthy callback return value.
         */
        forEachLayerAtPixel(pixel: ol.Pixel, callback: (layer: ol.layer.Layer) => any, ref?: any, layerFilter?: (layerCandidate: ol.layer.Layer) => boolean, ref2?: any): void;

        /**
         * Get the map controls. Modifying this collection changes the controls associated with the map.
         * @returns Controls.
         */
        getControls(): ol.Collection<ol.control.Control>;

        /**
         * Get the coordinate for a given pixel. This returns a coordinate in the map view projection.
         * @param pixel Pixel position in the map viewport.
         * @returns The coordinate for the pixel position.
         */
        getCoordinateFromPixel(pixel: ol.Pixel): ol.Coordinate;

        /**
         * Returns the geographical coordinate for a browser event.
         * @param event Event.
         * @returns Coordinate.
         */
        getEventCoordinate(event: Event): ol.Coordinate;

        /**
         * Returns the map pixel position for a browser event relative to the viewport.
         * @param event Event.
         * @returns Pixel.
         */
        getEventPixel(event: Event): ol.Pixel;

        /**
         * Get the map interactions. Modifying this collection changes the interactions associated with the map.
         * @returns Interactions
         */
        getInteractions(): ol.Collection<ol.interaction.Interaction>;

        /**
         * Get the layergroup associated with this map.
         * @returns A layer group containing the layers in this map.
         */
        getLayerGroup(): ol.layer.Group;

        /**
         * Get the collection of layers associated with this map.
         * @returns Layers.
         */
        getLayers(): ol.Collection<ol.layer.Base>;

        /**
         * Get the map overlays. Modifying this collection changes the overlays associated with the map.
         * @returns Overlays.
         */
        getOverlays(): ol.Collection<ol.Overlay>;

        /**
         * Get the pixel for a coordinate. This takes a coordinate in the map view projection and returns the corresponding pixel.
         * @param coordinate A map coordinate.
         * @returns A pixel position in the map viewport.
         */
        getPixelFromCoordinate(coordinate: ol.Coordinate): ol.Pixel;

        /**
         * Get the size of this map.
         * @returns The size in pixels of the map in the DOM.
         */
        getSize(): ol.Size;

        /**
         * Get the target in which this map is rendered. Note that this returns what is entered as an option or in setTarget: if that was an element, it returns an element; if a string, it returns that.
         * @returns The Element or id of the Element that the map is rendered in.
         */
        getTarget(): Element | string;

        /**
         * Get the DOM element into which this map is rendered. In contrast to getTarget this method always return an Element, or null if the map has no target.
         * @returns The element that the map is rendered in.
         */
        getTargetElement(): Element;

        /**
         * Get the view associated with this map. A view manages properties such as center and resolution.
         * @returns The view that controls this map.
         */
        getView(): View;

        /**
         * Get the element that serves as the map viewport.
         * @returns Viewport.
         */
        getViewport(): Element;

        /**
         * Detect if features intersect a pixel on the viewport. Layers included in the detection can be configured through opt_layerFilter. Feature overlays will always be included in the detection.
         * @param pixel Pixel.
         * @param layerFilter Layer filter function. The filter function will receive one argument, the layer-candidate and it should return a boolean value. Only layers which are visible and for which this function returns true will be tested for features. By default, all visible layers will be tested. Feature overlays will always be tested.
         * @param ref Value to use as this when executing layerFilter.
         * @returns Is there a feature at the given pixel?
         */
        hasFeatureAtPixel(pixel: ol.Pixel, layerFilter?: (layer: ol.layer.Layer) => boolean, ref?: any): boolean;

        /**
         * Remove the given control from the map.
         * @param Control.
         * @returns The removed control (or undefined if the control was not found).
         */
        removeControl(control: ol.control.Control): ol.control.Control;

        /**
         * Remove the given interaction from the map.
         * @param interaction Interaction to remove.
         * @returns The removed interaction (or undefined if the interaction was not found).
         */
        removeInteraction(interaction: ol.interaction.Interaction): ol.interaction.Interaction;

        /**
         * Removes the given layer from the map.
         * @param Layer.
         * @returns The removed layer (or undefined if the layer was not found).
         */
        removeLayer(layer: ol.layer.Base): ol.layer.Base;

        /**
         * Remove the given overlay from the map.
         * @param Overlay.
         * @returns The removed overlay (or undefined if the overlay was not found).
         */
        removeOverlay(overlay: ol.Overlay): ol.Overlay;

        /**
         * Request a map rendering (at the next animation frame).
         */
        render(): void;

        /**
         * Requests an immediate render in a synchronous manner.
         */
        renderSync(): void;

        /**
         * Sets the layergroup of this map.
         * @param layerGroup A layer group containing the layers in this map.
         */
        setLayerGroup(layerGroup: ol.layer.Group): void;

        /**
         * Set the size of this map.
         * @param size The size in pixels of the map in the DOM.
         */
        setSize(size: ol.Size): void;

        /**
         * Set the target element to render this map into.
         * @param target The Element that the map is rendered in.
         */
        setTarget(target: Element): void;

        /**
         * Set the target element to render this map into.
         * @param target The id of the element that the map is rendered in.
         */
        setTarget(target: string): void;

        /**
         * Set the view for this map.
         * @param view The view that controls this map.
         */
        setView(view: View): void;

        /**
         * Force a recalculation of the map viewport size. This should be called when third-party code changes the size of the map viewport.
         * */
        updateSize(): void;
    }

    /**
     * Events emitted as map browser events are instances of this type. See ol.Map for which events trigger a map browser event.
     */
    class MapBrowserEvent extends MapEvent {

        /**
         * The coordinate of the original browser event
         */
        coordinate: Coordinate;

        /**
         * Indicates if the map is currently being dragged. Only set for POINTERDRAG and POINTERMOVE events. Default is false.
         */
        dragging: boolean;

        /**
         * The frame state at the time of the event
         */
        frameState: olx.FrameState;

        /**
         * The map where the event occured
         */
        map: Map;

        /**
         * The original browser event
         */
        originalEvent: Event;

        /**
         * The pixel of the original browser event.
         */
        pixel: Pixel;


        // Methods

        /**
         * Prevents the default browser action.
         */
        preventDefault(): void;

        /**
         * Prevents further propagation of the current event.
         */
        stopPropagation(): void;
    }

    /**
     * Events emitted as map events are instances of this type. See ol.Map for which events trigger a map event.
     */
    class MapEvent {

        /**
         * The frame state at the time of the event.
         */
        frameState: olx.FrameState;

        /**
         * The map where the event occurred.
         */
        map: Map;
    }

    /**
     * Abstract base class; normally only used for creating subclasses and not instantiated in apps. Most non-trivial classes inherit from this.
     */
    class Object extends Observable {

        /**
         * @constructor
         * @param values An object with key-value pairs.
         */
        constructor(values?: Object);

        /**
         * Gets a value.
         * @param key Key name.
         * @returns Value.
         */
        get(key: string): any;

        /**
         * Get a list of object property names.
         * @returns List of property names.
         */
        getKeys(): Array<string>;

        /**
         * Get an object of all property names and values.
         * @returns Object.
         */
        getProperties(): Object;

        /**
         * @returns Revision.
         */
        getRevision(): number;

        /**
         * Sets a value.
         * @param key Key name.
         * @param value Value.
         */
        set(key: string, value: any): void;

        /**
         * Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).
         * @param Values.
         */
        setProperties(values: Object): void;

        /**
         * Unsets a property.
         */
        unset(key: string): void;
    }

    /**
     * Events emitted by ol.Object instances are instances of this type.
     */
    class ObjectEvent {

        /**
         * The name of the property whose value is changing.
         */
        key: string;

        /**
         * The old value. To get the new value use e.target.get(e.key) where e is the event object.
         */
        oldValue: any;
    }

    /**
     * Abstract base class; normally only used for creating subclasses and not instantiated in apps. An event target providing convenient methods for listener registration and unregistration. A generic change event is always available through ol.Observable#changed.
     */
    class Observable {

        /**
         * Removes an event listener using the key returned by on() or once().
         */
        unByKey(key: any): void;

        /**
         * Increases the revision counter and dispatches a 'change' event.
         */
        changed(): void;

        /**
         * @returns Revision.
         */
        getRevision(): number;

        /**
         * Listen for a certain type of event.
         * @param type The event type.
         * @param listener The listener function.
         * @param ref The object to use as this in listener.
         * @returns Unique key for the listener.
         */
        on(type: string, listener: (event: MapBrowserEvent) => void, ref?: any): any;

        /**
         * Listen for a certain type of event.
         * @param type The array of event types.
         * @param listener The listener function.
         * @param ref The object to use as this in listener.
         * @returns Unique key for the listener.
         */
        on(type: Array<string>, listener: (event: MapBrowserEvent) => void, ref?: any): any;

        /**
         * Listen once for a certain type of event.
         * @param type The event type.
         * @param listener The listener function.
         * @param ref The object to use as this in listener.
         * @returns Unique key for the listener.
         */
        once(type: string, listener: (event: MapBrowserEvent) => void, ref?: any): any;

        /**
         * Listen once for a certain type of event.
         * @param type The array of event types.
         * @param listener The listener function.
         * @param ref The object to use as this in listener.
         * @returns Unique key for the listener.
         */
        once(type: Array<string>, listener: (event: MapBrowserEvent) => void, ref?: any): any;

        /**
         * Unlisten for a certain type of event.
         * @param type The array of event types.
         * @param listener The listener function.
         * @param ref The object to use as this in listener.
         * @returns Unique key for the listener.
         */
        un(type: Array<string>, listener: (event: MapBrowserEvent) => void, ref?: any): any;

        /**
         * Removes an event listener using the key returned by on() or once(). Note that using the ol.Observable.unByKey static function is to be preferred.
         * @param key The key returned by on() or once()
         */
        unByKey(key: any): void;
    }

    /**
     * An element to be displayed over the map and attached to a single map location.
     */
    class Overlay extends ol.Object {

        /**
         * @constructor
         * @param options Overlay options.
         */
        constructor(options: olx.OverlayOptions);

        /**
         * Get the DOM element of this overlay.
         * @returns The Element containing the overlay.
         */
        getElement(): Element;

        /**
         * Get the map associated with this overlay.
         * @returns The map that the overlay is part of.
         */
        getMap(): ol.Map;

        /**
         * Get the offset of this overlay.
         * @returns The offset.
         */
        getOffset(): Array<number>;

        /**
         * Get the current position of this overlay.
         * @returns The spatial point that the overlay is anchored at.
         */
        getPosition(): ol.Coordinate;

        /**
         * Get the current positioning of this overlay.
         * @returns How the overlay is positioned relative to its point on the map.
         */
        getPositioning(): ol.OverlayPositioning;

        /**
         * Set the DOM element to be associated with this overlay.
         * @param element The element containing the overlay.
         */
        setElement(element: Element): void;

        /**
         * Set the map to be associated with this overlay.
         * @param map The map that the overlay is part of.
         */
        setMap(map: Map): void;

        /**
         * Set the offset for this overlay.
         * @param offset Offset.
         */
        setOffset(offset: Array<number>): void;

        /**
         * Set the position for this overlay. If the position is undefined the overlay is hidden.
         * @param position The spatial point that the overlay is anchored at.
         */
        setPosition(position: ol.Coordinate): void;

        /**
         * Set the positioning for this overlay.
         * @param How the overlay is positioned relative to its point on the map.
         */
        setPositioning(positioning: ol.OverlayPositioning): void;
    }

    /**
     * Events emitted by ol.interaction.Select instances are instances of this type.
     */
    class SelectEvent {

        /**
         * Deselected features array.
         */
        deselected: Array<ol.Feature>;

        /**
         * Associated ol.MapBrowserEvent;
         */
        mapBrowserEvent: ol.MapBrowserEvent;

        /**
         * Selected features array.
         */
        selected: Array<ol.Feature>
    }

    /**
     * Class to create objects that can be used with ol.geom.Polygon.circular.
     */
    class Sphere {

        /**
         * @constructor
         * @param radius Radius.
         */
        constructor(radius: number);

        /**
         * Returns the geodesic area for a list of coordinates.
         * @param coordinates List of coordinates of a linear ring. If the ring is oriented clockwise, the area will be positive, otherwise it will be negative.
         * @returns Area.
         */
        geodesicArea(coordinates: Array<ol.Coordinate>): number;

        /**
         * Returns the distance from c1 to c2 using the haversine formula.
         * @param c1 Coordinate 1.
         * @param c2 Coordinate 2.
         * @returns Haversine distance.
         */
        haversineDistance(c1: ol.Coordinate, c2: ol.Coordinate): number;
    }

    /**
     * Base class for tiles.
     */
    class Tile {

        /**
         * Get the tile coordinate for this tile.
         * @returns TileCoord.
         */
        getTileCoord(): ol.TileCoord;
    }

    /**
     * An ol.View object represents a simple 2D view of the map.
     */
    class View extends ol.Object {

        /**
         * @constructor
         * @param options Options.
         */
        constructor(options?: olx.ViewOptions);

        /**
         * Calculate the extent for the current view state and the passed size. The size is the pixel dimensions of the box into which the calculated extent should fit. In most cases you want to get the extent of the entire map, that is map.getSize().
         * @param size Box pixel size
         * @returns Extent.
         */
        calculateExtent(size: ol.Size): ol.Extent;

        /**
         * Center on coordinate and view position.
         * @param coordinate Coordinate.
         * @param size Box pixel size
         * @param position Position on the view to center on
         */
        centerOn(coordinate: ol.Coordinate, size: ol.Size, position: ol.Pixel): void;

        /**
         * Get the constrained center of this view.
         * @param center Center.
         * @returns Constrained center.
         */
        constrainCenter(center: ol.Coordinate): ol.Coordinate;

        /**
         * Get the constrained resolution of this view.
         * @param resolution: Resolution.
         * @param delta Delta. Default is 0.
         * @param direction Direction. Default is 0.
         * @returns Constrained resolution
         */
        constrainResolution(resolution: number, delta?: number, direction?: number): number;

        /**
         * Fit the map view to the passed extent and size. The size is pixel dimensions of the box to fit the extent into. In most cases you will want to use the map size, that is map.getSize().
         * @param extent Extent.
         * @param size Box pixel size.
         */
        fitExtent(extent: ol.Extent, size: ol.Size): void;

        /**
         * Fit the given geometry into the view based on the given map size and border.
         * @param geometry Geometry.
         * @param size Box pixel size.
         * @param options Options
         */
        fitGeometry(geometry: ol.geom.SimpleGeometry, size: ol.Size, options?: olx.view.FitGeometryOptions): void;

        /**
         * Get the view center.
         * @returns The center of the view.
         */
        getCenter(): ol.Coordinate;

        /**
         * Get the view projection
         * @returns The projection of the view.
         */
        getProjection(): ol.proj.Projection;

        /**
         * Get the view resolution
         * @returns The resolution of the view.
         */
        getResolution(): number;

        /**
         * Get the view rotation
         * @returns The rotation of the view in radians
         */
        getRotation(): number;

        /**
         * Get the current zoom level. Return undefined if the current resolution is undefined or not a "constrained resolution".
         * @returns Zoom.
         */
        getZoom(): number;

        /**
         * Rotate the view around a given coordinate.
         * @param rotation New rotation value for the view.
         * @param anchor The rotation center.
         */
        rotate(rotation: number, anchor: ol.Coordinate): void;

        /**
         * Set the center of the current view.
         * @param center The center of the view.
         */
        setCenter(center: ol.Coordinate): void;

        /**
         * Set the resolution for this view.
         * @param resolution The resolution of the view.
         */
        setResolution(resolution: number): void;

        /**
         * Set the rotation for this view.
         * @param rotation The rotation of the view in radians.
         */
        setRotation(rotation: number): void;

        /**
         * Zoom to a specific zoom level.
         * @param zoom Zoom level.
         */
        setZoom(zoom: number): void;
    }

    // NAMESPACES

    /**
     * The animation static methods are designed to be used with the ol.Map#beforeRender method.
     */
    module animation {

        /**
         * Generate an animated transition that will "bounce" the resolution as it approaches the final value.
         * @param options Bounce options.
         */
        function bounce(options: olx.animation.BounceOptions): ol.PreRenderFunction;

        /**
         * Generate an animated transition while updating the view center.
         * @param options Pan options.
         */
        function pan(options: olx.animation.PanOptions): ol.PreRenderFunction;

        /**
         * Generate an animated transition while updating the view rotation.
         * @param options Rotate options.
         */
        function rotate(options: olx.animation.RotateOptions): ol.PreRenderFunction;

        /**
         * Generate an animated transition while updating the view resolution.
         * @param options Zoom options.
         */
        function zoom(options: olx.animation.ZoomOptions): ol.PreRenderFunction;
    }

    /**
     * Return the color as an array. This function maintains a cache of calculated arrays which means the result should not be modified.
     */
    module color {

        /**
         * Return the color as an array. This function maintains a cache of calculated arrays which means the result should not be modified.
         * @param color Color.
         */
        function asArray(color: ol.Color): ol.Color;

        /**
         * Return the color as an array. This function maintains a cache of calculated arrays which means the result should not be modified.
         * @param color Color.
         */
        function asArray(color: string): ol.Color;

        /**
         * Return the color as an rgba string.
         * @param color Color.
         */
        function asString(color: ol.Color): string;

        /**
         * Return the color as an rgba string.
         * @param color Color.
         */
        function asString(color: string): string;
    }

    module control {

        /**
         * Set of controls included in maps by default. Unless configured otherwise, this returns a collection containing an instance of each of the following controls: ol.control.Zoom, ol.control.Rotate, ol.control.Attribution
         * @param options Defaults options
         * @returns Control.s
         */
        function defaults(options?: olx.control.DefaultsOptions): ol.Collection<ol.control.Control>;

        /**
         * Units for the scale line. Supported values are 'degrees', 'imperial', 'nautical', 'metric', 'us'.
         */
        interface ScaleLineUnits extends String { }

        class Attribution {
        }

        class Control {
        }

        class FullScreen {
        }

        class MousePosition {
        }

        class OverviewMap {
        }

        class Rotate {
        }

        class ScaleLine {
        }

        class Zoom {
        }

        class ZoomSlider {
        }

        class ZoomToExtent {
        }
    }

    module coordinate {

        /**
         * Add delta to coordinate. coordinate is modified in place and returned by the function.
         * @param coordinate Coordinate
         * @param delta Delta
         * @returns The input coordinate adjusted by the given delta.
         */
        function add(coordinate: ol.Coordinate, delta: ol.Coordinate): ol.Coordinate;

        /**
         * Returns a ol.CoordinateFormatType function that can be used to format a {ol.Coordinate} to a string.
         * @param fractionDigits The number of digits to include after the decimal point. Default is 0.
         * @returns Coordinate format
         */
        function createStringXY(fractionDigits?: number): ol.CoordinateFormatType;

        /**
         * Transforms the given ol.Coordinate to a string using the given string template. The strings {x} and {y} in the template will be replaced with the first and second coordinate values respectively.
         * @param coordinate Coordinate
         * @param template A template string with {x} and {y} placeholders that will be replaced by first and second coordinate values.
         * @param fractionDigits The number of digits to include after the decimal point. Default is 0.
         * @returns Formatted coordinate
         */
        function format(coordinate: ol.Coordinate, template: string, fractionDigits?: number): string;

        /**
         * Rotate coordinate by angle. coordinate is modified in place and returned by the function.
         * @param coordinate Coordinate
         * @param angle Angle in radian
         * @returns Coordinatee
         */
        function rotate(coordinate: ol.Coordinate, angle: number): ol.Coordinate;

        /**
         * Format a geographic coordinate with the hemisphere, degrees, minutes, and seconds.
         * @param coordinate COordinate
         * @returns Hemisphere, degrees, minutes and seconds.
         */
        function toStringHDMS(coordinate?: ol.Coordinate): string;

        /**
         * Format a coordinate as a comma delimited string.
         * @param coordinate Coordinate
         * @param fractionDigits The number of digits to include after the decimal point. Default is 0.
         * @returns XY
         */
        function toStringXY(coordinate?: ol.Coordinate, fractionDigits?: number): string;
    }

    /**
     * Easing functions for ol.animation.
     */
    module easing {

        /**
         * Start slow and speed up.
         * @param number Input between 0 and 1
         * @returns Output between 0 and 1
         */
        function easeIn(t: number): number;

        /**
         * Start fast and slow down.
         * @param number Input between 0 and 1
         * @returns Output between 0 and 1
         */
        function easeOut(t: number): number;

        /**
        * Start slow, speed up, and then slow down again.
        * @param number Input between 0 and 1
        * @returns Output between 0 and 1
        */
        function inAndOut(t: number): number;

        /**
        * Maintain a constant speed over time.
        * @param number Input between 0 and 1
        * @returns Output between 0 and 1
        */
        function linear(t: number): number;

        /**
        * Start slow, speed up, and at the very end slow down again. This has the same general behavior as ol.easing.inAndOut, but the final slowdown is delayed.
        * @param number Input between 0 and 1
        * @returns Output between 0 and 1
        */
        function upAndDown(t: number): number;
    }

    module events {
        module condition {
        }
    }

    module extent {

        /**
         * Apply a transform function to the extent.
         * @param extent Extent
         * @param transformFn Transform function. Called with [minX, minY, maxX, maxY] extent coordinates.
         * @param destinationExtent Destination Extent
         * @returns Extent
         */
        function applyTransform(extent: ol.Extent, transformFn: ol.TransformFunction, destinationExtent?: ol.Extent): ol.Extent;

        /**
         * Build an extent that includes all given coordinates.
         * @param coordinates Coordinates
         * @returns Bounding extent
         */
        function boundingExtent(coordinates: Array<ol.Coordinate>): ol.Extent;

        /**
         * Return extent increased by the provided value.
         * @param extent Extent
         * @param value The amount by which the extent should be buffered.
         * @param destinationExtent Destination Extent
         * @returns Extent
         */
        function buffer(extent: ol.Extent, value: number, destinationExtent?: ol.Extent): ol.Extent;

        /**
         * Check if the passed coordinate is contained or on the edge of the extent.
         * @param extent Extent
         * @param coordinate Coordinate
         * @returns The coordinate is contained in the extent
         */
        function containsCoordinate(extent: ol.Extent, coordinate: ol.Coordinate): boolean;

        /**
         * Check if one extent contains another. An extent is deemed contained if it lies completely within the other extent, including if they share one or more edges.
         * @param extent1 Extent 1
         * @param extent2 Extent 2
         * @returns The second extent is contained by or on the edge of the first
         */
        function containsExtent(extent1: ol.Extent, extent2: ol.Extent): boolean;

        /**
         * Check if the passed coordinate is contained or on the edge of the extent.
         * @param extent Extent
         * @param x X coordinate
         * @param y Y coordinate
         * @returns The x, y values are contained in the extent.
         */
        function containsXY(extent: ol.Extent, x: number, y: number): boolean;

        /**
         * Create an empty extent.
         * @returns Empty extent
         */
        function createEmpty(): ol.Extent;

        /**
         * Determine if two extents are equivalent.
         * @param extent1 Extent 1
         * @param extent2 Extent 2
         * @returns The two extents are equivalent
         */
        function equals(extent1: ol.Extent, extent2: ol.Extent): boolean;

        /**
         * Modify an extent to include another extent.
         * @param extent1 The extent to be modified.
         * @param extent2 The extent that will be included in the first.
         * @returns A reference to the first (extended) extent.
         */
        function extend(extent1: ol.Extent, extent2: ol.Extent): ol.Extent;

        /**
         * Get the bottom left coordinate of an extent.
         * @param extent Extent
         * @returns Bottom left coordinate
         */
        function getBottomLeft(extent: ol.Extent): ol.Coordinate;

        /**
         * Get the bottom right coordinate of an extent.
         * @param extent Extent
         * @returns Bottom right coordinate
         */
        function getBottomRight(extent: ol.Extent): ol.Coordinate;

        /**
         * Get the center coordinate of an extent.
         * @param extent Extent
         * @returns Center
         */
        function getCenter(extent: ol.Extent): ol.Coordinate;

        /**
         * Get the height of an extent.
         * @param extent Extent
         * @returns Height
         */
        function getHeight(extent: ol.Extent): number;

        /**
         * Get the intersection of two extents.
         * @param extent1 Extent 1
         * @param extent2 Extent 2
         * @param extent Optional extent to populate with intersection.
         * @returns Intersecting extent
         */
        function getIntersection(extent1: ol.Extent, extent2: ol.Extent, extent?: ol.Extent): ol.Extent;

        /**
         * Get the size (width, height) of an extent.
         * @param extent Extent
         * @returns The extent size
         */
        function getSize(extent: ol.Extent): ol.Size;

        /**
         * Get the top left coordinate of an extent.
         * @param extent Extent
         * @returns Top left coordinate
         */
        function getTopLeft(extent: ol.Extent): ol.Coordinate;

        /**
         * Get the top right coordinate of an extent.
         * @param extent Extent
         * @returns Top right coordinate
         */
        function getTopRight(extent: ol.Extent): ol.Coordinate;

        /**
         * Get the width of an extent.
         * @param extent Extent
         * @returns Width
         */
        function getWidth(extent: ol.Extent): number;

        /**
         * Determine if one extent intersects another.
         * @param extent1 Extent 1
         * @param extent2 Extent 2
         * @returns The two extents intersects
         */
        function intersects(extent1: ol.Extent, extent2: ol.Extent): boolean;

        /**
         * Determine if an extent is empty.
         * @param extent Extent
         * @returns Is empty
         */
        function isEmpty(extent: ol.Extent): boolean;
    }

    /**
     * Loading mechanisms for vector data.
     */
    module featureloader {

        /**
         * Create an XHR feature loader for a url and format. The feature loader loads features (with XHR), parses the features, and adds them to the vector source.
         * @param url Feature URL Service
         * @param format Feature format
         * @returns The feature loader
         */
        function xhr(url: string, format: ol.format.Feature): ol.FeatureLoader;
    }

    module format {

        // Type definitions
        interface IGCZ extends String { }

        // Classes
        class EsriJSON {
        }

        class Feature {
        }

        /**
         * Feature format for reading and writing data in the GeoJSON format.
         */
        class GeoJSON extends ol.format.JSONFeature {

            /**
             * @constructor
             * @param Options
             */
            constructor(options?: olx.format.GeoJSONOptions);

            /**
             * Read a feature from a GeoJSON Feature source. Only works for Feature, use readFeatures to read FeatureCollection source.
             * @param source Source
             * @param options Read options
             * @returns Feature
             */
            readFeature(source: Document | Node | JSON | string, options?: olx.format.ReadOptions): ol.Feature;

            /**
             * Read all features from a GeoJSON source. Works with both Feature and FeatureCollection sources.
             * @param source Source
             * @param options Read options
             * @returns Features
             */
            readFeatures(source: Document | Node | JSON | string, options?: olx.format.ReadOptions): Array<ol.Feature>;

            /**
             * Read a geometry from a GeoJSON source.
             * @param source Source
             * @param options Read options
             * @returns Geometry
             */
            readGeometry(source: Document | Node | JSON | string, options?: olx.format.ReadOptions): ol.geom.Geometry;

            /**
             * Read the projection from a GeoJSON source.
             * @param Source
             * @returns Projection
             */
            readProjection(source: Document | Node | JSON | string): ol.proj.Projection;

            /**
             * Encode a feature as a GeoJSON Feature string.
             * @param feature Feature
             * @param options Write options
             * @returns GeoJSON
             */
            writeFeature(feature: ol.Feature, options?: olx.format.WriteOptions): string;

            /**
             * Encode a feature as a GeoJSON Feature object.
             * @param feature Feature
             * @param options Write options
             * @returns GeoJSON object
             */
            writeFeatureObject(feature: ol.Feature, options?: olx.format.WriteOptions): JSON;

            /**
             * Encode an array of features as GeoJSON.
             * @param features Features
             * @param options Write options
             * @returns GeoJSON
             */
            writeFeatures(features: Array<ol.Feature>, options?: olx.format.WriteOptions): string;

            /**
             * Encode an array of features as a GeoJSON object.
             * @param features Features
             * @param options Write options
             * @returns GeoJSON object
             */
            writeFeaturesObject(features: Array<ol.Feature>, options?: olx.format.WriteOptions): JSON;

            /**
             * Encode a geometry as a GeoJSON string.
             * @param geometry Geometry
             * @param options Write options
             * @returns GeoJSON
             */
            writeGeometry(geometry: ol.geom.Geometry, options?: olx.format.WriteOptions): string;

            /**
             * Encode a geometry as a GeoJSON object.
             * @param geometry Geometry
             * @options Write options
             * @returns GeoJSON object
             */
            writeGeometryObject(geometry: ol.geom.Geometry, options?: olx.format.WriteOptions): JSON;
        }

        class GML {
        }

        class GML2 {
        }

        class GML3 {
        }

        class GMLBase {
        }

        class GPX {
        }

        class IGC {
        }

        class JSONFeature {
        }

        class KML {
        }

        class OSMXML {
        }

        class Polyline {
        }

        class TextFeature {
        }

        class TopoJSON {
        }

        class WFS {
        }

        class WKT {
        }

        class WMSCapabilities {
        }

        class WMSGetFeatureInfo {
        }

        class WMTSCapabilities {
        }

        class XML {
        }

        class XMLFeature {
        }
    }

    module geom {
        
        // Type definitions
        interface GeometryLayout extends String { }
        interface GeometryType extends String { }
        
        /**
         * Abstract base class; only used for creating subclasses; do not instantiate
         * in apps, as cannot be rendered.
         */
        class Circle extends ol.geom.SimpleGeometry {

            /**
            * Test if the geometry and the passed extent intersect.
            * @param extent Extent
            * @returns true if the geometry and the extent intersect. 
            */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Transform each coordinate of the circle from one coordinate reference system
             * to another. The geometry is modified in place.
             * If you do not want the geometry modified in place, first clone() it and
             * then use this function on the clone.
             *
             * Internally a circle is currently represented by two points: the center of
             * the circle `[cx, cy]`, and the point to the right of the circle
             * `[cx + r, cy]`. This `transform` function just transforms these two points.
             * So the resulting geometry is also a circle, and that circle does not
             * correspond to the shape that would be obtained by transforming every point
             * of the original circle.
             * @param source The current projection.  Can be a string identifier or a {@link ol.proj.Projection} object.
             * @param destination The desired projection.  Can be a string identifier or a {@link ol.proj.Projection} object.
             * @returns This geometry.  Note that original geometry is  modified in place.
             */
            transform(source: ol.proj.ProjectionLike, destination: ol.proj.ProjectionLike): ol.geom.Circle;
        }

        /**
         * Abstract base class; normally only used for creating subclasses and not instantiated in apps. Base class for vector geometries.
         */
        class Geometry extends ol.Object {

            /**
             * Return the closest point of the geometry to the passed point as coordinate.
             * @param point Point
             * @param closestPoint Closest Point
             * @returns Closest Point
             */
            getClosestPoint(point: ol.Coordinate, closestPoint?: ol.Coordinate): ol.Coordinate;

            /**
             * Get the extent of the geometry.
             * @param Extent
             * @returns Extent
             */
            getExtent(extent?: ol.Extent): ol.Extent;
        }

        /**
        * An array of ol.geom.Geometry objects.
        */
        class GeometryCollection extends ol.geom.Geometry {

            /**
             * constructor
             * @param geometries Geometries.
             */
            constructor(geometries?: Array<ol.geom.Geometry>);

            /**
             * Apply a transform function to each coordinate of the geometry. The geometry is modified in place.
             * If you do not want the geometry modified in place, first clone() it and then use this function on the clone.
             * @param transformFn TransformFunction
             */
            applyTransform(transformFn: ol.TransformFunction): void;

            /**
             * Make a complete copy of the geometry.
             * @returns Clone.
             */
            clone(): ol.geom.GeometryCollection;

            /**
             * Return the geometries that make up this geometry collection.
             * @returns Geometries.
             */
            getGeometries(): Array<Geometry>;

            /**
             * Get the type of this geometry.
             * @returns Geometry type
             */
            getType(): ol.geom.GeometryType;

            /**
             * Test if the geometry and the passed extent intersect.
             * @param extent Extent
             * @returns true if the geometry and the extent intersect. 
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the geometries that make up this geometry collection.
             * @param geometries Geometries.
             */
            setGeometries(geometries: Array<ol.geom.Geometry>): void;

        }

        /**
        * Linear ring geometry. Only used as part of polygon; cannot be rendered
        * on its own.
        */
        class LinearRing extends SimpleGeometry {

            /**
             * constructor
             * @param coordinates Coordinates.
             * @param layout Layout.
             */
            constructor(coordinates: Array<ol.Coordinate>, layout?: ol.geom.GeometryLayout);

            /**
             * Make a complete copy of the geometry.
             * @returns Clone.
             */
            clone(): ol.geom.LinearRing;

            /**
             * Return the area of the linear ring on projected plane.
             * @returns Area (on projected plane).
             */
            getArea(): number;
            
            /**
             * Return the coordinates of the linear ring.
             * @returns Coordinates.
             */
            getCoordinates(): Array<ol.Coordinate>;

            /**
             * Get the type of this geometry.
             * @returns Geometry type
             */
            getType(): ol.geom.GeometryType;

            /**
            * @Set the coordinates of the linear ring
            * @param coordinates Coordinates.
            * @param layout Layout.
            */
            setCoordinates(coordinates: Array<ol.Coordinate>, layout?: any): void;

        }

        /**
        * Linestring geometry.
        */
        class LineString extends ol.geom.SimpleGeometry {

            /**
             * constructor
             * @param coordinates Coordinates.
             * @param layout Layout.
             */
            constructor(coordinates: Array<ol.Coordinate>, layout?: ol.geom.GeometryLayout);

            /**
             * Append the passed coordinate to the coordinates of the linestring.
             * @param coordinate Coordinate.
             */
            appendCoordinate(coordinate: ol.Coordinate): void;

            /**
             * Make a complete copy of the geometry.
             * @returns Clone.
             */
            clone(): ol.geom.LineString;

            /**
             * Returns the coordinate at `m` using linear interpolation, or `null` if no
             * such coordinate exists.
             *
             * `extrapolate` controls extrapolation beyond the range of Ms in the
             * MultiLineString. If `extrapolate` is `true` then Ms less than the first
             * M will return the first coordinate and Ms greater than the last M will
             * return the last coordinate.
             *
             * @param m M.
             * @param extrapolate Extrapolate. Default is `false`.
             * @returns Coordinate.
             */
            getCoordinateAtM(m: number, extrapolate?: boolean): ol.Coordinate;

            /**
             * Return the coordinates of the linestring.
             * @returns Coordinates.
             */
            getCoordinates(): Array<ol.Coordinate>;

            /**
             * Return the length of the linestring on projected plane.
             * @returns Length (on projected plane).
             */
            getLength(): number;

            /**
             * Get the type of this geometry.
             * @returns Geometry type
             */
            getType(): ol.geom.GeometryType;

            /**
             * Test if the geometry and the passed extent intersect.
             * @param extent Extent
             * @returns true if the geometry and the extent intersect. 
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the coordinates of the linestring.
             * @param coordinates Coordinates.
             * @param layout Layout.
             */
            setCoordinates(coordinates: Array<ol.Coordinate>, layout?: ol.geom.GeometryLayout) : void;
        }

        /**
        * Multi-linestring geometry.
        */
        class MultiLineString extends ol.geom.SimpleGeometry {

            /**
             * constructor
             * @param coordinates Coordinates.
             * @param layout Layout.
             */
            constructor(coordinates: Array<Array<ol.Coordinate>>, layout?: ol.geom.GeometryLayout);

            /**
             * Append the passed linestring to the multilinestring.
             * @param lineString LineString.
             */
            appendLineString(lineString: ol.geom.LineString): void;

            /**
             * Make a complete copy of the geometry.
             * @returns Clone.
             */
            clone(): ol.geom.MultiLineString;

            /**
             * Returns the coordinate at `m` using linear interpolation, or `null` if no
             * such coordinate exists.
             *
             * `extrapolate` controls extrapolation beyond the range of Ms in the
             * MultiLineString. If `extrapolate` is `true` then Ms less than the first
             * M will return the first coordinate and Ms greater than the last M will
             * return the last coordinate.
             *
             * `interpolate` controls interpolation between consecutive LineStrings
             * within the MultiLineString. If `interpolate` is `true` the coordinates
             * will be linearly interpolated between the last coordinate of one LineString
             * and the first coordinate of the next LineString.  If `interpolate` is
             * `false` then the function will return `null` for Ms falling between
             * LineStrings.
             *
             * @param m M.
             * @param extrapolate Extrapolate. Default is `false`.
             * @param interpolate Interpolate. Default is `false`.
             * @returns Coordinate.
             */
            getCoordinateAtM(m: number, extrapolate?: boolean, interpolate?: boolean): ol.Coordinate;

            /**
             * Return the coordinates of the multilinestring.
             * @returns Coordinates.
             */
            getCoordinates(): Array<Array<ol.Coordinate>>;

            /**
             * Return the linestring at the specified index.
             * @param index Index.
             * @returns LineString.
             */
            getLineString(index: number): ol.geom.LineString;

            /**
             * Return the linestrings of this multilinestring.
             * @returns LineStrings.
             */
            getLineStrings(): Array<ol.geom.LineString>;

            /**
             * Get the type of this geometry.
             * @returns Geometry type
             */
            getType(): ol.geom.GeometryType;

            /**
             * Test if the geometry and the passed extent intersect.
             * @param extent Extent
             * @returns true if the geometry and the extent intersect. 
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the coordinates of the multilinestring.
             * @param coordinates Coordinates.
             * @param layout Layout.
             */
            setCoordinates(coordinates: Array<Array<ol.Coordinate>>, layout?: ol.geom.GeometryLayout): void;
        }

        /**
        * Multi-point geometry.
        */
        class MultiPoint extends ol.geom.SimpleGeometry {

            /**
             * constructor
             * @param coordinates Coordinates.
             * @param layout Layout.
             */
            constructor(coordinates: Array<ol.Coordinate>, layout?: ol.geom.GeometryLayout);

            /**
             * Append the passed point to this multipoint.
             * @param {ol.geom.Point} point Point.
             */
            appendPoint(point: ol.geom.Point): void;

            /**
             * Make a complete copy of the geometry.
             * @returns Clone.
             */
            clone(): ol.geom.MultiPoint;

            /**
             * Return the coordinates of the multipoint.
             * @returns Coordinates.
             */
            getCoordinates(): Array<ol.Coordinate>;

            /**
             * Return the point at the specified index.
             * @param index Index.
             * @returns Point.
             */
            getPoint(index: number): ol.geom.Point;

            /**
             * Return the points of this multipoint.
             * @returns Points.
             */
            getPoints(): Array<ol.geom.Point>;

            /**
             * Get the type of this geometry.
             * @returns Geometry type
             */
            getType(): ol.geom.GeometryType;

            /**
             * Test if the geometry and the passed extent intersect.
             * @param extent Extent
             * @returns true if the geometry and the extent intersect. 
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the coordinates of the multipoint.
             * @param coordinates Coordinates.
             * @param layout Layout.
             */
            setCoordinates(coordinates: Array<ol.Coordinate>, layout?: ol.geom.GeometryLayout): void;
        }
        
        /**
         * Multi-polygon geometry.
         */
        class MultiPolygon extends ol.geom.SimpleGeometry {
            
            /**
             * constructor
             * @param coordinates Coordinates.
             * @param layout Layout.
             */
            constructor(coordinates: Array<Array<Array<ol.Coordinate>>>, layout?: ol.geom.GeometryLayout);
            
            /**
             * Append the passed polygon to this multipolygon.
             * @param polygon Polygon.
             */
            appendPolygon(polygon: ol.geom.Polygon): void;
            
            /**
             * Make a complete copy of the geometry.
             * @returns Clone.
             */
            clone(): ol.geom.MultiPolygon;
            
            /**
             * Return the area of the multipolygon on projected plane.
             * @returns Area (on projected plane).
             */
            getArea(): number;
            
            /**
             * Get the coordinate array for this geometry.  This array has the structure
             * of a GeoJSON coordinate array for multi-polygons.
             *
             * @param right Orient coordinates according to the right-hand
             *     rule (counter-clockwise for exterior and clockwise for interior rings).
             *     If `false`, coordinates will be oriented according to the left-hand rule
             *     (clockwise for exterior and counter-clockwise for interior rings).
             *     By default, coordinate orientation will depend on how the geometry was
             *     constructed.
             * @returns Coordinates.
             */
            getCoordinates(right?: boolean): Array<Array<Array<ol.Coordinate>>>;
            
            /**
             * Return the interior points as {@link ol.geom.MultiPoint multipoint}.
             * @returns Interior points.
             */
            getInteriorPoints(): ol.geom.MultiPoint;
            
            /**
             * Return the polygon at the specified index.
             * @param index Index.
             * @returns  Polygon.
             */
            getPolygon(index: number): ol.geom.Polygon;
            
            /**
             * Return the polygons of this multipolygon.
             * @returns Polygons.
             */
            getPolygons(): Array<ol.geom.Polygon>;
            
            /**
             * Get the type of this geometry.
             * @returns Geometry type
             */
            getType(): ol.geom.GeometryType;
            
            /**
             * Test if the geometry and the passed extent intersect.
             * @param extent Extent
             * @returns true if the geometry and the extent intersect. 
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the coordinates of the multipolygon.
             * @param coordinates Coordinates.
             * @param layout Layout.
             */
            setCoordinates(coordinates: Array<Array<Array<ol.Coordinate>>>, layout?: ol.geom.GeometryLayout): void;
        }

        /**
        * Point geometry.
        */
        class Point extends SimpleGeometry {

            /**
             * constructor
             * @param coordinates Coordinates.
             * @param layout Layout.
             */
            constructor(coordinates: ol.Coordinate, layout?: ol.geom.GeometryLayout);

            /**
             * Make a complete copy of the geometry.
             * @returns Clone.
             */
            clone(): ol.geom.Point;

            /**
             * Return the coordinate of the point.
             * @returns Coordinates.
             */
            getCoordinates(): ol.Coordinate;

            /**
             * Get the type of this geometry.
             * @returns Geometry type
             */
            getType(): ol.geom.GeometryType;

            /**
             * Test if the geometry and the passed extent intersect.
             * @param extent Extent
             * @returns true if the geometry and the extent intersect. 
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the coordinate of the point.
             * @param coordinates Coordinates.
             * @param layout Layout.
             */
            setCoordinates(coordinates: ol.Coordinate, layout?: ol.geom.GeometryLayout): void;
        }

        /**
        * Polygon geometry.
        */
        class Polygon extends SimpleGeometry {

            /**
             * constructor
             * @param coordinates Coordinates.
             * @param layout Layout.
             */
            constructor(coordinates: Array<Array<ol.Coordinate>>, layout?: ol.geom.GeometryLayout);

            /**
             * Create an approximation of a circle on the surface of a sphere.
             * @param sphere The sphere.
             * @param center Center (`[lon, lat]` in degrees).
             * @param radius The great-circle distance from the center to the polygon vertices.
             * @param n Optional number of vertices for the resulting polygon. Default is `32`.
             * @returns The "circular" polygon.
             */
            static circular(sphere: ol.Sphere, center: ol.Coordinate, radius: number, n?: number): ol.geom.Polygon;

            /**
             * Append the passed linear ring to this polygon.
             * @param linearRing Linear ring.
             */
            appendLinearRing(linearRing: ol.geom.LinearRing): void;

            /**
             * Make a complete copy of the geometry.
             * @returns Clone.
             */
            clone(): ol.geom.Polygon;

            /**
             * Return the area of the polygon on projected plane.
             * @returns Area (on projected plane).
             */
            getArea(): number;

            /**
             * Get the coordinate array for this geometry.  This array has the structure
             * of a GeoJSON coordinate array for polygons.
             *
             * @param right Orient coordinates according to the right-hand
             *     rule (counter-clockwise for exterior and clockwise for interior rings).
             *     If `false`, coordinates will be oriented according to the left-hand rule
             *     (clockwise for exterior and counter-clockwise for interior rings).
             *     By default, coordinate orientation will depend on how the geometry was
             *     constructed.
             * @returns Coordinates.
             */
            getCoordinates(right?: boolean): Array<Array<ol.Coordinate>>;

            /**
             * Return an interior point of the polygon.
             * @returns Interior point.
             */
            getInteriorPoint(): ol.geom.Point;

            /**
             * Return the Nth linear ring of the polygon geometry. Return `null` if the
             * given index is out of range.
             * The exterior linear ring is available at index `0` and the interior rings
             * at index `1` and beyond.
             *
             * @param index Index.
             * @returns Linear ring.
             */
            getLinearRing(index: number): ol.geom.LinearRing;

            /**
             * Return the linear rings of the polygon.
             * @returns Linear rings.
             */
            getLinearRings(): Array<ol.geom.LinearRing>;

            /**
             * Get the type of this geometry.
             * @returns Geometry type
             */
            getType(): ol.geom.GeometryType;

            /**
             * Test if the geometry and the passed extent intersect.
             * @param extent Extent
             * @returns true if the geometry and the extent intersect. 
             */
            intersectsExtent(extent: ol.Extent): boolean;

            /**
             * Set the coordinates of the polygon.
             * @param coordinates Coordinates.
             * @param layout Layout.
             */
            setCoordinates(coordinates: Array<Array<ol.Coordinate>>, layout?: ol.geom.GeometryLayout): void;
        }
        /**
         * Abstract base class; only used for creating subclasses; do not instantiate
         * in apps, as cannot be rendered.
         */
        class SimpleGeometry extends ol.geom.Geometry {

            /**
             * Apply a transform function to each coordinate of the geometry. The geometry is modified in place.
             * If you do not want the geometry modified in place, first clone() it and then use this function on the clone.
             * @param transformFn TransformFunction
             */
            applyTransform(transformFn: ol.TransformFunction): void;

            /**
             * Return the first coordinate of the geometry.
             * @returns First coordinate.
             */
            getFirstCoordinate(): ol.Coordinate;

            /**
             * Return the last coordinate of the geometry.
             * @returns Last point.
             */
            getLastCoordinate(): ol.Coordinate;

            /**
             * Return the {@link ol.geom.GeometryLayout layout} of the geometry.
             * @returns Layout.
             */
            getLayout(): ol.geom.GeometryLayout;

            /** 
            * Translate the geometry. This modifies the geometry coordinates in place. 
            * If instead you want a new geometry, first clone() this geometry.
            * @param deltaX Delta X
            * @param deltaY Delta Y
            */
            translate(deltaX: number, deltaY: number): void;
        }
    }

    module has {
    }

    module interaction {

        class DoubleClickZoom {
        }

        class DragAndDrop {
        }

        class DragAndDropEvent {
        }

        class DragBox {
        }

        class DragPan {
        }

        class DragRotate {
        }

        class DragRotateAndZoom {
        }

        class DragZoom {
        }

        class Draw {
        }

        class DrawEvent {
        }

        class Interaction {
        }

        class KeyboardPan {
        }

        class KeyboardZoom {
        }

        class Modify {
        }

        class MouseWheelZoom {
        }

        class PinchRotate {
        }

        class PinchZoom {
        }

        class Pointer {
        }

        class Select {
        }

        class Snap {
        }

        function defaults(opts: olx.interaction.DefaultsOptions): ol.Collection<ol.interaction.Interaction>;
    }

    module layer {

        /**
         * Abstract base class; normally only used for creating subclasses and not instantiated in apps. Note that with ol.layer.Base and all its subclasses, any property set in the options is set as a ol.Object property on the layer object, so is observable, and has get/set accessors.
         */
        class Base extends ol.Object {

            /**
             * @constructor
             * @param options Layer options.
             */
            constructor(options?: olx.layer.BaseOptions);

            /**
             * Return the brightness of the layer.
             * @returns The brightness of the layer.
             */
            getBrightness(): number;

            /**
             * Return the contrast of the layer.
             * @returns The contrast of the layer.
             */
            getContrast(): number;

            /**
             * Return the extent of the layer or undefined if it will be visible regardless of extent.
             * @returns The layer extent.
             */
            getExtent(): ol.Extent;

            /**
             * Return the hue of the layer.
             * @returns The hue of the layer
             */
            getHue(): number;

            /**
             * Return the maximum resolution of the layer.
             * @returns The maximum resolution of the layer
             */
            getMaxResolution(): number;

            /**
             * Return the minimum resolution of the layer.
             * @returns The minimum resolution of the layer.
             */
            getMinResolution(): number;

            /**
             * Return the opacity of the layer (between 0 and 1).
             * @returns The opacity of the layer.
             */
            getOpacity(): number;

            /**
             * Return the saturation of the layer.
             * @returns The saturation of the layer.
             */
            getSaturation(): number;

            /**
             * Return the visibility of the layer (true or false).
             * The visibility of the layer
             */
            getVisible(): boolean;

            /**
             * Adjust the layer brightness. A value of -1 will render the layer completely black. A value of 0 will leave the brightness unchanged. A value of 1 will render the layer completely white. Other values are linear multipliers on the effect (values are clamped between -1 and 1).
             * @param brightness The brightness of the layer
             */
            setBrightness(brigthness: number): void;

            /**
             * Adjust the layer contrast. A value of 0 will render the layer completely grey. A value of 1 will leave the contrast unchanged. Other values are linear multipliers on the effect (and values over 1 are permitted).
             * @param contrast The contrast of the layer
             */
            setContrast(contrast: number): void;

            /**
             * Set the extent at which the layer is visible. If undefined, the layer will be visible at all extents.
             * @param extent The extent of the layer
             */
            setExtent(extent?: ol.Extent): void;

            /**
             * Apply a hue-rotation to the layer. A value of 0 will leave the hue unchanged. Other values are radians around the color circle.
             * @param hue The hue of the layer
             */
            setHue(hue: number): void;

            /**
             * Set the maximum resolution at which the layer is visible.
             * @param maxResolution The maximum resolution of the layer.
             */
            setMaxResolution(maxResolution: number): void;

            /**
             * Set the minimum resolution at which the layer is visible.
             * @param minResolution The minimum resolution of the layer.
             */
            setMinResolution(minResolution: number): void;

            /**
             * Set the opacity of the layer, allowed values range from 0 to 1.
             * @param opactity The opacity of the layer.
             */
            setOpacity(opacity: number): void;

            /**
             * Adjust layer saturation. A value of 0 will render the layer completely unsaturated. A value of 1 will leave the saturation unchanged. Other values are linear multipliers of the effect (and values over 1 are permitted).
             * @param saturation The saturation of the layer.
             */
            setSaturation(saturation: number): void;

            /**
             * Set the visibility of the layer (true or false).
             * @param visible The visibility of the layer.
             */
            setVisible(visible: boolean): void;
        }

        /**
         * A ol.Collection of layers that are handled together.
         */
        class Group extends ol.layer.Base {

            /**
             * @constructor
             * @param options Layer options.
             */
            constructor(options?: olx.layer.GroupOptions);

            /**
             * Returns the collection of layers in this group.
             * @returns Collection of layers that are part of this group.
             */
            getLayers(): ol.Collection<ol.layer.Base>;

            /**
             * Set the collection of layers in this group.
             * @param layers Collection of layers that are part of this group.
             */
            setLayers(layers: ol.Collection<ol.layer.Base>): void;
        }

        /**
         * Layer for rendering vector data as a heatmap. Note that any property set in the options is set as a ol.Object property on the layer object; for example, setting title: 'My Title' in the options means that title is observable, and has get/set accessors.
         */
        class Heatmap extends ol.layer.Vector {

            /**
             * @constructor
             * @param options Options
             */
            constructor(options?: olx.layer.HeatmapOptions);

            /**
             * Return the blur size in pixels.
             * @returns Blur size in pixels
             */
            getBlur(): number;

            /**
             * Return the gradient colors as array of strings.
             * @returns Colors
             */
            getGradient(): Array<string>;

            /**
             * Return the size of the radius in pixels.
             * @returns Radius size in pixel
             */
            getRadius(): number;

            /**
             * Set the blur size in pixels.
             * @param blur Blur size in pixels
             */
            setBlur(blur: number): void;

            /**
             * Set the gradient colors as array of strings.
             * @param colors Gradient
             */
            setGradient(colors: Array<string>): void;

            /**
             * Set the size of the radius in pixels.
             * @param radius Radius size in pixels
             */
            setRadius(radius: number): void;
        }

        /**
         * Server-rendered images that are available for arbitrary extents and resolutions. Note that any property set in the options is set as a ol.Object property on the layer object; for example, setting title: 'My Title' in the options means that title is observable, and has get/set accessors.
         */
        class Image extends ol.layer.Layer {

            /**
             * @constructor
             * @param options Layer options
             */
            constructor(options?: olx.layer.ImageOptions);

            /**
             * Return the associated source of the image layer.
             * @returns Source.
             */
            getSource(): ol.source.Image;
        }

        /**
         * Abstract base class; normally only used for creating subclasses and not instantiated in apps. A visual representation of raster or vector map data. Layers group together those properties that pertain to how the data is to be displayed, irrespective of the source of that data.
         */
        class Layer extends ol.layer.Base {

            /**
             * @constructor
             * @param options Layer options
             */
            constructor(options?: olx.layer.LayerOptions);

            /**
             * Get the layer source.
             * @returns The layer source (or null if not yet set)
             */
            getSource(): ol.source.Source;

            /**
             * Set the layer source.
             * @param source The layer source.
             */
            setSource(source: ol.source.Source): void;
        }

        /**
         * For layer sources that provide pre-rendered, tiled images in grids that are organized by zoom levels for specific resolutions. Note that any property set in the options is set as a ol.Object property on the layer object; for example, setting title: 'My Title' in the options means that title is observable, and has get/set accessors.
         */
        class Tile extends ol.layer.Layer {

            /**
             * @constructor
             * @param options Tile layer options.
             */
            constructor(options?: olx.layer.TileOptions);

            /**
             * Return the level as number to which we will preload tiles up to.
             * @retruns The level to preload tiled up to.
             */
            getPreload(): number;

            /**
             * Return the associated tilesource of the layer.
             * @returns Source
             */
            getSource(): ol.source.Tile;

            /**
             * Whether we use interim tiles on error.
             * @returns Use interim tiles on error.
             */
            getUseInterimTilesOnError(): boolean;

            /**
             * Set the level as number to which we will preload tiles up to.
             * @param preload The level to preload tiled up to
             */
            setPreload(preload: number): void;

            /**
             * Set whether we use interim tiles on error.
             * @param useInterimTilesOnError Use interim tiles on error.
             */
            setUseInterimTilesOnError(useInterimTilesOnError: boolean): void;
        }

        /**
         * Vector data that is rendered client-side. Note that any property set in the options is set as a ol.Object property on the layer object; for example, setting title: 'My Title' in the options means that title is observable, and has get/set accessors.
         */
        class Vector extends ol.layer.Layer {

            /**
             * @constructor
             * @param options Options
             */
            constructor(options?: olx.layer.VectorOptions);

            /**
             * Return the associated vectorsource of the layer.
             * @returns Source.
             */
            getSource(): ol.source.Vector;

            /**
             * Get the style for features. This returns whatever was passed to the style option at construction or to the setStyle method.
             */
            getStyle(): ol.style.Style | Array<ol.style.Style> | ol.style.StyleFunction;

            /**
             * Get the style function.
             * @returns Layer style function
             */
            getStyleFunction(): ol.style.StyleFunction;

            /**
             * Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles. If it is undefined the default style is used. If it is null the layer has no style (a null style), so only features that have their own styles will be rendered in the layer. See ol.style for information on the default style.
             */
            setStyle(): void;

            /**
             * Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles. If it is undefined the default style is used. If it is null the layer has no style (a null style), so only features that have their own styles will be rendered in the layer. See ol.style for information on the default style.
             * @param layer Layer style
             */
            setStyle(style: ol.style.Style): void;

            /**
             * Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles. If it is undefined the default style is used. If it is null the layer has no style (a null style), so only features that have their own styles will be rendered in the layer. See ol.style for information on the default style.
             * @param layer Layer style
             */
            setStyle(style: Array<ol.style.Style>): void;

            /**
             * Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles. If it is undefined the default style is used. If it is null the layer has no style (a null style), so only features that have their own styles will be rendered in the layer. See ol.style for information on the default style.
             * @param Layer style
             */
            setStyle(style: ol.style.StyleFunction): void;
        }
    }

    module loadingstrategy {

        /**
         * Strategy function for loading all features with a single request.
         * @param extent Extent
         * @param resolution Resolution
         * @returns Extents
         */
        function all(extent: ol.Extent, resolution: number): Array<ol.Extent>;

        /**
         * Strategy function for loading features based on the view's extent and resolution.
         * @param extent Extent
         * @param resolution Resolution
         * @returns Extents
         */
        function bbox(extent: ol.Extent, resolution: number): Array<ol.Extent>;

        /**
         * Creates a strategy function for loading features based on a tile grid.
         * @param tilegrid Tile grid
         * @returns Loading strategy
         */
        function tile(tileGrid: ol.tilegrid.TileGrid): ol.LoadingStrategy;
    }

    module proj {

        // Type definitions
        interface ProjectionLike extends String { }
        interface Units extends String { }

        // Methods

        /**
         * Meters per unit lookup table.
         */
        //TODO: validate!
        var METERS_PER_UNIT: Object;

        /**
         * Registers coordinate transform functions to convert coordinates between the source projection and the destination projection. The forward and inverse functions convert coordinate pairs; this function converts these into the functions used internally which also handle extents and coordinate arrays.
         * @param source Source projection
         * @param destination Destination projection
         * @param forward The forward transform function (that is, from the source projection to the destination projection) that takes a ol.Coordinate as argument and returns the transformed ol.Coordinate.
         * @param inverse The inverse transform function (that is, from the destination projection to the source projection) that takes a ol.Coordinate as argument and returns the transformed ol.Coordinate.
         */
        function addCoordinateTransforms(source: ProjectionLike, destination: ProjectionLike, forward: (coordinate: Coordinate) => Coordinate, inverse: (coordinate: Coordinate) => Coordinate): void;

        /**
         * Registers transformation functions that don't alter coordinates. Those allow to transform between projections with equal meaning.
         * @param projections Projections.
         */
        function addEquivalentProjections(projections: Array<Projection>): void;

        /**
         * Add a Projection object to the list of supported projections that can be looked up by their code.
         * @param projection Projection instance.
         */
        function addProjection(projection: Projection): void;

        /**
         * Transforms a coordinate from longitude/latitude to a different projection.
         * @param coordinate Coordinate as longitude and latitude, i.e. an array with longitude as 1st and latitude as 2nd element.
         * @param projection Target projection. The default is Web Mercator, i.e. 'EPSG:3857'.
         */
        function fromLonLat(coordinate: Coordinate, opt_projection: ProjectionLike): Coordinate;

        /**
         * Fetches a Projection object for the code specified.
         * @param projectionLike Either a code string which is a combination of authority and identifier such as "EPSG:4326", or an existing projection object, or undefined.
         * @returns Projection object, or null if not in list.
         */
        function get(projectionLike: ProjectionLike): Projection;

        /**
         * Given the projection-like objects, searches for a transformation function to convert a coordinates array from the source projection to the destination projection.
         * @param source Source.
         * @param destination Destination.
         * @returns Transform function.
         */
        function getTransform(source: ProjectionLike, destination: ProjectionLike): ol.TransformFunction;

        /**
         * Transforms a coordinate to longitude/latitude.
         * @param coordinate Projected coordinate.
         * @param projection Projection of the coordinate. The default is Web Mercator, i.e. 'EPSG:3857'.
         * @returns Coordinate as longitude and latitude, i.e. an array with longitude as 1st and latitude as 2nd element.
         */
        function toLonLat(coordinate: Coordinate, projection: ProjectionLike): Coordinate;

        /**
         * Transforms a coordinate from source projection to destination projection. This returns a new coordinate (and does not modify the original).
         * @param coordinate Coordinate.
         * @param source Source projection-like.
         * @param destination Destination projection-like.
         * @returns Coordinate.
         */
        function transform(coordinate: Coordinate, source: ProjectionLike, destination: ProjectionLike): Coordinate;

        /**
         * Transforms an extent from source projection to destination projection. This returns a new extent (and does not modify the original).
         * @param extent The extent to transform.
         * @param source Source projection-like.
         * @param destination Destination projection-like.
         * @returns The transformed extent.
         */
        function transformExtent(extent: Extent, source: ProjectionLike, destination: ProjectionLike): Extent;

        class Projection {
            constructor(options: olx.Projection)
        }
    }

    module render {

        class Event {
        }

        class VectorContext {
        }

        module canvas {
            class Immediate {
            }
        }
    }

    module source {

        class BingMaps {
        }

        class Cluster {
        }

        class Image {
        }

        class ImageCanvas {
        }

        class ImageEvent {
        }

        class ImageMapGuide {
        }

        class ImageStatic {
        }

        class ImageVector {
        }

        class ImageWMS {
            constructor(options: olx.ImageWMSOptions);
        }

        class MapQuest {
            constructor(options: any);
        }

        class OSM {
        }

        class Source {
        }

        class Stamen {
        }

        class Tile {
        }

        class TileArcGISRest {
        }

        class TileDebug {
        }

        class TileEvent {
        }

        class TileImage {
        }

        class TileJSON {
        }

        class TileUTFGrid {
        }

        class TileVector {
        }

        class TileWMS {
            constructor(options: olx.TileWMSOptions);
        }

        class Vector {
          constructor(opts: olx.source.VectorOptions)

          /**
           * Get the extent of the features currently in the source.
           */
          getExtent(): ol.Extent;

          getFeaturesInExtent(extent: ol.Extent): ol.Feature[];
        }

        class VectorEvent {
        }

        class WMTS {
        }

        class XYZ {
        }

        class Zoomify {
        }

        // Namespaces
        module wms {
            interface ServerType extends String { }
        }

        // Type definitions
        interface State extends String { }
        interface WMTSRequestEncoding extends String { }
    }

    module style {

        class AtlasManager {
        }

        class Circle {
        }

        /**
         * Set fill style for vector features.
         */
        class Fill {

          constructor(opt_options?: olx.style.FillOptions);

          getColor(): ol.Color | string;

          /**
           * Set the color.
           */
          setColor(color: ol.Color | string): void;

          getChecksum(): string;
        }

        class Icon {
        }

        class Image {
        }

        interface GeometryFunction {
          (feature: Feature): ol.geom.Geometry
        }

        class RegularShape {
        }

        class Stroke {
            constructor();
        }

        /**
         * Container for vector feature rendering styles. Any changes made to the style
         * or its children through `set*()` methods will not take effect until the
         * feature, layer or FeatureOverlay that uses the style is re-rendered.
         */
        class Style {
          constructor(opts: olx.style.StyleOptions);
        }

        /**
         * Set text style for vector features.
         */
        class Text {
          constructor(opt?: olx.style.TextOptions);

          getFont(): string;
          getOffsetX(): number;
          getOffsetY(): number;
          getFill(): Fill;
          getRotation(): number;
          getScale(): number;
          getStroke(): Stroke;
          getText(): string;
          getTextAlign(): string;
          getTextBaseline(): string;

          /**
           * Set the font.
           */
          setFont(font: string): void;

          /**
           * Set the x offset.
           */
          setOffsetX(offsetX: number): void;

           /**
            * Set the y offset.
            */
          setOffsetY(offsetY: number): void;

          /**
           * Set the fill.
           */
          setFill(fill: Fill): void;

          /**
           * Set the rotation.
           */
          setRotation(rotation: number): void;

          /**
           * Set the scale.
           */
          setScale(scale: number): void;

          /**
           * Set the stroke.
           *
           */
          setStroke(stroke: Stroke): void;

           /**
            * Set the text.
            */
          setText(text: string): void;

           /**
            * Set the text alignment.
            */
          setTextAlign(textAlign: string): void;

           /**
            * Set the text baseline.
            */
          setTextBaseline(textBaseline: string): void;
        }

        /**
         * A function that takes an ol.Feature and a {number} representing the view's resolution. The function should return an array of ol.style.Style. This way e.g. a vector layer can be styled.
         */
        interface StyleFunction { (feature: ol.Feature, resolution: number): ol.style.Style }
    }

    module tilegrid {

        /**
         * Base class for setting the grid pattern for sources accessing tiled-image servers.
         */
        class TileGrid {

            /**
             * @constructor
             * @param options Tile grid options
             */
            constructor(options: olx.tilegrid.TileGridOptions);

            /**
             * Creates a TileCoord transform function for use with this tile grid. Transforms the internal tile coordinates with bottom-left origin to the tile coordinates used by the ol.TileUrlFunction. The returned function expects an ol.TileCoord as first and an ol.proj.Projection as second argument and returns a transformed ol.TileCoord.
             */
            createTileCoordTransform(): { (tilecoord: ol.TileCoord, projection: ol.proj.Projection): ol.TileCoord };

            /**
             * Get the maximum zoom level for the grid.
             * @returns Max zoom
             */
            getMaxZoom(): number;

            /**
             * Get the minimum zoom level for the grid.
             * @returns Min zoom
             */
            getMinZoom(): number;

            /**
             * Get the origin for the grid at the given zoom level.
             * @param z Z
             * @returns Origin
             */
            getOrigin(z: number): ol.Coordinate;

            /**
             * Get the list of resolutions for the tile grid.
             * @param z Z
             * @returns Resolution
             */
            getResolution(z: number): number;

            /**
             * Get the list of resolutions for the tile grid.
             * @returns Resolutions
             */
            getResolutions(): Array<number>;

            /**
             * Get the tile coordinate for the given map coordinate and resolution. This method considers that coordinates that intersect tile boundaries should be assigned the higher tile coordinate.
             * @param coordinate Coordinate
             * @param resolution Resolution
             * @param tileCoord Destination ol.TileCoord object.
             * @returns Tile coordinate
             */
            getTileCoordForCoordAndResolution(coordinate: ol.Coordinate, resolution: number, tileCoord?: ol.TileCoord): ol.TileCoord;

            /**
             * Get a tile coordinate given a map coordinate and zoom level.
             * @param coordinate Coordinate
             * @param z Zoom level
             * @param tileCoord Destination ol.TileCoord object
             * @returns Tile coordinate
             */
            getTileCoordForCoordAndZ(coordinate: ol.Coordinate, z: number, tileCoord?: ol.TileCoord): ol.TileCoord;

            /**
             * Get the tile size for a zoom level. The type of the return value matches the tileSize or tileSizes that the tile grid was configured with. To always get an ol.Size, run the result through ol.size.toSize().
             * @param z Z
             * @returns Tile size
             */
            getTileSize(z: number): number | ol.Size;
        }

        /**
         * Set the grid pattern for sources accessing WMTS tiled-image servers.
         */
        class WMTS extends TileGrid {

            /**
             * @constructor
             * @param options WMTS options
             */
            constructor(options: olx.tilegrid.WMTSOptions);

            /**
             * Create a tile grid from a WMTS capabilities matrix set.
             * @param matrixSet An object representing a matrixSet in the capabilities document.
             * @param extent An optional extent to restrict the tile ranges the server provides.
             * @returns WMTS tilegrid instance
             */
            createFromCapabilitiesMatrixSet(matrixSet: any, extent: ol.Extent): ol.tilegrid.WMTS;

            /**
             * Get the list of matrix identifiers.
             * @returns MatrixIds
             */
            getMatrixIds(): Array<string>;
        }

        /**
         * Set the grid pattern for sources accessing Zoomify tiled-image servers.
         */
        class Zoomify extends TileGrid {

            /**
             * @constructor
             * @param options Options
             */
            constructor(options?: olx.tilegrid.ZoomifyOptions);
        }

        /**
         * Creates a tile grid with a standard XYZ tiling scheme.
         * @param options Tile grid options.
         * @returns The grid instance
         */
        function createXYZ(options?: olx.tilegrid.XYZOptions): ol.tilegrid.TileGrid;
    }

    module webgl {

        class Context {

            /**
             * @constructor
             * @param canvas HTML Canvas Element
             * @param gl WebGL Rendering context
             */
            constructor(canvas: HTMLCanvasElement, gl: WebGLRenderingContext);

            /**
            Get the WebGL rendering context
             @returns The rendering context.
            */
            getGL(): WebGLRenderingContext;

            /**
             * Get the frame buffer for hit detection.
             * @returns The hit detection frame buffer.
             */
            getHitDetectionFramebuffer(): WebGLFramebuffer;

            /**
             * Use a program. If the program is already in use, this will return false.
             * @param program Program.
             * @returns Changed.
             */
            useProgram(program: WebGLProgram): boolean;
        }
    }

    // Type definitions

    /**
     * A function returning the canvas element ({HTMLCanvasElement}) used by the source as an image. The arguments passed to the function are: ol.Extent the image extent, {number} the image resolution, {number} the device pixel ratio, ol.Size the image size, and ol.proj.Projection the image projection. The canvas returned by this function is cached by the source. The this keyword inside the function references the ol.source.ImageCanvas.
     */
    function CanvasFunctionType(extent: Extent, resolution: number, pixelRatio: number, size: Size, projection: proj.Projection): HTMLCanvasElement;

    /**
     * A color represented as a short array [red, green, blue, alpha]. red, green, and blue should be integers in the range 0..255 inclusive. alpha should be a float in the range 0..1 inclusive.
     */
    interface Color extends Array<number> { }

    /**
     * An array of numbers representing an xy coordinate. Example: [16, 48].
     */
    interface Coordinate extends Array<number> { }

    /**
     * An array of numbers representing an extent: [minx, miny, maxx, maxy].
     */
    interface Extent extends Array<number> { }

    /**
     * Overlay position: 'bottom-left', 'bottom-center', 'bottom-right', 'center-left', 'center-center', 'center-right', 'top-left', 'top-center', 'top-right'
     */
    interface OverlayPositioning extends String { }

    /**
     * An array with two elements, representing a pixel. The first element is the x-coordinate, the second the y-coordinate of the pixel.
     */
    interface Pixel extends Array<number> { }

    /**
     * Available renderers: 'canvas', 'dom' or 'webgl'.
     */
    interface RendererType extends String { }

    /**
     * An array of numbers representing a size: [width, height].
     */
    interface Size extends Array<number> { }

    /**
     * An array of three numbers representing the location of a tile in a tile grid. The order is z, x, and y. z is the zoom level.
     */
    interface TileCoord extends Array<number> { }

    // Functions

    /**
     * A function that takes a ol.Coordinate and transforms it into a {string}.
     */
    interface CoordinateFormatType { (coordinate?: Coordinate): string; }

    /**
     * Implementation based on the code of OpenLayers, no documentation available (yet). If it is incorrect, please create an issue and I will change it.
     */
    interface FeatureLoader { (extent: ol.Extent, number: number, projection: ol.proj.Projection): Array<Feature> }

    /**
     * A function that returns a style given a resolution. The this keyword inside the function references the ol.Feature to be styled.
     */
    interface FeatureStyleFunction { (resolution: number): ol.style.Style }

    /**
     * Loading strategy
     */
    interface LoadingStrategy { (extent: ol.Extent, resolution: number): Array<ol.Extent> }

    /**
     * Function to perform manipulations before rendering. This function is called with the ol.Map as first and an optional olx.FrameState as second argument. Return true to keep this function for the next frame, false to remove it.
     */
    interface PreRenderFunction { (map: ol.Map, frameState?: olx.FrameState): boolean }

    /**
     * A transform function accepts an array of input coordinate values, an optional output array, and an optional dimension (default should be 2). The function transforms the input coordinate values, populates the output array, and returns the output array.
     */
    interface TransformFunction { (input: Array<number>, output?: Array<number>, dimension?: number): Array<number> }
}

declare module "openlayers" {
    export = ol;
}
