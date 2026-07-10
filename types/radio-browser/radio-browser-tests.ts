import RadioBrowser = require("radio-browser");

// Properties
RadioBrowser.service_url; // $ExpectType string | null
RadioBrowser.filter_by_types; // $ExpectType string[]
RadioBrowser.category_types; // $ExpectType readonly CategoryType[]

// getRandomHost
RadioBrowser.getRandomHost(); // $ExpectType Promise<string>

// getCategory
RadioBrowser.getCategory("countries"); // $ExpectType Promise<CategoryItem[]>
RadioBrowser.getCategory("countries", { searchterm: "de" }); // $ExpectType Promise<CategoryItem[]>
RadioBrowser.getCategory("tags", { limit: 5, order: "stationcount", reverse: true }); // $ExpectType Promise<CategoryItem[]>

// @ts-expect-error - invalid category type
RadioBrowser.getCategory(123);
// @ts-expect-error - invalid category string
RadioBrowser.getCategory("invalid");

// Deprecated methods
RadioBrowser.getCountries(); // $ExpectType Promise<CategoryItem[]>
RadioBrowser.getCodecs({ order: "stationcount" }); // $ExpectType Promise<CategoryItem[]>
RadioBrowser.getStates({ country: "Germany" }); // $ExpectType Promise<CategoryItem[]>
RadioBrowser.getLanguages({ reverse: true }); // $ExpectType Promise<CategoryItem[]>
RadioBrowser.getTags({ hidebroken: true }); // $ExpectType Promise<CategoryItem[]>

// getStations
RadioBrowser.getStations(); // $ExpectType Promise<Station[]>
RadioBrowser.getStations({ limit: 5, by: "topvote" }); // $ExpectType Promise<Station[]>
// $ExpectType Promise<Station[]>
RadioBrowser.getStations({
    by: "tag",
    searchterm: "jazz",
    order: "name",
    reverse: false,
    offset: 0,
    limit: 10,
    hidebroken: true,
});

// @ts-expect-error - invalid by value
RadioBrowser.getStations({ by: "invalid" });

// getChecks
RadioBrowser.getChecks(); // $ExpectType Promise<StationCheck[]>
RadioBrowser.getChecks("some-uuid", 3600); // $ExpectType Promise<StationCheck[]>

// getChecksteps
RadioBrowser.getChecksteps(["uuid1", "uuid2"]); // $ExpectType Promise<StationCheckStep[]>

// getClicks
RadioBrowser.getClicks(); // $ExpectType Promise<Click[]>
RadioBrowser.getClicks("some-uuid", 86400); // $ExpectType Promise<Click[]>

// clickStation
RadioBrowser.clickStation("station-uuid"); // $ExpectType Promise<ClickStationResult>

// searchStations
RadioBrowser.searchStations({ name: "jazz", limit: 10 }); // $ExpectType Promise<Station[]>
RadioBrowser.searchStations({ tag: "rock", hasGeoInfo: true, isHLS: false }); // $ExpectType Promise<Station[]>

// voteStation
RadioBrowser.voteStation("station-uuid"); // $ExpectType Promise<VoteResult>

// deleteStation
RadioBrowser.deleteStation("station-uuid"); // $ExpectType Promise<{ ok: boolean; message: string }>

// undeleteStation (deprecated)
RadioBrowser.undeleteStation("station-uuid"); // $ExpectType Promise<unknown>

// addStation
RadioBrowser.addStation({ url: "http://example.com/stream", name: "Test" }); // $ExpectType Promise<AddStationResult>
RadioBrowser.addStation({ url: "http://example.com/stream", tags: "jazz", country: "Germany", bitrate: 128 }); // $ExpectType Promise<AddStationResult>

// @ts-expect-error - missing required url param
RadioBrowser.addStation({ name: "Test" });

// editStation (deprecated)
RadioBrowser.editStation("station-uuid", { name: "New Name" }); // $ExpectType Promise<unknown>

// getServerStats
RadioBrowser.getServerStats(); // $ExpectType Promise<ServerStats>

// getServerMirrors
RadioBrowser.getServerMirrors(); // $ExpectType Promise<{ ip: string; name: string }[]>

// getServerConfig
RadioBrowser.getServerConfig(); // $ExpectType Promise<ServerConfig>

// service_url setter
RadioBrowser.service_url = "https://de1.api.radio-browser.info/";
RadioBrowser.service_url = null;

// Test station properties
RadioBrowser.getStations({ limit: 1 }).then((stations) => {
    if (stations.length > 0) {
        stations[0].name; // $ExpectType string
        stations[0].stationuuid; // $ExpectType string
        stations[0].votes; // $ExpectType number
        stations[0].clickcount; // $ExpectType number
        stations[0].codec; // $ExpectType string
        stations[0].bitrate; // $ExpectType number
        stations[0].tags; // $ExpectType string
        stations[0].countrycode; // $ExpectType string
        stations[0].geo_lat; // $ExpectType number | null
        stations[0].has_extended_info; // $ExpectType boolean | undefined
        stations[0].clicktimestamp_iso8601; // $ExpectType string | null
        stations[0].geo_distance; // $ExpectType number | null | undefined
    }
});

// Test server stats
RadioBrowser.getServerStats().then((stats) => {
    stats.stations; // $ExpectType number
    stats.tags; // $ExpectType number
    stats.languages; // $ExpectType number
    stats.countries; // $ExpectType number
    stats.status; // $ExpectType string
});

// Test category item properties
RadioBrowser.getCategory("countries", { limit: 1 }).then((items) => {
    if (items.length > 0) {
        items[0].name; // $ExpectType string
        items[0].stationcount; // $ExpectType number
        items[0].iso_3166_1; // $ExpectType string | undefined
        items[0].iso_639; // $ExpectType string | null | undefined
        items[0].country; // $ExpectType string | undefined
    }
});

// Test server config properties
RadioBrowser.getServerConfig().then((config) => {
    config.check_enabled; // $ExpectType boolean
    config.api_threads; // $ExpectType number
    config.cache_type; // $ExpectType string
    config.server_name; // $ExpectType string
});

// Test click station result properties
RadioBrowser.clickStation("station-uuid").then((result) => {
    result.ok; // $ExpectType boolean
    result.message; // $ExpectType string
    result.stationuuid; // $ExpectType string
    result.name; // $ExpectType string
    result.url; // $ExpectType string
});

// Test add station result properties
RadioBrowser.addStation({ url: "http://example.com" }).then((result) => {
    result.ok; // $ExpectType boolean
    result.message; // $ExpectType string
    result.uuid; // $ExpectType string
});

// Test vote result properties
RadioBrowser.voteStation("station-uuid").then((result) => {
    result.ok; // $ExpectType boolean
    result.message; // $ExpectType string
});
