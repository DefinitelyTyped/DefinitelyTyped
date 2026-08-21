import * as L from "leaflet";

declare module "leaflet" {
    interface TileLayerOptions {
        // 支持 https://github.com/gisarmory/Leaflet.InternetMapCorrection/blob/master/src/leaflet.mapCorrection.js
        corrdType?: "gcj02" | "bd09" | "wgs84";
    }

    type ProvidedChinaMapType =
        // 天地图
        | "TianDiTu.Normal.Map"
        | "TianDiTu.Normal.Annotion"
        | "TianDiTu.Satellite.Map"
        | "TianDiTu.Satellite.Annotion"
        | "TianDiTu.Terrain.Map"
        | "TianDiTu.Terrain.Annotion"
        | // 高德
        "GaoDe.Normal.Map"
        | // (include Annotion)
        "GaoDe.Satellite.Map"
        | "GaoDe.Satellite.Annotion"
        | // 谷歌
        "Google.Normal.Map"
        | // (include Annotion)
        "Google.Satellite.Map"
        | // (exclude Annotion)
        "Google.Satellite.Map"
        | // (include Annotion)
        // Geoq
        "Geoq.Normal.Map"
        | "Geoq.Normal.PurplishBlue"
        | "Geoq.Normal.Gray"
        | "Geoq.Normal.Warm"
        | "Geoq.Normal.Hydro"
        | // OSM
        "OSM.Normal.Map"
        | // 百度
        "Baidu.Normal.Map"
        | "Baidu.Satellite.Map"
        | // (exclude Annotion)
        "Baidu.Satellite.Annotion"
        | // 腾讯
        "Tencent.Normal.Map"
        | "Tencent.Satellite.Map"
        | "Tencent.Terrain.Map";

    namespace tileLayer {
        function chinaProvider(map: ProvidedChinaMapType, options?: TileLayerOptions): TileLayer;
    }
}
