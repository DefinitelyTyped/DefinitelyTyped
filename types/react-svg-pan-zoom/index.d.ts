import * as React from "react";

// String constants:
export const MODE_IDLE = "idle";
export const MODE_PANNING = "panning";
export const MODE_ZOOMING = "zooming";

export const TOOL_AUTO = "auto";
export const TOOL_NONE = "none";
export const TOOL_PAN = "pan";
export const TOOL_ZOOM_IN = "zoom-in";
export const TOOL_ZOOM_OUT = "zoom-out";

export const POSITION_NONE = "none";
export const POSITION_TOP = "top";
export const POSITION_RIGHT = "right";
export const POSITION_BOTTOM = "bottom";
export const POSITION_LEFT = "left";

export const ALIGN_CENTER = "center";
export const ALIGN_LEFT = "left";
export const ALIGN_RIGHT = "right";
export const ALIGN_TOP = "top";
export const ALIGN_BOTTOM = "bottom";

export type Mode = typeof MODE_IDLE | typeof MODE_PANNING | typeof MODE_ZOOMING;

export interface Value {
    version: 2;
    mode: Mode;
    focus: boolean;
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    viewerWidth: number;
    viewerHeight: number;
    SVGWidth: number;
    SVGHeight: number;
    startX?: number | null | undefined;
    startY?: number | null | undefined;
    endX?: number | null | undefined;
    endY?: number | null | undefined;
    miniatureOpen: boolean;
}

export type Tool = typeof TOOL_AUTO | typeof TOOL_NONE | typeof TOOL_PAN | typeof TOOL_ZOOM_IN | typeof TOOL_ZOOM_OUT;
export type ToolbarPosition =
    | typeof POSITION_NONE
    | typeof POSITION_TOP
    | typeof POSITION_RIGHT
    | typeof POSITION_BOTTOM
    | typeof POSITION_LEFT;

export interface OptionalProps {
    // default tool
    defaultTool: Exclude<Tool, typeof TOOL_AUTO>;

    // background of the viewer
    background: string;

    // background of the svg
    SVGBackground: string;

    // CSS style of the Viewer
    style: object;

    // className of the Viewer
    className: string;

    // detect zoom operation performed trough pinch gesture or mouse scroll
    detectWheel: boolean;

    // perform PAN if the mouse is on viewer border
    detectAutoPan: boolean;

    detectPinchGesture: boolean;

    toolbarProps: {
        position?: ToolbarPosition | undefined;
        SVGAlignX?: typeof ALIGN_CENTER | typeof ALIGN_LEFT | typeof ALIGN_RIGHT | undefined;
        SVGAlignY?: typeof ALIGN_CENTER | typeof ALIGN_TOP | typeof ALIGN_BOTTOM | undefined;
    };

    customMiniature: React.ReactElement | React.ComponentType;
    miniatureProps: {
        position: typeof POSITION_NONE | typeof POSITION_RIGHT | typeof POSITION_LEFT;
        background: string;
        width: number;
        height: number;
    };

    // Note: The `T` type parameter is the type of the `target` of the event:
    // handler click
    onClick<T>(event: ViewerMouseEvent<T>): void;

    // handler double click
    onDoubleClick<T>(event: ViewerMouseEvent<T>): void;

    // handler mouseup
    onMouseUp<T>(event: ViewerMouseEvent<T>): void;

    // handler mousemove
    onMouseMove<T>(event: ViewerMouseEvent<T>): void;

    // handler mousedown
    onMouseDown<T>(event: ViewerMouseEvent<T>): void;

    // handler zoom level changed
    onZoom<T>(event: ViewerMouseEvent<T>): void;

    // handler pan action performed
    onPan<T>(event: ViewerMouseEvent<T>): void;

    // if disabled the user can move the image outside the viewer
    preventPanOutside: boolean;

    // how much scale in or out
    scaleFactor: number;

    // how much scale in or out on mouse wheel (requires detectWheel enabled)
    scaleFactorOnWheel: number;

    // maximum amount of scale a user can zoom in to
    scaleFactorMax: number;

    // minimum amount of a scale a user can zoom out of
    scaleFactorMin: number;

    // modifier keys //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
    modifierKeys: string[];

    // Turn off zoom on double click
    disableDoubleClickZoomWithToolAuto: boolean;

    // override default toolbar component
    // TODO: specify function type more clearly
    customToolbar: React.Component<any> | React.FunctionComponent<any>;

    // How about touch events? They are in README but not in `propTypes`.
}

export interface RequiredProps {
    children: React.ReactElement;
    // width of the viewer displayed on screen
    width: number;
    // height of the viewer displayed on screen
    height: number;
    // current active tool (TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT)
    tool: Tool;
    // value of the viewer (current point of view)
    value: Value | null;
    // handler tool changed
    onChangeTool(tool: Tool): void;
    // handler something changed
    onChangeValue(value: Value): void;

    // accept only one node SVG
    // TODO: Figure out how to constrain `children` or maybe just leave it commented out
    // because `children` is already implicit props
    // children: () => any;
}

export interface UncontrolledExtraOptionalProps {
    // current active tool (TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT)
    tool: Tool;
    // value of the viewer (current point of view)
    value: Value | null;
    // handler tool changed
    onChangeTool(tool: Tool): void;
    // handler something changed
    onChangeValue(value: Value): void;
}

export interface UncontrolledRequiredProps {
    children: React.ReactElement;
    // width of the viewer displayed on screen
    width: number;
    // height of the viewer displayed on screen
    height: number;
}

export type Props = RequiredProps & Partial<OptionalProps>;

export class ReactSVGPanZoom extends React.Component<Props> {
    pan(SVGDeltaX: number, SVGDeltaY: number): void;
    zoom(SVGPointX: number, SVGPointY: number, scaleFactor: number): void;
    fitSelection(
        selectionSVGPointX: number,
        selectionSVGPointY: number,
        selectionWidth: number,
        selectionHeight: number,
    ): void;
    fitToViewer(): void;
    setPointOnViewerCenter(SVGPointX: number, SVGPointY: number, zoomLevel: number): void;
    reset(): void;
    zoomOnViewerCenter(scaleFactor: number): void;
    getValue(): Value;
    setValue(value: Value): void;
    getTool(): Tool;
    setTool(tool: Tool): void;
}

export type UncontrolledProps =
    & UncontrolledRequiredProps
    & Partial<OptionalProps>
    & Partial<UncontrolledExtraOptionalProps>;

export class UncontrolledReactSVGPanZoom extends React.Component<UncontrolledProps> {
    pan(SVGDeltaX: number, SVGDeltaY: number): void;
    zoom(SVGPointX: number, SVGPointY: number, scaleFactor: number): void;
    fitSelection(
        selectionSVGPointX: number,
        selectionSVGPointY: number,
        selectionWidth: number,
        selectionHeight: number,
    ): void;
    fitToViewer(): void;
    setPointOnViewerCenter(SVGPointX: number, SVGPointY: number, zoomLevel: number): void;
    reset(): void;
    zoomOnViewerCenter(scaleFactor: number): void;
    getValue(): Value;
    setValue(value: Value): void;
    getTool(): Tool;
    setTool(tool: Tool): void;
}

export interface Point {
    x: number;
    y: number;
}

export interface ViewerMouseEvent<T> {
    originalEvent: React.MouseEvent<T>;
    SVGViewer: SVGSVGElement;
    point: Point;
    x: number;
    y: number;
    scaleFactor: number;
    translationX: number;
    translationY: number;
    preventDefault(): void;
    stopPropagation(): void;
}

export interface ViewerTouchEvent<T> {
    originalEvent: React.TouchEvent<T>;
    SVGViewer: SVGSVGElement;
    points: Point[];
    changedPoints: Point[];
    scaleFactor: number;
    translationX: number;
    translationY: number;
    preventDefault(): void;
    stopPropagation(): void;
}

// Utility functions exposed:
export function pan(value: Value, SVGDeltaX: number, SVGDeltaY: number, panLimit?: number): Value;

export function zoom(value: Value, SVGPointX: number, SVGPointY: number, scaleFactor: number): Value;

export function fitSelection(
    value: Value,
    selectionSVGPointX: number,
    selectionSVGPointY: number,
    selectionWidth: number,
    selectionHeight: number,
): Value;

export function fitToViewer(value: Value): Value;

export function zoomOnViewerCenter(value: Value, scaleFactor: number): Value;

export function setPointOnViewerCenter(value: Value, SVGPointX: number, SVGPointY: number, zoomLevel: number): Value;

export function reset(value: Value): Value;
