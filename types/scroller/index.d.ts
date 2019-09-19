// Type definitions for Zynga Scroller 0.1
// Project: http://zynga.github.com/scroller/, https://github.com/popham/scroller
// Definitions by: Marcelo Haskell Camargo <https://github.com/haskellcamargo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Scroller {
  interface Options {
    scrollingX?: boolean;
    scrollingY?: boolean;
    animating?: boolean;
    animationDuration?: number;
    bouncing?: boolean;
    locking?: boolean;
    paging?: boolean;
    snapping?: boolean;
    zooming?: number;
    minZoom?: number;
    maxZoom?: number;
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
    zoom: number
  };
  getScrollMax(): { left: number; top: number; };
  zoomTo(level: number, animate?: boolean, originLeft?: number,
    originTop?: number, callback?: () => void): void;
  zoomBy(factor: number, animate?: boolean, originLeft?: number,
    originTop?: number, callback?: () => void): void;
  scrollTo(left: number, top: number, animate?: boolean, zoom?: number): void;
  scrollBy(leftOffset: number, topOffset: number, animate?: boolean): void;

  doMouseZoom(wheelData: number, timeStamp: number, pageX: number, pageY: number): void;
  doTouchStart(touches: Array<{
    pageX: number;
    pageY: number
  }>, timeStamp: number): void;
  doTouchMove(touches: Array<{
    pageX: number;
    pageY: number
  }>, timeStamp: number, scale?: number): void;
  doTouchEnd(timeStamp: number): void;
}

declare class EasyScroller  {
  constructor(content: any, options: Scroller.Options);

  render(): void;
  reflow(): void;
  bindEvents(): void;
}
