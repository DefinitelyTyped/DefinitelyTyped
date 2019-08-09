declare const map: AMap.Map;
declare const lnglat: AMap.LngLat;
declare const lnglatTuple: [number, number];

// $ExpectType Riding
new AMap.Riding();
// $ExpectType Riding
new AMap.Riding({});
// $ExpectType Riding
const riding = new AMap.Riding({
    map,
    policy: AMap.RidingPolicy.FASTEST,
    panel: 'panel',
    hideMarkers: false,
    isOutline: true,
    outlineColor: 'color',
    autoFitView: true
});

// $ExpectType void
riding.search(lnglat, lnglat);
// $ExpectType void
riding.search(lnglatTuple, lnglatTuple);
// $ExpectType void
riding.search(lnglat, lnglat, (status, result) => {
    const statusTemp: 'complete' | 'error' | 'no_data' = status;
    if (typeof result !== 'string') {
        // $ExpectType SearchResultBase
        result;
        // $ExpectType number
        result.count;
        // $ExpectType LngLat
        result.destination;
        // $ExpectType Poi | undefined
        const end = result.end;
        if (end) {
            // $ExpectType LngLat
            end.location;
            // $ExpectType string
            end.name;
            const type: 'start' | 'end' = end.type;
        }
        // $ExpectType string
        result.info;
        // $ExpectType LngLat
        result.origin;
        // $ExpectType RideRoute[]
        result.routes;
        {
            const route = result.routes[0];
            // $ExpectType number
            route.distance;
            // $ExpectType RideStep[]
            route.rides;
            {
                const ride = route.rides[0];
                // $ExpectType string
                ride.action;
                // $ExpectType number
                ride.distance;
                // $ExpectType LngLat
                ride.end_location;
                // $ExpectType string
                ride.instruction;
                // $ExpectType string
                ride.orientation;
                // $ExpectType LngLat[]
                ride.path;
                // $ExpectType string
                ride.road;
                // $ExpectType LngLat
                ride.start_location;
                // $ExpectType number
                ride.time;
            }
            // $ExpectType number
            route.time;
        }
        // $ExpectType Poi | undefined
        result.start;
    } else {
        // $ExpectType string
        result;
    }
});

riding.search([{ keyword: 'origin' }, { keyword: 'destination' }]);
riding.search([{ keyword: 'origin' }, { keyword: 'destination' }], (status, result) => {
    const statusTemp: 'complete' | 'error' | 'no_data' = status;
    if (typeof result !== 'string') {
        // $ExpectType SearchResultExt
        result;
        // $ExpectType number
        result.count;
        // $ExpectType LngLat
        result.destination;
        // $ExpectType string
        result.destinationName;
        // $ExpectType PoiExt
        result.end;
        // $ExpectType string
        result.info;
        // $ExpectType LngLat
        result.origin;
        // $ExpectType string
        result.originName;
        // $ExpectType RideRoute[]
        result.routes;
        // $ExpectType PoiExt
        result.start;
    } else {
        // $ExpectType string
        result;
    }
});

// $ExpectType void
riding.clear();

riding.on('error', (event: AMap.Riding.EventMap['error']) => {
    // $ExpectType "error"
    event.type;
    // $ExpectType string
    event.info;
});

riding.on('complete', (event: AMap.Riding.EventMap['complete']) => {
    // $ExpectType number
    event.count;
    // $ExpectType LngLat
    event.destination;
    // $ExpectType string
    event.info;
    // $ExpectType LngLat
    event.origin;
    // $ExpectType RideRoute[]
    event.routes;
    // $ExpectType "complete"
    event.type;

    if ('destinationName' in event) {
        // $ExpectType string
        event.destinationName;
        // $ExpectType PoiExt
        event.end;
        // $ExpectType string
        event.originName;
        // $ExpectType PoiExt
        event.start;
    } else {
        // $ExpectType Poi | undefined
        event.start;
        // $ExpectType Poi | undefined
        event.end;
    }
});
