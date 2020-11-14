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
/// <reference path="./baidumap.maptype.d.ts" />
/// <reference path="./baidumap.overlay.d.ts" />
declare namespace BMap {
    class Control {
        constructor();
        defaultAnchor: ControlAnchor;
        defaultOffset: Size;
        initialize(map: Map): HTMLElement;
        setAnchor(anchor: ControlAnchor): void;
        getAnchor(): ControlAnchor;
        setOffset(offset: Size): void;
        getOffset(): Size;
        show(): void;
        hide(): void;
        isVisible(): boolean;
        /** 自定义Control在add之后立马能读取到Container, 内置Control不能 */
        getContainer(): HTMLElement | undefined;
    }
    interface NavigationControlOptions {
        anchor?: ControlAnchor;
        offset?: Size;
        type?: NavigationControlType;
        showZoomInfo?: boolean;
        enableGeolocation?: boolean;
    }
    interface ScaleControlOptions {
        anchor?: ControlAnchor;
        offset?: Size;
    }
    interface CopyrightControlOptions {
        anchor?: ControlAnchor;
        offset?: Size;
    }
    type ControlAnchor = number;
    class OverviewMapControl extends Control {
        constructor(opts: OverviewMapControlOptions);
        changeView(): void;
        setSize(size: Size): void;
        getSize(): Size;
        onviewchanged: (event: { type: string, target: any, isOpen: boolean }) => void;
        onviewchanging: (event: { type: string, target: any }) => void;
    }
    type LengthUnit = string;
    class MapTypeControl extends Control {
        constructor(opts?: MapTypeControlOptions);
    }
    class NavigationControl extends Control {
        constructor(opts?: NavigationControlOptions);
        getType(): NavigationControlOptions;
        setType(type: NavigationControlType): void;
    }
    interface OverviewMapControlOptions {
        anchor?: ControlAnchor;
        offset?: Size;
        size?: Size;
        isOpen?: boolean;
    }
    class CopyrightControl extends Control {
        constructor(opts?: CopyrightControlOptions);
        addCopyright(copyright: Copyright): void;
        removeCopyright(id: number): void;
        getCopyright(id: number): Copyright;
        getCopyrightCollection(): Copyright[];
    }
    interface MapTypeControlOptions {
        type?: MapTypeControlType;
        mapTypes?: MapType[];
    }
    type NavigationControlType = number;
    class ScaleControl extends Control {
        constructor(opts?: ScaleControlOptions);
        getUnit(): LengthUnit;
        setUnit(unit: LengthUnit): void;
    }
    interface Copyright {
        id?: number;
        content?: string;
        bounds?: Bounds;
    }
    type MapTypeControlType = number;
    class GeolocationControl extends Control {
        constructor(opts?: GeolocationControlOptions);
    }
    interface GeolocationControlOptions {
        anchor?: ControlAnchor;
        offset?: Size;
        showAddressBar?: boolean;
        enableAutoLocation?: boolean;
        locationIcon?: Icon;
    }
    type StatusCode = number;
    class PanoramaControl extends Control {
        constructor();
    }
}
declare const BMAP_UNIT_METRIC: BMap.LengthUnit;
declare const BMAP_UNIT_IMPERIAL: BMap.LengthUnit;

declare const BMAP_ANCHOR_TOP_LEFT: BMap.ControlAnchor;
declare const BMAP_ANCHOR_TOP_RIGHT: BMap.ControlAnchor;
declare const BMAP_ANCHOR_BOTTOM_LEFT: BMap.ControlAnchor;
declare const BMAP_ANCHOR_BOTTOM_RIGHT: BMap.ControlAnchor;

declare const BMAP_NAVIGATION_CONTROL_LARGE: BMap.NavigationControlType;
declare const BMAP_NAVIGATION_CONTROL_SMALL: BMap.NavigationControlType;
declare const BMAP_NAVIGATION_CONTROL_PAN: BMap.NavigationControlType;
declare const BMAP_NAVIGATION_CONTROL_ZOOM: BMap.NavigationControlType;

declare const BMAP_MAPTYPE_CONTROL_HORIZONTAL: BMap.MapTypeControlType;
declare const BMAP_MAPTYPE_CONTROL_DROPDOWN: BMap.MapTypeControlType;
declare const BMAP_MAPTYPE_CONTROL_MAP: BMap.MapTypeControlType;

declare const BMAP_STATUS_PERMISSION_DENIED: BMap.StatusCode;
declare const BMAP_STATUS_SERVICE_UNAVAILABLE: BMap.StatusCode;
declare const BMAP_STATUS_TIMEOUT: BMap.StatusCode;
