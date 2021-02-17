// Type definitions for react-vis 1.11
// Project: https://github.com/uber/react-vis#readme
// Definitions by: Domino987 <https://github.com/Domino987>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

import {
    Component,
    PureComponent,
    ReactChild,
    ReactNode,
    SFC,
    MouseEventHandler,
    TouchEventHandler,
    WheelEventHandler,
    MouseEvent,
    CSSProperties,
} from 'react';

export type Scale = 'linear' | 'ordinal' | 'category' | 'literal' | 'log' | 'time' | 'time-utc';

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
    innerX: T['x'];
    index: number;
}
export type RVNearestXEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, data: RVNearestXData<T>) => void;

export interface RVNearestXYData<T extends AbstractSeriesPoint> {
    event: MouseEvent<HTMLElement>;
    innerX: T['x'];
    innerY: T['y'];
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
    color?: string | number;
}

export interface LineMarkSeriesPoint extends AbstractSeriesPoint {
    x: string | number | Date;
    y: string | number | Date;
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    fill?: string | number;
    size?: string | number;
}

export interface MarkSeriesPoint extends AbstractSeriesPoint {
    x: string | number | Date;
    y: string | number | Date;
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    fill?: string | number;
    size?: string | number;
}

export interface HorizontalBarSeriesPoint extends AbstractSeriesPoint {
    x: string | number;
    y: string | number;
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    fill?: string | number;
}

export interface VerticalBarSeriesPoint extends AbstractSeriesPoint {
    x: string | number;
    y: number;
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    fill?: string | number;
}

export interface ArcSeriesPoint extends AbstractSeriesPoint {
    angle0: number;
    angle: number;
    radius0: number;
    radius: number;
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    fill?: string | number;
}

export interface AreaSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
    y0?: number;
}

export interface ContourSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
}

export interface HeatmapSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
    color?: string | number;
}

export interface LabelSeriesPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
    label: string;
    xOffset?: number;
    yOffset?: number;
    rotation?: number;
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
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    fill?: string | number;
}
export type HorizontalRectSeriesPoint = RectSeriesPoint;
export type VerticalRectSeriesPoint = RectSeriesPoint;

export interface WhiskerSeriesPoint extends AbstractSeriesPoint {
    x: string | number | Date;
    y: string | number | Date;
    color?: string | number;
    opacity?: string | number;
    stroke?: string | number;
    size?: string | number;
    xVariance?: string | number;
    yVariance?: string | number;
}

export interface TreemapPoint extends AbstractSeriesPoint {
    title: string;
    size?: number;
    opacity?: number;
    color?: string | number;
    style?: CSSProperties;
    children?: TreemapPoint[];
}

export interface ParallelCoordinatesPoint extends AbstractSeriesPoint {
    [key: string]: number;
}

export interface RadialChartPoint extends AbstractSeriesPoint {
    angle: number;
    radius?: number;
    label?: string;
    subLabel?: string;
    color?: string;
    style?: object;
    className?: string;
}

export interface SankeyPoint extends AbstractSeriesPoint {
    name: string;
    color?: string;
    opacity?: number;
    key?: string;
}

export interface SunburstPoint extends AbstractSeriesPoint {
    title: string;
    size?: number;
    color?: number|string;
    label?: string;
    labelStyle?: CSSProperties;
    dontRotateLabel?: boolean;
    children?: SunburstPoint[];
}

export interface VoronoiPoint extends AbstractSeriesPoint {
    x: number;
    y: number;
}

export type DecorativeAxisPoint = AbstractSeriesPoint;
export type RadarChartPoint = AbstractSeriesPoint;

export interface AbstractSeriesProps<T extends AbstractSeriesPoint> {
    _colorValue?: T['_color'];
    _opacityValue?: T['_opacity'];
    _sizeValue?: T['_size'];
    _xValue?: T['_x'];
    _yValue?: T['_y'];
    animation?: string | AnimationParam | boolean;
    color?: string | number;
    colorBaseValue?: T['color'];
    colorDistance?: number;
    colorDomain?: Array<T['color']>;
    colorRange?: Array<T['color']>;
    colorType?: Scale;
    className?: string;
    data?: Array<T | any[]>;
    fill?: string | number;
    getColor0?: RVGet<T, 'color0'>;
    getColor?: RVGet<T, 'color'>;
    getOpacity0?: RVGet<T, 'opacity0'>;
    getOpacity?: RVGet<T, 'opacity'>;
    getSize0?: RVGet<T, 'size0'>;
    getSize?: RVGet<T, 'size'>;
    getX0?: RVGet<T, 'x0'>;
    getX?: RVGet<T, 'x'>;
    getY0?: RVGet<T, 'y0'>;
    getY?: RVGet<T, 'y'>;
    height?: number;
    onNearestX?: RVNearestXEventHandler<T>;
    onNearestXY?: RVNearestXYEventHandler<T>;
    onSeriesClick?: RVMouseEventHandler;
    onSeriesMouseOut?: RVMouseEventHandler;
    onSeriesMouseOver?: RVMouseEventHandler;
    onSeriesRightClick?: RVMouseEventHandler;
    onValueClick?: RVValueEventHandler<T>;
    onValueMouseOut?: RVValueEventHandler<T>;
    onValueMouseOver?: RVValueEventHandler<T>;
    onValueRightClick?: RVValueEventHandler<T>;
    opacity?: number;
    opacityBaseValue?: T['opacity'];
    opacityDistance?: number;
    opacityDomain?: Array<T['opacity']>;
    opacityRange?: Array<T['opacity']>;
    opacityType?: Scale;
    sizeBaseValue?: T['size'];
    sizeDistance?: number;
    sizeDomain?: Array<T['size']>;
    sizeRange?: Array<T['size']>;
    sizeType?: Scale;
    stack?: boolean; // default: false
    stroke?: string | number;
    style?: CSSProperties; // default: {}
    width?: number;
    xBaseValue?: T['x'];
    xDistance?: number;
    xDomain?: Array<T['x']>;
    xRange?: Array<T['x']>;
    xType?: Scale;
    yBaseValue?: T['y'];
    yDistance?: number;
    yDomain?: Array<T['y']>;
    yRange?: Array<T['y']>;
    yType?: Scale;
}
export class AbstractSeries<T> extends PureComponent<T> {}

export interface LineSeriesProps extends AbstractSeriesProps<LineSeriesPoint> {
    strokeStyle?: 'dashed' | 'solid'; // default: 'solid'
    curve?: string | ((x: any) => any); // default: null
    getNull?: RVGetNull<LineSeriesPoint>;
}
export class LineSeries extends AbstractSeries<LineSeriesProps> {}

export interface LineSeriesCanvasProps extends AbstractSeriesProps<LineSeriesPoint> {
    strokeWidth?: number; // default: 1
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
    allowOffsetToBeReversed?: boolean;
    marginLeft?: number;
    marginTop?: number;
    rotation?: number; // default: 0
    labelAnchorX?: string;
    labelAnchorY?: string;
}
export class LabelSeries extends AbstractSeries<LabelSeriesProps> {}

export interface PolygonSeriesProps extends AbstractSeriesProps<PolygonSeriesPoint> {}
export class PolygonSeries extends AbstractSeries<PolygonSeriesProps> {}

export interface RectSeriesProps extends AbstractSeriesProps<RectSeriesPoint> {
    linePosAttr?: string;
    valuePosAttr?: string;
    lineSizeAttr?: string;
    valueSizeAttr?: string;
}
export class RectSeries extends AbstractSeries<RectSeriesProps> {}

export interface RectSeriesCanvasProps extends AbstractSeriesProps<RectSeriesPoint> {}
export class RectSeriesCanvas extends AbstractSeries<RectSeriesCanvasProps> {}

export interface MarkSeriesProps extends AbstractSeriesProps<MarkSeriesPoint> {
    getNull?: RVGetNull<MarkSeriesPoint>;
    strokeWidth?: number;
}
export class MarkSeries extends AbstractSeries<MarkSeriesProps> {}

export interface MarkSeriesCanvasProps extends AbstractSeriesProps<MarkSeriesPoint> {}
export class MarkSeriesCanvas extends AbstractSeries<MarkSeriesCanvasProps> {}

export interface WhiskerSeriesProps extends AbstractSeriesProps<WhiskerSeriesPoint> {
    strokeWidth?: number; // default: 1
}
export class WhiskerSeries extends AbstractSeries<WhiskerSeriesProps> {}

export interface HeatmapSeriesProps extends AbstractSeriesProps<HeatmapSeriesPoint> {}
export class HeatmapSeries extends AbstractSeries<HeatmapSeriesProps> {}

export interface HexbinSeriesProps extends AbstractSeriesProps<ContourSeriesPoint> {
    radius?: number;
    xOffset?: number;
    yOffset?: number;
    sizeHexagonsWithCount?: boolean;
}
export class HexbinSeries extends AbstractSeries<HexbinSeriesProps> {}

export interface ContourSeriesProps extends AbstractSeriesProps<ContourSeriesPoint> {
    bandwidth?: number; // default: 40
    marginLeft?: number;
    marginTop?: number;
}
export class ContourSeries extends AbstractSeries<ContourSeriesProps> {}

export interface CustomSVGSeriesProps extends AbstractSeriesProps<CustomSVGSeriesPoint> {
    customComponent?: string | ((row: any) => any); // default: 'circle'
    marginLeft?: number;
    marginTop?: number;
}
export class CustomSVGSeries extends AbstractSeries<CustomSVGSeriesProps> {}

export interface AreaSeriesProps extends AbstractSeriesProps<AreaSeriesPoint> {
    getNull?: RVGetNull<AreaSeriesPoint>;
}
export class AreaSeries extends AbstractSeries<AreaSeriesProps> {}

export interface ArcSeriesProps extends AbstractSeriesProps<ArcSeriesPoint> {
    _angleValue?: ArcSeriesPoint['_angle'];
    _radiusValue?: ArcSeriesPoint['_radius'];
    angleBaseValue?: ArcSeriesPoint['angle'];
    angleDistance?: number;
    angleDomain?: Array<ArcSeriesPoint['angle']>;
    angleRange?: Array<ArcSeriesPoint['angle']>;
    angleType?: Scale;
    arcClassName?: string; // default: ''
    center?: { x?: number; y?: number }; // default: {'x':0,'y':0}
    getAngle0?: RVGet<ArcSeriesPoint, 'angle0'>;
    getAngle?: RVGet<ArcSeriesPoint, 'angle'>;
    getRadius0?: RVGet<ArcSeriesPoint, 'radius0'>;
    getRadius?: RVGet<ArcSeriesPoint, 'radius'>;
    radiusBaseValue?: ArcSeriesPoint['radius'];
    radiusDistance?: number;
    radiusDomain?: Array<ArcSeriesPoint['radius']>;
    radiusRange?: Array<ArcSeriesPoint['radius']>;
    radiusType?: Scale;
}
export class ArcSeries extends AbstractSeries<ArcSeriesProps> {}

export interface LineMarkSeriesProps extends AbstractSeriesProps<LineMarkSeriesPoint> {
    curve?: string | ((x: any) => any); // default: null
    getNull?: RVGetNull<LineMarkSeriesPoint>;
    lineStyle?: CSSProperties; // default: {}
    markStyle?: CSSProperties; // default: {}
    strokeStyle?: 'dashed' | 'solid'; // default: 'solid'
}
export class LineMarkSeries extends AbstractSeries<LineMarkSeriesProps> {}

export interface LineMarkSeriesCanvasProps extends AbstractSeriesProps<LineMarkSeriesPoint> {}
export class LineMarkSeriesCanvas extends AbstractSeries<LineMarkSeriesCanvasProps> {}

export interface HighlightArea {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}
export interface HighlightProps extends AbstractSeriesProps<LineMarkSeriesPoint> {
    enableX?: boolean;
    enableY?: boolean;
    highlightHeight?: number;
    highlightWidth?: number;
    highlightX?: string | number;
    highlightY?: string | number;
    drag?: boolean;
    onBrushStart?: (area: HighlightArea | null) => void;
    onDragStart?: (area: HighlightArea | null) => void;
    onBrush?: (area: HighlightArea | null) => void;
    onDrag?: (area: HighlightArea | null) => void;
    onBrushEnd?: (area: HighlightArea | null) => void;
    onDragEnd?: (area: HighlightArea | null) => void;
}
export class Highlight extends AbstractSeries<HighlightProps> {}

export interface HintProps {
    marginTop?: number;
    marginLeft?: number;
    innerWidth?: number;
    innerHeight?: number;
    scales?: { [key: string]: any };
    value?: { [key: string]: any };
    format?: (x: any) => Array<{ title: any; value: any }>;
    style?: CSSProperties; // default: {}
    align?: {
        horizontal?: 'auto' | 'left' | 'right' | 'leftEdge' | 'rightEdge';
        vertical?: 'auto' | 'bottom' | 'top' | 'bottomEdge' | 'topEdge';
    }; // default: {'horizontal':'auto','vertical':'auto'}
    getAlignStyle?: RVGetAlignStyle;
    orientation?: 'bottomleft' | 'bottomright' | 'topleft' | 'topright';
}
export class Hint<T = any> extends PureComponent<HintProps & T> {}

export interface ChartLabelProps {
    className?: string;
    includeMargin?: boolean;
    style?: { [x: string]: any };
    text: string;
    xPercent: number;
    yPercent: number;
}
export class ChartLabel<T = any> extends PureComponent<ChartLabelProps & T> {}

export interface BordersProps {
    style?: {
        bottom?: CSSProperties;
        left?: CSSProperties;
        right?: CSSProperties;
        top?: CSSProperties;
    }; // default: {'all':{},'bottom':{},'left':{},'right':{},'top':{}}
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}
export class Borders<T = any> extends PureComponent<BordersProps & T> {}

export interface CrosshairProps {
    className?: string;
    values?: any[];
    series?: { [key: string]: any };
    innerWidth?: number;
    innerHeight?: number;
    marginLeft?: number;
    marginTop?: number;
    orientation?: 'left' | 'right';
    itemsFormat?: (x: any) => Array<{ title: any; value: any }>;
    titleFormat?: (x: any) => { title: any; value: any };
    style?: {
        line?: CSSProperties;
        title?: CSSProperties;
        box?: CSSProperties;
    }; // default: {'line':{},'title':{},'box':{}}
}
export class Crosshair<T = any> extends PureComponent<CrosshairProps & T> {}

export interface XYPlotProps {
    animation?: string | AnimationParam | boolean;
    className?: string; // default: ''
    dontCheckIfEmpty?: boolean;
    height: number;
    margin?: Margin | number;
    onClick?: RVMouseEventHandler;
    onDoubleClick?: RVMouseEventHandler;
    onMouseDown?: RVMouseEventHandler;
    onMouseUp?: RVMouseEventHandler;
    onMouseEnter?: RVMouseEventHandler;
    onMouseLeave?: RVMouseEventHandler;
    onMouseMove?: RVMouseEventHandler;
    onTouchStart?: RVTouchEventHandler;
    onTouchMove?: RVTouchEventHandler;
    onTouchEnd?: RVTouchEventHandler;
    onTouchCancel?: RVTouchEventHandler;
    onWheel?: RVWheelEventHandler;
    stackBy?: StackDirections;
    style?: CSSProperties;
    width: number;
}
export class XYPlot<T = any> extends Component<XYPlotProps & T> {}

export interface DecorativeAxisProps extends AbstractSeriesProps<DecorativeAxisPoint> {
    axisDomain: number[];
    axisEnd: {
        x?: number | string;
        y?: number | string;
    };
    axisStart: {
        x?: number | string;
        y?: number | string;
    };
    numberOfTicks?: number; // default: 10
    tickValue?: (x: any) => string | number;
    tickSize?: number; // default: 5
}
export class DecorativeAxis extends AbstractSeries<DecorativeAxisProps> {}

export interface XAxisProps {
    orientation?: 'top' | 'bottom'; // default: 'bottom'
    attr?: string; // default: 'x'
    attrAxis?: string; // default: 'y'
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    title?: string;
    style?: CSSProperties & {
        line?: CSSProperties;
        ticks?: CSSProperties;
        text?: CSSProperties;
        title?: CSSProperties;
    };
    className?: string;
    hideTicks?: boolean;
    hideLine?: boolean;
    on0?: boolean;
    tickLabelAngle?: number;
    tickSize?: number;
    tickSizeInner?: number;
    tickSizeOuter?: number;
    tickPadding?: number;
    tickValues?: any[];
    tickFormat?: RVTickFormat;
    tickTotal?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}
export const XAxis: SFC<XAxisProps>;

export interface YAxisProps {
    orientation?: 'left' | 'right'; // default: 'left'
    attr?: string; // default: 'y'
    attrAxis?: string; // default: 'x'
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    title?: string;
    style?: CSSProperties & {
        line?: CSSProperties;
        ticks?: CSSProperties;
        text?: CSSProperties;
        title?: CSSProperties;
    };
    className?: string;
    hideTicks?: boolean;
    hideLine?: boolean;
    on0?: boolean;
    tickLabelAngle?: number;
    tickSize?: number;
    tickSizeInner?: number;
    tickSizeOuter?: number;
    tickPadding?: number;
    tickValues?: any[];
    tickFormat?: RVTickFormat;
    tickTotal?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}
export const YAxis: SFC<YAxisProps>;

export interface CircularGridLinesProps {
    centerX?: number; // default: 0
    centerY?: number; // default: 0
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    rRange?: number[];
    style?: CSSProperties;
    tickValues?: number[];
    tickTotal?: number;
    animation?: string | AnimationParam | boolean;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}
export class CircularGridLines<T = any> extends PureComponent<CircularGridLinesProps & T> {}

export interface GridLinesProps {
    direction?: 'vertical' | 'horizontal'; // default: 'vertical'
    attr: string;
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    style?: CSSProperties;
    tickValues?: any[];
    tickTotal?: number;
    animation?: string | AnimationParam | boolean;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}
export class GridLines<T = any> extends PureComponent<GridLinesProps & T> {}

export interface GradientDefsProps {
    className?: string; // default: ''
}
export class GradientDefs<T = any> extends PureComponent<GradientDefsProps & T> {}

export interface VerticalGridLinesProps {
    direction?: 'vertical'; // default: 'vertical'
    attr?: string; // default: 'x'
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    style?: CSSProperties;
    tickValues?: any[];
    tickTotal?: number;
    animation?: string | AnimationParam | boolean;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}
export const VerticalGridLines: SFC<VerticalGridLinesProps>;

export interface HorizontalGridLinesProps {
    direction?: 'horizontal'; // default: 'horizontal'
    attr?: string; // default: 'y'
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    style?: CSSProperties;
    tickValues?: any[];
    tickTotal?: number;
    animation?: string | AnimationParam | boolean;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    innerWidth?: number;
    innerHeight?: number;
}
export const HorizontalGridLines: SFC<HorizontalGridLinesProps>;

export interface VoronoiProps {
    className?: string; // default: ''
    extent: number[][];
    nodes: VoronoiPoint[];
    onBlur?: RVMouseEventHandler;
    onClick?: RVMouseEventHandler;
    onHover?: RVMouseEventHandler;
    onMouseDown?: RVMouseEventHandler;
    onMouseUp?: RVMouseEventHandler;
    x?: (d: any) => number;
    y?: (d: any) => number;
}
export const Voronoi: SFC<VoronoiProps>;

export interface DiscreteColorLegendProps {
    className?: string; // default: ''
    items: Array<
        | {
              title: string;
              color?: string;
              disabled?: boolean;
          }
        | string
        | ReactChild
    >;
    onItemClick?: RVMouseEventHandler;
    onItemMouseEnter?: RVItemEventHandler;
    onItemMouseLeave?: RVItemEventHandler;
    height?: number;
    width?: number;
    orientation?: 'vertical' | 'horizontal'; // default: 'vertical'
}
export const DiscreteColorLegend: SFC<DiscreteColorLegendProps>;

export interface SearchableDiscreteColorLegendProps {
    className?: string; // default: ''
    items: Array<
        | {
              title: string;
              color?: string;
              disabled?: boolean;
          }
        | string
        | ReactChild
    >;
    onItemClick?: RVMouseEventHandler;
    onItemMouseEnter?: RVItemEventHandler;
    onItemMouseLeave?: RVItemEventHandler;
    height?: number;
    width?: number;
    orientation?: 'vertical' | 'horizontal';
    searchText?: string; // default: ''
    onSearchChange?: (x: any) => any;
    searchPlaceholder?: string;
    searchFn?: (items: any[], s: string) => any[];
}
export const SearchableDiscreteColorLegend: SFC<SearchableDiscreteColorLegendProps>;

export interface ContinuousColorLegendProps {
    className?: string; // default: ''
    height?: number;
    endColor?: string; // default: '#FF9833'
    endTitle: number | string;
    midColor?: string;
    midTitle?: number | string;
    startColor?: string; // default: '#EF5D28'
    startTitle: number | string;
    width?: number;
}
export const ContinuousColorLegend: SFC<ContinuousColorLegendProps>;

export interface ContinuousSizeLegendProps {
    className?: string; // default: ''
    circlesTotal?: number; // default: 10
    endSize?: number; // default: 20
    endTitle: number | string;
    height?: number;
    startSize?: number; // default: 2
    startTitle: number | string;
    width?: number;
}
export const ContinuousSizeLegend: SFC<ContinuousSizeLegendProps>;
export interface Margin {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}
export interface AnimationParam {
    stiffness?: number;
    nonAnimatedProps?: string[];
    damping?: number;
}
export interface TreemapProps {
    animation?: string | AnimationParam | boolean;
    className?: string; // default: ''
    data?: TreemapPoint; // default: {'children':[]}
    height: number;
    hideRootNode?: boolean; // default: false
    margin?: Margin | number; // default: {'left':40,'right':10,'top':10,'bottom':40}
    mode?:
        | 'squarify'
        | 'resquarify'
        | 'slice'
        | 'dice'
        | 'slicedice'
        | 'binary'
        | 'circlePack'
        | 'partition'
        | 'partition-pivot'; // default: 'squarify'
    onLeafClick?: RVValueEventHandler<TreemapPoint>;
    onLeafMouseOver?: RVValueEventHandler<TreemapPoint>;
    onLeafMouseOut?: RVValueEventHandler<TreemapPoint>;
    useCirclePacking?: boolean;
    padding?: number; // default: 1
    sortFunction?: (a: any, b: any, getSize: RVGet<TreemapPoint, 'size'>) => number;
    width: number;
    getSize?: RVGet<TreemapPoint, 'size'>;
    getColor?: RVGet<TreemapPoint, 'color'>;
    color?: string;
}
export class Treemap<T = any> extends Component<TreemapProps & T> {}

export interface RadialChartProps {
    animation?: string | AnimationParam | boolean;
    className?: string; // default: ''
    colorType?: string; // default: 'category'
    data: Array<{
        angle?: number;
        className?: string;
        label?: string;
        radius?: number;
        style?: CSSProperties;
    }>;
    getAngle?: RVGet<RadialChartPoint, 'angle'>;
    getAngle0?: RVGet<RadialChartPoint, 'angle0'>;
    getRadius?: RVGet<RadialChartPoint, 'radius'>;
    getRadius0?: RVGet<RadialChartPoint, 'radius0'>;
    getLabel?: RVGet<RadialChartPoint, 'label'>;
    height: number;
    labelsAboveChildren?: boolean;
    labelsStyle?: CSSProperties;
    margin?: Margin | number;
    onValueClick?: RVValueEventHandler<RadialChartPoint>;
    onValueMouseOver?: RVValueEventHandler<RadialChartPoint>;
    onValueMouseOut?: RVValueEventHandler<RadialChartPoint>;
    showLabels?: boolean;
    style?: CSSProperties;
    subLabel?: (row: any) => string;
    width: number;
}
export class RadialChart<T = any> extends Component<RadialChartProps & T> {}

export interface RadarChartProps {
    animation?: string | AnimationParam | boolean;
    className?: string; // default: ''
    colorType?: string; // default: 'category'
    colorRange?: string[]; // default: ['#12939A','#79C7E3','#1A3177','#FF9833','#EF5D28']
    data: RadarChartPoint[];
    domains: Array<{
        name: string;
        domain: number[];
        tickFormat?: RVTickFormat;
    }>;
    height: number;
    hideInnerMostValues?: boolean; // default: true
    margin?: Margin | number;
    startingAngle?: number; // default: 1.5707963267948966
    style?: {
        axes?: CSSProperties;
        labels?: CSSProperties;
        polygons?: CSSProperties;
    }; // default: {'axes':{'line':{},'ticks':{},'text':{}},'labels':{'fontSize':10,'textAnchor':'middle'},'polygons':{'strokeWidth':0.5,'strokeOpacity':1,'fillOpacity':0.1}}
    tickFormat?: RVTickFormat;
    width: number;
}
export class RadarChart<T = any> extends Component<RadarChartProps & T> {}

export interface ParallelCoordinatesProps {
    animation?: string | AnimationParam | boolean;
    className?: string; // default: ''
    colorType?: string; // default: 'category'
    colorRange?: string[]; // default: ['#12939A','#79C7E3','#1A3177','#FF9833','#EF5D28']
    data: ParallelCoordinatesPoint[];
    domains: Array<{
        name: string;
        domain: number[];
        tickFormat?: RVTickFormat;
    }>;
    height: number;
    margin?: Margin | number;
    style?: {
        axes?: CSSProperties;
        labels?: CSSProperties;
        lines?: CSSProperties;
    }; // default: {'axes':{'line':{},'ticks':{},'text':{}},'labels':{'fontSize':10,'textAnchor':'middle'},'lines':{'strokeWidth':1,'strokeOpacity':1}}
    showMarks?: boolean;
    tickFormat?: RVTickFormat;
    width: number;
}
export class ParallelCoordinates<T = any> extends Component<ParallelCoordinatesProps & T> {}

export interface SankeyProps {
    align?: 'justify' | 'left' | 'right' | 'center'; // default: 'justify'
    className?: string; // default: ''
    hasVoronoi?: boolean; // default: false
    height: number;
    hideLabels?: boolean; // default: false
    layout?: number; // default: 50
    links: Array<{
        source: number | { [key: string]: any };
        target: number | { [key: string]: any };
    }>;
    margin?: Margin | number; // default: {'top':20,'left':20,'right':20,'bottom':20}
    nodePadding?: number; // default: 10
    nodes: SankeyPoint[];
    nodeWidth?: number; // default: 10
    onValueMouseOver?: RVValueEventHandler<SankeyPoint>;
    onValueClick?: RVValueEventHandler<SankeyPoint>;
    onValueMouseOut?: RVValueEventHandler<SankeyPoint>;
    onLinkClick?: RVValueEventHandler<SankeyPoint>;
    onLinkMouseOver?: RVValueEventHandler<SankeyPoint>;
    onLinkMouseOut?: RVValueEventHandler<SankeyPoint>;
    style?: {
        links?: CSSProperties;
        rects?: CSSProperties;
        labels?: CSSProperties;
    }; // default: {'links':{},'rects':{},'labels':{}}
    width: number;
}
export class Sankey<T = any> extends Component<SankeyProps & T> {}

export interface SunburstProps {
    animation?: string | AnimationParam | boolean;
    getAngle?: RVGet<SunburstPoint, 'angle'>;
    getAngle0?: RVGet<SunburstPoint, 'angle0'>;
    className?: string; // default: ''
    colorType?: string; // default: 'literal'
    data: SunburstPoint;
    height: number;
    hideRootNode?: boolean; // default: false
    getLabel?: RVGet<SunburstPoint, 'label'>;
    onValueClick?: RVValueEventHandler<SunburstPoint>;
    onValueMouseOver?: RVValueEventHandler<SunburstPoint>;
    onValueMouseOut?: RVValueEventHandler<SunburstPoint>;
    getSize?: RVGet<SunburstPoint, 'size'>;
    width: number;
}
export class Sunburst<T = any> extends Component<SunburstProps & T> {}

export type StackDirections = 'x' | 'y' | 'radius' | 'angle' | 'color' | 'fill' | 'stroke' | 'opacity' | 'size';
export interface FlexibleXYPlotProps {
    animation?: string | AnimationParam | boolean;
    className?: string;
    dontCheckIfEmpty?: boolean;
    margin?: Margin | number;
    onClick?: RVMouseEventHandler;
    onDoubleClick?: RVMouseEventHandler;
    onMouseDown?: RVMouseEventHandler;
    onMouseUp?: RVMouseEventHandler;
    onMouseEnter?: RVMouseEventHandler;
    onMouseLeave?: RVMouseEventHandler;
    onMouseMove?: RVMouseEventHandler;
    onTouchStart?: RVTouchEventHandler;
    onTouchMove?: RVTouchEventHandler;
    onTouchEnd?: RVTouchEventHandler;
    onTouchCancel?: RVTouchEventHandler;
    onWheel?: RVWheelEventHandler;
    stackBy?: StackDirections;
    style?: CSSProperties;
}
export class FlexibleXYPlot<T = any> extends Component<FlexibleXYPlotProps & T> {}

export interface FlexibleWidthXYPlotProps {
    animation?: string | AnimationParam | boolean;
    className?: string;
    dontCheckIfEmpty?: boolean;
    margin?: Margin | number;
    onClick?: RVMouseEventHandler;
    onDoubleClick?: RVMouseEventHandler;
    onMouseDown?: RVMouseEventHandler;
    onMouseUp?: RVMouseEventHandler;
    onMouseEnter?: RVMouseEventHandler;
    onMouseLeave?: RVMouseEventHandler;
    onMouseMove?: RVMouseEventHandler;
    onTouchStart?: RVTouchEventHandler;
    onTouchMove?: RVTouchEventHandler;
    onTouchEnd?: RVTouchEventHandler;
    onTouchCancel?: RVTouchEventHandler;
    onWheel?: RVWheelEventHandler;
    stackBy?: StackDirections;
    style?: CSSProperties;
}
export class FlexibleWidthXYPlot<T = any> extends Component<FlexibleWidthXYPlotProps & T> {}

export interface FlexibleHeightXYPlotProps {
    animation?: string | AnimationParam | boolean;
    className?: string;
    dontCheckIfEmpty?: boolean;
    margin?: Margin | number;
    onClick?: RVMouseEventHandler;
    onDoubleClick?: RVMouseEventHandler;
    onMouseDown?: RVMouseEventHandler;
    onMouseUp?: RVMouseEventHandler;
    onMouseEnter?: RVMouseEventHandler;
    onMouseLeave?: RVMouseEventHandler;
    onMouseMove?: RVMouseEventHandler;
    onTouchStart?: RVTouchEventHandler;
    onTouchMove?: RVTouchEventHandler;
    onTouchEnd?: RVTouchEventHandler;
    onTouchCancel?: RVTouchEventHandler;
    onWheel?: RVWheelEventHandler;
    stackBy?: StackDirections;
    style?: CSSProperties;
}
export class FlexibleHeightXYPlot<T = any> extends Component<FlexibleHeightXYPlotProps & T> {}

export function makeHeightFlexible(component?: any): any;

export function makeVisFlexible(component?: any): any;

export function makeWidthFlexible(component?: any): any;

export const AxisUtils: {
    DIRECTION: {
        VERTICAL: 'vertical';
        HORIZONTAL: 'horizontal';
    };
    ORIENTATION: {
        TOP: 'top';
        LEFT: 'left';
        RIGHT: 'right';
        BOTTOM: 'bottom';
        VERTICAL: 'vertical';
        HORIZONTAL: 'horizontal';
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
