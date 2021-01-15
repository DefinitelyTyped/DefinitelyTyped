// Type definitions for react-native-svg-charts 5.0
// Project: https://github.com/JesperLekland/react-native-svg-charts
// Definitions by: Krzysztof Miemiec <https://github.com/krzysztof-miemiec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ScaleBand, ScaleLinear, ScaleLogarithmic, ScalePower, ScaleTime } from 'd3-scale';
import { CurveFactory, Series } from 'd3-shape';
import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
    CommonPathProps,
    LinearGradientProps,
    LineProps,
    PathProps,
    RadialGradientProps,
    TextProps
} from 'react-native-svg';

export type ScaleType<Range, Output> =
| ScaleLinear<Range, Output>
| ScaleLogarithmic<Range, Output>
| ScalePower<Range, Output>
| ScaleTime<Range, Output>;

export interface AccessorFunctionProps<T> { index: number; item: T; }

export type ScaleFunction = () => ScaleType<any, any> | ScaleBand<any>;
export type AccessorFunction<T, U> = (props: AccessorFunctionProps<T>) => U;
export type SortFunction<T> = (a: T, b: T) => number;
export type OffsetFunction = (series: Series<any, any>, order: number[]) => void;
export type OrderFunction = (series: Series<any, any>) => number[];

// Chart

export interface ChartProps<T> {
    data: T[];
    style?: StyleProp<ViewStyle>;
    animate?: boolean;
    animationDuration?: number;
    svg?: Partial<PathProps>;
    width?: number;
    height?: number;
    curve?: CurveFactory;
    contentInset?: {
        top?: number,
        left?: number,
        right?: number,
        bottom?: number,
    };
    gridMin?: number;
    gridMax?: number;
    gridProps?: GridProps<any>;
    numberOfTicks?: number;
    xScale?: ScaleFunction;
    yScale?: ScaleFunction;
    xAccessor?: AccessorFunction<T, number>;
    yAccessor?: AccessorFunction<T, number>;
    yMin?: number;
    yMax?: number;
    xMin?: number;
    xMax?: number;
}

// Line Chart

export class LineChart<T> extends React.PureComponent<ChartProps<T>> {
}

// Pie Chart

export interface PieChartData {
    svg?: Partial<PathProps>;
    key: string | number;
    value?: number;
    arc?: {
        outerRadius?: number | string;
        cornerRadius?: number | string;
    };
}

export interface PieChartProps<T extends PieChartData> extends ChartProps<T> {
    innerRadius?: number | string;
    outerRadius?: number | string;
    labelRadius?: number | string;
    padAngle?: number;
    startAngle?: number;
    endAngle?: number;
    sort?: SortFunction<T>;
    valueAccessor?: AccessorFunction<T, number>;
}

export class PieChart<T extends PieChartData> extends React.PureComponent<PieChartProps<T>> {
}

// Area Chart

export interface AreaChartProps<T> extends ChartProps<T> {
    start?: number;
}

export class AreaChart<T> extends React.PureComponent<AreaChartProps<T>> {
}

// Stacked Area Chart

export interface StackedAreaChartProps<T> extends ChartProps<T> {
    keys: ReadonlyArray<keyof T>;
    colors: string[];
    offset?: OffsetFunction;
    order?: OrderFunction;
    renderGradient?: (props: {
        id: string,
        width: number,
        height: number,
        x: number,
        y: number,
        index: number,
        key: keyof T,
        color: string,
    }) => React.Component<LinearGradientProps | RadialGradientProps>;
    showGrid?: boolean;
    extras?: any[];
    renderDecorator?: () => {};
}

export class StackedAreaChart<T> extends React.PureComponent<StackedAreaChartProps<T>> {
    static extractDataPoints<T>(data: T[], keys: ReadonlyArray<keyof T>, order?: OrderFunction, offset?: OffsetFunction): number[];
}

// Stacked Bar Chart

export interface StackedBarChartProps<T> extends ChartProps<T> {
    keys: ReadonlyArray<keyof T>;
    colors: string[];
    offset?: OffsetFunction;
    order?: OrderFunction;
    strokeColor?: string;
    horizontal?: boolean;
    renderGradient?: (props: { id: string }) => React.Component<LinearGradientProps | RadialGradientProps>;
    spacingInner?: number;
    spacingOuter?: number;
    showGrid?: boolean;
    extras?: any[];
    extra?: () => {};
}

export class StackedBarChart<T> extends React.PureComponent<StackedBarChartProps<T>> {
    static extractDataPoints<T>(data: T, keys: ReadonlyArray<keyof T>, order?: OrderFunction, offset?: OffsetFunction): number[];
}

// Bar Chart

export interface BarChartProps<T> extends ChartProps<T> {
    spacingInner?: number;
    spacingOuter?: number;
}

export class BarChart<T> extends React.PureComponent<BarChartProps<T>> {
}

// Axis

export interface AxisProps<T> {
    style?: StyleProp<ViewStyle>;
    data: T[];
    spacingInner?: number;
    spacingOuter?: number;
    formatLabel?: (value: any, index: number) => number | string;
    scale?: ScaleFunction;
    numberOfTicks?: number;
    svg?: Partial<TextProps>;
}

// XAxis

export interface XAxisProps<T> extends AxisProps<T> {
    contentInset?: {
        left?: number;
        right?: number
    };
    xAccessor?: AccessorFunction<T, any>;
}

export class XAxis<T> extends React.PureComponent<XAxisProps<T>> {
}

// YAxis

export interface YAxisProps<T> extends AxisProps<T> {
    style?: StyleProp<ViewStyle>;
    contentInset?: {
        top?: number;
        bottom?: number;
    };
    min?: number;
    max?: number;
    yAccessor?: AccessorFunction<T, any>;
}

export class YAxis<T> extends React.PureComponent<YAxisProps<T>> {
}

// Progress Circle

export interface ProgressCircleProps {
    progress: number;
    style?: StyleProp<ViewStyle>;
    progressColor?: string;
    backgroundColor?: string;
    strokeWidth?: number;
    startAngle?: number;
    endAngle?: number;
    animate?: boolean;
    animateDuration?: number;
}

export class ProgressCircle extends React.PureComponent<ProgressCircleProps> {
}

// Horizontal Line

export interface HorizontalLineProps {
    stroke: string;
}

// Point
export interface PointProps {
    value?: number;
    radius?: number;
    index?: number;
    color?: string;
}

// Tooltip
export interface TooltipProps {
    value?: number;
    index?: number;
    height?: number;
    stroke?: string;
    text: string;
    pointStroke?: string;
}

export namespace Decorators {
    export class HorizontalLine extends React.Component<HorizontalLineProps> {}
    export class Point extends React.Component<PointProps> {}
    export class Tooltip extends React.Component<TooltipProps> {}
}

export type GridDirection = 'VERTICAL' | 'HORIZONTAL' | 'BOTH';

export interface GridProps<T> {
    direction?: GridDirection;
    belowChart?: boolean;
    svg?: Partial<LineProps>;
    ticks?: T[];
    x?: (t: T) => number;
    y?: (t: T) => number;
}

// Export as Component despite it's SFC.
export class Grid<T> extends React.Component<GridProps<T>> {
    static Direction: {
        VERTICAL: 'VERTICAL',
        HORIZONTAL: 'HORIZONTAL',
        BOTH: 'BOTH',
    };
}

export interface AnimatedPathProps extends CommonPathProps {
    animated?: boolean;
    animationDuration?: number;
    renderPlaceholder?: () => any;
}

export class Path extends React.Component<AnimatedPathProps> {
}
