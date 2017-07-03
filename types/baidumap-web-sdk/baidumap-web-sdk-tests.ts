import "./index"
namespace BMapTests {
    export class TestFixture {
        //document: http://lbsyun.baidu.com/index.php?title=jspopular
        public createMap(container: string | HTMLElement) {
            navigator.geolocation.getCurrentPosition((position: Position) => {
                let point = new BMap.Point(position.coords.longitude, position.coords.latitude);
                let map = new BMap.Map(container);
                map.centerAndZoom(point, 15);
            }, console.log, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
        }
        public addControl(map: BMap.Map) {
            map.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT }));
            map.addControl(new BMap.NavigationControl());
            map.addControl(new BMap.MapTypeControl({ mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP] }));
            map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));
        }
        public addMarker(map: BMap.Map, point: BMap.Point) {
            var marker = new BMap.Marker(point);
            map.addOverlay(marker);
            marker.setAnimation(BMAP_ANIMATION_BOUNCE);
        }
    }
}
