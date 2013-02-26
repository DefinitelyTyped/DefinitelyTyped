// Type definitions for Zynga Scroller
// Project: https://github.com/zynga/scroller
// Definitions by: Boris Yankov https://github.com/borisyankov
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface ScrollerOptions {
    scrollingX?: bool;
    scrollingY?: bool;
    animating?: bool;
    animationDuration?: number;
    bouncing?: bool;
    locking?: bool;
    paging?: bool;
    snapping?: bool;
    zooming?: bool;
    minZoom?: number;
    maxZoom?: number;
    speedMultiplier?: number;
}

interface ScrollValues {
    left: number;
    top: number;    
}

interface ScrollValuesWithZoom extends ScrollValues {
    zoom: number;
}

class Scroller {
    constructor (callback: (left: number, top: number, zoom: number) => void , options: ScrollerOptions);

    setDimensions(clientWidth: number, clientHeight: number, contentWidth: number, contentHeight: number): void;
    setPosition(left: number, top: number): void;
    setSnapSize(width: number, height: number): void;
    activatePullToRefresh(height: number, activateCallback: Function, deactivateCallback: Function, startCallback: Function): void;
    finishPullToRefresh(): void;
    getValues(): ScrollValuesWithZoom;
    getScrollMax(): ScrollValues;
    zoomTo(level: number, animate?: bool, originLeft?: bool, originTop?: bool): void;
    zoomBy(factor: number, animate?: bool, originLeft?: bool, originTop?: bool): void;
    scrollTo(left?: number, top?: number, animate?: number, zoom?: number): void;
    scrollBy(left?: number, top?: number, animate?: number): void;

    doMouseZoom(wheelDelta: number, timeStamp: number, pageX: number, pageY: number): void;
    doTouchStart(touches: any[], timeStamp: number): void;
    doTouchMove(touches: any[], timeStamp: number, scale?: number): void;
    doTouchEnd(timeStamp: number): void;
}