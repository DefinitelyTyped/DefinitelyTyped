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
            type?: string | undefined;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.id
             */
            id?: string | undefined;

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
            coordinateSystem?: string | undefined;

            /**
             * Index of
             * [parallel coordinates](https://echarts.apache.org/en/option.html#parallel)
             * to combine with, which is useful for multiple parallel axes in
             * one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.parallelIndex
             */
            parallelIndex?: number | undefined;

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
            name?: string | undefined;

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
                color?: EChartOption.Color | undefined;

                /**
                 * line width.
                 *
                 *
                 * @default
                 * 2
                 * @see https://echarts.apache.org/en/option.html#series-parallel.lineStyle.width
                 */
                width?: number | undefined;

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
                type?: string | undefined;

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
                shadowBlur?: number | undefined;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.lineStyle.shadowColor
                 */
                shadowColor?: EChartOption.Color | undefined;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.lineStyle.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.lineStyle.shadowOffsetY
                 */
                shadowOffsetY?: number | undefined;

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
                opacity?: number | undefined;
            } | undefined;

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
                    color?: EChartOption.Color | undefined;

                    /**
                     * line width.
                     *
                     *
                     * @default
                     * 2
                     * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis.lineStyle.width
                     */
                    width?: number | undefined;

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
                    type?: string | undefined;

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
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis.lineStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-parallel.emphasis.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

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
                    opacity?: number | undefined;
                } | undefined;
            } | undefined;

            /**
             * When perform brush selection, the unselected lines will be set
             * as this transparency rate (which could darken those lines).
             *
             *
             * @default
             * 0.05
             * @see https://echarts.apache.org/en/option.html#series-parallel.inactiveOpacity
             */
            inactiveOpacity?: number | undefined;

            /**
             * When perform brush selection, the selected lines will be set
             * as this transparency rate (which could highlight those lines).
             *
             *
             * @default
             * 1
             * @see https://echarts.apache.org/en/option.html#series-parallel.activeOpacity
             */
            activeOpacity?: number | undefined;

            /**
             * Whether to update view in realtime.
             *
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-parallel.realtime
             */
            realtime?: boolean | undefined;

            /**
             * Whether to smooth the line.
             * It defaults to be `false` and can be set as `true` or the values
             * from 0 to 1 which indicating the smoothness.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.smooth
             */
            smooth?: boolean | number | undefined;

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
            progressive?: number | undefined;

            /**
             * If current data amount is over the threshold, "progressive rendering"
             * is enabled.
             *
             *
             * @default
             * 3000
             * @see https://echarts.apache.org/en/option.html#series-parallel.progressiveThreshold
             */
            progressiveThreshold?: number | undefined;

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
            progressiveChunkMode?: string | undefined;

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
            data?: (number | string | SeriesParallel.DataObject)[] | (number | string | SeriesParallel.DataObject)[][] | undefined;

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
            zlevel?: number | undefined;

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
            z?: number | undefined;

            /**
             * Whether to ignore mouse events.
             * Default value is false, for triggering and responding to mouse
             * events.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.silent
             */
            silent?: boolean | undefined;

            /**
             * Whether to enable animation.
             *
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-parallel.animation
             */
            animation?: boolean | undefined;

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
            animationThreshold?: number | undefined;

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
            animationDuration?: Function | number | undefined;

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
            animationEasing?: string | undefined;

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
            animationDelay?: Function | number | undefined;

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
            animationDurationUpdate?: Function | number | undefined;

            /**
             * Easing method used for animation.
             *
             *
             * @default
             * "cubicOut"
             * @see https://echarts.apache.org/en/option.html#series-parallel.animationEasingUpdate
             */
            animationEasingUpdate?: string | undefined;

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
            animationDelayUpdate?: Function | number | undefined;

            /**
             * tooltip settings in this series.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-parallel.tooltip
             */
            tooltip?: BaseTooltip | undefined;
        }

        namespace SeriesParallel {
            interface DataObject {
                /**
                 * The name of a data item.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.name
                 */
                name?: string | undefined;

                /**
                 * The value of a data item.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.value
                 */
                value?: any[] | undefined;

                /**
                 * Line style.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.lineStyle
                 */
                lineStyle?: object | undefined;

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
                color?: EChartOption.Color | undefined;

                /**
                 * line width.
                 *
                 *
                 * @default
                 * 2
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.width
                 */
                width?: number | undefined;

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
                type?: string | undefined;

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
                shadowBlur?: number | undefined;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.shadowColor
                 */
                shadowColor?: EChartOption.Color | undefined;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-parallel.data.shadowOffsetY
                 */
                shadowOffsetY?: number | undefined;

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
                opacity?: number | undefined;

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
                        color?: EChartOption.Color | undefined;

                        /**
                         * line width.
                         *
                         *
                         * @default
                         * 2
                         * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis.lineStyle.width
                         */
                        width?: number | undefined;

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
                        type?: string | undefined;

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
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis.lineStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis.lineStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-parallel.data.emphasis.lineStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

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
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;
            }
        }
    }
}
