// Type definitions for react-scrollbar 0.4.1
// Project: https://github.com/souhe/reactScrollbar
// Definitions by: Stephen Jelfs <https://github.com/stephenjelfs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react" />

declare module "react-scrollbar" {
  interface ScrollAreaProps extends React.Props<ScrollArea> {
      className?: string,
      style?: __React.CSSProperties,
      speed?: number,
      contentClassName?: string,
      contentStyle?: __React.CSSProperties,
      vertical?: boolean,
      verticalContainerStyle?: __React.CSSProperties,
      verticalScrollbarStyle?: __React.CSSProperties,
      horizontal?: boolean,
      horizontalContainerStyle?: __React.CSSProperties,
      horizontalScrollbarStyle?: __React.CSSProperties,
      onScroll?: (value: {leftPosition: number, topPosition: number, containerHeight: number, containerWidth: number, realHeight: number, realWidth: number}) => void,
      contentWindow?: any,
      ownerDocument?: any,
      smoothScrolling?: boolean
      minScrollSize?: number,
      swapWheelAxes?: boolean
  }

  class ScrollArea extends React.Component<ScrollAreaProps, {}> {}

  export = ScrollArea;
}
