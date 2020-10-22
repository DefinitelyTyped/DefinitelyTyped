declare const lnglat: AMap.LngLat;
declare const lnglatTuple: [number, number];

// $ExpectType ArrivalRange
const arrivalRange = new AMap.ArrivalRange();

// $ExpectType void
arrivalRange.search(lnglat, 10, (status, result) => {
    const tempStatus: 'complete' | 'error' | 'no_data' = status;
    if (typeof result !== 'string') {
        // $ExpectType SearchResult
        result;
        // $ExpectType string
        result.bounds[0][0][0][0];
        // $ExpectType boolean[] | undefined
        result.inRange;
        // $ExpectType string
        result.info;
        // $ExpectType string
        result.infocode;
    } else {
        // $ExpectType string
        result;
    }
});
// $ExpectType void
arrivalRange.search(lnglatTuple, 10, () => { });
// $ExpectType void
arrivalRange.search(lnglatTuple, 10, () => { }, {});
// $ExpectType void
arrivalRange.search(lnglat, 10, () => { }, {
    policy: 'BUS',
    resultType: 'polygon',
    destination: lnglat
});

arrivalRange.on('error', (event: AMap.ArrivalRange.EventMap['error']) => {
    // $ExpectType string
    event.info;
    // $ExpectType "error"
    event.type;
});
