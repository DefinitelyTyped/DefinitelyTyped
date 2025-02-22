import {
    AMapImageryProvider,
    BaiduImageryProvider,
    CustomGeographicTilingScheme,
    CustomMercatorTilingScheme,
    GeoVisImageryProvider,
    GoogleImageryProvider,
    TdtImageryProvider,
    TencentImageryProvider,
} from "@cesium-china/cesium-map";
import * as Cesium from "cesium";

new AMapImageryProvider({
    style: "img",
    crs: "WGS84",
});

new BaiduImageryProvider({
    style: "img",
    crs: "WGS84",
});

new GeoVisImageryProvider({
    style: "img",
    key: "key",
    format: "png",
});

new GoogleImageryProvider({
    style: "img",
    crs: "WGS84",
});

new TdtImageryProvider({
    style: "vec",
    key: "key",
});

new TencentImageryProvider({
    style: "img",
    crs: "WGS84",
});

new CustomGeographicTilingScheme({
    origin: [0, 0],
    zoomOffset: 0,
    tileSize: 256,
    resolutions: [1, 2, 3],
    ellipsoid: Cesium.Ellipsoid.WGS84,
    rectangle: Cesium.Rectangle.MAX_VALUE,
});

new CustomMercatorTilingScheme({
    origin: [0, 0],
    zoomOffset: 0,
    tileSize: 256,
    resolutions: [1, 2, 3],
    ellipsoid: Cesium.Ellipsoid.WGS84,
    rectangleSouthwestInMeters: 0,
    rectangleNortheastInMeters: 0,
});
