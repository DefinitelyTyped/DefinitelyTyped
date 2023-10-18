import { Component } from "react";
import { ImageResolvedAssetSource, NativeSyntheticEvent, processColor, ViewProps } from "react-native";

export type EasingType =
    | "Linear"
    | "EaseInQuad"
    | "EaseOutQuad"
    | "EaseInOutQuad"
    | "EaseInCubic"
    | "EaseOutCubic"
    | "EaseInOutCubic"
    | "EaseInQuart"
    | "EaseOutQuart"
    | "EaseInOutQuart"
    | "EaseInSine"
    | "EaseOutSine"
    | "EaseInOutSine"
    | "EaseInExpo"
    | "EaseOutExpo"
    | "EaseInOutExpo"
    | "EaseInCirc"
    | "EaseOutCirc"
    | "EaseInOutCirc"
    | "EaseInElastic"
    | "EaseOutElastic"
    | "EaseInOutElastic"
    | "EaseInBack"
    | "EaseOutBack"
    | "EaseInOutBack"
    | "EaseInBounce"
    | "EaseOutBounce"
    | "EaseInOutBounce";
/**
 * use `processColor` from `react-native` to generate the corresponding color value from a color (named, hex, rgba, etc.).
 */
export type Color = ReturnType<typeof processColor>;

export type ValueFormatter = ("largeValue" | "percent" | "date") | string | string[];

export type AxisDependency = "LEFT" | "RIGHT";

export interface ChartDescription {
    text?: string | undefined;
    textColor?: Color | undefined;
    textSize?: number | undefined;

    positionX?: number | undefined;
    positionY?: number | undefined;
}

export interface ChartLegend {
    enabled?: boolean | undefined;
    textColor?: Color | undefined;
    textSize?: number | undefined;
    fontFamily?: string | undefined;
    fontStyle?: number | undefined;
    fontWeight?: number | undefined;

    wordWrapEnabled?: boolean | undefined;
    maxSizePercent?: number | undefined;

    horizontalAlignment?: "LEFT" | "CENTER" | "RIGHT" | undefined;
    verticalAlignment?: "TOP" | "CENTER" | "BOTTOM" | undefined;
    orientation?: "HORIZONTAL" | "VERTICAL" | undefined;
    drawInside?: boolean | undefined;
    direction?: "LEFT_TO_RIGHT" | "RIGHT_TO_LEFT" | undefined;

    form?: "NONE" | "EMPTY" | "DEFAULT" | "SQUARE" | "CIRCLE" | "LINE" | undefined;
    formSize?: number | undefined;
    xEntrySpace?: number | undefined;
    yEntrySpace?: number | undefined;
    formToTextSpace?: number | undefined;

    custom?:
        | {
            colors?: Color[] | undefined;
            labels?: string[] | undefined;
        }
        | undefined;
}

export interface AxisLimitLine {
    limit: number;
    label?: string | undefined;
    lineColor?: Color | undefined;
    lineWidth?: number | undefined;
    valueTextColor?: Color | undefined;
    valueFont?: string | undefined;
    labelPosition?: "LEFT_TOP" | "LEFT_BOTTOM" | "RIGHT_TOP" | "RIGHT_BOTTOM" | undefined;
    lineDashPhase?: number | undefined;
    lineDashLengths?: number[] | undefined;
}

export interface Axis {
    enabled?: boolean | undefined;
    drawLabels?: boolean | undefined;
    drawAxisLine?: boolean | undefined;
    drawGridLines?: boolean | undefined;

    textColor?: Color | undefined;
    textSize?: number | undefined;
    fontFamily?: string | undefined;
    fontStyle?: string | undefined;
    fontWeight?: number | undefined;
    gridColor?: Color | undefined;
    gridLineWidth?: number | undefined;
    axisLineColor?: Color | undefined;
    axisLineWidth?: number | undefined;
    gridDashedLine?:
        | {
            lineLength?: number | undefined;
            spaceLength?: number | undefined;
            phase?: number | undefined;
        }
        | undefined;

    limitLines?: AxisLimitLine[] | undefined;
    drawLimitLinesBehindData?: boolean | undefined;

    axisMaximum?: number | undefined;
    axisMinimum?: number | undefined;
    granularity?: number | undefined;
    granularityEnabled?: boolean | undefined;

    labelCount?: number | undefined;
    labelCountForce?: boolean | undefined;

    centerAxisLabels?: boolean | undefined;

    valueFormatter?: ValueFormatter | undefined;

    valueFormatterPattern?: string | undefined;
    since?: number | undefined;
    timeUnit?: "MILLISECONDS" | "SECONDS" | "MINUTES" | "HOURS" | "DAYS" | undefined;
}

export interface xAxis extends Axis {
    labelRotationAngle?: number | undefined;
    avoidFirstLastClipping?: boolean | undefined;
    position?: "TOP" | "BOTTOM" | "BOTH_SIDED" | "TOP_INSIDE" | "BOTTOM_INSIDE" | undefined;
    yOffset?: number | undefined;
}

export interface yAxis extends Axis {
    inverted?: boolean | undefined;
    spaceTop?: number | undefined;
    spaceBottom?: number | undefined;

    position?: "OUTSIDE_CHART" | "INSIDE_CHART" | undefined;

    maxWidth?: number | undefined;
    minWidth?: number | undefined;

    zeroLine?:
        | {
            enabled?: boolean | undefined;
            lineWidth?: number | undefined;
            lineColor?: Color | undefined;
        }
        | undefined;
}

export interface Offsets {
    top?: number | undefined;
    left?: number | undefined;
    bottom?: number | undefined;
    right?: number | undefined;
}

export interface ChartBase extends ViewProps {
    animation?:
        | {
            durationX?: number | undefined;
            durationY?: number | undefined;
            easingX?: EasingType | undefined;
            easingY?: EasingType | undefined;
        }
        | undefined;

    chartBackgroundColor?: Color | undefined;
    logEnabled?: boolean | undefined;
    noDataText?: string | undefined;

    touchEnabled?: boolean | undefined;
    dragDecelerationEnabled?: boolean | undefined;
    dragDecelerationFrictionCoef?: number | undefined;

    highlightPerTapEnabled?: boolean | undefined;
    chartDescription?: ChartDescription | undefined;

    legend?: ChartLegend | undefined;

    xAxis?: xAxis | undefined;

    marker?:
        | {
            enabled?: boolean | undefined;
            digits?: number | undefined;
            markerColor?: Color | undefined;
            textColor?: Color | undefined;
            textSize?: number | undefined;
        }
        | undefined;

    highlights?:
        | Array<{
            x: number;
            dataSetIndex?: number | undefined;
            dataIndex?: number | undefined;
            y?: number | undefined;
            stackIndex?: number | undefined;
        }>
        | undefined;

    onSelect?: ((event: ChartSelectEvent) => void) | undefined;
    onChange?: ((event: ChartChangeEvent) => void) | undefined;
}
export interface BarLineChartBase extends ChartBase {
    maxHighlightDistance?: number | undefined;
    drawGridBackground?: boolean | undefined;
    gridBackgroundColor?: Color | undefined;

    drawBorders?: boolean | undefined;
    borderColor?: Color | undefined;
    borderWidth?: number | undefined;

    minOffset?: number | undefined;
    maxVisibleValueCount?: number | undefined;
    visibleRange?:
        | {
            x?:
                | {
                    min?: number | undefined;
                    max?: number | undefined;
                }
                | undefined;
            y?:
                | {
                    left?:
                        | {
                            min?: number | undefined;
                            max?: number | undefined;
                        }
                        | undefined;
                    right?:
                        | {
                            min?: number | undefined;
                            max?: number | undefined;
                        }
                        | undefined;
                }
                | undefined;
        }
        | undefined;
    autoScaleMinMaxEnabled?: boolean | undefined;
    keepPositionOnRotation?: boolean | undefined;

    highlightPerDragEnabled?: boolean | undefined;

    scaleEnabled?: boolean | undefined;
    scaleXEnabled?: boolean | undefined;
    scaleYEnabled?: boolean | undefined;
    dragEnabled?: boolean | undefined;
    pinchZoom?: boolean | undefined;
    doubleTapToZoomEnabled?: boolean | undefined;

    yAxis?:
        | {
            left?: yAxis | undefined;
            right?: yAxis | undefined;
        }
        | undefined;
    zoom?:
        | {
            scaleX: number;
            scaleY: number;
            xValue: number;
            yValue: number;
            axisDependency?: AxisDependency | undefined;
        }
        | undefined;

    viewPortOffsets?: Offsets | undefined;
    extraOffsets?: Offsets | undefined;

    group?: string | undefined;
    identifier?: string | undefined;
    syncX?: boolean | undefined;
    syncY?: boolean | undefined;
}

export interface PieRadarChartBase extends ChartBase {
    minOffset?: number | undefined;
    rotationEnabled?: boolean | undefined;
    rotationAngle?: number | undefined;
}

export interface LineValue {
    x?: number | undefined;
    y: number;
    marker?: string | undefined;
    icon?: LineIcon | undefined;
}

export interface LineIcon {
    height: number;
    width: number;
    bundle: ImageResolvedAssetSource;
}

export interface CommonDatasetConfig {
    color?: Color | undefined;
    colors?: Color[] | undefined;
    highlightEnabled?: boolean | undefined;
    drawValues?: boolean | undefined;
    valueTextSize?: number | undefined;
    valueTextColor?: Color | undefined;
    visible?: boolean | undefined;
    valueFormatter?: ValueFormatter | undefined;
    axisDependency?: AxisDependency | undefined;
}

export interface BarLineScatterCandleBubbleConfig {
    highlightColor?: Color | undefined;
}

export interface LineScatterCandleRadarConfig {
    drawVerticalHighlightIndicator?: boolean | undefined;
    drawHorizontalHighlightIndicator?: boolean | undefined;
    highlightLineWidth?: number | undefined;
    drawHighlightIndicators?: boolean | undefined;
}

export interface LineRadarConfig {
    fillGradient?:
        | {
            colors?: Color[] | undefined;
            positions?: number[] | undefined;
            angle?: number | undefined;
            orientation?:
                | "TOP_BOTTOM"
                | "TR_BL"
                | "RIGHT_LEFT"
                | "BR_TL"
                | "BOTTOM_TOP"
                | "BL_TR"
                | "LEFT_RIGHT"
                | "TL_BR"
                | undefined;
        }
        | undefined;
    fillColor?: Color | undefined;
    fillAlpha?: number | undefined;
    drawFilled?: boolean | undefined;
    lineWidth?: number | undefined;
}

export interface LineDatasetConfig
    extends CommonDatasetConfig, BarLineScatterCandleBubbleConfig, LineScatterCandleRadarConfig, LineRadarConfig
{
    circleRadius?: number | undefined;
    drawCircles?: boolean | undefined;
    mode?: "LINEAR" | "STEPPED" | "CUBIC_BEZIER" | "HORIZONTAL_BEZIER" | undefined;
    drawCubicIntensity?: number | undefined;
    circleColor?: Color | undefined;
    circleColors?: Color[] | undefined;
    circleHoleColor?: Color | undefined;
    drawCircleHole?: boolean | undefined;
    dashedLine?:
        | {
            lineLength: number;
            spaceLength: number;
            phase?: number | undefined;
        }
        | undefined;
}

export interface Dataset {
    label?: string | undefined;
}

export interface LineDataset extends Dataset {
    values?: Array<number | LineValue> | undefined;
    config?: LineDatasetConfig | undefined;
}
export interface LineData {
    dataSets?: LineDataset[] | undefined;
}

export type ChartSelectEvent = NativeSyntheticEvent<{ x: number; y: number } | null>;
export type ChartChangeEvent = NativeSyntheticEvent<{
    action: string;
    scaleX?: number | undefined;
    scaleY?: number | undefined;
    centerX?: number | undefined;
    centerY?: number | undefined;

    left?: number | undefined;
    bottom?: number | undefined;
    right?: number | undefined;
    top?: number | undefined;
}>;
export interface LineChartProps extends BarLineChartBase {
    data: LineData;
}
export class LineChart extends Component<LineChartProps> {}

export interface BarValue {
    x?: number | undefined;
    y?: number | number[] | undefined;
    marker?: string | string[] | undefined;
}

export interface BarDatasetConfig extends CommonDatasetConfig, BarLineScatterCandleBubbleConfig {
    barShadowColor?: Color | undefined;
    highlightAlpha?: number | undefined;
    stackLabels?: string[] | undefined;
}

export interface BarDataset extends Dataset {
    values?: Array<BarValue | number | number[]> | undefined;
    config?: BarDatasetConfig | undefined;
}

export interface BarData {
    dataSets?: BarDataset[] | undefined;

    config?:
        | {
            barWidth?: number | undefined;
            group?:
                | {
                    fromX: number;
                    groupSpace: number;
                    barSpace: number;
                }
                | undefined;
        }
        | undefined;
}

export interface BarChartProps extends BarLineChartBase {
    drawValueAboveBar?: boolean | undefined;
    drawBarShadow?: boolean | undefined;
    highlightFullBarEnabled?: boolean | undefined;

    data: BarData;
}
export class BarChart extends Component<BarChartProps> {}

export interface BubbleValue {
    x?: number | undefined;
    y: number;
    size: number;
    marker?: string | undefined;
}

export interface BubbleDatasetConfig extends CommonDatasetConfig, BarLineScatterCandleBubbleConfig {
    highlightCircleWidth?: number | undefined;
}

export interface BubbleDataset extends Dataset {
    values?: BubbleValue[] | undefined;
    label: string;
    config?: BubbleDatasetConfig | undefined;
}

export interface BubbleData {
    dataSets?: BubbleDataset[] | undefined;
}

export interface BubbleChartProps extends BarLineChartBase {
    data?: BubbleData | undefined;
}

export class BubbleChart extends Component<BubbleChartProps> {}

export interface CandleStickValue {
    x?: number | undefined;
    shadowH: number;
    shadowL: number;
    open: number;
    close: number;
    marker?: string | undefined;
}

export type CandleStickPaintStyle = "FILL" | "STROKE" | "FILL_AND_STROKE";

export interface CandleStickDatasetConfig
    extends CommonDatasetConfig, BarLineScatterCandleBubbleConfig, LineScatterCandleRadarConfig
{
    barSpace?: number | undefined;
    shadowWidth?: number | undefined;
    shadowColor?: Color | undefined;
    shadowColorSameAsCandle?: boolean | undefined;
    neutralColor?: Color | undefined;
    decreasingColor?: Color | undefined;
    decreasingPaintStyle?: CandleStickPaintStyle | undefined;
    increasingColor?: Color | undefined;
    increasingPaintStyle?: CandleStickPaintStyle | undefined;
}

export interface CandleStickDataset extends Dataset {
    values?: CandleStickValue[] | undefined;
    label: string;
    config?: CandleStickDatasetConfig | undefined;
}

export interface CandleStickData {
    dataSets?: CandleStickDataset[] | undefined;
}

export interface CandleStickChartProps extends BarLineChartBase {
    data?: CandleStickData | undefined;
}

export class CandleStickChart extends Component<CandleStickChartProps> {}

export type PieValuePosition = "INSIDE_SLICE" | "OUTSIDE_SLICE";

export interface PieDatasetConfig extends CommonDatasetConfig {
    sliceSpace?: number | undefined;
    selectionShift?: number | undefined;
    xValuePosition?: PieValuePosition | undefined;
    yValuePosition?: PieValuePosition | undefined;
    valueLinePart1Length?: number | undefined;
    valueLinePart2Length?: number | undefined;
    valueLineColor?: Color | undefined;
    valueLineWidth?: number | undefined;
    valueLinePart1OffsetPercentage?: number | undefined;
    valueLineVariableLength?: boolean | undefined;
}

export interface PieValue {
    value: number;
    label?: string | undefined;
}

export interface PieDataset extends Dataset {
    values?: Array<PieValue | number> | undefined;
    label: string;
    config?: PieDatasetConfig | undefined;
}

export interface PieData {
    dataSets?: PieDataset[] | undefined;
}

export type PieChartSelectEvent = NativeSyntheticEvent<
    {
        label: string;
        value: number;
    } | null
>;

export interface PieChartProps extends Omit<PieRadarChartBase, "onSelect"> {
    drawEntryLabels?: boolean | undefined;
    usePercentValues?: boolean | undefined;

    centerText?: string | undefined;
    styledCenterText?:
        | {
            text?: string | undefined;
            color?: Color | undefined;
            size?: number | undefined;
            fontFamily?: string | undefined;
        }
        | undefined;
    centerTextRadiusPercent?: number | undefined;
    holeRadius?: number | undefined;
    holeColor?: Color | undefined;
    transparentCircleRadius?: number | undefined;
    transparentCircleColor?: Color | undefined;

    entryLabelColor?: Color | undefined;
    entryLabelTextSize?: number | undefined;
    entryLabelFontFamily?: string | undefined;

    onSelect?: ((event: PieChartSelectEvent) => void) | undefined;

    maxAngle?: number | undefined;

    data?: PieData | undefined;
}

export class PieChart extends Component<PieChartProps> {}

export interface RadarDatasetConfig extends CommonDatasetConfig, LineScatterCandleRadarConfig, LineRadarConfig {}

export interface RadarDataset extends Dataset {
    values?: Array<{ value: number } | number> | undefined;
    label: string;
    config?: RadarDatasetConfig | undefined;
}

export interface RadarData {
    dataSets?: RadarDataset[] | undefined;
    labels?: string[] | undefined;
}

export interface RadarChartProps extends PieRadarChartBase {
    yAxis?: yAxis | undefined;

    drawWeb?: boolean | undefined;
    skipWebLineCount?: number | undefined;

    webLineWidth?: number | undefined;
    webLineWidthInner?: number | undefined;
    webAlpha?: number | undefined;
    webColor?: Color | undefined;
    webColorInner?: Color | undefined;

    data?: RadarData | undefined;
}

export class RadarChart extends Component<RadarChartProps> {}

export interface ScatterDatasetConfig
    extends CommonDatasetConfig, BarLineScatterCandleBubbleConfig, LineScatterCandleRadarConfig
{
    scatterShapeSize?: number | undefined;
    scatterShape?: "SQUARE" | "CIRCLE" | "TRIANGLE" | "CROSS" | "X" | undefined;
    scatterShapeHoleColor?: Color | undefined;
    scatterShapeHoleRadius?: number | undefined;
}

export interface ScatterDataset extends Dataset {
    values?: Array<LineValue | number> | undefined;
    label: string;
    config?: ScatterDatasetConfig | undefined;
}

export interface ScatterData {
    dataSets: ScatterDataset[];
}

export interface ScatterChartProps extends BarLineChartBase {
    data?: ScatterData | undefined;
}

export class ScatterChart extends Component<ScatterChartProps> {}

export interface CombinedData {
    lineData?: LineData | undefined;
    barData?: BarData | undefined;
    scatterData?: ScatterData | undefined;
    candleData?: CandleStickData | undefined;
    bubbleData?: BubbleData | undefined;
}

export interface CombinedChartProps extends BarLineChartBase {
    drawOrder?: Array<"BAR" | "BUBBLE" | "LINE" | "CANDLE" | "SCATTER"> | undefined;
    drawValueAboveBar?: boolean | undefined;
    highlightFullBarEnabled?: boolean | undefined;
    drawBarShadow?: boolean | undefined;
    data?: CombinedData | undefined;
}

export class CombinedChart extends Component<CombinedChartProps> {}

export class HorizontalBarChart extends Component<BarChartProps> {}
