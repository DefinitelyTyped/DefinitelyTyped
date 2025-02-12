import {
  AMapImageryProvider,
  BaiduImageryProvider,
  GeoVisImageryProvider,
  GoogleImageryProvider,
  TdtImageryProvider,
  TencentImageryProvider,
  CustomGeographicTilingScheme,
  CustomMercatorTilingScheme
} from '@cesium-china/cesium-map'
import { expectType, expectError } from 'tsd'
import * as Cesium from 'cesium'

// 测试高德地图
expectType<Cesium.ImageryProvider>(new AMapImageryProvider({
  style: 'img',
  crs: 'WGS84',
}))
expectError(new AMapImageryProvider({
  style: 'invalid',
  crs: 'invalid',
}))
expectError(new AMapImageryProvider({
  style: 'img'
}))
expectError(new AMapImageryProvider({
  invalid: 'invalid'
}))

// 测试百度地图
expectType<Cesium.ImageryProvider>(new BaiduImageryProvider({
  style: 'img',
  crs: 'WGS84',
}))
expectError(new BaiduImageryProvider({
  style: 'invalid',
  crs: 'invalid',
}))
expectError(new BaiduImageryProvider({
  style: 'img'
}))
expectError(new BaiduImageryProvider({
  invalid: 'invalid'
}))

// 测试星图地图
expectType<Cesium.ImageryProvider>(new GeoVisImageryProvider({
  style: 'img',
  key: 'key',
  format: 'png'
}))
expectError(new GeoVisImageryProvider({
  style: 'invalid',
  key: 114514,
  format: 'invalid'
}))
expectError(new GeoVisImageryProvider({
  style: 'img',
}))
expectError(new GeoVisImageryProvider({
  invalid: 'invalid'
}))


// 测试谷歌地图
expectType<Cesium.ImageryProvider>(new GoogleImageryProvider({
  style: 'img',
  crs: 'WGS84',
}))
expectError(new GoogleImageryProvider({
  style: 'invalid',
  crs: 'invalid',
}))
expectError(new GoogleImageryProvider({
  style: 'img'
}))
expectError(new GoogleImageryProvider({
  invalid: 'invalid'
}))

// 测试天地图
expectType<Cesium.ImageryProvider>(new TdtImageryProvider({
  style: 'vec',
  key: 'key'
}))
expectError(new TdtImageryProvider({
  style: 'invalid',
  key: 114514,
}))
expectError(new TdtImageryProvider({
  style: 'vec',
}))
expectError(new TdtImageryProvider({
  invalid: 'invalid'
}))

// 测试腾讯地图
expectType<Cesium.ImageryProvider>(new TencentImageryProvider({
  style: 'img',
  crs: 'WGS84',
}))
expectError(new TencentImageryProvider({
  style: 'invalid',
  crs: 'invalid',
}))
expectError(new TencentImageryProvider({
  style: 'img'
}))
expectError(new TencentImageryProvider({
  invalid: 'invalid'
}))

// 测试自定义地理平铺方案
expectType<Cesium.GeographicTilingScheme>(new CustomGeographicTilingScheme({
  origin: [0, 0],
  zoomOffset: 0,
  tileSize: 256,
  resolutions: [1, 2, 3],
  ellipsoid: Cesium.Ellipsoid.WGS84,
  rectangle: Cesium.Rectangle.MAX_VALUE
}))
expectError(new CustomGeographicTilingScheme({
  origin: 'invalid',
  zoomOffset: 'invalid',
  tileSize: 'invalid',
  resolutions: 'invalid',
  ellipsoid: 'invalid',
  rectangle: 'invalid',
}))
expectError(new CustomGeographicTilingScheme({
  origin: [0, 0],
}))
expectError(new CustomGeographicTilingScheme({
  invalid: 'invalid'
}))

// 测试自定义墨卡托平铺方案
expectType<Cesium.WebMercatorTilingScheme>(new CustomMercatorTilingScheme({
  origin: [0, 0],
  zoomOffset: 0,
  tileSize: 256,
  resolutions: [1, 2, 3],
  ellipsoid: Cesium.Ellipsoid.WGS84,
  rectangleSouthwestInMeters: 0,
  rectangleNortheastInMeters: 0
}))
expectError(new CustomMercatorTilingScheme({
  origin: 'invalid',
  zoomOffset: 'invalid',
  tileSize: 'invalid',
  resolutions: 'invalid',
  ellipsoid: 'invalid',
  rectangleSouthwestInMeters: 'invalid',
  rectangleNortheastInMeters: 'invalid'
}))
expectError(new CustomMercatorTilingScheme({
  origin: [0, 0],
}))
expectError(new CustomMercatorTilingScheme({
  invalid: 'invalid'
}))