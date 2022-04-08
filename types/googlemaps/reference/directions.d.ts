declare namespace google.maps {
    class DirectionsService {
        route(request: DirectionsRequest, callback: (result: DirectionsResult, status: DirectionsStatus) => void): void;
    }

    /** A directions query to be sent to the DirectionsService. */
    interface DirectionsRequest {
        /**
         * If true, instructs the Directions service to avoid ferries where
         * possible. Optional.
         */
        avoidFerries?: boolean;
        /**
         * If true, instructs the Directions service to avoid highways where
         * possible. Optional.
         */
        avoidHighways?: boolean;
        /**
         * If true, instructs the Directions service to avoid toll roads where
         * possible. Optional.
         */
        avoidTolls?: boolean;
        /**
         * Location of destination. This can be specified as either a string to be
         * geocoded, or a LatLng, or a Place. Required.
         */
        destination?: string | LatLng | LatLngLiteral | Place;
        /** Deprecated. Use drivingOptions field instead */
        durationInTraffic?: boolean;
        /**
         * Settings that apply only to requests where travelMode is DRIVING. This
         * object will have no effect for other travel modes.
         */
        drivingOptions?: DrivingOptions;
        /**
         * If set to true, the DirectionService will attempt to re-order the
         * supplied intermediate waypoints to minimize overall cost of the route. If
         * waypoints are optimized, inspect DirectionsRoute.waypoint_order in the
         * response to determine the new ordering.
         */
        optimizeWaypoints?: boolean;
        /**
         * Location of origin. This can be specified as either a string to be
         * geocoded, or a LatLng, or a Place. Required.
         */
        origin?: string | LatLng | LatLngLiteral | Place;
        /** Whether or not route alternatives should be provided. Optional. */
        provideRouteAlternatives?: boolean;
        /** Region code used as a bias for geocoding requests. Optional. */
        region?: string;
        /**
         * Settings that apply only to requests where travelMode is TRANSIT. This
         * object will have no effect for other travel modes.
         */
        transitOptions?: TransitOptions;
        /** Type of routing requested. Required. */
        travelMode?: TravelMode;
        /**
         * Preferred unit system to use when displaying distance. Defaults to the
         * unit system used in the country of origin.
         */
        unitSystem?: UnitSystem;
        /**
         * Array of intermediate waypoints. Directions will be calculated from the
         * origin to the destination by way of each waypoint in this array. The
         * maximum allowed waypoints is 8, plus the origin, and destination. Premium
         * Plan customers are allowed 23 waypoints, plus the origin, and
         * destination. Waypoints are not supported for transit directions.
         * Optional.
         */
        waypoints?: DirectionsWaypoint[];
    }

    enum DirectionsStatus {
        INVALID_REQUEST = 'INVALID_REQUEST',
        MAX_WAYPOINTS_EXCEEDED = 'MAX_WAYPOINTS_EXCEEDED',
        NOT_FOUND = 'NOT_FOUND',
        OK = 'OK',
        OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
        REQUEST_DENIED = 'REQUEST_DENIED',
        UNKNOWN_ERROR = 'UNKNOWN_ERROR',
        ZERO_RESULTS = 'ZERO_RESULTS',
    }

    interface DirectionsResult {
        geocoded_waypoints: DirectionsGeocodedWaypoint[];
        routes: DirectionsRoute[];
    }

    class DirectionsRenderer extends MVCObject {
        constructor(opts?: DirectionsRendererOptions);
        getDirections(): DirectionsResult;
        getMap(): Map;
        getPanel(): Element;
        getRouteIndex(): number;
        setDirections(directions: DirectionsResult): void;
        setMap(map: Map | null): void;
        setOptions(options: DirectionsRendererOptions): void;
        setPanel(panel: Element): void;
        setRouteIndex(routeIndex: number): void;
    }

    interface DirectionsRendererOptions {
        directions?: DirectionsResult;
        draggable?: boolean;
        hideRouteList?: boolean;
        infoWindow?: InfoWindow;
        map?: Map;
        markerOptions?: MarkerOptions;
        panel?: Element;
        polylineOptions?: PolylineOptions;
        preserveViewport?: boolean;
        routeIndex?: number;
        suppressBicyclingLayer?: boolean;
        suppressInfoWindows?: boolean;
        suppressMarkers?: boolean;
        suppressPolylines?: boolean;
    }

    /**
     * A DirectionsWaypoint represents a location between origin and destination
     * through which the trip should be routed.
     * @see {@link https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsWaypoint Maps JavaScript API}
     */
    interface DirectionsWaypoint {
        /**
         * Waypoint location. Can be an address string, a {@link LatLng}, or a
         * {@link Place}.
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsWaypoint.location Maps JavaScript API}
         */
        location?: string | LatLng | Place;
        /**
         * If `true`, indicates that this waypoint is a stop between the origin and
         * destination. This has the effect of splitting the route into two legs. If
         * `false`, indicates that the route should be biased to go through this
         * waypoint, but not split into two legs. This is useful if you want to
         * create a route in response to the user dragging waypoints on a map.
         * @default true
         * @see {@link https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsWaypoint.stopover Maps JavaScript API}
         */
        stopover?: boolean;
    }

    /**
     * A single geocoded waypoint.
     */
    interface DirectionsGeocodedWaypoint {
        partial_match: boolean;
        place_id: string;
        types: string[];
    }

    /**
     * A single route containing a set of legs in a DirectionsResult.
     * Note that though this object is "JSON-like," it is not strictly JSON,
     * as it directly and indirectly includes LatLng objects.
     */
    interface DirectionsRoute {
        /** The bounds for this route. */
        bounds: LatLngBounds;
        /** Copyrights text to be displayed for this route. */
        copyrights: string;
        /**
         * The total fare for the whole transit trip. Only applicable to transit
         * requests.
         */
        fare: TransitFare;
        /**
         * An array of DirectionsLegs, each of which contains information about the
         * steps of which it is composed. There will be one leg for each stopover
         * waypoint or destination specified. So a route with no stopover waypoints
         * will contain one DirectionsLeg and a route with one stopover waypoint
         * will contain two.
         */
        legs: DirectionsLeg[];
        /**
         * An array of LatLngs representing the entire course of this route. The
         * path is simplified in order to make it suitable in contexts where a small
         * number of vertices is required (such as Static Maps API URLs).
         */
        overview_path: LatLng[];
        /**
         * An encoded polyline representation of the route in overview_path.
         * This polyline is an approximate (smoothed) path of the resulting
         * directions.
         */
        overview_polyline: string;
        /** Warnings to be displayed when showing these directions. */
        warnings: string[];
        /**
         * If optimizeWaypoints was set to true, this field will contain the
         * re-ordered permutation of the input waypoints. For example, if the input
         * was: Origin: Los Angeles Waypoints: Dallas, Bangor, Phoenix Destination:
         * New York and the optimized output was ordered as follows: Origin: Los
         * Angeles Waypoints: Phoenix, Dallas, Bangor Destination: New York then
         * this field will be an Array containing the values [2, 0, 1]. Note that
         * the numbering of waypoints is zero-based. If any of the input waypoints
         * has stopover set to false, this field will be empty, since route
         * optimization is not available for such queries.
         */
        waypoint_order: number[];
    }

    interface DirectionsLeg {
        arrival_time: Time;
        departure_time: Time;
        distance: Distance;
        duration: Duration;
        duration_in_traffic: Duration;
        end_address: string;
        end_location: LatLng;
        start_address: string;
        start_location: LatLng;
        steps: DirectionsStep[];
        via_waypoints: LatLng[];
    }

    // TODO find source documentation
    interface BaseDirectionsStep {
        distance: Distance;
        duration: Duration;
        end_location: LatLng;
        instructions: string;
        path: LatLng[];
        start_location: LatLng;
        transit: TransitDetails;
        travel_mode: TravelMode;
    }

    interface DirectionsStep extends BaseDirectionsStep {
        /**
         * This field will only be available if travel_mode is set to TRANSIT.
         */
        steps: BaseDirectionsStep[];
    }

    interface Place {
        location?: LatLng | LatLngLiteral;
        placeId?: string;
        query?: string;
    }

    enum TravelMode {
        BICYCLING = 'BICYCLING',
        DRIVING = 'DRIVING',
        TRANSIT = 'TRANSIT',
        TWO_WHEELER = 'TWO_WHEELER',
        WALKING = 'WALKING',
    }

    interface DrivingOptions {
        departureTime: Date;
        trafficModel?: TrafficModel;
    }

    enum TrafficModel {
        BEST_GUESS = 'bestguess',
        OPTIMISTIC = 'optimistic',
        PESSIMISTIC = 'pessimistic',
    }

    interface TransitOptions {
        arrivalTime?: Date;
        departureTime?: Date;
        modes?: TransitMode[];
        routingPreference?: TransitRoutePreference;
    }

    enum TransitMode {
        BUS = 'BUS',
        RAIL = 'RAIL',
        SUBWAY = 'SUBWAY',
        TRAIN = 'TRAIN',
        TRAM = 'TRAM',
    }

    enum TransitRoutePreference {
        FEWER_TRANSFERS = 'FEWER_TRANSFERS',
        LESS_WALKING = 'LESS_WALKING',
    }

    interface TransitFare {
        currency: string;
        value: number;
    }

    interface TransitDetails {
        arrival_stop: TransitStop;
        arrival_time: Time;
        departure_stop: TransitStop;
        departure_time: Time;
        headsign: string;
        headway: number;
        line: TransitLine;
        num_stops: number;
    }

    interface TransitStop {
        location: LatLng;
        name: string;
    }

    interface TransitLine {
        agencies: TransitAgency[];
        color: string;
        icon: string;
        name: string;
        short_name: string;
        text_color: string;
        url: string;
        vehicle: TransitVehicle;
    }

    interface TransitAgency {
        name: string;
        phone: string;
        url: string;
    }

    interface TransitVehicle {
        icon: string;
        local_icon: string;
        name: string;
        type: VehicleType;
    }

    enum VehicleType {
        BUS,
        CABLE_CAR,
        COMMUTER_TRAIN,
        FERRY,
        FUNICULAR,
        GONDOLA_LIFT,
        HEAVY_RAIL,
        HIGH_SPEED_TRAIN,
        INTERCITY_BUS,
        METRO_RAIL,
        MONORAIL,
        OTHER,
        RAIL,
        SHARE_TAXI,
        SUBWAY,
        TRAM,
        TROLLEYBUS,
    }

    enum UnitSystem {
        METRIC = 0,
        IMPERIAL = 1,
    }

    interface Distance {
        text: string;
        value: number;
    }

    interface Duration {
        text: string;
        value: number;
    }

    interface Time {
        text: string;
        time_zone: string;
        value: Date;
    }
}
