import "baidumap-web-sdk";

class TestFixture {
	// document: http://lbsyun.baidu.com/index.php?title=jspopular3.0
	createMap(container: string | HTMLElement) {
		navigator.geolocation.getCurrentPosition((position: Position) => {
			const point = new BMap.Point(position.coords.longitude, position.coords.latitude);
			const map = new BMap.Map(container);
			map.centerAndZoom(point, 15);
		}, console.log, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
	}
	addControl(map: BMap.Map) {
		map.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT }));
		map.addControl(new BMap.NavigationControl());
		map.addControl(new BMap.MapTypeControl({ mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP] }));
		map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));
	}
	addMarker(map: BMap.Map, point: BMap.Point) {
		const marker = new BMap.Marker(point);
		map.addOverlay(marker);
		marker.setAnimation(BMAP_ANIMATION_BOUNCE);
	}
	create_map(map: BMap.Map, city: string) {
		map.centerAndZoom(city);
	}
}
