// Type definitions for Recharts 1.8
// Project: http://recharts.org/, https://github.com/recharts/recharts
// Definitions by: Raphael Mueller <https://github.com/rapmue>
//                 Roy Xue <https://github.com/royxue>
//                 Zheyang Song <https://github.com/ZheyangSong>
//                 Rich Baird <https://github.com/richbai90>
//                 Dan Torberg <https://github.com/caspeco-dan>
//                 Peter Keuter <https://github.com/pkeuter>
//                 Jamie Saunders <https://github.com/jrsaunde>
//                 Harry Cruse <https://github.com/crusectrl>
//                 Andrew Palugniok <https://github.com/apalugniok>
//                 Robert Stigsson <https://github.com/RobertStigsson>
//                 Kosaku Kurino <https://github.com/kousaku-maron>
//                 Leon Ng <https://github.com/iflp>
//                 Dave Vedder <https://github.com/veddermatic>
//                 Konstantin Azizov <https://github.com/g07cha>
//                 Gonzalo Nicolas D'Elia <https://github.com/gndelia>
//                 Dimitri Mitropoulos <https://github.com/dimitropoulos>
//                 Eliot Ball <https://github.com/eliotball>
//                 Ville Kentta <https://github.com/vkentta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { getTickValues, getNiceTickValues, getTickValuesFixedDomain } from 'recharts-scale';
import { CurveFactory } from 'd3-shape';

export type Percentage = string;
export type RechartsFunction = (...args: any[]) => void;
export type LegendValueFormatter = (value?: LegendPayload['value'], entry?: LegendPayload, i?: number) => any;
export type TickFormatterFunction = (value: any) => any;
export type TickGeneratorFunction = (noTicksProps: object) => ReadonlyArray<any>;
export type LabelFormatter = (label: string | number) => React.ReactNode;
export type TooltipFormatter = (value: string | number | Array<string | number>, name: string,
    entry: TooltipPayload, index: number) => React.ReactNode;
export type ItemSorter<T> = (a: T, b: T) => number;
export type ContentRenderer<P> = (props: P) => React.ReactNode;
export type DataKey = string | number | ((dataObject: any) => string | number | Readonly<[number, number]> | null);

export type IconType = 'plainline' | 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'star' | 'triangle' | 'wye' | 'plainline';
export type LegendType = IconType | 'none';
export type LayoutType = 'horizontal' | 'vertical';
export type AnimationEasingType = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
export type ScaleType =
    'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' | 'band' | 'point' |
    'ordinal' | 'quantile' | 'quantize' | 'utcTime' | 'sequential' | 'threshold';
export type PositionType =
    'top' | 'left' | 'right' | 'bottom' | 'inside' | 'outside' | 'insideLeft' | 'insideRight' |
    'insideTop' | 'insideBottom' | 'insideTopLeft' | 'insideBottomLeft' | 'insideTopRight' |
    'insideBottomRight' | 'insideStart' | 'insideEnd' | 'end' | 'center';
export type StackOffsetType = 'sign' | 'expand' | 'none' | 'wiggle' | 'silhouette';
export type LineType =
    'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' |
    'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | CurveFactory;
export type IfOverflowType = 'hidden' | 'visible' | 'discard' | 'extendDomain';
export type AxisInterval = number | 'preserveStart' | 'preserveEnd' | 'preserveStartEnd';
export type BaseValueType = number | 'auto' | 'dataMin' | 'dataMax';
export type ReferenceLinePosition = 'start' | 'middle' | 'end';

export type PickedCSSStyleDeclarationKeys =
    'alignmentBaseline' | 'baselineShift' | 'clip' | 'clipPath' | 'clipRule' | 'color' |
    'colorInterpolationFilters' | 'cursor' | 'direction' | 'display' | 'dominantBaseline' |
    'enableBackground' | 'fill' | 'fillRule' | 'filter' | 'floodColor' |
    'floodOpacity' | 'font' | 'fontFamily' | 'fontStretch' | 'fontStyle' | 'fontVariant' |
    'glyphOrientationHorizontal' | 'glyphOrientationVertical' | 'letterSpacing' | 'lightingColor' |
    'markerEnd' | 'markerMid' | 'markerStart' | 'mask' | 'overflow' | 'pointerEvents' |
    'stopColor' | 'strokeDasharray' | 'strokeLinecap' | 'strokeLinejoin' | 'textAnchor' |
    'textDecoration' | 'unicodeBidi' | 'visibility' | 'writingMode' | 'transform';

export interface BoxSize {
    boxWidth: number;
    boxHeight: number;
}

export interface ContainerSize {
    containerWidth: number;
    containerHeight: number;
}

export interface Point {
    x: number;
    y: number;
    value: number | ReadonlyArray<any>;
}

export interface Margin {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

export interface Animatable {
    onAnimationStart?: RechartsFunction;
    onAnimationEnd?: RechartsFunction;
    animationId?: number;
    isAnimationActive?: boolean;
    isUpdateAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: number;
    animationEasing?: AnimationEasingType;
}

export interface CategoricalChartWrapper<L = LayoutType> {
    syncId?: string | number;
    compact?: boolean;
    width?: number;
    height?: number;
    data?: ReadonlyArray<object>;
    layout?: L;
    stackOffset?: StackOffsetType;
    throttleDelay?: number;
    margin?: Partial<Margin>;
    barCategoryGap?: number | string;
    barGap?: number | string;
    barSize?: number | string;
    baseValue?: BaseValueType;
    maxBarSize?: number;
    style?: object;
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
    onClick?: RechartsFunction;
    onMouseLeave?: RechartsFunction;
    onMouseEnter?: RechartsFunction;
    onMouseMove?: RechartsFunction;
    onMouseDown?: RechartsFunction;
    onMouseUp?: RechartsFunction;
    reverseStackOrder?: boolean;
}

export interface EventAttributes {
    onClick?: RechartsFunction;
    onMouseDown?: RechartsFunction;
    onMouseUp?: RechartsFunction;
    onMouseOver?: RechartsFunction;
    onMouseMove?: RechartsFunction;
    onMouseOut?: RechartsFunction;
    onMouseEnter?: RechartsFunction;
    onMouseLeave?: RechartsFunction;
    onTouchEnd?: RechartsFunction;
    onTouchMove?: RechartsFunction;
    onTouchStart?: RechartsFunction;
    onTouchCancel?: RechartsFunction;
}

export interface PresentationAttributes<X = number, Y = number> extends Pick<CSSStyleDeclaration, PickedCSSStyleDeclarationKeys> {
    angle: number;
    colorInterpolation: string;
    colorProfile: string;
    colorRendering: string;
    fill: string;
    fillOpacity: number | string;
    fontSize: number | string;
    fontSizeAdjust: number | string;
    fontWeight: 'normal' | 'bold' | 'bolder' | 'lighter' |
    100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'inherit';
    imageRendering: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit';
    kerning: number | string;
    opacity: number | string;
    shapeRendering: 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | 'inherit';
    stopOpacity: number | string;
    stroke: number | string;
    strokeDashoffset: number | string;
    strokeMiterlimit: number | string;
    strokeOpacity: number | string;
    strokeWidth: number | string;
    textRendering: 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision' | 'inherit';
    wordSpacing: number | string;
    style: object;
    width: number;
    height: number;
    dx: number;
    dy: number;
    x: X;
    y: Y;
    r: number;
}

export interface AreaProps extends EventAttributes, Partial<PresentationAttributes>, Animatable {
    dataKey: DataKey; // As the source code states, dataKey will replace valueKey in 1.1.0 and it'll be required (it's already required in current implementation).
    className?: string;
    type?: LineType;
    unit?: string | number;
    name?: string | number;
    xAxisId?: string | number;
    yAxisId?: string | number;
    xAxis?: object;
    yAxis?: object;
    stackId?: string | number;
    legendType?: LegendType;
    connectNulls?: boolean;
    activeDot?: boolean | object | React.ReactElement | ContentRenderer<any>;
    dot?: boolean | object | React.ReactElement | ContentRenderer<DotProps>;
    label?: boolean | object | ContentRenderer<any> | React.ReactElement;
    hide?: boolean;
    layout?: LayoutType;
    baseLine?: number | ReadonlyArray<any>;
    isRange?: boolean;
    points?: ReadonlyArray<Point>;
    id?: string;
}

export class Area extends React.Component<AreaProps> { }

// NOTE: the lib's implementation doesn't inherits the event props (it's kept in this definition due to the previous typing definition has it).
export type AreaChartProps = CategoricalChartWrapper & EventAttributes;

export class AreaChart extends React.Component<AreaChartProps> { }

export interface BarData {
    x: number;
    y: number;
    width: number;
    height: number;
    radius: number | ReadonlyArray<any>;
    value: number | string | ReadonlyArray<any>;
}

export interface BarProps extends EventAttributes, Partial<PresentationAttributes>, Animatable {
    dataKey: DataKey; // As the source code states, dataKey will replace valueKey in 1.1.0 and it'll be required (it's already required in current implementation).
    className?: string;
    fill?: string;
    radius?: number | ReadonlyArray<number>;
    layout?: LayoutType;
    xAxisId?: string | number;
    yAxisId?: string | number;
    yAxis?: object;
    xAxis?: object;
    stackId?: string | number;
    barSize?: number;
    unit?: string | number;
    name?: string | number;
    legendType?: LegendType;
    minPointSize?: number;
    maxBarSize?: number;
    hide?: boolean;
    shape?: React.ReactElement | ContentRenderer<RectangleProps>;
    data?: ReadonlyArray<BarData>;
    background?: boolean | React.ReactElement | ContentRenderer<any> | object;
    // see label section at http://recharts.org/#/en-US/api/Bar
    label?: boolean | Label | LabelProps | React.SFC<LabelProps> | React.ReactElement<LabelProps> | ContentRenderer<any>;
    id?: string;
}

export class Bar extends React.Component<BarProps> { }

// NOTE: the lib's implementation doesn't inherits the event props (it's kept in this definition due to the previous typing definition has it).
export type BarChartProps = CategoricalChartWrapper & EventAttributes;

export class BarChart extends React.Component<BarChartProps> { }

export interface BrushProps {
    className?: string;
    fill?: string;
    stroke?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    travellerWidth?: number;
    padding?: Partial<Margin>;
    dataKey?: DataKey;
    data?: ReadonlyArray<any>;
    startIndex?: number;
    endIndex?: number;
    tickFormatter?: TickFormatterFunction;
    children?: React.ReactNode;
    onChange?: RechartsFunction;
    updateId?: string | number;
    gap?: number;
    leaveTimeOut?: number;
}

export class Brush extends React.Component<BrushProps> { }

export interface CartesianAxisProps extends EventAttributes, Partial<PresentationAttributes> {
    className?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    orientation?: 'top' | 'bottom' | 'left' | 'right';
    viewBox?: ViewBox;
    tick?: boolean | ContentRenderer<any> | object | React.ReactElement;
    axisLine?: boolean | object;
    tickLine?: boolean | object;
    mirror?: boolean;
    minTickGap?: number;
    ticks?: ReadonlyArray<any>;
    tickSize?: number;
    stroke?: string;
    tickFormatter?: TickFormatterFunction;
    ticksGenerator?: TickGeneratorFunction;
    interval?: AxisInterval;
}

export class CartesianAxis extends React.Component<CartesianAxisProps> { }

export type CoordinatesGenerator = (arg: {
    yAxis: CartesianGridProps['yAxis'];
    width: CartesianGridProps['chartWidth'];
    height: CartesianGridProps['chartHeight'];
    offset: CartesianGridProps['offset'];
}) => ReadonlyArray<number>;

export interface CartesianGridProps extends Partial<PresentationAttributes> {
    y?: number;
    width?: number;
    height?: number;
    horizontal?: object | React.ReactElement | ContentRenderer<LineProps & CartesianGridProps> | boolean;
    vertical?: object | React.ReactElement | ContentRenderer<LineProps & CartesianGridProps> | boolean;
    horizontalPoints?: ReadonlyArray<number>;
    verticalPoints?: ReadonlyArray<number>;
    horizontalCoordinatesGenerator?: CoordinatesGenerator;
    verticalCoordinatesGenerator?: CoordinatesGenerator;
    xAxis?: object;
    yAxis?: object;
    offset?: object;
    chartWidth?: number;
    chartHeight?: number;
    horizontalFill?: ReadonlyArray<string>;
    verticalFill?: ReadonlyArray<string>;
}

export class CartesianGrid extends React.Component<CartesianGridProps> { }

export interface CellProps extends Partial<PresentationAttributes> {
    onClick?: RechartsFunction;
    onMouseEnter?: RechartsFunction;
    onMouseLeave?: RechartsFunction;
}

export class Cell extends React.Component<CellProps> { }

// NOTE: the lib's implementation doesn't inherits the event props (it's kept in this definition due to the previous typing definition has it).
export type ComposedChartProps = CategoricalChartWrapper & EventAttributes;

export class ComposedChart extends React.Component<ComposedChartProps> { }

export interface CrossProps extends Partial<PresentationAttributes> {
    className?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
}

export class Cross extends React.Component<CrossProps> { }

// NOTE: the lib's implementation doesn't inherits the event props (it's kept in this definition due to the previous typing definition has it).
export interface CurveProps extends EventAttributes, Partial<PresentationAttributes> {
    className?: string;
    type?: LineType;
    layout?: LayoutType;
    baseLine?: number | ReadonlyArray<any>;
    points?: ReadonlyArray<object>;
    connectNulls?: boolean;
    path?: string;
    pathRef?: React.Ref<any>;
}

export class Curve extends React.Component<CurveProps> { }

// NOTE: the lib's implementation doesn't inherits the event props (it's kept in this definition due to the previous typing definition has it).
export interface DotProps extends EventAttributes {
    className?: string;
    cx?: number;
    cy?: number;
    r?: number;
}

export class Dot extends React.Component<DotProps> { }

export type DataPointFormatter = (entry: any, dataKey: DataKey) => { x: number; y: number, value: any; errorVal: any; };

export interface ErrorBarProps {
    dataKey: DataKey; // As the source code states, dataKey will replace valueKey in 1.1.0 and it'll be required (it's already required in current implementation).
    data?: ReadonlyArray<any>;
    xAxis?: object;
    yAxis?: object;
    layout?: string;
    dataPointFormatter?: DataPointFormatter;
    stroke?: string;
    strokeWidth?: number;
    width?: number;
    offset?: number;
}

export class ErrorBar extends React.Component<ErrorBarProps> { }

export interface LegendPayload {
    value: any;
    id: any;
    type: LegendType;
    color?: string;
}

export type BBoxUpdateCallback = (box: { width: number; height: number; }) => void;

export interface LegendProps {
    content?: React.ReactElement | ContentRenderer<LegendProps>;
    wrapperStyle?: object;
    chartWidth?: number;
    chartHeight?: number;
    width?: number;
    height?: number;
    iconSize?: number;
    iconType?: IconType;
    layout?: LayoutType;
    align?: 'left' | 'center' | 'right';
    verticalAlign?: 'top' | 'middle' | 'bottom';
    margin?: Partial<Margin>;
    payload?: ReadonlyArray<LegendPayload>;
    formatter?: LegendValueFormatter;
    onClick?: RechartsFunction;
    onMouseEnter?: RechartsFunction;
    onMouseLeave?: RechartsFunction;
    onBBoxUpdate?: BBoxUpdateCallback;
}

export class Legend extends React.Component<LegendProps, BoxSize> { }

export interface LineProps extends EventAttributes, Partial<PresentationAttributes>, Animatable {
    className?: string;
    type?: LineType;
    unit?: string | number;
    name?: string | number;
    xAxisId?: string | number;
    yAxisId?: string | number;
    yAxis?: object;
    xAxis?: object;
    legendType?: LegendType;
    layout?: LayoutType;
    connectNulls?: boolean;
    hide?: boolean;
    activeDot?: object | React.ReactElement | ContentRenderer<any> | boolean;
    dot?: object | React.ReactElement | ContentRenderer<DotProps> | boolean;
    top?: number;
    left?: number;
    width?: number;
    height?: number;
    data?: ReadonlyArray<object>;
    dataKey: DataKey; // As the source code states, dataKey will replace valueKey in 1.1.0 and it'll be required (it's already required in current implementation).
    label?: boolean | object | React.ReactElement | ContentRenderer<any>;
    points?: ReadonlyArray<Point>;
    id?: string;
}

export class Line extends React.Component<LineProps> { }

// NOTE: the lib's implementation doesn't inherits the event props (it's kept in this definition due to the previous typing definition has it).
export type LineChartProps = CategoricalChartWrapper & EventAttributes;

export class LineChart extends React.Component<LineChartProps> { }

export interface PieProps extends EventAttributes, Partial<PresentationAttributes>, Animatable {
    className?: string;
    dataKey: DataKey; // As the source code states, dataKey will replace valueKey in 1.1.0 and it'll be required (it's already required in current implementation).
    cx?: number | string;
    cy?: number | string;
    startAngle?: number;
    endAngle?: number;
    midAngle?: number;
    paddingAngle?: number;
    innerRadius?: number | string;
    outerRadius?: number | string;
    cornerRadius?: number | string;
    nameKey?: string | number | ((dataObject: any) => number);
    valueKey?: string | number | ((dataObject: any) => number);
    data?: ReadonlyArray<object>;
    minAngle?: number;
    legendType?: LegendType;
    maxRadius?: number;
    sectors?: ReadonlyArray<object>;
    hide?: boolean;
    labelLine?: object | ContentRenderer<LineProps & any> | React.ReactElement | boolean;
    label?: {
        offsetRadius: number;
    } | React.ReactElement | ContentRenderer<PieLabelRenderProps> | boolean;
    activeShape?: object | ContentRenderer<any> | React.ReactElement;
    activeIndex?: number | ReadonlyArray<number>;
    blendStroke?: boolean;
}

export interface PieLabelRenderProps extends PieProps {
    name: string;
    percent?: number;
    stroke: string;
    index?: number;
    textAnchor: string;
    x: number;
    y: number;
    [key: string]: any;
}

export class Pie extends React.Component<PieProps> { }

// NOTE: the lib's implementation doesn't inherits the event props (it's kept in this definition due to the previous typing definition has it).
export interface PieChartProps extends EventAttributes, CategoricalChartWrapper<'centric'> {
    startAngle?: number;
    endAngle?: number;
    cx?: number | string;
    cy?: number | string;
    innerRadius?: number | string;
    outerRadius?: number | string;
}

export class PieChart extends React.Component<PieChartProps> { }

export interface PolarAngleAxisTick {
    value: any;
    coordinate: number;
}

export interface PolarAngleAxisProps extends EventAttributes, Partial<PresentationAttributes> {
    type?: 'number' | 'category';
    angleAxisId?: string | number;
    dataKey?: DataKey; // As the source code states, dataKey will replace valueKey in 1.1.0 and it'll be required (it's already required in current implementation).
    cx?: number;
    cy?: number;
    radius?: Percentage | number;
    hide?: boolean;
    scale?: ScaleType | RechartsFunction; // this seems not being used by the lib.
    axisLine?: boolean | object;
    axisLineType?: 'polygon' | 'circle';
    tickLine?: boolean | object;
    tick?: boolean | ContentRenderer<any> | object | React.ReactElement;
    ticks?: ReadonlyArray<PolarAngleAxisTick>;
    stroke?: string;
    orientation?: 'inner' | 'outer';
    tickFormatter?: TickFormatterFunction;
}

export class PolarAngleAxis extends React.Component<PolarAngleAxisProps> { }

export interface PolarGridProps extends Partial<PresentationAttributes> {
    cx?: number;
    cy?: number;
    innerRadius?: number;
    outerRadius?: number;
    polarAngles?: ReadonlyArray<number>;
    polarRadius?: ReadonlyArray<number>;
    gridType?: 'polygon' | 'circle';
}

export class PolarGrid extends React.Component<PolarGridProps> { }

export interface PolarRadiusAxisTick {
    value: any;
    coordinate: number;
}

export type PolarRadiusAxisDomain = number | 'auto' | 'dataMin' | 'dataMax';

export interface PolarRadiusAxisProps extends EventAttributes, Partial<PresentationAttributes> {
    type?: 'number' | 'category';
    cx?: number;
    cy?: number;
    hide?: boolean;
    radiusAxisId?: string | number;
    angle?: number;
    tickCount?: number;
    ticks?: ReadonlyArray<PolarRadiusAxisTick>;
    orientation?: "left" | "right" | "middle";
    axisLine?: boolean | object;
    tick?: boolean | object | React.ReactElement | ContentRenderer<any>;
    stroke?: string;
    tickFormatter?: TickFormatterFunction;
    domain?: Readonly<[PolarRadiusAxisDomain, PolarRadiusAxisDomain]>;
    scale?: ScaleType | RechartsFunction;
    allowDataOverflow?: boolean;
}

export class PolarRadiusAxis extends React.Component<PolarRadiusAxisProps> { }

export interface PolygonPoint {
    x: number;
    y: number;
}

export interface PolygonProps extends EventAttributes, Partial<PresentationAttributes> {
    className?: string;
    points?: ReadonlyArray<PolygonPoint>;
}

export class Polygon extends React.Component<PolygonProps> { }

export interface RadarPoint {
    x: number;
    y: number;
    cx: number;
    cy: number;
    angle: number;
    radius: number;
    value: number;
    payload: object;
}

export interface RadarProps extends EventAttributes, Partial<PresentationAttributes>, Animatable {
    className?: string;
    name?: string;
    dataKey: DataKey; // As the source code states, dataKey will replace valueKey in 1.1.0 and it'll be required (it's already required in current implementation).
    points?: ReadonlyArray<RadarPoint>;
    shape?: React.ReactElement | ContentRenderer<RadarProps>;
    activeDot?: object | React.ReactElement | ContentRenderer<any> | boolean;
    dot?: object | React.ReactElement | ContentRenderer<DotProps> | boolean;
    label?: object | React.ReactElement | ContentRenderer<any> | boolean;
    legendType?: LegendType;
    hide?: boolean;
}

export class Radar extends React.Component<RadarProps> { }

// NOTE: the lib's implementation doesn't inherits the event props (it's kept in this definition due to the previous typing definition has it).
export interface RadarChartProps extends EventAttributes, CategoricalChartWrapper<'centric'> {
    startAngle?: number;
    endAngle?: number;
    cx?: number | string;
    cy?: number | string;
    innerRadius?: number | string;
    outerRadius?: number | string;
}

export class RadarChart extends React.Component<RadarChartProps> { }

export interface RadialBarData {
    cx: number;
    cy: number;
    innerRadius: number;
    outerRadius: number;
    value: any;
}

export interface RadialBarProps extends EventAttributes, Partial<PresentationAttributes>, Animatable {
    className?: string;
    dataKey: DataKey; // As the source code states, dataKey will replace valueKey in 1.1.0 and it'll be required (it's already required in current implementation).
    angleAxisId?: string | number;
    radiusAxisId?: string | number;
    shape?: ContentRenderer<any> | React.ReactElement;
    activeShape?: object | ContentRenderer<any> | React.ReactElement;
    cornerRadius?: number | string;
    minPointSize?: number;
    maxBarSize?: number;
    data?: ReadonlyArray<RadialBarData>;
    legendType?: LegendType;
    label?: boolean | React.ReactElement | ContentRenderer<any> | object;
    background?: boolean | React.ReactElement | ContentRenderer<any> | object;
    hide?: boolean;
}

export class RadialBar extends React.Component<RadialBarProps> { }

export interface RadialBarChartProps extends CategoricalChartWrapper<'radial'> {
    startAngle?: number;
    endAngle?: number;
    cx?: string | number;
    cy?: string | number;
    innerRadius?: string | number;
    outerRadius?: string | number;
}

export class RadialBarChart extends React.Component<RadialBarChartProps> { }

export interface RectangleProps extends EventAttributes, Partial<PresentationAttributes>, Animatable {
    className?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    radius?: number | ReadonlyArray<any>;
}

export class Rectangle extends React.Component<RectangleProps> { }

export interface ReferenceAreaProps extends Partial<PresentationAttributes> {
    className?: number | string;
    viewBox?: ViewBox;
    xAxis?: object;
    yAxis?: object;
    isFront?: boolean;
    alwaysShow?: boolean;
    ifOverflow?: IfOverflowType;
    x1?: number | string;
    x2?: number | string;
    y1?: number | string;
    y2?: number | string;
    xAxisId?: string | number;
    yAxisId?: string | number;
    shape?: ContentRenderer<ReferenceAreaProps & RectangleProps> | React.ReactElement;
}

export class ReferenceArea extends React.Component<ReferenceAreaProps> { }

export type ScaleCalculator = (x: number | string) => number;
export interface ReferenceDotAxisConfiguration {
    scale: ScaleCalculator;
}

export interface ReferenceDotProps extends EventAttributes, Partial<PresentationAttributes<number | string, number | string>> {
    className?: number | string;
    r?: number;
    xAxis?: ReferenceDotAxisConfiguration;
    yAxis?: ReferenceDotAxisConfiguration;
    isFront?: boolean;
    alwaysShow?: boolean;
    ifOverflow?: IfOverflowType;
    x?: number | string;
    y?: number | string;
    xAxisId?: string | number;
    yAxisId?: string | number;
    shape?: ContentRenderer<
        EventAttributes
        & Partial<PresentationAttributes<number | string, number | string>>
        & { cx: number; cy: number; }
    > | React.ReactElement;
    label?: string | number | React.ReactElement | RechartsFunction;
}

export class ReferenceDot extends React.Component<ReferenceDotProps> { }

export interface SegmentItem {
    x: number | string;
    y: number | string;
}

export interface ReferenceLineProps extends Partial<PresentationAttributes<number | string, number | string>> {
    className?: number | string;
    viewBox?: ViewBox;
    xAxis?: object;
    yAxis?: object;
    isFront?: boolean;
    alwaysShow?: boolean;
    ifOverflow?: IfOverflowType;
    x?: number | string;
    y?: number | string;
    segment?: Readonly<[SegmentItem, SegmentItem]>;
    label?: string | number | ContentRenderer<any> | React.ReactElement;
    xAxisId?: string | number;
    yAxisId?: string | number;
    shape?: ContentRenderer<
        EventAttributes
        & Partial<PresentationAttributes<number | string, number | string>>
        & { x1: number; y1: number; x2: number; y2: number; }
    > | React.ReactElement;
    position?: ReferenceLinePosition;
}

export class ReferenceLine extends React.Component<ReferenceLineProps> { }

export interface ResponsiveContainerProps {
    aspect?: number;
    width?: string | number;
    height?: string | number;
    minHeight?: string | number;
    minWidth?: string | number;
    maxHeight?: string | number;
    children: React.ReactNode;
    debounce?: number;
    id?: string | number;
    className?: string | number;
}

export class ResponsiveContainer extends React.Component<ResponsiveContainerProps, ContainerSize> { }

export interface ScatterPoint {
    cx?: number;
    cy?: number;
    size?: number;
    node?: {
        x?: number | string;
        y?: number | string;
        z?: number | string;
    };
    payload?: any;
}

export interface ScatterProps extends EventAttributes, Partial<PresentationAttributes>, Animatable {
    xAxisId?: string | number;
    yAxisId?: string | number;
    zAxisId?: string | number;
    line?: boolean | object | RechartsFunction | React.ReactElement;
    lineType?: 'joint' | 'fitting';
    lineJointType?: LineType;
    legendType?: LegendType;
    activeIndex?: number;
    activeShape?: object | RechartsFunction | React.ReactElement;
    shape?: 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye' | React.ReactElement | ContentRenderer<any>;
    points?: ReadonlyArray<ScatterPoint>;
    hide?: boolean;
    data?: ReadonlyArray<object>;
    dataKey?: DataKey;
    name?: string | number;
    id?: string;
}

export class Scatter extends React.Component<ScatterProps> { }

// NOTE: the lib's implementation doesn't inherits the event props (it's kept in this definition due to the previous typing definition has it).
export type ScatterChartProps = CategoricalChartWrapper & EventAttributes;

export class ScatterChart extends React.Component<ScatterChartProps> { }

export interface SectorProps extends EventAttributes, Partial<PresentationAttributes> {
    className?: string;
    cx?: number;
    cy?: number;
    innerRadius?: number;
    outerRadius?: number;
    startAngle?: number;
    endAngle?: number;
    cornerRadius?: number | string;
}

export class Sector extends React.Component<SectorProps> { }

export interface TextProps extends Partial<PresentationAttributes> {
    className?: string;
    scaleToFit?: boolean;
    angle?: number;
    textAnchor?: 'start' | 'middle' | 'end' | 'inherit';
    verticalAnchor?: 'start' | 'middle' | 'end';
    style?: object;
    capHeight?: string;
    lineHeight?: string;
}

export class Text extends React.Component<TextProps> { }

export interface ViewBox {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}

export interface PolarViewBox {
    cx?: number;
    cy?: number;
    innerRadius?: number;
    outerRadius?: number;
    startAngle?: number;
    endAngle?: number;
}

export interface Coordinate {
    x: number;
    y: number;
}

export type AllowEscapeViewBox = { x: boolean } | { y: boolean } | { x: boolean, y: boolean };

export interface TooltipPayload {
    name: string;
    value: string | number | ReadonlyArray<(string | number)>;
    unit?: string;
    color?: string;
    fill?: string;
    dataKey?: DataKey;
    formatter?: TooltipFormatter;
    payload?: any;
}

export interface TooltipProps extends Animatable {
    content?: React.ReactElement | React.StatelessComponent<any> | ContentRenderer<TooltipProps>;
    viewBox?: ViewBox;
    allowEscapeViewBox?: AllowEscapeViewBox;
    active?: boolean;
    separator?: string;
    formatter?: TooltipFormatter;
    offset?: number;
    itemStyle?: object;
    labelStyle?: object;
    contentStyle?: object;
    wrapperStyle?: object;
    cursor?: boolean | object | React.ReactElement | React.StatelessComponent<any>;
    coordinate?: Coordinate;
    position?: Coordinate;
    label?: string | number;
    labelFormatter?: LabelFormatter;
    payload?: ReadonlyArray<TooltipPayload>;
    itemSorter?: ItemSorter<TooltipPayload>;
    filterNull?: boolean;
    useTranslate3d?: boolean;
}

export class Tooltip extends React.Component<TooltipProps, BoxSize> { }

export interface TreemapProps extends EventAttributes, Animatable {
    width?: number;
    height?: number;
    data?: ReadonlyArray<any>;
    style?: object;
    aspectRatio?: number;
    content?: React.ReactElement | ContentRenderer<any>;
    fill?: string;
    stroke?: string;
    className?: string;
    nameKey?: string | number | RechartsFunction;
    dataKey?: DataKey; // As the source code states, dataKey will replace valueKey in 1.1.0 and it'll be required (it's already required in current implementation).
    children?: React.ReactNode[] | React.ReactNode;
}

export class Treemap extends React.Component<TreemapProps> { }

export class Label extends React.Component<LabelProps> { }

export interface LabelProps extends Partial<PresentationAttributes> {
    angle?: number;
    viewBox?: ViewBox | PolarViewBox;
    formatter?: LabelFormatter;
    value?: number | string;
    offset?: number;
    position?: PositionType;
    children?: React.ReactNode[] | React.ReactNode;
    className?: string;
    content?: React.ReactElement | ContentRenderer<any>;
}

export class LabelList extends React.Component<LabelListProps> { }

export interface LabelListProps {
    angle?: number;
    children?: React.ReactNode[] | React.ReactNode;
    className?: string;
    clockWise?: boolean;
    content?: React.ReactElement | ContentRenderer<LabelProps>;
    data?: number;
    dataKey: string | number | RechartsFunction;
    formatter?: LabelFormatter;
    id?: string;
    offset?: number;
    position?: PositionType;
    valueAccessor?: RechartsFunction;
}

export type AxisDomain = string | number | ContentRenderer<any> | 'auto' | 'dataMin' | 'dataMax';

export interface XPadding {
    left: number;
    right: number;
}

/**
 * In the current lib, there is not actual implementation for XAxis.
 */
// NOTE: the lib's implementation doesn't inherits the event props (it's kept in this definition due to the previous typing definition has it).
export interface XAxisProps extends EventAttributes {
    allowDecimals?: boolean;
    hide?: boolean;
    // The name of data displayed in the axis
    name?: string | number;
    // The unit of data displayed in the axis
    unit?: string | number;
    // The unique id of x-axis
    xAxisId?: string | number;
    domain?: Readonly<[AxisDomain, AxisDomain]>;
    // The key of data displayed in the axis
    dataKey?: DataKey;
    // The width of axis which is usually calculated internally
    width?: number;
    // The height of axis, which need to be set by user
    height?: number;
    // Rotation of tick labels
    angle?: number;
    // X offset of tick label
    dx?: number;
    // Y offset of tick label
    dy?: number;
    mirror?: boolean;
    // The orientation of axis
    orientation?: 'top' | 'bottom';
    type?: 'number' | 'category';
    // Ticks can be any type when the axis is the type of category
    // Ticks must be numbers when the axis is the type of number
    ticks?: ReadonlyArray<any>;
    // The count of ticks
    tickCount?: number;
    // The formatter function of tick
    tickFormatter?: TickFormatterFunction;
    padding?: XPadding;
    allowDataOverflow?: boolean;
    scale?: ScaleType | RechartsFunction;
    tick?: boolean | ContentRenderer<any> | object | React.ReactElement;
    axisLine?: boolean | object;
    tickLine?: boolean | object;
    minTickGap?: number;
    tickSize?: number;
    // The margin between tick line and the label
    tickMargin?: number;
    interval?: AxisInterval;
    textAnchor?: string;
    reversed?: boolean;
    // see label section at http://recharts.org/#/en-US/api/XAxis
    label?: string | number | Label | LabelProps;
    allowDuplicatedCategory?: boolean;
    stroke?: string;
}

export class XAxis extends React.Component<XAxisProps> { }

export interface YPadding {
    top: number;
    bottom: number;
}

// NOTE: the lib's implementation doesn't inherits the event props (it's kept in this definition due to the previous typing definition has it).
export interface YAxisProps extends EventAttributes {
    allowDecimals?: boolean;
    hide?: boolean;
    // The name of data displayed in the axis
    name?: string | number;
    // The unit of data displayed in the axis
    unit?: string | number;
    // The unique id of y-axis
    yAxisId?: string | number;
    domain?: Readonly<[AxisDomain, AxisDomain]>;
    // The key of data displayed in the axis
    dataKey?: DataKey;
    // Ticks can be any type when the axis is the type of category
    // Ticks must be numbers when the axis is the type of number
    ticks?: ReadonlyArray<any>;
    // The count of ticks
    tickCount?: number;
    // Rotation of tick labels
    angle?: number;
    // X offset of tick label
    dx?: number;
    // Y offset of tick label
    dy?: number;
    // The formatter function of tick
    tickFormatter?: TickFormatterFunction;
    // The width of axis, which need to be set by user
    width?: number;
    // The height of axis which is usually calculated in Chart
    height?: number;
    mirror?: boolean;
    // The orientation of axis
    orientation?: 'left' | 'right';
    type?: 'number' | 'category';
    padding?: YPadding;
    allowDataOverflow?: boolean;
    scale?: ScaleType | RechartsFunction;
    tick?: boolean | ContentRenderer<any> | object | React.ReactElement;
    axisLine?: boolean | object;
    tickLine?: boolean | object;
    minTickGap?: number;
    tickSize?: number;
    // The margin between tick line and the label
    tickMargin?: number;
    interval?: AxisInterval;
    reversed?: boolean;
    // see label section at http://recharts.org/#/en-US/api/YAxis
    label?: string | number | Label | LabelProps;
    stroke?: string;
}

export class YAxis extends React.Component<YAxisProps> { }

export interface ZAxisProps {
    type?: 'number' | 'category';
    // The name of data displayed in the axis
    name?: string | number;
    // The unit of data displayed in the axis
    unit?: string | number;
    // The unique id of z-axis
    zAxisId?: string | number;
    // The key of data displayed in the axis
    dataKey?: DataKey;
    // The range of axis
    range?: ReadonlyArray<number>;
    scale?: ScaleType | RechartsFunction;
}

export class ZAxis extends React.Component<ZAxisProps> { }

export interface SurfaceProps {
    width?: number;
    height?: number;
    viewBox?: ViewBox;
    className?: string;
    style?: object;
    children?: React.ReactNode[] | React.ReactNode;
}

export class Surface extends React.Component<SurfaceProps> { }

export interface SymbolsProps extends Partial<PresentationAttributes> {
    className?: string;
    type?: 'circle' | 'cross' | 'diamond' | 'square' | 'star' | 'triangle' | 'wye';
    cx?: number;
    cy?: number;
    size?: number;
    sizeType?: 'area' | 'diameter';
}

export class Symbols extends React.Component<SymbolsProps> { }

export interface CustomizedProps {
    component: ContentRenderer<any> | React.ReactElement;
}

export class Customized extends React.Component<CustomizedProps> { }
