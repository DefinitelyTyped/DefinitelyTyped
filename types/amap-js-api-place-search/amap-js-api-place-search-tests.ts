declare const map: AMap.Map;
declare const div: HTMLElement;
declare const lnglat: AMap.LngLat;
declare const lnglatTuple: [number, number];
declare const bounds: AMap.Bounds;
declare const polygon: AMap.Polygon;
declare const lang: AMap.Lang;

// $ExpectType PlaceSearch
const placeSearch = new AMap.PlaceSearch();
// $ExpectType PlaceSearch
new AMap.PlaceSearch({});
// $ExpectType PlaceSearch
new AMap.PlaceSearch({
    city: '深圳',
    citylimit: true,
    children: 1,
    type: '餐饮服务',
    lang: 'zh_cn',
    pageSize: 10,
    pageIndex: 10,
    extensions: 'all',
    map,
    panel: div,
    showCover: true,
    renderStyle: 'newpc',
    autoFitView: true
});

// $ExpectType void
placeSearch.search('keyword', (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    // $ExpectType string | SearchResult
    result;
    if (typeof result !== 'string') {
        // $ExpectType string
        result.info;
        // $ExpectType PoiList
        result.poiList;
        // $ExpectType string[] | undefined
        result.keywordList;
        // $ExpectType CityInfo[] | undefined
        result.cityList;

        const poiList = result.poiList;
        // $ExpectType number
        poiList.pageIndex;
        // $ExpectType number
        poiList.pageSize;
        // $ExpectType number
        poiList.count;

        const poi = poiList.pois[0];
        // $ExpectType string
        poi.address;
        // $ExpectType number
        poi.distance;
        // $ExpectType string
        poi.id;
        // $ExpectType LngLat | null
        poi.location;
        // $ExpectType string
        poi.name;
        // $ExpectType string
        poi.shopinfo;
        // $ExpectType string
        poi.tel;
        // $ExpectType string
        poi.type;
        if ('website' in poi) {
            // $ExpectType string
            poi.adcode;
            // $ExpectType string
            poi.adname;
            // $ExpectType string
            poi.citycode;
            // $ExpectType string
            poi.cityname;
            // $ExpectType boolean
            poi.discount;
            // $ExpectType string
            poi.email;
            // $ExpectType LngLat | null
            poi.entr_location;
            // $ExpectType LngLat | null
            poi.exit_location;
            // $ExpectType boolean
            poi.groupbuy;
            if (poi.indoor_map) {
                const indoorData = poi.indoor_data;
                // $ExpectType string
                indoorData.cpid;
                // $ExpectType string
                indoorData.floor;
                // $ExpectType string
                indoorData.truefloor;
            }
            poi.pcode;
            // $ExpectType PoiPhoto[]
            poi.photos;
            // $ExpectType string
            poi.pname;
            // $ExpectType string
            poi.postcode;
            // $ExpectType string
            poi.website;

            const photo = poi.photos[0];
            // $ExpectType string
            photo.title;
            // $ExpectType string
            photo.url;
            // $ExpectType Groupbuy[] | undefined
            poi.groupbuys;
            if (poi.groupbuys) {
                const groupbuy = poi.groupbuys[0];
                // $ExpectType string
                groupbuy.title;
                // $ExpectType string
                groupbuy.type_code;
                // $ExpectType string
                groupbuy.type;
                // $ExpectType string
                groupbuy.detail;
                // $ExpectType string
                groupbuy.stime;
                // $ExpectType string
                groupbuy.etime;
                // $ExpectType number
                groupbuy.count;
                // $ExpectType number
                groupbuy.sold_num;
                // $ExpectType number
                groupbuy.original_price;
                // $ExpectType number
                groupbuy.groupbuy_price;
                // $ExpectType number
                groupbuy.discount;
                // $ExpectType string
                groupbuy.ticket_address;
                // $ExpectType string
                groupbuy.ticket_tel;
                // $ExpectType PoiPhoto[]
                groupbuy.photos;
                // $ExpectType string
                groupbuy.url;
                // $ExpectType string
                groupbuy.provider;
            }
            // $ExpectType Discount[] | undefined
            poi.discounts;
            if (poi.discounts) {
                const discount = poi.discounts[0];
                // $ExpectType string
                discount.title;
                // $ExpectType string
                discount.detail;
                // $ExpectType string
                discount.start_time;
                // $ExpectType string
                discount.end_time;
                // $ExpectType number
                discount.sold_num;
                // $ExpectType PoiPhoto[]
                discount.photos;
                // $ExpectType string
                discount.url;
                // $ExpectType string
                discount.provider;
            }
            if (poi.deep_type === 'CINEMA') {
                // $ExpectType Cinema
                const cinema = poi.cinema;
                // $ExpectType string
                cinema.intro;
                // $ExpectType string
                cinema.rating;
                // $ExpectType string
                cinema.deep_src;
                // $ExpectType string
                cinema.parking;
                // $ExpectType string
                cinema.opentime_GDF;
                // $ExpectType string
                cinema.opentime;
                // $ExpectType PoiPhoto[]
                cinema.photos;
            }
            if (poi.deep_type === 'DINING') {
                // $ExpectType Dining
                const dining = poi.dining;
                // $ExpectType string
                dining.cuisines;
                // $ExpectType string
                dining.tag;
                // $ExpectType string
                dining.intro;
                // $ExpectType string
                dining.rating;
                // $ExpectType string
                dining.cp_rating;
                // $ExpectType string
                dining.deep_src;
                // $ExpectType string
                dining.taste_rating;
                // $ExpectType string
                dining.environment_rating;
                // $ExpectType string
                dining.service_rating;
                // $ExpectType string
                dining.cost;
                // $ExpectType string
                dining.recommend;
                // $ExpectType string
                dining.atmosphere;
                // $ExpectType string
                dining.ordering_wap_url;
                // $ExpectType string
                dining.ordering_web_url;
                // $ExpectType string
                dining.ordering_app_url;
                // $ExpectType string
                dining.opentime_GDF;
                // $ExpectType string
                dining.opentime;
                // $ExpectType string
                dining.addition;
                // $ExpectType PoiPhoto[]
                dining.photos;
            }
            if (poi.deep_type === 'SCENIC') {
                // $ExpectType Scenic
                const scenic = poi.scenic;
                // $ExpectType string
                scenic.intro;
                // $ExpectType string
                scenic.rating;
                // $ExpectType string
                scenic.deep_src;
                // $ExpectType string
                scenic.level;
                // $ExpectType string
                scenic.price;
                // $ExpectType string
                scenic.season;
                // $ExpectType string
                scenic.recommend;
                // $ExpectType string
                scenic.theme;
                // $ExpectType string
                scenic.ordering_wap_url;
                // $ExpectType string
                scenic.ordering_web_url;
                // $ExpectType string
                scenic.opentime_GDF;
                // $ExpectType string
                scenic.opentime;
                // $ExpectType PoiPhoto[]
                scenic.photos;
            }
            if (poi.deep_type === 'HOTEL') {
                // $ExpectType Hotel
                const hotel = poi.hotel;
                // $ExpectType string
                hotel.rating;
                // $ExpectType string
                hotel.star;
                // $ExpectType string
                hotel.intro;
                // $ExpectType string
                hotel.lowest_price;
                // $ExpectType string
                hotel.faci_rating;
                // $ExpectType string
                hotel.health_rating;
                // $ExpectType string
                hotel.environment_rating;
                // $ExpectType string
                hotel.service_rating;
                // $ExpectType string
                hotel.traffic;
                // $ExpectType string
                hotel.addition;
                // $ExpectType string
                hotel.deep_src;
                // $ExpectType PoiPhoto[]
                hotel.photos;
            }
        }

        if (result.cityList) {
            const city = result.cityList[0];
            // $ExpectType string
            city.adcode;
            // $ExpectType string
            city.citycode;
            // $ExpectType number
            city.count;
            // $ExpectType string
            city.name;
        }
    } else {
        // $ExpectType string
        result;
    }
});

// $ExpectType void
placeSearch.searchNearBy('keyword', lnglat, 10, (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    // $ExpectType string | SearchResult
    result;
});
// $ExpectType void
placeSearch.searchNearBy('keyword', lnglatTuple, 10, () => { });

// $ExpectType void
placeSearch.searchInBounds('keyword', bounds, (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    // $ExpectType string | SearchResult
    result;
});
// $ExpectType void
placeSearch.searchInBounds('keyword', polygon, () => { });

// $ExpectType void
placeSearch.getDetails('id', (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    // $ExpectType string | SearchResult
    result;
});

// $ExpectType void
placeSearch.setType('type');
// $ExpectType void
placeSearch.setType();

// $ExpectType void
placeSearch.setCityLimit(true);
// $ExpectType void
placeSearch.setCityLimit();

// $ExpectType void
placeSearch.setPageIndex(1);
// $ExpectType void
placeSearch.setPageIndex();

// $ExpectType void
placeSearch.setPageSize(1);
// $ExpectType void
placeSearch.setPageSize();

// $ExpectType void
placeSearch.setCity('city');
// $ExpectType void
placeSearch.setCity();

// $ExpectType void
placeSearch.setLang(lang);
// $ExpectType void
placeSearch.setLang();

// $ExpectType "zh_cn" | "en" | "zh_en" | undefined
placeSearch.getLang();

// $ExpectType void
placeSearch.clear();

// $ExpectType void
placeSearch.poiOnAMAP({
    id: 'id',
});
// $ExpectType void
placeSearch.poiOnAMAP({
    location: lnglat,
    id: 'id',
    name: 'name'
});

// $ExpectType void
placeSearch.detailOnAMAP({
    id: 'id',
});
// $ExpectType void
placeSearch.detailOnAMAP({
    location: lnglat,
    id: 'id',
    name: 'name'
});

// $ExpectType void
placeSearch.open();

// $ExpectType void
placeSearch.close();

placeSearch.on('complete', (event: AMap.PlaceSearch.EventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
    // $ExpectType string
    event.info;
    // $ExpectType PoiList
    event.poiList;
    // $ExpectType string[] | undefined
    event.keywordList;
    // $ExpectType CityInfo[] | undefined
    event.cityList;
});

placeSearch.on('listElementClick', (event: AMap.PlaceSearch.EventMap['listElementClick']) => {
    // $ExpectType MouseEvent
    event.event;
    // $ExpectType string
    event.id;
    // $ExpectType number
    event.index;
    // $ExpectType Marker<any>
    event.marker;
    // $ExpectType HTMLLIElement
    event.listElement;
});

placeSearch.on('markerClick', (event: AMap.PlaceSearch.EventMap['markerClick']) => {
    const markerEvent = event.event;
    // $ExpectType Marker<any>
    markerEvent.target;
    // $ExpectType string
    event.id;
    // $ExpectType number
    event.index;
    // $ExpectType Marker<any>
    event.marker;
    // $ExpectType HTMLLIElement
    event.listElement;
});
