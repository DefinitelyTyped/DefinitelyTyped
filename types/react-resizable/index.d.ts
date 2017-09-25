// Type definitions for react-resizable 1.7.1
// Project: https://github.com/STRML/react-resizable
// Definitions by: Tang Xinyao <https://github.com/tangxinyao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from "react";

type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;
type SyntheticEvent = React.SyntheticEvent<{}>;

declare module "react-resizable" {
  type Axis = 'both' | 'x' | 'y' | 'none';

  export interface ResizeCallbackData {
    node: HTMLElement;
    size: { width: number, height: number };
  }

  export interface ResizableProps {
    //
    // Required Props
    //

    // Require that one and only one child be present.
    children: React.ReactElement<any>;

    // Initial w/h
    width: number;
    height: number;

    //
    // Optional props
    //
    className?: string;
    // If you change this, be sure to update your css
    handleSize?: [number, number];

    // If true, will only allow width/height to move in lockstep
    lockAspectRatio?: boolean;

    // Restricts resizing to a particular axis (default: 'both')
    // 'both' - allows resizing by width or height
    // 'x' - only allows the width to be changed
    // 'y' - only allows the height to be changed
    // 'none' - disables resizing altogether
    axis?: Axis;

    // Min/max size
    minConstraints?: [number, number];
    maxConstraints?: [number, number];

    // Callbacks
    onResizeStop?: (e: SyntheticEvent, data: ResizeCallbackData) => any;
    onResizeStart?: (e: SyntheticEvent, data: ResizeCallbackData) => any;
    onResize?: (e: SyntheticEvent, data: ResizeCallbackData) => any;

    // These will be passed wholesale to react-draggable's DraggableCore
    draggableOpts?: object;
  }

  export class Resizable extends React.Component<ResizableProps> { }

  export class ResizableBox extends React.Component<ResizableProps> { }
}