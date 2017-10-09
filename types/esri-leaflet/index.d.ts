// Type definitions for esri-leaflet 2.1
// Project: http://esri.github.io/esri-leaflet
// Definitions by: strajuser <https://github.com/strajuser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    namespace esri {
        type CallbackHandler = (error: any, metadata: any) => void;

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

        type LeafletGeometry = L.Marker | L.Polygon | L.Polyline | L.LatLngExpression | L.LatLngBounds | L.GeoJSON;
        type GeoJSONGeometry = GeoJSON.Point | GeoJSON.Polygon | GeoJSON.LineString;
        type Geometry = LeafletGeometry | GeoJSONGeometry;
        type SpatialReferenceExpression = number | SpatialReference;

        interface SpatialReference {
            wkid?: number;
            wkt?: string;
        }

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
             * @param {CallbackHandler} callback
             * @param {*} context
             * @returns {this}
             * @memberof TiledMapLayer
             */
            metadata(callback: CallbackHandler, context?: any): this;
            /**
             * Returns a new L.esri.services.IdentifyFeatures object that can be used to identify features on this layer. Your callback function will be passed a GeoJSON FeatureCollection with the results or an error.
             *
             * @returns {*}
             * @memberof TiledMapLayer
             */
            identify(): IdentifyFeatures;
            /**
             * Returns a new L.esri.services.Find object that can be used to find features. Your callback function will be passed a GeoJSON FeatureCollection with the results or an error.
             *
             * @returns {*}
             * @memberof TiledMapLayer
             */
            find(): Find;
            /**
             * Returns a new L.esri.Query object that can be used to query this service.
             *
             * @returns {*}
             * @memberof TiledMapLayer
             */
            query(): Query;
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
             * @param {CallbackHandler} callback
             * @param {*} context
             * @returns {this}
             * @memberof TiledMapLayer
             */
            metadata(callback: CallbackHandler, context?: any): this;
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
            /**
             * If enabled, appends a timestamp to each request to ensure a fresh image is created server-side.
             *
             * @type {boolean}
             * @memberof DynamicMapLayerOptions
             */
            disableCache?: boolean;
        }

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
            bindPopup(fn: FeatureCallbackHandler, popupOptions?: L.PopupOptions): this;
            bindPopup(content: ((layer: Layer) => Content) | Content | Popup, options?: PopupOptions): this;
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
            getLayers(): any[];
            /**
             * Redraws the layer to show the passed array of layer ids.
             *
             * @param {Array<any>} layers
             * @returns {this}
             * @memberof DynamicMapLayer
             */
            setLayers(layers: any[]): this;
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
            getTimeOptions(): any;
            /**
             * Sets the current time options being used to render the layer. Corresponds to the layerTimeOptions option on the export API.
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
            identify(): IdentifyFeatures;
            /**
             * Returns a new L.esri.services.Find object that can be used to find features. Your callback function will be passed a GeoJSON FeatureCollection with the results or an error.
             *
             * @returns {*}
             * @memberof DynamicMapLayer
             */
            find(): Find;
            /**
             * Returns a new L.esri.Query object that can be used to query this service.
             *
             * @returns {*}
             * @memberof DynamicMapLayer
             */
            query(): Query;
        }

        /**
         * Render and visualize Map Services from ArcGIS Online and ArcGIS Server. L.esri.DynamicMapLayer also supports custom popups and identification of features.
         * Map Services are used when its preferable to ask the server to draw layers at a particular location and scale and pass back the image which was generated on the fly. They also expose capabilities for querying and identifying individual features.
         *
         * @param {DynamicMapLayerOptions} options
         * @returns {DynamicMapLayer}
         */
        function dynamicMapLayer(options: DynamicMapLayerOptions): DynamicMapLayer;

        /**
         * Options for FeatureLayer
         *
         * @interface FeatureLayerOptions
         * @extends {LayerOptionsBase}
         */
        interface FeatureLayerOptions extends LayerOptionsBase {
            /**
             * Function that will be used for creating layers for GeoJSON points. If the option is not specified, simple markers will be created). For point layers, custom panes should be passed through pointToLayer (example here).
             *
             * @memberof FeatureLayerOptions
             */
            pointToLayer?: (feature: any, latLng: LatLngExpression) => void;
            /**
             * Function that will be used to get style options for vector layers created for GeoJSON features.
             *
             * @memberof FeatureLayerOptions
             */
            style?: (feature: any, layer: L.Layer) => void;
            /**
             * 	Provides an opportunity to introspect individual GeoJSON features in the layer.
             *
             * @memberof FeatureLayerOptions
             */
            onEachFeature?: (feature: any, layer: L.Layer) => void;
            /**
             * An optional expression to filter features server side. String values should be denoted using single quotes ie: where: "FIELDNAME = 'field value'"; More information about valid SQL syntax can be found here.
             *
             * @type {string}
             * @memberof FeatureLayerOptions
             */
            where?: string;
            /**
             * Closest zoom level the layer will be displayed on the map. example: maxZoom:19
             *
             * @type {number}
             * @memberof FeatureLayerOptions
             */
            maxZoom?: number;
            /**
             * Furthest zoom level the layer will be displayed on the map. example: minZoom:3
             *
             * @type {number}
             * @memberof FeatureLayerOptions
             */
            minZoom?: number;
            /**
             * Will remove layers from the internal cache when they are removed from the map.
             *
             * @type {boolean}
             * @memberof FeatureLayerOptions
             */
            cacheLayers?: boolean;
            /**
             * 	An array of fieldnames to pull from the service. Includes all fields by default. You should always specify the name of the unique id for the service. Usually either 'FID' or 'OBJECTID'.
             *
             * @type {Array<string>}
             * @memberof FeatureLayerOptions
             */
            fields?: string[];
            /**
             * 	When paired with to defines the time range of features to display. Requires the Feature Layer to be time enabled.
             *
             * @type {Date}
             * @memberof FeatureLayerOptions
             */
            from?: Date;
            /**
             * When paired with from defines the time range of features to display. Requires the Feature Layer to be time enabled.
             *
             * @type {Date}
             * @memberof FeatureLayerOptions
             */
            to?: Date;
            /**
             * The name of the field to lookup the time of the feature. Can be an object like {start:'startTime', end:'endTime'} or a string like 'created'.
             *
             * @type {*}
             * @memberof FeatureLayerOptions
             */
            timeField?: any;
            /**
             * Determines where features are filtered by time. By default features will be filtered by the server. If set to 'client' all features are requested and filtered by the app before display.
             *
             * @type {('server' | 'client')}
             * @memberof FeatureLayerOptions
             */
            timeFilterMode?: 'server' | 'client';
            /**
             * 	How much to simplify polygons and polylines. A higher value gives better performance, a lower value gives a more accurate representation.
             *
             * @type {number}
             * @memberof FeatureLayerOptions
             */
            simplifyFactor?: number;
            /**
             * How many digits of precision to request from the server. Wikipedia has a great reference of digit precision to meters.
             *
             * @type {number}
             * @memberof FeatureLayerOptions
             */
            precision?: number;
            /**
             * The vector renderer to use to draw the service. Usually L.svg() is preferable but setting to L.canvas() can have performance benefits for large polygon layers.
             *
             * @type {(L.SVG | L.Canvas)}
             * @memberof FeatureLayerOptions
             */
            renderer?: L.SVG | L.Canvas;
            /**
             * Set this to false if your own service supports GeoJSON as an output format but you'd like to ask for Geoservices JSON instead.
             *
             * @type {boolean}
             * @memberof FeatureLayerOptions
             */
            isModern?: boolean;
            /**
             * When utilizing esri-leaflet-renderers '2.0.2' or above, this option makes it possible to override the symbology defined by the service itself.
             *
             * @type {boolean}
             * @memberof FeatureLayerOptions
             */
            ignoreRenderer?: boolean;
        }

        type StyleCallback = (feature: any) => any;

        // TODO: VirtualGrid extends support

        /**
         * L.esri.FeatureLayer is used to visualize, style, query and edit vector geographic data hosted in both ArcGIS Online and published using ArcGIS Server. Copyright text from the service is added to map attribution automatically.
         * Feature Layers reference an individual data source in either a parent Map Service or Feature Service that can contain multiple layers. You can see a sample Map Service URL below: http://sampleserver6.arcgisonline.com/arcgis/rest/services/Hurricanes/MapServer
         * This particular service includes two different data sources. The URL for the 'Hurricane Tracks' feature layer will end in a number (representing its position among the other layers). http://sampleserver6.arcgisonline.com/arcgis/rest/services/Hurricanes/MapServer/1
         * Feature Layer URLs always end in a number (ex: /FeatureServer/{LAYER_ID} or /MapServer/{LAYER_ID}).
         * You can create a new empty feature service with a single layer on the ArcGIS for Developers website or you can use ArcGIS Online to create a Feature Service from a CSV or Shapefile
         * L.esri.FeatureLayer divides the current map extent into a grid of individual cells and uses them to fire queries to fetch nearby features. This technique is comparable to MODE_ONDEMAND in the ArcGIS API for JavaScript.
         *
         * @class FeatureLayer
         * @extends {L.Layer}
         */
        class FeatureLayer extends L.Layer {
            constructor(options: FeatureLayerOptions);
            /**
             * Sets the given path options to each layer that has a setStyle method. Can also be a Function that will receive a feature argument and should return Path Options
             * featureLayer.setStyle({ color: 'white' })
             * featureLayer.setStyle(function(feature){ return { weight: feature.properties.pixelWidth };})
             *
             * @param {(L.PathOptions | StyleCallback)} style
             * @returns {this}
             * @memberof FeatureLayer
             */
            setStyle(style: L.PathOptions | StyleCallback): this;
            /**
             * Changes the style on a specfic feature.
             *
             * @param {(string | number)} id
             * @param {(L.PathOptions | StyleCallback)} style
             * @returns {this}
             * @memberof FeatureLayer
             */
            setFeatureStyle(id: string | number, style: L.PathOptions | StyleCallback): this;
            /**
             * 	Given the ID of a feature, reset that feature to the original style.
             *
             * @returns {this}
             * @memberof FeatureLayer
             */
            resetStyle(): this;
            /**
             * Calls the passed function against every feature. The function will be passed the layer that represents the feature.
             * featureLayer.eachFeature(function(layer){ console.log(layer.feature.properties.NAME); });
             *
             * @param {(feature: any) => void} fn
             * @param {*} [context]
             * @returns {this}
             * @memberof FeatureLayer
             */
            eachFeature(fn: (feature: any) => void, context?: any): this;
            /**
             * Calls the passed function against every feature that is currently being displayed.
             *
             * @param {(feature: any) => void} fn
             * @param {*} [context]
             * @returns {this}
             * @memberof FeatureLayer
             */
            eachActiveFeature(fn: (feature: any) => void, context?: any): this;
            /**
             * Given the id of a Feature return the layer on the map that represents it. This will usually be a Leaflet vector layer like Polyline or Polygon, or a Leaflet Marker.
             *
             * @param {(string | number)} id
             * @returns {L.Layer}
             * @memberof FeatureLayer
             */
            getFeature(id: string | number): L.Layer;
            /**
             * Returns the current where setting
             *
             * @returns {string}
             * @memberof FeatureLayer
             */
            getWhere(): string;
            /**
             * Sets the new where option and refreshes the layer to reflect the new where filter. Accepts an optional callback and function context.
             *
             * @param {string} where
             * @param {FeatureCallbackHandler} [callback]
             * @param {*} [context]
             * @returns {this}
             * @memberof FeatureLayer
             */
            setWhere(where: string, callback?: FeatureCallbackHandler, context?: any): this;
            /**
             * 	Returns the current time range as an array like [from, to]
             *
             * @returns {Date[]}
             * @memberof FeatureLayer
             */
            getTimeRange(): Date[];
            /**
             * Sets the current time filter applied to features. An optional callback is run upon completion if timeFilterMode is set to 'server'. Also accepts function context as the last argument.
             *
             * @param {Date} from
             * @param {Date} to
             * @param {FeatureCallbackHandler} [callback]
             * @param {*} [context]
             * @returns {this}
             * @memberof FeatureLayer
             */
            setTimeRange(from: Date, to: Date, callback?: FeatureCallbackHandler, context?: any): this;
            /**
             * Adds a new feature to the feature layer. this also adds the feature to the map if creation is successful.
             * Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.
             * Requires the Create capability be enabled on the service. You can check if creation exists by checking the metadata of your service under capabilities.
             *
             * @param {GeoJSONFeature<GeoJSON.GeometryObject>} feature
             * @param {ResponseCallbackHandler} [callback]
             * @param {*} context
             * @returns {this}
             * @memberof FeatureLayer
             */
            // TODO: GeoJSONFeature<GeoJSON.GeometryObject>
            addFeature(feature: any, callback?: ResponseCallbackHandler, context?: any): this;
            /**
             * Update the provided feature on the Feature Layer. This also updates the feature on the map.
             * Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.
             * Requires the Update capability be enabled on the service. You can check if this operation exists by checking the metadata of your service under capabilities.
             *
             * @param {GeoJSONFeature<GeoJSON.GeometryObject>} feature
             * @param {ResponseCallbackHandler} [callback]
             * @param {*} context
             * @returns {this}
             * @memberof FeatureLayer
             */
            // TODO: GeoJSONFeature<GeoJSON.GeometryObject>
            updateFeature(feature: any, callback?: ResponseCallbackHandler, context?: any): this;
            /**
             * 	Remove the feature with the provided id from the feature layer. This will also remove the feature from the map if it exists.
             * Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.
             * Requires the Delete capability be enabled on the service. You can check if this operation exists by checking the metadata of your service under capabilities.
             *
             * @param {(string | number)} id
             * @param {ResponseCallbackHandler} [callback]
             * @param {*} context
             * @returns {this}
             * @memberof FeatureLayer
             */
            deleteFeature(id: string | number, callback?: ResponseCallbackHandler, context?: any): this;
            /**
             * Removes an array of features with the provided ids from the feature layer. This will also remove the features from the map if they exist.
             * Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.
             * Requires the Delete capability be enabled on the service. You can check if this operation exists by checking the metadata of your service under capabilities.
             *
             * @param {(Array<string | number>)} ids
             * @param {ResponseCallbackHandler} [callback]
             * @param {*} context
             * @returns {this}
             * @memberof FeatureLayer
             */
            deleteFeatures(ids: string[] | number[], callback?: ResponseCallbackHandler, context?: any): this;
            /**
             * Redraws a feature with the provided id from the feature layer.
             *
             * @param {(string | number)} id
             * @returns {this}
             * @memberof FeatureLayer
             */
            redraw(id: string | number): this;
            /**
             * 	Redraws all features from the feature layer that exist on the map.
             *
             * @returns {this}
             * @memberof FeatureLayer
             */
            refresh(): this;
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
             * @param {CallbackHandler} callback
             * @param {*} context
             * @returns {this}
             * @memberof TiledMapLayer
             */
            metadata(callback: CallbackHandler, context?: any): this;
            /**
             * Returns a new L.esri.services.IdentifyFeatures object that can be used to identify features on this layer. Your callback function will be passed a GeoJSON FeatureCollection with the results or an error.
             *
             * @returns {*}
             * @memberof TiledMapLayer
             */
            identify(): IdentifyFeatures;
            /**
             * Returns a new L.esri.services.Find object that can be used to find features. Your callback function will be passed a GeoJSON FeatureCollection with the results or an error.
             *
             * @returns {*}
             * @memberof TiledMapLayer
             */
            find(): Find;
            /**
             * Returns a new L.esri.Query object that can be used to query this service.
             *
             * @returns {*}
             * @memberof TiledMapLayer
             */
            query(): Query;
        }

        /**
         * L.esri.FeatureLayer is used to visualize, style, query and edit vector geographic data hosted in both ArcGIS Online and published using ArcGIS Server. Copyright text from the service is added to map attribution automatically.
         * Feature Layers reference an individual data source in either a parent Map Service or Feature Service that can contain multiple layers. You can see a sample Map Service URL below: http://sampleserver6.arcgisonline.com/arcgis/rest/services/Hurricanes/MapServer
         * This particular service includes two different data sources. The URL for the 'Hurricane Tracks' feature layer will end in a number (representing its position among the other layers). http://sampleserver6.arcgisonline.com/arcgis/rest/services/Hurricanes/MapServer/1
         * Feature Layer URLs always end in a number (ex: /FeatureServer/{LAYER_ID} or /MapServer/{LAYER_ID}).
         * You can create a new empty feature service with a single layer on the ArcGIS for Developers website or you can use ArcGIS Online to create a Feature Service from a CSV or Shapefile
         * L.esri.FeatureLayer divides the current map extent into a grid of individual cells and uses them to fire queries to fetch nearby features. This technique is comparable to MODE_ONDEMAND in the ArcGIS API for JavaScript.
         *
         * @param {FeatureLayerOptions} options
         * @returns {FeatureLayer}
         */
        function featureLayer(options: FeatureLayerOptions): FeatureLayer;

        type FeatureCallbackHandler = (error?: any, featureCollection?: any, response?: any) => void;
        type ResponseCallbackHandler = (error?: any, response?: any) => void;

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
             * @param {CallbackHandler} [callback]
             * @param {*} [context]
             * @returns {this}
             * @memberof Service
             */
            get(url: string, params?: any, callback?: CallbackHandler, context?: any): this;
            /**
             * Makes a POST request to the service. The service's URL will be combined with the path option and parameters will be serialized. Accepts an optional function context for the callback.
             *
             * @param {string} url
             * @param {*} [params]
             * @param {CallbackHandler} [callback]
             * @param {*} [context]
             * @returns {this}
             * @memberof Service
             */
            post(url: string, params?: any, callback?: CallbackHandler, context?: any): this;
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
             * @param {CallbackHandler} callback
             * @param {*} context
             * @returns {this}
             * @memberof TiledMapLayer
             */
            metadata(callback: CallbackHandler, context?: any): this;
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
            identify(): IdentifyFeatures;
            /**
             * Returns a new L.esri.services.Find object that can be used to find features. Your callback function will be passed a GeoJSON FeatureCollection with the results or an error.
             *
             * @returns {*}
             * @memberof MapService
             */
            find(): Find;
            /**
             * Returns a new L.esri.Query object that can be used to query this service.
             *
             * @returns {*}
             * @memberof MapService
             */
            query(): Query;
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

            /**
             *
             *
             * @param {boolean} returnUnformattedValues
             * @returns {this}
             * @memberof Task
             */
            format(returnUnformattedValues: boolean): this;
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
            query(): Query;
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
            query(): Query;
            /**
             * Adds a new feature to the feature layer. this also adds the feature to the map if creation is successful.
             * Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.
             * Requires the Create capability be enabled on the service. You can check if creation exists by checking the metadata of your service under capabilities.
             *
             * @param {GeoJSONFeature<GeoJSON.GeometryObject>} feature
             * @param {ResponseCallbackHandler} [callback]
             * @param {*} context
             * @returns {this}
             * @memberof FeatureLayerService
             */
            // TODO: GeoJSONFeature<GeoJSON.GeometryObject>
            addFeature(feature: any, callback?: ResponseCallbackHandler, context?: any): this;
            /**
             * Update the provided feature on the Feature Layer. This also updates the feature on the map.
             * Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.
             * Requires the Update capability be enabled on the service. You can check if this operation exists by checking the metadata of your service under capabilities.
             *
             * @param {GeoJSONFeature<GeoJSON.GeometryObject>} feature
             * @param {ResponseCallbackHandler} [callback]
             * @param {*} context
             * @returns {this}
             * @memberof FeatureLayerService
             */
            // TODO: GeoJSONFeature<GeoJSON.GeometryObject>
            updateFeature(feature: any, callback?: ResponseCallbackHandler, context?: any): this;
            /**
             * 	Remove the feature with the provided id from the feature layer. This will also remove the feature from the map if it exists.
             * Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.
             * Requires the Delete capability be enabled on the service. You can check if this operation exists by checking the metadata of your service under capabilities.
             *
             * @param {(string | number)} id
             * @param {ResponseCallbackHandler} [callback]
             * @param {*} context
             * @returns {this}
             * @memberof FeatureLayerService
             */
            deleteFeature(id: string | number, callback?: ResponseCallbackHandler, context?: any): this;
            /**
             * Removes an array of features with the provided ids from the feature layer. This will also remove the features from the map if they exist.
             * Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.
             * Requires the Delete capability be enabled on the service. You can check if this operation exists by checking the metadata of your service under capabilities.
             *
             * @param {(Array<string | number>)} ids
             * @param {ResponseCallbackHandler} [callback]
             * @param {*} context
             * @returns {this}
             * @memberof FeatureLayerService
             */
            deleteFeatures(ids: string[] | number[], callback?: ResponseCallbackHandler, context?: any): this;
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
             * Queries features from the service that have a bounding box that intersects the bounding box of the passed geometry object. geometry can be an instance of L.Marker, L.Polygon, L.Polyline, L.LatLng, L.LatLngBounds and L.GeoJSON. It can also accept valid GeoJSON Point, Polyline, Polygon objects and GeoJSON Feature objects containing Point, Polyline, Polygon.
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
            fields(fields: string | string[]): this;
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
            featureIds(ids: any[]): this;
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
             * @param {FeatureCallbackHandler} callback
             * @param {*} [context]
             * @returns {this}
             * @memberof Query
             */
            run(callback: FeatureCallbackHandler, context?: any): this;
            /**
             * Exectues the query request with the current parameters, passing only the number of features matching the query to callback as an Integer. Accepts an optional function context.
             *
             * @param {FeatureCallbackHandler} callback
             * @param {*} [context]
             * @returns {this}
             * @memberof Query
             */
            count(callback: FeatureCallbackHandler, context?: any): this;
            /**
             * Exectues the query request with the current parameters, passing only an array of the feature ids matching the query to callbackcallback. Accepts an optional function context.
             *
             * @param {FeatureCallbackHandler} callback
             * @param {*} [context]
             * @returns {this}
             * @memberof Query
             */
            ids(callback: FeatureCallbackHandler, context?: any): this;
            /**
             * Executes the query request with the current parameters, passing only the LatLngBounds of all features matching the query in the callback. Accepts an optional function context. Only available for Feature Layers hosted on ArcGIS Online or ArcGIS Server 10.3.1.
             *
             * @param {FeatureCallbackHandler} callback
             * @param {*} [context]
             * @returns {this}
             * @memberof Query
             */
            bounds(callback: FeatureCallbackHandler, context?: any): this;
            /**
             * The WKID of a datum transformation for the server to apply when reprojecting output features.
             *
             * @param {SpatialReferenceExpression} datumTranformation
             * @returns {this}
             * @memberof Query
             */
            transform(datumTranformation: SpatialReferenceExpression): this;
        }

        /**
         * L.esri.Query is an abstraction for the query API included in Feature Layers and Image Services. It provides a chainable API for building request parameters and executing queries.
         * Note Depending on the type of service you are querying (Feature Layer, Map Service, Image Service) and the version of ArcGIS Server that hosts the service some of these options may not be available.
         *
         * @param {QueryOptions} options
         * @returns {Query}
         */
        function query(options: QueryOptions): Query;

        /**
         * Options for IdentifyFeatures
         *
         * @interface IdentifyFeaturesOptions
         * @extends {ServiceOptions}
         */
        interface IdentifyFeaturesOptions extends ServiceOptions { }

        /**
         * L.esri.IdentifyFeatures is an abstraction for the Identify API found in Map Services. It provides a chainable API for building request parameters and executing the request.
         *
         * @class IdentifyFeatures
         * @extends {Task}
         */
        class IdentifyFeatures extends Task {
            constructor(options: IdentifyFeaturesOptions | ImageService);
            /**
             * The map to identify features on.
             *
             * @param {L.Map} map
             * @returns {this}
             * @memberof IdentifyFeatures
             */
            on(map: L.Map): this;
            /**
             * Identifies features at a given LatLng geometry can also be an instance of L.Marker, L.Polygon, L.Polyline, L.LatLngBounds, L.GeoJSON or a valid GeoJSON object literal.
             *
             * @param {Geometry} geometry
             * @returns {this}
             * @memberof IdentifyFeatures
             */
            at(geometry: Geometry): this;
            /**
             * Add a layer definition to the query.
             *
             * @param {number} id
             * @param {string} where
             * @returns {this}
             * @memberof IdentifyFeatures
             */
            layerDef(id: number, where: string): this;
            /**
             * Identifies features within a given time range.
             *
             * @param {Date} from
             * @param {Date} to
             * @returns {this}
             * @memberof IdentifyFeatures
             */
            between(from: Date, to: Date): this;
            /**
             * By default, only the topmost feature will be identified, but it is possible to specify both an alternative strategy and array of individual layers. See the REST API documentation for more information about valid combinations.
             * ex: .layers('all:0').
             *
             * @param {string} layers
             * @returns {this}
             * @memberof IdentifyFeatures
             */
            layers(layers: string | string[]): this;
            /**
             * Return only this many decimal points of precision in the output geometries.
             *
             * @param {number} precision
             * @returns {this}
             * @memberof IdentifyFeatures
             */
            precision(precision: number): this;
            /**
             * Buffer the identify area by a given number of screen pixels.
             *
             * @param {number} precision
             * @returns {this}
             * @memberof IdentifyFeatures
             */
            tolerance(precision: number): this;
            /**
             * Return geometry with results. Default is true.
             *
             * @param {boolean} returnGeometry
             * @returns {this}
             * @memberof IdentifyFeatures
             */
            returnGeometry(returnGeometry: boolean): this;
            /**
             * 	Simplify the geometries of the output features for the current map view. the factor parameter controls the amount of simplification between 0 (no simplification) and 1 (the most basic shape possible).
             *
             * @param {L.Map} map
             * @param {number} factor
             * @returns {this}
             * @memberof IdentifyFeatures
             */
            simplify(map: L.Map, factor: number): this;
            /**
             * Executes the identify request with the current parameters, identified features will be passed to callback as a GeoJSON FeatureCollection. Accepts an optional function context
             *
             * @param {FeatureCallbackHandler} callback
             * @param {*} context
             * @returns {this}
             * @memberof IdentifyFeatures
             */
            run(callback: FeatureCallbackHandler, context?: any): this;
        }

        /**
         * L.esri.IdentifyFeatures is an abstraction for the Identify API found in Map Services. It provides a chainable API for building request parameters and executing the request.
         *
         * @param {(IdentifyFeaturesOptions | ImageService)} options
         * @returns {IdentifyFeatures}
         */
        function identifyFeatures(options: IdentifyFeaturesOptions | ImageService): IdentifyFeatures;

        /**
         * Options for Find Task
         *
         * @interface FindOptions
         * @extends {ServiceOptions}
         */
        interface FindOptions extends ServiceOptions { }

        /**
         * L.esri.Find is an abstraction for the find API included in Map Services. It provides a chainable API for building request parameters and executing find tasks.
         *
         * @class Find
         * @extends {Task}
         */
        class Find extends Task {
            constructor(options: FindOptions | MapService);
            /**
             * Text that is searched across the layers and fields the user specifies.
             *
             * @param {string} text
             * @returns {this}
             * @memberof Find
             */
            text(text: string): this;
            /**
             * When true find task will search for a value that contains the searchText. When false it will do an exact match on the searchText string. Default is true.
             *
             * @param {boolean} contains
             * @returns {this}
             * @memberof Find
             */
            contains(contains: boolean): this;
            /**
             * 	An array or comma-separated list of field names to search. If not specified, all fields are searched.
             *
             * @param {(string | Array<string>)} fields
             * @returns {this}
             * @memberof Find
             */
            fields(fields: string | string[]): this;
            /**
             * 	The well known ID (ex. 4326) for the results.
             *
             * @param {number} sr
             * @returns {this}
             * @memberof Find
             */
            spatialReference(sr: number): this;
            /**
             * 	Add a layer definition to the find task.
             *
             * @param {number} id
             * @param {string} where
             * @returns {this}
             * @memberof Find
             */
            layerDef(id: number, where: string): this;
            /**
             * 	Layers to perform find task on. Accepts an array of layer IDs or comma-separated list.
             *
             * @param {(string | Array<string>)} layers
             * @returns {this}
             * @memberof Find
             */
            layers(layers: string | string[]): this;
            /**
             * Return geometry with results. Default is true.
             *
             * @param {boolean} returnGeometry
             * @returns {this}
             * @memberof Find
             */
            returnGeometry(returnGeometry: boolean): this;
            /**
             * Specifies the maximum allowable offset to be used for generalizing geometries returned by the find task.
             *
             * @param {number} maxAllowableOffset
             * @returns {this}
             * @memberof Find
             */
            maxAllowableOffset(maxAllowableOffset: number): this;
            /**
             * Specifies the number of decimal places in returned geometries.
             *
             * @param {number} precision
             * @returns {this}
             * @memberof Find
             */
            precision(precision: number): this;
            /**
             * Include Z values in the results. Default value is true. This parameter only applies if returnGeometry=true.
             *
             * @param {boolean} returnZ
             * @returns {this}
             * @memberof Find
             */
            returnZ(returnZ: boolean): this;
            /**
             * Includes M values if the features have them. Default value is false. This parameter only applies if returnGeometry=true.
             *
             * @param {boolean} returnM
             * @returns {this}
             * @memberof Find
             */
            returnM(returnM: boolean): this;
            /**
             * Property used for adding new layers or modifying the data source of existing ones in the current map service.
             *
             * @param {*} dynamicLayers
             * @returns {this}
             * @memberof Find
             */
            dynamicLayers(dynamicLayers: any): this;
            /**
             * Simplify the geometries of the output features for the current map view. the factor parameter controls the amount of simplification between 0 (no simplification) and 1 (simplify to the most basic shape possible).
             *
             * @param {L.Map} map
             * @param {number} factor
             * @returns {this}
             * @memberof Find
             */
            simplify(map: L.Map, factor: number): this;
            /**
             * 	Exectues the find request with the current parameters, features will be passed to callback as a GeoJSON FeatureCollection. Accepts an optional function context.
             *
             * @param {FeatureCallbackHandler} callback
             * @param {*} [context]
             * @returns {this}
             * @memberof Find
             */
            run(callback: FeatureCallbackHandler, context?: any): this;
        }

        /**
         * L.esri.Find is an abstraction for the find API included in Map Services. It provides a chainable API for building request parameters and executing find tasks.
         *
         * @param {(FindOptions | MapService)} options
         * @returns {Find}
         */
        function find(options: FindOptions | MapService): Find;
    }
}
