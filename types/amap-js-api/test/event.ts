import {
    lnglat,
    pixel,
    map
} from './preset';
declare var div: HTMLDivElement;
declare var input: HTMLInputElement;

// $ExpectType Map
map.on('hotspotclick', (event: AMap.Map.EventMap['hotspotclick']) => {
    // $ExpectType "hotspotclick"
    event.type;
    // $ExpectType string
    event.id;
    // $ExpectType LngLat
    event.lnglat;
});

// $ExpectType EventListener<0>
AMap.event.addDomListener(div, 'click', event => {
    // $ExpectType number
    event.clientX;
});

// $ExpectType EventListener<1>
AMap.event.addListener(map, 'hotspotclick', function (event: AMap.Map.EventMap['hotspotclick']) {
    // $ExpectType "hotspotclick"
    event.type;
    // $ExpectType string
    event.id;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType number
    this.test;
}, { test: 1 });
AMap.event.addListener(map, 'click', (event: AMap.Map.EventMap['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Map
    event.target;
});

// $ExpectType EventListener<1>
AMap.event.addListenerOnce(map, 'hotspotclick', function (event: AMap.Map.EventMap['hotspotclick']) {
    // $ExpectType "hotspotclick"
    event.type;
    // $ExpectType string
    event.id;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType number
    this.test;
}, { test: 1 });

declare const eventListener: AMap.event.EventListener<0>;
// $ExpectType void
AMap.event.removeListener(eventListener);

// $ExpectType void
AMap.event.trigger(map, 'click', {
    lnglat,
    pixel,
    target: map
});
// $ExpectType void
AMap.event.trigger(map, 'hotspotclick', {
    lnglat,
    name: 'name',
    id: 'id',
    isIndoorPOI: true
});
// $ExpectType void
AMap.event.trigger(map, 'complete');
