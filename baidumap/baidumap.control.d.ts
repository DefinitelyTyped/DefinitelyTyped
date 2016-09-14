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
/// <reference path="./baidumap.maptype.d.ts" />
/// <reference path="./baidumap.overlay.d.ts" />
declare namespace BMap {
    class Control {
        constructor()
        defaultAnchor: ControlAnchor
        defaultOffset: Size
        initialize(map: Map): HTMLElement
        setAnchor(anchor: ControlAnchor): void
        getAnchor(): ControlAnchor
        setOffset(offset: Size): void
        getOffset(): Size
        show(): void
        hide(): void
        isVisible(): boolean
    }
    interface NavigationControlOptions {
        anchor?: ControlAnchor
        offset?: Size
        type?: NavigationControlType
        showZoomInfo?: boolean
        enableGeolocation?: boolean
    }
    interface ScaleControlOptions {
        anchor?: ControlAnchor
        offset?: Size
    }
    interface CopyrightControlOptions {
        anchor?: ControlAnchor
        offset?: Size
    }
    type ControlAnchor = number
    class OverviewMapControl extends Control {
        constructor(opts: OverviewMapControlOptions)
        changeView(): void
        setSize(size: Size): void
        getSize(): Size
        onviewchanged: (event: { type: string, target: any, isOpen: boolean }) => void
        onviewchanging: (event: { type: string, target: any }) => void
    }
    type LengthUnit = string
    class MapTypeControl extends Control {
        constructor(opts?: MapTypeControlOptions)
    }
    class NavigationControl extends Control {
        constructor(opts?: NavigationControlOptions)
        getType(): NavigationControlOptions
        setType(type: NavigationControlType): void
    }
    interface OverviewMapControlOptions {
        anchor?: ControlAnchor
        offset?: Size
        size?: Size
        isOpen?: boolean
    }
    class CopyrightControl extends Control {
        constructor(opts?: CopyrightControlOptions)
        addCopyright(copyright: Copyright): void
        removeCopyright(id): void
        getCopyright(id): Copyright
        getCopyrightCollection(): Copyright[]
    }
    interface MapTypeControlOptions {
        type?: MapTypeControlType,
        mapTypes?: MapType[]
    }
    type NavigationControlType = number
    class ScaleControl extends Control {
        constructor(opts?: ScaleControlOptions)
        getUnit(): LengthUnit
        setUnit(unit: LengthUnit): void
    }
    interface Copyright {
        id?: number
        content?: string
        bounds?: Bounds
    }
    type MapTypeControlType = number
    class GeolocationControl extends Control {
        constructor(opts?: GeolocationControlOptions)
    }
    interface GeolocationControlOptions {
        anchor?: ControlAnchor
        offset?: Size
        showAddressBar?: boolean
        enableAutoLocation?: boolean
        locationIcon?: Icon
    }
    type StatusCode = number
    class PanoramaControl extends Control {
        constructor()
    }
}
declare const BMAP_UNIT_METRIC: BMap.LengthUnit
declare const BMAP_UNIT_IMPERIAL: BMap.LengthUnit

declare const BMAP_ANCHOR_TOP_LEFT: BMap.ControlAnchor
declare const BMAP_ANCHOR_TOP_RIGHT: BMap.ControlAnchor
declare const BMAP_ANCHOR_BOTTOM_LEFT: BMap.ControlAnchor
declare const BMAP_ANCHOR_BOTTOM_RIGHT: BMap.ControlAnchor

declare const BMAP_NAVIGATION_CONTROL_LARGE: BMap.NavigationControlType
declare const BMAP_NAVIGATION_CONTROL_SMALL: BMap.NavigationControlType
declare const BMAP_NAVIGATION_CONTROL_PAN: BMap.NavigationControlType
declare const BMAP_NAVIGATION_CONTROL_ZOOM: BMap.NavigationControlType

declare const BMAP_MAPTYPE_CONTROL_HORIZONTAL: BMap.MapTypeControlType
declare const BMAP_MAPTYPE_CONTROL_DROPDOWN: BMap.MapTypeControlType
declare const BMAP_MAPTYPE_CONTROL_MAP: BMap.MapTypeControlType

declare const BMAP_STATUS_PERMISSION_DENIED: BMap.StatusCode
declare const BMAP_STATUS_SERVICE_UNAVAILABLE: BMap.StatusCode
declare const BMAP_STATUS_TIMEOUT: BMap.StatusCode