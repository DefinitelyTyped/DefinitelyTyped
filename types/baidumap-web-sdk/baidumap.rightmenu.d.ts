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