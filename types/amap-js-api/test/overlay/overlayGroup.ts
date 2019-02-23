import {
    map,
    lnglat,
    pixel,
    circle,
    marker,
    markerShape,
    icon
} from '../preset';

// $ExpectType OverlayGroup<Overlay<any>, any>
const overlayGroup2 = new AMap.OverlayGroup();
// $ExpectType OverlayGroup<Marker<any>, any>
new AMap.OverlayGroup<AMap.Marker, any>(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
const overlayGroup = new AMap.OverlayGroup<AMap.Marker>([marker]);

// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.addOverlay(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.addOverlay([marker]);
// $ExpectError
overlayGroup.addOverlay([circle]);

// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.addOverlays(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.addOverlays([marker]);

// $ExpectType Marker<any>[]
overlayGroup.getOverlays();

// $ExpectType boolean
overlayGroup.hasOverlay(marker);
// $ExpectType boolean
overlayGroup.hasOverlay(o => o === marker);

// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.removeOverlay(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.removeOverlay([marker]);

// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.removeOverlays(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.removeOverlays([marker]);

// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.clearOverlays();

// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.eachOverlay(function(overlay, index, overlays) {
    // $ExpectType Marker<any>
    overlay;
    // $ExpectType number
    index;
    // $ExpectType Marker<any>[]
    overlays;
    // $ExpectType Marker<any>
    this;
});

// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.setMap(null);
// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.setMap(map);

// $ExpectType OverlayGroup<Overlay<any>, any>
overlayGroup2.setOptions({
    test: 1
});
// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.setOptions({
    map,
    position: lnglat,
    offset: pixel,
    icon: 'iconUrl',
    content: 'htmlString',
    topWhenClick: true,
    raiseOnDrag: true,
    cursor: 'default',
    visible: true,
    zIndex: 10,
    angle: 10,
    autoRotation: true,
    animation: 'AMAP_ANIMATION_BOUNCE',
    shadow: icon,
    title: '123',
    clickable: true,
    shape: markerShape,
    extData: {
        test: 123
    }
});

// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.show();

// $ExpectType OverlayGroup<Marker<any>, any>
overlayGroup.hide();

type ClickEvent = AMap.MapsEvent<'click', AMap.Overlay>;
overlayGroup.on('click', (event: ClickEvent) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Overlay<any>
    event.target;
});
