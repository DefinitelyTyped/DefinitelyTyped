// Type definitions for react-svg-pan-zoom 2.18
// Project: https://github.com/chrvadala/react-svg-pan-zoom#readme
// Definitions by: Huy Nguyen <https://github.com/huy-nguyen>, Eamonn Hayden <https://github.com/EamonnES>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
export const POSITION_CENTER = 'center';

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
export type MiniaturePosition = typeof POSITION_NONE | typeof POSITION_RIGHT | typeof POSITION_LEFT;

export type SVGAlignX = typeof POSITION_LEFT | typeof  POSITION_CENTER | typeof POSITION_RIGHT;
export type SVGAlignY = typeof POSITION_TOP | typeof POSITION_CENTER | typeof  POSITION_BOTTOM;

export interface ToolbarProps {
	// X Alignment used for "Fit to Viewer" action
	SVGAlignX: SVGAlignX;

	// Y Alignment used for "Fit to Viewer" action
	SVGAlignY: SVGAlignY;
}

export interface OptionalProps {
	// Lock the viewer to a specific value
	value: Value | null;

	// Callback called when the viewer changes its value
	onChangeValue(value: Value): void;

	// Callback called when the zoom level changes
	onZoom(value: Value): void;

	// Callback called when a pan action is performed
	onPan(value: Value): void;

	// Lock the viewer to a specific tool
	tool: Tool;

	// Callback called when the viewer changes the used tool
	onChangeTool(tool: Tool): void;
	// current active tool (TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT)

	// Background of the SVG
	SVGBackground: string;

	// Style of the SVG
	SVGStyle: object;

	// Background of the viewer
	background: string;

	// CSS style of the Viewer
	style: object;

	// CSS class of the Viewer
	className: string;

	// Perform zoom operation on mouse scroll
	detectWheel: boolean;

	// Perform PAN if the mouse is on the border of the viewer
	detectAutoPan: boolean;

	// Perform zoom operation on pinch gesture
	detectPinchGesture: boolean;

	// toolbar position
	toolbarPosition: ToolbarPosition;

	// Override toolbar component
	customToolbar: React.Component<any> | React.StatelessComponent<any>;

	// Array with modifier keys used with the tool auto to swap zoom in and zoom out
	// modifier keys //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
	modifierKeys: string[];

	// User can't move the image outside the viewer
	preventPanOutside: boolean;

	// How much scale in or out (%)
	scaleFactor: number;

	// How much scale in or out on mouse wheel (requires detectWheel to be enabled) (%)
	scaleFactorOnWheel: number;

	// Maximum amount of scale a user can zoom in to
	scaleFactorMax: number;

	// Minimum amount of scale a user can zoom in to
	scaleFactorMin: number;

	// Miniature position
	miniaturePosition: MiniaturePosition;

	// Background of the miniature
	miniatureBackground: string;

	// Miniature width (px)
	miniatureWidth: number;

	// Miniature height (px)
	miniatureHeight: number;

	// Override miniature component
	customMiniature: React.Component<any> | React.StatelessComponent<any>;

	// Turn off zoom on double click
	disableDoubleClickZoomWithToolAuto: boolean;

	// Handler for click
	onClick<T>(event: ViewerMouseEvent<T>): void;

	// Handler for double click
	onDoubleClick<T>(event: ViewerMouseEvent<T>): void;

	// Handler for mouseup
	onMouseUp<T>(event: ViewerMouseEvent<T>): void;

	// Handler for mousemove
	onMouseMove<T>(event: ViewerMouseEvent<T>): void;

	// Handler for mousedown
	onMouseDown<T>(event: ViewerMouseEvent<T>): void;

	// Handler for touchstart
	onTouchStart<T>(event: ViewerTouchEvent<T>): void;

	// Handler for touchmove
	onTouchMove<T>(event: ViewerTouchEvent<T>): void;

	// Handler for touchend
	onTouchEnd<T>(event: ViewerTouchEvent<T>): void;

	// Handler for touchcancel
	onTouchCancel<T>(event: ViewerTouchEvent<T>): void;

	// Toolbar settings
	toolbarProps: ToolbarProps;
}

export interface RequiredProps {
	// Width of the viewer displayed on screen
	width: number;
	// Height of the viewer displayed on screen
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
	fitToViewer(SVGAlignX?: SVGAlignX, SVGAlignY?: SVGAlignY): void;
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
export function pan(value: Value, SVGDeltaX: number, SVGDeltaY: number): Value;

export function zoom(value: Value, SVGPointX: number, SVGPointY: number, scaleFactor: number): Value;

export function fitSelection(value: Value, selectionSVGPointX: number, selectionSVGPointY: number, selectionWidth: number, selectionHeight: number): Value;

export function fitToViewer(value: Value, SVGAlignX?: SVGAlignX, SVGAlignY?: SVGAlignY): Value;

export function setPointOnViewerCenter(value: Value, SVGPointX: number, SVGPointY: number, zoomLevel: number): Value;

export function reset(value: Value): Value;

export function zoomOnViewerCenter(value: Value, scaleFactor: number): Value;

export function getTool(value: Value): Tool;

export function setTool(value: Value, tool: Tool): Value;
