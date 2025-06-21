declare namespace SvgPanZoom {
    interface Point {
        x: number;
        y: number;
    }
}

declare interface SvgPanZoom {
    center(): this;
    contain(): this;
    destroy(): this;
    disableControlIcons(): this;
    disableDblClickZoom(): this;
    disableMouseWheelZoom(): this;
    disablePan(): this;
    disableZoom(): this;
    enableControlIcons(): this;
    enableDblClickZoom(): this;
    enableMouseWheelZoom(): this;
    enablePan(): this;
    enableZoom(): this;
    fit(): this;
    getPan(): SvgPanZoom.Point;
    getSizes(): {width: number, height: number, realZoom: number, viewBox: {x: number, y: number, width: number, height: number}};
    getZoom(): number;
    isControlIconsEnabled(): boolean;
    isDblClickZoomEnabled(): boolean;
    isMouseWheelZoomEnabled(): boolean;
    isPanEnabled(): boolean;
    isZoomEnabled(): boolean;
    pan(point: Readonly<SvgPanZoom.Point>): this;
    panBy(diff: Readonly<SvgPanZoom.Point>): this;
    reset(): this;
    resetPan(): this;
    resetZoom(): this;
    resize(): this;
    setBeforePan(callback: (oldPan: SvgPanZoom.Point, newPan: SvgPanZoom.Point) => void): this;
    setBeforeZoom(callback: (oldZoom: number, newZoom: number) => void): this;
    setMaxZoom(maxZoom: number): this;
    setMinZoom(minZoom: number): this;
    setOnPan(callback: (newPan: SvgPanZoom.Point) => void): this;
    setOnUpdatedCTM(callback: () => void): this;
    setOnZoom(callback: (newZoom: number) => void): this;
    setZoomScaleSensitivity(zoomScaleSensitivity: number): this;
    updateBBox(): this;
    zoom(value: number): this;
    zoomAtPoint(zoom: number, point: Readonly<SvgPanZoom.Point>): this;
    zoomAtPointBy(zoom: number, point: Readonly<SvgPanZoom.Point>): this;
    zoomBy(value: number): this;
    zoomIn(): this;
    zoomOut(): this;
}

declare function svgPanZoom(elementOrSelector: SVGSVGElement | string, options?: {
    viewportSelector?: SVGSVGElement | string,
    panEnabled?: boolean,
    controlIconsEnabled?: boolean,
    zoomEnabled?: boolean,
    dblClickZoomEnabled?: boolean,
    mouseWheelZoomEnabled?: boolean,
    preventMouseEventsDefault?: boolean,
    zoomScaleSensitivity?: number
    minZoom?: number,
    maxZoom?: number,
    fit?: boolean,
    contain?: boolean,
    center?: boolean,
    refreshRate?: number | "auto",
    beforeZoom?: (oldZoom: number, newZoom: number) => void,
    onZoom?: (newZoom: number) => void,
    beforePan?: (oldPan: SvgPanZoom.Point, newPan: SvgPanZoom.Point) => void,
    onPan?: (newPan: SvgPanZoom.Point) => void,
    onUpdatedCTM?: () => void,
    customEventsHandler?: {
        haltEventListeners?: ReadonlyArray<"touchstart" | "touchend" | "touchmove" | "touchleave" | "touchcancel">,
        init?: (options: {
            svgElement: SVGSVGElement,
            eventsListenerElement: SVGSVGElement | null,
            instance: SvgPanZoom
        }) => void,
        destroy?: () => void
    },
    eventsListenerElement?: SVGSVGElement | null
}): SvgPanZoom;
