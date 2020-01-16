// Type definitions for react-native-charts-wrapper 0.5
// Project: https://github.com/wuxudong/react-native-charts-wrapper
// Definitions by: Connor Love <https://github.com/dotconnor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component } from 'react';
import { ViewProps, NativeSyntheticEvent } from 'react-native';

export type EasingType =
    | 'Linear'
    | 'EaseInQuad'
    | 'EaseOutQuad'
    | 'EaseInOutQuad'
    | 'EaseInCubic'
    | 'EaseOutCubic'
    | 'EaseInOutCubic'
    | 'EaseInQuart'
    | 'EaseOutQuart'
    | 'EaseInOutQuart'
    | 'EaseInSine'
    | 'EaseOutSine'
    | 'EaseInOutSine'
    | 'EaseInExpo'
    | 'EaseOutExpo'
    | 'EaseInOutExpo'
    | 'EaseInCirc'
    | 'EaseOutCirc'
    | 'EaseInOutCirc'
    | 'EaseInElastic'
    | 'EaseOutElastic'
    | 'EaseInOutElastic'
    | 'EaseInBack'
    | 'EaseOutBack'
    | 'EaseInOutBack'
    | 'EaseInBounce'
    | 'EaseOutBounce'
    | 'EaseInOutBounce';
/**
 * use `processColor` from `react-native` to generate the corrsponding number from a color (named, hex, rgba, etc.).
 */
export type Color = number;

export type ValueFormatter = ('largeValue' | 'percent' | 'date') | string | string[];

export type AxisDependency = 'LEFT' | 'RIGHT';

export interface ChartDescription {
    text?: string;
    textColor?: Color;
    textSize?: number;

    positionX?: number;
    positionY?: number;
}

export interface ChartLegend {
    enabled?: boolean;
    textColor?: Color;
    textSize?: number;
    fontFamily?: string;
    fontStyle?: number;
    fontWeight?: number;

    wordWrapEnabled?: boolean;
    maxSizePercent?: number;

    horizontalAlignment?: 'LEFT' | 'CENTER' | 'RIGHT';
    verticalAlignment?: 'TOP' | 'CENTER' | 'BOTTOM';
    orientation?: 'HORIZONTAL' | 'VERTICAL';
    drawInside?: boolean;
    direction?: 'LEFT_TO_RIGHT' | 'RIGHT_TO_LEFT';

    form?: 'NONE' | 'EMPTY' | 'DEFAULT' | 'SQUARE' | 'CIRCLE' | 'LINE';
    formSize?: number;
    xEntrySpace?: number;
    yEntrySpace?: number;
    formToTextSpace?: number;

    custom?: {
        colors?: Color[];
        labels?: string[];
    };
}

export interface Axis {
    enabled?: boolean;
    drawLabels?: boolean;
    drawAxisLines?: boolean;
    drawGridLines?: boolean;

    textColor?: Color;
    textSize?: number;
    fontFamily?: string;
    fontStyle?: string;
    fontWeight?: number;
    gridColor?: Color;
    gridLineWidth?: number;
    axisLineColor?: Color;
    axisLineWidth?: number;
    gridDashedLine?: {
        lineLength?: number;
        spaceLength?: number;
        phase?: number;
    };

    limitLines?: Array<{
        limit: number;
        label?: string;
        lineColor?: Color;
        lineWidth?: number;
        valueTextColor?: Color;
        valueFont?: string;
        labelPosition?: 'LEFT_TOP' | 'LEFT_BOTTOM' | 'RIGHT_TOP' | 'RIGHT_BOTTOM';
        lineDashPhase?: number;
        lineDashLengths?: number[];
    }>;
    drawLimitLinesBehindData?: boolean;

    axisMaximum?: number;
    axisMinimum?: number;
    granularity?: number;
    granularityEnabled?: boolean;

    labelCount?: number;
    labelCountForce?: boolean;

    centerAxisLabels?: boolean;

    valueFormatter?: ValueFormatter;

    valueFormatterPattern?: string;
    since?: number;
    timeUnit?: 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS';
}

export interface xAxis extends Axis {
    labelRotationAngle?: number;
    avoidFirstLastClipping?: boolean;
    position?: 'TOP' | 'BOTTOM' | 'BOTH_SIDED' | 'TOP_INSIDE' | 'BOTTOM_INSIDE';
    yOffset?: number;
}

export interface yAxis extends Axis {
    inverted?: boolean;
    spaceTop?: number;
    spaceBottom?: number;

    position?: 'OUTSIDE_CHART' | 'INSIDE_CHART';

    maxWidth?: number;
    minWidth?: number;

    zeroLine?: {
        enabled?: boolean;
        lineWidth?: number;
        lineColor?: Color;
    };
}

export interface Offsets {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
}

export interface ChartBase extends ViewProps {
    animation?: {
        durationX?: number;
        durationY?: number;
        easingX?: EasingType;
        easingY?: EasingType;
    };

    chartBackgroundColor?: Color;
    logEnabled?: boolean;
    noDataText?: string;

    touchEnabled?: boolean;
    dragDecelerationEnabled?: boolean;
    dragDecelerationFrictionCoef?: number;

    highlightPerTapEnabled?: boolean;
    chartDescription?: ChartDescription;

    legend?: ChartLegend;

    xAxis?: xAxis;

    marker?: {
        enabled?: boolean;
        digits?: number;
        markerColor?: Color;
        textColor?: Color;
        textSize?: number;
    };

    highlights?: Array<{
        x: number;
        dataSetIndex?: number;
        dataIndex?: number;
        y?: number;
        stackIndex?: number;
    }>;

    onSelect?: (event: ChartSelectEvent) => void;
    onChange?: (event: ChartChangeEvent) => void;
}
export interface BarLineChartBase extends ChartBase {
    maxHighlightDistance?: number;
    drawGridBackground?: boolean;
    gridBackgroundColor?: number;

    drawBorders?: boolean;
    borderColor?: Color;
    borderWidth?: number;

    minOffset?: number;
    maxVisibleValueCount?: number;
    visibleRange?: {
        x?: {
            min?: number;
            max?: number;
        };
        y?: {
            left?: {
                min?: number;
                max?: number;
            };
            right?: {
                min?: number;
                max?: number;
            };
        };
    };
    autoScaleMinMaxEnabled?: boolean;
    keepPositionOnRotation?: boolean;

    highlightPerDragEnabled?: boolean;

    scaleEnabled?: boolean;
    scaleXEnabled?: boolean;
    scaleYEnabled?: boolean;
    dragEnabled?: boolean;
    pinchZoom?: boolean;
    doubleTapToZoomEnabled?: boolean;

    yAxis?: {
        left?: yAxis;
        right?: yAxis;
    };
    zoom?: {
        scaleX: number;
        scaleY: number;
        xValue: number;
        yValue: number;
        axisDependency?: AxisDependency;
    };

    viewPortOffsets?: Offsets;
    extraOffsets?: Offsets;

    group?: string;
    identifier?: string;
    syncX?: boolean;
    syncY?: boolean;
}

export interface PieRadarChartBase extends ChartBase {
    minOffset?: number;
    rotationEnabled?: boolean;
    rotationAngle?: number;
}

export interface LineValue {
    x?: number;
    y: number;
    marker?: string;
}

export interface CommonDatasetConfig {
    color?: Color;
    colors?: Color[];
    highlightEnabled?: boolean;
    drawValues?: boolean;
    valueTextSize?: number;
    valueTextColor?: Color;
    visible?: boolean;
    valueFormatter?: ValueFormatter;
    axisDependency?: AxisDependency;
}

export interface BarLineScatterCandleBubbleConfig {
    highlightColor?: Color;
}

export interface LineScatterCandleRadarConfig {
    drawVerticalHighlightIndicator?: boolean;
    drawHorizontalHighlightIndicator?: boolean;
    highlightLineWidth?: number;
    drawHighlightIndicators?: boolean;
}

export interface LineRadarConfig {
    fillGradient?: {
        colors?: Color[];
        positions?: number[];
        angle?: number;
        orientation?: 'TOP_BOTTOM' | 'TR_BL' | 'RIGHT_LEFT' | 'BR_TL' | 'BOTTOM_TOP' | 'BL_TR' | 'LEFT_RIGHT' | 'TL_BR';
    };
    fillColor?: Color;
    fillAlpha?: number;
    drawFilled?: boolean;
    lineWidth?: number;
}

export interface LineDatasetConfig
    extends CommonDatasetConfig,
        BarLineScatterCandleBubbleConfig,
        LineScatterCandleRadarConfig,
        LineRadarConfig {
    circleRadius?: number;
    drawCircles?: boolean;
    mode?: 'LINEAR' | 'STEPPED' | 'CUBIC_BEZIER' | 'HORIZONTAL_BEZIER';
    drawCubicIntensity?: number;
    circleColor?: Color;
    circleColors?: Color[];
    circleHoleColor?: Color;
    drawCircleHole?: boolean;
    dashedLine?: {
        lineLength: number;
        spaceLength: number;
        phase?: number;
    };
}

export interface Dataset {
    label?: string;
}

export interface LineDataset extends Dataset {
    values?: Array<number | LineValue>;
    config?: LineDatasetConfig;
}
export interface LineData {
    dataSets?: LineDataset[];
}

export type ChartSelectEvent = NativeSyntheticEvent<{ x: number; y: number } | null>;
export type ChartChangeEvent = NativeSyntheticEvent<{
    action: string;
    scaleX?: number;
    scaleY?: number;
    centerX?: number;
    centerY?: number;

    left?: number;
    bottom?: number;
    right?: number;
    top?: number;
}>;
export interface LineChartProps extends BarLineChartBase {
    data: LineData;
}
export class LineChart extends Component<LineChartProps> {}

export interface BarValue {
    x?: number;
    y?: number | number[];
    marker?: string | string[];
}

export interface BarDatasetConfig extends CommonDatasetConfig, BarLineScatterCandleBubbleConfig {
    barShadowColor?: Color;
    highlightAlpha?: number;
    stackLabels?: string[];
}

export interface BarDataset extends Dataset {
    values?: Array<BarValue | number | number[]>;
    config?: BarDatasetConfig;
}

export interface BarData {
    dataSets?: BarDataset[];

    config?: {
        barWidth?: number;
        group?: {
            fromX: number;
            groupSpace: number;
            barSpace: number;
        };
    };
}

export interface BarChartProps extends BarLineChartBase {
    drawValueAboveBar?: boolean;
    drawBarShadow?: boolean;
    highlightFullBarEnabled?: boolean;

    data: BarData;
}
export class BarChart extends Component<BarChartProps> {}

export interface BubbleValue {
    x?: number;
    y: number;
    size: number;
    marker?: string;
}

export interface BubbleDatasetConfig extends CommonDatasetConfig, BarLineScatterCandleBubbleConfig {
    highlightCircleWidth?: number;
}

export interface BubbleDataset extends Dataset {
    values?: BubbleValue[];
    label: string;
    config?: BubbleDatasetConfig;
}

export interface BubbleData {
    dataSets?: BubbleDataset[];
}

export interface BubbleChartProps extends BarLineChartBase {
    data?: BubbleData;
}

export class BubbleChart extends Component<BubbleChartProps> {}

export interface CandleStickValue {
    x?: number;
    shadowH: number;
    shadowL: number;
    open: number;
    close: number;
    marker?: string;
}

export type CandleStickPaintStyle = 'FILL' | 'STROKE' | 'FILL_AND_STROKE';

export interface CandleStickDatasetConfig
    extends CommonDatasetConfig,
        BarLineScatterCandleBubbleConfig,
        LineScatterCandleRadarConfig {
    barSpace?: number;
    shadowWidth?: number;
    shadowColor?: Color;
    shadowColorSameAsCandle?: boolean;
    neutralColor?: Color;
    decreasingColor?: Color;
    decreasingPaintStyle?: CandleStickPaintStyle;
    increasingColor?: Color;
    increasingPaintStyle?: CandleStickPaintStyle;
}

export interface CandleStickDataset extends Dataset {
    values?: CandleStickValue[];
    label: string;
    config?: CandleStickDatasetConfig;
}

export interface CandleStickData {
    dataSets?: CandleStickDataset[];
}

export interface CandleStickChartProps extends BarLineChartBase {
    data?: CandleStickData;
}

export class CandleStickChart extends Component<CandleStickChartProps> {}

export type PieValuePosition = 'INSIDE_SLICE' | 'OUTSIDE_SLICE';

export interface PieDatasetConfig extends CommonDatasetConfig {
    sliceSpace?: number;
    selectionShift?: number;
    xValuePosition?: PieValuePosition;
    yValuePosition?: PieValuePosition;
    valueLinePart1Length?: number;
    valueLinePart2Length?: number;
    valueLineColor?: Color;
    valueLineWidth?: number;
    valueLinePart1OffsetPercentage?: number;
    valueLineVariableLength?: boolean;
}

export interface PieValue {
    value: number;
    label?: string;
}

export interface PieDataset extends Dataset {
    values?: Array<PieValue | number>;
    label: string;
    config?: PieDatasetConfig;
}

export interface PieData {
    dataSets?: PieDataset[];
}

export interface PieChartProps extends PieRadarChartBase {
    drawEntryLabels?: boolean;
    usePercentValues?: boolean;

    centerText?: string;
    styledCenterText?: {
        text?: string;
        color?: Color;
        size?: number;
    };
    centerTextRadiusPercent?: number;
    holeRadius?: number;
    holeColor?: Color;
    transparentCircleRadius?: number;
    transparentCircleColor?: Color;

    entryLabelColor?: Color;
    entryLabelTextSize?: number;
    maxAngle?: number;

    data?: PieData;
}

export class PieChart extends Component<PieChartProps> {}

export interface RadarDatasetConfig extends CommonDatasetConfig, LineScatterCandleRadarConfig, LineRadarConfig {}

export interface RadarDataset extends Dataset {
    values?: Array<{ value: number } | number>;
    label: string;
    config?: RadarDatasetConfig;
}

export interface RadarData {
    dataSets?: RadarDataset[];
    labels?: string[];
}

export interface RadarChartProps extends PieRadarChartBase {
    yAxis?: yAxis;

    drawWeb?: boolean;
    skipWebLineCount?: number;

    webLineWidth?: number;
    webLineWidthInner?: number;
    webAlpha?: number;
    webColor?: Color;
    webColorInner?: Color;

    data?: RadarData;
}

export class RadarChart extends Component<RadarChartProps> {}

export interface ScatterDatasetConfig extends CommonDatasetConfig, BarLineScatterCandleBubbleConfig, LineScatterCandleRadarConfig {
    scatterShapeSize?: number;
    scatterShape?: "SQUARE" | "CIRCLE" | "TRIANGLE" | "CROSS" | "X";
    scatterShapeHoleColor?: Color;
    scatterShapeHoleRadius?: number;
}

export interface ScatterDataset extends Dataset {
    values?: Array<LineValue | number>;
    label: string;
    config?: ScatterDatasetConfig;
}

export interface ScatterData {
    dataSets: ScatterDataset[];
}

export interface ScatterChartProps extends BarLineChartBase {
    data?: ScatterData;
}

export class ScatterChart extends Component<ScatterChartProps> {}

export interface CombinedData {
    lineData?: LineData;
    barData?: BarData;
    scatterData?: ScatterData;
    candleData?: CandleStickData;
    bubbleData?: BubbleData;
}

export interface CombinedChartProps extends BarLineChartBase {
    drawOrder?: Array<("BAR" | "BUBBLE" | "LINE" | "CANDLE" | "SCATTER")>;
    drawValueAboveBar?: boolean;
    highlightFullBarEnabled?: boolean;
    drawBarShadow?: boolean;
    data?: CombinedData;
}

export class CombinedChart extends Component<CombinedChartProps> {}

export class HorizontalBarChart extends Component<BarChartProps> {}
