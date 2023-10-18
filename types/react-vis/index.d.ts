import {
    Component,
    CSSProperties,
    FC,
    MouseEvent,
    MouseEventHandler,
    PureComponent,
    ReactChild,
    ReactNode,
    TouchEventHandler,
    WheelEventHandler,
} from "react";

export type Scale = "linear" | "ordinal" | "category" | "literal" | "log" | "time" | "time-utc";

export interface AbstractSeriesPoint {
    [key: string]: any;
}

export type RVMouseEventHandler = MouseEventHandler<HTMLElement>;
export type RVTouchEventHandler = TouchEventHandler<HTMLElement>;
export type RVWheelEventHandler = WheelEventHandler<HTMLElement>;

export type RVItemEventHandler = (item: any, index: number, event: MouseEvent<HTMLElement>) => void;

export type RVValueEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, event: MouseEvent<HTMLElement>) => void;

export interface RVNearestXData<T extends AbstractSeriesPoint> {
    event: MouseEvent<HTMLElement>;
    innerX: T["x"];
    index: number;
}
export type RVNearestXEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, data: RVNearestXData<T>) => void;

export interface RVNearestXYData<T extends AbstractSeriesPoint> {
    event: MouseEvent<HTMLElement>;
    innerX: T["x"];
    innerY: T["y"];
    index: number;
}
export type RVNearestXYEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, data: RVNearestXYData<T>) => void;

export type RVGet<T extends AbstractSeriesPoint, K extends keyof T> = (datapoint: T) => T[K];
export type RVGetNull<T extends AbstractSeriesPoint> = (datapoint: T) => any;
export type RVGetAlignStyle = (align: { horizontal: string; vertical: string }, x: number, y: number) => CSSProperties;

export type RVTickFormat = (tick: any) => string;

export interface LineSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
    color?: string | number | undefined;
}

export interface LineMarkSeriesPoint extends AbstractSeriesPoint {
    x: string | number | Date;
    y: string | number | Date;
    color?: string | number | undefined;
    opacity?: string | number | undefined;
    stroke?: string | number | undefined;
    fill?: string | number | undefined;
    size?: string | number | undefined;
}

export interface MarkSeriesPoint extends AbstractSeriesPoint {
    x: string | number | Date;
    y: string | number | Date;
    color?: string | number | undefined;
    opacity?: string | number | undefined;
    stroke?: string | number | undefined;
    fill?: string | number | undefined;
    size?: string | number | undefined;
}

export interface HorizontalBarSeriesPoint extends AbstractSeriesPoint {
    x: string | number;
    y: string | number;
    color?: string | number | undefined;
    opacity?: string | number | undefined;
    stroke?: string | number | undefined;
    fill?: string | number | undefined;
}

export interface VerticalBarSeriesPoint extends AbstractSeriesPoint {
    x: string | number;
    y: number;
    color?: string | number | undefined;
    opacity?: string | number | undefined;
    stroke?: string | number | undefined;
    fill?: string | number | undefined;
}

export interface ArcSeriesPoint extends AbstractSeriesPoint {
    angle0: number;
    angle: number;
    radius0: number;
    radius: number;
    color?: string | number | undefined;
    opacity?: string | number | undefined;
    stroke?: string | number | undefined;
    fill?: string | number | undefined;
}

export interface AreaSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
    y0?: number | undefined;
}

export interface ContourSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
}

export interface HeatmapSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
    color?: string | number | undefined;
}

export interface LabelSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
    label: string;
    xOffset?: number | undefined;
    yOffset?: number | undefined;
    rotation?: number | undefined;
}

export interface CustomSVGSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
}

export interface PolygonSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
}

export interface RectSeriesPoint extends AbstractSeriesPoint {
    x: string | number | Date;
    x0: string | number | Date;
    y: string | number | Date;
    y0: string | number | Date;
    color?: string | number | undefined;
    opacity?: string | number | undefined;
    stroke?: string | number | undefined;
    fill?: string | number | undefined;
}
export type HorizontalRectSeriesPoint = RectSeriesPoint;
export type VerticalRectSeriesPoint = RectSeriesPoint;

export interface WhiskerSeriesPoint extends AbstractSeriesPoint {
    x: string | number | Date;
    y: string | number | Date;
    color?: string | number | undefined;
    opacity?: string | number | undefined;
    stroke?: string | number | undefined;
    size?: string | number | undefined;
    xVariance?: string | number | undefined;
    yVariance?: string | number | undefined;
}

export interface TreemapPoint extends AbstractSeriesPoint {
    title: string;
    size?: number | undefined;
    opacity?: number | undefined;
    color?: string | number | undefined;
    style?: CSSProperties | undefined;
    children?: TreemapPoint[] | undefined;
}

export interface ParallelCoordinatesPoint extends AbstractSeriesPoint {
    [key: string]: number;
}

export interface RadialChartPoint extends AbstractSeriesPoint {
    angle: number;
    radius?: number | undefined;
    label?: string | undefined;
    subLabel?: string | undefined;
    color?: string | undefined;
    style?: object | undefined;
    className?: string | undefined;
}

export interface SankeyPoint extends AbstractSeriesPoint {
    name: string;
    color?: string | undefined;
    opacity?: number | undefined;
    key?: string | undefined;
}

export interface SunburstPoint extends AbstractSeriesPoint {
    title: string;
    size?: number | undefined;
    color?: number | string | undefined;
    label?: string | undefined;
    labelStyle?: CSSProperties | undefined;
    dontRotateLabel?: boolean | undefined;
    children?: SunburstPoint[] | undefined;
}

export interface VoronoiPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
}

export type DecorativeAxisPoint = AbstractSeriesPoint;
export type RadarChartPoint = AbstractSeriesPoint;

export interface AbstractSeriesProps<T extends AbstractSeriesPoint> {
    _colorValue?: T["_color"] | undefined;
    _opacityValue?: T["_opacity"] | undefined;
    _sizeValue?: T["_size"] | undefined;
    _xValue?: T["_x"] | undefined;
    _yValue?: T["_y"] | undefined;
    animation?: string | AnimationParam | boolean | undefined;
    color?: string | number | undefined;
    colorBaseValue?: T["color"] | undefined;
    colorDistance?: number | undefined;
    colorDomain?: Array<T["color"]> | undefined;
    colorRange?: Array<T["color"]> | undefined;
    colorType?: Scale | undefined;
    className?: string | undefined;
    data?: Array<T | any[]> | undefined;
    fill?: string | number | undefined;
    getColor0?: RVGet<T, "color0"> | undefined;
    getColor?: RVGet<T, "color"> | undefined;
    getOpacity0?: RVGet<T, "opacity0"> | undefined;
    getOpacity?: RVGet<T, "opacity"> | undefined;
    getSize0?: RVGet<T, "size0"> | undefined;
    getSize?: RVGet<T, "size"> | undefined;
    getX0?: RVGet<T, "x0"> | undefined;
    getX?: RVGet<T, "x"> | undefined;
    getY0?: RVGet<T, "y0"> | undefined;
    getY?: RVGet<T, "y"> | undefined;
    height?: number | undefined;
    onNearestX?: RVNearestXEventHandler<T> | undefined;
    onNearestXY?: RVNearestXYEventHandler<T> | undefined;
    onSeriesClick?: RVMouseEventHandler | undefined;
    onSeriesMouseOut?: RVMouseEventHandler | undefined;
    onSeriesMouseOver?: RVMouseEventHandler | undefined;
    onSeriesRightClick?: RVMouseEventHandler | undefined;
    onValueClick?: RVValueEventHandler<T> | undefined;
    onValueMouseOut?: RVValueEventHandler<T> | undefined;
    onValueMouseOver?: RVValueEventHandler<T> | undefined;
    onValueRightClick?: RVValueEventHandler<T> | undefined;
    opacity?: number | undefined;
    opacityBaseValue?: T["opacity"] | undefined;
    opacityDistance?: number | undefined;
    opacityDomain?: Array<T["opacity"]> | undefined;
    opacityRange?: Array<T["opacity"]> | undefined;
    opacityType?: Scale | undefined;
    sizeBaseValue?: T["size"] | undefined;
    sizeDistance?: number | undefined;
    sizeDomain?: Array<T["size"]> | undefined;
    sizeRange?: Array<T["size"]> | undefined;
    sizeType?: Scale | undefined;
    stack?: boolean | undefined; // default: false
    stroke?: string | number | undefined;
    style?: CSSProperties | undefined; // default: {}
    width?: number | undefined;
    xBaseValue?: T["x"] | undefined;
    xDistance?: number | undefined;
    xDomain?: Array<T["x"]> | undefined;
    xRange?: Array<T["x"]> | undefined;
    xType?: Scale | undefined;
    yBaseValue?: T["y"] | undefined;
    yDistance?: number | undefined;
    yDomain?: Array<T["y"]> | undefined;
    yRange?: Array<T["y"]> | undefined;
    yType?: Scale | undefined;
}
export class AbstractSeries<T> extends PureComponent<T> {}

export interface LineSeriesProps extends AbstractSeriesProps<LineSeriesPoint> {
    strokeStyle?: "dashed" | "solid" | undefined; // default: 'solid'
    curve?: string | ((x: any) => any) | undefined; // default: null
    getNull?: RVGetNull<LineSeriesPoint> | undefined;
}
export class LineSeries extends AbstractSeries<LineSeriesProps> {}

export interface LineSeriesCanvasProps extends AbstractSeriesProps<LineSeriesPoint> {
    strokeWidth?: number | undefined; // default: 1
}
export class LineSeriesCanvas extends AbstractSeries<LineSeriesCanvasProps> {}

export interface HorizontalBarSeriesProps extends AbstractSeriesProps<HorizontalBarSeriesPoint> {
    barWidth: number;
}
export class HorizontalBarSeries extends AbstractSeries<HorizontalBarSeriesProps> {}

export interface HorizontalBarSeriesCanvasProps extends AbstractSeriesProps<HorizontalBarSeriesPoint> {
    barWidth: number;
}
export class HorizontalBarSeriesCanvas extends AbstractSeries<HorizontalBarSeriesCanvasProps> {}

export interface VerticalBarSeriesProps extends AbstractSeriesProps<VerticalBarSeriesPoint> {
    barWidth: number;
}
export class VerticalBarSeries extends AbstractSeries<VerticalBarSeriesProps> {}

export interface VerticalBarSeriesCanvasProps extends AbstractSeriesProps<VerticalBarSeriesPoint> {
    barWidth: number;
}
export class VerticalBarSeriesCanvas extends AbstractSeries<VerticalBarSeriesCanvasProps> {}

export interface VerticalRectSeriesProps extends AbstractSeriesProps<VerticalRectSeriesPoint> {}
export class VerticalRectSeries extends AbstractSeries<VerticalRectSeriesProps> {}

export interface VerticalRectSeriesCanvasProps extends AbstractSeriesProps<VerticalRectSeriesPoint> {}
export class VerticalRectSeriesCanvas extends AbstractSeries<VerticalRectSeriesCanvasProps> {}

export interface HorizontalRectSeriesProps extends AbstractSeriesProps<HorizontalRectSeriesPoint> {}
export class HorizontalRectSeries extends AbstractSeries<HorizontalRectSeriesProps> {}

export interface HorizontalRectSeriesCanvasProps extends AbstractSeriesProps<HorizontalRectSeriesPoint> {}
export class HorizontalRectSeriesCanvas extends AbstractSeries<HorizontalRectSeriesCanvasProps> {}

export interface LabelSeriesProps extends AbstractSeriesProps<LabelSeriesPoint> {
    allowOffsetToBeReversed?: boolean | undefined;
    marginLeft?: number | undefined;
    marginTop?: number | undefined;
    rotation?: number | undefined; // default: 0
    labelAnchorX?: string | undefined;
    labelAnchorY?: string | undefined;
}
export class LabelSeries extends AbstractSeries<LabelSeriesProps> {}

export interface PolygonSeriesProps extends AbstractSeriesProps<PolygonSeriesPoint> {}
export class PolygonSeries extends AbstractSeries<PolygonSeriesProps> {}

export interface RectSeriesProps extends AbstractSeriesProps<RectSeriesPoint> {
    linePosAttr?: string | undefined;
    valuePosAttr?: string | undefined;
    lineSizeAttr?: string | undefined;
    valueSizeAttr?: string | undefined;
}
export class RectSeries extends AbstractSeries<RectSeriesProps> {}

export interface RectSeriesCanvasProps extends AbstractSeriesProps<RectSeriesPoint> {}
export class RectSeriesCanvas extends AbstractSeries<RectSeriesCanvasProps> {}

export interface MarkSeriesProps extends AbstractSeriesProps<MarkSeriesPoint> {
    getNull?: RVGetNull<MarkSeriesPoint> | undefined;
    strokeWidth?: number | undefined;
}
export class MarkSeries extends AbstractSeries<MarkSeriesProps> {}

export interface MarkSeriesCanvasProps extends AbstractSeriesProps<MarkSeriesPoint> {}
export class MarkSeriesCanvas extends AbstractSeries<MarkSeriesCanvasProps> {}

export interface WhiskerSeriesProps extends AbstractSeriesProps<WhiskerSeriesPoint> {
    strokeWidth?: number | undefined; // default: 1
}
export class WhiskerSeries extends AbstractSeries<WhiskerSeriesProps> {}

export interface HeatmapSeriesProps extends AbstractSeriesProps<HeatmapSeriesPoint> {}
export class HeatmapSeries extends AbstractSeries<HeatmapSeriesProps> {}

export interface HexbinSeriesProps extends AbstractSeriesProps<ContourSeriesPoint> {
    radius?: number | undefined;
    xOffset?: number | undefined;
    yOffset?: number | undefined;
    sizeHexagonsWithCount?: boolean | undefined;
}
export class HexbinSeries extends AbstractSeries<HexbinSeriesProps> {}

export interface ContourSeriesProps extends AbstractSeriesProps<ContourSeriesPoint> {
    bandwidth?: number | undefined; // default: 40
    marginLeft?: number | undefined;
    marginTop?: number | undefined;
}
export class ContourSeries extends AbstractSeries<ContourSeriesProps> {}

export interface CustomSVGSeriesProps extends AbstractSeriesProps<CustomSVGSeriesPoint> {
    customComponent?: string | ((row: any) => any) | undefined; // default: 'circle'
    marginLeft?: number | undefined;
    marginTop?: number | undefined;
}
export class CustomSVGSeries extends AbstractSeries<CustomSVGSeriesProps> {}

export interface AreaSeriesProps extends AbstractSeriesProps<AreaSeriesPoint> {
    curve?: string | ((x: any) => any) | undefined; // default: null
    getNull?: RVGetNull<AreaSeriesPoint> | undefined;
}
export class AreaSeries extends AbstractSeries<AreaSeriesProps> {}

export interface ArcSeriesProps extends AbstractSeriesProps<ArcSeriesPoint> {
    _angleValue?: ArcSeriesPoint["_angle"] | undefined;
    _radiusValue?: ArcSeriesPoint["_radius"] | undefined;
    angleBaseValue?: ArcSeriesPoint["angle"] | undefined;
    angleDistance?: number | undefined;
    angleDomain?: Array<ArcSeriesPoint["angle"]> | undefined;
    angleRange?: Array<ArcSeriesPoint["angle"]> | undefined;
    angleType?: Scale | undefined;
    arcClassName?: string | undefined; // default: ''
    center?: { x?: number | undefined; y?: number | undefined } | undefined; // default: {'x':0,'y':0}
    getAngle0?: RVGet<ArcSeriesPoint, "angle0"> | undefined;
    getAngle?: RVGet<ArcSeriesPoint, "angle"> | undefined;
    getRadius0?: RVGet<ArcSeriesPoint, "radius0"> | undefined;
    getRadius?: RVGet<ArcSeriesPoint, "radius"> | undefined;
    radiusBaseValue?: ArcSeriesPoint["radius"] | undefined;
    radiusDistance?: number | undefined;
    radiusDomain?: Array<ArcSeriesPoint["radius"]> | undefined;
    radiusRange?: Array<ArcSeriesPoint["radius"]> | undefined;
    radiusType?: Scale | undefined;
}
export class ArcSeries extends AbstractSeries<ArcSeriesProps> {}

export interface LineMarkSeriesProps extends AbstractSeriesProps<LineMarkSeriesPoint> {
    size?: number;
    curve?: string | ((x: any) => any) | undefined; // default: null
    getNull?: RVGetNull<LineMarkSeriesPoint> | undefined;
    lineStyle?: CSSProperties | undefined; // default: {}
    markStyle?: CSSProperties | undefined; // default: {}
    strokeStyle?: "dashed" | "solid" | undefined; // default: 'solid'
    strokeWidth?: number;
}
export class LineMarkSeries extends AbstractSeries<LineMarkSeriesProps> {}

export interface LineMarkSeriesCanvasProps extends AbstractSeriesProps<LineMarkSeriesPoint> {}
export class LineMarkSeriesCanvas extends AbstractSeries<LineMarkSeriesCanvasProps> {}

export interface HighlightArea {
    bottom?: number | undefined;
    left?: number | undefined;
    right?: number | undefined;
    top?: number | undefined;
}
export interface HighlightProps extends AbstractSeriesProps<LineMarkSeriesPoint> {
    enableX?: boolean | undefined;
    enableY?: boolean | undefined;
    highlightHeight?: number | undefined;
    highlightWidth?: number | undefined;
    highlightX?: string | number | undefined;
    highlightY?: string | number | undefined;
    drag?: boolean | undefined;
    onBrushStart?: ((area: HighlightArea | null) => void) | undefined;
    onDragStart?: ((area: HighlightArea | null) => void) | undefined;
    onBrush?: ((area: HighlightArea | null) => void) | undefined;
    onDrag?: ((area: HighlightArea | null) => void) | undefined;
    onBrushEnd?: ((area: HighlightArea | null) => void) | undefined;
    onDragEnd?: ((area: HighlightArea | null) => void) | undefined;
}
export class Highlight extends AbstractSeries<HighlightProps> {}

export interface HintProps {
    marginTop?: number | undefined;
    marginLeft?: number | undefined;
    innerWidth?: number | undefined;
    innerHeight?: number | undefined;
    scales?: { [key: string]: any } | undefined;
    value?: { [key: string]: any } | undefined;
    format?: ((x: any) => Array<{ title: any; value: any }>) | undefined;
    style?: CSSProperties | undefined; // default: {}
    align?:
        | {
            horizontal?: "auto" | "left" | "right" | "leftEdge" | "rightEdge" | undefined;
            vertical?: "auto" | "bottom" | "top" | "bottomEdge" | "topEdge" | undefined;
        }
        | undefined; // default: {'horizontal':'auto','vertical':'auto'}
    getAlignStyle?: RVGetAlignStyle | undefined;
    orientation?: "bottomleft" | "bottomright" | "topleft" | "topright" | undefined;
}
export class Hint<T = any> extends PureComponent<HintProps & T> {}

export interface ChartLabelProps {
    className?: string | undefined;
    includeMargin?: boolean | undefined;
    style?: { [x: string]: any } | undefined;
    text: string;
    xPercent: number;
    yPercent: number;
}
export class ChartLabel<T = any> extends PureComponent<ChartLabelProps & T> {}

export interface BordersProps {
    style?:
        | {
            bottom?: CSSProperties | undefined;
            left?: CSSProperties | undefined;
            right?: CSSProperties | undefined;
            top?: CSSProperties | undefined;
        }
        | undefined; // default: {'all':{},'bottom':{},'left':{},'right':{},'top':{}}
    marginTop?: number | undefined;
    marginBottom?: number | undefined;
    marginLeft?: number | undefined;
    marginRight?: number | undefined;
    innerWidth?: number | undefined;
    innerHeight?: number | undefined;
}
export class Borders<T = any> extends PureComponent<BordersProps & T> {}

export interface CrosshairProps {
    className?: string | undefined;
    values?: any[] | undefined;
    series?: { [key: string]: any } | undefined;
    innerWidth?: number | undefined;
    innerHeight?: number | undefined;
    marginLeft?: number | undefined;
    marginTop?: number | undefined;
    orientation?: "left" | "right" | undefined;
    itemsFormat?: ((x: any) => Array<{ title: any; value: any }>) | undefined;
    titleFormat?: ((x: any) => { title: any; value: any }) | undefined;
    style?:
        | {
            line?: CSSProperties | undefined;
            title?: CSSProperties | undefined;
            box?: CSSProperties | undefined;
        }
        | undefined; // default: {'line':{},'title':{},'box':{}}
}
export class Crosshair<T = any> extends PureComponent<CrosshairProps & T> {}

export interface XYPlotProps {
    animation?: string | AnimationParam | boolean | undefined;
    className?: string | undefined; // default: ''
    dontCheckIfEmpty?: boolean | undefined;
    height: number;
    margin?: Margin | number | undefined;
    onClick?: RVMouseEventHandler | undefined;
    onDoubleClick?: RVMouseEventHandler | undefined;
    onMouseDown?: RVMouseEventHandler | undefined;
    onMouseUp?: RVMouseEventHandler | undefined;
    onMouseEnter?: RVMouseEventHandler | undefined;
    onMouseLeave?: RVMouseEventHandler | undefined;
    onMouseMove?: RVMouseEventHandler | undefined;
    onTouchStart?: RVTouchEventHandler | undefined;
    onTouchMove?: RVTouchEventHandler | undefined;
    onTouchEnd?: RVTouchEventHandler | undefined;
    onTouchCancel?: RVTouchEventHandler | undefined;
    onWheel?: RVWheelEventHandler | undefined;
    stackBy?: StackDirections | undefined;
    style?: CSSProperties | undefined;
    width: number;
}
export class XYPlot<T = any> extends Component<XYPlotProps & T> {}

export interface DecorativeAxisProps extends AbstractSeriesProps<DecorativeAxisPoint> {
    axisDomain: number[];
    axisEnd: {
        x?: number | string | undefined;
        y?: number | string | undefined;
    };
    axisStart: {
        x?: number | string | undefined;
        y?: number | string | undefined;
    };
    numberOfTicks?: number | undefined; // default: 10
    tickValue?: ((x: any) => string | number) | undefined;
    tickSize?: number | undefined; // default: 5
}
export class DecorativeAxis extends AbstractSeries<DecorativeAxisProps> {}

export interface XAxisProps {
    orientation?: "top" | "bottom" | undefined; // default: 'bottom'
    attr?: string | undefined; // default: 'x'
    attrAxis?: string | undefined; // default: 'y'
    width?: number | undefined;
    height?: number | undefined;
    top?: number | undefined;
    left?: number | undefined;
    title?: string | undefined;
    style?:
        | (CSSProperties & {
            line?: CSSProperties | undefined;
            ticks?: CSSProperties | undefined;
            text?: CSSProperties | undefined;
            title?: CSSProperties | undefined;
        })
        | undefined;
    className?: string | undefined;
    hideTicks?: boolean | undefined;
    hideLine?: boolean | undefined;
    on0?: boolean | undefined;
    tickLabelAngle?: number | undefined;
    tickSize?: number | undefined;
    tickSizeInner?: number | undefined;
    tickSizeOuter?: number | undefined;
    tickPadding?: number | undefined;
    tickValues?: any[] | undefined;
    tickFormat?: RVTickFormat | undefined;
    tickTotal?: number | undefined;
    marginTop?: number | undefined;
    marginBottom?: number | undefined;
    marginLeft?: number | undefined;
    marginRight?: number | undefined;
    innerWidth?: number | undefined;
    innerHeight?: number | undefined;
}
export const XAxis: FC<XAxisProps>;

export interface YAxisProps {
    orientation?: "left" | "right" | undefined; // default: 'left'
    attr?: string | undefined; // default: 'y'
    attrAxis?: string | undefined; // default: 'x'
    width?: number | undefined;
    height?: number | undefined;
    top?: number | undefined;
    left?: number | undefined;
    title?: string | undefined;
    style?:
        | (CSSProperties & {
            line?: CSSProperties | undefined;
            ticks?: CSSProperties | undefined;
            text?: CSSProperties | undefined;
            title?: CSSProperties | undefined;
        })
        | undefined;
    className?: string | undefined;
    hideTicks?: boolean | undefined;
    hideLine?: boolean | undefined;
    on0?: boolean | undefined;
    tickLabelAngle?: number | undefined;
    tickSize?: number | undefined;
    tickSizeInner?: number | undefined;
    tickSizeOuter?: number | undefined;
    tickPadding?: number | undefined;
    tickValues?: any[] | undefined;
    tickFormat?: RVTickFormat | undefined;
    tickTotal?: number | undefined;
    marginTop?: number | undefined;
    marginBottom?: number | undefined;
    marginLeft?: number | undefined;
    marginRight?: number | undefined;
    innerWidth?: number | undefined;
    innerHeight?: number | undefined;
}
export const YAxis: FC<YAxisProps>;

export interface CircularGridLinesProps {
    centerX?: number | undefined; // default: 0
    centerY?: number | undefined; // default: 0
    width?: number | undefined;
    height?: number | undefined;
    top?: number | undefined;
    left?: number | undefined;
    rRange?: number[] | undefined;
    style?: CSSProperties | undefined;
    tickValues?: number[] | undefined;
    tickTotal?: number | undefined;
    animation?: string | AnimationParam | boolean | undefined;
    marginTop?: number | undefined;
    marginBottom?: number | undefined;
    marginLeft?: number | undefined;
    marginRight?: number | undefined;
    innerWidth?: number | undefined;
    innerHeight?: number | undefined;
}
export class CircularGridLines<T = any> extends PureComponent<CircularGridLinesProps & T> {}

export interface GridLinesProps {
    direction?: "vertical" | "horizontal" | undefined; // default: 'vertical'
    attr: string;
    width?: number | undefined;
    height?: number | undefined;
    top?: number | undefined;
    left?: number | undefined;
    style?: CSSProperties | undefined;
    tickValues?: any[] | undefined;
    tickTotal?: number | undefined;
    animation?: string | AnimationParam | boolean | undefined;
    marginTop?: number | undefined;
    marginBottom?: number | undefined;
    marginLeft?: number | undefined;
    marginRight?: number | undefined;
    innerWidth?: number | undefined;
    innerHeight?: number | undefined;
}
export class GridLines<T = any> extends PureComponent<GridLinesProps & T> {}

export interface GradientDefsProps {
    className?: string | undefined; // default: ''
}
export class GradientDefs<T = any> extends PureComponent<GradientDefsProps & T> {}

export interface VerticalGridLinesProps {
    direction?: "vertical" | undefined; // default: 'vertical'
    attr?: string | undefined; // default: 'x'
    width?: number | undefined;
    height?: number | undefined;
    top?: number | undefined;
    left?: number | undefined;
    style?: CSSProperties | undefined;
    tickValues?: any[] | undefined;
    tickTotal?: number | undefined;
    animation?: string | AnimationParam | boolean | undefined;
    marginTop?: number | undefined;
    marginBottom?: number | undefined;
    marginLeft?: number | undefined;
    marginRight?: number | undefined;
    innerWidth?: number | undefined;
    innerHeight?: number | undefined;
}
export const VerticalGridLines: FC<VerticalGridLinesProps>;

export interface HorizontalGridLinesProps {
    direction?: "horizontal" | undefined; // default: 'horizontal'
    attr?: string | undefined; // default: 'y'
    width?: number | undefined;
    height?: number | undefined;
    top?: number | undefined;
    left?: number | undefined;
    style?: CSSProperties | undefined;
    tickValues?: any[] | undefined;
    tickTotal?: number | undefined;
    animation?: string | AnimationParam | boolean | undefined;
    marginTop?: number | undefined;
    marginBottom?: number | undefined;
    marginLeft?: number | undefined;
    marginRight?: number | undefined;
    innerWidth?: number | undefined;
    innerHeight?: number | undefined;
}
export const HorizontalGridLines: FC<HorizontalGridLinesProps>;

export interface VoronoiProps {
    className?: string | undefined; // default: ''
    extent: number[][];
    nodes: VoronoiPoint[];
    onBlur?: RVMouseEventHandler | undefined;
    onClick?: RVMouseEventHandler | undefined;
    onHover?: RVMouseEventHandler | undefined;
    onMouseDown?: RVMouseEventHandler | undefined;
    onMouseUp?: RVMouseEventHandler | undefined;
    x?: ((d: any) => number) | undefined;
    y?: ((d: any) => number) | undefined;
}
export const Voronoi: FC<VoronoiProps>;

export interface DiscreteColorLegendProps {
    className?: string | undefined; // default: ''
    items: Array<
        | {
            title: string;
            color?: string | undefined;
            disabled?: boolean | undefined;
            strokeDasharray?: string;
            strokeStyle?: string;
            strokeWidth?: number;
        }
        | string
        | ReactChild
    >;
    onItemClick?: RVMouseEventHandler | undefined;
    onItemMouseEnter?: RVItemEventHandler | undefined;
    onItemMouseLeave?: RVItemEventHandler | undefined;
    height?: number | undefined;
    width?: number | undefined;
    orientation?: "vertical" | "horizontal" | undefined; // default: 'vertical'
}
export const DiscreteColorLegend: FC<DiscreteColorLegendProps>;

export interface SearchableDiscreteColorLegendProps {
    className?: string | undefined; // default: ''
    items: Array<
        | {
            title: string;
            color?: string | undefined;
            disabled?: boolean | undefined;
        }
        | string
        | ReactChild
    >;
    onItemClick?: RVMouseEventHandler | undefined;
    onItemMouseEnter?: RVItemEventHandler | undefined;
    onItemMouseLeave?: RVItemEventHandler | undefined;
    height?: number | undefined;
    width?: number | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    searchText?: string | undefined; // default: ''
    onSearchChange?: ((x: any) => any) | undefined;
    searchPlaceholder?: string | undefined;
    searchFn?: ((items: any[], s: string) => any[]) | undefined;
}
export const SearchableDiscreteColorLegend: FC<SearchableDiscreteColorLegendProps>;

export interface ContinuousColorLegendProps {
    className?: string | undefined; // default: ''
    height?: number | undefined;
    endColor?: string | undefined; // default: '#FF9833'
    endTitle: number | string;
    midColor?: string | undefined;
    midTitle?: number | string | undefined;
    startColor?: string | undefined; // default: '#EF5D28'
    startTitle: number | string;
    width?: number | undefined;
}
export const ContinuousColorLegend: FC<ContinuousColorLegendProps>;

export interface ContinuousSizeLegendProps {
    className?: string | undefined; // default: ''
    circlesTotal?: number | undefined; // default: 10
    endSize?: number | undefined; // default: 20
    endTitle: number | string;
    height?: number | undefined;
    startSize?: number | undefined; // default: 2
    startTitle: number | string;
    width?: number | undefined;
}
export const ContinuousSizeLegend: FC<ContinuousSizeLegendProps>;
export interface Margin {
    left?: number | undefined;
    top?: number | undefined;
    right?: number | undefined;
    bottom?: number | undefined;
}
export interface AnimationParam {
    stiffness?: number | undefined;
    nonAnimatedProps?: string[] | undefined;
    damping?: number | undefined;
}
export interface TreemapProps {
    animation?: string | AnimationParam | boolean | undefined;
    className?: string | undefined; // default: ''
    data?: TreemapPoint | undefined; // default: {'children':[]}
    height: number;
    hideRootNode?: boolean | undefined; // default: false
    margin?: Margin | number | undefined; // default: {'left':40,'right':10,'top':10,'bottom':40}
    mode?:
        | "squarify"
        | "resquarify"
        | "slice"
        | "dice"
        | "slicedice"
        | "binary"
        | "circlePack"
        | "partition"
        | "partition-pivot"
        | undefined; // default: 'squarify'
    onLeafClick?: RVValueEventHandler<TreemapPoint> | undefined;
    onLeafMouseOver?: RVValueEventHandler<TreemapPoint> | undefined;
    onLeafMouseOut?: RVValueEventHandler<TreemapPoint> | undefined;
    useCirclePacking?: boolean | undefined;
    padding?: number | undefined; // default: 1
    sortFunction?: ((a: any, b: any, getSize: RVGet<TreemapPoint, "size">) => number) | undefined;
    width: number;
    getSize?: RVGet<TreemapPoint, "size"> | undefined;
    getColor?: RVGet<TreemapPoint, "color"> | undefined;
    color?: string | undefined;
}
export class Treemap<T = any> extends Component<TreemapProps & T> {}

export interface RadialChartProps {
    animation?: string | AnimationParam | boolean | undefined;
    className?: string | undefined; // default: ''
    colorType?: string | undefined; // default: 'category'
    data: Array<{
        angle?: number | undefined;
        className?: string | undefined;
        label?: string | undefined;
        radius?: number | undefined;
        style?: CSSProperties | undefined;
    }>;
    getAngle?: RVGet<RadialChartPoint, "angle"> | undefined;
    getAngle0?: RVGet<RadialChartPoint, "angle0"> | undefined;
    getRadius?: RVGet<RadialChartPoint, "radius"> | undefined;
    getRadius0?: RVGet<RadialChartPoint, "radius0"> | undefined;
    getLabel?: RVGet<RadialChartPoint, "label"> | undefined;
    height: number;
    labelsAboveChildren?: boolean | undefined;
    labelsStyle?: CSSProperties | undefined;
    margin?: Margin | number | undefined;
    onValueClick?: RVValueEventHandler<RadialChartPoint> | undefined;
    onValueMouseOver?: RVValueEventHandler<RadialChartPoint> | undefined;
    onValueMouseOut?: RVValueEventHandler<RadialChartPoint> | undefined;
    showLabels?: boolean | undefined;
    style?: CSSProperties | undefined;
    subLabel?: ((row: any) => string) | undefined;
    width: number;
}
export class RadialChart<T = any> extends Component<RadialChartProps & T> {}

export interface RadarChartProps {
    animation?: string | AnimationParam | boolean | undefined;
    className?: string | undefined; // default: ''
    colorType?: string | undefined; // default: 'category'
    colorRange?: string[] | undefined; // default: ['#12939A','#79C7E3','#1A3177','#FF9833','#EF5D28']
    data: RadarChartPoint[];
    domains: Array<{
        name: string;
        domain: number[];
        tickFormat?: RVTickFormat | undefined;
    }>;
    height: number;
    hideInnerMostValues?: boolean | undefined; // default: true
    margin?: Margin | number | undefined;
    startingAngle?: number | undefined; // default: 1.5707963267948966
    style?:
        | {
            axes?: CSSProperties | undefined;
            labels?: CSSProperties | undefined;
            polygons?: CSSProperties | undefined;
        }
        | undefined; // default: {'axes':{'line':{},'ticks':{},'text':{}},'labels':{'fontSize':10,'textAnchor':'middle'},'polygons':{'strokeWidth':0.5,'strokeOpacity':1,'fillOpacity':0.1}}
    tickFormat?: RVTickFormat | undefined;
    width: number;
}
export class RadarChart<T = any> extends Component<RadarChartProps & T> {}

export interface ParallelCoordinatesProps {
    animation?: string | AnimationParam | boolean | undefined;
    className?: string | undefined; // default: ''
    colorType?: string | undefined; // default: 'category'
    colorRange?: string[] | undefined; // default: ['#12939A','#79C7E3','#1A3177','#FF9833','#EF5D28']
    data: ParallelCoordinatesPoint[];
    domains: Array<{
        name: string;
        domain: number[];
        tickFormat?: RVTickFormat | undefined;
    }>;
    height: number;
    margin?: Margin | number | undefined;
    style?:
        | {
            axes?: CSSProperties | undefined;
            labels?: CSSProperties | undefined;
            lines?: CSSProperties | undefined;
        }
        | undefined; // default: {'axes':{'line':{},'ticks':{},'text':{}},'labels':{'fontSize':10,'textAnchor':'middle'},'lines':{'strokeWidth':1,'strokeOpacity':1}}
    showMarks?: boolean | undefined;
    tickFormat?: RVTickFormat | undefined;
    width: number;
}
export class ParallelCoordinates<T = any> extends Component<ParallelCoordinatesProps & T> {}

export interface SankeyProps {
    align?: "justify" | "left" | "right" | "center" | undefined; // default: 'justify'
    className?: string | undefined; // default: ''
    hasVoronoi?: boolean | undefined; // default: false
    height: number;
    hideLabels?: boolean | undefined; // default: false
    layout?: number | undefined; // default: 50
    links: Array<{
        source: number | { [key: string]: any };
        target: number | { [key: string]: any };
    }>;
    margin?: Margin | number | undefined; // default: {'top':20,'left':20,'right':20,'bottom':20}
    nodePadding?: number | undefined; // default: 10
    nodes: SankeyPoint[];
    nodeWidth?: number | undefined; // default: 10
    onValueMouseOver?: RVValueEventHandler<SankeyPoint> | undefined;
    onValueClick?: RVValueEventHandler<SankeyPoint> | undefined;
    onValueMouseOut?: RVValueEventHandler<SankeyPoint> | undefined;
    onLinkClick?: RVValueEventHandler<SankeyPoint> | undefined;
    onLinkMouseOver?: RVValueEventHandler<SankeyPoint> | undefined;
    onLinkMouseOut?: RVValueEventHandler<SankeyPoint> | undefined;
    style?:
        | {
            links?: CSSProperties | undefined;
            rects?: CSSProperties | undefined;
            labels?: CSSProperties | undefined;
        }
        | undefined; // default: {'links':{},'rects':{},'labels':{}}
    width: number;
}
export class Sankey<T = any> extends Component<SankeyProps & T> {}

export interface SunburstProps {
    animation?: string | AnimationParam | boolean | undefined;
    getAngle?: RVGet<SunburstPoint, "angle"> | undefined;
    getAngle0?: RVGet<SunburstPoint, "angle0"> | undefined;
    className?: string | undefined; // default: ''
    colorType?: string | undefined; // default: 'literal'
    data: SunburstPoint;
    height: number;
    hideRootNode?: boolean | undefined; // default: false
    getLabel?: RVGet<SunburstPoint, "label"> | undefined;
    onValueClick?: RVValueEventHandler<SunburstPoint> | undefined;
    onValueMouseOver?: RVValueEventHandler<SunburstPoint> | undefined;
    onValueMouseOut?: RVValueEventHandler<SunburstPoint> | undefined;
    getSize?: RVGet<SunburstPoint, "size"> | undefined;
    width: number;
}
export class Sunburst<T = any> extends Component<SunburstProps & T> {}

export type StackDirections = "x" | "y" | "radius" | "angle" | "color" | "fill" | "stroke" | "opacity" | "size";
export interface FlexibleXYPlotProps {
    animation?: string | AnimationParam | boolean | undefined;
    className?: string | undefined;
    dontCheckIfEmpty?: boolean | undefined;
    margin?: Margin | number | undefined;
    onClick?: RVMouseEventHandler | undefined;
    onDoubleClick?: RVMouseEventHandler | undefined;
    onMouseDown?: RVMouseEventHandler | undefined;
    onMouseUp?: RVMouseEventHandler | undefined;
    onMouseEnter?: RVMouseEventHandler | undefined;
    onMouseLeave?: RVMouseEventHandler | undefined;
    onMouseMove?: RVMouseEventHandler | undefined;
    onTouchStart?: RVTouchEventHandler | undefined;
    onTouchMove?: RVTouchEventHandler | undefined;
    onTouchEnd?: RVTouchEventHandler | undefined;
    onTouchCancel?: RVTouchEventHandler | undefined;
    onWheel?: RVWheelEventHandler | undefined;
    stackBy?: StackDirections | undefined;
    style?: CSSProperties | undefined;
}
export class FlexibleXYPlot<T = any> extends Component<FlexibleXYPlotProps & T> {}

export interface FlexibleWidthXYPlotProps {
    animation?: string | AnimationParam | boolean | undefined;
    className?: string | undefined;
    dontCheckIfEmpty?: boolean | undefined;
    margin?: Margin | number | undefined;
    onClick?: RVMouseEventHandler | undefined;
    onDoubleClick?: RVMouseEventHandler | undefined;
    onMouseDown?: RVMouseEventHandler | undefined;
    onMouseUp?: RVMouseEventHandler | undefined;
    onMouseEnter?: RVMouseEventHandler | undefined;
    onMouseLeave?: RVMouseEventHandler | undefined;
    onMouseMove?: RVMouseEventHandler | undefined;
    onTouchStart?: RVTouchEventHandler | undefined;
    onTouchMove?: RVTouchEventHandler | undefined;
    onTouchEnd?: RVTouchEventHandler | undefined;
    onTouchCancel?: RVTouchEventHandler | undefined;
    onWheel?: RVWheelEventHandler | undefined;
    stackBy?: StackDirections | undefined;
    style?: CSSProperties | undefined;
}
export class FlexibleWidthXYPlot<T = any> extends Component<FlexibleWidthXYPlotProps & T> {}

export interface FlexibleHeightXYPlotProps {
    animation?: string | AnimationParam | boolean | undefined;
    className?: string | undefined;
    dontCheckIfEmpty?: boolean | undefined;
    margin?: Margin | number | undefined;
    onClick?: RVMouseEventHandler | undefined;
    onDoubleClick?: RVMouseEventHandler | undefined;
    onMouseDown?: RVMouseEventHandler | undefined;
    onMouseUp?: RVMouseEventHandler | undefined;
    onMouseEnter?: RVMouseEventHandler | undefined;
    onMouseLeave?: RVMouseEventHandler | undefined;
    onMouseMove?: RVMouseEventHandler | undefined;
    onTouchStart?: RVTouchEventHandler | undefined;
    onTouchMove?: RVTouchEventHandler | undefined;
    onTouchEnd?: RVTouchEventHandler | undefined;
    onTouchCancel?: RVTouchEventHandler | undefined;
    onWheel?: RVWheelEventHandler | undefined;
    stackBy?: StackDirections | undefined;
    style?: CSSProperties | undefined;
}
export class FlexibleHeightXYPlot<T = any> extends Component<FlexibleHeightXYPlotProps & T> {}

export function makeHeightFlexible(component?: any): any;

export function makeVisFlexible(component?: any): any;

export function makeWidthFlexible(component?: any): any;

export const AxisUtils: {
    DIRECTION: {
        VERTICAL: "vertical";
        HORIZONTAL: "horizontal";
    };
    ORIENTATION: {
        TOP: "top";
        LEFT: "left";
        RIGHT: "right";
        BOTTOM: "bottom";
        VERTICAL: "vertical";
        HORIZONTAL: "horizontal";
    };
    getTicksTotalFromSize: (size?: any) => any;
    getTickValues: (scale?: any, tickTotal?: any, tickValues?: any) => any;
};

export const ScaleUtils: {
    extractScalePropsFromProps: (props?: any, attributes?: any) => any;
    getAttributeScale: (props?: any, attr?: any) => any;
    getAttributeFunctor: (props?: any, attr?: any) => any;
    getAttr0Functor: (props?: any, attr?: any) => any;
    getAttributeValue: (props?: any, attr?: any) => any;
    getDomainByAccessor: (allData?: any, accessor?: any, accessor0?: any, type?: any) => any;
    getFontColorFromBackground: (background?: any) => any;
    getMissingScaleProps: (props?: any, data?: any, attributes?: any) => any;
    getOptionalScaleProps: (props?: any) => any;
    getScaleObjectFromProps: (props?: any, attr?: any) => any;
    getScalePropTypesByAttribute: (attr?: any) => any;
    getXYPlotValues: (props?: any, children?: any) => any;
    literalScale: (defaultValue?: any) => any;
};
