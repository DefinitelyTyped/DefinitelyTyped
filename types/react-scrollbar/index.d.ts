// Type definitions for react-scrollbar 0.4.1
// Project: https://github.com/souhe/reactScrollbar
// Definitions by: Stephen Jelfs <https://github.com/stephenjelfs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />

declare module "react-scrollbar" {
  interface ScrollAreaProps extends React.Props<ScrollArea> {
      className?: string,
      style?: React.CSSProperties,
      speed?: number,
      contentClassName?: string,
      contentStyle?: React.CSSProperties,
      vertical?: boolean,
      verticalContainerStyle?: React.CSSProperties,
      verticalScrollbarStyle?: React.CSSProperties,
      horizontal?: boolean,
      horizontalContainerStyle?: React.CSSProperties,
      horizontalScrollbarStyle?: React.CSSProperties,
      onScroll?: (value: {leftPosition: number, topPosition: number, containerHeight: number, containerWidth: number, realHeight: number, realWidth: number}) => void,
      contentWindow?: any,
      ownerDocument?: any,
      smoothScrolling?: boolean
      minScrollSize?: number,
      swapWheelAxes?: boolean
      stopScrollPropagation?: boolean,
      focusableTabIndex?: number
  }

  class ScrollArea extends React.Component<ScrollAreaProps> {}

  export = ScrollArea;
}
