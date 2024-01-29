/// <reference types="node" />

/**
 * The OSRM method is the main constructor for creating an OSRM instance.
 * An OSRM instance requires a .osrm network, which is prepared by the OSRM Backend C++ library.
 *
 * https://github.com/Project-OSRM/node-osrm/blob/master/docs/api.md
 */
declare class OSRM {
    constructor(options: string);
    // tslint:disable-next-line:unified-signatures
    constructor(options: OSRM.PathConstructorOptions);
    // tslint:disable-next-line:unified-signatures
    constructor(options: OSRM.SharedMemoryConstructorOptions);
    /**
     * Returns the fastest route between two or more coordinates while visiting the waypoints in order.
     */
    route(options: OSRM.RouteOptions, callback: (err: Error, results: OSRM.RouteResults) => void): void;
    route(
        options: OSRM.RouteOptions,
        pluginConfig: OSRM.PluginConfig & { format: "json_buffer" },
        callback: (err: Error, results: Buffer) => void,
    ): void;
    route(
        options: OSRM.RouteOptions,
        pluginConfig: OSRM.PluginConfig,
        callback: (err: Error, results: OSRM.RouteResults) => void,
    ): void;
    /**
     * Returns Object containing waypoints. waypoints: array of Ẁaypoint objects sorted by distance to the input coordinate.
     * Each object has an additional distance property, which is the distance in meters to the supplied input coordinate.
     */
    nearest(options: OSRM.NearestOptions, callback: (err: Error, results: OSRM.NearestResults) => void): void;
    nearest(
        options: OSRM.NearestOptions,
        pluginConfig: OSRM.PluginConfig & { format: "json_buffer" },
        callback: (err: Error, results: Buffer) => void,
    ): void;
    nearest(
        options: OSRM.NearestOptions,
        pluginConfig: OSRM.PluginConfig,
        callback: (err: Error, results: OSRM.NearestResults) => void,
    ): void;
    /**
     * Returns Object containing durations, sources, and destinations. durations: array of arrays that stores the matrix in
     * row-major order. durations[i][j] gives the travel time from the i-th waypoint to the j-th waypoint. Values are given
     * in seconds. sources: array of Ẁaypoint objects describing all sources in order. destinations: array of Ẁaypoint
     * objects describing all destinations in order. fallback_speed_cells: (optional) if fallback_speed is used, will be an
     * array of arrays of row,column values, indicating which cells contain estimated values.
     */
    table(options: OSRM.TableOptions, callback: (err: Error, results: OSRM.TableResults) => void): void;
    table(
        options: OSRM.TableOptions,
        pluginConfig: OSRM.PluginConfig & { format: "json_buffer" },
        callback: (err: Error, results: Buffer) => void,
    ): void;
    table(
        options: OSRM.TableOptions,
        pluginConfig: OSRM.PluginConfig,
        callback: (err: Error, results: OSRM.TableResults) => void,
    ): void;
    /**
     * Returns Buffer contains a Protocol Buffer encoded vector tile.
     */
    tile(XYZ: OSRM.Tile, callback: (err: Error, results: Buffer) => void): void;
    tile(XYZ: OSRM.Tile, pluginConfig: OSRM.PluginConfig, callback: (err: Error, results: Buffer) => void): void;
    /**
     * Returns Object containing tracepoints and matchings. tracepoints Array of Ẁaypoint objects representing all points
     * of the trace in order. If the trace point was ommited by map matching because it is an outlier, the entry will be
     * null. Each Waypoint object includes two additional properties, 1) matchings_index: Index to the Route object in
     * matchings the sub-trace was matched to, 2) waypoint_index: Index of the waypoint inside the matched route. matchings
     * is an array of Route objects that assemble the trace. Each Route object has an additional confidence property, which
     * is the confidence of the matching. float value between 0 and 1. 1 is very confident that the matching is correct.
     */
    match(options: OSRM.MatchOptions, callback: (err: Error, results: OSRM.MatchResults) => void): void;
    match(
        options: OSRM.MatchOptions,
        pluginConfig: OSRM.PluginConfig & { format: "json_buffer" },
        callback: (err: Error, results: Buffer) => void,
    ): void;
    match(
        options: OSRM.MatchOptions,
        pluginConfig: OSRM.PluginConfig,
        callback: (err: Error, results: OSRM.MatchResults) => void,
    ): void;
    /**
     * Returns Object containing waypoints and trips. waypoints: an array of Waypoint objects representing all waypoints
     * in input order. Each Waypoint object has the following additional properties, 1) trips_index: index to trips of the
     * sub-trip the point was matched to, and 2) waypoint_index: index of the point in the trip. trips: an array of Route
     * objects that assemble the trace.
     */
    trip(options: OSRM.TripOptions, callback: (err: Error, results: OSRM.TripResults) => void): void;
    trip(
        options: OSRM.TripOptions,
        pluginConfig: OSRM.PluginConfig & { format: "json_buffer" },
        callback: (err: Error, results: Buffer) => void,
    ): void;
    trip(
        options: OSRM.TripOptions,
        pluginConfig: OSRM.PluginConfig,
        callback: (err: Error, results: OSRM.TripResults) => void,
    ): void;
}

declare namespace OSRM {
    const version: number;
    type AlgorithmTypes = "CH" | "CoreCH" | "MLD";
    type GeometriesTypes = "polyline" | "geojson" | "polyline6";
    type OverviewTypes = "full" | "simplified" | "false";
    type SnappingTypes = "default" | "any";
    type ApproachTypes = "unrestricted" | "curb";
    type FallbackCoordinateTypes = "input" | "snapped";
    type GapTypes = "split" | "ignore";
    type Coordinate = number[];
    type Polyline = string;
    type Bearing = number[];
    type Radius = number;
    type Hint = string;
    type Duration = number;
    type Distance = number;
    type Tile = [number, number, number];
    type StepManeuverTypes =
        | "turn"
        | "new name"
        | "depart"
        | "arrive"
        | "merge"
        | "ramp"
        | "on ramp"
        | "off ramp"
        | "fork"
        | "end of road"
        | "use lane"
        | "continue"
        | "roundabout"
        | "rotary"
        | "roundabout turn"
        | "notification"
        | "exit roundabout"
        | "exit rotary";
    type Indication =
        | "uturn"
        | "sharp right"
        | "right"
        | "slight rigth"
        | "straight"
        | "slight left"
        | "left"
        | "sharp left";

    interface LineString {
        type: "LineString";
        coordinates: Coordinate[];
    }

    interface Waypoint {
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
         * The coordinates this request will use, coordinates as [{lon},{lat}] values, in decimal degrees.
         */
        coordinates?: Coordinate[];
        /**
         * Limits the search to segments with given bearing in degrees towards true north in clockwise direction. Can be null or an array of [{value},{range}] with integer 0 .. 360,integer 0 .. 180.
         */
        bearings?: Bearing[] | null;
        /**
         * Limits the coordinate snapping to streets in the given radius in meters. Can be null (unlimited, default) or double >= 0.
         */
        radiuses?: Radius[] | null;
        /**
         * Hints for the coordinate snapping. Array of base64 encoded strings.
         */
        hints?: Hint[];
        /**
         * Whether or not adds a Hint to the response which can be used in subsequent requests. (optional, default true)
         */
        generate_hints?: boolean;
    }

    /**
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/nodejs/api.md
     */
    interface ConstructorOptions {
        /**
         * The algorithm to use for routing. Can be 'CH', 'CoreCH' or 'MLD'. Default is 'CH'. Make sure you prepared the dataset with the correct toolchain.
         */
        algorithm?: AlgorithmTypes;

        /**
         * DEPRECATED Old behaviour: Path to a file on disk to store the memory using mmap. Current behaviour: setting this
         * value is the same as setting mmap_memory: true.
         */
        memory_file?: string;
        /**
         * Map on-disk files to virtual memory addresses (mmap), rather than loading into RAM.
         */
        mmap_memory?: boolean;
        /**
         * Max. locations supported in trip query (default: unlimited).
         */
        max_locations_trip?: number;
        /**
         * Max. locations supported in viaroute query (default: unlimited).
         */
        max_locations_viaroute?: number;
        /**
         * Max. locations supported in distance table query (default: unlimited).
         */
        max_locations_distance_table?: number;
        /**
         * Max. locations supported in map-matching query (default: unlimited).
         */
        max_locations_map_matching?: number;
        /**
         * Max. results supported in nearest query (default: unlimited).
         */
        max_results_nearest?: number;
        /**
         * Max.number of alternatives supported in alternative routes query (default: 3).
         */
        max_alternatives?: number;
    }

    interface PathConstructorOptions extends ConstructorOptions {
        /**
         * The path to the .osrm files. This is mutually exclusive with setting {options.shared_memory} to true.
         */
        path?: string;
    }
    interface SharedMemoryConstructorOptions extends ConstructorOptions {
        /**
         * Connects to the persistent shared memory datastore. This requires you to run osrm-datastore prior to creating an OSRM object.
         */
        shared_memory?: boolean;
        /**
         * Connects to the persistent shared memory datastore defined by --dataset_name option when running osrm-datastore.
         * This requires you to run osrm-datastore --dataset_name prior to creating an OSRM object.
         */
        dataset_name?: string;
    }

    /**
     * Returns the fastest route between two or more coordinates while visiting the waypoints in order.
     *
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/nodejs/api.md#route
     */
    interface RouteOptions extends Options {
        /**
         * Boolean: Search for alternative routes. (optional, default false)
         * Number: Search for up to this many alternative routes. Please note that even if alternative routes are requested, a result cannot be guaranteed. (optional, default 0)
         */
        alternatives?: boolean | number;
        /**
         * Return route steps for each route leg. (optional, default false)
         */
        steps?: boolean;
        /**
         * An array with strings of duration, nodes, distance, weight, datasources, speed or boolean for enabling/disabling all. (optional, default false)
         */
        annotations?:
            | boolean
            | Array<("duration" | "nodes" | "distance" | "weight" | "datasources" | "speed")>
            | boolean;
        /**
         * Returned route geometry format (influences overview and per step). Can also be geojson. (optional, default polyline)
         */
        geometries?: GeometriesTypes;
        /**
         * Add overview geometry either full, simplified according to highest zoom level it could be display on, or not at all (false). (optional, default simplified)
         */
        overview?: OverviewTypes;
        /**
         * Forces the route to keep going straight at waypoints and don't do a uturn even if it would be faster. Default value depends on the profile.
         */
        continue_straight?: boolean;
        /**
         * Keep waypoints on curb side. Can be null (unrestricted, default) or curb.
         */
        approaches?: ApproachTypes[] | null;
        /**
         * Indices to coordinates to treat as waypoints. If not supplied, all coordinates are waypoints. Must include first and last coordinate index. null/true/false
         */
        waypoints?: number[];
        /**
         * Which edges can be snapped to, either default, or any. default only snaps to edges marked by the profile as is_startpoint, any will allow snapping to any edge in the routing graph.
         */
        snapping?: SnappingTypes;
        /**
         * Which classes to exclude.
         */
        exclude?: string[];
    }

    /**
     * Snaps a coordinate to the street network and returns the nearest n matches.
     *
     * Note: coordinates in the general options only supports a single {longitude},{latitude} entry.
     *
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/nodejs/api.md#nearest
     */
    interface NearestOptions extends Options {
        /**
         * Number of nearest segments that should be returned. Must be an integer greater than or equal to 1. (optional, default 1)
         */
        number?: number;
        /**
         * Keep waypoints on curb side. Can be null (unrestricted, default) or curb.
         */
        approaches?: ApproachTypes[] | null;
        /**
         * Which edges can be snapped to, either default, or any. default only snaps to edges marked by the profile as is_startpoint, any will allow snapping to any edge in the routing graph.
         */
        snapping?: SnappingTypes;
    }

    /**
     * Computes duration table for the given locations. Allows for both symmetric and asymmetric tables. Optionally returns distance table.
     *
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/nodejs/api.md#table
     */
    interface TableOptions extends Options {
        /**
         * An array of index elements (0 <= integer < #coordinates) to use location with given index as source. Default is to use all.
         */
        sources?: number[];
        /**
         * An array of index elements (0 <= integer < #coordinates) to use location with given index as destination. Default is to use all.
         */
        destinations?: number[];
        /**
         * Keep waypoints on curb side. Can be null (unrestricted, default) or curb.
         */
        approaches?: ApproachTypes | null;
        /**
         * Replace null responses in result with as-the-crow-flies estimates based on fallback_speed. Value is in metres/second.
         */
        fallback_speed?: number;
        /**
         * Either input (default) or snapped. If using a fallback_speed, use either the user-supplied coordinate (input),
         * or the snapped coordinate (snapped) for calculating the as-the-crow-flies distance between two points.
         */
        fallback_coordinate?: FallbackCoordinateTypes;
        /**
         * Multiply the table duration values in the table by this number for more controlled input into a route optimization solver.
         */
        scale_factor?: number;
        /**
         * Which edges can be snapped to, either default, or any. default only snaps to edges marked by the profile as is_startpoint,
         * any will allow snapping to any edge in the routing graph.
         */
        snapping?: SnappingTypes;
        /**
         * Return the requested table or tables in response. Can be ['duration'] (return the duration matrix, default) or
         * ['duration', distance'] (return both the duration matrix and the distance matrix).
         */
        annotations?: Array<("duration" | "distance")>;
        /**
         * Which classes to exclude.
         */
        exclude?: string[];
    }

    /**
     * Map matching matches given GPS points to the road network in the most plausible way. Please note the request might
     * result multiple sub-traces. Large jumps in the timestamps (>60s) or improbable transitions lead to trace splits if
     * a complete matching could not be found. The algorithm might not be able to match all points. Outliers are removed
     * if they can not be matched successfully.
     *
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/nodejs/api.md#match
     */
    interface MatchOptions extends Options {
        /**
         * Return route steps for each route. (optional, default false)
         */
        steps?: boolean;
        /**
         * An array with strings of duration, nodes, distance, weight, datasources, speed or boolean for enabling/disabling all. (optional, default false)
         */
        annotations?: Array<("duration" | "nodes" | "distance" | "weight" | "datasources" | "speed")> | boolean;
        /**
         * Returned route geometry format (influences overview and per step). Can also be geojson. (optional, default polyline)
         */
        geometries?: GeometriesTypes;
        /**
         * Add overview geometry either full, simplified according to highest zoom level it could be display on, or not at all (false). (optional, default simplified)
         */
        overview?: OverviewTypes;
        /**
         * Timestamp of the input location (integers, UNIX-like timestamp).
         */
        timestamps?: number[];
        /**
         * Standard deviation of GPS precision used for map matching. If applicable use GPS accuracy. Can be null for default value 5 meters or double >= 0.
         */
        radiuses?: number[];
        /**
         * Allows the input track splitting based on huge timestamp gaps between points. Either split or ignore (optional, default split).
         */
        gaps?: GapTypes;
        /**
         * Allows the input track modification to obtain better matching quality for noisy tracks (optional, default false).
         */
        tidy?: boolean;
        /**
         * Indices to coordinates to treat as waypoints. If not supplied, all coordinates are waypoints. Must include first and last coordinate index.
         */
        waypoints?: number[];
        /**
         * Which edges can be snapped to, either default, or any. default only snaps to edges marked by the profile as is_startpoint, any will allow snapping to any edge in the routing graph.
         */
        snapping?: SnappingTypes;
        /**
         * Which classes to exclude.
         */
        exclude?: string[];
    }

    /**
     * The trip plugin solves the Traveling Salesman Problem using a greedy heuristic (farthest-insertion algorithm) for
     * 10 or _ more waypoints and uses brute force for less than 10 waypoints. The returned path does not have to be the
     * shortest path, _ as TSP is NP-hard it is only an approximation.
     *
     * https://github.com/Project-OSRM/osrm-backend/blob/master/docs/nodejs/api.md#trip
     */
    interface TripOptions extends Options {
        /**
         * Return route steps for each route. (optional, default false)
         */
        steps?: boolean;
        /**
         * An array with strings of duration, nodes, distance, weight, datasources, speed or boolean for enabling/disabling all. (optional, default false)
         */
        annotations?: Array<("duration" | "nodes" | "distance" | "weight" | "datasources" | "speed")> | boolean;
        /**
         * Returned route geometry format (influences overview and per step). Can also be geojson. (optional, default polyline)
         */
        geometries?: GeometriesTypes;
        /**
         * Add overview geometry either full, simplified (optional, default simplified)
         */
        overview?: OverviewTypes;
        /**
         * Return route is a roundtrip. (optional, default true)
         */
        roundtrip?: boolean;
        /**
         * Return route starts at any or first coordinate. (optional, default any)
         */
        source?: "any" | "first";
        /**
         * Return route ends at any or last coordinate. (optional, default any)
         */
        destination?: "any" | "last";
        /**
         * Keep waypoints on curb side. Can be null (unrestricted, default) or curb.
         */
        approaches?: ApproachTypes | null;
        /**
         * Which edges can be snapped to, either default, or any. default only snaps to edges marked by the profile as is_startpoint, any will allow snapping to any edge in the routing graph.
         */
        snapping?: SnappingTypes;
        /**
         * Which classes to exclude.
         */
        exclude?: string[];
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
        fallback_speed_cells?: number[];
    }

    interface MatchResults {
        tracepoints: MatchWaypoint[];
        matchings: MatchRoute[];
    }

    interface TripResults {
        waypoints: TripWaypoint[];
        trips: Route[];
    }

    interface PluginConfig {
        /**
         * The format of the result object to various API calls.
         * Valid options are object (default), which returns a standard Javascript object, as described above, and json_buffer, which will return a NodeJS Buffer object, containing a JSON string.
         * The latter has the advantage that it can be immediately serialized to disk/sent over the network, and the generation of the string is performed outside the main NodeJS event loop.
         * This option is ignored by the tile plugin.
         */
        format?: "object" | "json_buffer";
    }
}
export = OSRM;
