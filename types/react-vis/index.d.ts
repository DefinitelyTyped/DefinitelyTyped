declare module 'react-vis' {
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

    export type RVValueEventHandler<T extends AbstractSeriesPoint> = (
        datapoint: T,
        event: MouseEvent<HTMLElement>,
    ) => void;

    export type RVNearestXData<T extends AbstractSeriesPoint> = {
        event: MouseEvent<HTMLElement>;
        innerX: T['x'];
        index: number;
    };
    export type RVNearestXEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, data: RVNearestXData<T>) => void;

    export type RVNearestXYData<T extends AbstractSeriesPoint> = {
        event: MouseEvent<HTMLElement>;
        innerX: T['x'];
        innerY: T['y'];
        index: number;
    };
    export type RVNearestXYEventHandler<T extends AbstractSeriesPoint> = (
        datapoint: T,
        data: RVNearestXYData<T>,
    ) => void;

    export type RVGet<T extends AbstractSeriesPoint, K extends keyof T> = (datapoint: T) => T[K];
    export type RVGetNull<T extends AbstractSeriesPoint> = (datapoint: T) => any;
    export type RVGetAlignStyle = (
        align: { horizontal: string; vertical: string },
        x: number,
        y: number,
    ) => CSSProperties;

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
        size: number;
        opacity?: number;
        color?: string | number;
        style: CSSProperties;
        children: Array<TreemapPoint>;
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
        size: number;
        color?: number;
        label?: string;
        labelStyle?: CSSProperties;
        dontRotateLabel?: boolean;
        children?: Array<SunburstPoint>;
    }

    export interface VoronoiPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
    }

    export interface DecorativeAxisPoint extends AbstractSeriesPoint {}
    export interface RadarChartPoint extends AbstractSeriesPoint {}

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
        data?: Array<T | Array<any>>;
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
        onNearestXY?: RVNearestXEventHandler<T>;
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
        stack?: boolean; //default: false
        stroke?: string | number;
        style?: CSSProperties; //default: {}
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
        strokeStyle?: 'dashed' | 'solid'; //default: 'solid'
        curve?: string | Function; //default: null
        getNull?: RVGetNull<LineSeriesPoint>;
    }
    export class LineSeries extends AbstractSeries<LineSeriesProps> {}

    export interface LineSeriesCanvasProps extends AbstractSeriesProps<LineSeriesPoint> {
        strokeWidth?: number; //default: 1
    }
    export class LineSeriesCanvas extends AbstractSeries<LineSeriesCanvasProps> {}

    export interface HorizontalBarSeriesProps extends AbstractSeriesProps<HorizontalBarSeriesPoint> {}
    export class HorizontalBarSeries extends AbstractSeries<HorizontalBarSeriesProps> {}

    export interface HorizontalBarSeriesCanvasProps extends AbstractSeriesProps<HorizontalBarSeriesPoint> {}
    export class HorizontalBarSeriesCanvas extends AbstractSeries<HorizontalBarSeriesCanvasProps> {}

    export interface VerticalBarSeriesProps extends AbstractSeriesProps<VerticalBarSeriesPoint> {}
    export class VerticalBarSeries extends AbstractSeries<VerticalBarSeriesProps> {}

    export interface VerticalBarSeriesCanvasProps extends AbstractSeriesProps<VerticalBarSeriesPoint> {}
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
        rotation?: number; //default: 0
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
        strokeWidth?: number; //default: 1
    }
    export class WhiskerSeries extends AbstractSeries<WhiskerSeriesProps> {}

    export interface HeatmapSeriesProps extends AbstractSeriesProps<HeatmapSeriesPoint> {}
    export class HeatmapSeries extends AbstractSeries<HeatmapSeriesProps> {}

    export interface ContourSeriesProps extends AbstractSeriesProps<ContourSeriesPoint> {
        bandwidth?: number; //default: 40
        marginLeft?: number;
        marginTop?: number;
    }
    export class ContourSeries extends AbstractSeries<ContourSeriesProps> {}

    export interface CustomSVGSeriesProps extends AbstractSeriesProps<CustomSVGSeriesPoint> {
        customComponent?: string | Function; //default: 'circle'
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
        arcClassName?: string; //default: ''
        center?: { x?: number; y?: number }; //default: {'x':0,'y':0}
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
        curve?: string | Function; //default: null
        getNull?: RVGetNull<LineMarkSeriesPoint>;
        lineStyle?: CSSProperties; //default: {}
        markStyle?: CSSProperties; //default: {}
        strokeStyle?: 'dashed' | 'solid'; //default: 'solid'
    }
    export class LineMarkSeries extends AbstractSeries<LineMarkSeriesProps> {}

    export interface LineMarkSeriesCanvasProps extends AbstractSeriesProps<LineMarkSeriesPoint> {}
    export class LineMarkSeriesCanvas extends AbstractSeries<LineMarkSeriesCanvasProps> {}

    export interface HintProps {
        marginTop?: number;
        marginLeft?: number;
        innerWidth?: number;
        innerHeight?: number;
        scales?: { [key: string]: any };
        value?: { [key: string]: any };
        format?: Function;
        style?: CSSProperties; //default: {}
        align?: {
            horizontal?: 'auto' | 'left' | 'right' | 'leftEdge' | 'rightEdge';
            vertical?: 'auto' | 'bottom' | 'top' | 'bottomEdge' | 'topEdge';
        }; //default: {'horizontal':'auto','vertical':'auto'}
        getAlignStyle?: RVGetAlignStyle;
        orientation?: 'bottomleft' | 'bottomright' | 'topleft' | 'topright';
    }
    export class Hint<T = any> extends PureComponent<HintProps & T> {}

    export interface BordersProps {
        style?: {
            bottom?: CSSProperties;
            left?: CSSProperties;
            right?: CSSProperties;
            top?: CSSProperties;
        }; //default: {'all':{},'bottom':{},'left':{},'right':{},'top':{}}
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
        values?: Array<any>;
        series?: { [key: string]: any };
        innerWidth?: number;
        innerHeight?: number;
        marginLeft?: number;
        marginTop?: number;
        orientation?: 'left' | 'right';
        itemsFormat?: Function;
        titleFormat?: Function;
        style?: {
            line?: CSSProperties;
            title?: CSSProperties;
            box?: CSSProperties;
        }; //default: {'line':{},'title':{},'box':{}}
    }
    export class Crosshair<T = any> extends PureComponent<CrosshairProps & T> {}

    export interface XYPlotProps {
        animation?: string | AnimationParam | boolean;
        className?: string; //default: ''
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
        axisDomain: Array<number>;
        axisEnd: {
            x?: number | string;
            y?: number | string;
        };
        axisStart: {
            x?: number | string;
            y?: number | string;
        };
        numberOfTicks?: number; //default: 10
        tickValue?: Function;
        tickSize?: number; //default: 5
    }
    export class DecorativeAxis extends AbstractSeries<DecorativeAxisProps> {}

    export interface XAxisProps {
        orientation?: 'top' | 'bottom'; //default: 'bottom'
        attr?: string; //default: 'x'
        attrAxis?: string; //default: 'y'
        width?: number;
        height?: number;
        top?: number;
        left?: number;
        title?: string;
        style?: CSSProperties;
        className?: string;
        hideTicks?: boolean;
        hideLine?: boolean;
        on0?: boolean;
        tickLabelAngle?: number;
        tickSize?: number;
        tickSizeInner?: number;
        tickSizeOuter?: number;
        tickPadding?: number;
        tickValues?: Array<any>;
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
        orientation?: 'left' | 'right'; //default: 'left'
        attr?: string; //default: 'y'
        attrAxis?: string; //default: 'x'
        width?: number;
        height?: number;
        top?: number;
        left?: number;
        title?: string;
        style?: CSSProperties;
        className?: string;
        hideTicks?: boolean;
        hideLine?: boolean;
        on0?: boolean;
        tickLabelAngle?: number;
        tickSize?: number;
        tickSizeInner?: number;
        tickSizeOuter?: number;
        tickPadding?: number;
        tickValues?: Array<any>;
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
        centerX?: number; //default: 0
        centerY?: number; //default: 0
        width?: number;
        height?: number;
        top?: number;
        left?: number;
        rRange?: Array<number>;
        style?: CSSProperties;
        tickValues?: Array<number>;
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
        direction?: 'vertical' | 'horizontal'; //default: 'vertical'
        attr: string;
        width?: number;
        height?: number;
        top?: number;
        left?: number;
        style?: CSSProperties;
        tickValues?: Array<any>;
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
        className?: string; //default: ''
    }
    export class GradientDefs<T = any> extends PureComponent<GradientDefsProps & T> {}

    export interface VerticalGridLinesProps {
        direction?: 'vertical'; //default: 'vertical'
        attr?: string; //default: 'x'
        width?: number;
        height?: number;
        top?: number;
        left?: number;
        style?: CSSProperties;
        tickValues?: Array<any>;
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
        direction?: 'horizontal'; //default: 'horizontal'
        attr?: string; //default: 'y'
        width?: number;
        height?: number;
        top?: number;
        left?: number;
        style?: CSSProperties;
        tickValues?: Array<any>;
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
        className?: string; //default: ''
        extent: Array<Array<number>>;
        nodes: Array<VoronoiPoint>;
        onBlur?: Function;
        onClick?: RVMouseEventHandler;
        onHover?: Function;
        onMouseDown?: RVMouseEventHandler;
        onMouseUp?: RVMouseEventHandler;
        x?: Function;
        y?: Function;
    }
    export const Voronoi: SFC<VoronoiProps>;

    export interface DiscreteColorLegendProps {
        className?: string; //default: ''
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
        orientation?: 'vertical' | 'horizontal'; //default: 'vertical'
    }
    export const DiscreteColorLegend: SFC<DiscreteColorLegendProps>;

    export interface SearchableDiscreteColorLegendProps {
        className?: string; //default: ''
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
        searchText?: string; //default: ''
        onSearchChange?: Function;
        searchPlaceholder?: string;
        searchFn?: Function;
    }
    export const SearchableDiscreteColorLegend: SFC<SearchableDiscreteColorLegendProps>;

    export interface ContinuousColorLegendProps {
        className?: string; //default: ''
        height?: number;
        endColor?: string; //default: '#FF9833'
        endTitle: number | string;
        midColor?: string;
        midTitle?: number | string;
        startColor?: string; //default: '#EF5D28'
        startTitle: number | string;
        width?: number;
    }
    export const ContinuousColorLegend: SFC<ContinuousColorLegendProps>;

    export interface ContinuousSizeLegendProps {
        className?: string; //default: ''
        circlesTotal?: number; //default: 10
        endSize?: number; //default: 20
        endTitle: number | string;
        height?: number;
        startSize?: number; //default: 2
        startTitle: number | string;
        width?: number;
    }
    export const ContinuousSizeLegend: SFC<ContinuousSizeLegendProps>;
    export type Margin = {
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    };
    export type AnimationParam = {
        stiffness?: number;
        nonAnimatedProps?: Array<string>;
        damping?: number;
    };
    export interface TreemapProps {
        animation?: string | AnimationParam | boolean;
        className?: string; //default: ''
        data?: TreemapPoint; //default: {'children':[]}
        height: number;
        hideRootNode?: boolean; //default: false
        margin?: Margin | number; //default: {'left':40,'right':10,'top':10,'bottom':40}
        mode?:
            | 'squarify'
            | 'resquarify'
            | 'slice'
            | 'dice'
            | 'slicedice'
            | 'binary'
            | 'circlePack'
            | 'partition'
            | 'partition-pivot'; //default: 'squarify'
        onLeafClick?: RVValueEventHandler<TreemapPoint>;
        onLeafMouseOver?: RVValueEventHandler<TreemapPoint>;
        onLeafMouseOut?: RVValueEventHandler<TreemapPoint>;
        useCirclePacking?: boolean;
        padding?: number; //default: 1
        sortFunction?: Function;
        width: number;
        getSize?: RVGet<TreemapPoint, 'size'>;
        getColor?: RVGet<TreemapPoint, 'color'>;
    }
    export class Treemap<T = any> extends Component<TreemapProps & T> {}

    export interface RadialChartProps {
        animation?: string | AnimationParam | boolean;
        className?: string; //default: ''
        colorType?: string; //default: 'category'
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
        subLabel?: Function;
        width: number;
    }
    export class RadialChart<T = any> extends Component<RadialChartProps & T> {}

    export interface RadarChartProps {
        animation?: string | AnimationParam | boolean;
        className?: string; //default: ''
        colorType?: string; //default: 'category'
        colorRange?: Array<string>; //default: ['#12939A','#79C7E3','#1A3177','#FF9833','#EF5D28']
        data: Array<RadarChartPoint>;
        domains: Array<{
            name: string;
            domain: Array<number>;
            tickFormat?: RVTickFormat;
        }>;
        height: number;
        hideInnerMostValues?: boolean; //default: true
        margin?: Margin | number;
        startingAngle?: number; //default: 1.5707963267948966
        style?: {
            axes?: CSSProperties;
            labels?: CSSProperties;
            polygons?: CSSProperties;
        }; //default: {'axes':{'line':{},'ticks':{},'text':{}},'labels':{'fontSize':10,'textAnchor':'middle'},'polygons':{'strokeWidth':0.5,'strokeOpacity':1,'fillOpacity':0.1}}
        tickFormat?: RVTickFormat;
        width: number;
    }
    export class RadarChart<T = any> extends Component<RadarChartProps & T> {}

    export interface ParallelCoordinatesProps {
        animation?: string | AnimationParam | boolean;
        className?: string; //default: ''
        colorType?: string; //default: 'category'
        colorRange?: Array<string>; //default: ['#12939A','#79C7E3','#1A3177','#FF9833','#EF5D28']
        data: Array<ParallelCoordinatesPoint>;
        domains: Array<{
            name: string;
            domain: Array<number>;
            tickFormat?: RVTickFormat;
        }>;
        height: number;
        margin?: Margin | number;
        style?: {
            axes?: CSSProperties;
            labels?: CSSProperties;
            lines?: CSSProperties;
        }; //default: {'axes':{'line':{},'ticks':{},'text':{}},'labels':{'fontSize':10,'textAnchor':'middle'},'lines':{'strokeWidth':1,'strokeOpacity':1}}
        showMarks?: boolean;
        tickFormat?: RVTickFormat;
        width: number;
    }
    export class ParallelCoordinates<T = any> extends Component<ParallelCoordinatesProps & T> {}

    export interface SankeyProps {
        align?: 'justify' | 'left' | 'right' | 'center'; //default: 'justify'
        className?: string; //default: ''
        hasVoronoi?: boolean; //default: false
        height: number;
        hideLabels?: boolean; //default: false
        layout?: number; //default: 50
        links: Array<{
            source: number | { [key: string]: any };
            target: number | { [key: string]: any };
        }>;
        margin?: Margin | number; //default: {'top':20,'left':20,'right':20,'bottom':20}
        nodePadding?: number; //default: 10
        nodes: Array<SankeyPoint>;
        nodeWidth?: number; //default: 10
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
        }; //default: {'links':{},'rects':{},'labels':{}}
        width: number;
    }
    export class Sankey<T = any> extends Component<SankeyProps & T> {}

    export interface SunburstProps {
        animation?: string | AnimationParam | boolean;
        getAngle?: RVGet<SunburstPoint, 'angle'>;
        getAngle0?: RVGet<SunburstPoint, 'angle0'>;
        className?: string; //default: ''
        colorType?: string; //default: 'literal'
        data: SunburstPoint;
        height: number;
        hideRootNode?: boolean; //default: false
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

    export const makeHeightFlexible: (component?: any) => any;

    export const makeVisFlexible: (component?: any) => any;

    export const makeWidthFlexible: (component?: any) => any;

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
}

declare module 'react-vis/es/plot/series/abstract-series' {
    import { AbstractSeries } from 'react-vis';
    export default AbstractSeries;
}

declare module 'react-vis/es/plot/series/line-series' {
    import { LineSeries } from 'react-vis';
    export default LineSeries;
}

declare module 'react-vis/es/plot/series/line-series-canvas' {
    import { LineSeriesCanvas } from 'react-vis';
    export default LineSeriesCanvas;
}

declare module 'react-vis/es/plot/series/horizontal-bar-series' {
    import { HorizontalBarSeries } from 'react-vis';
    export default HorizontalBarSeries;
}

declare module 'react-vis/es/plot/series/horizontal-bar-series-canvas' {
    import { HorizontalBarSeriesCanvas } from 'react-vis';
    export default HorizontalBarSeriesCanvas;
}

declare module 'react-vis/es/plot/series/vertical-bar-series' {
    import { VerticalBarSeries } from 'react-vis';
    export default VerticalBarSeries;
}

declare module 'react-vis/es/plot/series/vertical-bar-series-canvas' {
    import { VerticalBarSeriesCanvas } from 'react-vis';
    export default VerticalBarSeriesCanvas;
}

declare module 'react-vis/es/plot/series/vertical-rect-series' {
    import { VerticalRectSeries } from 'react-vis';
    export default VerticalRectSeries;
}

declare module 'react-vis/es/plot/series/vertical-rect-series-canvas' {
    import { VerticalRectSeriesCanvas } from 'react-vis';
    export default VerticalRectSeriesCanvas;
}

declare module 'react-vis/es/plot/series/horizontal-rect-series' {
    import { HorizontalRectSeries } from 'react-vis';
    export default HorizontalRectSeries;
}

declare module 'react-vis/es/plot/series/horizontal-rect-series-canvas' {
    import { HorizontalRectSeriesCanvas } from 'react-vis';
    export default HorizontalRectSeriesCanvas;
}

declare module 'react-vis/es/plot/series/label-series' {
    import { LabelSeries } from 'react-vis';
    export default LabelSeries;
}

declare module 'react-vis/es/plot/series/polygon-series' {
    import { PolygonSeries } from 'react-vis';
    export default PolygonSeries;
}

declare module 'react-vis/es/plot/series/rect-series' {
    import { RectSeries } from 'react-vis';
    export default RectSeries;
}

declare module 'react-vis/es/plot/series/rect-series-canvas' {
    import { RectSeriesCanvas } from 'react-vis';
    export default RectSeriesCanvas;
}

declare module 'react-vis/es/plot/series/mark-series' {
    import { MarkSeries } from 'react-vis';
    export default MarkSeries;
}

declare module 'react-vis/es/plot/series/mark-series-canvas' {
    import { MarkSeriesCanvas } from 'react-vis';
    export default MarkSeriesCanvas;
}

declare module 'react-vis/es/plot/series/whisker-series' {
    import { WhiskerSeries } from 'react-vis';
    export default WhiskerSeries;
}

declare module 'react-vis/es/plot/series/heatmap-series' {
    import { HeatmapSeries } from 'react-vis';
    export default HeatmapSeries;
}

declare module 'react-vis/es/plot/series/contour-series' {
    import { ContourSeries } from 'react-vis';
    export default ContourSeries;
}

declare module 'react-vis/es/plot/series/custom-svg-series' {
    import { CustomSVGSeries } from 'react-vis';
    export default CustomSVGSeries;
}

declare module 'react-vis/es/plot/series/area-series' {
    import { AreaSeries } from 'react-vis';
    export default AreaSeries;
}

declare module 'react-vis/es/plot/series/arc-series' {
    import { ArcSeries } from 'react-vis';
    export default ArcSeries;
}

declare module 'react-vis/es/plot/series/line-mark-series' {
    import { LineMarkSeries } from 'react-vis';
    export default LineMarkSeries;
}

declare module 'react-vis/es/plot/series/line-mark-series-canvas' {
    import { LineMarkSeriesCanvas } from 'react-vis';
    export default LineMarkSeriesCanvas;
}

declare module 'react-vis/es/plot/hint' {
    import { Hint } from 'react-vis';
    export default Hint;
}

declare module 'react-vis/es/plot/borders' {
    import { Borders } from 'react-vis';
    export default Borders;
}

declare module 'react-vis/es/plot/crosshair' {
    import { Crosshair } from 'react-vis';
    export default Crosshair;
}

declare module 'react-vis/es/plot/xy-plot' {
    import { XYPlot } from 'react-vis';
    export default XYPlot;
}

declare module 'react-vis/es/plot/axis/decorative-axis' {
    import { DecorativeAxis } from 'react-vis';
    export default DecorativeAxis;
}

declare module 'react-vis/es/plot/axis/x-axis' {
    import { XAxis } from 'react-vis';
    export default XAxis;
}

declare module 'react-vis/es/plot/axis/y-axis' {
    import { YAxis } from 'react-vis';
    export default YAxis;
}

declare module 'react-vis/es/plot/circular-grid-lines' {
    import { CircularGridLines } from 'react-vis';
    export default CircularGridLines;
}

declare module 'react-vis/es/plot/grid-lines' {
    import { GridLines } from 'react-vis';
    export default GridLines;
}

declare module 'react-vis/es/plot/gradient-defs' {
    import { GradientDefs } from 'react-vis';
    export default GradientDefs;
}

declare module 'react-vis/es/plot/vertical-grid-lines' {
    import { VerticalGridLines } from 'react-vis';
    export default VerticalGridLines;
}

declare module 'react-vis/es/plot/horizontal-grid-lines' {
    import { HorizontalGridLines } from 'react-vis';
    export default HorizontalGridLines;
}

declare module 'react-vis/es/plot/voronoi' {
    import { Voronoi } from 'react-vis';
    export default Voronoi;
}

declare module 'react-vis/es/legends/discrete-color-legend' {
    import { DiscreteColorLegend } from 'react-vis';
    export default DiscreteColorLegend;
}

declare module 'react-vis/es/legends/searchable-discrete-color-legend' {
    import { SearchableDiscreteColorLegend } from 'react-vis';
    export default SearchableDiscreteColorLegend;
}

declare module 'react-vis/es/legends/continuous-color-legend' {
    import { ContinuousColorLegend } from 'react-vis';
    export default ContinuousColorLegend;
}

declare module 'react-vis/es/legends/continuous-size-legend' {
    import { ContinuousSizeLegend } from 'react-vis';
    export default ContinuousSizeLegend;
}

declare module 'react-vis/es/treemap' {
    import { Treemap } from 'react-vis';
    export default Treemap;
}

declare module 'react-vis/es/radial-chart' {
    import { RadialChart } from 'react-vis';
    export default RadialChart;
}

declare module 'react-vis/es/radar-chart' {
    import { RadarChart } from 'react-vis';
    export default RadarChart;
}

declare module 'react-vis/es/parallel-coordinates' {
    import { ParallelCoordinates } from 'react-vis';
    export default ParallelCoordinates;
}

declare module 'react-vis/es/sankey' {
    import { Sankey } from 'react-vis';
    export default Sankey;
}

declare module 'react-vis/es/sunburst' {
    import { Sunburst } from 'react-vis';
    export default Sunburst;
}

declare module 'react-vis/es/utils/axis-utils' {
    import { AxisUtils } from 'react-vis';
    export default AxisUtils;
}

declare module 'react-vis/es/utils/scales-utils' {
    import { ScaleUtils } from 'react-vis';
    export default ScaleUtils;
}

declare module 'react-vis/es/make-vis-flexible' {
    export {
        makeHeightFlexible,
        makeVisFlexible,
        makeWidthFlexible,
        FlexibleXYPlot,
        FlexibleWidthXYPlot,
        FlexibleHeightXYPlot,
    } from 'react-vis';
}
