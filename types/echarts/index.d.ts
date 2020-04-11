// Type definitions for ECharts 4.4.0
// Project: http://echarts.apache.org
// Definitions by: Xie Jingyang <https://github.com/xieisabug>
//                 AntiMoron <https://github.com/AntiMoron>
//                 Liveangela <https://github.com/liveangela>
//                 Ovilia <https://github.com/Ovilia>
//                 Roman <https://github.com/iRON5>
//                 Bilal <https://github.com/bilalucar>
//                 TMTron <https://github.com/tmtron>
//                 dwhitney <https://github.com/dwhitney>
//                 Ruixuel <https://github.com/ruixuel>
//                 Robert <https://github.com/robert-wettstaedt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="zrender" />
/// <reference path="./options/index.d.ts" />

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
            devicePixelRatio?: number;
            renderer?: string;
            width?: number | string;
            height?: number | string;
        },
    ): ECharts;

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
    function connect(group: string | ECharts[]): void;

    /**
     * Disconnects interaction of multiple chart series. To have one single
     * instance to be removed, you can set `group` of chart instance to be null.
     *
     * @param {string} group Group id in string.
     */
    function disConnect(group: string): void;

    /**
     * Destroys chart instance, after which the instance cannot be used any
     *     more.
     *
     * @param target Chart instance or container.
     */
    function dispose(target: ECharts | HTMLDivElement | HTMLCanvasElement): void;

    /**
     * Returns chart instance of dom container.
     *
     * @param target Chart container.
     */
    function getInstanceByDom(target: HTMLDivElement | HTMLCanvasElement): ECharts;

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
     *     See [USA Population Estimates example](https://echarts.apache.org/examples/en/editor.html?c=map-usa).
     */
    function registerMap(mapName: string, geoJson: object, specialAreas?: object): void;

    /**
     * Registers a theme, should be specified when
     * [initialize the chart instance](https://echarts.apache.org/api.html#echarts.init).
     *
     * @param {string} themeName Theme name.
     * @param {object} theme Theme configurations.
     */
    function registerTheme(themeName: string, theme: object): void;

    interface MapObj {
        /**
         * geoJson data for map
         */
        geoJson: object;
        /**
         * special areas fro map
         */
        specialAreas: object;
    }

    /**
     * Get a registed map.
     *
     * @param {string} mapName Map name.
     * @return {MapObj} Map data.
     */
    function getMap(mapName: string): MapObj;

    /**
     * Util methods about graphics.
     */
    const graphic: Graphic;

    interface Graphic {
        /**
         * x, y, x2, y2 are all percent from 0 to 1
         */
        LinearGradient: zrender.LinearGradient;

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
        group: string;

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
        setOption(option: EChartOption | EChartsResponsiveOption, notMerge?: boolean, lazyUpdate?: boolean): void;

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
        setOption(option: EChartOption, opts?: EChartsOptionConfig): void;

        /**
         * Gets width of ECharts instance container.
         *
         * @return {number} Width.
         */
        getWidth(): number;

        /**
         * Gets height of ECharts instance container.
         *
         * @return {number} Height.
         */
        getHeight(): number;

        /**
         * Gets DOM element of ECharts instance container.
         *
         * @return {HTMLCanvasElement|HTMLDivElement} DOM container.
         */
        getDom(): HTMLCanvasElement | HTMLDivElement;

        /**
         * Gets `option` object maintained in current instance, which contains
         *     configuration item and data merged from previous `setOption`
         *     operations by users, along with user interaction states.
         *     For example, switching of legend, zooming area of data zoom,
         *     and so on. Therefore, a new instance that is exactly the same
         *     can be recovered from this option.
         */
        getOption(): EChartOption;

        /**
         * Resizes chart, which should be called manually when container size
         *     changes. When `opts` is not provided, DOM size is used.
         *
         * @param {EChartsResizeOption} opts Specify parameters explicitly.
         */
        resize(opts?: EChartsResizeOption): void;

        /**
         * Triggers chart action, like chart switch `legendToggleSelect`,
         *     zoom data area `dataZoom`, show tooltip `showTip` and so on.
         *     See [action](https://echarts.apache.org/api.html#action) and
         *     [events](https://echarts.apache.org/api.html#events)
         *     for more information.
         *
         * @param payload Trigger multiple actions through `batch` attribute.
         */
        dispatchAction(payload: object): void;

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
        on(eventName: string, handler: Function, context?: object): void;

        /**
         * Unbind event-handler function.
         *
         * @param {string} eventName Event names are all in lower-cases,
         *     for example, `'click'`, `'mousemove'`, `'legendselected'`
         * @param {Function} [handler] The function to be unbound could be
         *     passed. Otherwise, all event functions of this type will be
         *     unbound.
         */
        off(eventName: string, handler?: Function): void;

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
        convertToPixel(finder: EChartsConvertFinder, value: string | any[]): string | any[];

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
        convertFromPixel(finder: EChartsConvertFinder, value: any[] | string): any[] | string;

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
        containPixel(finder: EChartsConvertFinder, value: any[]): boolean;

        /**
         * Shows loading animation. You can call this interface manually before
         *     data is loaded, and call `hideLoading` to hide loading animation
         *     after data is loaded.
         *
         * @param {string} [type='default']
         * @param {EChartsLoadingOption} [opts]
         */
        showLoading(type?: string, opts?: EChartsLoadingOption): void;

        /**
         * Hides animation loading effect.
         */
        hideLoading(): void;

        /**
         * Exports chart image; returns a base64 URL; can be set to `src` of
         *      `Image`.
         *
         * @param opts Options.
         */
        getDataURL(opts: {
            // Exporting format, can be either png, or jpeg
            type?: string;
            // Resolution ratio of exporting image, 1 by default.
            pixelRatio?: number;
            // Background color of exporting image, use backgroundColor in
            // option by default.
            backgroundColor?: string;
            // Excluded components list. e.g. ['toolbox']
            excludeComponents?: string[];
        }): string;

        /**
         * Exports connected chart image; returns a base64 url; can be set to
         *     `src` of `Image`. Position of charts in exported image are
         *     related to that of the container.
         *
         * @param opts Options.
         */
        getConnectedDataURL(opts: {
            // Exporting format, can be either png, or jpeg
            type: string;
            // Resolution ratio of exporting image, 1 by default.
            pixelRatio: number;
            // Background color of exporting image, use backgroundColor in
            // option by default.
            backgroundColor: string;
            // Excluded components list. e.g. ['toolbox']
            excludeComponents?: string[];
        }): string;

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
            seriesIndex?: string;
            // The data to be appended.
            data?: any[] | TypedArray;
        }): void;

        /**
         * Clears current instance; removes all components and charts in
         *     current instance.
         */
        clear(): void;

        /**
         * Returns whether current instance has been disposed.
         *
         * @return {boolean} Whether has been disposed.
         */
        isDisposed(): boolean;

        /**
         * Disposes instance. Once disposed, the instance can not be used again.
         */
        dispose(): void;
    }

    type TypedArray =
        | Int8Array
        | Uint8Array
        | Int16Array
        | Uint16Array
        | Int32Array
        | Uint32Array
        | Uint8ClampedArray
        | Float32Array
        | Float64Array;

    interface EChartsConvertFinder {
        seriesIndex?: number;
        seriesId?: string;
        seriesName?: string;
        geoIndex?: number;
        geoId?: string;
        geoName?: string;
        xAxisIndex?: number;
        xAxisId?: string;
        xAxisName?: string;
        yAxisIndex?: number;
        yAxisId?: string;
        yAxisName?: string;
        gridIndex?: number;
        gridId?: string;
        gridName?: string;
    }

    interface ERectangle {
        x: number;
        y: number;
        width: number;
        height: number;
    }

    type EChartsSeriesType =
        | 'line'
        | 'bar'
        | 'pie'
        | 'scatter'
        | 'effectScatter'
        | 'radar'
        | 'tree'
        | 'treemap'
        | 'sunburst'
        | 'boxplot'
        | 'candlestick'
        | 'heatmap'
        | 'map'
        | 'parallel'
        | 'lines'
        | 'graph'
        | 'sankey'
        | 'funnel'
        | 'gauge'
        | 'pictorialBar'
        | 'themeRiver'
        | 'custom';

    interface EChartOption<TSeries = EChartOption.Series> {
        /**
         * Title component, including main title and subtitle.
         * In ECharts 2.x, a single instance of ECharts could contains
         * one title component at most.
         * However, in ECharts 3, there could be one or more
         * than one title components.
         * It is more useful when multiple diagrams in one instance all need titles.
         *
         * @see https://echarts.apache.org/en/option.html#title
         */
        title?: EChartTitleOption | EChartTitleOption[];

        /**
         * Legend component.
         * Legend component shows symbol, color and name of different series.
         * You can click legends to toggle displaying series in the chart.
         * In ECharts 3, a single echarts instance may contain multiple
         * legend components, which makes it easier for the layout of multiple
         * legend components.
         * If there have to be too many legend items, `vertically scrollable` legend
         * or `horizontally scrollable` legend are options to paginate them.
         * Check `legend.type` please.
         *
         * @see https://echarts.apache.org/en/option.html#legend
         */
        legend?: EChartOption.Legend;

        /**
         * Drawing grid in rectangular coordinate.
         * In a single grid, at most two X and Y axes each is allowed.
         * `Line chart`, `bar chart`, and `scatter chart (bubble chart)`
         * can be drawn in grid.
         * In ECharts 2.x, there could only be one single grid component
         * at most in a single echarts instance.
         * But in ECharts 3, there is no limitation.
         *
         * @see https://echarts.apache.org/en/option.html#grid
         */
        grid?: EChartOption.Grid | EChartOption.Grid[];

        /**
         * The x axis in cartesian(rectangular) coordinate.
         * Usually a single grid component can place at most 2 x axis,
         * one on the bottom and another on the top.
         * offset can be used to avoid overlap when you need to put more
         * than two x axis.
         *
         * @see https://echarts.apache.org/en/option.html#xAxis
         */
        xAxis?: EChartOption.XAxis | EChartOption.XAxis[];

        /**
         * The y axis in cartesian(rectangular) coordinate.
         * Usually a single grid component can place at most 2 y axis,
         * one on the left and another on the right. offset can be used
         * to avoid overlap when you need to put more than two y axis.
         *
         * @see https://echarts.apache.org/en/option.html#yAxis
         */
        yAxis?: EChartOption.YAxis | EChartOption.YAxis[];

        /**
         * Polar coordinate can be used in scatter and line chart.
         * Every polar coordinate has an `angleAxis` and a `radiusAxis`.
         *
         * @see https://echarts.apache.org/en/option.html#polar
         */
        polar?: object;

        /**
         * Radial axis of polar coordinate.
         *
         * @see https://echarts.apache.org/en/option.html#radiusAxis
         */
        radiusAxis?: object;

        /**
         * The angle axis in Polar Coordinate.
         *
         * @see https://echarts.apache.org/en/option.html#angleAxis
         */
        angleAxis?: object;

        /**
         * Coordinate for `radar charts`.
         * This component is equal to the polar component in ECharts 2.
         * Because the polar component in the echarts 3 is reconstructed
         * to be the standard polar coordinate component,
         * this component is renamed to be radar to avoid confusion.
         * Radar chart coordinate is different from polar coordinate,
         * in that every axis indicator of the radar chart coordinate
         * is an individual dimension.
         * The style of indicator coordinate axis could be configured
         * through the following configuration items,
         * including `name`, `axisLine`, `axisTick`, `axisLabel`,
         * `splitLine`, `splitArea`.
         *
         * @see https://echarts.apache.org/en/option.html#radar
         */
        radar?: object;

        /**
         * `dataZoom` component is used for zooming a specific area,
         * which enables user to investigate data in detail,
         * or get an overview of the data,
         * or get rid of outlier points.
         * These types of `dataZoom` component are supported:
         * + `dataZoomInside`: Data zoom functionalities is embeded
         *   inside coordinate systems, enable user to zoom
         *   or roam coordinate system by mouse dragging,
         *   mouse move or finger touch (in touch screen).
         * + `dataZoomSlider`: A special slider bar is provided,
         *   on which coordinate systems can be zoomed or roamed
         *   by mouse dragging or finger touch (in touch screen).
         * + `dataZoomSelect`: A marquee tool is provided for zooming
         *   or roaming coordinate system.
         *   That is `toolbox.feature.dataZoom`, which can only be configured
         *   in toolbox.
         *
         * @see https://echarts.apache.org/en/option.html#dataZoom
         */
        dataZoom?: EChartOption.DataZoom[];

        /**
         * `visualMap` is a type of component for visual encoding,
         * which maps the data to visual channels, including:
         * + symbol: Type of symbol.
         * + symbolSize: Symbol size.
         * + color: Symbol color.
         * + colorAlpha: Symbol alpha channel.
         * + opacity: Opacity of symbol and others (like labels).
         * + colorLightness: Lightness in HSL.
         * + colorSaturation: Saturation in HSL.
         * + colorHue: Hue in HSL.
         * Myltiple `visualMap` component could be defined in a chart instance,
         * which enable that different dimensions
         * of a series data are mapped to different visual channels.
         * `visualMap` could be defined as `Piecewise (visualMapPiecewise)`
         * or `Continuous (visualMapContinuous)`,
         * which is distinguished by the property type.
         *
         * @example
         * option = {
         *   visualMap: [
         *       { // the first visualMap component
         *           type: 'continuous', // defined to be continuous viusalMap
         *           ...
         *       },
         *       { // the sencond visualMap component
         *           type: 'piecewise', // defined to be piecewise visualMap
         *           ...
         *       }
         *   ],
         *   ...
         * };
         *
         * @see https://echarts.apache.org/en/option.html#visualMap
         */
        visualMap?: EChartOption.VisualMap[];

        /**
         * Tooltip component.
         * It can be configured on different places:
         * + Configured on global: `tooltip`
         * + Configured in a coordinate system: `grid.tooltip`,
         *   `polar.tooltip`, `single.tooltip`
         * + Configured in a series: `series.tooltip`
         * + Configured in each item of `series.data`: `series.data.tooltip`
         *
         * @see https://echarts.apache.org/en/option.html#tooltip
         */
        tooltip?: EChartOption.Tooltip;

        /**
         * `axisPointer` is a tool for displaying reference line and axis value
         * under mouse pointer.
         *
         * @see https://echarts.apache.org/en/option.html#axisPointer
         */
        axisPointer?: EChartOption.AxisPointer;

        /**
         * A group of utility tools, which includes `export`, `data view`,
         * `dynamic type switching`, `data area zooming`, and `reset`.
         *
         * @see https://echarts.apache.org/en/option.html#toolbox
         */
        toolbox?: object;

        /**
         * `brush` is an area-selecting component, with which user can select
         * part of data from a chart to display in detail, or doing calculations
         * with them.
         *
         * @see https://echarts.apache.org/en/option.html#brush
         */
        brush?: object;

        /**
         * Geographic coorinate system component.
         * Geographic coorinate system component is used to draw maps,
         * which also supports `scatter series`, and `line series`.
         *
         * @see https://echarts.apache.org/en/option.html#geo
         */
        geo?: object;

        /**
         * `Parallel Coordinates` is a common way of visualizing high-dimensional
         * geometry and analyzing multivariate data.
         * For example, `series-parallel.data` is the following data:
         *
         * @example
         * [
         *     [1,  55,  9,   56,  0.46,  18,  6,  'good'],
         *     [2,  25,  11,  21,  0.65,  34,  9,  'excellent'],
         *     [3,  56,  7,   63,  0.3,   14,  5,  'good'],
         *     [4,  33,  7,   29,  0.33,  16,  6,  'excellent'],
         *     { // Data item can also be an Object,
         *       // so that perticular settings of its line can be set here.
         *         value: [5,  42,  24,  44,  0.76,  40,  16, 'excellent']
         *         lineStyle: {...},
         *     }
         *     ...
         * ]
         *
         * @see https://echarts.apache.org/en/option.html#parallel
         */
        parallel?: object;

        /**
         * This component is the coordinate axis for parallel coordinate.
         *
         * @see https://echarts.apache.org/en/option.html#parallelAxis
         */
        parallelAxis?: object;

        /**
         * An axis with a single dimension. It can be used to display data
         * in one dimension.
         *
         * @see https://echarts.apache.org/en/option.html#singleAxis
         */
        singleAxis?: EChartOption.SingleAxis | EChartOption.SingleAxis[];

        /**
         * `timeline` component, which provides functions like switching and playing
         * between multiple ECharts `options`.
         *
         * @see https://echarts.apache.org/en/option.html#timeline
         */
        timeline?: object;

        /**
         * `graphic` component enable creating graphic elements in echarts.
         * Those graphic type are supported.
         * `image`, `text`, `circle`, `sector`, `ring`, `polygon`,
         * `polyline`, `rect`, `line`, `bezierCurve`, `arc`, `group`,
         *
         * @see https://echarts.apache.org/en/option.html#graphic
         */
        graphic?: object | object[];

        /**
         * Calendar coordinates.
         * In ECharts, we are very creative to achieve the calendar chart,
         * by using the calendar coordinates
         * to achieve the calendar chart, as shown in the following example,
         * we can use calendar coordinates
         * in `heatmap`, `scatter`, `effectScatter`, and `graph`.

         * @see https://echarts.apache.org/en/option.html#calendar
         */
        calendar?: EChartOption.Calendar | EChartOption.Calendar[];

        /**
         * @see https://echarts.apache.org/en/option.html#dataset
         */
        dataset?: EChartOption.Dataset | EChartOption.Dataset[];

        /**
         * `dataset` component is published since ECharts 4.
         * `dataset` brings convenience in data management separated with styles
         * and enables data reuse by different series.
         * More importantly, is enables data encoding from data to visual,
         * which brings convenience in some scenarios.
         * More details about `dataset` can be checked in the tutorial.
         * @see https://echarts.apache.org/en/option.html#aria
         */
        aria?: object;

        /**
         * @see https://echarts.apache.org/en/option.html#series
         */
        series?: TSeries[];

        /**
         * The color list of palette.
         * If no color is set in series, the colors would be adopted sequentially
         * and circularly from this list
         * as the colors of series.
         * @default
         * [
         *   '#c23531','#2f4554','#61a0a8','#d48265','#91c7ae',
         *   '#749f83', '#ca8622','#bda29a','#6e7074','#546570',
         *   '#c4ccd3'
         * ]
         *
         * @see https://echarts.apache.org/en/option.html#color
         */
        color?: string[];

        /**
         * Background color. Defaults to have no background.
         *
         * @see https://echarts.apache.org/en/option.html#backgroundColor
         */
        backgroundColor?: string;

        /**
         * Global font style.
         *
         * @see https://echarts.apache.org/en/option.html#textStyle
         */
        textStyle?: EChartOption.BaseTextStyle;

        /**
         * Whether to enable animation.
         *
         * @see https://echarts.apache.org/en/option.html#animation
         */
        animation?: boolean;

        /**
         * Whether to set graphic number threshold to animation.
         * Animation will be disabled when graphic number is larger than threshold.
         *
         * @see https://echarts.apache.org/en/option.html#animationThreshold
         */
        animationThreshold?: number;

        /**
         * Duration of the first animation, which supports callback function
         * for different data to have different animation effect
         *
         * @example
         * animationDuration: function (idx) {
         *     // delay for later data is larger
         *     return idx * 100;
         * }
         * @see https://echarts.apache.org/en/option.html#animationDuration
         */
        animationDuration?: number;

        /**
         * Easing method used for the first animation.
         * Varied easing effects can be found at `easing effect example`.
         *
         * @see https://echarts.apache.org/en/option.html#animationEasing
         */
        animationEasing?: string;

        /**
         * Delay before updating the first animation, which supports
         * callback function for different data
         * to have different animation effect.
         *
         * @example
         * animationDelay: function (idx) {
         *     // delay for later data is larger
         *     return idx * 100;
         * }
         * @see https://echarts.apache.org/en/option.html#animationDelay
         */
        animationDelay?: number | Function;

        /**
         * Time for animation to complete, which supports callback function
         * for different data to have different animation effect
         *
         * @example
         * animationDurationUpdate: function (idx) {
         *     // delay for later data is larger
         *     return idx * 100;
         * }
         * @see https://echarts.apache.org/en/option.html#animationDurationUpdate
         */
        animationDurationUpdate?: number | Function;

        /**
         * Easing method used for animation.
         *
         * @see https://echarts.apache.org/en/option.html#animationEasingUpdate
         */
        animationEasingUpdate?: string;

        /**
         * Delay before updating animation, which supports callback function
         * for different data to have different animation effect.
         *
         * @example
         * animationDelayUpdate: function (idx) {
         *     // delay for later data is larger
         *     return idx * 100;
         * }
         * @see https://echarts.apache.org/en/option.html#animationDelayUpdate
         */
        animationDelayUpdate?: number | Function;

        /**
         * Configuration for progressive/incremental rendering
         *
         * @default 400
         */
        progressive?: number;

        /**
         * Configuration for progressive/incremental rendering
         *
         * @default 3000
         */
        progressiveThreshold?: number;

        /**
         * Equal to CanvasRenderingContext2D.globalCompositeOperation
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
         *
         */
        blendMode?: string;

        /**
         * Threshold of if use single hover layer to optimize.
         * It is recommended that `hoverLayerThreshold` is equivalent to or less than
         * `progressiveThreshold`, otherwise hover will cause restart of progressive,
         * which is unexpected.
         * see example <echarts/test/heatmap-large.html>.
         *
         * @default 3000
         */
        hoverLayerThreshold?: number;

        /**
         * Whether to use UTC in display.
         * - `true`: When `axis.type` is `'time'`, ticks is determined
         *   according to UTC, and `axisLabel` and `tooltip` use UTC by default.
         * - `false`: When `axis.type` is `'time'`, ticks is determined
         *   according to local time, and `axisLabel` and `tooltip` use local time
         *   by default.
         *
         * The default value of useUTC is false, for sake of considering:
         * - In many cases, labels should be displayed in local time
         *   (whether the time is stored in server in local time or UTC).
         * - If user uses time string (like '2012-01-02') in data,
         * it usually means local time if time zone is not specified.
         * Time should be displayed in its original time zone by default.
         *
         * Notice: the setting only effects 'display time', but not 'parse time'.
         * About how time value (like `1491339540396`, `'2013-01-04'`, ...)
         * is parsed in echarts, see `the time part in date`.
         *
         * @see https://echarts.apache.org/en/option.html#useUTC
         */
        useUTC?: boolean;
    }

    type EChartsMediaOption = {
        query: {
            width?: number;
            height?: number;
            aspectRatio?: number;
            minWidth?: number;
            minHeight?: number;
            minAspectRatio?: number;
            maxWidth?: number;
            maxHeight?: number;
            maxAspectRatio?: number;
        };
        option: EChartOption;
    };

    interface EChartsResponsiveOption {
        baseOption?: EChartOption;
        media?: EChartsMediaOption[];
    }

    interface EChartsOptionConfig {
        notMerge?: boolean;
        lazyUpdate?: boolean;
        silent?: boolean;
    }

    interface EChartsResizeOption {
        /**
         * Chart width.
         */
        width?: number | string;

        /**
         * Chart height.
         */
        height?: number | string;

        /**
         * Specify whether or not to prevent triggering events.
         */
        silent?: boolean;
    }

    interface EChartTitleOption {
        show?: boolean;
        text?: string;
        link?: string;
        target?: string;
        textStyle?: EChartOption.TextStyleWithRich;
        subtext?: string;
        sublink?: string;
        subtarget?: string;
        subtextStyle?: EChartOption.TextStyleWithRich;
        textAlign?: string;
        textVerticalAlign?: string;
        triggerEvent?: boolean;
        padding?: number;
        itemGap?: number;
        zlevel?: number;
        z?: number;
        left?: string | number;
        top?: string | number;
        right?: string | number;
        bottom?: string | number;
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
        borderRadius?: number | number[];
        shadowBlur?: number;
        shadowColor?: number;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
    }

    interface EChartsLoadingOption {
        /**
         * Loading text.
         * @default 'loading'
         */
        text?: string;

        /**
         * Loading circle color.
         * @default '#c23531'
         */
        color?: string;

        /**
         * Loading text color.
         * @default '#000'
         */
        textColor?: string;

        /**
         * Mask background color.
         * @default 'rgba(255, 255, 255, 0.8)'
         */
        maskColor?: string;

        /**
         * Zlevel of loading. If not 0, it creates a new canvas for loading.
         * @default 0
         */
        zlevel?: 0;
    }

    namespace EChartOption {
        type Series =
            | SeriesLine
            | SeriesBar
            | SeriesPie
            | SeriesScatter
            | SeriesEffectScatter
            | SeriesRadar
            | SeriesTree
            | SeriesTreemap
            | SeriesSunburst
            | SeriesBoxplot
            | SeriesCandlestick
            | SeriesHeatmap
            | SeriesMap
            | SeriesParallel
            | SeriesLines
            | SeriesGraph
            | SeriesSankey
            | SeriesFunnel
            | SeriesGauge
            | SeriesPictorialBar
            | SeriesThemeRiver
            | SeriesCustom;

        namespace BasicComponents {
            /**
             * @todo describe
             */
            interface Line {
                show?: boolean;
                onZero?: boolean;
                onZeroAxisIndex?: number;
                symbol?: string | string[];
                symbolSize?: number[];
                symbolOffset?: number[];
                lineStyle?: LineStyle;
            }

            interface CartesianAxis {
                /**
                 * Component ID, not specified by default.
                 * If specified, it can be used to refer the component in option or API.
                 */
                id?: string;

                /**
                 * If show this axis.
                 *
                 * @default 'true'
                 */
                show?: boolean;

                /**
                 * The index of grid which this axis belongs to.
                 * Defaults to be in the first grid.
                 *
                 * @default 0
                 */
                gridIndex?: number;

                /**
                 * Offset of this axis relative to default position.
                 * Useful when multiple axis of this type has same position value.
                 *
                 * @default 0
                 * @see https://echarts.apache.org/en/option.html#yAxis.offset
                 */
                offset?: number;

                /**
                 * Name of axis.
                 */
                name?: string;

                /**
                 * Location of axis name.
                 *
                 * @default 'start'
                 */
                nameLocation?: 'start' | 'middle' | 'center' | 'end';

                /**
                 * Text style of axis name.
                 *
                 * @see https://echarts.apache.org/en/option.html#yAxis.nameTextStyle
                 */
                nameTextStyle?: TextStyleWithRich;

                /**
                 * Gap between axis name and axis line.
                 *
                 * @default 15
                 */
                nameGap?: number;

                /**
                 * Rotation of axis name.
                 *
                 * @default null
                 */
                nameRotate?: number;

                /**
                 * Whether axis is inversed. New option from ECharts 3.
                 *
                 * @default false
                 */
                inverse?: boolean;

                /**
                 * The boundary gap on both sides of a coordinate axis.
                 * The setting and behavior of category axes and non-category axes are
                 * different. The `boundaryGap` of category axis can be set to either
                 * `true` or `false`. Default value is set to be `true`, in which case
                 * `axisTick` is served only as a separation line, and labels and data
                 * appear only in the center part of two axis ticks, which is called
                 * band. For non-category axis, including time, numerical value, and
                 * log axes, `boundaryGap` is an array of two values, representing the
                 * spanning range between minimum and maximum value.
                 * The value can be set in numeric value or relative percentage,
                 * which becomes invalid after setting `min` and `max`.
                 *
                 * @example
                 * boundaryGap: ['20%', '20%']
                 *
                 * @see https://echarts.apache.org/en/option.html#yAxis.boundaryGap
                 */
                boundaryGap?: boolean | (string | number)[];

                /**
                 * The minimun value of axis.
                 * It can be set to a special value `'dataMin'` so that
                 * the minimum value on this axis is set to be the minimum label.
                 * It will be automatically computed to make sure axis tick is equally
                 * distributed when not set. In category axis, it can also be set
                 * as the ordinal number.
                 * For example, if a catergory axis has
                 * `data: ['categoryA', 'categoryB', 'categoryC']`
                 * , and the ordinal `2` represents `'categoryC'`.
                 * Moreover, it can be set as negative number, like `-3`.
                 *
                 * @default null
                 * @see https://echarts.apache.org/option.html#yAxis.min
                 */
                min?: number | string | ((value: { min: number; max: number }) => number);

                /**
                 * The maximum value of axis.
                 * It can be set to a special value `'dataMax'` so that
                 * the minimum value on this axis is set to be the maximum label.
                 * It will be automatically computed to make sure axis tick is equally
                 * distributed when not set.
                 * In category axis, it can also be set as the ordinal number.
                 * For example, if a catergory axis has
                 * `data: ['categoryA', 'categoryB', 'categoryC']`
                 * , and the ordinal `2` represents `'categoryC'`.
                 * Moreover, it can be set as negative number, like `-3`.
                 *
                 * @default null
                 * @see https://echarts.apache.org/option.html#yAxis.max
                 */
                max?: number | string | ((value: { min: number; max: number }) => number);

                /**
                 * It is available only in numerical axis, i.e., type: `'value'`.
                 * It specifies whether not to contain zero position
                 * of axis compulsively.
                 * When it is set to be `true`, the axis may not contain zero position,
                 * which is useful in the scatter chart for both value axes.
                 * This configuration item is unavailable when the `min` and `max`
                 * are set.
                 *
                 * @default false
                 * @see https://echarts.apache.org/en/option.html#yAxis.scale
                 */
                scale?: boolean;

                /**
                 * Number of segments that the axis is split into.
                 * Note that this number serves only as a recommendation,
                 * and the true segments may be adjusted based on readability.
                 * This is unavailable for category axis.
                 *
                 * @default 5
                 * @see https://echarts.apache.org/en/option.html#yAxis.splitNumber
                 */
                splitNumber?: number;

                /**
                 * Maximum gap between split lines.
                 * For example, in time axis (type is `'time'`),
                 * it can be set to be `3600 * 24 * 1000` to make sure
                 * that the gap between axis labels is less than or equal to one day.
                 * @example
                 * {
                 *     maxInterval: 3600 * 1000 * 24
                 * }
                 * It is available only for axis of type `'value'` or `'time'`.
                 * @see https://echarts.apache.org/en/option.html#yAxis.minInterval
                 */
                minInterval?: any;

                /**
                 * Compulsively set segmentation interval for axis.
                 * As splitNumber is a recommendation value,
                 * the calculated tick may not be the same as expected.
                 * In this case, interval should be used along with min and max
                 * to compulsively set tickings.
                 * But in most cases, we do not suggest using this,
                 * out automatic calculation is enough for most situations.
                 * This is unavailable for category axis.
                 * Timestamp should be passed for type: `'time'` axis.
                 * Logged value should be passed for type: `'log'` axis.
                 *
                 * @see https://echarts.apache.org/en/option.html#yAxis.interval
                 */
                interval?: number;

                /**
                 * Base of logarithm, which is valid only for numeric axes with type:
                 * `'log'`.
                 *
                 * @default 10
                 * @see https://echarts.apache.org/en/option.html#yAxis.logBase
                 */
                logBase?: number;

                /**
                 * True for axis that cannot be interacted with.
                 *
                 * @default false
                 */
                silent?: boolean;

                /**
                 * Whether the labels of axis triggers and reacts to mouse events.
                 * Parameters of event includes:
                 *
                 * @example
                 * {
                 *     // Component type: xAxis, yAxis, radiusAxis, angleAxis
                 *     // Each of which has an attribute for index, e.g., xAxisIndex for xAxis
                 *     componentType: string,
                 *     // Value on axis before being formatted.
                 *     // Click on value label to trigger event.
                 *     value: '',
                 *     // Name of axis.
                 *     // Click on laben name to trigger event.
                 *     name: ''
                 * }
                 *
                 * @default false
                 */
                triggerEvent?: boolean;

                /**
                 * Settings related to axis line.
                 *
                 * @see https://echarts.apache.org/en/option.html#yAxis.axisLine
                 */
                axisLine?: Line;

                /**
                 * Settings related to axis tick.
                 *
                 * @see https://echarts.apache.org/en/option.html#yAxis.axisTick
                 */
                axisTick?: CartesianAxis.Tick;

                /**
                 * Settings related to axis label.
                 *
                 * @see https://echarts.apache.org/en/option.html#yAxis.axisLabel
                 */

                axisLabel?: CartesianAxis.Label;

                /**
                 * SplitLine of axis in grid area.
                 *
                 * @see https://echarts.apache.org/en/option.html#yAxis.splitLine
                 */

                splitLine?: CartesianAxis.SplitLine;

                /**
                 * Split area of axis in grid area, not shown by default.
                 *
                 * @see https://echarts.apache.org/en/option.html#yAxis.splitArea
                 */
                splitArea?: CartesianAxis.SplitArea;

                /**
                 * Category data, available in type: `'category'` axis.
                 * If `type` is not specified, but `axis.data` is specified,
                 * the `type` is auto set as `'category'`.
                 * If type is specified as `'category'`,
                 * but axis.data is not specified, `axis.data` will be
                 * auto collected from `series.data`.
                 * It brings convenience, but we should notice that
                 * `axis.data` provides then value range of the `'category'` axis.
                 * If it is auto collected from `series.data`,
                 * Only the values appearing in series.data can be collected.
                 * For example, if series.data is empty, nothing will be collected.
                 *
                 * @example
                 *  // Name list of all categories
                 *  data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                 *  // Each item could also be a specific configuration item.
                 *  // In this case, `value` is used as the category name.
                 *  data: [{
                 *      value: 'Monday',
                 *      // Highlight Monday
                 *      textStyle: {
                 *          fontSize: 20,
                 *          color: 'red'
                 *      }
                 *  }, 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                 *
                 * @see https://echarts.apache.org/en/option.html#yAxis.data
                 */
                data?: (string | number | CartesianAxis.DataObject)[];

                /**
                 * axisPointer settings on the axis.
                 *
                 * @see https://echarts.apache.org/en/option.html#yAxis.axisPointer
                 */
                axisPointer?: CartesianAxis.Pointer;

                /**
                 * `zlevel` value of all graghical elements in this axis.
                 * `zlevel` is used to make layers with Canvas.
                 * Graphical elements with different `zlevel` values will be placed
                 * in different Canvases, which is a common optimization technique.
                 * We can put those frequently changed elements
                 * (like those with animations) to a seperate `zlevel`.
                 * Notice that too many Canvases will increase memory cost,
                 * and should be used carefully on mobile phones to avoid crash.
                 * Canvases with bigger `zlevel` will be placed on Canvases
                 * with smaller `zlevel`.
                 *
                 * @default 0
                 * @see https://echarts.apache.org/en/option.html#yAxis.zlevel
                 */
                zlevel?: number;

                /**
                 * z value of all graghical elements in this axis,
                 * which controls order of drawing graphical components.
                 * Components with smaller z values may be overwritten by those
                 * with larger z values.
                 * z has a lower priority to zlevel, and will not create new Canvas.
                 *
                 * @see https://echarts.apache.org/en/option.html#yAxis.z
                 */
                z?: number;
            }

            namespace CartesianAxis {
                type Type = 'value' | 'category' | 'time' | 'log';

                /**
                 * @todo describe
                 */
                interface Tick {
                    show?: boolean;
                    alignWithLabel?: boolean;
                    interval?: number | Function;
                    inside?: boolean;
                    length?: number;
                    lineStyle?: LineStyle;
                }

                /**
                 * @todo describe
                 */
                interface Label extends TextStyleWithRich {
                    show?: boolean;
                    interval?: number | Function;
                    inside?: boolean;
                    rotate?: number;
                    margin?: number;
                    formatter?: string | Function;
                    showMinLabel?: boolean;
                    showMaxLabel?: boolean;
                }

                /**
                 * @todo describe
                 */
                interface SplitLine {
                    show?: boolean;
                    interval?: number | Function;
                    lineStyle?: LineStyle;
                }

                /**
                 * @todo describe
                 */
                interface SplitArea {
                    interval?: number | Function;
                    show?: boolean;
                    areaStyle?: {
                        color?: string[];
                        shadowBlur?: number;
                        shadowColor?: string;
                        shadowOffsetX?: number;
                        shadowOffsetY?: number;
                        opacity?: number;
                    };
                }

                /**
                 * @todo describe
                 */
                interface DataObject {
                    value?: string | number;
                    textStyle?: TextStyleWithRich;
                }

                /**
                 * @todo describe
                 */
                interface Pointer {
                    show?: boolean;
                    type?: 'line' | 'shadow' | 'none';
                    snap?: boolean;
                    z?: number;
                    label?: PointerLabel;
                    lineStyle?: LineStyle;
                    shadowStyle?: {
                        color?: string;
                        shadowBlur?: number;
                        shadowColor?: string;
                        shadowOffsetX?: number;
                        shadowOffsetY?: number;
                        opacity?: number;
                    };
                    triggerTooltip?: boolean;
                    value?: number;
                    status?: boolean;
                    handle?: {
                        show?: boolean;
                        icon?: any;
                        size?: number | number[];
                        margin?: number;
                        color?: string;
                        throttle?: number;
                        shadowBlur?: number;
                        shadowColor?: string;
                        shadowOffsetX?: number;
                        shadowOffsetY?: number;
                    };
                }

                interface PointerLabel {
                    show?: boolean;
                    precision?: number | string;
                    formatter?: string | Function;
                    margin?: number;
                    color?: string;
                    fontStyle?: 'normal' | 'italic' | 'oblique';
                    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400';
                    fontFamily?: string;
                    fontSize?: number;
                    lineHeight?: number;
                    backgroundColor?: string | object;
                    borderColor?: string;
                    borderWidth?: number;
                    borderRadius?: number;
                    padding?: number | number[];
                    shadowColor?: string;
                    shadowBlur?: number;
                    shadowOffsetX?: number;
                    shadowOffsetY?: number;
                    width?: number | string;
                    height?: number | string;
                    textBorderColor?: string;
                    textBorderWidth?: number;
                    textShadowColor?: string;
                    textShadowBlur?: number;
                    textShadowOffsetX?: number;
                    textShadowOffsetY?: number;
                }
            }
        }
    }
}

declare module 'echarts' {
    export = echarts;
}

declare module 'echarts/lib/echarts' {
    export = echarts;
}
