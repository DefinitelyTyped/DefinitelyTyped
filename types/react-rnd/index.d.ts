// Type definitions for react-rnd 7.4
// Project: https://github.com/bokuweb/react-rnd
// Definitions by: Ragg <https://github.com/Ragg->
//                 fsubal <https://github.com/fsubal>
//                 salieri <https://github.com/zyh825>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from "react";

type CSSProperties = React.CSSProperties;

export type Direction =
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | "left"
  | "right"
  | "top"
  | "topLeft"
  | "topRight";

export interface Enable {
  bottom?: boolean;
  bottomLeft?: boolean;
  bottomRight?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  topLeft?: boolean;
  topRight?: boolean;
}

export interface HandleClasses {
  bottom?: string;
  bottomLeft?: string;
  bottomRight?: string;
  left?: string;
  right?: string;
  top?: string;
  topLeft?: string;
  topRight?: string;
}

export interface HandleStyles {
  bottom?: CSSProperties;
  bottomLeft?: CSSProperties;
  bottomRight?: CSSProperties;
  left?: CSSProperties;
  right?: CSSProperties;
  top?: CSSProperties;
  topLeft?: CSSProperties;
  topRight?: CSSProperties;
}

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface DraggableData {
  node: HTMLElement;
  x: number;
  y: number;
  deltaX: number;
  deltaY: number;
  lastX: number;
  lastY: number;
}

export type DraggableEventHandler = (
  e: MouseEvent | TouchEvent,
  data: DraggableData
) => void | false;

export type ResizeHandler = (
  e: MouseEvent | TouchEvent,
  direction: Direction,
  ref: HTMLDivElement,
  delta: Size,
  position: Position
) => void;

export interface Options {
  default: {
    x?: number;
    y?: number;
    width?: number | string;
    height?: number | string;
  };
  className: string;
  style: any;
  width: number | string;
  height: number | string;
  minWidth: number | string;
  minHeight: number | string;
  maxWidth: number | string;
  maxHeight: number | string;
  z: number;
  bounds: 'parent' | 'window' | 'body' | string;
  resizeHandleClasses: HandleClasses;
  resizeHandleStyles: HandleStyles;

  lockAspectRatio: boolean;
  enableResizing?: Enable;
  disableDragging?: boolean;

  onResizeStart: () => void;
  onResize: () => void;
  onResizeStop: ResizeHandler;

  onDragStart: DraggableEventHandler;
  onDrag: DraggableEventHandler;
  onDragStop: DraggableEventHandler;
}

declare class Rnd extends React.Component<Partial<Options>> {}

export default Rnd;
