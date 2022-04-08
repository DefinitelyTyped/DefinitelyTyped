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
/// <reference path="./bmapgl.maptype.d.ts" />
/// <reference path="./bmapgl.overlay.d.ts" />
declare namespace BMapGL {
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
    interface ZoomControlOptions {
        anchor?: ControlAnchor;
        offset?: Size;
    }
    interface NavigationControl3DOptions {
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
    class ZoomControl extends Control {
        constructor(opts?: ZoomControlOptions);
    }
    class NavigationControl3D extends Control {
        constructor(opts?: NavigationControl3DOptions);
    }
}
declare const BMAP_UNIT_METRIC: BMapGL.LengthUnit;
declare const BMAP_UNIT_IMPERIAL: BMapGL.LengthUnit;

declare const BMAP_ANCHOR_TOP_LEFT: BMapGL.ControlAnchor;
declare const BMAP_ANCHOR_TOP_RIGHT: BMapGL.ControlAnchor;
declare const BMAP_ANCHOR_BOTTOM_LEFT: BMapGL.ControlAnchor;
declare const BMAP_ANCHOR_BOTTOM_RIGHT: BMapGL.ControlAnchor;

declare const BMAP_NAVIGATION_CONTROL_LARGE: BMapGL.NavigationControlType;
declare const BMAP_NAVIGATION_CONTROL_SMALL: BMapGL.NavigationControlType;
declare const BMAP_NAVIGATION_CONTROL_PAN: BMapGL.NavigationControlType;
declare const BMAP_NAVIGATION_CONTROL_ZOOM: BMapGL.NavigationControlType;

declare const BMAP_MAPTYPE_CONTROL_HORIZONTAL: BMapGL.MapTypeControlType;
declare const BMAP_MAPTYPE_CONTROL_DROPDOWN: BMapGL.MapTypeControlType;
declare const BMAP_MAPTYPE_CONTROL_MAP: BMapGL.MapTypeControlType;

declare const BMAP_STATUS_PERMISSION_DENIED: BMapGL.StatusCode;
declare const BMAP_STATUS_SERVICE_UNAVAILABLE: BMapGL.StatusCode;
declare const BMAP_STATUS_TIMEOUT: BMapGL.StatusCode;
