const aMap = new AMap.Map('id', {
    resizeEnable: true,
    animateEnable: true
});

aMap.setCenter(new AMap.LngLat(0, 0));

AMap.plugin(['someplugin'], () => {
    console.log('plugin loaded');
});

AMap.convertFrom([116.3, 39.9], 'gps', (status, result) => {
    if (result.info === 'ok') {
        const _ = result.locations;
    }
});

new AMap.Marker({
    map: aMap,
    title: '',
    position: new AMap.LngLat(0, 0),
});
