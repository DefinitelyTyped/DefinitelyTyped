// Type definitions for BaiduMap v2.0
// Document: http://lbsyun.baidu.com/index.php?title=jspopular
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

declare namespace BMap {
    class Point {
        constructor (lng: number, lat: number) 
        lng: number
        lat: number
        equals(other: Point): boolean
    }
    class Pixel {
        constructor (x: number, y: number) 
        x: number
        y: number
        equals(other: Pixel): boolean
    }
    class Size {
        constructor (width: number, height: number) 
        width: number
        height: number
        equals(other: Size): boolean
    }
    class Bounds {
        constructor (minX: number, minY: number, maxX: number, maxY: number) 
        constructor (sw: Point, ne: Point) 
        minX: number
        minY: number
        maxX: number
        maxY: number
        equals(other: Bounds): boolean
        containsPoint(point: Point): boolean
        containsBounds(bounds: Bounds): boolean
        intersects(other: Bounds): boolean
        extend(point: Point): void
        getCenter(): Point
        isEmpty(): boolean
        getSouthWest(): Point
        getNorthEast(): Point
        toSpan(): Point
    }
}