// Type definitions for react-svg-pan-zoom 2.5
// Project: https://github.com/chrvadala/react-svg-pan-zoom#readme
// Definitions by: Huy Nguyen <https://github.com/huy-nguyen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

// String constants:
export const MODE_IDLE = 'idle';
export const MODE_PANNING = 'panning';
export const MODE_ZOOMING = 'zooming';

export const TOOL_AUTO = 'auto';
export const TOOL_NONE = 'none';
export const TOOL_PAN = 'pan';
export const TOOL_ZOOM_IN = 'zoom-in';
export const TOOL_ZOOM_OUT = 'zoom-out';

export const POSITION_NONE = 'none';
export const POSITION_TOP = 'top';
export const POSITION_RIGHT = 'right';
export const POSITION_BOTTOM = 'bottom';
export const POSITION_LEFT = 'left';

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
	startX?: number | null;
	startY?: number | null;
	endX?: number | null;
	endY?: number | null;
}

export type Tool = typeof TOOL_AUTO | typeof TOOL_NONE | typeof TOOL_PAN |
										typeof TOOL_ZOOM_IN | typeof TOOL_ZOOM_OUT;
export type ToolbarPosition = typeof POSITION_NONE | typeof POSITION_TOP | typeof POSITION_RIGHT |
										typeof POSITION_BOTTOM | typeof POSITION_LEFT;

export interface OptionalProps {
	// background of the viewer
	background: string;

	// background of the svg
	SVGBackground: string;

	// value of the viewer (current point of view)
	value: Value | null;

	// CSS style of the Viewer
	style: object;

	// className of the Viewer
	className: string;

	// detect zoom operation performed trough pinch gesture or mouse scroll
	detectWheel: boolean;

	// perform PAN if the mouse is on viewer border
	detectAutoPan: boolean;

	// toolbar position
	toolbarPosition: ToolbarPosition;

	// handler something changed
	onChangeValue(value: Value): void;

	// handler tool changed
	onChangeTool(tool: Tool): void;

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

	// if disabled the user can move the image outside the viewer
	preventPanOutside: boolean;

	// how much scale in or out
	scaleFactor: number;

	// current active tool (TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT)
	tool: Tool;

	// modifier keys //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
	modifierKeys: string[];

	// override default toolbar component
	// TODO: specify function type more clearly
	customToolbar: React.Component<any> | React.StatelessComponent<any>;

	// How about touch events? They are in README but not in `propTypes`.
}

export interface RequiredProps {
	// width of the viewer displayed on screen
	width: number;
	// height of the viewer displayed on screen
	height: number;

	// accept only one node SVG
	// TODO: Figure out how to constrain `children` or maybe just leave it commented out
	// because `children` is already implicit props
	// children: () => any;
}

export type Props = RequiredProps & Partial<OptionalProps>;

export class ReactSVGPanZoom extends React.Component<Props> {
	pan(SVGDeltaX: number, SVGDeltaY: number): void;
	zoom(SVGPointX: number, SVGPointY: number, scaleFactor: number): void;
	fitSelection(selectionSVGPointX: number, selectionSVGPointY: number, selectionWidth: number, selectionHeight: number): void;
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
	value: Value, selectionSVGPointX: number, selectionSVGPointY: number, selectionWidth: number, selectionHeight: number): Value;

export function fitToViewer(value: Value): Value;

export function zoomOnViewerCenter(value: Value, scaleFactor: number): Value;

export function setPointOnViewerCenter(value: Value, SVGPointX: number, SVGPointY: number, zoomLevel: number): Value;

export function reset(value: Value): Value;
