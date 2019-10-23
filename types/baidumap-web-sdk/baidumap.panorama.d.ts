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
/// <reference path="./baidumap.control.d.ts" />
declare namespace BMap {
	class Panorama {
		constructor(container: string | HTMLElement, opts?: PanoramaOptions);
		getLinks(): PanoramaLink[];
		getId(): string;
		getPosition(): Point;
		getPov(): PanoramaPov;
		getZoom(): number;
		setId(id: string): void;
		setPosition(position: Point): void;
		setPov(pov: PanoramaPov): void;
		setZoom(zoom: number): void;
		enableScrollWheelZoom(): void;
		disableScrollWheelZoom(): void;
		show(): void;
		hide(): void;
		addOverlay(overlay: PanoramaLabel): void;
		removeOverlay(overlay: PanoramaLabel): void;
		getSceneType(): PanoramaSceneType;
		setOptions(opts?: PanoramaOptions): void;
		setPanoramaPOIType(): PanoramaPOIType;
		onposition_changed: () => void;
		onlinks_changed: () => void;
		onpov_changed: () => void;
		onzoom_changed: () => void;
		onscene_type_changed: () => void;
	}

	interface PanoramaOptions {
		navigationControl?: boolean;
		linksControl?: boolean;
		indoorSceneSwitchControl?: boolean;
		albumsControl?: boolean;
		albumsControlOptions?: AlbumsControlOptions;
	}
	interface PanoramaLink {
		description: string;
		heading: string;
		id: string;
	}
	interface PanoramaPov {
		heading: number;
		pitch: number;
	}
	class PanoramaService {
		constructor();
		getPanoramaById(id: string, callback: (data: PanoramaData) => void): void;
		getPanoramaByLocation(point: Point, radius?: number, callback?: (data: PanoramaData) => void): void;
	}
	interface PanoramaData {
		id: string;
		description: string;
		links: PanoramaLink[];
		position: Point;
		tiles: PanoramaTileData;
	}
	interface PanoramaTileData {
		centerHeading: number;
		tileSize: Size;
		worldSize: Size;
	}
	class PanoramaLabel {
		constructor(content: string, opts?: PanoramaLabelOptions);
		setPosition(position: Point): void;
		getPosition(): Point;
		getPov(): PanoramaPov;
		setContent(content: string): void;
		getContent(): string;
		show(): void;
		hide(): void;
		setAltitude(altitude: number): void;
		getAltitude(): number;
		addEventListener(event: string, handler: Callback): void;
		removeEventListener(event: string, handler: Callback): void;
		onclick: (event: { type: string, target: any }) => void;
		onmouseover: (event: { type: string, target: any }) => void;
		onmouseout: (event: { type: string, target: any }) => void;
		onremove: (event: { type: string, target: any }) => void;
	}
	interface PanoramaLabelOptions {
		position?: Point;
		altitude?: number;
	}
	interface AlbumsControlOptions {
		anchor?: ControlAnchor;
		offset?: Size;
		maxWidth?: number | string;
		imageHeight?: number;
	}
	type PanoramaSceneType = string;
	type PanoramaPOIType = string;
}
declare const BMAP_PANORAMA_INDOOR_SCENE: string;
declare const BMAP_PANORAMA_STREET_SCENE: string;

declare const BMAP_PANORAMA_POI_HOTEL: string;
declare const BMAP_PANORAMA_POI_CATERING: string;
declare const BMAP_PANORAMA_POI_MOVIE: string;
declare const BMAP_PANORAMA_POI_TRANSIT: string;
declare const BMAP_PANORAMA_POI_INDOOR_SCENE: string;
declare const BMAP_PANORAMA_POI_NONE: string;
