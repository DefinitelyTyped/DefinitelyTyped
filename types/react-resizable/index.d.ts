// Type definitions for react-resizable 1.7
// Project: https://github.com/STRML/react-resizable
// Definitions by: Harry Brrundage <https://github.com/airhorns>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export type Axis = "both" | "x" | "y" | "none";
export type ResizeHandle = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne';

export interface ResizableState {
    resizing: boolean;
    width: number;
    height: number;
    slackW: number;
    slackH: number;
}

export interface DragCallbackData {
    node: HTMLElement;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    lastX: number;
    lastY: number;
}

export interface ResizeCallbackData {
    node: HTMLElement;
    size: { width: number; height: number };
    handle: ResizeHandle;
}

export interface ResizableProps {
    className?: string;
    width: number;
    height: number;
    handle?: React.ReactNode | ((resizeHandle: ResizeHandle) => React.ReactNode);
    handleSize?: [number, number];
    lockAspectRatio?: boolean;
    axis?: Axis;
    minConstraints?: [number, number];
    maxConstraints?: [number, number];
    onResizeStop?: (e: React.SyntheticEvent, data: ResizeCallbackData) => any;
    onResizeStart?: (e: React.SyntheticEvent, data: ResizeCallbackData) => any;
    onResize?: (e: React.SyntheticEvent, data: ResizeCallbackData) => any;
    draggableOpts?: any;
    resizeHandles?: ResizeHandle[];
}

export class Resizable extends React.Component<
    ResizableProps,
    ResizableState
    > { }

export interface ResizableBoxState {
    height: number;
    width: number;
}

export type ResizableBoxProps = ResizableProps;

export class ResizableBox extends React.Component<
    ResizableBoxProps,
    ResizableBoxState
    > { }
