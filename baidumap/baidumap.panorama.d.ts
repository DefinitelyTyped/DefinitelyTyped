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
/// <reference path="./baidumap.control.d.ts" /> 
declare namespace BMap {
    class Panorama {
        constructor(container: string | HTMLElement, opts?: PanoramaOptions)
        getLinks(): PanoramaLink[]
        getId(): string
        getPosition(): Point
        getPov(): PanoramaPov
        getZoom(): number
        setId(id: string): void
        setPosition(position: Point): void
        setPov(pov: PanoramaPov): void
        setZoom(zoom: number): void
        enableScrollWheelZoom(): void
        disableScrollWheelZoom(): void
        show(): void
        hide(): void
        addOverlay(overlay: PanoramaLabel): void
        removeOverlay(overlay: PanoramaLabel): void
        getSceneType(): PanoramaSceneType
        setOptions(opts?: PanoramaOptions): void
        setPanoramaPOIType(): PanoramaPOIType
        onposition_changed: () => void
        onlinks_changed: () => void
        onpov_changed: () => void
        onzoom_changed: () => void
        onscene_type_changed: () => void
    }

    interface PanoramaOptions {
        navigationControl?: boolean
        linksControl?: boolean
        indoorSceneSwitchControl?: boolean
        albumsControl?: boolean
        albumsControlOptions?: AlbumsControlOptions
    }
    interface PanoramaLink {
        description: string
        heading: string
        id: string
    }
    interface PanoramaPov {
        heading: number
        pitch: number
    }
    class PanoramaService {
        constructor()
        getPanoramaById(id: string, callback: (data: PanoramaData) => void): void
        getPanoramaByLocation(point: Point, radius?: number, callback?: (data: PanoramaData) => void): void
    }
    interface PanoramaData {
        id: string
        description: string
        links: PanoramaLink[]
        position: Point
        tiles: PanoramaTileData
    }
    interface PanoramaTileData {
        centerHeading: number
        tileSize: Size
        worldSize: Size
    }
    class PanoramaLabel {
        constructor(content: string, opts?: PanoramaLabelOptions)
        setPosition(position: Point): void
        getPosition(): Point
        getPov(): PanoramaPov
        setContent(content: string): void
        getContent(): string
        show(): void
        hide(): void
        setAltitude(altitude: number): void
        getAltitude(): number
        addEventListener(event: string, handler: Function): void
        removeEventListener(event: string, handler: Function): void
        onclick: (event: { type: string, target: any }) => void
        onmouseover: (event: { type: string, target: any }) => void
        onmouseout: (event: { type: string, target: any }) => void
        onremove: (event: { type: string, target: any }) => void
    }
    interface PanoramaLabelOptions {
        position: Point
        altitude: number
    }
    interface AlbumsControlOptions {
        anchor?: ControlAnchor
        offset?: Size
        maxWidth?: number | string
        imageHeight?: number
    }
    type PanoramaSceneType = string
    type PanoramaPOIType = string
}
declare const BMAP_PANORAMA_INDOOR_SCENE: string
declare const BMAP_PANORAMA_STREET_SCENE: string

declare const BMAP_PANORAMA_POI_HOTEL: string
declare const BMAP_PANORAMA_POI_CATERING: string
declare const BMAP_PANORAMA_POI_MOVIE: string
declare const BMAP_PANORAMA_POI_TRANSIT: string
declare const BMAP_PANORAMA_POI_INDOOR_SCENE: string
declare const BMAP_PANORAMA_POI_NONE: string
