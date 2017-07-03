// Type definitions for esri-leaflet 2.0
// Project: http://esri.github.io/esri-leaflet
// Definitions by: strajuser <https://github.com/strajuser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="leaflet" />

declare namespace L {
    namespace esri {
        type CallbackHandlerFn = (error: any, metadata: any) => void;

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
        
        interface TiledMapLayerOptions extends L.TileLayerOptions {
            /**
             * URL of the Map Service with a tile cache.
             * 
             * @type {string}
             * @memberof TiledMapLayerOptions
             */
            url: string;
            /**
             * If correctZoomLevels is enabled this controls the amount of tolerance for the difference at each scale level for remapping tile levels.
             * Default 0.1
             * 
             * @type {number}
             * @memberof TiledMapLayerOptions
             */
            zoomOffsetAllowance?: number;
            /**
             * URL of an ArcGIS API for JavaScript proxy or ArcGIS Resource Proxy to use for proxying requests.
             * 
             * @type {string}
             * @memberof TiledMapLayerOptions
             */
            proxy?: string;
            /**
             * Dictates if the service should use CORS when making GET requests.
             * 
             * @type {boolean}
             * @memberof TiledMapLayerOptions
             */
            userCors?: boolean;
            /**
             * Will use this token to authenticate all calls to the service.
             * 
             * @type {string}
             * @memberof TiledMapLayerOptions
             */
            token?: string;
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
    }
}

declare module 'esri-leaflet' {
    export = L;
}
