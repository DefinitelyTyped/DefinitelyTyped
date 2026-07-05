import RadioBrowser from "radio-browser";

// Properties
RadioBrowser.service_url; // $ExpectType string | null
RadioBrowser.filter_by_types; // $ExpectType string[]
RadioBrowser.category_types; // $ExpectType string[]

// getRandomHost
RadioBrowser.getRandomHost(); // $ExpectType Promise<string>

// getCategory
RadioBrowser.getCategory("countries"); // $ExpectType Promise<CategoryItem[]>
RadioBrowser.getCategory("countries", { searchterm: "de" }); // $ExpectType Promise<CategoryItem[]>

// @ts-expect-error - invalid category
RadioBrowser.getCategory(123);

// Deprecated methods
RadioBrowser.getCountries(); // $ExpectType Promise<CategoryItem[]>
RadioBrowser.getCodecs({ order: "stationcount" }); // $ExpectType Promise<CategoryItem[]>
RadioBrowser.getStates({ country: "Germany" }); // $ExpectType Promise<CategoryItem[]>
RadioBrowser.getLanguages({ reverse: true }); // $ExpectType Promise<CategoryItem[]>
RadioBrowser.getTags({ hidebroken: true }); // $ExpectType Promise<CategoryItem[]>

// getStations
RadioBrowser.getStations(); // $ExpectType Promise<Station[]>
RadioBrowser.getStations({ limit: 5, by: "topvote" }); // $ExpectType Promise<Station[]>
RadioBrowser.getStations({ by: "tag", searchterm: "jazz", order: "name", reverse: false, offset: 0, limit: 10, hidebroken: true }); // $ExpectType Promise<Station[]>

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

// editStation (deprecated)
RadioBrowser.editStation("station-uuid", { name: "New Name" }); // $ExpectType Promise<unknown>

// getServerStats
RadioBrowser.getServerStats(); // $ExpectType Promise<ServerStats>

// getServerMirrors
RadioBrowser.getServerMirrors(); // $ExpectType Promise<{ ip: string; name: string }[]>

// getServerConfig
RadioBrowser.getServerConfig(); // $ExpectType Promise<Record<string, unknown>>

// service_url setter
RadioBrowser.service_url = "https://de1.api.radio-browser.info/";
RadioBrowser.service_url = null;

// Test $ExpectType on station properties
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
