// Type definitions for esri-leaflet 2.0
// Project: http://esri.github.io/esri-leaflet
// Definitions by: strajuser <https://github.com/strajuser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L {
    namespace esri {
        type CallbackHandlerFn = (error: any, metadata: any) => void;

        interface LayerOptionsBase {
            /**
             * URL of the Map Service
             * 
             * @type {string}
             * @memberof LayerOptionsBase
             */
            url: string;
            /**
             * URL of an ArcGIS API for JavaScript proxy or ArcGIS Resource Proxy to use for proxying requests.
             * 
             * @type {string}
             * @memberof LayerOptionsBase
             */
            proxy?: string;
            /**
             * Dictates if the service should use CORS when making GET requests.
             * 
             * @type {boolean}
             * @memberof LayerOptionsBase
             */
            useCors?: boolean;
            /**
             * Will use this token to authenticate all calls to the service.
             * 
             * @type {string}
             * @memberof LayerOptionsBase
             */
            token?: string;
        }

        type Basemaps = 
            'Streets' 
            | 'Topographic'
            | 'NationalGeographic'
            | 'Oceans'
            | 'Gray'
            | 'DarkGray'
            | 'Imagery'
            | 'ShadedRelief' 
            | 'Terrain'
            | 'USATopo'
            | 'OceansLabels'
            | 'GrayLabels'
            | 'DarkGrayLabels'
            | 'ImageryLabels'
            | 'ImageryTransportation'
            | 'ShadedReliefLabels' 
            | 'TerrainLabels';

        type LeafletGeometry = L.Marker | L.Polygon | L.Polyline | L.LatLng | L.LatLngBounds | L.GeoJSON;
        type GeoJSONGeometry = GeoJSON.Point | GeoJSON.Polygon | GeoJSON.LineString;
        type Geometry = LeafletGeometry | GeoJSONGeometry;
        
        /**
         * Options for L.esri.BasemapLayer
         * 
         * @interface BasemapLayerOptions
         * @extends {L.TileLayerOptions}
         */
        interface BasemapLayerOptions extends L.TileLayerOptions {
            /**
             * 	Will use this token to authenticate all calls to the service.
             * 
             * @type {string}
             * @memberof BasemapLayerOptions
             */
            token?: string;
        }

        /**
         * L.esri.BasemapLayer is used to display Esri hosted basemaps and attributes data providers appropriately. The Terms of Use for Esri hosted services apply to all Leaflet applications.
         * 
         * @class BasemapLayer
         * @extends {L.TileLayer}
         */
        class BasemapLayer extends L.TileLayer {
            constructor(key: Basemaps, options?: BasemapLayerOptions);
        }

        /**
         * L.esri.basemapLayer is used to display Esri hosted basemaps and attributes data providers appropriately. The Terms of Use for Esri hosted services apply to all Leaflet applications.
         * 
         * @param {Basemaps} key 
         * @param {BasemapLayerOptions} [options] 
         * @returns {BasemapLayer} 
         */
        function basemapLayer(key: Basemaps, options?: BasemapLayerOptions): BasemapLayer;
        
        /**
         * Options for L.esri.TiledMapLayer
         * 
         * @interface TiledMapLayerOptions
         * @extends {L.TileLayerOptions}
         */
        interface TiledMapLayerOptions extends L.TileLayerOptions, LayerOptionsBase {
            /**
             * If correctZoomLevels is enabled this controls the amount of tolerance for the difference at each scale level for remapping tile levels.
             * Default 0.1
             * 
             * @type {number}
             * @memberof TiledMapLayerOptions
             */
            zoomOffsetAllowance?: number;
        }

        /**
         * Access tiles from ArcGIS Online and ArcGIS Server to visualize and identify features. Copyright text from the service is added to map attribution automatically.
         * 
         * @class TiledMapLayer
         * @extends {L.TileLayer}
         */
        class TiledMapLayer extends L.TileLayer {
            constructor(options: TiledMapLayerOptions);
            /**
             * Authenticates this service with a new token and runs any pending requests that required a token.
             * 
             * @param {string} token 
             * @returns {this} 
             * @memberof TiledMapLayer
             */
            authenticate(token: string): this;
            /**
             * Requests metadata about this Feature Layer. Callback will be called with error and metadata.
             * 
             * @param {CallbackHandlerFn} callback 
             * @param {*} context 
             * @returns {this} 
             * @memberof TiledMapLayer
             */
            metadata(callback: CallbackHandlerFn, context?: any): this;
            identify() : any;
            find(): any;
            query(): any;
        }

        /**
         * Access tiles from ArcGIS Online and ArcGIS Server to visualize and identify features. Copyright text from the service is added to map attribution automatically.
         * 
         * @param {TiledMapLayerOptions} options 
         * @returns {TiledMapLayer} 
         */
        function tiledMapLayer(options: TiledMapLayerOptions): TiledMapLayer;

        /**
         * Options for RasterLayer
         * 
         * @interface RasterLayerOptions
         * @extends {L.ImageOverlayOptions}
         */
        interface RasterLayerOptions extends L.ImageOverlayOptions {
            /**
             * Server response content type.
             * Default: 'image'
             * 
             * @type {string}
             * @memberof RasterLayerOptions
             */
            f?: string;
            /**
             * Position of the layer relative to other overlays.
             * Default: 'front'
             * 
             * @type {string}
             * @memberof RasterLayerOptions
             */
            position?: string;
            /**
             * 	Closest zoom level the layer will be displayed on the map.
             * 
             * @type {number}
             * @memberof RasterLayerOptions
             */
            maxZoom?: number;
            /**
             * Furthest zoom level the layer will be displayed on the map.
             * 
             * @type {number}
             * @memberof RasterLayerOptions
             */
            minZoom?: number;
        }

        /**
         * A generic class representing an image layer. This class can be extended to provide support for making export requests from ArcGIS REST services.
         * 
         * @class RasterLayer
         * @extends {L.ImageOverlay}
         */
        abstract class RasterLayer extends L.ImageOverlay {
            /**
             * Redraws this layer below all other overlay layers.
             * 
             * @returns {this} 
             * @memberof RasterLayer
             */
            bringToBack(): this;
            /**
             * 	Redraws this layer above all other overlay layers.
             * 
             * @returns {this} 
             * @memberof RasterLayer
             */
            bringToFront(): this;
            /**
             * 	Returns the current opacity of the layer.
             * 
             * @returns {number} 
             * @memberof RasterLayer
             */
            getOpacity(): number;
            /**
             * Sets the opacity of the layer.
             * 
             * @param {number} opacity 
             * @returns {this} 
             * @memberof RasterLayer
             */
            setOpacity(opacity: number): this;
            /**
             * Returns the current time range being used for rendering. Array [from, to];
             * 
             * @returns {Date[]} 
             * @memberof RasterLayer
             */
            getTimeRange(): Date[];
            /**
             * Redraws the layer with he passed time range.
             * 
             * @param {Date} from 
             * @param {Date} to 
             * @returns {this} 
             * @memberof RasterLayer
             */
            setTimeRange(from: Date, to: Date): this;
            /**
             * Used to make a fresh request to the service and draw the response.
             * 
             * @returns {this} 
             * @memberof RasterLayer
             */
            redraw(): this;
            /**
             * Authenticates this service with a new token and runs any pending requests that required a token.
             * 
             * @param {string} token 
             * @returns {this} 
             * @memberof TiledMapLayer
             */
            authenticate(token: string): this;
            /**
             * Requests metadata about this Feature Layer. Callback will be called with error and metadata.
             * 
             * @param {CallbackHandlerFn} callback 
             * @param {*} context 
             * @returns {this} 
             * @memberof TiledMapLayer
             */
            metadata(callback: CallbackHandlerFn, context?: any): this;
        }

        /**
         * Options for L.esri.DynamicMapLayer
         * 
         * @interface DynamicMapLayerOptions
         * @extends {RasterLayerOptions}
         */
        interface DynamicMapLayerOptions extends RasterLayerOptions, LayerOptionsBase {
            /**
             * Output format of the image.
             * Default: 'png24'
             * 
             * @type {string}
             * @memberof DynamicMapLayerOptions
             */
            format?: string;
            /**
             * Allow the server to produce transparent images.
             * 
             * @type {boolean}
             * @memberof DynamicMapLayerOptions
             */
            transparent?: boolean;
            /**
             * Attribution from service metadata copyright text is automatically displayed in Leaflet's default control. This property can be used for customization.
             * 
             * @type {string}
             * @memberof DynamicMapLayerOptions
             */
            attribution?: string;
            /*
             * An array of Layer IDs like [3,4,5] to show from the service.
             * 
             * @type {any[]}
             * @memberof DynamicMapLayerOptions
             */
            layers?: any[];
            /**
             * 	SQL filters to define what features will be included in the image rendered by the service. An object is used with keys that map each query to its respective layer. 
             * { 3: "STATE_NAME='Kansas'", 9: "POP2007>25000" }
             * 
             * @type {*}
             * @memberof DynamicMapLayerOptions
             */
            layerDefs?: any;
            /**
             * JSON object literal used to manipulate the layer symbology defined in the service itself. Requires a 10.1 (or above) map service which supports dynamicLayers requests.
             * 
             * @type {*}
             * @memberof DynamicMapLayerOptions
             */
            dynamicLayers?: any;
        }

        type FeatureRequestCallbackFn = (err: any, featureCollection: any, response: any) => void;

        /**
         * Render and visualize Map Services from ArcGIS Online and ArcGIS Server. L.esri.DynamicMapLayer also supports custom popups and identification of features.
         * Map Services are used when its preferable to ask the server to draw layers at a particular location and scale and pass back the image which was generated on the fly. They also expose capabilities for querying and identifying individual features.
         * 
         * @class DynamicMapLayer
         * @extends {RasterLayer}
         */
        class DynamicMapLayer extends RasterLayer {
            constructor(options: DynamicMapLayerOptions);
            /**
             * Uses the provided function to create a popup that will identify features whenever the map is clicked. Your function will be passed a GeoJSON FeatureCollection of the features at the clicked location and should return the appropriate HTML. If you do not want to open the popup when there are no results, return false.
             * 
             * @param {any} fn 
             * @param {L.PopupOptions} popupOptions 
             * @returns {this} 
             * @memberof DynamicMapLayer
             */
            bindPopup(fn: any, popupOptions?: L.PopupOptions): this;
            /**
             * Removes a popup previously bound with bindPopup.
             * 
             * @returns {this} 
             * @memberof DynamicMapLayer
             */
            unbindPopup(): this;
            /**
             * Returns the current opacity of the layer.
             * 
             * @returns {number} 
             * @memberof DynamicMapLayer
             */
            getOpacity(): number;
            /**
             * Sets the opacity of the layer.
             * 
             * @param {number} opacity 
             * @returns {this} 
             * @memberof DynamicMapLayer
             */
            setOpacity(opacity: number): this;
            /**
             * Returns the array of visible layers specified in the layer constructor.
             * 
             * @returns {Array<any>} 
             * @memberof DynamicMapLayer
             */
            getLayers(): Array<any>;
            /**
             * Redraws the layer to show the passed array of layer ids.
             * 
             * @param {Array<any>} layers 
             * @returns {this} 
             * @memberof DynamicMapLayer
             */
            setLayers(layers: Array<any>): this;
            /**
             * Returns the current layer definition(s) being used for rendering.
             * 
             * @returns {*} 
             * @memberof DynamicMapLayer
             */
            getLayerDefs(): any;
            /**
             * Redraws the layer with the new layer definitions. Corresponds to the layerDefs option on the export API.
             * 
             * @param {*} layerDefs 
             * @returns {this} 
             * @memberof DynamicMapLayer
             */
            setLayerDefs(layerDefs: any): this;
            /**
             * Returns the current time options being used for rendering.
             * 
             * @returns {*} 
             * @memberof DynamicMapLayer
             */
            getTimeOptions(): any
            /**
             *	Sets the current time options being used to render the layer. Corresponds to the layerTimeOptions option on the export API.
             * 
             * @param {*} timeOptions 
             * @returns {this} 
             * @memberof DynamicMapLayer
             */
            setTimeOptions(timeOptions: any): this;
            /**
             * Returns a JSON object representing the modified layer symbology being requested from the map service.
             * 
             * @returns {*} 
             * @memberof DynamicMapLayer
             */
            getDynamicLayers(): any;
            /**
             * Used to insert raw dynamicLayers JSON in situations where you'd like to modify layer symbology defined in the service itself.
             * 
             * @param {*} layers 
             * @returns {this} 
             * @memberof DynamicMapLayer
             */
            setDynamicLayers(layers: any): this;
            /**
             * Returns a new L.esri.services.IdentifyFeatures object that can be used to identify features on this layer. Your callback function will be passed a GeoJSON FeatureCollection with the results or an error.
             * 
             * @returns {*} 
             * @memberof DynamicMapLayer
             */
            identify(): any;
            /**
             * Returns a new L.esri.services.Find object that can be used to find features. Your callback function will be passed a GeoJSON FeatureCollection with the results or an error.
             * 
             * @returns {*} 
             * @memberof DynamicMapLayer
             */
            find(): any;
            /**
             * Returns a new L.esri.Query object that can be used to query this service.
             * 
             * @returns {*} 
             * @memberof DynamicMapLayer
             */
            query(): any;
        }

        /**
         * Render and visualize Map Services from ArcGIS Online and ArcGIS Server. L.esri.DynamicMapLayer also supports custom popups and identification of features.
         * Map Services are used when its preferable to ask the server to draw layers at a particular location and scale and pass back the image which was generated on the fly. They also expose capabilities for querying and identifying individual features.
         * 
         * @param {DynamicMapLayerOptions} options 
         * @returns {DynamicMapLayer} 
         */
        function dynamicMapLayer(options: DynamicMapLayerOptions): DynamicMapLayer;
    }
}

declare namespace L {
    namespace esri {
        type FeatureCallbackHandlerFn = (error?: any, featureCollection?: any, response?: any) => void;

        /**
         * Options for L.esri.Service
         * 
         * @interface ServiceOptions
         */
        interface ServiceOptions {
            /**
             * URL of the ArcGIS service you would like to consume.
             * 
             * @type {string}
             * @memberof ServiceOptions
             */
            url?: string;
            /**
             * URL of an ArcGIS API for JavaScript proxy or ArcGIS Resource Proxy to use for proxying POST requests.
             * 
             * @type {string}
             * @memberof ServiceOptions
             */
            proxy?: string;
            /**
             * If this service should use CORS when making GET requests.
             * 
             * @type {boolean}
             * @memberof ServiceOptions
             */
            useCors?: boolean;
            /**
             * Operation timeout
             * 
             * @type {number}
             * @memberof ServiceOptions
             */
            timeout?: number;
        }

        /**
         * A generic class representing a hosted resource on ArcGIS Online or ArcGIS Server. This class can be extended to provide support for making requests and serves as a standard for authentication and proxying.
         * 
         * @class Service
         * @extends {L.Evented}
         */
        abstract class Service extends L.Evented {
            /**
             * Makes a GET request to the service. The service's URL will be combined with the path option and parameters will be serialized to a query string. Accepts an optional function context for the callback.
             * 
             * @param {string} url 
             * @param {*} [params] 
             * @param {CallbackHandlerFn} [callback] 
             * @param {*} [context] 
             * @returns {this} 
             * @memberof Service
             */
            get(url: string, params?: any, callback?: CallbackHandlerFn, context?: any): this;
            /**
             * Makes a POST request to the service. The service's URL will be combined with the path option and parameters will be serialized. Accepts an optional function context for the callback.
             * 
             * @param {string} url 
             * @param {*} [params] 
             * @param {CallbackHandlerFn} [callback] 
             * @param {*} [context] 
             * @returns {this} 
             * @memberof Service
             */
            post(url: string, params?: any, callback?: CallbackHandlerFn, context?: any): this;
            /**
             * Authenticates this service with a new token and runs any pending requests that required a token.
             * 
             * @param {string} token 
             * @returns {this} 
             * @memberof TiledMapLayer
             */
            authenticate(token: string): this;
            /**
             * Requests metadata about this Feature Layer. Callback will be called with error and metadata.
             * 
             * @param {CallbackHandlerFn} callback 
             * @param {*} context 
             * @returns {this} 
             * @memberof TiledMapLayer
             */
            metadata(callback: CallbackHandlerFn, context?: any): this;
        }

        /**
         * Options for MapService
         * 
         * @interface MapServiceOptions
         * @extends {ServiceOptions}
         */
        interface MapServiceOptions extends ServiceOptions { }

        /**
         * L.esri.MapService is an abstraction for interacting with Map Services running on ArcGIS Online and ArcGIS Server that allows you to make requests to the API, as well as query and identify published features.
         * 
         * @class MapService
         * @extends {Service}
         */
        class MapService extends Service {
            constructor(options: MapServiceOptions);
            /**
             * Returns a new L.esri.services.IdentifyFeatures object that can be used to identify features on this layer. Your callback function will be passed a GeoJSON FeatureCollection with the results or an error.
             * 
             * @returns {*} 
             * @memberof MapService
             */
            identify(): any;
            /**
             * Returns a new L.esri.services.Find object that can be used to find features. Your callback function will be passed a GeoJSON FeatureCollection with the results or an error.
             * 
             * @returns {*} 
             * @memberof MapService
             */
            find(): any;
            /**
             * Returns a new L.esri.Query object that can be used to query this service.
             * 
             * @returns {*} 
             * @memberof MapService
             */
            query(): any;
        }

        /**
         * L.esri.MapService is an abstraction for interacting with Map Services running on ArcGIS Online and ArcGIS Server that allows you to make requests to the API, as well as query and identify published features.
         * 
         * @param {MapServiceOptions} options 
         * @returns {MapService} 
         */
        function mapService(options: MapServiceOptions): MapService;

        /**
         * Options for Task
         * 
         * @interface TaskOptions
         * @extends {ServiceOptions}
         */
        interface TaskOptions extends ServiceOptions { }

        /**
         * L.esri.Task is a generic class that provides the foundation for calling operations on ArcGIS Online and ArcGIS Server Services like query, find and identify.
         * 
         * @class Task
         * @extends {L.Class}
         */
        class Task extends L.Class {
            constructor(options: TaskOptions | Service);
            /**
             * Makes a request to the associated service. The service's URL will be combined with the path option and parameters will be serialized. Accepts an optional function context for the callback.
             * 
             * @param {string} url 
             * @param {*} params 
             * @param {*} callback 
             * @param {*} context 
             * @returns {this} 
             * @memberof Task
             */
            request(url: string, params?: any, callback?: any, context?: any): this;
            /**
             * Adds a token to this request if the service requires authentication. Will be added automatically if used with a service.
             * 
             * @param {string} token 
             * @returns {this} 
             * @memberof Task
             */
            token(token: string): this;
        }

        /**
         * L.esri.Task is a generic class that provides the foundation for calling operations on ArcGIS Online and ArcGIS Server Services like query, find and identify.
         * 
         * @param {(TaskOptions | Service)} options 
         * @returns {Task} 
         */
        function task(options: TaskOptions | Service): Task;

        /**
         * Options for ImageService
         * 
         * @interface ImageServiceOptions
         * @extends {ServiceOptions}
         */
        interface ImageServiceOptions extends ServiceOptions {}

        /**
         * L.esri.ImageService is an abstraction for interacting with Image Services running on ArcGIS Online and ArcGIS Server that allows you to make requests to the API, as well as query and identify features on the service.
         * 
         * @class ImageService
         * @extends {Service}
         */
        class ImageService extends Service {
            constructor(options: ImageServiceOptions);
            /**
             * Returns a new L.esri.Query object that can be used to query this service.
             * 
             * @returns {this} 
             * @memberof ImageService
             */
            query(): this;
        }

        /**
         * L.esri.ImageService is an abstraction for interacting with Image Services running on ArcGIS Online and ArcGIS Server that allows you to make requests to the API, as well as query and identify features on the service.
         * 
         * @param {ImageServiceOptions} options 
         * @returns {ImageService} 
         */
        function imageService(options: ImageServiceOptions): ImageService;

        /**
         * Options for FeatureLayerService
         * 
         * @interface FeatureLayerServiceOptions
         * @extends {ServiceOptions}
         */
        interface FeatureLayerServiceOptions extends ServiceOptions { }

        /**
         * L.esri.FeatureLayerService is an abstraction for interacting with Feature Layers running on ArcGIS Online and ArcGIS Server that allows you to make requests to the API, as well as query, add, update and remove features from the service.
         * 
         * @class FeatureLayerService
         * @extends {Service}
         */
        class FeatureLayerService extends Service {
            constructor(options: FeatureLayerServiceOptions);
            /**
             * Returns a new L.esri.Query object that can be used to query this layer.
             * 
             * @returns {this} 
             * @memberof FeatureLayerService
             */
            query(): this;
            /**
             * Adds a new feature to the feature layer. this also adds the feature to the map if creation is successful.
             * Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.
             * Requires the Create capability be enabled on the service. You can check if creation exists by checking the metadata of your service under capabilities.
             * 
             * @param {GeoJSONFeature<GeoJSON.GeometryObject>} feature 
             * @param {*} callback 
             * @param {*} context 
             * @returns {this} 
             * @memberof FeatureLayerService
             */
            addFeature(feature: GeoJSONFeature<GeoJSON.GeometryObject>, callback?: any, context?: any): this;
            /**
             * Update the provided feature on the Feature Layer. This also updates the feature on the map.
             * Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.
             * Requires the Update capability be enabled on the service. You can check if this operation exists by checking the metadata of your service under capabilities.
             * 
             * @param {GeoJSONFeature<GeoJSON.GeometryObject>} feature 
             * @param {*} callback 
             * @param {*} context 
             * @returns {this} 
             * @memberof FeatureLayerService
             */
            updateFeature(feature: GeoJSONFeature<GeoJSON.GeometryObject>, callback?: any, context?: any): this;
            /**
             * 	Remove the feature with the provided id from the feature layer. This will also remove the feature from the map if it exists.
             * Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.
             * Requires the Delete capability be enabled on the service. You can check if this operation exists by checking the metadata of your service under capabilities.
             * 
             * @param {(string | number)} id 
             * @param {*} callback 
             * @param {*} context 
             * @returns {this} 
             * @memberof FeatureLayerService
             */
            deleteFeature(id: string | number, callback?: any, context?: any): this;
            /**
             * Removes an array of features with the provided ids from the feature layer. This will also remove the features from the map if they exist.
             * Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.
             * Requires the Delete capability be enabled on the service. You can check if this operation exists by checking the metadata of your service under capabilities.
             * 
             * @param {(Array<string | number>)} ids 
             * @param {*} callback 
             * @param {*} context 
             * @returns {this} 
             * @memberof FeatureLayerService
             */
            deleteFeatures(ids: Array<string | number>, callback?: any, context?: any): this;
        }

        /**
         * L.esri.FeatureLayerService is an abstraction for interacting with Feature Layers running on ArcGIS Online and ArcGIS Server that allows you to make requests to the API, as well as query, add, update and remove features from the service.
         * 
         * @param {FeatureLayerServiceOptions} options 
         * @returns {FeatureLayerService} 
         */
        function featureLayerService(options: FeatureLayerServiceOptions): FeatureLayerService;

        /**
         * Options for Query
         * 
         * @interface QueryOptions
         * @extends {TaskOptions}
         */
        interface QueryOptions extends TaskOptions { }

        /**
         * L.esri.Query is an abstraction for the query API included in Feature Layers and Image Services. It provides a chainable API for building request parameters and executing queries.
         * Note Depending on the type of service you are querying (Feature Layer, Map Service, Image Service) and the version of ArcGIS Server that hosts the service some of these options may not be available.
         * 
         * @class Query
         * @extends {Task}
         */
        class Query extends Task {
            constructor(options: QueryOptions);
            /**
             * Queries features from the service within (fully contained by) the passed geometry object. geometry can be an instance of L.Marker, L.Polygon, L.Polyline, L.LatLng, L.LatLngBounds and L.GeoJSON. It can also accept valid GeoJSON Point, Polyline, Polygon objects and GeoJSON Feature objects containing Point, Polyline, Polygon.
             * 
             * @param {Geometry} geometry 
             * @returns {this} 
             * @memberof Query
             */
            within(geometry: Geometry): this;
            /**
             * Queries features from the service that fully contain the passed geometry object. geometry can be an instance of L.Marker, L.Polygon, L.Polyline, L.LatLng, L.LatLngBounds and L.GeoJSON. It can also accept valid GeoJSON Point, Polyline, Polygon objects and GeoJSON Feature objects containing Point, Polyline, Polygon.
             * 
             * @param {Geometry} geometry 
             * @returns {this} 
             * @memberof Query
             */
            contains(geometry: Geometry): this;
            /**
             * Queries features from the service that intersect (touch anywhere) the passed geometry object. geometry can be an instance of L.Marker, L.Polygon, L.Polyline, L.LatLng, L.LatLngBounds and L.GeoJSON. It can also accept valid GeoJSON Point, Polyline, Polygon objects and GeoJSON Feature objects containing Point, Polyline, Polygon.
             * 
             * @param {Geometry} geometry 
             * @returns {this} 
             * @memberof Query
             */
            intersects(geometry: Geometry): this;
            /**
             * 	Queries features from the service that have a bounding box that intersects the bounding box of the passed geometry object. geometry can be an instance of L.Marker, L.Polygon, L.Polyline, L.LatLng, L.LatLngBounds and L.GeoJSON. It can also accept valid GeoJSON Point, Polyline, Polygon objects and GeoJSON Feature objects containing Point, Polyline, Polygon.
             * 
             * @param {Geometry} geometry 
             * @returns {this} 
             * @memberof Query
             */
            bboxIntersects(geometry: Geometry): this;
            /**
             * Queries features from the service that overlap (touch but are not fully contained by) the passed geometry object. geometry can be an instance of L.Marker, L.Polygon, L.Polyline, L.LatLng, L.LatLngBounds and L.GeoJSON. It can also accept valid GeoJSON Point, Polyline, Polygon objects and GeoJSON Feature objects containing Point, Polyline, Polygon.
             * 
             * @param {Geometry} geometry 
             * @returns {this} 
             * @memberof Query
             */
            overlap(geometry: Geometry): this;
            /**
             * Queries features a given distance in meters around a LatLng. 
             * Only available for Feature Layers hosted on ArcGIS Online or ArcGIS Server 10.3 that include the capability supportQueryWithDistance.
             * 
             * @param {L.LatLng} latlng 
             * @param {number} distance 
             * @returns {this} 
             * @memberof Query
             */
            nearby(latlng: L.LatLng, distance: number): this;
            /**
             * 	Adds a where clause to the query. String values should be denoted using single quotes ie: query.where("FIELDNAME = 'field value'"); More info about valid SQL can be found here.
             * 
             * @param {string} where 
             * @returns {this} 
             * @memberof Query
             */
            where(where: string): this;
            /**
             * Define the offset of the results, when combined with limit can be used for paging. 
             * Only available for Feature Layers hosted on ArcGIS Online or ArcGIS Server 10.3.
             * 
             * @param {number} offset 
             * @returns {this} 
             * @memberof Query
             */
            offset(offset: number): this;
            /**
             * Limit the number of results returned by this query, when combined with offset can be used for paging. 
             * Only available for Feature Layers hosted on ArcGIS Online or ArcGIS Server 10.3.
             * 
             * @param {number} limit 
             * @returns {this} 
             * @memberof Query
             */
            limit(limit: number): this;
            /**
             * Queries features within a given time range. Only available for Layers/Services with timeInfo in their metadata.
             * 
             * @param {Date} from 
             * @param {Date} to 
             * @returns {this} 
             * @memberof Query
             */
            between(from: Date, to: Date): this;
            /**
             * An array of associated fields to request for each feature.
             * 
             * @param {(string | Array<string>)} fields 
             * @returns {this} 
             * @memberof Query
             */
            fields(fields: string | Array<string>): this;
            /**
             * Return geometry with results. Default is true.
             * 
             * @param {boolean} returnGeometry 
             * @returns {this} 
             * @memberof Query
             */
            returnGeometry(returnGeometry: boolean): this;
            /**
             * Simplify the geometries of the output features for the current map view. the factor parameter controls the amount of simplification between 0 (no simplification) and 1 (the most basic shape possible).
             * 
             * @param {L.Map} map 
             * @param {number} factor 
             * @returns {this} 
             * @memberof Query
             */
            simplify(map: L.Map, factor: number): this;
            /**
             * Sort output features using values from an individual field. "ASC" (ascending) is the default sort order, but "DESC" can be passed as an alternative. This method can be called more than once to apply advanced sorting.
             * 
             * @param {string} fieldName 
             * @param {string} order 
             * @returns {this} 
             * @memberof Query
             */
            orderBy(fieldName: string, order: string): this;
            /**
             * Return only specific feature IDs if they match other query parameters.
             * 
             * @param {Array<any>} ids 
             * @returns {this} 
             * @memberof Query
             */
            featureIds(ids: Array<any>): this;
            /**
             * Return only this many decimal points of precision in the output geometries.
             * 
             * @param {number} precision 
             * @returns {this} 
             * @memberof Query
             */
            precision(precision: number): this;
            /**
             * Used to select which layer inside a Map Service to perform the query on. 
             * Only available for Map Services.
             * 
             * @param {(number | string)} layer 
             * @returns {this} 
             * @memberof Query
             */
            layer(layer: number | string): this;
            /**
             * Override the default pixelSize when querying an Image Service. 
             * Only available for Image Services.
             * 
             * @param {L.Point} point 
             * @returns {this} 
             * @memberof Query
             */
            pixelSize(point: L.Point): this;
            /**
             * Exectues the query request with the current parameters, features will be passed to callback as a GeoJSON FeatureCollection. Accepts an optional function context.
             * 
             * @param {FeatureCallbackHandlerFn} callback 
             * @param {*} [context] 
             * @returns {this} 
             * @memberof Query
             */
            run(callback: FeatureCallbackHandlerFn, context?: any): this;
            /**
             * Exectues the query request with the current parameters, passing only the number of features matching the query to callback as an Integer. Accepts an optional function context.
             * 
             * @param {FeatureCallbackHandlerFn} callback 
             * @param {*} [context] 
             * @returns {this} 
             * @memberof Query
             */
            count(callback: FeatureCallbackHandlerFn, context?: any): this;
            /**
             * Exectues the query request with the current parameters, passing only an array of the feature ids matching the query to callbackcallback. Accepts an optional function context.
             * 
             * @param {FeatureCallbackHandlerFn} callback 
             * @param {*} [context] 
             * @returns {this} 
             * @memberof Query
             */
            ids(callback: FeatureCallbackHandlerFn, context?: any): this;
            /**
             * Executes the query request with the current parameters, passing only the LatLngBounds of all features matching the query in the callback. Accepts an optional function context. Only available for Feature Layers hosted on ArcGIS Online or ArcGIS Server 10.3.1.
             * 
             * @param {FeatureCallbackHandlerFn} callback 
             * @param {*} [context] 
             * @returns {this} 
             * @memberof Query
             */
            bounds(callback: FeatureCallbackHandlerFn, context?: any): this;
        }

        /**
         * L.esri.Query is an abstraction for the query API included in Feature Layers and Image Services. It provides a chainable API for building request parameters and executing queries.
         * Note Depending on the type of service you are querying (Feature Layer, Map Service, Image Service) and the version of ArcGIS Server that hosts the service some of these options may not be available.
         * 
         * @param {QueryOptions} options 
         * @returns {Query} 
         */
        function query(options: QueryOptions): Query;
    }
}

declare module 'esri-leaflet' {
    export = L;
}
