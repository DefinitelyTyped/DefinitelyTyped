declare const map: AMap.Map;
declare const lnglat: AMap.LngLat;
declare const lnglatTuple: [number, number];

// $ExpectError
new AMap.Transfer();
// $ExpectType Transfer
new AMap.Transfer({
    city: 'city'
});
// $ExpectType Transfer
const transfer = new AMap.Transfer({
    city: 'city1',
    policy: AMap.TransferPolicy.LEAST_TIME,
    nightflag: true,
    cityd: 'city2',
    extensions: 'base',
    map,
    panel: 'panel',
    hideMarkers: false,
    isOutline: true,
    outlineColor: 'green',
    autoFitView: true
});

// $ExpectType void
transfer.search(lnglat, lnglat);
// $ExpectType void
transfer.search(lnglatTuple, lnglatTuple);
// $ExpectType void
transfer.search(lnglat, lnglat, (status, result) => {
    const temp: 'complete' | 'no_data' | 'error' = status;
    if (typeof result !== 'string') {
        // $ExpectType SearchResultBase
        result;
        // $ExpectType LngLat
        result.destination;
        // $ExpectType Poi | undefined
        result.end;
        if (result.end) {
            const end = result.end;
            // $ExpectType LngLat
            end.location;
            // $ExpectType string
            end.name;
            // $ExpectType "start" | "end"
            end.type;
        }
        // $ExpectType string
        result.info;
        // $ExpectType LngLat
        result.origin;
        // $ExpectType TransferPlan[]
        result.plans;
        {
            const plan = result.plans[0];
            // $ExpectType number
            plan.cost;
            // $ExpectType number
            plan.distance;
            // $ExpectType boolean
            plan.nightLine;
            // $ExpectType LngLat[]
            plan.path;
            // $ExpectType number
            plan.railway_distance;
            // $ExpectType Segment[]
            plan.segments;
            const segments = plan.segments[0];
            switch (segments.transit_mode) {
                case 'WALK':
                    // $ExpectType number
                    segments.distance;
                    // $ExpectType string
                    segments.instruction;
                    // $ExpectType number
                    segments.time;
                    // $ExpectType WalkDetails
                    const walkDetails = segments.transit;
                    {
                        // $ExpectType LngLat
                        walkDetails.destination;
                        // $ExpectType LngLat
                        walkDetails.origin;
                        // $ExpectType LngLat[]
                        walkDetails.path;
                        // $ExpectType WalkStep[]
                        walkDetails.steps;
                        const walkStep = walkDetails.steps[0];
                        if (walkStep) {
                            // $ExpectType string
                            walkStep.action;
                            // $ExpectType string
                            walkStep.assist_action;
                            // $ExpectType number
                            walkStep.distance;
                            // $ExpectType string
                            walkStep.instruction;
                            // $ExpectType LngLat[]
                            walkStep.path;
                            // $ExpectType string
                            walkStep.road;
                            // $ExpectType number
                            walkStep.time;
                        }
                    }
                    // $ExpectType "WALK"
                    segments.transit_mode;
                    break;
                case 'TAXI':
                    // $ExpectType number
                    segments.distance;
                    // $ExpectType string
                    segments.instruction;
                    // $ExpectType number
                    segments.time;
                    // $ExpectType string
                    segments.instruction;
                    // $ExpectType TaxiDetails
                    const taxiDetails = segments.transit;
                    {
                        // $ExpectType LngLat
                        taxiDetails.destination;
                        // $ExpectType number
                        taxiDetails.distance;
                        // $ExpectType LngLat
                        taxiDetails.origin;
                        // $ExpectType string
                        taxiDetails.sname;
                        // $ExpectType number
                        taxiDetails.time;
                        // $ExpectType string
                        taxiDetails.tname;
                    }
                    // $ExpectType "TAXI"
                    segments.transit_mode;
                    break;
                case 'RAILWAY':
                    // $ExpectType number
                    segments.distance;
                    // $ExpectType string
                    segments.instruction;
                    // $ExpectType number
                    segments.time;
                    // $ExpectType RailwayDetails
                    const railwayDetails = segments.transit;
                    {
                        // $ExpectType RailStop
                        const arrivalStop = railwayDetails.arrival_stop;
                        {
                            // $ExpectType string
                            arrivalStop.adcode;
                            // $ExpectType string
                            arrivalStop.id;
                            // $ExpectType LngLat
                            arrivalStop.location;
                            // $ExpectType string
                            arrivalStop.name;
                            // $ExpectType RailwaySegment | undefined
                            arrivalStop.segment;
                            // $ExpectType number
                            arrivalStop.time;
                        }
                        // $ExpectType RailStop
                        railwayDetails.departure_stop;
                        // $ExpectType number
                        railwayDetails.distance;
                        // $ExpectType string
                        railwayDetails.id;
                        // $ExpectType string
                        railwayDetails.name;
                        // $ExpectType Space[]
                        railwayDetails.spaces;
                        {
                            const space = railwayDetails.spaces[0];
                            // $ExpectType number
                            space.cost;
                            // $ExpectType string | never[]
                            space.type;
                        }
                        // $ExpectType number
                        railwayDetails.time;
                        // $ExpectType string
                        railwayDetails.trip;
                        // $ExpectType string
                        railwayDetails.type;

                        if ('alters' in railwayDetails) {
                            // $ExpectType Alter[]
                            railwayDetails.alters;
                            {
                                const alter = railwayDetails.alters[0];
                                // $ExpectType string
                                alter.id;
                                // $ExpectType string
                                alter.name;
                            }
                            railwayDetails.alters;
                            // $ExpectType number
                            railwayDetails.via_num;
                            // $ExpectType ViaStop[]
                            railwayDetails.via_stops;
                            {
                                const viaStop = railwayDetails.via_stops[0];
                                // $ExpectType string
                                viaStop.id;
                                // $ExpectType LngLat
                                viaStop.location;
                                // $ExpectType string
                                viaStop.name;
                                // $ExpectType number
                                viaStop.time;
                                // $ExpectType number
                                viaStop.wait;
                            }
                        }
                    }
                    // $ExpectType "RAILWAY"
                    segments.transit_mode;
                    break;
                case 'SUBWAY':
                case 'METRO_RAIL':
                case 'BUS':
                    // $ExpectType number
                    segments.distance;
                    // $ExpectType string
                    segments.instruction;
                    // $ExpectType number
                    segments.time;
                    // $ExpectType TransitDetails
                    const transitDetail = segments.transit;
                    {
                        // $ExpectType SubwayEntrance | undefined
                        const exit = transitDetail.exit;
                        if (exit) {
                            // $ExpectType LngLat
                            exit.location;
                            // $ExpectType string
                            exit.name;
                        }
                        // $ExpectType SubwayEntrance | undefined
                        transitDetail.entrance;
                        // $ExpectType TransitLine[]
                        transitDetail.lines;
                        {
                            const line = transitDetail.lines[0];
                            // $ExpectType string | never[]
                            line.etime;
                            // $ExpectType string
                            line.id;
                            // $ExpectType string
                            line.name;
                            // $ExpectType string | never[]
                            line.stime;
                            // $ExpectType string
                            line.type;
                        }
                        // $ExpectType Stop
                        const offStation = transitDetail.off_station;
                        {
                            // $ExpectType string
                            offStation.id;
                            // $ExpectType LngLat
                            offStation.location;
                            // $ExpectType string
                            offStation.name;
                            // $ExpectType TransitSegment | undefined
                            offStation.segment;
                        }
                        // $ExpectType Stop
                        transitDetail.on_station;
                        // $ExpectType LngLat[]
                        transitDetail.path;
                        // $ExpectType number
                        transitDetail.via_num;
                        // $ExpectType Stop[]
                        transitDetail.via_stops;
                        {
                            const viaStop = transitDetail.via_stops[0];
                            // $ExpectType string
                            viaStop.id;
                            // $ExpectType LngLat
                            viaStop.location;
                            // $ExpectType string
                            viaStop.name;
                        }
                    }
                    // $ExpectType "SUBWAY" | "METRO_RAIL" | "BUS"
                    segments.transit_mode;
                    break;
                default:
                    // $ExpectType never
                    segments;
            }
            // $ExpectType number
            plan.taxi_distance;
            // $ExpectType number
            plan.time;
            // $ExpectType number
            plan.transit_distance;
            // $ExpectType number
            plan.walking_distance;
        }
        // $ExpectType Poi | undefined
        result.start;
        // $ExpectType number
        result.taxi_cost;
    } else {
        // $ExpectType string
        result;
    }
});

// $ExpectType void
transfer.search([{ keyword: 'origin' }, { keyword: 'destination' }], (status, result) => {
    const temp: 'complete' | 'no_data' | 'error' = status;
    if (typeof result !== 'string') {
        // $ExpectType SearchResultExt
        result;
        // $ExpectType PoiExt
        result.start;
        // $ExpectType string
        result.originName;
        // $ExpectType PoiExt
        result.end;
        // $ExpectType string
        result.destinationName;
    } else {
        // $ExpectType string
        result;
    }
});

transfer.on('complete', (event: AMap.Transfer.EventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
    if ('info' in event) {
        // $ExpectType string
        event.info;
        // $ExpectType LngLat
        event.origin;
        // $ExpectType LngLat
        event.destination;
        // $ExpectType number
        event.taxi_cost;
        // $ExpectType TransferPlan[]
        event.plans;
    }
    if ('originName' in event) {
        // $ExpectType PoiExt
        event.start;
        // $ExpectType PoiExt
        event.end;
        // $ExpectType string
        event.originName;
        // $ExpectType string
        event.destinationName;
    } else {
        // $ExpectType Poi | undefined
        event.start;
        // $ExpectType Poi | undefined
        event.end;
    }
});

transfer.on('error', (event: AMap.Transfer.EventMap['error']) => {
    // $ExpectType "error"
    event.type;
    // $ExpectType string
    event.info;
});
