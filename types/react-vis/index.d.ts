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
declare module 'react-vis' {
    type Scale = 'linear' | 'ordinal' | 'category' | 'literal' | 'log' | 'time' | 'time-utc';

    interface AbstractSeriesPoint {
        [key: string]: any;
    }

    type RVMouseEventHandler = MouseEventHandler<HTMLElement>;
    type RVTouchEventHandler = TouchEventHandler<HTMLElement>;
    type RVWheelEventHandler = WheelEventHandler<HTMLElement>;

    type RVItemEventHandler = (item: any, index: number, event: MouseEvent<HTMLElement>) => void;

    type RVValueEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, event: MouseEvent<HTMLElement>) => void;

    interface RVNearestXData<T extends AbstractSeriesPoint> {
        event: MouseEvent<HTMLElement>;
        innerX: T['x'];
        index: number;
    }
    type RVNearestXEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, data: RVNearestXData<T>) => void;

    interface RVNearestXYData<T extends AbstractSeriesPoint> {
        event: MouseEvent<HTMLElement>;
        innerX: T['x'];
        innerY: T['y'];
        index: number;
    }
    type RVNearestXYEventHandler<T extends AbstractSeriesPoint> = (datapoint: T, data: RVNearestXYData<T>) => void;

    type RVGet<T extends AbstractSeriesPoint, K extends keyof T> = (datapoint: T) => T[K];
    type RVGetNull<T extends AbstractSeriesPoint> = (datapoint: T) => any;
    type RVGetAlignStyle = (align: { horizontal: string; vertical: string }, x: number, y: number) => CSSProperties;

    type RVTickFormat = (tick: any) => string;

    interface LineSeriesPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
        color?: string | number;
    }

    interface LineMarkSeriesPoint extends AbstractSeriesPoint {
        x: string | number | Date;
        y: string | number | Date;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        fill?: string | number;
        size?: string | number;
    }

    interface MarkSeriesPoint extends AbstractSeriesPoint {
        x: string | number | Date;
        y: string | number | Date;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        fill?: string | number;
        size?: string | number;
    }

    interface HorizontalBarSeriesPoint extends AbstractSeriesPoint {
        x: string | number;
        y: string | number;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        fill?: string | number;
    }

    interface VerticalBarSeriesPoint extends AbstractSeriesPoint {
        x: string | number;
        y: number;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        fill?: string | number;
    }

    interface ArcSeriesPoint extends AbstractSeriesPoint {
        angle0: number;
        angle: number;
        radius0: number;
        radius: number;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        fill?: string | number;
    }

    interface AreaSeriesPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
        y0?: number;
    }

    interface ContourSeriesPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
    }

    interface HeatmapSeriesPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
        color?: string | number;
    }

    interface LabelSeriesPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
        label: string;
        xOffset?: number;
        yOffset?: number;
        rotation?: number;
    }

    interface CustomSVGSeriesPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
    }

    interface PolygonSeriesPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
    }

    interface RectSeriesPoint extends AbstractSeriesPoint {
        x: string | number | Date;
        x0: string | number | Date;
        y: string | number | Date;
        y0: string | number | Date;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        fill?: string | number;
    }
    type HorizontalRectSeriesPoint = RectSeriesPoint;
    type VerticalRectSeriesPoint = RectSeriesPoint;

    interface WhiskerSeriesPoint extends AbstractSeriesPoint {
        x: string | number | Date;
        y: string | number | Date;
        color?: string | number;
        opacity?: string | number;
        stroke?: string | number;
        size?: string | number;
        xVariance?: string | number;
        yVariance?: string | number;
    }

    interface TreemapPoint extends AbstractSeriesPoint {
        title: string;
        size: number;
        opacity?: number;
        color?: string | number;
        style: CSSProperties;
        children: TreemapPoint[];
    }

    interface ParallelCoordinatesPoint extends AbstractSeriesPoint {
        [key: string]: number;
    }

    interface RadialChartPoint extends AbstractSeriesPoint {
        angle: number;
        radius?: number;
        label?: string;
        subLabel?: string;
        color?: string;
        style?: object;
        className?: string;
    }

    interface SankeyPoint extends AbstractSeriesPoint {
        name: string;
        color?: string;
        opacity?: number;
        key?: string;
    }

    interface SunburstPoint extends AbstractSeriesPoint {
        title: string;
        size: number;
        color?: number;
        label?: string;
        labelStyle?: CSSProperties;
        dontRotateLabel?: boolean;
        children?: SunburstPoint[];
    }

    interface VoronoiPoint extends AbstractSeriesPoint {
        x: number;
        y: number;
    }

    type DecorativeAxisPoint = AbstractSeriesPoint;
    type RadarChartPoint = AbstractSeriesPoint;

    interface AbstractSeriesProps<T extends AbstractSeriesPoint> {
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
    class AbstractSeries<T> extends PureComponent<T> {}

    interface LineSeriesProps extends AbstractSeriesProps<LineSeriesPoint> {
        strokeStyle?: 'dashed' | 'solid'; // default: 'solid'
        curve?: string | ((x: any) => any); // default: null
        getNull?: RVGetNull<LineSeriesPoint>;
    }
    class LineSeries extends AbstractSeries<LineSeriesProps> {}

    interface LineSeriesCanvasProps extends AbstractSeriesProps<LineSeriesPoint> {
        strokeWidth?: number; // default: 1
    }
    class LineSeriesCanvas extends AbstractSeries<LineSeriesCanvasProps> {}

    interface HorizontalBarSeriesProps extends AbstractSeriesProps<HorizontalBarSeriesPoint> {}
    class HorizontalBarSeries extends AbstractSeries<HorizontalBarSeriesProps> {}

    interface HorizontalBarSeriesCanvasProps extends AbstractSeriesProps<HorizontalBarSeriesPoint> {}
    class HorizontalBarSeriesCanvas extends AbstractSeries<HorizontalBarSeriesCanvasProps> {}

    interface VerticalBarSeriesProps extends AbstractSeriesProps<VerticalBarSeriesPoint> {}
    class VerticalBarSeries extends AbstractSeries<VerticalBarSeriesProps> {}

    interface VerticalBarSeriesCanvasProps extends AbstractSeriesProps<VerticalBarSeriesPoint> {}
    class VerticalBarSeriesCanvas extends AbstractSeries<VerticalBarSeriesCanvasProps> {}

    interface VerticalRectSeriesProps extends AbstractSeriesProps<VerticalRectSeriesPoint> {}
    class VerticalRectSeries extends AbstractSeries<VerticalRectSeriesProps> {}

    interface VerticalRectSeriesCanvasProps extends AbstractSeriesProps<VerticalRectSeriesPoint> {}
    class VerticalRectSeriesCanvas extends AbstractSeries<VerticalRectSeriesCanvasProps> {}

    interface HorizontalRectSeriesProps extends AbstractSeriesProps<HorizontalRectSeriesPoint> {}
    class HorizontalRectSeries extends AbstractSeries<HorizontalRectSeriesProps> {}

    interface HorizontalRectSeriesCanvasProps extends AbstractSeriesProps<HorizontalRectSeriesPoint> {}
    class HorizontalRectSeriesCanvas extends AbstractSeries<HorizontalRectSeriesCanvasProps> {}

    interface LabelSeriesProps extends AbstractSeriesProps<LabelSeriesPoint> {
        allowOffsetToBeReversed?: boolean;
        marginLeft?: number;
        marginTop?: number;
        rotation?: number; // default: 0
        labelAnchorX?: string;
        labelAnchorY?: string;
    }
    class LabelSeries extends AbstractSeries<LabelSeriesProps> {}

    interface PolygonSeriesProps extends AbstractSeriesProps<PolygonSeriesPoint> {}
    class PolygonSeries extends AbstractSeries<PolygonSeriesProps> {}

    interface RectSeriesProps extends AbstractSeriesProps<RectSeriesPoint> {
        linePosAttr?: string;
        valuePosAttr?: string;
        lineSizeAttr?: string;
        valueSizeAttr?: string;
    }
    class RectSeries extends AbstractSeries<RectSeriesProps> {}

    interface RectSeriesCanvasProps extends AbstractSeriesProps<RectSeriesPoint> {}
    class RectSeriesCanvas extends AbstractSeries<RectSeriesCanvasProps> {}

    interface MarkSeriesProps extends AbstractSeriesProps<MarkSeriesPoint> {
        getNull?: RVGetNull<MarkSeriesPoint>;
        strokeWidth?: number;
    }
    class MarkSeries extends AbstractSeries<MarkSeriesProps> {}

    interface MarkSeriesCanvasProps extends AbstractSeriesProps<MarkSeriesPoint> {}
    class MarkSeriesCanvas extends AbstractSeries<MarkSeriesCanvasProps> {}

    interface WhiskerSeriesProps extends AbstractSeriesProps<WhiskerSeriesPoint> {
        strokeWidth?: number; // default: 1
    }
    class WhiskerSeries extends AbstractSeries<WhiskerSeriesProps> {}

    interface HeatmapSeriesProps extends AbstractSeriesProps<HeatmapSeriesPoint> {}
    class HeatmapSeries extends AbstractSeries<HeatmapSeriesProps> {}

    interface ContourSeriesProps extends AbstractSeriesProps<ContourSeriesPoint> {
        bandwidth?: number; // default: 40
        marginLeft?: number;
        marginTop?: number;
    }
    class ContourSeries extends AbstractSeries<ContourSeriesProps> {}

    interface CustomSVGSeriesProps extends AbstractSeriesProps<CustomSVGSeriesPoint> {
        customComponent?: string | ((row: any) => any); // default: 'circle'
        marginLeft?: number;
        marginTop?: number;
    }
    class CustomSVGSeries extends AbstractSeries<CustomSVGSeriesProps> {}

    interface AreaSeriesProps extends AbstractSeriesProps<AreaSeriesPoint> {
        getNull?: RVGetNull<AreaSeriesPoint>;
    }
    class AreaSeries extends AbstractSeries<AreaSeriesProps> {}

    interface ArcSeriesProps extends AbstractSeriesProps<ArcSeriesPoint> {
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
    class ArcSeries extends AbstractSeries<ArcSeriesProps> {}

    interface LineMarkSeriesProps extends AbstractSeriesProps<LineMarkSeriesPoint> {
        curve?: string | ((x: any) => any); // default: null
        getNull?: RVGetNull<LineMarkSeriesPoint>;
        lineStyle?: CSSProperties; // default: {}
        markStyle?: CSSProperties; // default: {}
        strokeStyle?: 'dashed' | 'solid'; // default: 'solid'
    }
    class LineMarkSeries extends AbstractSeries<LineMarkSeriesProps> {}

    interface LineMarkSeriesCanvasProps extends AbstractSeriesProps<LineMarkSeriesPoint> {}
    class LineMarkSeriesCanvas extends AbstractSeries<LineMarkSeriesCanvasProps> {}

    interface HighlightProps extends AbstractSeriesProps<LineMarkSeriesPoint> {
        enableX?: boolean;
        enableY?: boolean;
        highlightHeight: number;
        highlightWidth: number;
        highlightX: string | number;
        highlightY: string | number;
        onBrushStart: (row: any) => any;
        onDragStart: (row: any) => any;
        onBrush: (row: any) => any;
        onDrag: (row: any) => any;
        onBrushEnd: (row: any) => any;
        onDragEnd: (row: any) => any;
    }
    class Highlight extends AbstractSeries<HighlightProps> {}

    interface HintProps {
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
    class Hint<T = any> extends PureComponent<HintProps & T> {}

    interface BordersProps {
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
    class Borders<T = any> extends PureComponent<BordersProps & T> {}

    interface CrosshairProps {
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
    class Crosshair<T = any> extends PureComponent<CrosshairProps & T> {}

    interface XYPlotProps {
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
    class XYPlot<T = any> extends Component<XYPlotProps & T> {}

    interface DecorativeAxisProps extends AbstractSeriesProps<DecorativeAxisPoint> {
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
    class DecorativeAxis extends AbstractSeries<DecorativeAxisProps> {}

    interface XAxisProps {
        orientation?: 'top' | 'bottom'; // default: 'bottom'
        attr?: string; // default: 'x'
        attrAxis?: string; // default: 'y'
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
    const XAxis: SFC<XAxisProps>;

    interface YAxisProps {
        orientation?: 'left' | 'right'; // default: 'left'
        attr?: string; // default: 'y'
        attrAxis?: string; // default: 'x'
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
    const YAxis: SFC<YAxisProps>;

    interface CircularGridLinesProps {
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
    class CircularGridLines<T = any> extends PureComponent<CircularGridLinesProps & T> {}

    interface GridLinesProps {
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
    class GridLines<T = any> extends PureComponent<GridLinesProps & T> {}

    interface GradientDefsProps {
        className?: string; // default: ''
    }
    class GradientDefs<T = any> extends PureComponent<GradientDefsProps & T> {}

    interface VerticalGridLinesProps {
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
    const VerticalGridLines: SFC<VerticalGridLinesProps>;

    interface HorizontalGridLinesProps {
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
    const HorizontalGridLines: SFC<HorizontalGridLinesProps>;

    interface VoronoiProps {
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
    const Voronoi: SFC<VoronoiProps>;

    interface DiscreteColorLegendProps {
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
    const DiscreteColorLegend: SFC<DiscreteColorLegendProps>;

    interface SearchableDiscreteColorLegendProps {
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
    const SearchableDiscreteColorLegend: SFC<SearchableDiscreteColorLegendProps>;

    interface ContinuousColorLegendProps {
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
    const ContinuousColorLegend: SFC<ContinuousColorLegendProps>;

    interface ContinuousSizeLegendProps {
        className?: string; // default: ''
        circlesTotal?: number; // default: 10
        endSize?: number; // default: 20
        endTitle: number | string;
        height?: number;
        startSize?: number; // default: 2
        startTitle: number | string;
        width?: number;
    }
    const ContinuousSizeLegend: SFC<ContinuousSizeLegendProps>;
    interface Margin {
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    }
    interface AnimationParam {
        stiffness?: number;
        nonAnimatedProps?: string[];
        damping?: number;
    }
    interface TreemapProps {
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
    }
    class Treemap<T = any> extends Component<TreemapProps & T> {}

    interface RadialChartProps {
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
    class RadialChart<T = any> extends Component<RadialChartProps & T> {}

    interface RadarChartProps {
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
    class RadarChart<T = any> extends Component<RadarChartProps & T> {}

    interface ParallelCoordinatesProps {
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
    class ParallelCoordinates<T = any> extends Component<ParallelCoordinatesProps & T> {}

    interface SankeyProps {
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
    class Sankey<T = any> extends Component<SankeyProps & T> {}

    interface SunburstProps {
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
    class Sunburst<T = any> extends Component<SunburstProps & T> {}

    type StackDirections = 'x' | 'y' | 'radius' | 'angle' | 'color' | 'fill' | 'stroke' | 'opacity' | 'size';
    interface FlexibleXYPlotProps {
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
    class FlexibleXYPlot<T = any> extends Component<FlexibleXYPlotProps & T> {}

    interface FlexibleWidthXYPlotProps {
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
    class FlexibleWidthXYPlot<T = any> extends Component<FlexibleWidthXYPlotProps & T> {}

    interface FlexibleHeightXYPlotProps {
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
    class FlexibleHeightXYPlot<T = any> extends Component<FlexibleHeightXYPlotProps & T> {}

    function makeHeightFlexible(component?: any): any;

    function makeVisFlexible(component?: any): any;

    function makeWidthFlexible(component?: any): any;

    const AxisUtils: {
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

    const ScaleUtils: {
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
