import { lnglat } from './preset';

// $ExpectType View2D
new AMap.View2D();
// $ExpectType View2D
new AMap.View2D({});

// $ExpectType View2D
new AMap.View2D({
    center: [1, 2],
    rotation: 1,
    zoom: 10,
    crs: 'EPGS3395'
});

// $ExpectType View2D
const view2d = new AMap.View2D({
    center: lnglat
});

// $ExpectType View2D
view2d.on('complete', () => { });
