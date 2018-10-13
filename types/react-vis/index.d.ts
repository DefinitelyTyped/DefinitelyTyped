// Type definitions for react-vis 1.11.2
// Project: https://github.com/uber/react-vis#readme
// Definitions by: Domino987 <https://github.com/Domino987>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "react-vis" {

    export class AbstractSeries extends React.Component<PropsAbstractSeries> {

    }

    export class ArcSeries extends React.Component<PropsArcSeries> {

    }

    export class AreaSeries extends React.Component<PropsAreaSeries> {

    }

    export class Borders extends React.Component<PropsBorders> {

    }

    export class CircularGridLines extends React.Component<PropsCircularGridLines> {

    }

    export class ContourSeries extends React.Component<PropsContourSeries> {

    }

    export class Crosshair extends React.Component<PropsCrosshair> {

    }

    export class CustomSVGSeries extends React.Component<PropsCustomSVGSeries> {

    }

    export class DecorativeAxis extends React.Component<PropsDecorativeAxis> {

    }

    export class FlexibleHeightXYPlot extends React.Component<PropsFlexibleHeightXYPlot> {

    }

    export class Voronoi extends React.Component<PropsVoronoi> {

    }

    export class FlexibleWidthXYPlot extends React.Component<PropsFlexibleWidthXYPlot> {

    }

    export class ScaleUtils extends React.Component<PropsScaleUtils> {
      static getAttributeScale: any;

    }

    export class FlexibleXYPlot extends React.Component<PropsFlexibleXYPlot> {

    }

    export class GradientDefs extends React.Component<PropsGradientDefs> {

    }

    export class GridLines extends React.Component<PropsGridLines> {

    }

    export class HeatmapSeries extends React.Component<PropsHeatmapSeries> {

    }

    export class Hint extends React.Component<PropsHint> {

        static ALIGN: {
            AUTO?: string;
            BOTTOM?: string;
            BOTTOM_EDGE?: string;
            LEFT?: string;
            LEFT_EDGE?: string;
            RIGHT?: string;
            RIGHT_EDGE?: string;
            TOP?: string;
            TOP_EDGE?: string;
        };

        static ORIENTATION: {
            BOTTOM_LEFT?: string;
            BOTTOM_RIGHT?: string;
            TOP_LEFT?: string;
            TOP_RIGHT?: string;

        };

    }

    export class HorizontalBarSeries extends React.Component<PropsHorizontalBarSeries> {

    }

    export class HorizontalBarSeriesCanvas extends React.Component<PropsHorizontalBarSeriesCanvas> {

    }

    export class HorizontalGridLines extends React.Component<PropsHorizontalGridLines> {

    }

    export class HorizontalRectSeries extends React.Component<PropsHorizontalRectSeries> {

    }

    export class HorizontalRectSeriesCanvas extends React.Component<PropsHorizontalRectSeriesCanvas> {

    }
    export class infoObject {

        event: MouseEvent;

        index: number;

        innerX: number;

        innerY: number;
    }

    export class LabelSeries extends React.Component<PropsLabelSeries> {

    }

    export class LineMarkSeries extends React.Component<PropsLineMarkSeries> {

    }

    export class LineMarkSeriesCanvas extends React.Component<PropsLineMarkSeriesCanvas> {

    }

    export class LineSeries extends React.Component<PropsLineSeries> {

    }

    export class LineSeriesCanvas extends React.Component<PropsLineSeriesCanvas> {

    }

    export class MarkSeries extends React.Component<PropsMarkSeries> {

    }

    export class MarkSeriesCanvas extends React.Component<PropsMarkSeriesCanvas> {

    }

    export class ParallelCoordinates extends React.Component<PropsParallelCoordinates> {

    }

    export class PolygonSeries extends React.Component<PropsPolygonSeries> {

    }

    export class RadarChart extends React.Component<PropsRadarChart> {

    }

    export class RadialChart extends React.Component<PropsRadialChart> {

    }

    export class RectSeries extends React.Component<PropsRectSeries> {

    }

    export class RectSeriesCanvas extends React.Component<PropsRectSeriesCanvas> {

    }

    export class Sankey extends React.Component<PropsSankey> {

    }

    export class Sunburst extends React.Component<PropsSunburst> {

    }

    export class Treemap extends React.Component<PropsTreemap> {

    }

    export class VerticalBarSeries extends React.Component<PropsVerticalBarSeries> {

    }

    export class VerticalGridLines extends React.Component<PropsVerticalGridLines> {

    }

    export class VerticalBarSeriesCanvas extends React.Component<PropsVerticalBarSeriesCanvas> {

    }

    export class VerticalRectSeries extends React.Component<PropsVerticalRectSeries> {

    }

    export class VerticalRectSeriesCanvas extends React.Component<PropsVerticalRectSeriesCanvas> {

    }

    export class WhiskerSeries extends React.Component<PropsWhiskerSeries> {

    }

    export class XAxis extends React.Component<PropsXAxis> {

    }

    export class XYPlot extends React.Component<PropsXYPlot> {
    }

    export class YAxis extends React.Component<PropsYAxis> {

    }

    export type PropsAbstractSeries = {

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        innerWidth: number;

        color?: string;

        opacity?: number;

        marginTop: number;

        marginLeft: number;

        marginRight?: number;

        marginBottom: number;

        innerHeight: number;

        onBrushStart?: (e: any) => void;        

        onDragEnd?: () => void;     

        onDragStart?: () => void; 

        onDrag?: (e: object) => void;

        onBrushEnd: (e: any) => void;

        onBrush?: (e: any) => void;

        isOverViewHighlight?: boolean;

        drawArea?: {top: number, bottom: number, right: number | Date, left: number | Date};                 

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsArcSeries = {

        angleBaseValue?: number;

        angleDistance?: number;

        angleDomain?: Array<number>;

        angleRange?: Array<number>;

        angleType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        animation?: { duration: number } | boolean;

        arcClassName?: string;

        center?: (datapoint: number, info: infoObject) => void;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getAngle?: (datapoint: number, info: infoObject) => void;

        getAngle0?: (datapoint: number, info: infoObject) => void;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getRadius?: (datapoint: number, info: infoObject) => void;

        getRadius0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: void, info: infoObject) => void;

        onNearestXY?: (datapoint: void, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        radiusBaseValue?: number;

        radiusDistance?: number;

        radiusDomain?: Array<number>;

        radiusRange?: Array<number>;

        radiusType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsAreaSeries = {
        fill?: string | number;

        opacity?: number;

        className?: string;

        getNull(d: void, i: number, array: number[]): void;

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stroke?: number | string;

        color?: number | string;

    };

    export type PropsAxisUtils = {
        DIRECTION: {
            HORIZONTAL?: string;
            VERTICAL?: string;

        }

        ORIENTATION: {
            BOTTOM?: string;
            HORIZONTAL?: string;
            LEFT?: string;
            RIGHT?: string;
            TOP?: string;
            VERTICAL?: string;
        }

        getTickValues(scale?: void, tickTotal?: void, tickValues?: any): void;

        getTicksTotalFromSize(size?: any): void;

    };

    export type PropsBorders = {

        innerHeight?: number;

        innerWidth?: number;

        marginBottom?: number;

        marginLeft?: number;

        marginRight?: number;

        marginTop?: number;

        style?: Object;

    };

    export type PropsCircularGridLines = {

        animation?: { duration: number } | boolean;

        centerX?: number;

        centerY?: number;

        height?: number;

        innerHeight?: number;

        innerWidth?: number;

        left?: number;

        marginBottom?: number;

        marginLeft?: number;

        marginRight?: number;

        marginTop?: number;

        rRange?: Array<number>;

        style?: Object;

        tickTotal?: number;

        tickValues?: Array<void>;

        top?: number;

        width?: number;

    };

    export type PropsContinuousColorLegend = {

        displayName?: string;

        className?: string;

        endColor?: string;

        endTitle?: string | number;

        height?: number;

        midColor?: string;

        midTitle?: string | number;

        startColor?: string;

        startTitle?: string | number;

        width?: number;

    };

    export type PropsContinuousSizeLegend = {

        displayName?: string;

        circlesTotal?: number;

        className?: string;

        endSize?: number;

        endTitle?: string | number;

        height?: number;

        startSize?: number;

        startTitle?: string | number;

        width?: number;

    };

    export type PropsContourSeries = {

        animation?: { duration: number } | boolean;

        bandwidth?: number;

        className?: string;

        data?: Array<Object>;

        marginLeft?: number;

        marginTop?: number;

        style?: Object;

    };

    export type PropsCrosshair = {

        className?: string;

        innerHeight?: number;

        innerWidth?: number;

        itemsFormat?: (datapoint: number, info: infoObject) => void;

        marginLeft?: number;

        marginTop?: number;

        orientation?: 'top' | 'left' | 'bottom' | 'right';

        style?: Object;

        titleFormat?: (datapoint: number, info: infoObject) => void;

        values?: Array<Object>;

    };

    export type PropsCustomSVGSeries = {

        animation?: { duration: number } | boolean;

        className?: string;

        customComponent?: void;

        data?: Array<Object>;

        marginLeft?: number;

        marginTop?: number;

        style?: Object;

    };

    export type PropsDecorativeAxis = {

        key?: string;

        className?: string;

        tickValue?(d?: any): void;

        animation?: { duration: number } | boolean;

        axisDomain?: Array<number>;

        axisEnd?: Object;

        axisStart?: Object;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        numberOfTicks?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        tickSize?: number;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');


    };

    export type PropsDiscreteColorLegend = {

        displayName?: string;

        className?: string;

        height?: number;

        colors?: Array<string>;

        items?: Array<string | { title: string, color: string, disabled: boolean } | Element>;

        onItemClick?: ((arg0: void, arg1: Object, arg2: void, arg3: number) => any) | undefined;

        onItemMouseEnter?: (datapoint: number, info: infoObject) => void;

        onItemMouseLeave?: (datapoint: number, info: infoObject) => void;

        orientation?: ('vertical' | 'horizontal');

        width?: number;

    };

    export type PropsFlexibleHeightXYPlot = {

        animation?: { duration: number } | boolean;

        className?: string;

        dontCheckIfEmpty?: boolean;

        margin?: number | Object;

        onClick?: (datapoint: number, info: infoObject) => void;

        onDoubleClick?: (datapoint: number, info: infoObject) => void;

        onMouseDown?: (datapoint: number, info: infoObject) => void;

        onMouseEnter?: (datapoint: number, info: infoObject) => void;

        onMouseLeave?: (datapoint: number, info: infoObject) => void;

        onMouseMove?: (datapoint: number, info: infoObject) => void;

        onWheel?: (e: React.WheelEvent) => void;

        stackBy?: string;

        style?: Object;

    };

    export type PropsFlexibleWidthXYPlot = {

        animation?: { duration: number } | boolean;

        height: number;

        className?: string;

        dontCheckIfEmpty?: boolean;

        margin?: number | Object;

        onClick?: (datapoint: number, info: infoObject) => void;

        onDoubleClick?: (datapoint: number, info: infoObject) => void;

        onMouseDown?: (datapoint: number, info: infoObject) => void;

        onMouseEnter?: (datapoint: number, info: infoObject) => void;

        onMouseLeave?: (datapoint: number, info: infoObject) => void;

        onMouseMove?: (datapoint: number, info: infoObject) => void;

        onWheel?: (e: React.WheelEvent) => void;

        stackBy?: string;

        style?: Object;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        xDomain?: Array<number | Date>;

        yDomain?: Array<number | Date>;

        yPadding?: number;

    };

    export type PropsFlexibleXYPlot = {

        animation?: { duration: number } | boolean;

        className?: string;

        dontCheckIfEmpty?: boolean;

        margin?: number | Object;

        onClick?: (datapoint: number, info: infoObject) => void;

        onDoubleClick?: (datapoint: number, info: infoObject) => void;

        onMouseDown?: (datapoint: number, info: infoObject) => void;

        onMouseEnter?: (datapoint: number, info: infoObject) => void;

        onTouchStart?: (datapoint: number, info: infoObject) => void;


        onTouchEnd?: (datapoint: number, info: infoObject) => void;

        onMouseUp?: (datapoint: number, info: infoObject) => void;

        onMouseLeave?: (datapoint: number, info: infoObject) => void;

        onMouseMove?: (datapoint: number, info: infoObject) => void;

        onWheel?: (e: React.WheelEvent) => void;

        stackBy?: string;

        style?: Object;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        xDomain?: Array<number | Date>;

        yDomain?: Array<number>;

        yPadding?: number;

        xPadding?: number;

        color?: string;

    };

    export type PropsGradientDefs = {

        className?: string;

    };

    export type PropsGridLines = {

        animation?: { duration: number } | boolean;

        attr?: string;

        direction?: string;

        height?: number;

        innerHeight?: number;

        innerWidth?: number;

        left?: number;

        marginBottom?: number;

        marginLeft?: number;

        marginRight?: number;

        marginTop?: number;

        style?: Object;

        tickTotal?: number;

        tickValues?: Array<void>;

        top?: number;

        width?: number;

    };

    export type PropsHeatmapSeries = {

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsHint = {

        horizontalAlign?: string;

        verticalAlign?: string;

        align?: string;

        format?: (datapoint: object, info: infoObject) => void;

        getAlignStyle?: (datapoint: number, info: infoObject) => void;

        innerHeight?: number;

        innerWidth?: number;

        marginLeft?: number;

        marginTop?: number;

        orientation?: 'top' | 'left' | 'bottom' | 'right';

        scales?: boolean;

        style?: Object;

        value?: Object;

    };

    export type PropsHorizontalBarSeries = {

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsHorizontalBarSeriesCanvas = {

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsHorizontalGridLines = {

        displayName?: string;

        requiresSVG?: boolean;

        animation?: { duration: number } | boolean;

        attr?: string;

        direction?: string;

        height?: number;

        innerHeight?: number;

        innerWidth?: number;

        left?: number;

        marginBottom?: number;

        marginLeft?: number;

        marginRight?: number;

        marginTop?: number;

        style?: Object;

        tickTotal?: number;

        tickValues?: Array<void>;

        top?: number;

        width?: number;

    };

    export type PropsHorizontalRectSeries = {

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsHorizontalRectSeriesCanvas = {

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsLabelSeries = {

        animation?: boolean;

        className?: string;

        rotation?: number;

        stack?: boolean;

        allowOffsetToBeReversed?: boolean;

        data?: Array<Object>;

        labelAnchorX?: string;

        labelAnchorY?: string;

        marginLeft?: number;

        marginTop?: number;

        style?: Object;

        xRange?: Array<number>;

        yRange?: Array<number>;

    };

    export type PropsLineMarkSeries = {

        className?: string;

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        curve?: string | (() => any);

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getNull?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        size?: number;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        lineStyle?: Object;

        markStyle?: Object;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        strokeStyle?: Object;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        strokeWidth?: number;

        color?: string;

    };

    export type PropsLineMarkSeriesCanvas = {

        animation?: { duration: number } | boolean;

        color?: string;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        strokeStyle?: string;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        size?: number;

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        strokeWidth?: number;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsLineSeries = {

        className?: string;

        opacity?: number;

        stack?: boolean;

        strokeStyle?: string;

        size?: number;

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        curve?: string | (() => any);

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getNull?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        color?: string | number;

        strokeWidth?: string | number;

    };

    export type PropsLineSeriesCanvas = {

        size?: number;

        strokeStyle?: string;

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        curve?: string;

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        strokeWidth?: string | number;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        color?: string;

    };

    export type PropsMarkSeries = {
        size?: number;

        color?: string | number;

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getNull?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        stroke?: string;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        strokeWidth?: string | number;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsMarkSeriesCanvas = {

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsParallelCoordinates = {

        className?: string;

        colorRange?: string[];

        colorType?: string;

        animation?: { duration: number } | boolean;

        data?: Array<Object>;

        domains?: Array<Object>;

        height?: number;

        margin?: number | Object;

        showMarks?: boolean;

        style?: Object;

        tickFormat?: (tickValue: Date | number) => string | number;

        width?: number;

    };

    export type PropsPolygonSeries = {

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsRadarChart = {

        className?: string;

        colorRange?: string[];

        colorType?: string;

        hideInnerMostValues?: boolean;

        startingAngle?: number;

        animation?: { duration: number } | boolean;

        data?: Array<Object>;

        domains?: Array<Object>;

        height?: number;

        margin?: number | Object;

        style?: Object;

        tickFormat?: (tickValue: Date | number) => string | number;

        width?: number;

    };

    export type PropsRadialChart = {

        className?: string;

        colorRange?: string[];

        colorType?: string;

        getAngle?(d?: any): void;

        getAngle0?(d?: any): void;

        getLabel?(d?: any): void;

        getRadius?(d?: any): void;

        getRadius0?(d?: any): void;

        getSubLabel?(d?: any): void;

        animation?: { duration: number } | boolean;

        data?: Array<Object>;

        height?: number;

        labelsAboveChildren?: boolean;

        labelsStyle?: Object;

        margin?: number | Object;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        showLabels?: boolean;

        style?: Object;

        subLabel?: string;

        width?: number;

    };

    export type PropsRectSeries = {

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsRectSeriesCanvas = {

        className?: string;

        stack?: boolean;

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsSankey = {

        align?: string;

        className?: string;

        hasVoronoi?: boolean;

        hideLabels?: boolean;

        layout?: number;

        height?: number;

        links?: Object;

        margin?: number | Object;

        nodePadding?: number;

        nodeWidth?: number;

        nodes?: Array<Object>;

        onLinkClick?: (datapoint: number, info: infoObject) => void;

        onLinkMouseOut?: (datapoint: number, info: infoObject) => void;

        onLinkMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        style?: Object;

        width?: number;

    };

    export type PropsScaleUtils = {
        extractScalePropsFromProps?(props?: void, attributes?: any): void;

        getAttr0Functor?(props?: void, attr?: any): void;

        getAttributeFunctor?(props?: void, attr?: any): void;

        getAttributeScale?(props?: void, attr?: any): void;

        getAttributeValue?(props?: void, attr?: any): void;

        getDomainByAccessor?(allData?: void, accessor?: void, accessor0?: void, type?: any): void;

        getFontColorFromBackground?(background?: any): void;

        getMissingScaleProps?(props?: void, data?: void, attributes?: any): void;

        getOptionalScaleProps?(props?: any): void;

        getScaleObjectFromProps?(props?: void, attr?: any): void;

        getScalePropTypesByAttribute?(attr?: any): void;

        getXYPlotValues?(props?: void, children?: any): void;

        literalScale?(defaultValue?: any): void;

        getAttributeScale?(props?: void, attr?: any): void;

    };

    export type PropsSearchableDiscreteColorLegend = {

        displayName?: string;

        className?: string;

        searchText?: string;

        searchFn?(items?: void, s?: string): void;

        height?: number;

        items?: Array<string | { title: string, color: String, disabled: boolean } | Element>;

        onItemClick?: ((arg0: void, arg1: Object, arg2: void, arg3: number) => any) | undefined;

        onItemMouseEnter?: (datapoint: number, info: infoObject) => void;

        onItemMouseLeave?: (datapoint: number, info: infoObject) => void;

        onSearchChange?: (datapoint: number, info: infoObject) => void;

        orientation?: ('vertical' | 'horizontal');

        searchPlaceholder?: string;

        width?: number;

    };

    export type PropsSunburst = {

        className?: string;

        colorType?: string;

        hideRootNode?: boolean;

        getAngle?(d?: any): void;

        getAngle0?(d?: any): void;

        getColor?(d?: any): void;

        getLabel?(d?: any): void;

        getSize?(d?: any): void;

        animation?: { duration: number } | boolean;

        data?: Array<Object>;

        height?: number;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        width?: number;

    };

    export type PropsTreemap = {

        className?: string;

        colorRange?: string[];

        data: {
            children?: void[];
        }

        hideRootNode?: boolean;

        animation?: { duration: number } | boolean;

        getColor?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        height?: number;

        margin?: number | Object;

        mode?: string;

        onLeafClick?: (datapoint: number, info: infoObject) => void;

        onLeafMouseOut?: (datapoint: number, info: infoObject) => void;

        onLeafMouseOver?: (datapoint: number, info: infoObject) => void;

        padding?: number;

        sortFunction?: (datapoint: number, info: infoObject) => void;

        useCirclePacking?: boolean;

        width?: number;

    };
    export type PropsVerticalBarSeries = {

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsVerticalBarSeriesCanvas = {

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsVerticalGridLines = {

        attr?: string;

        direction?: string;

        displayName?: string;

        requiresSVG?: boolean;

        animation?: { duration: number } | boolean;

        height?: number;

        innerHeight?: number;

        innerWidth?: number;

        left?: number;

        marginBottom?: number;

        marginLeft?: number;

        marginRight?: number;

        marginTop?: number;

        style?: Object;

        tickTotal?: number;

        tickValues?: Array<void>;

        top?: number;

        width?: number;

    };

    export type PropsVerticalRectSeries = {

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsVerticalRectSeriesCanvas = {

        animation?: { duration: number } | boolean;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsVoronoi = {

        requiresSVG?: boolean;

        className?: string;

        onBlur?(f?: any): void;

        onClick?(f?: any): void;

        onHover?(f?: any): void;

        onMouseDown?(f?: any): void;

        onMouseUp?(f?: any): void;

        x?(d?: any): void;

        y?(d?: any): void;

        extent?: [any[], Date[] | number[]]

        nodes?: Array<Object>;

        polygonStyle?: object,

    };

    export type PropsWhiskerSeries = {

        animation?: { duration: number } | boolean;

        position?: string;

        colorBaseValue?: string;

        colorDistance?: number;

        colorDomain?: Array<string | number>;

        colorRange?: Array<string | number>;

        colorType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        data?: Array<Object>;

        getColor?: (datapoint: number, info: infoObject) => void;

        getColor0?: (datapoint: number, info: infoObject) => void;

        getOpacity?: (datapoint: number, info: infoObject) => void;

        getOpacity0?: (datapoint: number, info: infoObject) => void;

        getSize?: (datapoint: number, info: infoObject) => void;

        getSize0?: (datapoint: number, info: infoObject) => void;

        getX?: (datapoint: number, info: infoObject) => void;

        getX0?: (datapoint: number, info: infoObject) => void;

        getY?: (datapoint: number, info: infoObject) => void;

        getY0?: (datapoint: number, info: infoObject) => void;

        height?: number;

        onNearestX?: (datapoint: object, info: infoObject) => void;

        onNearestXY?: (datapoint: object, info: infoObject) => void;

        onSeriesClick?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOut?: (datapoint: number, info: infoObject) => void;

        onSeriesMouseOver?: (datapoint: number, info: infoObject) => void;

        onSeriesRightClick?: (datapoint: number, info: infoObject) => void;

        onValueClick?: (datapoint: number, info: infoObject) => void;

        onValueMouseOut?: (datapoint: number, info: infoObject) => void;

        onValueMouseOver?: (datapoint: number, info: infoObject) => void;

        onValueRightClick?: (datapoint: number, info: infoObject) => void;

        opacityBaseValue?: number;

        opacityDistance?: number;

        opacityDomain?: Array<number>;

        opacityRange?: Array<number>;

        opacityType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        sizeBaseValue?: number;

        sizeDistance?: number;

        sizeDomain?: Array<number>;

        sizeRange?: Array<number>;

        sizeType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        stack?: boolean;

        strokeWidth?: string | number;

        style?: Object;

        width?: number;

        xBaseValue?: number;

        xDistance?: number;

        xDomain?: Array<number | Date>;

        xRange?: Array<number>;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        yBaseValue?: number;

        yDistance?: number;

        yDomain?: Array<number>;

        yRange?: Array<number>;

        yType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

    };

    export type PropsXAxis = {

        attr?: string;
        attrAxis?: string;
        orientation?: string;

        position?: string;

        displayName?: string;

        requiresSVG?: boolean;

        className?: string;

        height?: number;

        hideLine?: boolean;

        hideTicks?: boolean;

        innerHeight?: number;

        innerWidth?: number;

        left?: number;

        marginBottom?: number;

        marginLeft?: number;

        marginRight?: number;

        marginTop?: number;

        on0?: (datapoint: number, info: infoObject) => void;

        style?: Object;

        tickFormat?: (tickValue: Date | number) => string | number;

        tickLabelAngle?: number;

        tickPadding?: number;

        tickSize?: number;

        tickSizeInner?: number;

        tickSizeOuter?: number;

        tickTotal?: number;

        tickValues?: Array<void>;

        title?: string;

        top?: number;

        width?: number;

    };

    export type PropsXYPlot = {

        animation?: { duration: number } | boolean;

        className?: string;

        dontCheckIfEmpty?: boolean;

        height?: number;

        margin?: number | Object;

        onClick?: (datapoint: number, info: infoObject) => void;

        onDoubleClick?: (datapoint: number, info: infoObject) => void;

        onMouseDown?: (datapoint: number, info: infoObject) => void;

        onMouseEnter?: (datapoint: number, info: infoObject) => void;

        onMouseLeave?: (datapoint: number, info: infoObject) => void;

        onMouseMove?: (datapoint: number, info: infoObject) => void;

        onWheel?: (e: React.WheelEvent) => void;

        stackBy?: string;

        style?: Object;

        width?: number;

        xType?: ('linear' | 'ordinal' | 'category' | 'time' | 'time-utc' | 'log' | 'literal');

        xDomain?: Array<number | Date>;

        xDistance?: number;

        xPadding?: number;

        xRange?: Array<number>;

        yPadding?: number;

        yRange?: Array<number>;

        yDomain?: Array<number>;

    };

    export type PropsXYPlotNameSpace = {

        animation?: { duration: number } | boolean;

        className?: string;

        dontCheckIfEmpty?: boolean;

        height?: number;

        margin?: number | Object;

        onClick?: (datapoint: number, info: infoObject) => void;

        onDoubleClick?: (datapoint: number, info: infoObject) => void;

        onMouseDown?: (datapoint: number, info: infoObject) => void;

        onMouseEnter?: (datapoint: number, info: infoObject) => void;

        onMouseLeave?: (datapoint: number, info: infoObject) => void;

        onMouseMove?: (datapoint: number, info: infoObject) => void;

        onWheel?: (e: React.WheelEvent) => void;

        stackBy?: string;

        style?: Object;

        width?: number;

    };

    export type PropsYAxis = {

        attr?: string;

        attrAxis?: string;

        orientation?: string;

        displayName?: string;

        requiresSVG?: boolean;

        className?: string;

        height?: number;

        hideLine?: boolean;

        hideTicks?: boolean;

        innerHeight?: number;

        innerWidth?: number;

        left?: number;

        marginBottom?: number;

        marginLeft?: number;

        marginRight?: number;

        marginTop?: number;

        on0?: (datapoint: number, info: infoObject) => void;

        style?: Object;

        tickFormat?: (tickValue: Date | number) => string | number;

        tickLabelAngle?: number;

        tickPadding?: number;

        tickSize?: number;

        tickSizeInner?: number;

        tickSizeOuter?: number;

        tickTotal?: number;

        tickValues?: Array<void>;

        title?: string;

        top?: number;

        width?: number;

        position?: string;

    };

    export type PropsmakeHeightFlexible = {

    };

    export type PropsmakeVisFlexible = {

    };

    export type PropsmakeWidthFlexible = {

    };

}
