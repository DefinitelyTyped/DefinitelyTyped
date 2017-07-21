// Type definitions for Recharts 0.22
// Project: http://recharts.org/
// Definitions by: Maarten Mulders <https://github.com/mthmulders/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export namespace Recharts {
	type Percentage = string;
	type RechartsFunction = () => void;

	interface AreaProps {
		type?: 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | RechartsFunction;
		dataKey?: string | number;
		xAxisId?: string | number;
		yAxisId?: string | number;
		legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none';
		dot?: boolean | any | React.ReactElement<any> | RechartsFunction;
		activeDot?: boolean | any | React.ReactElement<any> | RechartsFunction;
		label?: boolean | any | React.ReactElement<any> | RechartsFunction;
		stroke?: string;
		layout?: 'horizontal' | 'vertical';
		baseLine?: number | any[];
		points?: any[];
		stackId?: string | number;
		connectNulls?: boolean;
		unit?: string | number;
		name?: string | number;
		isAnimationActive?: boolean;
		animationBegin?: number;
		animationDuration?: number;
		animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
		onClick?: RechartsFunction;
		onMouseDown?: RechartsFunction;
		onMouseUp?: RechartsFunction;
		onMouseMove?: RechartsFunction;
		onMouseOver?: RechartsFunction;
		onMouseOut?: RechartsFunction;
		onMouseEnter?: RechartsFunction;
		onMouseLeave?: RechartsFunction;
	}
	class Area extends React.Component<AreaProps, {}> {
	}
	interface AreaChartProps {
		layout?: 'horizontal' | 'vertical';
		syncId?: string;
		width: number;
		height: number;
		data: any[];
		margin?: any;
		stackOffset?: 'expand' | 'none' | 'wiggle' | 'silhouette';
		baseValue?: number | 'dataMin' | 'dataMax' | 'auto';
		onClick?: RechartsFunction;
		onMouseEnter?: RechartsFunction;
		onMouseMove?: RechartsFunction;
		onMouseLeave?: RechartsFunction;
	}
	class AreaChart extends React.Component<AreaChartProps, {}> {
	}
	interface BarProps {
		layout?: 'horizontal' | 'vertical';
		dataKey?: string | number;
		xAxisId?: string | number;
		yAxisId?: string | number;
		legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none';
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
		animationDuration?: number;
		animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
		onClick?: RechartsFunction;
		onMouseDown?: RechartsFunction;
		onMouseUp?: RechartsFunction;
		onMouseMove?: RechartsFunction;
		onMouseOver?: RechartsFunction;
		onMouseOut?: RechartsFunction;
		onMouseEnter?: RechartsFunction;
		onMouseLeave?: RechartsFunction;
	}
	class Bar extends React.Component<BarProps, {}> {
	}
	interface BarChartProps {
		layout?: 'horizontal' | 'vertical';
		syncId?: string;
		width?: number;
		height?: number;
		data?: any[];
		margin?: any;
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
	class BarChart extends React.Component<BarChartProps, {}> {
	}
	interface BrushProps {
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
	class Brush extends React.Component<BrushProps, {}> {
	}
	interface CartesianAxisProps {
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
	class CartesianAxis extends React.Component<CartesianAxisProps, {}> {
	}
	interface CartesianGridProps {
		x?: number;
		y?: number;
		width?: number;
		height?: number;
		horizontal?: boolean;
		vertical?: boolean;
		horizontalPoints?: any[];
		verticalPoints?: any[];
	}
	class CartesianGrid extends React.Component<CartesianGridProps, {}> {
	}
	interface CellProps {
		fill?: string;
		stroke?: string;
	}
	class Cell extends React.Component<CellProps, {}> {
	}
	interface ComposedChartProps {
		layout?: 'horizontal' | 'vertical';
		syncId?: string;
		width?: number;
		height?: number;
		data?: any[];
		margin?: any;
		barCategoryGap?: Percentage | number;
		barGap?: number;
		barSize?: number;
		onClick?: RechartsFunction;
		onMouseEnter?: RechartsFunction;
		onMouseMove?: RechartsFunction;
		onMouseLeave?: RechartsFunction;
	}
	class ComposedChart extends React.Component<ComposedChartProps, {}> {
	}
	interface CrossProps {
		x?: number;
		y?: number;
		top?: number;
		left?: number;
		width?: number;
		height?: number;
	}
	class Cross extends React.Component<CrossProps, {}> {
	}
	interface CurveProps {
		type?: 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | RechartsFunction;
		points: any[];
		layout?: 'horizontal' | 'vertical';
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
	class Curve extends React.Component<CurveProps, {}> {
	}
	interface DotProps {
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
	class Dot extends React.Component<DotProps, {}> {
	}
	interface ErrorBarProps {
		dataKey?: string | number;
		width?: number;
		strokeWidth?: string;
		stroke?: string;
		direction?: string;
	}
	class ErrorBar extends React.Component<ErrorBarProps, {}> {
	}
	interface LegendProps {
		width?: number;
		height?: number;
		layout?: 'horizontal' | 'vertical';
		align?: 'left' | 'center' | 'right';
		verticalAlign?: 'top' | 'middle' | 'bottom';
		iconSize?: number;
		iconType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'star' | 'triangle' | 'wye';
		payload?: any[];
		chartWidth: number;
		chartHeight: number;
		margin?: any;
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
	class Legend extends React.Component<LegendProps, {}> {
	}
	interface LineProps {
		type?: 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | RechartsFunction;
		dataKey: string | number;
		xAxisId?: string | number;
		yAxisId?: string | number;
		legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none';
		dot?: boolean | any | React.ReactElement<any> | RechartsFunction;
		activeDot?: boolean | any | React.ReactElement<any> | RechartsFunction;
		label?: boolean | any | React.ReactElement<any> | RechartsFunction;
		points: any[];
		layout?: 'horizontal' | 'vertical';
		connectNulls?: boolean;
		unit?: string | number;
		name?: string | number;
		isAnimationActive?: boolean;
		animationBegin?: number;
		animationDuration?: number;
		animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
		onClick?: RechartsFunction;
		onMouseDown?: RechartsFunction;
		onMouseUp?: RechartsFunction;
		onMouseMove?: RechartsFunction;
		onMouseOver?: RechartsFunction;
		onMouseOut?: RechartsFunction;
		onMouseEnter?: RechartsFunction;
		onMouseLeave?: RechartsFunction;
	}
	class Line extends React.Component<LineProps, {}> {
	}
	interface LineChartProps {
		layout?: 'horizontal' | 'vertical';
		syncId?: string;
		width?: number;
		height?: number;
		data?: any[];
		margin?: any;
		onClick?: RechartsFunction;
		onMouseEnter?: RechartsFunction;
		onMouseMove?: RechartsFunction;
		onMouseLeave?: RechartsFunction;
	}
	class LineChart extends React.Component<LineChartProps, {}> {
	}
	interface PieProps {
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
		legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none';
		label?: boolean | any | React.ReactElement<any> | RechartsFunction;
		labelLine?: boolean | any | React.ReactElement<any> | RechartsFunction;
		data: any[];
		activeIndex: any[];
		activeShape: any | React.ReactElement<any> | RechartsFunction;
		isAnimationActive?: boolean;
		animationBegin?: number;
		animationDuration?: number;
		animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | RechartsFunction;
		onClick?: RechartsFunction;
		onMouseDown?: RechartsFunction;
		onMouseUp?: RechartsFunction;
		onMouseMove?: RechartsFunction;
		onMouseOver?: RechartsFunction;
		onMouseOut?: RechartsFunction;
		onMouseEnter?: RechartsFunction;
		onMouseLeave?: RechartsFunction;
	}
	class Pie extends React.Component<PieProps, {}> {
	}
	interface PieChartProps {
		width: number;
		height: number;
		margin?: any;
		onClick?: RechartsFunction;
		onMouseEnter?: RechartsFunction;
		onMouseLeave?: RechartsFunction;
	}
	class PieChart extends React.Component<PieChartProps, {}> {
	}
	interface PolarAngleAxisProps {
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
	class PolarAngleAxis extends React.Component<PolarAngleAxisProps, {}> {
	}
	interface PolarGridProps {
		cx: number;
		cy: number;
		innerRadius: number;
		outerRadius: number;
		polarAngles: any[];
		polarRadius: any[];
		gridType?: 'polygon' | 'circle';
	}
	class PolarGrid extends React.Component<PolarGridProps, {}> {
	}
	interface PolarRadiusAxisProps {
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
		scale?: 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utcTime' | 'sequential' | 'threshold' | RechartsFunction;
		onClick?: RechartsFunction;
		onMouseDown?: RechartsFunction;
		onMouseUp?: RechartsFunction;
		onMouseMove?: RechartsFunction;
		onMouseOver?: RechartsFunction;
		onMouseOut?: RechartsFunction;
		onMouseEnter?: RechartsFunction;
		onMouseLeave?: RechartsFunction;
	}
	class PolarRadiusAxis extends React.Component<PolarRadiusAxisProps, {}> {
	}
	interface PolygonProps {
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
	class Polygon extends React.Component<PolygonProps, {}> {
	}
	interface RadarProps {
		dataKey: string | number;
		points: any[];
		shape: Element | RechartsFunction;
		dot?: boolean | any | Element | RechartsFunction;
		legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none';
		label?: boolean | any | Element | RechartsFunction;
		isAnimationActive?: boolean;
		animationBegin?: number;
		animationDuration?: number;
		animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
	}
	class Radar extends React.Component<RadarProps, {}> {
	}
	interface RadarChartProps {
		width: number;
		height: number;
		cx?: Percentage | number;
		cy?: Percentage | number;
		startAngle?: number;
		innerRadius?: Percentage | number;
		outerRadius?: Percentage | number;
		margin?: any;
		clockWise?: boolean;
		onMouseEnter?: RechartsFunction;
		onMouseLeave?: RechartsFunction;
		onClick?: RechartsFunction;
	}
	class RadarChart extends React.Component<RadarChartProps, {}> {
	}
	interface RadialBarProps {
		cx?: number;
		cy?: number;
		startAngle?: number;
		endAngle?: number;
		maxAngle?: number;
		minAngle?: number;
		legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none';
		label?: boolean | any | React.ReactElement<any> | RechartsFunction;
		background?: boolean | any | React.ReactElement<any> | RechartsFunction;
		data: any[];
		isAnimationActive?: boolean;
		animationBegin?: number;
		animationDuration?: number;
		animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
		onClick?: RechartsFunction;
		onMouseDown?: RechartsFunction;
		onMouseUp?: RechartsFunction;
		onMouseMove?: RechartsFunction;
		onMouseOver?: RechartsFunction;
		onMouseOut?: RechartsFunction;
		onMouseEnter?: RechartsFunction;
		onMouseLeave?: RechartsFunction;
	}
	class RadialBar extends React.Component<RadialBarProps, {}> {
	}
	interface RadialBarChartProps {
		width?: number;
		height?: number;
		data?: any[];
		margin?: any;
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
	class RadialBarChart extends React.Component<RadialBarChartProps, {}> {
	}
	interface RectangleProps {
		x?: number;
		y?: number;
		width?: number;
		height?: number;
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
	class Rectangle extends React.Component<RectangleProps, {}> {
	}
	interface ReferenceAreaProps {
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
	class ReferenceArea extends React.Component<ReferenceAreaProps, {}> {
	}
	interface ReferenceDotProps {
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
	class ReferenceDot extends React.Component<ReferenceDotProps, {}> {
	}
	interface ReferenceLineProps {
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
	class ReferenceLine extends React.Component<ReferenceLineProps, {}> {
	}
	interface ResponsiveContainerProps {
		aspect?: number;
		width?: Percentage | number;
		height?: Percentage | number;
		minWidth?: number;
		minHeight?: number;
		debounce?: number;
	}
	class ResponsiveContainer extends React.Component<ResponsiveContainerProps, {}> {
	}
	interface ScatterProps {
		legendType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | 'none';
		xAxisId?: string | number;
		yAxisId?: string | number;
		zAxisId?: string | number;
		line?: boolean | any | React.ReactElement<any> | RechartsFunction;
		shape?: 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | React.ReactElement<any> | RechartsFunction;
		lineType?: 'joint' | 'fitting';
		points: any[];
		isAnimationActive?: boolean;
		animationBegin?: number;
		animationDuration?: number;
		animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
		onClick?: RechartsFunction;
		onMouseDown?: RechartsFunction;
		onMouseUp?: RechartsFunction;
		onMouseMove?: RechartsFunction;
		onMouseOver?: RechartsFunction;
		onMouseOut?: RechartsFunction;
		onMouseEnter?: RechartsFunction;
		onMouseLeave?: RechartsFunction;
	}
	class Scatter extends React.Component<ScatterProps, {}> {
	}
	interface ScatterChartProps {
		width: number;
		height: number;
		margin?: any;
		onClick?: RechartsFunction;
		onMouseDown?: RechartsFunction;
		onMouseUp?: RechartsFunction;
		onMouseMove?: RechartsFunction;
		onMouseOver?: RechartsFunction;
		onMouseOut?: RechartsFunction;
		onMouseEnter?: RechartsFunction;
		onMouseLeave?: RechartsFunction;
	}
	class ScatterChart extends React.Component<ScatterChartProps, {}> {
	}
	interface SectorProps {
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
	class Sector extends React.Component<SectorProps, {}> {
	}
	interface TextProps {
		scaleToFit?: boolean;
		angle?: number;
		width?: number;
		textAnchor?: 'start' | 'middle' | 'end' | 'inherit';
		verticalAnchor?: 'start' | 'middle' | 'end';
	}
	class Text extends React.Component<TextProps, {}> {
	}
	interface TooltipProps {
		separator?: string;
		offset?: number;
		itemStyle?: any;
		wrapperStyle?: any;
		labelStyle?: any;
		cursor?: boolean | any | React.ReactElement<any>;
		viewBox: any;
		active?: boolean;
		coordinate?: any;
		payload?: any[];
		label?: string | number;
		content?: React.ReactElement<any> | RechartsFunction;
		formatter?: RechartsFunction;
		labelFormatter?: RechartsFunction;
		itemSorter?: RechartsFunction;
		isAnimationActive?: boolean;
		animationBegin?: number;
		animationDuration?: number;
		animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
	}
	class Tooltip extends React.Component<TooltipProps, {}> {
	}
	interface TreemapProps {
		width: number;
		height: number;
		dataKey?: string;
		aspectRatio: number;
		isAnimationActive?: boolean;
		animationBegin?: number;
		animationDuration?: number;
		animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
	}
	class Treemap extends React.Component<TreemapProps, {}> {
	}
	interface XAxisProps {
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
		padding?: any;
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
		scale?: 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utcTime' | 'sequential' | 'threshold' | RechartsFunction;
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
	class XAxis extends React.Component<XAxisProps, {}> {
	}
	interface YAxisProps {
		hide?: boolean;
		dataKey?: string | number;
		yAxisId?: string | number;
		width?: number;
		height?: number;
		orientation?: 'left' | 'right';
		type?: 'number' | 'category';
		domain?: any[];
		interval?: "preserveStart" | "preserveEnd" | "preserveStartEnd" | number;
		padding?: any;
		minTickGap?: number;
		allowDecimals?: boolean;
		allowDataOverflow?: boolean;
		axisLine?: boolean | any;
		tickLine?: boolean | any;
		tickSize?: number;
		tickFormatter?: RechartsFunction;
		ticks?: any[];
		tick?: boolean | any | React.ReactElement<any>;
		mirror?: boolean;
		reversed?: boolean;
		label?: string | number | React.ReactElement<any>;
		scale?: 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utcTime' | 'sequential' | 'threshold' | RechartsFunction;
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
	class YAxis extends React.Component<YAxisProps, {}> {
	}
	interface ZAxisProps {
		dataKey: string | number;
		zAxisId?: string | number;
		range?: any[];
		unit?: string | number;
		name?: string | number;
		scale?: 'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utcTime' | 'sequential' | 'threshold' | RechartsFunction;
	}
	class ZAxis extends React.Component<ZAxisProps, {}> {
	}
}
