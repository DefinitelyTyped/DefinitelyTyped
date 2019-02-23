declare var map: AMap.Map;
declare var lnglat: AMap.LngLat;

// $ExpectType Buildings
var buildings = new AMap.Buildings();
// $ExpectType Buildings
new AMap.Buildings();
// $ExpectType Buildings
new AMap.Buildings({
    zooms: [1, 18],
    opacity: 0.8,
    heightFactor: 1,
    visible: true,
    zIndex: 10,
    map
});

buildings.setStyle({
    hideWithoutStyle: false,
    areas: [
        {
            visible: true,
            rejectTexture: true,
            color1: 'ffffff00',
            color2: 'ffffcc00',
            path: [[1, 2]]
        },
        {
            visible: true,
            rejectTexture: true,
            color1: 'ffffff00',
            color2: 'ffffcc00',
            path: [lnglat]
        },
        {
            color1: 'ff99ff00',
            path: [lnglat]
        },
    ]
});
