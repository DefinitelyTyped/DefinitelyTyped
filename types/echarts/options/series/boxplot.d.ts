declare namespace echarts {
    namespace EChartOption {
        /**
         * [Boxplot](https://en.wikipedia.org/wiki/Box_plot)
         * is a convenient way of graphically depicting groups of numerical
         * data through their quartiles.
         *
         * **Example:**
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot)
         *
         * Multiple `series` can be displayed in the same coordinate system.
         * Please refer to
         * [this example](https://echarts.apache.org/examples/en/editor.html?c=boxplot-multi&edit=1&reset=1)
         * .
         *
         *
         * @see https://echarts.apache.org/en/option.html#series-boxplot
         */
        interface SeriesBoxplot {
            /**
             * @default
             * "boxplot"
             * @see https://echarts.apache.org/en/option.html#series-boxplot.type
             */
            type?: string;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.id
             */
            id?: string;

            /**
             * The coordinate used in the series, whose options are:
             *
             * + `'cartesian2d'`
             *
             * Use a two-dimensional rectangular coordinate (also known as Cartesian
             * coordinate), with
             * [xAxisIndex](https://echarts.apache.org/en/option.html#series-cartesian2d.xAxisIndex)
             * and
             * [yAxisIndex](https://echarts.apache.org/en/option.html#series-cartesian2d.yAxisIndex)
             * to assign the corresponding axis component.
             *
             *
             * @default
             * "cartesian2d"
             * @see https://echarts.apache.org/en/option.html#series-boxplot.coordinateSystem
             */
            coordinateSystem?: string;

            /**
             * Index of
             * [x axis](https://echarts.apache.org/en/option.html#xAxis)
             * to combine with, which is useful for multiple x axes in one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.xAxisIndex
             */
            xAxisIndex?: number;

            /**
             * Index of
             * [y axis](https://echarts.apache.org/en/option.html#yAxis)
             * to combine with, which is useful for multiple y axes in one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.yAxisIndex
             */
            yAxisIndex?: number;

            /**
             * Series name used for displaying in
             * [tooltip](https://echarts.apache.org/en/option.html#tooltip)
             * and filtering with
             * [legend](https://echarts.apache.org/en/option.html#legend)
             * , or updaing data and configuration with `setOption`.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.name
             */
            name?: string;

            /**
             * Whether to enable highlighting chart when
             * [legend](https://echarts.apache.org/en/option.html#legend)
             * is being hovered.
             *
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-boxplot.legendHoverLink
             */
            legendHoverLink?: boolean;

            /**
             * Whether to enable the animation when hovering on box.
             *
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-boxplot.hoverAnimation
             */
            hoverAnimation?: boolean;

            /**
             * Layout methods, whose optional values are:
             *
             * + `'horizontal'`: horizontally layout all boxes.
             *
             * + `'vertical'`: vertically layout all boxes.
             *
             * The default value is decided by:
             *
             * + if there is a `category` axis:
             * + if it is horizontal, use `'horizontal'`;
             * + otherwise use `'vertical'`;
             * + otherwise use `'horizontal'`.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.layout
             */
            layout?: string;

            /**
             * Up and bottom boundary of box width.
             * The array is in the form of `[min, max]`.
             *
             * It could be absolute value in pixel, such as `[7, 50]`, or percentage,
             * such as `['40%', '90%']`.
             * The percentage means the percentage to the maximum possible width.
             *
             *
             * @default
             * [7, 50]
             * @see https://echarts.apache.org/en/option.html#series-boxplot.boxWidth
             */
            boxWidth?: any[];

            /**
             * @see https://echarts.apache.org/en/option.html#series-boxplot.itemStyle
             */
            itemStyle?: {
                /**
                 * boxplot color. Color is taken from
                 * [option.color Palette](https://echarts.apache.org/en/option.html#color)
                 * by default.
                 *
                 * > Color can be represented in RGB, for example `'rgb(128,
                 * 128, 128)'`.
                 * RGBA can be used when you need alpha channel, for example
                 * `'rgba(128, 128, 128, 0.5)'`.
                 * You may also use hexadecimal format, for example `'#ccc'`.
                 * Gradient color and texture are also supported besides single
                 * colors.
                 * >
                 * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.itemStyle)
                 *
                 *
                 * @default
                 * "#fff"
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.itemStyle.color
                 */
                color?: string;

                /**
                 * boxplot border color, whose format is similar to that of
                 * `color`.
                 *
                 *
                 * @default
                 * "#000"
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.itemStyle.borderColor
                 */
                borderColor?: string;

                /**
                 * boxplot border width. No border when it is set to be 0.
                 *
                 *
                 * @default
                 * 1
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.itemStyle.borderWidth
                 */
                borderWidth?: number;

                /**
                 * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                 * `'solid'` by default.
                 *
                 *
                 * @default
                 * "solid"
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.itemStyle.borderType
                 */
                borderType?: string;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.itemStyle)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.itemStyle.shadowBlur
                 */
                shadowBlur?: number;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.itemStyle.shadowColor
                 */
                shadowColor?: string;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.itemStyle.shadowOffsetX
                 */
                shadowOffsetX?: number;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.itemStyle.shadowOffsetY
                 */
                shadowOffsetY?: number;

                /**
                 * Opacity of the component.
                 * Supports value from 0 to 1, and the component will not be
                 * drawn when set to 0.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.itemStyle.opacity
                 */
                opacity?: number;
            };

            /**
             * @see https://echarts.apache.org/en/option.html#series-boxplot.emphasis
             */
            emphasis?: {
                /**
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.emphasis.itemStyle
                 */
                itemStyle?: {
                    /**
                     * boxplot color. Color is taken from
                     * [option.color Palette](https://echarts.apache.org/en/option.html#color)
                     * by default.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.emphasis.itemStyle)
                     *
                     *
                     * @default
                     * "#fff"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.emphasis.itemStyle.color
                     */
                    color?: string;

                    /**
                     * boxplot border color, whose format is similar to that
                     * of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.emphasis.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * boxplot border width.
                     * No border when it is set to be 0.
                     *
                     *
                     * @default
                     * 2
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.emphasis.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.emphasis.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.emphasis.itemStyle)
                     *
                     *
                     * @default
                     * 5
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.emphasis.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @default
                     * "rgba(0,0,0,0.4)"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.emphasis.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @default
                     * 2
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.emphasis.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @default
                     * 2
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.emphasis.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.emphasis.itemStyle.opacity
                     */
                    opacity?: number;
                };
            };

            /**
             * `dimensions` can be used to define dimension info for `series.data`
             * or `dataset.source`.
             *
             * Notice: if
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * is used, we can provide dimension names in the first column/row
             * of
             * [dataset.source](https://echarts.apache.org/en/option.html#dataset.source)
             * , and not need to specify `dimensions` here.
             * But if `dimensions` is specified here, echarts will not retrieve
             * dimension names from the first row/column of `dataset.source`
             * any more.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot)
             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot)
             *
             * Each data item of `dimensions` can be:
             *
             * + `string`, for example, `'someName'`, which equals to `{name:
             * 'someName'}`.
             * + `Object`, where the attributes can be:
             * + name: `string`.
             * + type: `string`, supports:
             * + `number`
             * + `float`, that is,
             * [Float64Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
             *
             * + `int`, that is,
             * [Int32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
             *
             * + `ordinal`, discrete value, which represents string generally.
             * + `time`, time value, see
             * [data](https://echarts.apache.org/en/option.html#series.data)
             * to check the format of time value.
             * + displayName: `string`, generally used in tooltip for dimension
             * display. If not specified, use `name` by default.
             *
             * When `dimensions` is specified, the default `tooltip` will be
             * displayed vertically, which is better to show diemsion names.
             * Otherwise, `tooltip` will displayed only value horizontally.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.dimensions
             */
            dimensions?: any[];

            /**
             * Define what is encoded to for each dimension of `data`.
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot)
             *
             * Attributes of encode are different according to the type of coordinate
             * systtems. For
             * [cartesian2d](https://echarts.apache.org/en/option.html#grid)
             * , `x` and `y` can be defined. For
             * [polar](https://echarts.apache.org/en/option.html#polar)
             * , `radius` and `angle` can be defined. For
             * [geo](https://echarts.apache.org/en/option.html#geo)
             * , `lng` and `lat` can be defined.
             * Attribute `tooltip` and `itemName` (data item name in tooltip)
             * are always able to be defined.
             *
             * When
             * [dimensions](https://echarts.apache.org/en/option.html#series.dimensions)
             * is used to defined name for a certain dimension, `encode` can
             * refer the name directly. For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot)
             *
             * Specially, in \[custom series(~series-custom), some property
             * in `encode`, corresponding to axis, can be set as null to make
             * the series not controlled by the axis, that is, the series data
             * will not be count in the extent of the axis, and the
             * [dataZoom](https://echarts.apache.org/en/option.html#dataZoom)
             * on the axis will not filter the series.
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot)
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.encode
             */
            encode?: object;

            /**
             * Data should be the two-dimensional array shown as follow.
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot)
             *
             * Every data item (each line in the example above) in the two-dimensional
             * array will be rendered into a box, and each line have five values
             * as:
             *
             * ```
             * [min, Q1, median (or Q2), Q3, max]
             *
             * ```
             *
             * **Data Processing**
             *
             * ECharts doesn't contain data processing modules, so the five
             * statistic values should be calculated by yourself and then passes
             * into `boxplot`.
             *
             * However, ECharts also provide some simple
             * [raw data processing tools](https://github.com/ecomfe/echarts/tree/master/extension/dataTool)
             * . For example, this
             * [example](https://echarts.apache.org/examples/en/editor.html?c=boxplot-light-velocity&edit=1&reset=1)
             * uses `echarts.dataTool.prepareBoxplotData`
             * to proceed simple data statistics.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.data
             */
            data?: (number | SeriesBoxplot.DataObject)[][];

            /**
             * Mark point in a chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint
             */
            markPoint?: {
                /**
                 * Symbol of .
                 *
                 * Icon types provided by ECharts includes `'circle'`, `'rect'`,
                 * `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`,
                 * `'none'`
                 *
                 * It can be set to an image with `'image://url'` , in which
                 * URL is the link to an image, or `dataURI` of an image.
                 *
                 * An image URL example:
                 *
                 * ```
                 * 'image://http://xxx.xxx.xxx/a/b.png'
                 *
                 * ```
                 *
                 * A `dataURI` example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint)
                 *
                 * Icons can be set to arbitrary vector path via `'path://'`
                 * in ECharts.
                 * As compared with raster image, vector paths prevent from
                 * jagging and blurring when scaled, and have a better control
                 * over changing colors.
                 * Size of vectoer icon will be adapted automatically.
                 * Refer to
                 * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                 * for more information about format of path.
                 * You may export vector paths from tools like Adobe Illustrator.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint)
                 *
                 *
                 * @default
                 * "pin"
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.symbol
                 */
                symbol?: string;

                /**
                 * symbol size.
                 * It can be set to single numbers like `10`, or use an array
                 * to represent width and height.
                 * For example, `[20, 10]` means symbol width is `20`, and height
                 * is`10`.
                 *
                 * If size of symbols needs to be different, you can set with
                 * callback function in the following format:
                 *
                 * ```
                 * (value: Array|number, params: Object) => number|Array
                 *
                 * ```
                 *
                 * The first parameter `value` is the value in
                 * [data](https://echarts.apache.org/en/option.html#series-.data)
                 * , and the second parameter `params` is the rest parameters
                 * of data item.
                 *
                 *
                 * @default
                 * 50
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.symbolSize
                 */
                symbolSize?: any[] | Function | number;

                /**
                 * Rotate degree of symbol.
                 * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                 * `symbolRotate` value will be ignored, and compulsively use
                 * tangent angle.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.symbolRotate
                 */
                symbolRotate?: number;

                /**
                 * Whether to keep aspect for symbols in the form of `path://`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.symbolKeepAspect
                 */
                symbolKeepAspect?: boolean;

                /**
                 * Offset of symbol relative to original position.
                 * By default, symbol will be put in the center position of
                 * data.
                 * But if symbol is from user-defined vector path or image,
                 * you may not expect symbol to be in center.
                 * In this case, you may use this attribute to set offset to
                 * default position.
                 * It can be in absolute pixel value, or in relative percentage
                 * value.
                 *
                 * For example, `[0, '50%']` means to move upside side position
                 * of symbol height.
                 * It can be used to make the arrow in the bottom to be at data
                 * position when symbol is pin.
                 *
                 *
                 * @default
                 * [0, 0]
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.symbolOffset
                 */
                symbolOffset?: any[];

                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.silent
                 */
                silent?: boolean;

                /**
                 * Label of mark point.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.show
                     */
                    show?: boolean;

                    /**
                     * Label position.
                     *
                     * **Followings are the options:**
                     *
                     * + \[x, y\]
                     *
                     * Use relative percentage, or absolute pixel values to
                     * represent position of label relative to top-left corner
                     * of bounding box. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label)
                     *
                     * + 'top'
                     *
                     * + 'left'
                     * + 'right'
                     * + 'bottom'
                     * + 'inside'
                     * + 'insideLeft'
                     * + 'insideRight'
                     * + 'insideTop'
                     * + 'insideBottom'
                     * + 'insideTopLeft'
                     * + 'insideBottomLeft'
                     * + 'insideTopRight'
                     * + 'insideBottomRight'
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @default
                     * "inside"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.position
                     */
                    position?: any[] | string;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @default
                     * 5
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.distance
                     */
                    distance?: number;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.offset
                     */
                    offset?: any[];

                    /**
                     * Data label formatter, which supports string template
                     * and callback function.
                     * In either form, `\n` is supported to represent a new
                     * line.
                     *
                     * **String template**
                     *
                     * Model variation includes:
                     *
                     * + `{a}`: series name.
                     * + `{b}`: the name of a data item.
                     * + `{c}`: the value of a data item.
                     * + `{@xxx}: the value of a dimension named`'xxx'`, for
                     * example,`{@product}`refers the value of`'product'\` dimension。
                     * + `{@[n]}: the value of a dimension at the index of`n`,
                     * for example,`{@\[3\]}\` refers the value at dimensions\[3\].
                     *
                     * **example:**
                     *
                     * ```
                     * formatter: '{b}: {@score}'
                     *
                     * ```
                     *
                     * **Callback function**
                     *
                     * Callback function is in form of:
                     *
                     * ```
                     * (params: Object|Array) => string
                     *
                     * ```
                     *
                     * where `params` is the single dataset needed by formatter,
                     * which is formed as:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.formatter
                     */
                    formatter?: Function | string;

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.fontWeight
                     */
                    fontWeight?: string | number;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.fontSize
                     */
                    fontSize?: number;

                    /**
                     * Horizontal alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'left'`
                     * + `'center'`
                     * + `'right'`
                     *
                     * If `align` is not set in `rich`, `align` in parent level
                     * will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.align
                     */
                    align?: string;

                    /**
                     * Vertical alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'top'`
                     * + `'middle'`
                     * + `'bottom'`
                     *
                     * If `verticalAlign` is not set in `rich`, `verticalAlign`
                     * in parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.backgroundColor
                     */
                    backgroundColor?: object | string;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.borderRadius
                     */
                    borderRadius?: number;

                    /**
                     * Padding of the text fregment, for example:
                     *
                     * + `padding: [3, 4, 5, 6]`: represents padding of `[top,
                     * right, bottom, left]`.
                     * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                     * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.shadowOffsetY
                     */
                    shadowOffsetY?: number;

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
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.height
                     */
                    height?: number | string;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {
                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string | number;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                             */
                            fontSize?: number;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.align
                             */
                            align?: string;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                             */
                            lineHeight?: number;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                             */
                            borderRadius?: number;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.width
                             */
                            width?: number | string;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.show
                         */
                        show?: boolean;

                        /**
                         * Label position.
                         *
                         * **Followings are the options:**
                         *
                         * + \[x, y\]
                         *
                         * Use relative percentage, or absolute pixel values
                         * to represent position of label relative to top-left
                         * corner of bounding box. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.emphasis)
                         *
                         * + 'top'
                         *
                         * + 'left'
                         * + 'right'
                         * + 'bottom'
                         * + 'inside'
                         * + 'insideLeft'
                         * + 'insideRight'
                         * + 'insideTop'
                         * + 'insideBottom'
                         * + 'insideTopLeft'
                         * + 'insideBottomLeft'
                         * + 'insideTopRight'
                         * + 'insideBottomRight'
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.position
                         */
                        position?: any[] | string;

                        /**
                         * Distance to the host graphic element.
                         * Works when position is string value (like `'top'`、`'insideRight'`).
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @default
                         * 5
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.distance
                         */
                        distance?: number;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                         * .
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.offset
                         */
                        offset?: any[];

                        /**
                         * Data label formatter, which supports string template
                         * and callback function.
                         * In either form, `\n` is supported to represent a
                         * new line.
                         *
                         * **String template**
                         *
                         * Model variation includes:
                         *
                         * + `{a}`: series name.
                         * + `{b}`: the name of a data item.
                         * + `{c}`: the value of a data item.
                         * + `{@xxx}: the value of a dimension named`'xxx'`,
                         * for example,`{@product}`refers the value of`'product'\`
                         * dimension。
                         * + `{@[n]}: the value of a dimension at the index
                         * of`n`, for example,`{@\[3\]}\` refers the value at
                         * dimensions\[3\].
                         *
                         * **example:**
                         *
                         * ```
                         * formatter: '{b}: {@score}'
                         *
                         * ```
                         *
                         * **Callback function**
                         *
                         * Callback function is in form of:
                         *
                         * ```
                         * (params: Object|Array) => string
                         *
                         * ```
                         *
                         * where `params` is the single dataset needed by formatter,
                         * which is formed as:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.formatter
                         */
                        formatter?: Function | string;

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.color
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
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.fontWeight
                         */
                        fontWeight?: string | number;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.fontSize
                         */
                        fontSize?: number;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.align
                         */
                        align?: string;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.emphasis)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.backgroundColor
                         */
                        backgroundColor?: object | string;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.borderRadius
                         */
                        borderRadius?: number;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.width
                         */
                        width?: number | string;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.height
                         */
                        height?: number | string;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {
                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;
                            };
                        };
                    };
                };

                /**
                 * Mark point style.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle
                 */
                itemStyle?: {
                    /**
                     * color.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.emphasis
                     */
                    emphasis?: {
                        /**
                         * color.
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.emphasis.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.emphasis.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.itemStyle.emphasis.opacity
                         */
                        opacity?: number;
                    };
                };

                /**
                 * Data array for mark points, each of which is an object.
                 * Here are some ways to assign mark point position.
                 *
                 * 1. Assign coordinate according to container with
                 * [x](https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * 2. Assign coordinate position with
                 * [coord](https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.coord)
                 * attribute, in which `'min'`, `'max'`, `'average'` are supported
                 * for each dimension.
                 *
                 * 3. Use
                 * [type](https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.type)
                 * attribute to mark the maximum and minimum values in the series,
                 * in which
                 * [valueIndex](https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.valueIndex)
                 * or
                 * [valueDim](https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.valueDim)
                 * can be used to assign the dimension.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * **For example:**
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data
                 */
                data?: {
                    /**
                     * Mark point name.
                     *
                     *
                     * @default
                     * ''
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.name
                     */
                    name?: string;

                    /**
                     * Special label types, are used to label maximum value,
                     * minimum value and so on.
                     *
                     * **Options are:**
                     *
                     * + `'min'` maximum value.
                     * + `'max'` minimum value.
                     * + `'average'` average value.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.type
                     */
                    type?: string;

                    /**
                     * Available when using
                     * [type](https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.type)
                     * it is used to assign maximum value and minimum value
                     * in dimensions, it could be `0` (xAxis, radiusAxis), `1`
                     * (yAxis, angleAxis), and use the first value axis dimension
                     * by default.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.valueIndex
                     */
                    valueIndex?: number;

                    /**
                     * Works only when
                     * [type](https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.type)
                     * is assigned.
                     * It is used to state the dimension used to calculate maximum
                     * value or minimum value.
                     * It may be the direct name of a dimension, like `x`, or
                     * `angle` for line charts, or `open`, or `close` for candlestick
                     * charts.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.valueDim
                     */
                    valueDim?: string;

                    /**
                     * Coordinates of the starting point or ending point, whose
                     * format depends on the coordinate of the series.
                     * It can be `x`, and `y` for
                     * [rectangular coordinates](https://echarts.apache.org/en/option.html#grid)
                     * , or `radius`, and `angle` for
                     * [polar coordinates](https://echarts.apache.org/en/option.html#polar)
                     * .
                     *
                     * **Notice:** For axis with
                     * [axis.type](https://echarts.apache.org/en/option.html#xAixs.type)
                     * `'category'`:
                     *
                     * + If coord value is `number`, it represents index of
                     * [axis.data](https://echarts.apache.org/en/option.html#xAxis.data)
                     * .
                     * + If coord value is `string`, it represents concrete
                     * value in
                     * [axis.data](https://echarts.apache.org/en/option.html#xAxis.data)
                     *
                     *
                     * Please notice that in this case `xAxis.data`
                     * must not be written as \[number, number,
                     *
                     *
                     *
                     * \], but can only be written \[string, string,
                     *
                     *
                     *
                     * \].
                     * Otherwise it is not able to be located by markPoint /
                     * markLine.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.coord
                     */
                    coord?: any[];

                    /**
                     * X position according to container, in pixel.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.x
                     */
                    x?: number;

                    /**
                     * Y position according to container, in pixel.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.y
                     */
                    y?: number;

                    /**
                     * Label value, which can be ignored.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.value
                     */
                    value?: number;

                    /**
                     * Symbol of .
                     *
                     * Icon types provided by ECharts includes `'circle'`, `'rect'`,
                     * `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`,
                     * `'none'`
                     *
                     * It can be set to an image with `'image://url'` , in which
                     * URL is the link to an image, or `dataURI` of an image.
                     *
                     * An image URL example:
                     *
                     * ```
                     * 'image://http://xxx.xxx.xxx/a/b.png'
                     *
                     * ```
                     *
                     * A `dataURI` example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data)
                     *
                     * Icons can be set to arbitrary vector path via `'path://'`
                     * in ECharts.
                     * As compared with raster image, vector paths prevent from
                     * jagging and blurring when scaled, and have a better control
                     * over changing colors.
                     * Size of vectoer icon will be adapted automatically.
                     * Refer to
                     * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                     * for more information about format of path.
                     * You may export vector paths from tools like Adobe Illustrator.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.symbol
                     */
                    symbol?: string;

                    /**
                     * symbol size.
                     * It can be set to single numbers like `10`, or use an
                     * array to represent width and height.
                     * For example, `[20, 10]` means symbol width is `20`, and
                     * height is`10`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.symbolSize
                     */
                    symbolSize?: any[] | number;

                    /**
                     * Rotate degree of symbol.
                     * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                     * `symbolRotate` value will be ignored, and compulsively
                     * use tangent angle.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.symbolRotate
                     */
                    symbolRotate?: number;

                    /**
                     * Whether to keep aspect for symbols in the form of `path://`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.symbolKeepAspect
                     */
                    symbolKeepAspect?: boolean;

                    /**
                     * Offset of symbol relative to original position.
                     * By default, symbol will be put in the center position
                     * of data.
                     * But if symbol is from user-defined vector path or image,
                     * you may not expect symbol to be in center.
                     * In this case, you may use this attribute to set offset
                     * to default position.
                     * It can be in absolute pixel value, or in relative percentage
                     * value.
                     *
                     * For example, `[0, '50%']` means to move upside side position
                     * of symbol height.
                     * It can be used to make the arrow in the bottom to be
                     * at data position when symbol is pin.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.symbolOffset
                     */
                    symbolOffset?: any[];

                    /**
                     * Mark point style.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle
                     */
                    itemStyle?: {
                        /**
                         * color.
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.opacity
                         */
                        opacity?: number;

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.emphasis
                         */
                        emphasis?: {
                            /**
                             * color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.itemStyle.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.emphasis.color
                             */
                            color?: string;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.emphasis.borderColor
                             */
                            borderColor?: string;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.emphasis.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.emphasis.borderType
                             */
                            borderType?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.itemStyle.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.emphasis.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.emphasis.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.emphasis.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.itemStyle.emphasis.opacity
                             */
                            opacity?: number;
                        };
                    };

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label
                     */
                    label?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.show
                         */
                        show?: boolean;

                        /**
                         * Label position.
                         *
                         * **Followings are the options:**
                         *
                         * + \[x, y\]
                         *
                         * Use relative percentage, or absolute pixel values
                         * to represent position of label relative to top-left
                         * corner of bounding box. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label)
                         *
                         * + 'top'
                         *
                         * + 'left'
                         * + 'right'
                         * + 'bottom'
                         * + 'inside'
                         * + 'insideLeft'
                         * + 'insideRight'
                         * + 'insideTop'
                         * + 'insideBottom'
                         * + 'insideTopLeft'
                         * + 'insideBottomLeft'
                         * + 'insideTopRight'
                         * + 'insideBottomRight'
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.position
                         */
                        position?: any[] | string;

                        /**
                         * Distance to the host graphic element.
                         * Works when position is string value (like `'top'`、`'insideRight'`).
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @default
                         * 5
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.distance
                         */
                        distance?: number;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                         * .
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.offset
                         */
                        offset?: any[];

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.color
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
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.fontWeight
                         */
                        fontWeight?: string | number;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.fontSize
                         */
                        fontSize?: number;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.align
                         */
                        align?: string;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.backgroundColor
                         */
                        backgroundColor?: object | string;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.borderRadius
                         */
                        borderRadius?: number;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.width
                         */
                        width?: number | string;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.height
                         */
                        height?: number | string;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {
                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;
                            };
                        };

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis
                         */
                        emphasis?: {
                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.show
                             */
                            show?: boolean;

                            /**
                             * Label position.
                             *
                             * **Followings are the options:**
                             *
                             * + \[x, y\]
                             *
                             * Use relative percentage, or absolute pixel values
                             * to represent position of label relative to top-left
                             * corner of bounding box. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.emphasis)
                             *
                             * + 'top'
                             *
                             * + 'left'
                             * + 'right'
                             * + 'bottom'
                             * + 'inside'
                             * + 'insideLeft'
                             * + 'insideRight'
                             * + 'insideTop'
                             * + 'insideBottom'
                             * + 'insideTopLeft'
                             * + 'insideBottomLeft'
                             * + 'insideTopRight'
                             * + 'insideBottomRight'
                             *
                             * See:
                             * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                             * .
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.position
                             */
                            position?: any[] | string;

                            /**
                             * Distance to the host graphic element.
                             * Works when position is string value (like `'top'`、`'insideRight'`).
                             *
                             * See:
                             * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                             * .
                             *
                             *
                             * @default
                             * 5
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.distance
                             */
                            distance?: number;

                            /**
                             * Rotate label, from -90 degree to 90, positive
                             * value represents rotate anti-clockwise.
                             *
                             * See:
                             * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                             * .
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rotate
                             */
                            rotate?: number;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.offset
                             */
                            offset?: any[];

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.color
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
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.fontWeight
                             */
                            fontWeight?: string | number;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.fontSize
                             */
                            fontSize?: number;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.align
                             */
                            align?: string;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.lineHeight
                             */
                            lineHeight?: number;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.emphasis)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.borderRadius
                             */
                            borderRadius?: number;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.width
                             */
                            width?: number | string;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.emphasis)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                                 */
                                [userStyle: string]: {
                                    /**
                                     * text color.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * ""#fff""
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string | number;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                     */
                                    fontSize?: number;

                                    /**
                                     * Horizontal alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'left'`
                                     * + `'center'`
                                     * + `'right'`
                                     *
                                     * If `align` is not set in `rich`, `align`
                                     * in parent level will be used.
                                     * For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                     */
                                    align?: string;

                                    /**
                                     * Vertical alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'top'`
                                     * + `'middle'`
                                     * + `'bottom'`
                                     *
                                     * If `verticalAlign` is not set in `rich`,
                                     * `verticalAlign` in parent level will
                                     * be used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                     */
                                    lineHeight?: number;

                                    /**
                                     * Background color of the text fregment.
                                     *
                                     * Can be color string, like `'#123234'`,
                                     * `'red'`, `rgba(0,23,11,0.3)'`.
                                     *
                                     * Or image can be used, for example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * `width` or `height` can be specified
                                     * when using background image, or auto
                                     * adapted by default.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                     */
                                    borderRadius?: number;

                                    /**
                                     * Padding of the text fregment, for example:
                                     *
                                     * + `padding: [3, 4, 5, 6]`: represents
                                     * padding of `[top, right, bottom, left]`.
                                     * + `padding: 4`: represents `padding:
                                     * [4, 4, 4, 4]`.
                                     * + `padding: [3, 4]`: represents `padding:
                                     * [3, 4, 3, 4]`.
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                     */
                                    shadowOffsetY?: number;

                                    /**
                                     * Width of the text block.
                                     * It is the width of the text by default.
                                     * In most cases, there is no need to specify
                                     * it.
                                     * You may want to use it in some cases
                                     * like make simple table or using background
                                     * image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * `width` can also be percent string, like
                                     * `'100%'`, which represents the percent
                                     * of `contentWidth` (that is, the width
                                     * without `padding`) of its container box.
                                     * It is based on `contentWidth` because
                                     * that each text fregment is layout based
                                     * on the `content box`, where it makes
                                     * no sense that calculating width based
                                     * on `outerWith` in prectice.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                     */
                                    width?: number | string;

                                    /**
                                     * Height of the text block.
                                     * It is the width of the text by default.
                                     * You may want to use it in some cases
                                     * like using background image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number;
                                };
                            };
                        };
                    };
                };

                /**
                 * Whether to enable animation.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.animation
                 */
                animation?: boolean;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 *
                 * @default
                 * 2000
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.animationThreshold
                 */
                animationThreshold?: number;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.animationDuration
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
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.animationEasing
                 */
                animationEasing?: string;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.animationDelay
                 */
                animationDelay?: Function | number;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint)
                 *
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.animationEasingUpdate
                 */
                animationEasingUpdate?: string;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markPoint)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * prefix
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markPoint.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number;
            };

            /**
             * Use a line in the chart to illustrate.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine
             */
            markLine?: {
                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.silent
                 */
                silent?: boolean;

                /**
                 * Symbol type at the two ends of the mark line.
                 * It can be an array for two ends, or assigned seperately.
                 * See
                 * [data.symbol](https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.symbol)
                 * for more format information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.symbol
                 */
                symbol?: any[] | string;

                /**
                 * Symbol size at the two ends of the mark line.
                 * It can be an array for two ends, or assigned seperately.
                 *
                 * **Attention:** You cannot assgin width and height seperately
                 * as normal `symbolSize`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.symbolSize
                 */
                symbolSize?: any[] | number;

                /**
                 * Precison of marking line value, which is useful when displaying
                 * average value mark line.
                 *
                 *
                 * @default
                 * 2
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.precision
                 */
                precision?: number;

                /**
                 * Mark line text.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.label
                 */
                label?: {
                    /**
                     * Whether show label or not.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.label.show
                     */
                    show?: boolean;

                    /**
                     * Positions of labels can be:
                     *
                     * + `'start'` starting point of the line.
                     * + `'middle'` middle point of the line.
                     * + `'end'` ending point of the line.
                     *
                     *
                     * @default
                     * "end"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.label.position
                     */
                    position?: string;

                    /**
                     * Data label formatter, which supports string template
                     * and callback function.
                     * In either form, `\n` is supported to represent a new
                     * line.
                     *
                     * **String template**
                     *
                     * Model variation includes:
                     *
                     * + `{a}`: series name.
                     * + `{b}`: the name of a data item.
                     * + `{c}`: the value of a data item.
                     * + `{d}`: the percent.
                     * + `{@xxx}: the value of a dimension named`'xxx'`, for
                     * example,`{@product}`refers the value of`'product'\` dimension。
                     * + `{@[n]}: the value of a dimension at the index of`n`,
                     * for example,`{@\[3\]}\` refers the value at dimensions\[3\].
                     *
                     * **example:**
                     *
                     * ```
                     * formatter: '{b}: {d}'
                     *
                     * ```
                     *
                     * **Callback function**
                     *
                     * Callback function is in form of:
                     *
                     * ```
                     * (params: Object|Array) => string
                     *
                     * ```
                     *
                     * where `params` is the single dataset needed by formatter,
                     * which is formed as:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.label.formatter
                     */
                    formatter?: Function | string;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether show label or not.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.label.emphasis.show
                         */
                        show?: boolean;

                        /**
                         * Positions of labels can be:
                         *
                         * + `'start'` starting point of the line.
                         * + `'middle'` middle point of the line.
                         * + `'end'` ending point of the line.
                         *
                         *
                         * @default
                         * "end"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.label.emphasis.position
                         */
                        position?: string;

                        /**
                         * Data label formatter, which supports string template
                         * and callback function.
                         * In either form, `\n` is supported to represent a
                         * new line.
                         *
                         * **String template**
                         *
                         * Model variation includes:
                         *
                         * + `{a}`: series name.
                         * + `{b}`: the name of a data item.
                         * + `{c}`: the value of a data item.
                         * + `{d}`: the percent.
                         * + `{@xxx}: the value of a dimension named`'xxx'`,
                         * for example,`{@product}`refers the value of`'product'\`
                         * dimension。
                         * + `{@[n]}: the value of a dimension at the index
                         * of`n`, for example,`{@\[3\]}\` refers the value at
                         * dimensions\[3\].
                         *
                         * **example:**
                         *
                         * ```
                         * formatter: '{b}: {d}'
                         *
                         * ```
                         *
                         * **Callback function**
                         *
                         * Callback function is in form of:
                         *
                         * ```
                         * (params: Object|Array) => string
                         *
                         * ```
                         *
                         * where `params` is the single dataset needed by formatter,
                         * which is formed as:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.label.emphasis.formatter
                         */
                        formatter?: Function | string;
                    };
                };

                /**
                 * Mark line style.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.lineStyle)
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.color
                     */
                    color?: string;

                    /**
                     * line width.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.width
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
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.type
                     */
                    type?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.lineStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * Edge curvature, which supports value from 0 to 1.
                     * The larger the value, the greater the curvature.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.curveness
                     */
                    curveness?: number;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.emphasis
                     */
                    emphasis?: {
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.lineStyle.emphasis)
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.emphasis.color
                         */
                        color?: string;

                        /**
                         * line width.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.emphasis.width
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
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.emphasis.type
                         */
                        type?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.lineStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.lineStyle.emphasis.opacity
                         */
                        opacity?: number;
                    };
                };

                /**
                 * Data array of marking line.
                 * Every array item can be an array of one or two values, representing
                 * starting and ending point of the line, and every item is
                 * an object.
                 * Here are several ways to assign the positions of starting
                 * and ending point.
                 *
                 * 1. Assign coordinate according to container with
                 * [x](https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * 2. Assign coordinate position with
                 * [coord](https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.coord)
                 * attribute, in which `'min'`, `'max'`, `'average'` are supported
                 * for each dimension.
                 *
                 * 3. Use
                 * [type](https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.type)
                 * attribute to mark the maximum and minimum values in the series,
                 * in which
                 * [valueIndex](https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.valueIndex)
                 * or
                 * [valueDim](https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.valueDim)
                 * can be used to assign the dimension.
                 *
                 * 4.
                 * You may also create a mark line in Cartesian coordinate at
                 * a specific position in X or Y axis by assigning `xAxis` or
                 * `yAxis`. See
                 * [scatter-weight](https://echarts.apache.org/examples/en/editor.html?c=scatter-weight)
                 * for example.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * You may also set the type of mark line through `type`, stating
                 * whether it is for the maximum value or average value.
                 * Likewise, dimensions can be assigned through `valueIndex`.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data
                 */
                data?: {
                    /**
                     * Data of the starting point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0
                     */
                    0?: {
                        /**
                         * Special label types, are used to label maximum value,
                         * minimum value and so on.
                         *
                         * **Options are:**
                         *
                         * + `'min'` maximum value.
                         * + `'max'` minimum value.
                         * + `'average'` average value.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.type
                         */
                        type?: string;

                        /**
                         * Works only when
                         * [type](https://echarts.apache.org/en/option.html#series-.markLine.data.type)
                         * is assigned.
                         * It is used to state the dimension used to calculate
                         * maximum value or minimum value.
                         * It may be `0` (for xAxis, or radiusAxis), or `1`
                         * (for yAxis, or angleAxis).
                         * Dimension of the first numeric axis is used by default.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.valueIndex
                         */
                        valueIndex?: number;

                        /**
                         * Works only when
                         * [type](https://echarts.apache.org/en/option.html#series-.markLine.data.type)
                         * is assigned.
                         * It is used to state the dimension used to calculate
                         * maximum value or minimum value.
                         * It may be the direct name of a dimension, like `x`,
                         * or `angle` for line charts, or `open`, or `close`
                         * for candlestick charts.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.valueDim
                         */
                        valueDim?: string;

                        /**
                         * Coordinates of the starting point or ending point,
                         * whose format depends on the coordinate of the series.
                         * It can be `x`, and `y` for
                         * [rectangular coordinates](https://echarts.apache.org/en/option.html#grid)
                         * , or `radius`, and `angle` for
                         * [polar coordinates](https://echarts.apache.org/en/option.html#polar)
                         * .
                         *
                         * **Notice:** For axis with
                         * [axis.type](https://echarts.apache.org/en/option.html#xAixs.type)
                         * `'category'`:
                         *
                         * + If coord value is `number`, it represents index
                         * of
                         * [axis.data](https://echarts.apache.org/en/option.html#xAxis.data)
                         * .
                         * + If coord value is `string`, it represents concrete
                         * value in
                         * [axis.data](https://echarts.apache.org/en/option.html#xAxis.data)
                         *
                         *
                         * Please notice that in this case `xAxis.data`
                         * must not be written as \[number, number,
                         *
                         *
                         *
                         * \], but can only be written \[string, string,
                         *
                         *
                         *
                         * \].
                         * Otherwise it is not able to be located by markPoint
                         * / markLine.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.0)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.coord
                         */
                        coord?: any[];

                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-boxplot.markLine.data.0.name
                         */
                        name?: string;

                        /**
                         * X position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.x
                         */
                        x?: number;

                        /**
                         * Y position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.y
                         */
                        y?: number;

                        /**
                         * Label value, which can be ignored.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.value
                         */
                        value?: number;

                        /**
                         * Symbol of starting point.
                         *
                         * Icon types provided by ECharts includes `'circle'`,
                         * `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`,
                         * `'pin'`, `'arrow'`, `'none'`
                         *
                         * It can be set to an image with `'image://url'` ,
                         * in which URL is the link to an image, or `dataURI`
                         * of an image.
                         *
                         * An image URL example:
                         *
                         * ```
                         * 'image://http://xxx.xxx.xxx/a/b.png'
                         *
                         * ```
                         *
                         * A `dataURI` example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.0)
                         *
                         * Icons can be set to arbitrary vector path via `'path://'`
                         * in ECharts.
                         * As compared with raster image, vector paths prevent
                         * from jagging and blurring when scaled, and have a
                         * better control over changing colors.
                         * Size of vectoer icon will be adapted automatically.
                         * Refer to
                         * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                         * for more information about format of path.
                         * You may export vector paths from tools like Adobe
                         * Illustrator.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.0)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.symbol
                         */
                        symbol?: string;

                        /**
                         * starting point symbol size.
                         * It can be set to single numbers like `10`, or use
                         * an array to represent width and height.
                         * For example, `[20, 10]` means symbol width is `20`,
                         * and height is`10`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.symbolSize
                         */
                        symbolSize?: any[] | number;

                        /**
                         * Rotate degree of starting point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.symbolRotate
                         */
                        symbolRotate?: number;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.symbolKeepAspect
                         */
                        symbolKeepAspect?: boolean;

                        /**
                         * Offset of starting point symbol relative to original
                         * position.
                         * By default, symbol will be put in the center position
                         * of data.
                         * But if symbol is from user-defined vector path or
                         * image, you may not expect symbol to be in center.
                         * In this case, you may use this attribute to set offset
                         * to default position.
                         * It can be in absolute pixel value, or in relative
                         * percentage value.
                         *
                         * For example, `[0, '50%']` means to move upside side
                         * position of symbol height.
                         * It can be used to make the arrow in the bottom to
                         * be at data position when symbol is pin.
                         *
                         *
                         * @default
                         * [0, 0]
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.symbolOffset
                         */
                        symbolOffset?: any[];

                        /**
                         * Position according to X-Axis value.
                         * For a line parallel to Y-Axis
                         *
                         */
                        xAxis?: number;

                        /**
                         * Position according to Y-Axis value
                         * For a line parallel to X-Axis
                         *
                         */
                        yAxis?: number;

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle
                         */
                        lineStyle?: {
                            /**
                             * Line color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.0.lineStyle)
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.color
                             */
                            color?: string;

                            /**
                             * line width.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.width
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
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.type
                             */
                            type?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.0.lineStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.curveness
                             */
                            curveness?: number;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Line color.
                                 *
                                 * > Color can be represented in RGB, for example
                                 * `'rgb(128, 128, 128)'`.
                                 * RGBA can be used when you need alpha channel,
                                 * for example `'rgba(128, 128, 128, 0.5)'`.
                                 * You may also use hexadecimal format, for
                                 * example `'#ccc'`.
                                 * Gradient color and texture are also supported
                                 * besides single colors.
                                 * >
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.0.lineStyle.emphasis)
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * line width.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.emphasis.type
                                 */
                                type?: string;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.0.lineStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.emphasis.opacity
                                 */
                                opacity?: number;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.lineStyle.emphasis.curveness
                                 */
                                curveness?: number;
                            };
                        };

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.label
                         */
                        label?: {
                            /**
                             * Whether show label or not.
                             *
                             *
                             * @default
                             * "true"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.label.show
                             */
                            show?: boolean;

                            /**
                             * Positions of labels can be:
                             *
                             * + `'start'` starting point of the line.
                             * + `'middle'` middle point of the line.
                             * + `'end'` ending point of the line.
                             *
                             *
                             * @default
                             * "end"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.label.position
                             */
                            position?: string;

                            /**
                             * Data label formatter, which supports string template
                             * and callback function.
                             * In either form, `\n` is supported to represent
                             * a new line.
                             *
                             * **String template**
                             *
                             * Model variation includes:
                             *
                             * + `{a}`: series name.
                             * + `{b}`: the name of a data item.
                             * + `{c}`: the value of a data item.
                             * + `{d}`: the percent.
                             * + `{@xxx}: the value of a dimension named`'xxx'`,
                             * for example,`{@product}`refers the value of`'product'\`
                             * dimension。
                             * + `{@[n]}: the value of a dimension at the index
                             * of`n`, for example,`{@\[3\]}\` refers the value
                             * at dimensions\[3\].
                             *
                             * **example:**
                             *
                             * ```
                             * formatter: '{b}: {d}'
                             *
                             * ```
                             *
                             * **Callback function**
                             *
                             * Callback function is in form of:
                             *
                             * ```
                             * (params: Object|Array) => string
                             *
                             * ```
                             *
                             * where `params` is the single dataset needed by
                             * formatter, which is formed as:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.label.formatter
                             */
                            formatter?: Function | string;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether show label or not.
                                 *
                                 *
                                 * @default
                                 * "true"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.label.emphasis.show
                                 */
                                show?: boolean;

                                /**
                                 * Positions of labels can be:
                                 *
                                 * + `'start'` starting point of the line.
                                 * + `'middle'` middle point of the line.
                                 * + `'end'` ending point of the line.
                                 *
                                 *
                                 * @default
                                 * "end"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.label.emphasis.position
                                 */
                                position?: string;

                                /**
                                 * Data label formatter, which supports string
                                 * template and callback function.
                                 * In either form, `\n` is supported to represent
                                 * a new line.
                                 *
                                 * **String template**
                                 *
                                 * Model variation includes:
                                 *
                                 * + `{a}`: series name.
                                 * + `{b}`: the name of a data item.
                                 * + `{c}`: the value of a data item.
                                 * + `{d}`: the percent.
                                 * + `{@xxx}: the value of a dimension named`'xxx'`,
                                 * for example,`{@product}`refers the value
                                 * of`'product'\` dimension。
                                 * + `{@[n]}: the value of a dimension at the
                                 * index of`n`, for example,`{@\[3\]}\` refers
                                 * the value at dimensions\[3\].
                                 *
                                 * **example:**
                                 *
                                 * ```
                                 * formatter: '{b}: {d}'
                                 *
                                 * ```
                                 *
                                 * **Callback function**
                                 *
                                 * Callback function is in form of:
                                 *
                                 * ```
                                 * (params: Object|Array) => string
                                 *
                                 * ```
                                 *
                                 * where `params` is the single dataset needed
                                 * by formatter, which is formed as:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.0.label.emphasis.formatter
                                 */
                                formatter?: Function | string;
                            };
                        };
                    };

                    /**
                     * Data of the ending point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1
                     */
                    1?: {
                        /**
                         * Special label types, are used to label maximum value,
                         * minimum value and so on.
                         *
                         * **Options are:**
                         *
                         * + `'min'` maximum value.
                         * + `'max'` minimum value.
                         * + `'average'` average value.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.type
                         */
                        type?: string;

                        /**
                         * Works only when
                         * [type](https://echarts.apache.org/en/option.html#series-.markLine.data.type)
                         * is assigned.
                         * It is used to state the dimension used to calculate
                         * maximum value or minimum value.
                         * It may be `0` (for xAxis, or radiusAxis), or `1`
                         * (for yAxis, or angleAxis).
                         * Dimension of the first numeric axis is used by default.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.valueIndex
                         */
                        valueIndex?: number;

                        /**
                         * Works only when
                         * [type](https://echarts.apache.org/en/option.html#series-.markLine.data.type)
                         * is assigned.
                         * It is used to state the dimension used to calculate
                         * maximum value or minimum value.
                         * It may be the direct name of a dimension, like `x`,
                         * or `angle` for line charts, or `open`, or `close`
                         * for candlestick charts.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.valueDim
                         */
                        valueDim?: string;

                        /**
                         * Coordinates of the starting point or ending point,
                         * whose format depends on the coordinate of the series.
                         * It can be `x`, and `y` for
                         * [rectangular coordinates](https://echarts.apache.org/en/option.html#grid)
                         * , or `radius`, and `angle` for
                         * [polar coordinates](https://echarts.apache.org/en/option.html#polar)
                         * .
                         *
                         * **Notice:** For axis with
                         * [axis.type](https://echarts.apache.org/en/option.html#xAixs.type)
                         * `'category'`:
                         *
                         * + If coord value is `number`, it represents index
                         * of
                         * [axis.data](https://echarts.apache.org/en/option.html#xAxis.data)
                         * .
                         * + If coord value is `string`, it represents concrete
                         * value in
                         * [axis.data](https://echarts.apache.org/en/option.html#xAxis.data)
                         *
                         *
                         * Please notice that in this case `xAxis.data`
                         * must not be written as \[number, number,
                         *
                         *
                         *
                         * \], but can only be written \[string, string,
                         *
                         *
                         *
                         * \].
                         * Otherwise it is not able to be located by markPoint
                         * / markLine.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.1)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.coord
                         */
                        coord?: any[];

                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-boxplot.markLine.data.1.name
                         */
                        name?: string;

                        /**
                         * X position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.x
                         */
                        x?: number;

                        /**
                         * Y position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.y
                         */
                        y?: number;

                        /**
                         * Label value, which can be ignored.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.value
                         */
                        value?: number;

                        /**
                         * Symbol of ending point.
                         *
                         * Icon types provided by ECharts includes `'circle'`,
                         * `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`,
                         * `'pin'`, `'arrow'`, `'none'`
                         *
                         * It can be set to an image with `'image://url'` ,
                         * in which URL is the link to an image, or `dataURI`
                         * of an image.
                         *
                         * An image URL example:
                         *
                         * ```
                         * 'image://http://xxx.xxx.xxx/a/b.png'
                         *
                         * ```
                         *
                         * A `dataURI` example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.1)
                         *
                         * Icons can be set to arbitrary vector path via `'path://'`
                         * in ECharts.
                         * As compared with raster image, vector paths prevent
                         * from jagging and blurring when scaled, and have a
                         * better control over changing colors.
                         * Size of vectoer icon will be adapted automatically.
                         * Refer to
                         * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                         * for more information about format of path.
                         * You may export vector paths from tools like Adobe
                         * Illustrator.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.1)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.symbol
                         */
                        symbol?: string;

                        /**
                         * ending point symbol size.
                         * It can be set to single numbers like `10`, or use
                         * an array to represent width and height.
                         * For example, `[20, 10]` means symbol width is `20`,
                         * and height is`10`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.symbolSize
                         */
                        symbolSize?: any[] | number;

                        /**
                         * Rotate degree of ending point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.symbolRotate
                         */
                        symbolRotate?: number;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.symbolKeepAspect
                         */
                        symbolKeepAspect?: boolean;

                        /**
                         * Offset of ending point symbol relative to original
                         * position.
                         * By default, symbol will be put in the center position
                         * of data.
                         * But if symbol is from user-defined vector path or
                         * image, you may not expect symbol to be in center.
                         * In this case, you may use this attribute to set offset
                         * to default position.
                         * It can be in absolute pixel value, or in relative
                         * percentage value.
                         *
                         * For example, `[0, '50%']` means to move upside side
                         * position of symbol height.
                         * It can be used to make the arrow in the bottom to
                         * be at data position when symbol is pin.
                         *
                         *
                         * @default
                         * [0, 0]
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.symbolOffset
                         */
                        symbolOffset?: any[];

                        /**
                         * Position according to X-Axis value.
                         * For a line parallel to Y-Axis
                         *
                         */
                        xAxis?: number;

                        /**
                         * Position according to Y-Axis value
                         * For a line parallel to X-Axis
                         *
                         */
                        yAxis?: number;

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle
                         */
                        lineStyle?: {
                            /**
                             * Line color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.1.lineStyle)
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.color
                             */
                            color?: string;

                            /**
                             * line width.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.width
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
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.type
                             */
                            type?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.1.lineStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.curveness
                             */
                            curveness?: number;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Line color.
                                 *
                                 * > Color can be represented in RGB, for example
                                 * `'rgb(128, 128, 128)'`.
                                 * RGBA can be used when you need alpha channel,
                                 * for example `'rgba(128, 128, 128, 0.5)'`.
                                 * You may also use hexadecimal format, for
                                 * example `'#ccc'`.
                                 * Gradient color and texture are also supported
                                 * besides single colors.
                                 * >
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.1.lineStyle.emphasis)
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * line width.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.emphasis.type
                                 */
                                type?: string;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.1.lineStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.emphasis.opacity
                                 */
                                opacity?: number;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.lineStyle.emphasis.curveness
                                 */
                                curveness?: number;
                            };
                        };

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.label
                         */
                        label?: {
                            /**
                             * Whether show label or not.
                             *
                             *
                             * @default
                             * "true"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.label.show
                             */
                            show?: boolean;

                            /**
                             * Positions of labels can be:
                             *
                             * + `'start'` starting point of the line.
                             * + `'middle'` middle point of the line.
                             * + `'end'` ending point of the line.
                             *
                             *
                             * @default
                             * "end"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.label.position
                             */
                            position?: string;

                            /**
                             * Data label formatter, which supports string template
                             * and callback function.
                             * In either form, `\n` is supported to represent
                             * a new line.
                             *
                             * **String template**
                             *
                             * Model variation includes:
                             *
                             * + `{a}`: series name.
                             * + `{b}`: the name of a data item.
                             * + `{c}`: the value of a data item.
                             * + `{d}`: the percent.
                             * + `{@xxx}: the value of a dimension named`'xxx'`,
                             * for example,`{@product}`refers the value of`'product'\`
                             * dimension。
                             * + `{@[n]}: the value of a dimension at the index
                             * of`n`, for example,`{@\[3\]}\` refers the value
                             * at dimensions\[3\].
                             *
                             * **example:**
                             *
                             * ```
                             * formatter: '{b}: {d}'
                             *
                             * ```
                             *
                             * **Callback function**
                             *
                             * Callback function is in form of:
                             *
                             * ```
                             * (params: Object|Array) => string
                             *
                             * ```
                             *
                             * where `params` is the single dataset needed by
                             * formatter, which is formed as:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.label.formatter
                             */
                            formatter?: Function | string;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether show label or not.
                                 *
                                 *
                                 * @default
                                 * "true"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.label.emphasis.show
                                 */
                                show?: boolean;

                                /**
                                 * Positions of labels can be:
                                 *
                                 * + `'start'` starting point of the line.
                                 * + `'middle'` middle point of the line.
                                 * + `'end'` ending point of the line.
                                 *
                                 *
                                 * @default
                                 * "end"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.label.emphasis.position
                                 */
                                position?: string;

                                /**
                                 * Data label formatter, which supports string
                                 * template and callback function.
                                 * In either form, `\n` is supported to represent
                                 * a new line.
                                 *
                                 * **String template**
                                 *
                                 * Model variation includes:
                                 *
                                 * + `{a}`: series name.
                                 * + `{b}`: the name of a data item.
                                 * + `{c}`: the value of a data item.
                                 * + `{d}`: the percent.
                                 * + `{@xxx}: the value of a dimension named`'xxx'`,
                                 * for example,`{@product}`refers the value
                                 * of`'product'\` dimension。
                                 * + `{@[n]}: the value of a dimension at the
                                 * index of`n`, for example,`{@\[3\]}\` refers
                                 * the value at dimensions\[3\].
                                 *
                                 * **example:**
                                 *
                                 * ```
                                 * formatter: '{b}: {d}'
                                 *
                                 * ```
                                 *
                                 * **Callback function**
                                 *
                                 * Callback function is in form of:
                                 *
                                 * ```
                                 * (params: Object|Array) => string
                                 *
                                 * ```
                                 *
                                 * where `params` is the single dataset needed
                                 * by formatter, which is formed as:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.data.1.label.emphasis.formatter
                                 */
                                formatter?: Function | string;
                            };
                        };
                    };
                };

                /**
                 * Whether to enable animation.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.animation
                 */
                animation?: boolean;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 *
                 * @default
                 * 2000
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.animationThreshold
                 */
                animationThreshold?: number;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.animationDuration
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
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.animationEasing
                 */
                animationEasing?: string;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.animationDelay
                 */
                animationDelay?: Function | number;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine)
                 *
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.animationEasingUpdate
                 */
                animationEasingUpdate?: string;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markLine)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markLine.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number;
            };

            /**
             * Used to mark an area in chart.
             * For example, mark a time interval.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea
             */
            markArea?: {
                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.silent
                 */
                silent?: boolean;

                /**
                 * Label in mark area.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.show
                     */
                    show?: boolean;

                    /**
                     * Label position.
                     *
                     * **Followings are the options:**
                     *
                     * + \[x, y\]
                     *
                     * Use relative percentage, or absolute pixel values to
                     * represent position of label relative to top-left corner
                     * of bounding box. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label)
                     *
                     * + 'top'
                     *
                     * + 'left'
                     * + 'right'
                     * + 'bottom'
                     * + 'inside'
                     * + 'insideLeft'
                     * + 'insideRight'
                     * + 'insideTop'
                     * + 'insideBottom'
                     * + 'insideTopLeft'
                     * + 'insideBottomLeft'
                     * + 'insideTopRight'
                     * + 'insideBottomRight'
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.position
                     */
                    position?: any[] | string;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @default
                     * 5
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.distance
                     */
                    distance?: number;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.offset
                     */
                    offset?: any[];

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.fontWeight
                     */
                    fontWeight?: string | number;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.fontSize
                     */
                    fontSize?: number;

                    /**
                     * Horizontal alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'left'`
                     * + `'center'`
                     * + `'right'`
                     *
                     * If `align` is not set in `rich`, `align` in parent level
                     * will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.align
                     */
                    align?: string;

                    /**
                     * Vertical alignment of text, automatic by default.
                     *
                     * Options are:
                     *
                     * + `'top'`
                     * + `'middle'`
                     * + `'bottom'`
                     *
                     * If `verticalAlign` is not set in `rich`, `verticalAlign`
                     * in parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.backgroundColor
                     */
                    backgroundColor?: object | string;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.borderRadius
                     */
                    borderRadius?: number;

                    /**
                     * Padding of the text fregment, for example:
                     *
                     * + `padding: [3, 4, 5, 6]`: represents padding of `[top,
                     * right, bottom, left]`.
                     * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                     * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.shadowOffsetY
                     */
                    shadowOffsetY?: number;

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
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.height
                     */
                    height?: number | string;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {
                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string | number;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                             */
                            fontSize?: number;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.align
                             */
                            align?: string;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                             */
                            lineHeight?: number;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                             */
                            borderRadius?: number;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.width
                             */
                            width?: number | string;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.show
                         */
                        show?: boolean;

                        /**
                         * Label position.
                         *
                         * **Followings are the options:**
                         *
                         * + \[x, y\]
                         *
                         * Use relative percentage, or absolute pixel values
                         * to represent position of label relative to top-left
                         * corner of bounding box. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.emphasis)
                         *
                         * + 'top'
                         *
                         * + 'left'
                         * + 'right'
                         * + 'bottom'
                         * + 'inside'
                         * + 'insideLeft'
                         * + 'insideRight'
                         * + 'insideTop'
                         * + 'insideBottom'
                         * + 'insideTopLeft'
                         * + 'insideBottomLeft'
                         * + 'insideTopRight'
                         * + 'insideBottomRight'
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.position
                         */
                        position?: any[] | string;

                        /**
                         * Distance to the host graphic element.
                         * Works when position is string value (like `'top'`、`'insideRight'`).
                         *
                         * See:
                         * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @default
                         * 5
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.distance
                         */
                        distance?: number;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                         * .
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.offset
                         */
                        offset?: any[];

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.color
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
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.fontWeight
                         */
                        fontWeight?: string | number;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.fontSize
                         */
                        fontSize?: number;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.align
                         */
                        align?: string;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.emphasis)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.backgroundColor
                         */
                        backgroundColor?: object | string;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.borderRadius
                         */
                        borderRadius?: number;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.width
                         */
                        width?: number | string;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.height
                         */
                        height?: number | string;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {
                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;
                            };
                        };
                    };
                };

                /**
                 * Style of the mark area.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle
                 */
                itemStyle?: {
                    /**
                     * color.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.emphasis
                     */
                    emphasis?: {
                        /**
                         * color.
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.emphasis.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.emphasis.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.itemStyle.emphasis.opacity
                         */
                        opacity?: number;
                    };
                };

                /**
                 * The scope of the area is defined by `data`, which is an array
                 * with two item, representing the left-top point and the right-bottom
                 * point of rectangle area.
                 * Each item can be defined as follows:
                 *
                 * 1.
                 * Specify the coordinate in screen coordinate system using
                 * [x](https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.y)
                 * , where the unit is pixel (e.g.,
                 * the value is `5`), or percent (e.g.,
                 * the value is `'35%'`).
                 *
                 * 2.
                 * Specify the coordinate in data coordinate system (i.e.,
                 * cartesian) using
                 * [coord](https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.coord)
                 * , which can be also set as `'min'`, `'max'`, `'average'`
                 * (e.g,
                 * `coord: [23, 'min']`, or `coord: ['average', 'max']`)。
                 *
                 * 1.
                 * Locate the point on the min value or max value of `series.data`
                 * using
                 * [type](https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.type)
                 * , where
                 * [valueIndex](https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.valueIndex)
                 * or
                 * [valueDim](https://echarts.apache.org/en/option.html#series-boxplot.markPoint.data.0.valueDim)
                 * can be used to specify the dimension on which the min, max
                 * or average are calculated.
                 * 2.
                 * If in cartesian, you can only specify `xAxis` or `yAxis`
                 * to define a mark area based on only X or Y axis, see sample
                 * [scatter-weight](https://echarts.apache.org/examples/en/editor.html?c=scatter-weight)
                 *
                 * The priority follows as above if more than one above definition
                 * used.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data
                 */
                data?: {
                    /**
                     * Specify the left-top point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0
                     */
                    0?: {
                        /**
                         * Specify this item is on min or max or average value.
                         *
                         * **Options:**
                         *
                         * + `'min'` max value。
                         * + `'max'` min value。
                         * + `'average'` average value。
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.type
                         */
                        type?: string;

                        /**
                         * Specify the dimension on which min, max, average
                         * are calculated, available when
                         * [type](https://echarts.apache.org/en/option.html#series-.markArea.data.type)
                         * used.
                         * The value can be `0` (means xAxis, radiusAxis) or
                         * `1` (means yAxis, angleAxis), using the dimension
                         * of the first axis by default.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.valueIndex
                         */
                        valueIndex?: number;

                        /**
                         * Specify the dimension on which min, max, average
                         * are calculated, available when
                         * [type](https://echarts.apache.org/en/option.html#series-.markArea.data.type)
                         * used.
                         * The value can be the name of the dimension (for example,
                         * the value can be `x`, `angle` in line chart, and
                         * `open`, `close` in candlestick).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.valueDim
                         */
                        valueDim?: string;

                        /**
                         * The format is \[start coordinate, end coordinate\],
                         * where the coordinate system can be `x`, `y` on
                         * [cartesian](https://echarts.apache.org/en/option.html#grid)
                         * , or `radius`, `angle` on
                         * [polar](https://echarts.apache.org/en/option.html#polar)
                         * .
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.coord
                         */
                        coord?: any[];

                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-boxplot.markArea.data.0.name
                         */
                        name?: string;

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.x
                         */
                        x?: number;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.y
                         */
                        y?: number;

                        /**
                         * value of the item, not necessary.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.value
                         */
                        value?: number;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle
                         */
                        itemStyle?: {
                            /**
                             * color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.color
                             */
                            color?: string;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.borderColor
                             */
                            borderColor?: string;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.borderType
                             */
                            borderType?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.emphasis
                             */
                            emphasis?: {
                                /**
                                 * color.
                                 *
                                 * > Color can be represented in RGB, for example
                                 * `'rgb(128, 128, 128)'`.
                                 * RGBA can be used when you need alpha channel,
                                 * for example `'rgba(128, 128, 128, 0.5)'`.
                                 * You may also use hexadecimal format, for
                                 * example `'#ccc'`.
                                 * Gradient color and texture are also supported
                                 * besides single colors.
                                 * >
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.emphasis.borderType
                                 */
                                borderType?: string;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.itemStyle.emphasis.opacity
                                 */
                                opacity?: number;
                            };
                        };

                        /**
                         * Label style of the item.
                         * Label style of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label
                         */
                        label?: {
                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.show
                             */
                            show?: boolean;

                            /**
                             * Label position.
                             *
                             * **Followings are the options:**
                             *
                             * + \[x, y\]
                             *
                             * Use relative percentage, or absolute pixel values
                             * to represent position of label relative to top-left
                             * corner of bounding box. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label)
                             *
                             * + 'top'
                             *
                             * + 'left'
                             * + 'right'
                             * + 'bottom'
                             * + 'inside'
                             * + 'insideLeft'
                             * + 'insideRight'
                             * + 'insideTop'
                             * + 'insideBottom'
                             * + 'insideTopLeft'
                             * + 'insideBottomLeft'
                             * + 'insideTopRight'
                             * + 'insideBottomRight'
                             *
                             * See:
                             * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                             * .
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.position
                             */
                            position?: any[] | string;

                            /**
                             * Distance to the host graphic element.
                             * Works when position is string value (like `'top'`、`'insideRight'`).
                             *
                             * See:
                             * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                             * .
                             *
                             *
                             * @default
                             * 5
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.distance
                             */
                            distance?: number;

                            /**
                             * Rotate label, from -90 degree to 90, positive
                             * value represents rotate anti-clockwise.
                             *
                             * See:
                             * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                             * .
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rotate
                             */
                            rotate?: number;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.offset
                             */
                            offset?: any[];

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.color
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
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.fontWeight
                             */
                            fontWeight?: string | number;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.fontSize
                             */
                            fontSize?: number;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.align
                             */
                            align?: string;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.lineHeight
                             */
                            lineHeight?: number;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.borderRadius
                             */
                            borderRadius?: number;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.width
                             */
                            width?: number | string;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E
                                 */
                                [userStyle: string]: {
                                    /**
                                     * text color.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * ""#fff""
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string | number;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                     */
                                    fontSize?: number;

                                    /**
                                     * Horizontal alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'left'`
                                     * + `'center'`
                                     * + `'right'`
                                     *
                                     * If `align` is not set in `rich`, `align`
                                     * in parent level will be used.
                                     * For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.align
                                     */
                                    align?: string;

                                    /**
                                     * Vertical alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'top'`
                                     * + `'middle'`
                                     * + `'bottom'`
                                     *
                                     * If `verticalAlign` is not set in `rich`,
                                     * `verticalAlign` in parent level will
                                     * be used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                     */
                                    lineHeight?: number;

                                    /**
                                     * Background color of the text fregment.
                                     *
                                     * Can be color string, like `'#123234'`,
                                     * `'red'`, `rgba(0,23,11,0.3)'`.
                                     *
                                     * Or image can be used, for example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * `width` or `height` can be specified
                                     * when using background image, or auto
                                     * adapted by default.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                     */
                                    borderRadius?: number;

                                    /**
                                     * Padding of the text fregment, for example:
                                     *
                                     * + `padding: [3, 4, 5, 6]`: represents
                                     * padding of `[top, right, bottom, left]`.
                                     * + `padding: 4`: represents `padding:
                                     * [4, 4, 4, 4]`.
                                     * + `padding: [3, 4]`: represents `padding:
                                     * [3, 4, 3, 4]`.
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                     */
                                    shadowOffsetY?: number;

                                    /**
                                     * Width of the text block.
                                     * It is the width of the text by default.
                                     * In most cases, there is no need to specify
                                     * it.
                                     * You may want to use it in some cases
                                     * like make simple table or using background
                                     * image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * `width` can also be percent string, like
                                     * `'100%'`, which represents the percent
                                     * of `contentWidth` (that is, the width
                                     * without `padding`) of its container box.
                                     * It is based on `contentWidth` because
                                     * that each text fregment is layout based
                                     * on the `content box`, where it makes
                                     * no sense that calculating width based
                                     * on `outerWith` in prectice.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.width
                                     */
                                    width?: number | string;

                                    /**
                                     * Height of the text block.
                                     * It is the width of the text by default.
                                     * You may want to use it in some cases
                                     * like using background image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number;
                                };
                            };

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether to show label.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.show
                                 */
                                show?: boolean;

                                /**
                                 * Label position.
                                 *
                                 * **Followings are the options:**
                                 *
                                 * + \[x, y\]
                                 *
                                 * Use relative percentage, or absolute pixel
                                 * values to represent position of label relative
                                 * to top-left corner of bounding box.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.emphasis)
                                 *
                                 * + 'top'
                                 *
                                 * + 'left'
                                 * + 'right'
                                 * + 'bottom'
                                 * + 'inside'
                                 * + 'insideLeft'
                                 * + 'insideRight'
                                 * + 'insideTop'
                                 * + 'insideBottom'
                                 * + 'insideTopLeft'
                                 * + 'insideBottomLeft'
                                 * + 'insideTopRight'
                                 * + 'insideBottomRight'
                                 *
                                 * See:
                                 * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                                 * .
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.position
                                 */
                                position?: any[] | string;

                                /**
                                 * Distance to the host graphic element.
                                 * Works when position is string value (like
                                 * `'top'`、`'insideRight'`).
                                 *
                                 * See:
                                 * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                                 * .
                                 *
                                 *
                                 * @default
                                 * 5
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.distance
                                 */
                                distance?: number;

                                /**
                                 * Rotate label, from -90 degree to 90, positive
                                 * value represents rotate anti-clockwise.
                                 *
                                 * See:
                                 * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                                 * .
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rotate
                                 */
                                rotate?: number;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.offset
                                 */
                                offset?: any[];

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.fontWeight
                                 */
                                fontWeight?: string | number;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.fontSize
                                 */
                                fontSize?: number;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.align
                                 */
                                align?: string;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.lineHeight
                                 */
                                lineHeight?: number;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.emphasis)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.backgroundColor
                                 */
                                backgroundColor?: object | string;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.borderRadius
                                 */
                                borderRadius?: number;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.width
                                 */
                                width?: number | string;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.height
                                 */
                                height?: number | string;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich
                                 */
                                rich?: {
                                    /**
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                                     */
                                    [userStyle: string]: {
                                        /**
                                         * text color.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * ""#fff""
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                         */
                                        fontWeight?: string | number;

                                        /**
                                         * font family
                                         *
                                         * Can also be 'serif' , 'monospace',
                                         * ...
                                         *
                                         *
                                         * @default
                                         * "sans-serif"
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string;

                                        /**
                                         * font size
                                         *
                                         *
                                         * @default
                                         * 12
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                         */
                                        fontSize?: number;

                                        /**
                                         * Horizontal alignment of text, automatic
                                         * by default.
                                         *
                                         * Options are:
                                         *
                                         * + `'left'`
                                         * + `'center'`
                                         * + `'right'`
                                         *
                                         * If `align` is not set in `rich`,
                                         * `align` in parent level will be used.
                                         * For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                         */
                                        align?: string;

                                        /**
                                         * Vertical alignment of text, automatic
                                         * by default.
                                         *
                                         * Options are:
                                         *
                                         * + `'top'`
                                         * + `'middle'`
                                         * + `'bottom'`
                                         *
                                         * If `verticalAlign` is not set in
                                         * `rich`, `verticalAlign` in parent
                                         * level will be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                         */
                                        lineHeight?: number;

                                        /**
                                         * Background color of the text fregment.
                                         *
                                         * Can be color string, like `'#123234'`,
                                         * `'red'`, `rgba(0,23,11,0.3)'`.
                                         *
                                         * Or image can be used, for example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * `width` or `height` can be specified
                                         * when using background image, or auto
                                         * adapted by default.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                         */
                                        backgroundColor?: object | string;

                                        /**
                                         * Border color of the text fregment.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                         */
                                        borderRadius?: number;

                                        /**
                                         * Padding of the text fregment, for
                                         * example:
                                         *
                                         * + `padding: [3, 4, 5, 6]`: represents
                                         * padding of `[top, right, bottom,
                                         * left]`.
                                         * + `padding: 4`: represents `padding:
                                         * [4, 4, 4, 4]`.
                                         * + `padding: [3, 4]`: represents `padding:
                                         * [3, 4, 3, 4]`.
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                         */
                                        shadowOffsetY?: number;

                                        /**
                                         * Width of the text block.
                                         * It is the width of the text by default.
                                         * In most cases, there is no need to
                                         * specify it.
                                         * You may want to use it in some cases
                                         * like make simple table or using background
                                         * image (see `backgroundColor`).
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * `width` can also be percent string,
                                         * like `'100%'`, which represents the
                                         * percent of `contentWidth` (that is,
                                         * the width without `padding`) of its
                                         * container box.
                                         * It is based on `contentWidth` because
                                         * that each text fregment is layout
                                         * based on the `content box`, where
                                         * it makes no sense that calculating
                                         * width based on `outerWith` in prectice.
                                         *
                                         * Notice, `width` and `height` only
                                         * work when `rich` specified.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                         */
                                        width?: number | string;

                                        /**
                                         * Height of the text block.
                                         * It is the width of the text by default.
                                         * You may want to use it in some cases
                                         * like using background image (see
                                         * `backgroundColor`).
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * Notice, `width` and `height` only
                                         * work when `rich` specified.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                         */
                                        height?: number | string;

                                        /**
                                         * Storke color of the text.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                         */
                                        textShadowOffsetY?: number;
                                    };
                                };
                            };
                        };
                    };

                    /**
                     * Specify the right-bottom point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1
                     */
                    1?: {
                        /**
                         * Specify this item is on min or max or average value.
                         *
                         * **Options:**
                         *
                         * + `'min'` max value。
                         * + `'max'` min value。
                         * + `'average'` average value。
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.type
                         */
                        type?: string;

                        /**
                         * Specify the dimension on which min, max, average
                         * are calculated, available when
                         * [type](https://echarts.apache.org/en/option.html#series-.markArea.data.type)
                         * used.
                         * The value can be `0` (means xAxis, radiusAxis) or
                         * `1` (means yAxis, angleAxis), using the dimension
                         * of the first axis by default.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.valueIndex
                         */
                        valueIndex?: number;

                        /**
                         * Specify the dimension on which min, max, average
                         * are calculated, available when
                         * [type](https://echarts.apache.org/en/option.html#series-.markArea.data.type)
                         * used.
                         * The value can be the name of the dimension (for example,
                         * the value can be `x`, `angle` in line chart, and
                         * `open`, `close` in candlestick).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.valueDim
                         */
                        valueDim?: string;

                        /**
                         * The format is \[start coordinate, end coordinate\],
                         * where the coordinate system can be `x`, `y` on
                         * [cartesian](https://echarts.apache.org/en/option.html#grid)
                         * , or `radius`, `angle` on
                         * [polar](https://echarts.apache.org/en/option.html#polar)
                         * .
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.coord
                         */
                        coord?: any[];

                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-boxplot.markArea.data.1.name
                         */
                        name?: string;

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.x
                         */
                        x?: number;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.y
                         */
                        y?: number;

                        /**
                         * value of the item, not necessary.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.value
                         */
                        value?: number;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle
                         */
                        itemStyle?: {
                            /**
                             * color.
                             *
                             * > Color can be represented in RGB, for example
                             * `'rgb(128, 128, 128)'`.
                             * RGBA can be used when you need alpha channel,
                             * for example `'rgba(128, 128, 128, 0.5)'`.
                             * You may also use hexadecimal format, for example
                             * `'#ccc'`.
                             * Gradient color and texture are also supported
                             * besides single colors.
                             * >
                             * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.color
                             */
                            color?: string;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.borderColor
                             */
                            borderColor?: string;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.borderType
                             */
                            borderType?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.emphasis
                             */
                            emphasis?: {
                                /**
                                 * color.
                                 *
                                 * > Color can be represented in RGB, for example
                                 * `'rgb(128, 128, 128)'`.
                                 * RGBA can be used when you need alpha channel,
                                 * for example `'rgba(128, 128, 128, 0.5)'`.
                                 * You may also use hexadecimal format, for
                                 * example `'#ccc'`.
                                 * Gradient color and texture are also supported
                                 * besides single colors.
                                 * >
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.emphasis.borderType
                                 */
                                borderType?: string;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.itemStyle.emphasis.opacity
                                 */
                                opacity?: number;
                            };
                        };

                        /**
                         * Label style of the item.
                         * Label style of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label
                         */
                        label?: {
                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.show
                             */
                            show?: boolean;

                            /**
                             * Label position.
                             *
                             * **Followings are the options:**
                             *
                             * + \[x, y\]
                             *
                             * Use relative percentage, or absolute pixel values
                             * to represent position of label relative to top-left
                             * corner of bounding box. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label)
                             *
                             * + 'top'
                             *
                             * + 'left'
                             * + 'right'
                             * + 'bottom'
                             * + 'inside'
                             * + 'insideLeft'
                             * + 'insideRight'
                             * + 'insideTop'
                             * + 'insideBottom'
                             * + 'insideTopLeft'
                             * + 'insideBottomLeft'
                             * + 'insideTopRight'
                             * + 'insideBottomRight'
                             *
                             * See:
                             * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                             * .
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.position
                             */
                            position?: any[] | string;

                            /**
                             * Distance to the host graphic element.
                             * Works when position is string value (like `'top'`、`'insideRight'`).
                             *
                             * See:
                             * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                             * .
                             *
                             *
                             * @default
                             * 5
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.distance
                             */
                            distance?: number;

                            /**
                             * Rotate label, from -90 degree to 90, positive
                             * value represents rotate anti-clockwise.
                             *
                             * See:
                             * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                             * .
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rotate
                             */
                            rotate?: number;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.offset
                             */
                            offset?: any[];

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.color
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
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.fontWeight
                             */
                            fontWeight?: string | number;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.fontSize
                             */
                            fontSize?: number;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.align
                             */
                            align?: string;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.lineHeight
                             */
                            lineHeight?: number;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.borderRadius
                             */
                            borderRadius?: number;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.width
                             */
                            width?: number | string;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E
                                 */
                                [userStyle: string]: {
                                    /**
                                     * text color.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * ""#fff""
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string | number;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                     */
                                    fontSize?: number;

                                    /**
                                     * Horizontal alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'left'`
                                     * + `'center'`
                                     * + `'right'`
                                     *
                                     * If `align` is not set in `rich`, `align`
                                     * in parent level will be used.
                                     * For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.align
                                     */
                                    align?: string;

                                    /**
                                     * Vertical alignment of text, automatic
                                     * by default.
                                     *
                                     * Options are:
                                     *
                                     * + `'top'`
                                     * + `'middle'`
                                     * + `'bottom'`
                                     *
                                     * If `verticalAlign` is not set in `rich`,
                                     * `verticalAlign` in parent level will
                                     * be used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                     */
                                    lineHeight?: number;

                                    /**
                                     * Background color of the text fregment.
                                     *
                                     * Can be color string, like `'#123234'`,
                                     * `'red'`, `rgba(0,23,11,0.3)'`.
                                     *
                                     * Or image can be used, for example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * `width` or `height` can be specified
                                     * when using background image, or auto
                                     * adapted by default.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                     */
                                    borderRadius?: number;

                                    /**
                                     * Padding of the text fregment, for example:
                                     *
                                     * + `padding: [3, 4, 5, 6]`: represents
                                     * padding of `[top, right, bottom, left]`.
                                     * + `padding: 4`: represents `padding:
                                     * [4, 4, 4, 4]`.
                                     * + `padding: [3, 4]`: represents `padding:
                                     * [3, 4, 3, 4]`.
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                     */
                                    shadowOffsetY?: number;

                                    /**
                                     * Width of the text block.
                                     * It is the width of the text by default.
                                     * In most cases, there is no need to specify
                                     * it.
                                     * You may want to use it in some cases
                                     * like make simple table or using background
                                     * image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * `width` can also be percent string, like
                                     * `'100%'`, which represents the percent
                                     * of `contentWidth` (that is, the width
                                     * without `padding`) of its container box.
                                     * It is based on `contentWidth` because
                                     * that each text fregment is layout based
                                     * on the `content box`, where it makes
                                     * no sense that calculating width based
                                     * on `outerWith` in prectice.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.width
                                     */
                                    width?: number | string;

                                    /**
                                     * Height of the text block.
                                     * It is the width of the text by default.
                                     * You may want to use it in some cases
                                     * like using background image (see `backgroundColor`).
                                     *
                                     * Notice, `width` and `height` specifies
                                     * the width and height of the content,
                                     * without `padding`.
                                     *
                                     * Notice, `width` and `height` only work
                                     * when `rich` specified.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number;
                                };
                            };

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether to show label.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.show
                                 */
                                show?: boolean;

                                /**
                                 * Label position.
                                 *
                                 * **Followings are the options:**
                                 *
                                 * + \[x, y\]
                                 *
                                 * Use relative percentage, or absolute pixel
                                 * values to represent position of label relative
                                 * to top-left corner of bounding box.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.emphasis)
                                 *
                                 * + 'top'
                                 *
                                 * + 'left'
                                 * + 'right'
                                 * + 'bottom'
                                 * + 'inside'
                                 * + 'insideLeft'
                                 * + 'insideRight'
                                 * + 'insideTop'
                                 * + 'insideBottom'
                                 * + 'insideTopLeft'
                                 * + 'insideBottomLeft'
                                 * + 'insideTopRight'
                                 * + 'insideBottomRight'
                                 *
                                 * See:
                                 * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                                 * .
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.position
                                 */
                                position?: any[] | string;

                                /**
                                 * Distance to the host graphic element.
                                 * Works when position is string value (like
                                 * `'top'`、`'insideRight'`).
                                 *
                                 * See:
                                 * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                                 * .
                                 *
                                 *
                                 * @default
                                 * 5
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.distance
                                 */
                                distance?: number;

                                /**
                                 * Rotate label, from -90 degree to 90, positive
                                 * value represents rotate anti-clockwise.
                                 *
                                 * See:
                                 * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                                 * .
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rotate
                                 */
                                rotate?: number;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.offset
                                 */
                                offset?: any[];

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.fontWeight
                                 */
                                fontWeight?: string | number;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.fontSize
                                 */
                                fontSize?: number;

                                /**
                                 * Horizontal alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'left'`
                                 * + `'center'`
                                 * + `'right'`
                                 *
                                 * If `align` is not set in `rich`, `align`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.align
                                 */
                                align?: string;

                                /**
                                 * Vertical alignment of text, automatic by
                                 * default.
                                 *
                                 * Options are:
                                 *
                                 * + `'top'`
                                 * + `'middle'`
                                 * + `'bottom'`
                                 *
                                 * If `verticalAlign` is not set in `rich`,
                                 * `verticalAlign` in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.lineHeight
                                 */
                                lineHeight?: number;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.emphasis)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.backgroundColor
                                 */
                                backgroundColor?: object | string;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.borderRadius
                                 */
                                borderRadius?: number;

                                /**
                                 * Padding of the text fregment, for example:
                                 *
                                 * + `padding: [3, 4, 5, 6]`: represents padding
                                 * of `[top, right, bottom, left]`.
                                 * + `padding: 4`: represents `padding: [4,
                                 * 4, 4, 4]`.
                                 * + `padding: [3, 4]`: represents `padding:
                                 * [3, 4, 3, 4]`.
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Width of the text block.
                                 * It is the width of the text by default.
                                 * In most cases, there is no need to specify
                                 * it.
                                 * You may want to use it in some cases like
                                 * make simple table or using background image
                                 * (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * `width` can also be percent string, like
                                 * `'100%'`, which represents the percent of
                                 * `contentWidth` (that is, the width without
                                 * `padding`) of its container box.
                                 * It is based on `contentWidth` because that
                                 * each text fregment is layout based on the
                                 * `content box`, where it makes no sense that
                                 * calculating width based on `outerWith` in
                                 * prectice.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.width
                                 */
                                width?: number | string;

                                /**
                                 * Height of the text block.
                                 * It is the width of the text by default.
                                 * You may want to use it in some cases like
                                 * using background image (see `backgroundColor`).
                                 *
                                 * Notice, `width` and `height` specifies the
                                 * width and height of the content, without
                                 * `padding`.
                                 *
                                 * Notice, `width` and `height` only work when
                                 * `rich` specified.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.height
                                 */
                                height?: number | string;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich
                                 */
                                rich?: {
                                    /**
                                     * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                                     */
                                    [userStyle: string]: {
                                        /**
                                         * text color.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * ""#fff""
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                         */
                                        fontWeight?: string | number;

                                        /**
                                         * font family
                                         *
                                         * Can also be 'serif' , 'monospace',
                                         * ...
                                         *
                                         *
                                         * @default
                                         * "sans-serif"
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string;

                                        /**
                                         * font size
                                         *
                                         *
                                         * @default
                                         * 12
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                         */
                                        fontSize?: number;

                                        /**
                                         * Horizontal alignment of text, automatic
                                         * by default.
                                         *
                                         * Options are:
                                         *
                                         * + `'left'`
                                         * + `'center'`
                                         * + `'right'`
                                         *
                                         * If `align` is not set in `rich`,
                                         * `align` in parent level will be used.
                                         * For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                         */
                                        align?: string;

                                        /**
                                         * Vertical alignment of text, automatic
                                         * by default.
                                         *
                                         * Options are:
                                         *
                                         * + `'top'`
                                         * + `'middle'`
                                         * + `'bottom'`
                                         *
                                         * If `verticalAlign` is not set in
                                         * `rich`, `verticalAlign` in parent
                                         * level will be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                         */
                                        lineHeight?: number;

                                        /**
                                         * Background color of the text fregment.
                                         *
                                         * Can be color string, like `'#123234'`,
                                         * `'red'`, `rgba(0,23,11,0.3)'`.
                                         *
                                         * Or image can be used, for example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * `width` or `height` can be specified
                                         * when using background image, or auto
                                         * adapted by default.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                         */
                                        backgroundColor?: object | string;

                                        /**
                                         * Border color of the text fregment.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                         */
                                        borderRadius?: number;

                                        /**
                                         * Padding of the text fregment, for
                                         * example:
                                         *
                                         * + `padding: [3, 4, 5, 6]`: represents
                                         * padding of `[top, right, bottom,
                                         * left]`.
                                         * + `padding: 4`: represents `padding:
                                         * [4, 4, 4, 4]`.
                                         * + `padding: [3, 4]`: represents `padding:
                                         * [3, 4, 3, 4]`.
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                         */
                                        shadowOffsetY?: number;

                                        /**
                                         * Width of the text block.
                                         * It is the width of the text by default.
                                         * In most cases, there is no need to
                                         * specify it.
                                         * You may want to use it in some cases
                                         * like make simple table or using background
                                         * image (see `backgroundColor`).
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * `width` can also be percent string,
                                         * like `'100%'`, which represents the
                                         * percent of `contentWidth` (that is,
                                         * the width without `padding`) of its
                                         * container box.
                                         * It is based on `contentWidth` because
                                         * that each text fregment is layout
                                         * based on the `content box`, where
                                         * it makes no sense that calculating
                                         * width based on `outerWith` in prectice.
                                         *
                                         * Notice, `width` and `height` only
                                         * work when `rich` specified.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                         */
                                        width?: number | string;

                                        /**
                                         * Height of the text block.
                                         * It is the width of the text by default.
                                         * You may want to use it in some cases
                                         * like using background image (see
                                         * `backgroundColor`).
                                         *
                                         * Notice, `width` and `height` specifies
                                         * the width and height of the content,
                                         * without `padding`.
                                         *
                                         * Notice, `width` and `height` only
                                         * work when `rich` specified.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                         */
                                        height?: number | string;

                                        /**
                                         * Storke color of the text.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                         */
                                        textShadowOffsetY?: number;
                                    };
                                };
                            };
                        };
                    };
                };

                /**
                 * Whether to enable animation.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.animation
                 */
                animation?: boolean;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 *
                 * @default
                 * 2000
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.animationThreshold
                 */
                animationThreshold?: number;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.animationDuration
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
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.animationEasing
                 */
                animationEasing?: string;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.animationDelay
                 */
                animationDelay?: Function | number;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea)
                 *
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.animationEasingUpdate
                 */
                animationEasingUpdate?: string;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.markArea)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.markArea.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number;
            };

            /**
             * `zlevel` value of all graghical elements in Box plot.
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
             * @see https://echarts.apache.org/en/option.html#series-boxplot.zlevel
             */
            zlevel?: number;

            /**
             * `z` value of all graghical elements in Box plot, which controls
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
             * @see https://echarts.apache.org/en/option.html#series-boxplot.z
             */
            z?: number;

            /**
             * Whether to ignore mouse events.
             * Default value is false, for triggering and responding to mouse
             * events.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.silent
             */
            silent?: boolean;

            /**
             * Duration of the first animation, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot)
             *
             *
             * @default
             * 800
             * @see https://echarts.apache.org/en/option.html#series-boxplot.animationDuration
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
             * "elasticOut"
             * @see https://echarts.apache.org/en/option.html#series-boxplot.animationEasing
             */
            animationEasing?: string;

            /**
             * Delay before updating the first animation, which supports callback
             * function for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.animationDelay
             */
            animationDelay?: Function | number;

            /**
             * tooltip settings in this series.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-boxplot.tooltip
             */
            tooltip?: BaseTooltip;
        }

        namespace SeriesBoxplot {
            interface DataObject {
                /**
                 * Name of data item.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.data.name
                 */
                name?: string;

                /**
                 * Value of data item.
                 *
                 * ```
                 * [min, Q1, median (or Q2), Q3, max]
                 *
                 * ```
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.data.value
                 */
                value?: any[];

                /**
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.data.itemStyle
                 */
                itemStyle?: {
                    /**
                     * boxplot color. Color is taken from
                     * [option.color Palette](https://echarts.apache.org/en/option.html#color)
                     * by default.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.data.itemStyle)
                     *
                     *
                     * @default
                     * "#fff"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.data.itemStyle.color
                     */
                    color?: string;

                    /**
                     * boxplot border color, whose format is similar to that
                     * of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.data.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * boxplot border width.
                     * No border when it is set to be 0.
                     *
                     *
                     * @default
                     * 1
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.data.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.data.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.data.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.data.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.data.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.data.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.data.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.data.itemStyle.opacity
                     */
                    opacity?: number;
                };

                /**
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.data.emphasis
                 */
                emphasis?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-boxplot.data.emphasis.itemStyle
                     */
                    itemStyle?: {
                        /**
                         * boxplot color. Color is taken from
                         * [option.color Palette](https://echarts.apache.org/en/option.html#color)
                         * by default.
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.data.emphasis.itemStyle)
                         *
                         *
                         * @default
                         * "#fff"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.data.emphasis.itemStyle.color
                         */
                        color?: string;

                        /**
                         * boxplot border color, whose format is similar to
                         * that of `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.data.emphasis.itemStyle.borderColor
                         */
                        borderColor?: string;

                        /**
                         * boxplot border width.
                         * No border when it is set to be 0.
                         *
                         *
                         * @default
                         * 2
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.data.emphasis.itemStyle.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.data.emphasis.itemStyle.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-boxplot.boxplot.data.emphasis.itemStyle)
                         *
                         *
                         * @default
                         * 5
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.data.emphasis.itemStyle.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @default
                         * "rgba(0,0,0,0.4)"
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.data.emphasis.itemStyle.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @default
                         * 2
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.data.emphasis.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @default
                         * 2
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.data.emphasis.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-boxplot.data.emphasis.itemStyle.opacity
                         */
                        opacity?: number;
                    };
                };

                /**
                 * tooltip settings in this series data.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-boxplot.data.tooltip
                 */
                tooltip?: BaseTooltip;
            }
        }
    }
}
