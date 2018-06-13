// Type definitions for echarts
// Project: http://echarts.baidu.com/
// Definitions by: Xie Jingyang <https://github.com/xieisabug>
//                 AntiMoron <https://github.com/AntiMoron>
//                 Liveangela <https://github.com/liveangela>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace echarts {
    function init(dom: HTMLDivElement | HTMLCanvasElement, theme?: object | string, opts?: {
        devicePixelRatio?: number
        renderer?: string
        width?: number | string
        height?: number | string
    }): ECharts;

    const graphic: Graphic;

    interface Graphic {
        clipPointsByRect(points: number[][], rect: ERectangle): number[][];
        clipRectByRect(targetRect: ERectangle, rect: ERectangle): ERectangle;
        LinearGradient: { new(x: number, y: number, x2: number, y2: number, colorStops: object[], globalCoord?: boolean): LinearGradient }
    }

    function connect(group: string | string[]): void;

    function disConnect(group: string): void;

    function dispose(target: ECharts | HTMLDivElement | HTMLCanvasElement): void;

    function getInstanceByDom(target: HTMLDivElement | HTMLCanvasElement): ECharts;

    function registerMap(mapName: string, geoJson: object, specialAreas?: object): void;

    function registerTheme(themeName: string, theme: object): void;

    interface MapObj {
        /** geoJson data for map */
        geoJson: object,
        /** special areas fro map */
        specialAreas: object
    }

    function getMap(mapName: string): MapObj;

    interface LinearGradient {
        colorStops: object[];
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

        getOption(): object

        resize(): void

        dispatchAction(payload: object): void

        on(eventName: string, handler: Function, context?: object): void

        off(eventName: string, handler?: Function): void

        showLoading(type?: string, opts?: object): void

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
        convertToPixel(finder: ConvertFinder | string, value: string | any[]): string | any[]

        convertFromPixel(finder: ConvertFinder | string, value: any[] | string): any[] | string

        containPixel(finder: ConvertFinder | string,
            /** 要被判断的点，为像素坐标值，以 echarts 实例的 dom 节点的左上角为坐标 [0, 0] 点。*/
            value: any[]): boolean

        getModel(): {
            getComponent(finder: string): any;
        }
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
        legend?: object,
        grid?: object,
        xAxis?: object,
        yAxis?: object,
        polar?: object,
        radiusAxis?: object,
        angleAxis?: object,
        radar?: object,
        dataZoom?: object[],
        visualMap?: object[],
        tooltip?: object,
        axisPointer?: object,
        toolbox?: object,
        brush?: object,
        geo?: object,
        parallel?: object,
        parallelAxis?: object,
        singleAxis?: object,
        timeline?: object,
        graphic?: object | object[],
        calendar?: object,
        dataset?: object,
        aria?: object,
        series?: object[],
        color?: string[],
        backgroundColor?: string,
        textStyle?: object,
        animation?: boolean,
        animationThreshold?: number,
        animationDuration?: number,
        animationEasing?: string,
        animationDelay?: number | Function,
        animationDurationUpdate?: number | Function,
        animationEasingUpdate?: string,
        animationDelayUpdate?: number | Function,
        progressive?: number,
        progressiveThreshold?: number,
        blendMode?: string,
        hoverLayerThreshold?: number,
        useUTC?: boolean,
        /** echarts-gl options */
        globe?: object,
        geo3D?: object,
        mapbox3D?: object,
        grid3D?: object,
        xAxis3D?: object,
        yAxis3D?: object,
        zAxis3D?: object
    }

    interface EChartTitleOption {
        show?: boolean;
        text?: string;
        link?: string,
        target?: string,
        textStyle?: object,
        subtext?: string,
        sublink?: string,
        subtarget?: string,
        subtextStyle?: object,
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

declare module 'echarts' {
    export = echarts;
}

declare module 'echarts/lib/echarts' {
    export = echarts;
}
