// Type definitions for hafas-client 5.12
// Project: https://github.com/public-transport/hafas-client
// Definitions by: Jürgen Bergmann <https://github.com/bergmannjg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = createClient;

declare function createClient(commonProfile: createClient.Profile, userAgent: string, opt?: any): createClient.HafasClient;

declare namespace createClient {
    /**
     * A ProductType relates to how a means of transport "works" in local context.
     * Example: Even though S-Bahn and U-Bahn in Berlin are both trains, they have different operators, service patterns,
     * stations and look different. Therefore, they are two distinct products subway and suburban.
     */
    interface ProductType {
        id: string;
        mode: 'train' | 'bus' | 'watercraft' | 'taxi' | 'gondola' | 'aircraft' | 'car' | 'bicycle' | 'walking';
        name: string;
        short: string;
        bitmasks: number[];
        default: boolean;
    }
    /**
     * A profile is a specific customisation for each endpoint.
     * It parses data from the API differently, add additional information, or enable non-default methods.
     */
    interface Profile {
        locale: string;
        timezone: string;
        endpoint: string;
        products: ReadonlyArray<ProductType>;
        trip?: boolean | undefined;
        radar?: boolean | undefined;
        refreshJourney?: boolean | undefined;
        reachableFrom?: boolean | undefined;
        journeysWalkingSpeed?: boolean | undefined;
        tripsByName?: boolean | undefined;
        remarks?: boolean | undefined;
        lines?: boolean | undefined;
    }
    /**
     * A location object is used by other items to indicate their locations.
     */
    interface Location {
        type: 'location';
        id?: string | undefined;
        name?: string | undefined;
        poi?: boolean | undefined;
        address?: string | undefined;
        longitude?: number | undefined;
        latitude?: number | undefined;
        altitude?: number | undefined;
        distance?: number | undefined;
    }
    /** Each public transportation network exposes its products as boolean properties. See {@link ProductType} */
    interface Products {
        [product: string]: boolean;
    }
    interface Facilities {
        [product: string]: string | boolean;
    }
    interface ReisezentrumOpeningHours {
        Mo?: string | undefined;
        Di?: string | undefined;
        Mi?: string | undefined;
        Do?: string | undefined;
        Fr?: string | undefined;
        Sa?: string | undefined;
        So?: string | undefined;
    }
    /**
     * A station is a larger building or area that can be identified by a name.
     * It is usually represented by a single node on a public transport map.
     * Whereas a stop usually specifies a location, a station often is a broader area
     * that may span across multiple levels or buildings.
     */
    interface Station {
        type: 'station';
        id?: string | undefined;
        name?: string | undefined;
        station?: Station | undefined;
        location?: Location | undefined;
        products?: Products | undefined;
        isMeta?: boolean | undefined;
        /** region ids */
        regions?: ReadonlyArray<string> | undefined;
        facilities?: Facilities | undefined;
        reisezentrumOpeningHours?: ReisezentrumOpeningHours | undefined;
        stops?: ReadonlyArray<Station | Stop | Location> | undefined;
        entrances?: ReadonlyArray<Location> | undefined;
        transitAuthority?: string | undefined;
        distance?: number | undefined;
    }
    /**
     * Ids of a Stop, i.e. dhid as 'DELFI Haltestellen ID'
     */
    interface Ids {
        [id: string]: string;
    }
    /**
     * A stop is a single small point or structure at which vehicles stop.
     * A stop always belongs to a station. It may for example be a sign, a basic shelter or a railway platform.
     */
    interface Stop {
        type: 'stop';
        id?: string | undefined;
        name?: string | undefined;
        location?: Location | undefined;
        products?: Products | undefined;
        lines?: ReadonlyArray<Line> | undefined;
        isMeta?: boolean | undefined;
        reisezentrumOpeningHours?: ReisezentrumOpeningHours | undefined;
        ids?: Ids | undefined;
        loadFactor?: string | undefined;
        entrances?: ReadonlyArray<Location> | undefined;
        transitAuthority?: string | undefined;
        distance?: number | undefined;
    }
    /**
     * A region is a group of stations, for example a metropolitan area or a geographical or cultural region.
     */
    interface Region {
        type: 'region';
        id: string;
        name: string;
        /** station ids */
        stations: ReadonlyArray<string>;
    }
    interface Line {
        type: 'line';
        id?: string | undefined;
        name?: string | undefined;
        adminCode?: string | undefined;
        fahrtNr?: string | undefined;
        additionalName?: string | undefined;
        product?: string | undefined;
        public?: boolean | undefined;
        mode?: 'train' | 'bus' | 'watercraft' | 'taxi' | 'gondola' | 'aircraft' | 'car' | 'bicycle' | 'walking' | undefined;
        /** routes ids */
        routes?: ReadonlyArray<string> | undefined;
        operator?: Operator | undefined;
        express?: boolean | undefined;
        metro?: boolean | undefined;
        night?: boolean | undefined;
        nr?: number | undefined;
        symbol?: string | undefined;
        directions?: ReadonlyArray<string> | undefined;
    }
    /**
     * A route represents a single set of stations, of a single line.
     */
    interface Route {
        type: 'route';
        id: string;
        line: string;
        mode: 'train' | 'bus' | 'watercraft' | 'taxi' | 'gondola' | 'aircraft' | 'car' | 'bicycle' | 'walking';
        /** stop ids */
        stops: ReadonlyArray<string>;
    }
    interface Cycle {
        min?: number | undefined;
        max?: number | undefined;
        nr?: number | undefined;
    }
    interface ArrivalDeparture {
        arrival?: number | undefined;
        departure?: number | undefined;
    }
    /**
     * There are many ways to format schedules of public transport routes.
     * This one tries to balance the amount of data and consumability.
     * It is specifically geared towards urban public transport, with frequent trains and homogenous travels.
     */
    interface Schedule {
        type: 'schedule';
        id: string;
        route: string;
        mode: 'train' | 'bus' | 'watercraft' | 'taxi' | 'gondola' | 'aircraft' | 'car' | 'bicycle' | 'walking';
        sequence: ReadonlyArray<ArrivalDeparture>;
        /** array of Unix timestamps */
        starts: ReadonlyArray<string>;
    }
    interface Operator {
        type: 'operator';
        id: string;
        name: string;
    }
    interface Hint {
        type: 'hint' | 'status' | 'foreign-id' | 'local-fare-zone' | 'stop-website' | 'stop-dhid' | 'transit-authority';
        code?: string | undefined;
        summary?: string | undefined;
        text: string;
        tripId?: string | undefined;
    }
    interface Warning {
        type: 'status' | 'warning';
        id?: number | undefined;
        icon?: string | undefined;
        summary?: string | undefined;
        text: string;
        category?: string | undefined;
        priority?: number | undefined;
        products?: Products | undefined;
        edges?: any[] | undefined;
        events?: any[] | undefined;
        validFrom?: string | undefined;
        validUntil?: string | undefined;
        modified?: string | undefined;
        company?: any;
        categories?: any[] | undefined;
        affectedLines?: Line[] | undefined;
        fromStops?: any[] | undefined;
        toStops?: any[] | undefined;
    }
    interface Geometry {
        type: 'Point';
        coordinates: number[];
    }
    interface Feature {
        type: 'Feature';
        properties?: Station | Stop | object | undefined;
        geometry: Geometry;
    }
    interface FeatureCollection {
        type: 'FeatureCollection';
        features: ReadonlyArray<Feature>;
    }
    /**
     * A stopover represents a vehicle stopping at a stop/station at a specific time.
     */
    interface StopOver {
        stop: Station | Stop;
        /** null, if last stopOver of trip */
        departure?: string | undefined;
        departureDelay?: number | undefined;
        prognosedDeparture?: string | undefined;
        plannedDeparture?: string | undefined;
        departurePlatform?: string | undefined;
        prognosedDeparturePlatform?: string | undefined;
        plannedDeparturePlatform?: string | undefined;
        /** null, if first stopOver of trip */
        arrival?: string | undefined;
        arrivalDelay?: number | undefined;
        prognosedArrival?: string | undefined;
        plannedArrival?: string | undefined;
        arrivalPlatform?: string | undefined;
        prognosedArrivalPlatform?: string | undefined;
        plannedArrivalPlatform?: string | undefined;
        remarks?: ReadonlyArray<Hint | Warning> | undefined;
        passBy?: boolean | undefined;
        cancelled?: boolean | undefined;
    }
    /**
     * Trip – a vehicle stopping at a set of stops at specific times
     */
    interface Trip {
        id: string;
        origin: Station | Stop;
        destination: Station | Stop;
        departure?: string | undefined;
        plannedDeparture?: string | undefined;
        prognosedArrival?: string | undefined;
        departureDelay?: number | undefined;
        departurePlatform?: string | undefined;
        prognosedDeparturePlatform?: string | undefined;
        plannedDeparturePlatform?: string | undefined;
        arrival?: string | undefined;
        plannedArrival?: string | undefined;
        prognosedDeparture?: string | undefined;
        arrivalDelay?: number | undefined;
        arrivalPlatform?: string | undefined;
        prognosedArrivalPlatform?: string | undefined;
        plannedArrivalPlatform?: string | undefined;
        stopovers?: ReadonlyArray<StopOver> | undefined;
        schedule?: number | undefined;
        price?: Price | undefined;
        operator?: number | undefined;
        direction?: string | undefined;
        line?: Line | undefined;
        reachable?: boolean | undefined;
        cancelled?: boolean | undefined;
        walking?: boolean | undefined;
        loadFactor?: string | undefined;
        distance?: number | undefined;
        public?: boolean | undefined;
        transfer?: boolean | undefined;
        cycle?: Cycle | undefined;
        alternatives?: ReadonlyArray<Alternative> | undefined;
        polyline?: FeatureCollection | undefined;
        remarks?: ReadonlyArray<Hint | Warning> | undefined;
    }
    interface Price {
        amount: number;
        currency: string;
        hint?: string | undefined;
    }
    interface Alternative {
        tripId: string;
        direction?: string | undefined;
        line?: Line | undefined;
        stop?: Station | Stop | undefined;
        when?: string | undefined;
        plannedWhen?: string | undefined;
        prognosedWhen?: string | undefined;
        delay?: number | undefined;
        platform?: string | undefined;
        plannedPlatform?: string | undefined;
        prognosedPlatform?: string | undefined;
        remarks?: ReadonlyArray<Hint | Warning> | undefined;
        cancelled?: boolean | undefined;
        loadFactor?: string | undefined;
        provenance?: string | undefined;
        previousStopovers?: ReadonlyArray<StopOver> | undefined;
        nextStopovers?: ReadonlyArray<StopOver> | undefined;
    }
    /**
     * Leg of journey
     */
    interface Leg {
        tripId?: string | undefined;
        origin: Station | Stop;
        destination: Station | Stop;
        departure?: string | undefined;
        plannedDeparture?: string | undefined;
        prognosedArrival?: string | undefined;
        departureDelay?: number | undefined;
        departurePlatform?: string | undefined;
        prognosedDeparturePlatform?: string | undefined;
        plannedDeparturePlatform?: string | undefined;
        arrival?: string | undefined;
        plannedArrival?: string | undefined;
        prognosedDeparture?: string | undefined;
        arrivalDelay?: number | undefined;
        arrivalPlatform?: string | undefined;
        prognosedArrivalPlatform?: string | undefined;
        plannedArrivalPlatform?: string | undefined;
        stopovers?: ReadonlyArray<StopOver> | undefined;
        schedule?: number | undefined;
        price?: Price | undefined;
        operator?: number | undefined;
        direction?: string | undefined;
        line?: Line | undefined;
        reachable?: boolean | undefined;
        cancelled?: boolean | undefined;
        walking?: boolean | undefined;
        loadFactor?: string | undefined;
        distance?: number | undefined;
        public?: boolean | undefined;
        transfer?: boolean | undefined;
        cycle?: Cycle | undefined;
        alternatives?: ReadonlyArray<Alternative> | undefined;
        polyline?: FeatureCollection | undefined;
        remarks?: ReadonlyArray<Hint | Warning> | undefined;
    }
    interface ScheduledDays {
        [day: string]: boolean;
    }
    /**
     * A journey is a computed set of directions to get from A to B at a specific time.
     * It would typically be the result of a route planning algorithm.
     */
    interface Journey {
        type: 'journey';
        legs: ReadonlyArray<Leg>;
        refreshToken?: string | undefined;
        remarks?: ReadonlyArray<Hint | Warning> | undefined;
        price?: Price | undefined;
        cycle?: Cycle | undefined;
        scheduledDays?: ScheduledDays | undefined;
    }
    interface Journeys {
        earlierRef?: string | undefined;
        laterRef?: string | undefined;
        journeys?: ReadonlyArray<Journey> | undefined;
        realtimeDataFrom?: number | undefined;
    }
    interface Duration {
        duration: number;
        stations: ReadonlyArray<Station | Stop | Location>;
    }
    interface Frame {
        origin: Stop | Location;
        destination: Stop | Location;
        t?: number | undefined;
    }
    interface Movement {
        direction?: string | undefined;
        tripId?: string | undefined;
        line?: Line | undefined;
        location?: Location | undefined;
        nextStopovers?: ReadonlyArray<StopOver> | undefined;
        frames?: ReadonlyArray<Frame> | undefined;
        polyline?: FeatureCollection | undefined;
    }
    interface ServerInfo {
        timetableStart?: string | undefined;
        timetableEnd?: string | undefined;
        serverTime?: string | number | undefined;
        realtimeDataUpdatedAt?: number | undefined;
    }
    interface JourneysOptions {
        /**
         * departure date, undefined corresponds to Date.Now
         * @default undefined
         */
        departure?: Date | undefined;
        /**
         * arrival date, departure and arrival are mutually exclusive.
         * @default undefined
         */
        arrival?: Date | undefined;
        /**
         * earlierThan, use {@link Journeys#earlierRef}, earlierThan and departure/arrival are mutually exclusive.
         * @default undefined
         */
        earlierThan?: string | undefined;
        /**
         * laterThan, use {@link Journeys#laterRef}, laterThan and departure/arrival are mutually exclusive.
         *  @default undefined
         */
        laterThan?: string | undefined;
        /**
         * how many search results?
         * @default 3
         */
        results?: number | undefined;
        /**
         * let journeys pass this station
         * @default undefined
         */
        via?: string | undefined;
        /**
         * return stations on the way?
         * @default false
         */
        stopovers?: boolean | undefined;
        /**
         * Maximum nr of transfers. Default: Let HAFAS decide.
         * @default 10
         */
        transfers?: number | undefined;
        /**
         * minimum time for a single transfer in minutes
         * @default 10
         */
        transferTime?: number | undefined;
        /**
         * 'none', 'partial' or 'complete'
         *  @default none
         */
        accessibility?: string | undefined;
        /**
         * only bike-friendly journeys
         * @default false
         */
        bike?: boolean | undefined;
        products?: Products | undefined;
        /**
         * return tickets? only available with some profiles
         * @default false
         */
        tickets?: boolean | undefined;
        /**
         * return a shape for each leg?
         * @default false
         */
        polylines?: boolean | undefined;
        /**
         * parse & expose sub-stops of stations?
         * @default false
         */
        subStops?: boolean | undefined;
        /**
         * parse & expose entrances of stops/stations?
         * @default true
         */
        entrances?: boolean | undefined;
        /**
         * parse & expose hints & warnings?
         * @default true
         */
        remarks?: boolean | undefined;
        /**
         * 'slow', 'normal', 'fast'
         * @default slow
         */
        walkingSpeed?: string | undefined;
        /**
         * start with walking
         * @default false
         */
        startWithWalking?: boolean | undefined;
        /**
         * language to get results in
         * @default en
         */
        language?: string | undefined;
        /**
         * parse which days each journey is valid on
         * @default false
         */
        scheduledDays?: boolean | undefined;
        /**
         * @deprecated
         */
        when?: Date | undefined;
    }
    interface LocationsOptions {
        /**
         * find only exact matches?
         * @default true
         */
        fuzzy?: boolean | undefined;
        /**
         * how many search results?
         * @default 10
         */
        results?: number | undefined;
        /**
         * return stops/stations?
         * @default true
         */
        stops?: boolean | undefined;
        /**
         * return addresses
         * @default false
         */
        addresses?: boolean | undefined;
        /**
         * points of interest
         * @default true
         */
        poi?: boolean | undefined;
        /**
         * parse & expose sub-stops of stations?
         * @default false
         */
        subStops?: boolean | undefined;
        /**
         * parse & expose entrances of stops/stations?
         * @default true
         */
        entrances?: boolean | undefined;
        /**
         * parse & expose lines at each stop/station?
         * @default false
         */
        linesOfStops?: boolean | undefined;
        /**
         * Language of the results
         * @default en
         */
        language?: string | undefined;
    }
    interface TripOptions {
        /**
         * return stations on the way?
         * @default true
         */
        stopovers?: boolean | undefined;
        /**
         * return a shape for the trip?
         * @default false
         */
        polyline?: boolean | undefined;
        /**
         * parse & expose sub-stops of stations?
         * @default true
         */
        subStops?: boolean | undefined;
        /**
         * parse & expose entrances of stops/stations?
         * @default true
         */
        entrances?: boolean | undefined;
        /**
         * parse & expose hints & warnings?
         * @default true
         */
        remarks?: boolean | undefined;
        /**
         * Language of the results
         * @default en
         */
        language?: string | undefined;
    }
    interface StopOptions {
        /**
         * parse & expose lines at the stop/station?
         * @default false
         */
        linesOfStops?: boolean | undefined;
        /**
         * parse & expose sub-stops of stations?
         * @default true
         */
        subStops?: boolean | undefined;
        /**
         * parse & expose entrances of stops/stations?
         * @default true
         */
        entrances?: boolean | undefined;
        /**
         * parse & expose hints & warnings?
         * @default true
         */
        remarks?: boolean | undefined;
        /**
         * Language of the results
         * @default en
         */
        language?: string | undefined;
    }
    interface DeparturesArrivalsOptions {
        /**
         * departure date, undefined corresponds to Date.Now
         * @default undefined
         */
        when?: Date | undefined;
        /**
         * only show departures heading to this station
         * @default undefined
         */
        direction?: string | undefined;
        /**
         * filter by line ID
         * @default undefined
         */
        line?: string | undefined;
        /**
         * show departures for the next n minutes
         * @default 120
         */
        duration?: number | undefined;
        /**
         * max. number of results; `null` means "whatever HAFAS wants"
         * @default 10
         */
        results?: number | undefined;
        /**
         * parse & expose sub-stops of stations?
         * @default true
         */
        subStops?: boolean | undefined;
        /**
         * parse & expose entrances of stops/stations?
         * @default true
         */
        entrances?: boolean | undefined;
        /**
         * parse & expose lines at the stop/station?
         * @default false
         */
        linesOfStops?: boolean | undefined;
        /**
         * parse & expose hints & warnings?
         * @default false
         */
        remarks?: boolean | undefined;
        /**
         * fetch & parse previous/next stopovers?
         * @default false
         */
        stopovers?: boolean | undefined;
        /**
         * departures at related stations
         * @default false
         */
        includeRelatedStations?: boolean | undefined;
        /**
         * language
         * @default en
         */
        language?: string | undefined;
    }
    interface RefreshJourneyOptions {
        /**
         * return stations on the way?
         * @default false
         */
        stopovers?: boolean | undefined;
        /**
         * return a shape for each leg?
         * @default false
         */
        polylines?: boolean | undefined;
        /**
         * return tickets? only available with some profiles
         * @default false
         */
        tickets?: boolean | undefined;
        /**
         * parse & expose sub-stops of stations?
         * @default true
         */
        subStops?: boolean | undefined;
        /**
         * parse & expose entrances of stops/stations?
         * @default true
         */
        entrances?: boolean | undefined;
        /**
         * parse & expose hints & warnings?
         * @default true
         */
        remarks?: boolean | undefined;
        /**
         * language
         * @default en
         */
        language?: string | undefined;
    }
    interface NearByOptions {
        /**
         * maximum number of results
         * @default 8
         */
        results?: number | undefined;
        /**
         * maximum walking distance in meters
         * @default undefined
         */
        distance?: number | undefined;
        /**
         * return points of interest?
         * @default false
         */
        poi?: boolean | undefined;
        /**
         * return stops/stations?
         * @default true
         */
        stops?: boolean | undefined;
        /**
         * parse & expose sub-stops of stations?
         * @default true
         */
        subStops?: boolean | undefined;
        /**
         * parse & expose entrances of stops/stations?
         * @default true
         */
        entrances?: boolean | undefined;
        /**
         * parse & expose lines at each stop/station?
         * @default false
         */
        linesOfStops?: boolean | undefined;
        /**
         * language
         * @default en
         */
        language?: string | undefined;
    }
    interface ReachableFromOptions {
        /**
         * when
         * @default undefined
         */
        when?: Date | undefined;
        /**
         * maximum of transfers
         * @default 5
         */
        maxTransfers?: number | undefined;
        /**
         * maximum travel duration in minutes, pass `null` for infinite
         * @default 20
         */
        maxDuration?: number | undefined;
        /**
         * products
         * @default undefined
         */
        products?: Products | undefined;
        /**
         * parse & expose sub-stops of stations?
         * @default true
         */
        subStops?: boolean | undefined;
        /**
         * parse & expose entrances of stops/stations?
         * @default true
         */
        entrances?: boolean | undefined;
    }
    interface BoundingBox {
        north: number;
        west: number;
        south: number;
        east: number;
    }
    interface RadarOptions {
        /**
         * maximum number of vehicles
         * @default 256
         */
        results?: number | undefined;
        /**
         * nr of frames to compute
         * @default 3
         */
        frames?: number | undefined;
        /**
         * optionally an object of booleans
         * @default null
         */
        products?: boolean | object | undefined;
        /**
         * compute frames for the next n seconds
         * @default 20
         */
        duration?: number | undefined;
        /**
         * parse & expose sub-stops of stations?
         * @default true
         */
        subStops?: boolean | undefined;
        /**
         * parse & expose entrances of stops/stations?
         * @default true
         */
        entrances?: boolean | undefined;
        /**
         * return a shape for the trip?
         * @default false
         */
        polylines?: boolean | undefined;
        /**
         * when
         * @default undefined
         */
        when?: Date | undefined;
    }
    interface TripsByNameOptions {
        /**
         * departure date, undefined corresponds to Date.Now
         * @default undefined
         */
        when?: Date | undefined;
    }
    interface RemarksOptions {
        from?: Date | number | undefined;
        to?: Date | number | undefined;
        /**
         * maximum number of remarks
         * @default 100
         */
        results?: number | undefined;
        products?: Products | undefined;
        /**
         * Language of the results
         * @default en
         */
        language?: string | undefined;
    }
    interface LinesOptions {
        /**
         * Language of the results
         * @default en
         */
        language?: string | undefined;
    }
    interface ServerOptions {
        /**
         * Language of the results
         * @default en
         */
        language?: string | undefined;
    }
    interface HafasClient {
        /**
         * Retrieves journeys
         * @param from uid of station
         * @param to uid of station
         * @param options options
         */
        journeys: (from: string | Station | Location, to: string | Station | Location, options: JourneysOptions | undefined) => Promise<Journeys>;
        /**
         * refreshes a Journey
         * @param refreshToken refreshToken must be a string, taken from {@link journey#refreshToken}
         * @param options options
         */
        refreshJourney?: ((refreshToken: string, options: RefreshJourneyOptions | undefined) => Promise<Journey>) | undefined;
        /**
         * Refetch information about a trip
         * @param id trip id, see {@link Leg#tripId}
         * @param name name
         * @param options options
         */
        trip?: ((id: string, name: string, options: TripOptions | undefined) => Promise<Trip>) | undefined;
        /**
         * Retrieves departures
         * @param station uid of station
         * @param options options
         */
        departures: (station: string | Station, options: DeparturesArrivalsOptions | undefined) => Promise<ReadonlyArray<Alternative>>;
        /**
         * Retrieves arrivals
         * @param station uid of station
         * @param options options
         */
        arrivals: (station: string | Station, options: DeparturesArrivalsOptions | undefined) => Promise<ReadonlyArray<Alternative>>;
        /**
         * Retrieves locations or stops
         * @param name name of station
         * @param options options for search
         */
        locations: (name: string, options: LocationsOptions | undefined) => Promise<ReadonlyArray<Station | Stop | Location>>;
        /**
         * Retrieves information about a stop
         * @param id uid of station
         * @param options options for search
         */
        stop: (id: string, options: StopOptions | undefined) => Promise<Station | Stop | Location>;
        /**
         * Retrieves nearby stops from location
         * @param location location
         * @param options options for search
         */
        nearby: (location: Location, options: NearByOptions | undefined) => Promise<ReadonlyArray<Station | Stop | Location>>;
        /**
         * Retrieves stations reachable within a certain time from a location
         * @param address location
         * @param options options for search
         */
        reachableFrom?: ((address: Location, options: ReachableFromOptions | undefined) => Promise<ReadonlyArray<Duration>>) | undefined;
        /**
         * Retrieves all vehicles currently in an area.
         * @param box area
         * @param options options for search
         */
        radar?: ((box: BoundingBox, options: RadarOptions | undefined) => Promise<ReadonlyArray<Movement>>) | undefined;
        /**
         * Retrieves trips by name.
         * @param lineNameOrFahrtNr string
         * @param options options for search
         */
        tripsByName?: ((lineNameOrFahrtNr: string, options: TripsByNameOptions | undefined) => Promise<ReadonlyArray<Trip>>) | undefined;
        /**
         * Fetches all remarks known to the HAFAS endpoint
         * @param opt RemarksOptions
         */
        remarks?: ((opt: RemarksOptions | undefined) => Promise<ReadonlyArray<Warning>>) | undefined;
        /**
         * Fetches all lines known to the HAFAS endpoint
         * @param query string
         * @param opt LinesOptions
         */
        lines?: ((query: string, opt: LinesOptions | undefined) => Promise<ReadonlyArray<Line>>) | undefined;
        /**
         * Fetches meta information from the HAFAS endpoint
         * @param opt ServerOptions
         */
        serverInfo: (opt: ServerOptions | undefined) => Promise<ServerInfo>;
    }
}
