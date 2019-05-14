declare const map: AMap.Map;
// $ExpectType Geolocation
new AMap.Geolocation();
// $ExpectType Geolocation
new AMap.Geolocation({});
// $ExpectType Geolocation
const geolocation = new AMap.Geolocation({
    enableHighAccuracy: true,
    timeout: 2000,
    noIpLocate: 0,
    noGeoLocation: 0,
    GeoLocationFirst: true,
    maximumAge: 100,
    convert: true,
    showButton: true,
    buttonDom: 'button',
    buttonPosition: 'LT',
    buttonOffset: new AMap.Pixel(10, 10),
    showMarker: true,
    markerOptions: {},
    showCircle: true,
    circleOptions: {},
    panToLocation: true,
    zoomToAccuracy: true,
    useNative: false,
    extensions: 'all'
});

// $ExpectType boolean
geolocation.isSupported();

// $ExpectType void
geolocation.getCurrentPosition((status, result) => {
    const statusTemp: 'complete' | 'error' = status;
    if (result.status === 1) {
        // $ExpectType GeolocationResult
        result;
        // $ExpectType number | null
        result.accuracy;
        // $ExpectType ReGeocodeAddressComponent
        result.addressComponent;
        // $ExpectType ReGeocodeAoi[] | undefined
        result.aois;
        // $ExpectType Cross[]
        result.crosses;
        // $ExpectType string
        result.formattedAddress;
        // $ExpectType string
        result.info;
        // $ExpectType boolean
        result.isConverted;
        const type: 'ip' | 'html5' | 'sdk' = result.location_type;
        // $ExpectType string
        result.message;
        // $ExpectType ReGeocodePoi[]
        result.pois;
        // $ExpectType LngLat
        result.position;
        // $ExpectType Road[]
        result.roads;
        // $ExpectType 1
        result.status;
    } else {
        // $ExpectType ErrorStatus
        result;
        // $ExpectType string
        result.info;
        // $ExpectType string
        result.message;
    }
});

const watchId: string | undefined | null = geolocation.watchPosition();

// $ExpectType string | undefined
geolocation.clearWatch('id');

// $ExpectType void
geolocation.getCityInfo((status, result) => {
    const statusTemp: 'complete' | 'error' = status;
    if (result.status === 1) {
        // $ExpectType CityResult
        result;
        // $ExpectType string
        result.adcode;
        // $ExpectType number[]
        result.bounds;
        // $ExpectType [number, number]
        result.center;
        // $ExpectType string
        result.city;
        // $ExpectType string
        result.citycode;
        // $ExpectType string
        result.country;
        // $ExpectType string
        result.info;
        // $ExpectType boolean
        result.isConverted;
        // $ExpectType string
        result.message;
        // $ExpectType string
        result.province;
        // $ExpectType 1
        result.status;
    } else {
        // $ExpectType ErrorStatus
        result;
    }
});

geolocation.on('complete', (event: AMap.Geolocation.EventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
    // $ExpectType number | null
    event.accuracy;
    // $ExpectType ReGeocodeAddressComponent
    event.addressComponent;
    // $ExpectType ReGeocodeAoi[] | undefined
    event.aois;
    // $ExpectType Cross[]
    event.crosses;
    // $ExpectType string
    event.formattedAddress;
    // $ExpectType string
    event.info;
    // $ExpectType boolean
    event.isConverted;
    const type: 'ip' | 'html5' | 'sdk' = event.location_type;
    // $ExpectType string
    event.message;
    // $ExpectType ReGeocodePoi[]
    event.pois;
    // $ExpectType LngLat
    event.position;
    // $ExpectType Road[]
    event.roads;
    // $ExpectType 1
    event.status;
});

geolocation.on('error', (event: AMap.Geolocation.EventMap['error']) => {
    // $ExpectType "error"
    event.type;
    // $ExpectType string
    event.info;
    // $ExpectType string
    event.message;
    // $ExpectType 0
    event.status;
});
