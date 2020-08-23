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
/// <reference path="./bmapgl.core.d.ts" />
/// <reference path="./bmapgl.rightmenu.d.ts" />
declare namespace BMapGL {
    interface Overlay {
        initialize?(map: Map): HTMLElement;
        isVisible?(): boolean;
        draw?(): void;
        show?(): void;
        hide?(): void;
        addEventListener(event: string, handler: Callback): void;
        removeEventListener(event: string, handler: Callback): void;
    }
    type SymbolShapeType = number;
    interface PolylineOptions {
        strokeColor?: string;
        strokeWeight?: number;
        strokeOpacity?: number;
        strokeStyle?: string;
        enableMassClear?: boolean;
        enableEditing?: boolean;
        enableClicking?: boolean;
    }
    interface GroundOverlayOptions {
        opacity?: number;
        imageURL?: string;
        displayOnMinLevel?: number;
        displayOnMaxLevel?: number;
    }
    interface Marker extends Overlay {
        openInfoWindow(infoWnd: InfoWindow): void;
        closeInfoWindow(): void;
        setIcon(icon: Icon): void;
        getIcon(): Icon;
        setPosition(position: Point): void;
        getPosition(): Point;
        setOffset(offset: Size): void;
        getOffset(): Size;
        setLabel(label: Label): void;
        getLabel(): Label;
        setTitle(title: string): void;
        getTitle(): string;
        setTop(isTop: boolean): void;
        enableDragging(): void;
        disableDragging(): void;
        enableMassClear(): void;
        disableMassClear(): void;
        setZIndex(zIndex: number): void;
        getMap(): Map;
        addContextMenu(menu: ContextMenu): void;
        removeContextMenu(menu: ContextMenu): void;
        setAnimation(animation?: Animation): void;
        setRotation(rotation: number): void;
        getRotation(): number;
        setShadow(shadow: Icon): void;
        getShadow(): void;
        addEventListener(event: string, handler: Callback): void;
        removeEventListener(event: string, handler: Callback): void;
        onclick: (event: { type: string, target: any }) => void;
        ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onremove: (event: { type: string, target: any }) => void;
        oninfowindowclose: (event: { type: string, target: any }) => void;
        oninfowindowopen: (event: { type: string, target: any }) => void;
        ondragstart: (event: { type: string, target: any }) => void;
        ondragging: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        ondragend: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onrightclick: (event: { type: string, target: any }) => void;
    }
    class Marker {
        constructor(point: Point, opts?: MarkerOptions);
    }
    interface SymbolOptions {
        anchor?: Size;
        fillColor?: string;
        fillOpacity?: number;
        scale?: number;
        rotation?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
    }
    class IconSequence {
        constructor(symbol: symbol, offset?: string, repeat?: string, fixedRotation?: boolean);
    }
    interface PointCollection extends Overlay {
        setPoints(points: Point[]): void;
        setStyles(styles: PointCollectionOption): void;
        clear(): void;
        onclick: (event: { type: string, target: any, point: Point }) => void;
        onmouseover: (event: { type: string, target: any, point: Point }) => void;
        onmouseout: (event: { type: string, target: any, point: Point }) => void;
    }
    class PointCollection {
        constructor(points: Point[], opts?: PointCollectionOption);
    }
    interface MarkerOptions {
        offset?: Size;
        icon?: Icon;
        enableMassClear?: boolean;
        enableDragging?: boolean;
        enableClicking?: boolean;
        raiseOnDrag?: boolean;
        draggingCursor?: string;
        rotation?: number;
        shadow?: Icon;
        title?: string;
    }
    interface InfoWindow extends Overlay {
        setWidth(width: number): void;
        setHeight(height: number): void;
        redraw(): void;
        setTitle(title: string | HTMLElement): void;
        getTitle(): string | HTMLElement;
        setContent(content: string | HTMLElement): void;
        getContent(): string | HTMLElement;
        getPosition(): Point;
        enableMaximize(): void;
        disableMaximize(): void;
        isOpen(): boolean;
        setMaxContent(content: string): void;
        maximize(): void;
        restore(): void;
        enableAutoPan(): void;
        disableAutoPan(): void;
        enableCloseOnClick(): void;
        disableCloseOnClick(): void;
        addEventListener(event: string, handler: Callback): void;
        removeEventListener(event: string, handler: Callback): void;
        onclose: (event: { type: string, target: any, point: Point }) => void;
        onopen: (event: { type: string, target: any, point: Point }) => void;
        onmaximize: (event: { type: string, target: any }) => void;
        onrestore: (event: { type: string, target: any }) => void;
        onclickclose: (event: { type: string, target: any }) => void;
    }
    class InfoWindow {
        constructor(content: string | HTMLElement, opts?: InfoWindowOptions);
    }
    interface Polygon extends Overlay {
        setPath(path: Point[]): void;
        getPath(): Point[];
        setStrokeColor(color: string): void;
        getStrokeColor(): string;
        setFillColor(color: string): void;
        getFillColor(): string;
        setStrokeOpacity(opacity: number): void;
        getStrokeOpacity(): number;
        setFillOpacity(opacity: number): void;
        getFillOpacity(): number;
        setStrokeWeight(weight: number): void;
        getStrokeWeight(): number;
        setStrokeStyle(style: string): void;
        getStrokeStyle(): string;
        getBounds(): Bounds;
        enableEditing(): void;
        disableEditing(): void;
        enableMassClear(): void;
        disableMassClear(): void;
        setPointAt(index: number, point: Point): void;
        setPositionAt(index: number, point: Point): void;
        getMap(): Map;
        addEventListener(event: string, handler: Callback): void;
        removeEventListener(event: string, handler: Callback): void;
        onclick: (event: { type: string, target: any }) => void;
        ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onremove: (event: { type: string, target: any }) => void;
        onlineupdate: (event: { type: string, target: any }) => void;
    }
    class Polygon {
        constructor(points: Point[], opts?: PolygonOptions);
    }
    interface PointCollectionOption {
        shape?: ShapeType;
        color?: string;
        size?: SizeType;
    }
    type Animation = number;
    interface InfoWindowOptions {
        width?: number;
        height?: number;
        maxWidth?: number;
        offset?: Size;
        title?: string;
        enableAutoPan?: boolean;
        enableCloseOnClick?: boolean;
        enableMessage?: boolean;
        message?: string;
    }
    interface PolygonOptions {
        strokeColor?: string;
        fillColor?: string;
        strokeWeight?: number;
        strokeOpacity?: number;
        fillOpacity?: number;
        strokeStyle?: string;
        enableMassClear?: boolean;
        enableEditing?: boolean;
        enableClicking?: boolean;
    }
    type ShapeType = number;
    interface Icon extends Overlay {
        anchor: Size;
        size: Size;
        imageOffset: Size;
        imageSize: Size;
        imageUrl: Size;
        infoWindowAnchor: Size;
        printImageUrl: string;
        setImageUrl(imageUrl: string): void;
        setSize(size: Size): void;
        setImageSize(offset: Size): void;
        setAnchor(anchor: Size): void;
        setImageOffset(offset: Size): void;
        setInfoWindowAnchor(anchor: Size): void;
        setPrintImageUrl(url: string): void;
    }
    class Icon {
        constructor(url: string, size: Size, opts?: IconOptions);
    }
    interface Label extends Overlay {
        setStyle(styles: { [name: string]: string | number; }): void;
        setContent(content: string): void;
        setPosition(position: Point): void;
        getPosition(): Point;
        setOffset(offset: Size): void;
        getOffset(): Size;
        setTitle(title: string): void;
        getTitle(): string;
        enableMassClear(): void;
        disableMassClear(): void;
        setZIndex(zIndex: number): void;
        getMap(): Map;
        addEventListener(event: string, handler: Callback): void;
        removeEventListener(event: string, handler: Callback): void;
        onclick: (event: { type: string, target: any }) => void;
        ondblclick: (event: { type: string, target: any }) => void;
        onmousedown: (event: { type: string, target: any }) => void;
        onmouseup: (event: { type: string, target: any }) => void;
        onmouseout: (event: { type: string, target: any }) => void;
        onmouseover: (event: { type: string, target: any }) => void;
        onremove: (event: { type: string, target: any }) => void;
        onrightclick: (event: { type: string, target: any }) => void;
    }
    class Label {
        constructor(content: string, opts?: LabelOptions);
    }
    interface Circle extends Overlay {
        setCenter(center: Point): void;
        getCenter(): Point;
        setRadius(radius: number): void;
        getRadius(): number;
        getBounds(): Bounds;
        setStrokeColor(color: string): void;
        getStrokeColor(): string;
        setFillColor(color: string): void;
        getFillColor(): string;
        setStrokeOpacity(opacity: number): void;
        getStrokeOpacity(): number;
        setFillOpacity(opacity: number): void;
        getFillOpacity(): number;
        setStrokeWeight(weight: number): void;
        getStrokeWeight(): number;
        setStrokeStyle(style: string): void;
        getStrokeStyle(): string;
        enableEditing(): void;
        disableEditing(): void;
        enableMassClear(): void;
        disableMassClear(): void;
        getMap(): Map;
        addEventListener(event: string, handler: Callback): void;
        removeEventListener(event: string, handler: Callback): void;
        onclick: (event: { type: string, target: any }) => void;
        ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onremove: (event: { type: string, target: any }) => void;
        onlineupdate: (event: { type: string, target: any }) => void;
    }
    class Circle {
        constructor(center: Point, radius: number, opts?: CircleOptions);
    }
    type SizeType = number;
    interface IconOptions {
        anchor?: Size;
        imageOffset?: Size;
        imageSize?: Size;
        srcset?: object;
        infoWindowAnchor?: Size;
        printImageUrl?: string;
    }
    interface LabelOptions {
        offset?: Size;
        position?: Point;
        enableMassClear?: boolean;
    }
    interface CircleOptions {
        strokeColor?: string;
        fillColor?: string;
        strokeWeight?: number;
        strokeOpacity?: number;
        fillOpacity?: number;
        strokeStyle?: string;
        enableMassClear?: boolean;
        enableEditing?: boolean;
        enableClicking?: boolean;
    }
    interface Hotspot extends Overlay {
        setPosition(position: Point): void;
        getPosition(): Point;
        setText(text: string): void;
        getText(): string;
        setUserData(data: any): void;
        getUserData(): any;
    }
    class Hotspot {
        constructor(position: Point, opts?: HotspotOptions);
    }
    interface Symbol extends Overlay {
        setPath(path: string | SymbolShapeType): void;
        setAnchor(anchor: Size): void;
        setRotation(rotation: number): void;
        setScale(scale: number): void;
        setStrokeWeight(strokeWeight: number): void;
        setStrokeColor(color: string): void;
        setStrokeOpacity(opacity: number): void;
        setFillOpacity(opacity: number): void;
        setFillColor(color: string): void;
    }
    class Symbol {
        constructor(path: string | SymbolShapeType, opts?: SymbolOptions);
    }
    interface Polyline extends Overlay {
        setPath(path: Point[]): void;
        getPath(): Point[];
        setStrokeColor(color: string): void;
        getStrokeColor(): string;
        setFillColor(color: string): void;
        getFillColor(): string;
        setStrokeOpacity(opacity: number): void;
        getStrokeOpacity(): number;
        setFillOpacity(opacity: number): void;
        getFillOpacity(): number;
        setStrokeWeight(weight: number): void;
        getStrokeWeight(): number;
        setStrokeStyle(style: string): void;
        getStrokeStyle(): string;
        getBounds(): Bounds;
        enableEditing(): void;
        disableEditing(): void;
        enableMassClear(): void;
        disableMassClear(): void;
        setPointAt(index: number, point: Point): void;
        setPositionAt(index: number, point: Point): void;
        getMap(): Map;
        addEventListener(event: string, handler: Callback): void;
        removeEventListener(event: string, handler: Callback): void;
        onclick: (event: { type: string, target: any }) => void;
        ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
        onremove: (event: { type: string, target: any }) => void;
        onlineupdate: (event: { type: string, target: any }) => void;
    }
    class Polyline {
        constructor(points: Point[], opts?: PolylineOptions);
    }
    interface GroundOverlay extends Overlay {
        setBounds(bounds: Bounds): void;
        getBounds(): Bounds;
        setOpacity(opcity: number): void;
        getOpacity(): number;
        setImageURL(url: string): void;
        getImageURL(): string;
        setDisplayOnMinLevel(level: number): void;
        getDisplayOnMinLevel(): number;
        setDispalyOnMaxLevel(level: number): void;
        getDispalyOnMaxLevel(): number;
        onclick: (event: { type: string, target: any }) => void;
        ondblclick: (event: { type: string, target: any }) => void;
    }
    class GroundOverlay {
        constructor(bounds: Bounds, opts?: GroundOverlayOptions);
    }
    interface HotspotOptions {
        text?: string;
        offsets?: number[];
        userData?: any;
        minZoom?: number;
        maxZoom?: number;
    }
    interface MapPanes {
        floatPane?: HTMLElement;
        markerMouseTarget?: HTMLElement;
        floatShadow?: HTMLElement;
        labelPane?: HTMLElement;
        markerPane?: HTMLElement;
        markerShadow?: HTMLElement;
        mapPane?: HTMLElement;
    }
}

declare const BMap_Symbol_SHAPE_CIRCLE: BMapGL.SymbolShapeType;
declare const BMap_Symbol_SHAPE_RECTANGLE: BMapGL.SymbolShapeType;
declare const BMap_Symbol_SHAPE_RHOMBUS: BMapGL.SymbolShapeType;
declare const BMap_Symbol_SHAPE_STAR: BMapGL.SymbolShapeType;
declare const BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: BMapGL.SymbolShapeType;
declare const BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: BMapGL.SymbolShapeType;
declare const BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: BMapGL.SymbolShapeType;
declare const BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: BMapGL.SymbolShapeType;
declare const BMap_Symbol_SHAPE_POINT: BMapGL.SymbolShapeType;
declare const BMap_Symbol_SHAPE_PLANE: BMapGL.SymbolShapeType;
declare const BMap_Symbol_SHAPE_CAMERA: BMapGL.SymbolShapeType;
declare const BMap_Symbol_SHAPE_WARNING: BMapGL.SymbolShapeType;
declare const BMap_Symbol_SHAPE_SMILE: BMapGL.SymbolShapeType;
declare const BMap_Symbol_SHAPE_CLOCK: BMapGL.SymbolShapeType;

declare const BMAP_ANIMATION_DROP: BMapGL.Animation;
declare const BMAP_ANIMATION_BOUNCE: BMapGL.Animation;

declare const BMAP_POINT_SHAPE_CIRCLE: BMapGL.ShapeType;
declare const APE_STAR: BMapGL.ShapeType;
declare const APE_SQUARE: BMapGL.ShapeType;
declare const APE_RHOMBUS: BMapGL.ShapeType;
declare const APE_WATERDROP: BMapGL.ShapeType;

declare const BMAP_POINT_SIZE_TINY: BMapGL.SizeType;
declare const BMAP_POINT_SIZE_SMALLER: BMapGL.SizeType;
declare const BMAP_POINT_SIZE_SMALL: BMapGL.SizeType;
declare const BMAP_POINT_SIZE_NORMAL: BMapGL.SizeType;
declare const BMAP_POINT_SIZE_BIG: BMapGL.SizeType;
declare const BMAP_POINT_SIZE_BIGGER: BMapGL.SizeType;
declare const BMAP_POINT_SIZE_HUGE: BMapGL.SizeType;
