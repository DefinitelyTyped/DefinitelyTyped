// Type definitions for BaiduMap v2.0
// Project: http://lbsyun.baidu.com/index.php?title=jspopular
// Definitions by: Codemonk <http://www.youxianxueche.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
Copyright [Codemonk] [Codemonk]

Licensed under the Apache License, Version 2.0 (the "License ");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS " BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
***************************************************************************** */

/// <reference path="./baidumap.base.d.ts" />
/// <reference path="./baidumap.control.d.ts" />
declare namespace BMap {
    class TileLayer {
        constructor(opts?: TileLayerOptions)
        getTilesUrl(tileCoord: Pixel, zoom: number): string
        getCopyright(): Copyright
        isTransparentPng(): boolean
    }
    interface TileLayerOptions {
        transparentPng?: boolean
        tileUrlTemplate?: string
        copyright?: Copyright
        zIndex?: number
    }
    class TrafficLayer extends TileLayer {
        constructor(opts?: TrafficLayerOptions)
    }
    interface TrafficLayerOptions {
        predictDate?: PredictDate
    }
    interface PredictDate {
        weekday: number
        hour: number
    }
    class CustomLayer extends TileLayer {
        constructor(opts: CustomLayerOptions)
        onhotspotclick: (event: { type: string, target: any, content: any }) => void
    }
    interface Custompoi {
        poiId: string
        databoxId: string
        title: string
        address: string
        phoneNumber: string
        postcode: string
        provinceCode: number
        province: string
        cityCode: number
        city: string
        districtCode: number
        district: string
        point: Point
        tags: string[]
        typeId: number
        extendedData: any
    }
    class PanoramaCoverageLayer extends TileLayer {
        constructor()
    }
    interface CustomLayerOptions {
        databoxId?: string
        geotableId?: string
        q?: string
        tags?: string
        filter?: string
        pointDensityType?: PointDensityType
    }
    type PointDensityType = number
}

declare const BMAP_POINT_DENSITY_HIGH: BMap.PointDensityType
declare const BMAP_POINT_DENSITY_MEDIUM: BMap.PointDensityType
declare const BMAP_POINT_DENSITY_LOW: BMap.PointDensityType