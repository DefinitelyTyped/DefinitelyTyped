// Type definitions for react-scrollbar 0.4.1
// Project: https://github.com/souhe/reactScrollbar
// Definitions by: Stephen Jelfs <https://github.com/stephenjelfs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />
/// <reference types="react-dom" />

declare module "react-scrollbar" {
  interface ScrollAreaProps extends React.Props<ScrollArea> {
      className?: string,
      style?: ReactDOM.CSSProperties,
      speed?: number,
      contentClassName?: string,
      contentStyle?: ReactDOM.CSSProperties,
      vertical?: boolean,
      verticalContainerStyle?: ReactDOM.CSSProperties,
      verticalScrollbarStyle?: ReactDOM.CSSProperties,
      horizontal?: boolean,
      horizontalContainerStyle?: ReactDOM.CSSProperties,
      horizontalScrollbarStyle?: ReactDOM.CSSProperties,
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
