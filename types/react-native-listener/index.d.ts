import { Component, ReactElement } from "react";

type NativeEvent =
    | "Click"
    | "ContextMenu"
    | "DoubleClick"
    | "Drag"
    | "DragEnd"
    | "DragEnter"
    | "DragExit"
    | "DragLeave"
    | "DragOver"
    | "DragStart"
    | "Drop"
    | "Focus"
    | "KeyDown"
    | "KeyPress"
    | "KeyUp"
    | "MouseDown"
    | "MouseEnter"
    | "MouseLeave"
    | "MouseMove"
    | "MouseOut"
    | "MouseOver"
    | "MouseUp"
    | "PointerCancel"
    | "PointerDown"
    | "PointerEnter"
    | "PointerLeave"
    | "PointerMove"
    | "PointerOut"
    | "PointerOver"
    | "PointerUp"
    | "Scroll"
    | "TouchCancel"
    | "TouchEnd"
    | "TouchMove"
    | "TouchStart";

type ExtendedWindowEventMap = {
    doubleclick: WindowEventMap["dblclick"];
    dragexit: WindowEventMap["dragleave"];
} & WindowEventMap;

type NativeListenerBubbleProps = {
    [EventName in NativeEvent as `on${EventName}`]?: (event: ExtendedWindowEventMap[Lowercase<EventName>]) => any;
};

export type NativeListenerCaptureProps = {
    [EventName in NativeEvent as `on${EventName}Capture`]?: (
        event: ExtendedWindowEventMap[Lowercase<EventName>],
    ) => any;
};

type NativeListenerStopProps = {
    [EventName in NativeEvent as `stop${EventName}`]?: boolean;
};

export type NativeListenerProps = NativeListenerBubbleProps | NativeListenerCaptureProps | NativeListenerStopProps;

export default class NativeListener extends Component<NativeListenerProps & { children: ReactElement }> {}

export {};
