// Type definitions for @google/maps 0.5
// Project: https://github.com/googlemaps/google-maps-services-js
// Definitions by: Indri Muska <https://github.com/indrimuska>
// Definitions: https://github.com/indrimuska/google-maps-api-typings
// TypeScript Version: 2.3

/**
 * Creates a Google Maps client. The client object contains all the API methods.
 */
export interface CreateClientOptions {
    /** API key (required, unless clientID and clientSecret provided). */
    key: string;
    /** Maps API for Work client ID. */
    clientId?: string;
    /** Maps API for Work client secret (a.k.a. private key). */
    clientSecret?: string;
    /** Maps API for Work channel. */
    channel?: string;
    /** Timeout in milliseconds. (Default: 60 * 1000 ms). */
    timeout?: number;
    /** Default language for all queries. */
    language?: Language;
    /** Promise constructor (optional). */
    Promise?: PromiseConstructor;
    /** Rate options. */
    rate?: RateOptions;
    /** Retry options. */
    retryOptions?: RetryOptions;
}

export interface RateOptions {
    /** Controls rate-limiting of requests. Maximum number of requests per period. (Default: 50). */
    limit?: number;
    /** Period for rate limit, in milliseconds. (Default: 1000 ms). */
    period?: number;
}

export interface RetryOptions {
    /** If a transient server error occurs, how long to wait before retrying the request, in milliseconds. (Default: 500 ms). */
    interval?: number;
}

export function createClient(options: CreateClientOptions): GoogleMapsClient;

/**
 * A callback function, which is called asynchronously when an API method completes.
 * The callback is given either:
 *  - a successful `ClientResponse` object; or
 *  - an error, one of:
 *     - the string `"timeout"`; or
 *     - an error from the underlying `http` library; or
 *     - a `ClientResponse` whose status is not `OK`.
 *
 * API methods don't require a callback function, if you use the Promise API.
 */
export type ResponseCallback<T> = (err: 'timeout' | ClientResponse<T>, response: ClientResponse<T>) => void;

/**
 * The object given to the ResponseCallback, containing the HTTP status and headers, as well as the response JSON.
 */
export interface ClientResponse<T> {
    /** The HTTP headers. */
    headers: { [index: string]: string };
    /** Deserialized JSON object for the API response. */
    json: T;
    /** The HTTP status. */
    status: number;
}

/** A handle that allows cancelling a request, or obtaining a Promise. */
export interface RequestHandle<T> {
    /**
     * Returns the response as a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
     * This method is only available if you supplied the `Promise` constructor to the `createClient()` method when you constructed
     * the client object.
     */
    asPromise(): Promise<ClientResponse<T>>;
    /**
     * Cancels the request.
     * The ResponseCallback will not be invoked, and promises will not be settled.
     * Use the RequestHandle#finally handler will still be called.
     */
    cancel(): void;
    /**
     * Registers a callback that will be called when the response is finished, either successfully, or with an error,
     * or having been cancelled. Use this to clean up resources.
     * Returns this handle, for chaining.
     */
    finally(callback: () => void): RequestHandle<T>;
}

export type LatLngArray = [number, number];

export type LatLngString = string;

export interface LatLngLiteral {
    lat: number;
    lng: number;
}

export interface LatLngLiteralVerbose {
    latitude: number;
    longitude: number;
}

/**
 * A latitude, longitude pair. The API methods accept either:
 *  - a two-item array of [latitude, longitude];
 *  - a comma-separated string;
 *  - an object with 'lat', 'lng' properties; or
 *  - an object with 'latitude', 'longitude' properties.
 */
export type LatLng = (
    LatLngArray |
    LatLngString |
    LatLngLiteral |
    LatLngLiteralVerbose
);

/** The bounds parameter defines the latitude/longitude coordinates of the southwest and northeast corners of this bounding box. */
export interface LatLngBounds {
    northeast: LatLngLiteral;
    southwest: LatLngLiteral;
}

/**
 * By default the API will attempt to load the most appropriate language based on the users location or browser settings.
 * Some APIs allow you to explicitly set a language when you make a request
 *
 * @see https://developers.google.com/maps/faq#languagesupport
 */
export type Language = (
    /** Arabic */
    'ar' |
    /** Belarusian */
    'be' |
    /** Bulgarian */
    'bg' |
    /** Bengali */
    'bn' |
    /** Catalan */
    'ca' |
    /** Czech */
    'cs' |
    /** Danish */
    'da' |
    /** German */
    'de' |
    /** Greek */
    'el' |
    /** English */
    'en' |
    /** English (Australian) */
    'en-Au' |
    /** English (Great Britain) */
    'en-GB' |
    /** Spanish */
    'es' |
    /** Basque */
    'eu' |
    /** Farsi */
    'fa' |
    /** Finnish */
    'fi' |
    /** Filipino */
    'fil' |
    /** French */
    'fr' |
    /** Galician */
    'gl' |
    /** Gujarati */
    'gu' |
    /** Hindi */
    'hi' |
    /** Croatian */
    'hr' |
    /** Hungarian */
    'hu' |
    /** Indonesian */
    'id' |
    /** Italian */
    'it' |
    /** Hebrew */
    'iw' |
    /** Japanese */
    'ja' |
    /** Kazakh */
    'kk' |
    /** Kannada */
    'kn' |
    /** Korean */
    'ko' |
    /** Kyrgyz */
    'ky' |
    /** Lithuanian */
    'lt' |
    /** Latvian */
    'lv' |
    /** Macedonian */
    'mk' |
    /** Malayalam */
    'ml' |
    /** Marathi */
    'mr' |
    /** Burmese */
    'my' |
    /** Dutch */
    'nl' |
    /** Norwegian */
    'no' |
    /** Punjabi */
    'pa' |
    /** Polish */
    'pl' |
    /** Portuguese */
    'pt' |
    /** Portuguese (Brazil) */
    'pt-BR' |
    /** Portuguese (Portugal) */
    'pt-PT' |
    /** Romanian */
    'ro' |
    /** Russian */
    'ru' |
    /** Slovak */
    'sk' |
    /** Slovenian */
    'sl' |
    /** Albanian */
    'sq' |
    /** Serbian */
    'sr' |
    /** Swedish */
    'sv' |
    /** Tamil */
    'ta' |
    /** Telugu */
    'te' |
    /** Thai */
    'th' |
    /** Tagalog */
    'tl' |
    /** Turkish */
    'tr' |
    /** Ukrainian */
    'uk' |
    /** Uzbek */
    'uz' |
    /** Vietnamese */
    'vi' |
    /** Chinese (Simlified) */
    'zh-CN' |
    /** Chinese (Traditional) */
    'zh-TW'
);

export type GoogleMapsClientEndpoint<Request, Response> = (query: Request, callback?: ResponseCallback<Response>) => RequestHandle<Response>;

export interface GoogleMapsClient {
    /**
     * The Directions API is a service that calculates directions between locations using an HTTP request.
     *
     * With the Directions API, you can:
     *  - Search for directions for several modes of transportation, including transit, driving, walking or cycling.
     *  - Return multi-part directions using a series of waypoints.
     *  - Specify origins, destinations, and waypoints as text strings
     *    (e.g. "Chicago, IL" or "Darwin, NT, Australia"), or as latitude/longitude coordinates, or as place IDs.
     *
     * The API returns the most efficient routes when calculating directions. Travel time is the primary factor optimized,
     * but the API may also take into account other factors such as distance, number of turns and many more when deciding
     * which route is the most efficient.
     *
     * **Tip:** Calculating directions is a time and resource intensive task. Whenever possible, use the service to calculate
     * known addresses ahead of time and store the results in a
     * [**temporary cache**](https://developers.google.com/maps/documentation/directions/policies#pre-fetching-caching-or-storage-of-content)
     * of your own design.
     *
     * **Note:** This service is not designed to respond in real time to user input. For dynamic directions calculations
     * (for example, within a user interface element), consult the documentation for the
     * [Maps JavaScript API Directions Service](https://developers.google.com/maps/documentation/javascript/directions)
     *
     * @see https://developers.google.com/maps/documentation/directions/intro
     */
    directions: GoogleMapsClientEndpoint<DirectionsRequest, DirectionsResponse>;
    /**
     * The Distance Matrix API is a service that provides travel distance and time for a matrix of origins and destinations.
     * The API returns information based on the recommended route between start and end points, as calculated by the Google Maps API,
     * and consists of rows containing duration and distance values for each pair.
     *
     * @see https://developers.google.com/maps/documentation/distance-matrix/intro
     */
    distanceMatrix: GoogleMapsClientEndpoint<DistanceMatrixRequest, DistanceMatrixResponse>;
    /**
     * The Elevation API provides a simple interface to query locations on the earth for elevation data. With the Elevation API,
     * you can develop hiking and biking applications, positioning applications, or low resolution surveying applications.
     *
     * Elevation data is available for all locations on the surface of the earth, including depth locations on the ocean floor
     * (which return negative values). In those cases where Google does not possess exact elevation measurements at the precise
     * location you request, the service interpolates and returns an averaged value using the four nearest locations.
     * Elevation values are expressed relative to local mean sea level (LMSL).
     *
     * You access the Elevation API through an HTTP interface. Users of the Maps JavaScript API may also access this API directly
     * by using the `ElevationService()` object.
     * (See [Elevation Service](https://developers.google.com/maps/documentation/javascript/elevation) for more information.)
     *
     * @see https://developers.google.com/maps/documentation/elevation/intro
     */
    elevation: GoogleMapsClientEndpoint<ElevationRequest, ElevationResponse>;
    /**
     * You may request sampled elevation data along paths, allowing you to calculate elevation changes along routes.
     * With the Elevation API, you can develop hiking and biking applications, positioning applications,
     * or low resolution surveying applications.
     *
     * @see https://developers.google.com/maps/documentation/elevation/intro
     */
    elevationAlongPath: GoogleMapsClientEndpoint<ElevationAlongPathRequest, ElevationResponse>;
    /**
     * The Places API allows you to query for place information on a variety of categories, such as: establishments,
     * prominent points of interest, geographic locations, and more. You can search for places either by proximity or a text string.
     * A Place Search returns a list of places along with summary information about each place; additional information is available
     * via a [Place Details](https://developers.google.com/places/web-service/details) query.
     *
     * A Find Place request takes a text input, and returns a place.
     * The text input can be any kind of Places data, for example, a name, address, or phone number.
     *
     * @see https://developers.google.com/places/web-service/search#FindPlaceRequests
     */
    findPlace: GoogleMapsClientEndpoint<FindPlaceRequest, FindPlaceFromTextResponse>;
    /**
     * **Geocoding** is the process of converting addresses (like "1600 Amphitheatre Parkway, Mountain View, CA")
     * into geographic coordinates (like latitude 37.423021 and longitude -122.083739),
     * which you can use to place markers on a map, or position the map.
     *
     * **Note:** This service is generally designed for geocoding static (known in advance) addresses for placement
     * of application content on a map; this service is not designed to respond in real time to user input.
     * For dynamic geocoding (for example, within a user interface element), consult the documentation for the
     * [Maps JavaScript API client geocoder](https://developers.google.com/maps/documentation/javascript/geocoding) and/or the
     * [Google Play services Location APIs](https://developer.android.com/google/play-services/location.html).
     *
     * **Tip:** Geocoding is a time and resource intensive task. Whenever possible, pre-geocode known addresses
     * (using the Geocoding API described here or another geocoding service), and store your results in a
     * [**temporary cache**](https://developers.google.com/maps/documentation/geocoding/policies#pre-fetching-caching-or-storage-of-content)
     * of your own design.
     *
     * @see https://developers.google.com/maps/documentation/geocoding/intro#GeocodingRequests
     */
    geocode: GoogleMapsClientEndpoint<GeocodingRequest, GeocodingResponse>;
    /**
     * The Geolocation API returns a location and accuracy radius based on information about cell towers and WiFi nodes
     * that the mobile client can detect. This document describes the protocol used to send this data to the server and
     * to return a response to the client.
     *
     * @see https://developers.google.com/maps/documentation/geolocation/intro
     */
    geolocate: GoogleMapsClientEndpoint<GeolocationRequest, GeolocationResponse>;
    /**
     * The Roads API takes up to 100 independent coordinates, and returns the closest road segment for each point.
     * The points passed do not need to be part of a continuous path.
     *
     * If you are working with sequential GPS points, use [Snap to Roads](https://developers.google.com/maps/documentation/roads/snap).
     *
     * @see https://developers.google.com/maps/documentation/roads/nearest
     */
    nearestRoads: GoogleMapsClientEndpoint<NearestRoadsRequest, NearestRoadsResponse>;
    /**
     * Once you have a `place_id` from a Place Search, you can request more details about a particular establishment
     * or point of interest by initiating a Place Details request. A Place Details request returns more comprehensive
     * information about the indicated place such as its complete address, phone number, user rating and reviews.
     *
     * @see https://developers.google.com/places/web-service/details
     */
    place: GoogleMapsClientEndpoint<PlaceDetailsRequest, PlaceDetailsResponse>;
    /**
     * The Google Places API Text Search Service is a web service that returns information about a set of places
     * based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street".
     * The service responds with a list of places matching the text string and any location bias that has been set.
     *
     * The service is especially useful for making
     * [ambiguous address queries](https://developers.google.com/maps/documentation/geocoding/best-practices) in an automated system,
     * and non-address components of the string may match businesses as well as addresses.
     * Examples of ambiguous address queries are incomplete addresses, poorly formatted addresses,
     * or a request that includes non-address components such as business names.
     *
     * The search response will include a list of places. You can send a Place Details request
     * for more information about any of the places in the response.
     *
     * @see https://developers.google.com/places/web-service/search#TextSearchRequests
     */
    places: GoogleMapsClientEndpoint<PlacesRequest, PlaceSearchResponse>;
    /**
     * The Place Autocomplete service is a web service that returns place predictions in response to an HTTP request.
     * The request specifies a textual search string and optional geographic bounds.
     * The service can be used to provide autocomplete functionality for text-based geographic searches,
     * by returning places such as businesses, addresses and points of interest as a user types.
     *
     * @see https://developers.google.com/places/web-service/autocomplete
     */
    placesAutoComplete: GoogleMapsClientEndpoint<PlaceAutocompleteRequest, PlaceAutocompleteResponse>;
    /**
     * A Nearby Search lets you search for places within a specified area.
     * You can refine your search request by supplying keywords or specifying the type of place you are searching for.
     *
     * @see https://developers.google.com/places/web-service/search#PlaceSearchRequests
     */
    placesNearby: GoogleMapsClientEndpoint<PlacesNearbyRequest, PlaceSearchResponse>;
    /**
     * The Place Photo service, part of the Places API, is a read- only API that allows you to add high quality photographic content
     * to your application. The Place Photo service gives you access to the millions of photos stored in the Places database.
     * When you get place information using a Place Details request, photo references will be returned for relevant photographic content.
     * The Nearby Search and Text Search requests also return a single photo reference per place, when relevant.
     * Using the Photo service you can then access the referenced photos and resize the image to the optimal size for your application.
     *
     * @see https://developers.google.com/places/web-service/photos
     */
    placesPhoto: GoogleMapsClientEndpoint<PlacePhotoRequest, PlacePhotoResponse>;
    /**
     * The Query Autocomplete service can be used to provide a query prediction for text-based geographic searches,
     * by returning suggested queries as you type.
     *
     * The Query Autocomplete service allows you to add on-the-fly geographic query predictions to your application.
     * Instead of searching for a specific location, a user can type in a categorical search, such as "pizza near New York"
     * and the service responds with a list of suggested queries matching the string. As the Query Autocomplete service can match
     * on both full words and substrings, applications can send queries as the user types to provide on-the-fly predictions.
     *
     * @see https://developers.google.com/places/web-service/query
     */
    placesQueryAutoComplete: GoogleMapsClientEndpoint<QueryAutocompleteRequest, QueryAutocompleteResponse>;
    /**
     * The Google Places API Radar Search Service allows you to search for up to 200 places at once,
     * but with less detail than is typically returned from a Text Search or Nearby Search request.
     * With Radar Search, you can create applications that help users identify specific areas of interest within a geographic area.
     *
     * The search response will include up to 200 places, and will include only the following information about each place:
     *  - The `geometry` field containing geographic coordinates.
     *  - The `place_id`, which you can use in a Place Details request to get more information about the place.
     *
     * @deprecated Radar search is deprecated as of June 30, 2018. After that time, this feature will no longer be available.
     *
     * @see https://developers.google.com/places/web-service/search#RadarSearchRequests
     */
    placesRadar: GoogleMapsClientEndpoint<PlaceRadarRequest, PlaceSearchResponse>;
    /**
     * Reverse geocoding is the process of converting geographic coordinates into a human-readable address.
     *
     * @see https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding
     */
    reverseGeocode: GoogleMapsClientEndpoint<ReverseGeocodingRequest, ReverseGeocodingResponse>;
    /**
     * The Roads API returns the posted speed limit for a given road segment.
     * In the case of road segments with variable speed limits, the default speed limit for the segment is returned.
     *
     * The accuracy of speed limit data returned by the Roads API cannot be guaranteed.
     * The speed limit data provided is not real-time, and may be estimated, inaccurate, incomplete, and/or outdated.
     * You may report inaccuracies in our speed limit data by filing a case in the
     * [Google Cloud Support Portal](https://developers.google.com/maps/premium/support#support_portal).
     *
     * @see https://developers.google.com/maps/documentation/roads/speed-limits
     */
    snappedSpeedLimits: GoogleMapsClientEndpoint<SnappedSpeedLimitsRequest, SpeedLimitsResponse>;
    /**
     * The Roads API takes up to 100 GPS points collected along a route, and returns a similar set of data,
     * with the points snapped to the most likely roads the vehicle was traveling along.
     * Optionally, you can request that the points be interpolated, resulting in a path that smoothly follows the geometry of the road.
     *
     * @see https://developers.google.com/maps/documentation/roads/snap
     */
    snapToRoads: GoogleMapsClientEndpoint<SnapToRoadsRequest, SnapToRoadsResponse>;
    /**
     * The Roads API returns the posted speed limit for a given road segment.
     * In the case of road segments with variable speed limits, the default speed limit for the segment is returned.
     *
     * The accuracy of speed limit data returned by the Roads API cannot be guaranteed.
     * The speed limit data provided is not real-time, and may be estimated, inaccurate, incomplete, and/or outdated.
     * You may report inaccuracies in our speed limit data by filing a case in the
     * [Google Cloud Support Portal](https://developers.google.com/maps/premium/support#support_portal).
     *
     * @see https://developers.google.com/maps/documentation/roads/speed-limits
     */
    speedLimits: GoogleMapsClientEndpoint<SpeedLimitsRequest, SpeedLimitsResponse>;
    /**
     * The Time Zone API provides a simple interface to request the time zone for locations on the surface of the earth,
     * as well as the time offset from UTC for each of those locations. You request the time zone information for
     * a specific latitude/longitude pair and date. The API returns the name of that time zone, the time offset from UTC,
     * and the daylight savings offset.
     *
     * @see https://developers.google.com/maps/documentation/timezone/intro
     */
    timezone: GoogleMapsClientEndpoint<TimeZoneRequest, TimeZoneResponse>;
}

export interface DirectionsRequest {
    /**
     * The address, textual latitude/longitude value, or place ID from which you wish to calculate directions.
     *  - If you pass an address, the Directions service geocodes the string and converts it to a latitude/longitude coordinate
     *    to calculate directions. This coordinate may be different from that returned by the Geocoding API, for example a building
     *    entrance rather than its center.
     *
     *    `origin=24+Sussex+Drive+Ottawa+ON`
     *
     *  - If you pass coordinates, they are used unchanged to calculate directions. Ensure that no space exists between the latitude
     *    and longitude values.
     *
     *    `origin=41.43206,-81.38992`
     *
     *  - Place IDs must be prefixed with `place_id:`. The place ID may only be specified if the request includes an API key or a
     *    Google Maps APIs Premium Plan client ID. You can retrieve place IDs from the Geocoding API and the Places SDK
     *    (including Place Autocomplete). For an example using place IDs from Place Autocomplete, see [Place Autocomplete and
     *    Directions](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-directions).
     *
     *    `origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE`
     */
    origin: LatLng;
    /**
     * The address, textual latitude/longitude value, or place ID to which you wish to calculate directions.
     * The options for the `destination` parameter are the same as for the `origin` parameter, described above
     */
    destination: LatLng;
    /**
     * Specifies the mode of transport to use when calculating directions
     *
     * @default TravelMode.driving
     */
    mode?: TravelMode;
    /**
     * Specifies an array of waypoints.
     * Waypoints alter a route by routing it through the specified location(s).
     * A waypoint is specified as a latitude/longitude coordinate, an encoded polyline, a place ID, or an address which will be geocoded.
     * Encoded polylines must be prefixed with `enc:` and followed by a colon (`:`). Place IDs must be prefixed with `place_id:`.
     * The place ID may only be specified if the request includes an API key or a Google Maps APIs Premium Plan client ID.
     * Waypoints are only supported for driving, walking and bicycling directions.
     */
    waypoints?: LatLng[];
    /**
     * If set to `true`, specifies that the Directions service may provide more than one route alternative in the response.
     * Note that providing route alternatives may increase the response time from the server.
     */
    alternatives?: boolean;
    /** Indicates that the calculated route(s) should avoid the indicated features. */
    avoid?: TravelRestriction[];
    /**
     * The language in which to return results.
     *
     *  - If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header,
     *    or the native language of the domain from which the request is sent.
     *  - The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal,
     *    it returns street addresses in the local language, transliterated to a script readable by the user if necessary,
     *    observing the preferred language. All other addresses are returned in the preferred language.
     *    Address components are all returned in the same language, which is chosen from the first component.
     *  - If a name is not available in the preferred language, the API uses the closest match.
     *  - The preferred language has a small influence on the set of results that the API chooses to return,
     *    and the order in which they are returned. The geocoder interprets abbreviations differently depending on language,
     *    such as the abbreviations for street types, or synonyms that may be valid in one language but not in another.
     *    For example, utca and tér are synonyms for street in Hungarian.
     */
    language?: Language;
    /** Specifies the unit system to use when displaying results. */
    units?: UnitSystem;
    /** Specifies the region code, specified as a ccTLD ("top-level domain") two-character value. */
    region?: string;
    /**
     * Specifies the desired time of arrival for transit directions, in seconds since midnight, January 1, 1970 UTC.
     * You can specify either `departure_time` or `arrival_time`, but not both.
     * Note that `arrival_time` must be specified as an integer.
     */
    arrival_time?: Date | number;
    /**
     * Specifies the desired time of departure. You can specify the time as an integer in seconds since midnight, January 1, 1970 UTC.
     * Alternatively, you can specify a value of `now`, which sets the departure time to the current time (correct to the nearest second).
     *
     * The departure time may be specified in two cases:
     *  - For requests where the travel mode is transit: You can optionally specify one of `departure_time` or `arrival_time`.
     *    If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time).
     *  - For requests where the travel mode is driving: You can specify the `departure_time` to receive a route and trip duration
     *    (response field: `duration_in_traffic`) that take traffic conditions into account.
     *    This option is only available if the request contains a valid API key, or a valid Google Maps APIs Premium Plan client ID
     *    and signature. The `departure_time` must be set to the current time or some time in the future. It cannot be in the past.
     */
    departure_time?: Date | number;
    /**
     * Specifies the assumptions to use when calculating time in traffic.
     * This setting affects the value returned in the `duration_in_traffic` field in the response, which contains the predicted time
     * in traffic based on historical averages. The `traffic_model` parameter may only be specified for driving directions
     * where the request includes a `departure_time`, and only if the request includes an API key or a Google Maps APIs Premium Plan client ID.
     *
     * The default value of `best_guess` will give the most useful predictions for the vast majority of use cases.
     * It is possible the `best_guess` travel time prediction may be *shorter* than `optimistic`, or alternatively,
     * *longer* than `pessimistic`, due to the way the `best_guess` prediction model integrates live traffic information.
     *
     * @default TrafficModel.best_guess
     */
    traffic_model?: TrafficModel;
    /**
     * Specifies one or more preferred modes of transit.
     * This parameter may only be specified for transit directions, and only if the request includes an API key or
     * a Google Maps APIs Premium Plan client ID.
     */
    transit_mode?: TransitMode[];
    /**
     * Specifies preferences for transit routes.
     * Using this parameter, you can bias the options returned, rather than accepting the default best route chosen by the API.
     * This parameter may only be specified for transit directions, and only if the request includes an API key or
     * a Google Maps APIs Premium Plan client ID.
     */
    transit_routing_preference?: TransitRoutingPreference;
    /** Wherever to optimize the provided route by rearranging the waypoints in a more efficient order. */
    optimize?: boolean;
}

/**
 * When you calculate directions, you may specify the transportation mode to use.
 * By default, directions are calculated as `driving` directions.
 *
 * **Note:** Both walking and bicycling directions may sometimes not include clear pedestrian or bicycling paths,
 * so these directions will return warnings in the returned result which you must display to the user.
 */
export type TravelMode = (
    /** (default) indicates standard driving directions using the road network. */
    'driving' |
    /** requests walking directions via pedestrian paths & sidewalks (where available). */
    'walking' |
    /** requests bicycling directions via bicycle paths & preferred streets (where available). */
    'bicycling' |
    /**
     * requests directions via public transit routes (where available).
     * If you set the mode to transit, you can optionally specify either a departure_time or an arrival_time.
     * If neither time is specified, the departure_time defaults to now (that is, the departure time defaults to the current time).
     * You can also optionally include a transit_mode and/or a transit_routing_preference.
     */
    'transit'
);

export type TravelRestriction = (
    /** indicates that the calculated route should avoid toll roads/bridges. */
    'tolls' |
    /** indicates that the calculated route should avoid highways. */
    'highways' |
    /** indicates that the calculated route should avoid ferries. */
    'ferries' |
    /**
     * indicates that the calculated route should avoid indoor steps for walking and transit directions.
     * Only requests that include an API key or a Google Maps APIs Premium Plan client ID will receive indoor steps by default.
     */
    'indoor'
);

/**
 * Directions results contain text within distance fields that may be displayed to the user to indicate the distance of
 * a particular "step" of the route. By default, this text uses the unit system of the origin's country or region.
 */
export type UnitSystem = (
    /** specifies usage of the metric system. Textual distances are returned using kilometers and meters. */
    'metric' |
    /** specifies usage of the Imperial (English) system. Textual distances are returned using miles and feet. */
    'imperial'
);

export interface DirectionsResponse {
    /** contains metadata on the request. */
    status: DirectionsReponseStatus;
    /**
     * contains an array with details about the geocoding of origin, destination and waypoints.
     *
     * These details will not be present for waypoints specified as textual latitude/longitude values if the service returns no results.
     * This is because such waypoints are only reverse geocoded to obtain their representative address after a route has been found.
     * An empty JSON object will occupy the corresponding places in the `geocoded_waypoints` array.
     */
    geocoded_waypoints: GeocodedWaypoint[];
    /**
     * contains an array of routes from the origin to the destination.
     *
     * When the Directions API returns results, it places them within a (JSON) `routes` array. Even if the service returns no results
     * (such as if the origin and/or destination doesn't exist) it still returns an empty `routes` array.
     * (XML responses consist of zero or more `<route>` elements.)
     *
     * Each element of the `routes` array contains a single result from the specified origin and destination.
     * This route may consist of one or more `legs` depending on whether any waypoints were specified.
     * As well, the route also contains copyright and warning information which must be displayed to the user in addition to the
     * routing information.
     */
    routes: DirectionsRoute[];
    /**
     * contains an array of available travel modes. This field is returned when a request specifies a travel `mode` and gets no results.
     * The array contains the available travel modes in the countries of the given set of waypoints.
     * This field is not returned if one or more of the waypoints are `via:` waypoints.
     */
    available_travel_modes: string[];
}

export type TrafficModel = (
    /**
     * indicates that the returned `duration_in_traffic` should be the best estimate of travel time given what is known about
     * both historical traffic conditions and live traffic. Live traffic becomes more important the closer the `departure_time` is to now.
     */
    'best_guess' |
    /**
     * indicates that the returned `duration_in_traffic` should be longer than the actual travel time on most days,
     * though occasional days with particularly bad traffic conditions may exceed this value.
     */
    'pessimistic' |
    /**
     * indicates that the returned `duration_in_traffic` should be shorter than the actual travel time on most days,
     * though occasional days with particularly good traffic conditions may be faster than this value.
     */
    'optimistic'
);

export type TransitMode = (
    /** indicates that the calculated route should prefer travel by bus. */
    'bus' |
    /** indicates that the calculated route should prefer travel by subway. */
    'subway' |
    /** indicates that the calculated route should prefer travel by train. */
    'train' |
    /** indicates that the calculated route should prefer travel by tram and light rail. */
    'tram' |
    /**
     * indicates that the calculated route should prefer travel by train, tram, light rail, and subway.
     * This is equivalent to `transit_mode=train|tram|subway`
     */
    'rail'
);

export type TransitRoutingPreference = (
    /** indicates that the calculated route should prefer limited amounts of walking. */
    'less_walking' |
    /** indicates that the calculated route should prefer a limited number of transfers. */
    'fewer_transfers'
);

/**
 * The `status` field within the Directions response object contains the status of the request, and may contain debugging information
 * to help you track down why the Directions service failed.
 */
export type DirectionsReponseStatus = (
    /** indicates the response contains a valid `result`. */
    'OK' |
    /** indicates at least one of the locations specified in the request's origin, destination, or waypoints could not be geocoded. */
    'NOT_FOUND' |
    /** indicates no route could be found between the origin and destination. */
    'ZERO_RESULTS' |
    /**
     * indicates that too many `waypoints` were provided in the request. For applications using the Directions API as a web service,
     * or the [directions service in the Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/directions),
     * the maximum allowed number of `waypoints` is 23, plus the origin and destination.
     */
    'MAX_WAYPOINTS_EXCEEDED' |
    /**
     * indicates the requested route is too long and cannot be processed.
     * This error occurs when more complex directions are returned.
     * Try reducing the number of waypoints, turns, or instructions.
     */
    'MAX_ROUTE_LENGTH_EXCEEDED ' |
    /** indicates that the provided request was invalid. Common causes of this status include an invalid parameter or parameter value. */
    'INVALID_REQUEST' |
    /**
     * indicates any of the following:
     *  - The API key is missing or invalid.
     *  - Billing has not been enabled on your account.
     *  - A self-imposed usage cap has been exceeded.
     *  - The provided method of payment is no longer valid (for example, a credit card has expired).
     * See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) to learn how to fix this.
     */
    'OVER_DAILY_LIMIT' |
    /** indicates the service has received too many requests from your application within the allowed time period. */
    'OVER_QUERY_LIMIT' |
    /** indicates that the service denied use of the directions service by your application. */
    'REQUEST_DENIED' |
    /** indicates a directions request could not be processed due to a server error. The request may succeed if you try again. */
    'UNKNOWN_ERROR'
);

/**
 * Elements in the `geocoded_waypoints` array correspond, by their zero-based position, to the origin,
 * the waypoints in the order they are specified, and the destination.
 */
export interface GeocodedWaypoint {
    /** indicates the status code resulting from the geocoding operation. */
    geocoder_status: GeocodedWaypointStatus;
    /**
     * indicates that the geocoder did not return an exact match for the original request, though it was able to match part of the
     * requested address. You may wish to examine the original request for misspellings and/or an incomplete address.
     *
     * Partial matches most often occur for street addresses that do not exist within the locality you pass in the request.
     * Partial matches may also be returned when a request matches two or more locations in the same locality.
     * For example, "21 Henr St, Bristol, UK" will return a partial match for both Henry Street and Henrietta Street.
     * Note that if a request includes a misspelled address component, the geocoding service may suggest an alternative address.
     * Suggestions triggered in this way will also be marked as a partial match.
     */
    partial_match: boolean;
    /** unique identifier that can be used with other Google APIs. */
    place_id: string;
    /**
     * indicates the *address type* of the geocoding result used for calculating directions.
     *
     * An empty list of types indicates there are no known types for the particular address component, for example, Lieu-dit in France.
     */
    types: AddressType[];
}

export type GeocodedWaypointStatus = (
    /** indicates that no errors occurred; the address was successfully parsed and at least one geocode was returned. */
    'OK' |
    /**
     * indicates that the geocode was successful but returned no results.
     * This may occur if the geocoder was passed a non-existent `address`.
     */
    'ZERO_RESULTS'
);

export type AddressType = (
    /** indicates a precise street address. */
    'street_address' |
    /** indicates a named route (such as "US 101"). */
    'route' |
    /** indicates a major intersection, usually of two major roads. */
    'intersection' |
    /** indicates a political entity. Usually, this type indicates a polygon of some civil administration. */
    'political' |
    /** indicates the national political entity, and is typically the highest order type returned by the Geocoder. */
    'country' |
    /**
     * indicates a first-order civil entity below the country level. Within the United States, these administrative levels are states.
     * Not all nations exhibit these administrative levels. In most cases, `administrative_area_level_1` short names will closely match
     * ISO 3166-2 subdivisions and other widely circulated lists; however this is not guaranteed as our geocoding results are based
     * on a variety of signals and location data.
     */
    'administrative_area_level_1' |
    /**
     * indicates a second-order civil entity below the country level. Within the United States, these administrative levels are counties.
     * Not all nations exhibit these administrative levels.
     */
    'administrative_area_level_2' |
    /**
     * indicates a third-order civil entity below the country level. This type indicates a minor civil division.
     * Not all nations exhibit these administrative levels.
     */
    'administrative_area_level_3' |
    /**
     * indicates a fourth-order civil entity below the country level. This type indicates a minor civil division.
     * Not all nations exhibit these administrative levels.
     */
    'administrative_area_level_4' |
    /**
     * indicates a fifth-order civil entity below the country level. This type indicates a minor civil division.
     * Not all nations exhibit these administrative levels.
     */
    'administrative_area_level_5' |
    /** indicates a commonly-used alternative name for the entity. */
    'colloquial_area' |
    /** indicates an incorporated city or town political entity. */
    'locality' |
    /**
     * indicates a specific type of Japanese locality, to facilitate distinction between multiple locality components within a
     * Japanese address.
     */
    'ward' |
    /**
     * indicates a first-order civil entity below a locality. For some locations may receive one of the additional types:
     * `sublocality_level_1` to `sublocality_level_5`. Each sublocality level is a civil entity. Larger numbers indicate a smaller
     * geographic area.
     */
    'sublocality' |
    /** indicates a named neighborhood */
    'neighborhood' |
    /** indicates a named location, usually a building or collection of buildings with a common name */
    'premise' |
    /**
     * indicates a first-order entity below a named location, usually a singular building within a collection of buildings with a
     * common name.
     */
    'subpremise' |
    /** indicates a postal code as used to address postal mail within the country. */
    'postal_code' |
    /** indicates a prominent natural feature. */
    'natural_feature' |
    /** indicates an airport. */
    'airport' |
    /** indicates a named park. */
    'park' |
    /**
     * indicates a named point of interest. Typically, these "POI"s are prominent local entities that don't easily fit in another category,
     * such as "Empire State Building" or "Statue of Liberty".
     */
    'point_of_interest'
);

/**
 * This route may consist of one or more `legs` depending on whether any waypoints were specified. As well, the route also contains
 * copyright and warning information which must be displayed to the user in addition to the routing information.
 */
export interface DirectionsRoute {
    /** contains a short textual description for the route, suitable for naming and disambiguating the route from alternatives. */
    summary: string;
    /**
     * contains an array which contains information about a leg of the route, between two locations within the given route.
     * A separate leg will be present for each waypoint or destination specified.
     * (A route with no waypoints will contain exactly one leg within the `legs` array.)
     * Each leg consists of a series of `steps`.
     */
    legs: RouteLeg[];
    /**
     * contains an array indicating the order of any waypoints in the calculated route.
     * This waypoints may be reordered if the request was passed `optimize:true` within its `waypoints` parameter.
     */
    waypoint_order: number[];
    /**
     * contains a single `points` object that holds an encoded polyline representation of the route.
     * This polyline is an approximate (smoothed) path of the resulting directions.
     */
    overview_polyline: string;
    /** contains the viewport bounding box of the `overview_polyline`. */
    bounds: LatLngBounds;
    /** contains the copyrights text to be displayed for this route. You must handle and display this information yourself. */
    copyrights: string;
    /** contains an array of warnings to be displayed when showing these directions. You must handle and display these warnings yourself. */
    warnings: string[];
    /**
     * If present, contains the total fare (that is, the total ticket costs) on this route.
     * This property is only returned for transit requests and only for routes where fare information is available for all transit legs.
     *
     * **Note:** The Directions API only returns fare information for requests that contain either an API key or a client ID
     * and digital signature.
     */
    fare: TransitFare;
    /**
     * An array of LatLngs representing the entire course of this route. The path is simplified in order to make
     * it suitable in contexts where a small number of vertices is required (such as Static Maps API URLs).
     */
    overview_path: LatLngLiteral[];
}

export interface TransitFare {
    /** An [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) indicating the currency that the amount is expressed in. */
    currency: string;
    /** The total fare amount, in the currency specified above. */
    value: number;
    /** The total fare amount, formatted in the requested language. */
    text: string;
}

/**
 * A single leg of the journey from the origin to the destination in the calculated route.
 * For routes that contain no waypoints, the route will consist of a single "leg," but for routes that define one or more waypoints,
 * the route will consist of one or more legs, corresponding to the specific legs of the journey.
 */
export interface RouteLeg {
    /** contains an array of steps denoting information about each separate step of the leg of the journey. */
    steps: DirectionsStep[];
    /**
     * indicates the total distance covered by this leg, as a field with the following elements.
     *
     * This field may be absent if the distance is unknown.
     */
    distance: Distance;
    /**
     * indicates the total duration of this leg.
     *
     * This field may be absent if the duration is unknown.
     */
    duration: Duration;
    /**
     * indicates the total duration of this leg.
     * This value is an estimate of the time in traffic based on current and historical traffic conditions.
     * See the `traffic_model` request parameter for the options you can use to request that the returned value is optimistic, pessimistic,
     * or a best-guess estimate. The duration in traffic is returned only if all of the following are true:
     *
     *  - The request includes a valid API key, or a valid Google Maps APIs Premium Plan client ID and signature.
     *  - The request does not include stopover waypoints. If the request includes waypoints, they must be prefixed with `via:`
     *    to avoid stopovers.
     *  - The request is specifically for driving directions—the `mode` parameter is set to `driving`.
     *  - The request includes a `departure_time` parameter.
     *  - Traffic conditions are available for the requested route.
     */
    duration_in_traffic: Duration;
    /** contains the estimated time of arrival for this leg. This property is only returned for transit directions. */
    arrival_time: Time;
    /**
     * contains the estimated time of departure for this leg, specified as a `Time` object.
     * The `departure_time` is only available for transit directions.
     */
    departure_time: Time;
    /**
     * contains the latitude/longitude coordinates of the origin of this leg.
     * Because the Directions API calculates directions between locations by using the nearest transportation option (usually a road)
     * at the start and end points, `start_location` may be different than the provided origin of this leg if, for example,
     * a road is not near the origin.
     */
    start_location: LatLngLiteral;
    /**
     * contains the latitude/longitude coordinates of the given destination of this leg.
     * Because the Directions API calculates directions between locations by using the nearest transportation option (usually a road)
     * at the start and end points, `end_location` may be different than the provided destination of this leg if, for example,
     * a road is not near the destination.
     */
    end_location: LatLngLiteral;
    /** contains the human-readable address (typically a street address) resulting from reverse geocoding the `start_location` of this leg. */
    start_address: string;
    /** contains the human-readable address (typically a street address) from reverse geocoding the `end_location` of this leg. */
    end_address: string;
}

/**
 * A step is the most atomic unit of a direction's route, containing a single step describing a specific, single instruction on the journey.
 * E.g. "Turn left at W. 4th St." The step not only describes the instruction but also contains distance and duration information relating to
 * how this step relates to the following step. For example, a step denoted as "Merge onto I-80 West" may contain a duration of
 * "37 miles" and "40 minutes," indicating that the next step is 37 miles/40 minutes from this step.
 *
 * When using the Directions API to search for transit directions, the steps array will include additional transit details in the form of
 * a `transit_details` array. If the directions include multiple modes of transportation, detailed directions will be provided for walking or
 * driving steps in an inner `steps` array. For example, a walking step will include directions from the start and end locations:
 * "Walk to Innes Ave & Fitch St". That step will include detailed walking directions for that route in the inner `steps` array, such as:
 * "Head north-west", "Turn left onto Arelious Walker", and "Turn left onto Innes Ave".
 */
export interface DirectionsStep {
    /** contains formatted instructions for this step, presented as an HTML text string. */
    html_instructions: string;
    /**
     * contains the distance covered by this step until the next step. (See the discussion of this field in Directions Legs)
     *
     * This field may be undefined if the distance is unknown.
     */
    distance: Distance;
    /**
     * contains the typical time required to perform the step, until the next step. (See the description in Directions Legs)
     *
     * This field may be undefined if the duration is unknown
     */
    duration: Duration;
    /** contains the location of the starting point of this step, as a single set of `lat` and `lng` fields. */
    start_location: LatLngLiteral;
    /** contains the location of the last point of this step, as a single set of `lat` and `lng` fields. */
    end_location: LatLngLiteral;
    /**
     * contains the action to take for the current step (turn left, merge, straight, etc.).
     * This field is used to determine which icon to display.
     */
    maneuver: Maneuver;
    /**
     * contains a single points object that holds an encoded polyline representation of the step.
     * This polyline is an approximate (smoothed) path of the step.
     */
    polyline: string;
    /**
     * contains detailed directions for walking or driving steps in transit directions.
     * Substeps are only available when `travel_mode` is set to "transit".
     * The inner `steps` array is of the same type as `steps`.
     */
    steps: DirectionsStep;
    /** contains transit specific information. This field is only returned with travel_mode is set to "transit". */
    transit_details: TransitDetails;
}

export interface Distance {
    /** indicates the distance in meters. */
    value: number;
    /**
     * contains a human-readable representation of the distance, displayed in units as used at the origin
     * (or as overridden within the `units` parameter in the request).
     * (For example, miles and feet will be used for any origin within the United States.)
     */
    text: string;
}

export interface Duration {
    /** indicates the duration in seconds. */
    value: number;
    /** contains a human-readable representation of the duration. */
    text: string;
}

export interface Time {
    /** the time specified as a JavaScript `Date` object. */
    value: Date;
    /** the time specified as a string. The time is displayed in the time zone of the transit stop. */
    text: string;
    /**
     * contains the time zone of this station. The value is the name of the time zone as defined in the
     * [IANA Time Zone Database](http://www.iana.org/time-zones), e.g. "America/New_York".
     */
    time_zone: string;
}

export type Maneuver = (
    'turn-slight-left' |
    'turn-sharp-left' |
    'uturn-left' |
    'turn-left' |
    'turn-slight-right' |
    'turn-sharp-right' |
    'uturn-right' |
    'turn-right' |
    'straight' |
    'ramp-left' |
    'ramp-right' |
    'merge' |
    'fork-left' |
    'fork-right' |
    'ferry' |
    'ferry-train' |
    'roundabout-left' |
    'roundabout-right'
);

/**
 * Transit directions return additional information that is not relevant for other modes of transportation.
 * These additional properties are exposed through the `transit_details` object, returned as a field of an element in the `steps[]` array.
 * From the `TransitDetails` object you can access additional information about the transit stop, transit line and transit agency
 */
export interface TransitDetails {
    /** contains information about the stop for this part of the trip. */
    arrival_stop: TransitStop;
    /** contains information about the station for this part of the trip. */
    departure_stop: TransitStop;
    /** contain the arrival time for this leg of the journey. */
    arrival_time: Time;
    /** contain the departure time for this leg of the journey. */
    departure_time: Time;
    /**
     * specifies the direction in which to travel on this line, as it is marked on the vehicle or at the departure stop.
     * This will often be the terminus station.
     */
    headsign: string;
    /**
     * specifies the expected number of seconds between departures from the same stop at this time.
     * For example, with a `headway` value of 600, you would expect a ten minute wait if you should miss your bus.
     */
    headway: number;
    /**
     * contains the number of stops in this step, counting the arrival stop, but not the departure stop.
     * For example, if your directions involve leaving from Stop A, passing through stops B and C, and arriving at stop D,
     * `num_stops` will return 3.
     */
    num_stops: number;
    /** contains information about the transit line used in this step. */
    line: TransitLine;
}

export interface TransitStop {
    /** the name of the transit station/stop. eg. "Union Square". */
    name: string;
    /** the location of the transit station/stop, represented as a `lat` and `lng` field. */
    location: LatLngLiteral;
}

export interface TransitLine {
    /** contains the full name of this transit line. eg. "7 Avenue Express". */
    name: string;
    /** contains the short name of this transit line. This will normally be a line number, such as "M7" or "355". */
    short_name: string;
    /** contains the color commonly used in signage for this transit line. The color will be specified as a hex string such as: #FF0033. */
    color: string;
    /**
     * is an array containing a single `TransitAgency` object.
     * The `TransitAgency` object provides information about the operator of the line
     */
    agencies: TransitAgency[];
    /** contains the URL for this transit line as provided by the transit agency. */
    url: string;
    /** contains the URL for the icon associated with this line. */
    icon: string;
    /** contains the color of text commonly used for signage of this line. The color will be specified as a hex string. */
    text_color: string;
    /** contains the type of vehicle used on this line. */
    vehicle: TransitVehicle;
}

/** You must display the names and URLs of the transit agencies servicing the trip results. */
export interface TransitAgency {
    /** contains the name of the transit agency. */
    name: string;
    /** contains the phone number of the transit agency. */
    phone: string;
    /** contains the URL for the transit agency. */
    url: string;
}

export interface TransitVehicle {
    /** contains the name of the vehicle on this line. eg. "Subway.". */
    name: string;
    /** contains the type of vehicle that runs on this line. */
    type: VehicleType;
    /** contains the URL for an icon associated with this vehicle type. */
    icon: string;
    /** contains the URL for the icon associated with this vehicle type, based on the local transport signage. */
    local_icon: string;
}

/** @see https://developers.google.com/maps/documentation/directions/intro#VehicleType. */
export type VehicleType = (
    /** Rail. */
    'RAIL' |
    /** Light rail transit. */
    'METRO_RAIL' |
    /** Underground light rail. */
    'SUBWAY' |
    /** Above ground light rail. */
    'TRAM' |
    /** Monorail. */
    'MONORAIL' |
    /** Heavy rail. */
    'HEAVY_RAIL' |
    /** Commuter rail. */
    'COMMUTER_TRAIN' |
    /** High speed train. */
    'HIGH_SPEED_TRAIN' |
    /** Bus. */
    'BUS' |
    /** Intercity bus. */
    'INTERCITY_BUS' |
    /** Trolleybus. */
    'TROLLEYBUS' |
    /** Share taxi is a kind of bus with the ability to drop off and pick up passengers anywhere on its route. */
    'SHARE_TAXI' |
    /** Ferry. */
    'FERRY' |
    /** A vehicle that operates on a cable, usually on the ground. Aerial cable cars may be of the type `GONDOLA_LIFT`. */
    'CABLE_CAR' |
    /** An aerial cable car. */
    'GONDOLA_LIFT' |
    /**
     * A vehicle that is pulled up a steep incline by a cable.
     * A Funicular typically consists of two cars, with each car acting as a counterweight for the other.
     */
    'FUNICULAR' |
    /** All other vehicles will return this type. */
    'OTHER'
);

export interface DistanceMatrixRequest {
    /**
     * The starting point for calculating travel distance and time.
     * You can supply one or more locations separated by the pipe character (`|`), in the form of an address, latitude/longitude coordinates,
     * or a place ID:
     *  - If you pass an address, the service geocodes the string and converts it to a latitude/longitude coordinate to calculate distance.
     *    This coordinate may be different from that returned by the Geocoding API, for example a building entrance rather than its center.
     *
     *    `origins=Bobcaygeon+ON|24+Sussex+Drive+Ottawa+ON`
     *
     *  - If you pass latitude/longitude coordinates, they are used unchanged to calculate distance.
     *    Ensure that no space exists between the latitude and longitude values.
     *
     *    `origins=41.43206,-81.38992|-33.86748,151.20699`
     *
     *  - If you supply a place ID, you must prefix it with `place_id:`.
     *    You can only specify a place ID if the request includes an API key or a Google Maps APIs Premium Plan client ID.
     *    You can retrieve place IDs from the Geocoding API and the Places SDK (including Place Autocomplete).
     *
     *    `origins=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE`
     *
     *  - Alternatively, you can supply an encoded set of coordinates using the
     *    [Encoded Polyline Algorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm).
     *    This is particularly useful if you have a large number of origin points, because the URL is significantly shorter when using
     *    an encoded polyline.
     *
     *     - Encoded polylines must be prefixed with `enc:` and followed by a colon (`:`). For example: `origins=enc:gfo}EtohhU:`
     *     - You can also include multiple encoded polylines, separated by the pipe character (`|`).
     *       For example: `origins=enc:wc~oAwquwMdlTxiKtqLyiK:|enc:c~vnAamswMvlTor@tjGi}L:|enc:udymA{~bxM:`
     */
    origins: LatLng[];
    /**
     * One or more locations to use as the finishing point for calculating travel distance and time.
     * The options for the destinations parameter are the same as for the origins parameter, described above.
     */
    destinations: LatLng[];
    /**
     * Specifies the mode of transport to use when calculating distance.
     * Valid values and other request details are specified in the Travel Modes section of this document.
     *
     * @default TravelMode.driving
     */
    mode?: TravelMode;
    /**
     * The language in which to return results.
     *  - If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header,
     *    or the native language of the domain from which the request is sent.
     *  - The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal,
     *    it returns street addresses in the local language, transliterated to a script readable by the user if necessary,
     *    observing the preferred language. All other addresses are returned in the preferred language.
     *    Address components are all returned in the same language, which is chosen from the first component.
     *  - If a name is not available in the preferred language, the API uses the closest match.
     *  - The preferred language has a small influence on the set of results that the API chooses to return,
     *    and the order in which they are returned. The geocoder interprets abbreviations differently depending on language,
     *    such as the abbreviations for street types, or synonyms that may be valid in one language but not in another.
     *    For example, utca and tér are synonyms for street in Hungarian.
     */
    language?: string;
    /**
     * The region code, specified as a [ccTLD](https://en.wikipedia.org/wiki/CcTLD) (country code top-level domain) two-character value.
     * Most ccTLD codes are identical to ISO 3166-1 codes, with some exceptions.
     * This parameter will only influence, not fully restrict, results from the geocoder.
     * If more relevant results exist outside of the specified region, they may be included.
     */
    region?: string;
    /**
     * Introduces restrictions to the route. Valid values are specified in the Restrictions section of this document.
     * Only one restriction can be specified.
     */
    avoid?: TravelRestriction[];
    /** Specifies the unit system to use when expressing distance as text. */
    units?: UnitSystem;
    /**
     * Specifies the desired time of arrival for transit requests, in seconds since midnight, January 1, 1970 UTC.
     * You can specify either `departure_time` or `arrival_time`, but not both.
     * Note that `arrival_time` must be specified as an integer.
     */
    arrival_time?: Date | number;
    /**
     * The desired time of departure. You can specify the time as an integer in seconds since midnight, January 1, 1970 UTC.
     * Alternatively, you can specify a value of now, which sets the departure time to the current time (correct to the nearest second).
     *
     * The departure time may be specified in two cases:
     *
     *  - For requests where the travel mode is transit: You can optionally specify one of `departure_time` or `arrival_time`.
     *    If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time).
     *
     *  - For requests where the travel mode is driving: You can specify the `departure_time` to receive a route and trip duration
     *    (response field: `duration_in_traffic`) that take traffic conditions into account.
     *    This option is only available if the request contains a valid API key, or a valid
     *    Google Maps APIs Premium Plan client ID and signature.
     *    The `departure_time` must be set to the current time or some time in the future. It cannot be in the past.
     *
     *    **Note:** Distance Matrix requests specifying `departure_time` when `mode=driving` are limited
     *    to a maximum of 100 elements per request. The number of origins times the number of destinations defines the number of elements.
     */
    departure_time?: Date | number;
    /**
     * Specifies the assumptions to use when calculating time in traffic.
     * This setting affects the value returned in the `duration_in_traffic` field in the response,
     * which contains the predicted time in traffic based on historical averages.
     * The `traffic_model` parameter may only be specified for requests where the travel mode is `driving`,
     * and where the request includes a `departure_time`, and only if the request includes an API key or
     * a Google Maps APIs Premium Plan client ID.
     *
     * @default TrafficModel.best_guess
     */
    traffic_model?: TrafficModel;
    /** Specifies one or more preferred modes of transit. This parameter may only be specified for requests where the `mode` is `transit`. */
    transit_mode?: TransitMode[];
    /**
     * Specifies preferences for transit requests. Using this parameter, you can bias the options returned,
     * rather than accepting the default best route chosen by the API.
     * This parameter may only be specified for requests where the `mode` is `transit`.
     */
    transit_routing_preference?: TransitRoutingPreference;
}

export interface DistanceMatrixResponse {
    /** contains metadata on the request. See Status Codes below. */
    status: DistanceMatrixResponseTopLevelStatus;
    /**
     * When the top-level status code is other than `OK`, this field contains more detailed information
     * about the reasons behind the given status code.
     */
    error_message: string;
    /**
     * contains an array of addresses as returned by the API from your original request.
     * These are formatted by the geocoder and localized according to the language parameter passed with the request.
     */
    origin_addresses: string;
    /**
     * contains an array of addresses as returned by the API from your original request.
     * As with origin_addresses, these are localized if appropriate.
     */
    destination_addresses: string[];
    /** contains an array of elements, which in turn each contain a status, duration, and distance element. */
    rows: DistanceMatrixRow[];
}

/**
 * The status fields within the response object contain the status of the request, and may contain useful debugging information.
 * The Distance Matrix API returns a top-level status field, with information about the request in general,
 * as well as a status field for each element field, with information about that particular origin-destination pairing.
 */
export type DistanceMatrixResponseTopLevelStatus = (
    /** indicates the response contains a valid result. */
    'OK' |
    /** indicates that the provided request was invalid. */
    'INVALID_REQUEST' |
    /** indicates that the product of origins and destinations exceeds the per-query limit. */
    'MAX_ELEMENTS_EXCEEDED' |
    /**
     * indicates any of the following:
     *  - The API key is missing or invalid.
     *  - Billing has not been enabled on your account.
     *  - A self-imposed usage cap has been exceeded.
     *  - The provided method of payment is no longer valid (for example, a credit card has expired).
     * See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) to learn how to fix this.
     */
    'OVER_DAILY_LIMIT' |
    /** indicates the service has received too many requests from your application within the allowed time period. */
    'OVER_QUERY_LIMIT' |
    /** indicates that the service denied use of the Distance Matrix service by your application. */
    'REQUEST_DENIED' |
    /** indicates a Distance Matrix request could not be processed due to a server error. The request may succeed if you try again. */
    'UNKNOWN_ERROR'
);

export type DistanceMatrixResponseElementLevelStatus = (
    /** indicates the response contains a valid result. */
    'OK' |
    /** indicates that the origin and/or destination of this pairing could not be geocoded. */
    'NOT_FOUND' |
    /** indicates no route could be found between the origin and destination. */
    'ZERO_RESULTS' |
    /** indicates the requested route is too long and cannot be processed. */
    'MAX_ROUTE_LENGTH_EXCEEDED'
);

/**
 * When the Distance Matrix API returns results, it places them within a JSON `rows` array.
 * Even if no results are returned (such as when the origins and/or destinations don't exist), it still returns an empty array.
 * XML responses consist of zero or more `<row>` elements.
 *
 * Rows are ordered according to the values in the `origin` parameter of the request.
 * Each row corresponds to an origin, and each `element` within that row corresponds to a pairing of the origin with a `destination` value.
 *
 * Each `row` array contains one or more `element` entries, which in turn contain the information about a single origin-destination pairing.
 */
export interface DistanceMatrixRow {
    elements: DistanceMatrixRowElement[];
}

/** The information about each origin-destination pairing is returned in an `element` entry. */
export interface DistanceMatrixRowElement {
    /** possible status codes  */
    status: DistanceMatrixResponseElementLevelStatus;
    /**
     * The length of time it takes to travel this route, expressed in seconds (the `value` field) and as `text`.
     * The textual representation is localized according to the query's `language` parameter.
     */
    duration: Duration;
    /**
     * The length of time it takes to travel this route, based on current and historical traffic conditions.
     * See the `traffic_model` request parameter for the options you can use to request that the returned value is
     * `optimistic`, `pessimistic`, or a `best-guess` estimate. The duration is expressed in seconds (the `value` field) and as `text`.
     * The textual representation is localized according to the query's `language` parameter.
     * The duration in traffic is returned only if all of the following are true:
     *  - The request includes a `departure_time` parameter.
     *  - The request includes a valid API key, or a valid Google Maps APIs Premium Plan client ID and signature.
     *  - Traffic conditions are available for the requested route.
     *  - The `mode` parameter is set to `driving`.
     */
    duration_in_traffic: Duration;
    /**
     * The total distance of this route, expressed in meters (`value`) and as `text`.
     * The textual value uses the `unit` system specified with the unit parameter of the original request, or the origin's region.
     */
    distance: Distance;
    /**
     * If present, contains the total fare (that is, the total ticket costs) on this route.
     * This property is only returned for transit requests and only for transit providers where fare information is available.
     */
    fare: TransitFare;
}

export interface ElevationRequest {
    /**
     * defines the location(s) on the earth from which to return elevation data.
     * This parameter takes either a single location as a comma-separated {latitude,longitude} pair (e.g. "40.714728,-73.998672")
     * or multiple latitude/longitude pairs passed as an array or as an encoded polyline.
     */
    locations: LatLng[];
}

export interface ElevationResponse {
    /** An Elevation status code. */
    status: ElevationResponseStatus;
    /**
     * When the status code is other than `OK`, there may be an additional `error_message` field within the Elevation response object.
     * This field contains more detailed information about the reasons behind the given status code.
     */
    error_message: string;
    /** An Elevation results array. */
    results: ElevationResult[];
}

export type ElevationResponseStatus = (
    /** indicating the API request was successful. */
    'OK' |
    /** indicating the API request was malformed. */
    'INVALID_REQUEST' |
    /**
     * indicating any of the following:
     * The API key is missing or invalid.
     *  - Billing has not been enabled on your account.
     *  - A self-imposed usage cap has been exceeded.
     *  - The provided method of payment is no longer valid (for example, a credit card has expired).
     * See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) to learn how to fix this.
     */
    'OVER_DAILY_LIMIT' |
    /** indicating the requestor has exceeded quota. */
    'OVER_QUERY_LIMIT' |
    /** indicating the API did not complete the request. */
    'REQUEST_DENIED' |
    /** indicating an unknown error. */
    'UNKNOWN_ERROR'
);

export interface ElevationResult {
    /**
     * A `location` element (containing `lat` and `lng` elements) of the position for which elevation data is being computed.
     * Note that for path requests, the set of `location` elements will contain the sampled points along the path.
     */
    location: LatLngLiteral;
    /** An `elevation` element indicating the elevation of the location in meters. */
    elevation: number;
    /**
     * A `resolution` value, indicating the maximum distance between data points from which the elevation was interpolated, in meters.
     * This property will be missing if the resolution is not known.
     * Note that elevation data becomes more coarse (larger `resolution` values) when multiple points are passed.
     * To obtain the most accurate elevation value for a point, it should be queried independently.
     */
    resolution: number;
}

export interface ElevationAlongPathRequest {
    /**
     * defines a path on the earth for which to return elevation data.
     * This parameter defines a set of two or more ordered {latitude,longitude} pairs defining a path along the surface of the earth.
     */
    path: LatLng[] | string;
    /**
     * specifies the number of sample points along a path for which to return elevation data.
     * The samples parameter divides the given path into an ordered set of equidistant points along the path.
     */
    samples: number;
}

export interface FindPlaceRequest {
    /** The text input specifying which place to search for (for example, a name, address, or phone number). */
    input: string;
    /** The type of input. This can be one of either `textquery` or `phonenumber`. */
    inputtype: 'textquery' | 'phonenumber';
    /**
     * The language code, indicating in which language the results should be returned, if possible.
     * Searches are also biased to the selected language; results in the selected language may be given a higher ranking
     */
    language?: Language;
    /**
     * The fields specifying the types of place data to return.
     *
     * **Note:** If you omit the fields parameter from a Find Place request, only the place_id for the result will be returned.
     */
    fields?: Array<keyof PlaceSearchResult>;
    /**
     * Prefer results in a specified area, by specifying either a radius plus lat/lng, or two lat/lng pairs representing
     * the points of a rectangle. If this parameter is not specified, the API uses IP address biasing by default.
     */
    locationbias?: string;
}

/** A Find Place response contains only the data types that were specified using the fields parameter, plus `html_attributions`. */
export interface FindPlaceFromTextResponse {
    status: SearchResponseStatus;
    candidates: Array<Partial<PlaceSearchResult>>;
}

export interface PlaceSearchResponse {
    /** contains metadata on the request. */
    status: SearchResponseStatus;
    /**
     * When the Google Places service returns a status code other than `OK`, there may be an additional `error_message` field
     * within the search response object. This field contains more detailed information about the reasons behind the given status code.
     */
    error_message: string;
    /**
     * contains an array of places, with information about each.
     * The Places API returns up to 20 `establishment` results per query.
     * Additionally, political results may be returned which serve to identify the area of the request.
     */
    results: PlaceSearchResult[];
    /** may contain a set of attributions about this listing which must be displayed to the user (some listings may not have attribution). */
    html_attributions: string[];
    /**
     * contains a token that can be used to return up to 20 additional results.
     * A `next_page_token` will not be returned if there are no additional results to display.
     * The maximum number of results that can be returned is 60.
     * There is a short delay between when a `next_page_token` is issued, and when it will become valid.
     */
    next_page_token: string;
}

/**
 * The `"status"` field within the search response object contains the status of the request,
 * and may contain debugging information to help you track down why the request failed.
 */
export type SearchResponseStatus = (
    /** indicates that no errors occurred; the place was successfully detected and at least one result was returned. */
    'OK' |
    /**
     * indicates that the search was successful but returned no results.
     * This may occur if the search was passed a latlng in a remote location.
     */
    'ZERO_RESULTS' |
    /** indicates that you are over your quota. */
    'OVER_QUERY_LIMIT' |
    /** indicates that your request was denied, generally because of lack of an invalid key parameter. */
    'REQUEST_DENIED' |
    /** generally indicates that a required query parameter (location or radius) is missing. */
    'INVALID_REQUEST' |
    /** indicates a server-side error; trying again may be successful. */
    'UNKNOWN_ERROR'
);

/**
 * When the Google Places service returns JSON results from a search, it places them within a `results` array.
 * Even if the service returns no results (such as if the `location` is remote) it still returns an empty `results` array.
 * XML responses consist of zero or more `<result>` elements.
 */
export interface PlaceSearchResult {
    /** contains the URL of a recommended icon which may be displayed to the user when indicating this result. */
    icon: string;
    /**
     * contains geometry information about the result, generally including the `location` (geocode)
     * of the place and (optionally) the viewport identifying its general area of coverage
     */
    geometry: AddressGeometry;
    /**
     * is an encoded location reference, derived from latitude and longitude coordinates, that represents an area:
     * 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or smaller.
     * Plus codes can be used as a replacement for street addresses in places where they do not exist
     * (where buildings are not numbered or streets are not named).
     *
     * The plus code is formatted as a global code and a compound code:
     *  - `global_code` is a 4 character area code and 6 character or longer local code (849VCWC8+R9).
     *  - `compound_code` is a 6 character or longer local code with an explicit location (CWC8+R9, Mountain View, CA, USA).
     *
     * Typically, both the global code and compound code are returned.
     * However, if the result is in a remote location (for example, an ocean or desert) only the global code may be returned.
     *
     * @see [Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)
     * @see [plus codes](https://plus.codes/)
     */
    plus_code: PlusCode;
    /** contains the human-readable name for the returned result. For `establishment` results, this is usually the business name. */
    name: string;
    /** information on the opening hours. */
    opening_hours: OpeningHours;
    /**
     * an array of `photo` objects, each containing a reference to an image.
     * A Place Search will return at most one `photo` object.
     * Performing a Place Details request on the place may return up to ten photos.
     * More information about Place Photos and how you can use the images in your application can be found in the
     * [Place Photos](https://developers.google.com/places/web-service/photos) documentation.
     */
    photos: PlacePhoto[];
    /**
     * a textual identifier that uniquely identifies a place.
     * To retrieve information about the place, pass this identifier in the `placeId` field of a Places API request
     */
    place_id: string;
    /**
     * Indicates the scope of the `place_id`.
     *
     * **Note:** The `scope` field is included only in Nearby Search results and Place Details results.
     * You can only retrieve app-scoped places via the Nearby Search and the Place Details requests.
     * If the `scope` field is not present in a response, it is safe to assume the scope is `GOOGLE`.
     */
    scope: PlaceIdScope;
    /**
     * An array of zero, one or more alternative place IDs for the place, with a scope related to each alternative ID.
     * Note: This array may be empty or not present.
     */
    alt_ids: AlternativePlaceId[];
    /**
     * The price level of the place, on a scale of 0 to 4.
     * The exact amount indicated by a specific value will vary from region to region.
     *
     * Price levels are interpreted as follows:
     *  - `0`: Free
     *  - `1`: Inexpensive
     *  - `2`: Moderate
     *  - `3`: Expensive
     *  - `4`: Very Expensive
     */
    price_level: number;
    /** contains the place's rating, from 1.0 to 5.0, based on aggregated user reviews. */
    rating: number;
    /**
     * contains an array of feature types describing the given result.
     * XML responses include multiple `<type>` elements if more than one type is assigned to the result.
     */
    types: Array<PlaceType1 | PlaceType2>;
    /**
     * contains a feature name of a nearby location. Often this feature refers to a street or neighborhood within the given results.
     * The `vicinity` property is only returned for a Nearby Search.
     */
    vicinity: number;
    /**
     * is a string containing the human-readable address of this place. Often this address is equivalent to the "postal address".
     * The `formatted_address` property is only returned for a Text Search.
     */
    formatted_address: string;
    /**
     * is a boolean flag indicating whether the place has permanently shut down (value `true`).
     * If the place is not permanently closed, the flag is absent from the response.
     */
    permanently_closed: boolean;
}

export interface OpeningHours {
    /** is a boolean value indicating if the place is open at the current time. */
    open_now: boolean;
    /** is an array of opening periods covering seven days, starting from Sunday, in chronological order. */
    periods: OpeningPeriod[];
}

export interface OpeningPeriod {
    /** contains a pair of day and time objects describing when the place opens. */
    open: OpeningHoursTime;
    /**
     * may contain a pair of day and time objects describing when the place closes.
     * **Note:** If a place is **always open**, the `close` section will be missing from the response.
     * Clients can rely on always-open being represented as an `open` period containing `day` with value 0
     * and `time` with value 0000, and no `close`.
     */
    close?: OpeningHoursTime;
    /**
     * is an array of seven strings representing the formatted opening hours for each day of the week.
     * If a `language` parameter was specified in the Place Details request, the Places Service will format
     * and localize the opening hours appropriately for that language. The ordering of the elements in this array
     * depends on the `language` parameter. Some languages start the week on Monday while others start on Sunday.
     */
    weekday_text: string[];
}

export interface OpeningHoursTime {
    /** a number from 0–6, corresponding to the days of the week, starting on Sunday. For example, 2 means Tuesday. */
    day: number;
    /**
     *  may contain a time of day in 24-hour hhmm format. Values are in the range 0000–2359. The `time`
     * will be reported in the place's time zone.
     */
    time?: string;
}

/**
 * All requests to the Place Photo service must include a `photoreference`, returned in the response to a Nearby Search,
 * Text Search, or Place Details request. The response to these requests will contain a photos[] field if the place has related
 * photographic content.
 *
 * **Note:** The number of photos returned varies by request.
 *  - A Nearby Search or a Text Search will return at most one photo element in the array.
 *  - Radar Searches do not return any photo information.
 *  - A Details request will return up to ten photo elements.
 */
export interface PlacePhoto {
    /** a string used to identify the photo when you perform a Photo request. */
    photo_reference: string;
    /** the maximum height of the image. */
    height: number;
    /** the maximum width of the image. */
    width: number;
    /** contains any required attributions. This field will always be present, but may be empty. */
    html_attributions: string[];
}

export type PlaceIdScope = (
    /**
     * The place ID is recognised by your application only.
     * This is because your application added the place, and the place has not yet passed the moderation process.
     */
    'APP' |
    /** The place ID is available to other applications and on Google Maps. */
    'GOOGLE'
);

export interface AlternativePlaceId {
    /**
     * The most likely reason for a place to have an alternative place ID is if your application adds a place and receives
     * an application-scoped place ID, then later receives a Google-scoped place ID after passing the moderation process.
     */
    place_id: string;
    /**
     * The scope of an alternative place ID will always be `APP`,
     * indicating that the alternative place ID is recognised by your application only.
     */
    scope: 'APP';
}

/**
 * Table 1: Types supported in place search and addition
 *
 * You can use the following values in the types filter for place searches and when adding a place.
 *
 * @see https://developers.google.com/places/web-service/supported_types#table1
 */
export type PlaceType1 = (
    'accounting' |
    'airport' |
    'amusement_park' |
    'aquarium' |
    'art_gallery' |
    'atm' |
    'bakery' |
    'bank' |
    'bar' |
    'beauty_salon' |
    'bicycle_store' |
    'book_store' |
    'bowling_alley' |
    'bus_station' |
    'cafe' |
    'campground' |
    'car_dealer' |
    'car_rental' |
    'car_repair' |
    'car_wash' |
    'casino' |
    'cemetery' |
    'church' |
    'city_hall' |
    'clothing_store' |
    'convenience_store' |
    'courthouse' |
    'dentist' |
    'department_store' |
    'doctor' |
    'electrician' |
    'electronics_store' |
    'embassy' |
    'fire_station' |
    'florist' |
    'funeral_home' |
    'furniture_store' |
    'gas_station' |
    'gym' |
    'hair_care' |
    'hardware_store' |
    'hindu_temple' |
    'home_goods_store' |
    'hospital' |
    'insurance_agency' |
    'jewelry_store' |
    'laundry' |
    'lawyer' |
    'library' |
    'liquor_store' |
    'local_government_office' |
    'locksmith' |
    'lodging' |
    'meal_delivery' |
    'meal_takeaway' |
    'mosque' |
    'movie_rental' |
    'movie_theater' |
    'moving_company' |
    'museum' |
    'night_club' |
    'painter' |
    'park' |
    'parking' |
    'pet_store' |
    'pharmacy' |
    'physiotherapist' |
    'plumber' |
    'police' |
    'post_office' |
    'real_estate_agency' |
    'restaurant' |
    'roofing_contractor' |
    'rv_park' |
    'school' |
    'shoe_store' |
    'shopping_mall' |
    'spa' |
    'stadium' |
    'storage' |
    'store' |
    'subway_station' |
    'supermarket' |
    'synagogue' |
    'taxi_stand' |
    'train_station' |
    'transit_station' |
    'travel_agency' |
    'veterinary_care' |
    'zoo'
);

/**
 * Table 2: Additional types returned by the Places service
 *
 * The following types may be returned in the results of a place search, in addition to the types in table 1 above.
 * For more details on these types, refer to [Address Types](https://developers.google.com/maps/documentation/geocoding/intro#Types)
 * in Geocoding Responses.
 *
 * @see https://developers.google.com/places/web-service/supported_types#table2
 */
export type PlaceType2 = (
    'administrative_area_level_1' |
    'administrative_area_level_2' |
    'administrative_area_level_3' |
    'administrative_area_level_4' |
    'administrative_area_level_5' |
    'colloquial_area' |
    'country' |
    'establishment' |
    'finance' |
    'floor' |
    'food' |
    'general_contractor' |
    'geocode' |
    'health' |
    'intersection' |
    'locality' |
    'natural_feature' |
    'neighborhood' |
    'place_of_worship' |
    'political' |
    'point_of_interest' |
    'post_box' |
    'postal_code' |
    'postal_code_prefix' |
    'postal_code_suffix' |
    'postal_town' |
    'premise' |
    'room' |
    'route' |
    'street_address' |
    'street_number' |
    'sublocality' |
    'sublocality_level_4' |
    'sublocality_level_5' |
    'sublocality_level_3' |
    'sublocality_level_2' |
    'sublocality_level_1' |
    'subpremise'
);

export interface GeocodingRequest {
    /**
     * The street address that you want to geocode, in the format used by the national postal service of the country concerned.
     * Additional address elements such as business names and unit, suite or floor numbers should be avoided.
     */
    address?: string;
    /**
     * The bounding box of the viewport within which to bias geocode results more prominently.
     * This parameter will only influence, not fully restrict, results from the geocoder.
     */
    bounds?: LatLngBounds;
    /**
     * The language in which to return results.
     *  - If `language` is not supplied, the geocoder attempts to use the preferred language as specified in the `Accept-Language` header,
     *    or the native language of the domain from which the request is sent.
     *  - The geocoder does its best to provide a street address that is readable for both the user and locals.
     *    To achieve that goal, it returns street addresses in the local language, transliterated to a script readable
     *    by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language.
     *    Address components are all returned in the same language, which is chosen from the first component.
     *  - If a name is not available in the preferred language, the geocoder uses the closest match.
     *  - The preferred language has a small influence on the set of results that the API chooses to return,
     *    and the order in which they are returned. The geocoder interprets abbreviations differently depending on language,
     *    such as the abbreviations for street types, or synonyms that may be valid in one language but not in another.
     *    For example, utca and tér are synonyms for street in Hungarian.
     */
    language?: string;
    /**
     * The region code, specified as a ccTLD ("top-level domain") two-character value.
     * This parameter will only influence, not fully restrict, results from the geocoder.
     */
    region?: string;
    /**
     * A components filter with elements separated by a pipe (`|`).
     * The components filter is *required* if the request doesn't include an `address`.
     * Each element in the components filter consists of a `component:value` pair, and fully restricts the results from the geocoder.
     */
    components?: GeocodingComponents;
}

/**
 * Notes about component filtering:
 *
 *  - If the request contains multiple component filters, the API evaluates them as an AND, not an OR.
 *    For example, if the request includes multiple countries `components=country:GB|country:AU`,
 *    the API looks for locations where country=GB AND country=AU, and returns `ZERO_RESULTS`.
 *  - Results are consistent with Google Maps, which occasionally yields unexpected `ZERO_RESULTS` responses.
 *    Using Place Autocomplete may provide better results in some use cases.
 *    To learn more, see [this FAQ](https://developers.google.com/maps/documentation/geocoding/faq#trbl_component_filtering).
 *  - For each address component, either specify it in the `address` parameter or in a `components` filter, but not both.
 *    Specifying the same values in both may result in `ZERO_RESULTS`.
 *
 * A geocode for "High St, Hastings" with `components=country:GB` returns a result in Hastings, England rather than in Hastings-On-Hudson, USA
 */
export interface GeocodingComponents {
    /** matches `postal_code` and `postal_code_prefix`. */
    postalCode?: string;
    /**
     * matches a country name or a two letter [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) country code.
     * **Note:** The API follows the ISO standard for defining countries, and the filtering works best when using
     * the corresponding ISO code of the country
     */
    country?: string | string[];
    /** matches the long or short name of a route. */
    route?: string;
    /** matches against `locality` and `sublocality` types. */
    locality?: string;
    /** matches all the administrative_area levels. */
    administrativeArea?: string;
}

export interface GeocodingResponse<STATUSES = GeocodingResponseStatus> {
    /** contains metadata on the request. */
    status: STATUSES;
    /**
     * When the geocoder returns a status code other than `OK`, there may be an additional `error_message` field
     * within the Geocoding response object. This field contains more detailed information about the reasons behind the given status code.
     */
    error_meesage: string;
    /**
     * contains an array of geocoded address information and geometry information.
     *
     * Generally, only one entry in the `"results"` array is returned for address lookups,though the geocoder may return several results
     * when address queries are ambiguous.
     */
    results: GeocodingResult[];
}

/**
 * The `"status" `field within the Geocoding response object contains the status of the request,
 * and may contain debugging information to help you track down why geocoding is not working.
 */
export type GeocodingResponseStatus = (
    /** indicates that no errors occurred; the address was successfully parsed and at least one geocode was returned. */
    'OK' |
    /**
     * indicates that the geocode was successful but returned no results.
     * This may occur if the geocoder was passed a non-existent `address`.
     */
    'ZERO_RESULTS' |
    /**
     * indicates any of the following:
     *  - The API key is missing or invalid.
     *  - Billing has not been enabled on your account.
     *  - A self-imposed usage cap has been exceeded.
     *  - The provided method of payment is no longer valid (for example, a credit card has expired).
     * See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) to learn how to fix this.
     */
    'OVER_DAILY_LIMIT' |
    /** indicates that you are over your quota. */
    'OVER_QUERY_LIMIT' |
    /** indicates that your request was denied. */
    'REQUEST_DENIED' |
    /** generally indicates that the query (`address`, `components` or `latlng`) is missing. */
    'INVALID_REQUEST' |
    /** indicates that the request could not be processed due to a server error. The request may succeed if you try again. */
    'UNKNOWN_ERROR'
);

/**
 * When the geocoder returns results, it places them within a (JSON) `results` array.
 * Even if the geocoder returns no results (such as if the address doesn't exist) it still returns an empty `results` array.
 * (XML responses consist of zero or more `<result>` elements.)
 */
export interface GeocodingResult {
    /**
     * array indicates the type of the returned result.
     * This array contains a set of zero or more tags identifying the type of feature returned in the result.
     * For example, a geocode of "Chicago" returns "locality" which indicates that "Chicago" is a city,
     * and also returns "political" which indicates it is a political entity.
     */
    types: AddressType[];
    /**
     * is a string containing the human-readable address of this location.
     *
     * Often this address is equivalent to the postal address. Note that some countries, such as the United Kingdom,
     * do not allow distribution of true postal addresses due to licensing restrictions.
     *
     * The formatted address is logically composed of one or more address components.
     * For example, the address "111 8th Avenue, New York, NY" consists of the following components: "111" (the street number),
     * "8th Avenue" (the route), "New York" (the city) and "NY" (the US state).
     *
     * Do not parse the formatted address programmatically. Instead you should use the individual address components,
     * which the API response includes in addition to the formatted address field.
     */
    formatted_address: string;
    /**
     * is an array containing the separate components applicable to this address.
     *
     * Note the following facts about the `address_components[]` array:
     *  - The array of address components may contain more components than the `formatted_address`.
     *  - The array does not necessarily include all the political entities that contain an address,
     *    apart from those included in the `formatted_address`. To retrieve all the political entities that contain a specific address,
     *    you should use reverse geocoding, passing the latitude/longitude of the address as a parameter to the request.
     *  - The format of the response is not guaranteed to remain the same between requests.
     *    In particular, the number of `address_components` varies based on the address requested and can change
     *    over time for the same address. A component can change position in the array.
     *    The type of the component can change. A particular component may be missing in a later response.
     */
    address_components: AddressComponent[];
    /**
     * is an array denoting all the localities contained in a postal code.
     * This is only present when the result is a postal code that contains multiple localities.
     */
    postcode_localities: string[];
    /** address geometry. */
    geometry: AddressGeometry;
    /**
     * is an encoded location reference, derived from latitude and longitude coordinates,
     * that represents an area: 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or smaller.
     * Plus codes can be used as a replacement for street addresses in places where they do not exist
     * (where buildings are not numbered or streets are not named).
     *
     * The plus code is formatted as a global code and a compound code:
     *  - `global_code` is a 4 character area code and 6 character or longer local code (849VCWC8+R9).
     *  - `compound_code` is a 6 character or longer local code with an explicit location (CWC8+R9, Mountain View, CA, USA).
     * Typically, both the global code and compound code are returned. However, if the result is in a remote location
     * (for example, an ocean or desert) only the global code may be returned.
     *
     * @see [Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)
     * @see [plus codes](https://plus.codes/)
     */
    plus_code: PlusCode;
    /**
     * indicates that the geocoder did not return an exact match for the original request,
     * though it was able to match part of the requested address.
     * You may wish to examine the original request for misspellings and/or an incomplete address.
     *
     * Partial matches most often occur for street addresses that do not exist within the locality you pass in the request.
     * Partial matches may also be returned when a request matches two or more locations in the same locality.
     * For example, "21 Henr St, Bristol, UK" will return a partial match for both Henry Street and Henrietta Street.
     * Note that if a request includes a misspelled address component, the geocoding service may suggest an alternative address.
     * Suggestions triggered in this way will also be marked as a partial match.
     */
    partial_match: boolean;
    /** is a unique identifier that can be used with other Google APIs. */
    place_id: string;
}

export type GeocodingAddressComponentType = (
    /** indicates the floor of a building address. */
    'floor' |
    /** typically indicates a place that has not yet been categorized. */
    'establishment' |
    /** indicates a named point of interest. */
    'point_of_interest' |
    /** indicates a parking lot or parking structure. */
    'parking' |
    /** indicates a specific postal box. */
    'post_box' |
    /** indicates a grouping of geographic areas, such as locality and sublocality, used for mailing addresses in some countries. */
    'postal_town' |
    /** indicates the room of a building address. */
    'room' |
    /** indicates the precise street number. */
    'street_number' |
    /**  indicate the location of a bus. */
    'bus_station' |
    /**  indicate the location of a train. */
    'train_station' |
    /**  indicate the location of a public transit stop. */
    'transit_station'
);

export interface AddressComponent {
    /** is an array indicating the *type* of the address component. */
    types: Array<AddressType | GeocodingAddressComponentType>;
    /** is the full text description or name of the address component as returned by the Geocoder. */
    long_name: string;
    /**
     * is an abbreviated textual name for the address component, if available.
     * For example, an address component for the state of Alaska may have a `long_name` of "Alaska" and a `short_name` of "AK"
     * using the 2-letter postal abbreviation.
     */
    short_name: string;
}

export interface AddressGeometry {
    /** contains the geocoded latitude, longitude value. For normal address lookups, this field is typically the most important. */
    location: LatLngLiteral;
    /** stores additional data about the specified location. */
    location_type: LocationType;
    /**
     * contains the recommended viewport for displaying the returned result, specified as two latitude, longitude values
     * defining the `southwest` and `northeast` corner of the viewport bounding box.
     * Generally the viewport is used to frame a result when displaying it to a user.
     */
    viewport: LatLngBounds;
    /**
     * (optionally returned) stores the bounding box which can fully contain the returned result.
     * Note that these bounds may not match the recommended viewport.
     * (For example, San Francisco includes the [Farallon islands](https://en.wikipedia.org/wiki/Farallon_Islands),
     * which are technically part of the city, but probably should not be returned in the viewport.)
     */
    bounds: LatLngBounds;
}

export type LocationType = (
    /**
     * indicates that the returned result is a precise geocode for which we have location information
     * accurate down to street address precision
     */
    'ROOFTOP' |
    /**
     * indicates that the returned result reflects an approximation (usually on a road) interpolated between two precise points
     * (such as intersections). Interpolated results are generally returned when rooftop geocodes are unavailable for a street address.
     */
    'RANGE_INTERPOLATED' |
    /**
     * indicates that the returned result is the geometric center of a result such as a polyline
     * (for example, a street) or polygon (region).
     */
    'GEOMETRIC_CENTER' |
    /** indicates that the returned result is approximate. */
    'APPROXIMATE'
);

export interface PlusCode {
    /** is a 4 character area code and 6 character or longer local code (849VCWC8+R9). */
    global_code: string;
    /** is a 6 character or longer local code with an explicit location (CWC8+R9, Mountain View, CA, USA). */
    compound_code: string;
}

export interface GeolocationRequest {
    /** The mobile country code (MCC) for the device's home network. */
    homeMobileCountryCode?: number;
    /** The mobile network code (MNC) for the device's home network. */
    homeMobileNetworkCode?: number;
    /** The mobile radio type. While this field is optional, it should be included if a value is available, for more accurate results. */
    radioType?: RadioType;
    /** The carrier name. */
    carrier?: string;
    /**
     * Specifies whether to fall back to IP geolocation if wifi and cell tower signals are not available.
     * Defaults to `true`. Set `considerIp` to `false` to disable fall back.
     */
    considerIp?: boolean;
    /** An array of cell tower objects. */
    cellTowers?: CellTower[];
    /** An array of WiFi access point objects. */
    wifiAccessPoints?: WifiAccessPoint[];
}

export type RadioType = (
    'lte' |
    'gsm' |
    'cdma' |
    'wcdma'
);

export interface CellTower {
    /**
     * Unique identifier of the cell.
     * On GSM, this is the Cell ID (CID);
     * CDMA networks use the Base Station ID (BID).
     * WCDMA networks use the UTRAN/GERAN Cell Identity (UC-Id), which is a 32-bit value concatenating the Radio Network Controller (RNC)
     * and Cell ID. Specifying only the 16-bit Cell ID value in WCDMA networks may return inaccurate results.
     */
    cellId: number;
    /** The Location Area Code (LAC) for GSM and WCDMA networks. The Network ID (NID) for CDMA networks. */
    locationAreaCode: number;
    /** The cell tower's Mobile Country Code (MCC). */
    mobileCountryCode: number;
    /** The cell tower's Mobile Network Code. This is the MNC for GSM and WCDMA; CDMA uses the System ID (SID). */
    mobileNetworkCode: number;
    /** The number of milliseconds since this cell was primary. If age is 0, the `cellId` represents a current measurement. */
    age?: number;
    /** Radio signal strength measured in dBm. */
    signalStrength?: number;
    /** The [timing advance](https://en.wikipedia.org/wiki/Timing_advance) value. */
    timingAdvance?: number;
}

export interface WifiAccessPoint {
    /** The MAC address of the WiFi node. It's typically called a BSS, BSSID or MAC address. Separators must be `:` (colon). */
    macAddress: string;
    /** The current signal strength measured in dBm. */
    signalStrength?: number;
    /** The number of milliseconds since this access point was detected. */
    age?: number;
    /** The channel over which the client is communicating with the acces. */
    channel?: number;
    /** The current signal to noise ratio measured in dB. */
    signalToNoiseRatio?: number;
}

export interface GeolocationResponse {
    /** The user's estimated latitude and longitude, in degrees. Contains one `lat` and one `lng` subfield. */
    location: LatLngLiteral;
    /** The accuracy of the estimated location, in meters. This represents the radius of a circle around the given location. */
    accuracy: number;
}

/**
 * In the case of an error, a standard format error response body will be returned
 * and the HTTP status code will be set to an error status.
 */
export interface GeolocationError {
    error: {
        /** This is the same as the HTTP status of the response. */
        code: number;
        /** A short description of the error. */
        message: string;
        /**
         * A list of errors which occurred. Each error contains an identifier for the type of error (the `reason`)
         * and a short description (the `message`).
         */
        errors: Array<{
            domain: string;
            reason: GeolocationErrorReason;
            message: string;
        }>;
    };
}

export type GeolocationErrorReason = (
    /**
     * You have exceeded your daily limit.
     * Domain: usageLimits
     * Code: 403
     */
    'dailyLimitExceeded' |
    /**
     * Your API key is not valid for the Geolocation API. Please ensure that you've included the entire key,
     * and that you've either purchased the API or have enabled billing and activated the API to obtain the free quota.
     * Domain: usageLimits
     * Code: 400
     */
    'keyInvalid' |
    /**
     * You have exceeded the requests per second per user limit that you configured in the Google Cloud Platform Console.
     * This limit should be configured to prevent a single or small group of users from exhausting your daily quota,
     * while still allowing reasonable access to all users.
     * Domain: usageLimits
     * Code: 403
     */
    'userRateLimitExceeded' |
    /**
     * The request was valid, but no results were returned.
     * Domain: geolocation
     * Code: 404
     */
    'notFound' |
    /**
     * The request body is not valid JSON. Refer to the Request Body section for details on each field.
     * Domain: global
     * Code: 400
     */
    'parseError'
);

export interface NearestRoadsRequest {
    /**
     * A list of latitude/longitude pairs. Latitude and longitude values should be separated by commas.
     * Coordinates should be separated by the pipe character: "|".
     * For example: `points=60.170880,24.942795|60.170879,24.942796|60.170877,24.942796`.
     */
    points: LatLng[];
}

export interface NearestRoadsResponse {
    /** An array of snapped points. */
    snappedPoints: Array<{
        /** Contains a `latitude` and `longitude` value. */
        location: LatLngLiteralVerbose;
        /**
         * An integer that indicates the corresponding value in the original request.
         * Each point in the request maps to at most two segmentsin the response:
         *  - If there are no nearby roads, no segment is returned.
         *  - If the nearest road is one-way, one segment is returned.
         *  - If the nearest road is bidirectional, two segments are returned.
         */
        originalIndex: number;
        /**
         * A unique identifier for a place. All place IDs returned by the Roads API correspond to road segments.
         * Place IDs can be used with other Google APIs, including the Places SDK and the Maps JavaScript API.
         * For example, if you need to get road names for the snapped points returned by the Roads API,
         * you can pass the `placeId` to the Places SDK or the Geocoding API. Within the Roads API,
         * you can pass the `placeId` in a speed limits request to determine the speed limit along that road segment.
         */
        placeId: string;
    }>;
}

export interface PlaceDetailsRequest {
    /** A textual identifier that uniquely identifies a place, returned from a Place Search. */
    placeid: string;
    /**
     * The language code, indicating in which language the results should be returned, if possible.
     * Note that some fields may not be available in the requested language.
     * Note that we often update supported languages so this list may not be exhaustive.
     */
    language?: Language;
    /**
     * The region code, specified as a ccTLD (country code top-level domain) two-character value.
     * Most ccTLD codes are identical to ISO 3166-1 codes, with some exceptions.
     * This parameter will only influence, not fully restrict, results.
     * If more relevant results exist outside of the specified region, they may be included.
     * When this parameter is used, the country name is omitted from the resulting `formatted_address`
     * for results in the specified region.
     */
    region?: string;
    /**
     * A random string which identifies an autocomplete session for billing purposes.
     * Use this for Place Details requests that are called following an autocomplete request in the same user session
     */
    sessiontoken?: string;
    /**
     * One or more fields, specifying the types of place data to return, separated by a comma.
     *
     * **Warning: If you do not specify at least one field with a request, or if you omit the **fields**
     * parameter from a request, ALL possible fields will be returned, and you will be billed accordingly.
     * This applies only to Place Details requests.
     */
    fields?: Array<keyof PlaceDetailsResult>;
}

export interface PlaceDetailsResponse {
    /** contains metadata on the request. */
    status: PlaceDetailsResponseStatus;
    /**
     * When the Google Places service returns a status code other than `OK`, there may be an additional `error_message` field
     * within the details response object. This field contains more detailed information about the reasons behind the given status code.
     */
    /** contains the detailed information about the place requested. */
    result: PlaceDetailsResult;
    /** contains a set of attributions about this listing which must be displayed to the user. */
    html_attributions: string[];
}

/**
 * The `"status"` field within the place response object contains the status of the request,
 * and may contain debugging information to help you track down why the place request failed
 */
export type PlaceDetailsResponseStatus = (
    /** indicates that no errors occurred; the place was successfully detected and at least one result was returned. */
    'OK' |
    /** indicates a server-side error; trying again may be successful. */
    'UNKNOWN_ERROR' |
    /**
     * indicates that the referenced location (placeid) was valid but no longer refers to a valid result.
     * This may occur if the establishment is no longer in business.
     */
    'ZERO_RESULTS' |
    /**
     * indicates any of the following:
     *  - You have exceeded the QPS limits.
     *  - The request is missing an API key.
     *  - Billing has not been enabled on your account.
     *  - The monthly $200 credit, or a self-imposed usage cap, has been exceeded.
     *  - The provided method of payment is no longer valid (for example, a credit card has expired).
     * See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) for more information
     * about how to resolve this error.
     */
    'OVER_QUERY_LIMIT' |
    /** indicates that your request was denied, generally because an invalid key parameter. */
    'REQUEST_DENIED' |
    /** generally indicates that the query (placeid) is missing. */
    'INVALID_REQUEST' |
    /** indicates that the referenced location (placeid) was not found in the Places database. */
    'NOT_FOUND'
);

/** When the Places service returns results from a details request, it places them within a single `result`. */
export interface PlaceDetailsResult {
    /**
     * is an array containing the separate components applicable to this address.
     *
     * Note the following facts about the `address_components[]` array:
     *  - The array of address components may contain more components than the `formatted_address`.
     *  - The array does not necessarily include all the political entities that contain an address,
     *    apart from those included in the `formatted_address`. To retrieve all the political entities
     *    that contain a specific address, you should use reverse geocoding, passing the latitude/longitude
     *    of the address as a parameter to the request.
     *  - The format of the response is not guaranteed to remain the same between requests.
     *    In particular, the number of `address_components` varies based on the address requested
     *    and can change over time for the same address. A component can change position in the array.
     *    The type of the component can change. A particular component may be missing in a later response.
     */
    address_components: AddressComponent[];
    /**
     * is a string containing the human-readable address of this place.
     *
     * Often this address is equivalent to the postal address. Note that some countries, such as the United Kingdom,
     * do not allow distribution of true postal addresses due to licensing restrictions.
     *
     * The formatted address is logically composed of one or more address components.
     * For example, the address "111 8th Avenue, New York, NY" consists of the following components: "111"
     * (the street number), "8th Avenue" (the route), "New York" (the city) and "NY" (the US state).
     *
     * Do not parse the formatted address programmatically. Instead you should use the individual address components,
     * which the API response includes in addition to the formatted address field.
     */
    formatted_address: string;
    /**
     * contains the place's phone number in its local format.
     * For example, the `formatted_phone_number` for Google's Sydney, Australia office is `(02) 9374 4000`.
     */
    formatted_phone_number: string;
    /** is a representation of the place's address in the [adr microformat](http://microformats.org/wiki/adr). */
    adr_address: string;
    /**
     * contains the following information:
     *  - `location`: contains the geocoded latitude,longitude value for this place.
     *  - `viewport`: contains the preferred viewport when displaying this place on a map as a `LatLngBounds` if it is known.
     */
    geometry: AddressGeometry;
    /**
     * is an encoded location reference, derived from latitude and longitude coordinates, that represents an area:
     * 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or smaller.
     * Plus codes can be used as a replacement for street addresses in places where they do not exist
     * (where buildings are not numbered or streets are not named).
     *
     * The plus code is formatted as a global code and a compound code:
     *  - `global_code` is a 4 character area code and 6 character or longer local code (849VCWC8+R9).
     *  - `compound_code` is a 6 character or longer local code with an explicit location (CWC8+R9, Mountain View, CA, USA).
     *
     * Typically, both the global code and compound code are returned.
     * However, if the result is in a remote location (for example, an ocean or desert) only the global code may be returned.
     *
     * @see [Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)
     * @see [plus codes](https://plus.codes/)
     */
    plus_code: PlusCode;
    /** contains the URL of a suggested icon which may be displayed to the user when indicating this result on a map. */
    icon: string;
    /**
     * contains the place's phone number in international format.
     * International format includes the country code, and is prefixed with the plus (+) sign.
     * For example, the `international_phone_number` for Google's Sydney, Australia office is `+61 2 9374 4000`.
     */
    international_phone_number: string;
    /**
     * contains the human-readable name for the returned result.
     * For establishment results, this is usually the canonicalized business name.
     */
    name: string;
    /** place opening hours. */
    opening_hours: OpeningHours;
    /**
     * is a boolean flag indicating whether the place has permanently shut down (value `true`).
     * If the place is not permanently closed, the flag is absent from the response.
     */
    permanently_closed: boolean;
    /**
     * an array of photo objects, each containing a reference to an image.
     * A Place Details request may return up to ten photos.
     * More information about place photos and how you can use the images in your application can be found in the Place Photos documentation.
     */
    photos: PlacePhoto[];
    /**
     * A textual identifier that uniquely identifies a place.
     * To retrieve information about the place, pass this identifier in the `placeId` field of a Places API request.
     */
    place_id: string;
    /** Indicates the scope of the `place_id`. */
    scope: PlaceIdScope;
    /**
     * An array of zero, one or more alternative place IDs for the place, with a scope related to each alternative ID.
     * Note: This array may be empty or not present.
     */
    alt_ids: AlternativePlaceId[];
    /**
     * The price level of the place, on a scale of 0 to 4.
     * The exact amount indicated by a specific value will vary from region to region.
     *
     * Price levels are interpreted as follows:
     *  - `0`: Free
     *  - `1`: Inexpensive
     *  - `2`: Moderate
     *  - `3`: Expensive
     *  - `4`: Very Expensive
     */
    price_level: number;
    /** contains the place's rating, from 1.0 to 5.0, based on aggregated user reviews. */
    rating: number;
    /**
     * a JSON array of up to five reviews. If a `language` parameter was specified in the Place Details request,
     * the Places Service will bias the results to prefer reviews written in that language.
     */
    reviews: PlaceReview[];
    /**
     * contains an array of feature types describing the given result.
     * XML responses include multiple `<type>` elements if more than one type is assigned to the result.
     */
    types: AddressType[];
    /**
     * contains the URL of the official Google page for this place.
     * This will be the Google-owned page that contains the best available information about the place.
     * Applications must link to or embed this page on any screen that shows detailed results about the place to the user.
     */
    url: string;
    /**
     * contains the number of minutes this place’s current timezone is offset from UTC.
     * For example, for places in Sydney, Australia during daylight saving time this would be 660 (+11 hours from UTC),
     * and for places in California outside of daylight saving time this would be -480 (-8 hours from UTC).
     */
    utc_offset: number;
    /**
     * lists a simplified address for the place, including the street name, street number, and locality,
     * but not the province/state, postal code, or country. For example, Google's Sydney, Australia office
     * has a `vicinity` value of `48 Pirrama Road, Pyrmont`.
     */
    vicinity: number;
    /** lists the authoritative website for this place, such as a business' homepage. */
    website: string;
}

export interface PlaceReview {
    /**
     * contains a collection of `AspectRating` objects, each of which provides a rating of a single attribute of the establishment.
     * The first object in the collection is considered the primary aspect.
     */
    aspects: AspectRating[];
    /** the name of the user who submitted the review. Anonymous reviews are attributed to "A Google user". */
    author_name: string;
    /** the URL to the user's Google Maps Local Guides profile, if available. */
    author_url?: string;
    /**
     * an IETF language code indicating the language used in the user's review.
     * This field contains the main language tag only, and not the secondary tag indicating country or region.
     * For example, all the English reviews are tagged as 'en', and not 'en-AU' or 'en-UK' and so on.
     */
    language: string;
    /** the user's overall rating for this place. This is a whole number, ranging from 1 to 5. */
    rating: number;
    /**
     * the user's review. When reviewing a location with Google Places, text reviews are considered optional.
     * Therefore, this field may by empty. Note that this field may include simple HTML markup.
     * For example, the entity reference `&amp;` may represent an ampersand character.
     */
    text: string;
    /** the time that the review was submitted, measured in the number of seconds since since midnight, January 1, 1970 UTC. */
    time: string;
}

export interface AspectRating {
    /** the name of the aspect that is being rated. */
    type: AspectRatingType;
    /** the user's rating for this particular aspect, from 0 to 3. */
    rating: number;
}

export type AspectRatingType = (
    'appeal' |
    'atmosphere' |
    'decor' |
    'facilities' |
    'food' |
    'overall' |
    'quality' |
    'service'
);

export interface PlacesRequest {
    /**
     * The text string on which to search, for example: "restaurant" or "123 Main Street".
     * The Google Places service will return candidate matches based on this string and order the results
     * based on their perceived relevance. This parameter becomes optional if the `type` parameter
     * is also used in the search request.
     */
    query: string;
    /**
     * The region code, specified as a ccTLD (country code top-level domain) two-character value.
     * Most ccTLD codes are identical to ISO 3166-1 codes, with some exceptions.
     * This parameter will only influence, not fully restrict, search results.
     * If more relevant results exist outside of the specified region, they may be included.
     * When this parameter is used, the country name is omitted from the resulting `formatted_address`
     * for results in the specified region.
     */
    region?: string;
    /**
     * The latitude/longitude around which to retrieve place information.
     * This must be specified as latitude,longitude. If you specify a location parameter,
     * you must also specify a radius parameter.
     */
    location?: LatLng;
    /**
     * Defines the distance (in meters) within which to bias place results.
     * The maximum allowed radius is 50 000 meters.
     * Results inside of this region will be ranked higher than results outside of the search circle;
     * however, prominent results from outside of the search radius may be included.
     */
    radius?: number;
    /**
     * The language code, indicating in which language the results should be returned, if possible.
     * Note that we often update supported languages so this list may not be exhaustive
     */
    language?: Language;
    /**
     * Restricts results to only those places within the specified price level.
     * Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive.
     * The exact amount indicated by a specific value will vary from region to region.
     */
    minprice?: number;
    /**
     * Restricts results to only those places within the specified price level.
     * Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive.
     * The exact amount indicated by a specific value will vary from region to region.
     */
    maxprice?: number;
    /**
     * Returns only those places that are open for business at the time the query is sent.
     * Places that do not specify opening hours in the Google Places database will not be returned
     * if you include this parameter in your query.
     */
    opennow?: boolean;
    /**
     * Returns the next 20 results from a previously run search.
     * Setting a `pagetoken` parameter will execute a search with the same parameters used previously —
     * all parameters other than `pagetoken` will be ignored.
     */
    pagetoken?: string;
    /**
     * Restricts the results to places matching the specified type.
     * Only one type may be specified (if more than one type is provided, all types following the first entry are ignored).
     */
    type?: PlaceType1;
}

/**
 * The Place Autocomplete service can match on full words as well as substrings.
 * Applications can therefore send queries as the user types, to provide on-the-fly place predictions.
 *
 * The returned predictions are designed to be presented to the user to aid them in selecting the desired place.
 * You can send a [Place Details request](https://developers.google.com/places/web-service/details#PlaceDetailsRequests)
 * for more information about any of the places which are returned.
 */
export interface PlaceAutocompleteRequest {
    /**
     * The text string on which to search. The Place Autocomplete service will return candidate matches
     * based on this string and order results based on their perceived relevance.
     */
    input: string;
    /**
     * A random string which identifies an autocomplete
     * [session](https://developers.google.com/places/web-service/autocomplete#session_tokens) for billing purposes.
     * If this parameter is omitted from an autocomplete request, the request is billed independently
     */
    sessiontoken: string;
    /**
     * The position, in the input term, of the last character that the service uses to match predictions.
     * For example, if the input is 'Google' and the `offset` is 3, the service will match on 'Goo'.
     * The string determined by the `offset` is matched against the first word in the input term only.
     * For example, if the input term is 'Google abc' and the offset is 3, the service will attempt to match against 'Goo abc'.
     * If no `offset` is supplied, the service will use the whole term.
     * The `offset` should generally be set to the position of the text caret.
     */
    offset?: number;
    /** The point around which you wish to retrieve place information. */
    location?: LatLng;
    /**
     * The distance (in meters) within which to return place results. Note that setting a radius biases results to the indicated area,
     * but may not fully restrict results to the specified area.
     */
    radius?: number;
    /**
     * The language code, indicating in which language the results should be returned, if possible.
     * Searches are also biased to the selected language; results in the selected language may be given a higher ranking.
     * See the list of supported languages and their codes.
     * Note that we often update supported languages so this list may not be exhaustive.
     * If language is not supplied, the Place Autocomplete service will attempt to use the native language
     * of the domain from which the request is sent.
     */
    language?: string;
    /** The types of place results to return. */
    types?: PlaceAutocompleteType;
    /**
     * A grouping of places to which you would like to restrict your results.
     * Currently, you can use `components` to filter by up to 5 countries.
     * Countries must be passed as a two character, ISO 3166-1 Alpha-2 compatible country code.
     * For example: `components=country:fr` would restrict your results to places within France.
     * Multiple countries must be passed as multiple `country:XX` filters, with the pipe character (`|`) as a separator.
     * For example: `components=country:us|country:pr|country:vi|country:gu|country:mp` would restrict your results
     * to places within the United States and its unincorporated organized territories.
     */
    components?: string[];
    /**
     * Returns only those places that are strictly within the region defined by `location` and `radius`.
     * This is a restriction, rather than a bias, meaning that results outside this region
     * will not be returned even if they match the user input.
     */
    strictbounds?: boolean;
}

/**
 * You may restrict results from a Place Autocomplete request to be of a certain type by passing a types parameter.
 * The parameter specifies a type or a type collection, as listed in the supported types below.
 * If nothing is specified, all types are returned. In general only a single type is allowed.
 * The exception is that you can safely mix the geocode and establishment types,
 * but note that this will have the same effect as specifying no types.
 */
export type PlaceAutocompleteType = (
    /**
     * instructs the Place Autocomplete service to return only geocoding results, rather than business results.
     * Generally, you use this request to disambiguate results where the location specified may be indeterminate.
     */
    'geocode' |
    /**
     * instructs the Place Autocomplete service to return only geocoding results with a precise address.
     * Generally, you use this request when you know the user will be looking for a fully specified address.
     */
    'address' |
    /** instructs the Place Autocomplete service to return only business results. */
    'establishment' |
    /**
     * the `(regions)` type collection instructs the Places service to return any result matching the following types:
     *  - `locality`
     *  - `sublocality`
     *  - `postal_code`
     *  - `country`
     *  - `administrative_area_level_1`
     *  - `administrative_area_level_2`
     */
    '(regions)' |
    /** the (cities) type collection instructs the Places service to return results that match `locality` or `administrative_area_level_3`. */
    '(cities)'
);

export interface PlaceAutocompleteResponse {
    /** contains metadata on the request. */
    status: PlaceAutocompleteResponseStatus;
    /**
     * When the Places service returns a status code other than `OK`, there may be an additional `error_message` field
     * within the response object. This field contains more detailed information about the reasons behind the given status code.
     */
    error_message: string;
    /**
     * contains an array of places, with information about the place.
     * See [Place Autocomplete Results](https://developers.google.com/places/web-service/autocomplete#place_autocomplete_results)
     * for information about these results. The Places API returns up to 5 results.
     */
    predictions: PlaceAutocompleteResult[];
}

/**
 * The `status` field within the Place Autocomplete response object contains the status of the request,
 * and may contain debugging information to help you track down why the Place Autocomplete request failed.
 */
export type PlaceAutocompleteResponseStatus = (
    /** indicates that no errors occurred and at least one result was returned. */
    'OK' |
    /**
     * indicates that the search was successful but returned no results.
     * This may occur if the search was passed a bounds in a remote location.
     */
    'ZERO_RESULTS' |
    /** indicates that you are over your quota. */
    'OVER_QUERY_LIMIT' |
    /** indicates that your request was denied, generally because of lack of an invalid key parameter. */
    'REQUEST_DENIED' |
    /** generally indicates that the input parameter is missing. */
    'INVALID_REQUEST' |
    /** indicates a server-side error; trying again may be successful. */
    'UNKNOWN_ERROR'
);

/**
 * When the Places service returns JSON results from a search, it places them within a `predictions` array.
 * Even if the service returns no results (such as if the `location` is remote) it still returns an empty `predictions` array.
 * XML responses consist of zero or more `<prediction>` elements.
 *
 * **Note:** The Place Autocomplete response does not include the `scope` or `alt_ids` fields that you may see
 * in search results or place details. This is because Autocomplete returns only Google-scoped place IDs.
 * It does not return app-scoped place IDs that have not yet been accepted into the Google Places database.
 */
export interface PlaceAutocompleteResult {
    /**
     * contains the human-readable name for the returned result.
     * For `establishment` results, this is usually the business name.
     */
    description: string;
    /**
     * is a textual identifier that uniquely identifies a place.
     * To retrieve information about the place, pass this identifier in the `placeId` field of a Places API request.
     */
    place_id: string;
    /**
     * contains an array of terms identifying each section of the returned description
     * (a section of the description is generally terminated with a comma).
     */
    terms: PredictionTerm[];
    /**
     * contains an array of types that apply to this place.
     * For example: `[ "political", "locality" ]` or `[ "establishment", "geocode" ]`.
     */
    types: AddressType[];
    /**
     * contains an array with `offset` value and `length`. These describe the location of
     * the entered term in the prediction result text, so that the term can be highlighted if desired.
     */
    matched_substrings: PredictionSubstring[];
    /** contains details on the prediction. */
    structured_formatting: StructuredFormatting;
}

export interface PredictionTerm {
    /** containing the text of the term. */
    value: string;
    /** start position of this term in the description, measured in Unicode characters. */
    offset: number;
}

export interface PredictionSubstring {
    /** location of the entered term. */
    offset: number;
    /** length of the entered term. */
    length: number;
}

export interface StructuredFormatting {
    /** contains the main text of a prediction, usually the name of the place. */
    main_text: string;
    /**
     * contains an array with `offset` value and `length`. These describe the location of
     * the entered term in the prediction result text, so that the term can be highlighted if desired.
     */
    main_text_matched_substrings: PredictionSubstring[];
    /** contains the secondary text of a prediction, usually the location of the place. */
    secondary_text: string;
}

export interface PlacesNearbyRequest {
    /** The latitude/longitude around which to retrieve place information. This must be specified as latitude,longitude. */
    location: LatLng;
    /**
     * Defines the distance (in meters) within which to return place results.
     * The maximum allowed radius is 50 000 meters.
     * Note that `radius` must not be included if `rankby=distance` is specified.
     */
    radius?: number;
    /**
     * A term to be matched against all content that Google has indexed for this place, including but not limited to
     * name, type, and address, as well as customer reviews and other third-party content.
     */
    keyword?: string;
    /**
     * The language code, indicating in which language the results should be returned, if possible.
     * Note that we often update supported languages so this list may not be exhaustive.
     */
    language?: Language;
    /**
     * Restricts results to only those places within the specified range.
     * Valid values range between 0 (most affordable) to 4 (most expensive), inclusive.
     * The exact amount indicated by a specific value will vary from region to region.
     */
    minprice?: number;
    /**
     * Restricts results to only those places within the specified range.
     * Valid values range between 0 (most affordable) to 4 (most expensive), inclusive.
     * The exact amount indicated by a specific value will vary from region to region.
     */
    maxprice?: number;
    /**
     * A term to be matched against all content that Google has indexed for this place.
     * Equivalent to `keyword`. The `name` field is no longer restricted to place names.
     * Values in this field are combined with values in the `keyword` field and passed as part of the same search string.
     * We recommend using only the `keyword` parameter for all search terms.
     */
    name?: string;
    /**
     * Returns only those places that are open for business at the time the query is sent.
     * Places that do not specify opening hours in the Google Places database will not be returned if you include this parameter in your query.
     */
    opennow?: boolean;
    /**
     * Specifies the order in which results are listed.
     * Note that `rankby` must not be included if `radius` is specified.
     *
     * @default PlacesNearbyRanking.prominence
     */
    rankby?: PlacesNearbyRanking;
    /**
     * Restricts the results to places matching the specified type.
     * Only one type may be specified (if more than one type is provided, all types following the first entry are ignored).
     */
    type?: AddressType;
    /**
     * Returns the next 20 results from a previously run search.
     * Setting a pagetoken parameter will execute a search with the same parameters used previously —
     * all parameters other than pagetoken will be ignored.
     */
    pagetoken?: string;
}

export type PlacesNearbyRanking = (
    /**
     * This option sorts results based on their importance. Ranking will favor prominent places within the specified area.
     * Prominence can be affected by a place's ranking in Google's index, global popularity, and other factors.
     */
    'prominence' |
    /**
     * This option biases search results in ascending order by their distance from the specified `location`.
     * When distance is specified, one or more of `keyword`, `name`, or `type` is required.
     */
    'distance'
);

export interface PlacePhotoRequest {
    /**
     * string identifier that uniquely identifies a photo.
     * Photo references are returned from either a Place Search or Place Details request.
     */
    photoreference: string;
    /**
     * Specifies the maximum desired height or width, in pixels, of the image returned by the Place Photos service.
     * If the image is smaller than the values specified, the original image will be returned.
     * If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions,
     * restricted to its original aspect ratio. Both the `maxheight` and `maxwidth` properties accept an integer between 1 and 1600.
     */
    maxwidth?: number;
    /**
     * Specifies the maximum desired height or width, in pixels, of the image returned by the Place Photos service.
     * If the image is smaller than the values specified, the original image will be returned.
     * If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions,
     * restricted to its original aspect ratio. Both the `maxheight` and `maxwidth` properties accept an integer between 1 and 1600.
     */
    maxheight?: number;
}

/**
 * The response of a successful Place Photo request will be an image.
 * The type of the image will depend upon the type of the originally submitted photo.
 *
 * If your request exceeds your available quota, the server will return an HTTP 403 status to indicate that the quota has been exceeded.
 *
 * If the server is unable to understand your request, it will return HTTP 400 status, which indicates an invalid request.
 *
 * The most common reasons why you might see an invalid request include:
 *  - The submitted photo reference was incorrectly specified.
 *  - Your request did not include either a `maxwidth` or `maxheight` parameter.
 */
export type PlacePhotoResponse = string;

export interface QueryAutocompleteRequest {
    /**
     * The text string on which to search.
     * The Places service will return candidate matches based on this string and order results based on their perceived relevance.
     */
    input: string;
    /**
     * The character position in the input term at which the service uses text for predictions.
     * For example, if the input is 'Googl' and the completion point is 3, the service will match on 'Goo'.
     * The offset should generally be set to the position of the text caret.
     * If no offset is supplied, the service will use the entire term.
     */
    offset?: number;
    /** The point around which you wish to retrieve place information. Must be specified as latitude,longitude. */
    location?: LatLng;
    /**
     * The distance (in meters) within which to return place results.
     * Note that setting a radius biases results to the indicated area, but may not fully restrict results to the specified area.
     */
    radius?: number;
    /**
     * The language code, indicating in which language the results should be returned, if possible.
     * Searches are also biased to the selected language; results in the selected language may be given a higher ranking.
     * If language is not supplied, the Places service will attempt to use the native language of the domain from which the request is sent.
     */
    language?: Language;
}

export interface QueryAutocompleteResponse {
    /** contains metadata on the request. */
    status: QueryAutocompleteResponseStatus;
    /**
     * When the Places service returns a status code other than `OK`, there may be an additional `error_message` field
     * within the response object. This field contains more detailed information about the reasons behind the given status code.
     */
    error_message: string;
    /** containing information about a single query prediction. */
    predictions: QueryAutocompleteResult[];
}

/**
 * The `status` field within the Query Autocomplete response object contains the status of the request,
 * and may contain debugging information to help you track down why the request failed.
 */
export type QueryAutocompleteResponseStatus = (
    /** indicates that no errors occurred and at least one result was returned. */
    'OK' |
    /**
     * indicates that the search was successful but returned no results.
     * This may occur if the search was passed a bounds in a remote location.
     */
    'ZERO_RESULTS' |
    /** indicates that you are over your quota. */
    'OVER_QUERY_LIMIT' |
    /** indicates that your request was denied, generally because the key parameter is missing or invalid. */
    'REQUEST_DENIED' |
    /** generally indicates that the input parameter is missing. */
    'INVALID_REQUEST' |
    /** indicates a server-side error; trying again may be successful. */
    'UNKNOWN_ERROR'
);

/**
 * When the Places service returns JSON results from a search, it places them within a `predictions` array.
 * Even if the service returns no results (such as if the `location` is remote) it still returns an empty `predictions` array.
 * XML responses consist of zero or more `<prediction>` elements.
 *
 * Note that some of the predictions may be places, and the `place_id` and `types` fields will be included with those predictions.
 * See [Place Autocomplete Results](https://developers.google.com/places/web-service/autocomplete#place_autocomplete_results)
 * for information about these results.
 */
export interface QueryAutocompleteResult {
    /** contains the human-readable name for the returned result. For establishment results, this is usually the business name. */
    description: string;
    /**
     * contains an array of terms identifying each section of the returned description
     * (a section of the description is generally terminated with a comma).
     */
    terms: PredictionTerm[];
    /**
     * contains an `offset` value and a `length`.
     * These describe the location of the entered term in the prediction result text, so that the term can be highlighted if desired.
     */
    matched_substring: PredictionSubstring[];
}

/** A Radar Search request must include at least one of `keyword`, `name`, or `type`. */
export interface PlaceRadarRequest {
    /** The latitude/longitude around which to retrieve place information. This must be specified as latitude,longitude. */
    location: LatLng;
    /** Defines the distance (in meters) within which to return place results. The maximum allowed radius is 50 000 meters. */
    radius: number;
    /**
     * A term to be matched against all content that Google has indexed for this place, including but not limited to
     * name, type, and address, as well as customer reviews and other third-party content.
     */
    keyword?: string;
    /**
     * The language code, indicating in which language the results should be returned, if possible.
     * Searches are also biased to the selected language; results in the selected language may be given a higher ranking.
     * Note that we often update supported languages so this list may not be exhaustive.
     */
    language?: string;
    /**
     * Restricts results to only those places within the specified price level.
     * Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive.
     * The exact amount indicated by a specific value will vary from region to region.
     */
    minprice?: number;
    /**
     * Restricts results to only those places within the specified price level.
     * Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive.
     * The exact amount indicated by a specific value will vary from region to region.
     */
    maxprice?: number;
    /**
     * A term to be matched against all content that Google has indexed for this place.
     * Equivalent to keyword. The `name` field is no longer restricted to place names.
     * Values in this field are combined with values in the `keyword` field and passed as part of the same search string.
     * We recommend using only the `keyword` parameter for all search terms.
     */
    name?: string;
    /**
     * Returns only those places that are open for business at the time the query is sent.
     * Places that do not specify opening hours in the Google Places database will not be returned if you include this parameter in your query.
     */
    opennow?: boolean;
    /**
     * Restricts the results to places matching the specified type.
     * Only one type may be specified (if more than one type is provided, all types following the first entry are ignored).
     */
    type?: AddressType;
}

/**
 * If both `result_type` and `location_type` filters are present then the API returns only those results that match both the
 * `result_type` and the `location_type` values. If none of the filter values are acceptable, the API returns `ZERO_RESULTS`.
 */
export interface ReverseGeocodingRequest {
    /** The latitude and longitude values specifying the location for which you wish to obtain the closest, human-readable address. */
    latlng?: LatLng;
    /**
     * The place ID of the place for which you wish to obtain the human-readable address.
     * The place ID is a unique identifier that can be used with other Google APIs.
     * For example, you can use the `placeID` returned by the Roads API to get the address for a snapped point.
     * The place ID may only be specified if the request includes an API key or a Google Maps APIs Premium Plan client ID.
     */
    place_id?: string;
    /**
     * The language in which to return results.
     *  - Google often updates the supported languages, so this list may not be exhaustive.
     *  - If `language` is not supplied, the geocoder attempts to use the preferred language as specified in the
     *    `Accept-Language` header, or the native language of the domain from which the request is sent.
     *  - The geocoder does its best to provide a street address that is readable for both the user and locals.
     *    To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user
     *    if necessary, observing the preferred language. All other addresses are returned in the preferred language.
     *    Address components are all returned in the same language, which is chosen from the first component.
     *  - If a name is not available in the preferred language, the geocoder uses the closest match.
     */
    language?: Language;
    /**
     * A filter of one or more address types, separated by a pipe (`|`).
     * If the parameter contains multiple address types, the API returns all addresses that match any of the types.
     * A note about processing: The `result_type` parameter does not restrict the search to the specified address type(s).
     * Rather, the `result_type` acts as a post-search filter: the API fetches all results for the specified `latlng`,
     * then discards those results that do not match the specified address type(s).
     * Note: This parameter is available only for requests that include an API key or a client ID.
     */
    result_type?: AddressType;
    /**
     * A filter of one or more location types, separated by a pipe (`|`).
     * If the parameter contains multiple location types, the API returns all addresses that match any of the types.
     * A note about processing: The `location_type` parameter does not restrict the search to the specified location type(s).
     * Rather, the `location_type` acts as a post-search filter: the API fetches all results for the specified `latlng`,
     * then discards those results that do not match the specified location type(s).
     * Note: This parameter is available only for requests that include an API key or a client ID.
     */
    location_type?: ReverseGeocodingLocationType;
}

export type ReverseGeocodingLocationType = (
    /** returns only the addresses for which Google has location information accurate down to street address precision. */
    'ROOFTOP' |
    /**
     * returns only the addresses that reflect an approximation (usually on a road) interpolated between two precise points
     * (such as intersections). An interpolated range generally indicates that rooftop geocodes are unavailable for a street address.
     */
    'RANGE_INTERPOLATED' |
    /** returns only geometric centers of a location such as a polyline (for example, a street) or polygon (region). */
    'GEOMETRIC_CENTER' |
    /** returns only the addresses that are characterized as approximate. */
    'APPROXIMATE'
);

export type ReverseGeocodingResponse = GeocodingResponse<ReverseGeocodingResponseStatus>;

/**
 * The `"status"` field within the Geocoding response object contains the status of the request,
 * and may contain debugging information to help you track down why reverse geocoding is not working.
 */
export type ReverseGeocodingResponseStatus = (
    /** indicates that no errors occurred and at least one address was returned. */
    'OK' |
    /**
     * indicates that the reverse geocoding was successful but returned no results.
     * This may occur if the geocoder was passed a latlng in a remote location.
     */
    'ZERO_RESULTS' |
    /** indicates that you are over your quota. */
    'OVER_QUERY_LIMIT' |
    /**
     * indicates that the request was denied.
     * Possibly because the request includes a `result_type` or `location_type` parameter but does not include
     * an API key or client ID.
     */
    'REQUEST_DENIED' |
    /**
     * generally indicates one of the following:
     *  - The query (`address`, `components` or `latlng`) is missing.
     *  - An invalid `result_type` or `location_type` was given.
     */
    'INVALID_REQUEST' |
    /** indicates that the request could not be processed due to a server error. The request may succeed if you try again. */
    'UNKNOWN_ERROR'
);

export interface SnappedSpeedLimitsRequest {
    /**
     * A list of latitude/longitude pairs representing a path. Latitude and longitude values must be separated by commas.
     * Latitude/longitude pairs must be separated by the pipe character: "|".
     * When you supply the `path` parameter, the API first snaps the path to the most likely road traveled by a vehicle
     * (as it does for the [snapToRoads](https://developers.google.com/maps/documentation/roads/snap) request),
     * then determines the speed limit for the relevant road segment.
     * If you don't want the API to snap the path, you must pass a `placeId` parameter as explained below.
     * The following example shows the `path` parameter with three latitude/longitude pairs:
     * `path=60.170880,24.942795|60.170879,24.942796|60.170877,24.942796`.
     */
    path: LatLng[];
    /**
     * Whether to return speed limits in kilometers or miles per hour. This can be set to either `KPH` or `MPH`.
     *
     * @default SpeedLimitUnit.KPH
     */
    units?: SpeedLimitUnit;
}

export interface SpeedLimitsRequest {
    /**
     * The place ID(s) representing one or more road segments.
     * Make sure each place ID refers to a road segment and not a different type of place.
     * You can pass up to 100 place IDs with each request.
     * The API does not perform road-snapping on the supplied place IDs.
     * The response includes a speed limit for each place ID in the request.
     * You can send a [snapToRoads](https://developers.google.com/maps/documentation/roads/snap) or
     * [nearestRoads](https://developers.google.com/maps/documentation/roads/nearest) request to find
     * the relevant place IDs then supply them as input to the `speedLimits` request.
     * The following example shows the `placeId` parameter with two place IDs:
     * `placeId=ChIJX12duJAwGQ0Ra0d4Oi4jOGE&placeId=ChIJLQcticc0GQ0RoiNZJVa5GxU`
     */
    placeId: string;
    /**
     * Whether to return speed limits in kilometers or miles per hour. This can be set to either `KPH` or `MPH`.
     *
     * @default SpeedLimitUnit.KPH
     */
    units?: SpeedLimitUnit;
}

export type SpeedLimitUnit = (
    'KPH' |
    'MPH'
);

export interface SpeedLimitsResponse {
    /** An array of road metadata. */
    speedLimits: SpeedLimit[];
    /** an array of snapped points. This array is present only if the request contained a path parameter. */
    snappedPoints: SnappedPoint[];
}

export interface SpeedLimit {
    /** A unique identifier for a place. All place IDs returned by the Roads API will correspond to road segments. */
    placeId: string;
    /** The speed limit for that road segment. */
    speedLimit: number;
    /** Returns either `KPH` or `MPH`. */
    units: SpeedLimitUnit;
}

export interface SnappedPoint {
    /** contains a `latitude` and `longitude` value. */
    location: LatLngLiteralVerbose;
    /**
     * An integer that indicates the corresponding value in the original request.
     * Each value in the request should map to a snapped value in the response.
     * These values are indexed from `0`, so a point with an `originalIndex` of `4` will be the snapped value
     * of the 5th latitude/longitude passed to the `path` parameter.
     */
    originalIndex: number;
    /**
     * A unique identifier for a place. All place IDs returned by the Roads API will correspond to road segments.
     * The `placeId` can be passed in a speed limits request to determine the speed limit along that road segment.
     */
    placeId: string;
}

export interface SnapToRoadsRequest {
    /**
     * The path to be snapped. The `path` parameter accepts a list of latitude/longitude pairs.
     * Latitude and longitude values should be separated by commas. Coordinates should be separated by the pipe character: `"|"`.
     * For example: `path=60.170880,24.942795|60.170879,24.942796|60.170877,24.942796`.
     *
     * **Note:** The snapping algorithm works best for points that are not too far apart.
     * If you observe odd snapping behavior, try creating paths that have points closer together.
     * To ensure the best snap-to-road quality, you should aim to provide paths on which consecutive pairs
     *  of points are within 300m of each other. This will also help in handling any isolated, long jumps between
     * consecutive points caused by GPS signal loss, or noise.
     */
    path: LatLng[];
    /**
     * Whether to interpolate a path to include all points forming the full road-geometry.
     * When true, additional interpolated points will also be returned, resulting in a path that smoothly follows
     * the geometry of the road, even around corners and through tunnels.
     * Interpolated paths will most likely contain more points than the original path.
     *
     * @default false
     */
    interpolate?: boolean;
}

export interface SnapToRoadsResponse {
    /** An array of snapped points. */
    snappedPoints: SnappedPoint[];
}

/**
 * Time Zone API requests are constructed as a URL string.
 * The API returns time zone data for a point on the earth, specified by a latitude/longitude pair.
 * Note that time zone data may not be available for locations over water, such as oceans or seas.
 */
export interface TimeZoneRequest {
    /** a comma-separated `lat,lng` tuple (eg. `location=-33.86,151.20`), representing the location to look up. */
    location: LatLng;
    /**
     * specifies the desired time as seconds since midnight, January 1, 1970 UTC.
     * The Time Zone API uses the timestamp to determine whether or not Daylight Savings should be applied,
     * based on the time zone of the location. Note that the API does not take historical time zones into account.
     * That is, if you specify a past timestamp, the API does not take into account the possibility that
     * the location was previously in a different time zone.
     */
    timestamp?: Date | number;
    /**
     * The language in which to return results.
     * Note that we often update supported languages so this list may not be exhaustive.
     *
     * @default Language.English
     */
    language?: Language;
}

/** For each valid request, the time zone service will return a response in the format indicated within the request URL. */
export interface TimeZoneResponse {
    /**
     * the offset for daylight-savings time in seconds.
     * This will be zero if the time zone is not in Daylight Savings Time during the specified `timestamp`.
     */
    dstOffset: number;
    /** the offset from UTC (in seconds) for the given location. This does not take into effect daylight savings. */
    rawOffset: number;
    /**
     * a string containing the ID of the time zone, such as "America/Los_Angeles" or "Australia/Sydney".
     * These IDs are defined by [Unicode Common Locale Data Repository (CLDR) project](http://cldr.unicode.org/),
     * and currently available in file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml).
     * When a timezone has several IDs, the canonical one is returned. In timezone.xml, this is the first alias of each timezone.
     * For example, "Asia/Calcutta" is returned, not "Asia/Kolkata".
     */
    timeZoneId: string;
    /**
     * a string containing the long form name of the time zone.
     * This field will be localized if the `language` parameter is set.
     * eg. "Pacific Daylight Time" or "Australian Eastern Daylight Time"
     */
    timeZoneName: string;
    /** a string indicating the status of the response. */
    status: TimeZoneResponseStatus;
    /** more detailed information about the reasons behind the given status code, if other than `OK`. */
    errorMessage: string;
}

export type TimeZoneResponseStatus = (
    /** indicates that the request was successful. */
    'OK' |
    /** indicates that the request was malformed. */
    'INVALID_REQUEST' |
    /**
     * indicates any of the following:
     *  - The API `key` is missing or invalid.
     *  - Billing has not been enabled on your account.
     *  - A self-imposed usage cap has been exceeded.
     *  - The provided method of payment is no longer valid (for example, a credit card has expired).
     * See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) to learn how to fix this.
     */
    'OVER_DAILY_LIMIT' |
    /** indicates the requestor has exceeded quota. */
    'OVER_QUERY_LIMIT' |
    /** indicates that the API did not complete the request. Confirm that the request was sent over HTTPS instead of HTTP. */
    'REQUEST_DENIED' |
    /** indicates an unknown error. */
    'UNKNOWN_ERROR' |
    /**
     * indicates that no time zone data could be found for the specified position or time. Confirm that the request is for a location on land,
     * and not over water.
     */
    'ZERO_RESULTS'
);
