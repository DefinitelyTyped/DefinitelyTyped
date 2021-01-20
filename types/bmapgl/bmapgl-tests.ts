import "bmapgl";

class TestFixture {
    // document: http://lbsyun.baidu.com/index.php?title=jspopularGL
    createMap(container: string | HTMLElement) {
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
            const point = new BMapGL.Point(position.coords.longitude, position.coords.latitude);
            const map = new BMapGL.Map(container);
            map.centerAndZoom(point, 15);
        }, console.log, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
    }
    addControl(map: BMapGL.Map) {
        map.addControl(new BMapGL.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT }));
        map.addControl(new BMapGL.NavigationControl());
        map.addControl(new BMapGL.MapTypeControl({ mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP] }));
        map.addControl(new BMapGL.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));
    }
    addMarker(map: BMapGL.Map, point: BMapGL.Point) {
        const marker = new BMapGL.Marker(point);
        map.addOverlay(marker);
        marker.setAnimation(BMAP_ANIMATION_BOUNCE);
    }
    create_map(map: BMapGL.Map, city: string) {
        map.centerAndZoom(city);
    }
}
