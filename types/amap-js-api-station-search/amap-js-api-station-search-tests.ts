// $ExpectType StationSearch
new AMap.StationSearch();
// $ExpectType StationSearch
new AMap.StationSearch({});
// $ExpectType StationSearch
const stationSearch = new AMap.StationSearch({
    pageIndex: 1,
    pageSize: 10,
    city: '深圳'
});

stationSearch.search('keyword', (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    status;
    if (typeof result !== 'string') {
        // $ExpectType string
        result.info;
        // $ExpectType StationInfo[]
        result.stationInfo;
        // $ExpectType CityInfo[] | undefined
        result.cityList;
        // $ExpectType string[] | undefined
        result.keywordList;

        const station = result.stationInfo[0];
        // $ExpectType string
        station.adcode;
        // $ExpectType Busline[]
        station.buslines;
        // $ExpectType string
        station.citycode;
        // $ExpectType string
        station.id;
        // $ExpectType LngLat
        station.location;
        // $ExpectType string
        station.name;

        const busline = station.buslines[0];
        // $ExpectType string
        busline.end_stop;
        // $ExpectType string
        busline.id;
        // $ExpectType LngLat
        busline.location;
        // $ExpectType string
        busline.name;
        // $ExpectType string
        busline.start_stop;
    } else {
        // $ExpectType string
        result;
    }
});

stationSearch.searchById('id', (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    // $ExpectType string | SearchResult
    result;
});

// $ExpectType void
stationSearch.setPageIndex(10);
// $ExpectType void
stationSearch.setPageIndex();

// $ExpectType void
stationSearch.setPageSize(10);
// $ExpectType void
stationSearch.setPageSize();

// $ExpectType void
stationSearch.setCity('city');
// $ExpectType void
stationSearch.setCity();

declare const completeEvent: AMap.StationSearch.EventMap['complete'];
// $ExpectType "complete"
completeEvent.type;
// $ExpectType string
completeEvent.info;
// $ExpectType CityInfo[] | undefined
completeEvent.cityList;
// $ExpectType string[] | undefined
completeEvent.keywordList;
// $ExpectType StationInfo[]
completeEvent.stationInfo;

declare const errorEvent: AMap.StationSearch.EventMap['error'];
// $ExpectType "error"
errorEvent.type;
// $ExpectType string
errorEvent.info;
