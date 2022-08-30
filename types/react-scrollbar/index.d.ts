// Type definitions for react-scrollbar 0.5.6
// Project: https://github.com/souhe/reactScrollbar
// Definitions by: Stephen Jelfs <https://github.com/stephenjelfs>, Hugo Capocci <https://github.com/HugoCapocci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />

interface ScrollAreaProps {
    children?: React.ReactNode;
    ref?: React.LegacyRef<ScrollArea> | undefined;
    className?: string | undefined,
    style?: React.CSSProperties | undefined,
    speed?: number | undefined,
    contentClassName?: string | undefined,
    contentStyle?: React.CSSProperties | undefined,
    vertical?: boolean | undefined,
    verticalContainerStyle?: React.CSSProperties | undefined,
    verticalScrollbarStyle?: React.CSSProperties | undefined,
    horizontal?: boolean | undefined,
    horizontalContainerStyle?: React.CSSProperties | undefined,
    horizontalScrollbarStyle?: React.CSSProperties | undefined,
    onScroll?: ((value: {leftPosition: number, topPosition: number, containerHeight: number, containerWidth: number, realHeight: number, realWidth: number}) => void) | undefined,
    contentWindow?: any,
    ownerDocument?: any,
    smoothScrolling?: boolean | undefined
    minScrollSize?: number | undefined,
    swapWheelAxes?: boolean | undefined
    stopScrollPropagation?: boolean | undefined,
    focusableTabIndex?: number | undefined
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
