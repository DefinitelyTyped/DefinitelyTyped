import {
    map,
    lnglat,
    size,
    pixel,
    div,
    lnglatTuple
} from '../preset';

interface ExtraData {
    test: number;
}

// $ExpectType InfoWindow<any>
new AMap.InfoWindow();
// $ExpectType InfoWindow<any>
new AMap.InfoWindow({});
// $ExpectType InfoWindow<ExtraData>
const infoWindow = new AMap.InfoWindow<ExtraData>({
    isCustom: false,
    autoMove: false,
    closeWhenClickMap: false,
    content: 'content',
    size: [100, 100],
    offset: new AMap.Pixel(10, 10),
    position: lnglat,
    showShadow: true
});

// $ExpectType void
infoWindow.open(map);
// $ExpectType void
infoWindow.open(map, lnglat);
// $ExpectType void
infoWindow.open(map, lnglatTuple);

// $ExpectType void
infoWindow.close();

// $ExpectType boolean
infoWindow.getIsOpen();

// $ExpectType void
infoWindow.setContent('content');
// $ExpectType void
infoWindow.setContent(div);

// $ExpectType string | HTMLElement | undefined
infoWindow.getContent();

// $ExpectType void
infoWindow.setPosition(lnglat);
// $ExpectType void
infoWindow.setPosition(lnglatTuple);

// $ExpectType LngLat | undefined
infoWindow.getPosition();

// $ExpectType Size | undefined
infoWindow.getSize();

infoWindow.on('change', (event: AMap.InfoWindow.EventMap<typeof infoWindow>['change']) => {
    // $ExpectType "change"
    event.type;
    // $ExpectType InfoWindow<ExtraData>
    event.target;
});

infoWindow.on('close', (event: AMap.InfoWindow.EventMap<typeof infoWindow>['close']) => {
    // $ExpectType "close"
    event.type;
    // $ExpectType InfoWindow<ExtraData>
    event.target;
});

infoWindow.on('open', (event: AMap.InfoWindow.EventMap<typeof infoWindow>['open']) => {
    // $ExpectType "open"
    event.type;
    // $ExpectType InfoWindow<ExtraData>
    event.target;
});
