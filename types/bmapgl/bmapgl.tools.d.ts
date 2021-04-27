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
/// <reference path="./bmapgl.core.d.ts" />
/// <reference path="./bmapgl.overlay.d.ts" />
declare namespace BMapGL {
    class PushpinTool {
        constructor(map: Map, opts?: PushpinToolOptions)
        open(): boolean;
        close(): boolean;
        setIcon(icon: Icon): Icon;
        getIcon(): Icon;
        setCursor(cursor: string): string;
        getCursor(): string;
        toString(): string;
        onmarkend: (event: { type: string, target: any, marker: Marker }) => void;
    }
    interface PushpinToolOptions {
        icon?: Icon;
        cursor?: string;
        followText?: string;
    }
    class DistanceTool {
        constructor(map: Map);
        open(): boolean;
        close(): void;
        toString(): string;
        ondrawend: (event: { type: string, target: any, points: Point[], polylines: Polyline[], distance: number }) => void;
    }
    class DragAndZoomTool {
        constructor(map: Map, opts?: DragAndZoomToolOptions);
        open(): boolean;
        close(): void;
        toString(): string;
        ondrawend: (event: { type: string, target: any, bounds: Bounds[] }) => void;
    }
    interface DragAndZoomToolOptions {
        zoomType?: ZoomType;
        autoClose?: boolean;
        followText?: string;
    }
    type ZoomType = number;
}
declare const BMAP_ZOOM_IN: BMapGL.ZoomType;
declare const BMAP_ZOOM_OUT: BMapGL.ZoomType;
