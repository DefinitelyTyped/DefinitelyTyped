// $ExpectType CitySearch
const citySearch = new AMap.CitySearch();

citySearch.getLocalCity((status, result) => {
    const statusTemp: 'error' | 'complete' | 'no_data' = status;
    if (typeof result !== 'string') {
        // $ExpectType SearchResult
        result;
        // $ExpectType string
        result.adcode;
        // $ExpectType Bounds
        result.bounds;
        // $ExpectType string
        result.city;
        // $ExpectType string
        result.info;
        // $ExpectType string
        result.infocode;
        // $ExpectType string
        result.province;
        // $ExpectType string
        result.rectangle;
        // $ExpectType string
        result.status;
    } else {
        // $ExpectType string
        result;
    }
});

// $ExpectType void
citySearch.getCityByIp('ip', (status, result) => {
    const statusTemp: 'error' | 'complete' | 'no_data' = status;
    const resultTemp: AMap.CitySearch.SearchResult | string = result;
});

citySearch.on('complete', (event: AMap.CitySearch.EventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
    // $ExpectType string
    event.adcode;
    // $ExpectType Bounds
    event.bounds;
    // $ExpectType string
    event.city;
    // $ExpectType string
    event.info;
    // $ExpectType string
    event.infocode;
    // $ExpectType string
    event.province;
    // $ExpectType string
    event.rectangle;
    // $ExpectType string
    event.status;
});

citySearch.on('error', (event: AMap.CitySearch.EventMap['error']) => {
    // $ExpectType string
    event.info;
    // $ExpectType "error"
    event.type;
});
