// $ExpectType LineSearch
const lineSearch = new AMap.LineSearch();
// $ExpectType LineSearch
new AMap.LineSearch({});
// $ExpectType LineSearch
new AMap.LineSearch({
    pageIndex: 1,
    pageSize: 2,
    city: '深圳',
    extensions: 'all'
});

// $ExpectType void
lineSearch.searchById('buslineId', (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    // $ExpectType string | SearchResult
    result;
    if (typeof result !== 'string') {
        // $ExpectType string
        result.info;
        {
            const lineInfo = result.lineInfo[0];
            // $ExpectType string
            lineInfo.citycode;
            // $ExpectType string
            lineInfo.end_stop;
            // $ExpectType string
            lineInfo.id;
            // $ExpectType string
            lineInfo.name;
            // $ExpectType LngLat[]
            lineInfo.path;
            // $ExpectType string
            lineInfo.start_stop;
            // $ExpectType string
            lineInfo.type;
            if ('basic_price' in lineInfo) {
                // $ExpectType string
                lineInfo.basic_price;
                // $ExpectType Bounds
                lineInfo.bounds;
                // $ExpectType string
                lineInfo.citycode;
                // $ExpectType string
                lineInfo.company;
                // $ExpectType string
                lineInfo.distance;
                // $ExpectType string
                lineInfo.end_stop;
                // $ExpectType string
                lineInfo.etime;
                // $ExpectType string
                lineInfo.id;
                // $ExpectType string
                lineInfo.name;
                // $ExpectType LngLat[]
                lineInfo.path;
                // $ExpectType string
                lineInfo.start_stop;
                // $ExpectType string
                lineInfo.stime;
                // $ExpectType string
                lineInfo.total_price;
                // $ExpectType string
                lineInfo.type;
                // $ExpectType BusStop[]
                lineInfo.via_stops;

                const busstop = lineInfo.via_stops[0];
                // $ExpectType string
                busstop.id;
                // $ExpectType LngLat
                busstop.location;
                // $ExpectType string
                busstop.name;
                // $ExpectType number
                busstop.sequence;
            }
        }

        // $ExpectType any[] | undefined
        result.cityList;

        // $ExpectType any[] | undefined
        result.keywordList;
    }
});

lineSearch.search('keyword', (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    // $ExpectType string | SearchResult
    result;
});

// $ExpectType void
lineSearch.setPageIndex(10);
// $ExpectType void
lineSearch.setPageIndex();

// $ExpectType void
lineSearch.setPageSize(10);
// $ExpectType void
lineSearch.setPageSize();

// $ExpectType void
lineSearch.setCity('ctiy');
// $ExpectType void
lineSearch.setCity();

lineSearch.on('complete', (event: AMap.LineSearch.EventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
    // $ExpectType string
    event.info;
    // $ExpectType LineInfo[]
    event.lineInfo;
});

lineSearch.on('error', (event: AMap.LineSearch.EventMap['error']) => {
    // $ExpectType "error"
    event.type;
    // $ExpectType string
    event.info;
});
