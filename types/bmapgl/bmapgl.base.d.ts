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

declare namespace BMapGL {
    type Callback = (...args: any[]) => void;
    class Point {
        constructor(lng: number, lat: number);
        lng: number;
        lat: number;
        equals(other: Point): boolean;
    }
    class Pixel {
        constructor(x: number, y: number);
        x: number;
        y: number;
        equals(other: Pixel): boolean;
    }
    class Size {
        constructor(width: number, height: number);
        width: number;
        height: number;
        equals(other: Size): boolean;
    }
    class Bounds {
        constructor(minX: number, minY: number, maxX: number, maxY: number);
        constructor(sw: Point, ne: Point);
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
        equals(other: Bounds): boolean;
        containsPoint(point: Point): boolean;
        containsBounds(bounds: Bounds): boolean;
        intersects(other: Bounds): boolean;
        extend(point: Point): void;
        getCenter(): Point;
        isEmpty(): boolean;
        getSouthWest(): Point;
        getNorthEast(): Point;
        toSpan(): Point;
    }
    class Projection {
        static convertMC2LL(point: Point): Point;
        static convertLL2MC(point: Point): Point;
        static proximityConvertMC2LL(point: Point): Point;
    }
}
