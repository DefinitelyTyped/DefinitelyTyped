// Type definitions for echarts
// Project: http://echarts.baidu.com/
// Definitions by: Xie Jingyang <https://github.com/xieisabug>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ECharts {
    function init(dom:HTMLDivElement|HTMLCanvasElement, theme?:Object|string, opts?:{
        devicePixelRatio?: number
        renderer?: string
    }): ECharts;
    function connect(group:string|Array<string>);
    function disConnect(group:string);
    function dispose(target: ECharts|HTMLDivElement|HTMLCanvasElement);
    function getInstanceByDom(target: HTMLDivElement|HTMLCanvasElement);
    function registerMap(mapName: string, geoJson: Object, specialAreas?: Object);
    function registerTheme(themeName: string, theme: Object);

    class ECharts {
        group:string;
        setOption(option: EChartOption, notMerge?: boolean, notRefreshImmediately?: boolean)
        getWidth(): number
        getHeight(): number
        getDom(): HTMLCanvasElement|HTMLDivElement
        getOption(): Object
        resize()
        dispatchAction(payload: Object)
        on(eventName: string, handler: Function, context?: Object)
        off(eventName: string, handler?: Function)
        showLoading(type?: string, opts?: Object)
        hideLoading()
        getDataURL(opts: {
            // 导出的格式，可选 png, jpeg
            type?: string,
            // 导出的图片分辨率比例，默认为 1。
            pixelRatio?: number,
            // 导出的图片背景色，默认使用 option 里的 backgroundColor
            backgroundColor?: string
        }):string
        getConnectedDataURL(opts: {
            // 导出的格式，可选 png, jpeg
            type: string,
            // 导出的图片分辨率比例，默认为 1。
            pixelRatio: number,
            // 导出的图片背景色，默认使用 option 里的 backgroundColor
            backgroundColor: string
        }): string
        clear()
        isDisposed(): boolean
        dispose()
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

declare module "echarts" {
    export = ECharts;
}
