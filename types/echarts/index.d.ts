// Type definitions for echarts 4.1.0
// Project: http://echarts.baidu.com/
// Definitions by: Xie Jingyang <https://github.com/xieisabug>
//                 AntiMoron <https://github.com/AntiMoron>
//                 Liveangela <https://github.com/liveangela>
//                 Ovilia <https://github.com/Ovilia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace echarts {
    /**
     * Creates an ECharts instance, and returns an echartsInstance. You shall
     *     not initialize multiple ECharts instances on a single container.
     *
     * @param {HTMLDivElement | HTMLCanvasElement} dom Instance container,
     *     usually is a `div` element with height and width defined.
     * @param {object | string} [theme] Theme to be applied.
     *     This can be a configuring object of a theme, or a theme name
     *     registered through [echarts.registerTheme](https://echarts.apache.org/api.html#echarts.registerTheme).
     * @param {object} [opts] Chart configurations.
     * @param {number} [opts.devicePixelRatio] Ratio of one physical pixel to
     *     the size of one device independent pixels. Browser's
     *     `window.devicePixelRatio` is used by default.
     * @param {string} [opts.renderer] Supports `'canvas'` or `'svg'`.
     *     See [Render by Canvas or SVG](https://echarts.apache.org/tutorial.html#Render%20by%20Canvas%20or%20SVG).
     * @param {number} [opts.width] Specify width explicitly, in pixel.
     *     If setting to `null`/`undefined`/`'auto'`, width of `dom`
     *     (instance container) will be used.
     * @param {number} [opts.height] Specify height explicitly, in pixel.
     *     If setting to `null`/`undefined`/`'auto'`, height of `dom`
     *     (instance container) will be used.
     */
    function init(
        dom: HTMLDivElement | HTMLCanvasElement,
        theme?: object | string,
        opts?: {
            devicePixelRatio?: number
            renderer?: string
            width?: number | string
            height?: number | string
        }
    ): ECharts

    /**
     * Connects interaction of multiple chart series. For example:
     *
        ```js
        // set group id of each instance respectively.
        chart1.group = 'group1';
        chart2.group = 'group1';
        echarts.connect('group1');
        // or incoming instance array that need to be linked.
        echarts.connect([chart1, chart2]);
        ```
     *
     * @param group Group id in string, or array of chart instance.
     */
    function connect(group: string | ECharts[]): void

    /**
     * Disconnects interaction of multiple chart series. To have one single
     * instance to be removed, you can set `group` of chart instance to be null.
     *
     * @param {string} group Group id in string.
     */
    function disConnect(group: string): void

    /**
     * Destroys chart instance, after which the instance cannot be used any
     *     more.
     *
     * @param target Chart instance or container.
     */
    function dispose(target: ECharts | HTMLDivElement | HTMLCanvasElement)
        : void

    /**
     * Returns chart instance of dom container.
     *
     * @param target Chart container.
     */
    function getInstanceByDom(target: HTMLDivElement | HTMLCanvasElement)
        : ECharts

    /**
     * Registers available maps. This can only be used after including
     * [geo](https://echarts.apache.org/option.html#geo)
     * component or chart series of
     * [map](https://echarts.apache.org/option.html#series-map).
     *
     * @param {string} mapName Map name, referring to `map` value set in
     *     [geo](https://echarts.apache.org/option.html#geo)
     *     component or
     *     [map](https://echarts.apache.org/option.html#series-map).
     * @param {object} geoJson Data in GeoJson format. See
     *     [http://geojson.org/](http://geojson.org/) for more format information.
     * @param {object} [specialAreas] Zoomed part of a specific area in the map
     *     for better visual effect.
     *     See [USA Population Estimates example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=map-usa).
     */
    function registerMap(
        mapName: string,
        geoJson: object,
        specialAreas?: object
    ): void

    /**
     * Registers a theme, should be specified when
     * [initialize the chart instance](https://echarts.apache.org/api.html#echarts.init).
     *
     * @param {string} themeName Theme name.
     * @param {object} theme Theme configurations.
     */
    function registerTheme(themeName: string, theme: object): void

    interface MapObj {
        /**
         * geoJson data for map
         */
        geoJson: object,
        /**
         * special areas fro map
         */
        specialAreas: object
    }

    /**
     * Get a registed map.
     *
     * @param {string} mapName Map name.
     * @return {MapObj} Map data.
     */
    function getMap(mapName: string): MapObj

    /**
     * Util methods about graphics.
     */
    const graphic: Graphic;

    interface Graphic {
        /**
         * Clip the given points by the given rectangular.
         *
         * @param {number[][]} points The points to be clipped,
         *     like [[23, 44], [12, 15], ...].
         * @param {ERectangle} rect The rectangular that is used to clip points.
         */
        clipPointsByRect(points: number[][], rect: ERectangle): number[][];

        /**
         * Clip the first input rectangular by the second input rectangular.
         *
         * @param {ERectangle} targetRect The rectangular to be clipped.
         * @param {ERectangle} rect The rectangular that is used to clip
         *     targetRect.
         */
        clipRectByRect(targetRect: ERectangle, rect: ERectangle): ERectangle;
    }

    interface ECharts {
        /**
         * Group name to be used in chart connection
         */
        group: string

        /**
         * Configuration item, data, universal interface, all parameters and
         *     data can all be modified through `setOption`. ECharts will merge
         *     new parameters and data, and then refresh chart.
         *
         * @param {EChartOption} option Configuration item and data. Please
         *     refer to [configuration item manual](https://echarts.apache.org/option.html)
         *     for more information.
         * @param {boolean} [notMerge=false] Whether not to merge with previous
         *     `option`
         * @param {boolean} [lazyUpdate=false] Whether not to update chart
         *     immediately
         */
        setOption(
            option: EChartOption,
            notMerge?: boolean,
            lazyUpdate?: boolean
        ) : void

        /**
         * Configuration item, data, universal interface, all parameters and
         *     data can all be modified through `setOption`. ECharts will merge
         *     new parameters and data, and then refresh chart.
         *
         * @param {EChartOption} option Configuration item and data. Please
         *     refer to [configuration item manual](https://echarts.apache.org/option.html)
         *     for more information.
         * @param {EChartsOptionConfig} [opts] Options about how to setOption
         */
        setOption(option: EChartOption, opts?: EChartsOptionConfig): void

        /**
         * Gets width of ECharts instance container.
         *
         * @return {number} Width.
         */
        getWidth(): number

        /**
         * Gets height of ECharts instance container.
         *
         * @return {number} Height.
         */
        getHeight(): number

        /**
         * Gets DOM element of ECharts instance container.
         *
         * @return {HTMLCanvasElement|HTMLDivElement} DOM container.
         */
        getDom(): HTMLCanvasElement | HTMLDivElement

        /**
         * Gets `option` object maintained in current instance, which contains
         *     configuration item and data merged from previous `setOption`
         *     operations by users, along with user interaction states.
         *     For example, switching of legend, zooming area of data zoom,
         *     and so on. Therefore, a new instance that is exactly the same
         *     can be recovered from this option.
         */
        getOption(): EChartOption

        /**
         * Resizes chart, which should be called manually when container size
         *     changes. When `opts` is not provided, DOM size is used.
         *
         * @param {EChartsResizeOption} opts Specify parameters explicitly.
         */
        resize(opts?: EChartsResizeOption): void

        /**
         * Triggers chart action, like chart switch `legendToggleSelect`,
         *     zoom data area `dataZoom`, show tooltip `showTip` and so on.
         *     See [action](https://echarts.apache.org/api.html#action) and
         *     [events](https://echarts.apache.org/api.html#events)
         *     for more information.
         *
         * @param payload Trigger multiple actions through `batch` attribute.
         */
        dispatchAction(payload: object): void

        /**
         * Binds event-handling function.
         *     There are two kinds of events in ECharts, one of which is mouse
         *     events, which will be triggered when the mouse clicks certain
         *     element in the chart, the other kind will be triggered after
         *     `dispatchAction` is called. Every action has a corresponding
         *     event.
         *     If event is triggered externally by `dispatchAction`, and there
         *     is batch attribute in action to trigger batch action, then the
         *     corresponding response event parameters be in batch.
         *
         * @param {string} eventName Event names are all in lower-cases,
         *     for example, `'click'`, `'mousemove'`, `'legendselected'`
         * @param {Function} handler Event-handling function, whose format
         *     is as following:
            ```js
            (event: object)
            ```
         * @param {object} [context] context of callback function, what
         *     `this` refers to.
         */
        on(eventName: string, handler: Function, context?: object): void

        /**
         * Unbind event-handler function.
         *
         * @param {string} eventName Event names are all in lower-cases,
         *     for example, `'click'`, `'mousemove'`, `'legendselected'`
         * @param {Function} [handler] The function to be unbound could be
         *     passed. Otherwise, all event functions of this type will be
         *     unbound.
         */
        off(eventName: string, handler?: Function): void

        /**
         * Convert a point from logical coordinate (e.g., in geo, cartesian,
         *     graph, ...) to pixel coordinate.
         *
         * @param {EChartsConvertFinder} finder Indicate in which coordinate
         *     system conversion is performed.
         *     Generally, index or id or name can be used to specify
         *     coordinate system.
         * @param {string | any[]} value The value to be converted.
         */
        convertToPixel(finder: EChartsConvertFinder, value: string | any[])
            : string | any[]

        /**
         * Convert a point from pixel coordinate to logical coordinate
         *     (e.g., in geo, cartesian, graph, ...).
         *
         * @param {EChartsConvertFinder} finder Indicate in which coordinate
         *     system conversion is performed.
         *     Generally, index or id or name can be used to specify
         *     coordinate system.
         * @param {string | any[]} value The value to be converted.
         */
        convertFromPixel(finder: EChartsConvertFinder, value: any[] | string)
            : any[] | string

        /**
         * Determine whether the given point is in the given coordinate systems or series.
         *
         * @param {EChartsConvertFinder} finder Indicate in which coordinate
         *     system conversion is performed.
         *     Generally, index or id or name can be used to specify
         *     coordinate system.
         * @param {string | any[]} value The value to be judged, in pixel
         *     coordinate system.
         */
        containPixel(finder: EChartsConvertFinder, value: any[]): boolean

        /**
         * Shows loading animation. You can call this interface manually before
         *     data is loaded, and call `hideLoading` to hide loading animation
         *     after data is loaded.
         *
         * @param {string} [type='default']
         * @param {EChartsLoadingOption} [opts]
         */
        showLoading(type?: string, opts?: EChartsLoadingOption): void

        /**
         * Hides animation loading effect.
         */
        hideLoading(): void

        /**
         * Exports chart image; returns a base64 URL; can be set to `src` of
         *      `Image`.
         *
         * @param opts Options.
         */
        getDataURL(opts: {
            // Exporting format, can be either png, or jpeg
            type?: string,
            // Resolution ratio of exporting image, 1 by default.
            pixelRatio?: number,
            // Background color of exporting image, use backgroundColor in
            // option by default.
            backgroundColor?: string,
            // Excluded components list. e.g. ['toolbox']
            excludeComponents?: string[]
        }): string

        /**
         * Exports connected chart image; returns a base64 url; can be set to
         *     `src` of `Image`. Position of charts in exported image are
         *     related to that of the container.
         *
         * @param opts Options.
         */
        getConnectedDataURL(opts: {
            // Exporting format, can be either png, or jpeg
            type: string,
            // Resolution ratio of exporting image, 1 by default.
            pixelRatio: number,
            // Background color of exporting image, use backgroundColor in
            // option by default.
            backgroundColor: string,
            // Excluded components list. e.g. ['toolbox']
            excludeComponents?: string[]
        }): string

        /**
         * The method is used in rendering millions of data
         *     (e.g. rendering geo data). In these scenario, the entire size of
         *     data is probably up to 10 or 100 MB, even using binary format.
         *     So chunked load data and rendering is required. When using
         *     `appendData`, the graphic elements that have been rendered will
         *     not be cleared, but keep rendering new graphic elements.
         *
         * @param opts Data options.
         */
        appendData(opts: {
            // Specify which series the data will be appended to.
            seriesIndex?: string,
            // The data to be appended.
            data?: any[]|TypedArray,
        }): void

        /**
         * Clears current instance; removes all components and charts in
         *     current instance.
         */
        clear(): void

        /**
         * Returns whether current instance has been disposed.
         *
         * @return {boolean} Whether has been disposed.
         */
        isDisposed(): boolean

        /**
         * Disposes instance. Once disposed, the instance can not be used again.
         */
        dispose(): void
    }

    type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array
        | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array
        | Float64Array;

    interface EChartsConvertFinder {
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

    interface EChartsOptionConfig {
        notMerge?: boolean,
        lazyUpdate?: boolean,
        silent?: boolean
    }

    interface EChartsResizeOption {
        /**
         * Chart width.
         */
        width?: number | string,

        /**
         * Chart height.
         */
        height?: number | string,

        /**
         * Specify whether or not to prevent triggering events.
         */
        silent?: boolean
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

    interface EChartsLoadingOption {
        /**
         * Loading text.
         * @default 'loading'
         */
        text?: string,

        /**
         * Loading circle color.
         * @default '#c23531'
         */
        color?: string,

        /**
         * Loading text color.
         * @default '#000'
         */
        textColor?: string,

        /**
         * Mask background color.
         * @default 'rgba(255, 255, 255, 0.8)'
         */
        maskColor?: string,

        /**
         * Zlevel of loading. If not 0, it creates a new canvas for loading.
         * @default 0
         */
        zlevel?: 0
    }
}

declare module 'echarts' {
    export = echarts;
}

declare module 'echarts/lib/echarts' {
    export = echarts;
}
