// Type definitions for non-npm package HERE Maps API for JavaScript 3.1
// Project: https://developer.here.com/
// Definitions by: Joshua Efiong <https://github.com/Josh-ES>
//                 Bernd Hacker <https://github.com/denyo>
//                 Ferdinand Armbruster <https://github.com/fx88>
//                 Vladimir Dashukevich <https://github.com/life777>
//                 Daniel Schuba <https://github.com/DaSchTour>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace H {
    /***** Map *****/
    /**
     * Map class defines map instance in the application. By creating this object you will initialize a visible map object which is attached to the provided dom element.
     * Map class is an entry point to all operations related to layers, map objects and geo-screen transformations. By specifying options you can initialize map with predefined view.
     */
    class Map extends H.util.EventTarget {
        /**
         * Constructor
         * @param element {Element} - html element into which the map will be rendered
         * @param baseLayer {H.map.layer.Layer} - The layer to be used as the base (bottom most) layer.
         * @param opt_options {H.Map.Options=} - additional map options
         */
        constructor(element: Element, baseLayer: H.map.layer.Layer, opt_options?: H.Map.Options);

        /**
         * This method returns the map root html element
         * @returns {Element}
         */
        getElement(): Element;

        /**
         * This method sets the new center on a map.
         * @param center {H.geo.IPoint} - requested center to be set
         * @param opt_animate {boolean=} - parameter indicates if animated transition should be applied, default is false
         * @returns {H.Map} - the instance itself
         */
        setCenter(center: H.geo.IPoint, opt_animate?: boolean): H.Map;

        /**
         * This method returns currently rendered center of the map.
         * @returns {H.geo.Point}
         */
        getCenter(): H.geo.Point;

        /**
         * This method sets the zoom level on the map. Every zoom level represents different scale i.e map at zoom level 2 is twice as large as the map at zoom level 1.
         * @param zoom {number} - requested zoom level
         * @param opt_animate {boolean=} - parameter indicates if animated transition should be applied, default is false
         * @returns {H.Map} - the instance itself
         */
        setZoom(zoom: number, opt_animate?: boolean): H.Map;

        /**
         * This method returns currently rendered zoom level.
         * @returns {number}
         */
        getZoom(): number;

        /**
         * This method changes the map zoom while keeping target screen coordinates specified as x,y at the same place where they were before.
         * @param zoom {number} - new zoom level
         * @param x {number} - map viewport x-axis pixel coordinate
         * @param y {number} - map viewport y-axis pixel coordinate
         */
        zoomAt(zoom: number, x: number, y: number): void;

        /**
         * This method returns current map viewport.
         * Viewport can be used to modify padding and margin which will reflect the position of the viewport center and the amount of extra data loaded (for margin)
         * @returns {H.map.ViewPort}
         */
        getViewPort(): H.map.ViewPort;

        /**
         * This method returns current view model. View model can be used to modify the current view or camera. H.map.ViewModel
         * @returns {H.map.ViewModel}
         */
        getViewModel(): H.map.ViewModel;

        /**
         * This method returns the map's current layer collection.
         * @returns {H.map.DataModel}
         */
        getLayers(): H.map.DataModel;

        /**
         * This method returns the imprint object for this map.
         * @returns {H.map.Imprint}
         */
        getImprint(): H.map.Imprint;

        /**
         * This method captures desired region of the map and objects on it. Result is returned as an HTML5 Canvas element.
         * Origin of coordinate system for capturing is in the top left corner of the viewport.
         * @param callback {function(HTMLCanvasElement=)} - Callback function to call once result of the capturing is ready
         * @param opt_capturables {Array<H.util.ICapturable>=} - Collection of "capturable" element(s) to draw into the resulting canvas
         * @param opt_x1 {number=} - The X coordinate of the left edge of the capturing rectangle defaults to 0
         * @param opt_y1 {number=} - The Y coordinate of the top edge of the capturing rectangle defaults to 0
         * @param opt_x2 {number=} - The X coordinate of the right edge of the capturing rectangle defaults to viewport width
         * @param opt_y2 {number=} - The Y coordinate of the bottom edge of the capturing rectangle defaults to viewport height
         */
        capture(callback?: (canvas: HTMLCanvasElement) => void, opt_capturables?: H.util.ICapturable[], opt_x1?: number, opt_y1?: number, opt_x2?: number, opt_y2?: number): void;

        /**
         * This method sets the rendering engine type for the map. Rendering engine is responsible for displaying i.e tiles and data on the map.
         * @param type {H.Map.EngineType}
         * @returns {H.Map} - the map itself
         */
        setEngineType(type: H.Map.EngineType): H.Map;

        /**
         * To persistently store the content of a map layer for a given area and range of zoom levels.
         * It can be used to enable map rendering when no internet connection is established and also to reduce the download traffic for frequently visited map areas.
         * @param opt_onprogress {function(H.util.Request)=} - A callback which is invoked every time when the progress state of the returned store request changes.
         * @param opt_bounds {H.geo.Rect=} - The area to store, default is the current view bounds
         * @param opt_min {number=} - The minimum zoom level to store, default is the current zoom level
         * @param opt_max {number=} - The maximum zoom level to store, default is the current zoom level
         * @param opt_layer {H.map.layer.BaseTileLayer=} - The layer to store, default is the current base layer
         * @returns {H.util.Request} - A handle to the created storage request
         */
        storeContent(opt_onprogress?: (req: H.util.Request) => void, opt_bounds?: H.geo.Rect, opt_min?: number, opt_max?: number, opt_layer?: H.map.layer.BaseTileLayer): H.util.Request;

        /**
         * To clear the entire stored content
         * @param opt_onprogress {function(H.util.Request)=} - A callback which is invoked every time when the progress state of the returned clear request changes
         * @returns {H.util.Request} - A handle to the created flush request
         */
        clearContent(opt_onprogress?: (req: H.util.Request) => void): H.util.Request;

        /**
         * This method adds a layer to the map.
         * @param layer {H.map.layer.Layer} - The map layer to be added
         * @param opt_idx {number=} - index at which the new layer should be inserted
         * @returns {H.Map} - current map instance
         */
        addLayer(layer: H.map.layer.Layer, opt_idx?: number): H.Map;

        /**
         * This method removes layer from the map.
         * @param layer {H.map.layer.Layer} - The map layer to be removed
         * @returns {H.Map} - current map instance
         */
        removeLayer(layer: H.map.layer.Layer): H.Map;

        /**
         * This method will set provided layer as base map. The layer will be inserted as the bottom most layer in the map.
         * @param layer {H.map.layer.Layer} - The layer to use as base map
         * @returns {H.Map} - the instance itself
         */
        setBaseLayer(layer: H.map.layer.Layer): H.Map;

        /**
         * To get the current base map layer.
         * @returns {?H.map.layer.Layer}
         */
        getBaseLayer(): H.map.layer.Layer;

        /**
         * Returns the screen coordinates according to the given geographical coordinates. This method returns a screen pixel coordinates for the provided geo point.
         * @param geoPoint {H.geo.IPoint} - point on the map
         * @returns {?H.math.Point}
         */
        geoToScreen(geoPoint: H.geo.IPoint): H.math.Point;

        /**
         * Returns the geographical coordinates according to the given screen coordinates.
         * @param x {number} - map viewport x-axis pixel coordinate
         * @param y {number} - map viewport y-axis pixel coordinate
         * @returns {?H.geo.Point}
         */
        screenToGeo(x: number, y: number): H.geo.Point;

        /**
         * Returns the camera data according to the given screen coordinates. Method converts screen pixel coordinates to correct camera data object
         * @param x {number} - map viewport x-axis pixel coordinate
         * @param y {number} - map viewport y-axis pixel coordinate
         * @returns {H.map.ViewModel.ILookAtData}
         */
        screenToLookAtData(x: number, y: number): H.map.ViewModel.ILookAtData;

        /**
         * This method adds an map object to the map. Map object can be a marker or a spatial object like polygon or polyline.
         * @param mapObject {!H.map.Object} - The map object to add
         * @returns {!H.map.Object} - the added map object
         */
        addObject(mapObject: H.map.Object): H.map.Object;

        /**
         * This method removes previously added map object from the map.
         * @param mapObject {!H.map.Object} - The map object to remove
         * @returns {!H.map.Object} - the removed map object
         */
        removeObject(mapObject: H.map.Object): H.map.Object;

        /**
         * This method retrieves the list of all objects which have been added to the map.
         * @returns {Array<H.map.Object>} - the list of all use objects which are currently on the map.
         */
        getObjects(): H.map.Object[];

        /**
         * This method adds an array of objects or an object group to the map.
         * @param mapObjects {Array<!H.map.Object>}
         * @returns {H.Map} - the map instance
         */
        addObjects(mapObjects: H.map.Object[]): H.Map;

        /**
         * This method removes an array of object or an object group from the map.
         * @param mapObjects {(Array<H.map.Object> | H.map.Group)}
         * @returns {H.Map} - the map instance
         */
        removeObjects(mapObjects: (H.map.Object[] | H.map.Group)): H.Map;

        /**
         * Returns the top most z-ordered map object found under the specific screen coordinates. Coordinates are viewport pixel coordinates starting from top left corner as (0, 0) point.
         * @param x {number} - map viewport x-axis pixel coordinate
         * @param y {number} - map viewport y-axis pixel coordinate
         * @param callback {function}
         * @returns {?H.map.Object} - the encountered top most map object or null if no object found
         */
        getObjectAt(x: number, y: number, callback: (obj: H.map.Object) => any): H.map.Object;

        /**
         * Returns a list of map objects in descending z-order found under the specific screen coordinates. Coordinates are viewport pixel coordinates starting from top left corner as (0, 0) point.
         * @param x {number} - map viewport x-axis pixel coordinate
         * @param y {number} - map viewport y-axis pixel coordinate
         * @returns {Array<!H.map.Object>}
         */
        getObjectsAt(x: number, y: number): H.map.Object[];

        /**
         * This method will dispatch event on the event target object
         * @param evt {(H.util.Event | string)} - event object or event name
         */
        dispatchEvent(evt: (H.util.Event | string)): void;

        /**
         * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
         */
        dispose(): void;

        /**
         * This method adds callback which is triggered when the object is being disposed
         * @param callback {Function} - The callback function.
         * @param opt_scope {Object=} - An optional scope to call the callback in.
         */
        addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;

        /**
         * This returns the map's render engine
         * @return {H.map.render.p2d.RenderEngine} - map render engine
         */
        getEngine(): H.map.render.p2d.RenderEngine;
    }

    namespace Map {
        /**
         * It defines the number of lower and higher zoom levels, where cached content of the base map is rendered while content of the current zoom level is still loading.
         * Example: if range was set to {lower: 3, higher: 2} and current level is 10 then rendering engine will try to display cached tiles from lower zoom levels 7, 8, 9 and higher levels 11 and 12.
         * @property lower {number} - The number of lower zoom levels to take into account, default is 0
         * @property higher {number} - The number of higher zoom levels to take into account, default is 0
         */
        interface BackgroundRange {
            lower: number;
            higher: number;
        }

        /**
         * Types of engines
         */
        enum EngineType {
            P2D,
            PANORAMA,
        }

        /**
         * This type defines options which can be used to initialize the map.
         * @property center {H.geo.IPoint=} - The initial center of the map, default is {lat:0, lng: 0}
         * @property zoom {number=} - The initial zoom level of the map, default is 0 respectively the minimal zoom level of the base map
         * @property bounds {H.geo.Rect=} - The view bounds to be displayed on the map. If provided, it takes precedence over center and zoom. and zoom if provided)
         * @property layers {Array<H.map.layer.Layer>=} - A list of layers to render on top of the base map
         * @property engineType: {H.Map.EngineType=} - The initial engine type to use, default is P2D
         * @property pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
         * @property imprint {H.map.Imprint.Options=} - The imprint options or null to suppress the imprint
         * @property renderBaseBackground {H.Map.BackgroundRange=} - Object describes how many cached zoom levels should be used as a base map background while base map tiles are loading.
         * Example: {lower: 3, higher: 2}
         * @property autoColor {boolean=} - Indicates whether the UI's colors should automatically adjusted to the base layer, default is true. Up to now only the copyright style will be adjusted.
         * See H.map.layer.Layer.Options#dark
         * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
         * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
         * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or padding has been changed, default is true
         * @property noWrap {boolean=} - Indicates whether to wrap the world on longitude axes. When set to true, only one world will be rendered. Default is false, multiple worlds are rendered.
         */
        interface Options {
            center?: H.geo.IPoint | undefined;
            zoom?: number | undefined;
            bounds?: H.geo.Rect | undefined;
            layers?: H.map.layer.Layer[] | undefined;
            engineType?: EngineType | undefined;
            pixelRatio?: number | undefined;
            imprint?: H.map.Imprint.Options | undefined;
            renderBaseBackground?: BackgroundRange | undefined;
            autoColor?: boolean | undefined;
            margin?: number | undefined;
            padding?: H.map.ViewPort.Padding | undefined;
            fixedCenter?: boolean | undefined;
            noWrap?: boolean | undefined;
        }
    }

    /***** clustering *****/
    namespace clustering {
        /**
         * This class represents the input data structure for data points to be clustered.
         * @property lat {H.geo.Latitude} - The latitude coordinate of the data point's position
         * @property lng {H.geo.Longitude} - The longitude coordinate of the data point's position
         * @property wt {number} - The weight of the data point
         * @property data {*} - Data associated with this data point
         */
        class DataPoint implements H.geo.IPoint {
            /**
             * Constructor
             * @param lat {H.geo.Latitude} - The latitude coordinate of the data point's position
             * @param lng {H.geo.Longitude} - The longitude coordinate of the data point's position
             * @param opt_weight {number=} - The weight of the data point as a positive number > 0. If not specified it , default is 1.
             * @param opt_data {*=} - Optional data, which will be associated with this DataPoint
             */
            constructor(lat: H.geo.Latitude, lng: H.geo.Longitude, opt_weight?: number, opt_data?: any);

            lat: H.geo.Latitude;
            lng: H.geo.Longitude;
            alt: H.geo.Altitude;
            ctx: H.geo.AltitudeContext;
            wt: number;
            data: any;
        }

        /**
         * This interface describes a cluster of data points, which fulfill the clustering specification (i.e. data points are within the epsilon and there are enough points to form a cluster).
         */
        interface ICluster {
            /**
             * Returns the maximum zoom level where this cluster doesn't fall apart into sub clusters and/or noise poinst
             * @returns {number}
             */
            getMaxZoom(): number;

            /**
             * Returns the bounding rectangle of this cluster.
             * @returns {H.geo.Rect}
             */
            getBounds(): H.geo.Rect;

            /**
             * Invokes the specified callback for each "entry" of the cluster.
             * That "entry" can be either a cluster which implements H.clustering.ICluster interface or a noise point which implements H.clustering.INoisePoint interface.
             * @param callback {function(H.clustering.IResult)} - The callback gets the currently traversed entry as an argument, which is cluster or noise point.
             */
            forEachEntry(callback: (result: H.clustering.IResult) => void): void;

            /**
             * Invokes the specified callback for each data point which is part of this cluster, even indirectly.
             * @param callback {function(H.clustering.INoisePoint)} - The callback gets the currently traversed noise point as argument.
             */
            forEachDataPoint(callback: (noise: H.clustering.INoisePoint) => void): void;

            /**
             * Returns the geographical position of this cluster result.
             * @returns {H.geo.Point}
             */
            getPosition(): H.geo.Point;

            /**
             * Returns the weight of this cluster result.
             * @returns {number}
             */
            getWeight(): number;

            /**
             * To indicate whether this cluster result is a cluster or noise point
             * @returns {boolean}
             */
            isCluster(): boolean;

            /**
             * Returns the minimum zoom level where this item is not part of another cluster
             * @returns {number}
             */
            getMinZoom(): number;
        }

        /**
         * This interface represents a data point which does not belong to a cluster.
         */
        interface INoisePoint {
            /**
             * This method returns data which coresponds to this noise point.
             * @returns {*}
             */
            getData(): any;

            /**
             * Returns the geographical position of this cluster result.
             * @returns {H.geo.Point}
             */
            getPosition(): H.geo.Point;

            /**
             * Returns the weight of this cluster result.
             * @returns {number}
             */
            getWeight(): number;

            /**
             * To indicate whether this cluster result is a cluster or noise point
             * @returns {boolean}
             */
            isCluster(): boolean;

            /**
             * Returns the minimum zoom level where this item is not part of another cluster
             * @returns {number}
             */
            getMinZoom(): number;
        }

        /**
         * This interface represents the result item of a clustering operation.
         */
        interface IResult {
            /**
             * Returns the geographical position of this cluster result.
             * @returns {H.geo.Point}
             */
            getPosition(): H.geo.Point;

            /**
             * Returns the weight of this cluster result.
             * @returns {number}
             */
            getWeight(): number;

            /**
             * To indicate whether this cluster result is a cluster or noise point
             * @returns {boolean}
             */
            isCluster(): boolean;

            /**
             * Returns the minimum zoom level where this item is not part of another cluster
             * @returns {number}
             */
            getMinZoom(): number;
        }

        /**
         * Interface which specifies the methods a theme must implement.
         */
        interface ITheme {
            /**
             * Function returns a cluster presentation as a map object.
             * @param cluster {H.clustering.ICluster}
             * @returns {H.map.Object}
             */
            getClusterPresentation(cluster: H.clustering.ICluster): H.map.Object;

            /**
             * Function returns noise point presentation as a map object
             * @param noisePoint {H.clustering.INoisePoint}
             * @returns {H.map.Object}
             */
            getNoisePresentation(noisePoint: H.clustering.INoisePoint): H.map.Object;
        }

        /**
         * The clustering provider serves clusters and noise point representation for the map depending on the provided data set.
         * Levels for clustering as well as custom cluster representation can be set via Options.
         * @property min {number} - Minimum zoom level at which provider can cluster data
         * @property max {number} - Maximum zoom level at which provider can cluster data
         */
        class Provider extends H.util.EventTarget {
            /**
             * Constructor
             * @param dataPoints {Array<H.clustering.DataPoint>}
             * @param opt_options {H.clustering.Provider.Options=}
             */
            constructor(dataPoints: H.clustering.DataPoint[], opt_options?: H.clustering.Provider.Options);

            /**
             * This method will dispatch event on the event target object
             * @param evt {(H.util.Event | string)} - event object or event name
             */
            dispatchEvent(evt: (H.util.Event | string)): void;

            /**
             * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
             */
            dispose(): void;

            /**
             * This method adds callback which is triggered when the object is being disposed
             * @param callback {Function}
             * @param opt_scope {Object=}
             */
            addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;

            /**
             * This method sets new data to the provider
             * @param dataPoints {Array<H.clustering.DataPoint>}
             */
            setDataPoints(dataPoints: H.clustering.DataPoint[]): void;

            /**
             * This method adds a data point to the provider. Beware that this method provokes reclustering of the whole data set.
             * @param dataPoint {H.clustering.DataPoint}
             */
            addDataPoint(dataPoint: H.clustering.DataPoint): void;

            /**
             * This method adds a list of data points to the provider. Beware that this method provokes reclustering of the whole data set.
             * @param dataPoints {Array<H.clustering.DataPoint>}
             */
            addDataPoints(dataPoints: H.clustering.DataPoint[]): void;

            /**
             * This method removes a data point from the provider. Beware that this method provokes reclustering of the whole data set.
             * @param dataPoint {H.clustering.DataPoint}
             */
            removeDataPoint(dataPoint: H.clustering.DataPoint): void;

            /**
             * This method returns current theme used for creating cluster visualization
             * @returns {H.clustering.ITheme}
             */
            getTheme(): H.clustering.ITheme;

            /**
             * This method sets new theme on the provider. Calling this method will change visuals for displayed clusters and noise points.
             * @param theme {H.clustering.ITheme}
             */
            setTheme(theme: H.clustering.ITheme): void;

            /**
             * This method always returns true as we don't have information about visual representation until we have the clustering result and apply the theme.
             * @returns {boolean}
             */
            providesDomMarkers(): boolean;

            /**
             * Returns all DomMarker cluster and noise point representations which intersect with the provided rectangular area.
             * @param bounds {H.geo.Rect} - A rectangular area in geo space to intersect with
             * @param zoomLevel {number} - The zoom level for which the objects are requested
             * @param visiblesOnly {boolean} - Indicates whether only invisible objects are to be considered
             * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
             * @returns {Array<H.map.DomMarker>} - a list of intersecting objects
             */
            requestDomMarkers(bounds: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): H.map.DomMarker[];

            /**
             * This method always returns true as we don't have information about visual representation until we have the clustering result and apply the theme.
             * @returns {boolean}
             */
            providesMarkers(): boolean;

            /**
             * Returns all cluster and noise point markers which intersect with the provided rectangular area.
             * @param bounds {H.geo.Rect} - A rectangular area in geo space to intersect with
             * @param zoomLevel {number} - The zoom level for which the objects are requested
             * @param visiblesOnly {boolean} - Indicates whether only invisible objects are to be considered
             * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
             * @returns {Array<H.map.Marker>} - a list of intersecting objects
             */
            requestMarkers(bounds: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): H.map.Marker[];

            /**
             * This method always returns true as we don't have information about visual representation until we have the clustering result and apply the theme.
             * @returns {boolean}
             */
            providesSpatials(): boolean;

            /**
             * Returns all polyline, polygon, circle and rect objects which represent cluster and noise points and intersect with the provided area.
             * @param bounds {H.geo.Rect} - A rectangular area in geo space to intersect with
             * @param zoomLevel {number} - The zoom level for which the objects are requested
             * @param visiblesOnly {boolean} - Indicates whether only invisible objects are to be considered
             * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
             * @returns {Array<H.map.Spatial>} - a list of intersecting objects
             */
            requestSpatials(bounds: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): H.map.Spatial[];

            /**
             * Returns the spatial objects which intersect the given tile
             * @param tile {H.map.provider.SpatialTile} - The tile for which the objects are requested
             * @param visiblesOnly {boolean} - Indicates whether only invisible objects are to be considered
             * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
             * @returns {Array<H.map.Spatial>} - a list of intersecting objects
             */
            requestSpatialsByTile(tile: H.map.provider.Tile, visiblesOnly: boolean, cacheOnly: boolean): H.map.Spatial[];

            /**
             * Returns the accumulate invalidations of this provider's objects that have occurred.
             * @returns {H.map.provider.Invalidations} - an invalidations object
             */
            getInvalidations(): H.map.provider.Invalidations;

            /**
             * To signal to this provider that a map object has been changed. The method updates the Invalidations of this provider and the given map object and triggers dispatchUpdate()
             * @param mapObject {!H.map.Object} - The map object to be invalidated
             * @param changes {H.math.BitMask} - The flags indicating the types of occurred changes
             */
            invalidateObject(mapObject: H.map.Object, changes: H.math.BitMask): void;

            min: number;
            max: number;
        }

        namespace Provider {
            /**
             * Options which are used within cluster calculations.
             * @property eps {number=} - epsilon parameter for cluster calculation. For the FASTGRID strategy it must not exceed 256 and must take values that are power of 2.
             * For the GRID and DYNAMICGRID strategies it can take values from 10 to 127. Default is 32.
             * @property minWeight {number=} - the minimum points weight sum to form a cluster, default is 2
             * @property projection {H.geo.IProjection=} - projection to use for clustering, default is H.geo.mercator
             * @property strategy {H.clustering.Provider.Strategy=} - clustering stretegy, defaults to H.clustering.Provider.Strategy.FASTGRID
             */
            interface ClusteringOptions {
                eps?: number | undefined;
                minWeight?: number | undefined;
                projection?: H.geo.IProjection | undefined;
                strategy?: H.clustering.Provider.Strategy | undefined;
            }

            /**
             * Options which are used to initialize the clustering Provider
             * @property min {number=} - The minimal supported zoom level, default is 0
             * @property max {number=} - The maximal supported zoom level, default is 22
             * @property clusteringOptions {H.clustering.Provider.ClusteringOptions=} - options for clustering algorithm
             * @property theme {H.clustering.ITheme=} - cluster and noise point graphical representation
             */
            interface Options {
                min?: number | undefined;
                max?: number | undefined;
                clusteringOptions?: H.clustering.Provider.ClusteringOptions | undefined;
                theme?: H.clustering.ITheme | undefined;
            }

            /**
             * Enumeration represents possible clustering strategies. FASTGRID clustering is the efficient way to cluster large sets of data points.
             * GRID clustering is slower but has greater precision due to the bigger range of epsilon values, this strategy suitable for clustering smaller data sets (up to 1000 data points)
             * on desktop devices. DYNAMICGRID clustering uses the same algorithm of clustering as the GRID, but clusters on the viewport basis is meant to be used with data sets that are subject
             * to the frequent update operations.
             */
            enum Strategy {
                FASTGRID,
                GRID,
                DYNAMICGRID,
            }
        }
    }

    /***** data *****/
    namespace data {
        /**
         * An abstract reader class defines interface for data readers and has general functionality related to fetching data and reader events.
         */
        class AbstractReader extends H.util.EventTarget {
            /**
             * Constructor
             * @param opt_url {string=}
             */
            constructor(opt_url?: string);

            /**
             * Method returns H.map.layer.ObjectLayer that contains parsed data, and can be added directly to the map. It returns new instance of the class with every invocation.
             * If data hasn't been parsed it will return H.map.layer.ObjectLayer that contains partial information, and reader will add new parsed objects to the layer's provider later on.
             * @returns {H.map.layer.ObjectLayer}
             */
            getLayer(): H.map.layer.ObjectLayer;

            /**
             * Method returns collection of currently parsed, and converted to H.map.Object data objects. Method returns only currently parsed objects if parsing is ongoing.
             * @returns {Array<H.map.Object>}
             */
            getParsedObjects(): H.map.Object[];

            /**
             * Returns URL of the current file, which is either in process of fetching/parsing or file that has been already parsed.
             * @returns {(string | undefined)} - url
             */
            getUrl(): string | void;

            /**
             * Method sets reader's URL. Method resets current Reader's state to its initial values (clears data about last parsed objects, etc.), and throws
             * InvalidState exception if Reader's state is not READY or ERROR.
             * @param url {string} - The new URL
             * @returns {H.data.AbstractReader}
             */
            setUrl(url: string): H.data.AbstractReader;

            /**
             * Returns the reader's processing state for possible states see H.data.AbstractReader.State
             * @returns {H.data.AbstractReader.State}
             */
            getState(): H.data.AbstractReader.State;

            /**
             * Method launches parsing of the data file at the current url (see H.data.AbstractReader#setUrl or H.data.AbstractReader).
             * Method uses XHR as a transport therefore same origin policy applies, or server should respond with proper CORS headers.
             */
            parse(): void;
        }

        namespace AbstractReader {
            /**
             * The event class for state events that are dispatched by AbstractReader
             */
            class Event extends H.util.Event {
                /**
                 * Constructor
                 * @param target {(H.data.AbstractReader | H.map.Object)} - The target that's passed to event listeners
                 * @param type {string} - The type of the event
                 * @param state {H.data.AbstractReader.State} - The state of the target firing an event
                 * @param message {string} - The message associated with an event
                 */
                constructor(target: (H.data.AbstractReader | H.map.Object), type: string, state: H.data.AbstractReader.State, message: string);
            }

            /**
             * The state types of an Reader. Possible states are:
             */
            enum State {
                ERROR,
                LOADING,
                VISIT,
                READY,
            }
        }

        /**
         * This namespace provides GeoJSON functionality.
         */
        namespace geojson {
            /**
             * This class represents a GeoJSON reader responsible for fetching and interpreting GeoJSON data.
             * It creates an instance of H.map.Object that can be displayed on the map (for more details see GeoJSON documentation {@link https://geojson.org}).
             * Auxiliary data that accompanies geometries (the contents of the field properties) is bound to the map object and
             * can be fetched with the method getData() on that object. See H.map.Object#getData.
             * Note that you can load a GeoJSON file even from a different domain, if that domain supports Cross-Origin Resource Sharing.
             */
            class Reader extends H.data.AbstractReader {
                /**
                 * Constructor
                 * @param opt_url {string=}
                 * @param opt_options {H.data.geojson.Reader.Options=}
                 */
                constructor(opt_url?: string, opt_options?: H.data.geojson.Reader.Options);

                /**
                 * This method launches the parsing process on the provided data.
                 * @param data {*=} A string or object containing the data to parse
                 */
                parseData(data: any): void;
            }

            namespace Reader {
                /**
                 * This type encapsulates configuration (initialization) properties for a H.data.geojson.Reader.
                 * @property style {Function=} - The optional URL of the data file.
                 * @property disableLegacyMode {boolean=} - An object providing additional reader configuration parameters.
                 */
                interface Options {
                    style?: ((mapObject: H.map.Object) => void) | undefined;
                    disableLegacyMode?: boolean | undefined;
                }
            }
        }
    }

    /***** geo *****/
    namespace geo {
        /**
         * The base class for all geometry types.
         */
        class AbstractGeometry {
            /**
             * Returns the bounding rectangle of the geometry.
             * @return {H.geo.Rect} - the bounding rectangle of the geometry or null if the bounding rectangle can't be computed (e.g. for a geometry without coordinates)
             */
            getBoundingBox(): H.geo.Rect;

            /**
             * Checks whether the geometry is equal to the geometry supplied by the caller.
             * Two geometries are considered as equal if they represent the same geometry type and have equal coordinate values.
             * @param other {any} - The geometry to check against
             * @return {boolean} - true if the two geometries are equal, otherwise false
             */
            equals(other: any): boolean;

            /**
             * To obtain a Well-Known-Text (WKT) representation of the geometry.
             * @return {string} - the resulting WKT string
             */
            toString(): string;

            /**
             * To obtain a GeoJSON representation of the given geometry.
             * @return {object} - A GeoJSON Geometry object representing the given geometry.
             */
            toGeoJSON(): object;
        }

        /**
         * A Geographic coordinate that specifies the height of a point in meters. A value of undefined is treated as 0.
         */
        type Altitude = number;

        /**
         * Contexts for altitudes to specify the contextual origin of an altitude's value
         */
        enum AltitudeContext {
            /** Ground level */
            undefined,
            /** Ground level */
            GL,
            /** Obstruction level */
            OL,
            /** Mean sea level */
            SL,
            /** Sea bed level */
            SB,
            /** WGS84 ellipsoid */
            WE,
            /** WGS84 geoid */
            WG,
        }

        /**
         * An interface to represent a geographic point. Every point in geo space is represented by three coordinates latitude, longitude and optional altitude.
         * @property lat {H.geo.Latitude} - The latitude coordinate.
         * @property lng {H.geo.Longitude} - The longitude coordinate.
         * @property alt {H.geo.Altitude=} - The altitude coordinate.
         * @property ctx {H.geo.AltitudeContext=} - The altitude context.
         */
        interface IPoint {
            lat: H.geo.Latitude;
            lng: Longitude;
            alt?: H.geo.Altitude | undefined;
            ctx?: H.geo.AltitudeContext | undefined;
        }

        interface IProjection {
            latLngToPoint(lat: number, lng: number, opt_out?: H.math.Point): H.math.Point;

            xyToGeo(x: number, y: number, opt_out?: H.geo.Point): H.geo.Point;

            pointToGeo(point: H.math.IPoint, opt_out?: H.geo.Point): H.geo.Point;

            geoToPoint(geoPoint: H.geo.IPoint, opt_out?: H.math.Point): H.math.Point;
        }

        /**
         * A geographic coordinate that specifies the north-south position of a point on the Earth's surface in the range from -90 to + 90 degrees, inclusive.
         */
        type Latitude = number;

        /**
         * A Geographic coordinate that specifies the east-west position of a point on the Earth's surface in the range from -180 to 180 degrees, inclusive.
         */
        type Longitude = number;

        class LineString extends H.geo.AbstractGeometry {
            /**
             * Constructor
             * @param opt_latLngAlts {number[]=} - An optional array of latitude, longitude and altitude triples to initialize the LineString with.
             * @param opt_ctx {H.geo.AltitudeContext=} - An optional altitude context for all altitudes contained in this LineString.
             * @throws {H.lang.InvalidArgumentError} - in case of invalid lat, lng, alt values
             */
            constructor(opt_latLngAlts?: number[], opt_ctx?: H.geo.AltitudeContext);

            /**
             * This method pushes a lat, lng, alt to the end of this LineString.
             * @param lat {H.geo.Latitude}
             * @param lng {H.geo.Longitude}
             * @param alt {H.geo.Altitude}
             * @throws {H.lang.InvalidArgumentError} - in case of invalid lat, lng, alt value
             */
            pushLatLngAlt(lat: H.geo.Latitude, lng: H.geo.Longitude, alt: H.geo.Altitude): void;

            /**
             * This method splices the LineString at the provided index, removing the specified number of items at that index and inserting the lat, lng, alt array.
             * @param index {number} - The index at which to splice
             * @param opt_nRemove {number=} - The number of lat, lng, alt values to remove
             * @param opt_latLngAlts {number[]=} - The lat, lng, alt values to add
             * @return {number[]} - An array of removed elements
             * @throws {H.lang.InvalidArgumentError} - in case of invalid opt_latLngAlts argument
             */
            spliceLatLngAlts(index: number, opt_nRemove?: number, opt_latLngAlts?: number[]): number[];

            /**
             * This method inserts one set of lat, lng, alt values into the LineString at the specified index.
             * @param index {number} - the index at which to add the element
             * @param lat {H.geo.Latitude} - the latitude to insert
             * @param lng {H.geo.Longitude} - the longitude to insert
             * @param alt {H.geo.Altitude} - the altitude to insert
             */
            insertLatLngAlt(index: number, lat: H.geo.Latitude, lng: H.geo.Longitude, alt: H.geo.Altitude): void;

            /**
             * This method removes one set of lat, lng, alt values from the LineString at the specified index
             * @param index {number}
             */
            removeLatLngAlt(index: number): void;

            /**
             * This method pushes the lat, lng, alt values of a {H.geo.Point} to the end of this LineString.
             * @param geoPoint {H.geo.IPoint}
             * @throws {H.lang.InvalidArgumentError} - in case of invalid geoPoint argument
             */
            pushPoint(geoPoint: H.geo.IPoint): void;

            /**
             * This method inserts the lat, lng, alt values of a H.geo.Point into the list at the specified index.
             * @param pointIndex {number}
             * @param geoPoint {H.geo.IPoint}
             */
            insertPoint(pointIndex: number, geoPoint: H.geo.IPoint): void;

            /**
             * This method removes one set of lat, lng, alt values from this LineString at the virtual point index specified.
             * @param pointIndex {number} - the virtual point index
             */
            removePoint(pointIndex: number): void;

            /**
             * This method extracts a H.geo.Point from this LineString at the virtual point index.
             * If the extracted point has an alt value, the LineString's altitude context will be supplied to the point.
             * @param pointIndex {number} - the virtual point index in the LineString
             * @param opt_out {H.geo.Point=} - an optional point object to store the lat, lng, alt values
             * @return {H.geo.Point} - Returns either the 'opt_out' point object or a new point object.
             */
            extractPoint(pointIndex: number, opt_out?: H.geo.Point): H.geo.Point;

            /**
             * A utility method to iterate over the points of a line string.
             * @param eachFn {function(lat, lng, alt, index)} - The function to invoke for every point. It gets the point's latitude, longitude, altitude and index as arguments.
             * @param opt_start {number=} - The point's start index (inclusive) to iterate from, defaults to 0.
             * @param opt_end {number=} - The point's end index (exclusive) to iterate to, defaults to Infinity.
             */
            eachLatLngAlt(eachFn: (lat: H.geo.Latitude, lng: H.geo.Longitude, alt: H.geo.Altitude, index: number) => void, opt_start?: number, opt_end?: number): void;

            /**
             * To obtain whether a leg (formed by the given two longitudes) crosses the International Date Line.
             * @param lng1 {H.geo.Longitude} - The start longitude of the leg
             * @param lng2 {H.geo.Longitude} - The end longitude of the leg
             * @return {boolean}
             */
            static isDBC(lng1: H.geo.Longitude, lng2: H.geo.Longitude): boolean;

            /**
             * To obtain the number of times that this LineString cross the International Date Line.
             * @param opt_asClosed {boolean=} - Indicates whether the LineString is treated as closed (the LineString's last and first coordinates form the closing leg of a polygon).
             * It defaults to false.
             * @return {number}
             */
            getDBCs(opt_asClosed?: boolean): number;

            /**
             * This method return the number of points stored in this LineString.
             * @return {number} - The number of points in this LineString
             */
            getPointCount(): number;

            /**
             * Returns the vertices of the line segments as an array of alternating latitude, longitude and altitude coordinates.
             * The returned array must be treated as read-only to not violate the integrity of the line-string.
             * @return {number[]} - Returns the raw lat, lng, alt values of this LineString
             */
            getLatLngAltArray(): number[];

            /**
             * This method returns the bounding box of this LineString.
             * Note: The LineString is treated as an open path. If the bounding rectangle for a closed shape is required, the closing leg must be merged in an extra step.
             * @return {H.geo.Rect} - This LineString's bounding rectangle
             */
            getBounds(): H.geo.Rect;

            /**
             * This method initializes a new LineString with an array of lat, lng values. Arrays are expected to have an even length with the format [lat, lng, lat, lng, ...].
             * @param latLngs {number[]} - the array of lat, lng value.
             * @return {H.geo.LineString} - The LineString containing the lat, lng values
             * @throws {H.lang.InvalidArgumentError} - throws an error in case the latLngs array has an odd length
             */
            static fromLatLngArray(latLngs: number[]): H.geo.LineString;

            /**
             * Checks whether the geometry is equal to the geometry supplied by the caller.
             * Two geometries are considered as equal if they represent the same geometry type and have equal coordinate values.
             * @param other {any} - The geometry to check against
             * @return {boolean} - true if the two geometries are equal, otherwise false
             */
            equals(other: any): boolean;

            /**
             * To obtain a Well-Known-Text (WKT) representation of the geometry.
             * @return {string} - the resulting WKT string
             */
            toString(): string;
        }

        class MultiGeometry<T> extends H.geo.AbstractGeometry {
            /**
             * The base class for a geometry that is a container for multiple geometries of a generic type. The type of the contained geometries is specified by the generic type parameter T
             * @param geometries {T[]} - The list of geometries which are initially aggregated.
             * @throws {H.lang.InvalidArgumentError} - if geometries parameter is not valid
             */
            constructor(geometries: T[]);

            /**
             * This method splices the specified MultiGeometry at the provided index, removing the specified number of items at that index and inserting new items.
             * @param index {number} - The index at which to start changing the list.
             * @param opt_deleteCount {number=} - The number of geometries to remove.
             * @param opt_items {T[]=} - The geometries to add.
             * @return {T[]} - the removed geometries.
             */
            splice(index: number, opt_deleteCount?: number, opt_items?: T[]): T[];

            /**
             * Removes a contained geometry at the given index.
             * @param index {number} - The index of the geometry to remove.
             * @return {T} - the removed geometry.
             * @throws {H.lang.OutOfRangeError} - if no geometry exists at the given index.
             */
            removeAt(index: number): T;

            /**
             * Removes the specified geometry from the multi-geometry
             * @param geometry {T} - The geometry (by reference) to remove from this multi-geometry.
             * @return {T} - the removed geometry or null if the geometry was not found
             */
            remove(geometry: T): T;

            /**
             * Returns the aggregated geometries of the multi-geometry. The returned geometries must be treated as read-only to not violate the integrity of the multi-geometry.
             * @return {T[]} - An array of geometries
             */
            getGeometries(): T[];

            /**
             * Adds the specified geometry to the current multi-geometry.
             * @param geometry {T} - A geometry which will be added to the current multi-geometry
             * @throws {H.lang.InvalidArgumentError} - in case of invalid geometry argument
             */
            push(geometry: T): void;

            /**
             * Returns the bounding rectangle of the geometry.
             * @return {H.geo.Rect} - the bounding rectangle of the geometry or null if the bounding rectangle can't be computed (e.g. for a geometry without coordinates)
             */
            getBounds(): H.geo.Rect;

            /**
             * Checks whether the geometry is equal to the geometry supplied by the caller.
             * Two geometries are considered as equal if they represent the same geometry type and have equal coordinate values.
             * @param other {any} - The geometry to check against
             * @return {boolean} - true if the two geometries are equal, otherwise false
             */
            equals(other: any): boolean;

            /**
             * To obtain a Well-Known-Text (WKT) representation of the geometry.
             * @return {string} - the resulting WKT string
             */
            toString(): string;
        }

        class MultiLineString extends H.geo.MultiGeometry<H.geo.LineString> {
            /**
             * A MultiLineString is a collection of line strings represented as a H.geo.MultiGeometry with a H.geo.LineString as generic type parameter T.
             * @param lineStrings {H.geo.LineString[]} - The list of line-strings which are initially represented by the MultiLineString.
             * @throws {H.lang.InvalidArgumentError} - if the lineStrings argument is not valid
             */
            constructor(lineStrings: H.geo.LineString[]);

            /**
             * This method splices the specified MultiGeometry at the provided index, removing the specified number of items at that index and inserting new items.
             * @param index {number} - The index at which to start changing the list.
             * @param opt_deleteCount {number?} - The number of geometries to remove.
             * @param opt_items {H.geo.LineString[]?} - The geometries to add.
             * @return {H.geo.LineString[]} - the removed geometries
             */
            splice(index: number, opt_deleteCount?: number, opt_items?: H.geo.LineString[]): H.geo.LineString[];

            /**
             * Removes a contained geometry at the given index.
             * @param index {number} - The index of the geometry to remove.
             * @return {H.geo.LineString} - the removed geometry.
             * @throws {H.lang.OutOfRangeError} - if no geometry exists at the given index.
             */
            removeAt(index: number): H.geo.LineString;

            /**
             * Removes the specified geometry from the multi-geometry
             * @param geometry {H.geo.LineString} -The geometry (by reference) to remove from this multi-geometry
             * @return {H.geo.LineString} -the removed geometry or null if the geometry was not found
             */
            remove(geometry: H.geo.LineString): H.geo.LineString;

            /**
             * Returns the aggregated geometries of the multi-geometry. The returned geometries must be treated as read-only to not violate the integrity of the multi-geometry.
             * @return {H.geo.LineString[]} - An array of geometries
             */
            getGeometries(): H.geo.LineString[];

            /**
             * Adds the specified geometry to the current multi-geometry.
             * @param geometry {H.geo.LineString} - A geometry which will be added to the current multi-geometry
             * @throws {H.lang.InvalidArgumentError} - in case of invalid geometry argument
             */
            push(geometry: H.geo.LineString): void;

            /**
             * Returns the bounding rectangle of the geometry.
             * @return {H.geo.Rect} - the bounding rectangle of the geometry or null if the bounding rectangle can't be computed (e.g. for a geometry without coordinates)
             */
            getBounds(): H.geo.Rect;

            /**
             * Checks whether the geometry is equal to the geometry supplied by the caller.
             * Two geometries are considered as equal if they represent the same geometry type and have equal coordinate values.
             * @param other {any} - The geometry to check against
             * @return {boolean} - true if the two geometries are equal, otherwise false
             */
            equals(other: any): boolean;

            /**
             * To obtain a Well-Known-Text (WKT) representation of the geometry.
             * @return {string} - the resulting WKT string
             */
            toString(): string;
        }

        /**
         * PixelProjection transforms pixel world coordinates at a certain scale (zoom level) to geographical coordinates and vice versa.
         * By default, it uses the Mercator projection to transform geographic points into the 2d plane map points, which are adjusted to the current scale.
         * @property projection {H.geo.IProjection} - This property indicates the geographical projection that underlies the given PixelProjection.
         * @property x {number} - This property holds the x-offset in the projection relative to the top-left corner of the screen.
         * @property y {number} - This property holds the y-offset in the projection relative to the top-left corner of the screen.
         * @property w {number} - This property holds a value indicating the width of the world in pixels.
         * @property h {number} - This property holds a value indicating the height of the world in pixels.
         */
        class PixelProjection {
            /**
             * Constructor
             * @param opt_projection {H.geo.IProjection=} - An object representing the projection to use, the default is spherical Mercator H.geo.mercator
             * @param opt_sizeAtLevelZero {number=} A value indicating the size of a tile representation of the world in pixels at zoom level 0, the default is 256
             */
            constructor(opt_projection?: H.geo.IProjection, opt_sizeAtLevelZero?: number);

            projection: H.geo.IProjection;
            x: number;
            y: number;
            w: number;
            h: number;

            /**
             * This method updates the scale exponent for the pixel projection.
             * @param zoom {number} - A value indicating the zoom level
             */
            rescale(zoom: number): void;

            /**
             * This method retrieves the current zoom scale factor previously set by a call to H.geo.PixelProjection#rescale.
             * @return {number} - A value indicating the zoom scale factor
             */
            getZoomScale(): number;

            /**
             * This method translates a point defines in terms of its geographic coordinates to pixel coordinates at the specified zoom level.
             * @param geoPoint {H.geo.IPoint} - An object containing the geographic coordinates
             * @param opt_out {H.math.IPoint=} - An optional point to store the result
             * @return {H.math.IPoint} - An object representing the results of the the conversion to pixel coordinates
             */
            geoToPixel(geoPoint: H.geo.IPoint, opt_out?: H.math.IPoint): H.math.IPoint;

            /**
             * This method translates a point defined in terms of its pixel coordinates to a location defined in geographic coordinates.
             * @param point {H.math.IPoint} - An object defining a location on the screen in terms of pixel coordinates
             * @param opt_out {H.geo.IPoint=} - An optional point to store the result
             * @return {H.geo.IPoint} - An object representing the results of conversion to a geographic location
             */
            pixelToGeo(point: H.math.IPoint, opt_out?: H.geo.IPoint): H.geo.IPoint;

            /**
             * This method translates the x and y coordinates of a pixel to a geographic point.
             * @param x {number} - A value indicating the pixel x-coordinate
             * @param y {number} - A value indicating the pixel y-coordinate
             * @param opt_out {H.geo.Point=} - An optional point to store the result
             * @return {H.geo.Point} - An object representing the results of the conversion to a geographic location
             */
            xyToGeo(x: number, y: number, opt_out?: H.geo.Point): H.geo.Point;

            /**
             * This method translates geographical coordinates (latitude, longitude) supplied by the caller into a point defined in terms of pixel coordinates.
             * This method accepts longitudes outside of the normal longitude range.
             * @param latitude {number} - The latitude to translate
             * @param longitude {number} - The longitude to translate
             * @param opt_out {H.math.IPoint=} - An optional point to store the result
             * @return {H.math.Point} - The results of the conversion as a point object containing x and y coordinates (in pixels)
             */
            latLngToPixel(latitude: number, longitude: number, opt_out?: H.math.IPoint): H.math.Point;

            /**
             * This method method translates a map point to world pixel coordinates relative to current projection offset.
             * @param point {H.math.IPoint} - An object representing the map point to convert
             * @return {H.math.Point} - The result of the conversion as an object containing pixel coordinate
             */
            pointToPixel(point: H.math.IPoint): H.math.Point;
        }

        /**
         * Class represents a geographical point, which is defined by the latitude, longitude and optional altitude.
         * @property lat {H.geo.Latitude} - The latitude coordinate.
         * @property lng {H.geo.Longitude} - The longitude coordinate.
         * @property alt {H.geo.Altitude} - The altitude coordinate.
         * @property ctx {H.geo.AltitudeContext} - The altitude context.
         */
        class Point extends H.geo.AbstractGeometry implements IPoint {
            /**
             * Constructor
             * @property lat {H.geo.Latitude} - The latitude coordinate.
             * @property lng {H.geo.Longitude} - The longitude coordinate.
             * @property opt_alt {H.geo.Altitude=} - The altitude coordinate.
             * @property opt_ctx {H.geo.AltitudeContext=} - The altitude context.
             */
            constructor(lat: H.geo.Latitude, lng: Longitude, opt_alt?: H.geo.Altitude, opt_ctx?: H.geo.AltitudeContext);

            /**
             * To compare this point with a supplied other point for equality. Two points are considered equal if they have the same lat and lng as well as equivalent values for alt and ctx.
             * @param other {H.geo.IPoint}
             * @returns {boolean} - Whether the two points are equal.
             */
            equals(other: IPoint): boolean;

            /**
             * To calculate the distance between this point and the supplied other point. The method uses the Haversine formula. The altitude is not considered.
             * @param other {H.geo.IPoint}
             * @returns {number} - The distance between the given location and the location supplied by the caller in meters.
             */
            distance(other: IPoint): number;

            /**
             * This method calculates the geographic point of a destination point using the distance and bearing specified by the caller.
             * The altitude is ignored, instead the WGS84 Mean Radius is taken.
             * @param bearing {number} - The bearing to use in the calculation in degrees.
             * @param distance {number} - The distance to the destination in meters.
             * @param opt_overGreatCircle {boolean=} - If true the computation uses the 'Great Circle' otherwise 'Rhumb Line'.
             * @returns {H.geo.Point} - The calculated point
             */
            walk(bearing: number, distance: number, opt_overGreatCircle?: boolean): Point;

            /**
             * This method validates the given IPoint. It checks, if lat, lng, alt and ctx have valid types. Additionally the value of the lat property is clamped into a range of -90 ... +90
             * and the value of the lng property is modulo into a range of -180 ... +180 plus validates the values of the alt and ctx properties
             * @param point {H.geo.IPoint} - The point to validate
             * @param opt_caller {Function=} - The caller to use for InvalidArgumentError. If omitted no error is thrown
             * @param opt_argNr {number=} - The argument number to use for InvalidArgumentError.
             * @returns {boolean} - if the given point could validate
             */
            static validate(point: IPoint, opt_caller?: () => void, opt_argNr?: number): boolean;

            /**
             * This method creates a Point instance from a given IPoint object.
             * @param iPoint {H.geo.IPoint} - The IPoint object to use
             * @returns {H.geo.Point} - the created Point instance
             */
            static fromIPoint(iPoint: IPoint): Point;

            lat: H.geo.Latitude;
            lng: H.geo.Longitude;
            alt: H.geo.Altitude;
            ctx: H.geo.AltitudeContext;
        }

        /**
         * This class represents a rectangular geographic area. The area is defined by four geographical coordinates two (left, right) longitudes and two (top, bottom) latitudes.
         */
        class Rect extends H.geo.AbstractGeometry {
            /**
             * Constructor
             * @param top {H.geo.Latitude} - the northern-most latitude
             * @param left {H.geo.Longitude} - the left-most longitude
             * @param bottom {H.geo.Latitude} - the southern-most latitude
             * @param right {H.geo.Longitude} - the right-most latitude
             */
            constructor(top: H.geo.Latitude, left: H.geo.Longitude, bottom: H.geo.Latitude, right: H.geo.Longitude);

            /**
             * To compare this rectangle with a supplied other rectangle for equality.
             * @param other {H.geo.Rect}
             * @returns {boolean} - Whether the two rectangles are equal.
             */
            equals(other: H.geo.Rect): boolean;

            /**
             * Toclone this rectangle.
             * @returns {H.geo.Rect}
             */
            clone(): H.geo.Rect;

            /**
             * This method returns the top-left corner of the rectangular area.
             * @returns {H.geo.Point} - the top-left corner of the area
             */
            getTopLeft(): H.geo.Point;

            /**
             * This method returns the bottom-right corner of the rectangular area.
             * @returns {H.geo.Point} - the bottom-right corner of the area
             */
            getBottomRight(): H.geo.Point;

            /**
             * This method returns the north-most latitude of this rectangular area
             * @returns {H.geo.Latitude} - the north-most latitude of the area
             */
            getTop(): H.geo.Latitude;

            /**
             * This method returns the south-most latitude of this rectangular area
             * @returns {H.geo.Latitude} - the south-most latitude of the area
             */
            getBottom(): H.geo.Latitude;

            /**
             * This method returns the left-most longitude of this rectangular area
             * @returns {H.geo.Longitude} - the left-most longitude of the area
             */
            getLeft(): H.geo.Longitude;

            /**
             * This method returns the right-most longitude of this rectangular area
             * @returns {H.geo.Longitude} - the right-most longitude of the area
             */
            getRight(): H.geo.Longitude;

            /**
             * This method returns the center point of this rectangular area
             * @returns {H.geo.Point} - the center point of the area
             */
            getCenter(): H.geo.Point;

            /**
             * Returns this width of this rectangular area in decimal degrees.
             * @returns {number} - the width of this area
             */
            getWidth(): number;

            /**
             * Returns this height of this rectangular area in decimal degrees.
             * @returns {number} - the height of this area
             */
            getHeight(): number;

            /**
             * Returns a boolean value indicating whether this rectangular area spans across the date border.
             * @returns {boolean} - true if the area spans across the date border, otherwise false
             */
            isCDB(): boolean;

            /**
             * The method checks if the area enclosed by the given bounding box is 0.
             * @returns {boolean} - true if the dimensions of the area a 0, otherwise false
             */
            isEmpty(): boolean;

            /**
             * This method checks if the latitude and longitude supplied by the caller lie within the area of this rectangular area.
             * @param lat {H.geo.Latitude} - the latitude
             * @param lng {H.geo.Longitude} - the longitude
             * @param opt_skipValidation {boolean=} - a boolean flag indicating whether to check validity of the arguments
             * @returns {boolean} - true if the latitude and longitude are contained in this area, otherwise false
             */
            containsLatLng(lat: H.geo.Latitude, lng: H.geo.Longitude, opt_skipValidation?: boolean): boolean;

            /**
             * This method checks if the point supplied by the caller lies within the area of this rectangular area.
             * @param geoPoint {H.geo.IPoint} - the point
             * @param opt_skipValidation {boolean=} - a boolean flag indicating whether to check validity of the arguments
             * @returns {boolean} - true if the point is contained in this area, otherwise false
             */
            containsPoint(geoPoint: H.geo.IPoint, opt_skipValidation?: boolean): boolean;

            /**
             * This method checks if the rectangular area supplied by the caller is completely contained within the area of this rectangular area.
             * @param geoRect {H.geo.Rect} - the rectangular area
             * @param opt_skipValidation {boolean=} - a boolean flag indicating whether to check validity of the arguments
             * @returns {boolean} - true if the rectangular area is contained in this area, otherwise false
             */
            containsRect(geoRect: H.geo.Rect, opt_skipValidation?: boolean): boolean;

            /**
             * This method returns the smallest bounding box that covers this rectangular area and the latitude and longitude supplied by the caller.
             * @param lat {H.geo.Latitude} - the latitude
             * @param lng {H.geo.Longitude} - the longitude
             * @param opt_skipValidation {boolean=} - a boolean flag indicating whether to check validity of the arguments
             * @param opt_out {H.geo.Rect=} - an optional rectangular area to store the result
             * @returns {H.geo.Rect} - either the rectangular area passed as out parameter or a new rectangular area
             */
            mergeLatLng(lat: H.geo.Latitude, lng: H.geo.Longitude, opt_skipValidation?: boolean, opt_out?: H.geo.Rect): H.geo.Rect;

            /**
             * This method returns the smallest bounding box that covers this rectangular area and the point supplied by the caller.
             * @param geoPoint {H.geo.IPoint} - the point to merge
             * @param opt_skipValidation {boolean=} - a boolean flag indicating whether to check validity of the arguments
             * @param opt_out {H.geo.Rect=} - an optional rectangular area to store the result
             * @returns {H.geo.Rect} - either the rectangular area passed as out parameter or a new rectangular area
             */
            mergePoint(geoPoint: H.geo.IPoint, opt_skipValidation?: boolean, opt_out?: H.geo.Rect): H.geo.Rect;

            /**
             * This method returns the smallest bounding box that covers this rectangular area and the rectangular area supplied by the caller.
             * @param geoRect {H.geo.Rect} - the point to merge
             * @param opt_skipValidation {boolean=} - a boolean flag indicating whether to check validity of the arguments
             * @param opt_out {H.geo.Rect=} - an optional rectangular area to store the result
             * @returns {H.geo.Rect} - either the rectangular area passed as out parameter or a new rectangular area
             */
            mergeRect(geoRect: H.geo.Rect, opt_skipValidation?: boolean, opt_out?: H.geo.Rect): H.geo.Rect;

            /**
             * This method returns the smallest bounding box that covers this rectangular area and the rectangular area supplied by the caller.
             * @param top {H.geo.Latitude} - The top latitude of the rectangle to merge
             * @param left {H.geo.Longitude} - The left longitude of the rectangle to merge
             * @param bottom {H.geo.Latitude} - The bottom latitude of the rectangle to merge
             * @param right {H.geo.Longitude} - The right longitude of the rectangle to merge
             * @param opt_skipValidation {boolean=} - a boolean flag indicating whether to check validity of the arguments
             * @param opt_out {H.geo.Rect=} - an optional rectangular area to store the result
             * @returns {H.geo.Rect} - either the rectangular area passed as out parameter or a new rectangular area
             */
            mergeTopLeftBottomRight(top: H.geo.Latitude, left: H.geo.Longitude, bottom: H.geo.Latitude, right: H.geo.Longitude, opt_skipValidation?: boolean, opt_out?: H.geo.Rect): H.geo.Rect;

            /**
             * This method checks if the intersection of two bounding boxes is non-empty.
             * @param geoRect {H.geo.Rect} - a rectangular area to be tested for intersection with this rectangular area
             * @param opt_skipValidation {boolean=} - a boolean flag indicating whether to check validity of the arguments
             * @returns {boolean} - a boolean value indicating whether the two areas intersect
             */
            intersects(geoRect: H.geo.Rect, opt_skipValidation?: boolean): boolean;

            /**
             * This method merges two rects by their values. The result of the merge is a bounding rect which covers all provided rect bounds.
             * @param topA {H.geo.Latitude} - the northern-most latitude
             * @param leftA {H.geo.Longitude} - the left-most longitude of operand A
             * @param bottomA {H.geo.Latitude} - the southern-most latitude of operand A
             * @param rightA {H.geo.Longitude} - the right-most latitude of operand A
             * @param topB {H.geo.Latitude} - the northern-most latitude of operand B
             * @param leftB {H.geo.Longitude} - the left-most longitude of operand B
             * @param bottomB {H.geo.Latitude} - the southern-most latitude of operand B
             * @param rightB {H.geo.Longitude} - the right-most latitude of operand B
             * @param opt_out {H.geo.Rect=} - an optional rect to store the results
             * @returns {H.geo.Rect} - either the opt_out rect or a new rect
             */
            static merge(topA: H.geo.Latitude, leftA: H.geo.Longitude, bottomA: H.geo.Latitude, rightA: H.geo.Longitude, topB: H.geo.Latitude, leftB: H.geo.Longitude, bottomB: H.geo.Latitude,
                rightB: H.geo.Longitude, opt_out?: H.geo.Rect): H.geo.Rect;

            /**
             * This method creates a rectangular area from a top-left and bottom-right point pair.
             * @param topLeft {H.geo.IPoint} - the top-left corner of the area
             * @param bottomRight {H.geo.IPoint} - the bottom-right corner of the area
             * @param opt_skipValidation {boolean=} - a boolean flag indicating whether to check validity of the arguments
             * @returns {H.geo.Rect} - returns the rectangular area defined by the top-left and bottom-right corners
             */
            static fromPoints(topLeft: H.geo.IPoint, bottomRight: H.geo.IPoint, opt_skipValidation?: boolean): H.geo.Rect;

            /**
             * This method creates the minimum rectangular area covering all of the points in the argument array.
             * @param pointArray {Array<H.geo.IPoint>} - the array of points to cover
             * @param opt_skipValidation {boolean=} - a boolean flag indicating whether to check validity of the arguments
             * @returns {H.geo.Rect} - returns the minimum rectangular area covering the points or null if no point is covered
             */
            static coverPoints(pointArray: H.geo.IPoint[], opt_skipValidation?: boolean): H.geo.Rect;

            /**
             * This method creates the minimum rectangular area covering all of the coordinates in the argument array.
             * @param latLngAltArray {Array<number>} - the array of coordinates to cover
             * @param opt_skipValidation {boolean=} - a boolean flag indicating whether to check validity of the arguments
             * @returns {(H.geo.Rect | undefined)} - returns the minimum rectangular area covering the coordinates
             */
            static coverLatLngAlts(latLngAltArray: number[], opt_skipValidation?: boolean): H.geo.Rect | void;

            /**
             * This method creates the minimum rectangular area covering all of the rectangular areas in the argument array.
             * @param rectArray {Array<H.geo.Rect>} - the array of points to cover
             * @param opt_skipValidation {boolean=} - a boolean flag indicating whether to check validity of the arguments
             * @returns {(H.geo.Rect | undefined)} - returns the minimum rectangular area covering the rectangular areas
             */
            static coverRects(rectArray: H.geo.Rect[], opt_skipValidation?: boolean): H.geo.Rect | void;

            /**
             * This method clones the given bounding rect and resizes the clone if necessary until the location supplied by the caller is at its center.
             * @param center {H.geo.IPoint} - a point which is to be the center of the resized rectangular area
             * @param opt_out {H.geo.Rect=} - an optional rectangular area to store the result
             * @returns {H.geo.Rect} - the resized rectangular area
             */
            resizeToCenter(center: H.geo.IPoint, opt_out?: H.geo.Rect): H.geo.Rect;
        }

        /**
         * @link https://developer.here.com/documentation/maps/api_reference/H.geo.Polygon.html
         */
        class Polygon extends H.geo.AbstractGeometry {
            constructor(exterior: H.geo.LineString, opt_interiors?: H.geo.LineString[]);
            getExterior(): H.geo.LineString;
            getInteriors(): H.geo.LineString[];
            getPoleCovering(): H.geo.Polygon.Direction;

            /**
             * To add an interior ring.
             * @param interior - The interior ring to add.
             * @throws {@link H.lang.InvalidArgumentError}
             */
            pushInterior(interior: H.geo.LineString): void;

            /**
             * To remove the specified interior ring.
             * @param interior - The interior ring to remove.
             */
            removeInterior(interior: H.geo.LineString): H.geo.LineString | undefined;

            /**
             * To remove an interior ring at the given index.
             * @param opt_index - The index of the interior ring to remove, defaults to 0.
             */
            removeInteriorAt(opt_index?: number): H.geo.LineString | undefined;

            /**
             * To set the exterior ring of the polygon.
             * @param exterior - The exterior ring to set
             */
            setExterior(exterior: H.geo.LineString): void;

            /**
             * To specify whether this polygon covers the North or the South Pole.
             * This information is only needed for very special polygons that are defined as a line string around the world on longitude axis (for example along the coast of the Antarctic).
             * In such cases, an additional information is needed to know if the southern part of the Earth (Antarctic) or the northern part (anything except Antarctic) should be covered.
             * @param direction - The direction to set.
             */
            setPoleCovering(direction: H.geo.Polygon.Direction): H.geo.Polygon;

            /**
             * Applies a splice-operation on the list of interior rings of the polygon.
             * @param opt_index - The index at which to start changing the list, defaults to 0.
             * @param opt_deleteCount - The number of interior rings to remove, defaults to Infinity.
             * @param var_args - repeatable, The interior rings to insert.
             */
            spliceInteriors(opt_index?: number, opt_deleteCount?: number, ...var_args: H.geo.LineString[]): H.geo.LineString[];
        }

        namespace Polygon {
            /**
             * {@link https://developer.here.com/documentation/maps/api_reference/H.geo.Polygon.html#.Direction}
             */
            interface Direction {
                NORTH: number;
                SOUTH: number;
            }
        }

        class MultiPolygon extends H.geo.MultiGeometry<H.geo.Polygon> { }

        class MultiPoint extends H.geo.MultiGeometry<H.geo.Point> { }
    }

    /***** lang *****/

    /***** map *****/
    namespace map {
        /**
         * This class represents marker, which offers a means of identifying a location on the map with an icon.
         */
        abstract class AbstractMarker extends H.map.Object {
            /**
             * Constructor
             * @param position {H.geo.IPoint} - The location of this marker
             * @param opt_options {H.map.AbstractMarker.Options=} - The values to initialize this marker
             */
            constructor(position: H.geo.IPoint, opt_options?: H.map.AbstractMarker.Options);

            /**
             * This method returns this marker's current position.
             * @returns {H.geo.Point} - current marker geo position
             */
            getGeometry(): H.geo.Point | H.geo.MultiPoint;

            /**
             * This method sets the marker's current position.
             * @param position {H.geo.IPoint}
             * @returns {H.map.AbstractMarker} - the marker itself
             */
            setGeometry(position: H.geo.IPoint | H.geo.MultiPoint): H.map.AbstractMarker;

            /**
             * Returns this marker's current icon.
             * @returns {!(H.map.Icon | H.map.DomIcon)}
             */
            getIcon(): (H.map.Icon | H.map.DomIcon);

            /**
             * Sets the marker's current icon.
             * @param icon {!(H.map.Icon | H.map.DomIcon)} - The new marker icon
             * @returns {H.map.AbstractMarker} - the marker itself
             */
            setIcon(icon: (H.map.Icon | H.map.DomIcon)): H.map.AbstractMarker;

            /**
             * @property draggable
             * @description This property ensure that the marker can receive drag events.
             */
            draggable?: boolean | undefined;
        }

        namespace AbstractMarker {
            /**
             * Options used to initialize a AbstractMarker
             * @property min {number=} - The minimum zoom level for which the object is visible, default is -Infinity
             * @property max {number=} - The maximum zoom level for which the object is visible, default is Infinity
             * @property visibility {boolean=} - Indicates whether the map object is visible at all, default is true.
             * @property zIndex {number=} - The z-index value of the map object, default is 0
             * @property provider {(H.map.provider.Provider | null)=} - The provider of this object.
             * This property is only needed if a customized Implementation of ObjectProvider wants to instantiate an object.
             * @property icon {(H.map.Icon | H.map.DomIcon)=} - The icon to use for the visual representation, if omitted a default icon is used.
             * @property data {*} - Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData.
             */
            interface Options {
                min?: number | undefined;
                max?: number | undefined;
                visibility?: boolean | undefined;
                zIndex?: number | undefined;
                provider?: H.map.provider.Provider | undefined;
                icon?: H.map.Icon | H.map.DomIcon | undefined;
                data?: any;
            }
        }

        /**
         * This class represents style attributes for arrows to be rendered along a polyline. A ArrowStyle instance is always treated as immutable to avoid inconstiencies and must not modified.
         */
        class ArrowStyle {
            /**
             * Constructor
             * @param opt_options {(H.map.ArrowStyle | H.map.ArrowStyle.Options)=}
             */
            constructor(opt_options?: (H.map.ArrowStyle | H.map.ArrowStyle.Options));

            /**
             * This method checks value-equality with another arrow style.
             * @param other {(H.map.ArrowStyle | H.map.ArrowStyle.Options)} - the arrow style to compare with
             * @returns {boolean} - true if the arrow styles are value-equal, otherwise false
             */
            equals(other: (H.map.ArrowStyle | H.map.ArrowStyle.Options)): boolean;
        }

        namespace ArrowStyle {
            /**
             * An object type to specify the style of arrows to render along a polyline
             * @property fillColor {string=} - The CSS color value used to fill the arrow shapes. If omitted or the value evaluates to false it defaults to "rgba(255, 255, 255, 0.75)"
             * @property width {number=} - The width of the arrow shape. The value is taken as a factor of the width of the line, where the arrow description is applied.
             * If omitted or the value is <= 0 it defaults to 1.2
             * @property length {number=} - The length of the arrow shapes. The value is taken as a factor of the width of the line at the end of which the arrow is drawn.
             * If omitted or the value is <= 0 it defaults to 1.6
             * @property frequency {number=} - The frequency of arrow shapes. The value is taken as factor of the length of the arrow. A value of 1 results in gapless arrows.
             * If omitted or the value is false it defaults to 5
             */
            interface Options {
                fillColor?: string | undefined;
                width?: number | undefined;
                length?: number | undefined;
                frequency?: number | undefined;
            }
        }

        /**
         * A Polygon with a circular shape.
         */
        class Circle extends H.map.Polygon {
            /**
             * Constructor
             * @param center {H.geo.IPoint} - The geographical coordinates of the circle's center
             * @param radius {number} - The radius of the circle in meters
             * @param opt_options {H.map.Circle.Options=} - An object that specifies circle options and their initial values (among these, precision has a significant impact on the shape of the circle
             */
            constructor(center: H.geo.IPoint, radius: number, opt_options?: H.map.Circle.Options);

            /**
             * To set the geographical center point of this circle. If the specified center is an instance of H.geo.Point you must not modify this Point instance without calling setCenter
             * immediately afterwards.
             * @param center {H.geo.IPoint}
             */
            setCenter(center: H.geo.IPoint): void;

            /**
             * To get the center point of this circle You must not modify the returned Point instance without calling setCenter immediately afterwards.
             * @returns {H.geo.Point}
             */
            getCenter(): H.geo.Point;

            /**
             * To set the length of the radius of the circle in meters. The value is clamped to the of {@code[0 ... 20015089.27787877]} (half WGS84 mean circumference)
             * @param radius {number}
             */
            setRadius(radius: number): void;

            /**
             * To get the length of the radius of the circle in meters.
             * @returns {number}
             */
            getRadius(): number;

            /**
             * To set the precision of this circle {@see H.map.Circle.Options#precision}
             * @param precision {number}
             */
            setPrecision(precision: number): void;

            /**
             * To get the precision value of this circle
             * @returns {number}
             */
            getPrecision(): number;
        }

        namespace Circle {
            /**
             * @property style {H.map.SpatialStyle=} - the style to be used when tracing the polyline
             * @property visibility {boolean=} - An optional boolean value indicating whether this map object is visible, default is true
             * @property precision {number=} - The precision of a circle as a number of segments to be used when rendering the circle.
             * The value is clamped to the range between [4 ... 360], where 60 is
             * the default. Note that the lower the value the more angular and the less circle-like the shape appears and, conversely, the higher the value the smoother and more rounded the result.
             * Thus, starting at the extreme low end of the possible values, 4 produces a square, 6 a hexagon, while 30 results in a circle-like shape, although it appears increasingly angular as
             * the zoom level increases (as you zoom in), and finally 360 produces a smooth circle.
             * @property zIndex {number=} - The z-index value of the circle, default is 0
             * @property min {number=} - The minimum zoom level for which the circle is visible, default is -Infinity
             * @property max {number=} - The maximum zoom level for which the circle is visible, default is Infinity
             * @property provider {(H.map.provider.Provider | null)=} - The provider of this object.
             * This property is only needed if a customized Implementation of ObjectProvider wants to instantiate an object.
             * @property data {*} - Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData
             */
            interface Options {
                style?: H.map.SpatialStyle | H.map.SpatialStyle.Options | undefined;
                visibility?: boolean | undefined;
                precision?: number | undefined;
                zIndex?: number | undefined;
                min?: number | undefined;
                max?: number | undefined;
                provider?: H.map.provider.Provider | undefined;
                data?: any;
            }
        }

        /**
         * The class represents data model of the map. It holds list of layers that are rendered by map's RenderEngine.
         * The class listens to 'update' events from layers and dispatches them to the RenderEngine.
         */
        class DataModel extends H.util.OList {
            /**
             * Constructor
             * @param opt_layers {Array=} - array of layers to be added to the data model
             */
            constructor(opt_layers?: H.map.layer.Layer[]);
        }

        /**
         * A visual representation of the H.map.DomMarker.
         */
        class DomIcon {
            /**
             * Constructor
             * @param element {!(Element | string)} - The element or markup to use for this icon
             * @param opt_options {H.map.DomIcon.Options=}
             */
            constructor(element: (Element | string), opt_options?: H.map.DomIcon.Options);
        }

        namespace DomIcon {
            /**
             * Options used to initialize a DomIcon
             * @property onAttach {function(Element, H.map.DomIcon, H.map.DomMarker)=} - A callback which is invoked before a clone of the icon's element is appended and displayed on the map.
             * This callback can be used to setup the clone.
             * @property onDetach {function(Element, H.map.DomIcon, H.map.DomMarker)=} - A callback which is invoked after a clone of the icon's element is removed from the map.
             * This callback can be used to clean up the clone.
             */
            interface Options {
                onAttach?(el: Element, icon: H.map.DomIcon, marker: H.map.DomMarker): void;

                onDetach?(el: Element, icon: H.map.DomIcon, marker: H.map.DomMarker): void;
            }
        }

        /**
         * A marker with a visual representation in the form of a full styleable and scripteable DOM element. DomMarker are predestinated if small amounts of markers with dynamic styled and/or
         * scripted icons should be displayed om the map (e.g. animated interactive SVG).
         */
        class DomMarker extends H.map.AbstractMarker {
            /**
             * Constructor
             * @param position {H.geo.IPoint | H.geo.MultiPoint}
             * @param opt_options {H.map.DomMarker.Options=}
             */
            constructor(position: H.geo.IPoint | H.geo.MultiPoint, opt_options?: H.map.DomMarker.Options);
        }

        namespace DomMarker {
            /**
             * Options used to initialize a DomMarker
             * @property min {number=} - The minimum zoom level for which the object is visible, default is -Infinity
             * @property max {number=} - The maximum zoom level for which the object is visible, default is Infinity
             * @property visibility {boolean=} - Indicates whether the map object is visible at all, default is true.
             * @property zIndex {number=} - The z-index value of the map object, default is 0
             * @property provider {(H.map.provider.Provider | null)=} - The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to
             * instantiate an object.
             * @property icon {H.map.DomIcon=} - The icon to use for the visual representation, if omitted a default icon is used.
             * @property data {*} - Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData
             */
            interface Options {
                min?: number | undefined;
                max?: number | undefined;
                visibility?: boolean | undefined;
                zIndex?: number | undefined;
                provider?: H.map.provider.Provider | undefined;
                icon?: H.map.DomIcon | undefined;
                data?: any;
            }
        }

        /**
         * This class represents a spatial shape in geographic space. It is defined by a path containing the vertices of the shape (lat, lng, alt values).
         */
        class GeoShape extends H.map.Spatial {
            /**
             * Constructor
             * @param isClosed {boolean} - Indicates whether this geographical shape is closed (a polygon)
             * @param options {H.map.Spatial.Options} - The options to apply
             */
            constructor(isClosed: boolean, options: H.map.Spatial.Options);

            /**
             * This method returns the bounding rectangle for this object. The rectangle is the smallest rectangle which encloses all points of the spatial object.
             * @returns {H.geo.Rect}
             */
            getBoundingBox(): H.geo.Rect;
        }

        /**
         * This class represents a map object which can contain other map objects. It's visibility, zIndex and object-order influences the contained map objects
         */
        class Group extends H.map.Object {
            /**
             * Constructor
             * @param opt_options {H.map.Group.Options=} - an optional object containing initialization values
             */
            constructor(opt_options?: H.map.Group.Options);

            /**
             *
             * @param callback {function(!H.map.Object, number, !H.map.Group)}
             * @param opt_recursive {boolean=} - Indicates whether sub groups should be traversed recursively
             * @param opt_context {*=} - The context to use as "this" within the callback
             */
            forEach(callback: (object: H.map.Object, n: number, group: H.map.Group) => void, opt_recursive?: boolean, opt_context?: any): void;

            /**
             * To get a list of all objects of this group. On groups with many chilren this method can cause a higher memory and CPU consumption. Alternatively you case use H.map.Group#forEach
             * @param opt_recursive {boolean=} - Indicates whether objects in sub-groups are also collected .
             * @returns {!Array<!H.map.Object>}
             */
            getObjects(opt_recursive?: boolean): H.map.Object[];

            /**
             * Method returns the bounding rectangle for the group. The rectangle is the smallest rectangle that covers all objects. If group doesn't contains objects method returns null.
             * @returns {H.geo.Rect} - geo ractangle that covers all objects in the group
             */
            getBoundingBox(): H.geo.Rect;

            /**
             * To add an object to this group.
             * @param object {!H.map.Object}
             * @returns {!H.map.Object} - a reference to the appended object
             */
            addObject(object: H.map.Object): H.map.Object;

            /**
             * Appends a list of objects to this group
             * @param objects {Array<!H.map.Object>}
             */
            addObjects(objects: H.map.Object[]): void;

            /**
             * Removes an object from this group.
             * @param object {!H.map.Object} - The object to remove
             * @returns {!H.map.Object} - a reference to the removed object
             */
            removeObject(object: H.map.Object): H.map.Object;

            /**
             * Removes objects from this group.
             * @param objects {!Array<!H.map.Object>} - The list of objects to remove
             */
            removeObjects(objects: H.map.Object[]): void;

            /**
             * Method removes all objects from the group.
             */
            removeAll(): void;
        }

        namespace Group {
            /**
             * Options used to initialize a group
             * @property min {number=} - The minimum zoom level for which the object is visible, default is -Infinity
             * @property max {number=} - The maximum zoom level for which the object is visible, default is Infinity
             * @property visibility {boolean=} - Indicates whether the map object is visible, default is true
             * @property zIndex {number=} - The z-index value of the map object, default is 0
             * @property provider {(H.map.provider.Provider | null)=} - The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate
             * an object.
             * @property data {*} - Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData.
             * @property objects {Array<H.map.Object>=} - A list of map objects to add initially to this group.
             */
            interface Options {
                min?: number | undefined;
                max?: number | undefined;
                visibility?: boolean | undefined;
                zIndex?: number | undefined;
                provider?: H.map.provider.Provider | undefined;
                data?: any;
                objects?: H.map.Object[] | undefined;
            }
        }

        /**
         * This class represents an area that objects, like a marker, occupies in the screen space, meaning that object can be probed and returned by H.Map@getObjectsAt method.
         */
        class HitArea {
            /**
             * Constructor
             * @param shapeType {H.map.HitArea.ShapeType} - The shape type of the HitArea
             * @param opt_values {Array<number>=} - The type-dependent values to define the shape of the hit area. The format for the different types are:
             */
            constructor(shapeType: H.map.HitArea.ShapeType, opt_values?: number[]);
        }

        namespace HitArea {
            /**
             * Enumeration represents possible shape types that HitArea can have.
             */
            enum ShapeType {
                NONE,
                RECT,
                CIRCLE,
                POLYGON,
            }
        }

        /**
         * Control interface defines method which are used for direct view or camera manipulation
         */
        interface IControl {
            /**
             * This method starts control action for camera. This action allows to control camera animation and movement according to provided values in the H.map.IControl#control function
             * @param opt_kinetics {H.util.kinetics.IKinetics=} - kinetics settings
             * @param opt_atX {number=} - control starts at x screen coordinate
             * @param opt_atY {number=} - control starts at y screen coordinate
             */
            startControl(opt_kinetics?: H.util.kinetics.IKinetics, opt_atX?: number, opt_atY?: number): void;

            /**
             * This method triggers single control action on engine. This will trigger an animation which will start modification of the view's or camera's properties according to values begin set.
             * Modification will occur at every frame. The speed values are measure by 'levels per frame' were 1 level cooresponds to a distance to next zoom level.
             * @param moveX {number} - moves the view/cam in right/left direction
             * @param moveY {number} - moves the view/cam in bottom/top direction
             * @param moveZ {number} - moves the view/cam in depth direction (changes zoom level)
             * @param angleX {number} - rotates cam over x-axis
             * @param angleY {number} - rotates cam over y-axis
             * @param angleZ {number} - rotates cam over z-axis
             * @param zoom {number} - changes current zoom level (for view works as moveZ)
             * @param opt_timestamp {number=}
             */
            control(moveX: number, moveY: number, moveZ: number, angleX: number, angleY: number, angleZ: number, zoom: number, opt_timestamp?: number): void;

            /**
             * This method ends current control, which will stop ongoing animation triggered by the startControl method. This method can prevent kinetics as well as it can adjust the final view if
             * the adjust function is being passed.
             * @param opt_preventKinetics {boolean=} - if set to true will prevent kinetics animation
             * @param opt_adjustView {function(H.map.ViewModel.ILookAtData)=} - user defined function which can adjust the final view this function takes last requestedData from the view model and
             * should return a modified H.map.ViewModel.CameraData which will be set as the final view
             */
            endControl(opt_preventKinetics?: boolean, opt_adjustView?: (data: H.map.ViewModel.ILookAtData) => void): void;
        }

        /**
         * An interface to specify a copyright note
         * @property label {string} - A short textual representation of the copyright note, e.g. "DigitalGlobe 2009"
         * @property alt {string} - A detailed textual representation of the copyright note, e.g. "copyright 2009 DigitalGlobe, Inc."
         */
        interface ICopyright {
            label: string;
            alt: string;
        }

        /**
         * Interface describes interaction with the view port. Interaction will reflect view change depending on the interaction coordinates passed and the modifiers which specify the type of
         * interaction.
         */
        interface IInteraction {
            /**
             * This method starts the interaction with the view port. Should be called every time when new interaction is started i.e mouse grab, or touch start.
             * @param modifiers {number} - a bitmask which specifies what operations should performed during every interaction
             * @param opt_kinetics {H.util.kinetics.IKinetics=} - specifies kinetic move at the end of interaction
             */
            startInteraction(modifiers: H.math.BitMask, opt_kinetics?: H.util.kinetics.IKinetics): void;

            /**
             * This method resolves direct screen (view port) interaction. This function will modify the current view according to values passed in.
             * @param x {number} - viewport x coordinate
             * @param y {number} - viewport y coordinate
             * @param opt_bx {number=} - x coordinate for second pointer/touch if present
             * @param opt_by {number=} - y coordinate for secong pointer/touch if present
             * @param opt_timestamp {number=} - known timestamp which should be passed
             */
            interaction(x: number, y: number, opt_bx?: number, opt_by?: number, opt_timestamp?: number): void;

            /**
             * This method ends interaction and applies kinetic movement if defined by using startInteraction method
             * @param opt_preventKinetics {boolean=} - if set to true will prevent kinetics behaviour at the end of interaction
             */
            endInteraction(opt_preventKinetics?: boolean): void;
        }

        /**
         * A visual representation of the H.map.Marker.
         */
        class Icon {
            /**
             * Constructor
             * @param bitmap {!(string | HTMLImageElement | HTMLCanvasElement)} - Either an image URL, a SVG markup, an image or a canvas.
             * @param opt_options {H.map.Icon.Options=}
             */
            constructor(bitmap: (string | HTMLImageElement | HTMLCanvasElement), opt_options?: H.map.Icon.Options);

            /**
             * Returns the icon's bitmap loading state
             * @returns {H.map.Icon.prototype.State}
             */
            getState(): H.map.Icon.State;

            /**
             * Returns the bitmap of this icon or null if the bitmap is not ready yet (see H.map.Icon#getState)
             * @returns {?(HTMLImageElement | HTMLCanvasElement)}
             */
            getBitmap(): (HTMLImageElement | HTMLCanvasElement);

            /**
             * Returns the size of this icon or null if a size wasn't specified in the constructor's options and the state of this icon is not H.map.Icon.prototype.State.READY
             * @returns {?H.math.Size}
             */
            getSize(): H.math.Size;

            /**
             * Returns the anchor point of this icon or null if an anchor wasn't specified in the constructor's options and the state of this icon is not H.map.Icon.prototype.State.READY.
             * @returns {?H.math.Point}
             */
            getAnchor(): H.math.Point;

            /**
             * Returns the hit area of the icon.
             * @returns {?H.map.HitArea} - icon's anchor point
             */
            getHitArea(): H.map.HitArea;

            /**
             * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it.
             * Otherwise memory leak is possible.
             * @param type {string} - name of event
             * @param handler {Function} - event handler function
             * @param opt_capture {boolean=} - if set to true will listen in the capture phase (bubble otherwise)
             * @param opt_scope {Object=} - scope for the handler function
             */
            addEventListener(type: string, handler: () => void, opt_capture?: boolean, opt_scope?: {}): void;

            /**
             * This method will removed previously added listener from the event target
             * @param type {string} - name of event
             * @param handler {Function} - previously added event handler
             * @param opt_capture {boolean=} - if set to true will listen in the capture phase (bubble otherwise)
             * @param opt_scope {Object=} - scope for the handler function
             */
            removeEventListener(type: string, handler: () => void, opt_capture?: boolean, opt_scope?: {}): void;

            /**
             * This method will dispatch event on the event target object
             * @param evt {(H.util.Event | string)} - event object or event name
             */
            dispatchEvent(evt: (H.util.Event | string)): void;

            /**
             * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
             */
            dispose(): void;

            /**
             * This method adds callback which is triggered when the object is being disposed
             * @param callback {Function} - The callback function.
             * @param opt_scope {Object=} - An optional scope to call the callback in.
             */
            addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;
        }

        namespace Icon {
            /**
             * The state types of an Icon
             */
            enum State {
                ERROR,
                LOADING,
                READY,
            }

            /**
             * Options used to initialize a Icon
             * @property size {H.math.ISize=} - The icon's size in pixel, default is the bitmap's natural size
             * @property anchor {H.math.IPoint=} - The anchorage point in pixel, default is bottom-center
             * @property hitArea {H.map.HitArea=} - The area to use for hit detection, default is the whole rectangular area
             * @property asCanvas {H.map.HitArea=} - Indicates whether a non canvas bitmap is converted into a canvas, default is true. The conversion improves the rendering performance but it could
             * also cause a higher memory consumption.
             * @property crossOrigin {boolean} - Specifies whether to use anonynous Cross-Origin Resource Sharing (CORS) when fetching an image to prevent resulting canvas from tainting, default is
             * false. The option is ignored by IE9-10.
             */
            interface Options {
                size?: H.math.ISize | number | undefined;
                anchor?: H.math.IPoint | undefined;
                hitArea?: H.map.HitArea | undefined;
                asCanvas?: H.map.HitArea | undefined;
                crossOrigin: boolean;
            }
        }

        /**
         * This class encapsulates the brand, copyright and terms of use elements on the map.
         */
        class Imprint {
            /**
             * Constructor
             * @param map {H.Map} - The map where the imprint is attached to
             * @param opt_options {H.map.Imprint.Options=} - The options to style the imprint
             */
            constructor(map: H.Map, opt_options?: H.map.Imprint.Options);

            /**
             * To set the imprint options. If no opt_options argument is defined then all values are reset to their defaults.
             * @param opt_options {H.map.Imprint.Options=} - The options to style the imprint
             */
            setOptions(opt_options?: H.map.Imprint.Options): void;

            /**
             * This method retrieves the copyright string for the current view of the map.
             * @returns {string} - The copyright string for the current map view
             */
            getCopyrights(): string;

            /**
             * To get the CSS style declaration of the imprint DOM element
             * @returns {CSSStyleDeclaration}
             */
            getStyle(): CSSStyleDeclaration;

            /**
             * Method adds a callback which will be triggered when the object is disposed
             * @param callback {Function}
             * @param opt_scope {Object=}
             */
            addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;

            /**
             * This method is used to capture the element view
             * @param canvas {HTMLCanvasElement} - HTML Canvas element to draw the view of the capturable element
             * @param pixelRatio {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
             * @param callback {function(HTMLCanvasElement=)} - Callback function to call once result of the capturing is ready
             * @param opt_errback {function(string)=} - Callback function to call if error occurred during capturing
             */
            capture(canvas: HTMLCanvasElement, pixelRatio: number, callback?: (canvas: HTMLCanvasElement) => void, opt_errback?: (s: string) => void): void;
        }

        namespace Imprint {
            /**
             * Options to style an imprint
             * @property invert {boolean=} - Indicates whether the logo is inverted. If omitted the current value remains, default is false.
             * @property font {string=} - The font of the text. If omitted the current value remains, default is &quot;11px Arial,sans-serif&quot;.
             * @property href {string=} - The URL of the &quot;Terms of use&quot; link. If omitted the current value remains, default is &quot;http://here.com/terms&quot;.
             */
            interface Options {
                invert?: boolean | undefined;
                font?: string | undefined;
                href?: string | undefined;
            }
        }

        /**
         * A marker with a visual representation in the form of a bitmap icon. Marker are predestinated if large amounts of markers with static icons should be displayed om the map.
         */
        class Marker extends H.map.AbstractMarker {
            /**
             * Constructor
             * @param position {H.geo.IPoint} - The location of this marker
             * @param opt_options {H.map.Marker.Options=} - The values to initialize this marker
             */
            constructor(position: H.geo.IPoint, opt_options?: H.map.Marker.Options);
        }

        namespace Marker {
            /**
             * Options used to initialize a Marker
             * @property min {number=} - The minimum zoom level for which the object is visible, default is -Infinity
             * @property max {number=} - The maximum zoom level for which the object is visible, default is Infinity
             * @property visibility {boolean=} - Indicates whether the map object is visible at all, default is true.
             * @property zIndex {number=} - The z-index value of the map object, default is 0
             * @property provider {(H.map.provider.Provider | null)=} - The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate
             * an object.
             * @property icon {H.map.Icon=} - The icon to use for the visual representation, if omitted a default icon is used.
             * @property data {*} - Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData.
             */
            interface Options {
                min?: number | undefined;
                max?: number | undefined;
                visibility?: boolean | undefined;
                zIndex?: number | undefined;
                provider?: H.map.provider.Provider | undefined;
                icon?: H.map.Icon | undefined;
                data?: any;
            }
        }

        /**
         * This class represents the abstract base class for map objects such as polylines, polygons, markers, groups etc.
         */
        class Object extends H.util.EventTarget {
            /**
             * Constructor
             * @param opt_options {H.map.Object.Options=} - The values to initialize this object
             */
            constructor(opt_options?: H.map.Object.Options);

            /**
             * Returns the ID of this object.
             * @returns {*}
             */
            getId(): any;

            /**
             * Sets the visibility of this object.
             * @param opt_visibility {boolean=} - Indicates whether this map object should be visible.
             * @returns {H.map.Object} - returns this object
             */
            setVisibility(opt_visibility?: boolean): H.map.Object;

            /**
             * Returns the visibility of this object.
             * @param opt_effective {boolean=} - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
             * @returns {boolean}
             */
            getVisibility(opt_effective?: boolean): boolean;

            /**
             * Returns the z-index of this object.
             * @returns {(number | undefined)}
             */
            getZIndex(): number | void;

            /**
             * To set the-index of this object.
             * @param zIndex {(number | undefined)}
             * @returns {H.map.Object} - returns this object
             */
            setZIndex(zIndex?: number): H.map.Object;

            /**
             * Compares two objects regarding their z-order, useful to sort a list of objects via Array's sort() method
             * @param first {H.map.Object} - The first object to compare
             * @param second {H.map.Object} - The second object to compare
             * @returns {number} - If less then 0 the first object has a lower z-order. If equal 0 booth objects have the same z-order. If greater then 0 the first object has a higher z-order.
             */
            static compareZOrder(first: H.map.Object, second: H.map.Object): number;

            /**
             * Returns the parent group which contains this object or null if the object is not contained by any group.
             * @returns {?H.map.Group}
             */
            getParentGroup(): H.map.Group;

            /**
             * The root object in which this object is attached or the object itself.
             * @returns {!H.map.Object}
             */
            getRootGroup(): H.map.Object;

            /**
             * Checks whether the given object is an inclusive descendant of this object
             * @param object {*} - The object that's being compared against.
             * @returns {boolean}
             */
            contains(object: any): boolean;

            /**
             * The current provider of this object
             * @returns {?H.map.provider.ObjectProvider} - the current provider
             */
            getProvider(): H.map.provider.ObjectProvider;

            /**
             * Returns the invalidations of this object
             * @returns {H.map.provider.Invalidations} - an invalidation object
             */
            getInvalidations(): H.map.provider.Invalidations;

            /**
             * This method invalidates this map object.
             * @param flags {H.math.BitMask} - The flags indicating the types of occurred changes
             * @returns {boolean} - indicates whether a validtion was executed (only if the object has a provider)
             */
            invalidate(flags: H.math.BitMask): boolean;

            /**
             * This method returns previously stored arbitrary data from this object.
             * @returns {*} - the previously stored data or undefined if not data was stored.
             */
            getData(): any;

            /**
             * This method stores arbitrary data with this map object
             * @param data {*} - the data to be stored
             * @returns {H.map.Object} - returns this map object instance
             */
            setData(data: any): H.map.Object;

            /**
             * This method will dispatch event on the event target object
             * @param evt {(H.util.Event | string)} - event object or event name
             */
            dispatchEvent(evt: (H.util.Event | string)): void;

            /**
             * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
             */
            dispose(): void;

            /**
             * This method adds callback which is triggered when the object is being disposed
             * @param callback {Function} - The callback function.
             * @param opt_scope {Object=} - An optional scope to call the callback in.
             */
            addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;
        }

        namespace Object {
            /**
             * Options used to initialize a map object
             * @property min {number=} - The minimum zoom level for which the object is visible, default is -Infinity
             * @property max {number=} - The maximum zoom level for which the object is visible, default is Infinity
             * @property visibility {boolean=} - Indicates whether the map object is visible at all, default is true
             * @property zIndex {number=} - The z-index value of the map object, default is 0
             * @property provider {(H.map.provider.Provider | null)=} - The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate
             * an object.
             * @property data {*} - Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData.
             */
            interface Options {
                min?: number | undefined;
                max?: number | undefined;
                visibility?: boolean | undefined;
                zIndex?: number | undefined;
                provider?: H.map.provider.Provider | undefined;
                data?: any;
            }

            /**
             * The major types of map objects
             */
            enum Type {
                /** spatial object */
                ANY,
                /** spatial object */
                OVERLAY,
                /** spatial object */
                SPATIAL,
                /** Marker object */
                MARKER,
                /** DomMarker object */
                DOM_MARKER,
                /** DomMarker object */
                GROUP,
            }
        }

        /**
         * This class represents an overlay, which offers a bitmap that covers a geographical reactangular area on the map.
         */
        class Overlay extends H.map.Object {
            /**
             * Constructor
             * @param bounds {H.geo.Rect} - The geographical reactangular area of this overlay
             * @param bitmap {!(string | HTMLImageElement | HTMLCanvasElement)} - Either an image URL, a SVG markup, an image or a canvas.
             * @param opt_options {H.map.Overlay.Options=} - Optional values values to initialize this overlay
             */
            constructor(bounds: H.geo.Rect, bitmap: (string | HTMLImageElement | HTMLCanvasElement), opt_options?: H.map.Overlay.Options);

            /**
             * This method returns this overlay's current bounds.
             * @returns {H.geo.Rect}
             */
            getBounds(): H.geo.Rect;

            /**
             * This method sets the overlay's current bounds.
             * @param bounds {H.geo.Rect}
             * @returns {H.map.Overlay} - the overlay itself
             */
            setBounds(bounds: H.geo.Rect): H.map.Overlay;

            /**
             * Returns this overlay's current bitmap.
             * @returns {?(HTMLImageElement | HTMLCanvasElement)} - the bitmap of this Overlay or null if it isn't ready yet
             */
            getBitmap(): (HTMLImageElement | HTMLCanvasElement);

            /**
             * Sets the overlay's current bitmap.
             * @param bitmap {!(string | HTMLImageElement | HTMLCanvasElement)} - Either an image URL, a SVG markup, an image or a canvas.
             * @returns {H.map.Overlay} - the overlay itself
             */
            setBitmap(bitmap: (string | HTMLImageElement | HTMLCanvasElement)): H.map.Overlay;

            /**
             * Returns this overlay's current opacity.
             * @returns {number}
             */
            getOpacity(): number;

            /**
             * Sets the overlay's current opacity.
             * @param opacity {number} - The opacity in range from 0 (transparent) to 1 (opaque).
             * @returns {H.map.Overlay} - the overlay itself
             */
            setOpacity(opacity: number): H.map.Overlay;
        }

        namespace Overlay {
            /**
             * Options used to initialize an Overlay
             * @property min {number=} - The minimum zoom level for which the object is visible, default is -Infinity
             * @property max {number=} - The maximum zoom level for which the object is visible, default is Infinity
             * @property opacity {number=} - The opacity of the object in range from 0 (transparent) to 1 (opaque), default is 1.
             * @property visibility {boolean=} - Indicates whether the map object is visible at all, default is true.
             * @property zIndex {number=} - The z-index value of the map object, default is 0
             * @property provider {(H.map.provider.Provider | null)=} - The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate
             * an object.
             * @property data {*} - Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData.
             */
            interface Options {
                min?: number | undefined;
                max?: number | undefined;
                opacity?: number | undefined;
                visibility?: boolean | undefined;
                zIndex?: number | undefined;
                provider?: H.map.provider.Provider | undefined;
                data?: any;
            }
        }

        /**
         * This class represents a polygon in geo-space. It is defined by a strip containing the vertices of a geo shape object (lat, lng, alt values) and a pen to use when rendering the polyline.
         * Polygon represents a closed plane defined by the list of verticies, projected on the map display. List of vericies which define the polygon are is a list of geo coordinates encapsulated
         * by the strip object H.geo.Strip
         */
        class Polygon extends H.map.GeoShape {
            /**
             * Constructor
             * @param geometry {H.geo.LineString | H.geo.Polygon | H.geo.MultiPolygon}
             * The geometry that defines the surface of the polygon. H.geo.LineString is interpreted as an exterior ring of H.geo.Polygon object.
             * @param opt_options {H.map.Spatial.Options=} - optional initialization parameters
             */
            constructor(geometry: H.geo.LineString | H.geo.Polygon | H.geo.MultiPolygon, opt_options?: H.map.Polygon.Options);

            /**
             * To set the indicator whether this polygon covers the north pole. It's needed for Polygons whose strip is defined as lines arround the world on longitude axis (for example a circle whose
             * center is one of the poles). In this case a additional information is needed to know if the southern or northern part of the world should be covered by the poygon.
             * @param flag {boolean} - A value of true means it covers the north pole, false means south pole
             * @returns {H.map.Polygon} - the Polygon instance itself
             */
            setNorthPoleCovering(flag: boolean): H.map.Polygon;

            /**
             * See H.map.Polygon#setNorthPoleCovering
             * @returns {boolean}
             */
            getNorthPoleCovering(): boolean;

            /**
             * To set the polygon's geometry. If the given geometry is modified afterwards, it must be set via setGeometry again to not violate the integrity of the polygon.
             * @param geometry
             */
            setGeometry(geometry: H.geo.Polygon | H.geo.MultiPolygon): H.map.Polygon;

            /**
             * To obtain the polygon's geometry. If you modify the obtained geometry, you must call setGeometry afterwards to not violate the integrity of the polygon.
             */
            getGeometry(): H.geo.Polygon | H.geo.MultiPolygon;
        }

        namespace Polygon {
            /**
             * @property style {H.map.SpatialStyle | H.map.SpatialStyle.Options} - The style to be used when tracing the spatial object.
             * @property arrows {H.map.ArrowStyle | H.map.ArrowStyle.Options} - The arrows style to be used when rendering the spatial object.
             * @property visibility {boolean}
             * Indicates whether the map object is visible, the default is true A map object is only treated as visible, if it self and all of its nesting parent groups are visible.
             */
            interface Options {
                style?: H.map.SpatialStyle | H.map.SpatialStyle.Options | undefined;
                arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options | undefined;
                visibility?: boolean | undefined;
                volatility?: boolean | undefined;
                zIndex?: number | undefined;
                min?: number | undefined;
                max?: number | undefined;
                provider?: H.map.provider.Provider | null | undefined;
                data?: any;
                extrusion?: number | undefined;
                elevation?: number | undefined;
            }
        }

        /**
         * This class represents a polyline in geo-space. It is defined by a path containing the vertices of a polyline (lat, lng, alt values) and a pen to use when tracing the path on the map.
         */
        class Polyline extends H.map.GeoShape {
            /**
             * Constructor
             * @param geometry {H.geo.LineString | H.geo.MultiLineString} - The geometry that defines the line segments of the polyline
             * @param opt_options {H.map.Polyline.Options=} - optional initialization parameters
             */
            constructor(geometry: H.geo.LineString | H.geo.MultiLineString, opt_options?: H.map.Polyline.Options);

            /**
             * To set the polyline's geometry. If the given geometry is modified afterwards, it must be set again via setGeometry(geometry) to not violate the integrity of the polyline.
             * @param geometry {H.geo.LineString | H.geo.MultiLineString} - the geometry to set.
             * @return {H.map.Polyline} - The polyline instance itself.
             */
            setGeometry(geometry: H.geo.LineString | H.geo.MultiLineString): H.map.Polyline;

            /**
             * To obtain the polyline's geometry. If you modify the obtained geometry, you must call setGeometry(geometry) afterwards to not violate the integrity of the polyline.
             * @return {H.geo.LineString | H.geo.MultiLineString}
             */
            getGeometry(): H.geo.LineString | H.geo.MultiLineString;

            /**
             * Clips the geometry of the Polyline to a rectangular area
             * @param geoRect {H.geo.Rect} - The rectangle to clip against.
             * @returns {Array<Array<number>>} - a list of geometry segments that intersecting the given rectangle.
             * Each segment is represented as a list of alternating latitude and longitude coordinates that describes a line string.
             */
            clip(geoRect: H.geo.Rect): number[][];

            /**
             * Returns the smallest rectangle which encloses the whole geometry of the GeoShape.
             * @return {H.geo.Rect}
             */
            getBounds(): H.geo.Rect;

            /**
             * This method retrieves the drawing style of the given spatial object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
             * @return {H.map.SpatialStyle} - The given spatial object
             */
            getStyle(): H.map.SpatialStyle;

            /**
             * This method sets the drawing style of the given spatial object. If the argument opt_style is an instance of H.map.SpatialStyle,
             * it is treated as immutable and must not be modified afterwards to prevent inconsistencies!
             * @param opt_style {(H.map.SpatialStyle | H.map.SpatialStyle.Options)=} - The style to set. If it evaluates to a false, the H.map.SpatialStyle.DEFAULT_STYLE is used.
             * @return {H.map.Spatial} - The given spatial object
             */
            setStyle(opt_style?: H.map.SpatialStyle | H.map.SpatialStyle.Options): H.map.Spatial;

            /**
             * This method retrieves the arrow style of the given spatial object or undefined if the style is not defined.
             * The returned arrow style is treated as immutable and must not be modified afterwards to prevent inconsistencies!
             * @return {H.map.ArrowStyle} - An object encapsulating information about the arrow style or undefined if the arrow style is not defined.
             */
            getArrows(): H.map.ArrowStyle | undefined;

            /**
             * This method sets the arrow style of the given spatial object.
             * @param opt_arrows {(H.map.ArrowStyle | H.map.ArrowStyle.Options)=} - The arrow style to be applied
             * @return {H.map.Spatial} - The given spatial object
             */
            setArrows(opt_arrows?: H.map.ArrowStyle | H.map.ArrowStyle.Options): H.map.Spatial;

            /**
             * This method indicates whether this spatial object represents a closed shape
             * @return {boolean} - true if the given spatial object is a closed shape, false otherwise
             */
            isClosed(): boolean;

            /**
             * This method retrieves the ID of the given object.
             * @return {any} The identifier of the given object.
             */
            getId(): any;

            /**
             * This method sets the visibility of the given object.
             * @param opt_visibility {boolean=} - Indicates whether the map object should be visible.
             * @return {H.map.Object} - The given object
             */
            setVisibility(opt_visibility?: boolean): H.map.Object;

            /**
             * This method retrieves a value indicating the visibility of the given object.
             * @param opt_effective {boolean} - Indicates that the effective visibility is requested. In this case the visibility of all possible ancestor groups is also taken into account
             * @return {boolean} - A value indicating if the object is visible (true) or not false
             */
            getVisibility(opt_effective?: boolean): boolean;

            /**
             * This method retrieves the z-index of the given object.
             * @return {number} - A value reflecting the z-index of the given object.
             */
            getZIndex(): number | undefined;

            /**
             * This method sets the z-index of the given object.
             * @param zIndex {number | undefined} - A value indicating the new z-index
             * @return {H.map.Object} - The given object
             */
            setZIndex(zIndex: number | undefined): H.map.Object;

            /**
             * This method compares the rendering z-order of the given object with another object. (The 'given object' mean the object on which the method has been invoke.)
             * @param other {H.map.Object} -The map object with which to compare the given object.
             * @return {number} - A value lower than 0 indicates that the given object has a lower z-order. 0 indicates that both objects have the same z-order.
             * A value greater than 0, indicates that the given object has a higher z-order.
             */
            compareZOrder(other: H.map.Object): number;

            /**
             * This method retrieves the parent group which contains the given object or null if the object is not contained in any group.
             * @return {H.map.Group} - An object representing the containing group object or null if the given object is not contained in any group.
             */
            getParentGroup(): H.map.Group;

            /**
             * The root object to which the given object is attached or the object itself if it is not attached to another.
             * @return {H.map.Object} - An object representing the root group for the given object or the given object if it is not part of a group.
             */
            getRootGroup(): H.map.Object;

            /**
             * This method checks whether the received object is an inclusive descendant of the given object.
             * @param object {any} - The object to check.
             * @return {boolean} - true if the given object is contained in the given object, otherwise false
             */
            contains(object: any): boolean;

            /**
             * This method obtains the current provider of the given object
             * @return {H.map.provider.ObjectProvider} - An object representing the provider
             */
            getProvider(): H.map.provider.ObjectProvider;

            /**
             * This method retrieves the invalidation states for the given object.
             * @return {H.map.provider.Invalidations} - An object containing the invalidation states
             */
            getInvalidations(): H.map.provider.Invalidations;

            /**
             * This method invalidates the given map object.
             * @param flags {H.math.BitMask} - The flags indicating the types of changes to the given object
             * @return {boolean} - Indicates whether a validation was executed (only if the object has a provider)
             */
            invalidate(flags: H.math.BitMask): boolean;

            /**
             * This method retrieves previously stored arbitrary data from the given object.
             * @return {any} - The previously stored data or undefined if no data was stored.
             */
            getData(): any;

            /**
             * This method stores arbitrary data with the given map object.
             * @param data {any} - The data to be stored
             * @return {H.map.Object} - The given map object
             */
            setData(data: any): H.map.Object;

            /**
             * This method adds a listener for a specific event.
             * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
             * @param type {string} - The name of the event
             * @param handler {function()} - An event handler function
             * @param opt_capture {boolean=} - true indicates that the method should listen in the capture phase (bubble otherwise)
             * @param opt_scope {{}=} - An object defining the scope for the handler function
             */
            addEventListener(type: string, handler: () => void, opt_capture?: boolean, opt_scope?: {}): void;

            /**
             * This method removes a previously added listener from the EventTarget instance.
             * @param type {string} - The name of the event
             * @param handler {function()} - An event handler function
             * @param opt_capture {boolean=} - true indicates that the method should listen in the capture phase (bubble otherwise)
             * @param opt_scope {{}=} - An object defining the scope for the handler function
             */
            removeEventListener(type: string, handler: () => void, opt_capture?: boolean, opt_scope?: {}): void;

            /**
             * This method dispatches an event on the EventTarget object.
             * @param evt {H.util.Event | string} - An object representing the event or a string with the event name
             */
            dispatchEvent(evt: H.util.Event | string): void;

            /**
             * This method removes listeners from the given object.
             * Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
             */
            dispose(): void;

            /**
             * This method adds a callback which is triggered when the EventTarget object is being disposed.
             * @param callback {function()} - The callback function.
             * @param opt_scope {{}=} - An optional scope for the callback function
             */
            addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;
        }

        namespace Polyline {
            /**
             * Options which are used to initialize a polyline
             * @property style {(H.map.SpatialStyle | H.map.SpatialStyle.Options)=} - the style to be used when tracing the polyline
             * @property arrows {(H.map.ArrowStyle | H.map.ArrowStyle.Options)=} - The arrows style to be used when rendering the polyline.
             * @property visibility {boolean=} - An optional boolean value indicating whether this map object is visible, default is true
             * @property zIndex {number=} - The z-index value of the map object, default is 0
             * @property min {number=} - The minimum zoom level for which the object is visible, default is -Infinity
             * @property max {number=} - The maximum zoom level for which the object is visible, default is Infinity
             * @property provider {(H.map.provider.Provider | null)=} - The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate
             * an object.
             * @property data {*} - Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData
             */
            interface Options {
                style?: (H.map.SpatialStyle | H.map.SpatialStyle.Options) | undefined;
                arrows?: (H.map.ArrowStyle | H.map.ArrowStyle.Options) | undefined;
                visibility?: boolean | undefined;
                zIndex?: number | undefined;
                min?: number | undefined;
                max?: number | undefined;
                provider?: H.map.provider.Provider | undefined;
                data?: any;
            }
        }

        /**
         * A Polygon with a rectangular shape.
         */
        class Rect extends H.map.Polygon {
            /**
             * Constructor
             * @param boundingBox {H.geo.Rect} - The geographical bounding box for this rectangle
             * @param opt_options {H.map.Spatial.Options=}
             */
            constructor(boundingBox: H.geo.Rect, opt_options?: H.map.Spatial.Options);

            /**
             * To set the bounds of this rectangle.
             * @param bounds {H.geo.Rect}
             */
            setBoundingBox(bounds: H.geo.Rect): void;
        }

        /**
         * This class represents a spatial map object which provides its projected geometry.
         */
        class Spatial extends H.map.Object {
            /**
             * Constructor
             * @param isClosed {boolean} - Indicates whether this spatial object represents a closed shape
             * @param opt_options {H.map.Spatial.Options=} - The options to apply
             */
            constructor(isClosed: boolean, opt_options?: H.map.Spatial.Options);

            /**
             * To get the drawing style of this object. The returned style is treated as immutable and must not be modified afterwards to prevent inconsistancies!
             * @returns {H.map.SpatialStyle}
             */
            getStyle(): H.map.SpatialStyle;

            /**
             * To set the drawing style of this object. If the passed opt_style argument is an instance of H.map.SpatialStyle it is treated as immutable and must not be modified afterwards to prevent
             * inconsistancies!
             * @param opt_style {(H.map.SpatialStyle | H.map.SpatialStyle.Options)=} - The style to set. If it evaluates to a falsy the H.map.SpatialStyle.DEFAULT_STYLE is used.
             * @returns {H.map.Spatial} - the Spatial instance itself
             */
            setStyle(opt_style?: (H.map.SpatialStyle | H.map.SpatialStyle.Options)): H.map.Spatial;

            /**
             * To get the arrow style of this spatial object or undefined if no style is defined. A returned arrow style is treated as immutable and must not be modified afterwards to prevent
             * inconsistancies!
             * @returns {(H.map.ArrowStyle | undefined)}
             */
            getArrows(): H.map.ArrowStyle | void;

            /**
             * To set the arrow style of this object.
             * @param opt_arrows {(H.map.ArrowStyle | H.map.ArrowStyle.Options)=} - the arrow style to be applied
             * @returns {H.map.Spatial} - the Spatial instance itself
             */
            setArrows(opt_arrows?: (H.map.ArrowStyle | H.map.ArrowStyle.Options)): H.map.Spatial;

            /**
             * Indicates whether this spatial object represents a closed shape
             * @returns {boolean}
             */
            isClosed(): boolean;
        }

        namespace Spatial {
            /**
             * Data to used as rendering hint for a label
             * @property x {number} - The X coordinate of the first line's starting point
             * @property y {number} - The Y coordinate of the first line's base line
             * @property angle {number} - The clockwise rotation angle in radians
             * @property font {string} - The CSS font-family
             * @property size {number} - The CSS font-size
             * @property color {string} - The CSS color
             * @property text {string} - The text content, new line characters (\u000A) are interpreted as line breaks
             */
            interface Label {
                x: number;
                y: number;
                angle: number;
                font: string;
                size: number;
                color: string;
                text: string;
            }

            /**
             * Options which are used to initialize spatial object object
             * @property style {(H.map.SpatialStyle | H.map.SpatialStyle.Options)=} - the style to be used when tracing the spatial object
             * @property arrows {(H.map.ArrowStyle | H.map.ArrowStyle.Options)=} - The arrows style to be used when rendering the spatial.
             * @property visibility {boolean=} - An optional boolean value indicating whether this map object is visible, default is true
             * @property zIndex {number=} - The z-index value of the map object, default is 0
             * @property min {number=} - The minimum zoom level for which the object is visible, default is -Infinity
             * @property max {number=} - The maximum zoom level for which the object is visible, default is Infinity
             * @property provider {(H.map.provider.Provider | null)=} - The provider of this object. This property is only needed if a customized Implementation of ObjectProvider wants to instantiate
             * an object.
             * @property data {*} - Optional arbitrary data to be stored with this map object. This data can be retrieved by calling getData.
             */
            interface Options {
                style?: (H.map.SpatialStyle | H.map.SpatialStyle.Options) | undefined;
                arrows?: (H.map.ArrowStyle | H.map.ArrowStyle.Options) | undefined;
                visibility?: boolean | undefined;
                zIndex?: number | undefined;
                min?: number | undefined;
                max?: number | undefined;
                provider?: H.map.provider.Provider | undefined;
                data?: any;
            }
        }

        /**
         * The SpatialStyle class represents a style with which spatial objects like polylines and polygons are drawn. A SpatialStyle instance is always treated as immutable to avoid inconstiencies
         * and must not modified.
         * @property strokeColor {string} - The color of the stroke in CSS syntax, default is 'rgba(0, 85, 170, 0.6)'.
         * @property fillColor {string} - The filling color in CSS syntax, default is 'rgba(0, 85, 170, 0.4)'.
         * @property lineWidth {number} - The width of the line in pixels, default is 2.
         * @property lineCap {H.map.SpatialStyle.LineCap} - The style of the end caps for a line, default is 'round'.
         * @property lineJoin {H.map.SpatialStyle.LineJoin} - The type of corner created, when two lines meet, default is 'miter'.
         * @property miterLimit {number} - The miter length is the distance between the inner corner and the outer corner where two lines meet. The default is 10.
         * @property lineDash {Array<number>} - The line dash pattern as an even numbered list of distances to alternately produce a line and a space. The default is [].
         * @property lineDashOffset {number} - The phase offset of the line dash pattern The default is 0.
         * @property MAX_LINE_WIDTH {number} - This constant represents the maximum line width which can be used for rendering.
         * @property DEFAULT_STYLE {H.map.SpatialStyle} - This static member defines the default style for spatial objects on the map. It's value is
         * { strokeColor: '#05A', fillColor: 'rgba(0, 85, 170, 0.4)', lineWidth: 1, lineCap: 'round', lineJoin: 'miter', miterLimit: 10, lineDash: [], lineDashOffset: 0 }
         */
        class SpatialStyle {
            /**
             * Constructor
             * @param opt_options {(H.map.SpatialStyle | H.map.SpatialStyle.Options)=} - The optional style attributes
             */
            constructor(opt_options?: (H.map.SpatialStyle | H.map.SpatialStyle.Options));

            /**
             * This method checks value-equality with another style.
             * @param other {(H.map.SpatialStyle | H.map.SpatialStyle.Options)} - the style to compare with
             * @returns {boolean} - true if the styles are value-equal, otherwise false
             */
            equals(other: (H.map.SpatialStyle | H.map.SpatialStyle.Options)): boolean;

            /**
             * Returns a copy of spatial style object and replaces the passed style attributes into it.
             * @param opt_attributes {H.map.SpatialStyle.Options=} - The style attributes to set on the copied style instance
             * @returns {H.map.SpatialStyle}
             */
            getCopy(opt_attributes?: H.map.SpatialStyle.Options): H.map.SpatialStyle;

            strokeColor: string;
            fillColor: string;
            lineWidth: number;
            lineCap: H.map.SpatialStyle.LineCap;
            lineJoin: H.map.SpatialStyle.LineJoin;
            miterLimit: number;
            lineDash: number[];
            lineDashOffset: number;
            static MAX_LINE_WIDTH: number;
            static DEFAULT_STYLE: H.map.SpatialStyle;
        }

        namespace SpatialStyle {
            /**
             * The style of the end caps for a line, one of 'butt', 'round', 'square', 'arrow-head' or 'arrow-tail'.
             */
            type LineCap = 'butt' | 'round' | 'square' | 'arrow-head' | 'arrow-tail';

            /**
             * The type of corner created, when two lines meet, one of 'round', 'bevel' or 'miter'.
             */
            type LineJoin = 'round' | 'bevel' | 'miter';

            /**
             * Options used to initialize a style. If a property is not set, the default value from H.map.SpatialStyle is taken.
             * @property strokeColor {string=} - The color of the stroke in CSS syntax.
             * @property fillColor {string=} - The color of the stroke in CSS syntax.
             * @property lineWidth {number=} - The width of the line in pixels, default is 2. The maximum supported line width is 100.
             * @property lineCap {H.map.SpatialStyle.LineCap=} - The style of the end caps for a line.
             * @property lineJoin {H.map.SpatialStyle.LineJoin=} - The type of corner created, when two lines meet.
             * @property miterLimit {number=} - The miter limit in pixel, default is 10. The maximum supported miter limit is 100
             * @property lineDash {Array<number>} - The line dash pattern as an even numbered list of distances to alternately produce a line and a space. If the browser doesn't support this feature
             * this style property is ignored.
             * @property lineDashOffset {number=} - The phase offset of the line dash pattern
             */
            interface Options {
                strokeColor?: string | undefined;
                fillColor?: string | undefined;
                lineWidth?: number | undefined;
                lineCap?: H.map.SpatialStyle.LineCap | undefined;
                lineJoin?: H.map.SpatialStyle.LineJoin | undefined;
                miterLimit?: number | undefined;
                lineDash?: number[] | undefined;
                lineDashOffset?: number | undefined;
            }
        }

        /**
         * This class represents a view of the map. It consists of a virtual camera and a look-at point both of which have a position in geo-space and orientation angles. The view model allows to
         * change the values of these objects in order to move or rotate the map or zoom in and out.
         */
        class ViewModel extends H.util.EventTarget implements H.map.IControl {
            /**
             * {@link https://developer.here.com/documentation/maps/api_reference/H.map.ViewModel.html#setLookAtData}
             * @param data - The values to be modified. Here are some of the main possibilities to reposition the camera at give look-at point
             * @param opt_animate - A value indicating if an animated transition should be applied, default is false.
             */
            setLookAtData(data: H.map.ViewModel.ILookAtData, opt_animate?: boolean): H.map.ViewModel;

            /**
             * {@link https://developer.here.com/documentation/maps/api_reference/H.map.ViewModel.html#getLookAtData}
             */
            getLookAtData(): H.map.ViewModel.ILookAtData;

            /**
             * This method sets a new zoom level to be processed by the renderer
             * @param zoom {number} - the new zoom level
             * @param animate {boolean}
             */
            setZoom(zoom: number, animate: boolean): void;

            /**
             * This method returns the zoom level that is currently rendered.
             * @returns {number} - current zoom level (scale)
             */
            getZoom(): number;

            /**
             * A method to signal the begin of a control operation.
             * @param opt_kinetics {H.util.kinetics.IKinetics=} - kinetics settings
             * @param opt_atX {number=} - x screen coordinate at which control has started
             * @param opt_atY {number=} - y screen coordinate at which control has started
             */
            startControl(opt_kinetics?: H.util.kinetics.IKinetics, opt_atX?: number, opt_atY?: number): void;

            /**
             * A method to set the values for a continuously modification of the ViewModel on different axes. If the current render engine doesn't support certain modifications then they are ignored.
             * @param moveX {number} - The movement on x-axis as levels per millisecond where a level correlates to the distance between camera and look-at point.
             * @param moveY {number} - The movement on y-axis as levels per millisecond where a level correlates to the distance between camera and look-at point
             * @param moveZ {number} - The movement on z-axis as levels per millisecond.
             * @param angleX {number} - The rotation of on screen's x axis as degrees per millisecond.
             * @param angleY {number} - The rotation of on screen's y axis as degrees per millisecond.
             * @param angleZ {number} - The rotation of on screen's z axis as degrees per millisecond.
             * @param opt_zoom {number=} - The modification of the zoom level as levels per millisecond
             */
            control(moveX: number, moveY: number, moveZ: number, angleX: number, angleY: number, angleZ: number, opt_zoom?: number): void;

            /**
             * A method to signal the end of a control operation.
             * @param opt_preventKinetics {boolean=} - A flag to indicate whether a kinetic effect is performed
             * @param opt_adjustView {function(H.map.ViewModel.ILookAtData)=} - An callback to adjust the final ViewModel by modifying the passed camera data.
             */
            endControl(opt_preventKinetics?: boolean, opt_adjustView?: (data: H.map.ViewModel.ILookAtData) => void): void;

            /**
             * This method will dispatch event on the event target object
             * @param evt {(H.util.Event | string)} - event object or event name
             */
            dispatchEvent(evt: (H.util.Event | string)): void;

            /**
             * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
             */
            dispose(): void;

            /**
             * This method adds callback which is triggered when the object is being disposed
             * @param callback {Function} - The callback function.
             * @param opt_scope {Object=} - An optional scope to call the callback in.
             */
            addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;
        }

        namespace ViewModel {
            /**
             * {@link https://developer.here.com/documentation/maps/api_reference/H.map.ViewModel.html#.ILookAtData}
             */
            interface ILookAtData {
                position?: H.geo.IPoint | undefined;
                zoom?: number | undefined;
                bounds?: H.geo.AbstractGeometry | undefined;
                heading?: number | undefined;
                incline?: number | undefined;
                tilt?: number | undefined;
            }

            /**
             * Update event is fired whenever view model data is changed. It contains property which hold currently requested data
             * @fixme find documentation and update constructor typings
             * @property target {*} - Object which triggered the event
             * @property currentTarget {*} - Object which has listener attached
             * @property type {string} - Name of the dispatched event
             * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
             */
            class UpdateEvent extends H.util.Event {
                /**
                 * Constructor
                 * @param requested {any}
                 */
                constructor(requested: any);

                /**
                 * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
                 */
                preventDefault(): void;

                /**
                 * Stops propagation for current event.
                 */
                stopPropagation(): void;

                target: any;
                currentTarget: any;
                type: string;
                defaultPrevented: boolean;
            }
        }

        /**
         * ViewPort object holds information about the HTML element where the map is rendered. It contains information regarding the element (view port) size and triggers events when the element size
         * is changed.
         * @property element {Element} - This property holds the HTML element, which defines the viewport.
         * @property width {number} - This property holds this viewport&#x27;s current width
         * @property height {number} - This property holds this viewport&#x27;s current height
         * @property margin {number} - This property holds this viewport&#x27;s current margin value
         * @property padding {H.map.ViewPort.Padding} - This property holds this viewport&#x27;s current padding
         * @property center {H.math.Point} - This property holds this viewport&#x27;s current center point
         */
        class ViewPort extends H.util.EventTarget implements H.map.IInteraction {
            /**
             * Constructor
             * @param element {Element} - html element were map will be rendered
             * @param opt_options {H.map.ViewPort.Options=} - optional configuration parameters
             */
            constructor(element: Element, opt_options?: H.map.ViewPort.Options);

            /**
             * This method sets the margin on the viewPort
             * @param margin {number} - margin which is used to fetch map data
             */
            setMargin(margin: number): void;

            /**
             * This method sets the padding on the viewport. Padding will result in shifted map center which will be the visual center of the padded area.
             * @param top {number} - padding from the top
             * @param right {number} - padding from the right
             * @param bottom {number} - padding from the bottom
             * @param left {number} - padding from the left
             */
            setPadding(top: number, right: number, bottom: number, left: number): void;

            /**
             * This method updates size of the viewport according to container size. It must be called whenever the HTML element changed size in order to update the map&#x27;s viewport values.
             */
            resize(): void;

            /**
             * This method starts the interaction with the view port. Should be called every time when new interaction is started i.e mouse grab, or touch start.
             * @param modifiers {number} - a bitmask which specifies what operations should performed during every interaction
             * @param opt_kinetics {H.util.kinetics.IKinetics=} - specifies kinetic move at the end of interaction
             */
            startInteraction(modifiers: H.math.BitMask, opt_kinetics?: H.util.kinetics.IKinetics): void;

            /**
             * This method resolves direct screen (view port) interaction. This function will modify the current view according to values passed in.
             * @param x {number} - viewport x coordinate
             * @param y {number} - viewport y coordinate
             * @param opt_bx {number=} - x coordinate for second pointer/touch if present
             * @param opt_by {number=} - y coordinate for secong pointer/touch if present
             * @param opt_timestamp {number=} - known timestamp which should be passed
             */
            interaction(x: number, y: number, opt_bx?: number, opt_by?: number, opt_timestamp?: number): void;

            /**
             * This method ends interaction and applies kinetic movement if defined by using startInteraction method
             * @param opt_preventKinetics {boolean=} - if set to true will prevent kinetics behaviour at the end of interaction
             */
            endInteraction(opt_preventKinetics?: boolean): void;

            /**
             * This method will dispatch event on the event target object
             * @param evt {(H.util.Event | string)} - event object or event name
             */
            dispatchEvent(evt: (H.util.Event | string)): void;

            /**
             * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
             */
            dispose(): void;

            /**
             * This method adds callback which is triggered when the object is being disposed
             * @param callback {Function} - The callback function.
             * @param opt_scope {Object=} - An optional scope to call the callback in.
             */
            addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;

            element: Element;
            width: number;
            height: number;
            margin: number;
            padding: H.map.ViewPort.Padding;
            center: H.math.Point;
        }

        namespace ViewPort {
            /**
             * Options which may be used to initialize new ViewPort instance
             * @property margin {number=} - The size in pixel of the supplemental area to render for each side of the map
             * @property padding {H.map.ViewPort.Padding=} - The padding in pixels for each side of the map
             * @property fixedCenter {boolean=} - Indicates whether the center of the map should remain unchanged if the viewport's size or or padding has been changed, default is true
             */
            interface Options {
                margin?: number | undefined;
                padding?: H.map.ViewPort.Padding | undefined;
                fixedCenter?: boolean | undefined;
            }

            /**
             * Represents viewport padding definition.
             * @property top {number} - the padding on the top edge (in pixels)
             * @property right {number} - the padding on the right edge (in pixels)
             * @property bottom {number} - the padding on the bottom edge (in pixels)
             * @property left {number} - the padding on the left edge (in pixels)
             */
            interface Padding {
                top: number;
                right: number;
                bottom: number;
                left: number;
            }
        }

        namespace layer {
            /**
             * BaseTileLayer encapsulates funcitonailty that is common to all layers that deliver tiles, such as H.map.layer.TileLayer. The functionality includes geo bounding box to grid
             * calculation, tile request management.
             */
            class BaseTileLayer extends H.map.layer.Layer {
                /**
                 * Constructor
                 * @param provider {H.map.provider.TileProvider} - data source for the TileLayer
                 * @param opt_options {H.map.layer.ITileLayer.Options=} - additional options
                 */
                constructor(provider: H.map.provider.TileProvider, opt_options?: H.map.layer.ITileLayer.Options);

                /**
                 * This method returns the provider which feeds this layer with data.
                 * @returns {H.map.provider.TileProvider} - this layer's provider
                 */
                getProvider(): H.map.provider.TileProvider;

                /**
                 * This method transforms a geo-rectangle to geometrical projected rectangle at the current projection zoom level or at provided zoom level
                 * @param geoRect {H.geo.Rect} - geo bounds to be projected
                 * @param opt_zoom {number=} - overrides current projection zoom level
                 * @returns {H.math.Rect} - projected 2d space rect cooresponding to provided geo bounds
                 */
                geoRectToRect(geoRect: H.geo.Rect, opt_zoom?: number): H.math.Rect;

                /**
                 * This method returns tile grid for a bounding rectangle
                 * @param rectBounds {H.math.Rect} - projected rect bounds which coorespond to geo bounding box
                 * @param zoom {number} - current zoom level
                 * @returns {H.math.Rect} - rectangle which represents the tile grid bounds
                 */
                getTileBounds(rectBounds: H.math.Rect, zoom: number): H.math.Rect;

                /**
                 * This method requests a single tile according to tile coordinates. It returns either a Tile object if it is already loaded or undefined and starts loading the tile
                 * @param x {number} - tile row position
                 * @param y {number} - tile column position
                 * @param z {number} - The zoom level for which the tile is requested
                 * @param cacheOnly {boolean} - indicates whether only cached tiles are to be considered
                 * @returns {(H.map.provider.Tile | undefined)} - tile object corresponding to requested coordinates
                 */
                requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | void;

                /**
                 * This method cancels a previously requested tile.
                 * @param x {number} - tile row position
                 * @param y {number} - tile column position
                 * @param z {number} - zoom level
                 */
                cancelTile(x: number, y: number, z: number): void;

                /**
                 * This method requests tiles from the data source (provider). It can return a set of tiles which are currently loaded. All tiles which are not yet loaded will be included in response
                 * as soon as they will be available during subsequent calls.
                 * @param tileBounds {H.math.Rect} - bounds in tile grid
                 * @param isCDB {boolean}
                 * @param zoomLevel {number} - The zoom level for which the objects are requested
                 * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
                 * @param prioCenter {H.math.Point} - The priority center as an offset in screen pixel relative to the center
                 * @returns {H.map.layer.ITileLayer.Response} - returns an array if tile which are already loaded
                 */
                getProviderTiles(tileBounds: H.math.Rect, isCDB: boolean, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.ITileLayer.Response;
            }

            /**
             * This interface describes a layer which provides marker objects to the renderer.
             */
            interface IMarkerLayer {
                /**
                 * This method requests marker objects for provided bounding rectangle.
                 * @param boundingRect {H.geo.Rect} - the bounding rectangle for which marker are to be returned
                 * @param zoomLevel {number} - The zoom level for which the objects are requested
                 * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
                 * @param prioCenter {H.math.Point} - The priority center as an offset in screen pixel relative to the center
                 * @returns {(H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse)} - a response object containing the number of markers and the markers themselves
                 */
                requestMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): (H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse);

                /**
                 * This method requests dom marker objects for provided bounding rectangle.
                 * @param boundingRect {H.geo.Rect} - the bounding rectangle for which marker are to be returned
                 * @param zoomLevel {number} - The zoom level for which the objects are requested
                 * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
                 * @param prioCenter {H.math.Point} - The priority center as an offset in screen pixel relative to the center
                 * @returns {(H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse)} - a response object containing the number of markers and the markers themselves
                 */
                requestDomMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): (H.map.layer.IMarkerLayer.Response |
                    H.map.layer.IMarkerLayer.TiledResponse);
            }

            namespace IMarkerLayer {
                /**
                 * This type represents a response object returned by the H.map.layer.IMarkerLayer#requestMarkers function.
                 * @property total {number} - The total number of markers, inclusive markers with not ready icons
                 * @property markers {Array<H.map.AbstractMarker>} - The marker objects for the bounding rectangle (only ready)
                 */
                interface Response {
                    total: number;
                    markers: H.map.AbstractMarker[];
                }

                /**
                 * This type represents a response object returned by the H.map.layer.IMarkerLayer#requestMarkers function.
                 * @property number {number} - of returned tiles
                 * @property requested {number} - number of requested tiles
                 * @property objects {Array<H.map.AbstractMarker>} - the marker objects within requested tiled area
                 */
                interface TiledResponse {
                    number: number;
                    requested: number;
                    objects: H.map.AbstractMarker[];
                }
            }

            /**
             * This interface describes a layer which provides data partitioned in quad-tree tiles in an x, y, z fashion (where z describes the level within the tree and x and y describe the absolute
             * column and row indeces whithin the level).
             */
            interface ITileLayer {
                /**
                 * This method requests tiles for the current bounding rectangle at the given zoom level (z-value).
                 * @param boundingRect {H.geo.Rect} - the bounding rectangle for which tiles are to be returned
                 * @param zoomLevel {number} - The zoom level for which the tiles are requested
                 * @param cacheOnly {boolean} - Indicates whether only cached tiles are to be considered
                 * @param prioCenter {H.math.Point} - The priority center as an offset in screen pixel relative to the center
                 * @returns {H.map.layer.ITileLayer.Response} - a response object containing the total number of tiles requested and the tile objects that could be immediately returned
                 */
                requestTiles(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.ITileLayer.Response;

                /**
                 * This method requests a single tile according to tile coordinates. It returns either a Tile object if it is already loaded or undefined and starts loading the tile
                 * @param x {number} - tile row position
                 * @param y {number} - tile column position
                 * @param z {number} - The zoom level for which the tile is requested
                 * @param cacheOnly {boolean} - indicates whether only cached tiles are to be considered
                 * @returns {(H.map.provider.Tile | undefined)} - tile object corresponding to requested coordinates
                 */
                requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | void;

                /**
                 * This method cancels a previously requested tile.
                 * @param x {number} - tile row position
                 * @param y {number} - tile column position
                 * @param z {number} - zoom level
                 */
                cancelTile(x: number, y: number, z: number): void;
            }

            namespace ITileLayer {
                /**
                 * Options which are used to initialize a TileLayer object.
                 * @property projection {H.geo.IProjection=} - an optional projection to be used for this layer, default is H.geo.mercator
                 * @property opacity {number=} - tile layer opacity, default is 1
                 */
                interface Options {
                    projection?: H.geo.IProjection | undefined;
                    opacity?: number | undefined;
                }

                /**
                 * A response object for a tile request. Contains total number of elements requested and an array of currently available Tiles
                 * @property total {number} - the total number of requested tiles
                 * @property tiles {Array<H.map.provider.Tile>} - the tiles which this provider can currently return synchronously
                 */
                interface Response {
                    total: number;
                    tiles: H.map.provider.Tile[];
                }
            }

            /**
             * The Layer class represents an object that is evaluated by the renderer in the order in which it is added to the layers collection. It provides the basic infrastructure for dispatching
             * update events to the renderer in case new data is available.
             */
            class Layer extends H.util.EventTarget {
                /**
                 * Constructor
                 * @param opt_options {H.map.layer.Layer.Options=} - optional configuration object
                 */
                constructor(opt_options?: H.map.layer.Layer.Options);

                /**
                 * This method checks if a zoom level can be served by this layer.
                 * @param zoomLevel {number} - the zoom level to check
                 * @returns {boolean} - true if this layer can provide data for the zoom level, otherwise false
                 */
                isValid(zoomLevel: number): boolean;

                /**
                 * This method sets the minimum zoom level for which this layer will provide tiles.
                 * @param min {number} - The new minimum zoom level of this layer
                 * @returns {H.map.layer.Layer} - Returns this instance of the layer
                 */
                setMin(min: number): H.map.layer.Layer;

                /**
                 * This method sets the maximum zoom level for which this layer will provide tiles.
                 * @param max {number} - The new maximum zoom level of this layer
                 * @returns {H.map.layer.Layer} - Returns this instance of the layer
                 */
                setMax(max: number): H.map.layer.Layer;

                /**
                 * This method returns the copyright of the current data provider.
                 * @param bounds {H.geo.Rect} - the bounding area for which to retrieve the copyright information
                 * @param level {number} - the zoom level for which to retrieve the copyright information
                 * @returns {Array<H.map.ICopyright>} - a list of copyright information objects for the provided area and zoom level
                 */
                getCopyrights(bounds: H.geo.Rect, level: number): H.map.ICopyright[];

                /**
                 * This method will dispatch event on the event target object
                 * @param evt {(H.util.Event | string)} - event object or event name
                 */
                dispatchEvent(evt: (H.util.Event | string)): void;

                /**
                 * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
                 */
                dispose(): void;

                /**
                 * This method adds callback which is triggered when the object is being disposed
                 * @param callback {Function} - The callback function.
                 * @param opt_scope {Object=} - An optional scope to call the callback in.
                 */
                addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;
            }

            namespace Layer {
                /**
                 * Options which can be used when creating new layer object.
                 * @property min {number=} - The minimum zoom level for which the layer can provide data, default is 0
                 * @property max {number=} - The maximum zoom level for which the layer can provide data, default is 22
                 * @property dark {boolean=} - Indicates whether the content of this layer is mainly dark, default is false See also H.Map.Options#autoColor
                 * @property projection {H.geo.IProjection=} - The projection to be used for this layer, default is H.geo.mercator
                 * @property minWorldSize {number=} - The minimal world size at zoom level 0, default is 256
                 */
                interface Options {
                    min?: number | undefined;
                    max?: number | undefined;
                    dark?: boolean | undefined;
                    projection?: H.geo.IProjection | undefined;
                    minWorldSize?: number | undefined;
                }
            }

            /**
             * ObjectTileLayer represents map objects which are requested on a tile basis
             */
            class MarkerTileLayer extends H.map.layer.BaseTileLayer implements H.map.layer.IMarkerLayer {
                /**
                 * Constructor
                 * @param provider {H.map.provider.MarkerTileProvider}
                 * @param opt_options {H.map.layer.ITileLayer.Options=}
                 */
                constructor(provider: H.map.provider.MarkerTileProvider, opt_options?: H.map.layer.ITileLayer.Options);

                /**
                 * This method requests marker objects for provided bounding rectangle.
                 * @param boundingRect {H.geo.Rect} - the bounding rectangle for which marker are to be returned
                 * @param zoomLevel {number} - The zoom level for which the objects are requested
                 * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
                 * @param prioCenter {H.math.Point} - The priority center as an offset in screen pixel relative to the center
                 * @returns {(H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse)} - a response object containing the number of markers and the markers themselves
                 */
                requestMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): (H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse);

                /**
                 * This method requests dom marker objects for provided bounding rectangle.
                 * @param boundingRect {H.geo.Rect} - the bounding rectangle for which marker are to be returned
                 * @param zoomLevel {number} - The zoom level for which the objects are requested
                 * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
                 * @param prioCenter {H.math.Point} - The priority center as an offset in screen pixel relative to the center
                 * @returns {(H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse)} - a response object containing the number of markers and the markers themselves
                 */
                requestDomMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): (H.map.layer.IMarkerLayer.Response |
                    H.map.layer.IMarkerLayer.TiledResponse);
            }

            /**
             * This class represents a layer which renders map objects. Spatial objects like polygons and polylines a rendered to tiles before being passed to the enigne. Point objects like markers
             * are provided as objects given an rectangular area.
             */
            class ObjectLayer extends H.map.layer.Layer implements H.map.layer.ITileLayer {
                /**
                 * Constructor
                 * @param provider {H.map.provider.ObjectProvider} - the ObjectProvider which provides the map objects to this object layer.
                 * @param opt_options {H.map.layer.ObjectLayer.Options=} - The options for this layer
                 */
                constructor(provider: H.map.provider.ObjectProvider | H.clustering.Provider, opt_options?: H.map.layer.ObjectLayer.Options);

                /**
                 * This method returns current ObjectLayer's data provider
                 * @returns {H.map.provider.ObjectProvider}
                 */
                getProvider(): H.map.provider.ObjectProvider;

                /**
                 * To request overlay objects for the passsed bounding rectangle. It returns all overlay objects which are contained within this bounding rectangle.
                 * @param bounds {H.geo.Rect} - The bounding rectangle for which overlays are to be returned
                 * @param zoomLevel {number} - The zoom level for which the objects are requested
                 * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
                 * @param prioCenter {H.math.Point} - The priority center as an offset in screen pixel relative to the center
                 * @returns {H.map.layer.ObjectLayer.OverlaysResponse}
                 */
                requestOverlays(bounds: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.ObjectLayer.OverlaysResponse;

                /**
                 * This method requests tiles for the current bounding rectangle at the given zoom level (z-value).
                 * @param boundingRect {H.geo.Rect} - the bounding rectangle for which tiles are to be returned
                 * @param zoomLevel {number} - The zoom level for which the tiles are requested
                 * @param cacheOnly {boolean} - Indicates whether only cached tiles are to be considered
                 * @param prioCenter {H.math.Point} - The priority center as an offset in screen pixel relative to the center
                 * @returns {H.map.layer.ITileLayer.Response} - a response object containing the total number of tiles requested and the tile objects that could be immediately returned
                 */
                requestTiles(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.ITileLayer.Response;

                /**
                 * This method requests a single tile according to tile coordinates. It returns either a Tile object if it is already loaded or undefined and starts loading the tile
                 * @param x {number} - tile row position
                 * @param y {number} - tile column position
                 * @param z {number} - The zoom level for which the tile is requested
                 * @param cacheOnly {boolean} - indicates whether only cached tiles are to be considered
                 * @returns {(H.map.provider.Tile | undefined)} - tile object corresponding to requested coordinates
                 */
                requestTile(x: number, y: number, z: number, cacheOnly: boolean): H.map.provider.Tile | void;

                /**
                 * This method cancels a previously requested tile.
                 * @param x {number} - tile row position
                 * @param y {number} - tile column position
                 * @param z {number} - zoom level
                 */
                cancelTile(x: number, y: number, z: number): void;

                /**
                 * This method requests marker objects for provided bounding rectangle.
                 * @param boundingRect {H.geo.Rect} - the bounding rectangle for which marker are to be returned
                 * @param zoomLevel {number} - The zoom level for which the objects are requested
                 * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
                 * @param prioCenter {H.math.Point} - The priority center as an offset in screen pixel relative to the center
                 * @returns {(H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse)} - a response object containing the number of markers and the markers themselves
                 */
                requestMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): (H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse);

                /**
                 * This method requests dom marker objects for provided bounding rectangle.
                 * @param boundingRect {H.geo.Rect} - the bounding rectangle for which marker are to be returned
                 * @param zoomLevel {number} - The zoom level for which the objects are requested
                 * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
                 * @param prioCenter {H.math.Point} - The priority center as an offset in screen pixel relative to the center
                 * @returns {(H.map.layer.IMarkerLayer.Response | H.map.layer.IMarkerLayer.TiledResponse)} - a response object containing the number of markers and the markers themselves
                 */
                requestDomMarkers(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): (H.map.layer.IMarkerLayer.Response |
                    H.map.layer.IMarkerLayer.TiledResponse);
            }

            namespace ObjectLayer {
                /**
                 * Configuration object which can be use to initialize the ObjectLayer.
                 * @property tileSize {number=} - the size of the tiles rendered by this layer for polylines and polygons (must be power of 2, default is 256)
                 * @property tileCacheSize {number=} - the number of fully rendered spatial tiles that are cached for immediate reuse, default is 32
                 * @property dataCacheSize {number=} - the number of tiles to cache which have render data only, default is 512
                 * @property pixelRatio {number=} - The pixelRatio to use for over-sampling in cases of high-resolution displays
                 */
                interface Options {
                    tileSize?: number | undefined;
                    tileCacheSize?: number | undefined;
                    dataCacheSize?: number | undefined;
                    pixelRatio?: number | undefined;
                }

                /**
                 * A response object returned by the H.map.layer.ObjectLayer#requestOverlays function.
                 * @property total {number} - The total number of overlays within the requested bounds, inclusive overlays which are not ready loaded yet
                 * @property overlays {Array<H.map.Overlay>} - A list all overlays which are ready to render
                 */
                interface OverlaysResponse {
                    total: number;
                    overlays: H.map.Overlay[];
                }
            }

            /**
             * Tile Layer, represents data shown on map on a tile basis. Can be used to show map tile images or other type of data which is partitioned into tiles.
             * @event update {H.util.Event}
             */
            class TileLayer extends H.map.layer.BaseTileLayer implements H.map.layer.ITileLayer {
                /**
                 * Constructor
                 * @param provider {H.map.provider.TileProvider} - data source for the TileLayer
                 * @param opt_options {H.map.layer.ITileLayer.Options=} - additional options
                 */
                constructor(provider: H.map.provider.TileProvider, opt_options?: H.map.layer.ITileLayer.Options);

                /**
                 * This method requests tiles for the current bounding rectangle at the given zoom level (z-value).
                 * @param boundingRect {H.geo.Rect} - the bounding rectangle for which tiles are to be returned
                 * @param zoomLevel {number} - The zoom level for which the tiles are requested
                 * @param cacheOnly {boolean} - Indicates whether only cached tiles are to be considered
                 * @param prioCenter {H.math.Point} - The priority center as an offset in screen pixel relative to the center
                 * @returns {H.map.layer.ITileLayer.Response} - a response object containing the total number of tiles requested and the tile objects that could be immediately returned
                 */
                requestTiles(boundingRect: H.geo.Rect, zoomLevel: number, cacheOnly: boolean, prioCenter: H.math.Point): H.map.layer.ITileLayer.Response;

                update: H.util.Event;
            }
        }

        namespace provider {
            /**
             * An ImageTileProvider uses network service to provide bitmap images as tiles.
             * @property tileSize {number} - Size of a tile image supported by the provider
             */
            class ImageTileProvider extends H.map.provider.RemoteTileProvider {
                /**
                 * Constructor
                 * @param options {H.map.provider.ImageTileProvider.Options} - configuration for tile provider
                 */
                constructor(options: H.map.provider.ImageTileProvider.Options);

                tileSize: number;
            }

            namespace ImageTileProvider {
                /**
                 * Options to initialize an ImageTileProvider instance
                 * @property uri {string=} - The provider's unique resource identifier which must not contain an underscore "_". If omitted an auto-generated unique Session ID is used. If a cross
                 * sessions consistent IDs is needed (e.g. for storing provider data) this property must be specified.
                 * @property min {number=} - The minimal supported zoom level, default is 0
                 * @property max {number=} - The maximal supported zoom level, default is 22
                 * @property getCopyrights {(function(H.geo.Rect, number): ?Array<H.map.ICopyright>)=} - A function to replace the default implementation of H.map.provider.Provider#getCopyrights
                 * @property tileSize {number=} - The size of a tile as edge length in pixels. It must be 2^n where n is in range [0 ... 30], default is 256
                 * @property getURL {function(number, number, number)} - The function to create an URL for the specified tile. If it returns a falsy the tile is not requested.
                 * @property crossOrigin {(string | boolean=)} - The CORS settings to use for the crossOrigin attribute for the image, if omitted or if the value evaluates to false no CORS settings
                 * are used.
                 */
                interface Options {
                    uri?: string | undefined;
                    min?: number | undefined;
                    max?: number | undefined;

                    getCopyrights?(rect: H.geo.Rect, n: number): H.map.ICopyright[];

                    tileSize?: number | undefined;

                    getURL(n1: number, n2: number, n3: number): string;

                    crossOrigin?: string | boolean | undefined;
                }
            }

            /**
             * This class represents invalidation states of a renderable object. A renderer can optimize its rendering strategies based on the information in this object.
             * @property MARK_INITIAL {H.map.provider.Invalidations.Mark} - This constant represents the initial invalidation mark an invalidations object has.
             */
            class Invalidations {
                /**
                 * To update invalidation marks accordingly to the given the invalidation types.
                 * @param mark {H.map.provider.Invalidations.Mark} - The invalidation mark to set
                 * @param types {H.math.BitMask} - The descrete invalidation types to update
                 */
                update(mark: H.map.provider.Invalidations.Mark, types: H.math.BitMask): void;

                /**
                 * This method returns the current invalidation mark of this invalidations object.
                 * @returns {H.map.provider.Invalidations.Mark} - the current invalidation mark
                 */
                getMark(): H.map.provider.Invalidations.Mark;

                /**
                 * Checks whether any change occurred after the specified since mark
                 * @param since {H.map.provider.Invalidations.Mark} - The invalidation mark to check against
                 * @returns {boolean}
                 */
                isAny(since: H.map.provider.Invalidations.Mark): boolean;

                /**
                 * Checks whether a visual change occurred after the specified since mark
                 * @param since {H.map.provider.Invalidations.Mark} - The invalidation mark to check against
                 * @returns {boolean}
                 */
                isVisual(since: H.map.provider.Invalidations.Mark): boolean;

                /**
                 * Checks whether a spatial change occurred after the specified since mark
                 * @param since {H.map.provider.Invalidations.Mark} - The invalidation mark to check against
                 * @returns {boolean}
                 */
                isSpatial(since: H.map.provider.Invalidations.Mark): boolean;

                /**
                 * Checks whether an add-operation occurred after the specified since mark
                 * @param since {H.map.provider.Invalidations.Mark} - The invalidation mark to check against
                 * @returns {boolean}
                 */
                isAdd(since: H.map.provider.Invalidations.Mark): boolean;

                /**
                 * Checks whether a remove operation occurred after the specified since mark
                 * @param since {H.map.provider.Invalidations.Mark} - The invalidation mark to check against
                 * @returns {boolean}
                 */
                isRemove(since: H.map.provider.Invalidations.Mark): boolean;

                /**
                 * Checks whether a z-order change occurred after the specified since mark
                 * @param since {H.map.provider.Invalidations.Mark} - The invalidation mark to check against
                 * @returns {boolean}
                 */
                isZOrder(since: H.map.provider.Invalidations.Mark): boolean;

                static MARK_INITIAL: H.map.provider.Invalidations.Mark;
            }

            namespace Invalidations {
                /**
                 * This enumeration encapsulates bit flags for different invalidations of map objects.
                 */
                enum Flag {
                    NONE,
                    VISUAL,
                    SPATIAL,
                    ADD,
                    REMOVE,
                    Z_ORDER,
                }

                /**
                 * The invalidation mark represents a counter which is increased whenever an invalidation takes place.
                 */
                type Mark = any;
            }

            /**
             * A MarkerTileProvider uses network service to provide markers on tile basis.
             * @property requestTile {} - Request data on a tile basis
             * @property cancelTile {} - Cancels tile from being requested using x, y, z coordinates (column, row, zoom)
             * @property cancelTileByKey {} - Cancels tile from being requested using a tile-key
             * @property uri {string} - This provider's unique resource identifier, if not provided at construction time it defaults to provider's uid
             * @property min {number} - Minimum zoom level at which provider can serve data, set at construction time
             * @property max {number} - Maximum zoom level at which provider can server data, set at construction time
             * @property uid {string} - Provider instance unique identifier, generated at construction time
             */
            class MarkerTileProvider extends H.map.provider.RemoteTileProvider {
                /**
                 * Constructor
                 * @param options {H.map.provider.MarkerTileProvider.Options} - configuration for tile provider
                 */
                constructor(options: H.map.provider.MarkerTileProvider.Options);

                /**
                 * To signal to this provider that a map object has been changed. The method marks tile, that contains that object as invalid and triggers dispatchUpdate()
                 * @param marker {!H.map.AbstractMarker} - The map object to be invalidated
                 * @param flags {H.math.BitMask} - The flags indicating the types of occurred changes
                 */
                invalidateObject(marker: H.map.AbstractMarker, flags: H.math.BitMask): void;

                /**
                 * Checks whether this provider is currently providing H.map.DomMarker map objects.
                 * @returns {boolean}
                 */
                providesDomMarkers(): boolean;
            }

            namespace MarkerTileProvider {
                /**
                 * Options which are used to initialize the MarkerTileProvider object.
                 * @property min {number=} - The minimal supported zoom level, default is 0
                 * @property max {number=} - The maximal supported zoom level, default is 22
                 * @property requestData {function(number, number, number, function(Array<H.map.AbstractMarker>), Function): H.util.ICancelable} - function that fetches marker data and creates array
                 * of H.map.AbstractMarker that is passed success callback, if function fails to fetch data onError callback must be called
                 * @property providesDomMarkers {boolean=} - indicates if markers provided are of type H.map.DomMarker or H.map.Marker, default is H.map.Marker
                 */
                interface Options {
                    min?: number | undefined;
                    max?: number | undefined;

                    requestData(n1: number, n2: number, n3: number, markerCallback: (markers: H.map.AbstractMarker[]) => void, f: () => void): H.util.ICancelable;

                    providesDomMarkers?: boolean | undefined;
                }
            }

            /**
             * An abstract class to manage and provide map objects (Marker, Polyline, Polygon)
             */
            class ObjectProvider extends H.map.provider.Provider {
                /**
                 * Constructor
                 * @param opt_options {H.map.provider.Provider.Options=}
                 */
                constructor(opt_options?: H.map.provider.Provider.Options);

                /**
                 * Returns the accumulate invalidations of this provider's objects that have occurred.
                 * @param opt_type {H.map.Object.Type=} - The type of objects to consider for the invalidations. If undefined, all types are taken into account.
                 * @returns {H.map.provider.Invalidations}
                 */
                getInvalidations(opt_type?: H.map.Object.Type): H.map.provider.Invalidations;

                /**
                 * To signal to this provider that a map object has been changed. The method updates the Invalidations of this provider and the given map object and triggers dispatchUpdate()
                 * @param mapObject {!H.map.Object} - The map object to be invalidated
                 * @param changes {H.math.BitMask} - The flags indicating the types of occurred changes
                 */
                invalidateObject(mapObject: H.map.Object, changes: H.math.BitMask): void;

                /**
                 * Checks whether this provider is currently providing overlay map objects. A concrete implementation of ObjectProvider must override it if it currently provides overlays.
                 * @returns {boolean}
                 */
                providesOverlays(): boolean;

                /**
                 * Returns all Overlay objects which intersect with the provided area.
                 * @param geoRect {H.geo.Rect} - A rectangular area in geo space to intersect with
                 * @param zoomLevel {number} - The zoom level for which the objects are requested
                 * @param visiblesOnly {boolean} - Indicates whether only invisible objects are to be considered
                 * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
                 * @returns {Array<H.map.Overlay>} - a list of intersecting objects
                 */
                requestOverlays(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): H.map.Overlay[];

                /**
                 * Checks whether this provider is currently providing spatial map objects. A concrete implementation of ObjectProvider must override it if it currently provides Spatials.
                 * @returns {boolean}
                 */
                providesSpatials(): boolean;

                /**
                 * Returns all polyline, polygon, circle and rect objects which intersect with the provided area.
                 * @param geoRect {H.geo.Rect} - A rectangular area in geo space to intersect with
                 * @param zoomLevel {number} - The zoom level for which the objects are requested
                 * @param visiblesOnly {boolean} - Indicates whether only invisible objects are to be considered
                 * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
                 * @returns {Array<H.map.Spatial>} - a list of intersecting objects
                 */
                requestSpatials(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): H.map.Spatial[];

                /**
                 * Returns the spatial objects which intersect the given tile
                 * @param tile {H.map.provider.SpatialTile} - The tile for which the objects are requested
                 * @param visiblesOnly {boolean} - Indicates whether only invisible objects are to be considered
                 * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
                 * @returns {Array<H.map.Spatial>} - a list of intersecting objects
                 */
                requestSpatialsByTile(tile: H.map.provider.Tile, visiblesOnly: boolean, cacheOnly: boolean): H.map.Spatial[];

                /**
                 * Checks whether this provider is currently providing Marker map objects. A concrete implementation of ObjectProvider must override it if it currently provides Markers.
                 * @returns {boolean}
                 */
                providesMarkers(): boolean;

                /**
                 * Returns all Marker map objects which intersect with the provided rectangular area.
                 * @param geoRect {H.geo.Rect} - A rectangular area in geo space to intersect with
                 * @param zoomLevel {number} - The zoom level for which the objects are requested
                 * @param visiblesOnly {boolean} - Indicates whether only invisible objects are to be considered
                 * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
                 * @returns {Array<H.map.Marker>} - a list of intersecting objects
                 */
                requestMarkers(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): H.map.Marker[];

                /**
                 * Checks whether this provider is currently providing DomMarker map objects. A concrete implementation of ObjectProvider must override it if it currently provides Markers.
                 * @returns {boolean}
                 */
                providesDomMarkers(): boolean;

                /**
                 * Returns all DomMarker map objects which intersect with the provided rectangular area.
                 * @param geoRect {H.geo.Rect} - A rectangular area in geo space to intersect with
                 * @param zoomLevel {number} - The zoom level for which the objects are requested
                 * @param visiblesOnly {boolean} - Indicates whether only invisible objects are to be considered
                 * @param cacheOnly {boolean} - Indicates whether only cached objects are to be considered
                 * @returns {Array<H.map.DomMarker>} - a list of intersecting objects
                 */
                requestDomMarkers(geoRect: H.geo.Rect, zoomLevel: number, visiblesOnly: boolean, cacheOnly: boolean): H.map.DomMarker[];
            }

            /**
             * A LocalObjectProvider acts as a database for map objects. It provides functionality to fetch visible objects for specific geographical bounding box and zoom levels.
             * All objects are organized in a hierarchical group structure.
             * An object can be added to the provider by adding it to a group within this structure.
             * The root group of the provider can be fetched via the method H.map.provider.LocalObjectProvider#getRootGroup.
             * A H.Map has its own LocalObjectProvider and offer a means to add and remove objects.
             * Only in advanced use cases, is there a need to create an additional LocalObjectProvider.
             */
            class LocalObjectProvider extends ObjectProvider {
                /**
                 * This method retrieves the root group for the given provider.
                 * @returns {H.map.Group} - an object representing the root group for the given provider.
                 */
                getRootGroup(): H.map.Group;
            }

            /**
             * A Provider defines an object which works as a database for the map. Providers can exists in different forms they can implement client side object storage or they can request data from
             * the remote service.
             * @property uri {string} - This provider's unique resource identifier, if not provided at construction time it defaults to provider's uid
             * @property min {number} - Minimum zoom level at which provider can serve data, set at construction time
             * @property max {number} - Maximum zoom level at which provider can server data, set at construction time
             * @property uid {string} - Provider instance unique identifier, generated at construction time
             */
            class Provider extends H.util.EventTarget {
                /**
                 * Constructor
                 * @param opt_options {H.map.provider.Provider.Options=}
                 */
                constructor(opt_options?: H.map.provider.Provider.Options);

                /**
                 * This method returns the copyrights of the provided content for a certain geographical area at a specified zoom level.
                 * @param bounds {H.geo.Rect} - The bounding area for which to retrieve the copyright information
                 * @param level {number} - The zoom level for which to retrieve the copyright information
                 * @returns {?Array<H.map.ICopyright>} - a list of copyright information objects for the provided area and zoom level
                 */
                getCopyrights(bounds: H.geo.Rect, level: number): H.map.ICopyright[];

                /**
                 * This method will dispatch event on the event target object
                 * @param evt {(H.util.Event | string)} - event object or event name
                 */
                dispatchEvent(evt: (H.util.Event | string)): void;

                /**
                 * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
                 */
                dispose(): void;

                /**
                 * This method adds callback which is triggered when the object is being disposed
                 * @param callback {Function} - The callback function.
                 * @param opt_scope {Object=} - An optional scope to call the callback in.
                 */
                addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;

                uri: string;
                min: number;
                max: number;
                uid: string;
            }

            namespace Provider {
                /**
                 * Options to initialize a Provider instance
                 * @property uri {string=} - The provider's unique resource identifier which must not contain an underscore "_". If omitted an auto-generated unique Session ID is used. If a cross
                 * sessions consistent IDs is needed (e.g. for storing provider data) this property must be specified.
                 * @property min {number=} - The minimal supported zoom level, default is 0
                 * @property max {number=} - The maximal supported zoom level, default is 22
                 * @property getCopyrights {(function(H.geo.Rect, number): ?Array<H.map.ICopyright>)=} - A function to replace the default implementation of H.map.provider.Provider#getCopyrights
                 */
                interface Options {
                    uri?: string | undefined;
                    min?: number | undefined;
                    max?: number | undefined;

                    getCopyrights?(rect: H.geo.Rect, n: number): H.map.ICopyright[];
                }
            }

            /**
             * RemoteTileProvider is an abstract class which should be used by classes implementing data provision on a tile basis. Every child class needs to implement 'requestInternal'
             * (to request remote tile) and 'getCache' (to provide configured cache object were tiled data is being cached)
             */
            class RemoteTileProvider extends H.map.provider.TileProvider {
                /**
                 * Constructor
                 * @param options {H.map.provider.TileProvider.Options} - The options to instantiate this TileProvider
                 */
                constructor(options: H.map.provider.TileProvider.Options);

                /**
                 * This method returns cache which should be used to store tiles
                 * @returns {H.util.ICache} - cache
                 */
                getCache(): H.util.ICache;

                /**
                 * This method request tile from remote service
                 * @param x {number} - The row number of the tile
                 * @param y {number} - The column number of the tile
                 * @param z {number} - The zoom level for which the tile is requested
                 * @param onResponse {function((Array<H.map.Object> | HTMLImageElement | HTMLCanvasElement | ArrayBuffer | null), *=)} - function which is called after response arrives
                 * @param onError {function(string=)} - function which is called in case of communication error
                 * @param opt_priority {H.net.Request.Priority=} - optional request priority level
                 * @returns {H.util.ICancelable}
                 */
                requestInternal(
                    x: number,
                    y: number,
                    z: number,
                    onResponse?: (
                        object: H.map.Object[] | HTMLImageElement | HTMLCanvasElement | ArrayBuffer,
                        response: any,
                    ) => void,
                    onError?: (s: string) => void,
                    opt_priority?: H.util.Job.Priority,
                ): H.util.ICancelable;

                /**
                 * This method instructs the provider to reload data from it's source.
                 * @param hard {boolean} - a boolean flag indicating whether to invalidate in hard mode (true) or in soft mode (false);
                 */
                reload(hard: boolean): void;
            }

            /**
             * Generic Tile object which represents a part of the world fiting into the Tile area represented by the Tiel coordinates (x - row, y - column) and the zoom level (z). Number of tiles
             * at particular zoom level (which means number of areas into world is being splitted) is defined as following: numberOfRows &#x3D; numberOfColumns &#x3D; 2^zoomlevel
             * @property key {string} - Unique tile key generated by provider
             * @property data {*} - Tile data (an image for example)
             * @property valid {boolean} - This property holds a boolean flag indicating whether this tile is still valid (true) or whether it should be re-fetched (false)
             * @property x {number} - Tile column
             * @property y {number} - Tile row
             * @property z {number} - Tile zoom level
             */
            class Tile {
                /**
                 * Constructor
                 * @param x {number} - x tile coordinate (row)
                 * @param y {number} - y tile coordinate (column)
                 * @param z {number} - tile zoom level
                 * @param data {*} - generic data object which cooresponds to the given coordinates
                 */
                constructor(x: number, y: number, z: number, data?: any);

                key: string;

                data: any;
                valid: boolean;
                x: number;
                y: number;
                z: number;
            }

            /**
             * TileProvider is an abstract class to provide data on a tile basis
             * @property requestTile {} - Request data on a tile basis
             * @property cancelTile {} - Cancels tile from being requested using x, y, z coordinates (column, row, zoom)
             * @property cancelTileByKey {} - Cancels tile from being requested using a tile-key
             * @property uri {string} - This provider&#x27;s unique resource identifier, if not provided at construction time it defaults to provider&#x27;s uid
             * @property min {number} - Minimum zoom level at which provider can serve data, set at construction time
             * @property max {number} - Maximum zoom level at which provider can server data, set at construction time
             * @property uid {string} - Provider instance unique identifier, generated at construction time
             */
            class TileProvider extends H.map.provider.Provider {
                /**
                 * Constructor
                 * @param options {H.map.provider.TileProvider.Options} - The options to instantiate this TileProvider
                 */
                constructor(options: H.map.provider.TileProvider.Options);

                /**
                 * This method creates a tile object with given parameters
                 * @param x {number} - x tile coordinate (row)
                 * @param y {number} - y tile coordinate (column)
                 * @param z {number} - tile coordinate (zoom)
                 * @param data {(HTMLImageElement | HTMLCanvasElement)} - data for the tile
                 * @param opt_options {Object<string, *>=} - free form options object. These options are meant to be used in tile specific rendering cases
                 * @returns {H.map.provider.Tile}
                 */
                createTileInternal(x: number, y: number, z: number, data: (HTMLImageElement | HTMLCanvasElement), opt_options?: { [key: string]: any }): H.map.provider.Tile;

                /**
                 * This method creates a tile key consisting of the provider&#x27;s uri, and the tile&#x27;s x, y and z coordinates, seperated by underscores e.g.: &quot;4711_7_42_23&quot;
                 * @param x {number} - The x tile coordinate (row)
                 * @param y {number} - The y tile coordinate (column)
                 * @param z {number} - The z tile coordinate (zoom level)
                 * @returns {string} - string
                 */
                getTileKey(x: number, y: number, z: number): string;

                requestTile: any;
                cancelTile: any;
                cancelTileByKey: any;
                uri: string;
                min: number;
                max: number;
                uid: string;
            }

            namespace TileProvider {
                /**
                 * @property uri {string=} - The provider&#x27;s unique resource identifier which must not contain an underscore &quot;_&quot;. If omitted an auto-generated unique Session ID is used.
                 * If a cross sessions consistent IDs is needed (e.g. for storing provider data) this property must be specified.
                 * @property min {number=} - The minimal supported zoom level, default is 0
                 * @property max {number=} - The maximal supported zoom level, default is 22
                 * @property getCopyrights {(function(H.geo.Rect, number): Array<H.map.ICopyright>)=} - A function to replace the default implememtation of H.map.provider.Provider#getCopyrights
                 * @property tileSize {number=} - The size of a tile as edge length in pixels. It must be 2^n where n is in range [0 ... 30], default is 256
                 */
                interface Options {
                    uri?: string | undefined;
                    min?: number | undefined;
                    max?: number | undefined;

                    getCopyrights?(rect: H.geo.Rect, number: number): H.map.ICopyright[];

                    tileSize?: number | undefined;
                }
            }
        }

        namespace render {
            /**
             * This is an abstract class representing a render engine. Render engines are used to render the geographical position from a view model on the
             * screen (viewport element). The rendered result may be different for different engines, because every engine uses its own capabilities and
             * specific implementation to present the current view model data in best possible way. For example, 2D engines create a two-dimensional flat
             * map composed of tiles, while 3D engines can generate panoramas displaying the same coordinates as a 'street view'.
             */
            class RenderEngine extends H.util.EventTarget {
                /**
                 * Constructor
                 * @param viewPort {H.map.ViewPort} - An object representing the map viewport
                 * @param viewModel {H.map.ViewModel} - An object representing a view of the map
                 * @param dataModel {H.map.DataModel} - An object encapsulating the data to be rendered on the map (layers and objects)
                 * @param options {H.map.render.RenderEngine.Options} - An object containing the render engine initialization options
                 */
                constructor(viewPort: H.map.ViewPort, viewModel: H.map.ViewModel, dataModel: H.map.DataModel, options: H.map.render.RenderEngine.Options);

                /**
                 * This method adds a listener for a specific event.
                 * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
                 * @param type {string} - The name of the event
                 * @param handler {!Function} - An event handler function
                 * @param opt_capture {boolean=} - true indicates that the method should listen in the capture phase (bubble otherwise)
                 * @param opt_scope {Object=} - An object defining the scope for the handler function
                 */
                addEventListener(type: string, handler: (evt: Event) => void, opt_capture?: boolean, opt_scope?: {}): void;

                /**
                 * This method removes a previously added listener from the EventTarget instance.
                 * @param type {string} - The name of the event
                 * @param handler {!Function} - A previously added event handler
                 * @param opt_capture {boolean=} - true indicates that the method should listen in the capture phase (bubble otherwise)
                 * @param opt_scope {Object=} - An object defining the scope for the handler function
                 */
                removeEventListener(type: string, handler: (evt: Event) => void, opt_capture?: boolean, opt_scope?: {}): void;

                /**
                 * This method dispatches an event on the EventTarget object.
                 * @param evt {H.util.Event|string} - An object representing the event or a string with the event name
                 */
                dispatchEvent(evt: H.util.Event | string): void;

                /**
                 * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove
                 * references to DOM Elements and additional listeners.
                 */
                dispose(): void;

                /**
                 * This method adds a callback which is triggered when the EventTarget object is being disposed.
                 * @param callback {!Function} - The callback function.
                 * @param opt_scope {Object=} - An optional scope for the callback function
                 */
                addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;
            }

            namespace RenderEngine {
                /**
                 * An object containing the render engine initialization options
                 */
                interface Options {
                    [key: string]: string;
                }

                /**
                 * This object defines the modifiers to use for H.map.ViewPort#startInteraction.
                 */
                enum InteractionModifiers {
                    /** changes zoom level during the interaction */
                    ZOOM,
                    /** changes map center during the interaction */
                    HEADING,
                    /** changes heading angle during the interaction */
                    TILT,
                    /** changes tilt angle during the interaction */
                    INCLINE,
                    /** changes incline angle during the interaction */
                    COORD,
                }
            }

            /**
             * The rendering states of the layer.
             */
            enum RenderState {
                /**
                 * Data loading/processing is still in progress, but there is nothing to render. In this state rendering engine might go to sleep mode after
                 * certain amount of time to prevent draining of battery on the user device.
                 */
                PENDING,
                /** Data rendering or animation is in progress. */
                ACTIVE,
                /** Data rendering or animation is done. */
                DONE,
            }

            /**
             * An object containing rendering parameters.
             */
            interface RenderingParams {
                /**
                 * The geographical area to render. Note that it is not the same as visible viewport. Specified bounds also include H.Map.Options#margin and
                 * optionally an additional margin in case of DOM node rendering for a better rendering experience.
                 * @type {H.geo.Rect}
                 */
                bounds: H.geo.Rect;

                /**
                 * The zoom level to render the data for.
                 * @type {number}
                 */
                zoom: number;

                /**
                 * The coordinates of the screen center in CSS pixels.
                 * @type {H.math.Point}
                 */
                screenCenter: H.math.Point;

                /**
                 * The coordinates relative to the screen center where the rendering has the highest priority. If the layer has to request and/or process data
                 * asynchronously, it's recommended to prioritize the rendering close to this center.
                 * @type {H.math.Point}
                 */
                priorityCenter: H.math.Point;

                /**
                 * The pixel projection to use to project geographical coordinates into screen coordinates and vice versa.
                 * @type {H.geo.PixelProjection}
                 */
                projection: H.geo.PixelProjection;

                /**
                 * Indicates whether only cached data should be considered.
                 * @type {boolean}
                 */
                cacheOnly: boolean;

                /**
                 * The size of the area to render.
                 * @type {H.math.Size}
                 */
                size: H.math.Size;

                /**
                 * The pixelRatio to use for over-sampling in cases of high-resolution displays.
                 * See https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio.
                 * @type {number}
                 */
                pixelRatio: number;
            }

            /**
             * Contains functionality specific to 2D map rendering.
             */
            namespace p2d {
                /**
                 * This class implements a map render engine. It presents a geographic location (camera data from a view model) and renders all map layers in
                 * the order in which they are provided in a single 2D canvas element.
                 */
                class RenderEngine extends H.map.render.RenderEngine {
                    /**
                     * Constructor
                     * @param viewPort {H.map.ViewPort} - An object representing the map viewport
                     * @param viewModel {H.map.ViewModel} - An object representing a view of the map
                     * @param dataModel {H.map.DataModel} - An object encapsulating the data to be rendered on the map (layers and objects)
                     * @param options {H.map.render.RenderEngine.Options} - An object containing the render engine initialization options
                     */
                    constructor(viewPort: H.map.ViewPort, viewModel: H.map.ViewModel, dataModel: H.map.DataModel, options: H.map.render.RenderEngine.Options);

                    /**
                     * This method sets the length (duration) for all animations run by the render engine in milliseconds.
                     * @param duration {number} - A value indicating the duration of animations in milliseconds
                     */
                    setAnimationDuration(duration: number): void;

                    /**
                     * This method retrieves the current setting indicating the length of animations (duration) run by the the render engine in milliseconds.
                     * @return {number}
                     */
                    getAnimationDuration(): number;

                    /**
                     * This method sets a value indicating the easing to apply to animations run by the render engine.
                     * @param easeFunction {Function(number)} - A function that alters the progress ratio of an animation. It receives an argument indicating
                     * animation progress as a numeric value in the range between 0 and 1 and must return a numeric value in the same range.
                     */
                    setAnimationEase(easeFunction: (progress: number) => number): void;

                    /**
                     * This method retrieves the current setting representing the easing to be applied to animations.
                     * @return {Function(number) => number} - A numeric value in the range 0 to 1
                     */
                    getAnimationEase(): (progress: number) => number;

                    /**
                     * This method resets animation settings on the render engine to defaults.
                     * Duration is set to 300ms and easing to H.util.animation.ease.EASE_OUT_QUAD.
                     */
                    resetAnimationDefaults(): void;

                    /**
                     * This method adds a listener for a specific event.
                     * Note that to prevent potential memory leaks, you must either call removeEventListener or dispose on the given object when you no longer need it.
                     * @param type {string} - The name of the event
                     * @param handler {!Function} - An event handler function
                     * @param opt_capture {boolean=} - true indicates that the method should listen in the capture phase (bubble otherwise)
                     * @param opt_scope {Object=} - An object defining the scope for the handler function
                     */
                    addEventListener(type: string, handler: (evt: Event) => void, opt_capture?: boolean, opt_scope?: {}): void;

                    /**
                     * This method removes a previously added listener from the EventTarget instance.
                     * @param type {string} - The name of the event
                     * @param handler {!Function} - A previously added event handler
                     * @param opt_capture {boolean=} - true indicates that the method should listen in the capture phase (bubble otherwise)
                     * @param opt_scope {Object=} - An object defining the scope for the handler function
                     */
                    removeEventListener(type: string, handler: (evt: Event) => void, opt_capture?: boolean, opt_scope?: {}): void;

                    /**
                     * This method dispatches an event on the EventTarget object.
                     * @param evt {H.util.Event|string} - An object representing the event or a string with the event name
                     */
                    dispatchEvent(evt: H.util.Event | string): void;

                    /**
                     * This method removes listeners from the given object. Classes that extend EventTarget may need to override this method in order to remove
                     * references to DOM Elements and additional listeners.
                     */
                    dispose(): void;

                    /**
                     * This method adds a callback which is triggered when the EventTarget object is being disposed.
                     * @param callback {!Function} - The callback function.
                     * @param opt_scope {Object=} - An optional scope for the callback function
                     */
                    addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;
                }

                namespace RenderEngine {
                    interface Options {
                        /** Object describes how many cached zoom levels should be used as a base map background while base map tiles are */
                        renderBaseBackground?: {} | undefined;

                        /** The pixelRatio to use for over-sampling in cases of high-resolution displays */
                        pixelRatio: number;

                        /** optional */
                        enableSubpixelRendering?: boolean | undefined;
                    }
                }
            }
        }
    }

    /***** mapevents *****/
    namespace mapevents {
        /**
         * Behavior class uses map events and adds behavior functionality to the map. This allows map panning and zooming via using mouse wheel
         * @property DRAGGING {number} - Map responds to user dragging via mouse or touch
         * @property WHEELZOOM {number} - Map zooms in or out in respond to mouse wheel events
         * @property DBLTAPZOOM {number} - Map zooms in or out in response to double click or double tap. For double tap if more that one touches are on the screen map will zoom out.
         */
        class Behavior extends H.util.Disposable {
            /**
             * Constructor
             * @param mapEvents {H.mapevents.MapEvents} - previously initialized map events instance
             * @param options {H.mapevents.Behavior.Options} - additional options (i.e kinetics)
             */
            constructor(mapEvents: H.mapevents.MapEvents, options?: H.mapevents.Behavior.Options);

            /**
             * This method destroys all map interaction handling. Should be used when the behavior functionality is disposed. Behavior object will also be disposed (this function will be called)
             * when attached H.mapevents.MapEvents object is dispose.
             */
            dispose(): void;

            /**
             * This method disables the behavior functionality for the map
             * @param opt_behavior {number=} - The bitmask of behaviors to disable. If no arguments are passed, all behaviors will be disabled.
             */
            disable(opt_behavior?: H.math.BitMask): void;

            /**
             * This method re-enables the behavior functionality for the map.
             * @param opt_behavior {number=} - The bitmask of behaviors to enable. If no arguments are passed, all behaviors will be enabled.
             */
            enable(opt_behavior?: H.math.BitMask): void;

            /**
             * This method checks if certain functionality is enabled
             * @param behavior {number} - value like H.mapevents.Behavior.DRAGGING which the check is being performed
             * @returns {boolean}
             */
            isEnabled(behavior: number): boolean;

            static DRAGGING: number;
            static WHEELZOOM: number;
            static DBLTAPZOOM: number;
        }

        namespace Behavior {
            /**
             * Options which are used to initialize the Behavior class.
             * @property kinetics {H.util.kinetics.IKinetics=} - The parameters for the kinetic movement.
             * @property enable {number=} - The bitmask of behaviors to enable like H.mapevents.Behavior.DRAGGING. All are enabled by default.
             */
            interface Options {
                kinetics?: H.util.kinetics.IKinetics | undefined;
                enable?: H.math.BitMask | undefined;
            }
        }

        /**
         * ContextMenuEvent should be fired, when a user right-clicks or longpresses on a map object.
         * @property viewportX {Array<H.util.ContextItem>} - Contains ContextItems, that will be used to create context menu entries. Should be filled by listeners of the "contextmenu" event
         * @property viewportY {number} - Map viewport y position
         * @property target {(H.map.Object | H.Map)} - Target for the event
         * @property originalEvent {Event} - Original event
         * @property currentTarget {(H.map.Object | H.Map)} - Object which has listener attached
         * @property type {string} - Name of the dispatched event
         * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
         */
        class ContextMenuEvent extends H.util.Event {
            /**
             * Constructor
             * @param viewportX {number} - The x coordinate on the viewport
             * @param viewportY {number} - The y coordinate on the viewport
             * @param target {(H.Map | H.map.Object)} - The event's target element
             * @param originalEvent {Event} - target of the event
             */
            constructor(viewportX: number, viewportY: number, target: (H.Map | H.map.Object), originalEvent: Event);

            viewportX: H.util.ContextItem[];
            viewportY: number;
            originalEvent: Event;
        }

        /**
         * Custom map event. Contains list of pointers on the map, list of changed pointers and original event. Inherits from H.util.Event.
         * @property pointers {Array<H.mapevents.Pointer>} - Pointers which are currently on the screen
         * @property changedPointers {Array<H.mapevents.Pointer>} - Pointers which has changed in course of event
         * @property targetPointers {Array<H.mapevents.Pointer>} - Pointers which are on same target as the current pointer
         * @property currentPointer {H.mapevents.Pointer} - Current pointer
         * @property originalEvent {Event} - Original event fired by the browser
         * @property target {(H.map.Object | H.Map)} - Object which triggered event. Can be the map object (i.e marker or polyline) or the map itself
         * @property currentTarget {(H.map.Object | H.Map)} - Object which has listener attached
         * @property type {string} - Name of the dispatched event
         * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
         */
        class Event extends H.util.Event {
            /**
             * Constructor
             * @param type {string} - type of event
             * @param pointers {Array<H.mapevents.Pointer>} - pointers which are currently on the screen
             * @param changedPointers {Array<H.mapevents.Pointer>} - pointers which changed during event
             * @param targetPointers {Array<H.mapevents.Pointer>} - pointers on the event target
             * @param currentPointer {H.mapevents.Pointer} - pointer which triggered the event
             * @param target {(H.Map | H.map.Object)} - target map object which triggered event
             * @param originalEvent {Event} - original dom event
             */
            constructor(type: string, pointers: H.mapevents.Pointer[], changedPointers: H.mapevents.Pointer[], targetPointers: H.mapevents.Pointer[], currentPointer: H.mapevents.Pointer,
                target: (H.Map | H.map.Object), originalEvent: Event);

            /**
             * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
             */
            preventDefault(): void;

            /**
             * Stops propagation for current event.
             */
            stopPropagation(): void;

            pointers: H.mapevents.Pointer[];
            changedPointers: H.mapevents.Pointer[];
            targetPointers: H.mapevents.Pointer[];
            currentPointer: H.mapevents.Pointer;
            originalEvent: Event;
            target: (H.map.Object | H.Map);
            currentTarget: (H.map.Object | H.Map);
            type: string;
            defaultPrevented: boolean;
        }

        /**
         * MapEvents enable the events functionality on the map and on the map objects. By using this extension it is possible to listen to events on map objects like markers, polylines, polygons,
         * circles and on the map object itself. Events are triggered depending on user interaction. Please check the Events Summary section for the list of events fired by this class and by the map
         * objects.
         */
        class MapEvents extends H.util.Disposable {
            /**
             * Constructor
             * @param map {H.Map} - map instance which is used for firing events
             */
            constructor(map: H.Map);

            /**
             * This method destroys the MapEvents by removing all handlers from the map object. After calling this function mapEvents and map objects will not trigger any events. This object will be
             * disposed automatically if the corresponding map object is disposed.
             */
            dispose(): void;

            /**
             * This method returns map into which events are attached
             * @returns {H.Map}
             */
            getAttachedMap(): H.Map;
        }

        /**
         * Class representing pointer on the map surface. A pointer in platform specific definition would mean either mouse, touch, pen or any pointing device which can trigger browser events.
         * @property viewportX {number} - X coordinate on the map's viewport
         * @property viewportY {number} - Y coordinate on the map's viewport
         * @property target {(H.map.Object | H.Map)} - Map object directly under the pointer. Can be null if if pointer is out of the map viewport
         * @property id {number} - Pointer unique identifier.
         * @property type {string} - Pointer type can be: 'mouse', 'touch' or 'pen'
         * @property dragTarget {(H.map.Object | H.Map)} - Object which is currently dragged by the pointer
         * @property button {H.mapevents.Pointer.Button} - Indicates which pointer device button has changed.
         */
        class Pointer {
            /**
             * Constructor
             * @param viewportX {number} - pointer position on x-axis
             * @param viewportY {number} - pointer position on y-axis
             * @param id {number} - unique pointer identifier among currently available pointers
             * @param type {string} - type of pointer can be i.e 'mouse', 'touch'. 'pen'
             * @param opt_button {H.mapevents.Pointer.Button=} - Indicates which pointer device button has changed.
             * @param opt_buttons {number=} - Indicates which pointer device buttons are being pressed, expressed as a bitmask. Uses the same values, as "buttons" in Pointer Events spec.
             */
            constructor(viewportX: number, viewportY: number, id: number, type: string, opt_button?: H.mapevents.Pointer.Button, opt_buttons?: H.math.BitMask);

            viewportX: number;
            viewportY: number;
            target: (H.map.Object | H.Map);
            id: number;
            type: string;
            dragTarget: (H.map.Object | H.Map);
            button: H.mapevents.Pointer.Button;
        }

        namespace Pointer {
            /**
             * Types of a button
             */
            enum Button {
                /** No button */
                NONE,
                /** Left mouse button or touch contact or pen contact */
                LEFT,
                /** Middle mouse button */
                MIDDLE,
                /** Right mouse button or Pen barrel button */
                RIGHT,
            }

            /**
             * Indicates which pointer device buttons are being pressed, expressed as a bitmask. Bit values are:
             *
             *   - 0: No button pressed
             *   - 1: Left mouse button pressed, or Touch contact or Pen contact
             *   - 2: Right mouse button pressed, or Pen contact with barrel button pressed
             *   - 4: Middle mouse button pressed
             */
            // TODO not sure this is the right interpretation of the docs
            type Buttons = H.math.BitMask;
        }

        /**
         * WheelEvent is fired when the mouse wheel is used over the map. It contains information about cursor position and the map object which resides directly under the cursor.
         * @property delta {number} - Wheel move delta
         * @property viewportX {number} - Map viewport x position
         * @property viewportY {number} - Map viewport y position
         * @property target {(H.map.Object | H.Map)} - Target for the event
         * @property originalEvent {Event} - Original mouse wheel event
         * @property currentTarget {(H.map.Object | H.Map)} - Object which has listener attached
         * @property type {string} - Name of the dispatched event
         * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
         */
        class WheelEvent extends H.util.Event {
            /**
             * Constructor
             * @param deltaY {number} - The wheel move delta on y-axis
             * @param viewportX {number} - The x coordinate on the viewport
             * @param viewportY {number} - The y coordinate on the viewport
             * @param target {(H.Map | H.map.Object)} - The event's target element
             * @param originalEvent {Event} - target of the event
             */
            constructor(deltaY: number, viewportX: number, viewportY: number, target: (H.Map | H.map.Object), originalEvent: Event);

            delta: number;
            viewportX: number;
            viewportY: number;
            originalEvent: Event;
        }
    }

    /***** math *****/
    namespace math {
        /**
         * A signed 32 bit integer (JS restriction) where bit operator can be applied to. The range is [-2,147,483,648 ... 2,147,483,647] or [-2^31 ... 2^31 − 1]
         */
        type BitMask = number;

        /**
         * An interface for a 2-dimensional point consisting a x and y coordinate.
         * @property x {number} - The point's coordinate on X-axis.
         * @property y {number} - The point's coordinate on Y-axis.
         */
        interface IPoint {
            x: number;
            y: number;
        }

        /**
         * An interface for a 2-dimensional size consisting a with and a height.
         * @property w {number} - The size's width.
         * @property h {number} - The size's height.
         */
        interface ISize {
            w: number;
            h: number;
        }

        /**
         * Class represents a 2-dimensional point, defined by x and y coordinates.
         * @property x {number} - The point's coordinate on X-axis.
         * @property y {number} - The point's coordinate on Y-axis.
         */
        class Point implements IPoint {
            /**
             * Constructor
             * @param x {number} - The point's coordinate on X-axis.
             * @param y {number} - The point's coordinate on Y-axis.
             */
            constructor(x: number, y: number);

            /**
             * Sets the x and y coordinate of this point
             * @param x {number} - The point's coordinate on X-axis.
             * @param y {number} - The point's coordinate on Y-axis.
             */
            set(x: number, y: number): void;

            /**
             * This method creates a copy of the current point.
             * @param opt_out {H.math.Point=} - An optional point to store the copied values
             * @returns {H.math.Point} - The clone of the point
             */
            clone(opt_out?: Point): Point;

            /**
             * This method adds given point coordinates to the current one.
             * @param other {H.math.IPoint} - The point to add
             * @returns {H.math.Point} - the point itself after adding
             */
            add(other: IPoint): Point;

            /**
             * This method subtracts given point coordinates from the current point.
             * @param other {H.math.IPoint} - The point to subtract
             * @returns {H.math.Point} - the point itself after subtracting
             */
            sub(other: IPoint): Point;

            /**
             * This method scales the current point coordinates by the given factor(s).
             * @param factor {number} - multiplication factor
             * @param opt_factorY {number=} - If omitted, the factor argument is used
             * @returns {H.math.Point} - the point itself after scaling
             */
            scale(factor: number, opt_factorY?: number): Point;

            /**
             * This method rounds the x and y coordinates of the point.
             * @returns {H.math.Point} - the point itself after rounding
             */
            round(): Point;

            /**
             * Rounds the x and y coordinates to the next smaller integer values.
             * @returns {H.math.Point} - the point itself after flooring
             */
            floor(): Point;

            /**
             * Rounds the x and y coordinates to the next greater integer values.
             * @returns {H.math.Point} - the point itself after ceiling
             */
            ceil(): Point;

            /**
             * This method compares current point coordinates with the supplied point coordinates.
             * @param other {H.math.IPoint} - The point to compare to.
             * @returns {boolean} - True if the points are equal
             */
            equals(other: IPoint): boolean;

            /**
             * Calculates the closest point on a given line
             * @param start {H.math.IPoint} - The start point of the line
             * @param end {H.math.IPoint} - The end point of the line
             * @returns {H.math.IPoint} - the closest point
             */
            getNearest(start: IPoint, end: IPoint): IPoint;

            /**
             * This method calculates the distance to a point supplied by the caller.
             * @param other {H.math.IPoint}
             * @returns {number}
             */
            distance(other: IPoint): number;

            /**
             * This method creates a Point instance from a given IPoint object.
             * @param iPoint {H.math.IPoint} - The IPoint object to use
             * @returns {H.math.Point} - the created Point instance
             */
            static fromIPoint(iPoint: IPoint): Point;

            x: number;
            y: number;
        }

        /**
         * Class defines a rectangle in 2-dimensional geometric space. It is used to represent the area in projected space.
         */
        class Rect {
            /**
             * Constructor
             * @param left {number} - The rectangle's left edge x value
             * @param top {number} - The rectangle's top edge y value
             * @param right {number} - The rectangle's right edge x value
             * @param bottom {number} - The rectangle's bottom edge y value
             */
            constructor(left: number, top: number, right: number, bottom: number);

            /**
             * To set all values of the rectangle's edges
             * @param left {number} - The rectangle's left edge x value
             * @param top {number} - The rectangle's top edge y value
             * @param right {number} - The rectangle's right edge x value
             * @param bottom {number} - The rectangle's bottom edge y value
             */
            set(left: number, top: number, right: number, bottom: number): void;

            /**
             * To get the rectangle's top-left vertex
             * @returns {H.math.Point}
             */
            getTopLeft(): H.math.Point;

            /**
             * To get the rectangle's bottom-right vertex
             * @returns {H.math.Point}
             */
            getBottomRight(): H.math.Point;

            /**
             * Method checks if provided coordinates lie within rectangle.
             * @param x {number} - x-coordinate to check
             * @param y {number} - y-coordinate to check
             * @returns {boolean} - returns true if coordinates lie within rectangle, if parameters are isNaN returns false
             */
            containsXY(x: number, y: number): boolean;

            /**
             * To create a rectangle from a top-left and bottom-right point pair.
             * @param topLeft {H.math.IPoint} - the top-left vertex of the rectanle
             * @param bottomRight {H.math.IPoint} - the bottom-right vertex of the rectanle
             * @returns {H.math.Rect} - returns the rectangular area defined by the top-left and bottom-right vertices
             */
            static fromPoints(topLeft: H.math.IPoint, bottomRight: H.math.IPoint): H.math.Rect;

            /**
             * To clone a rectangle
             * @returns {H.math.Rect}
             */
            clone(): H.math.Rect;
        }

        /**
         * Class for representing sizes consisting of a width and height.
         * @property w {number} - The size's width value
         * @property h {number} - The size's height value
         */
        class Size {
            /**
             * Constructor
             * @param width {number} - Width.
             * @param height {number} - Height.
             */
            constructor(width: number, height: number);

            w: number;
            h: number;
        }
    }

    /***** places *****/

    /***** service *****/
    namespace service {
        /**
         * Abstract rest service class
         */
        class AbstractRestService implements H.service.IConfigurable {
            /**
             * Constructor
             * @param opt_options {H.service.AbstractRestService.Options=}
             */
            constructor(opt_options?: H.service.AbstractRestService.Options);

            /**
             * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
             * @param appId {string} - The application ID to identify the client against the platform (mandatory to provide)
             * @param appCode {string} - The application code to identify the client against the platform (mandatory to provide)
             * @param useHTTPS {boolean} - Indicates whether secure communication should be used, default is false
             * @param useCIT {boolean} - Indicates whether the Customer Integration Testing should be used, default is false
             * @param opt_baseUrl {H.service.Url=} - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in
             * the opt_baseUrl to use HTTPS.
             * @returns {H.service.IConfigurable}
             */
            configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;
        }

        namespace AbstractRestService {
            type Options = any;
        }

        /**
         * This property specifies collection of pre-configured HERE layers
         */
        interface DefaultLayers {
            vector: {
                normal: {
                    map: H.map.layer.TileLayer,
                    traffic: H.map.layer.TileLayer,
                    trafficincidents: H.map.layer.MarkerTileLayer
                }
            };
            raster: {
                normal: H.service.MapType;
                satellite: H.service.MapType;
                terrain: H.service.MapType;
            };
        }

        /**
         * This class encapsulates Enterprise Routing REST API as a service stub. An instance of this class can be retrieved by calling the factory method on a platform instance.
         * H.service.Platform#getEnterpriseRoutingService.
         */
        class EnterpriseRoutingService extends H.service.AbstractRestService {
            /**
             * Constructor
             * @param opt_options {H.service.EnterpriseRoutingService.Options=}
             */
            constructor(opt_options?: H.service.EnterpriseRoutingService.Options);

            /**
             * This method sends a "calculateroute" request to Enterprise Routing REST API and calls the onResult callback function once the service response was received - providing
             * a H.service.ServiceResult object - or the onError callback if a communication error occurred.
             * @param calculateRouteParams {H.service.ServiceParameters} - the service parameters to be sent with the routing request.
             * @param onResult {function(H.service.ServiceResult)} - this function will be called once the Enterprise Routing REST API provides a response to the request.
             * @param onError {function(Error)} - this function will be called if a communication error occurs during the JSON-P request
             */
            calculateRoute(calculateRouteParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): void;

            /**
             * This method sends a "getroute" request to Enterprise Routing REST API and calls the onResult callback function once the service response was received - providing
             * a H.service.ServiceResult object - or the onError callback if a communication error occurred.
             * @param getRouteParams {H.service.ServiceParameters} - the service parameters to be sent with the routing request.
             * @param onResult {function(H.service.ServiceResult)} - this function will be called once the Enterprise Routing REST API provides a response to the request.
             * @param onError {function(Error)} - this function will be called if a communication error occurs during the JSON-P request
             */
            getRoute(getRouteParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): void;

            /**
             * This method sends a "getlinkinfo" request to Enterprise Routing REST API and calls the onResult callback function once the service response was received - providing
             * a H.service.ServiceResult object - or the onError callback if a communication error occured.
             * @param getLinkInfoParams {H.service.ServiceParameters} - the service parameters to be sent with the routing request.
             * @param onResult {function(H.service.ServiceResult)} - this function will be called once the Enterprise Routing REST API provides a response to the request.
             * @param onError {function(Error)} - this function will be called if a communication error occurs during the JSON-P request
             */
            getLinkInfo(getLinkInfoParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): void;

            /**
             * This method sends a "calculateisoline" request to Enterprise Routing REST API and calls the onResult callback function once the service response was received - providing
             * a H.service.ServiceResult object - or the onError callback if a communication error occurred.
             * @param calculateIsolineParams {H.service.ServiceParameters} - the service parameters to be sent with the routing request.
             * @param onResult {function(H.service.ServiceResult)} - this function will be called once the Enterprise Routing REST API provides a response to the request.
             * @param onError {function(Error)} - this function will be called if a communication error occurs during the JSON-P request
             */
            calculateIsoline(calculateIsolineParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): void;
        }

        namespace EnterpriseRoutingService {
            /**
             * @property subDomain {string=} - The sub-domain of the routing service relative to the platform's base URL (default is 'route')
             * @property path {string=} - The path of the map tile service, default is "routing/7.2"
             * @property baseUrl {H.service.Url=} - The base URL of the service, defaults to the the platform's base URL if instance was created using H.service.Platform#getEnterpriseRoutingService
             * method.
             */
            interface Options {
                subDomain?: string | undefined;
                path?: string | undefined;
                baseUrl?: H.service.Url | undefined;
            }
        }

        /**
         * This class encapsulates the Geocoding REST API in a service stub with calls to its various resources implemented.
         */
        class GeocodingService extends H.service.AbstractRestService {
            /**
             * Constructor
             * @param opt_options {H.service.GeocodingService.Options=}
             */
            constructor(opt_options?: H.service.GeocodingService.Options);

            /**
             * This method sends a reverse geocoding request to Geocoder REST API and calls the onResult callback function once the service response was received - providing a H.service.ServiceResult
             * object - or the onError callback if a communication error occured.
             * @param geoodingParams {H.service.ServiceParameters} - the service parameters to be sent with the geocoding request.
             * @param onResult {function(H.service.ServiceResult)} - this function will be called once the Geocoder REST API provides a response to the request.
             * @param onError {function(Error)} - this function will be called if a communication error occurs during the JSON-P request
             * @returns {H.service.JsonpRequestHandle}
             */
            geocode(geoodingParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): H.service.JsonpRequestHandle;

            /**
             * This method sends a reverse geocoding request to Geocoder REST API and calls the onResult callback function once the service response was received - providing a H.service.ServiceResult
             * object - or the onError callback if a communication error occured.
             * @param reverseGeocodingParams {H.service.ServiceParameters} - the service parameters to be sent with the reverse geocoding request
             * @param onResult {function(H.service.ServiceResult)} - this function will be called once the Geocoder REST API provides a response to the request.
             * @param onError {function(Error)} - this function will be called if a communication error occurs during the JSON-P request
             * @returns {H.service.JsonpRequestHandle}
             */
            reverseGeocode(reverseGeocodingParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): H.service.JsonpRequestHandle;

            /**
             * This method sends a landmark search request to Geocoder REST API and calls the onResult callback function once the service response was received - providing a H.service.ServiceResult
             * object - or the onError callback if a communication error occured.
             * @param searchParams {H.service.ServiceParameters} - the service parameters to be sent with the reverse geocoding request
             * @param onResult {function(H.service.ServiceResult)} - this function will be called once the Geocoder REST API provides a response to the request.
             * @param onError {function(Error)} - this function will be called if a communication error occurs during the JSON-P request
             * @returns {H.service.JsonpRequestHandle}
             */
            search(searchParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): H.service.JsonpRequestHandle;
        }

        namespace GeocodingService {
            /**
             * @property subDomain {string=} - the sub-domain of the geo-coding service relative to the platform's base URL, default is 'geocoder'
             * @property path {string=} - the path of the Geocoding service, default is '6.2'
             */
            interface Options {
                subDomain?: string | undefined;
                path?: string | undefined;
            }
        }

        /**
         * An interface represents an object, that can be configured credentials, settings etc. by H.service.Platform
         */
        interface IConfigurable {
            /**
             * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
             * @param appId {string} - The application ID to identify the client against the platform (mandatory to provide)
             * @param appCode {string} - The application code to identify the client against the platform (mandatory to provide)
             * @param useHTTPS {boolean} - Indicates whether secure communication should be used, default is false
             * @param useCIT {boolean} - Indicates whether the Customer Integration Testing should be used, default is false
             * @param opt_baseUrl {H.service.Url=} - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in
             * the opt_baseUrl to use HTTPS.
             * @returns {H.service.IConfigurable}
             */
            configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;
        }

        /**
         * @property id {number} - the ID associated internally with this request
         * @property cancel {function()} - this function cancels the request and invokes the errback function
         */
        interface JsonpRequestHandle {
            id: number;

            cancel(): void;
        }

        /**
         * This class encapsulates a map tile end point of the HERE Map Tile API.
         */
        class MapTileService extends H.util.EventTarget implements H.service.IConfigurable {
            /**
             * Constructor
             * @param opt_options {H.service.MapTileService.Options=}
             */
            constructor(opt_options?: H.service.MapTileService.Options);

            /**
             * This method returns the map tile type provided by this service.
             * @returns {string} - the map tile type
             */
            getType(): string;

            /**
             * This method returns the map tile service's newest version hash.
             * @returns {string} - meta information for this map tile service
             */
            getVersion(): string;

            /**
             * This method returns the map tile service's meta information. The method will return an object once the map tile service's data has been fetched.
             * @returns {(H.service.MapTileService.Info | undefined)} - meta information for this map tile service
             */
            getInfo(): H.service.MapTileService.Info | void;

            /**
             * This method creates a tile provider which uses the specified map tiles. This provider can be used as a data source for an ImageTileLayer.
             * @param tileType {string} - the tile type
             * @param scheme {string} - the tile scheme
             * @param tileSize {number} - the tile size
             * @param format {string} - the tile image format
             * @param opt_additionalParameters {H.service.ServiceParameters=} - a hash of additional parameters to be
             * @param opt_options {H.service.TileProviderOptions=} - additional set of options for the provider
             * @returns {H.map.provider.ImageTileProvider} - the image tile provider
             */
            createTileProvider(tileType: string, scheme: string, tileSize: number, format: string, opt_additionalParameters?: H.service.ServiceParameters, opt_options?: H.service.TileProviderOptions):
                H.map.provider.ImageTileProvider;

            /**
             * This method creates a tile layer. This layer can be used as a layer on a map's data model.
             * @param tileType {string} - the tile type
             * @param scheme {string} - the tile scheme
             * @param tileSize {number} - the tile size
             * @param format {string} - the tile image format
             * @param opt_additionalParameters {H.service.ServiceParameters=} - Additional parameters for the map tile service
             * @param opt_opacity {number=} - The opacity of this layer
             * @param opt_dark {boolean=} - Indicates whether the content of this layer is mainly dark, default is false See also H.Map.Options#autoColor
             * @param opt_options {H.service.TileProviderOptions=} - additional set of options for the provider
             * @returns {H.map.layer.TileLayer} - the tile layer
             */
            createTileLayer(tileType: string, scheme: string, tileSize: number, format: string, opt_additionalParameters?: H.service.ServiceParameters, opt_opacity?: number, opt_dark?: boolean,
                opt_options?: H.service.TileProviderOptions): H.map.layer.TileLayer;

            /**
             * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
             * @param appId {string} - The application ID to identify the client against the platform (mandatory to provide)
             * @param appCode {string} - The application code to identify the client against the platform (mandatory to provide)
             * @param useHTTPS {boolean} - Indicates whether secure communication should be used, default is false
             * @param useCIT {boolean} - Indicates whether the Customer Integration Testing should be used, default is false
             * @param opt_baseUrl {H.service.Url=} - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified in
             * the opt_baseUrl to use HTTPS.
             * @returns {H.service.IConfigurable}
             */
            configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;
        }

        namespace MapTileService {
            /**
             * @property maps {Object<string, Object>} -
             * @property schemes {Object<string, Object>} -
             * @property tiletypes {Object<string, Object>} -
             * @property formats {Object<string, Object>} -
             * @property resolutions {Object<string, Object>} -
             * @property languages {Object<string, Object>} -
             */
            interface Info {
                maps: { [key: string]: any };
                schemes: { [key: string]: any };
                tiletypes: { [key: string]: any };
                formats: { [key: string]: any };
                resolutions: { [key: string]: any };
                languages: { [key: string]: any };
            }

            /**
             * @property type {string=} - the type of the map tile service to communicate with, e.g. 'base' (default), 'aerial', etc. (refer to the Map Tile REST API documentation for available types)
             * @property version {string=} - the map version hash to use for retrieving tiles, default is newest and will be automatically updated
             * @property subDomain {string=} - the sub-domain of the map tile service relative to the platform's base URL, default is 'maps'
             * @property path {string=} - the path of the map tile service, default is 'maptile/2.1'
             */
            interface Options {
                type?: string | undefined;
                version?: string | undefined;
                subDomain?: string | undefined;
                path?: string | undefined;
            }
        }

        /**
         * A map type is an object holding tile layers corresponding to a map type (e.g. 'normal', 'satellite' or 'terrain'). A map type contains at least a map property which defines the basic
         * map layer for a given map type. In addition it can hold other map layers with the given style, e.g. base, xbase, traffic etc.
         * {@link https://developer.here.com/documentation/maps/content/api_reference/H.service.html#.MapType}
         * @property map {H.map.layer.TileLayer} - the basic map tiles with all features and labels
         * @property mapnight {H.map.layer.TileLayer} - the basic map tiles with all features and labels (night mode)
         * @property xbase {H.map.layer.TileLayer=} - map tiles without features and labels
         * @property xbasenight {H.map.layer.TileLayer=} - map tiles without features and labels (night mode)
         * @property base {H.map.layer.TileLayer=} - map tiles without labels
         * @property basenight {H.map.layer.TileLayer=} - map tiles without labels (night mode)
         * @property trafficincidents {H.map.layer.TileLayer=} - map tiles with traffic flow highlighting
         * @property transit {H.map.layer.TileLayer=} - map tiles with public transit lines highlighted
         * @property labels {H.map.layer.TileLayer=} - transparent map tiles with labels only
         */
        interface MapType {
            map: H.map.layer.TileLayer;
            mapnight?: H.map.layer.TileLayer | null | undefined;
            xbase: H.map.layer.TileLayer;
            xbasenight?: H.map.layer.TileLayer | null | undefined;
            base: H.map.layer.TileLayer;
            basenight?: H.map.layer.TileLayer | null | undefined;
            trafficincidents?: H.map.layer.MarkerTileLayer | null | undefined;
            transit?: H.map.layer.TileLayer | undefined;
            labels: H.map.layer.TileLayer;
        }

        /**
         * Places service implements a low level places RestApi access. Please refer to Restful API documentation for providing parameters and handling response objects.
         */
        class PlacesService extends H.service.AbstractRestService {
            /**
             * Constructor
             * @param opt_options {H.service.PlacesService.Options=}
             */
            constructor(opt_options?: H.service.PlacesService.Options);

            /**
             * This is generic method to query places RestAPI.
             * @param entryPoint {H.service.PlacesService.EntryPoint} - can be one of available entry points H.service.PlacesService.EntryPoint i.e value of H.service.PlacesService.EntryPoint.SEARCH
             * @param entryPointParams {Object} - parameter map key value pairs will be transformed into the url key=value parametes. For entry point parameters description please refer to places
             * restful api documentation documentation for available parameters for chose entry point
             * @param onResult {Function} - callback which is called when result is returned
             * @param onError {Function} - callback which is called when error occured (i.e request timeout)
             * @returns {H.service.JsonpRequestHandle} - jsonp request handle
             */
            request(entryPoint: H.service.PlacesService.EntryPoint, entryPointParams: {}, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void):
                H.service.JsonpRequestHandle;

            /**
             * Function triggers places api 'search' entry point. Please refer to documentation for parameter specification and response handling.
             * @param searchParams {H.service.ServiceParameters} - places api search entry point parameters please refer to places api documentation
             * @param onResult {Function}
             * @param onError {Function}
             * @returns {H.service.JsonpRequestHandle} - jsonp request handle
             */
            search(searchParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): H.service.JsonpRequestHandle;

            /**
             * Function triggers places api 'suggestions' entry point. Please refer to documentation for parameter specification and response handling.
             * @param suggestParams {H.service.ServiceParameters} - places api suggest entry point parameters please refer to places api documentation
             * @param onResult {Function}
             * @param onError {Function}
             * @returns {H.service.JsonpRequestHandle} - jsonp request handle
             */
            suggest(suggestParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): H.service.JsonpRequestHandle;

            /**
             * Function triggers places api 'explore' entry point. Please refer to documentation for parameter specification and response handling.
             * @param exploreParams {H.service.ServiceParameters} - places api explore entry point parameters please refer to places api documentation
             * @param onResult {Function}
             * @param onError {Function}
             * @returns {H.service.JsonpRequestHandle} - jsonp request handle
             */
            explore(exploreParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): H.service.JsonpRequestHandle;

            /**
             * Function triggers places api 'around' entry point. Please refer to documentation for parameter specification and response handling.
             * @param aroundParams {H.service.ServiceParameters} - places api around entry point parameters please refer to places api documentation
             * @param onResult {Function}
             * @param onError {Function}
             * @returns {H.service.JsonpRequestHandle} - jsonp request handle
             */
            around(aroundParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): H.service.JsonpRequestHandle;

            /**
             * Function triggers places api 'here' entry point. Please refer to documentation for parameter specification and response handling.
             * @param hereParams {H.service.ServiceParameters} - places api here entry point parameters please refer to places api documentation
             * @param onResult {Function}
             * @param onError {Function}
             * @returns {H.service.JsonpRequestHandle} - jsonp request handle
             */
            here(hereParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): H.service.JsonpRequestHandle;

            /**
             * Function triggers places api 'categories' entry point. Please refer to documentation for parameter specification and response handling.
             * @param categoriesParams {H.service.ServiceParameters} - places api here entry point parameters please refer to places api documentation
             * @param onResult {Function}
             * @param onError {Function}
             * @returns {H.service.JsonpRequestHandle} - jsonp request handle
             */
            categories(categoriesParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): H.service.JsonpRequestHandle;

            /**
             * This method should be used to follow hyperlinks available in results returned by dicovery queries.
             * @param hyperlink {string}
             * @param onResult {Function}
             * @param onError {Function}
             * @param opt_additionalParameters {Object=} - additional parameters to send with request
             * @returns {H.service.JsonpRequestHandle} - jsonp resquest handle
             */
            follow(hyperlink: string, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void, opt_additionalParameters?: {}): H.service.JsonpRequestHandle;
        }

        namespace PlacesService {
            /**
             * List of available entry points
             */
            enum EntryPoint {
                SEARCH,
                SUGGEST,
                EXPLORE,
                AROUND,
                HERE,
                CATEGORIES,
            }

            /**
             * @property subDomain {string=} - the sub-domain of the places service relative to the platform's base URL, default is 'places'
             * @property path {string=} - the path of the places service, default is 'places/v1'
             * @property baseUrl {H.service.Url=} - an optional base URL if it differs from the platform's default base URL
             */
            interface Options {
                subDomain?: string | undefined;
                path?: string | undefined;
                baseUrl?: H.service.Url | undefined;
            }
        }

        /**
         * The Platform class represents central class from which all other service stubs are created. It also contains the shared settings to be passed to the individual service stubs, for example
         * the root URL of the platform, application credentials, etc.
         */
        class Platform {
            /**
             * Constructor
             * @param options {H.service.Platform.Options}
             */
            constructor(options: H.service.Platform.Options);

            /**
             * Method attempts to configure object that implements H.service.IConfigurable
             * @param configurable {H.service.IConfigurable}
             * @returns {H.service.IConfigurable}
             */
            configure(configurable: H.service.IConfigurable): H.service.IConfigurable;

            /**
             * This method enables or disables HTTPS communication with the platform
             * @param useHTTPS {boolean} - a boolean value indicating whether to communicate with the platform via HTTPS
             */
            setUseHTTPS(useHTTPS: boolean): void;

            /**
             * This method configures whether to use the "customer integration testing" instance of the platform.
             * @param useCIT {boolean} - a boolean value indicating whether the CIT platform instance is to be used
             */
            setUseCIT(useCIT: boolean): void;

            /**
             * This method modifies the base URL to be used when creating service stubs.
             * @param baseUrl {H.service.Url} - the new base URL to use
             */
            setBaseUrl(baseUrl: H.service.Url): void;

            /**
             * This method returns the currently used base URL.
             * @returns {H.service.Url}
             */
            getBaseUrl(): H.service.Url;

            /**
             * This method returns an instance of {@link H.service.traffic.Service} to query the Traffic API Traffic Incident Data
             * @returns {H.service.traffic.Service} - a new places service instance
             */
            getTrafficService(opt_options?: H.service.traffic.Service.Options): H.service.traffic.Service;

            /**
             * This method returns an instance of H.service.MapTileService to query the Map Tile API.
             * @param opt_options {H.service.MapTileService.Options=}
             * @returns {H.service.MapTileService}
             */
            getMapTileService(opt_options?: H.service.MapTileService.Options): H.service.MapTileService;

            /**
             * This method returns an instance of H.service.venues.Service to query the Venue Maps API
             * @param opt_params {H.service.venues.Service.Options=} - additional service parameters
             * @returns {H.service.venues.Service}
             */
            getVenueService(opt_params?: H.service.venues.Service.Options): H.service.venues.Service;

            /**
             * This method returns an instance of H.service.metaInfo.Service to query the Map Tile API Metainfo Tiles
             * @param opt_params {H.service.metaInfo.Service.Options=} - additional service parameters
             * @returns {H.service.metaInfo.Service}
             */
            getMetaInfoService(opt_params?: H.service.metaInfo.Service.Options): H.service.metaInfo.Service;

            /**
             * This method creates a pre-configured set of HERE tile layers for convenient use with the map.
             * @param opt_tileSize {(H.service.Platform.DefaultLayersOptions | number)=} - When a number – optional tile size to be queried from the HERE Map Tile API, default is 256.
             * If this parameter is a number, it indicates the tile size to be queried from the HERE Map Tile API (the default value is 256); if this parameter is an object, it represents
             * configuration options for the layer and all the remaining parameters (below) should be omitted
             * @param opt_ppi {number=} - optional 'ppi' parameter to use when querying tiles, default is not specified
             * @param opt_lang {string=} - optional primary language parameter, default is not specified
             * @param opt_secondaryLang {string=} - optional secondary language parameter, default is not specified
             * @param opt_style {string=} - optional 'style' parameter to use when querying map tiles, default is not specified
             * @param opt_pois {(string | boolean)=} - indicates if pois are displayed on the map. Pass true to indicate that all pois should be visible. Alternatively you can specify mask for the
             * POI Categories as described at the Map Tile API documentation POI Categories chapter.
             * @returns {H.service.DefaultLayers} - a set of tile layers ready to use
             */
            createDefaultLayers(opt_tileSize?: (H.service.Platform.DefaultLayersOptions | number), opt_ppi?: number,
                opt_lang?: string, opt_secondaryLang?: string, opt_style?: string,
                opt_pois?: (string | boolean)): H.service.DefaultLayers;

            /**
             * This method returns an instance of H.service.RoutingService to query the Routing API.
             * @param opt_options {H.service.RoutingService.Options=}
             * @returns {H.service.RoutingService}
             */
            getRoutingService(opt_options?: H.service.RoutingService.Options): H.service.RoutingService;

            /**
             * This method returns an instance of H.service.GeocodingService to query the Geocoder API
             * @param opt_options {H.service.GeocodingService.Options=} - an optional set of options for the new geocoding service to connect to
             * @returns {H.service.GeocodingService} - a new geocoding service instance
             */
            getGeocodingService(opt_options?: H.service.GeocodingService.Options): H.service.GeocodingService;

            /**
             * This method returns an instance of H.service.PlacesService to query the Places API.
             * @returns {H.service.PlacesService} - a new places service instance
             */
            getPlacesService(): H.service.PlacesService;

            /**
             * This method returns an instance of H.service.EnterpriseRoutingService to query the Enterprise Routing API.
             * @param opt_options {H.service.EnterpriseRoutingService.Options=}
             * @returns {H.service.EnterpriseRoutingService}
             */
            getEnterpriseRoutingService(opt_options?: H.service.EnterpriseRoutingService.Options): H.service.EnterpriseRoutingService;
        }

        namespace Platform {
            /**
             * Options used to create default layers
             * @property tileSize {number=} - tile size to be queried from the HERE Map Tile API, default is 256
             * @property ppi {number=} - 'ppi' parameter to use when querying tiles, default is not specified
             * @property lg {string=} - optional primary language parameter, default is not specified
             * @property lg2 {string=} - optional secondary language parameter, default is not specified
             * @property style {string=} - optional 'style' parameter to use when querying map tiles, default is not specified
             * @property pois {boolean=} - indicates if pois are displayed on the map
             * @property crossOrigin {(string | boolean=)} - indicates if CORS headers should be used for default layers, if false is specified, CORS headers are not set, defaults to 'anonymous'.
             * Be aware that storing of content is not possible if crossOrigin is not set to true (see H.Map#storeContent).
             */
            interface DefaultLayersOptions {
                tileSize?: number | undefined;
                ppi?: number | undefined;
                lg?: string | undefined;
                lg2?: string | undefined;
                style?: string | undefined;
                pois?: boolean | undefined;
                crossOrigin?: (string | boolean) | undefined;
            }

            /**
             * @property app_id {string} - The application ID to identify the client against the platform (mandatory to provide)
             * @property app_code {string} - The application code to identify the client against the platform (mandatory to provide)
             * @property baseUrl {H.service.Url=} - The base URL of the platform, default is http://api.here.com
             * @property useCIT {boolean=} - Indicates whether the Customer Integration Testing should be used, default is false
             * @property useHTTPS {boolean=} - Indicates whether secure communication should be used, default is false
             */
            interface Options {
                apikey: string;
                baseUrl?: H.service.Url | undefined;
                useCIT?: boolean | undefined;
                useHTTPS?: boolean | undefined;
            }

            /**
             * pre-configured set of HERE tile layers for convenient use with the map.
             */
            interface MapTypes {
                normal?: H.service.MapType | undefined;
                satellite?: H.service.MapType | undefined;
                terrain?: H.service.MapType | undefined;

                [key: string]: H.service.MapType | undefined;
            }
        }

        /**
         * This class encapsulates the Routing REST API as a service stub. An instance of this class can be retrieved by calling the factory method on a platform instance.
         * H.service.Platform#getRoutingService.
         */
        class RoutingService extends H.service.AbstractRestService {
            /**
             * Constructor
             * @param opt_options {H.service.RoutingService.Options=}
             */
            constructor(opt_options?: H.service.RoutingService.Options);

            /**
             * This method sends a "calculateroute" request to Routing REST API and calls the onResult callback function once the service response was received - providing a
             * H.service.ServiceResult object - or the onError callback if a communication error occured.
             * @param calculateRouteParams {H.service.ServiceParameters} - the service parameters to be sent with the routing request.
             * @param onResult {function(H.service.ServiceResult)} - this function will be called once the Routing REST API provides a response to the request.
             * @param onError {function(Error)} - this function will be called if a communication error occurs during the JSON-P request
             */
            calculateRoute(calculateRouteParams: H.service.ServiceParameters, onResult: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): void;
        }

        namespace RoutingService {
            /**
             * @property subDomain {string=} - the sub-domain of the routing service relative to the platform's base URL, default is 'route'
             * @property path {string=} - the path of the map tile service, default is 'routing/7.2'
             * @property baseUrl {H.service.Url=} - an optional base URL if it differs from the platform's default base URL
             */
            interface Options {
                subDomain?: string | undefined;
                path?: string | undefined;
                baseUrl?: H.service.Url | undefined;
            }
        }

        /**
         * This type encapsulates URL parameters to be sent to a HERE platform service.
         */
        interface ServiceParameters {
            [key: string]: string;
        }

        /**
         * This type encapsulates a response object provider by a HERE platform service.
         */
        interface ServiceResult {
            [key: string]: any;

            response?: {
                language?: string | undefined,
                route?: Array<{
                    leg: Array<{
                        maneuver: Array<{
                            id: string,
                            instruction: string,
                            length: number,
                            note: string[],
                            position: {
                                latitude: number,
                                longitude: number
                            },
                            shape: string[],
                            travelTime: number,
                            _type: string
                        }>
                    }>,
                    mode: {
                        feature: any[],
                        trafficMode: string,
                        transportModes: string[],
                        type: string
                    }
                    shape: string[],
                    summary: {
                        baseTime: number,
                        distance: number,
                        flags: string[],
                        text: string,
                        trafficTime: number,
                        travelTime: number
                    }
                    waypoint: Array<{
                        label: string,
                        linkId: string,
                        mappedPosition: {
                            latitude: number,
                            longitude: number
                        },
                        mappedRoadName: string,
                        originalPosition: {
                            latitude: number,
                            longitude: number
                        },
                        shapeIndex: number,
                        sideOfStreet: string,
                        spot: number,
                        type: string
                    }>
                }> | undefined,
                metaInfo: {}
            } | undefined;
            results?: {
                items?: any[] | undefined,
                next?: string | undefined
            } | undefined;
            search?: {
                context: {
                    href: string,
                    location: {
                        address: {
                            city: string,
                            country: string,
                            countryCode: string,
                            county: string,
                            district: string,
                            house: string,
                            postalCode: string,
                            stateCode: string,
                            street: string,
                            text: string
                        },
                        position: number[]
                    },
                    type: string
                }
            } | undefined;
            Response?: {
                MetaInfo: {
                    Timestamp: string
                },
                View: Array<{
                    Result: Array<{
                        Location: {
                            Address: {
                                AdditionalData: Array<{
                                    key: string,
                                    value: string
                                }>,
                                City: string,
                                Country: string,
                                County: string,
                                District: string,
                                HouseNumber: string,
                                Label: string,
                                PostalCode: string,
                                State: string,
                                Street: string
                            },
                            DisplayPosition: {
                                Latitude: number,
                                Longitude: number
                            },
                            LocationId: string,
                            LocationType: string,
                            MapView: {
                                BottomRight: {
                                    Latitude: number,
                                    Longitude: number
                                },
                                TopLeft: {
                                    Latitude: number,
                                    Longitude: number
                                }
                            },
                            NavigationPosition: Array<{
                                Latitude: number,
                                Longitude: number
                            }>
                        },
                        MatchLevel: string,
                        MatchQuality: {
                            City: number,
                            HouseNumber: number,
                            Street: number[]
                        },
                        MatchType: string,
                        Relevance: number
                    }>
                }>,
                isolines: any[]
            } | undefined;
        }

        /**
         * Options which are used to initialize the tile provider.
         * @property crossOrigin {boolean=} - The string to be set for the crossOrigin attribute for loaded images
         */
        interface TileProviderOptions {
            crossOrigin?: boolean | undefined;
        }

        namespace traffic {
            /**
             * TrafficIncindentsService provides functionality to the low level traffic incidents api Traffic API documentation where it is possible to retrieve traffic incident information on a
             * tile basis
             */
            class Service extends H.service.AbstractRestService {
                /**
                 * Constructor
                 * @param opt_options {H.service.Service.Options=}
                 */
                constructor(opt_options?: H.service.traffic.Service.Options);

                /**
                 * This method requests traffic incidents based on the service parameters provided.
                 * @param serviceParams {H.service.ServiceParameters}
                 * @param onResponse {function(H.service.ServiceResult)}
                 * @param onError {function()}
                 * @returns {H.service.JsonpRequestHandle}
                 */
                requestIncidents(serviceParams: H.service.ServiceParameters, onResponse: (result: H.service.ServiceResult) => void, onError: (error: Error) => void): H.service.JsonpRequestHandle;

                /**
                 * This method requests traffic incident information by tile coordinates
                 * @param x {number} - tile column number
                 * @param y {number} - tile row number
                 * @param z {number} - zoom level
                 * @param onResponse {function(H.service.ServiceResult)} - callback to handle service resposne
                 * @param onError {function()} - callback to habdle communication error
                 * @param opt_serviceParams {H.service.ServiceParameters=} - optional service parameters to be added to the request
                 * @returns {H.service.JsonpRequestHandle}
                 */
                requestIncidentsByTile(x: number, y: number, z: number, onResponse: (result: H.service.ServiceResult) => void, onError: (error: Error) => void,
                    opt_serviceParams?: H.service.ServiceParameters): H.service.JsonpRequestHandle;
            }

            namespace Service {
                /**
                 * @property subDomain {string=} - the sub-domain of the traffic incidents service relative to the platform's base URL, default is 'traffic'
                 * @property path {string=} - the path of the traffic incidents service, default is 'traffic/6.1'
                 * @property baseUrl {H.service.Url=} - an optional base URL if it differs from the platform's default base URL
                 */
                interface Options {
                    subDomain?: string | undefined;
                    path?: string | undefined;
                    baseUrl?: H.service.Url | undefined;
                }
            }
        }

        /**
         * This class represents a URL giving access to the individual parts that make up a URL,such as the scheme, host/domain, path, etc. Use the static parse method to populate a new URL object
         * from a URL string. Be aware that URLs with user and password like "ftp://user:password@foo.bar/" are not supported!
         */
        class Url {
            /**
             * Constructor
             * @param scheme {string} - the URL scheme (e.g. "http" or "https" or "mailto")
             * @param host {string} - the host (or domain) part of the URL
             * @param opt_path {string=} - the path following the host pointing to a resource
             * @param opt_params {Object=} - the query string parameters of this URL
             * @param opt_port {number=} - The port of the host on which the host listens. If a string is passed it must be convertible to an integer.
             * @param opt_anchor {string=} - an optional anchor part of the URL (usually preceded by '#');
             */
            constructor(scheme: string, host: string, opt_path?: string, opt_params?: {}, opt_port?: number, opt_anchor?: string);

            /**
             * This function parses a URL string and returns a H.service.Url object. The URL string must contain at least a scheme and a host.
             * @param url {string} - The URL string to parse.
             * @param opt_baseURL {string=} - The base URL to use to resolve relative URLs. If ommited the base URL of the document which loaded the API is taken.
             * @returns {H.service.Url} - the parsed URL object
             */
            static parse(url: string, opt_baseURL?: string): H.service.Url;

            /**
             * Clones this URL object. Optionally, mutations can be passed to this function to modify properties of the cloned object. Note that URL parameters are not replaced but merged with the
             * parameters of this instance.
             * @returns {H.service.Url} - the clone of the URL object
             */
            clone(): H.service.Url;

            /**
             * This function sets the scheme of this URL object.
             * @param scheme {string} - the new scheme
             * @returns {H.service.Url} - this URL object
             */
            setScheme(scheme: string): H.service.Url;

            /**
             * This function returns the scheme of this Url object.
             * @returns {string} - the scheme (for example 'http')
             */
            getScheme(): string;

            /**
             * This function sets the host of this URL object.
             * @param host {string} - the new host
             * @returns {H.service.Url} - this URL object
             */
            setHost(host: string): H.service.Url;

            /**
             * This function returns the host name of this Url object.
             * @returns {string} - the host (for example 'api.here.com')
             */
            getHost(): string;

            /**
             * This function sets the path of this URL object.
             * @param path {(string | undefined)} - the new path or a boolean to clear the path
             * @returns {H.service.Url} - this URL object
             */
            setPath(path: string | boolean): H.service.Url;

            /**
             * This function returns the path part of this Url object.
             * @returns {(string | undefined)} - the path (for example 'myresources/resource.html')
             */
            getPath(): string | void;

            /**
             * This function sets the specified parameters for this URL object. Keys in this object, which are associated with undefined values will be treated as query string parameters
             * with no value.
             * @param params {(Object | undefined)} - a hash of query string parameters specifying the parameters to be set.or a boolean to clear the parameters.
             * @returns {H.service.Url} - this URL object
             */
            setQuery(params?: {} | boolean): H.service.Url;

            /**
             * This function returns a boolean value indicating whether there are any query string parameter associated with this URL.
             * @returns {boolean} - true if there are parameters, false if none are present
             */
            hasQuery(): boolean;

            /**
             * This function returns the query object of this Url object.
             * @returns {Object} - the query object
             */
            getQuery(): {};

            /**
             * This function sets the anchor of this URL object.
             * @param anchor {(string | boolean | undefined)} - the new anchor or undefined to clear the anchor
             * @returns {H.service.Url} - this URL object
             */
            setAnchor(anchor?: string | boolean): H.service.Url;

            /**
             * This function returns the anchor of this Url object.
             * @returns {(string | undefined)} - the anchor
             */
            getAnchor(): string | void;

            /**
             * This function merges the provided parameters into this URL's existing parameters. Key-value pairs which are defined in the argument and this URL's parameters will be overwritten.
             * Key-value pairs which are defined in the argument and are not defined in this URL's parameters will be added. Prototype properties and function properties will not be merged.
             * @param other {Object} - the parmeters to be merged into this URL's query string parameters
             * @returns {H.service.Url} - this URL object
             */
            mergeQuery(other: {}): H.service.Url;

            /**
             * This function adds a sub-domain to the host of this URL object.
             * @param subDomain {string} - the sub domain (non-empty string) to be added
             * @returns {H.service.Url} - this URL object
             */
            addSubDomain(subDomain: string): H.service.Url;

            /**
             * This function adds a sub-path to this URL's path
             * @param subPath {string} - the path to be added
             * @returns {H.service.Url} - this URL object
             */
            addSubPath(subPath: string): H.service.Url;

            /**
             * This function formats this URL object to a full URL string.
             * @returns {string} - the URL's string representation
             */
            toString(): string;
        }

        namespace metaInfo {
            /**
             * This class encapsulates a Metainfo Tile end point of the HERE Map Tile API.
             */
            class Service extends H.util.EventTarget implements H.service.IConfigurable {
                /**
                 * Constructor
                 * @param opt_options {H.service.metaInfo.Service.Options=} - additional service parameters
                 */
                constructor(opt_options?: H.service.metaInfo.Service.Options);

                /**
                 * This method returns the meta info tile service's newest version hash.
                 * @returns {string} - meta information for this map tile service
                 */
                getVersion(): string;

                /**
                 * This method returns the meta info tile service's meta information. The method will return an object once the map tile service's data has been fetched.
                 * @returns {(H.service.metaInfo.Service.Info | undefined)} - meta information for this meta info tile service
                 */
                getInfo(): H.service.metaInfo.Service.Info | void;

                /**
                 * This method creates a tile provider which uses the meta info tile backend. This provider can be used as a data source for an TileLayer.
                 * @param tileSize {number} - The tile size
                 * @param pixelRatio {number} - The tile's pixel ratio, should be aligned with base map tile
                 * @param opt_categoryFilter {Array<string>=} - A list of meta-info category names which should be suppressed. See Metainfo Tile for valid category names.
                 * @param opt_additionalParameters {H.service.ServiceParameters=} - Additional parameters for the meta info service
                 * @param opt_tileType {string=} - the tile type (default is 'maptile')
                 * @param opt_scheme {string=} - the scheme for which the meta info tiles a requested (default is 'normal.day')
                 * @returns {H.map.provider.TileProvider} - the tile provider
                 */
                createTileProvider(tileSize: number, pixelRatio: number, opt_categoryFilter?: string[], opt_additionalParameters?: H.service.ServiceParameters, opt_tileType?: string,
                    opt_scheme?: string): H.map.provider.TileProvider;

                /**
                 * This method creates a tile layer. This layer can be used as a layer on a map's data model.
                 * @param tileSize {number} - The tile size
                 * @param pixelRatio {number} - The tile's pixel ratio, should be aligned with base map tile
                 * @param opt_categoryFilter {Array<string>=} - A list of meta-info category names which should be suppressed. See Metainfo Tile for valid category names.
                 * @param opt_additionalParameters {H.service.ServiceParameters=} - Additional parameters for the meta info service
                 * @param opt_tileType {string=} - the tile type (default is 'maptile')
                 * @param opt_scheme {string=} - the scheme for which the meta info tiles a requested (default is 'normal.day')
                 * @returns {H.map.layer.TileLayer} - the tile layer
                 */
                createTileLayer(tileSize: number, pixelRatio: number, opt_categoryFilter?: string[], opt_additionalParameters?: H.service.ServiceParameters, opt_tileType?: string,
                    opt_scheme?: string): H.map.layer.TileLayer;

                /**
                 * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
                 * @param appId {string} - The application ID to identify the client against the platform (mandatory to provide)
                 * @param appCode {string} - The application code to identify the client against the platform (mandatory to provide)
                 * @param useHTTPS {boolean} - Indicates whether secure communication should be used, default is false
                 * @param useCIT {boolean} - Indicates whether the Customer Integration Testing should be used, default is false
                 * @param opt_baseUrl {H.service.Url=} - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified
                 * in the opt_baseUrl to use HTTPS.
                 * @returns {H.service.IConfigurable}
                 */
                configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;
            }

            namespace Service {
                /**
                 * @property maps {Object<string, Object>} -
                 * @property schemes {Object<string, Object>} -
                 * @property tiletypes {Object<string, Object>} -
                 * @property formats {Object<string, Object>} -
                 * @property resolutions {Object<string, Object>} -
                 * @property languages {Object<string, Object>} -
                 */
                interface Info {
                    maps: { [key: string]: any };
                    schemes: { [key: string]: any };
                    tiletypes: { [key: string]: any };
                    formats: { [key: string]: any };
                    resolutions: { [key: string]: any };
                    languages: { [key: string]: any };
                }

                /**
                 * @property type {string=} - the type of the map tile service to communicate with, e.g. 'base' (default), 'aerial', etc. (refer to the Map Tile REST API documentation for
                 * available types)
                 * @property version {string=} - the map version hash to use for retrieving tiles, default is newest and will be automatically updated
                 * @property subDomain {string=} - the sub-domain of the map tile service relative to the platform's base URL, default is 'maps'
                 */
                interface Options {
                    type?: string | undefined;
                    version?: string | undefined;
                    subDomain?: string | undefined;
                }
            }

            /**
             * This class utilizes Metainfo Tiles functionality provided by the Map Tile API to load meta information about map objects (buildings, labels, public transport etc.).
             */
            class TileProvider extends H.map.provider.RemoteTileProvider {
                /**
                 * Constructor
                 * @param service {(H.service.metaInfo.Service | H.service.MapTileService)} - the tile service which holds information from about the source of the tiles
                 * @param opt_params {H.service.ServiceParameters=} - an additional set of URL parameters
                 * @param opt_options {H.service.metaInfo.TileProvider.Options=} - additional parameters
                 */
                constructor(service: (H.service.metaInfo.Service | H.service.MapTileService), opt_params?: H.service.ServiceParameters, opt_options?: H.service.metaInfo.TileProvider.Options);
            }

            namespace TileProvider {
                /**
                 * Configuration object which can be used to initialize the TileProvider.
                 * @property tileType {string=} - The tile type for which to request meta info
                 * @property scheme {string=} - The map scheme for which to request meta info
                 * @property tileCacheSize {number=} - The number of fully rendered spatial tiles that are cached for immediate reuse, default is 32
                 * @property tileSize {number=} - The size of the tiles rendered by this provider (must be power of 2, default is 256)
                 * @property pixelRatio {number=} - The pixel ratio to use for over-sampling in cases of high-resolution displays
                 * @property categoryFilter {Array<string>=} - A list of meta-info category names which should be suppressed. See Metainfo Tile for valid category names.
                 */
                interface Options {
                    tileType?: string | undefined;
                    scheme?: string | undefined;
                    tileCacheSize?: number | undefined;
                    tileSize?: number | undefined;
                    pixelRatio?: number | undefined;
                    categoryFilter?: string[] | undefined;
                }
            }
        }

        namespace venues {
            /**
             * The class represents the building in the venue hiearachy (see H.service.venues.Venue) and holds floors that belong to the building.
             */
            class Building extends H.map.Group {
                /**
                 * Constructor
                 * @param provider {H.map.provider.ObjectProvider} - The object provider of this venue building
                 * @param uid {string} - The unique identifier of this building
                 * @param minLevel {number} - The minimum floor level of this building
                 * @param maxLevel {number} - The maximum floor level of this building
                 */
                constructor(provider: H.map.provider.ObjectProvider, uid: string, minLevel: number, maxLevel: number);

                /**
                 * Method returns the parent object - venue (see H.service.venues.Venue) to which the building belongs to.
                 * @returns {H.service.venues.Venue}
                 */
                getVenue(): H.service.venues.Venue;

                /**
                 * Method returns the minimum floor level of this building.
                 * @returns {number}
                 */
                getMinLevel(): number;

                /**
                 * Method returns the maximum floor level of this building
                 * @returns {number}
                 */
                getMaxLevel(): number;

                /**
                 * Method returns the floor (see H.service.venues.Floor) if one was already loaded. This method doesn't make attempt to fetch the floor data.
                 * @param level {number} - floor level within minimum and maximum level boundaries for the building
                 * @returns {(H.service.venues.Floor | undefined)} - The floor object or undefined if floor was not loaded
                 */
                getFloor(level: number): H.service.venues.Floor | void;
            }

            /**
             * The class represents the floor object in the venue hierarchy (see H.service.venues.Venue). The class holds information about floor geometry and spaces (see H.service.venues.Space)
             * that belong to this floor.
             */
            class Floor extends H.map.Group {
                /**
                 * Constructor
                 * @param provider {H.map.provider.ObjectProvider} - The object provider of this venue floor
                 * @param data {*} - The meta data of this floor
                 * @param level {number} - The level of this floor
                 */
                constructor(provider: H.map.provider.ObjectProvider, data: any, level: number);

                /**
                 * Method returns the level of the floor in the building.
                 * @returns {number}
                 */
                getLevel(): number;

                /**
                 * Method returns map geometry that represents floor boundaries.
                 * @returns {(H.service.venues.Space | undefined)}
                 */
                getFloorSpace(): H.service.venues.Space | void;

                /**
                 * Method returns the H.map.Group of all spaces that belong to the floor.
                 * @returns {H.map.Group}
                 */
                getSpaces(): H.map.Group;

                /**
                 * Method returns parent object - building (see H.service.venues.Building) of the floor.
                 * @returns {H.service.venues.Building}
                 */
                getBuilding(): H.service.venues.Building;

                /**
                 * Method returns raw data associated with the floor. For more details on data format see
                 * http://developer.here.com/rest-apis/documentation/venue-maps/topics/resource-type-venue-interaction-tile-floor.html
                 * @returns {*} - the raw floor data object
                 */
                getData(): any;

                /**
                 * Method returns the space object with the given ID, that belongs to the floor.
                 * @param id {string} - The ID of the space.
                 * @returns {(H.service.venues.Space | undefined)} - The requested space or undefined if space not found.
                 */
                getSpace(id: string): H.service.venues.Space | void;
            }

            /**
             * This class encapsulates methods to call Venue Maps API endpoints.
             */
            class Service extends H.util.EventTarget implements H.service.IConfigurable {
                /**
                 * Constructor
                 * @param opt_options {H.service.venues.Service.Options=} - additional service parameters
                 */
                constructor(opt_options?: H.service.venues.Service.Options);

                /**
                 * This method sends a discovery request to the Venue Maps API and calls the onResult callback function once the service response was received - providing a H.service.ServiceResult
                 * object, or the onError callback if a communication error occured.
                 * @param serviceParams {H.service.ServiceParameters} - the service parameters to be sent with the discovery request
                 * @param onResult {function(H.service.ServiceResult)} - this function will be called once the Venue Maps API provides a response to the request
                 * @param onError {function(string)} - this function will be called if a communication error occurs during request and error type is passed as an argument
                 */
                discover(serviceParams: H.service.ServiceParameters, onResult: (res: H.service.ServiceResult) => void, onError: (s: string) => void): void;

                /**
                 * This method creates a tile layer which can be added to the map in order to see the venues. It uses Interaction Tile endpoint of the Venue Maps API, more at
                 * http://developer.here.com/rest-apis/documentation/venue-maps/topics/quick-start-get-interaction-tile.html.
                 * @param opt_options {H.service.venues.TileProvider.Options=} - Tile provider options
                 * @returns {H.map.layer.TileLayer} - the tile layer
                 */
                createTileLayer(opt_options?: H.service.venues.TileProvider.Options): H.map.layer.TileLayer;

                /**
                 * Method returns current state of the service.
                 * @returns {H.service.venues.Service.State} - State of the service
                 */
                getState(): H.service.venues.Service.State;

                /**
                 * This methods receive configuration parameters from the platform, that can be used by the object implementing the interface.
                 * @param appId {string} - The application ID to identify the client against the platform (mandatory to provide)
                 * @param appCode {string} - The application code to identify the client against the platform (mandatory to provide)
                 * @param useHTTPS {boolean} - Indicates whether secure communication should be used, default is false
                 * @param useCIT {boolean} - Indicates whether the Customer Integration Testing should be used, default is false
                 * @param opt_baseUrl {H.service.Url=} - The base URL of the platform, default is http://api.here.com. Note that if useHTTPS flag is passed it will override the URL scheme specified
                 * in the opt_baseUrl to use HTTPS.
                 * @returns {H.service.IConfigurable}
                 */
                configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, opt_baseUrl?: H.service.Url): H.service.IConfigurable;
            }

            namespace Service {
                /**
                 * @property subDomain {string=} - the sub-domain of the Venue Maps service relative to the platform's base URL, default is 'venue.maps'
                 * @property path {string=} - the path to append after host name when making requests to the Venue Maps API, default is empty
                 */
                interface Options {
                    subDomain?: string | undefined;
                    path?: string | undefined;
                }

                /**
                 * The state types of the H.service.venues.Service. Possible states are:
                 */
                enum State {
                    ERROR,
                    INIT,
                    READY,
                }
            }

            /**
             * Represents a spatial object for this space. Each space object contains data associated with that space and can be retrieved by using H.service.venues.Space#getData method.
             */
            class Space {
                /**
                 * Constructor
                 * @param provider {H.map.provider.ObjectProvider} - The provider of this object.
                 * @param uid {string} - The unique identifier of this space
                 * @param data {*} - The meta data of this space
                 * @param opt_isFloorSpace {boolean=} - Indicates whether this space represents a floor itself, defaults to false
                 */
                constructor(provider: H.map.provider.ObjectProvider, uid: string, data?: any, opt_isFloorSpace?: boolean);

                /**
                 * The method indicates whether the spatial object represents the whole floor space or a space within a floor boundaries, that belongs to the floor.
                 * @returns {boolean} - True if this spatial object represents the floor space.
                 */
                isFloorSpace(): boolean;

                /**
                 * This method sets custom style to use for rendering the labels. Should be called before the first render of the space, otherwise has no any effect. Note that due to the design
                 * consistency currently it is not allowed to change the font family and the size of the labels.
                 * @param labelStyle {(H.map.SpatialStyle | H.map.SpatialStyle.Options)} - Custom label style
                 */
                initLabelStyle(labelStyle: (H.map.SpatialStyle | H.map.SpatialStyle.Options)): void;

                /**
                 * Method returns parent object - floor (see H.service.venues.Floor) of the space.
                 * @returns {H.service.venues.Floor}
                 */
                getFloor(): H.service.venues.Floor;

                /**
                 * Method returns raw data associated with the space. For more details on data format see
                 * http://developer.here.com/rest-apis/documentation/venue-maps/topics/resource-type-venue-interaction-tile-space.html
                 * @returns {Object} - raw space data object
                 */
                getData(): {};
            }

            /**
             * This class represents a Venue Maps tile provider which requests venues tiles from a platform venue tile service.
             */
            class TileProvider extends H.map.provider.RemoteTileProvider {
                /**
                 * Constructor
                 * @param service {H.service.venues.Service}
                 * @param opt_options {H.service.venues.TileProvider.Options=}
                 */
                constructor(service: H.service.venues.Service, opt_options?: H.service.venues.TileProvider.Options);

                /**
                 * Method specifies which floor level of the venues must be fetched by provider. Floor level is global to all venues and defaults to 0.
                 * @param level {number}
                 */
                setCurrentLevel(level: number): void;

                /**
                 * Method returns the floor level that provider uses for tile fetching.
                 * @returns {number} - current provider's floor level
                 */
                getCurrentLevel(): number;
            }

            namespace TileProvider {
                /**
                 * Configuration object which can be used to initialize the TileProvider.
                 * @property tileCacheSize {number=} - The number of fully rendered spatial tiles that are cached for immediate reuse, default is 32
                 * @property pixelRatio {number=} - The pixel ratio to use for over-sampling in cases of high-resolution displays
                 * @property onSpaceCreated {function(H.service.venues.Space)=} - A callback function that is called on every created space (see H.service.venues.Space) object. The function can be
                 * used for space object styling.
                 */
                interface Options {
                    tileCacheSize?: number | undefined;
                    pixelRatio?: number | undefined;

                    onSpaceCreated?(space: H.service.venues.Space): void;
                }
            }

            /**
             * The class represents the venue, it is a root for the venue object heirarchy. The venue inherits from H.map.Group and holds building objects (see H.service.venues.Building).
             * Building objects hold floor objects (see H.service.venues.Floor) and inherit from H.map.Group as well. Leaf objects are spaces (see H.service.venues.Space) that are spatial map objects
             * and reside inside floor containers.
             */
            class Venue extends H.map.Group {
                /**
                 * Constructor
                 * @param provider {H.map.provider.ObjectProvider} - The object provider of this venue
                 * @param uid {string} - The unique identifier of this venue
                 */
                constructor(provider: H.map.provider.ObjectProvider, uid: string);

                /**
                 * Method returns the building object, that belongs to the venue, with the given ID . The method doesn't attempt to fetch building data.
                 * @param id {string} - the ID of the building
                 * @returns {(H.service.venues.Building | undefined)} - The requested building or undefined if building wasn't loaded
                 */
                getBuilding(id: string): H.service.venues.Building | void;

                /**
                 * Method returns map of all loaded buildings associated with the venue.
                 * @returns {Object<*, H.service.venues.Building>}
                 */
                getBuildings(): any;
            }
        }
    }

    /***** ui *****/
    namespace ui {
        /**
         * This class represents the base class for UI controls on the map.
         */
        class Control extends H.ui.base.Container {
            /**
             * This abstract method can be overridden by deriving classes to be invoked when the UI object&#x27;s unit system changes.
             * @param unitSystem {H.ui.UnitSystem} - the unit system the UI currently uses
             */
            onUnitSystemChange(unitSystem: H.ui.UnitSystem): void;

            /**
             * This abstract method can be overridden by deriving classes to be invoked when the underlying map engine changes.
             * @param engineType {H.Map.EngineType} - the engine type the map currently uses
             */
            onMapEngineTypeChange(engineType: H.Map.EngineType): void;

            /**
             * This method returns the map to which this control is attached.
             * @returns {?H.Map} - return the map
             */
            getMap(): H.Map;

            /**
             * This method returns the localization object which corresponds to the UI&#x27;s current locale.
             * @returns {H.ui.i18n.Localization}
             */
            getLocalization(): H.ui.i18n.Localization;

            /**
             * This method returns this control&#x27;s layout alignment.
             * @returns {H.ui.LayoutAlignment} - the control&#x27;s current layout alignment
             */
            getAlignment(): H.ui.LayoutAlignment;

            /**
             * This method sets the control&#x27;s layout alignments.
             * @param alignment {H.ui.LayoutAlignment} - The new alignment of the control
             * @returns {H.ui.Control} - returns this control instance
             */
            setAlignment(alignment: H.ui.LayoutAlignment): H.ui.Control;
        }

        /**
         * This class represents a distance measurement control which helps calculating distances between geographical locations indicated by the user clicks.
         */
        class DistanceMeasurement extends H.ui.Control {
            /**
             * Constructor
             * @param opt_options {H.ui.DistanceMeasurement.Options=} - optional parameters to be passed to this control
             */
            constructor(opt_options?: H.ui.DistanceMeasurement.Options);
        }

        namespace DistanceMeasurement {
            /**
             * @property alignment {H.ui.LayoutAlignment=} - the layout alignment which should be applied to this control, default is H.ui.LayoutAlignment.RIGHT_BOTTOM
             * @property startIcon {H.map.Icon=} - the icon to use for the first measurement point
             * @property stopoverIcon {H.map.Icon=} - the icon to use for the intermediate measurement points
             * @property endIcon {H.map.Icon=} - the icon to use for the last measurement point
             * @property splitIcon {H.map.Icon=} - the icon to use for indicating position under pointer over the line where new point will be created once user clicks
             * @property lineStyle {(H.map.SpatialStyle | H.map.SpatialStyle.Options)} - the style to use for connecting lines of the measurement points
             * @property distanceFormatter {function(number)=} - Optional function used for formatting a distance. By default distance measurement tool will do the formatting according to the
             * specified measurement unit (see H.ui.UI.Options#unitSystem)
             */
            interface Options {
                alignment?: H.ui.LayoutAlignment | undefined;
                startIcon?: H.map.Icon | undefined;
                stopoverIcon?: H.map.Icon | undefined;
                endIcon?: H.map.Icon | undefined;
                splitIcon?: H.map.Icon | undefined;
                lineStyle: H.map.SpatialStyle | H.map.SpatialStyle.Options;

                distanceFormatter?(n: number): void;
            }
        }

        /**
         * This class represents an information bubble bound to a geo-position on the map.
         */
        class InfoBubble extends base.Element {
            /**
             * Constructor
             * @param position {H.geo.IPoint} - the geo-position to which this info bubble corresponds
             * @param opt_options {H.ui.InfoBubble.Options=} - optional parameters to be passed to the info bubble
             */
            constructor(position: H.geo.IPoint, opt_options?: InfoBubble.Options);

            /**
             * This method sets the geo-position of this info bubble
             * @param position {(H.geo.IPoint | H.geo.Point)} - the new geo-position of this bubble
             */
            setPosition(position: H.geo.IPoint | H.geo.Point): void;

            /**
             * This method returns this info bubble's current state.
             * @returns {H.ui.InfoBubble.State} - this bubble's current state
             */
            getState(): InfoBubble.State;

            /**
             * This method sets the info bubble's state.
             * @param state {H.ui.InfoBubble.State} - the new state
             */
            setState(state: InfoBubble.State): void;

            /**
             * This method closes the info bubble (setting its state to CLOSED)
             */
            close(): void;

            /**
             * This method opens the info bubble (setting its state to OPEN)
             */
            open(): void;

            /**
             * This method returns the bubble's content element.
             *
             * Note: Before adding an info bubble to a UI object the content element is null.
             * @returns {?HTMLElement} - the content element of this info bubble
             */
            getContentElement(): HTMLElement;

            /**
             * This methods sets the content of the info bubble. This can either be a string (applied as innerHTML) to the content element of this info bubble or a HTML node which is appended
             * to the content element.
             * @param content {(string | Node)} - the content for this bubble
             */
            setContent(content: string | Node): void;
        }

        namespace InfoBubble {
            /**
             * This enumeration holds the state an info bubble can have.
             */
            enum State {
                /** This value represents the state where an info bubble is open and visible (value: 'open'). */
                OPEN,
                /** This value represents the state where an info bubble is closed and invisible (value: 'closed') */
                CLOSED,
            }

            interface Options {
                /**
                 * a callback to be invoked when the info bubble's state changes
                 * @param event {H.util.Event}
                 */
                onStateChange?(event: H.util.Event): void;

                /**
                 * content to be added to the info bubble
                 */
                content: string | Node;
            }
        }

        /**
         * This enumeration holds the possible layout alignments for the UI elements.
         */
        enum LayoutAlignment {
            TOP_LEFT,
            TOP_CENTER,
            TOP_RIGHT,
            LEFT_TOP,
            LEFT_MIDDLE,
            LEFT_BOTTOM,
            RIGHT_TOP,
            RIGHT_MIDDLE,
            RIGHT_BOTTOM,
            BOTTOM_LEFT,
            BOTTOM_CENTER,
            BOTTOM_RIGHT,
        }

        /**
         * This class represents a menu control allowing to control which map type the map shows, etc.
         */
        class MapSettingsControl extends H.ui.Control {
            /**
             * Constructor
             * @param opt_options {H.ui.MapSettingsControl.Options=} - optional parameters to be passed to this control
             */
            constructor(opt_options?: H.ui.MapSettingsControl.Options);

            /**
             * Sets the traffic incidents layer to be shown when activating the respective button on the map settings control.
             * @param incidentsLayer {H.map.layer.Layer} - the incidents layer
             */
            setIncidentsLayer(incidentsLayer: H.map.layer.Layer): void;
        }

        namespace MapSettingsControl {
            /**
             * The map type entry is an object containing a display name and a map type object to which it refers.
             * @property name {string} - label which describes the map type
             * @property mapType {H.service.MapType} - reference to map type
             */
            interface Entry {
                name: string;
                mapType: H.service.MapType;
            }

            /**
             * {@link https://developer.here.com/documentation/maps/api_reference/H.ui.MapSettingsControl.html#.Options}
             * @property alignment {H.ui.LayoutAlignment=} - the layout alignment which should be applied to this control, default is H.ui.LayoutAlignment.BOTTOM_RIGHT
             * @property entries {Array<H.ui.MapSettingsControl.MapTypeEntry>=} - the map type entries to be shown in this map settings control
             * @property incidents {H.map.layer.Layer} - the traffic incidents layer to be activated by the map settings control
             */
            interface Options {
                alignment?: H.ui.LayoutAlignment | undefined;
                baseLayers?: H.ui.MapSettingsControl.Entry[] | undefined;
                layers?: H.ui.MapSettingsControl.Entry[] | undefined;
            }
        }

        /**
         * This class represents the UI controls for panorama
         */
        class Pano extends H.ui.Control {
            /**
             * Constructor
             * @param opt_options {H.ui.Pano.Options=} - optional parameters to be passed to the map.
             */
            constructor(opt_options?: H.ui.Pano.Options);
        }

        namespace Pano {
            /**
             * @property alignment {H.ui.LayoutAlignment=} - the layout alignment which should be applied to this control, default is H.ui.LayoutAlignment.RIGHT_BOTTOM
             * @property mapTypes {H.service.MapTypes} - The map types to use
             */
            interface Options {
                alignment?: H.ui.LayoutAlignment | undefined;
                mapTypes: H.service.MapType;
            }
        }

        /**
         * This class represents a UI element showing the current zoom scale.
         */
        class ScaleBar {
            /**
             * Constructor
             * @param opt_options {H.ui.ScaleBar.Options=} - optional parameters to be passed to this scale bar.
             */
            constructor(opt_options?: H.ui.ScaleBar.Options);
        }

        namespace ScaleBar {
            /**
             * @property alignment {H.ui.LayoutAlignment=} - the layout alignment which should be applied to this control, default is H.ui.LayoutAlignment.BOTTOM_RIGHT
             */
            interface Options {
                alignment?: H.ui.LayoutAlignment | undefined;
            }
        }

        /**
         * This class encapsulates map UI functionality.
         */
        class UI implements H.util.ICapturable {
            /**
             * Constructor
             * @param map {H.Map}
             * @param opt_options {H.ui.UI.Options=}
             */
            constructor(map: H.Map, opt_options?: UI.Options);

            /**
             * This method returns this ui's root element.
             * @returns {Element} - the root element
             */
            getElement(): Element;

            /**
             * Returns the map instance to which this UI was added.
             * @returns {H.Map}
             */
            getMap(): H.Map;

            /**
             * This method returns this UI object's current unit system.
             * @returns {H.ui.UnitSystem} - the current unit system
             */
            getUnitSystem(): UnitSystem;

            /**
             * This method sets this UI object's unit system for displaying distances.
             * @param unitSystem {H.ui.UnitSystem} - the unit system to use
             */
            setUnitSystem(unitSystem: UnitSystem): void;

            /**
             * Toggles this UI's unit system between {@link H.ui.UnitSystem.METRIC} and {@link H.ui.UnitSystem.IMPERIAL}.
             */
            toggleUnitSystem(): void;

            /**
             * This method adds an info bubble to the UI.
             * @param bubble {H.ui.InfoBubble} - the info bubble to be added
             */
            addBubble(bubble: InfoBubble): void;

            /**
             * This method removes a previously added info bubble from the UI.
             * @param bubble {H.ui.InfoBubble} - the info bubble to be removed
             */
            removeBubble(bubble: InfoBubble): void;

            /**
             * This method returns a list of info bubble objects which are currently attached to this UI.
             * @returns {Array<H.ui.InfoBubble>} - the list of info bubbles
             */
            getBubbles(): InfoBubble[];

            /**
             * This method appends a control to the UI.
             * @param name {string} - the name under which to register this control
             * @param control {H.ui.Control} - the control to add to this UI
             */
            addControl(name: string, control: Control): void;

            /**
             * Removes a previously registered control from the UI object.
             * @param name {string} - the name under which this control was previously registered
             * @returns {H.ui.Control} - the removed control
             */
            removeControl(name: string): Control;

            /**
             * This method returns a UI control which was previously registered with the provided name.
             * @param name {string} - the name under which the control was registered.
             * @returns {H.ui.Control} - the control or undefined if the control does not exist.
             */
            getControl(name: string): Control;

            /**
             * This function creates the default UI including the zoom control,
             * map settings control and scalebar and panorama discovery control.
             * The default controls will be assigned the following values:
             *
             * Zoom control:
             *     id: 'zoom'
             *     alignment: 'right-middle'
             * Map settings control:
             *     id: 'mapsettings'
             *     alignment: 'bottom-right'
             * Scalebar:
             *     id: 'scalebar'
             *     alignment: 'bottom-right'
             * Pano:
             *     id: 'panorama'
             *     alignment: 'top-right'
             *
             * @param map {H.Map} - The map instance to which to append the UI
             * @param mapTypes {Object<H.service.MapType>} - The map types to use
             * @param opt_locale {(H.ui.i18n.Localization | string)=} - the language to use (or a full localization object).
             * @returns {H.ui.UI} - the UI instance configured with the default controls
             */
            static createDefault(map: H.Map, mapTypes: H.service.Platform.MapTypes | H.service.DefaultLayers, opt_locale?: H.ui.i18n.Localization | string): H.ui.UI;

            /**
             * This method is used to capture the element view
             * @param canvas {HTMLCanvasElement} - HTML Canvas element to draw the view of the capturable element
             * @param pixelRation {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
             * @param callback {ICapturable~captureCallback} - Callback function to call once result of the capturing is ready
             * @param opt_errback {ICapturable~errorCallback} - Callback function to call if error occurred during capturing
             */
            capture(canvas: HTMLCanvasElement, pixelRation: number, callback: (canvas?: HTMLCanvasElement) => void, opt_errback?: (error: string) => void): void;

            /**
             * @callback ICapturable~captureCallback
             * @param canvas {HTMLCanvasElement=}
             */

            /**
             * @callback ICapturable~errorCallback
             * @param error {string}
             */
        }

        namespace UI {
            /**
             * Optional parameters to be passed to the UI constructor.
             * @property unitSystem {H.ui.UnitSystem=} - An optional unit system to be used by the UI, default is H.ui.UnitSystem.METRIC
             * @property zoom {(H.ui.ZoomControl.Options | boolean)=} -
             * @property zoomrectangle {(H.ui.ZoomRectangle.Options | boolean)=} -
             * @property mapsettings {(H.ui.MapSettingsControl.Options | boolean)=} -
             * @property scalebar {(H.ui.ScaleBar.Options | boolean)=} -
             * @property panorama {(H.ui.Pano.Options | boolean)=} -
             * @property distancemeasurement {(H.ui.DistanceMeasurement.Options | boolean)=} -
             * @property locale {(H.ui.i18n.Localization | string)=} - defines language in which UI can be rendered. It can be predefined H.ui.i18n.Localization object with custom translation map,
             * or a string one of following 'en-US', 'de-DE', 'es-ES', 'fi-FI', 'fr-FR', 'it-IT', 'nl-NL', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'tr-TR', 'zh-CN'. If not defined ui will use 'en-US'
             * by default
             */
            interface Options {
                unitSystem?: H.ui.UnitSystem | undefined;
                zoom?: (H.ui.ZoomControl.Options | boolean) | undefined;
                zoomrectangle?: (H.ui.ZoomRectangle.Options | boolean) | undefined;
                mapsettings?: (H.ui.MapSettingsControl.Options | boolean) | undefined;
                scalebar?: (H.ui.ScaleBar.Options | boolean) | undefined;
                panorama?: (H.ui.Pano.Options | boolean) | undefined;
                distancemeasurement?: (H.ui.DistanceMeasurement.Options | boolean) | undefined;
                locale?: (H.ui.i18n.Localization | string) | undefined;
            }
        }

        /**
         * This enumeration holds the possible unit systems for the UI to display distances.
         */
        enum UnitSystem {
            /** This value represents the imperial unit system using miles and feet (value: 'imperial'). */
            IMPERIAL,
            /** This value represents the metric unit system using meters and kilometers, etc (value: 'metric'). */
            METRIC,
        }

        /**
         * This class represents the UI controls for zooming in an out of the map.
         */
        class ZoomControl extends H.ui.Control {
            /**
             * Constructor
             * @param opt_options {H.ui.ZoomControl.Options=} - optional parameters to be passed to the map.
             */
            constructor(opt_options?: H.ui.ZoomControl.Options);

            /**
             * This method returns the zoom speed (in levels per millisecond) which is applied when the button is pressed constantly.
             * @returns {number} - the current zoom speed
             */
            getZoomSpeed(): number;
        }

        namespace ZoomControl {
            /**
             * @property zoomSpeed {number=} - the speed if zooming in and out in levels per millisecond, defaults to 0.05
             * @property alignment {H.ui.LayoutAlignment=} - the layout alignment which should be applied to this control, defaults to H.ui.LayoutAlignment.RIGHT_MIDDLE
             * @property slider {boolean=} - flag whether to show the slider (true) or not, defaults to false
             * @property sliderSnaps {boolean=} - flag whether slider should snap to the integer values or not, defaults to false. This option has effect only if slider is enabled.
             */
            interface Options {
                zoomSpeed?: number | undefined;
                alignment?: H.ui.LayoutAlignment | undefined;
                slider?: boolean | undefined;
                sliderSnaps?: boolean | undefined;
            }
        }

        /**
         * This class represents a zoom rectangle control element that allows zooming to the selected area on the screen.
         */
        class ZoomRectangle extends H.ui.Control {
            /**
             * Constructor
             * @param opt_options {H.ui.ZoomRectangle.Options=} - optional parameters to be passed to this control
             */
            constructor(opt_options?: H.ui.ZoomRectangle.Options);
        }

        namespace ZoomRectangle {
            /**
             * @property alignment {H.ui.LayoutAlignment=} - the layout alignment which should be applied to this control, default is H.ui.LayoutAlignment.BOTTOM_RIGHT
             * @property adjustZoom {function(number, H.Map): number=} - optional function that defines how zoom level should be changed, by default zoom level is picked to fit the
             * bounding rectangle into the view port.
             */
            interface Options {
                alignment?: H.ui.LayoutAlignment | undefined;

                adjustZoom?(n: number, m: H.Map): number;
            }
        }

        type ES6Element = Element;

        /**
         * This namespace contains basic UI elements from which the UI controls are built.
         */
        namespace base {
            class Container extends H.util.EventTarget {
                /**
                 * Constructor
                 * @param opt_elementType {string=} - the type of HTML element this UI element renders as, default is 'div'
                 * @param opt_className {string=} - an optional class name to be used on this element
                 * @param opt_children {Array<H.ui.base.Element>=} - optional child elements to be added to this container
                 */
                constructor(opt_elementType?: string, opt_className?: string, opt_children?: Element[]);

                /**
                 * Adds a child element to be rendered within the container element.
                 * @param child {H.ui.base.Element} - the child element to be added
                 * @returns {H.ui.base.Container} - this container instance
                 */
                addChild(child: Element): Container;

                /**
                 * Returns the child collection of this container.
                 * @returns {Array<H.ui.base.Element>} - Returns the child collection of this container.
                 */
                getChildren(): Element[];

                /**
                 * Removes a child element from this container's child collection.
                 * @param child {H.ui.base.Element} - the child element to be removed
                 */
                removeChild(child: Element): void;

                /**
                 * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
                 * @param element {Element} - this UI element's HTML representation
                 * @param doc {Document} - the HTML document into which the element is currently being rendered
                 */
                renderInternal(element: ES6Element, doc: Document): void;

                /**
                 * This method returns this UI element's disabled state as a boolean value.
                 * @returns {boolean} - true if the element is disabled, false otherwise
                 */
                isDisabled(): boolean;

                /**
                 * This method set's the disabled state of this UI element.
                 * @param disabled {boolean} - true to disable the element, false to enable it
                 * @param opt_force {boolean=} - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
                 * @returns {H.ui.base.Element} - this element instance
                 */
                setDisabled(disabled: boolean, opt_force?: boolean): ES6Element;

                /**
                 * This method returns a previously stored arbitrary data from this element.
                 * @returns {*} - the previously stored data object or null if not data was stored.
                 */
                getData(): any;

                /**
                 * This method stores arbitrary data with this UI element.
                 * @param data {*} - the data to be stored
                 */
                setData(data: any): void;

                /**
                 * This method returns the HTML element this UI element renders.
                 *
                 * Note: Before the UI element was rendered the method returns null.
                 * @returns {?HTMLElement} - the element
                 */
                getElement(): HTMLElement;

                /**
                 * Sets the visibility of this element.
                 * @param visibility {boolean} - visibility
                 */
                setVisibility(visibility: boolean): void;

                /**
                 * Returns the visibility of this element.
                 * @returns {boolean} - visibility
                 */
                getVisibility(): boolean;

                /**
                 * This method adds a CSS class to this UI element (if it is not already present).
                 * @param className {string} - the CSS class name to add
                 * @returns {H.ui.base.Element} - this UI element instance
                 */
                addClass(className: string): Element;

                /**
                 * This method removes a CSS class from this UI element (if it is present).
                 * @param className {string} - the CSS class name to remove
                 * @returns {H.ui.base.Element} - this UI element instance
                 */
                removeClass(className: string): Element;
            }

            class Element extends H.util.EventTarget {
                /**
                 * Constructor
                 * @param opt_elementType {string=} - the type of HTML element this UI element renders as, default is 'div'
                 * @param opt_className {string=} - an optional class name to be used on this element
                 */
                constructor(opt_elementType?: string, opt_className?: string);

                /**
                 * This method is the concrete implementation of the UI element. This method receives the pre-rendered HTML element which may be modified by deriving classes.
                 * @param element {Element} - this UI element's HTML representation
                 * @param doc {Document} - the HTML document into which the element is currently being rendered
                 */
                renderInternal(element: ES6Element, doc: Document): void;

                /**
                 * This method returns this UI element's disabled state as a boolean value.
                 * @returns {boolean} - true if the element is disabled, false otherwise
                 */
                isDisabled(): boolean;

                /**
                 * This method set's the disabled state of this UI element.
                 * @param disabled {boolean} - true to disable the element, false to enable it
                 * @param opt_force {boolean=} - an optional boolean flag indicating that the value should be set and propagated even if it is the same as the current state
                 * @returns {H.ui.base.Element} - this element instance
                 */
                setDisabled(disabled: boolean, opt_force?: boolean): ES6Element;

                /**
                 * This method returns a previously stored arbitrary data from this element.
                 * @returns {*} - the previously stored data object or null if not data was stored.
                 */
                getData(): any;

                /**
                 * This method stores arbitrary data with this UI element.
                 * @param data {*} - the data to be stored
                 */
                setData(data: any): void;

                /**
                 * This method returns the HTML element this UI element renders.
                 *
                 * Note: Before the UI element was rendered the method returns null.
                 * @returns {?HTMLElement} - the element
                 */
                getElement(): HTMLElement;

                /**
                 * Sets the visibility of this element.
                 * @param visibility {boolean} - visibility
                 */
                setVisibility(visibility: boolean): void;

                /**
                 * Returns the visibility of this element.
                 * @returns {boolean} - visibility
                 */
                getVisibility(): boolean;

                /**
                 * This method adds a CSS class to this UI element (if it is not already present).
                 * @param className {string} - the CSS class name to add
                 * @returns {H.ui.base.Element} - this UI element instance
                 */
                addClass(className: string): Element;

                /**
                 * This method removes a CSS class from this UI element (if it is present).
                 * @param className {string} - the CSS class name to remove
                 * @returns {H.ui.base.Element} - this UI element instance
                 */
                removeClass(className: string): Element;
            }
        }

        /**
         * Namespace contains functionality related to internationalization.
         */
        namespace i18n {
            /**
             * Default available locales. UI provides default translations for this set of locale codes.
             */
            const defaultLocales: string[];

            /**
             * This class is used for internationalization of UI components.
             */
            class Localization {
                constructor(locale: string, opt_translationMap?: any);

                /**
                 * This method returns current locale code i.e 'en-US'
                 * @returns {string} - locale code
                 */
                getLocale(): string;

                /**
                 * This method returns translation keys for current locale. Keys from this set can be used to get translations via translate method.
                 * @returns {Array<string>}
                 */
                getKeys(): string[];

                /**
                 * This method returns a boolean value indicating whether this localization object has a translation for the specified translation key.
                 * @param key {string} - a translation key
                 * @returns {boolean} - true if the key exists, otherwise false
                 */
                hasKey(key: string): boolean;

                /**
                 * This method returns translation for provided key. It throws exception if translation is not available
                 * @param key {string} - a translation key
                 * @returns {string} - a localized string corresponding to provided key
                 */
                translate(key: string): string;
            }
        }
    }

    /***** util *****/
    namespace util {
        /**
         * The cache represents a in-memory LRU-cache with a fixed size. It stores any data that is added until the cache's content exceeds a maximum size. Once the size of all content elements
         * exceeds the maximum size the cache will drop the least recently retrieved elements until the size of the cache is within the bounds of its maximum size. Data elements are always
         * associated with an identifier that allow to retrieve them at a later stage and their content size.
         */
        class Cache implements H.util.ICache {
            /**
             * Constructor
             * @param maxSize {number} - the maximum size of the cache
             * @param opt_onDrop {function(string, ?, number)=} - A callback to be invoked when a data element is dropped from the cache
             * @param opt_filter {(function(string, ?, number): boolean)=} - A function to filter data elements that are not to be cached
             */
            constructor(maxSize: number, opt_onDrop?: (s: string, i: any, n: number) => void, opt_filter?: (s: string, i: any, n: number) => boolean);

            /**
             * This method sets this cache's maximum size to a new size. If the cache's contents exceed the new size, least recently used data elements will be dropped.
             * @param maxSize {number} - the new maximum size of this cache.
             * @returns {H.util.Cache} - this cache
             */
            setMaxSize(maxSize: number): H.util.Cache;

            /**
             * This method returns the maximum size of this cache.
             * @returns {number} - the maximum size of the cache
             */
            getMaxSize(): number;

            /**
             * This method returns the current size of this cache.
             * @returns {number} - the current size of the cache
             */
            getCurrentSize(): number;

            /**
             * This method adds an element to the cache.
             * @param id {*} - The identifier of this data element, the value is converted to a string.
             * @param data {*} - the actual data to be stored
             * @param size {number} - the size of the data element
             * @returns {boolean} - a boolean value indicating whether the data was added
             */
            add(id: any, data: any, size: number): boolean;

            /**
             * This method retrieves an element from the cache.
             * @param id {string} - the ID of the data element to be retrieved.
             * @param opt_noUpdate {boolean=} - and optional flag to indicate that the retrieved object should not be marked as 'most recently used'.
             * @returns {*} - returns the data associated with the ID or undefined if the data element is not currently in the cache.
             */
            get(id: string, opt_noUpdate?: boolean): any;

            /**
             * This method explicitly drops an element from the cache.
             * @param id {*} - the id of the item to drop
             */
            drop(id: any): void;

            /**
             * This method will execute the provided callback function on each of the cache's entries. If the optional match predicate is passed to this method the callback will only be executed
             * on those entries for which the predicated returns true.
             * @param callback {function(string, ?, number)} - the callback to be invoked for each entry
             * @param opt_ctx {Object=} - an optional context object to be used as this within the callback
             * @param opt_matcher {(function(string, ?, number): boolean)=} - an optional match predicate to customize on which entries the callback will be called
             */
            forEach(callback: (s: string, i: any, n: number) => void, opt_ctx?: any, opt_matcher?: (s: string, i: any, n: number) => boolean): void;

            /**
             * This method removes all data elements from the cache. If the optional match predicate is passed to this method only those data elements will be removed for which the predicate
             * return true.
             * @param opt_matcher {(function(string, ?, number): boolean)=} - an optional function that receives an entries id, data and size and may return true or false to either remove it or
             * leave the entry in the cache respectively
             */
            removeAll(opt_matcher?: (s: string, i: any, n: number) => boolean): void;

            /**
             * This method registers a callback that should be called each time an entry is dropped from the cache.
             * @param callback {(function(string, ?, number))} - the callback to be invoked for each entry
             */
            registerOnDrop(callback: (s: string, i: any, n: number) => void): void;
        }

        /**
         * This event indicates a change. It contains the old and the new value.
         * @property target {*} - Object which triggered the event
         * @property currentTarget {*} - Object which has listener attached
         * @property type {string} - Name of the dispatched event
         * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
         */
        class ChangeEvent extends H.util.Event {
            /**
             * Constructor
             * @param type {string} - The type of the event
             * @param newValue {*} - The new value of the property
             * @param oldValue {*} - The previous value of the property
             */
            constructor(type: string, newValue: any, oldValue: any);

            /**
             * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
             */
            preventDefault(): void;

            /**
             * Stops propagation for current event.
             */
            stopPropagation(): void;

            target: any;
            currentTarget: any;
            type: string;
            defaultPrevented: boolean;
        }

        /**
         * This class represents a contextual information/action.
         * @property SEPARATOR {H.util.ContextItem} - Separator for the context items
         */
        class ContextItem extends H.util.EventTarget {
            /**
             * Constructor
             * @param opt_options {H.util.ContextItem.Options=} - The values to initialize this context item
             */
            constructor(opt_options?: H.util.ContextItem.Options);

            /**
             * This method returns label of the context item
             * @returns {string} - the label of the context item
             */
            getLabel(): string;

            /**
             * This method changes context item label to the specified one
             * @param label {string} - New label for the context item
             * @returns {H.util.ContextItem} - this context item instance
             */
            setLabel(label: string): H.util.ContextItem;

            /**
             * This method returns disabled state of the context item.
             * @returns {boolean} -  true if the item is disabled, false otherwise
             */
            isDisabled(): boolean;

            /**
             * This method enables/disables the context item
             * @param disabled {boolean} -  true to disable and false to enabled it
             * @returns {H.util.ContextItem} - this context item instance
             */
            setDisabled(disabled: boolean): H.util.ContextItem;

            /**
             * This method will dispatch event on the event target object
             * @param evt {(H.util.Event | string)} - event object or event name
             */
            dispatchEvent(evt: (H.util.Event | string)): void;

            /**
             * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
             */
            dispose(): void;

            /**
             * This method adds callback which is triggered when the object is being disposed
             * @param callback {Function} - The callback function.
             * @param opt_scope {Object=} - An optional scope to call the callback in.
             */
            addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;

            static SEPARATOR: H.util.ContextItem;
        }

        namespace ContextItem {
            /**
             * This type defines options which can be used to initialize the context item.
             * @property label {string=} - the label of the context item
             * @property disabled {boolean=} - flag indicatting whether context item is disabled or no, by default false
             * @property callback {function(H.util.Event)=} - Optional callback function to call once context item is selected
             */
            interface Options {
                label?: string | undefined;
                disabled?: boolean | undefined;

                callback?(event: H.util.Event): void;
            }
        }

        /**
         * Object which can be safely disposed.
         */
        class Disposable {
            /**
             * Constructor
             */
            constructor();

            /**
             * Method adds a callback which will be triggered when the object is disposed
             * @param callback {Function}
             * @param opt_scope {Object=}
             */
            addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;
        }

        /**
         * Base Event class which is used for all events dispatched by any EventTarget within the api.
         * @property target {*} - Object which triggered the event
         * @property currentTarget {*} - Object which has listener attached
         * @property type {string} - Name of the dispatched event
         * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
         */
        class Event {
            /**
             * Constructor
             * @param type {string} - Event Type.
             * @param opt_target {Object=} - Reference to the object that is the target of this event. It has to implement the {@link EventTargetInstance} interface.
             */
            constructor(type: string, opt_target?: any);

            /**
             * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
             */
            preventDefault(): void;

            /**
             * Stops propagation for current event.
             */
            stopPropagation(): void;

            target: any;
            currentTarget: any;
            type: string;
            defaultPrevented: boolean;
        }

        /**
         * EventTarget enabled listening and dispatching events on all instances and derived classes.
         */
        class EventTarget {
            /**
             * Constructor
             */
            constructor();

            /**
             * This method allows to listen for specific event triggered by the object. Keep in mind, that you must removeEventListener manually or dispose an object when you no longer need it.
             * Otherwise memory leak is possible.
             * @param type {string} - name of event
             * @param handler {Function} - event handler function
             * @param opt_capture {boolean=} - if set to true will listen in the capture phase (bubble otherwise)
             * @param opt_scope {Object=} - scope for the handler function
             */
            addEventListener(type: string, handler: EventListenerOrEventListenerObject, opt_capture?: boolean, opt_scope?: any): void;

            /**
             * This method will removed previously added listener from the event target
             * @param type {string} - name of event
             * @param handler {Function} - event handler function
             * @param opt_capture {boolean=} - if set to true will listen in the capture phase (bubble otherwise)
             * @param opt_scope {Object=} - scope for the handler function
             */
            removeEventListener(type: string, handler: EventListenerOrEventListenerObject, opt_capture?: boolean, opt_scope?: any): void;

            /**
             * This method will dispatch event on the event target object
             * @param evt {H.util.Event | string} - event object or event name
             */
            dispatchEvent(evt: H.util.Event | string): void;

            /**
             * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
             */
            dispose(): void;

            /**
             * This method adds callback which is triggered when the object is being disposed
             * @param callback {Function} - The callback function.
             * @param opt_scope {Object=} - An optional scope to call the callback in.
             */
            addOnDisposeCallback(callback: () => void, opt_scope?: any): void;
        }

        /**
         * An interface definition for the generic cache. Any data elements can be stored in the cache. They are always associated with an identifier to retrieve them at a later stage and their
         * content size.
         */
        interface ICache {
            /**
             * This method adds an element to the cache.
             * @param id {*} - The identifier of this data element, the value is converted to a string.
             * @param data {*} - the actual data to be stored
             * @param size {number} - the size of the data element
             * @returns {boolean} - a boolean value indicating whether the data was added
             */
            add(id: any, data: any, size: number): boolean;

            /**
             * This method retrieves an element from the cache.
             * @param id {string} - the ID of the data element to be retrieved.
             * @param opt_noUpdate {boolean=} - and optional flag to indicate that the retrieved object should not be marked as 'most recently used'.
             * @returns {*} - returns the data associated with the ID or undefined if the data element is not currently in the cache.
             */
            get(id: string, opt_noUpdate?: boolean): any;

            /**
             * This method explicitly drops an element from the cache.
             * @param id {*} - the id of the item to drop
             */
            drop(id: any): void;

            /**
             * This method will execute the provided callback function on each of the cache's entries. If the optional match predicate is passed to this method the callback will only be executed on
             * those entries for which the predicated returns true.
             * @param callback {function(string, ?, number)} - the callback to be invoked for each entry
             * @param opt_ctx {Object=} - an optional context object to be used as this within the callback
             * @param opt_matcher {(function(string, ?, number): boolean)=} - an optional match predicate to customize on which entries the callback will be called
             */
            forEach(callback: (s: string, t: any, n: number) => void, opt_ctx?: {}, opt_matcher?: ((s: string, t: any, n: number) => boolean)): void;

            /**
             * This method removes all data elements from the cache. If the optional match predicate is passed to this method only those data elements will be removed for which the predicate
             * return true.
             * @param opt_matcher {(function(string, ?, number): boolean)=} - an optional function that receives an entries id, data and size and may return true or false to either remove it or
             * leave the entry in the cache respectively
             */
            removeAll(opt_matcher?: ((s: string, t: any, n: number) => boolean)): void;

            /**
             * This method registers a callback that should be called each time an entry is dropped from the cache.
             * @param callback {(function(string, ?, number))} - the callback to be invoked for each entry
             */
            registerOnDrop(callback: ((s: string, t: any, n: number) => void)): void;
        }

        /**
         * An interface to cancelable requests and actions.
         */
        interface ICancelable {
            /**
             * This method is used to cancel current action
             */
            cancel(): void;
        }

        interface ICapturable {
            /**
             * This method is used to capture the element view
             * @param canvas {HTMLCanvasElement} - HTML Canvas element to draw the view of the capturable element
             * @param pixelRation {number} - The pixelRatio to use for over-sampling in cases of high-resolution displays, default is 1
             * @param callback {ICapturable~captureCallback} - Callback function to call once result of the capturing is ready
             * @param opt_errback {ICapturable~errorCallback} - Callback function to call if error occurred during capturing
             */
            capture(canvas: HTMLCanvasElement, pixelRation: number, callback: (canvas?: HTMLCanvasElement) => void, opt_errback?: (error: string) => void): void;

            /**
             * @callback ICapturable~captureCallback
             * @param canvas {HTMLCanvasElement=}
             */

            /**
             * @callback ICapturable~errorCallback
             * @param error {string}
             */
        }

        /**
         * This class represents an list of ordered entries which dispatches events when the list is modified.
         * @event add {H.util.OList.Event} - Fired when an entry was added to the list.
         * @event remove {H.util.OList.Event} - Fired when an entry was removed from the list.
         * @event set {H.util.OList.Event} - Fired when an entry was set in the list.
         * @event move {H.util.OList.Event} - Fired when an entry was moved within the list.
         */
        class OList extends H.util.EventTarget {
            /**
             * This method inserts an entry to the list. Optionally it can place new entry at provided index.
             * @param entry {?} - The entry to insert
             * @param opt_idx {number=} - The index where the new entry should be inserted; if omitted or greater then the current size of the list, the entry is added at the end of the list;
             * a negative index is treated as being relative from the end of the list
             */
            add(entry: any, opt_idx?: number): void;

            /**
             * This method removes an entry by a given index from the list.
             * @param idx {number} - The index of the entry which should be removed; a negative index is treated as being relative from the end of the list
             * @returns {?} - The removed entry
             */
            removeAt(idx: number): any;

            /**
             * This method removes the the first entry which is identical with the given entry.
             * @param entry {?} - The entry to remove
             * @returns {boolean} - signals if the entry could be found in the list and is removed
             */
            remove(entry: any): boolean;

            /**
             * This method replaces an entry at the given index with the given entry.
             * @param idx {number} - The index of the entry which should be replaced; a negative index is treated as being relative from the end of the list
             * @param entry {?} - The entry which replaces the existing one
             * @returns {?} - The replaced entry
             */
            set(idx: number, entry: any): any;

            /**
             * This method retrieves the index of the first object in this list that is identical with the object supplied by the caller.
             * @param entry {?} - The entry for which to return the index.
             * @returns {number} - The index of the first matching entry in this list or -1 if the entry provided by the caller is not found in the list
             */
            indexOf(entry: any): number;

            /**
             * To get the entry at the specified index.
             * @param idx {number} - The index of the entry to get a negative index is treated as being relative from the end of the list
             * @returns {?} - The element at the given index
             */
            get(idx: number): any;

            /**
             * This method returns the length of the list.
             * @returns {number}
             */
            getLength(): number;

            /**
             * This method returns all list's entries as an array.
             * @returns {Array<*>} - The list as an array
             */
            asArray(): any[];

            /**
             * This method removes all entries from the list.
             */
            flush(): void;

            /**
             * This method will dispatch event on the event target object
             * @param evt {(H.util.Event | string)} - event object or event name
             */
            dispatchEvent(evt: (H.util.Event | string)): void;

            /**
             * Removes listeners from this object. Classes that extend EventTarget may need to override this method in order to remove references to DOM Elements and additional listeners.
             */
            dispose(): void;

            /**
             * This method adds callback which is triggered when the object is being disposed
             * @param callback {Function} - The callback function.
             * @param opt_scope {Object=} - An optional scope to call the callback in.
             */
            addOnDisposeCallback(callback: () => void, opt_scope?: {}): void;
        }

        namespace OList {
            /**
             * The event class for events that are dispatched by OList
             * @property target {*} - Object which triggered the event
             * @property currentTarget {*} - Object which has listener attached
             * @property type {string} - Name of the dispatched event
             * @property defaultPrevented {boolean} - Indicates if preventDefault was called on the current event
             */
            class Event extends H.util.Event {
                /**
                 * Constructor
                 * @param list {H.util.OList} - The OList instance which is emitting the event
                 * @param type {H.util.OList.prototype.EventType} - The type of the event
                 * @param idx {number} - The affected index within this list
                 * @param added {?*} - The value of the entry which was added or set
                 * @param removed {?*} - The value of the entry which was removed or replaced
                 * @param moved {?*} - The value of the entry which was moved
                 */
                constructor(list: H.util.OList, type: string, idx: number, added: any, removed: any, moved: any);

                /**
                 * Sets defaultPrevented to true. Which can be used to prevent some default behavior.
                 */
                preventDefault(): void;

                /**
                 * Stops propagation for current event.
                 */
                stopPropagation(): void;

                target: any;
                currentTarget: any;
                type: string;
                defaultPrevented: boolean;
            }
        }

        /**
         * A generic class to represent a handle for any kind of asynchronous processed requests
         */
        class Request {
            /**
             * Constructor
             * @param opt_onprogress {function(H.util.Request)=} - A callback to invoke every time when the request's progress state changes
             * @param opt_total {number=} - The total number of processing steps to complete this request, default is 1
             */
            constructor(opt_onprogress?: (req: H.util.Request) => void, opt_total?: number);

            /**
             * Returns the state of this request
             * @returns {H.util.Request.State}
             */
            getState(): H.util.Request.State;

            /**
             * Returns the number of processing steps to complete this request
             * @returns {number}
             */
            getTotal(): number;

            /**
             * Returns the number of steps which are already processed by this request
             * @returns {number}
             */
            getProcessed(): number;

            /**
             * Returns the number of processingsteps which have been failed
             * @returns {number}
             */
            getFailed(): number;
        }

        namespace Request {
            /**
             * The supported states of an request
             */
            enum State {
                PENDING,
                PROCESSING,
                COMPLETE,
                CANCELLED,
                ERROR,
            }
        }

        namespace animation {
            /**
             * This mamespace contains easing functions used for Animation class.
             */
            class ease {
                /**
                 * This function defines linear ease.
                 * @param val {number} - A value in range [0..1] to translate
                 * @returns {number} - the translated value
                 */
                static LINEAR(val: number): number;

                /**
                 * This function defines quadratic ease in.
                 * @param val {number} - A value in range [0..1] to translate
                 * @returns {number} - the translated value
                 */
                static EASE_IN_QUAD(val: number): number;

                /**
                 * This function defines quadratic ease out.
                 * @param val {number} - A value in range [0..1] to translate
                 * @returns {number} - the translated value
                 */
                static EASE_OUT_QUAD(val: number): number;

                /**
                 * This function defines ease in and out with slope.
                 * @param val {number} - A value in range [0..1] to translate
                 * @returns {number} - the translated value
                 */
                static EASE_IN_OUT_QUINT(val: number): number;

                /**
                 * This function defines ease out with circ function.
                 * @param val {number} - A value in range [0..1] to translate
                 * @returns {number} - the translated value
                 */
                static EASE_OUT_CIRC(val: number): number;
            }
        }

        namespace kinetics {
            /**
             * This interface defines kinetic move parameters used by map for kinetic drag.
             * @property power {number} - Power multiplier. Multiplier is used to increase the speed of the kinetic move. By default map uses 1.
             * @property duration {number} - Defines duration of the kinetic move.
             */
            interface IKinetics {
                /**
                 * Easing function modifies animation progress. In example it can modify the animation in a way it starts rapidly and then slows down at the end.
                 * @param p {number} - current progress
                 * @returns {number} - modified progress
                 */
                ease(p: number): number;

                power: number;
                duration: number;
            }
        }

        /**
         * There is no documentation about this API
         */
        namespace Job {
            type Priority = any;
        }
    }

    namespace lang {
        /**
         * @link https://developer.here.com/documentation/maps/api_reference/H.lang.IllegalOperationError.html
         */
        class IllegalOperationError extends Error {
            constructor(opt_caller?: (...args: any[]) => any, opt_message?: any);
        }

        /**
         * @link https://developer.here.com/documentation/maps/api_reference/H.lang.InvalidArgumentError.html
         */
        class InvalidArgumentError extends Error {
            constructor(opt_caller?: (...args: any[]) => any, opt_argNr?: number, opt_message?: any);
        }

        /**
         * @link https://developer.here.com/documentation/maps/api_reference/H.lang.InvalidArgumentError.html
         */
        class OutOfRangeError extends Error {
            constructor(opt_caller?: (...args: any[]) => any, opt_val?: number, opt_range?: number[]);
        }
    }
}
