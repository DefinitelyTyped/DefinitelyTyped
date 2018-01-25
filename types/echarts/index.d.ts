import { type } from "os";

// Type definitions for echarts
// Project: http://echarts.baidu.com/
// Definitions by: Xie Jingyang <https://github.com/xieisabug>, AntiMoron <https://github.com/AntiMoron>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace echarts {
    function init(dom: HTMLDivElement | HTMLCanvasElement, theme?: Object | string, opts?: {
        devicePixelRatio?: number
        renderer?: string
    }): ECharts;

    const graphic: Graphic;

    interface Graphic {
        clipPointsByRect(points: number[][], rect: ERectangle): number[][];
        clipRectByRect(targetRect: ERectangle, rect: ERectangle): ERectangle;
        LinearGradient: { new(x: number, y: number, x2: number, y2: number, colorStops: Array<Object>, globalCoord?: boolean): LinearGradient }
    }

    function connect(group: string | Array<string>): void;

    function disConnect(group: string): void;

    function dispose(target: ECharts | HTMLDivElement | HTMLCanvasElement): void;

    function getInstanceByDom(target: HTMLDivElement | HTMLCanvasElement): void;

    function registerMap(mapName: string, geoJson: Object, specialAreas?: Object): void;

    function registerTheme(themeName: string, theme: Object): void;

    interface MapObj {
        /** geoJson data for map */
        geoJson: object,
        /** special areas fro map */
        specialAreas: object
    }

    function getMap(mapName: string): MapObj;

    interface LinearGradient {
        colorStops: Array<Object>;
        global: boolean;
        type: string;
        x: number
        x2: number
        y: number
        y2: number
    }

    interface ECharts {
        group: string

        setOption(option: EChartOption, notMerge?: boolean, notRefreshImmediately?: boolean): void

        getWidth(): number

        getHeight(): number

        getDom(): HTMLCanvasElement | HTMLDivElement

        getOption(): Object

        resize(): void

        dispatchAction(payload: Object): void

        on(eventName: string, handler: Function, context?: Object): void

        off(eventName: string, handler?: Function): void

        showLoading(type?: string, opts?: Object): void

        hideLoading(): void

        getDataURL(opts: {
            /** 导出的格式，可选 png, jpeg */
            type?: string,
            /** 导出的图片分辨率比例，默认为 1。*/
            pixelRatio?: number,
            /** 导出的图片背景色，默认使用 option 里的 backgroundColor */
            backgroundColor?: string
        }): string

        getConnectedDataURL(opts: {
            /** 导出的格式，可选 png, jpeg */
            type: string,
            /** 导出的图片分辨率比例，默认为 1。 */
            pixelRatio: number,
            /** 导出的图片背景色，默认使用 option 里的 backgroundColor */
            backgroundColor: string
        }): string

        clear(): void

        isDisposed(): boolean

        dispose(): void

        /** 转换逻辑点到像素 */
        convertToPixel(finder: ConvertFinder | string, value: string | Array<any>): string | Array<any>

        convertFromPixel(finder: ConvertFinder | string, value: Array<any> | string): Array<any> | string

        containPixel(finder: ConvertFinder | string,
            /** 要被判断的点，为像素坐标值，以 echarts 实例的 dom 节点的左上角为坐标 [0, 0] 点。*/
            value: any[]): boolean
    }

    interface ConvertFinder {
        seriesIndex?: number,
        seriesId?: string,
        seriesName?: string,
        geoIndex?: number,
        geoId?: string,
        geoName?: string,
        xAxisIndex?: number,
        xAxisId?: string,
        xAxisName?: string,
        yAxisIndex?: number,
        yAxisId?: string,
        yAxisName?: string,
        gridIndex?: number,
        gridId?: string
        gridName?: string
    }

    interface ERectangle {
        x: number,
        y: number,
        width: number,
        height: number
    }

    interface EChartOption {
        title?: EChartTitleOption
        legend?: Object,
        grid?: Object,
        xAxis?: Object,
        yAxis?: Object,
        polar?: Object,
        radiusAxis?: Object,
        angleAxis?: Object,
        radar?: Object,
        dataZoom?: Array<Object>,
        visualMap?: Array<Object>,
        tooltip?: Object,
        toolbox?: Object,
        geo?: Object,
        parallel?: Object,
        parallelAxis?: Object,
        timeline?: Object,
        series?: Array<Object>,
        color?: Array<Object>,
        backgroundColor?: string,
        textStyle?: Object,
        animation?: boolean,
        animationDuration?: number,
        animationEasing?: string,
        animationDurationUpdate?: number,
        animationEasingUpdate?: string
    }

    interface EChartTitleOption {
        show?: boolean;
        text?: string;
        link?: string,
        target?: string,
        textStyle?: Object,
        subtext?: string,
        sublink?: string,
        subtarget?: string,
        subtextStyle?: Object,
        padding?: number,
        itemGap?: number,
        zlevel?: number,
        z?: number,
        left?: string,
        top?: string,
        right?: string,
        bottom?: string,
        backgroundColor?: string,
        borderColor?: string,
        borderWidth?: number,
        shadowBlur?: number,
        shadowColor?: number,
        shadowOffsetX?: number,
        shadowOffsetY?: number,
    }
}

export = echarts;

