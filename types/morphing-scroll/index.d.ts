import React from "react";

interface IntersectionTrackerProps {
  children: React.ReactNode;
  root?: any;
  threshold?: number;
  rootMargin?: number[] | number;
  style?: any;
  visibleContent?: boolean;
  onVisible?: () => void;
  intersectionDeley?: number;
}
declare const IntersectionTracker: React.FC<IntersectionTrackerProps>;

interface MorphingScrollType {
  scrollID?: string;
  className?: string;
  scrollXY?: number[];
  objectXY?: number[];
  gap?: number[] | number;
  padding?: number[] | number;
  xDirection?: boolean;
  contentAlignCenter?: boolean;
  wrapAlignCenter?: boolean;
  scrollReverse?: boolean;
  scrollTrigger?: "←→" | "←→/←O→" | "<c>" | "<c>/←O→" | "◄|►" | "◄|►/<c>";
  scrollVisibility?: "<O>" | "↓<O>" | "<Ø>";
  scrollTop?: number | "end";
  lazyRender?: boolean;
  infiniteScroll?: boolean;
  rootMargin?: number[] | number;
  suspending?: boolean;
  fallback?: React.ReactNode;
  thumbElement?: React.ReactNode;
  edgeGradient?: boolean | string;
  objectsWrapperMinSize?: number;
  onScrollValue?: Array<[(scrollTop: number) => boolean, () => void]>;
  children: React.ReactNode;
}
declare const MorphingScroll: React.FC<MorphingScrollType>;

interface ResizeTrackerProps {
  children: (width: number, height: number) => React.ReactNode;
  onResize?: (width: number, height: number) => void;
  style?: React.CSSProperties;
}
declare const ResizeTracker: React.FC<ResizeTrackerProps>;

export default MorphingScroll;
export { IntersectionTracker, ResizeTracker };
