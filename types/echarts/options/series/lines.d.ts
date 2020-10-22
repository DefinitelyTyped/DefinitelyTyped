declare namespace echarts {
    namespace EChartOption {
        /**
         * **Lines graph**
         *
         * It is used to draw the line data with the information about "from"
         * and "to"; and it is applied fot drawing the air routes on map, which
         * visualizes these routes.
         *
         * ECharts 2.x
         * uses the `markLine` to draw the migrating effect, while in ECharts
         * 3, the `lines` graph is recommended to be used.
         *
         * **Migrating example:**
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-lines)
         *
         *
         * @see https://echarts.apache.org/en/option.html#series-lines
         */
        interface SeriesLines {
            /**
             * @default
             * "lines"
             * @see https://echarts.apache.org/en/option.html#series-lines.type
             */
            type?: string;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.id
             */
            id?: string;

            /**
             * Series name used for displaying in
             * [tooltip](https://echarts.apache.org/en/option.html#tooltip)
             * and filtering with
             * [legend](https://echarts.apache.org/en/option.html#legend)
             * , or updaing data and configuration with `setOption`.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.name
             */
            name?: string;

            /**
             * The coordinate used in the series, whose options are:
             *
             * + `'cartesian2d'`
             *
             * Use a two-dimensional rectangular coordinate (also known as Cartesian
             * coordinate), with
             * [xAxisIndex](https://echarts.apache.org/en/option.html#series-lines.xAxisIndex)
             * and
             * [yAxisIndex](https://echarts.apache.org/en/option.html#series-lines.yAxisIndex)
             * to assign the corresponding axis component.
             *
             * + `'geo'`
             *
             * Use geographic coordinate, with
             * [geoIndex](https://echarts.apache.org/en/option.html#series-lines.geoIndex)
             * to assign the corresponding geographic coordinate components.
             *
             *
             * @default
             * "geo"
             * @see https://echarts.apache.org/en/option.html#series-lines.coordinateSystem
             */
            coordinateSystem?: string;

            /**
             * Index of
             * [x axis](https://echarts.apache.org/en/option.html#xAxis)
             * to combine with, which is useful for multiple x axes in one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.xAxisIndex
             */
            xAxisIndex?: number;

            /**
             * Index of
             * [y axis](https://echarts.apache.org/en/option.html#yAxis)
             * to combine with, which is useful for multiple y axes in one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.yAxisIndex
             */
            yAxisIndex?: number;

            /**
             * Index of
             * [geographic coordinate](https://echarts.apache.org/en/option.html#geo)
             * to combine with, which is useful for multiple geographic axes
             * in one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.geoIndex
             */
            geoIndex?: number;

            /**
             * If draw as polyline.
             *
             * Default to be `false`. Can only draw a two end straight line.
             *
             * If it is set true,
             * [data.coords](https://echarts.apache.org/en/option.html#series-lines.data.coords)
             * can have more than two coord to draw a polyline.
             * It is useful when visualizing GPS track data. See example
             * [lines-bus](https://echarts.apache.org/examples/en/editor.html?c=lines-bmap-bus)
             * .
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.polyline
             */
            polyline?: boolean;

            /**
             * The setting about special effect of lines.
             *
             * **Tips:** All the graphs with trail effect should be put on a
             * individual layer, which means that
             * [zlevel](https://echarts.apache.org/en/option.html#series-lines.zlevel)
             * need to be different with others. And the animation (
             * [animation](https://echarts.apache.org/en/option.html#series-lines.animation)
             * : false) of this layer is suggested to be turned off at the meanwhile.
             * Otherwise, other graphic elements in other series and the
             * [label](https://echarts.apache.org/en/option.html#series-lines.label)
             * of animation would produce unnecessary ghosts.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.effect
             */
            effect?: {
                /**
                 * Whether to show special effect.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.effect.show
                 */
                show?: boolean;

                /**
                 * The duration of special effect, which unit is second.
                 *
                 *
                 * @default
                 * 4
                 * @see https://echarts.apache.org/en/option.html#series-lines.effect.period
                 */
                period?: number;

                /**
                 * Effect animation delay.
                 * Can be number or callback function.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.effect.delay
                 */
                delay?: Function | number;

                /**
                 * If symbol movement of special effect has a constant speed,
                 * which unit is pixel per second.
                 * [period](https://echarts.apache.org/en/option.html#series-lines.effect.period)
                 * will be ignored if `constantSpeed` is larger than 0.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.effect.constantSpeed
                 */
                constantSpeed?: number;

                /**
                 * The symbol of special effect.
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.effect)
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.effect)
                 *
                 * The above example uses a custom path of plane shape.
                 *
                 * **Tip:** Ahe angle of symbol changes as the tangent of track
                 * changes.
                 * If you use a custom path, you should make sure that the path
                 * shape are upward oriented.
                 * It would ensure that the symbol will always move toward the
                 * right moving direction when the symbol moves along the track.
                 *
                 *
                 * @default
                 * "circle"
                 * @see https://echarts.apache.org/en/option.html#series-lines.effect.symbol
                 */
                symbol?: string;

                /**
                 * The symbol size of special effect, which could be set as
                 * single number such as `10`.
                 * What's more, arrays could be used to decribe the width and
                 * height respectively.
                 * For instance, `[20, 10]` indicates `20` for width and `10`
                 * for height.
                 *
                 *
                 * @default
                 * 3
                 * @see https://echarts.apache.org/en/option.html#series-lines.effect.symbolSize
                 */
                symbolSize?: any[] | number;

                /**
                 * The color of special effect symbol, which defaults to be
                 * same with
                 * [lineStyle.color](https://echarts.apache.org/en/option.html#series-lines.lineStyle.color)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.effect.color
                 */
                color?: string;

                /**
                 * The length of trail of special effect.
                 * The values from 0 to 1 could be set.
                 * Trail would be longer as the the value becomes larger.
                 *
                 *
                 * @default
                 * 0.2
                 * @see https://echarts.apache.org/en/option.html#series-lines.effect.trailLength
                 */
                trailLength?: number;

                /**
                 * Whether to loop the special effect animation.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-lines.effect.loop
                 */
                loop?: boolean;
            };

            /**
             * Whether to enable the optimization of large-scale lines graph.
             * It could be enabled when there is a particularly large number
             * of data(>=5k) .
             *
             * After being enabled,
             * [largeThreshold](https://echarts.apache.org/en/option.html#series-lines.largeThreshold)
             * can be used to indicate the minimum number for turning on the
             * optimization.
             *
             * The style of a single data item can't be customized
             *
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-lines.large
             */
            large?: boolean;

            /**
             * The threshold enabling the drawing optimization.
             *
             *
             * @default
             * 2000
             * @see https://echarts.apache.org/en/option.html#series-lines.largeThreshold
             */
            largeThreshold?: number;

            /**
             * Symbol type at the two ends of the line.
             * It can be an array for two ends, or assigned seperately. See
             * [data.symbol](https://echarts.apache.org/en/option.html#series-line.markLine.data.0.symbol)
             * for more format information.
             *
             *
             * @default
             * "none"
             * @see https://echarts.apache.org/en/option.html#series-lines.symbol
             */
            symbol?: any[] | string;

            /**
             * Symbol size at the two ends of the line.
             * It can be an array for two ends, or assigned seperately.
             *
             * **Attention:** You cannot assgin width and height seperately
             * as normal `symbolSize`.
             *
             *
             * @default
             * 10
             * @see https://echarts.apache.org/en/option.html#series-lines.symbolSize
             */
            symbolSize?: any[] | number;

            /**
             * @see https://echarts.apache.org/en/option.html#series-lines.lineStyle
             */
            lineStyle?: {
                /**
                 * Line color. Color is taken from
                 * [option.color Palette](https://echarts.apache.org/en/option.html#color)
                 * by default.
                 *
                 * Supports callback functions, in the form of:
                 *
                 * ```
                 * (params: Object) => Color
                 *
                 * ```
                 *
                 * Input parameters are `seriesIndex`, `dataIndex`, `data`,
                 * `value`, and etc. of data item.
                 *
                 * > Color can be represented in RGB, for example `'rgb(128,
                 * 128, 128)'`.
                 * RGBA can be used when you need alpha channel, for example
                 * `'rgba(128, 128, 128, 0.5)'`.
                 * You may also use hexadecimal format, for example `'#ccc'`.
                 * Gradient color and texture are also supported besides single
                 * colors.
                 * >
                 * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.lineStyle)
                 *
                 *
                 * @default
                 * "self-adaptive"
                 * @see https://echarts.apache.org/en/option.html#series-lines.lineStyle.color
                 */
                color?: string;

                /**
                 * line width.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.lineStyle.width
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.lineStyle.type
                 */
                type?: string;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.lineStyle)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.lineStyle.shadowBlur
                 */
                shadowBlur?: number;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.lineStyle.shadowColor
                 */
                shadowColor?: string;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.lineStyle.shadowOffsetX
                 */
                shadowOffsetX?: number;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.lineStyle.shadowOffsetY
                 */
                shadowOffsetY?: number;

                /**
                 * Opacity of the component.
                 * Supports value from 0 to 1, and the component will not be
                 * drawn when set to 0.
                 *
                 *
                 * @default
                 * 0.5
                 * @see https://echarts.apache.org/en/option.html#series-lines.lineStyle.opacity
                 */
                opacity?: number;

                /**
                 * The curveness of edge.
                 * The values from 0 to 1 could be set.
                 * The curveness would be larger as the the value becomes larger.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.lineStyle.curveness
                 */
                curveness?: number;
            };

            /**
             * Label settings. Does not work when
             * [polyline](https://echarts.apache.org/en/option.html#series-lines.polyline)
             * is `true`.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.label
             */
            label?: {
                /**
                 * Whether to show label.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.show
                 */
                show?: boolean;

                /**
                 * the position of label, options:
                 *
                 * + `'start'`
                 * + `'middle'`
                 * + `'end'`
                 *
                 *
                 * @default
                 * "end"
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.position
                 */
                position?: string;

                /**
                 * Data label formatter, which supports string template and
                 * callback function.
                 * In either form, `\n` is supported to represent a new line.
                 *
                 * **String template**
                 *
                 * Model variation includes:
                 *
                 * + `{a}`: series name.
                 * + `{b}`: the name of a data item.
                 * + `{c}`: the value of a data item.
                 * + `{d}`: the percent.
                 * + `{@xxx}: the value of a dimension named`'xxx'`, for example,`{@product}`refers
                 * the value of`'product'\` dimension。
                 * + `{@[n]}: the value of a dimension at the index of`n`, for
                 * example,`{@\[3\]}\` refers the value at dimensions\[3\].
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.formatter
                 */
                formatter?: Function | string;

                /**
                 * text color.
                 *
                 *
                 * @default
                 * ""#fff""
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.color
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.fontStyle
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.fontWeight
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.fontFamily
                 */
                fontFamily?: string;

                /**
                 * font size
                 *
                 *
                 * @default
                 * 12
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.fontSize
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.align
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.verticalAlign
                 */
                verticalAlign?: string;

                /**
                 * Line height of the text fregment.
                 *
                 * If `lineHeight` is not set in `rich`, `lineHeight` in parent
                 * level will be used. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.lineHeight
                 */
                lineHeight?: number;

                /**
                 * Background color of the text fregment.
                 *
                 * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                 *
                 * Or image can be used, for example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.label)
                 *
                 * `width` or `height` can be specified when using background
                 * image, or auto adapted by default.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.backgroundColor
                 */
                backgroundColor?: object | string;

                /**
                 * Border color of the text fregment.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.borderColor
                 */
                borderColor?: string;

                /**
                 * Border width of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.borderWidth
                 */
                borderWidth?: number;

                /**
                 * Border radius of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.borderRadius
                 */
                borderRadius?: number;

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
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.padding
                 */
                padding?: any[] | number;

                /**
                 * Shadow color of the text block.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.shadowColor
                 */
                shadowColor?: string;

                /**
                 * Show blur of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.shadowBlur
                 */
                shadowBlur?: number;

                /**
                 * Shadow X offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.shadowOffsetX
                 */
                shadowOffsetX?: number;

                /**
                 * Shadow Y offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.shadowOffsetY
                 */
                shadowOffsetY?: number;

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
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.width
                 */
                width?: number | string;

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
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.height
                 */
                height?: number | string;

                /**
                 * Storke color of the text.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.textBorderColor
                 */
                textBorderColor?: string;

                /**
                 * Storke line width of the text.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.textBorderWidth
                 */
                textBorderWidth?: number;

                /**
                 * Shadow color of the text itself.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.textShadowColor
                 */
                textShadowColor?: string;

                /**
                 * Shadow blue of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.textShadowBlur
                 */
                textShadowBlur?: number;

                /**
                 * Shadow X offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.textShadowOffsetX
                 */
                textShadowOffsetX?: number;

                /**
                 * Shadow Y offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.textShadowOffsetY
                 */
                textShadowOffsetY?: number;

                /**
                 * "Rich text styles" can be defined in this `rich` property.
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.label)
                 *
                 * For more details, see
                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                 * please.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.label.rich
                 */
                rich?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E
                     */
                    [userStyle: string]: {
                        /**
                         * text color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                         */
                        backgroundColor?: object | string;

                        /**
                         * Border color of the text fregment.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.height
                         */
                        height?: number | string;

                        /**
                         * Storke color of the text.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;
                    };
                };
            };

            /**
             * Emphasis style.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis
             */
            emphasis?: {
                /**
                 * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.lineStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.emphasis.lineStyle)
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.lineStyle.color
                     */
                    color?: string;

                    /**
                     * line width.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.lineStyle.width
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.lineStyle.type
                     */
                    type?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.emphasis.lineStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.lineStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.lineStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.lineStyle.opacity
                     */
                    opacity?: number;
                };

                /**
                 * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.show
                     */
                    show?: boolean;

                    /**
                     * the position of label, options:
                     *
                     * + `'start'`
                     * + `'middle'`
                     * + `'end'`
                     *
                     *
                     * @default
                     * "end"
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.position
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.formatter
                     */
                    formatter?: Function | string;

                    /**
                     * text color.
                     *
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.emphasis.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.backgroundColor
                     */
                    backgroundColor?: object | string;

                    /**
                     * Border color of the text fregment.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.height
                     */
                    height?: number | string;

                    /**
                     * Storke color of the text.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.emphasis.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {
                            /**
                             * text color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };
                };
            };

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
             * 400
             * @see https://echarts.apache.org/en/option.html#series-lines.progressive
             */
            progressive?: number;

            /**
             * If current data amount is over the threshold, "progressive rendering"
             * is enabled.
             *
             *
             * @default
             * 3000
             * @see https://echarts.apache.org/en/option.html#series-lines.progressiveThreshold
             */
            progressiveThreshold?: number;

            /**
             * The data set of lines.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.data
             */
            data?: SeriesLines.DataObject[];

            /**
             * Mark point in a chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint)
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint)
                 *
                 *
                 * @default
                 * "pin"
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.symbol
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.symbolSize
                 */
                symbolSize?: any[] | Function | number;

                /**
                 * Rotate degree of symbol.
                 * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                 * `symbolRotate` value will be ignored, and compulsively use
                 * tangent angle.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.symbolRotate
                 */
                symbolRotate?: number;

                /**
                 * Whether to keep aspect for symbols in the form of `path://`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.symbolKeepAspect
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.symbolOffset
                 */
                symbolOffset?: any[];

                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.silent
                 */
                silent?: boolean;

                /**
                 * Label of mark point.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.formatter
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.position
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.offset
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.formatter
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.color
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.width
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.height
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.emphasis
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.emphasis.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.emphasis.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.itemStyle.emphasis.opacity
                         */
                        opacity?: number;
                    };
                };

                /**
                 * Data array for mark points, each of which is an object.
                 * Here are some ways to assign mark point position.
                 *
                 * 1. Assign coordinate according to container with
                 * [x](https://echarts.apache.org/en/option.html#series-lines.markPoint.data.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-lines.markPoint.data.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * **For example:**
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data
                 */
                data?: {
                    /**
                     * Mark point name.
                     *
                     *
                     * @default
                     * ''
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.name
                     */
                    name?: string;

                    /**
                     * X position according to container, in pixel.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.x
                     */
                    x?: number;

                    /**
                     * Y position according to container, in pixel.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.y
                     */
                    y?: number;

                    /**
                     * Label value, which can be ignored.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.value
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data)
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.symbol
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.symbolSize
                     */
                    symbolSize?: any[] | number;

                    /**
                     * Rotate degree of symbol.
                     * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                     * `symbolRotate` value will be ignored, and compulsively
                     * use tangent angle.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.symbolRotate
                     */
                    symbolRotate?: number;

                    /**
                     * Whether to keep aspect for symbols in the form of `path://`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.symbolKeepAspect
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.symbolOffset
                     */
                    symbolOffset?: any[];

                    /**
                     * Mark point style.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.opacity
                         */
                        opacity?: number;

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.emphasis
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.itemStyle.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.emphasis.color
                             */
                            color?: string;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.emphasis.borderColor
                             */
                            borderColor?: string;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.emphasis.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.emphasis.borderType
                             */
                            borderType?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.itemStyle.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.emphasis.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.emphasis.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.emphasis.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.itemStyle.emphasis.opacity
                             */
                            opacity?: number;
                        };
                    };

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label
                     */
                    label?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.position
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.offset
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.color
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.height
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;
                            };
                        };

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis
                         */
                        emphasis?: {
                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.show
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.emphasis)
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.position
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.distance
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rotate
                             */
                            rotate?: number;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.offset
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.color
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.emphasis)
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.width
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.height
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.emphasis)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.animation
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.animationThreshold
                 */
                animationThreshold?: number;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.animationDuration
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.animationEasing
                 */
                animationEasing?: string;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.animationDelay
                 */
                animationDelay?: Function | number;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint)
                 *
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.animationEasingUpdate
                 */
                animationEasingUpdate?: string;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markPoint)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * prefix
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markPoint.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number;
            };

            /**
             * Use a line in the chart to illustrate.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.markLine
             */
            markLine?: {
                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.silent
                 */
                silent?: boolean;

                /**
                 * Symbol type at the two ends of the mark line.
                 * It can be an array for two ends, or assigned seperately.
                 * See
                 * [data.symbol](https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.symbol)
                 * for more format information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.symbol
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.symbolSize
                 */
                symbolSize?: any[] | number;

                /**
                 * Precison of marking line value, which is useful when displaying
                 * average value mark line.
                 *
                 *
                 * @default
                 * 2
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.precision
                 */
                precision?: number;

                /**
                 * Mark line text.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.label
                 */
                label?: {
                    /**
                     * Whether show label or not.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.label.show
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.label.position
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.label.formatter
                     */
                    formatter?: Function | string;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether show label or not.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.label.emphasis.show
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.label.emphasis.position
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.label.emphasis.formatter
                         */
                        formatter?: Function | string;
                    };
                };

                /**
                 * Mark line style.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.lineStyle)
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.color
                     */
                    color?: string;

                    /**
                     * line width.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.width
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.type
                     */
                    type?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.lineStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * Edge curvature, which supports value from 0 to 1.
                     * The larger the value, the greater the curvature.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.curveness
                     */
                    curveness?: number;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.emphasis
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.lineStyle.emphasis)
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.emphasis.color
                         */
                        color?: string;

                        /**
                         * line width.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.emphasis.width
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.emphasis.type
                         */
                        type?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.lineStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.lineStyle.emphasis.opacity
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
                 * [x](https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data
                 */
                data?: {
                    /**
                     * Data of the starting point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0
                     */
                    0?: {
                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.markLine.data.0.name
                         */
                        name?: string;

                        /**
                         * X position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.x
                         */
                        x?: number;

                        /**
                         * Y position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.y
                         */
                        y?: number;

                        /**
                         * Label value, which can be ignored.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.value
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.0)
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.0)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.symbol
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.symbolSize
                         */
                        symbolSize?: any[] | number;

                        /**
                         * Rotate degree of starting point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.symbolRotate
                         */
                        symbolRotate?: number;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.symbolKeepAspect
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.symbolOffset
                         */
                        symbolOffset?: any[];

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.0.lineStyle)
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.color
                             */
                            color?: string;

                            /**
                             * line width.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.width
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.type
                             */
                            type?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.0.lineStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.curveness
                             */
                            curveness?: number;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.0.lineStyle.emphasis)
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * line width.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.emphasis.type
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.0.lineStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.emphasis.opacity
                                 */
                                opacity?: number;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.lineStyle.emphasis.curveness
                                 */
                                curveness?: number;
                            };
                        };

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.label
                         */
                        label?: {
                            /**
                             * Whether show label or not.
                             *
                             *
                             * @default
                             * "true"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.label.show
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.label.position
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.label.formatter
                             */
                            formatter?: Function | string;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether show label or not.
                                 *
                                 *
                                 * @default
                                 * "true"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.label.emphasis.show
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.label.emphasis.position
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.0.label.emphasis.formatter
                                 */
                                formatter?: Function | string;
                            };
                        };
                    };

                    /**
                     * Data of the ending point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1
                     */
                    1?: {
                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.markLine.data.1.name
                         */
                        name?: string;

                        /**
                         * X position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.x
                         */
                        x?: number;

                        /**
                         * Y position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.y
                         */
                        y?: number;

                        /**
                         * Label value, which can be ignored.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.value
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.1)
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.1)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.symbol
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.symbolSize
                         */
                        symbolSize?: any[] | number;

                        /**
                         * Rotate degree of ending point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.symbolRotate
                         */
                        symbolRotate?: number;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.symbolKeepAspect
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.symbolOffset
                         */
                        symbolOffset?: any[];

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.1.lineStyle)
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.color
                             */
                            color?: string;

                            /**
                             * line width.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.width
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.type
                             */
                            type?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.1.lineStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.curveness
                             */
                            curveness?: number;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.1.lineStyle.emphasis)
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * line width.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.emphasis.type
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.1.lineStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.emphasis.opacity
                                 */
                                opacity?: number;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.lineStyle.emphasis.curveness
                                 */
                                curveness?: number;
                            };
                        };

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.label
                         */
                        label?: {
                            /**
                             * Whether show label or not.
                             *
                             *
                             * @default
                             * "true"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.label.show
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.label.position
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.label.formatter
                             */
                            formatter?: Function | string;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether show label or not.
                                 *
                                 *
                                 * @default
                                 * "true"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.label.emphasis.show
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.label.emphasis.position
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.data.1.label.emphasis.formatter
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.animation
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.animationThreshold
                 */
                animationThreshold?: number;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.animationDuration
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.animationEasing
                 */
                animationEasing?: string;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.animationDelay
                 */
                animationDelay?: Function | number;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine)
                 *
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.animationEasingUpdate
                 */
                animationEasingUpdate?: string;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markLine)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markLine.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number;
            };

            /**
             * Used to mark an area in chart.
             * For example, mark a time interval.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.markArea
             */
            markArea?: {
                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.silent
                 */
                silent?: boolean;

                /**
                 * Label in mark area.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.offset
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.position
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.offset
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.color
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.width
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.height
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.emphasis
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.emphasis.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.emphasis.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.itemStyle.emphasis.opacity
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
                 * [x](https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.y)
                 * , where the unit is pixel (e.g.,
                 * the value is `5`), or percent (e.g.,
                 * the value is `'35%'`).
                 *
                 * The priority follows as above if more than one above definition
                 * used.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data
                 */
                data?: {
                    /**
                     * Specify the left-top point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0
                     */
                    0?: {
                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.markArea.data.0.name
                         */
                        name?: string;

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.x
                         */
                        x?: number;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.y
                         */
                        y?: number;

                        /**
                         * value of the item, not necessary.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.value
                         */
                        value?: number;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.color
                             */
                            color?: string;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.borderColor
                             */
                            borderColor?: string;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.borderType
                             */
                            borderType?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.emphasis.borderType
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.itemStyle.emphasis.opacity
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label
                         */
                        label?: {
                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.show
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.position
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.distance
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rotate
                             */
                            rotate?: number;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.offset
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.color
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.width
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.height
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number;
                                };
                            };

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether to show label.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.show
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.position
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.distance
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rotate
                                 */
                                rotate?: number;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.offset
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich
                                 */
                                rich?: {
                                    /**
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string;

                                        /**
                                         * font size
                                         *
                                         *
                                         * @default
                                         * 12
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1
                     */
                    1?: {
                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.markArea.data.1.name
                         */
                        name?: string;

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.x
                         */
                        x?: number;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.y
                         */
                        y?: number;

                        /**
                         * value of the item, not necessary.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.value
                         */
                        value?: number;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.color
                             */
                            color?: string;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.borderColor
                             */
                            borderColor?: string;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.borderType
                             */
                            borderType?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.emphasis.borderType
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.itemStyle.emphasis.opacity
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label
                         */
                        label?: {
                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.show
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.position
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.distance
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rotate
                             */
                            rotate?: number;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.offset
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.color
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.width
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.height
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number;
                                };
                            };

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether to show label.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.show
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.position
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.distance
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rotate
                                 */
                                rotate?: number;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.offset
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich
                                 */
                                rich?: {
                                    /**
                                     * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string;

                                        /**
                                         * font size
                                         *
                                         *
                                         * @default
                                         * 12
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-lines.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.animation
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.animationThreshold
                 */
                animationThreshold?: number;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.animationDuration
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
                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.animationEasing
                 */
                animationEasing?: string;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.animationDelay
                 */
                animationDelay?: Function | number;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea)
                 *
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.animationEasingUpdate
                 */
                animationEasingUpdate?: string;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.markArea)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.markArea.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number;
            };

            /**
             * `zlevel` value of all graghical elements in lines graph.
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
             * @see https://echarts.apache.org/en/option.html#series-lines.zlevel
             */
            zlevel?: number;

            /**
             * `z` value of all graghical elements in lines graph, which controls
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
             * @see https://echarts.apache.org/en/option.html#series-lines.z
             */
            z?: number;

            /**
             * Whether to ignore mouse events.
             * Default value is false, for triggering and responding to mouse
             * events.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.silent
             */
            silent?: boolean;

            /**
             * Whether to enable animation.
             *
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-lines.animation
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
             * @see https://echarts.apache.org/en/option.html#series-lines.animationThreshold
             */
            animationThreshold?: number;

            /**
             * Duration of the first animation, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines)
             *
             *
             * @default
             * 1000
             * @see https://echarts.apache.org/en/option.html#series-lines.animationDuration
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
             * @see https://echarts.apache.org/en/option.html#series-lines.animationEasing
             */
            animationEasing?: string;

            /**
             * Delay before updating the first animation, which supports callback
             * function for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.animationDelay
             */
            animationDelay?: Function | number;

            /**
             * Time for animation to complete, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines)
             *
             *
             * @default
             * 300
             * @see https://echarts.apache.org/en/option.html#series-lines.animationDurationUpdate
             */
            animationDurationUpdate?: Function | number;

            /**
             * Easing method used for animation.
             *
             *
             * @default
             * "cubicOut"
             * @see https://echarts.apache.org/en/option.html#series-lines.animationEasingUpdate
             */
            animationEasingUpdate?: string;

            /**
             * Delay before updating animation, which supports callback function
             * for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-lines.animationDelayUpdate
             */
            animationDelayUpdate?: Function | number;
        }

        namespace SeriesLines {
            interface DataObject {
                /**
                 * the name of data.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.data.name
                 */
                name?: string;

                /**
                 * An array includes two ore more than two coordinates.
                 * Each coordinate could be `[x, y]` in
                 * [rectangular coordinate](https://echarts.apache.org/en/option.html#grid)
                 * and `[lng, lat]` in
                 * [geographic coordinate](https://echarts.apache.org/en/option.html#geo)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.data.coords
                 */
                coords?: any[];

                /**
                 * The line style of this data item.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-lines.data.lineStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.lineStyle)
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.lineStyle.color
                     */
                    color?: string;

                    /**
                     * line width.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.lineStyle.width
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.lineStyle.type
                     */
                    type?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.lineStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.lineStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.lineStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.lineStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * Edge curvature, which supports value from 0 to 1.
                     * The larger the value, the greater the curvature.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.lineStyle.curveness
                     */
                    curveness?: number;
                };

                /**
                 * @see https://echarts.apache.org/en/option.html#series-lines.data.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.show
                     */
                    show?: boolean;

                    /**
                     * the position of label, options:
                     *
                     * + `'start'`
                     * + `'middle'`
                     * + `'end'`
                     *
                     *
                     * @default
                     * "end"
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.position
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.formatter
                     */
                    formatter?: Function | string;

                    /**
                     * text color.
                     *
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.backgroundColor
                     */
                    backgroundColor?: object | string;

                    /**
                     * Border color of the text fregment.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.height
                     */
                    height?: number | string;

                    /**
                     * Storke color of the text.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {
                            /**
                             * text color.
                             *
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string;

                            /**
                             * Border color of the text fregment.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string;

                            /**
                             * Storke color of the text.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };
                };

                /**
                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis
                 */
                emphasis?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.lineStyle
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.emphasis.lineStyle)
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.lineStyle.color
                         */
                        color?: string;

                        /**
                         * line width.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.lineStyle.width
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.lineStyle.type
                         */
                        type?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.emphasis.lineStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.lineStyle.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.lineStyle.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.lineStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.lineStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.lineStyle.opacity
                         */
                        opacity?: number;

                        /**
                         * Edge curvature, which supports value from 0 to 1.
                         * The larger the value, the greater the curvature.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.lineStyle.curveness
                         */
                        curveness?: number;
                    };

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label
                     */
                    label?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.show
                         */
                        show?: boolean;

                        /**
                         * the position of label, options:
                         *
                         * + `'start'`
                         * + `'middle'`
                         * + `'end'`
                         *
                         *
                         * @default
                         * "end"
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.position
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.formatter
                         */
                        formatter?: Function | string;

                        /**
                         * text color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.color
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.emphasis.label)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.backgroundColor
                         */
                        backgroundColor?: object | string;

                        /**
                         * Border color of the text fregment.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.height
                         */
                        height?: number | string;

                        /**
                         * Storke color of the text.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.emphasis.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {
                                /**
                                 * text color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-lines.lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string;

                                /**
                                 * Storke color of the text.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-lines.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;
                            };
                        };
                    };
                };
            }
        }
    }
}
