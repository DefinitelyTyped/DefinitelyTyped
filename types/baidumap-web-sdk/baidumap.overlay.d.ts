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
/// <reference path="./baidumap.core.d.ts" />
/// <reference path="./baidumap.rightmenu.d.ts" />
declare namespace BMap {
    interface Overlay {
        initialize?(map: Map): HTMLElement
        isVisible?(): boolean
        draw?(): void
        show?(): void
        hide?(): void
    }
    type SymbolShapeType = number
    interface PolylineOptions {
        strokeColor?: string
        strokeWeight?: number
        strokeOpacity?: number
        strokeStyle?: string
        enableMassClear?: boolean
        enableEditing?: boolean
        enableClicking?: boolean
    }
    interface GroundOverlayOptions {
        opacity?: number
        imageURL?: string
        displayOnMinLevel?: number
        displayOnMaxLevel?: number
    }
    class Marker implements Overlay {
        constructor(point: Point, opts?: MarkerOptions)
        openInfoWindow(infoWnd: InfoWindow): void
        closeInfoWindow(): void
        setIcon(icon: Icon): void
        getIcon(): Icon
        setPosition(position: Point): void
        getPosition(): Point
        setOffset(offset: Size): void
        getOffset(): Size
        setLabel(label: Label): void
        getLabel(): Label
        setTitle(title: string): void
        getTitle(): string
        setTop(isTop: boolean): void
        enableDragging(): void
        disableDragging(): void
        enableMassClear(): void
        disableMassClear(): void
        setZIndex(zIndex: number): void
        getMap(): Map
        addContextMenu(menu: ContextMenu): void
        removeContextMenu(menu: ContextMenu): void
        setAnimation(animation?: Animation): void
        setRotation(rotation: number): void
        getRotation(): number
        setShadow(shadow: Icon): void
        getShadow(): void
        addEventListener(event: string, handler: Function): void
        removeEventListener(event: string, handler: Function): void
        onclick: (event: { type: string, target: any }) => void
        ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onremove: (event: { type: string, target: any }) => void
        oninfowindowclose: (event: { type: string, target: any }) => void
        oninfowindowopen: (event: { type: string, target: any }) => void
        ondragstart: (event: { type: string, target: any }) => void
        ondragging: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        ondragend: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onrightclick: (event: { type: string, target: any }) => void
    }
    interface SymbolOptions {
        anchor?: Size
        fillColor?: string
        fillOpacity?: number
        scale?: number
        rotation?: number
        strokeColor?: string
        strokeOpacity?: number
        strokeWeight?: number
    }
    class IconSequence {
        constructor(symbol: Symbol, offset?: string, repeat?: string, fixedRotation?: boolean)
    }
    class PointCollection implements Overlay {
        constructor(points: Point[], opts?: PointCollectionOption)
        setPoints(points: Point[]): void
        setStyles(styles: PointCollectionOption): void
        clear(): void
        onclick: (event: { type: string, target: any, point: Point }) => void
        onmouseover: (event: { type: string, target: any, point: Point }) => void
        onmouseout: (event: { type: string, target: any, point: Point }) => void
    }
    interface MarkerOptions {
        offset?: Size
        icon?: Icon
        enableMassClear?: boolean
        enableDragging?: boolean
        enableClicking?: boolean
        raiseOnDrag?: boolean
        draggingCursor?: string
        rotation?: number
        shadow?: Icon
        title?: string
    }
    class InfoWindow implements Overlay {
        constructor(content: string | HTMLElement, opts?: InfoWindowOptions)
        setWidth(width: number): void
        setHeight(height: number): void
        redraw(): void
        setTitle(title: string | HTMLElement): void
        getTitle(): string | HTMLElement
        setContent(content: string | HTMLElement): void
        getContent(): string | HTMLElement
        getPosition(): Point
        enableMaximize(): void
        disableMaximize(): void
        isOpen(): boolean
        setMaxContent(content: string): void
        maximize(): void
        restore(): void
        enableAutoPan(): void
        disableAutoPan(): void
        enableCloseOnClick(): void
        disableCloseOnClick(): void
        addEventListener(event: string, handler: Function): void
        removeEventListener(event: string, handler: Function): void
        onclose: (event: { type: string, target: any, point: Point }) => void
        onopen: (event: { type: string, target: any, point: Point }) => void
        onmaximize: (event: { type: string, target: any }) => void
        onrestore: (event: { type: string, target: any }) => void
        onclickclose: (event: { type: string, target: any }) => void
    }
    class Polygon implements Overlay {
        constructor(points: Array<Point>, opts?: PolygonOptions)
        setPath(path: Point[]): void
        getPath(): Point[]
        setStrokeColor(color: string): void
        getStrokeColor(): string
        setFillColor(color: string): void
        getFillColor(): string
        setStrokeOpacity(opacity: number): void
        getStrokeOpacity(): number
        setFillOpacity(opacity: number): void
        getFillOpacity(): number
        setStrokeWeight(weight: number): void
        getStrokeWeight(): number
        setStrokeStyle(style: string): void
        getStrokeStyle(): string
        getBounds(): Bounds
        enableEditing(): void
        disableEditing(): void
        enableMassClear(): void
        disableMassClear(): void
        setPointAt(index: number, point: Point): void
        setPositionAt(index: number, point: Point): void
        getMap(): Map
        addEventListener(event: string, handler: Function): void
        removeEventListener(event: string, handler: Function): void
        onclick: (event: { type: string, target: any }) => void
        ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onremove: (event: { type: string, target: any }) => void
        onlineupdate: (event: { type: string, target: any }) => void
    }
    interface PointCollectionOption {
        shape?: ShapeType
        color?: string
        size?: SizeType
    }
    type Animation = number
    interface InfoWindowOptions {
        width?: number
        height?: number
        maxWidth?: number
        offset?: Size
        title?: string
        enableAutoPan?: boolean
        enableCloseOnClick?: boolean
        enableMessage?: boolean
        message?: string
    }
    interface PolygonOptions {
        strokeColor?: string
        fillColor?: string
        strokeWeight?: number
        strokeOpacity?: number
        fillOpacity?: number
        strokeStyle?: number
        enableMassClear?: boolean
        enableEditing?: boolean
        enableClicking?: boolean
    }
    type ShapeType = number
    class Icon implements Overlay {
        constructor(url: string, size: Size, opts?: IconOptions)
        anchor: Size
        size: Size
        imageOffset: Size
        imageSize: Size
        imageUrl: Size
        infoWindowAnchor: Size
        printImageUrl: string
        setImageUrl(imageUrl: string): void
        setSize(size: Size): void
        setImageSize(offset: Size): void
        setAnchor(anchor: Size): void
        setImageOffset(offset: Size): void
        setInfoWindowAnchor(anchor: Size): void
        setPrintImageUrl(url: string): void
    }
    class Label implements Overlay {
        constructor(content: string, opts?: LabelOptions)
        setStyle(styles: Object): void
        setContent(content: string): void
        setPosition(position: Point): void
        getPosition(): Point
        setOffset(offset: Size): void
        getOffset(): Size
        setTitle(title: string): void
        getTitle(): string
        enableMassClear(): void
        disableMassClear(): void
        setZIndex(zIndex: number): void
        setPosition(position: Point): void
        getMap(): Map
        addEventListener(event: string, handler: Function): void
        removeEventListener(event: string, handler: Function): void
        onclick: (event: { type: string, target: any }) => void
        ondblclick: (event: { type: string, target: any }) => void
        onmousedown: (event: { type: string, target: any }) => void
        onmouseup: (event: { type: string, target: any }) => void
        onmouseout: (event: { type: string, target: any }) => void
        onmouseover: (event: { type: string, target: any }) => void
        onremove: (event: { type: string, target: any }) => void
        onrightclick: (event: { type: string, target: any }) => void
    }
    class Circle implements Overlay {
        constructor(center: Point, radius: number, opts?: CircleOptions)
        setCenter(center: Point): void
        getCenter(): Point
        setRadius(radius: number): void
        getRadius(): number
        getBounds(): Bounds
        setStrokeColor(color: string): void
        getStrokeColor(): string
        setFillColor(color: string): void
        getFillColor(): string
        setStrokeOpacity(opacity: number): void
        getStrokeOpacity(): number
        setFillOpacity(opacity: number): void
        getFillOpacity(): number
        setStrokeWeight(weight: number): void
        getStrokeWeight(): number
        setStrokeStyle(style: string): void
        getStrokeStyle(): string
        getBounds(): Bounds
        enableEditing(): void
        disableEditing(): void
        enableMassClear(): void
        disableMassClear(): void
        getMap(): Map
        addEventListener(event: string, handler: Function): void
        removeEventListener(event: string, handler: Function): void
        onclick: (event: { type: string, target: any }) => void
        ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onremove: (event: { type: string, target: any }) => void
        onlineupdate: (event: { type: string, target: any }) => void
    }
    type SizeType = number
    interface IconOptions {
        anchor?: Size
        imageOffset?: Size
        infoWindowAnchor?: Size
        printImageUrl?: string
    }
    interface LabelOptions {
        offset?: Size
        position?: Point
        enableMassClear?: boolean
    }
    interface CircleOptions {
        strokeColor?: string
        fillColor?: string
        strokeWeight?: number
        strokeOpacity?: number
        fillOpacity?: number
        strokeStyle?: string
        enableMassClear?: boolean
        enableEditing?: boolean
        enableClicking?: boolean
    }
    class Hotspot implements Overlay {
        constructor(position: Point, opts?: HotspotOptions)
        setPosition(position: Point): void
        getPosition(): Point
        setText(text: string): void
        getText(): string
        setUserData(data: any): void
        getUserData(): any
    }
    class Symbol implements Overlay {
        constructor(path: string | SymbolShapeType, opts?: SymbolOptions)
        setPath(path: string | SymbolShapeType): void
        setAnchor(anchor: Size): void
        setRotation(rotation: number): void
        setScale(scale: number): void
        setStrokeWeight(strokeWeight: number): void
        setStrokeColor(color: string): void
        setStrokeOpacity(opacity: number): void
        setFillOpacity(opacity: number): void
        setFillColor(color: string): void
    }
    class Polyline implements Overlay {
        constructor(points: Point[], opts?: PolylineOptions)
        setPath(path: Point[]): void
        getPath(): Point[]
        setStrokeColor(color: string): void
        getStrokeColor(): string
        setFillColor(color: string): void
        getFillColor(): string
        setStrokeOpacity(opacity: number): void
        getStrokeOpacity(): number
        setFillOpacity(opacity: number): void
        getFillOpacity(): number
        setStrokeWeight(weight: number): void
        getStrokeWeight(): number
        setStrokeStyle(style: string): void
        getStrokeStyle(): string
        getBounds(): Bounds
        enableEditing(): void
        disableEditing(): void
        enableMassClear(): void
        disableMassClear(): void
        setPointAt(index: number, point: Point): void
        setPositionAt(index: number, point: Point): void
        getMap(): Map
        addEventListener(event: string, handler: Function): void
        removeEventListener(event: string, handler: Function): void
        onclick: (event: { type: string, target: any }) => void
        ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void
        onremove: (event: { type: string, target: any }) => void
        onlineupdate: (event: { type: string, target: any }) => void
    }
    class GroundOverlay implements Overlay {
        constructor(bounds: Bounds, opts?: GroundOverlayOptions)
        setBounds(bounds: Bounds): void
        getBounds(): Bounds
        setOpacity(opcity: number): void
        getOpacity(): number
        setImageURL(url: string): void
        getImageURL(): string
        setDisplayOnMinLevel(level: number): void
        getDisplayOnMinLevel(): number
        setDispalyOnMaxLevel(level: number): void
        getDispalyOnMaxLevel(): number
        onclick: (event: { type: string, target: any }) => void
        ondblclick: (event: { type: string, target: any }) => void
    }
    interface HotspotOptions {
        text?: string
        offsets?: number[]
        userData?: any
        minZoom?: number
        maxZoom?: number
    }
    interface MapPanes {
        floatPane?: HTMLElement
        markerMouseTarget?: HTMLElement
        floatShadow?: HTMLElement
        labelPane?: HTMLElement
        markerPane?: HTMLElement
        markerShadow?: HTMLElement
        mapPane?: HTMLElement
    }
}

declare const BMap_Symbol_SHAPE_CIRCLE: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_RECTANGLE: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_RHOMBUS: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_STAR: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_POINT: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_PLANE: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_CAMERA: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_WARNING: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_SMILE: BMap.SymbolShapeType
declare const BMap_Symbol_SHAPE_CLOCK: BMap.SymbolShapeType


declare const BMAP_ANIMATION_DROP: BMap.Animation
declare const BMAP_ANIMATION_BOUNCE: BMap.Animation

declare const BMAP_POINT_SHAPE_CIRCLE: BMap.ShapeType
declare const APE_STAR: BMap.ShapeType
declare const APE_SQUARE: BMap.ShapeType
declare const APE_RHOMBUS: BMap.ShapeType
declare const APE_WATERDROP: BMap.ShapeType

declare const BMAP_POINT_SIZE_TINY: BMap.SizeType
declare const BMAP_POINT_SIZE_SMALLER: BMap.SizeType
declare const BMAP_POINT_SIZE_SMALL: BMap.SizeType
declare const BMAP_POINT_SIZE_NORMAL: BMap.SizeType
declare const BMAP_POINT_SIZE_BIG: BMap.SizeType
declare const BMAP_POINT_SIZE_BIGGER: BMap.SizeType
declare const BMAP_POINT_SIZE_HUGE: BMap.SizeType