declare namespace AMap {
    namespace GeoJSON {
        type Geometry = {
            type: 'Point';
            coordinates: [number, number];
        } | {
            type: 'MultiPoint' | 'LineString' | 'Polygon';
            coordinates: Array<[number, number]>;
        } | {
            type: 'MultiLineString' | 'MultiPolygon';
            coordinates: Array<Array<[number, number]>>;
        } | {
            type: 'GeometryCollection';
            geometries: Geometry[];
        };

        type GeoJSONObject = {
            type: 'Feature';
            properties: any;
            geometry: Geometry;
        } | {
            type: 'FeatureCollection',
            properties: any;
            features: GeoJSONObject[];
        };
        interface Options {
            /**
             * 要加载的标准GeoJSON对象
             */
            geoJSON?: GeoJSONObject | GeoJSONObject[];
            /**
             * 指定点要素的绘制方式
             * @param obj GeoJSON对象
             * @param lnglat 点的位置
             */
            getMarker?(obj: GeoJSONObject, lnglat: LngLat): Marker;
            /**
             * 指定线要素的绘制方式
             * @param obj GeoJSON对象
             * @param lnglats 线的路径
             */
            getPolyline?(obj: GeoJSONObject, lnglats: LngLat[]): Polyline;
            /**
             * 指定面要素的绘制方式
             * @param obj GeoJSON对象
             * @param lnglats 面的路径
             */
            getPolygon?(obj: GeoJSONObject, lnglats: LngLat[]): Polygon;
            coordsToLatLng?(lnglat: LngLat): LngLat;

            // internal
            coordsToLatLngs?(lnglats: LngLat[]): LngLat[];
        }
    }

    class GeoJSON<ExtraData = any> extends OverlayGroup<Overlay, ExtraData> {
        /**
         * GeoJSON
         * @param options 选项
         */
        constructor(options?: GeoJSON.Options);
        /**
         * 加载新的GeoJSON对象，转化为覆盖物，旧的覆盖物将移除
         * @param obj GeoJSON对象
         */
        importData(obj: GeoJSON.GeoJSONObject | GeoJSON.GeoJSONObject[]): void;
        /**
         * 将当前对象包含的覆盖物转换为GeoJSON对象
         */
        toGeoJSON(): GeoJSON.GeoJSONObject[];
    }
}
