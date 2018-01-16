declare module Microsoft.Maps.Directions {
    /////////////////////////////////////
    /// Enumerations
    ////////////////////////////////////

    /** Distance units for calculating the directions in. */
    export enum DistanceUnit {

        /** A distance in Kilometers. */
        km,

        /** A distance in Miles. */
        miles
    }

    /** Defines the type of route to calculate. */
    export enum RouteMode {
        /** Driving directions are calculated. */
        driving,

        /** Transit directions are calculated. */
        transit,

        /** Walking directions are calculated. */
        walking
    }

    /** Defines features to avoid when calculating the route. */
    export enum RouteAvoidance {
        /** Calculate the best route using any travel option available. */
        none = 0,

        /** Reduce the use of limited access highways when calculating the route. */
        minimizeHighways = 1,

        /** Reduce the use of roads with tolls when calculating the route. */
        minimizeToll = 2,

        /** Avoid using limited access highways when calculating the route. */
        avoidHighways = 4,

        /** Avoid using roads with tolls when calculating the route. */
        avoidToll = 8,

        /** Avoid using express trains when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp. */
        avoidExpressTrain = 16,

        /** Avoid using airlines when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp. */
        avoidAirline = 32,

        /** Avoid using bullet trains when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp. */
        avoidBulletTrain = 64
    }

    /** Response codes for a route calculation request. */
    export enum RouteResponseCode {
        /** The route was successfully calculated. */
        success = 0,

        /** An unknown error has occurred. */
        unknownError = 1,

        /** A nearby road cannot be found for one or more of the route waypoints. */
        cannotFindNearbyRoad = 2,

        /**
        * The distance between two route waypoints, or the total length of the route exceeds the limit of the route mode.
        * Modify the waypoint locations so that they are closer together.
        */
        tooFar = 3,

        /**
        * A route cannot be calculated for the specified waypoints. For example, this code is returned when a route between
        * “Seattle, WA” and “Honolulu, HI” is requested.
        */
        noSolution = 4,

        /** There is no route data for the specified waypoints. */
        dataSourceNotFound = 5,

        /** There are no transit options available for the specified time. */
        noAvailableTransitTrip = 7,

        /** The transit stops are so close that walking is always a better option. */
        transitStopsTooClose = 8,

        /** The transit stops are so close that walking is a better option. */
        walkingBestAlternative = 9,

        /**
        * There is no transit data available for the route or for one or more of the specified waypoints,
        * or the waypoints are in different transit areas that do not overlap.
        */
        outOfTransitBounds = 10,

        /** The directions calculation request has timed out. */
        timeOut = 11,

        /**
        * One or more waypoints need to be disambiguated. This error does not occur if the
        * autoDisplayDisambiguation directions render option is set to true.
        */
        waypointDisambiguation = 12,

        /** One or more waypoints do not have an address or location specified. */
        hasEmptyWaypoint = 13,

        /** The maximum number of waypoints, which is 25, has been exceeded. */
        exceedMaxWaypointLimit = 14,

        /** At least two waypoints are required to calculate a route. */
        atleastTwoWaypointRequired = 15,

        /** The first or last waypoint is a via point, which is not allowed. */
        firstOrLastStoppointIsVia = 16,

        /** The search service failed to return results. */
        searchServiceFailed = 17,

        /** The credentials passed to the Directions module are invalid. */
        invalidCredentials = 18
    }

    /** Defines optimization options for calculating directions. */
    export enum RouteOptimization {
        /** Calculate a route the shortest time. */
        shortestTime = 0,

        /** Calculate a route with the shortest distance. */
        shortestDistance = 1,

        /** The route is calculated to minimize the time and uses current traffic information. */
        timeWithTraffic = 2,

        /** The route is calculated to minimize the time and avoid road closures. Traffic information is not used in the calculation. */
        timeAvoidClosure = 3,

        /** Minimize the cost when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.*/
        minimizeMoney = 4,

        /** Minimize transit transfers when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.*/
        minimizeTransfers = 5,

        /** Minimize the amount of walking when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.*/
        minimizeWalking = 6
    }

    /** An enumeration that specifies the releance of a dateTime when calculating a route. */
    export enum TimeType {
        /** The dateTime parameter contains the desired arrival time for a transit request. */
        arrival,

        /** The dateTime parameter contains the desired departure time for a transit request. */
        departure,

        /** The dateTime parameter should be ignored and the first available transit taken. */
        firstAvailable,

        /** The dateTime parameter contains the latest departure time available for a transit request.  */
        lastAvailable
    }

    /////////////////////////////////////
    /// Interfaces
    ////////////////////////////////////

    /** Contains the arguments for directions events. */
    export interface IDirectionsEventArgs {
        /** The calculated route (or routes, if the route mode is transit). */
        route: IRoute[];

        /** The route summary (or summaries) of the route(s) defined in the route property. */
        routeSummary: IRouteSummary[];
    }

    /** Contains arguments for directions error events. */
    export interface IDirectionsErrorEventArgs {
        /** The code which identifies the error that occurred. */
        responseCode: RouteResponseCode;

        /** The error message. */
        message: string;
    }

    /** Represents one direction in a set of route directions. */
    export interface IDirectionsStep {
        /** The child direction items for this directions step. */
        childItineraryItems: IDirectionsStep[];

        /** The location of the start of the direction. */
        coordinate: Location;

        /** The total distance of the step in the unit specified in the distanceUnit property of the DirectionsRequestOptions. */
        distance: string;

        /** The total time, in seconds, of the direction step. */
        durationInSeconds: number;

        /** The HTML formatted route instruction associated with the step. */
        formattedText: string;

        /** A boolean indicating whether the maneuver image is a road shield image. */
        isImageRoadShield: boolean;

        /** The name of the maneuver image. */
        maneuverImageName: string;

        /** An array of strings, where each string is a hint to help determine when to move to the next direction step. Not all direction steps have hints. */
        postIntersectionHints: string[];

        /** An array of strings, where each string is a hint to help determine when you have arrived at this direction step. Not all direction steps have hints. */
        preIntersectionHints: string[];

        /** The name of the transit stop where this step originates. */
        startStopName: string;

        /** The transit line associated with this step. */
        transitLine: ITransitLine;

        /** The URL of the image to use for transit direction steps. */
        transitStepIcon: string;

        /** The ID of the transit stop. */
        transitStopId: string;

        /** The name of the transit line end. */
        transitTerminus: string;
    }

    /** Represents a route. */
    export interface IRoute {
        /** The legs of the route. Each route leg represents the route between two waypoints. */
        routeLegs: IRouteLeg[];

        /** An array of locations that makes up the path of the route. */
        routePath: Location[];
    }

    /** Represents a leg of a route. A route leg is the part of the route between two stop waypoints. */
    export interface IRouteLeg {
        /** The end time of the route leg. This property only applies when the routeMode of the DirectionsRequestOptions is set to transit. */
        endTime: Date;

        /** The location of the last waypoint of this leg. */
        endWaypointLocation: Location;

        /** The directions steps associated with this route leg. */
        itineraryItems: IDirectionsStep[];

        /** The index of the route to which this route leg belongs. */
        originalRouteIndex: number;

        /** The start time of the route leg. This property only applies when the routeMode of the DirectionsRequestOptions is set to transit. */
        startTime: Date;

        /** The location of the first waypoint of this route leg. */
        startWaypointLocation: Location;

        /** The sub legs of this route leg. A sub leg of a route is the part of the route between a stop point and a via point or between two via points.*/
        subLegs: IRouteSubLeg[];

        /** The summary which describes this route leg. */
        summary: IRouteSummary;
    }

    /** Represents a route sub leg. A route sub leg is the part of the route between a stop point and a via point or between two via points. */
    export interface IRouteSubLeg {
        /** The location of the last waypoint of the sub leg. */
        actualEnd: Location;

        /** The location of the first waypoint of the sub leg. */
        actualStart: Location;

        /** The description of the last waypoint of the sub leg. */
        endDescription: string;

        /** The description of the first waypoint of the sub leg. */
        startDescription: string;
    }

    /** Represents a route summary. */
    export interface IRouteSummary {
        /** The total travel distance of the route */
        distance: number;

        /** The cost of the route. This property is only returned if the routeMode of the IDirectionsRequestOptions is set to transit and the map culture is set to ja-jp. */
        monetaryCost: number;

        /** The location of the northeast corner of bounding box that defines the best map view of the route. */
        northEast: Location;

        /** The location of the southwest corner of bounding box that defines the best map view of the route. */
        southWest: Location;

        /** The total travel time, in seconds, for the route. */
        time: number;

        /**
        * The total travel time, in seconds, taking into account traffic delays, for the route.
        * This property is 0 if the avoidTraffic property of the IDirectionsRequestOptions is set to false.
        */
        timeWithTraffic: number;
    }

    /** Contains information about a transit line. */
    export interface ITransitLine {
        /** The short name for the transit line. */
        abbreviatedName: string;

        /** The ID of the agency that owns the transit line. */
        agencyId: number;

        /** The name of the agency that owns the transit line. */
        agencyName: string;

        /** The URL of the website of the agency that owns the transit line. */
        agencyUrl: string;

        /** Phone number for the transit agency. */
        phoneNumber: string;

        /** Information about the provider of this transit line data. */
        providerInfo: string;

        /** The uri for the transit agencies website. */
        uri: string;

        /** The full name of this transit line. */
        verboseName: string;
    }

    /** Options that can be used to define a waypoint. */
    export interface IWaypointOptions {
        /**
        * The address string of the waypoint. For example, the following strings are valid for this parameter: "Seattle", "1 Microsoft Way, Redmond, WA". Either the address or location property must be specified.
        */
        address?: string;

        /**
        * A boolean indicating whether the waypoint is a via point. A via point is a point along the route that is not a stop point. Set this property to
        * true if you just want the route to pass through this location. Default: false
        */
        isViaPoint?: boolean;

        /** The location of the waypoint. Either the address or location property must be specified. */
        location?: Location;
    }

    /** Contains options for the directions to calculate. */
    export interface IDirectionsRequestOptions {
        /** The unit to use when displaying direction distances. */
        distanceUnit?: DistanceUnit;

        /** The number of routes to calculate. */
        maxRoutes?: number;

        /** The features to avoid when calculating the route. */
        routeAvoidance?: RouteAvoidance[];

        /** A boolean indicating whether the route line on the map can be dragged with the mouse cursor.  */
        routeDraggable?: boolean;

        /** If multiple routes are returned, the index of the route and directions to display. */
        routeIndex?: number;

        /** The type of directions to calculate. */
        routeMode?: RouteMode;

        /** The optimization setting for the route calculation. */
        routeOptimization?: RouteOptimization;

        /** The type of the time specified. The default value is departure. */
        timeType?: TimeType;

        /** The time to use when calculating the route. If this property is set to null, the current time is used */
        time?: Date;
    }

    /** Represents render options for a route. */
    export interface IDirectionsRenderOptions {
        /** A boolean indicating whether to automatically set the map view to the best map view of the calculated route. Default: true */
        autoUpdateMapView?: boolean;

        /** A boolean indicating whether to display the disclaimer about the accuracy of the directions. Default: true */
        displayDisclaimer?: boolean;

        /** A boolean indicating whether to display the icons for each direction maneuver. Default: true */
        displayManeuverIcons?: boolean;

        /** A boolean indicating whether to display direction hints that describe when a direction step was missed. Default: true */
        displayPostItineraryItemHints?: boolean;

        /**
        * A boolean indicating whether to display direction hints that describe what to look for before you come to the next
        * direction step. The default value is true.
        */
        displayPreItineraryItemHints?: boolean;

        /** A boolean indicating whether to display the route selector control. Default: true */
        displayRouteSelector?: boolean;

        /** A boolean indicating whether to display direction warnings. Default: true */
        displayStepWarnings?: boolean;

        /** A boolean indicating whether to display a warning about walking directions. Default: true */
        displayWalkingWarning?: boolean;

        /** The polyline options that define how to draw the route line on the map, if the RouteMode is driving. */
        drivingPolylineOptions?: IPolylineOptions;

        /** The pushpin options that define how the first waypoint should be rendered. */
        firstWaypointPushpinOptions?: IPushpinOptions;

        /** The DOM element inside which the directions itinerary will be rendered. */
        itineraryContainer?: HTMLElement;

        /** The pushpin options that define how the last waypoint should be rendered. */
        lastWaypointPushpinOptions?: IPushpinOptions;

        /** A boolean indicating whether to show the input panel. Default: false */
        showInputPanel?: boolean;

        /** The options that define how to draw the route line on the map, if the RouteMode is transit. */
        transitPolylineOptions?: IPolylineOptions;

        /** The options that define how to draw the route line on the map, if the RouteMode is walking. */
        walkingPolylineOptions?: IPolylineOptions;

        /** The options that define the pushpin to use for all route waypoints by default. The first and last waypoints in the route will be overriden by firstWaypointPushpinOptions and lastWaypointPushpinOptions if set.  */
        waypointPushpinOptions?: IPushpinOptions;
    }

    /////////////////////////////////////
    /// Classes
    ////////////////////////////////////

    /** An object used to define a start, end or stop location along a route. */
    export class Waypoint {
        /**
         * @constructor
         * @param options: Options used to define the Waypoint.
         */
        constructor(options: IWaypointOptions);

        /** Releases any resources associated with the waypoint. */
        public dispose(): void;

        /**
         * Gets the address associated with the waypoint.
         * @returns The address associated with the waypoint.
         */
        public getAddress(): string;

        /**
         * Gets the location of the waypoint.
         * @returns The location of the waypoint.
         */
        public getLocation(): Location;

        /**
         * Gets a boolean value indicating whether the waypoint is a via point.
         * @returns A boolean value indicating whether the waypoint is a via point.
         */
        public isViapoint(): boolean;

        /**
         * Sets options for the waypoint. For these options to take effect, you must recalculate the route.
         * @param options Options used to define the Waypoint.
         */
        public setOptions(options: IWaypointOptions): void;
    }

    /** The main class in the Directions module that process direction calculations and rendering. */
    export class DirectionsManager {

        /**
         * @constructor
         * @param map A map to calculate directions for.
         * @param waypoints An array of waypoints to be added to the route.
         */
        constructor(map: Map, waypoints?: Waypoint[]);

        /**
         * Adds a waypoint to the route at the given index, if specified. If an index is not specified, the waypoint is added as the last waypoint in the route. The maximum number of walking or driving waypoints is 25. The maximum number of transit waypoints is 2. Up to 10 via points are allowed between two stop waypoints. To recalculate the route, use calculateDirections.
         * @param waypoint The waypoint to be added to the directions manager.
         * @param index An index at which the waypoint is to be added.
         */
        public addWaypoint(waypoint: Waypoint, index?: number): void;

        /**
         * Calculates directions based on request and render options set
         */
        public calculateDirections(): void;

        /** Clears the directions request and render options and removes all waypoints */
        public clearAll(): void;

        /**
         * Clears the directions displayed and removes the route line from the map.
         * This method does not remove waypoints from the route and retains all calculated direction information and option settings.
         */
        public clearDisplay(): void;

        /** Deletes the DirectionsManager object and releases any associated resources. */
        public dispose(): void;

        /**
         * Gets all the waypoints in the directions manager.
         * @returns All the waypoints in the directions manager.
         */
        public getAllWaypoints(): Waypoint[];

        /**
         * Gets the currently displayed route information.
         * @returns The currently displayed route information.
         */
        public getCurrentRoute(): IRoute;

        /**
        * Gets the route render options.
        * @returns The route render options
        */
        public getRenderOptions(): IDirectionsRenderOptions;

        /**
         * Gets the directions request options.
         * @returns The directions request options.
         */
        public getRequestOptions(): IDirectionsRequestOptions;

        /**
         * Gets the current calculated route(s)
         * @returns The current calculated route(s). If the route was not successfully calculated, null is returned.
         */
        public getRouteResult(): IRoute[];

        /**
        * Removes the given waypoint or the waypoint identified by the given index from the route.
        * @param waypointOrIndex A Waypoint object to be removed or the index of the waypoint to be removed
        */
        public removeWaypoint(waypointOrIndex: Waypoint | number): void;

        /**
         * Sets the specified render options for the route.
         * @param options The options that customize the rendering of the calculated route.
         */
        public setRenderOptions(options: IDirectionsRenderOptions): void;

        /**
         * Sets the specified route calculation options.
         * @param options The route calculation options.
         */
        public setRequestOptions(options: IDirectionsRequestOptions): void;

       /**
        * Displays an input panel for calculating directions in the specified container. Provides autosuggest for location inputs.
        * @param inputContainerId The id name of the HTML container in which to render the directions input panel.
        */
        public showInputPanel(inputContainerId: string): void;
    }
}

declare module Microsoft.Maps {
    /** A static class that manages events within the map SDK. */
    module Events {
        /////////////////////////////////////
        /// addHandler Definitions
        ////////////////////////////////////

        /**
        * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * • directionsError
        * • directionsUpdated
        * @param handler The callback function to handle the event when triggered.
        * @returns The handler id.
        */
        export function addHandler(target: Directions.DirectionsManager, eventName: string, handler: (eventArg?: Directions.IDirectionsEventArgs | Directions.IDirectionsErrorEventArgs) => void): IHandlerId;

        /////////////////////////////////////
        /// addOne Definitions
        ////////////////////////////////////

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * • directionsError
         * • directionsUpdated
         * @param handler The callback function to handle the event when triggered.
         */
        export function addOne(target: Directions.DirectionsManager, eventName: string, handler: (eventArg?: Directions.IDirectionsEventArgs | Directions.IDirectionsErrorEventArgs) => void): void;

        /////////////////////////////////////
        /// addThrottledHandler Definitions
        ////////////////////////////////////

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * • directionsError
         * • directionsUpdated
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function addThrottledHandler(target: Directions.DirectionsManager, eventName: string, handler: (eventArg?: Directions.IDirectionsEventArgs | Directions.IDirectionsErrorEventArgs) => void, throttleInterval: number): IHandlerId;
    }
}
