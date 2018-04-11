// Type definitions for react-owl-carousel
// Project: https://github.com/seal789ie/react-owl-carousel
// Definitions by: T Bounsiar <https://github.com/tbounsiar>,
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Credits : These definitions were written by,
//           Ismael Gorissen <https://github.com/igorissen>,
//           Kenneth Ceyer <https://github.com/KennethanCeyer>
// TypeScript Version: 2.6
import * as React from "react"

export interface Options {
  // OPTIONS
  className: string,
  items?: number;
  margin?: number;
  loop?: boolean;
  center?: boolean;
  mouseDrag?: boolean;
  touchDrag?: boolean;
  pullDrag?: boolean;
  freeDrag?: boolean;
  stagePadding?: number;
  merge?: boolean;
  mergeFit?: boolean;
  autoWidth?: boolean;
  startPosition?: number | string;
  URLhashListener?: boolean;
  nav?: boolean;
  rewind?: boolean;
  navText?: string[];
  navElement?: string;
  slideBy?: number | string;
  dots?: boolean;
  dotsEach?: number | boolean;
  dotData?: boolean;
  lazyLoad?: boolean;
  lazyContent?: boolean;
  autoplay?: boolean;
  autoplayTimeout?: number;
  autoplayHoverPause?: boolean;
  smartSpeed?: number | boolean;
  fluidSpeed?: number | boolean;
  autoplaySpeed?: number | boolean;
  navSpeed?: number | boolean;
  dotsSpeed?: number | boolean;
  dragEndSpeed?: number | boolean;
  callbacks?: boolean;
  responsive?: { [breakpoint: string]: Options };
  responsiveRefreshRate?: number;
  responsiveBaseElement?: Element;
  video?: boolean;
  videoHeight?: number | boolean;
  videoWidth?: number | boolean;
  animateOut?: string | boolean;
  animateIn?: string | boolean;
  fallbackEasing?: string;
  info?: HandlerCallback;
  nestedItemSelector?: string;
  itemElement?: string;
  stageElement?: string;
  navContainer?: string | boolean;
  dotsContainer?: string | boolean;
  // CLASSES
  refreshClass?: string;
  loadingClass?: string;
  loadedClass?: string;
  rtlClass?: string;
  dragClass?: string;
  grabClass?: string;
  stageClass?: string;
  stageOuterClass?: string;
  navContainerClass?: string;
  navClass?: string[];
  controlsClass?: string;
  dotClass?: string;
  dotsClass?: string;
  autoHeightClass?: string;
  responsiveClass?: string | boolean;
  // EVENTS
  onInitialize?: HandlerCallback;
  onInitialized?: HandlerCallback;
  onResize?: HandlerCallback;
  onResized?: HandlerCallback;
  onRefresh?: HandlerCallback;
  onRefreshed?: HandlerCallback;
  onDrag?: HandlerCallback;
  onDragged?: HandlerCallback;
  onTranslate?: HandlerCallback;
  onTranslated?: HandlerCallback;
  onChange?: HandlerCallback;
  onChanged?: HandlerCallback;
  onLoadLazy?: HandlerCallback;
  onLoadedLazy?: HandlerCallback;
  onStopVideo?: HandlerCallback;
  onPlayVideo?: HandlerCallback;
}

export type HandlerCallback = (...args: any[]) => void

export default class OwlCarousel extends React.Component<Options, any> {}
