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
/// <reference path="./bmapgl.overlay.d.ts" />
declare namespace BMapGL {
    type DrawingType = 'marker' | 'polyline' | 'polygon' | 'rectangle' | 'circle';
    interface DrawingManagerOptions {
        isOpen?: boolean;
        drawingMode?: DrawingType;
        enableDrawingTool?: boolean;
        enableCalculate?: boolean;
        enableSorption?: boolean;
        enableGpc?: boolean;
        enableLimit?: boolean;
        sorptionDistance?: number;
        limitOptions?: DrawingLimitOptions;
        drawingToolOptions?: DrawingToolOptions;
        markerOptions?: MarkerOptions;
        circleOptions?: CircleOptions;
        polylineOptions?: PolylineOptions;
        polygonOptions?: PolygonOptions;
        rectangleOptions?: PolygonOptions;
    }

    interface DrawingToolOptions {
        enableTips?: boolean;
        customContainer?: string | HTMLElement;
        hasCustomStyle?: boolean;
        anchor?: ControlAnchor;
        offset?: Size;
        scale?: number;
        drawingModes?: DrawingType[];
    }

    interface DrawingLimitOptions {
        area?: number;
        distance?: number;
    }

    interface DistanceToolOptions {
        tips?: string;
        followText?: string;
        unit?: 'metric' | 'us';
        lineColor?: string;
        lineStroke?: number;
        opacity?: number;
        lineStyle?: 'solid' | 'dashed' | 'dotted';
        cursor?: string;
        secIcon?: Icon;
        closeIcon?: Icon;
    }
}

declare namespace BMapGLLib {
    type Callback = (...args: any[]) => void;

    class DrawingManager {
        constructor(map: BMapGL.Map, opts?: BMapGL.DrawingManagerOptions);
        open(): void;
        close(): void;
        enableCalculate(): void;
        disableCalculate(): void;
        getDrawingMode(): BMapGL.DrawingType;
        setDrawingMode(drawingType: BMapGL.DrawingType): void;
        addEventListener(event: string, handler: Callback): void;
        removeEventListener(event: string, handler: Callback): void;
    }

    class DistanceTool {
        constructor(map: BMapGL.Map, opts?: BMapGL.DistanceToolOptions);
        open(): void;
        close(): void;
        addEventListener(event: string, handler: Callback): void;
        removeEventListener(event: string, handler: Callback): void;
    }
}

declare const BMAP_DRAWING_MARKER: BMapGL.DrawingType;
declare const BMAP_DRAWING_POLYLINE: BMapGL.DrawingType;
declare const BMAP_DRAWING_RECTANGLE: BMapGL.DrawingType;
declare const BMAP_DRAWING_POLYGON: BMapGL.DrawingType;
declare const BMAP_DRAWING_CIRCLE: BMapGL.DrawingType;
