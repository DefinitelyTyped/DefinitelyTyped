import { ScaleBand, ScaleLinear, ScaleLogarithmic, ScalePower, ScaleTime } from "d3-scale";
import { CurveFactory, Series } from "d3-shape";
import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import {
    CommonPathProps,
    LinearGradientProps,
    LineProps,
    PathProps,
    RadialGradientProps,
    TextProps,
} from "react-native-svg";

export type ScaleType<Range, Output> =
    | ScaleLinear<Range, Output>
    | ScaleLogarithmic<Range, Output>
    | ScalePower<Range, Output>
    | ScaleTime<Range, Output>;

export interface AccessorFunctionProps<T> {
    index: number;
    item: T;
}

export type ScaleFunction = () => ScaleType<any, any> | ScaleBand<any>;
export type AccessorFunction<T, U> = (props: AccessorFunctionProps<T>) => U;
export type SortFunction<T> = (a: T, b: T) => number;
export type OffsetFunction = (series: Series<any, any>, order: number[]) => void;
export type OrderFunction = (series: Series<any, any>) => number[];

// Chart

export interface ChartProps<T> {
    data: T[];
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle> | undefined;
    animate?: boolean | undefined;
    animationDuration?: number | undefined;
    svg?: Partial<PathProps> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    curve?: CurveFactory | undefined;
    contentInset?: {
        top?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
    } | undefined;
    gridMin?: number | undefined;
    gridMax?: number | undefined;
    gridProps?: GridProps<any> | undefined;
    numberOfTicks?: number | undefined;
    xScale?: ScaleFunction | undefined;
    yScale?: ScaleFunction | undefined;
    xAccessor?: AccessorFunction<T, number> | undefined;
    yAccessor?: AccessorFunction<T, number> | undefined;
    yMin?: number | undefined;
    yMax?: number | undefined;
    xMin?: number | undefined;
    xMax?: number | undefined;
}

// Line Chart

export class LineChart<T> extends React.PureComponent<ChartProps<T>> {
}

// Pie Chart

export interface PieChartData {
    svg?: Partial<PathProps> | undefined;
    key: string | number;
    value?: number | undefined;
    arc?: {
        outerRadius?: number | string | undefined;
        cornerRadius?: number | string | undefined;
    } | undefined;
}

export interface PieChartProps<T extends PieChartData> extends ChartProps<T> {
    innerRadius?: number | string | undefined;
    outerRadius?: number | string | undefined;
    labelRadius?: number | string | undefined;
    padAngle?: number | undefined;
    startAngle?: number | undefined;
    endAngle?: number | undefined;
    sort?: SortFunction<T> | undefined;
    valueAccessor?: AccessorFunction<T, number> | undefined;
}

export class PieChart<T extends PieChartData> extends React.PureComponent<PieChartProps<T>> {
}

// Area Chart

export interface AreaChartProps<T> extends ChartProps<T> {
    start?: number | undefined;
}

export class AreaChart<T> extends React.PureComponent<AreaChartProps<T>> {
}

// Stacked Area Chart

export interface StackedAreaChartProps<T> extends ChartProps<T> {
    keys: ReadonlyArray<keyof T>;
    colors: string[];
    offset?: OffsetFunction | undefined;
    order?: OrderFunction | undefined;
    renderGradient?:
        | ((props: {
            id: string;
            width: number;
            height: number;
            x: number;
            y: number;
            index: number;
            key: keyof T;
            color: string;
        }) => React.Component<LinearGradientProps | RadialGradientProps>)
        | undefined;
    showGrid?: boolean | undefined;
    extras?: any[] | undefined;
    renderDecorator?: (() => {}) | undefined;
}

export class StackedAreaChart<T> extends React.PureComponent<StackedAreaChartProps<T>> {
    static extractDataPoints<T>(
        data: T[],
        keys: ReadonlyArray<keyof T>,
        order?: OrderFunction,
        offset?: OffsetFunction,
    ): number[];
}

// Bar Chart

export interface BarChartProps<T> extends ChartProps<T> {
    spacingInner?: number | undefined;
    spacingOuter?: number | undefined;
    horizontal?: boolean | undefined;
}

export class BarChart<T> extends React.PureComponent<BarChartProps<T>> {
}

// Stacked Bar Chart

export interface StackedBarChartProps<T> extends BarChartProps<T> {
    keys: ReadonlyArray<keyof T>;
    colors: string[];
    offset?: OffsetFunction | undefined;
    order?: OrderFunction | undefined;
    strokeColor?: string | undefined;
    renderGradient?:
        | ((props: { id: string }) => React.Component<LinearGradientProps | RadialGradientProps>)
        | undefined;
    showGrid?: boolean | undefined;
    extras?: any[] | undefined;
    extra?: (() => {}) | undefined;
}

export class StackedBarChart<T> extends React.PureComponent<StackedBarChartProps<T>> {
    static extractDataPoints<T>(
        data: T,
        keys: ReadonlyArray<keyof T>,
        order?: OrderFunction,
        offset?: OffsetFunction,
    ): number[];
}

// Axis

export interface AxisProps<T> {
    style?: StyleProp<ViewStyle> | undefined;
    data: T[];
    spacingInner?: number | undefined;
    spacingOuter?: number | undefined;
    formatLabel?: ((value: any, index: number) => number | string) | undefined;
    scale?: ScaleFunction | undefined;
    numberOfTicks?: number | undefined;
    svg?: Partial<TextProps> | undefined;
}

// XAxis

export interface XAxisProps<T> extends AxisProps<T> {
    contentInset?: {
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    xAccessor?: AccessorFunction<T, any> | undefined;
}

export class XAxis<T> extends React.PureComponent<XAxisProps<T>> {
}

// YAxis

export interface YAxisProps<T> extends AxisProps<T> {
    style?: StyleProp<ViewStyle> | undefined;
    contentInset?: {
        top?: number | undefined;
        bottom?: number | undefined;
    } | undefined;
    min?: number | undefined;
    max?: number | undefined;
    yAccessor?: AccessorFunction<T, any> | undefined;
}

export class YAxis<T> extends React.PureComponent<YAxisProps<T>> {
}

// Progress Circle

export interface ProgressCircleProps {
    progress: number;
    style?: StyleProp<ViewStyle> | undefined;
    progressColor?: string | undefined;
    backgroundColor?: string | undefined;
    strokeWidth?: number | undefined;
    cornerRadius?: number | string | undefined;
    startAngle?: number | undefined;
    endAngle?: number | undefined;
    animate?: boolean | undefined;
    animateDuration?: number | undefined;
}

export class ProgressCircle extends React.PureComponent<ProgressCircleProps> {
}

// Horizontal Line

export interface HorizontalLineProps {
    stroke: string;
}

// Point
export interface PointProps {
    value?: number | undefined;
    radius?: number | undefined;
    index?: number | undefined;
    color?: string | undefined;
}

// Tooltip
export interface TooltipProps {
    value?: number | undefined;
    index?: number | undefined;
    height?: number | undefined;
    stroke?: string | undefined;
    text: string;
    pointStroke?: string | undefined;
}

export namespace Decorators {
    export class HorizontalLine extends React.Component<HorizontalLineProps> {}
    export class Point extends React.Component<PointProps> {}
    export class Tooltip extends React.Component<TooltipProps> {}
}

export type GridDirection = "VERTICAL" | "HORIZONTAL" | "BOTH";

export interface GridProps<T> {
    direction?: GridDirection | undefined;
    belowChart?: boolean | undefined;
    svg?: Partial<LineProps> | undefined;
    ticks?: T[] | undefined;
    x?: ((t: T) => number) | undefined;
    y?: ((t: T) => number) | undefined;
}

// Export as Component despite it's FC.
export class Grid<T> extends React.Component<GridProps<T>> {
    static Direction: {
        VERTICAL: "VERTICAL";
        HORIZONTAL: "HORIZONTAL";
        BOTH: "BOTH";
    };
}

export interface AnimatedPathProps extends CommonPathProps {
    animated?: boolean | undefined;
    animationDuration?: number | undefined;
    renderPlaceholder?: (() => any) | undefined;
}

export class Path extends React.Component<AnimatedPathProps> {
}
