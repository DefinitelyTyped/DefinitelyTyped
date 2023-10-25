/**
 * A ProductType relates to how a means of transport "works" in local context.
 * Example: Even though S-Bahn and U-Bahn in Berlin are both trains, they have different operators, service patterns,
 * stations and look different. Therefore, they are two distinct products subway and suburban.
 */
export interface ProductType {
    id: string;
    mode: "train" | "bus" | "watercraft" | "taxi" | "gondola" | "aircraft" | "car" | "bicycle" | "walking";
    name: string;
    short: string;
    bitmasks: number[];
    default: boolean;
}
/**
 * A profile is a specific customisation for each endpoint.
 * It parses data from the API differently, add additional information, or enable non-default methods.
 */
export interface Profile {
    locale: string;
    timezone: string;
    endpoint: string;
    products: ReadonlyArray<ProductType>;
    trip?: boolean;
    radar?: boolean;
    refreshJourney?: boolean;
    journeysFromTrip?: boolean;
    reachableFrom?: boolean;
    journeysWalkingSpeed?: boolean;
    tripsByName?: boolean;
    remarks?: boolean;
    remarksGetPolyline?: boolean;
    lines?: boolean;
}
/**
 * A location object is used by other items to indicate their locations.
 */
export interface Location {
    type: "location";
    id?: string;
    name?: string;
    poi?: boolean;
    address?: string;
    longitude?: number;
    latitude?: number;
    altitude?: number;
    distance?: number;
}
/** Each public transportation network exposes its products as boolean properties. See {@link ProductType} */
export interface Products {
    [product: string]: boolean;
}
export interface Facilities {
    [product: string]: string | boolean;
}
export interface ReisezentrumOpeningHours {
    Mo?: string;
    Di?: string;
    Mi?: string;
    Do?: string;
    Fr?: string;
    Sa?: string;
    So?: string;
}
/**
 * A station is a larger building or area that can be identified by a name.
 * It is usually represented by a single node on a public transport map.
 * Whereas a stop usually specifies a location, a station often is a broader area
 * that may span across multiple levels or buildings.
 */
export interface Station {
    type: "station";
    id?: string;
    name?: string;
    station?: Station;
    location?: Location;
    products?: Products;
    lines?: ReadonlyArray<Line>;
    isMeta?: boolean;
    /** region ids */
    regions?: ReadonlyArray<string>;
    facilities?: Facilities;
    reisezentrumOpeningHours?: ReisezentrumOpeningHours;
    stops?: ReadonlyArray<Station | Stop | Location>;
    entrances?: ReadonlyArray<Location>;
    transitAuthority?: string;
    distance?: number;
}
/**
 * Ids of a Stop, i.e. dhid as 'DELFI Haltestellen ID'
 */
export interface Ids {
    [id: string]: string;
}
/**
 * A stop is a single small point or structure at which vehicles stop.
 * A stop always belongs to a station. It may for example be a sign, a basic shelter or a railway platform.
 */
export interface Stop {
    type: "stop";
    id?: string;
    name?: string;
    location?: Location;
    station?: Station;
    products?: Products;
    lines?: ReadonlyArray<Line>;
    isMeta?: boolean;
    reisezentrumOpeningHours?: ReisezentrumOpeningHours;
    ids?: Ids;
    loadFactor?: string;
    entrances?: ReadonlyArray<Location>;
    transitAuthority?: string;
    distance?: number;
}
/**
 * A region is a group of stations, for example a metropolitan area or a geographical or cultural region.
 */
export interface Region {
    type: "region";
    id: string;
    name: string;
    /** station ids */
    stations: ReadonlyArray<string>;
}
export interface Line {
    type: "line";
    id?: string;
    name?: string;
    adminCode?: string;
    fahrtNr?: string;
    additionalName?: string;
    product?: string;
    public?: boolean;
    mode?: "train" | "bus" | "watercraft" | "taxi" | "gondola" | "aircraft" | "car" | "bicycle" | "walking";
    /** routes ids */
    routes?: ReadonlyArray<string>;
    operator?: Operator;
    express?: boolean;
    metro?: boolean;
    night?: boolean;
    nr?: number;
    symbol?: string;
    directions?: ReadonlyArray<string>;
    productName?: string;
}
export interface RealtimeDataUpdatedAt {
    realtimeDataUpdatedAt?: number;
}
/**
 * A route represents a single set of stations, of a single line.
 */
export interface Route {
    type: "route";
    id: string;
    line: string;
    mode: "train" | "bus" | "watercraft" | "taxi" | "gondola" | "aircraft" | "car" | "bicycle" | "walking";
    /** stop ids */
    stops: ReadonlyArray<string>;
}
export interface Cycle {
    min?: number;
    max?: number;
    nr?: number;
}
export interface ArrivalDeparture {
    arrival?: number;
    departure?: number;
}
/**
 * There are many ways to format schedules of public transport routes.
 * This one tries to balance the amount of data and consumability.
 * It is specifically geared towards urban public transport, with frequent trains and homogenous travels.
 */
export interface Schedule {
    type: "schedule";
    id: string;
    route: string;
    mode: "train" | "bus" | "watercraft" | "taxi" | "gondola" | "aircraft" | "car" | "bicycle" | "walking";
    sequence: ReadonlyArray<ArrivalDeparture>;
    /** array of Unix timestamps */
    starts: ReadonlyArray<string>;
}
export interface Operator {
    type: "operator";
    id: string;
    name: string;
}
export interface Hint {
    type: "hint" | "status" | "foreign-id" | "local-fare-zone" | "stop-website" | "stop-dhid" | "transit-authority";
    code?: string;
    summary?: string;
    text: string;
    tripId?: string;
}
export interface Status {
    type: "hint" | "status" | "foreign-id" | "local-fare-zone" | "stop-website" | "stop-dhid" | "transit-authority";
    code?: string;
    summary?: string;
    text: string;
    tripId?: string;
}
export interface IcoCrd {
    x: number;
    y: number;
    type?: string;
}
export interface Edge {
    fromLocation?: Station | Stop | Location;
    toLocation?: Station | Stop | Location;
    icon?: object;
    dir?: number;
    icoCrd?: IcoCrd;
}
export interface Event {
    fromLocation?: Station | Stop | Location;
    toLocation?: Station | Stop | Location;
    start?: string;
    end?: string;
    sections?: string[];
}
export interface Warning {
    type: "status" | "warning";
    id?: string;
    icon?: object;
    summary?: string;
    text?: string;
    category?: string | number;
    priority?: number;
    products?: Products;
    edges?: Edge[];
    events?: Event[];
    validFrom?: string | number;
    validUntil?: string | number;
    modified?: string | number;
    company?: string;
    categories?: number[];
    affectedLines?: Line[];
    fromStops?: ReadonlyArray<Station | Stop | Location>;
    toStops?: ReadonlyArray<Station | Stop | Location>;
}
export interface Geometry {
    type: "Point";
    coordinates: number[];
}
export interface Feature {
    type: "Feature";
    properties: Station | Stop | Location | object;
    geometry: Geometry;
}
export interface FeatureCollection {
    type: "FeatureCollection";
    features: ReadonlyArray<Feature>;
}
export type PrognosisType = "prognosed" | "calculated";
/**
 * A stopover represents a vehicle stopping at a stop/station at a specific time.
 */
export interface StopOver {
    stop?: Station | Stop;
    /** null, if last stopOver of trip */
    departure?: string;
    departureDelay?: number;
    prognosedDeparture?: string;
    plannedDeparture?: string;
    departurePlatform?: string;
    prognosedDeparturePlatform?: string;
    plannedDeparturePlatform?: string;
    /** null, if first stopOver of trip */
    arrival?: string;
    arrivalDelay?: number;
    prognosedArrival?: string;
    plannedArrival?: string;
    arrivalPlatform?: string;
    prognosedArrivalPlatform?: string;
    plannedArrivalPlatform?: string;
    remarks?: ReadonlyArray<Hint | Status | Warning>;
    passBy?: boolean;
    cancelled?: boolean;
    departurePrognosisType?: PrognosisType;
    arrivalPrognosisType?: PrognosisType;
}
/**
 * Trip – a vehicle stopping at a set of stops at specific times
 */
export interface Trip {
    id: string;
    origin?: Station | Stop | Location;
    destination?: Station | Stop | Location;
    departure?: string;
    plannedDeparture?: string;
    prognosedArrival?: string;
    departureDelay?: number;
    departurePlatform?: string;
    prognosedDeparturePlatform?: string;
    plannedDeparturePlatform?: string;
    arrival?: string;
    plannedArrival?: string;
    prognosedDeparture?: string;
    arrivalDelay?: number;
    arrivalPlatform?: string;
    prognosedArrivalPlatform?: string;
    plannedArrivalPlatform?: string;
    stopovers?: ReadonlyArray<StopOver>;
    schedule?: number;
    price?: Price;
    operator?: number;
    direction?: string;
    line?: Line;
    reachable?: boolean;
    cancelled?: boolean;
    walking?: boolean;
    loadFactor?: string;
    distance?: number;
    public?: boolean;
    transfer?: boolean;
    cycle?: Cycle;
    alternatives?: ReadonlyArray<Alternative>;
    polyline?: FeatureCollection;
    remarks?: ReadonlyArray<Hint | Status | Warning>;
    scheduledDays?: ScheduledDays;
}
export interface TripWithRealtimeData extends RealtimeDataUpdatedAt {
    trip: Trip;
}
export interface TripsWithRealtimeData extends RealtimeDataUpdatedAt {
    trips: ReadonlyArray<Trip>;
}
export interface WarningsWithRealtimeData extends RealtimeDataUpdatedAt {
    remarks: ReadonlyArray<Warning>;
}
export interface LinesWithRealtimeData extends RealtimeDataUpdatedAt {
    lines?: ReadonlyArray<Line>;
}
export interface Price {
    amount: number;
    currency: string;
    hint?: string;
}
export interface Alternative {
    tripId: string;
    direction?: string;
    location?: Location;
    line?: Line;
    stop?: Station | Stop;
    when?: string;
    plannedWhen?: string;
    prognosedWhen?: string;
    delay?: number;
    platform?: string;
    plannedPlatform?: string;
    prognosedPlatform?: string;
    remarks?: ReadonlyArray<Hint | Status | Warning>;
    cancelled?: boolean;
    loadFactor?: string;
    provenance?: string;
    previousStopovers?: ReadonlyArray<StopOver>;
    nextStopovers?: ReadonlyArray<StopOver>;
    frames?: Frame[];
    polyline?: FeatureCollection;
    currentTripPosition?: Location;
    origin?: Station | Stop | Location;
    destination?: Station | Stop | Location;
    prognosisType?: PrognosisType;
}
export interface Departures extends RealtimeDataUpdatedAt {
    departures: ReadonlyArray<Alternative>;
}
export interface Arrivals extends RealtimeDataUpdatedAt {
    arrivals: ReadonlyArray<Alternative>;
}
/**
 * Leg of journey
 */
export interface Leg {
    tripId?: string;
    origin?: Station | Stop | Location;
    destination?: Station | Stop | Location;
    departure?: string;
    plannedDeparture?: string;
    prognosedArrival?: string;
    departureDelay?: number;
    departurePlatform?: string;
    prognosedDeparturePlatform?: string;
    plannedDeparturePlatform?: string;
    arrival?: string;
    plannedArrival?: string;
    prognosedDeparture?: string;
    arrivalDelay?: number;
    arrivalPlatform?: string;
    prognosedArrivalPlatform?: string;
    plannedArrivalPlatform?: string;
    stopovers?: ReadonlyArray<StopOver>;
    schedule?: number;
    price?: Price;
    operator?: number;
    direction?: string;
    line?: Line;
    reachable?: boolean;
    cancelled?: boolean;
    walking?: boolean;
    loadFactor?: string;
    distance?: number;
    public?: boolean;
    transfer?: boolean;
    cycle?: Cycle;
    alternatives?: ReadonlyArray<Alternative>;
    polyline?: FeatureCollection;
    remarks?: ReadonlyArray<Hint | Status | Warning>;
    currentLocation?: Location;
    departurePrognosisType?: PrognosisType;
    arrivalPrognosisType?: PrognosisType;
    checkin?: boolean;
}
export interface ScheduledDays {
    [day: string]: boolean;
}
/**
 * A journey is a computed set of directions to get from A to B at a specific time.
 * It would typically be the result of a route planning algorithm.
 */
export interface Journey {
    type: "journey";
    legs: ReadonlyArray<Leg>;
    refreshToken?: string;
    remarks?: ReadonlyArray<Hint | Status | Warning>;
    price?: Price;
    cycle?: Cycle;
    scheduledDays?: ScheduledDays;
}
export interface Journeys extends RealtimeDataUpdatedAt {
    earlierRef?: string;
    laterRef?: string;
    journeys?: ReadonlyArray<Journey>;
}
export interface JourneyWithRealtimeData extends RealtimeDataUpdatedAt {
    journey: Journey;
}
export interface Duration {
    duration: number;
    stations: ReadonlyArray<Station | Stop | Location>;
}
export interface DurationsWithRealtimeData extends RealtimeDataUpdatedAt {
    reachable: ReadonlyArray<Duration>;
}
export interface Frame {
    origin: Stop | Location;
    destination: Stop | Location;
    t?: number;
}
export interface Movement {
    direction?: string;
    tripId?: string;
    line?: Line;
    location?: Location;
    nextStopovers?: ReadonlyArray<StopOver>;
    frames?: Frame[];
    polyline?: FeatureCollection;
}
export interface Radar extends RealtimeDataUpdatedAt {
    movements?: ReadonlyArray<Movement>;
}
export interface ServerInfo extends RealtimeDataUpdatedAt {
    hciVersion?: string;
    timetableStart?: string;
    timetableEnd?: string;
    serverTime?: string | number;
}
export interface JourneysOptionsCommon {
    /**
     * departure date, undefined corresponds to Date.Now
     * @default undefined
     */
    departure?: Date;
    /**
     * arrival date, departure and arrival are mutually exclusive.
     * @default undefined
     */
    arrival?: Date;
    /**
     * earlierThan, use {@link Journeys#earlierRef}, earlierThan and departure/arrival are mutually exclusive.
     * @default undefined
     */
    earlierThan?: string;
    /**
     * laterThan, use {@link Journeys#laterRef}, laterThan and departure/arrival are mutually exclusive.
     *  @default undefined
     */
    laterThan?: string;
    /**
     * how many search results?
     * @default 3
     */
    results?: number;
    /**
     * let journeys pass this station
     * @default undefined
     */
    via?: string;
    /**
     * return stations on the way?
     * @default false
     */
    stopovers?: boolean;
    /**
     * Maximum nr of transfers. Default: Let HAFAS decide.
     * @default 10
     */
    transfers?: number;
    /**
     * minimum time for a single transfer in minutes
     * @default 10
     */
    transferTime?: number;
    /**
     * 'none', 'partial' or 'complete'
     *  @default none
     */
    accessibility?: string;
    /**
     * only bike-friendly journeys
     * @default false
     */
    bike?: boolean;
    products?: Products;
    /**
     * return tickets? only available with some profiles
     * @default false
     */
    tickets?: boolean;
    /**
     * return a shape for each leg?
     * @default false
     */
    polylines?: boolean;
    /**
     * parse & expose sub-stops of stations?
     * @default false
     */
    subStops?: boolean;
    /**
     * parse & expose entrances of stops/stations?
     * @default true
     */
    entrances?: boolean;
    /**
     * parse & expose hints & warnings?
     * @default true
     */
    remarks?: boolean;
    /**
     * 'slow', 'normal', 'fast'
     * @default slow
     */
    walkingSpeed?: string;
    /**
     * start with walking
     * @default false
     */
    startWithWalking?: boolean;
    /**
     * language to get results in
     * @default en
     */
    language?: string;
    /**
     * parse which days each journey is valid on
     * @default false
     */
    scheduledDays?: boolean;
    /**
     * @deprecated
     */
    when?: Date;
}
export interface LoyaltyCard {
    type: string;
    discount?: number;
    class?: number;
}
export type AgeGroup = "B" | "K" | "Y" | "E" | "S";
export type RoutingMode = "OFF" | "INFOS" | "FULL" | "REALTIME" | "SERVER_DEFAULT" | "HYBRID";
/**
 * JourneysOptions specific to Db Profile
 */
export interface JourneysOptionsDbProfile {
    /**
     * firstClass
     * @default false
     */
    firstClass?: boolean;
    /**
     * ageGroup
     * @default none
     */
    ageGroup?: AgeGroup;
    /**
     * age
     * @default none
     */
    age?: number;
    /**
     *  LoyaltyCard
     *  @default none
     */
    loyaltyCard?: LoyaltyCard;
    /**
     *  RoutingMode
     *  @default none
     */
    routingMode?: RoutingMode;
}
export type JourneysOptions = JourneysOptionsCommon & JourneysOptionsDbProfile;
export interface JourneysFromTripOptions {
    /**
     * return stations on the way?
     * @default false
     */
    stopovers?: boolean;
    /**
     * minimum time for a single transfer in minutes
     * @default 0
     */
    transferTime?: number;
    /**
     * 'none', 'partial' or 'complete'
     * @default 'none'
     */
    accessibility?: string;
    /**
     * return stations on the way?
     * @default false
     */
    /**
     * return tickets?
     * @default false
     */
    tickets?: boolean;
    /**
     * return leg shapes?
     * @default false
     */
    polylines?: boolean;
    /**
     * parse & expose sub-stops of stations?
     * @default true
     */
    subStops?: boolean;
    /**
     * parse & expose entrances of stops/stations?
     * @default true
     */
    entrances?: boolean;
    /**
     * parse & expose hints & warnings?
     * @default true
     */
    remarks?: boolean;
    /**
     * products
     * @default undefined
     */
    products?: Products;
}
export interface LocationsOptions {
    /**
     * find only exact matches?
     * @default true
     */
    fuzzy?: boolean;
    /**
     * how many search results?
     * @default 10
     */
    results?: number;
    /**
     * return stops/stations?
     * @default true
     */
    stops?: boolean;
    /**
     * return addresses
     * @default false
     */
    addresses?: boolean;
    /**
     * points of interest
     * @default true
     */
    poi?: boolean;
    /**
     * parse & expose sub-stops of stations?
     * @default false
     */
    subStops?: boolean;
    /**
     * parse & expose entrances of stops/stations?
     * @default true
     */
    entrances?: boolean;
    /**
     * parse & expose lines at each stop/station?
     * @default false
     */
    linesOfStops?: boolean;
    /**
     * Language of the results
     * @default en
     */
    language?: string;
}
export interface TripOptions {
    /**
     * return stations on the way?
     * @default true
     */
    stopovers?: boolean;
    /**
     * return a shape for the trip?
     * @default false
     */
    polyline?: boolean;
    /**
     * parse & expose sub-stops of stations?
     * @default true
     */
    subStops?: boolean;
    /**
     * parse & expose entrances of stops/stations?
     * @default true
     */
    entrances?: boolean;
    /**
     * parse & expose hints & warnings?
     * @default true
     */
    remarks?: boolean;
    /**
     * parse which days each journey is valid on
     * @default false
     */
    scheduledDays?: boolean;
    /**
     * Language of the results
     * @default en
     */
    language?: string;
}
export interface StopOptions {
    /**
     * parse & expose lines at the stop/station?
     * @default false
     */
    linesOfStops?: boolean;
    /**
     * parse & expose sub-stops of stations?
     * @default true
     */
    subStops?: boolean;
    /**
     * parse & expose entrances of stops/stations?
     * @default true
     */
    entrances?: boolean;
    /**
     * parse & expose hints & warnings?
     * @default true
     */
    remarks?: boolean;
    /**
     * Language of the results
     * @default en
     */
    language?: string;
}
export interface DeparturesArrivalsOptions {
    /**
     * departure date, undefined corresponds to Date.Now
     * @default undefined
     */
    when?: Date;
    /**
     * only show departures heading to this station
     * @default undefined
     */
    direction?: string;
    /**
     * filter by line ID
     * @default undefined
     */
    line?: string;
    /**
     * show departures for the next n minutes
     * @default 120
     */
    duration?: number;
    /**
     * max. number of results; `null` means "whatever HAFAS wants"
     * @default 10
     */
    results?: number;
    /**
     * parse & expose sub-stops of stations?
     * @default true
     */
    subStops?: boolean;
    /**
     * parse & expose entrances of stops/stations?
     * @default true
     */
    entrances?: boolean;
    /**
     * parse & expose lines at the stop/station?
     * @default false
     */
    linesOfStops?: boolean;
    /**
     * parse & expose hints & warnings?
     * @default false
     */
    remarks?: boolean;
    /**
     * fetch & parse previous/next stopovers?
     * @default false
     */
    stopovers?: boolean;
    /**
     * departures at related stations
     * @default false
     */
    includeRelatedStations?: boolean;
    /**
     * products
     * @default undefined
     */
    products?: Products;
    /**
     * language
     * @default en
     */
    language?: string;
}
export interface RefreshJourneyOptions {
    /**
     * return stations on the way?
     * @default false
     */
    stopovers?: boolean;
    /**
     * return a shape for each leg?
     * @default false
     */
    polylines?: boolean;
    /**
     * return tickets? only available with some profiles
     * @default false
     */
    tickets?: boolean;
    /**
     * parse & expose sub-stops of stations?
     * @default true
     */
    subStops?: boolean;
    /**
     * parse & expose entrances of stops/stations?
     * @default true
     */
    entrances?: boolean;
    /**
     * parse & expose hints & warnings?
     * @default true
     */
    remarks?: boolean;
    /**
     * parse & expose dates the journey is valid on?
     * @default false
     */
    scheduledDays?: boolean;
    /**
     * language
     * @default en
     */
    language?: string;
}
export interface NearByOptions {
    /**
     * maximum number of results
     * @default 8
     */
    results?: number;
    /**
     * maximum walking distance in meters
     * @default undefined
     */
    distance?: number;
    /**
     * return points of interest?
     * @default false
     */
    poi?: boolean;
    /**
     * return stops/stations?
     * @default true
     */
    stops?: boolean;
    /**
     * products
     * @default undefined
     */
    products?: Products;
    /**
     * parse & expose sub-stops of stations?
     * @default true
     */
    subStops?: boolean;
    /**
     * parse & expose entrances of stops/stations?
     * @default true
     */
    entrances?: boolean;
    /**
     * parse & expose lines at each stop/station?
     * @default false
     */
    linesOfStops?: boolean;
    /**
     * language
     * @default en
     */
    language?: string;
}
export interface ReachableFromOptions {
    /**
     * when
     * @default undefined
     */
    when?: Date;
    /**
     * maximum of transfers
     * @default 5
     */
    maxTransfers?: number;
    /**
     * maximum travel duration in minutes, pass `null` for infinite
     * @default 20
     */
    maxDuration?: number;
    /**
     * products
     * @default undefined
     */
    products?: Products;
    /**
     * parse & expose sub-stops of stations?
     * @default true
     */
    subStops?: boolean;
    /**
     * parse & expose entrances of stops/stations?
     * @default true
     */
    entrances?: boolean;
    /**
     * return leg shapes?
     * @default false
     */
    polylines?: boolean;
}
export interface BoundingBox {
    north: number;
    west: number;
    south: number;
    east: number;
}
export interface RadarOptions {
    /**
     * maximum number of vehicles
     * @default 256
     */
    results?: number;
    /**
     * nr of frames to compute
     * @default 3
     */
    frames?: number;
    /**
     * optionally an object of booleans
     * @default null
     */
    products?: Products;
    /**
     * compute frames for the next n seconds
     * @default 20
     */
    duration?: number;
    /**
     * parse & expose sub-stops of stations?
     * @default true
     */
    subStops?: boolean;
    /**
     * parse & expose entrances of stops/stations?
     * @default true
     */
    entrances?: boolean;
    /**
     * return a shape for the trip?
     * @default false
     */
    polylines?: boolean;
    /**
     * when
     * @default undefined
     */
    when?: Date;
}
export interface Filter {
    type: string;
    mode: string;
    value: string;
}
export interface TripsByNameOptions {
    /**
     * departure date, undefined corresponds to Date.Now
     * @default undefined
     */
    when?: Date;
    fromWhen?: Date;
    untilWhen?: Date;
    onlyCurrentlyRunning?: boolean;
    products?: Products;
    currentlyStoppingAt?: string;
    lineName?: string;
    operatorNames?: string[];
    additionalFilters?: Filter[];
}
export interface RemarksOptions {
    from?: Date | number;
    to?: Date | number;
    /**
     * maximum number of remarks
     * @default 100
     */
    results?: number;
    products?: Products;
    /**
     * return leg shapes? (not supported by all endpoints)
     * @default false
     */
    polylines?: boolean;
    /**
     * Language of the results
     * @default en
     */
    language?: string;
}
export interface LinesOptions {
    /**
     * Language of the results
     * @default en
     */
    language?: string;
}
export interface ServerOptions {
    /**
     * versionInfo
     * @default true
     */
    versionInfo?: boolean;
    /**
     * Language of the results
     * @default en
     */
    language?: string;
}
export interface HafasClient {
    /**
     * Retrieves journeys
     * @param from uid of station
     * @param to uid of station
     * @param options options
     */
    journeys: (
        from: string | Station | Stop | Location,
        to: string | Station | Stop | Location,
        options: JourneysOptions | undefined,
    ) => Promise<Journeys>;
    /**
     * refreshes a Journey
     * @param refreshToken refreshToken must be a string, taken from {@link journey#refreshToken}
     * @param options options
     */
    refreshJourney?: (
        refreshToken: string,
        options: RefreshJourneyOptions | undefined,
    ) => Promise<JourneyWithRealtimeData>;
    /**
     * Refetch information about a trip
     * @param id trip id, see {@link Leg#tripId}
     * @param name name
     * @param options options
     */
    trip?: (id: string, options: TripOptions | undefined) => Promise<TripWithRealtimeData>;
    /**
     * Retrieves departures
     * @param station uid of station
     * @param options options
     */
    departures: (
        station: string | Station | Stop | Location,
        options: DeparturesArrivalsOptions | undefined,
    ) => Promise<Departures>;
    /**
     * Retrieves arrivals
     * @param station uid of station
     * @param options options
     */
    arrivals: (
        station: string | Station | Stop | Location,
        options: DeparturesArrivalsOptions | undefined,
    ) => Promise<Arrivals>;
    /**
     * Retrieves journeys from trip id to station
     * @param fromTripId id of trip
     * @param previousStopover previous stopover
     * @param to uid of station or Station or Stop
     * @param options options
     */
    journeysFromTrip?: (
        fromTripId: string,
        previousStopover: StopOver,
        to: string | Station | Stop | Location,
        opt: JourneysFromTripOptions | undefined,
    ) => Promise<Journeys>;
    /**
     * Retrieves locations or stops
     * @param name name of station
     * @param options options for search
     */
    locations: (
        name: string,
        options: LocationsOptions | undefined,
    ) => Promise<ReadonlyArray<Station | Stop | Location>>;
    /**
     * Retrieves information about a stop
     * @param id uid of station
     * @param options options for search
     */
    stop: (id: string | Stop, options: StopOptions | undefined) => Promise<Station | Stop | Location>;
    /**
     * Retrieves nearby stops from location
     * @param location location
     * @param options options for search
     */
    nearby: (
        location: Location,
        options: NearByOptions | undefined,
    ) => Promise<ReadonlyArray<Station | Stop | Location>>;
    /**
     * Retrieves stations reachable within a certain time from a location
     * @param address location
     * @param options options for search
     */
    reachableFrom?: (
        address: Location,
        options: ReachableFromOptions | undefined,
    ) => Promise<DurationsWithRealtimeData>;
    /**
     * Retrieves all vehicles currently in an area.
     * @param box area
     * @param options options for search
     */
    radar?: (box: BoundingBox, options: RadarOptions | undefined) => Promise<Radar>;
    /**
     * Retrieves trips by name.
     * @param lineNameOrFahrtNr string
     * @param options options for search
     */
    tripsByName?: (
        lineNameOrFahrtNr: string,
        options: TripsByNameOptions | undefined,
    ) => Promise<TripsWithRealtimeData>;
    /**
     * Fetches all remarks known to the HAFAS endpoint
     * @param opt RemarksOptions
     */
    remarks?: (opt: RemarksOptions | undefined) => Promise<WarningsWithRealtimeData>;
    /**
     * Fetches all lines known to the HAFAS endpoint
     * @param query string
     * @param opt LinesOptions
     */
    lines?: (query: string, opt: LinesOptions | undefined) => Promise<LinesWithRealtimeData>;
    /**
     * Fetches meta information from the HAFAS endpoint
     * @param opt ServerOptions
     */
    serverInfo: (opt: ServerOptions | undefined) => Promise<ServerInfo>;
}

export function createClient(commonProfile: Profile, userAgent: string, opt?: any): HafasClient;
