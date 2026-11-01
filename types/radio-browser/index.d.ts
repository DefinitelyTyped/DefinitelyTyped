interface ServerStats {
    supported_version: number;
    software_version: string;
    status: string;
    stations: number;
    stations_broken: number;
    tags: number;
    clicks_last_hour: number;
    clicks_last_day: number;
    languages: number;
    countries: number;
}

interface Station {
    changeuuid: string;
    stationuuid: string;
    name: string;
    url: string;
    url_resolved: string;
    homepage: string;
    favicon: string;
    tags: string;
    country: string;
    countrycode: string;
    state: string;
    iso_3166_2: string;
    language: string;
    languagecodes: string;
    votes: number;
    lastchangetime: string;
    lastchangetime_iso8601: string;
    codec: string;
    bitrate: number;
    hls: number;
    lastcheckok: number;
    lastchecktime: string;
    lastchecktime_iso8601: string;
    lastcheckoktime: string;
    lastcheckoktime_iso8601: string;
    lastlocalchecktime: string;
    lastlocalchecktime_iso8601: string;
    clicktimestamp: string;
    clicktimestamp_iso8601: string | null;
    clickcount: number;
    clicktrend: number;
    ssl_error: number;
    geo_lat: number | null;
    geo_long: number | null;
    geo_distance?: number | null;
    has_extended_info?: boolean;
}

interface StationCheck {
    checkuuid: string;
    stationuuid: string;
    source: string;
    codec: string;
    bitrate: number;
    hls: number;
    ok: number;
    timestamp: string;
    timestamp_iso8601: string;
    urlcache: string;
    metainfo_overrides_database: number;
    public: number | null;
    name: string | null;
    description: string | null;
    tags: string | null;
    countrycode: string | null;
    countrysubdivisioncode: string | null;
    homepage: string | null;
    favicon: string | null;
    loadbalancer: string | null;
    server_software: string | null;
    sampling: number | null;
    timing_ms: number;
    languagecodes: string | null;
    ssl_error: number;
    geo_lat: number | null;
    geo_long: number | null;
}

interface StationCheckStep {
    stepuuid: string;
    parent_stepuuid: string | null;
    checkuuid: string;
    stationuuid: string;
    url: string;
    urltype: string | null;
    error: string | null;
    creation_iso8601: string;
}

interface Click {
    stationuuid: string;
    clickuuid: string;
    clicktimestamp_iso8601: string;
    clicktimestamp: string;
}

interface ClickStationResult {
    ok: boolean;
    message: string;
    stationuuid: string;
    name: string;
    url: string;
}

interface AddStationResult {
    ok: boolean;
    message: string;
    uuid: string;
}

interface VoteResult {
    ok: boolean;
    message: string;
}

interface CategoryItem {
    name: string;
    stationcount: number;
    iso_3166_1?: string;
    iso_639?: string | null;
    country?: string;
}

interface ServerConfig {
    check_enabled: boolean;
    prometheus_exporter_enabled: boolean;
    pull_servers: unknown[];
    tcp_timeout_seconds: number;
    broken_stations_never_working_timeout_seconds: number;
    broken_stations_timeout_seconds: number;
    checks_timeout_seconds: number;
    click_valid_timeout_seconds: number;
    clicks_timeout_seconds: number;
    mirror_pull_interval_seconds: number;
    update_caches_interval_seconds: number;
    server_name: string;
    server_location: string;
    server_country_code: string;
    check_retries: number;
    check_batchsize: number;
    check_pause_seconds: number;
    api_threads: number;
    cache_type: string;
    cache_ttl: number;
    language_replace_filepath: string;
    language_to_code_filepath: string;
}

interface AddStationParams {
    url: string;
    name?: string;
    homepage?: string;
    favicon?: string;
    tags?: string;
    country?: string;
    countrycode?: string;
    state?: string;
    language?: string;
    codec?: string;
    bitrate?: number;
    hls?: number;
    geo_lat?: number;
    geo_long?: number;
}

type CategoryType = "countries" | "countrycodes" | "codecs" | "states" | "languages" | "tags";

type FilterByType =
    | "uuid"
    | "name"
    | "nameexact"
    | "codec"
    | "codecexact"
    | "country"
    | "countryexact"
    | "countrycodeexact"
    | "state"
    | "stateexact"
    | "language"
    | "languageexact"
    | "tag"
    | "tagexact"
    | "url"
    | "topclick"
    | "topvote"
    | "lastclick"
    | "lastchange"
    | "improvable"
    | "broken";

interface StationFilter {
    by?: FilterByType;
    searchterm?: string;
    name?: string;
    nameExact?: boolean;
    country?: string;
    countryExact?: string;
    countrycodeExact?: string;
    state?: string;
    stateExact?: string;
    language?: string;
    languageExact?: string;
    tag?: string;
    tagExact?: string;
    codec?: string;
    bitrateMin?: number;
    bitrateMax?: number;
    hasGeoInfo?: boolean;
    hasExtendedInfo?: boolean;
    isHLS?: boolean;
    order?: string;
    reverse?: boolean;
    offset?: number;
    limit?: number;
    hidebroken?: boolean;
    url?: string;
    lastchangeuuid?: string;
    seconds?: number;
}

interface CategoryFilter {
    country?: string;
    searchterm?: string;
    order?: string;
    reverse?: boolean;
    hidebroken?: boolean;
    limit?: number;
    offset?: number;
}

declare const RadioBrowser: {
    service_url: string | null;

    readonly filter_by_types: string[];
    readonly category_types: readonly CategoryType[];

    getRandomHost(): Promise<string>;
    getCategory(category: CategoryType, filter?: CategoryFilter): Promise<CategoryItem[]>;
    /** @deprecated Use getCategory('countries', filter) */
    getCountries(filter?: CategoryFilter): Promise<CategoryItem[]>;
    /** @deprecated Use getCategory('codecs', filter) */
    getCodecs(filter?: CategoryFilter): Promise<CategoryItem[]>;
    /** @deprecated Use getCategory('states', filter) */
    getStates(filter?: CategoryFilter): Promise<CategoryItem[]>;
    /** @deprecated Use getCategory('languages', filter) */
    getLanguages(filter?: CategoryFilter): Promise<CategoryItem[]>;
    /** @deprecated Use getCategory('tags', filter) */
    getTags(filter?: CategoryFilter): Promise<CategoryItem[]>;

    getStations(filter?: StationFilter): Promise<Station[]>;
    getChecks(stationuuid?: string, seconds?: number): Promise<StationCheck[]>;
    getChecksteps(uuids: string[]): Promise<StationCheckStep[]>;
    getClicks(stationuuid?: string, seconds?: number): Promise<Click[]>;

    clickStation(stationuuid: string): Promise<ClickStationResult>;
    searchStations(params: StationFilter): Promise<Station[]>;
    voteStation(stationuuid: string): Promise<VoteResult>;
    deleteStation(stationuuid: string): Promise<{ ok: boolean; message: string }>;
    /** @deprecated Not supported by radio-browser.info */
    undeleteStation(stationuuid: string): Promise<unknown>;
    addStation(params: AddStationParams): Promise<AddStationResult>;
    /** @deprecated Not supported by radio-browser.info */
    editStation(stationuuid: string, params: Partial<AddStationParams>): Promise<unknown>;

    getServerStats(): Promise<ServerStats>;
    getServerMirrors(): Promise<Array<{ ip: string; name: string }>>;
    getServerConfig(): Promise<ServerConfig>;
};

export = RadioBrowser;
