// Type definitions for Recharts 0.22
// Project: http://recharts.org/
// Definitions by: Maarten Mulders <https://github.com/mthmulders/>
//                 Raphael Mueller <https://github.com/rapmue/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export type Percentage = string;
export type RechartsFunction = () => void;

export type LegendType = 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none';
export type LayoutType = 'horizontal' | 'vertical';
export type AnimationEasingType = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
export type ScaleType = 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utcTime' | 'sequential' | 'threshold';

export interface Margin {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

export interface AreaProps extends Partial<CSSStyleDeclaration> {
	type?: 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | RechartsFunction;
	dataKey?: string | number;
	xAxisId?: string | number;
	yAxisId?: string | number;
	legendType?: LegendType;
	dot?: boolean | any | React.ReactElement<any> | RechartsFunction;
	activeDot?: boolean | any | React.ReactElement<any> | RechartsFunction;
	label?: boolean | any | React.ReactElement<any> | RechartsFunction;
	stroke?: string;
	layout?: LayoutType;
	baseLine?: number | any[];
	points?: any[];
	stackId?: string | number;
	connectNulls?: boolean;
	unit?: string | number;
	name?: string | number;
	isAnimationActive?: boolean;
	animationBegin?: number;
	animationEasing?: AnimationEasingType;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class Area extends React.Component<AreaProps, {}> {}

export interface AreaChartProps {
	layout?: LayoutType;
	syncId?: string;
	width: number;
	height: number;
	data: any[];
	margin?: Margin;
	stackOffset?: 'expand' | 'none' | 'wiggle' | 'silhouette';
	baseValue?: number | 'dataMin' | 'dataMax' | 'auto';
	onClick?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class AreaChart extends React.Component<AreaChartProps, {}> {}

export interface BarProps extends Partial<CSSStyleDeclaration> {
	layout?: LayoutType;
	dataKey?: string | number;
	xAxisId?: string | number;
	yAxisId?: string | number;
	legendType?: LegendType;
	label?: boolean | any | React.ReactElement<any> | RechartsFunction;
	data?: any[];
	barSize?: number;
	maxBarSize?: number;
	minPointSize?: number;
	shape?: React.ReactElement<any> | RechartsFunction;
	stackId?: string | number;
	unit?: string | number;
	name?: string | number;
	isAnimationActive?: boolean;
	animationBegin?: number;
	animationEasing?: AnimationEasingType;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class Bar extends React.Component<BarProps, {}> {}

export interface BarChartProps {
	layout?: LayoutType;
	syncId?: string;
	width?: number;
	height?: number;
	data?: any[];
	margin?: Margin;
	barCategoryGap?: Percentage | number;
	barGap?: Percentage | number;
	barSize?: number;
	maxBarSize?: number;
	stackOffset?: 'expand' | 'none' | 'wiggle' | 'silhouette' | 'sign';
	onClick?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class BarChart extends React.Component<BarChartProps, {}> {}

export interface BrushProps {
	dataKey: number | string;
	x?: number;
	y?: number;
	width?: number;
	height?: number;
	data: any[];
	travellerWidth?: number;
	startIndex?: number;
	endIndex?: number;
	tickFormatter?: RechartsFunction;
	onChange?: RechartsFunction;
}
export class Brush extends React.Component<BrushProps, {}> {}

export interface CartesianAxisProps {
	x?: number;
	y?: number;
	width?: number;
	height?: number;
	orientation?: 'top' | 'bottom' | 'left' | 'right';
	viewBox?: any;
	axisLine?: boolean | any;
	tickLine?: boolean | any;
	minTickGap?: number;
	tickSize?: number;
	interval?: "preserveStart" | "preserveEnd" | "preserveStartEnd" | number;
	tick?: boolean | any | React.ReactElement<any> | RechartsFunction;
	label?: string | number | React.ReactElement<any> | RechartsFunction;
	mirror?: boolean;
}
export class CartesianAxis extends React.Component<CartesianAxisProps, {}> {}

export interface CartesianGridProps extends Partial<CSSStyleDeclaration> {
	x?: number;
	y?: number;
	horizontal?: boolean;
	vertical?: boolean;
	horizontalPoints?: any[];
	verticalPoints?: any[];
}
export class CartesianGrid extends React.Component<CartesianGridProps, {}> {}

export interface CellProps {
	fill?: string;
	stroke?: string;
}
export class Cell extends React.Component<CellProps, {}> {}

export interface ComposedChartProps {
	layout?: LayoutType;
	syncId?: string;
	width?: number;
	height?: number;
	data?: any[];
	margin?: Margin;
	barCategoryGap?: Percentage | number;
	barGap?: number;
	barSize?: number;
	onClick?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class ComposedChart extends React.Component<ComposedChartProps, {}> {}

export interface CrossProps {
	x?: number;
	y?: number;
	top?: number;
	left?: number;
	width?: number;
	height?: number;
}
export class Cross extends React.Component<CrossProps, {}> {}

export interface CurveProps extends Partial<CSSStyleDeclaration> {
	type?: 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | RechartsFunction;
	points: any[];
	layout?: LayoutType;
	baseLine?: number | any[];
	connectNulls?: boolean;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class Curve extends React.Component<CurveProps, {}> {}

export interface DotProps {
	cx: number;
	cy: number;
	r: number;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class Dot extends React.Component<DotProps, {}> {}

export interface ErrorBarProps extends Partial<CSSStyleDeclaration> {
	dataKey?: string | number;
	strokeWidth?: string;
	stroke?: string;
	direction?: string;
}
export class ErrorBar extends React.Component<ErrorBarProps, {}> {}

export interface LegendProps {
	width?: number;
	height?: number;
	layout?: LayoutType;
	align?: 'left' | 'center' | 'right';
	verticalAlign?: 'top' | 'middle' | 'bottom';
	iconSize?: number;
	iconType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'star' | 'triangle' | 'wye';
	payload?: any[];
	chartWidth?: number;
	chartHeight?: number;
	margin?: Margin;
	content?: React.ReactElement<any> | RechartsFunction;
	wrapperStyle?: any;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class Legend extends React.Component<LegendProps, {}> {}

export interface LineProps extends Partial<CSSStyleDeclaration> {
	type?: 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | RechartsFunction;
	dataKey: string | number;
	xAxisId?: string | number;
	yAxisId?: string | number;
	legendType?: LegendType;
	dot?: boolean | any | React.ReactElement<any> | RechartsFunction;
	activeDot?: boolean | any | React.ReactElement<any> | RechartsFunction;
	label?: boolean | any | React.ReactElement<any> | RechartsFunction;
	points?: any[]; // made this points property partial, since in every example they don't use this property. But their definition says not optional.
	layout?: LayoutType;
	connectNulls?: boolean;
	unit?: string | number;
	name?: string | number;
	isAnimationActive?: boolean;
	animationBegin?: number;
	animationEasing?: AnimationEasingType;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class Line extends React.Component<LineProps, {}> {}

export interface LineChartProps {
	layout?: LayoutType;
	syncId?: string;
	width?: number;
	height?: number;
	data?: any[];
	margin?: Margin;
	onClick?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class LineChart extends React.Component<LineChartProps, {}> {}

export interface PieProps extends Partial<CSSStyleDeclaration> {
	cx?: Percentage | number;
	cy?: Percentage | number;
	innerRadius?: Percentage | number;
	outerRadius?: Percentage | number;
	startAngle?: number;
	endAngle?: number;
	minAngle?: number;
	paddingAngle?: number;
	nameKey?: string;
	valueKey?: string;
	legendType?: LegendType;
	label?: boolean | any | React.ReactElement<any> | RechartsFunction;
	labelLine?: boolean | any | React.ReactElement<any> | RechartsFunction;
	data: any[];
	activeIndex: any[];
	activeShape: any | React.ReactElement<any> | RechartsFunction;
	isAnimationActive?: boolean;
	animationBegin?: number;
	animationEasing?: AnimationEasingType | RechartsFunction;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class Pie extends React.Component<PieProps, {}> {}

export interface PieChartProps {
	width: number;
	height: number;
	margin?: Margin;
	onClick?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class PieChart extends React.Component<PieChartProps, {}> {}

export interface PolarAngleAxisProps {
	dataKey: string | number;
	cx: number;
	cy: number;
	radius: Percentage | number;
	axisLine?: boolean | any;
	axisLineType?: string;
	tickLine?: boolean | any;
	tick?: boolean | any | React.ReactElement<any> | RechartsFunction;
	ticks: any[];
	orient?: string;
	tickFormatter: RechartsFunction;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class PolarAngleAxis extends React.Component<PolarAngleAxisProps, {}> {}

export interface PolarGridProps extends Partial<CSSStyleDeclaration> {
	cx: number;
	cy: number;
	innerRadius: number;
	outerRadius: number;
	polarAngles: any[];
	polarRadius: any[];
	gridType?: 'polygon' | 'circle';
}
export class PolarGrid extends React.Component<PolarGridProps, {}> {}

export interface PolarRadiusAxisProps {
	angle?: number;
	cx: number;
	cy: number;
	domain?: any[];
	label?: string | number | React.ReactElement<any> | RechartsFunction;
	orientation?: "left" | "right" | "middle";
	axisLine?: boolean | any;
	tick?: boolean | any | Element | RechartsFunction;
	tickFormatter: RechartsFunction;
	tickCount?: number;
	scale?: ScaleType | RechartsFunction;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class PolarRadiusAxis extends React.Component<PolarRadiusAxisProps, {}> {}

export interface PolygonProps {
	points: any[];
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class Polygon extends React.Component<PolygonProps, {}> {}

export interface RadarProps extends Partial<CSSStyleDeclaration> {
	dataKey: string | number;
	points: any[];
	shape: Element | RechartsFunction;
	dot?: boolean | any | Element | RechartsFunction;
	legendType?: LegendType;
	label?: boolean | any | Element | RechartsFunction;
	isAnimationActive?: boolean;
	animationBegin?: number;
	animationEasing?: AnimationEasingType;
}
export class Radar extends React.Component<RadarProps, {}> {}

export interface RadarChartProps {
	width: number;
	height: number;
	cx?: Percentage | number;
	cy?: Percentage | number;
	startAngle?: number;
	innerRadius?: Percentage | number;
	outerRadius?: Percentage | number;
	margin?: Margin;
	clockWise?: boolean;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
	onClick?: RechartsFunction;
}
export class RadarChart extends React.Component<RadarChartProps, {}> {}

export interface RadialBarProps extends Partial<CSSStyleDeclaration> {
	cx?: number;
	cy?: number;
	startAngle?: number;
	endAngle?: number;
	maxAngle?: number;
	minAngle?: number;
	legendType?: LegendType;
	label?: boolean | any | React.ReactElement<any> | RechartsFunction;
	background?: boolean | any | React.ReactElement<any> | RechartsFunction;
	data: any[];
	isAnimationActive?: boolean;
	animationBegin?: number;
	animationEasing?: AnimationEasingType;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class RadialBar extends React.Component<RadialBarProps, {}> {}

export interface RadialBarChartProps {
	width?: number;
	height?: number;
	data?: any[];
	margin?: Margin;
	barCategoryGap?: Percentage | number;
	barGap?: number;
	cx?: Percentage | number;
	cy?: Percentage | number;
	innerRadius?: Percentage | number;
	outerRadius?: Percentage | number;
	barSize?: number;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
	onClick?: RechartsFunction;
}
export class RadialBarChart extends React.Component<RadialBarChartProps, {}> {}

export interface RectangleProps extends Partial<CSSStyleDeclaration> {
	x?: number;
	y?: number;
	radius?: number;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class Rectangle extends React.Component<RectangleProps, {}> {}

export interface ReferenceAreaProps {
	xAxisId?: string | number;
	yAxisId?: string | number;
	x1?: number | string;
	x2?: number | string;
	y1?: number | string;
	y2?: number | string;
	alwaysShow?: boolean;
	viewBox: any;
	xAxis: any;
	yAxis: any;
	label?: string | number | React.ReactElement<any> | RechartsFunction;
	isFront?: boolean;
}
export class ReferenceArea extends React.Component<ReferenceAreaProps, {}> {}

export interface ReferenceDotProps {
	xAxisId?: string | number;
	yAxisId?: string | number;
	x: number | string;
	y: number | string;
	alwaysShow?: boolean;
	xAxis: any;
	yAxis: any;
	label?: string | number | React.ReactElement<any> | RechartsFunction;
	isFront?: boolean;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class ReferenceDot extends React.Component<ReferenceDotProps, {}> {}

export interface ReferenceLineProps {
	xAxisId?: string | number;
	yAxisId?: string | number;
	x?: number | string;
	y?: number | string;
	alwaysShow?: boolean;
	viewBox: any;
	xAxis: any;
	yAxis: any;
	label?: string | number | React.ReactElement<any> | RechartsFunction;
	isFront?: boolean;
}
export class ReferenceLine extends React.Component<ReferenceLineProps, {}> {}

export interface ResponsiveContainerProps {
	aspect?: number;
	width?: Percentage | number;
	height?: Percentage | number;
	minWidth?: number;
	minHeight?: number;
	debounce?: number;
}
export class ResponsiveContainer extends React.Component<ResponsiveContainerProps, {}> {}

export interface ScatterProps extends Partial<CSSStyleDeclaration> {
	legendType?: LegendType;
	xAxisId?: string | number;
	yAxisId?: string | number;
	zAxisId?: string | number;
	line?: boolean | any | React.ReactElement<any> | RechartsFunction;
	shape?: 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | React.ReactElement<any> | RechartsFunction;
	lineType?: 'joint' | 'fitting';
	points: any[];
	isAnimationActive?: boolean;
	animationBegin?: number;
	animationEasing?: AnimationEasingType;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class Scatter extends React.Component<ScatterProps, {}> {}

export interface ScatterChartProps {
	width: number;
	height: number;
	margin?: Margin;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class ScatterChart extends React.Component<ScatterChartProps, {}> {}

export interface SectorProps {
	cx?: number;
	cy?: number;
	innerRadius?: number;
	outerRadius?: number;
	startAngle?: number;
	endAngle?: number;
	cornerRadius?: number;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class Sector extends React.Component<SectorProps, {}> {}

export interface TextProps extends Partial<CSSStyleDeclaration> {
	scaleToFit?: boolean;
	angle?: number;
	textAnchor?: 'start' | 'middle' | 'end' | 'inherit';
	verticalAnchor?: 'start' | 'middle' | 'end';
}
export class Text extends React.Component<TextProps, {}> {}

export interface ViewBox {
	x: number;
	y: number;
	width: number;
	height: number;
}
export interface Coordinate {
	x: number;
	y: number;
}
export interface TooltipPayload {
	name: string;
	value: number;
	unit: string;
}
export interface TooltipProps {
	separator?: string;
	offset?: number;
	itemStyle?: any;
	wrapperStyle?: any;
	labelStyle?: any;
	cursor?: boolean | any | React.ReactElement<any>;
	viewBox: ViewBox;
	active?: boolean;
	coordinate?: Coordinate;
	payload?: TooltipPayload[];
	label?: string | number;
	content?: React.ReactElement<any> | RechartsFunction;
	formatter?: RechartsFunction;
	labelFormatter?: RechartsFunction;
	itemSorter?: RechartsFunction;
	isAnimationActive?: boolean;
	animationBegin?: number;
	animationEasing?: AnimationEasingType;
}
export class Tooltip extends React.Component<TooltipProps, {}> {}

export interface TreemapProps {
	width: number;
	height: number;
	dataKey?: string;
	aspectRatio: number;
	isAnimationActive?: boolean;
	animationBegin?: number;
	animationEasing?: AnimationEasingType;
}
export class Treemap extends React.Component<TreemapProps, {}> {}

export interface XPadding {
	left: number;
	right: number;
}
export interface XAxisProps {
	hide?: boolean;
	dataKey?: string | number;
	xAxisId?: string | number;
	width?: number;
	height?: number;
	orientation?: 'bottom' | 'top';
	type?: 'number' | 'category';
	allowDecimals?: boolean;
	allowDataOverflow?: boolean;
	tickCount?: number;
	domain?: any[];
	interval?: "preserveStart" | "preserveEnd" | "preserveStartEnd" | number;
	padding?: XPadding;
	minTickGap?: number;
	axisLine?: boolean | any;
	tickLine?: boolean | any;
	tickSize?: number;
	tickFormatter?: RechartsFunction;
	ticks?: any[];
	tick?: boolean | any | React.ReactElement<any>;
	mirror?: boolean;
	reversed?: boolean;
	label?: string | number | React.ReactElement<any>;
	scale?: ScaleType | RechartsFunction;
	unit?: string | number;
	name?: string | number;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class XAxis extends React.Component<XAxisProps, {}> {}

export interface YPadding {
	top: number;
	bottom: number;
}
export interface YAxisProps {
	hide?: boolean;
	dataKey?: string | number;
	yAxisId?: string | number;
	width?: number;
	height?: number;
	orientation?: 'left' | 'right';
	type?: 'number' | 'category';
	domain?: any[];
	interval?: "preserveStart" | "preserveEnd" | "preserveStartEnd" | number;
	padding?: YPadding;
	minTickGap?: number;
	allowDecimals?: boolean;
	allowDataOverflow?: boolean;
	axisLine?: boolean | any;
	tickCount?: number;
	tickLine?: boolean | any;
	tickSize?: number;
	tickFormatter?: RechartsFunction;
	ticks?: any[];
	tick?: boolean | any | React.ReactElement<any>;
	mirror?: boolean;
	reversed?: boolean;
	label?: string | number | React.ReactElement<any>;
	scale?: ScaleType | RechartsFunction;
	unit?: string | number;
	name?: string | number;
	onClick?: RechartsFunction;
	onMouseDown?: RechartsFunction;
	onMouseUp?: RechartsFunction;
	onMouseMove?: RechartsFunction;
	onMouseOver?: RechartsFunction;
	onMouseOut?: RechartsFunction;
	onMouseEnter?: RechartsFunction;
	onMouseLeave?: RechartsFunction;
}
export class YAxis extends React.Component<YAxisProps, {}> {}

export interface ZAxisProps {
	dataKey: string | number;
	zAxisId?: string | number;
	range?: any[];
	unit?: string | number;
	name?: string | number;
	scale?: ScaleType | RechartsFunction;
}
export class ZAxis extends React.Component<ZAxisProps, {}> {}
