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
             * @param {FeatureRequestCallbackFn} fn 
             * @param {L.PopupOptions} popupOptions 
             * @returns {this} 
             * @memberof DynamicMapLayer
             */
            bindPopup(fn: FeatureRequestCallbackFn, popupOptions?: L.PopupOptions): this;
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
        namespace services {

        }
    }
}

declare module 'esri-leaflet' {
    export = L;
}
