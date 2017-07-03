// Type definitions for BaiduMap v2.0
// Project: http://lbsyun.baidu.com/index.php?title=jspopular
// Definitions by: Codemonk <http://www.youxianxueche.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
Copyright [Codemonk] [Codemonk@live.cn]

This project is licensed under the MIT license.
Copyrights are respective of each contributor listed at the beginning of each definition file.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
***************************************************************************** */

/// <reference path="./baidumap.base.d.ts" />
/// <reference path="./baidumap.core.d.ts" />
/// <reference path="./baidumap.overlay.d.ts" />
declare namespace BMap {
    class PushpinTool {
        constructor(map: Map, opts?: PushpinToolOptions)
        open(): boolean
        close(): boolean
        setIcon(icon: Icon): Icon
        getIcon(): Icon
        setCursor(cursor: string): string
        getCursor(): string
        toString(): string
        onmarkend: (event: { type: string, target: any, marker: Marker }) => void
    }
    interface PushpinToolOptions {
        icon?: Icon
        cursor?: string
        followText?: string
    }
    class DistanceTool {
        constructor(map: Map)
        open(): boolean
        close(): void
        toString(): string
        ondrawend: (event: { type: string, target: any, points: Point[], polylines: Polyline[], distance: number }) => void
    }
    class DragAndZoomTool {
        constructor(map: Map, opts?: DragAndZoomToolOptions)
        open(): boolean
        close(): void
        toString(): string
        ondrawend: (event: { type: string, target: any, bounds: Bounds[] }) => void
    }
    interface DragAndZoomToolOptions {
        zoomType?: ZoomType,
        autoClose?: boolean,
        followText?: string
    }
    type ZoomType = number
}
declare const BMAP_ZOOM_IN: BMap.ZoomType
declare const BMAP_ZOOM_OUT: BMap.ZoomType