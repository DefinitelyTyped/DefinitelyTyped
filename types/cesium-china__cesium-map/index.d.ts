// eslint-disable-next-line @definitelytyped/no-old-dt-header
// Type definitions for @cesium-china/cesium-map 1.0.0
// Project: https://github.com/cesiumchina/cesium-map
// Definitions by: YOYOYOAKE <https://github.com/YOYOYOAKE>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type {
    Ellipsoid,
    GeographicTilingScheme,
    Rectangle,
    UrlTemplateImageryProvider,
    WebMercatorTilingScheme,
} from "cesium";

// 高德地图
export interface AMapImageryProviderOptions {
    style: "img" | "elec" | "cva";
    crs: "WGS84" | "GCJ02";
}
export class AMapImageryProvider extends UrlTemplateImageryProvider {
    constructor(options: AMapImageryProviderOptions);
}

// 百度地图
export interface BaiduImageryProviderOptions {
    style: "img" | "vec" | "normal" | "dark";
    crs: "WGS84" | "BD09";
}

export class BaiduImageryProvider extends UrlTemplateImageryProvider {
    constructor(options: BaiduImageryProviderOptions);
}

// 星图地图
export interface GeoVisImageryProviderOptions {
    style: "img" | "vec" | "ter" | "cia" | "cat";
    key: string;
    format: "png" | "webp";
}

export class GeoVisImageryProvider extends UrlTemplateImageryProvider {
    constructor(options: GeoVisImageryProviderOptions);
}

// 谷歌地图
export interface GoogleImageryProviderOptions {
    style: "img" | "elec" | "ter" | "cva" | "img_cva";
    crs: "WGS84" | "GCJ02";
}

export class GoogleImageryProvider extends UrlTemplateImageryProvider {
    constructor(options: GoogleImageryProviderOptions);
}

// 天地图
export interface TdtImageryProviderOptions {
    style: "vec" | "cva" | "img" | "cia" | "ter";
    key: string;
}

export class TdtImageryProvider extends UrlTemplateImageryProvider {
    constructor(options: TdtImageryProviderOptions);
}

// 腾讯地图
export interface TencentImageryProviderOptions {
    style: "img" | 1;
    crs: "WGS84" | "GCJ02";
}

export class TencentImageryProvider extends UrlTemplateImageryProvider {
    constructor(options: TencentImageryProviderOptions);
}

// 自定义地理平铺方案
export interface CustomGeographicTilingSchemeOptions {
    origin: [number, number];
    zoomOffset: number;
    tileSize: number;
    resolutions: number[];
    ellipsoid: Ellipsoid;
    rectangle: Rectangle;
}

export class CustomGeographicTilingScheme extends GeographicTilingScheme {
    constructor(options: CustomGeographicTilingSchemeOptions);
}

// 自定义墨卡托平铺方案
export interface CustomMercatorTilingSchemeOptions {
    origin: [number, number];
    zoomOffset: number;
    tileSize: number;
    resolutions: number[];
    ellipsoid: Ellipsoid;
    rectangleSouthwestInMeters: number | null;
    rectangleNortheastInMeters: number | null;
}

export class CustomMercatorTilingScheme extends WebMercatorTilingScheme {
    constructor(options: CustomMercatorTilingSchemeOptions);
}
