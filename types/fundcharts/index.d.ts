// Type definitions for airbnb-prop-types 2.13
// Project: https://github.com/MichealWayne/FundCharts
// Definitions by: Cao Qiubin <https://github.com/heyyybingo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4
declare namespace FundCharts {
    interface BasicToolTipOptions {
        width?: number;
        height?: number;
        font?: string;
        color?: string;
        textAlign?: string;
        backgroundColor?: string;
        top?: number;
        showTip?: (xData: string, yDatas: number[]) => any | string;
    }
    interface ArrowToolTipOptions {
        width?: number;
        height?: number;
        font?: string;
        color?: string;
        textAlign?: string;
        backgroundColor?: string;
        top?: number;
        showTip?: (xData: string, yDatas: number[]) => any | string;
    }
    interface KlineToolTipOptions {
        xWidth?: number;
        xHeight?: number;
        yWidth?: number;
        yHeight?: number;
        font?: string;
        color?: string;
        textAlign?: string;
        backgroundColor?: string;
        showTip?: (xData: string, yDatas: number[]) => any | string;
        showValTip?: (yData: number) => any | string;
    }
    interface PieCenterToolTipOptions {
        font?: string;
        color?: string;
        valColor?: string;
        textAlign?: string;
        valY?: number;
        showTip?: (xData: string, yDatas: number[]) => any | string;
        showValTip?: (yData: number) => any | string;
    }
    interface PieLabelToolTipOptions {
        font?: string;
        color?: string;
        valColor?: string;
        textAlign?: string;
        //valY?:number;
        showTip?: (xData: string, yDatas: number[]) => any | string;
        showValTip?: (yData: number) => any | string;
    }
    interface LabelsToolTipOptions {
        font?: string;
        color?: string;
        valColor?: string;
        valX?: number;
        valY?: number;
        showTip?: (xData: string, yDatas: number[]) => any | string;
        showValTip?: (yData: number) => any | string;
    }

    class BaseChart {
        init(flag?: boolean): void;
        drawer: {
            drawHover: (x: number, y: number) => void;
            [props: string]: any;
        };
        $el: HTMLElement;
        canvas: HTMLCanvasElement;
        ctx: any;
        _chart: BaseChart;
        [props: string]: any;
    }
    interface BarOptions {
        id: string;
        xaxis: string[] | number[];
        datas: Array<number[]>;

        barMargin?: number;
        backgroundColor?: string;
        duration?: number;
        fontFamily?: string;
        handleTextX?: (ctx?: any, xaxis?: string[] | number[]) => void;
        handleTextY?: (
            ctx?: any,
            yaxis?: { min?: number; max?: number; unit?: number },
        ) => void;
        chartLeft?: number;
        chartRight?: number;
        chartTop?: number;
        colors?: string[];
        hover?: (index?: number, dataset?: Array<number>, x?: number, y?: number) => void;
        hoverHighlight?: number;
        events?: string[];
        negativeColor?: string;
        noAnimation?: boolean;
        noDash?: boolean;
        onAnimation?: (process: number) => void;
        onFinish?: () => void;
        range?: { min?: number; max?: number };
        grid?: {
            showGrid?: boolean;
            color?: string;
            xTickLength?: number;
            yTickLength?: number;
        };
        dash?: {
            color?: string;
            length?: number;
            isSolid?: boolean;
        };
        isStack?: boolean;
        toolTip?: BasicToolTipOptions | ArrowToolTipOptions;
    }

    export class bar extends BaseChart {
        constructor(options: BarOptions);
        update(opts: BarOptions): void;
        opts: BarOptions;
    }
    interface KlineOptions {
        id: string;
        xaxis: string[] | number[];
        datas: Array<number[]>;

        backGroundColor?: string;

        chartLeft?: number;
        chartRight?: number;
        chartTop?: number;
        duration?: number;
        fontFamily?: string;
        handleTextX?: (ctx?: any, xaxis?: string[] | number[]) => void;
        handleTextY?: (
            ctx?: any,
            yaxis?: { min?: number; max?: number; unit?: number },
        ) => void;
        yaxisfunc?: (data: number) => number | string;
        colors?: string[];
        noAnimation?: boolean;
        noDash?: boolean;
        hover?: (index?: number, dataset?: Array<number>, x?: number, y?: number) => void;
        events?: string[];
        hoverLineColor?: string;
        onAnimation?: (process: number) => void;
        onFinish?: () => void;
        range?: { min?: number; max?: number };
        upHollow?: boolean;
        grid?: {
            showGrid?: boolean;
            color?: string;
            xTickLength?: number;
            yTickLength?: number;
        };
        dash?: {
            color?: string;
            length?: number;
            isSolid?: boolean;
        };

        toolTip?: KlineToolTipOptions;
    }
    export class kline extends BaseChart {
        constructor(options: KlineOptions);
        update(opts: KlineOptions): void;
        opts: KlineOptions;
    }

    interface LineOptions {
        id: string;
        xaxis: string[] | number[];
        datas: Array<number[]>;

        allGradient?: boolean;
        backGroundColor?: string;
        chartLeft?: number;
        chartRight?: number;
        chartTop?: number;
        duration?: number;
        fontFamily?: string;
        handleTextX?: (ctx?: any, xaxis?: LineOptions['xaxis']) => void;
        handleTextY?: (
            ctx?: any,
            yaxis?: { min?: number; max?: number; unit?: number },
        ) => void;
        yaxisfunc?: (data: number) => number | string;
        colors?: string[];
        noGradient?: boolean;
        noDash?: boolean;
        noHoverLine?: boolean;
        hideHoverPoints?: boolean;
        noAnimation?: boolean;
        lineWidths?: number[];
        hover?: (index?: number, dataset?: Array<number>, x?: number, y?: number) => void;
        hoverLineColor?: string;
        onAnimation?: (process: number) => void;
        onFinish?: () => void;
        range?: { min: number; max: number };
        events?: string[];
        noHoverEvent?: boolean;
        curveLine?: boolean;
        grid?: {
            showGrid?: boolean;
            color?: string;
            xTickLength?: number;
            yTickLength?: number;
        };
        dash?: {
            color?: string;
            length?: number;
            isSolid?: boolean;
        };
        toolTip?: BasicToolTipOptions | ArrowToolTipOptions;
    }
    export class line extends BaseChart {
        constructor(options: LineOptions);
        update(opts: LineOptions): void;
        opts: LineOptions;
    }
    interface PieOptions {
        id: string;
        //xaxis:string[]|number[]
        datas: number[];

        annularRate?: number | boolean;
        backGroundColor?: string;
        duration?: number;
        radius?: number;
        startAngle?: number;
        origin?: { x: number; y: number };
        colors?: string[];
        lineWidth?: number;
        widthRates?: number[] | null;
        hover?: (index?: number, dataset?: Array<number>, x?: number, y?: number) => void;
        hoverHighlight?: number;
        hoverRate?: number;
        events?: string[];
        noAnimation?: boolean;
        onAnimation?: (process: number) => void;
        onFinish?: () => void;

        toolTip?: PieCenterToolTipOptions | PieLabelToolTipOptions | LabelsToolTipOptions;
    }
    export class pie extends BaseChart {
        constructor(options: PieOptions);
        update(opts: PieOptions): void;
        opts: PieOptions;
    }
    interface RadarOptions {
        id: string;
        //xaxis:string[]|number[]
        datas: Array<number[]>;

        backGroundColor?: string;
        radius?: number;
        origin?: { x?: number; y?: number };
        colors?: string[];
        duration?: number;
        noAnimation?: boolean;
        noFill?: boolean;
        fillGrid?: string;
        gridNumber?: number;
        maxRate?: number;
        hidePoints?: boolean;
        hover?: (index?: number, dataset?: Array<number>, x?: number, y?: number) => void;
        hoverHighlight?: number;
        events?: string[];
        onAnimation?: (process: number) => void;
        onFinish?: () => void;

        toolTip?: LabelsToolTipOptions;
    }
    export class radar extends BaseChart {
        constructor(options: RadarOptions);
        update(opts: RadarOptions): void;
        opts: RadarOptions;
    }
    interface ScatterOptions {
        id: string;
        //xaxis:string[]|number[]
        datas: Array<Array<number[]>>;

        backGroundColor?: string;
        borderRate?: number;
        chartLeft?: number;
        chartRight?: number;
        chartTop?: number;
        duration?: number;
        fontFamily?: string;
        handleTextX?: (ctx?: any, xaxis?: string[] | number[]) => void;
        handleTextY?: (
            ctx?: any,
            yaxis?: { min?: number; max?: number; unit?: number },
        ) => void;
        yaxisfunc?: (data: number) => number | string;
        colors?: string[];
        noAnimation?: boolean;
        noDash?: boolean;
        hover?: (index?: number, dataset?: Array<number>, x?: number, y?: number) => void;
        events?: string[];
        hoverLineColor?: string;
        onAnimation?: (process: number) => void;
        onFinish?: () => void;
        range?: { x: [number, number]; y: [number, number] };
        upHollow?: boolean;
        grid?: {
            showGrid?: boolean;
            color?: string;
            xTickLength?: number;
            yTickLength?: number;
        };
        dash?: {
            color?: string;
            length?: number;
            isSolid?: boolean;
        };
    }
    export class scatter extends BaseChart {
        constructor(options: ScatterOptions);
        update(opts: ScatterOptions): void;
        opts: ScatterOptions;
    }
}

// declare module 'fundcharts'{
//     export =fundcharts
// }

export = FundCharts;
export as namespace FundCharts;
