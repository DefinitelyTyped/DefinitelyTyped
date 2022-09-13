// $ExpectType DistrictSearch
new AMap.DistrictSearch();
// $ExpectType DistrictSearch
new AMap.DistrictSearch({});
// $ExpectType DistrictSearch
const districtSearch = new AMap.DistrictSearch({
    level: 'city',
    showbiz: true,
    extensions: 'all',
    subdistrict: 1
});

// $ExpectType void
districtSearch.search('keyword', (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    // $ExpectType string | SearchResult
    result;
    if (typeof result !== 'string') {
        // $ExpectType string
        result.info;
        // $ExpectType District[]
        result.districtList;
        {
            const district = result.districtList[0];
            // $ExpectType string
            district.adcode;
            // $ExpectType LngLat[][] | undefined
            district.boundaries;
            // $ExpectType LngLat
            district.center;
            // $ExpectType string
            district.citycode;
            // $ExpectType District[] | undefined
            district.districtList;
            // $ExpectType Level
            district.level;
            // $ExpectType string
            district.name;
        }
    } else {
        // $ExpectType string
        result;
    }
});

declare const level: 'country' | 'province' | 'city' | 'district' | 'biz_area';
// $ExpectType void
districtSearch.setLevel(level);
districtSearch.setLevel();

// $ExpectType void
districtSearch.setSubdistrict(3);

// @ts-expect-error
districtSearch.setSubdistrict(4);

districtSearch.on('complete', (event: AMap.DistrictSearch.EventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
    // $ExpectType string
    event.info;
    // $ExpectType District[]
    event.districtList;
});

districtSearch.on('error', (event: AMap.DistrictSearch.EventMap['error']) => {
    // $ExpectType "error"
    event.type;
    // $ExpectType string
    event.info;
});
