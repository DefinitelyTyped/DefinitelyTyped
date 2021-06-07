// Type definitions for osrm 5.22
// Project: https://github.com/Project-OSRM/osrm-backend
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * The OSRM method is the main constructor for creating an OSRM instance.
 * An OSRM instance requires a .osrm network, which is prepared by the OSRM Backend C++ library.
 *
 * https://github.com/Project-OSRM/node-osrm/blob/master/docs/api.md
 */
declare class OSRM {
    constructor(name: string);
    /**
     * shortest path between given coordinates
     */
    route(options: OSRM.RouteOptions, callback: (err: Error, results: OSRM.RouteResults) => void): void;
    /**
     * returns the nearest street segment for a given coordinate
     */
    nearest(options: OSRM.NearestOptions, callback: (err: Error, results: OSRM.NearestResults) => void): void;

    /**
     * computes distance tables for given coordinates
     */
    table(options: OSRM.TableOptions, callback: (err: Error, results: OSRM.TableResults) => void): void;
    /**
     * matches given coordinates to the road network
     */
    match(options: OSRM.MatchOptions, callback: (err: Error, results: OSRM.MatchResults) => void): void;
    /**
     * Compute the shortest trip between given coordinates
     */
    trip(options: OSRM.TripOptions, callback: (err: Error, results: OSRM.TripResults) => void): void;
    /**
     * Return vector tiles containing debugging info
     */
    tile(options: OSRM.TileOptions | OSRM.Tile, callback: (err: Error, results: Buffer) => void): void;
}

declare namespace OSRM {
    const version: number;
    type GeometriesTypes = 'polyline' | 'geojson' | 'polyline6';
    type OverviewTypes = 'full' | 'simplified' | 'false';
    type Coordinate = number[];
    type Polyline = string;
    type Bearing = number[];
    type Radius = number;
    type Hint = string;
    type Duration = number;
    type Distance = number;
    type Tile = [number, number, number];
    type StepManeuverTypes = 'turn' | 'new name' | 'depart' | 'arrive' | 'merge' |
                             'ramp' | 'on ramp' | 'off ramp' | 'fork' | 'end of road' |
                             'use lane' | 'continue' | 'roundabout' | 'rotary' | 'roundabout turn' |
                             'notification' | 'exit roundabout' | 'exit rotary';
    type Indication = 'uturn' | 'sharp right' | 'right' | 'slight rigth' |
                      'straight' |'slight left' | 'left' | 'sharp left';

    interface LineString {
        type: 'LineString';
        coordinates: Coordinate[];
    }

    interface  Waypoint {
        hint: string;
        distance: number;
        name: string;
        location: Coordinate;
    }

    /**
     * Annotation of the whole route leg with fine-grained information about each segment or node id.
     *
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/http.md#annotation-object
     */
    interface Annotation {
        /**
         * The distance, in metres, between each pair of coordinates
         */
        distance: number[];
        /**
         * The duration between each pair of coordinates, in seconds. Does not include the duration of any turns.
         */
        duration: number[];
        /**
         * The index of the datasource for the speed between each pair of coordinates. 0 is the default profile, other values are supplied via --segment-speed-file to osrm-contract
         */
        datasources: number[];
        /**
         * The OSM node ID for each coordinate along the route, excluding the first/last user-supplied coordinates
         */
        nodes: number[];
        /**
         * The weights between each pair of coordinates. Does not include any turn costs.
         */
        weight: number[];
        /**
         * Convenience field, calculation of distance / duration rounded to one decimal place
         */
        speed: number[];
    }

    /**
     * Represents a route between two waypoints.
     *
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/http.md#routeleg-object
     */
    interface RouteLeg {
        /**
         * The distance traveled by this route leg, in float meters.
         */
        distance: number;
        /**
         * The estimated travel time, in float number of seconds.
         */
        duration: number;
        /**
         * The calculated weight of the route leg.
         */
        weight: number;
        /**
         * Summary of the route taken as string. Depends on the summary parameter:
         * - true: Names of the two major roads used. Can be empty if route is too short.
         * - false: empty string
         */
        summary: string;
        /**
         * Depends on the steps parameter.
         * - true: array of RouteStep objects describing the turn-by-turn instructions
         * - false: empty array
         */
        steps: RouteStep[];
        /**
         * Additional details about each coordinate along the route geometry:
         * - true: An Annotation object containing node ids, durations distances and
         * - false: weights undefined
         */
        annotation: Annotation;
    }

    /**
     * A step consists of a maneuver such as a turn or merge, followed by a distance of travel along a single way to the subsequent step.
     *
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/http.md#routestep-object
     */
    interface RouteStep {
        /**
         * The distance of travel from the maneuver to the subsequent step, in float meters.
         */
        distance: number;
        /**
         * The estimated travel time, in float number of seconds.
         */
        duration: number;
        /**
         * The unsimplified geometry of the route segment, depending on the geometries parameter.
         */
        geometry: Polyline | LineString;
        /**
         * The calculated weight of the step.
         */
        weight: number;
        /**
         * The name of the way along which travel proceeds.
         */
        name: string;
        /**
         * A reference number or code for the way. Optionally included, if ref data is available for the given way.
         */
        ref: string;
        /**
         * The pronunciation hint of the way name. Will be undefined if there is no pronunciation hit.
         */
        pronunciation: string;
        /**
         * The destinations of the way. Will be undefined if there are no destinations.
         */
        destinations: string;
        /**
         * The exit numbers or names of the way. Will be undefined if there are no exit numbers or names.
         */
        exits: string;
        /**
         * A string signifying the mode of transportation.
         */
        mode: string;
        /**
         * A StepManeuver object representing the maneuver.
         */
        maneuver: StepManeuver;
        /**
         * A list of Intersection objects that are passed along the segment, the very first belonging to the StepManeuver
         */
        intersections: Intersection[];
        /**
         * The name for the rotary. Optionally included, if the step is a rotary and a rotary name is available.
         */
        rotary_name: string;
        /**
         * The pronunciation hint of the rotary name. Optionally included, if the step is a rotary and a rotary pronunciation is available.
         */
        rotary_pronunciation: string;
    }

    /**
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/http.md#stepmaneuver-object
     */
    interface StepManeuver {
        /**
         * A [longitude, latitude] pair describing the location of the turn.
         */
        location: Coordinate;
        /**
         * The clockwise angle from true north to the direction of travel immediately before the maneuver. Range 0-359.
         */
        bearing_before: number;
        /**
         * The clockwise angle from true north to the direction of travel immediately after the maneuver. Range 0-359.
         */
        bearing_after: number;
        /**
         * A string indicating the type of maneuver.
         * new identifiers might be introduced without API change Types unknown to the client should be handled like the turn type,
         * the existence of correct modifier values is guranteed.
         */
        type: StepManeuverTypes;
        /**
         * An optional string indicating the direction change of the maneuver.
         */
        modifier: Indication;
    }

    /**
     * A Lane represents a turn lane at the corresponding turn location.
     *
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/http.md#lane-object
     */
    interface Lane {
        indications: Indication[];
        valid: boolean;
    }

    /**
     * An intersection gives a full representation of any cross-way the path passes bay.
     * For every step, the very first intersection (intersections[0]) corresponds to the location of the StepManeuver.
     * Further intersections are listed for every cross-way until the next turn instruction.
     *
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/http.md#intersection-object
     */
    interface Intersection {
        /**
         * A [longitude, latitude] pair describing the location of the turn.
         */
        location: Coordinate;
        /**
         * A list of bearing values (e.g. [0,90,180,270]) that are available at the intersection.
         * The bearings describe all available roads at the intersection. Values are between 0-359 (0=true north)
         */
        bearings: number[];
        /**
         * An array of strings signifying the classes (as specified in the profile) of the road exiting the intersection.
         */
        classes: string[];
        /**
         * A list of entry flags, corresponding in a 1:1 relationship to the bearings.
         * A value of true indicates that the respective road could be entered on a valid route.
         * false indicates that the turn onto the respective road would violate a restriction.
         */
        entry: string[];
        /**
         * index into bearings/entry array. Used to calculate the bearing just before the turn.
         * Namely, the clockwise angle from true north to the direction of travel immediately before the maneuver/passing the intersection.
         * Bearings are given relative to the intersection. To get the bearing in the direction of driving, the bearing has to be rotated by a value of 180.
         * The value is not supplied for depart maneuvers.
         */
        in: number;
        /**
         * index into the bearings/entry array. Used to extract the bearing just after the turn.
         * Namely, The clockwise angle from true north to the direction of travel immediately after the maneuver/passing the intersection.
         * The value is not supplied for arrive maneuvers.
         */
        out: number;
        /**
         * Array of Lane objects that denote the available turn lanes at the intersection.
         * If no lane information is available for an intersection, the lanes property will not be present.
         */
        lanes: Lane;
    }

    /**
     * Object used to describe waypoint on a route.
     *
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/http.md#waypoint-object
     */
    interface Waypoint {
        distance: number;
        /**
         * Name of the street the coordinate snapped to
         */
        name: string;
        /**
         * Array that contains the [longitude, latitude] pair of the snapped coordinate
         */
        location: Coordinate;
        /**
         * Unique internal identifier of the segment (ephemeral, not constant over data updates)
         * This can be used on subsequent request to significantly speed up the query and to connect multiple services.
         * E.g. you can use the hint value obtained by the nearest query as hint values for route inputs.
         */
        hint: string;
    }

    /**
     * Represents a route through (potentially multiple) waypoints.
     *
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/http.md#route-object
     */
    interface Route {
        /**
         * The distance traveled by the route, in float meters.
         */
        distance: number;
        /**
         * The estimated travel time, in float number of seconds.
         */
        duration: number;
        /**
         * The whole geometry of the route value depending on overview parameter, format depending on the geometries parameter. See RouteStep's geometry property for a parameter documentation.
         */
        geometry?: any;
        /**
         * The calculated weight of the route.
         */
        weight: number;
        /**
         * The name of the weight profile used during extraction phase.
         */
        weight_name: string;
        /**
         * The legs between the given waypoints, an array of RouteLeg objects.
         */
        legs: RouteLeg[];
    }

    /**
     * Each Waypoint object includes two additional properties,
     *
     * 1) matchings_index: Index to the Route object in matchings the sub-trace was matched to,
     * 2) waypoint_index: Index of the waypoint inside the matched route.
     *
     * https://github.com/Project-OSRM/node-osrm/blob/master/docs/api.md#match
     */
    interface MatchWaypoint extends Waypoint {
        matchings_index: number[];
        waypoint_index: number[];
    }

    /**
     * matchings is an array of Route objects that assemble the trace.
     * Each Route object has an additional confidence property,
     * which is the confidence of the matching.
     * float value between 0 and 1. 1 is very confident that the matching is correct.
     *
     * https://github.com/Project-OSRM/node-osrm/blob/master/docs/api.md#match
     */
    interface MatchRoute extends Route {
        confidence: number;
    }

    /**
     * Each Waypoint object has the following additional properties,
     *
     * 1) trips_index: index to trips of the sub-trip the point was matched to, and
     * 2) waypoint_index: index of the point in the trip.
     *
     * https://github.com/Project-OSRM/node-osrm/blob/master/docs/api.md#trip
     */
    interface TripWaypoint extends Waypoint {
        trips_index: number;
        waypoint_index: number;
    }

    interface Options {
        /**
         * The coordinates this request will use. Array with [{lon},{lat}] values, in decimal degrees.
         */
        coordinates?: Coordinate[];
        /**
         * Limits the search to segments with given bearing in degrees towards true north in clockwise direction. Null or array with [{value},{range}]
         */
        bearings?: Bearing[] | null;
        /**
         * Limits the search to given radius in meters. null or double >= 0 or unlimited (default)
         */
        radiuses?: Radius[] | null;
        /**
         * Hint to derive position in street network. Base64 string
         */
        hints?: Hint[];
        /**
         * Adds a Hint to the response which can be used in subsequent requests, see hints parameter.
         */
        generate_hints?: boolean;
    }

    /**
     * Returns the fastest route between two or more coordinates while visiting the waypoints in order.
     *
     * https://github.com/Project-OSRM/node-osrm/blob/master/docs/api.md#route
     */
    interface RouteOptions extends Options {
        /**
         * Search for alternative routes and return as well. Please note that even if an alternative route is requested, a result cannot be guaranteed. (optional, default false)
         */
        alternatives?: boolean;
        /**
         * Return route steps for each route leg. (optional, default false)
         */
        steps?: boolean;
        /**
         * Return annotations for each route leg for duration, nodes, distance, weight, datasources and/or speed.
         * Annotations can be false or true (no/full annotations) or an array of strings with duration, nodes, distance, weight, datasources, speed. (optional, default false)
         */
        annotations?: boolean | string[];
        /**
         * Returned route geometry format (influences overview and per step). Can also be geojson. (optional, default polyline)
         */
        geometries?: GeometriesTypes;
        /**
         * Add overview geometry either full, simplified according to highest zoom level it could be display on, or not at all (false). (optional, default simplified)
         */
        overview?: OverviewTypes;
        /**
         * Forces the route to keep going straight at waypoints and don't do a uturn even if it would be faster. Default value depends on the profile. null/true/false
         */
        continue_straight?: boolean;
    }

    /**
     * Snaps a coordinate to the street network and returns the nearest n matches.
     *
     * Note: coordinates in the general options only supports a single {longitude},{latitude} entry.
     *
     * https://github.com/Project-OSRM/node-osrm/blob/master/docs/api.md#nearest
     */
    interface NearestOptions extends Options {
        /**
         * Number of nearest segments that should be returned. Must be an integer greater than or equal to 1. (optional, default 1)
         */
        number?: number;
    }

    /**
     * Computes duration tables for the given locations. Allows for both symmetric and asymmetric tables.
     *
     * https://github.com/Project-OSRM/node-osrm/blob/master/docs/api.md#table
     */
    interface TableOptions extends Options {
        /**
         * to use location with given index as source. Default is to use all.
         */
        sources?: number[];
        /**
         * to use location with given index as destination. Default is to use all.
         */
        destinations?: number[];
        /**
         * specify which table results to return.
         */
        annotations?: Array<('duration' | 'distance')>;
        /**
         * Multiply the table duration values in the table by this number for more controlled input into a
         * route optimization solver.
         */
        scale_factor?: number;
    }

    /**
     * This generates Mapbox Vector Tiles that can be viewed with a vector-tile capable slippy-map viewer.
     * The tiles contain road geometries and metadata that can be used to examine the routing graph.
     * The tiles are generated directly from the data in-memory, so are in sync with actual routing results,
     * and let you examine which roads are actually routable, and what weights they have applied.
     *
     * https://github.com/Project-OSRM/node-osrm/blob/master/docs/api.md#tile
     */
    interface TileOptions extends Options {
        /**
         * Array an array consisting of x, y, and z values representing tile coordinates like wiki.openstreetmap.org/wiki/Slippy_map_tilenames
         * and are supported by vector tile viewers like Mapbox GL JS.
         */
        ZXY?: Tile;
    }

    /**
     * Map matching matches given GPS points to the road network in the most plausible way.
     * Please note the request might result multiple sub-traces.
     * Large jumps in the timestamps (>60s) or improbable transitions lead to trace splits if a complete matching could not be found.
     * The algorithm might not be able to match all points. Outliers are removed if they can not be matched successfully.
     *
     * https://github.com/Project-OSRM/node-osrm/blob/master/docs/api.md#tile
     */
    interface MatchOptions extends Options {
        /**
         * Return route steps for each route. (optional, default false)
         */
        steps?: boolean;
        /**
         * Return annotations for each route leg for duration, nodes, distance, weight, datasources and/or speed.
         * Annotations can be false or true (no/full annotations) or an array of strings with duration, nodes, distance, weight, datasources, speed. (optional, default false)
         */
        annotations?: boolean | string[];
        /**
         * Returned route geometry format (influences overview and per step). Can also be geojson. (optional, default polyline)
         */
        geometries?: string;
        /**
         * Add overview geometry either full, simplified according to highest zoom level it could be display on, or not at all (false). (optional, default simplified)
         */
        overview?: string;
        /**
         * Timestamp of the input location (integers, UNIX-like timestamp).
         */
        timestamps?: number[];
        /**
         * Standard deviation of GPS precision used for map matching. If applicable use GPS accuracy (double >= 0, default 5m).
         */
        radiuses?: number[];
    }

    /**
     * The trip plugin solves the Traveling Salesman Problem using a greedy heuristic (farthest-insertion algorithm).
     * The returned path does not have to be the fastest path, as TSP is NP-hard it is only an approximation.
     * Note that all input coordinates have to be connected for the trip service to work.
     *
     * https://github.com/Project-OSRM/node-osrm/blob/master/docs/api.md#trip
     */
    interface TripOptions extends Options {
        /**
         * Return route is a roundtrip. (optional, default true)
         */
        roundtrip?: boolean;
        /**
         * Return route starts at any coordinate. Can also be first. (optional, default any)
         */
        source?: string;
        /**
         * Return route ends at any coordinate. Can also be last. (optional, default any)
         */
        destination?: string;
        /**
         * Return route steps for each route. (optional, default false)
         */
        steps?: boolean;
        /**
         * Return annotations for each route leg for duration, nodes, distance, weight, datasources and/or speed.
         * Annotations can be false or true (no/full annotations) or an array of strings with duration, nodes, distance, weight, datasources, speed. (optional, default false)
         */
        annotations?: boolean | string[];
        /**
         * Returned route geometry format (influences overview and per step). Can also be geojson. (optional, default polyline)
         */
        geometries?: string;
        /**
         * Add overview geometry either full, simplified (optional, default simplified)
         */
        overview?: string;
    }

    interface RouteResults {
        waypoints: Waypoint[];
        routes: Route[];
    }

    interface NearestResults {
        waypoints: Waypoint[];
    }

    interface TableResults {
        durations: Duration[][];
        distances?: Distance[][];
        sources: Waypoint[];
        destinations: Waypoint[];
    }

    interface MatchResults {
        tracepoints: MatchWaypoint[];
        matchings: MatchRoute[];
    }

    interface TripResults {
        waypoints: TripWaypoint[];
        trips: Route[];
    }
}
export = OSRM;
