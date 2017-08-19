// Type definitions for Zynga Scroller
// Project: http://zynga.github.com/scroller/
// Definitions by: Marcelo Haskell Camargo <https://github.com/haskellcamargo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Scroller {
  constructor(a: (left: number, top: number, zoom: number) => void, b?: {
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
    maxZoom?: number
  });
  setDimensions(clientWidth: number, clientHeight: number, contentWidth: number,
    contentHeight: number): void;
  setPosition(clientLeft: number, clientTop: number): void;
  setSnapSize(width: number, height: number): void;
  activatePullToRefresh<T>(height: number, activate: () => void,
    deactivate: () => void, start: () => void): void;
  finishPullToRefresh(): void;
  getValues(): {
    left: number;
    top: number;
    zoom: number
  };
  zoomTo(level: number, animate?: boolean, originLeft?: number,
    originTop?: number): void;
  zoomBy(factor: number, animate?: boolean, originLeft?: number,
    originTop?: number): void;
  scrollTo(left: number, top: number, animate?: boolean): void;
  scrollBy(leftOffset: number, topOffset: number, animate?: boolean): void;
  doMouseZoom(wheelData: number, timeStamp: number, pageX: number,
    pageY: number): void;
  doTouchStart(touches: {
    pageX: number;
    pageY: number
  }, timeStamp: number): void;
  doTouchMove(touches: {
    pageX: number;
    pageY: number
  }, timeStamp: number, scale?: number): void;
  doTouchMove(touches: [any], timeStamp: number): void;
  doTouchEnd(timeStamp: number): void;
}