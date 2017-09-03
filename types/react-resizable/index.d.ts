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
    className: string;
    children: React.ReactElement<any>;
    width: number;
    height: number;
    handleSize?: [number, number];
    lockAspectRatio?: boolean;
    axis?: Axis;
    minConstraints?: [number, number];
    maxConstraints?: [number, number];
    onResizeStop?: (e: SyntheticEvent, data: ResizeCallbackData) => any;
    onResizeStart?: (e: SyntheticEvent, data: ResizeCallbackData) => any;
    onResize?: (e: SyntheticEvent, data: ResizeCallbackData) => any;
    draggableOpts?: Object
  }

  export class Resizable extends React.Component<ResizableProps> { }

  export class ResizableBox extends React.Component<ResizableProps> { }
}