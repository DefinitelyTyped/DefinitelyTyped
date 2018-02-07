/**
 * This module wraps the Query and GeoData REST API’s in the Bing Spatial Dara Services and expose them as an easy to use JavaScript library.
 * @requires The Microsoft.Maps.SpatialDataService module.
 */
declare module Microsoft.Maps.SpatialDataService {

    //////////////////////////////////////////////
    /// GeoData API
    //////////////////////////////////////////////

    /** Represents the options for requests boundary data from the GeoData API in the Bing Spatial Data Services. */
    export interface IGetBoundaryRequestOptions {
        /**
        * The level of detail for the boundary polygons returned. An integer between 0 and 3, where 0 specifies the coarsest level of boundary detail and 3
        * specifies the best. Default: 0
        */
        lod?: number;

        /**
        * The entity type to return. Default: CountryRegion
        * Supported entity types:
        * AdminDivision1, AdminDivision2, CountryRegion, eighborhood, PopulatedPlace, Postcode1, Postcode2, Postcode3, Postcode4
        * Note: Not all entity types are available in all areas.
        */
        entityType?: string;

        /**
        * Specifies the preferred language to use for any metadata text about the entity or polygons. Defaults to the culture used by the map control, which
        * usually automatically detected based on user's browser settings. Setting this property will override the default value.
        */
        culture?: string;

        /**
        * Specifies whether the response should include all of the boundary polygons for the requested entity or just return a single polygon that represents
        * the main outline of the entity. Default: false
        */
        getAllPolygons?: boolean;

        /**
        * Specifies whether the response should include metadata about the entity, such as AreaSqKm and others. Default: false
        */
        getEntityMetadata?: boolean;

        /**
        * Specifies the user’s home country or region.Defaults to the region setting of the user who loads the map.
        * Warning: Setting this property will override the default value, which is the region the user is actually in, and will allow the user to see boundaries
        * which may not align with the views of their region.This could result in geopolitically sensitive borders being returned.
        */
        userRegion?: string;
    }

    /** Represents the primitive object for a boundary returned by the GeoData API. */
    export interface IGeoDataPrimitive {
        /** A unique ID associated with this polygon primitive. */
        PrimitiveID: string;

        /**
        * A comma-delimited sequence starting with the version number of the polygon set followed by a list of compressed polygon
         * "rings" (closed paths represented by sequences of latitude and-longitude points).
        */
        Shape: string;

        /** The number of vertex points used to define the polygon. */
        NumPoints: string;

        /**
        * An ID identifying the data provider that supplied the data. This ID number will reference one of the sources listed in the
        * array of CopyrightSources in the Copyright property of the GeoDataResultSet object.
        */
        SourceID: string;
    }

    /** Represents the copyright source object for a boundary returned by the GeoData API. */
    export interface ICopyrightSource {
        /** The copyright string from the source. */
        Copyright: string;

        /** An ID identifying the data provider that supplied the data. */
        SourceID: string;

        /** The name of the data provider represented by this Source element. */
        SourceName: string;
    }

    /** Represents the copyright object for a boundary returned by the GeoData API. */
    export interface ICopyright {
        /** The copyright URL for the GeoData service. */
        CopyrightURL: string;

        /** A collection of CopyrightSource objects that give information about the sources of the polygon data that is returned. */
        Sources: ICopyrightSource[];
    }

    /** Represents the name object for a boundary returned by the GeoData API. */
    export interface IName {
        /** The name of boundary. Example: "United States" */
        EntityName: string;

        /** The culture of the region. */
        Culture: string;

        /** An ID identifying the data provider that supplied the data. */
        SourceID: string;
    }

    /** Represents the metadata object for a boundary returned by the GeoData API. Not all properties will be returned for all results. */
    export interface IMetadata {
        /** The approximate total surface area (in square kilometers) covered by all the polygons that comprise this entity. */
        AreaSqKm: string;

        /**
        * An area on the Earth that provides the best map view for this entity. This area is defined as a bounding box in the format of a
        * “MULTIPOINT ((WestLongitude SouthLatitude), (EastLongitude NorthLatitude))”.
        */
        BestMapViewBox: string;

        /** The culture associated with this entity. Example: en */
        OfficialCulture: string;

        /** The approximate population within this entity. Example: PopClass20000to99999 */
        PopulationClass: string;

        /** The regional culture associated with this entity. */
        RegionalCulture: string;
    }

    /** Represents a single result object returned by the GeoData API. */
    export interface IGeoDataResult {
        /** Copyright information for the returned boundary data. */
        Copyright: ICopyright;

        /** A unique ID number associated with this entity. */
        EntityID: string;

        /**
        * A collection of metadata information associated with the entity. The getEntityMetadata option of the request must be set
        * to true. Note, not all boundaries will return this metadata.
        */
        EntityMetadata: IMetadata;

        /** Information about the name of the boundary location. */
        Name: IName;

        /** A Polygon object that has been generated from the data in the Primitives property. */
        Polygons: Polygon[];

        /** An array of objects that contain the polygon information for the boundary. */
        Primitives: IGeoDataPrimitive[];
    }

    /** Represents the set of results returned by the GeoData API. */
    export interface IGeoDataResultSet {
        /** Copyright information for the GeoData API. */
        Copyright: string;

        /** The location provided in the query that generated this result. */
        location: string |  Location;

        /** Results of the boundary data. */
        results: IGeoDataResult[];
    }

    /**
     * This is a static class that provides the ability to request polygons that describe the boundaries of a geographic entities, such as an AdminDivision1
     * (such as a state or province) or a Postcode1 (such as a zip code) that contain a given point (latitude and longitude) or address. This uses the GeoData
     * API in the Bing Spatial Data Services.
     * @requires The Microsoft.Maps.SpatialDataService module.
     */
    export module GeoDataAPIManager {
        /**
         * Gets a boundary for the specified request. If the specified location value is a string, it will be geocoded and the coordinates of the result will
         * be used to find a boundary of the specified entityType that intersects with this coordinate.
         * @requires The Microsoft.Maps.SpatialDataService module.
         * @param locations The locations to retrieve boundaries for. If the specified location value is a string, it will be geocoded and the coordinates of
         * the result will be used to find a boundary of the specified entityType that intersects with this coordinate.
         * @param request The request options for retrieving a boundary.
         * @param credentials A bing maps key or a map instance which can be used to provide credentials to access the data source. Note that the map will need
         * to be loaded with a bing maps key that has access to the data source.
         * @param callback A callback function to return the results to. If an array of locations are specified the callback function will be triggered for each location in the array.
         */
        export function getBoundary(locations: string | Location | (string | Location)[], request: IGetBoundaryRequestOptions, credentials: string | Map, callback: (results: IGeoDataResultSet) => void): void;
    }

    //////////////////////////////////////////////
    /// Query API
    //////////////////////////////////////////////

    /**
    * An enumeration that defines how to compare the filters value against the corresponding property value.
    * @requires The Microsoft.Maps.SpatialDataService module.
    */
    export enum FilterCompareOperator {
        /** Determines if a string value ends with a specified string value. */
        endsWith,

        /** Determines if two values are equal. */
        equals,

        /** Determines if a first value is greater than a second value. */
        greaterThan,

        /** Determines if a first value is greater than or equal to a second value. */
        greaterThanOrEqual,

        /** Determines if a value is within an array. */
        isIn,

        /** Determines if a first value is less than a second value. */
        lessThan,

        /**  Determines if a first value is less than or equal a second value. */
        lessThanOrEqual,

        /** Determines if a string value does not end with a specified string value. */
        notEndsWith,

        /** Determines if two values are not equal. */
        notEquals,

        /** Determines if a string value does not start with a specified string value. */
        notStartsWith,

        /** Determines if a string value starts with a specified string value. */
        startsWith
    }

    /**
    * An enumeration that defines how two or more filters are linked together.
    * @requires The Microsoft.Maps.SpatialDataService module.
    */
    export enum FilterLogicalOperator {
        /** Connects two or more filters that both must be true. */
        and,

        /** Connects two or more filters where one of them must be true. */
        or
    }

    /**
    * A Fitler object that defines the logic behind a filter expression that can be executed against a JSON object or generate
    * a filter string that can be used with the Bing Spatial Data Services.
    */
    export interface IFilter {
        /**
        * Executes the filter logic against a JSON object and returns a boolean indicating if the object meets the requirements of the Filter.
        * @returns A boolean indicating if the specified object meets the requirements of the Filter.
        */
        execute(object: any): boolean;

        /**
        * Converts the filter logic into a string format that is compatible with the Bing Spatial Data Services.
        * @returns A filter string that is formatted such that it is compatible with the Bing Spatial Data Services.
        */
        toString(): string;
    }

    /**
     * The Fitler class defines the logic behind a filter expression that can be executed against a JSON object or generate
     * a filter string that can be used with the Bing Spatial Data Services.
     * @requires The Microsoft.Maps.SpatialDataService module.
     */
    export class Filter implements IFilter {
        /**
         * @constructor
         * @requires The Microsoft.Maps.SpatialDataService module.
         * @param propertyName The name of the property in the object to test against. Can also provide child properties i.e. 'root.child'.
         * @param operator The operator to use when comparing the specified property to value to the provided value.
         * @param value A value to compare against.
         */
        constructor(propertyName: string, operator: string | FilterCompareOperator, value: any);

        /**
        * Executes the filter logic against a JSON object and returns a boolean indicating if the object meets the requirements of the Filter.
        * @returns A boolean indicating if the specified object meets the requirements of the Filter.
        */
        public execute(object: any): boolean;

        /**
        * Converts the filter logic into a string format that is compatible with the Bing Spatial Data Services.
        * @returns A filter string that is formatted such that it is compatible with the Bing Spatial Data Services.
        */
        public toString(): string;
    }

    /**
     * A class that groups two or more logical filters or filter groups together. It can be executed against a JSON or generate
     * a filter string that can be used with the Bing Spatial Data Services.
     * @requires The Microsoft.Maps.SpatialDataService module.
     */
    export class FilterGroup implements IFilter {
        /**
        * @constructor
        * @requires The Microsoft.Maps.SpatialDataService module.
        * @param filters An array consisting of Filter or FilterGroup objects to combine.
        * @param operator The logical operator for combining the filters together.
        * @param not A boolean is the logical inverse should of the filter should be used.
        */
        constructor(filters: IFilter[], operator: FilterLogicalOperator, not?: boolean)

        /**
        * Executes the filter logic against a JSON object and returns a boolean indicating if the object meets the requirements of the Filter.
        * @returns A boolean indicating if the specified object meets the requirements of the Filter.
        */
        public execute(object: any): boolean;

        /**
        * Converts the filter logic into a string format that is compatible with the Bing Spatial Data Services.
        * @returns A filter string that is formatted such that it is compatible with the Bing Spatial Data Services.
        */
        public toString(): string;
    }

    /** Options for find near route query API. */
    export interface ISpatialFilterOptions {
        /**
         * One of the following values:
         * • nearby – Searches in a radius around a location.
         * • nearRoute – Searches for results that are within 1 mile of a route.
         * • intersects – Searches for results that intersect with the specified geometry.
         * Note: Note that the NavteqNA and NavteqEU data sources only support nearby queries.
         */
        spatialFilterType: string;

        /** Location at which the filter should be applied (only for nearby filter). */
        location?: string | Location;

        /**
         * Radius to use when performing a nearby search. The distance in kilometers and must be between 0.16 and 1000 kilometers
         * (only for nearby filter).
         */
        radius?: number;

        /** Start location of the route (only for nearroute filter). */
        start?: string | Location;

        /** End location of the route (only for nearroute filter). */
        end?: string | Location;

        /** Intersection object. Can be a well known text string or a LocationRect object (only for intersects filter). */
        intersects?: string | LocationRect | IPrimitive;
    }

    /** Options for find near route query API. */
    export interface IFindNearRouteOptions extends ISpatialFilterOptions {
        /**
         * One of the following values:
         *  • Driving [default]
         *  • Walking
         */
        travelMode?: string;

        /**
         * An integer value between 0 and 359 that represents degrees from north
         * where north is 0 degrees and the heading is specified clockwise from north.
         * For example, setting the heading of 270 degrees creates a route that initially heads west
         */
        heading?: number;

        /**
         * An integer distance specified in meters.
         * Use this parameter to make sure that the moving vehicle has enough distance
         * to make the first turn
         */
        distanceBeforeFirstTurn?: number;

        /**
         * A list of values that limit the use of highways and toll roads in the route.
         * Use one of the following values:
         * • highways - Avoids the use of highways in the route.
         * • tolls - Avoids the use of toll roads in the route.
         * • minimizeHighways - Minimizes (tries to avoid) the use of highways in the route.
         * • minimizeTolls - Minimizes (tries to avoid) the use of toll roads in the route.
         */
        avoid?: string[];

        /**
         * One of the following values:
         * • distance - The route is calculated to minimize the distance.Traffic information is not used.
         * • time[default] - The route is calculated to minimize the time.Traffic information is not used.
         * • timeWithTraffic - The route is calculated to minimize the time and uses current traffic information.
         */
        optimize?: string;
    }

    /** Set of options that can be specified for query APIs. */
    export interface IQueryAPIOptions {
        /** A queryurl containing the access id, data source name and the entity type name. */
        queryUrl: string;

        /** Specifies a conditional expression for a list of properties and values. */
        filter?: IFilter;

        /** Specifies whether or not to return a count of the results in the response. Default: false */
        inlineCount?: boolean;

        /** Specifies to query the staged version of the data source instead of the published version. Default: false */
        isStaging?: boolean;

        /**
         * Specifies one or more properties to use to sort the results of a query.
         * You can specify up to three (3) properties. Results are sorted in ascending order.
         * Note: You cannot use the latitude and longitude properties to sort results. You can use the elevation property.
         */
        orderBy?: string[];

        /**
         * Specifies the data source properties to return in the response. If the $select query option is not specified or
         * if it is set to "" ($select=), all data source properties are returned. Default: "*,_distance"
         */
        select?: string[];

        /** Specifies to not return a specified number of query results. */
        skip?: number;

        /** Spatial filter options to apply. */
        spatialFilter?: ISpatialFilterOptions | IFindNearRouteOptions;

        /** Specifies the maximum number of results to return in the query response. Default: 25 */
        top?: number;
    }

    /**
     * This is a static class that provides that ability to query data sources that are hosted by the Bing Spatial Data Services using the Query API.
     * @requires The Microsoft.Maps.SpatialDataService module.
     */
    export module QueryAPIManager {
        /**
         * Perform a search
         * @requires The Microsoft.Maps.SpatialDataService module.
         * @param queryOptions - Options for the query
         * @param credentials - Credentials for the query
         * @param callback - The function to call once the results are retrieved
         * @param styles - (Optional) Styles of the data that needs to be rendered on map
         */
        export function search(queryOptions: IQueryAPIOptions,
            credentials: string | Map,
            callback: (data: IPrimitive[], inlineCount?: number) => void,
            styles?: IStylesOptions): void;
    }
}