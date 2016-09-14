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

declare namespace BMap {
    type ContextMenuIcon = string
    interface MenuItemOptions {
        width?: number
        id?: string
        iconUrl?: string
    }
    class MenuItem {
        constructor(text: string, callback: (point: Point) => void, opts?: MenuItemOptions)
        setText(text: string): void
        setIcon(iconUrl: string): void
        enable(): void
        disable(): void
    }
    class ContextMenu {
        constructor()
        addItem(item: MenuItem): void
        getItem(index: number): MenuItem
        removeItem(item: MenuItem): void
        addSeparator(): void
        removeSeparator(index: number): void
        onopen: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onclose: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
    }
}
declare const BMAP_CONTEXT_MENU_ICON_ZOOMIN: string
declare const BMAP_CONTEXT_MENU_ICON_ZOOMOUT: string