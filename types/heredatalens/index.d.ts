/// <reference types="heremaps" />

/**
 * Data Lens REST API connector for HERE Maps API
 * Data Lens JavaScript API is a module for HERE Maps API.
 * It connects Data Lens REST API and provides data-driven styling of data on a map.
 */
declare namespace H.datalens {
    /**
     * HERE Maps API and Data Lens JavaScript API can be used to visualize data from different network sources.
     * For each network source type, a service class is required. The service also stores API connection credentials.
     * The service instance must be configured with a service.Platform instance.
     */
    class Service implements service.IConfigurable {
        /**
         * Constructor
         * @param options - Overrides the configuration from the service.Platform instance
         */
        constructor(options?: Service.Options);

        /**
         * This method makes an HTTP request to the Data Lens REST API.
         * It makes any CRUD request (GET, PUT, POST, DELETE).
         * This method can be used when implementing a custom provider or implementing data management.
         * Otherwise existing providers are used to get data from the Data Lens REST API.
         * @param method - Any HTTP method (GET, PUT, POST, etc.)
         * @param endpoint - The REST API endpoint
         * @param params - URL parameters
         * @param body - The payload of the request
         * @param onResult - Callback called on a successful request with response data
         * @param onError - Callback called on an unsuccessful request with the Error object
         * @returns - Response Promise
         */
        request(
            method: string,
            endpoint: string,
            params?: any,
            body?: any,
            onResult?: (result: any) => void,
            onError?: (error: any) => void,
        ): Promise<any>;

        /**
         * This method fetches query data for a given query ID.
         * This method can be used when implementing a custom provider.
         * Otherwise existing providers are used to get data from the Data Lens REST API.
         * @param queryId - The ID of the Data Lens REST API query
         * @param params - Query dynamic parameters
         * @param onResult - Callback called on a successful request with response data
         * @param onError - Callback called on an unsuccessful request with the Error object
         * @returns - Response Promise
         */
        fetchQueryData(
            queryId: string,
            params?: any,
            onResult?: (result: any) => void,
            onError?: (error: any) => void,
        ): Promise<any>;

        /**
         * This method fetches statistical data for the Data Lens query (eg minimum and maximum values for the query metric).
         * It can be used to define visualization boundaries, scales and legends.
         * @param queryId - The ID of the Data Lens REST API query
         * @param statsQuery - A JSON object which defines a statistics query for the Data Lens query
         * @param onResult - Callback called on a successful request with response data
         * @param onError - Callback called on an unsuccessful request with the Error object
         * @returns - Response Promise
         */
        fetchQueryStats(
            queryId: string,
            statsQuery: any,
            onResult?: (result: any) => void,
            onError?: (error: any) => void,
        ): Promise<any>;

        /**
         * This method fetches a layer of geometries (eg buildings or administrative boundaries).
         * @param layerName - The name of the layer
         * @param params - URL parameters (eg bounding box)
         * @param onResult - Callback called on a successful request with response data
         * @param onError - Callback called on an unsuccessful request with the Error object
         * @returns - Response Promise
         */
        fetchLayer(
            layerName: string,
            params?: any,
            onResult?: (result: any) => void,
            onError?: (error: any) => void,
        ): Promise<any>;

        /**
         * This method fetches vector tile data from the layer.
         * @param x - Tile columns
         * @param y - Tile row
         * @param z - zoom level
         * @param params - URL parameters (eg bounding box)
         * @param onResult - Callback called on a successful request with response data
         * @param onError - Callback called on an unsuccessful request with the Error object
         * @returns - Typed array with tile data
         */
        fetchLayerTile(
            layerName: string,
            x: QueryTileProvider.X,
            y: QueryTileProvider.Y,
            z: QueryTileProvider.Zoom,
            params?: any,
            onResult?: (result: any) => void,
            onError?: (error: any) => void,
        ): Promise<Uint8Array>;

        /**
         * Sets the access and refresh tokens used to authenticate all requests against the Data Lens REST API.
         * Use this method to implement custom authentication to the Data Lens REST API.
         * @param accessToken - The token used to authenticate all requests
         * @param refreshToken - The token used to fetch a new access token after the previous access token has expired.
         * When refreshToken is provided, Service will automatically update the expired accessToken.
         */
        setTokens(accessToken: string, refreshToken: string): void;

        /**
         * This method implements service.IConfigurable interface. It is called by the service.Platform instance.
         * @param appId - The appId
         * @param appCode - The appCode
         * @param useHTTPS - A flag to use HTTPS or not
         * @param useCIT - A flag to use the staging server (CIT) or not
         * @param baseUrl - The base URL for all requests to the Data Lens REST API
         */
        configure(appId: string, appCode: string, useHTTPS: boolean, useCIT: boolean, baseUrl?: service.Url): Service;
    }

    namespace Service {
        /**
         * Overrides the Service configuration
         * Normally the Service instance is configured with the service.Platform instance.
         * This configuration can be overridden by specifying these options.
         * It can be useful when the Data Lens environment is different from the HERE Platform environment.
         */
        interface Options {
            /** Subdomain of the Data Lens REST API URL */
            subDomain?: string | undefined;
            /** Pathname prefix of the Data Lens REST API endpoints */
            version?: string | undefined;
            /** The token used to authenticate all requests */
            access_token?: string | undefined;
            /**
             * The token used to fetch a new access token after the previous access token has expired.
             * When refresh_token is provided, Service will automatically update the expired access_token.
             */
            refresh_token?: string | undefined;
            /**
             * To increase the number of simultaneous requests to the Data Lens REST API, domain sharding is used.
             * This option can be used when the Data Lens environment does not support domain sharding.
             */
            domainSharding?: string[] | undefined;
            /** Defines an alternative host for the Data Lens REST API URL */
            baseUrl?: string | undefined;
        }

        /**
         * The format of Data Lens query data.
         * The Data Lens query data has a table-like structure with named columns and rows.
         */
        interface Data {
            /** Column names */
            columns: string[];
            /** Rows of data */
            rows: any[][];
        }
    }

    /**
     * Providers define interfaces for layers to access data.
     * The input data can be stored locally or loaded from the network. Data can be loaded by tiles or in one chunk.
     * This provider allows you to supply data stored locally or fetched using external tools.
     */
    class Provider extends map.provider.Provider {
        /**
         * Constructor
         * @param data - JSON object
         * @param options - Configures data accessibility parameters
         */
        constructor(data?: Service.Data, options?: map.provider.Provider.Options);

        /**
         * Updates the provider data. When data is updated, the update event is triggered so that the consuming layers are redrawn.
         * @param data - JSON object
         */
        setData(data: Service.Data): void;

        /**
         * Retrieves the provider data.
         * @returns - JSON object
         */
        getData(): Service.Data;
    }

    /**
     * Defines the source of the data for layers from a Data Lens query.
     * Providers define interfaces for layers to access data.  The input data can be stored locally or loaded from the network.
     * Data can be loaded by tiles or in one chunk. This provider loads query data with the Data Lens REST API.
     * Note that this provider must be used only for non-tiled queries.
     */
    class QueryProvider extends Provider {
        /**
         * Constructor
         * @param service - Data Lens REST API service
         * @param options - Configures source query and data accessibility parameters
         */
        constructor(data: Service.Data, options?: QueryProvider.Options);

        /**
         * Updates the query ID to be used in the next call of the Data Lens REST API.
         * Note that new data will be fetched only after the reload method is called.
         */
        setQueryId(queryId: string): void;

        /**
         * Updates the query's dynamic parameters to be used in the next call of the Data Lens REST API.
         * Note that new data will be fetched only after the reload method is called.
         * This method is normally used when updating your visualization.
         * @param queryParams - Query dynamic parameters
         */
        setQueryParams(queryParams: any | null): void;

        /**
         * Fetches new data from the Data Lens REST API.
         * When data is fetched, the update event is triggered so that the consuming layers are redrawn.
         */
        reload(): void;

        /**
         * Updates the provider data.
         * When data is updated, the update event is triggered so that the consuming layers are redrawn.
         * @param data - JSON object
         */
        setData(data: Service.Data): void;

        /**
         * Retrieves the provider data.
         * @returns - JSON object
         */
        getData(): Service.Data;
    }

    namespace QueryProvider {
        /**
         * Configures source query and data accessibility parameters for QueryProvider
         * Specifies the query credentials and dynamic parameters required for fetching query data with the Data Lens REST API. Other options from Provider.Options are available.
         */
        interface Options {
            /** The ID of the Data Lens REST API query */
            queryId: string;
            /** The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query. */
            queryParams?: any;
        }
    }

    /**
     * Providers define interfaces for layers to access data.
     * The input data can be stored locally or loaded from the network. Data can be loaded by tiles or in one chunk.
     * This provider loads tiled query data with the Data Lens REST API. Tiled queries are used to load data only for the current viewport.
     * This optimizes memory and network usage and enables progressive rendering.
     */
    class QueryTileProvider extends map.provider.RemoteTileProvider {
        /**
         * Constructor
         * @param service - Data Lens REST API service
         * @param options - Configures source query and data accessibility parameters
         */
        constructor(service: Service, options: QueryTileProvider.Options);

        /**
         * Updates the query ID to be used in the next call of the Data Lens REST API.
         * Note that new data will be fetched only after the reload method is called.
         */
        setQueryId(queryId: string): void;

        /**
         * Updates the query's dynamic parameters to be used in the next call of the Data Lens REST API.
         * Note that new data will be fetched only after the reload method is called. This method is normally used when updating your visualization.
         */
        setQueryParams(queryParams: any | null): void;

        /**
         * Updates the names of the dynamic parameters that defines tiles. This method is only needed when the query ID is updated.
         * Note that new data will be fetched only after the reload method is called.
         * @param tileParamNames - Names of the URI parameters that control the x/y/z of a tiled query
         */
        setTileParamNames(tileParamNames: QueryTileProvider.TileParamNames): void;
    }

    namespace QueryTileProvider {
        /**
         * Represents the names of the URI parameters that control the x/y/z of tiled query.
         * When defining the Data Lens query, dynamic parameters that control tiling can be arbitrarily named.
         * Names of these parameters must be specified to fetch tiles.
         */
        interface TileParamNames {
            /** Name of the dynamic parameter that defines tile column */
            x: string;
            /** Name of the dynamic parameter that defines tile row */
            y: string;
            /** Name of the dynamic parameter that defines zoom level */
            z: string;
        }

        /**
         * Configures source query and data accessibility parameters for QueryTileProvider
         * Specifies the query credentials and dynamic parameters required for fetching tiled query data with the Data Lens REST API.
         * Other options from Provider.Options are available.
         */
        interface Options {
            /** Names of the URI parameters that control the x/y/z of a tiled query */
            tileParamNames: TileParamNames;
            /** The ID for the Data Lens REST API query */
            queryId: string;
            /** The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query. */
            queryParams?: string | undefined;
        }

        /**
         * Tile X coordinate (column)
         * Coordinate in XYZ tile numbering scheme.
         */
        type X = number;

        /**
         * Tile Y coordinate (row)
         * Coordinate in XYZ tile numbering scheme.
         */
        type Y = number;

        /**
         * Zoom level
         * Coordinate in XYZ tile numbering scheme. May vary within range 1 to 20.
         */
        type Zoom = number;
    }

    /**
     * Provides pixel-wise rendering of data.
     * Layer used when you need to visualize more than 10k points. The layer requires source data to be located in pixel coordinates.
     * The rendering is implemented by drawing directly on a canvas.  The layer is often used together with a Data Lens query which groups rows by pixels.
     * This reduces the amount of data delivered to the client.
     */
    class RasterLayer extends map.layer.TileLayer {
        /**
         * Constructor
         */
        constructor();

        /**
         * Default value for dataToRows callback option.
         * It represents each row as an object where property names correspond to data column names.
         */
        static defaultDataToRows: any;

        /**
         * Force re-rendering of the layer.
         * In the case where the callbacks passed to the layer options are not pure functions, you can call this method to force re-rendering.
         */
        redraw(): void;

        /**
         * This is a default implementation of renderTile callback. This method represents each point as a black 1x1 pixel square.
         * @param points - Input data points within a tile
         * @param canvas - The target canvas
         */
        static defaultRenderTile(points: RasterLayer.TilePoint[], canvas: HTMLCanvasElement): void;
    }

    namespace RasterLayer {
        /**
         * Defines data processing and rendering options for RasterLayer.
         * The initial step of rendering is to split the tile data by rows, where each row represents a bucket.
         * By default this step is processed with RasterLayer.defaultDataToRows.
         * This behavior can be changed by defining the dataToRows callback.
         * To collect the rows for a tile including buffer, the rows must be translated to RasterLayer.TilePoint.
         * This translation must be specified with the rowToTilePoint callback. The final rendering on the tile canvas must be defined in renderTile.
         */
        interface Options {
            /** Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile. */
            dataToRows?(
                data: Service.Data,
                x: QueryTileProvider.X,
                y: QueryTileProvider.Y,
                zoom: QueryTileProvider.Zoom,
            ): Row[];
            /** Defines how the row is translated to the RasterLayer.TilePoint. This callback is called for each row that is returned from dataToRows. */
            rowToTilePoint?(row: Row, x: X, y: Y): TilePoint;
            /**
             * The buffer is a value (in pixels) that defines an extra area around each tile to capture data points from.
             * This is done to avoid drawing edges between tiles. For example, if data points represented with circles with a maximum radius of 10 pixels, then the buffer must be 10 pixels.
             */
            buffer?(zoom: QueryTileProvider.Zoom): number;
            /**
             * Defines how tile data is represented on a canvas. Input points for each tile are collected with respect to the buffer.
             * For progressive rendering this callback may be called more than once for the tile.
             */
            renderTile?(points: TilePoint[], canvas: HTMLCanvasElement, zoom: QueryTileProvider.Zoom): void;
        }

        /**
         * Defines the input data format for heat map rendering.
         * To collect data rows for each tile with respect to the buffer, each row must be represented as a point within the map tile.
         */
        interface TilePoint {
            /** Row relative to tile */
            x: number;
            /** Column relative to tile */
            y: number;
            /** Reference to source data row */
            data?: Row | undefined;
        }

        /**
         * Tile X coordinate (column)
         * Coordinate in XYZ tile numbering scheme.
         */
        type X = number;

        /**
         * Tile Y coordinate (row)
         * Coordinate in XYZ tile numbering scheme.
         */
        type Y = number;

        /**
         * Slice of data (eg Data Lens query data row) that represents a data point.
         * Each row is transformed into TilePoint and passed to renderTile callback. By default each row is an Object where property names correspond to data column names.
         * This representation can be changed with the dataToRows callback.
         */
        type Row = number;
    }

    /**
     * Provides functionality of value-based heat map with density alpha mask.
     * Layer support different types of blending, including weighted average. Also it allows to apply alpha mask calculated by density.
     * In most cases, the layer consumes data grouped by 1x1 pixels buckets. For proper averaging it requires aggregated value and count (number of rows in bucket) for each bucket.
     * Blending of buckets is implemented via kernel density estimation (KDE) with a Gaussian kernel.
     */
    class HeatmapLayer extends RasterLayer {
        /**
         * Constructor
         * @param provider - Source of tiled data
         * @param options - Configuration for data processing and rendering
         */
        constructor(provider: QueryTileProvider, options: HeatmapLayer.Options);

        /**
         * Default value for dataToRows callback option. It represents each row as an object where property names correspond to data column names.
         */
        static defaultDataToRows: (
            data: Service.Data,
            x: QueryTileProvider.X,
            y: QueryTileProvider.Y,
            zoom: QueryTileProvider.Zoom,
        ) => HeatmapLayer.Row[];

        /**
         * Set of possible values for the inputScale option
         */
        static inputScale: HeatmapLayer.InputScale;

        /**
         * Set of possible values for the aggregation option
         */
        static aggregation: HeatmapLayer.Aggregation;

        /**
         * @param zoom - zoom level
         */
        getOptionsPerZoom(zoom: number): HeatmapLayer.Options;

        /**
         * Removes listeners, and references to memory consuming objects, from this layer. Call this method when you no longer need the layer.
         */
        dispose(): void;

        /**
         * Force re-rendering of the layer. In the case where the callbacks passed to the layer options are not pure functions, you can call this method to force re-rendering.
         */
        redraw(): void;
    }

    namespace HeatmapLayer {
        /**
         * Defines data processing and rendering options for HeatmapLayer.
         * The data processing flow of HeatmapLayer is similar to RasterLayer. The initial step of rendering is to split the tile data by rows, where each row represents a bucket.
         * By default this step is processed with HeatmapLayer.defaultDataToRows. This behavior can be changed by defining the dataToRows callback.
         * To collect the rows for a tile including buffer, the rows must be translated to HeatmapLayer.TilePoint. This translation must be specified with the rowToTilePoint callback.
         * Other options define the blending options for the heat map.
         */
        interface Options {
            /** Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile. */
            dataToRows?(
                data: Service.Data,
                x: QueryTileProvider.X,
                y: QueryTileProvider.Y,
                zoom: QueryTileProvider.Zoom,
            ): Row[];
            /** Defines how the row is translated to the HeatmapLayer.TilePoint. This callback is called for each row that is returned from dataToRows. */
            rowToTilePoint(row: Row, x: X, y: Y): TilePoint;
            /**
             * Describes the bandwidth behavior in relation to current zoom level A numeric value sets it static across all levels
             * An Object with zoom, value and optional zoomIncrementFactor (1 equals doubling on every zoom increment) defines a behavior across all zoom levels
             * An Array of one or more zoom, value objects describes the behavior between the two defined levels and extrapolates the implied change outside of the defined range
             * Alternatively defines the level of smoothing as a function of the zoom level. The callback must return a value in pixels.
             * The cut-off of the Gaussian kernel is defined as 3 * bandwidth , a multiple (default 3) of bandwidth.
             */
            bandwidth?: Bandwidth | BandwidthStop | BandwidthStop[] | BandwidthCallback | undefined;
            /**
             * Defines the range for the color scale as a function of the zoom level.
             * The returned value must be an array of 2 numbers.
             */
            valueRange?(zoom: QueryTileProvider.Zoom): number[];
            /**
             * Defines the range for the density alpha mask as a function of the zoom level.
             * When defined, the density alpha mask is applied. The returned value must be an array of 2 numbers.
             */
            countRange?(zoom: QueryTileProvider.Zoom): number[];
            /**
             * Defines a color palette as a function of the normalized value.
             * You can use D3.js library scale functions with the domain [0, 1].
             */
            colorScale?(scale: number): string;
            /**
             * Defines the alpha mask value as a function of the normalized count.
             * You can use D3.js library scale functions with the domain [0, 1] and the range [0, 1].
             */
            alphaScale?(scale: number): number;
            /**
             * Specifies which type of aggregation was applied (eg. type of aggregation function for bucket in the Data Lens query).
             * Possible values are SUM or AVERAGE. If the aggregation type is AVERAGE , then an averaged heat map is rendered.
             */
            aggregation?: Aggregation | undefined;
            /**
             * Defines the scale (eg logarithmic scale) of the TilePoint value.
             * Note: if the value is not in a linear scale, then the aggregation in the source query must be defined with respect to the scale type.
             * For example, before applying the average aggregation function in a query, the value must be transformed to the linear scale. This guarantees correct linear averaging of values.
             */
            inputScale?: InputScale | undefined;
        }

        /**
         * Tile X coordinate (column)
         * Coordinate in XYZ tile numbering scheme.
         */
        type X = number;

        /**
         * Tile Y coordinate (row)
         * Coordinate in XYZ tile numbering scheme.
         */
        type Y = number;

        /**
         * Slice of data (eg Data Lens query data row) that represents a data point.
         * Each row is transformed into TilePoint and then rendered on a heat map. By default each row is an Object where property names correspond to data column names.
         * This representation can be changed with the dataToRows callback.
         */
        interface Row {
            tx?: number | undefined;
            ty?: number | undefined;
            count?: number | undefined;
        }

        /**
         * Defines a constant for the bandwidth
         * A number that sets a constant for the bandwidth across all zoom levels.
         */
        type Bandwidth = number;

        /**
         * Sets the bandwidth for a given zoom level and uses this to calculate the increment or decrement of the bandwidth at other zoom levels
         * This object defines the behavior of the bandwidth value across all zoom levels, initialized by a reference zoom level and its value at that level.
         * The default behavior with zoomIncrementFactor = 1 doubles the bandwidth with every increasing zoom level and halves it on every decrease in zoom level.
         * For example, a bandwidth of 10@zoom1 turns to 20@zoom2 and 5@zoom0. A zoomIncrementFactor of 0 effectively equals the bandwidth number, ignoring the provided zoom level.
         * A zoomIncrementFactor of 0.5 mean a bandwidth increase of 50% compared to a factor of 1. So a bandwidth of 10@zoom1 computes to 15@zoom2.
         */
        interface BandwidthStop {
            zoom: number;
            value: number;
            zoomIncrementFactor?: number | undefined;
        }

        /**
         * TODO: this is missing in the documentation: https://developer.here.com/visualization/documentation/datalens/h-datalens-heatmaplayer-options.html
         */
        type BandwidthCallback = () => void;

        /**
         * Defines the input data format for heat map rendering.
         * For heat map rendering, each row of data must be represented as a point within the map tile.
         */
        interface TilePoint {
            /** Row relative to tile */
            x: number;
            /** Column relative to tile */
            y: number;
            /** Value at the point (eg aggregated bucket value) */
            value: number;
            /** Number of contributors to the value at the point (eg number of rows in a bucket) */
            count: number;
            /** Reference to source data row */
            data?: Row | undefined;
        }

        /**
         * Set of possible values for the aggregation option.
         * If the heat map input data is buckets, then different types of aggregation can be applied to the rows in a bucket.
         * The aggregation type is required for proper blending mode of the heat map. For the AVERAGE aggregation type, an averaged heat map is rendered.
         */
        enum Aggregation {
            /** Specifies that the sum aggregation was applied to the bucket value */
            SUM,
            /** Specifies that the average aggregation was applied to the bucket value */
            AVERAGE,
        }

        /**
         * Set of possible values for the inputScale option.
         * The input scale is required for proper heat map blending. If the input scale is not linear, then the TilePoint.value is converted to linear scale before calculating the sum or average.
         */
        enum InputScale {
            /** Decibel (dB) scale */
            DB,
            /** Linear scale */
            LINEAR,
            /** Logarithmic scale */
            LOG,
        }
    }

    /**
     * Presents data as points or spatial map objects with data-driven styles and client-side clustering.
     * Applicable for drawing interactive map objects like markers, polygons, circles and other instances of map.Object. Source of data can be either tiled or not tiled.
     * Styles for objects can be parametrized with data rows and zoom level. Allows to create data-driven icons for markers like donuts or bars.
     * Also enables clustering and data domains for visualizing up to 100k points or more.
     */
    class ObjectLayer extends map.layer.ObjectLayer {
        /**
         * Constructor
         * @param provider - Data source (tiled or not)
         * @param options - Defines data processing, clustering and data-driven styling
         */
        constructor(
            provider: map.provider.RemoteTileProvider | Provider | QueryProvider | QueryTileProvider,
            options: ObjectLayer.Options,
        );

        /**
         * Default value for dataToRows callback option. It represents each row as an object where property names correspond to data column names.
         */
        static defaultDataToRows(data: Service.Data): ObjectLayer.Row[];

        /**
         * A factory method for data-driven icons. The method allows you to build an icon from SVG markup or JsonML object. Provides caching of icons with the same markup.
         * @param svg - SVG presented as markup or JsonML Array
         * @param options - Icon options (eg size and anchor). Note that the default anchor is in the middle.
         * @param options.size - When the icon is a square, you can define the size as a number in pixels
         * @returns - Icon which can be used for marker or cluster
         */
        static createIcon(svg: string | any[], options?: map.Icon.Options): map.Icon;

        /**
         * Returns cache of icons created with the createIcon method. Can be used to clean the icon cache.
         * @return - Icon cache
         */
        static getIconCache(): util.Cache;

        /**
         * Force re-rendering of the layer. In the case where the callbacks passed to the layer options are not pure functions, you can call this method to force re-rendering.
         */
        redraw(): void;

        /**
         * Recalculates the style and applies it to the map object based on the new StyleState
         * @param object - Map object
         * @param state - New state
         */
        updateObjectStyle(any: map.Object, state: ObjectLayer.StyleState): void;
    }

    namespace ObjectLayer {
        /**
         * Defines data processing and data-driven styling for ObjectLayer
         * The initial step of rendering is to split the tile data by rows, where each row represents a bucket.
         * By default this step is processed with ObjectLayer.defaultDataToRows. This behavior can be changed by defining the dataToRows callback.
         * In the next step each row must be presented as a map object with the rowToMapObject callback. Data-driven styling can be provided with the rowToStyle callback.
         */
        interface Options {
            /** Defines how the input data is split by rows. You can specify this callback to define client-side aggregation and filtering. */
            dataToRows?(data: Service.Data): Row[];
            /** Defines how each row is presented on the map (eg marker, polygon) */
            rowToMapObject(row: Row, z: QueryTileProvider.Zoom): map.Object;
            /**
             * Defines map object style and icon according to data row and zoom level.
             * Also it can define different styles depending on the StyleState (eg hovered, selected).
             */
            rowToStyle?(row: Row, z: QueryTileProvider.Zoom, styleState: StyleState): ObjectStyleOptions;
            /** Defines quantization of data for improving data-driven styling performance */
            dataDomains?: DataDomains | undefined;
            /** When present, client-side clustering is applied */
            clustering?: Clustering | undefined;
        }

        /**
         * Defines client-side clustering in the ObjectLayer.
         * When the clustering option is provided, rows returned from dataToRows go to the clustering.rowToDataPoint callback to be transformed to data points.
         * Then, the data points are clustered according to clustering.options. Clustering produces clusters and noise points (data points that are not clustered).
         * Clusters and noise points must be presented as map objects with the rowToMapObject callback and can be styled with the rowToStyle callback.
         */
        interface Clustering {
            /** Defines data points from rows */
            rowToDataPoint(row: Row): clustering.DataPoint;
            /** Defines clustering options as a function of the zoom level */
            options(zoom: QueryTileProvider.Zoom): clustering.Provider.ClusteringOptions;
        }

        /**
         * Slice of data (eg Data Lens query data row) that represents a data point.
         * Each row is translated to map objects with the rowToMapObject callback. By default each row is an Object where property names correspond to data column names.
         * This representation can be changed with the dataToRows callback.
         */
        interface Row {
            getPosition(): geo.Point;
            isCluster(): boolean;
            lat: number;
            lng: number;
        }

        /**
         * User defined modification of a data-driven style
         * StyleState appears as a parameter in the rowToStyle callback. By default it is 'DEFAULT_STATE'. To change StyleState, use the ObjectLayer.updateObjectStyle method.
         */
        type StyleState = any;

        /**
         * Output from the rowToStyle callback.
         * Defines the styles or the icon that is applied to the map object.
         */
        interface ObjectStyleOptions {
            /** Marker icon */
            icon: map.Icon;
            /** Spatial style */
            style?: map.SpatialStyle.Options | undefined;
            /** Style of arrows to render along a polyline */
            arrows?: map.ArrowStyle.Options | undefined;
            /** The z-index value of the map object, default is 0 */
            zIndex?: number | undefined;
        }

        /**
         * Input data quantization domain, used to optimize styling performance.
         * The option must have properties corresponding to the properties of ObjectLayer.Row. Values must be represented as an Array of Numbers that defines the quantization domain.
         * When provided, the input data will be quantized, and rowToStyle will be called only for quantized values.
         */
        type DataDomains = any;
    }

    /**
     * Defines how to load data from a raw data file
     * This provider defines the interface for loading data, such as geometries or coordinates, from a local or remote data file in GeoJSON or CSV format
     */
    class RawDataProvider extends map.provider.RemoteTileProvider {
        /**
         * Constructor
         * @param options - Configures options
         */
        constructor(options: RawDataProvider.Options);

        /**
         * Updates the data url. Note that new data will be fetched only after the reload method is called.
         */
        setDataUrl(dataUrl: string): void;
    }

    namespace RawDataProvider {
        interface Options {
            /** The data url to fetch */
            dataUrl?: string | undefined;
            /** Defines how the input data is mapped to an array of GeoJSON features */
            dataToFeatures?(obj: any): Feature[];
            /** Defines how GeoJSON features on a tile should be mapped to data rows, which are inputs to layers such as ObjectLayer and HeatmapLayer */
            featuresToRows?(
                features: Feature[],
                x: QueryTileProvider.X,
                y: QueryTileProvider.Y,
                z: QueryTileProvider.Zoom,
                tileSize: TileSize,
                helpers: Helpers,
            ): ObjectLayer.Row[];
        }

        /**
         * A GeoJSON feature
         * A GeoJSON feature object which conforms to the standard GeoJSON spec
         */
        type Feature = any;

        /**
         * Tile size
         * The tile size in pixels.
         */
        type TileSize = any;

        /**
         * A helper class used in the worker thread
         * This helper class provides convenience functions you can use in the worker thread
         */
        interface Helpers {
            /** Translates geographical coordinates (latitude, longitude) to world pixel coordinates. */
            latLngToPixel?(
                latitude: Latitude,
                longitude: Longitude,
                z: QueryTileProvider.Zoom,
                tileSize: TileSize,
            ): PixelCoordinates;
            /** Translates world pixel coordinates to geographical coordinates (latitude, longitude). */
            pixelToLatLng?(x: PX, y: PY, z: QueryTileProvider.Zoom, tileSize: TileSize): GeoCoordinates;
            /** Takes CSV data as input, parses it, and return the parsed result. */
            parseCSV?(obj: any): any[];
        }

        /**
         * Geographic coordinates
         * A geographic coordinates pair [lat, lng]
         */
        type GeoCoordinates = [number, number];

        /**
         * Latitude coordinate
         * The latitude in the geographic coordinates pair
         */
        type Latitude = number;

        /**
         * Longitude coordinate
         * The longitude in the geographic coordinates pair
         */
        type Longitude = number;

        /**
         * Pixel coordinates
         * Pixel coordinates [px, py] pair
         */
        type PixelCoordinates = [number, number];

        /**
         * Pixel coordinate in the x direction
         * The x coordinate of the pixel coordinates pair [px, py]
         */
        type PX = number;

        /**
         * Pixel coordinate in the y direction
         * The y coordinate of the pixel coordinates pair [px, py]
         */
        type PY = number;
    }

    /**
     * Renders vector tiles using data-driven styles
     * This layer binds the spatial data and user data, all provided by the Data Lens REST API. The layer renders geometry features using data-driven styles.
     */
    class SpatialLayer extends map.layer.TileLayer {
        /**
         * Constructor
         * @param dataProvider - Source of tiled data (pass in null if data come from feature properties)
         * @param spatialProvider - Source of geometry data
         * @param options - Configuration for data processing and rendering
         */
        constructor(dataProvider: Provider, spatialProvider: SpatialTileProvider, options: SpatialLayer.Options);

        static DEFAULT_STATE: any;
        static Spatial: any;

        /**
         * Default value for dataToRows callback option. It represents each row as an object where property names correspond to data column names.
         */
        static defaultDataToRows: any;

        /**
         * Forces re-rendering of the layer. When the callbacks passed to the layer options are not pure functions, you can call this method to force re-rendering.
         */
        redraw(): void;

        /**
         * This method changes the state of a map object; for example, style on mouse event.
         */
        updateSpatialStyle(spatial: map.Object, state: SpatialLayer.StyleState): void;
    }

    namespace SpatialLayer {
        /**
         * Defines data processing and rendering options for SpatialLayer
         * The initial step of rendering is to split the tile data by rows, where each row represents a bucket.
         * By default this step is processed with SpatialLayer.defaultDataToRows. This behavior can be changed by defining the dataToRows callback.
         */
        interface Options {
            /** Defines how the input tile data is split by rows. You can specify this callback to define client-side aggregation and filtering. This callback is called for each tile. */
            dataToRows?(
                data: Service.Data,
                x: QueryTileProvider.X,
                y: QueryTileProvider.Y,
                z: QueryTileProvider.Zoom,
            ): Row[];
            /** Defines how to get the spatial ID from a data row. This callback is called for each row that is returned from dataToRows. */
            rowToSpatialId(row: Row): string;
            /** Defines how to get the spatial ID from a geometry feature. This callback is called for each geometry feature in the vector tile. */
            featureToSpatialId(feature: Feature): string;
            /** Defines how the row is translated to map object style. This callback is called for each row that is returned from dataToRows. */
            rowToStyle(row: Row, z: QueryTileProvider.Zoom, styleState: StyleState): any;
            /** Defines the default map object style. */
            defaultStyle(z: QueryTileProvider.Zoom, styleState: StyleState): any;
            /** Defines how to transform the features. */
            transformFeature: transformFeature;
        }

        /**
         * Defines modification of a data-driven style
         * StyleState appears as a parameter in the rowToStyle callback. By default it is 'DEFAULT_STATE'. To change StyleState, use the SpatialLayer.updateSpatialStyle method.
         */
        type StyleState = any;

        /**
         * Defines a slice of data (eg Data Lens query data row) that represents a data point
         * By default each row is an object where property names correspond to data column names. This representation can be changed with the dataToRows callback.
         */
        type Row = any;

        /**
         * Defines a geometry in the vector tile
         * Each geometry is described by various properties, including a unique identifier which must be used to map the geometry to user data.
         */
        type Feature = any;

        /**
         * TODO: missing in documentation: https://developer.here.com/visualization/documentation/datalens/h-datalens-spatiallayer-options.html
         */
        type transformFeature = any;
    }

    /**
     * Specifies how to access layer data (shapes, geometries) using the Data Lens REST API.
     * This provider defines the interface for accessing shape layers via the Data Lens REST API. The input data is provided as vector tiles in the MapBox format (Protobuf).
     * Data is loaded by tiles.
     */
    class SpatialTileProvider extends map.provider.RemoteTileProvider {
        /**
         * Constructor
         * @param service - Data Lens REST API service
         * @param options - Configures layer name
         */
        constructor(service: Service, options: SpatialTileProvider.Options);

        static VectorTile: any;

        /**
         * Updates the layer name to be used in the next call of the Data Lens REST API. Note that new data will be fetched only after the reload method is called.
         */
        setLayerName(layerName: string): void;

        /**
         * Updates the query's dynamic parameters to be used in the next call of the Data Lens REST API. Note that new data will be fetched only after the reload method is called.
         * This method is normally used when updating your visualization.
         */
        setQueryParams(queryParams: any | null): void;
    }

    namespace SpatialTileProvider {
        /**
         * Defines layer name and data accessibility parameters for SpatialTileProvider
         * This defines the layer name and dynamic parameters required for fetching tiled geometry data with the Data Lens REST API. Other options from Provider.Options are available.
         */
        interface Options {
            /** The name of the layer to fetch with the Data Lens REST API query */
            layerName: string;
            /** The query's dynamic parameters. The dynamic parameters can be used to filter data provided by the query. */
            queryParams?: any;
        }
    }
}
