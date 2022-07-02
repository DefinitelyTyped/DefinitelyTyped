declare const map: AMap.Map;
declare const lnglat: AMap.LngLat;
declare const lnglatTuple: [number, number];

// $ExpectType Driving
new AMap.Driving();
// $ExpectType Driving
new AMap.Driving({});
// $ExpectType Driving
const driving = new AMap.Driving({
    policy: AMap.DrivingPolicy.LEAST_DISTANCE,
    extensions: 'all',
    ferry: true,
    map,
    panel: 'result',
    hideMarkers: false,
    showTraffic: true,
    province: '粤',
    number: 'NH1N11',
    isOutline: true,
    outlineColor: 'blue',
    autoFitView: true
});

// $ExpectType void
driving.search(lnglat, lnglat);
// $ExpectType void
driving.search(lnglatTuple, lnglatTuple);
// $ExpectType void
driving.search(lnglat, lnglat, { waypoints: [lnglat] });
driving.search(lnglat, lnglat, { waypoints: [lnglat] }, (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    if (typeof result !== 'string') {
        // $ExpectType LngLat
        result.destination;
        // $ExpectType Poi
        result.end;
        {
            const poi = result.end;
            // $ExpectType LngLat
            poi.location;
            // $ExpectType string
            poi.name;
            // $ExpectType "start" | "end" | "waypoint" || "end" | "start" | "waypoint"
            poi.type;
        }
        // $ExpectType string
        result.info;
        // $ExpectType LngLat
        result.origin;
        // $ExpectType DriveRoute[]
        result.routes;
        {
            const route = result.routes[0];
            // $ExpectType number
            route.distance;
            // $ExpectType string
            route.policy;
            // $ExpectType 0 | 1
            route.restriction;
            // $ExpectType DriveStep[]
            route.steps;
            {
                const step = route.steps[0];
                // $ExpectType string
                step.action;
                // $ExpectType string
                step.assistant_action;
                // $ExpectType number
                step.distance;
                // $ExpectType LngLat
                step.end_location;
                // $ExpectType string
                step.instruction;
                // $ExpectType string
                step.orientation;
                // $ExpectType LngLat[]
                step.path;
                // $ExpectType string
                step.road;
                // $ExpectType LngLat
                step.start_location;
                // $ExpectType number
                step.time;
                // $ExpectType number
                step.toll_distance;
                // $ExpectType string
                step.toll_road;
                // $ExpectType number
                step.tolls;
                // $ExpectType ViaCity[] | undefined
                step.cities;
                if (step.cities) {
                    const city = step.cities[0];
                    // $ExpectType string
                    city.adcode;
                    // $ExpectType string
                    city.citycode;
                    // $ExpectType District[]
                    city.districts;
                    {
                        const district = city.districts[0];
                        // $ExpectType string
                        district.adcode;
                        // $ExpectType string
                        district.name;
                    }
                    // $ExpectType string
                    city.name;
                }
                // $ExpectType TMC[] | undefined
                step.tmcs;
                if (step.tmcs) {
                    const tmc = step.tmcs[0];
                    // $ExpectType number
                    tmc.distance;
                    // $ExpectType string | never[]
                    tmc.lcode;
                    // $ExpectType LngLat[]
                    tmc.path;
                    // $ExpectType string
                    tmc.polyline;
                    // $ExpectType string
                    tmc.status;
                }
                // $ExpectType TMCsPath[] | undefined
                step.tmcsPaths;
                if (step.tmcsPaths) {
                    const tmcsPath = step.tmcsPaths[0];
                    // $ExpectType LngLat[]
                    tmcsPath.path;
                    // $ExpectType string
                    tmcsPath.status;
                }
            }
            // $ExpectType number
            route.time;
            // $ExpectType number
            route.tolls;
            // $ExpectType number
            route.tolls_distance;
        }
        // $ExpectType Poi
        result.start;
        // $ExpectType number | undefined
        result.taxi_cost;
        // $ExpectType (Poi & { isWaypoint: boolean; })[]
        result.waypoints;
    } else {
        // $ExpectType string
        result;
    }
});
driving.search([{ keyword: 'start' }, { keyword: 'end' }], (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    if (typeof result !== 'string') {
        // $ExpectType SearchResultExt
        result;
        // $ExpectType string
        result.destinationName;
        // $ExpectType PoiExt
        result.end;
        // $ExpectType string
        result.originName;
        // $ExpectType PoiExt
        result.start;
        // (PoiExt & {isWaypoint: boolean})[]
        result.waypoints;
    } else {
        // $ExpectType string
        result;
    }
});

driving.search([
    { keyword: 'start', city: 'startCity' },
    { keyword: 'end', city: 'endCity' }
]);

// $ExpectType void
driving.setPolicy();
// $ExpectType void
driving.setPolicy(AMap.DrivingPolicy.LEAST_DISTANCE);

// $ExpectType void
driving.setAvoidPolygons([[lnglat, lnglat, lnglat, lnglat]]);
// $ExpectType void
driving.setAvoidPolygons([[lnglatTuple, lnglatTuple, lnglatTuple, lnglatTuple]]);

// $ExpectType void
driving.setAvoidRoad('roadName');

// $ExpectType void
driving.clearAvoidRoad();

// $ExpectType void
driving.clearAvoidPolygons();

// $ExpectType LngLat[]
driving.getAvoidPolygons();

// $ExpectType string | undefined
driving.getAvoidRoad();

// $ExpectType void
driving.clear();

// $ExpectType void
driving.searchOnAMAP({
    origin: lnglat,
    destination: lnglat
});
// $ExpectType void
driving.searchOnAMAP({
    origin: lnglatTuple,
    destination: lnglatTuple
});
// $ExpectType void
driving.searchOnAMAP({
    origin: lnglatTuple,
    originName: 'originName',
    destination: lnglatTuple,
    destinationName: 'destinationName'
});

// $ExpectType void
driving.setProvinceAndNumber('province', 'number');

driving.on('complete', (event: AMap.Driving.EventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
    // $ExpectType string
    event.info;

    if ('start' in event) {
        // $ExpectType LngLat
        event.destination;
        if ('destinationName' in event) {
            // $ExpectType string
            event.destinationName;
            // $ExpectType string
            event.originName;
        }
        event.end;
        // $ExpectType LngLat
        event.origin;
        // $ExpectType DriveRoute[]
        event.routes;
        event.start;
        // $ExpectType number | undefined
        event.taxi_cost;
        event.waypoints;
    }
});
