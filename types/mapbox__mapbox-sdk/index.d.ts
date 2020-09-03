// Type definitions for @mapbox/mapbox-sdk 0.6
// Project: https://github.com/mapbox/mapbox-sdk-js
// Definitions by: Jeff Dye <https://github.com/jeffbdye>
//                 Mike O'Meara <https://github.com/mikeomeara1>
//                 chachan <https://github.com/chachan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare module '@mapbox/mapbox-sdk/lib/classes/mapi-client' {
    import { MapiRequest, DirectionsApproach } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
    export default class MapiClient {
                       constructor(config: SdkConfig);
                       accessToken: string;
                       origin?: string;
                       createRequest(requestOptions: any): MapiRequest;
                   }

    interface SdkConfig {
        accessToken: string;
        origin?: string;
    }
}

declare module '@mapbox/mapbox-sdk/lib/classes/mapi-request' {
    import { MapiResponse } from '@mapbox/mapbox-sdk/lib/classes/mapi-response';
    import MapiClient from '@mapbox/mapbox-sdk/lib/classes/mapi-client';
    import { MapiError } from '@mapbox/mapbox-sdk/lib/classes/mapi-error';

    interface EventEmitter {
        response: MapiResponse;
        error: MapiError;
        downloadProgress: ProgressEvent;
        uploadProgress: ProgressEvent;
    }

    interface MapiRequest {
        /**
         * An event emitter.
         */
        emitter: EventEmitter;
        /**
         * This request's MapiClient.
         */
        client: MapiClient;
        /**
         * If this request has been sent and received a response, the response is available on this property.
         */
        response?: MapiResponse;
        /**
         * If this request has been sent and received an error in response, the error is available on this property.
         */
        error?: MapiError | Error;
        /**
         * If the request has been aborted (via abort), this property will be true.
         */
        aborted: boolean;
        /**
         * If the request has been sent, this property will be true.
         * You cannot send the same request twice, so if you need to create a new request
         * that is the equivalent of an existing one, use clone.
         */
        sent: boolean;
        /**
         * The request's path, including colon-prefixed route parameters.
         */
        path: string;
        /**
         * The request's origin.
         */
        origin: string;
        /**
         * The request's HTTP method.
         */
        method: string;
        /**
         * A query object, which will be transformed into a URL query string.
         */
        query: any;
        /**
         * A route parameters object, whose values will be interpolated the path.
         */
        params: any;
        /**
         * The request's headers.
         */
        headers: any;
        /**
         * Data to send with the request. If the request has a body, it will also be sent with the header 'Content-Type: application/json'.
         */
        body?: any;
        /**
         * A file to send with the request. The browser client accepts Blobs and ArrayBuffers.
         */
        file: Blob | ArrayBuffer | string;
        url(accessToken?: string): string;
        send(): Promise<MapiResponse>;
        abort(): void;
        eachPage(callback: PageCallbackFunction): void;
        clone(): MapiRequest;
    }

    interface PageCallbackFunction {
        error: MapiError;
        response: MapiResponse;
        next: () => void;
    }

    type MapboxProfile = 'driving' | 'walking' | 'cycling';

    type DirectionsApproach = 'unrestricted' | 'curb';
}

declare module '@mapbox/mapbox-sdk/lib/classes/mapi-response' {
    import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';

    interface MapiResponse {
        /**
         * The response body, parsed as JSON.
         */
        body: any;
        /**
         * The raw response body.
         */
        rawBody: string;
        /**
         * The response's status code.
         */
        statusCode: number;
        /**
         * The parsed response headers.
         */
        headers: any;
        /**
         * The parsed response links
         */
        links: any;
        /**
         * The response's originating MapiRequest.
         */
        request: MapiRequest;
        hasNextPage(): boolean;
        nextPage(): MapiRequest;
    }
}

declare module '@mapbox/mapbox-sdk/lib/classes/mapi-error' {
    import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';

    interface MapiError {
        /**
         * The errored request.
         */
        request: MapiRequest;
        /**
         * The type of error. Usually this is 'HttpError'.
         * If the request was aborted, so the error was not sent from the server, the type will be 'RequestAbortedError'.
         */
        type: string;
        /**
         * The numeric status code of the HTTP response
         */
        statusCode?: number;
        /**
         * If the server sent a response body, this property exposes that response, parsed as JSON if possible.
         */
        body?: any;
        /**
         * Whatever message could be derived from the call site and HTTP response.
         */
        message?: string;
    }
}

declare module '@mapbox/mapbox-sdk/services/datasets' {
    import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
    import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';

    /*********************************************************************************************************************
     * Datasets Types
     *********************************************************************************************************************/
    export default function Datasets(config: SdkConfig | MapiClient): DatasetsService;

    interface DatasetsService {
        /**
         * List datasets in your account.
         */
        listDatasets(): MapiRequest;
        /**
         *  Create a new, empty dataset.
         * @param config Object
         */
        createDataset(config: { name?: string; description?: string }): MapiRequest;
        /**
         * Get metadata about a dataset.
         * @param config
         */
        getMetadata(config: { datasetId: string }): MapiRequest;
        /**
         * Update user-defined properties of a dataset's metadata.
         * @param config
         */
        updateMetadata(config: { datasetId?: string; name?: string; description?: string }): MapiRequest;
        /**
         * Delete a dataset, including all features it contains.
         * @param config
         */
        deleteDataset(config: { datasetId?: string }): MapiRequest;
        /**
         * List features in a dataset.
         * This endpoint supports pagination. Use MapiRequest#eachPage or manually specify the limit and start options.
         * @param config
         */
        // implicit any
        listFeatures(config: { datasetId: string; limit?: number; start?: string }): any;
        /**
         * Add a feature to a dataset or update an existing one.
         * @param config
         */
        putFeature(config: { datasetId: string; featureId: string; feature: DataSetsFeature }): MapiRequest;
        /**
         * Get a feature in a dataset.
         * @param config
         */
        // implicit any
        getFeature(config: { datasetId: string; featureId: string }): any;
        /**
         * Delete a feature in a dataset.
         * @param config
         */
        // implicit any
        deleteFeature(config: { datasetId: string; featureId: string }): any;
    }

    /**
     * All GeoJSON types except for FeatureCollection.
     */
    type DataSetsFeature =
        | GeoJSON.Point
        | GeoJSON.MultiPoint
        | GeoJSON.LineString
        | GeoJSON.MultiLineString
        | GeoJSON.Polygon
        | GeoJSON.MultiPolygon
        | GeoJSON.GeometryCollection
        | GeoJSON.Feature<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>;

    interface Dataset {
        /**
         * The username of the dataset owner
         */
        owner: string;
        /**
         * Id for an existing dataset
         */
        id: string;
        /*
         * Date and time the dataset was created
         */
        created: string;
        /*
         * Date and time the dataset was last modified
         */
        modified: string;
        /**
         * The extent of features in the dataset as an array of west, south, east, north coordinates
         */
        bounds: number[];
        /**
         * The number of features in the dataset
         */
        features: number;
        /**
         * The size of the dataset in bytes
         */
        size: number;
        /**
         * The name of the dataset
         */
        name: string;
        /**
         * The description of the dataset
         */
        description: string;
    }
}

declare module '@mapbox/mapbox-sdk/services/directions' {
    import * as GeoJSON from 'geojson';
    import { LngLatLike } from 'mapbox-gl';
    import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';
    import { MapiRequest, MapboxProfile, DirectionsApproach } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';

    export default function Directions(config: SdkConfig | MapiClient): DirectionsService;

    interface DirectionsService {
        getDirections(request: DirectionsRequest): MapiRequest;
    }

    type DirectionsProfile = MapboxProfile | 'driving-traffic';

    type DirectionsAnnotation = 'duration' | 'distance' | 'speed' | 'congestion';
    type DirectionsGeometry = 'geojson' | 'polyline' | 'polyline6';
    type DirectionsOverview = 'full' | 'simplified';
    type DirectionsUnits = 'imperial' | 'metric';
    type DirectionsSide = 'left' | 'right';
    type DirectionsMode = 'driving' | 'ferry' | 'unaccessible' | 'walking' | 'cycling' | 'train';
    type DirectionsClass = 'toll' | 'ferry' | 'restricted' | 'motorway' | 'tunnel';
    type ManeuverModifier =
        | 'uturn'
        | 'sharp right'
        | 'right'
        | 'slight right'
        | 'straight'
        | 'slight left'
        | 'left'
        | 'sharp left'
        | 'depart'
        | 'arrive';
    type ManeuverType =
        | 'turn'
        | 'new name'
        | 'depart'
        | 'arrive'
        | 'merge'
        | 'on ramp'
        | 'off ramp'
        | 'fork'
        | 'end of road'
        | 'continue'
        | 'roundabout'
        | 'rotary'
        | 'roundabout turn'
        | 'notification'
        | 'exit roundabout'
        | 'exit rotary';

    interface DirectionsRequest {
        /**
         * Routing profile; either  mapbox/driving-traffic ,  mapbox/driving ,  mapbox/walking , or  mapbox/cycling
         */
        profile: DirectionsProfile;
        waypoints: DirectionsRequestWaypoint[];
        /**
         * Whether to try to return alternative routes. An alternative is classified as a route that is significantly
         * different than the fastest route, but also still reasonably fast. Such a route does not exist in all circumstances.
         * Currently up to two alternatives can be returned. Can be  true or  false (default).
         */
        alternatives?: boolean;
        /**
         * Whether or not to return additional metadata along the route. Possible values are:  duration ,  distance ,  speed , and congestion .
         * Several annotations can be used by including them as a comma-separated list. See the RouteLeg object for more details on
         * what is included with annotations.
         */
        annotations?: DirectionsAnnotation[];

        /**
         * Whether or not to return banner objects associated with the  routeSteps .
         * Should be used in conjunction with  steps . Can be  true or  false . The default is  false .
         */
        bannerInstructions?: boolean;

        /**
         * Sets the allowed direction of travel when departing intermediate waypoints. If  true , the route will continue in the same
         * direction of travel. If  false , the route may continue in the opposite direction of travel. Defaults to  true for mapbox/driving and
         * false for  mapbox/walking and  mapbox/cycling .
         */
        continueStraight?: boolean;
        /**
         * Exclude certain road types from routing. Valid values depend on the profile in use.
         * The default is to not exclude anything from the profile selected.
         */
        exclude?: DirectionsProfile[];
        /**
         * Format of the returned geometry. Allowed values are:  geojson (as LineString ),
         * polyline with precision 5,  polyline6 (a polyline with precision 6). The default value is  polyline .
         */
        geometries?: DirectionsGeometry;
        /**
         * Language of returned turn-by-turn text instructions. See supported languages . The default is  en for English.
         */
        language?: string;
        /**
         * Type of returned overview geometry. Can be  full (the most detailed geometry available),
         * simplified (a simplified version of the full geometry), or  false (no overview geometry). The default is  simplified .
         */
        overview?: DirectionsOverview;

        /**
         * Emit instructions at roundabout exits. Can be  true or  false . The default is  false .
         */
        roundaboutExits?: boolean;
        /**
         * Whether to return steps and turn-by-turn instructions. Can be  true or  false . The default is  false .
         */
        steps?: boolean;
        /**
         * Whether or not to return SSML marked-up text for voice guidance along the route. Should be used in conjunction with steps .
         * Can be  true or  false . The default is  false .
         */
        voiceInstructions?: boolean;
        /**
         * Which type of units to return in the text for voice instructions. Can be  imperial or  metric . Default is  imperial .
         */
        voiceUnits?: DirectionsUnits;
    }

    interface DirectionsRequestWaypoint {
        /**
         * Semicolon-separated list of  {longitude},{latitude} coordinate pairs to visit in order. There can be between 2 and 25 coordinates.
         */
        coordinates: number[] | LngLatLike;
        /**
         * Used to indicate how requested routes consider from which side of the road to approach a waypoint.
         * Accepts unrestricted (default) or  curb . If set to  unrestricted , the routes can approach waypoints from either side of the road.
         * If set to  curb , the route will be returned so that on arrival, the waypoint will be found on the side that corresponds with the
         * driving_side of the region in which the returned route is located. Note that the  approaches parameter influences how you arrive at a waypoint,
         * while  bearings influences how you start from a waypoint. If provided, the list of approaches must be the same length as the list of waypoints.
         * However, you can skip a coordinate and show its position in the list with the  ; separator.
         */
        approach?: DirectionsApproach;
        /**
         * Maximum distance in meters that each coordinate is allowed to move when snapped to a nearby road segment.
         * There must be as many radiuses as there are coordinates in the request, each separated by ';'.
         * Values can be any number greater than 0 or the string 'unlimited'.
         * A  NoSegment error is returned if no routable road is found within the radius.
         */
        radius?: string | 'unlimited';
    }

    interface DirectionsResponse {
        /**
         * Array of Route objects ordered by descending recommendation rank. May contain at most two routes.
         */
        routes: Route[];
        /**
         * Array of Waypoint objects. Each waypoints is an input coordinate snapped to the road and path network.
         * The waypoints appear in the array in the order of the input coordinates.
         */
        waypoints: Waypoint[];
        /**
         * String indicating the state of the response. This is a separate code than the HTTP status code.
         * On normal valid responses, the value will be Ok.
         */
        code: string;
        uuid: string;
    }

    interface Waypoint {
        /**
         * String with the name of the way the coordinate snapped to.
         */
        name: string;
        /**
         * Array of [ longitude, latitude ] for the snapped coordinate.
         */
        location: number[];
        /**
         * Used to filter the road segment the waypoint will be placed on by direction and dictates the angle of approach.
         * This option should always be used in conjunction with the  radiuses parameter. The parameter takes two values per waypoint.
         * The first value is an angle clockwise from true north between 0 and 360, and the second is the range of degrees the angle can deviate by.
         * The recommended value for the range is 45° or 90°, as bearing measurements tend to be inaccurate.
         * This is useful for making sure the new routes of rerouted vehicles continue traveling in their current direction.
         * A request that does this would provide bearing and radius values for the first waypoint and leave the remaining values empty.
         * If provided, the list of bearings must be the same length as the list of waypoints.
         * However, you can skip a coordinate and show its position in the list with the  ; separator.
         */
        bearing?: number[];
        /**
         * Custom names for waypoints used for the arrival instruction in banners and voice instructions, each separated by  ; .
         * Values can be any string and total number of all characters cannot exceed 500. If provided, the list of waypoint_names must be the same
         * length as the list of waypoints, but you can skip a coordinate and show its position with the  ; separator.
         */
        waypointName?: string;
    }

    interface Route {
        /**
         * Depending on the geometries parameter this is a GeoJSON LineString or a Polyline string.
         * Depending on the overview parameter this is the complete route geometry (full), a simplified geometry
         * to the zoom level at which the route can be displayed in full (simplified), or is not included (false)
         */
        geometry: GeoJSON.LineString | GeoJSON.MultiLineString;
        /**
         * Array of RouteLeg objects.
         */
        legs: Leg[];
        /**
         * String indicating which weight was used. The default is routability which is duration-based,
         * with additional penalties for less desirable maneuvers.
         */
        weight_name: string;
        /**
         * Float indicating the weight in units described by weight_name
         */
        weight: number;
        /**
         * Float indicating the estimated travel time in seconds.
         */
        duration: number;
        /**
         * Float indicating the distance traveled in meters.
         */
        distance: number;
        /**
         * String of the locale used for voice instructions. Defaults to en, and can be any accepted instruction language.
         */
        voiceLocale?: string;
    }

    interface Leg {
        /**
         * Depending on the summary parameter, either a String summarizing the route (true, default) or an empty String (false)
         */
        summary: string;
        weight: number;
        /**
         * Number indicating the estimated travel time in seconds
         */
        duration: number;
        /**
         * Depending on the steps parameter, either an Array of RouteStep objects (true, default) or an empty array (false)
         */
        steps: Step[];
        /**
         * Number indicating the distance traveled in meters
         */
        distance: number;
        /**
         * An annotations object that contains additional details about each line segment along the route geometry.
         * Each entry in an annotations field corresponds to a coordinate along the route geometry.
         */
        annotation: DirectionsAnnotation[];
    }

    interface Step {
        /**
         * Array of objects representing all intersections along the step.
         */
        intersections: Intersection[];
        /**
         * The legal driving side at the location for this step. Either left or right.
         */
        driving_side: DirectionsSide;
        /**
         * Depending on the geometries parameter this is a GeoJSON LineString or a
         * Polyline string representing the full route geometry from this RouteStep to the next RouteStep
         */
        geometry: GeoJSON.LineString | GeoJSON.MultiLineString;
        /**
         * String indicating the mode of transportation. Possible values:
         */
        mode: DirectionsMode;
        /**
         * One StepManeuver object
         */
        maneuver: Maneuver;
        /**
         * Any road designations associated with the road or path leading from this step’s maneuver to the next step’s maneuver.
         * Optionally included, if data is available. If multiple road designations are associated with the road, they are separated by semicolons.
         * A road designation typically consists of an alphabetic network code (identifying the road type or numbering system), a space or hyphen,
         * and a route number. You should not assume that the network code is globally unique: for example, a network code of “NH” may appear on a
         * “National Highway” or “New Hampshire”. Moreover, a route number may not even uniquely identify a road within a given network.
         */
        ref?: string;
        weight: number;
        /**
         * Number indicating the estimated time traveled time in seconds from the maneuver to the next RouteStep.
         */
        duration: number;
        /**
         * String with the name of the way along which the travel proceeds
         */
        name: string;
        /**
         * Number indicating the distance traveled in meters from the maneuver to the next RouteStep.
         */
        distance: number;
        voiceInstructions: VoiceInstruction[];
        bannerInstructions: BannerInstruction[];
        /**
         * String with the destinations of the way along which the travel proceeds. Optionally included, if data is available.
         */
        destinations?: string;
        /**
         * String with the exit numbers or names of the way. Optionally included, if data is available.
         */
        exits?: string;
        /**
         * A string containing an IPA phonetic transcription indicating how to pronounce the name in the name property.
         * This property is omitted if pronunciation data is unavailable for the step.
         */
        pronunciation?: string;
    }

    interface Instruction {
        /**
         * String that contains all the text that should be displayed.
         */
        text: string;
        /**
         * Objects that, together, make up what should be displayed in the banner.
         * Includes additional information intended to be used to aid in visual layout
         */
        components: Component[];
        /**
         * The type of maneuver. May be used in combination with the modifier (and, if it is a roundabout, the degrees) to for an icon to
         * display. Possible values: 'turn', 'merge', 'depart', 'arrive', 'fork', 'off ramp', 'roundabout'
         */
        type?: string;
        /**
         * The modifier for the maneuver. Can be used in combination with the type (and, if it is a roundabout, the degrees)
         * to for an icon to display. Possible values: 'left', 'right', 'slight left', 'slight right', 'sharp left', 'sharp right', 'straight', 'uturn'
         */
        modifier?: ManeuverModifier;
        /**
         * The degrees at which you will be exiting a roundabout, assuming 180 indicates going straight through the roundabout.
         */
        degrees?: number;
        /**
         * A string representing which side the of the street people drive on in that location. Can be 'left' or 'right'.
         */
        driving_side: DirectionsSide;
    }

    interface BannerInstruction {
        /**
         * Float indicating in meters, how far from the upcoming maneuver
         * the banner instruction should begin being displayed. Only 1 banner should be displayed at a time.
         */
        distanceAlongGeometry: number;
        /**
         * Most important content to display to the user. Our SDK displays this text larger and at the top.
         */
        primary: Instruction;
        /**
         * Additional content useful for visual guidance. Our SDK displays this text slightly smaller and below the primary. Can be null.
         */
        secondary?: Instruction[];
        then?: any;
        /**
         * Additional information that is included if we feel the driver needs a heads up about something.
         * Can include information about the next maneuver (the one after the upcoming one) if the step is short -
         * can be null, or can be lane information. If we have lane information, that trumps information about the next maneuver.
         */
        sub?: Sub;
    }

    interface Sub {
        /**
         * String that contains all the text that should be displayed.
         */
        text: string;
        /**
         * Objects that, together, make up what should be displayed in the banner.
         * Includes additional information intended to be used to aid in visual layout
         */
        components: Component[];
    }

    interface Component {
        /**
         * String giving you more context about the component which may help in visual markup/display choices.
         * If the type of the components is unknown it should be treated as text. Note: Introduction of new types
         * is not considered a breaking change. See the Types of Banner Components table below for more info on each type.
         */
        type: string;
        /**
         * The sub-string of the parent object's text that may have additional context associated with it.
         */
        text: string;
        /**
         * The abbreviated form of text. If this is present, there will also be an abbr_priority value.
         * See the Examples of Abbreviations table below for an example of using abbr and abbr_priority.
         */
        abbr?: string;
        /**
         * An integer indicating the order in which the abbreviation abbr should be used in place of text.
         * The highest priority is 0 and a higher integer value means it should have a lower priority. There are no gaps in
         * integer values. Multiple components can have the same abbr_priority and when this happens all components with the
         * same abbr_priority should be abbreviated at the same time. Finding no larger values of abbr_priority means that the
         * string is fully abbreviated.
         */
        abbr_priority?: number;
        /**
         * String pointing to a shield image to use instead of the text.
         */
        imageBaseURL?: string;
        /**
         * (present if component is lane): An array indicating which directions you can go from a lane (left, right, or straight).
         * If the value is ['left', 'straight'], the driver can go straight or left from that lane
         */
        directions?: string[];
        /**
         * (present if component is lane): A boolean telling you if that lane can be used to complete the upcoming maneuver.
         * If multiple lanes are active, then they can all be used to complete the upcoming maneuver.
         */
        active: boolean;
    }

    interface VoiceInstruction {
        /**
         * Float indicating in meters, how far from the upcoming maneuver the voice instruction should begin.
         */
        distanceAlongGeometry: number;
        /**
         * String containing the text of the verbal instruction.
         */
        announcement: string;
        /**
         * String with SSML markup for proper text and pronunciation. Note: this property is designed for use with Amazon Polly.
         * The SSML tags contained here may not work with other text-to-speech engines.
         */
        ssmlAnnouncement: string;
    }

    interface Maneuver {
        /**
         * Number between 0 and 360 indicating the clockwise angle from true north to the direction of travel right after the maneuver
         */
        bearing_after: number;
        /**
         * Number between 0 and 360 indicating the clockwise angle from true north to the direction of travel right before the maneuver
         */
        bearing_before: number;
        /**
         * Array of [ longitude, latitude ] coordinates for the point of the maneuver
         */
        location: number[];
        /**
         * Optional String indicating the direction change of the maneuver
         */
        modifier?: ManeuverModifier;
        /**
         * String indicating the type of maneuver
         */
        type: ManeuverType;
        /**
         * A human-readable instruction of how to execute the returned maneuver
         */
        instruction: string;
    }

    interface Intersection {
        /**
         * Index into the bearings/entry array. Used to extract the bearing after the turn. Namely, The clockwise angle from true north to
         * the direction of travel after the maneuver/passing the intersection.
         * The value is not supplied for arrive maneuvers.
         */
        out?: number;
        /**
         * A list of entry flags, corresponding in a 1:1 relationship to the bearings.
         * A value of true indicates that the respective road could be entered on a valid route.
         * false indicates that the turn onto the respective road would violate a restriction.
         */
        entry: boolean[];
        /**
         * A list of bearing values (for example [0,90,180,270]) that are available at the intersection.
         * The bearings describe all available roads at the intersection.
         */
        bearings: number[];
        /**
         * A [longitude, latitude] pair describing the location of the turn.
         */
        location: number[];
        /**
         * Index into bearings/entry array. Used to calculate the bearing before the turn. Namely, the clockwise angle from true
         * north to the direction of travel before the maneuver/passing the intersection. To get the bearing in the direction of driving,
         * the bearing has to be rotated by a value of 180. The value is not supplied for departure maneuvers.
         */
        in?: number;
        /**
         * An array of strings signifying the classes of the road exiting the intersection.
         */
        classes?: DirectionsClass[];
        /**
         * Array of Lane objects that represent the available turn lanes at the intersection.
         * If no lane information is available for an intersection, the lanes property will not be present.
         */
        lanes: Lane[];
    }

    interface Lane {
        /**
         * Boolean value for whether this lane can be taken to complete the maneuver. For instance, if the lane array has four objects and the
         * first two are marked as valid, then the driver can take either of the left lanes and stay on the route.
         */
        valid: boolean;
        /**
         * Array of signs for each turn lane. There can be multiple signs. For example, a turning lane can have a sign with an arrow pointing left and another sign with an arrow pointing straight.
         */
        indications: string[];
    }
}

declare module '@mapbox/mapbox-sdk/services/geocoding' {
    import { LngLatLike } from 'mapbox-gl';
    import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
    import { MapiResponse } from '@mapbox/mapbox-sdk/lib/classes/mapi-response';
    import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';

    /*********************************************************************************************************************
     * Geocoder Types
     *********************************************************************************************************************/

    export default function Geocoding(config: SdkConfig | MapiClient): GeocodeService;

    interface GeocodeService {
        forwardGeocode(request: GeocodeRequest): MapiRequest;
        reverseGeocode(request: GeocodeRequest): MapiRequest;
    }

    interface BoundingBox {
        minLongitude: number;
        minLatitude: number;
        maxLongitude: number;
        maxLatitude: number;
    }

    type GeocodeMode = 'mapbox.places' | 'mapbox.places-permanent';

    type GeocodeQueryType =
        | 'country'
        | 'region'
        | 'postcode'
        | 'district'
        | 'place'
        | 'locality'
        | 'neighborhood'
        | 'address'
        | 'poi'
        | 'poi.landmark';

    interface GeocodeRequest {
        /**
         * A location. This will be a place name for forward geocoding or a coordinate pair (longitude, latitude) for reverse geocoding.
         */
        query: string | LngLatLike;
        /**
         * Either  mapbox.places for ephemeral geocoding, or  mapbox.places-permanent for storing results and batch geocoding.
         */
        mode: GeocodeMode;
        /**
         * Limit results to one or more countries. Options are ISO 3166 alpha 2 country codes
         */
        countries?: string[];
        /**
         * Bias local results based on a provided location. Options are  longitude,latitude coordinates.
         */
        proximity?: number[];
        /**
         * Filter results by one or more feature types
         */
        types?: GeocodeQueryType[];
        /**
         * Forward geocoding only. Return autocomplete results or not. Options are  true or  false and the default is  true .
         */
        autocomplete?: boolean;
        /**
         * Forward geocoding only. Limit results to a bounding box. Options are in the format  minX,minY,maxX,maxY .
         */
        bbox?: BoundingBox;
        /**
         * Limit the number of results returned. The default is  5 for forward geocoding and  1 for reverse geocoding.
         */
        limit?: number;
        /**
         * Specify the language to use for response text and, for forward geocoding, query result weighting.
         * Options are IETF language tags comprised of a mandatory ISO 639-1 language code and optionally one or more
         * IETF subtags for country or script.
         */
        language?: string[];
    }

    interface GeocodeResponse {
        /**
         * "Feature Collection" , a GeoJSON type from the GeoJSON specification.
         */
        type: string;
        /**
         * An array of space and punctuation-separated strings from the original query.
         */
        query: string[];
        /**
         * An array of feature objects.
         */
        features: GeocodeFeature[];
        /**
         * A string attributing the results of the Mapbox Geocoding API to Mapbox and links to Mapbox's terms of service and data sources.
         */
        attribution: string;
    }

    interface GeocodeFeature {
        /**
         * A string feature id in the form  {type}.{id} where  {type} is the lowest hierarchy feature in the  place_type field.
         * The  {id} suffix of the feature id is unstable and may change within versions.
         */
        id: string;
        /**
         * "Feature" , a GeoJSON type from the GeoJSON specification.
         */
        type: string;
        /**
         * An array of feature types describing the feature. Options are  country ,  region ,  postcode ,  district ,  place , locality ,  neighborhood ,
         * address ,  poi , and  poi.landmark . Most features have only one type, but if the feature has multiple types,
         * all applicable types will be listed in the array. (For example, Vatican City is a  country , region , and  place .)
         */
        place_type: string[];
        /**
         * A numerical score from 0 (least relevant) to 0.99 (most relevant) measuring how well each returned feature matches the query.
         * You can use the  relevance property to remove results that don't fully match the query.
         */
        relevance: number;
        /**
         * A string of the house number for the returned  address feature. Note that unlike the
         * address property for  poi features, this property is outside the  properties object.
         */
        address?: string;
        /**
         * An object describing the feature. The property object is unstable and only Carmen GeoJSON properties are guaranteed.
         * Your implementation should check for the presence of these values in a response before it attempts to use them.
         */
        properties: GeocodeProperties;
        /**
         * A string representing the feature in the requested language, if specified.
         */
        text: string;
        /**
         * A string representing the feature in the requested language, if specified, and its full result hierarchy.
         */
        place_name: string;
        /**
         * A string analogous to the  text field that more closely matches the query than results in the specified language.
         * For example, querying "Köln, Germany" with language set to English might return a feature with the
         * text "Cologne" and the  matching_text "Köln".
         */
        matching_text: string;
        /**
         * A string analogous to the  place_name field that more closely matches the query than results in the specified language.
         * For example, querying "Köln, Germany" with language set to English might return a feature with the place_name "Cologne, Germany"
         * and a  matching_place_name of "Köln, North Rhine-Westphalia, Germany".
         */
        matching_place_name: string;
        /**
         * A string of the IETF language tag of the query's primary language.
         * Can be used to identity text and place_name properties on this object
         * in the format text_{language}, place_name_{language} and language_{language}
         */
        language: string;
        /**
         * An array bounding box in the form [ minX,minY,maxX,maxY ] .
         */
        bbox?: number[];
        /**
         * An array in the form [ longitude,latitude ] at the center of the specified  bbox .
         */
        center: number[];
        /**
         * An object describing the spatial geometry of the returned feature
         */
        geometry: Geometry;
        /**
         * An array representing the hierarchy of encompassing parent features. Each parent feature may include any of the above properties
         */
        context: GeocodeFeature[];
    }

    interface Geometry {
        /**
         * Point, a GeoJSON type from the GeoJSON specification .
         */
        type: string;
        /**
         * An array in the format [ longitude,latitude ] at the center of the specified  bbox .
         */
        coordinates: number[];
        /**
         * A boolean value indicating if an  address is interpolated along a road network. This field is only present when the feature is interpolated.
         */
        interpolated: boolean;
    }

    interface GeocodeProperties extends GeocodeFeature {
        /**
         * The Wikidata identifier for the returned feature.
         */
        wikidata?: string;
        /**
         * A string of comma-separated categories for the returned  poi feature.
         */
        category?: string;
        /**
         * A formatted string of the telephone number for the returned  poi feature.
         */
        tel?: string;
        /**
         * The name of a suggested Maki icon to visualize a  poi feature based on its  category .
         */
        maki?: string;
        /**
         * A boolean value indicating whether a  poi feature is a landmark. Landmarks are
         * particularly notable or long-lived features like schools, parks, museums and places of worship.
         */
        landmark?: boolean;
        /**
         * The ISO 3166-1 country and ISO 3166-2 region code for the returned feature.
         */
        short_code: string;
    }
}

declare module '@mapbox/mapbox-sdk/services/map-matching' {
    import { LngLatLike } from 'mapbox-gl';
    import {
        DirectionsProfile,
        DirectionsAnnotation,
        DirectionsGeometry,
        DirectionsOverview,
        Leg,
    } from '@mapbox/mapbox-sdk/services/directions';
    import { MapiRequest, DirectionsApproach } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
    import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';

    /*********************************************************************************************************************
     * Map Matching Types
     *********************************************************************************************************************/
    export default function MapMatching(config: SdkConfig | MapiClient): MapMatchingService;

    interface MapMatchingService {
        getMatching(request: MapMatchingRequest): MapiRequest;
    }

    interface MapMatchingRequest {
        /**
         * An ordered array of MapMatchingPoints, between 2 and 100 (inclusive).
         */
        points: MapMatchingPoint[];
        /**
         * A directions profile ID. (optional, default driving)
         */
        profile?: DirectionsProfile;
        /**
         * Specify additional metadata that should be returned.
         */
        annotations?: DirectionsAnnotation;
        /**
         * Format of the returned geometry. (optional, default "polyline")
         */
        geometries?: DirectionsGeometry;
        /**
         * Language of returned turn-by-turn text instructions. See supported languages. (optional, default "en")
         */
        language?: string;
        /**
         * Type of returned overview geometry. (optional, default "simplified"
         */
        overview?: DirectionsOverview;
        /**
         * Whether to return steps and turn-by-turn instructions. (optional, default false)
         */
        steps?: boolean;
        /**
         * Whether or not to transparently remove clusters and re-sample traces for improved map matching results. (optional, default false)
         */
        tidy?: boolean;
    }

    interface Point {
        coordinates: LngLatLike;
        /**
         * Used to indicate how requested routes consider from which side of the road to approach a waypoint.
         */
        approach?: DirectionsApproach;
    }

    interface MapMatchingPoint extends Point {
        /**
         * A number in meters indicating the assumed precision of the used tracking device.
         */
        radius?: number;
        /**
         * Whether this coordinate is waypoint or not. The first and last coordinates will always be waypoints.
         */
        isWaypoint?: boolean;
        /**
         * Custom name for the waypoint used for the arrival instruction in banners and voice instructions.
         * Will be ignored unless isWaypoint is true.
         */
        waypointName?: boolean;
        /**
         * Datetime corresponding to the coordinate.
         */
        timestamp?: string | number | Date;
    }

    interface MapMatchingResponse {
        /**
         * An array of Match objects.
         */
        matchings: Matching[];
        /**
         * An array of Tracepoint objects representing the location an input point was matched with.
         * Array of Waypoint objects representing all input points of the trace in the order they were matched.
         * If a trace point is omitted by map matching because it is an outlier, the entry will be null.
         */
        tracepoints: Tracepoint[];
        /**
         * A string depicting the state of the response; see below for options
         */
        code: string;
    }

    interface Tracepoint {
        /**
         * Number of probable alternative matchings for this trace point. A value of zero indicates that this point was matched unambiguously.
         * Split the trace at these points for incremental map matching.
         */
        alternatives_count: number;
        /**
         * Index of the waypoint inside the matched route.
         */
        waypoint_index: number;
        location: number[];
        name: string;
        /**
         * Index to the match object in matchings the sub-trace was matched to.
         */
        matchings_index: number;
    }

    interface Matching {
        /**
         * a number between 0 (low) and 1 (high) indicating level of confidence in the returned match
         */
        confidence: number;
        geometry: string;
        legs: Leg[];
        distance: number;
        duration: number;
        weight_name: string;
        weight: number;
    }
}

declare module '@mapbox/mapbox-sdk/services/matrix' {
    import { DirectionsProfile, DirectionsAnnotation } from '@mapbox/mapbox-sdk/services/directions';
    import { Point } from '@mapbox/mapbox-sdk/services/map-matching';
    import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
    import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';

    /*********************************************************************************************************************
     * Matrix Types
     *********************************************************************************************************************/
    export default function Matrix(config: SdkConfig | MapiClient): MatrixService;

    interface MatrixService {
        /**
         * Get a duration and/or distance matrix showing travel times and distances between coordinates.
         * @param request
         */
        getMatrix(request: MatrixRequest): MapiRequest;
    }

    interface MatrixRequest {
        points: Point[];
        profile?: DirectionsProfile;
        sources?: number[];
        destinations?: number[];
        annotations?: DirectionsAnnotation;
    }

    interface MatrixResponse {
        code: string;
        durations?: number[][];
        distances?: number[][];
        destinations: Destination[];
        sources: Destination[];
    }

    interface Destination {
        location: number[];
        name: string;
    }
}

declare module '@mapbox/mapbox-sdk/services/optimization' {
    import { MapiRequest, MapboxProfile, DirectionsApproach } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
    import { MapiResponse } from '@mapbox/mapbox-sdk/lib/classes/mapi-response';
    import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';

    /*********************************************************************************************************************
     * Optimization Types
     *********************************************************************************************************************/
    export default function Optimization(config: SdkConfig | MapiClient): OptimizationService; // SdkConfig | MapiClient

    interface OptimizationService {
        getContours(config: OptimizationRequest): MapiRequest;
    }

    interface OptimizationRequest {
        /**
         * A Mapbox Directions routing profile ID.
         */
        profile: MapboxProfile;
        /**
         * A semicolon-separated list of {longitude},{latitude} coordinates. There must be between 2 and 12 coordinates. The first coordinate is the start and end point of the trip.
         */
        waypoints: OptimizationWaypoint[];
        /**
         * Return additional metadata along the route. You can include several annotations as a comma-separated list. Possible values are:
         */
        annotations?: 'duration' | 'speed' | 'distance';
        /**
         * Specify the destination coordinate of the returned route. Accepts  any (default) or  last .
         */
        destination?: 'any' | 'last';
        /**
         * Specify pick-up and drop-off locations for a trip by providing a ; delimited list of number pairs that correspond with the coordinates list.
         * The first number of a pair indicates the index to the coordinate of the pick-up location in the coordinates list,
         * and the second number indicates the index to the coordinate of the drop-off location in the coordinates list.
         * Each pair must contain exactly 2 numbers, which cannot be the same.
         * The returned solution will visit pick-up locations before visiting drop-off locations. The first location can only be a pick-up location, not a drop-off location.
         */
        distributions?: number[];
        /**
         * The format of the returned geometry. Allowed values are:  geojson (as LineString ),  polyline (default, a polyline with precision 5),  polyline6 (a polyline with precision 6).
         */
        geometries?: 'geojson' | 'polyline' | 'polyline6';
        /**
         * The language of returned turn-by-turn text instructions. See supported languages . The default is  en (English).
         */
        language?: string;
        /**
         * The type of the returned overview geometry.
         * Can be 'full' (the most detailed geometry available), 'simplified' (default, a simplified version of the full geometry), or 'false' (no overview geometry).
         */
        overview?: 'full' | 'simplified' | 'false';
        /**
         * The coordinate at which to start the returned route. Accepts  any (default) or  first .
         */
        source?: 'any' | 'first';
        /**
         * Whether to return steps and turn-by-turn instructions ( true ) or not ( false , default).
         */
        steps?: boolean;
        /**
         * Indicates whether the returned route is roundtrip, meaning the route returns to the first location ( true , default) or not ( false ).
         * If roundtrip=false , the  source and  destination parameters are required but not all combinations will be possible.
         * See the Fixing Start and End Points section below for additional notes.
         */
        roundtrip?: boolean;
    }

    interface OptimizationWaypoint {
        coordinates: number;
        /**
         * Used to indicate how requested routes consider from which side of the road to approach the waypoint.
         */
        approach?: DirectionsApproach;
        /**
         * Used to filter the road segment the waypoint will be placed on by direction and dictates the angle of approach.
         * This option should always be used in conjunction with a `radius`. The first value is an angle clockwise from true north between 0 and 360,
         * and the second is the range of degrees the angle can deviate by.
         */
        bearing?: number[];
        /**
         * Maximum distance in meters that the coordinate is allowed to move when snapped to a nearby road segment.
         */
        radius?: number | 'unlimited';
    }
}

declare module '@mapbox/mapbox-sdk/services/static' {
    import { LngLatLike, LngLatBoundsLike } from 'mapbox-gl';
    import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
    import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';

    /*********************************************************************************************************************
     * Static Map Types
     *********************************************************************************************************************/
    export default function StaticMap(config: SdkConfig | MapiClient): StaticMapService;

    interface StaticMapService {
        /**
         * Get a static map image..
         * @param request
         */
        getStaticImage(request: StaticMapRequest): MapiRequest;
    }

    interface StaticMapRequest {
        ownerId: string;
        styleId: string;
        width: number;
        height: number;
        position:
        | {
            coordinates: LngLatLike | 'auto';
            zoom: number;
            bearing?: number;
            pitch?: number;
        }
        | 'auto';
        overlays?: CustomMarkerOverlay[] | PathOverlay[] | GeoJsonOverlay[];
        highRes?: boolean;
        insertOverlayBeforeLayer?: string;
        attribution?: boolean;
        logo?: boolean;
    }

    interface CustomMarkerOverlay {
        marker: CustomMarker;
    }

    interface CustomMarker {
        coordinates: LngLatLike;
        url: string;
    }

    interface PathOverlay {
        /**
         * An array of coordinates describing the path.
         */
        coordinates: LngLatBoundsLike[];
        strokeWidth?: number;
        strokeColor?: string;
        /**
         * Must be paired with strokeColor.
         */
        strokeOpacity?: number;
        /**
         * Must be paired with strokeColor.
         */
        fillColor?: string;
        /**
         * Must be paired with strokeColor.
         */
        fillOpacity?: number;
    }

    interface GeoJsonOverlay {
        geoJson: GeoJSON.GeoJSON;
    }
}

declare module '@mapbox/mapbox-sdk/services/styles' {
    import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
    import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';

    /*********************************************************************************************************************
    * Style Types
    *********************************************************************************************************************/
    export default function Styles(config: SdkConfig | MapiClient): StylesService;

    interface StylesService {
        /**
         * Get a style.
         * @param styleId
         * @param ownerId
         */
        getStyle(config: { styleId: string; ownerId?: string }): MapiRequest;
        /**
         * Create a style.
         * @param style
         * @param ownerId
         */
        createStyle(config: { style: Style; ownerId?: string }): MapiRequest;
        /**
         * Update a style.
         * @param styleId
         * @param style
         * @param lastKnownModification
         * @param ownerId
         */
        // implicit any
        updateStyle(config: {
            styleId: string;
            style: Style;
            lastKnownModification?: string | number | Date;
            ownerId?: string;
        }): void;
        /**
         * Delete a style.
         * @param style
         * @param ownerId
         */
        deleteStyle(config: { style: Style; ownerId?: string }): MapiRequest;
        /**
         * List styles in your account.
         * @param start
         * @param ownerId
         */
        listStyles(config: { start?: string; ownerId?: string }): MapiRequest;
        /**
         * Add an icon to a style, or update an existing one.
         * @param styleId
         * @param iconId
         * @param file
         * @param ownerId
         */
        putStyleIcon(config: {
            styleId: string;
            iconId: string;
            file: Blob | ArrayBuffer | string;
            ownerId?: string;
        }): MapiRequest;
        /**
         * Remove an icon from a style.
         * @param styleId
         * @param iconId
         * @param ownerId
         */
        // implicit any
        deleteStyleIcon(config: { styleId: string; iconId: string; ownerId?: string }): void;
        /**
         * Get a style sprite's image or JSON document.
         * @param styleId
         * @param format
         * @param highRes
         * @param ownerId
         */
        getStyleSprite(config: {
            styleId: string;
            format?: 'json' | 'png';
            highRes?: boolean;
            ownerId?: string;
        }): MapiRequest;
        /**
         * Get a font glyph range.
         * @param fonts
         * @param start
         * @param end
         * @param ownerId
         */
        getFontGlyphRange(config: { fonts: string[]; start: number; end: number; ownerId?: string }): MapiRequest;
        /**
         * Get embeddable HTML displaying a map.
         * @param config
         * @param styleId
         * @param scrollZoom
         * @param title
         * @param ownerId
         */
        getEmbeddableHtml(config: {
            config: any;
            styleId: string;
            scrollZoom?: boolean;
            title?: boolean;
            ownerId?: string;
        }): MapiRequest;
    }

    interface Style {
        version: number;
        name: string;
        /**
         * Information about the style that is used in Mapbox Studio.
         */
        metadata: string;
        sources: any;
        sprite: string;
        glyphs: string;
        layers: string[];
        /**
         * Date and time the style was created.
         */
        created: string;
        /**
         * The ID of the style.
         */
        id: string;
        /**
         * Date and time the style was last modified.
         */
        modified: string;
        /**
         * The username of the style owner.
         */
        owner: string;
        /**
         * Access control for the style, either  public or  private . Private styles require an access token belonging to the owner,
         * while public styles may be requested with an access token belonging to any user.
         */
        visibility: string;
        /**
         * Whether the style is a draft or has been published.
         */
        draft: boolean;
    }
}

declare module '@mapbox/mapbox-sdk/services/tilequery' {
    import * as mapboxgl from 'mapbox-gl';
    import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
    import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';

    /*********************************************************************************************************************
     * Tile Query (Places) Types
     *********************************************************************************************************************/
    export default function TileQuery(config: SdkConfig | MapiClient): TileQueryService;

    interface TileQueryService {
        /**
         * Get a static map image..
         * @param request
         */
        listFeatures(request: TileQueryRequest): MapiRequest;
    }

    interface TileQueryRequest {
        /**
         * The maps being queried. If you need to composite multiple layers, provide multiple map IDs.
         */
        mapIds: string[];
        /**
         * The longitude and latitude to be queried.
         */
        coordinates: mapboxgl.LngLatLike;
        /**
         * The approximate distance in meters to query for features. (optional, default 0)
         */
        radius: number;
        /**
         * The number of features to return, between 1 and 50. (optional, default 5)
         */
        limit: number;
        /**
         * Whether or not to deduplicate results. (optional, default true)
         */
        dedupe: boolean;
        /**
         * Queries for a specific geometry type.
         */
        geometry: GeometryType;
        layers?: string[];
    }

    type GeometryType = 'polygon' | 'linestring' | 'point';
}

declare module '@mapbox/mapbox-sdk/services/tilesets' {
    import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
    import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';

    /*********************************************************************************************************************
     * Tileset Types
     *********************************************************************************************************************/
    export default function Tilesets(config: SdkConfig | MapiClient): TilesetsService;

    interface TilesetsService {
        listTilesets(config: { ownerId: string }): MapiRequest;
    }

    interface Tileset {
        type: string;
        center: number[];
        created: string;
        description: string;
        filesize: number;
        id: string;
        modified: string;
        name: string;
        visibility: string;
        status: string;
    }
}

declare module '@mapbox/mapbox-sdk/services/tokens' {
    import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
    import { MapiResponse } from '@mapbox/mapbox-sdk/lib/classes/mapi-response';
    import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';

    /*********************************************************************************************************************
     * Token Types
     *********************************************************************************************************************/
    export default function Tokens(config: SdkConfig | MapiClient): TokensService;

    interface TokensService {
        /**
         * List your access tokens.
         */
        listTokens(): MapiRequest;
        /**
         * Create a new access token.
         * @param request
         */
        createToken(request: CreateTokenRequest): MapiRequest;
        /**
         * Create a new temporary access token.
         * @param request
         */
        createTemporaryToken(request: TemporaryTokenRequest): MapiRequest;
        /**
         * Update an access token.
         * @param request
         */
        updateToken(request: UpdateDeleteTokenRequest): MapiRequest;
        /**
         * Get data about the client's access token.
         */
        getToken(): MapiRequest;
        /**
         * Delete an access token.
         * @param request
         */
        deleteToken(request: UpdateDeleteTokenRequest): MapiRequest;
        /**
         * List your available scopes. Each item is a metadata object about the scope, not just the string scope.
         */
        listScopes(): MapiRequest;
    }

    interface Token {
        /**
         * the identifier for the token
         */
        id: string;
        /**
         * the type of token
         */
        usage: string;
        /**
         * the client for the token, always 'api'
         */
        client: string;
        /**
         * if the token is a default token
         */
        default: boolean;
        /**
         * human friendly description of the token
         */
        note: string;
        /**
         * array of scopes granted to the token
         */
        scopes: string[];
        /**
         * date and time the token was created
         */
        created: string;
        /**
         * date and time the token was last modified
         */
        modified: string;
        /**
         * the token itself
         */
        token: string;
    }

    interface CreateTokenRequest {
        note?: string;
        scopes?: string[];
        resources?: string[];
    }

    interface TemporaryTokenRequest {
        expires: string;
        scopes: string[];
    }

    interface UpdateDeleteTokenRequest extends CreateTokenRequest {
        tokenId: string;
    }

    interface TokenDetail {
        code: string;
        token: Token;
    }

    interface Scope {
        id: string;
        public: boolean;
        description: string;
    }
}

declare module '@mapbox/mapbox-sdk/services/uploads' {
    import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
    import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';

    /*********************************************************************************************************************
     * Uploads Types
     *********************************************************************************************************************/
    export default function Uploads(config: SdkConfig | MapiClient): UploadsService;

    interface UploadsService {
        /**
         * List the statuses of all recent uploads.
         * @param config
         */
        listUploads(config: { reverse?: boolean }): MapiRequest;
        /**
         * Create S3 credentials.
         */
        createUploadCredentials(): MapiRequest;
        /**
         * Create an upload.
         * @param config
         */
        createUpload(config: { mapId: string; url: string; tilesetName?: string }): MapiRequest;
        /**
         * Get an upload's status.
         * @param config
         */
        // implicit any
        getUpload(config: { uploadId: string }): any;
        /**
         * Delete an upload.
         * @param config
         */
        // implicit any
        deleteUpload(config: { uploadId: string }): any;
    }

    interface S3Credentials {
        accessKeyId: string;
        bucket: string;
        key: string;
        secretAccessKey: string;
        sessionToken: string;
        url: string;
    }

    interface UploadResponse {
        complete: boolean;
        tileset: string;
        error?: any;
        id: string;
        name: string;
        modified: string;
        created: string;
        owner: string;
        progress: number;
    }
}
