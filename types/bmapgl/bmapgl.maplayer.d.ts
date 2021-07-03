// Type definitions for BaiduMap JsAPI GL v1.0
// Project: http://lbsyun.baidu.com/index.php?title=jspopularGL
// Definitions by: Junior2ran <http://github.com/Junior2ran>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
Copyright [Junior2ran] [hdr01@126.com]

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

/// <reference path="./bmapgl.base.d.ts" />
/// <reference path="./bmapgl.control.d.ts" />
declare namespace BMapGL {
    class TileLayer {
        constructor(opts?: TileLayerOptions);
        zIndex?: number;
        getTilesUrl(tileCoord: Pixel, zoom: number): string;
        getCopyright(): Copyright;
        isTransparentPng(): boolean;
    }
    interface TileLayerOptions {
        transparentPng?: boolean;
        tileUrlTemplate?: string;
        copyright?: Copyright;
        zIndex?: number;
    }
    class TrafficLayer extends TileLayer {
        constructor(opts?: TrafficLayerOptions);
    }
    interface TrafficLayerOptions {
        predictDate?: PredictDate;
    }
    interface PredictDate {
        weekday: number;
        hour: number;
    }
    class CustomLayer extends TileLayer {
        constructor(opts: CustomLayerOptions);
        onhotspotclick: (event: { type: string, target: any, content: any }) => void;
    }
    interface Custompoi {
        poiId: string;
        databoxId: string;
        title: string;
        address: string;
        phoneNumber: string;
        postcode: string;
        provinceCode: number;
        province: string;
        cityCode: number;
        city: string;
        districtCode: number;
        district: string;
        point: Point;
        tags: string[];
        typeId: number;
        extendedData: any;
    }
    class PanoramaCoverageLayer extends TileLayer {
        constructor();
    }
    interface CustomLayerOptions {
        databoxId?: string;
        geotableId?: string;
        q?: string;
        tags?: string;
        filter?: string;
        pointDensityType?: PointDensityType;
    }
    type PointDensityType = number;
}

declare const BMAP_POINT_DENSITY_HIGH: BMapGL.PointDensityType;
declare const BMAP_POINT_DENSITY_MEDIUM: BMapGL.PointDensityType;
declare const BMAP_POINT_DENSITY_LOW: BMapGL.PointDensityType;
