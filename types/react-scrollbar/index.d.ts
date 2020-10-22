// Type definitions for react-scrollbar 0.5.6
// Project: https://github.com/souhe/reactScrollbar
// Definitions by: Stephen Jelfs <https://github.com/stephenjelfs>, Hugo Capocci <https://github.com/HugoCapocci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />

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

declare class ScrollArea extends React.Component<ScrollAreaProps> {
  /**
   * Allows manual refreshing of the scrollbar.
   */
  refresh: () => void;

  /**
   * Allows to scroll to the top of ScrollArea component.
   */
  scrollTop: () => void;

  /**
   * Allows to scroll to the bottom of ScrollArea component.
   */
  scrollBottom: () => void;

  /**
   * Moves vertical scrollbar.
   * topPosition is a distance between the top of scrollArea container and the top of scrollArea content.
   */
  scrollYTo: (topPosition: number) => void;

  /**
   * Allows to scroll to the left of ScrollArea component.
   */
  scrollLeft: () => void;

  /**
   * Allows to scroll to the right of ScrollArea component.
   */
  scrollRight: () => void;

  /**
   * Moves horizontal scrollbar.
   * leftPosition is a distance between left edge of scrollArea container and left edge of scrollArea content.
   */
  scrollXTo: (leftPosition: number) => void;
}

declare module "react-scrollbar" {
    export = ScrollArea;
}

declare module "react-scrollbar/dist/no-css" {
    export = ScrollArea;
}
