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
/// <reference path="./bmapgl.panorama.d.ts" />
declare namespace BMapGL {
    class Map {
        constructor(container: string | HTMLElement, opts?: MapOptions);
        enableDragging(): void;
        disableDragging(): void;
        enableScrollWheelZoom(): void;
        disableScrollWheelZoom(): void;
        enableDoubleClickZoom(): void;
        disableDoubleClickZoom(): void;
        enableKeyboard(): void;
        disableKeyboard(): void;
        enableInertialDragging(): void;
        disableInertialDragging(): void;
        enableContinuousZoom(): void;
        disableContinuousZoom(): void;
        enablePinchToZoom(): void;
        disablePinchToZoom(): void;
        enableAutoResize(): void;
        disableAutoResize(): void;
        setDefaultCursor(cursor: string): void;
        getDefaultCursor(): string;
        setDraggingCursor(cursor: string): void;
        getDraggingCursor(): string;
        setMinZoom(zoom: number): void;
        setMaxZoom(zoom: number): void;
        setHeading(heading: number): void;
        setTilt(tilt: number): void;
        setMapStyle(mapStyle: MapStyle): void;
        setMapStyleV2(style: MapStyleV2): void;
        setPanorama(pano: Panorama): void;
        setTrafficOn(): void;
        setTrafficOff(): void;
        disable3DBuilding(): void;
        getBounds(): Bounds;
        getCenter(): Point;
        getDistance(start: Point, end: Point): number;
        getMapType(): MapType;
        getSize(): Size;
        getViewport(view: Point[] | Bounds, viewportOptions?: ViewportOptions): Viewport;
        getZoom(): number;
        getPanorama(): Panorama;
        centerAndZoom(center: Point, zoom: number): void;
        centerAndZoom(city: string): void;
        panTo(center: Point, opts?: PanOptions): void;
        panBy(x: number, y: number, opts?: PanOptions): void;
        reset(): void;
        setCenter(center: Point | string): void;
        setCurrentCity(city: string): void;
        setMapType(mapType: MapType): void;
        setViewport(view: Point[] | Viewport, viewportOptions?: ViewportOptions): void;
        setZoom(zoom: number): void;
        highResolutionEnabled(): boolean;
        zoomIn(): void;
        zoomOut(): void;
        addHotspot(hotspot: Hotspot): void;
        removeHotspot(hotspot: Hotspot): void;
        clearHotspots(): void;
        addControl(control: Control): void;
        removeControl(control: Control): void;
        getContainer(): HTMLElement;
        addContextMenu(menu: ContextMenu): void;
        removeContextMenu(menu: ContextMenu): void;
        addOverlay(overlay: Overlay): void;
        removeOverlay(overlay: Overlay): void;
        clearOverlays(): void;
        openInfoWindow(infoWnd: InfoWindow, point: Point): void;
        closeInfoWindow(): void;
        pointToOverlayPixel(point: Point): Pixel;
        overlayPixelToPoint(pixel: Pixel): Point;
        getInfoWindow(): InfoWindow;
        getOverlays(): Overlay[];
        getPanes(): MapPanes;
        addTileLayer(tileLayer: TileLayer): void;
        removeTileLayer(tilelayer: TileLayer): void;
        getTileLayer(mapType: string): TileLayer;
        pixelToPoint(pixel: Pixel): Point;
        pointToPixel(point: Point): Pixel;
        onclick: (event: { type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }) => void;
        ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onrightclick: (event: { type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }) => void;
        onrightdblclick: (event: { type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }) => void;
        onmaptypechange: (event: { type: string, target: any }) => void;
        onmousemove: (event: { type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }) => void;
        onmouseover: (event: { type: string, target: any }) => void;
        onmouseout: (event: { type: string, target: any }) => void;
        onmovestart: (event: { type: string, target: any }) => void;
        onmoving: (event: { type: string, target: any }) => void;
        onmoveend: (event: { type: string, target: any }) => void;
        onzoomstart: (event: { type: string, target: any }) => void;
        onzoomend: (event: { type: string, target: any }) => void;
        onaddoverlay: (event: { type: string, target: any }) => void;
        onaddcontrol: (event: { type: string, target: any }) => void;
        onremovecontrol: (event: { type: string, target: any }) => void;
        onremoveoverlay: (event: { type: string, target: any }) => void;
        onclearoverlays: (event: { type: string, target: any }) => void;
        ondragstart: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        ondragging: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        ondragend: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onaddtilelayer: (event: { type: string, target: any }) => void;
        onremovetilelayer: (event: { type: string, target: any }) => void;
        onload: (event: { type: string, target: any, point: Point, pixel: Pixel, zoom: number }) => void;
        onresize: (event: { type: string, target: any, size: Size }) => void;
        onhotspotclick: (event: { type: string, target: any, spots: HotspotOptions }) => void;
        onhotspotover: (event: { type: string, target: any, spots: HotspotOptions }) => void;
        onhotspotout: (event: { type: string, target: any, spots: HotspotOptions }) => void;
        ontilesloaded: (event: { type: string, target: any }) => void;
        ontouchstart: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        ontouchmove: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        ontouchend: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onlongpress: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        addEventListener(event: string, handler: Callback): void;
        removeEventListener(event: string, handler: Callback): void;
    }
    interface PanOptions {
        noAnimation?: boolean;
    }
    interface MapOptions {
        minZoom?: number;
        maxZoom?: number;
        mapType?: MapType;
        enableHighResolution?: boolean;
        enableAutoResize?: boolean;
        enableMapClick?: boolean;
    }
    interface Viewport {
        center: Point;
        zoom: number;
    }
    interface ViewportOptions {
        enableAnimation?: boolean;
        margins?: number[];
        zoomFactor?: number;
        delay?: number;
    }
    type APIVersion = number;
    interface MapStyle {
        features: any[];
        style: string;
    }
    interface MapStyleItem {
        featureType?: string;
        elementType?: string;
        stylers: MapStyleItemStylers;
    }
    interface MapStyleItemStylers {
        [k: string]: string | undefined;
        color?: string;
        visibility?: string;
        level?: string;
        curZoomRegionId?: string;
        curZoomRegion?: string;
        fontsize?: string;
        weight?: string;
    }
    type MapStyleV2 = { styleJson: MapStyleItem[] } | { styleId: string };
}
declare const BMAP_API_VERSION: BMapGL.APIVersion;
