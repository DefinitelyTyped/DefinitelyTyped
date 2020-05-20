// Type definitions for BaiduMap v3.0
// Project: http://lbsyun.baidu.com/index.php?title=jspopular3.0
// Definitions by: Codemonk <http://www.youxianxueche.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
Copyright [Codemonk] [Codemonk@live.cn]

This project is licensed under the MIT license.
Copyrights are respective of each contributor listed at the beginning of each definition file.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************** */

/// <reference path="./baidumap.base.d.ts" />
/// <reference path="./baidumap.maplayer.d.ts" />
declare namespace BMap {
    class MapType {
        constructor(name: string, layers: TileLayer | TileLayer[], opts?: MapTypeOptions);
        getName(): string;
        getTileLayer(): TileLayer;
        getMinZoom(): number;
        getMaxZoom(): number;
        getProjection(): Projection;
        getTextColor(): string;
        getTips(): string;
    }
    interface MapTypeOptions {
        minZoom?: number;
        maxZoom?: number;
        errorImageUrl?: string;
        textColor?: number;
        tips?: string;
    }
    interface Projection {
        lngLatToPoint(lngLat: Point): Pixel;
        pointToLngLat(point: Pixel): Point;
    }
    type MercatorProjection = Projection;
    type PerspectiveProjection = Projection;
}
declare const BMAP_NORMAL_MAP: BMap.MapType;
declare const BMAP_PERSPECTIVE_MAP: BMap.MapType;
declare const BMAP_SATELLITE_MAP: BMap.MapType;
declare const BMAP_HYBRID_MAP: BMap.MapType;
