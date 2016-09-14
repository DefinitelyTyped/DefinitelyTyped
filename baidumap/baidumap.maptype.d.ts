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
/// <reference path="./baidumap.maplayer.d.ts" />
declare namespace BMap {
    class MapType {
        constructor(name: string, layers: TileLayer | TileLayer[], opts?: MapTypeOptions)
        getName(): string
        getTileLayer(): TileLayer
        getMinZoom(): number
        getMaxZoom(): number
        getProjection(): Projection
        getTextColor(): string
        getTips(): string
    }
    interface MapTypeOptions {
        minZoom?: number
        maxZoom?: number
        errorImageUrl?: string
        textColor?: number
        tips?: string
    }
    interface Projection {
        lngLatToPoint(lngLat: Point): Pixel
        pointToLngLat(point: Pixel): Point
    }
    interface MercatorProjection extends Projection {
    }
    interface PerspectiveProjection extends Projection {
    }
}
declare const BMAP_NORMAL_MAP: BMap.MapType
declare const BMAP_PERSPECTIVE_MAP: BMap.MapType
declare const BMAP_SATELLITE_MAP: BMap.MapType
declare const BMAP_HYBRID_MAP: BMap.MapType