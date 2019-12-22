declare namespace echarts {
    namespace EChartOption {
        /**
         * The series in parallel coordinate system.
         *
         * * * *
         *
         * **Introduction about Parallel coordinates**
         *
         * [Parallel Coordinates](https://en.wikipedia.org/wiki/Parallel_coordinates)
         * is a common way of visualizing high-dimensional geometry and analyzing
         * multivariate data.
         *
         * For example,
         * [series-parallel.data](https://echarts.apache.org/en/option.html#series-parallel.data)
         * is the following data:
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-parallel)
         *
         * In data above, each row is a "data item", and each column represents
         * a "dimension".
         * For example, the meanings of columns above are: "data", "AQI", "PM2.5",
         * "PM10", "carbon monoxide level", "nitrogen dioxide level", and "sulfur
         * dioxide level".
         *
         * Parallel coordinates are much used to visualize multi-dimension data
         * shown above.
         * Each axis represents a dimension (namely, a column), and each line
         * represents a data item.
         * Data can be brush-selected on axes. For example:
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-parallel)
         *
         * * * *
         *
         * **Brief about Configuration**
         *
         * Basic configuration parallel coordinates is shown as follow:
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-parallel)
         *
         * Three components are involved here:
         * [parallel](https://echarts.apache.org/en/option.html#parallel)
         * ,
         * [parallelAxis](https://echarts.apache.org/en/option.html#parallelAxis)
         * ,
         * [series-parallel](https://echarts.apache.org/en/option.html#series-parallel)
         *
         * + [parallel](https://echarts.apache.org/en/option.html#parallel)
         *
         * This component is the coordinate system.
         * One or more series (like "Beijing", "Shanghai", and "Guangzhou" in
         * the above example) can share one coordinate system.
         *
         * Like other coordinate systems, multiple parallel coordinate systems
         * can be created in one echarts instance.
         *
         * Position setting is also carried out here.
         *
         * + [parallelAxis](https://echarts.apache.org/en/option.html#parallelAxis)
         *
         * This is axis configuration.
         * Multiple axes are needed in parallel coordinates.
         *
         * [parallelAxis.parallelIndex](https://echarts.apache.org/en/option.html#parallelAxis.parallelIndex)
         * is used to specify which coordinate system this axis belongs to.
         * The first coordinate system is used by default.
         *
         * + [series-parallel](https://echarts.apache.org/en/option.html#series-parallel)
         *
         * This is the definition of parallel series, which will be drawn on
         * parallel coordinate system.
         *
         * [parallelAxis.parallelIndex](https://echarts.apache.org/en/option.html#parallelAxis.parallelIndex)
         * is used to specify which coordinate system this axis belongs to.
         * The first coordinate system is used by default.
         *
         * * * *
         *
         * **Notes and Best Practices**
         *
         * When configuring multiple
         * [parallelAxis](https://echarts.apache.org/en/option.html#parallelAxis)
         * , there might be some common attributes in each axis configuration.
         * To avoid writing them repeatly, they can be put under
         * [parallel.parallelAxisDefault](https://echarts.apache.org/en/option.html#parallel.parallelAxisDefault)
         * . Before initializing axis, configurations in
         * [parallel.parallelAxisDefault](https://echarts.apache.org/en/option.html#parallel.parallelAxisDefault)
         * will be merged into
         * [parallelAxis](https://echarts.apache.org/en/option.html#parallelAxis)
         * to generate the final axis configuration.
         *
         * **If data is too large and cause bad performance**
         *
         * It is suggested to set
         * [series-parallel.lineStyle.width](https://echarts.apache.org/en/option.html#series-parallel.lineStyle.width)
         * to be `0.5`
         * (or less), which may improve performance significantly.
         *
         * * * *
         *
         * **Display High-Dimension Data**
         *
         * When dimension number is extremely large, say, more than 50 dimensions,
         * there will be more than 50 axes, which may hardly display in a page.
         *
         * In this case, you may use
         * [parallel.axisExpandable](https://echarts.apache.org/en/option.html#parallel.axisExpandable)
         * to improve the display. See this example:
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-parallel)
         *
         *
         * @see https://echarts.apache.org/en/option.html#series-parallel
         */
        interface SeriesParallel {

            /**
             * @default
             * "parallel"
             * @see https://echarts.apache.org/en/option.html#series-parallel.type
             */
            type?: string;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.id
             */
            id?: string;

            /**
             * The coordinate used in the series, whose options are:
             *
             * + `'parallel'`
             *
             * Use parallel coordinates, with
             * [parallelIndex](https://echarts.apache.org/en/option.html#series-parallel.parallelIndex)
             * to assign the corresponding parallel coordinate components.
             *
             *
             * @default
             * "parallel"
             * @see https://echarts.apache.org/en/option.html#series-parallel.coordinateSystem
             */
            coordinateSystem?: string;

            /**
             * Index of
             * [parallel coordinates](https://echarts.apache.org/en/option.html#parallel)
             * to combine with, which is useful for multiple parallel axes in
             * one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.parallelIndex
             */
            parallelIndex?: number;

            /**
             * Series name used for displaying in
             * [tooltip](https://echarts.apache.org/en/option.html#tooltip)
             * and filtering with
             * [legend](https://echarts.apache.org/en/option.html#legend)
             * , or updaing data and configuration with `setOption`.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.name
             */
            name?: string;

            /**
             * Line style.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.lineStyle
             */
            lineStyle?: {

                /**
                 * Line color.
                 *
                 * > Color can be represented in RGB, for example `'rgb(128,
                 * 128, 128)'`.
                 * RGBA can be used when you need alpha channel, for example
                 * `'rgba(128, 128, 128, 0.5)'`.
                 * You may also use hexadecimal format, for example `'#ccc'`.
                 * Gradient color and texture are also supported besides single
                 * colors.
                 * >
                 * > [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.lineStyle)
                 *
                 *
                 * @default
                 * "#000"
                 * @see https://echarts.apache.org/en/option.html#series-parallel.lineStyle.color
                 */
                color?: string;

                /**
                 * line width.
                 *
                 *
                 * @default
                 * 2
                 * @see https://echarts.apache.org/en/option.html#series-parallel.lineStyle.width
                 */
                width?: number;

                /**
                 * line type.
                 *
                 * Options are:
                 *
                 * + `'solid'`
                 * + `'dashed'`
                 * + `'dotted'`
                 *
                 *
                 * @default
                 * "solid"
                 * @see https://echarts.apache.org/en/option.html#series-parallel.lineStyle.type
                 */
                type?: string;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.lineStyle)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.lineStyle.shadowBlur
                 */
                shadowBlur?: number;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.lineStyle.shadowColor
                 */
                shadowColor?: string;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.lineStyle.shadowOffsetX
                 */
                shadowOffsetX?: number;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.lineStyle.shadowOffsetY
                 */
                shadowOffsetY?: number;

                /**
                 * Opacity of the component.
                 * Supports value from 0 to 1, and the component will not be
                 * drawn when set to 0.
                 *
                 *
                 * @default
                 * 0.45
                 * @see https://echarts.apache.org/en/option.html#series-parallel.lineStyle.opacity
                 */
                opacity?: number;
            };

            /**
             * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis
             */
            emphasis?: {

                /**
                 * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis.lineStyle
                 */
                lineStyle?: {

                    /**
                     * Line color.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.emphasis.lineStyle)
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis.lineStyle.color
                     */
                    color?: string;

                    /**
                     * line width.
                     *
                     *
                     * @default
                     * 2
                     * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis.lineStyle.width
                     */
                    width?: number;

                    /**
                     * line type.
                     *
                     * Options are:
                     *
                     * + `'solid'`
                     * + `'dashed'`
                     * + `'dotted'`
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis.lineStyle.type
                     */
                    type?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.emphasis.lineStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis.lineStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis.lineStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @default
                     * 0.45
                     * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis.lineStyle.opacity
                     */
                    opacity?: number;
                };
            };

            /**
             * When perform brush selection, the unselected lines will be set
             * as this transparency rate (which could darken those lines).
             *
             *
             * @default
             * 0.05
             * @see https://echarts.apache.org/en/option.html#series-parallel.inactiveOpacity
             */
            inactiveOpacity?: number;

            /**
             * When perform brush selection, the selected lines will be set
             * as this transparency rate (which could highlight those lines).
             *
             *
             * @default
             * 1
             * @see https://echarts.apache.org/en/option.html#series-parallel.activeOpacity
             */
            activeOpacity?: number;

            /**
             * Whether to update view in realtime.
             *
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-parallel.realtime
             */
            realtime?: boolean;

            /**
             * Whether to smooth the line.
             * It defaults to be `false` and can be set as `true` or the values
             * from 0 to 1 which indicating the smoothness.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.smooth
             */
            smooth?: boolean | number;

            /**
             * `progressive` specifies the amount of graphic elements that can
             * be rendered within a frame (about 16ms) if "progressive rendering"
             * enabled.
             *
             * When data amount is from thousand to more than 10 million, it
             * will take too long time to render all of the graphic elements.
             * Since ECharts 4, "progressive rendering" is supported in its
             * workflow, which processes and renders data chunk by chunk alone
             * with each frame, avoiding to block the UI thread of the browser.
             *
             *
             * @default
             * 500
             * @see https://echarts.apache.org/en/option.html#series-parallel.progressive
             */
            progressive?: number;

            /**
             * If current data amount is over the threshold, "progressive rendering"
             * is enabled.
             *
             *
             * @default
             * 3000
             * @see https://echarts.apache.org/en/option.html#series-parallel.progressiveThreshold
             */
            progressiveThreshold?: number;

            /**
             * Chunk approach, optional values:
             *
             * + `'sequential'`: slice data by data index.
             * + `'mod'`: slice data by mod, which make the data items of each
             * chunk coming from all over the data, bringing better visual effect
             * while progressive rendering.
             *
             *
             * @default
             * "sequential"
             * @see https://echarts.apache.org/en/option.html#series-parallel.progressiveChunkMode
             */
            progressiveChunkMode?: string;

            /**
             * For example,
             * [series-parallel.data](https://echarts.apache.org/en/option.html#series-parallel.data)
             * is the following data:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel)
             *
             * In data above, each row is a "data item", and each column represents
             * a "dimension".
             * For example, the meanings of columns above are: "data", "AQI",
             * "PM2.5",
             * "PM10", "carbon monoxide level", "nitrogen dioxide level", and
             * "sulfur dioxide level".
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.data
             */
            data?: (
                (number | string | SeriesParallel.DataObject)[]
                | (number | string | SeriesParallel.DataObject)[][]
            );

            /**
             * `zlevel` value of all graghical elements in parallel.
             *
             * `zlevel` is used to make layers with Canvas.
             * Graphical elements with different `zlevel` values will be placed
             * in different Canvases, which is a common optimization technique.
             * We can put those frequently changed elements (like those with
             * animations) to a seperate `zlevel`.
             * Notice that too many Canvases will increase memory cost, and
             * should be used carefully on mobile phones to avoid crash.
             *
             * Canvases with bigger `zlevel` will be placed on Canvases with
             * smaller `zlevel`.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.zlevel
             */
            zlevel?: number;

            /**
             * `z` value of all graghical elements in parallel, which controls
             * order of drawing graphical components.
             * Components with smaller `z` values may be overwritten by those
             * with larger `z` values.
             *
             * `z` has a lower priority to `zlevel`, and will not create new
             * Canvas.
             *
             *
             * @default
             * 2
             * @see https://echarts.apache.org/en/option.html#series-parallel.z
             */
            z?: number;

            /**
             * Whether to ignore mouse events.
             * Default value is false, for triggering and responding to mouse
             * events.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.silent
             */
            silent?: boolean;

            /**
             * Whether to enable animation.
             *
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-parallel.animation
             */
            animation?: boolean;

            /**
             * Whether to set graphic number threshold to animation.
             * Animation will be disabled when graphic number is larger than
             * threshold.
             *
             *
             * @default
             * 2000
             * @see https://echarts.apache.org/en/option.html#series-parallel.animationThreshold
             */
            animationThreshold?: number;

            /**
             * Duration of the first animation, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel)
             *
             *
             * @default
             * 1000
             * @see https://echarts.apache.org/en/option.html#series-parallel.animationDuration
             */
            animationDuration?: Function | number;

            /**
             * Easing method used for the first animation.
             * Varied easing effects can be found at
             * [easing effect example](https://echarts.apache.org/examples/en/editor.html?c=line-easing)
             * .
             *
             *
             * @default
             * "linear"
             * @see https://echarts.apache.org/en/option.html#series-parallel.animationEasing
             */
            animationEasing?: string;

            /**
             * Delay before updating the first animation, which supports callback
             * function for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.animationDelay
             */
            animationDelay?: Function | number;

            /**
             * Time for animation to complete, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel)
             *
             *
             * @default
             * 300
             * @see https://echarts.apache.org/en/option.html#series-parallel.animationDurationUpdate
             */
            animationDurationUpdate?: Function | number;

            /**
             * Easing method used for animation.
             *
             *
             * @default
             * "cubicOut"
             * @see https://echarts.apache.org/en/option.html#series-parallel.animationEasingUpdate
             */
            animationEasingUpdate?: string;

            /**
             * Delay before updating animation, which supports callback function
             * for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.animationDelayUpdate
             */
            animationDelayUpdate?: Function | number;

            /**
             * tooltip settings in this series.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip
             */
            tooltip?: {

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The position of the tooltip's floating layer, which would
                 * follow the position of mouse by default.
                 *
                 * Options:
                 *
                 * + `Array`
                 *
                 * Display the position of tooltip's floating layer through
                 * array, which supports absolute position and relative percentage.
                 *
                 * Example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.tooltip)
                 *
                 * + `Function`
                 *
                 * Callback function in the following form:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.tooltip)
                 *
                 * **Parameters:**
                 * point: Mouse position.
                 * param: The same as formatter.
                 * dom: The DOM object of tooltip.
                 * rect: It is valid only when mouse is on graphic elements,
                 * which stands for a bounding box with `x`, `y`, `width`, and
                 * `height`.
                 * size: The size of dom echarts container.
                 * For example: `{contentSize: [width, height], viewSize: [width,
                 * height]}`.
                 *
                 * **Return:**
                 * Return value is an array standing for tooltip position, which
                 * can be absolute pixels, or relative percentage.
                 * Or can be an object, like `{left: 10, top: 30}`, or `{right:
                 * '20%', bottom: 40}`.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.tooltip)
                 *
                 * Or:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.tooltip)
                 *
                 * + `'inside'`
                 *
                 * Center position of the graphic element where the mouse is
                 * in, which is only valid when
                 * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 * + `'top'`
                 *
                 * Top position of the graphic element where the mouse is in,
                 * which is only valid when
                 * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 * + `'left'`
                 *
                 * Left position of the graphic element where the mouse is in,
                 * which is only valid when
                 * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 * + `'right'`
                 *
                 * Right position of the graphic element where the mouse is
                 * in, which is only valid when
                 * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 * + `'bottom'`
                 *
                 * Bottom position of the graphic element where the mouse is
                 * in, which is only valid when
                 * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.position
                 */
                position?: any[] | string;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The content formatter of tooltip's floating layer which supports
                 * string template and callback function.
                 *
                 * **1\. String template**
                 *
                 * The template variables are `{a}`, `{b}`, `{c}`, `{d}` and
                 * `{e}`, which stands for series name, data name and data value
                 * and ect. When
                 * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * is set to be `'axis'`, there may be data from multiple series.
                 * In this time, series index can be refered as `{a0}`, `{a1}`,
                 * or `{a2}`.
                 *
                 * `{a}`, `{b}`, `{c}`, `{d}` have different meanings for different
                 * series types:
                 *
                 * + Line (area) charts, bar (column) charts, K charts: `{a}`
                 * for series name, `{b}` for category name, `{c}` for data
                 * value, `{d}` for none;
                 *
                 * + Scatter (bubble) charts: `{a}` for series name, `{b}` for
                 * data name, `{c}` for data value, `{d}` for none;
                 *
                 * + Map: `{a}` for series name, `{b}` for area name, `{c}`
                 * for merging data, `{d}` for none;
                 *
                 * + Pie charts, gauge charts, funnel charts: `{a}` for series
                 * name, `{b}` for data item name, `{c}` for data value, `{d}`
                 * for percentage.
                 *
                 * **Example:**
                 *
                 * ```
                 * formatter: '{b0}: {c0}<br />{b1}: {c1}'
                 *
                 * ```
                 *
                 * **2\. Callback function**
                 *
                 * The format of callback function:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.tooltip)
                 *
                 * The first parameter `params` is the data that the formatter
                 * needs. Its format is shown as follows:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.tooltip)
                 *
                 * When
                 * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * is `'axis'`, or when tooltip is triggered by
                 * [axisPointer](https://echarts.apache.org/en/option.html#xAxis.axisPointer)
                 * , `params` is the data array of multiple series.
                 * The content of each item of the array is the same as above.
                 * Besides,
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.tooltip)
                 *
                 * **Note:** Using array to present all the parameters in ECharts
                 * 2.x is not supported anymore.
                 *
                 * The second parameter `ticket` is the asynchronous callback
                 * flag which should be used along with the third parameter
                 * `callback` when it is used.
                 *
                 * The third parameter `callback` is asynchronous callback.
                 * When the content of tooltip is acquired asynchronously, `ticket`
                 * and `htm` as introduced above can be used to update tooltip
                 * with callback.
                 *
                 * Example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.tooltip)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.formatter
                 */
                formatter?: Function | string;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The background color of tooltip's floating layer.
                 *
                 *
                 * @default
                 * "rgba(50,50,50,0.7)"
                 * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.backgroundColor
                 */
                backgroundColor?: string;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The border color of tooltip's floating layer.
                 *
                 *
                 * @default
                 * '#333'
                 * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.borderColor
                 */
                borderColor?: string;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The border width of tooltip's floating layer.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.borderWidth
                 */
                borderWidth?: number;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The floating layer of tooltip space around content.
                 * The unit is px.
                 * Default values for each position are 5.
                 * And they can be set to different values with left, right,
                 * top, and bottom.
                 *
                 * Examples:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.tooltip)
                 *
                 *
                 * @default
                 * 5
                 * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.padding
                 */
                padding?: number;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The text syle of tooltip's floating layer.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle
                 */
                textStyle?: {

                    /**
                     * text color.
                     *
                     *
                     * @default
                     * "#fff"
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.color
                     */
                    color?: string;

                    /**
                     * font style
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'italic'`
                     * + `'oblique'`
                     *
                     *
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.fontStyle
                     */
                    fontStyle?: string;

                    /**
                     * font thick weight
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'bold'`
                     * + `'bolder'`
                     * + `'lighter'`
                     * + 100 | 200 | 300 | 400...
                     *
                     *
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.fontWeight
                     */
                    fontWeight?: string;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 14
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.fontSize
                     */
                    fontSize?: number;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.tooltip.textStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Width of the text block.
                     * It is the width of the text by default.
                     * In most cases, there is no need to specify it.
                     * You may want to use it in some cases like make simple
                     * table or using background image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * `width` can also be percent string, like `'100%'`, which
                     * represents the percent of `contentWidth` (that is, the
                     * width without `padding`) of its container box.
                     * It is based on `contentWidth` because that each text
                     * fregment is layout based on the `content box`, where
                     * it makes no sense that calculating width based on `outerWith`
                     * in prectice.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.width
                     */
                    width?: number | string;

                    /**
                     * Height of the text block.
                     * It is the width of the text by default.
                     * You may want to use it in some cases like using background
                     * image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.height
                     */
                    height?: number | string;

                    /**
                     * Storke color of the text.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.textStyle.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;
                };

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * Extra CSS style for floating layer.
                 * The following is an example for adding shadow.
                 *
                 * ```
                 * extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
                 *
                 * ```
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip.extraCssText
                 */
                extraCssText?: string;
            };
        }

        namespace SeriesParallel {
            interface DataObject {

                /**
                 * The name of a data item.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.name
                 */
                name?: string;

                /**
                 * The value of a data item.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.value
                 */
                value?: any[];

                /**
                 * Line style.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.lineStyle
                 */
                lineStyle?: object;

                /**
                 * Line color.
                 *
                 * > Color can be represented in RGB, for example `'rgb(128,
                 * 128, 128)'`.
                 * RGBA can be used when you need alpha channel, for example
                 * `'rgba(128, 128, 128, 0.5)'`.
                 * You may also use hexadecimal format, for example `'#ccc'`.
                 * Gradient color and texture are also supported besides single
                 * colors.
                 * >
                 * > [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.data)
                 *
                 *
                 * @default
                 * "#000"
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.color
                 */
                color?: string;

                /**
                 * line width.
                 *
                 *
                 * @default
                 * 2
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.width
                 */
                width?: number;

                /**
                 * line type.
                 *
                 * Options are:
                 *
                 * + `'solid'`
                 * + `'dashed'`
                 * + `'dotted'`
                 *
                 *
                 * @default
                 * "solid"
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.type
                 */
                type?: string;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.data)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.shadowBlur
                 */
                shadowBlur?: number;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.shadowColor
                 */
                shadowColor?: string;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.shadowOffsetX
                 */
                shadowOffsetX?: number;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.shadowOffsetY
                 */
                shadowOffsetY?: number;

                /**
                 * Opacity of the component.
                 * Supports value from 0 to 1, and the component will not be
                 * drawn when set to 0.
                 *
                 *
                 * @default
                 * 0.45
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.opacity
                 */
                opacity?: number;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis
                 */
                emphasis?: {

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis.lineStyle
                     */
                    lineStyle?: {

                        /**
                         * Line color.
                         *
                         * > Color can be represented in RGB, for example `'rgb(128,
                         * 128, 128)'`.
                         * RGBA can be used when you need alpha channel, for
                         * example `'rgba(128, 128, 128, 0.5)'`.
                         * You may also use hexadecimal format, for example
                         * `'#ccc'`.
                         * Gradient color and texture are also supported besides
                         * single colors.
                         * >
                         * > [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.data.emphasis.lineStyle)
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis.lineStyle.color
                         */
                        color?: string;

                        /**
                         * line width.
                         *
                         *
                         * @default
                         * 2
                         * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis.lineStyle.width
                         */
                        width?: number;

                        /**
                         * line type.
                         *
                         * Options are:
                         *
                         * + `'solid'`
                         * + `'dashed'`
                         * + `'dotted'`
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis.lineStyle.type
                         */
                        type?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-parallel.parallel.data.emphasis.lineStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis.lineStyle.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis.lineStyle.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis.lineStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis.lineStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @default
                         * 0.45
                         * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis.lineStyle.opacity
                         */
                        opacity?: number;
                    };
                };
            }
        }
    }
}
