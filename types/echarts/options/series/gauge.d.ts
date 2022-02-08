declare namespace echarts {
    namespace EChartOption {
        /**
         * **Gauge chart**
         *
         * **Example:**
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-gauge)
         *
         *
         * @see https://echarts.apache.org/en/option.html#series-gauge
         */
        interface SeriesGauge {
            /**
             * @default
             * "gauge"
             * @see https://echarts.apache.org/en/option.html#series-gauge.type
             */
            type?: string | undefined;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.id
             */
            id?: string | undefined;

            /**
             * Series name used for displaying in
             * [tooltip](https://echarts.apache.org/en/option.html#tooltip)
             * and filtering with
             * [legend](https://echarts.apache.org/en/option.html#legend)
             * , or updaing data and configuration with `setOption`.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.name
             */
            name?: string | undefined;

            /**
             * The radius of gauge chart.
             * It can be a percentage value of the smaller of container half
             * width and half height, also can be an absolute value.
             *
             * {{ use partial-legend-hover-link }}
             *
             *
             * @default
             * '75%'
             * @see https://echarts.apache.org/en/option.html#series-gauge.radius
             */
            radius?: number | string | undefined;

            /**
             * The start angle of gauge chart. The direct right side of
             * [circle center](https://echarts.apache.org/en/option.html#series-gauge.center)
             * is `0` degree, the right above it is `90` degree, the direct
             * left side of it is `180` degree.
             *
             *
             * @default
             * 225
             * @see https://echarts.apache.org/en/option.html#series-gauge.startAngle
             */
            startAngle?: number | undefined;

            /**
             * The end angle of gauge chart.
             *
             *
             * @default
             * -45
             * @see https://echarts.apache.org/en/option.html#series-gauge.endAngle
             */
            endAngle?: number | undefined;

            /**
             * Whether the scale in gauge chart increases clockwise.
             *
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-gauge.clockwise
             */
            clockwise?: boolean | undefined;

            /**
             * Data array of series, which can be a single data value.
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.data)
             *
             * Or, if need extra dimensions for components like [visualMap](https://echarts.apache.org/en/option.html#visualMap)
             * to map to graphic attributes like color, it can also be in the form of array.
             *
             * In this case, we can assigin the second value in each arrary item to [visualMap](https://echarts.apache.org/en/option.html#visualMap) component.
             * More likely, we need to assign name to each data item, in which case each item should be an object:
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.data
             */
            data?:
                | (void | string | number | SeriesGauge.DataObject)[]
                | (void | string | number | SeriesGauge.DataObject)[][] | undefined;

            /**
             * The minimum data value which map to
             * [minAngle](https://echarts.apache.org/en/option.html#series-gauge.minAngle)
             * .
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.min
             */
            min?: number | undefined;

            /**
             * The maximum data value which map to
             * [maxAngle](https://echarts.apache.org/en/option.html#series-gauge.maxAngle)
             * .
             *
             *
             * @default
             * 100
             * @see https://echarts.apache.org/en/option.html#series-gauge.max
             */
            max?: number | undefined;

            /**
             * The number of split segments of gauge chart scale.
             *
             *
             * @default
             * 10
             * @see https://echarts.apache.org/en/option.html#series-gauge.splitNumber
             */
            splitNumber?: number | undefined;

            /**
             * The related configuration about the axis line of gauge chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.axisLine
             */
            axisLine?: {
                /**
                 * Whether to show the axis line of gauge chart.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLine.show
                 */
                show?: boolean | undefined;

                /**
                 * The style of the axis line of gauge chart.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLine.lineStyle
                 */
                lineStyle?: {
                    /**
                     * The axis line of gauge chart can be divided to several
                     * segments in different colors.
                     * The end position and color of each segment can be expressed
                     * by an array.
                     *
                     * Default value:
                     *
                     * ```
                     * [[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
                     *
                     * ```
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisLine.lineStyle.color
                     */
                    color?: any[] | undefined;

                    /**
                     * The width of axis line.
                     *
                     *
                     * @default
                     * 30
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisLine.lineStyle.width
                     */
                    width?: number | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.axisLine.lineStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisLine.lineStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisLine.lineStyle.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisLine.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisLine.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisLine.lineStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;
            } | undefined;

            /**
             * The style of split line.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.splitLine
             */
            splitLine?: {
                /**
                 * Whether to show the split line.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.splitLine.show
                 */
                show?: boolean | undefined;

                /**
                 * The length of split line, can be a pecentage value relative
                 * to radius.
                 *
                 *
                 * @default
                 * 30
                 * @see https://echarts.apache.org/en/option.html#series-gauge.splitLine.length
                 */
                length?: number | string | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-gauge.splitLine.lineStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.splitLine.lineStyle)
                     *
                     *
                     * @default
                     * "#eee"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.splitLine.lineStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * line width.
                     *
                     *
                     * @default
                     * 2
                     * @see https://echarts.apache.org/en/option.html#series-gauge.splitLine.lineStyle.width
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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.splitLine.lineStyle.type
                     */
                    type?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.splitLine.lineStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.splitLine.lineStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.splitLine.lineStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.splitLine.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.splitLine.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.splitLine.lineStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;
            } | undefined;

            /**
             * The tick line style.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.axisTick
             */
            axisTick?: {
                /**
                 * Whether to show the scale.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisTick.show
                 */
                show?: boolean | undefined;

                /**
                 * The split scale number between split line.
                 *
                 *
                 * @default
                 * 5
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisTick.splitNumber
                 */
                splitNumber?: number | undefined;

                /**
                 * The length of tick line, can be a pecentage value relative
                 * to radius.
                 *
                 *
                 * @default
                 * 8
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisTick.length
                 */
                length?: number | string | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisTick.lineStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.axisTick.lineStyle)
                     *
                     *
                     * @default
                     * "#eee"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisTick.lineStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * line width.
                     *
                     *
                     * @default
                     * 1
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisTick.lineStyle.width
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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisTick.lineStyle.type
                     */
                    type?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.axisTick.lineStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisTick.lineStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisTick.lineStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisTick.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisTick.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisTick.lineStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;
            } | undefined;

            /**
             * Axis tick label.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel
             */
            axisLabel?: {
                /**
                 * Whether to show the label.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.show
                 */
                show?: boolean | undefined;

                /**
                 * The distance between the label and tick line.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.distance
                 */
                distance?: number | undefined;

                /**
                 * The content formatter of scale label, which supports both
                 * string template and callback function. Example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.axisLabel)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.formatter
                 */
                formatter?: Function | string | undefined;

                /**
                 * text color.
                 *
                 *
                 * @default
                 * ""#fff""
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.color
                 */
                color?: string | undefined;

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
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.fontStyle
                 */
                fontStyle?: string | undefined;

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
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.fontWeight
                 */
                fontWeight?: string | number | undefined;

                /**
                 * font family
                 *
                 * Can also be 'serif' , 'monospace', ...
                 *
                 *
                 * @default
                 * "sans-serif"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.fontFamily
                 */
                fontFamily?: string | undefined;

                /**
                 * font size
                 *
                 *
                 * @default
                 * 12
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.fontSize
                 */
                fontSize?: number | undefined;

                /**
                 * Line height of the text fregment.
                 *
                 * If `lineHeight` is not set in `rich`, `lineHeight` in parent
                 * level will be used. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.axisLabel)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.lineHeight
                 */
                lineHeight?: number | undefined;

                /**
                 * Background color of the text fregment.
                 *
                 * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                 *
                 * Or image can be used, for example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.axisLabel)
                 *
                 * `width` or `height` can be specified when using background
                 * image, or auto adapted by default.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.backgroundColor
                 */
                backgroundColor?: object | string | undefined;

                /**
                 * Border color of the text fregment.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.borderColor
                 */
                borderColor?: string | undefined;

                /**
                 * Border width of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Border radius of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.borderRadius
                 */
                borderRadius?: number | undefined;

                /**
                 * Padding of the text fregment, for example:
                 *
                 * + `padding: [3, 4, 5, 6]`: represents padding of `[top, right,
                 * bottom, left]`.
                 * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                 * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.padding
                 */
                padding?: any[] | number | undefined;

                /**
                 * Shadow color of the text block.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.shadowColor
                 */
                shadowColor?: string | undefined;

                /**
                 * Show blur of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.shadowOffsetY
                 */
                shadowOffsetY?: number | undefined;

                /**
                 * Width of the text block.
                 * It is the width of the text by default.
                 * In most cases, there is no need to specify it.
                 * You may want to use it in some cases like make simple table
                 * or using background image (see `backgroundColor`).
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * `width` can also be percent string, like `'100%'`, which
                 * represents the percent of `contentWidth` (that is, the width
                 * without `padding`) of its container box.
                 * It is based on `contentWidth` because that each text fregment
                 * is layout based on the `content box`, where it makes no sense
                 * that calculating width based on `outerWith` in prectice.
                 *
                 * Notice, `width` and `height` only work when `rich` specified.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.width
                 */
                width?: number | string | undefined;

                /**
                 * Height of the text block.
                 * It is the width of the text by default.
                 * You may want to use it in some cases like using background
                 * image (see `backgroundColor`).
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * Notice, `width` and `height` only work when `rich` specified.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.height
                 */
                height?: number | string | undefined;

                /**
                 * Storke color of the text.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.textBorderColor
                 */
                textBorderColor?: string | undefined;

                /**
                 * Storke line width of the text.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.textBorderWidth
                 */
                textBorderWidth?: number | undefined;

                /**
                 * Shadow color of the text itself.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.textShadowColor
                 */
                textShadowColor?: string | undefined;

                /**
                 * Shadow blue of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.textShadowBlur
                 */
                textShadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.textShadowOffsetX
                 */
                textShadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.textShadowOffsetY
                 */
                textShadowOffsetY?: number | undefined;

                /**
                 * "Rich text styles" can be defined in this `rich` property.
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.axisLabel)
                 *
                 * For more details, see
                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                 * please.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich
                 */
                rich?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E
                     */
                    [userStyle: string]: {
                        /**
                         * text color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.color
                         */
                        color?: string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                         */
                        fontStyle?: string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                         */
                        fontSize?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.align
                         */
                        align?: string | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                         */
                        borderRadius?: number | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.width
                         */
                        width?: number | string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.axisLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;
                    };
                } | undefined;
            } | undefined;

            /**
             * Gauge chart pointer.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.pointer
             */
            pointer?: {
                /**
                 * Whether to show the pointer.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.pointer.show
                 */
                show?: boolean | undefined;

                /**
                 * The length of pointer which could be absolute value and also
                 * the percentage relative to
                 * [radius](https://echarts.apache.org/en/option.html#series-gauge.radius)
                 * .
                 *
                 *
                 * @default
                 * '80%'
                 * @see https://echarts.apache.org/en/option.html#series-gauge.pointer.length
                 */
                length?: number | string | undefined;

                /**
                 * The width of pointer.
                 *
                 *
                 * @default
                 * 8
                 * @see https://echarts.apache.org/en/option.html#series-gauge.pointer.width
                 */
                width?: number | undefined;
            } | undefined;

            /**
             * The style of gauge chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.itemStyle
             */
            itemStyle?: {
                /**
                 * The color of pointer. Defaults to use
                 * [the color of section](https://echarts.apache.org/en/option.html#series-gauge.axisLine.lineStyle.color)
                 * where the numerical value belongs to.
                 *
                 *
                 * @default
                 * "auto"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.itemStyle.color
                 */
                color?: string | undefined;

                /**
                 * border color, whose format is similar to that of `color`.
                 *
                 *
                 * @default
                 * "#000"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.itemStyle.borderColor
                 */
                borderColor?: string | undefined;

                /**
                 * border width. No border when it is set to be 0.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.itemStyle.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                 * `'solid'` by default.
                 *
                 *
                 * @default
                 * "solid"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.itemStyle.borderType
                 */
                borderType?: string | undefined;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.itemStyle)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.itemStyle.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.itemStyle.shadowColor
                 */
                shadowColor?: string | undefined;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.itemStyle.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.itemStyle.shadowOffsetY
                 */
                shadowOffsetY?: number | undefined;

                /**
                 * Opacity of the component.
                 * Supports value from 0 to 1, and the component will not be
                 * drawn when set to 0.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.itemStyle.opacity
                 */
                opacity?: number | undefined;
            } | undefined;

            /**
             * @see https://echarts.apache.org/en/option.html#series-gauge.emphasis
             */
            emphasis?: {
                /**
                 * @see https://echarts.apache.org/en/option.html#series-gauge.emphasis.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.emphasis.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.emphasis.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.emphasis.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.emphasis.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.emphasis.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.emphasis.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.emphasis.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.emphasis.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.emphasis.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.emphasis.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.emphasis.itemStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;
            } | undefined;

            /**
             * The title of gauge chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.title
             */
            title?: {
                /**
                 * Whether to show the title.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.show
                 */
                show?: boolean | undefined;

                /**
                 * The offset position relative to the center of gauge chart.
                 * The first item of array is the horizontal offset; the second
                 * item of array is the vertical offset.
                 * It could be absolute value and also the percentage relative
                 * to the radius of gauge chart.
                 *
                 *
                 * @default
                 * [0, '-40%']
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.offsetCenter
                 */
                offsetCenter?: any[] | undefined;

                /**
                 * text color.
                 *
                 *
                 * @default
                 * '#333'
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.color
                 */
                color?: string | undefined;

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
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.fontStyle
                 */
                fontStyle?: string | undefined;

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
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.fontWeight
                 */
                fontWeight?: string | number | undefined;

                /**
                 * font family
                 *
                 * Can also be 'serif' , 'monospace', ...
                 *
                 *
                 * @default
                 * "sans-serif"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.fontFamily
                 */
                fontFamily?: string | undefined;

                /**
                 * font size
                 *
                 *
                 * @default
                 * 15
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.fontSize
                 */
                fontSize?: number | undefined;

                /**
                 * Line height of the text fregment.
                 *
                 * If `lineHeight` is not set in `rich`, `lineHeight` in parent
                 * level will be used. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.title)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.lineHeight
                 */
                lineHeight?: number | undefined;

                /**
                 * Background color of the text fregment.
                 *
                 * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                 *
                 * Or image can be used, for example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.title)
                 *
                 * `width` or `height` can be specified when using background
                 * image, or auto adapted by default.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.backgroundColor
                 */
                backgroundColor?: object | string | undefined;

                /**
                 * Border color of the text fregment.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.borderColor
                 */
                borderColor?: string | undefined;

                /**
                 * Border width of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Border radius of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.borderRadius
                 */
                borderRadius?: number | undefined;

                /**
                 * Padding of the text fregment, for example:
                 *
                 * + `padding: [3, 4, 5, 6]`: represents padding of `[top, right,
                 * bottom, left]`.
                 * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                 * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.padding
                 */
                padding?: any[] | number | undefined;

                /**
                 * Shadow color of the text block.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.shadowColor
                 */
                shadowColor?: string | undefined;

                /**
                 * Show blur of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.shadowOffsetY
                 */
                shadowOffsetY?: number | undefined;

                /**
                 * Width of the text block.
                 * It is the width of the text by default.
                 * In most cases, there is no need to specify it.
                 * You may want to use it in some cases like make simple table
                 * or using background image (see `backgroundColor`).
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * `width` can also be percent string, like `'100%'`, which
                 * represents the percent of `contentWidth` (that is, the width
                 * without `padding`) of its container box.
                 * It is based on `contentWidth` because that each text fregment
                 * is layout based on the `content box`, where it makes no sense
                 * that calculating width based on `outerWith` in prectice.
                 *
                 * Notice, `width` and `height` only work when `rich` specified.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.width
                 */
                width?: number | string | undefined;

                /**
                 * Height of the text block.
                 * It is the width of the text by default.
                 * You may want to use it in some cases like using background
                 * image (see `backgroundColor`).
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * Notice, `width` and `height` only work when `rich` specified.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.height
                 */
                height?: number | string | undefined;

                /**
                 * Storke color of the text.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.textBorderColor
                 */
                textBorderColor?: string | undefined;

                /**
                 * Storke line width of the text.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.textBorderWidth
                 */
                textBorderWidth?: number | undefined;

                /**
                 * Shadow color of the text itself.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.textShadowColor
                 */
                textShadowColor?: string | undefined;

                /**
                 * Shadow blue of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.textShadowBlur
                 */
                textShadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.textShadowOffsetX
                 */
                textShadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.textShadowOffsetY
                 */
                textShadowOffsetY?: number | undefined;

                /**
                 * "Rich text styles" can be defined in this `rich` property.
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.title)
                 *
                 * For more details, see
                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                 * please.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich
                 */
                rich?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E
                     */
                    [userStyle: string]: {
                        /**
                         * text color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.color
                         */
                        color?: string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                         */
                        fontStyle?: string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                         */
                        fontSize?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.title.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.align
                         */
                        align?: string | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.title.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.title.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.title.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                         */
                        borderRadius?: number | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.width
                         */
                        width?: number | string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.title.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;
                    };
                } | undefined;
            } | undefined;

            /**
             * The detail about gauge chart which is used to show data.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.detail
             */
            detail?: {
                /**
                 * Whether to show the details.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.show
                 */
                show?: boolean | undefined;

                /**
                 * Width of the text block.
                 * It is the width of the text by default.
                 * In most cases, there is no need to specify it.
                 * You may want to use it in some cases like make simple table
                 * or using background image (see `backgroundColor`).
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * `width` can also be percent string, like `'100%'`, which
                 * represents the percent of `contentWidth` (that is, the width
                 * without `padding`) of its container box.
                 * It is based on `contentWidth` because that each text fregment
                 * is layout based on the `content box`, where it makes no sense
                 * that calculating width based on `outerWith` in prectice.
                 *
                 * Notice, `width` and `height` only work when `rich` specified.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.width
                 */
                width?: number | string | undefined;

                /**
                 * Height of the text block.
                 * It is the width of the text by default.
                 * You may want to use it in some cases like using background
                 * image (see `backgroundColor`).
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * Notice, `width` and `height` only work when `rich` specified.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.height
                 */
                height?: number | string | undefined;

                /**
                 * Background color of the text fregment.
                 *
                 * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                 *
                 * Or image can be used, for example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.detail)
                 *
                 * `width` or `height` can be specified when using background
                 * image, or auto adapted by default.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.backgroundColor
                 */
                backgroundColor?: object | string | undefined;

                /**
                 * Border width of the text fragment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Formatter is used to format detail, which supports string template and callback function.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.formatter
                 */
                formatter?: string | Function | undefined;

                /**
                 * Border color of the text fragment.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.borderColor
                 */
                borderColor?: string | undefined;

                /**
                 * The offset position relative to the center of gauge chart.
                 * The first item of array is the horizontal offset; the second
                 * item of array is the vertical offset.
                 * It could be absolute value and also the percentage relative
                 * to the radius of gauge chart.
                 *
                 *
                 * @default
                 * [0, '40%']
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.offsetCenter
                 */
                offsetCenter?: any[] | undefined;

                /**
                 * text color.
                 *
                 *
                 * @default
                 * "auto"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.color
                 */
                color?: string | undefined;

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
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.fontStyle
                 */
                fontStyle?: string | undefined;

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
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.fontWeight
                 */
                fontWeight?: string | number | undefined;

                /**
                 * font family
                 *
                 * Can also be 'serif' , 'monospace', ...
                 *
                 *
                 * @default
                 * "sans-serif"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.fontFamily
                 */
                fontFamily?: string | undefined;

                /**
                 * font size
                 *
                 *
                 * @default
                 * 15
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.fontSize
                 */
                fontSize?: number | undefined;

                /**
                 * Line height of the text fregment.
                 *
                 * If `lineHeight` is not set in `rich`, `lineHeight` in parent
                 * level will be used. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.detail)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.lineHeight
                 */
                lineHeight?: number | undefined;

                /**
                 * Border radius of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.borderRadius
                 */
                borderRadius?: number | undefined;

                /**
                 * Padding of the text fregment, for example:
                 *
                 * + `padding: [3, 4, 5, 6]`: represents padding of `[top, right,
                 * bottom, left]`.
                 * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                 * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.padding
                 */
                padding?: any[] | number | undefined;

                /**
                 * Shadow color of the text block.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.shadowColor
                 */
                shadowColor?: string | undefined;

                /**
                 * Show blur of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.shadowOffsetY
                 */
                shadowOffsetY?: number | undefined;

                /**
                 * Storke color of the text.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.textBorderColor
                 */
                textBorderColor?: string | undefined;

                /**
                 * Storke line width of the text.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.textBorderWidth
                 */
                textBorderWidth?: number | undefined;

                /**
                 * Shadow color of the text itself.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.textShadowColor
                 */
                textShadowColor?: string | undefined;

                /**
                 * Shadow blue of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.textShadowBlur
                 */
                textShadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.textShadowOffsetX
                 */
                textShadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.textShadowOffsetY
                 */
                textShadowOffsetY?: number | undefined;

                /**
                 * "Rich text styles" can be defined in this `rich` property.
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.detail)
                 *
                 * For more details, see
                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                 * please.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich
                 */
                rich?: {
                    /**
                     * The text color. Defaults to use
                     * [the color of section](https://echarts.apache.org/en/option.html#series-gauge.axisLine.lineStyle.color)
                     * where the numerical value belongs to.
                     *
                     *
                     * @todo check that the option is valid and should be here
                     * @default
                     * "auto"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.color
                     */
                    // color?: string;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E
                     */
                    [userStyle: string]: {
                        /**
                         * text color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.color
                         */
                        color?: string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                         */
                        fontStyle?: string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                         */
                        fontSize?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.detail.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.align
                         */
                        align?: string | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.detail.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.detail.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.detail.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                         */
                        borderRadius?: number | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.width
                         */
                        width?: number | string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.detail.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;
                    };
                } | undefined;
            } | undefined;

            /**
             * Mark point in a chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint)
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint)
                 *
                 *
                 * @default
                 * "pin"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.symbol
                 */
                symbol?: string | undefined;

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
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.symbolSize
                 */
                symbolSize?: any[] | Function | number | undefined;

                /**
                 * Rotate degree of symbol.
                 * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                 * `symbolRotate` value will be ignored, and compulsively use
                 * tangent angle.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.symbolRotate
                 */
                symbolRotate?: number | undefined;

                /**
                 * Whether to keep aspect for symbols in the form of `path://`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.symbolKeepAspect
                 */
                symbolKeepAspect?: boolean | undefined;

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
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.symbolOffset
                 */
                symbolOffset?: any[] | undefined;

                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.silent
                 */
                silent?: boolean | undefined;

                /**
                 * Label of mark point.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.show
                     */
                    show?: boolean | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.position
                     */
                    position?: any[] | string | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.distance
                     */
                    distance?: number | undefined;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.offset
                     */
                    offset?: any[] | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.formatter
                     */
                    formatter?: Function | string | undefined;

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.color
                     */
                    color?: string | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.fontStyle
                     */
                    fontStyle?: string | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.fontWeight
                     */
                    fontWeight?: string | number | undefined;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.fontSize
                     */
                    fontSize?: number | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.align
                     */
                    align?: string | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.backgroundColor
                     */
                    backgroundColor?: object | string | undefined;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.borderRadius
                     */
                    borderRadius?: number | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.width
                     */
                    width?: number | string | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.height
                     */
                    height?: number | string | undefined;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.color
                             */
                            color?: string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                             */
                            fontStyle?: string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                             */
                            fontSize?: number | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.align
                             */
                            align?: string | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                             */
                            lineHeight?: number | undefined;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                             */
                            borderRadius?: number | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.width
                             */
                            width?: number | string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.show
                         */
                        show?: boolean | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.position
                         */
                        position?: any[] | string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.distance
                         */
                        distance?: number | undefined;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                         * .
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.offset
                         */
                        offset?: any[] | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.formatter
                         */
                        formatter?: Function | string | undefined;

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.color
                         */
                        color?: string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.fontStyle
                         */
                        fontStyle?: string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.fontSize
                         */
                        fontSize?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.align
                         */
                        align?: string | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.borderRadius
                         */
                        borderRadius?: number | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.width
                         */
                        width?: number | string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                 */
                                color?: string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                 */
                                fontStyle?: string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number | undefined;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Mark point style.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.opacity
                     */
                    opacity?: number | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.emphasis
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.emphasis.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.emphasis.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.emphasis.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.itemStyle.emphasis.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Data array for mark points, each of which is an object.
                 * Here are some ways to assign mark point position.
                 *
                 * 1. Assign coordinate according to container with
                 * [x](https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * **For example:**
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data
                 */
                data?: {
                    /**
                     * Mark point name.
                     *
                     *
                     * @default
                     * ''
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.name
                     */
                    name?: string | undefined;

                    /**
                     * X position according to container, in pixel.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.x
                     */
                    x?: number | undefined;

                    /**
                     * Y position according to container, in pixel.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.y
                     */
                    y?: number | undefined;

                    /**
                     * Label value, which can be ignored.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.value
                     */
                    value?: number | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data)
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.symbol
                     */
                    symbol?: string | undefined;

                    /**
                     * symbol size.
                     * It can be set to single numbers like `10`, or use an
                     * array to represent width and height.
                     * For example, `[20, 10]` means symbol width is `20`, and
                     * height is`10`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.symbolSize
                     */
                    symbolSize?: any[] | number | undefined;

                    /**
                     * Rotate degree of symbol.
                     * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                     * `symbolRotate` value will be ignored, and compulsively
                     * use tangent angle.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.symbolRotate
                     */
                    symbolRotate?: number | undefined;

                    /**
                     * Whether to keep aspect for symbols in the form of `path://`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.symbolKeepAspect
                     */
                    symbolKeepAspect?: boolean | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.symbolOffset
                     */
                    symbolOffset?: any[] | undefined;

                    /**
                     * Mark point style.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.opacity
                         */
                        opacity?: number | undefined;

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.emphasis
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.itemStyle.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.emphasis.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.emphasis.borderColor
                             */
                            borderColor?: EChartOption.Color | undefined;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.emphasis.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.emphasis.borderType
                             */
                            borderType?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.itemStyle.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.emphasis.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.emphasis.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.emphasis.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.itemStyle.emphasis.opacity
                             */
                            opacity?: number | undefined;
                        } | undefined;
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label
                     */
                    label?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.show
                         */
                        show?: boolean | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.position
                         */
                        position?: any[] | string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.distance
                         */
                        distance?: number | undefined;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                         * .
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.offset
                         */
                        offset?: any[] | undefined;

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.color
                         */
                        color?: string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.fontStyle
                         */
                        fontStyle?: string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.fontSize
                         */
                        fontSize?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.align
                         */
                        align?: string | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.borderRadius
                         */
                        borderRadius?: number | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.width
                         */
                        width?: number | string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
                                 */
                                color?: string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                 */
                                fontStyle?: string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number | undefined;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis
                         */
                        emphasis?: {
                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.show
                             */
                            show?: boolean | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.emphasis)
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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.position
                             */
                            position?: any[] | string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.distance
                             */
                            distance?: number | undefined;

                            /**
                             * Rotate label, from -90 degree to 90, positive
                             * value represents rotate anti-clockwise.
                             *
                             * See:
                             * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                             * .
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rotate
                             */
                            rotate?: number | undefined;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.offset
                             */
                            offset?: any[] | undefined;

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.color
                             */
                            color?: string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.fontStyle
                             */
                            fontStyle?: string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.fontSize
                             */
                            fontSize?: number | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.align
                             */
                            align?: string | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.lineHeight
                             */
                            lineHeight?: number | undefined;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.emphasis)
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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.borderRadius
                             */
                            borderRadius?: number | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.width
                             */
                            width?: number | string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.emphasis)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                     */
                                    color?: string | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                     */
                                    fontStyle?: string | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string | number | undefined;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string | undefined;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                     */
                                    fontSize?: number | undefined;

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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                     */
                                    align?: string | undefined;

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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string | undefined;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                     */
                                    lineHeight?: number | undefined;

                                    /**
                                     * Background color of the text fregment.
                                     *
                                     * Can be color string, like `'#123234'`,
                                     * `'red'`, `rgba(0,23,11,0.3)'`.
                                     *
                                     * Or image can be used, for example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string | undefined;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string | undefined;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number | undefined;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                     */
                                    borderRadius?: number | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number | undefined;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string | undefined;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                     */
                                    shadowOffsetY?: number | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                     */
                                    width?: number | string | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string | undefined;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string | undefined;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number | undefined;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string | undefined;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number | undefined;
                                };
                            } | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Whether to enable animation.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.animation
                 */
                animation?: boolean | undefined;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 *
                 * @default
                 * 2000
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.animationThreshold
                 */
                animationThreshold?: number | undefined;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.animationDuration
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
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.animationEasing
                 */
                animationEasing?: string | undefined;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.animationDelay
                 */
                animationDelay?: Function | number | undefined;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint)
                 *
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number | undefined;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.animationEasingUpdate
                 */
                animationEasingUpdate?: string | undefined;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markPoint)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * prefix
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markPoint.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number | undefined;
            } | undefined;

            /**
             * Use a line in the chart to illustrate.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine
             */
            markLine?: {
                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.silent
                 */
                silent?: boolean | undefined;

                /**
                 * Symbol type at the two ends of the mark line.
                 * It can be an array for two ends, or assigned seperately.
                 * See
                 * [data.symbol](https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.symbol)
                 * for more format information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.symbol
                 */
                symbol?: any[] | string | undefined;

                /**
                 * Symbol size at the two ends of the mark line.
                 * It can be an array for two ends, or assigned seperately.
                 *
                 * **Attention:** You cannot assgin width and height seperately
                 * as normal `symbolSize`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.symbolSize
                 */
                symbolSize?: any[] | number | undefined;

                /**
                 * Precison of marking line value, which is useful when displaying
                 * average value mark line.
                 *
                 *
                 * @default
                 * 2
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.precision
                 */
                precision?: number | undefined;

                /**
                 * Mark line text.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.label
                 */
                label?: {
                    /**
                     * Whether show label or not.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.label.show
                     */
                    show?: boolean | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.label.position
                     */
                    position?: string | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.label.formatter
                     */
                    formatter?: Function | string | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether show label or not.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.label.emphasis.show
                         */
                        show?: boolean | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.label.emphasis.position
                         */
                        position?: string | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.label.emphasis.formatter
                         */
                        formatter?: Function | string | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Mark line style.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.lineStyle)
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * line width.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.width
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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.type
                     */
                    type?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.lineStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.opacity
                     */
                    opacity?: number | undefined;

                    /**
                     * Edge curvature, which supports value from 0 to 1.
                     * The larger the value, the greater the curvature.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.curveness
                     */
                    curveness?: number | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.emphasis
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.lineStyle.emphasis)
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.emphasis.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * line width.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.emphasis.width
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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.emphasis.type
                         */
                        type?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.lineStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.emphasis.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.lineStyle.emphasis.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Data array of marking line.
                 * Every array item can be an array of one or two values, representing
                 * starting and ending point of the line, and every item is
                 * an object.
                 * Here are several ways to assign the positions of starting
                 * and ending point.
                 *
                 * 1. Assign coordinate according to container with
                 * [x](https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data
                 */
                data?: {
                    /**
                     * Data of the starting point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0
                     */
                    0?: {
                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.markLine.data.0.name
                         */
                        name?: string | undefined;

                        /**
                         * X position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.x
                         */
                        x?: number | undefined;

                        /**
                         * Y position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.y
                         */
                        y?: number | undefined;

                        /**
                         * Label value, which can be ignored.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.value
                         */
                        value?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.0)
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.0)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.symbol
                         */
                        symbol?: string | undefined;

                        /**
                         * starting point symbol size.
                         * It can be set to single numbers like `10`, or use
                         * an array to represent width and height.
                         * For example, `[20, 10]` means symbol width is `20`,
                         * and height is`10`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.symbolSize
                         */
                        symbolSize?: any[] | number | undefined;

                        /**
                         * Rotate degree of starting point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.symbolRotate
                         */
                        symbolRotate?: number | undefined;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.symbolKeepAspect
                         */
                        symbolKeepAspect?: boolean | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.symbolOffset
                         */
                        symbolOffset?: any[] | undefined;

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.0.lineStyle)
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * line width.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.width
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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.type
                             */
                            type?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.0.lineStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.opacity
                             */
                            opacity?: number | undefined;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.curveness
                             */
                            curveness?: number | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.0.lineStyle.emphasis)
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.emphasis.color
                                 */
                                color?: EChartOption.Color | undefined;

                                /**
                                 * line width.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.emphasis.type
                                 */
                                type?: string | undefined;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.0.lineStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: EChartOption.Color | undefined;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.emphasis.opacity
                                 */
                                opacity?: number | undefined;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.lineStyle.emphasis.curveness
                                 */
                                curveness?: number | undefined;
                            } | undefined;
                        } | undefined;

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.label
                         */
                        label?: {
                            /**
                             * Whether show label or not.
                             *
                             *
                             * @default
                             * "true"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.label.show
                             */
                            show?: boolean | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.label.position
                             */
                            position?: string | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.label.formatter
                             */
                            formatter?: Function | string | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether show label or not.
                                 *
                                 *
                                 * @default
                                 * "true"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.label.emphasis.show
                                 */
                                show?: boolean | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.label.emphasis.position
                                 */
                                position?: string | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.0.label.emphasis.formatter
                                 */
                                formatter?: Function | string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;

                    /**
                     * Data of the ending point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1
                     */
                    1?: {
                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.markLine.data.1.name
                         */
                        name?: string | undefined;

                        /**
                         * X position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.x
                         */
                        x?: number | undefined;

                        /**
                         * Y position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.y
                         */
                        y?: number | undefined;

                        /**
                         * Label value, which can be ignored.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.value
                         */
                        value?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.1)
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.1)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.symbol
                         */
                        symbol?: string | undefined;

                        /**
                         * ending point symbol size.
                         * It can be set to single numbers like `10`, or use
                         * an array to represent width and height.
                         * For example, `[20, 10]` means symbol width is `20`,
                         * and height is`10`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.symbolSize
                         */
                        symbolSize?: any[] | number | undefined;

                        /**
                         * Rotate degree of ending point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.symbolRotate
                         */
                        symbolRotate?: number | undefined;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.symbolKeepAspect
                         */
                        symbolKeepAspect?: boolean | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.symbolOffset
                         */
                        symbolOffset?: any[] | undefined;

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.1.lineStyle)
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * line width.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.width
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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.type
                             */
                            type?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.1.lineStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.opacity
                             */
                            opacity?: number | undefined;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.curveness
                             */
                            curveness?: number | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.1.lineStyle.emphasis)
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.emphasis.color
                                 */
                                color?: EChartOption.Color | undefined;

                                /**
                                 * line width.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.emphasis.type
                                 */
                                type?: string | undefined;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.1.lineStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: EChartOption.Color | undefined;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.emphasis.opacity
                                 */
                                opacity?: number | undefined;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.lineStyle.emphasis.curveness
                                 */
                                curveness?: number | undefined;
                            } | undefined;
                        } | undefined;

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.label
                         */
                        label?: {
                            /**
                             * Whether show label or not.
                             *
                             *
                             * @default
                             * "true"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.label.show
                             */
                            show?: boolean | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.label.position
                             */
                            position?: string | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.label.formatter
                             */
                            formatter?: Function | string | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether show label or not.
                                 *
                                 *
                                 * @default
                                 * "true"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.label.emphasis.show
                                 */
                                show?: boolean | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.label.emphasis.position
                                 */
                                position?: string | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.data.1.label.emphasis.formatter
                                 */
                                formatter?: Function | string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Whether to enable animation.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.animation
                 */
                animation?: boolean | undefined;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 *
                 * @default
                 * 2000
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.animationThreshold
                 */
                animationThreshold?: number | undefined;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.animationDuration
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
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.animationEasing
                 */
                animationEasing?: string | undefined;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.animationDelay
                 */
                animationDelay?: Function | number | undefined;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine)
                 *
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number | undefined;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.animationEasingUpdate
                 */
                animationEasingUpdate?: string | undefined;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markLine)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markLine.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number | undefined;
            } | undefined;

            /**
             * Used to mark an area in chart.
             * For example, mark a time interval.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea
             */
            markArea?: {
                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.silent
                 */
                silent?: boolean | undefined;

                /**
                 * Label in mark area.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.show
                     */
                    show?: boolean | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.position
                     */
                    position?: any[] | string | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.distance
                     */
                    distance?: number | undefined;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.offset
                     */
                    offset?: any[] | undefined;

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.color
                     */
                    color?: string | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.fontStyle
                     */
                    fontStyle?: string | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.fontWeight
                     */
                    fontWeight?: string | number | undefined;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.fontSize
                     */
                    fontSize?: number | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.align
                     */
                    align?: string | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.backgroundColor
                     */
                    backgroundColor?: object | string | undefined;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.borderRadius
                     */
                    borderRadius?: number | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.width
                     */
                    width?: number | string | undefined;

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
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.height
                     */
                    height?: number | string | undefined;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.color
                             */
                            color?: string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                             */
                            fontStyle?: string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                             */
                            fontSize?: number | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.align
                             */
                            align?: string | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                             */
                            lineHeight?: number | undefined;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                             */
                            borderRadius?: number | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.width
                             */
                            width?: number | string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.show
                         */
                        show?: boolean | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.position
                         */
                        position?: any[] | string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.distance
                         */
                        distance?: number | undefined;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                         * .
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.offset
                         */
                        offset?: any[] | undefined;

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.color
                         */
                        color?: string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.fontStyle
                         */
                        fontStyle?: string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.fontSize
                         */
                        fontSize?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.align
                         */
                        align?: string | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.borderRadius
                         */
                        borderRadius?: number | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.width
                         */
                        width?: number | string | undefined;

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
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                 */
                                color?: string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                 */
                                fontStyle?: string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                 */
                                fontSize?: number | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                 */
                                align?: string | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                 */
                                lineHeight?: number | undefined;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                 */
                                borderRadius?: number | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                 */
                                width?: number | string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Style of the mark area.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.opacity
                     */
                    opacity?: number | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.emphasis
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.emphasis.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.emphasis.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.emphasis.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.itemStyle.emphasis.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * The scope of the area is defined by `data`, which is an array
                 * with two item, representing the left-top point and the right-bottom
                 * point of rectangle area.
                 * Each item can be defined as follows:
                 *
                 * 1.
                 * Specify the coordinate in screen coordinate system using
                 * [x](https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.y)
                 * , where the unit is pixel (e.g.,
                 * the value is `5`), or percent (e.g.,
                 * the value is `'35%'`).
                 *
                 * The priority follows as above if more than one above definition
                 * used.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data
                 */
                data?: {
                    /**
                     * Specify the left-top point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0
                     */
                    0?: {
                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.markArea.data.0.name
                         */
                        name?: string | undefined;

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.x
                         */
                        x?: number | undefined;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.y
                         */
                        y?: number | undefined;

                        /**
                         * value of the item, not necessary.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.value
                         */
                        value?: number | undefined;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.borderColor
                             */
                            borderColor?: EChartOption.Color | undefined;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.borderType
                             */
                            borderType?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.opacity
                             */
                            opacity?: number | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.emphasis.color
                                 */
                                color?: EChartOption.Color | undefined;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: EChartOption.Color | undefined;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.emphasis.borderType
                                 */
                                borderType?: string | undefined;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: EChartOption.Color | undefined;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.itemStyle.emphasis.opacity
                                 */
                                opacity?: number | undefined;
                            } | undefined;
                        } | undefined;

                        /**
                         * Label style of the item.
                         * Label style of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label
                         */
                        label?: {
                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.show
                             */
                            show?: boolean | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.position
                             */
                            position?: any[] | string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.distance
                             */
                            distance?: number | undefined;

                            /**
                             * Rotate label, from -90 degree to 90, positive
                             * value represents rotate anti-clockwise.
                             *
                             * See:
                             * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                             * .
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rotate
                             */
                            rotate?: number | undefined;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.offset
                             */
                            offset?: any[] | undefined;

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.color
                             */
                            color?: string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.fontStyle
                             */
                            fontStyle?: string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.fontSize
                             */
                            fontSize?: number | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.align
                             */
                            align?: string | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.lineHeight
                             */
                            lineHeight?: number | undefined;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.borderRadius
                             */
                            borderRadius?: number | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.width
                             */
                            width?: number | string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.color
                                     */
                                    color?: string | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                     */
                                    fontStyle?: string | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string | number | undefined;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string | undefined;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                     */
                                    fontSize?: number | undefined;

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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.align
                                     */
                                    align?: string | undefined;

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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string | undefined;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                     */
                                    lineHeight?: number | undefined;

                                    /**
                                     * Background color of the text fregment.
                                     *
                                     * Can be color string, like `'#123234'`,
                                     * `'red'`, `rgba(0,23,11,0.3)'`.
                                     *
                                     * Or image can be used, for example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string | undefined;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string | undefined;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number | undefined;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                     */
                                    borderRadius?: number | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number | undefined;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string | undefined;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                     */
                                    shadowOffsetY?: number | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.width
                                     */
                                    width?: number | string | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string | undefined;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string | undefined;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number | undefined;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string | undefined;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number | undefined;
                                };
                            } | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether to show label.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.show
                                 */
                                show?: boolean | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.position
                                 */
                                position?: any[] | string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.distance
                                 */
                                distance?: number | undefined;

                                /**
                                 * Rotate label, from -90 degree to 90, positive
                                 * value represents rotate anti-clockwise.
                                 *
                                 * See:
                                 * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                                 * .
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rotate
                                 */
                                rotate?: number | undefined;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.offset
                                 */
                                offset?: any[] | undefined;

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.color
                                 */
                                color?: string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.fontStyle
                                 */
                                fontStyle?: string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.fontSize
                                 */
                                fontSize?: number | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.align
                                 */
                                align?: string | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.lineHeight
                                 */
                                lineHeight?: number | undefined;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.borderRadius
                                 */
                                borderRadius?: number | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.width
                                 */
                                width?: number | string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich
                                 */
                                rich?: {
                                    /**
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                         */
                                        color?: string | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                         */
                                        fontStyle?: string | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                         */
                                        fontWeight?: string | number | undefined;

                                        /**
                                         * font family
                                         *
                                         * Can also be 'serif' , 'monospace',
                                         * ...
                                         *
                                         *
                                         * @default
                                         * "sans-serif"
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string | undefined;

                                        /**
                                         * font size
                                         *
                                         *
                                         * @default
                                         * 12
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                         */
                                        fontSize?: number | undefined;

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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                         */
                                        align?: string | undefined;

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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string | undefined;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                         */
                                        lineHeight?: number | undefined;

                                        /**
                                         * Background color of the text fregment.
                                         *
                                         * Can be color string, like `'#123234'`,
                                         * `'red'`, `rgba(0,23,11,0.3)'`.
                                         *
                                         * Or image can be used, for example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                         */
                                        backgroundColor?: object | string | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string | undefined;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number | undefined;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                         */
                                        borderRadius?: number | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number | undefined;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string | undefined;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number | undefined;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number | undefined;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                         */
                                        shadowOffsetY?: number | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                         */
                                        width?: number | string | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                         */
                                        height?: number | string | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string | undefined;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number | undefined;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string | undefined;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number | undefined;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number | undefined;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                         */
                                        textShadowOffsetY?: number | undefined;
                                    };
                                } | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;

                    /**
                     * Specify the right-bottom point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1
                     */
                    1?: {
                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.markArea.data.1.name
                         */
                        name?: string | undefined;

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.x
                         */
                        x?: number | undefined;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.y
                         */
                        y?: number | undefined;

                        /**
                         * value of the item, not necessary.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.value
                         */
                        value?: number | undefined;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.borderColor
                             */
                            borderColor?: EChartOption.Color | undefined;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.borderType
                             */
                            borderType?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.opacity
                             */
                            opacity?: number | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.emphasis.color
                                 */
                                color?: EChartOption.Color | undefined;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: EChartOption.Color | undefined;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.emphasis.borderType
                                 */
                                borderType?: string | undefined;

                                /**
                                 * Size of shadow blur.
                                 * This attribute should be used along with
                                 * `shadowColor`,`shadowOffsetX`, `shadowOffsetY`
                                 * to set shadow to component.
                                 *
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: EChartOption.Color | undefined;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.itemStyle.emphasis.opacity
                                 */
                                opacity?: number | undefined;
                            } | undefined;
                        } | undefined;

                        /**
                         * Label style of the item.
                         * Label style of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label
                         */
                        label?: {
                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.show
                             */
                            show?: boolean | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.position
                             */
                            position?: any[] | string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.distance
                             */
                            distance?: number | undefined;

                            /**
                             * Rotate label, from -90 degree to 90, positive
                             * value represents rotate anti-clockwise.
                             *
                             * See:
                             * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                             * .
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rotate
                             */
                            rotate?: number | undefined;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.offset
                             */
                            offset?: any[] | undefined;

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.color
                             */
                            color?: string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.fontStyle
                             */
                            fontStyle?: string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.fontSize
                             */
                            fontSize?: number | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.align
                             */
                            align?: string | undefined;

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
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.lineHeight
                             */
                            lineHeight?: number | undefined;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.borderRadius
                             */
                            borderRadius?: number | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.width
                             */
                            width?: number | string | undefined;

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
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.color
                                     */
                                    color?: string | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                     */
                                    fontStyle?: string | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string | number | undefined;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string | undefined;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                     */
                                    fontSize?: number | undefined;

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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.align
                                     */
                                    align?: string | undefined;

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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string | undefined;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                     */
                                    lineHeight?: number | undefined;

                                    /**
                                     * Background color of the text fregment.
                                     *
                                     * Can be color string, like `'#123234'`,
                                     * `'red'`, `rgba(0,23,11,0.3)'`.
                                     *
                                     * Or image can be used, for example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string | undefined;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string | undefined;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number | undefined;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                     */
                                    borderRadius?: number | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number | undefined;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string | undefined;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                     */
                                    shadowOffsetY?: number | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.width
                                     */
                                    width?: number | string | undefined;

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
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string | undefined;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string | undefined;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number | undefined;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string | undefined;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number | undefined;
                                };
                            } | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether to show label.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.show
                                 */
                                show?: boolean | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.position
                                 */
                                position?: any[] | string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.distance
                                 */
                                distance?: number | undefined;

                                /**
                                 * Rotate label, from -90 degree to 90, positive
                                 * value represents rotate anti-clockwise.
                                 *
                                 * See:
                                 * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                                 * .
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rotate
                                 */
                                rotate?: number | undefined;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.offset
                                 */
                                offset?: any[] | undefined;

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.color
                                 */
                                color?: string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.fontStyle
                                 */
                                fontStyle?: string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.fontSize
                                 */
                                fontSize?: number | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.align
                                 */
                                align?: string | undefined;

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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.lineHeight
                                 */
                                lineHeight?: number | undefined;

                                /**
                                 * Background color of the text fregment.
                                 *
                                 * Can be color string, like `'#123234'`, `'red'`,
                                 * `rgba(0,23,11,0.3)'`.
                                 *
                                 * Or image can be used, for example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.borderRadius
                                 */
                                borderRadius?: number | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.width
                                 */
                                width?: number | string | undefined;

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
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich
                                 */
                                rich?: {
                                    /**
                                     * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
                                         */
                                        color?: string | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                                         */
                                        fontStyle?: string | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                         */
                                        fontWeight?: string | number | undefined;

                                        /**
                                         * font family
                                         *
                                         * Can also be 'serif' , 'monospace',
                                         * ...
                                         *
                                         *
                                         * @default
                                         * "sans-serif"
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string | undefined;

                                        /**
                                         * font size
                                         *
                                         *
                                         * @default
                                         * 12
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                                         */
                                        fontSize?: number | undefined;

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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
                                         */
                                        align?: string | undefined;

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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string | undefined;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                                         */
                                        lineHeight?: number | undefined;

                                        /**
                                         * Background color of the text fregment.
                                         *
                                         * Can be color string, like `'#123234'`,
                                         * `'red'`, `rgba(0,23,11,0.3)'`.
                                         *
                                         * Or image can be used, for example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                         */
                                        backgroundColor?: object | string | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string | undefined;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number | undefined;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                                         */
                                        borderRadius?: number | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number | undefined;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string | undefined;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number | undefined;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number | undefined;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                                         */
                                        shadowOffsetY?: number | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
                                         */
                                        width?: number | string | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                         */
                                        height?: number | string | undefined;

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
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string | undefined;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number | undefined;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string | undefined;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number | undefined;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number | undefined;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                         */
                                        textShadowOffsetY?: number | undefined;
                                    };
                                } | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Whether to enable animation.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.animation
                 */
                animation?: boolean | undefined;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 *
                 * @default
                 * 2000
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.animationThreshold
                 */
                animationThreshold?: number | undefined;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.animationDuration
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
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.animationEasing
                 */
                animationEasing?: string | undefined;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.animationDelay
                 */
                animationDelay?: Function | number | undefined;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea)
                 *
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number | undefined;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.animationEasingUpdate
                 */
                animationEasingUpdate?: string | undefined;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge.markArea)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.markArea.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number | undefined;
            } | undefined;

            /**
             * Whether to enable animation.
             *
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-gauge.animation
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
             * @see https://echarts.apache.org/en/option.html#series-gauge.animationThreshold
             */
            animationThreshold?: number | undefined;

            /**
             * Duration of the first animation, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge)
             *
             *
             * @default
             * 1000
             * @see https://echarts.apache.org/en/option.html#series-gauge.animationDuration
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
             * "cubicOut"
             * @see https://echarts.apache.org/en/option.html#series-gauge.animationEasing
             */
            animationEasing?: string | undefined;

            /**
             * Delay before updating the first animation, which supports callback
             * function for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.animationDelay
             */
            animationDelay?: Function | number | undefined;

            /**
             * Time for animation to complete, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge)
             *
             *
             * @default
             * 300
             * @see https://echarts.apache.org/en/option.html#series-gauge.animationDurationUpdate
             */
            animationDurationUpdate?: Function | number | undefined;

            /**
             * Easing method used for animation.
             *
             *
             * @default
             * "cubicOut"
             * @see https://echarts.apache.org/en/option.html#series-gauge.animationEasingUpdate
             */
            animationEasingUpdate?: string | undefined;

            /**
             * Delay before updating animation, which supports callback function
             * for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-gauge.gauge)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.animationDelayUpdate
             */
            animationDelayUpdate?: Function | number | undefined;

            /**
             * tooltip settings in this series.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-gauge.tooltip
             */
            tooltip?: BaseTooltip | undefined;
        }

        namespace SeriesGauge {
            interface DataObject {
                /**
                 * The name of data item.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.data.name
                 */
                name?: string | undefined;

                /**
                 * The value of a single data item.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-gauge.data.value
                 */
                value?: number | undefined;
            }
        }
    }
}
