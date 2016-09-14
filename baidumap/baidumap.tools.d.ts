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