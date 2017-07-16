// Type definitions for Recharts v0.22.1
// Project: http://recharts.org/
// Definitions by: Maarten Mulders <https://github.com/mthmulders/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react" />
import * as React from 'react';

type Function = () => any;
type Percentage = string;

interface AreaProps {
	type?: 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | Function,
	dataKey?: string | number,
	xAxisId?: string | number,
	yAxisId?: string | number,
	legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none',
	dot?: Boolean | any | React.ReactElement<any> | Function,
	activeDot?: Boolean | any | React.ReactElement<any> | Function,
	label?: Boolean | any | React.ReactElement<any> | Function,
	stroke?: string,
	layout?: 'horizontal' | 'vertical',
	baseLine?: number | any[],
	points?: any[],
	stackId?: string | number,
	connectNulls?: Boolean,
	unit?: string | number,
	name?: string | number,
	isAnimationActive?: Boolean,
	animationBegin?: number,
	animationDuration?: number,
	animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear',
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class Area extends React.Component<AreaProps, {}> {
}

interface AreaChartProps {
	layout?: 'horizontal' | 'vertical',
	syncId?: string,
	width: number,
	height: number,
	data: any[],
	margin?: any,
	stackOffset?: 'expand' | 'none' | 'wiggle' | 'silhouette',
	baseValue?: number | 'dataMin' | 'dataMax' | 'auto',
	onClick?: Function,
	onMouseEnter?: Function,
	onMouseMove?: Function,
	onMouseLeave?: Function,
}
export class AreaChart extends React.Component<AreaChartProps, {}> {
}

interface BarProps {
	layout?: 'horizontal' | 'vertical',
	dataKey?: string | number,
	xAxisId?: string | number,
	yAxisId?: string | number,
	legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none',
	label?: Boolean | any | React.ReactElement<any> | Function,
	data?: any[],
	barSize?: number,
	maxBarSize?: number,
	minPointSize?: number,
	shape?: React.ReactElement<any> | Function,
	stackId?: string | number,
	unit?: string | number,
	name?: string | number,
	isAnimationActive?: Boolean,
	animationBegin?: number,
	animationDuration?: number,
	animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear',
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class Bar extends React.Component<BarProps, {}> {
}

interface BarChartProps {
	layout?: 'horizontal' | 'vertical',
	syncId?: string,
	width?: number,
	height?: number,
	data?: any[],
	margin?: any,
	barCategoryGap?: Percentage | number,
	barGap?: Percentage | number,
	barSize?: number,
	maxBarSize?: number,
	stackOffset?: 'expand' | 'none' | 'wiggle' | 'silhouette' | 'sign',
	onClick?: Function,
	onMouseEnter?: Function,
	onMouseMove?: Function,
	onMouseLeave?: Function,
}
export class BarChart extends React.Component<BarChartProps, {}> {
}

interface BrushProps {
	dataKey: number | string,
	x?: number,
	y?: number,
	width?: number,
	height?: number,
	data: any[],
	travellerWidth?: number,
	startIndex?: number,
	endIndex?: number,
	tickFormatter?: Function,
	onChange?: Function,
}
export class Brush extends React.Component<BrushProps, {}> {
}

interface CartesianAxisProps {
	x?: number,
	y?: number,
	width?: number,
	height?: number,
	orientation?: 'top' | 'bottom' | 'left' | 'right',
	viewBox?: any,
	axisLine?: Boolean | any,
	tickLine?: Boolean | any,
	minTickGap?: number,
	tickSize?: number,
	interval?: "preserveStart" | "preserveEnd" | "preserveStartEnd" | number,
	tick?: Boolean | any | React.ReactElement<any> | Function,
	label?: string | number | React.ReactElement<any> | Function,
	mirror?: Boolean,
}
export class CartesianAxis extends React.Component<CartesianAxisProps, {}> {
}

interface CartesianGridProps {
	x?: number,
	y?: number,
	width?: number,
	height?: number,
	horizontal?: Boolean,
	vertical?: Boolean,
	horizontalPoints?: any[],
	verticalPoints?: any[],
}
export class CartesianGrid extends React.Component<CartesianGridProps, {}> {
}

interface CellProps {
	fill?: string,
	stroke?: string,
}
export class Cell extends React.Component<CellProps, {}> {
}

interface ComposedChartProps {
	layout?: 'horizontal' | 'vertical',
	syncId?: string,
	width?: number,
	height?: number,
	data?: any[],
	margin?: any,
	barCategoryGap?: Percentage | number,
	barGap?: number,
	barSize?: number,
	onClick?: Function,
	onMouseEnter?: Function,
	onMouseMove?: Function,
	onMouseLeave?: Function,
}
export class ComposedChart extends React.Component<ComposedChartProps, {}> {
}

interface CrossProps {
	x?: number,
	y?: number,
	top?: number,
	left?: number,
	width?: number,
	height?: number,
}
export class Cross extends React.Component<CrossProps, {}> {
}

interface CurveProps {
	type?: 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | Function,
	points: any[],
	layout?: 'horizontal' | 'vertical',
	baseLine?: number | any[],
	connectNulls?: Boolean,
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class Curve extends React.Component<CurveProps, {}> {
}

interface DotProps {
	cx: number,
	cy: number,
	r: number,
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseMove?: Function,
	onMouseLeave?: Function,
}
export class Dot extends React.Component<DotProps, {}> {
}

interface ErrorBarProps {
	dataKey?: string | number,
	width?: number,
	strokeWidth?: string,
	stroke?: string,
	direction?: string,
}
export class ErrorBar extends React.Component<ErrorBarProps, {}> {
}

interface LegendProps {
	width?: number,
	height?: number,
	layout?: 'horizontal' | 'vertical',
	align?: 'left' | 'center' | 'right',
	verticalAlign?: 'top' | 'middle' | 'bottom',
	iconSize?: number,
	iconType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'star' | 'triangle' | 'wye',
	payload?: any[],
	chartWidth: number,
	chartHeight: number,
	margin?: any,
	content?: React.ReactElement<any> | Function,
	wrapperStyle?: any,
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class Legend extends React.Component<LegendProps, {}> {
}

interface LineProps {
	type?: 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | Function,
	dataKey: string | number,
	xAxisId?: string | number,
	yAxisId?: string | number,
	legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none',
	dot?: Boolean | any | React.ReactElement<any> | Function,
	activeDot?: Boolean | any | React.ReactElement<any> | Function,
	label?: Boolean | any | React.ReactElement<any> | Function,
	points: any[],
	layout?: 'horizontal' | 'vertical',
	connectNulls?: Boolean,
	unit?: string | number,
	name?: string | number,
	isAnimationActive?: Boolean,
	animationBegin?: number,
	animationDuration?: number,
	animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear',
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class Line extends React.Component<LineProps, {}> {
}

interface LineChartProps {
	layout?: 'horizontal' | 'vertical',
	syncId?: string,
	width?: number,
	height?: number,
	data?: any[],
	margin?: any,
	onClick?: Function,
	onMouseEnter?: Function,
	onMouseMove?: Function,
	onMouseLeave?: Function,
}
export class LineChart extends React.Component<LineChartProps, {}> {
}

interface PieProps {
	cx?: Percentage | number,
	cy?: Percentage | number,
	innerRadius?: Percentage | number,
	outerRadius?: Percentage | number,
	startAngle?: number,
	endAngle?: number,
	minAngle?: number,
	paddingAngle?: number,
	nameKey?: string,
	valueKey?: string,
	legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none',
	label?: Boolean | any | React.ReactElement<any> | Function,
	labelLine?: Boolean | any | React.ReactElement<any> | Function,
	data: any[],
	activeIndex: any[],
	activeShape: any | React.ReactElement<any> | Function,
	isAnimationActive?: Boolean,
	animationBegin?: number,
	animationDuration?: number,
	animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | Function,
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class Pie extends React.Component<PieProps, {}> {
}

interface PieChartProps {
	width: number,
	height: number,
	margin?: any,
	onClick?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class PieChart extends React.Component<PieChartProps, {}> {
}

interface PolarAngleAxisProps {
	dataKey: string | number,
	cx: number,
	cy: number,
	radius: Percentage | number,
	axisLine?: boolean | any,
	axisLineType?: string,
	tickLine?: boolean | any,
	tick?: boolean | any | React.ReactElement<any> | Function,
	ticks: any[],
	orient?: string,
	tickFormatter: Function,
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class PolarAngleAxis extends React.Component<PolarAngleAxisProps, {}> {
}

interface PolarGridProps {
	cx: number,
	cy: number,
	innerRadius: number,
	outerRadius: number,
	polarAngles: any[],
	polarRadius: any[],
	gridType?: 'polygon' | 'circle',
}
export class PolarGrid extends React.Component<PolarGridProps, {}> {
}

interface PolarRadiusAxisProps {
	angle?: number,
	cx: number,
	cy: number,
	domain?: any[],
	label?: string | number | React.ReactElement<any> | Function,
	orientation?: "left" | "right" | "middle",
	axisLine?: boolean | any,
	tick?: boolean | any | Element | Function,
	tickFormatter: Function,
	tickCount?: number,
	scale?: 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utcTime' | 'sequential' | 'threshold' | Function,
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class PolarRadiusAxis extends React.Component<PolarRadiusAxisProps, {}> {
}

interface PolygonProps {
	points: any[],
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class Polygon extends React.Component<PolygonProps, {}> {
}

interface RadarProps {
	dataKey: string | number,
	points: any[],
	shape: Element | Function,
	dot?: boolean | any | Element | Function,
	legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none',
	label?: boolean | any | Element | Function,
	isAnimationActive?: Boolean,
	animationBegin?: number,
	animationDuration?: number,
	animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear',
}
export class Radar extends React.Component<RadarProps, {}> {
}

interface RadarChartProps {
	width: number,
	height: number,
	cx?: Percentage | number,
	cy?: Percentage | number,
	startAngle?: number,
	innerRadius?: Percentage | number,
	outerRadius?: Percentage | number,
	margin?: any,
	clockWise?: boolean,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
	onClick?: Function,
}
export class RadarChart extends React.Component<RadarChartProps, {}> {
}

interface RadialBarProps {
	cx?: number,
	cy?: number,
	startAngle?: number,
	endAngle?: number,
	maxAngle?: number,
	minAngle?: number,
	legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none',
	label?: Boolean | any | React.ReactElement<any> | Function,
	background?: Boolean | any | React.ReactElement<any> | Function,
	data: any[],
	isAnimationActive?: Boolean,
	animationBegin?: number,
	animationDuration?: number,
	animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear',
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class RadialBar extends React.Component<RadialBarProps, {}> {
}

interface RadialBarChartProps {
	width?: number,
	height?: number,
	data?: any[],
	margin?: any,
	barCategoryGap?: Percentage | number,
	barGap?: number,
	cx?: Percentage | number,
	cy?: Percentage | number,
	innerRadius?: Percentage | number,
	outerRadius?: Percentage | number,
	barSize?: number,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
	onClick?: Function,
}
export class RadialBarChart extends React.Component<RadialBarChartProps, {}> {
}

interface RectangleProps {
	x?: number,
	y?: number,
	width?: number,
	height?: number,
	radius?: number,
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class Rectangle extends React.Component<RectangleProps, {}> {
}

interface ReferenceAreaProps {
	xAxisId?: string | number,
	yAxisId?: string | number,
	x1?: number | string,
	x2?: number | string,
	y1?: number | string,
	y2?: number | string,
	alwaysShow?: Boolean,
	viewBox: any,
	xAxis: any,
	yAxis: any,
	label?: string | number | React.ReactElement<any> | Function,
	isFront?: Boolean,
}
export class ReferenceArea extends React.Component<ReferenceAreaProps, {}> {
}

interface ReferenceDotProps {
	xAxisId?: string | number,
	yAxisId?: string | number,
	x: number | string,
	y: number | string,
	alwaysShow?: Boolean,
	xAxis: any,
	yAxis: any,
	label?: string | number | React.ReactElement<any> | Function,
	isFront?: Boolean,
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseMove?: Function,
	onMouseLeave?: Function,
}
export class ReferenceDot extends React.Component<ReferenceDotProps, {}> {
}

interface ReferenceLineProps {
	xAxisId?: string | number,
	yAxisId?: string | number,
	x?: number | string,
	y?: number | string,
	alwaysShow?: Boolean,
	viewBox: any,
	xAxis: any,
	yAxis: any,
	label?: string | number | React.ReactElement<any> | Function,
	isFront?: Boolean,
}
export class ReferenceLine extends React.Component<ReferenceLineProps, {}> {
}

interface ResponsiveContainerProps {
	aspect?: number,
	width?: Percentage | number,
	height?: Percentage | number,
	minWidth?: number,
	minHeight?: number,
	debounce?: number,
}
export class ResponsiveContainer extends React.Component<ResponsiveContainerProps, {}> {
}

interface ScatterProps {
	legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none',
	xAxisId?: string | number,
	yAxisId?: string | number,
	zAxisId?: string | number,
	line?: Boolean | any | React.ReactElement<any> | Function,
	shape?: 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | React.ReactElement<any> | Function,
	lineType?: 'joint' | 'fitting',
	points: any[],
	isAnimationActive?: Boolean,
	animationBegin?: number,
	animationDuration?: number,
	animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear',
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class Scatter extends React.Component<ScatterProps, {}> {
}

interface ScatterChartProps {
	width: number,
	height: number,
	margin?: any,
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class ScatterChart extends React.Component<ScatterChartProps, {}> {
}

interface SectorProps {
	cx?: number,
	cy?: number,
	innerRadius?: number,
	outerRadius?: number,
	startAngle?: number,
	endAngle?: number,
	cornerRadius?: number,
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class Sector extends React.Component<SectorProps, {}> {
}

interface TextProps {
	scaleToFit?: Boolean,
	angle?: number,
	width?: number,
	textAnchor?: 'start' | 'middle' | 'end' | 'inherit',
	verticalAnchor?: 'start' | 'middle' | 'end',
}
export class Text extends React.Component<TextProps, {}> {
}

interface TooltipProps {
	separator?: string,
	offset?: number,
	itemStyle?: any,
	wrapperStyle?: any,
	labelStyle?: any,
	cursor?: Boolean | any | React.ReactElement<any>,
	viewBox: any,
	active?: Boolean,
	coordinate?: any,
	payload?: any[],
	label?: string | number,
	content?: React.ReactElement<any> | Function,
	formatter?: Function,
	labelFormatter?: Function,
	itemSorter?: Function,
	isAnimationActive?: Boolean,
	animationBegin?: number,
	animationDuration?: number,
	animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear',
}
export class Tooltip extends React.Component<TooltipProps, {}> {
}

interface TreemapProps {
	width: number,
	height: number,
	dataKey?: string,
	aspectRatio: number,
	isAnimationActive?: Boolean,
	animationBegin?: number,
	animationDuration?: number,
	animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear',
}
export class Treemap extends React.Component<TreemapProps, {}> {
}

interface XAxisProps {
	hide?: Boolean,
	dataKey?: string | number,
	xAxisId?: string | number,
	width?: number,
	height?: number,
	orientation?: 'bottom' | 'top',
	type?: 'number' | 'category',
	allowDecimals?: Boolean,
	allowDataOverflow?: Boolean,
	tickCount?: number,
	domain?: any[],
	interval?: "preserveStart" | "preserveEnd" | "preserveStartEnd" | number,
	padding?: any,
	minTickGap?: number,
	axisLine?: Boolean | any,
	tickLine?: Boolean | any,
	tickSize?: number,
	tickFormatter?: Function,
	ticks?: any[],
	tick?: Boolean | any | React.ReactElement<any>,
	mirror?: Boolean,
	reversed?: Boolean,
	label?: string | number | React.ReactElement<any>,
	scale?: 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utcTime' | 'sequential' | 'threshold' | Function,
	unit?: string | number,
	name?: string | number,
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class XAxis extends React.Component<XAxisProps, {}> {
}

interface YAxisProps {
	hide?: Boolean,
	dataKey?: string | number,
	yAxisId?: string | number,
	width?: number,
	height?: number,
	orientation?: 'left' | 'right',
	type?: 'number' | 'category',
	domain?: any[],
	interval?: "preserveStart" | "preserveEnd" | "preserveStartEnd" | number,
	padding?: any,
	minTickGap?: number,
	allowDecimals?: Boolean,
	allowDataOverflow?: Boolean,
	axisLine?: Boolean | any,
	tickLine?: Boolean | any,
	tickSize?: number,
	tickFormatter?: Function,
	ticks?: any[],
	tick?: Boolean | any | React.ReactElement<any>,
	mirror?: Boolean,
	reversed?: Boolean,
	label?: string | number | React.ReactElement<any>,
	scale?: 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utcTime' | 'sequential' | 'threshold' | Function,
	unit?: string | number,
	name?: string | number,
	onClick?: Function,
	onMouseDown?: Function,
	onMouseUp?: Function,
	onMouseMove?: Function,
	onMouseOver?: Function,
	onMouseOut?: Function,
	onMouseEnter?: Function,
	onMouseLeave?: Function,
}
export class YAxis extends React.Component<YAxisProps, {}> {
}

interface ZAxisProps {
	dataKey: string | number,
	zAxisId?: string | number,
	range?: any[],
	unit?: string | number,
	name?: string | number,
	scale?: 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utcTime' | 'sequential' | 'threshold' | Function,
}
export class ZAxis extends React.Component<ZAxisProps, {}> {
}

