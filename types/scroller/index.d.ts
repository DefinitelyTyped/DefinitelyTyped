declare namespace Scroller {
    interface Options {
        scrollingX?: boolean | undefined;
        scrollingY?: boolean | undefined;
        animating?: boolean | undefined;
        animationDuration?: number | undefined;
        bouncing?: boolean | undefined;
        locking?: boolean | undefined;
        paging?: boolean | undefined;
        snapping?: boolean | undefined;
        zooming?: number | undefined;
        minZoom?: number | undefined;
        maxZoom?: number | undefined;
    }
}

declare class Scroller {
    constructor(callback: (left: number, top: number, zoom: number) => void, options?: Scroller.Options);
    setDimensions(clientWidth: number, clientHeight: number, contentWidth: number, contentHeight: number): void;
    setPosition(clientLeft: number, clientTop: number): void;
    setSnapSize(width: number, height: number): void;
    activatePullToRefresh(height: number, activate: () => void, deactivate: () => void, start: () => void): void;
    finishPullToRefresh(): void;
    getValues(): {
        left: number;
        top: number;
        zoom: number;
    };
    getScrollMax(): { left: number; top: number };
    zoomTo(level: number, animate?: boolean, originLeft?: number, originTop?: number, callback?: () => void): void;
    zoomBy(factor: number, animate?: boolean, originLeft?: number, originTop?: number, callback?: () => void): void;
    scrollTo(left: number, top: number, animate?: boolean, zoom?: number): void;
    scrollBy(leftOffset: number, topOffset: number, animate?: boolean): void;

    doMouseZoom(wheelData: number, timeStamp: number, pageX: number, pageY: number): void;
    doTouchStart(
        touches: Array<{
            pageX: number;
            pageY: number;
        }>,
        timeStamp: number,
    ): void;
    doTouchMove(
        touches: Array<{
            pageX: number;
            pageY: number;
        }>,
        timeStamp: number,
        scale?: number,
    ): void;
    doTouchEnd(timeStamp: number): void;
}

declare class EasyScroller {
    constructor(content: any, options: Scroller.Options);

    render(): void;
    reflow(): void;
    bindEvents(): void;
}
