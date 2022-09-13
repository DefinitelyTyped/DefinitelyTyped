declare namespace echarts {
    namespace EChartOption {
        /**
         * [Sunburst Chart](https://en.wikipedia.org/wiki/Pie_chart#Ring_chart_/_Sunburst_chart_/_Multilevel_pie_chart)
         * is composed of multiple pie charts.
         * From the view of data structure, inner rings are the parent nodes
         * of outer rings.
         * Therefore, it can show the partial-overall relationship as
         * [Pie](https://echarts.apache.org/en/option.html#series-pie)
         * charts, and also level relation as
         * [Treemap](https://echarts.apache.org/en/option.html#series-treemap)
         * charts.
         *
         * **For example:**
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst)
         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst)
         *
         * **Data mining**
         *
         * Sunburst charts support data mining by default.
         * That means, when a user clicks a sector, it will be used as root
         * node, and there will be a circle in the center for return to parent
         * node. If data mining is not needed, it can be disabled by
         * [series-sunburst.nodeClick](https://echarts.apache.org/en/option.html#series-treemap.nodeClick)
         * .
         *
         *
         * @see https://echarts.apache.org/en/option.html#series-sunburst
         */
        interface SeriesSunburst {
            /**
             * @default
             * "sunburst"
             * @see https://echarts.apache.org/en/option.html#series-sunburst.type
             */
            type?: string | undefined;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-sunburst.id
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
             * @see https://echarts.apache.org/en/option.html#series-sunburst.name
             */
            name?: string | undefined;

            /**
             * `zlevel` value of all graghical elements in .
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
             * @see https://echarts.apache.org/en/option.html#series-sunburst.zlevel
             */
            zlevel?: number | undefined;

            /**
             * `z` value of all graghical elements in , which controls order
             * of drawing graphical components.
             * Components with smaller `z` values may be overwritten by those
             * with larger `z` values.
             *
             * `z` has a lower priority to `zlevel`, and will not create new
             * Canvas.
             *
             *
             * @default
             * 2
             * @see https://echarts.apache.org/en/option.html#series-sunburst.z
             */
            z?: number | undefined;

            /**
             * Center position of Sunburst chart, the first of which is the
             * horizontal position, and the second is the vertical position.
             *
             * Percentage is supported.
             * When set in percentage, the item is relative to the container
             * width, and the second item to the height.
             *
             * **Example:**
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst)
             *
             *
             * @default
             * ['50%', '50%']
             * @see https://echarts.apache.org/en/option.html#series-sunburst.center
             */
            center?: any[] | undefined;

            /**
             * Radius of Sunburst chart. Value can be:
             *
             * + `number`: Specify outside radius directly.
             * + `string`: For example, `'20%'`, means that the outside radius
             * is 20% of the viewport size (the little one between width and
             * height of the chart container).
             * + `Array.<number|string>`:
             * The first item specifies the inside radius, and the second item
             * specifies the outside radius.
             * Each item follows the definitions above.
             *
             *
             * @default
             * [0, '75%']
             * @see https://echarts.apache.org/en/option.html#series-sunburst.radius
             */
            radius?: any[] | number | string | undefined;

            /**
             * The data structure of
             * [series-sunburst.data](https://echarts.apache.org/en/option.html#series-sunburst.data)
             * is like tree. For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst)
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-sunburst.data
             */
            data?: SeriesSunburst.DataObject[] | undefined;

            /**
             * `label` sets the text style for every sectors.
             *
             * **Priority:
             * [series.data.label](https://echarts.apache.org/en/option.html#series-sunburst.data.label)
             * >
             * [series.levels.label](https://echarts.apache.org/en/option.html#series-sunburst.levels.label)
             * >
             * [series.label](https://echarts.apache.org/en/option.html#series-sunburst.label)
             * .**
             *
             * Text label of , to explain some data information about graphic
             * item like value, name and so on.
             * `label` is placed under `itemStyle` in ECharts 2.x.
             * In ECharts 3, to make the configuration structure flatter, `label`is
             * taken to be at the same level with `itemStyle`, and has `emphasis`
             * as `itemStyle` does.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-sunburst.label
             */
            label?: {
                /**
                 * If it is `number` type, then is stands for rotation, from
                 * -90 degrees to 90 degrees, and positive values stand for
                 * counterclockwise.
                 *
                 * Besides, it can be string `'radial'`, standing for radial
                 * rotation; or `'tangential'`, standing for tangential rotation.
                 *
                 * By default, it is `'radial'`.
                 * If no rotation is wanted, it can be set to `0`.
                 *
                 * The following example shows different `rotate` settings:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.label)
                 *
                 *
                 * @default
                 * "radial"
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rotate
                 */
                rotate?: number | string | undefined;

                /**
                 * Align of text, which can be `'left'`, `'center'`, or `'right'`.
                 * Note that `'left'` stands for inner side, and `'right'` stands
                 * for outer side.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.label)
                 *
                 *
                 * @default
                 * "center"
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.align
                 */
                align?: string | undefined;

                /**
                 * If angle of data piece is smaller than this value (in degrees),
                 * then text is not displayed.
                 * This is used for hiding text for small piece of data.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.minAngle
                 */
                minAngle?: number | undefined;

                /**
                 * Whether to show label.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.show
                 */
                show?: boolean | undefined;

                /**
                 * Label position.
                 *
                 * **Followings are the options:**
                 *
                 * + \[x, y\]
                 *
                 * Use relative percentage, or absolute pixel values to represent
                 * position of label relative to top-left corner of bounding
                 * box. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.label)
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
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.position
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
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.distance
                 */
                distance?: number | undefined;

                /**
                 * Whether to move text slightly.
                 * For example: `[30, 40]` means move `30` horizontally and
                 * move `40` vertically.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.offset
                 */
                offset?: any[] | undefined;

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
                 * + `{@xxx}: the value of a dimension named`'xxx'`, for example,`{@product}`refers
                 * the value of`'product'\` dimension。
                 * + `{@[n]}: the value of a dimension at the index of`n`, for
                 * example,`{@\[3\]}\` refers the value at dimensions\[3\].
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.formatter
                 */
                formatter?: Function | string | undefined;

                /**
                 * text color.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 *
                 * @default
                 * ""#fff""
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.color
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
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.fontStyle
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
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.fontWeight
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
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.fontFamily
                 */
                fontFamily?: string | undefined;

                /**
                 * font size
                 *
                 *
                 * @default
                 * 12
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.fontSize
                 */
                fontSize?: number | undefined;

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
                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.verticalAlign
                 */
                verticalAlign?: string | undefined;

                /**
                 * Line height of the text fregment.
                 *
                 * If `lineHeight` is not set in `rich`, `lineHeight` in parent
                 * level will be used. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.lineHeight
                 */
                lineHeight?: number | undefined;

                /**
                 * Background color of the text fregment.
                 *
                 * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                 *
                 * Or image can be used, for example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.label)
                 *
                 * `width` or `height` can be specified when using background
                 * image, or auto adapted by default.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.backgroundColor
                 */
                backgroundColor?: object | string | undefined;

                /**
                 * Border color of the text fregment.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.borderColor
                 */
                borderColor?: string | undefined;

                /**
                 * Border width of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Border radius of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.borderRadius
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
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.padding
                 */
                padding?: any[] | number | undefined;

                /**
                 * Shadow color of the text block.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.shadowColor
                 */
                shadowColor?: string | undefined;

                /**
                 * Show blur of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.shadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.width
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
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.height
                 */
                height?: number | string | undefined;

                /**
                 * Storke color of the text.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.textBorderColor
                 */
                textBorderColor?: string | undefined;

                /**
                 * Storke line width of the text.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.textBorderWidth
                 */
                textBorderWidth?: number | undefined;

                /**
                 * Shadow color of the text itself.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.textShadowColor
                 */
                textShadowColor?: string | undefined;

                /**
                 * Shadow blue of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.textShadowBlur
                 */
                textShadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.textShadowOffsetX
                 */
                textShadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.textShadowOffsetY
                 */
                textShadowOffsetY?: number | undefined;

                /**
                 * "Rich text styles" can be defined in this `rich` property.
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.label)
                 *
                 * For more details, see
                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                 * please.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich
                 */
                rich?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E
                     */
                    [userStyle: string]: {
                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;
                    };
                } | undefined;
            } | undefined;

            /**
             * Style of Sunburst sectors.
             *
             * Style can be set in
             * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
             * for sectors of this series, or
             * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
             * for the whole level, or
             * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
             * for single sector. If
             * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
             * is defined, it will cover the setting of
             * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
             * and
             * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
             * .
             *
             * **Priority:
             * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
             * >
             * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
             * >
             * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
             * .**
             *
             * In ECharts, _emphasis_ is for styles when mouse hovers.
             * For Sunburst charts, there are two extra states: _highlight_
             * for highlighting items that relates to the emphasized one, and
             * _downplay_ for others when emphasizing an item. See
             * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
             * .
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-sunburst.itemStyle
             */
            itemStyle?: {
                /**
                 * color. Color is taken from
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
                 * > [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.itemStyle)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.itemStyle.color
                 */
                color?: EChartOption.Color | undefined;

                /**
                 * border color, whose format is similar to that of `color`.
                 *
                 *
                 * @default
                 * "white"
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.itemStyle.borderColor
                 */
                borderColor?: EChartOption.Color | undefined;

                /**
                 * border width. No border when it is set to be 0.
                 *
                 *
                 * @default
                 * 1
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.itemStyle.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                 * `'solid'` by default.
                 *
                 *
                 * @default
                 * "solid"
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.itemStyle.borderType
                 */
                borderType?: string | undefined;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.itemStyle)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.itemStyle.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.itemStyle.shadowColor
                 */
                shadowColor?: EChartOption.Color | undefined;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.itemStyle.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.itemStyle.shadowOffsetY
                 */
                shadowOffsetY?: number | undefined;

                /**
                 * Opacity of the component.
                 * Supports value from 0 to 1, and the component will not be
                 * drawn when set to 0.
                 *
                 *
                 * @default
                 * 1
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.itemStyle.opacity
                 */
                opacity?: number | undefined;
            } | undefined;

            /**
             * When mouse hovers a sector, the sector is emphasized.
             * **If `highlightPolicy` is set to be `'descendant'`, then the
             * sector and its descendant will be _highlighted_, and others will
             * be _downplayed_.
             * If `highlightPolicy` is `'ancestor'`, then the sector and its
             * ancestors will be highlighted.
             * If it is set to be `'self'`, then the sector will be highlighted
             * and others downplayed.
             * If it is set to be `'none'`, then others will not be downplayed.**
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst)
             *
             * The `highlightPolicy` value above is the default value `'descendant'`.
             * We use `dispatchAction` to highlight certain sector.
             * Target sector will use the style of `emphasis`, and related sectors
             * decided by `highlightPolicy` uses the style of `highlight`, and
             * others use `downplay`.
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst)
             *
             * If `highlightPolicy` is set to be `'ancestor'`, then the result
             * looks like:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst)
             *
             *
             * @default
             * "descendant"
             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy
             */
            highlightPolicy?: string | undefined;

            /**
             * The action of clicking a sector, which can be:
             *
             * + `false`: nothing happens.
             * + `'rootToNode'`: use the clicked sector as root.
             * + `'link'`：if
             * [link](https://echarts.apache.org/en/option.html#series-sunburst.data.link)
             * is set, the page will redirect to it.
             *
             *
             * @default
             * "rootToNode"
             * @see https://echarts.apache.org/en/option.html#series-sunburst.nodeClick
             */
            nodeClick?: boolean | string | undefined;

            /**
             * Sorting method that sectors use based on
             * [`value`](https://echarts.apache.org/en/option.html#series-sunburst.data.value)
             * , which is the sum of children when not set.
             * The default value `'desc'` states for descending order, while
             * it can also be set to be `'asc'` for ascending order, or `null`
             * for not sorting, or callback function like:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst)
             *
             *
             * @default
             * "desc"
             * @see https://echarts.apache.org/en/option.html#series-sunburst.sort
             */
            sort?: Function | string | undefined;

            /**
             * If there is no `name`, whether need to render it.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-sunburst.renderLabelForZeroData
             */
            renderLabelForZeroData?: boolean | undefined;

            /**
             * Item style when mouse is hovering. See
             * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
             * .
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis
             */
            emphasis?: {
                /**
                 * `label` sets the text style for every sectors.
                 *
                 * **Priority:
                 * [series.data.label](https://echarts.apache.org/en/option.html#series-sunburst.data.label)
                 * >
                 * [series.levels.label](https://echarts.apache.org/en/option.html#series-sunburst.levels.label)
                 * >
                 * [series.label](https://echarts.apache.org/en/option.html#series-sunburst.label)
                 * .**
                 *
                 * Text label of , to explain some data information about graphic
                 * item like value, name and so on.
                 * `label` is placed under `itemStyle` in ECharts 2.x.
                 * In ECharts 3, to make the configuration structure flatter,
                 * `label`is taken to be at the same level with `itemStyle`,
                 * and has `emphasis` as `itemStyle` does.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label
                 */
                label?: {
                    /**
                     * If it is `number` type, then is stands for rotation,
                     * from -90 degrees to 90 degrees, and positive values stand
                     * for counterclockwise.
                     *
                     * Besides, it can be string `'radial'`, standing for radial
                     * rotation; or `'tangential'`, standing for tangential
                     * rotation.
                     *
                     * By default, it is `'radial'`.
                     * If no rotation is wanted, it can be set to `0`.
                     *
                     * The following example shows different `rotate` settings:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.label)
                     *
                     *
                     * @default
                     * "radial"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rotate
                     */
                    rotate?: number | string | undefined;

                    /**
                     * Align of text, which can be `'left'`, `'center'`, or
                     * `'right'`.
                     * Note that `'left'` stands for inner side, and `'right'`
                     * stands for outer side.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.label)
                     *
                     *
                     * @default
                     * "center"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.align
                     */
                    align?: string | undefined;

                    /**
                     * If angle of data piece is smaller than this value (in
                     * degrees), then text is not displayed.
                     * This is used for hiding text for small piece of data.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.minAngle
                     */
                    minAngle?: number | undefined;

                    /**
                     * Whether to show label.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.distance
                     */
                    distance?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.formatter
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.fontSize
                     */
                    fontSize?: number | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;
                } | undefined;

                /**
                 * Style of Sunburst sectors.
                 *
                 * Style can be set in
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * for sectors of this series, or
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * for the whole level, or
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * for single sector. If
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * is defined, it will cover the setting of
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * and
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * .
                 *
                 * **Priority:
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * >
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * >
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * .**
                 *
                 * In ECharts, _emphasis_ is for styles when mouse hovers.
                 * For Sunburst charts, there are two extra states: _highlight_
                 * for highlighting items that relates to the emphasized one,
                 * and _downplay_ for others when emphasizing an item. See
                 * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.itemStyle
                 */
                itemStyle?: {
                    /**
                     * color. Color is taken from
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "white"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @default
                     * 1
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.emphasis.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @default
                     * 1
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.emphasis.itemStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;
            } | undefined;

            /**
             * Item style when mouse is hovering related items. See
             * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
             * .
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight
             */
            highlight?: {
                /**
                 * `label` sets the text style for every sectors.
                 *
                 * **Priority:
                 * [series.data.label](https://echarts.apache.org/en/option.html#series-sunburst.data.label)
                 * >
                 * [series.levels.label](https://echarts.apache.org/en/option.html#series-sunburst.levels.label)
                 * >
                 * [series.label](https://echarts.apache.org/en/option.html#series-sunburst.label)
                 * .**
                 *
                 * Text label of , to explain some data information about graphic
                 * item like value, name and so on.
                 * `label` is placed under `itemStyle` in ECharts 2.x.
                 * In ECharts 3, to make the configuration structure flatter,
                 * `label`is taken to be at the same level with `itemStyle`,
                 * and has `emphasis` as `itemStyle` does.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label
                 */
                label?: {
                    /**
                     * If it is `number` type, then is stands for rotation,
                     * from -90 degrees to 90 degrees, and positive values stand
                     * for counterclockwise.
                     *
                     * Besides, it can be string `'radial'`, standing for radial
                     * rotation; or `'tangential'`, standing for tangential
                     * rotation.
                     *
                     * By default, it is `'radial'`.
                     * If no rotation is wanted, it can be set to `0`.
                     *
                     * The following example shows different `rotate` settings:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.label)
                     *
                     *
                     * @default
                     * "radial"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rotate
                     */
                    rotate?: number | string | undefined;

                    /**
                     * Align of text, which can be `'left'`, `'center'`, or
                     * `'right'`.
                     * Note that `'left'` stands for inner side, and `'right'`
                     * stands for outer side.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.label)
                     *
                     *
                     * @default
                     * "center"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.align
                     */
                    align?: string | undefined;

                    /**
                     * If angle of data piece is smaller than this value (in
                     * degrees), then text is not displayed.
                     * This is used for hiding text for small piece of data.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.minAngle
                     */
                    minAngle?: number | undefined;

                    /**
                     * Whether to show label.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.distance
                     */
                    distance?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.formatter
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.fontSize
                     */
                    fontSize?: number | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;
                } | undefined;

                /**
                 * Style of Sunburst sectors.
                 *
                 * Style can be set in
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * for sectors of this series, or
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * for the whole level, or
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * for single sector. If
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * is defined, it will cover the setting of
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * and
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * .
                 *
                 * **Priority:
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * >
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * >
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * .**
                 *
                 * In ECharts, _emphasis_ is for styles when mouse hovers.
                 * For Sunburst charts, there are two extra states: _highlight_
                 * for highlighting items that relates to the emphasized one,
                 * and _downplay_ for others when emphasizing an item. See
                 * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.itemStyle
                 */
                itemStyle?: {
                    /**
                     * color. Color is taken from
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "white"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @default
                     * 1
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.highlight.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @default
                     * 1
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.highlight.itemStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;
            } | undefined;

            /**
             * Item style when mouse is hovering unrelated items. See
             * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
             * .
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay
             */
            downplay?: {
                /**
                 * `label` sets the text style for every sectors.
                 *
                 * **Priority:
                 * [series.data.label](https://echarts.apache.org/en/option.html#series-sunburst.data.label)
                 * >
                 * [series.levels.label](https://echarts.apache.org/en/option.html#series-sunburst.levels.label)
                 * >
                 * [series.label](https://echarts.apache.org/en/option.html#series-sunburst.label)
                 * .**
                 *
                 * Text label of , to explain some data information about graphic
                 * item like value, name and so on.
                 * `label` is placed under `itemStyle` in ECharts 2.x.
                 * In ECharts 3, to make the configuration structure flatter,
                 * `label`is taken to be at the same level with `itemStyle`,
                 * and has `emphasis` as `itemStyle` does.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label
                 */
                label?: {
                    /**
                     * If it is `number` type, then is stands for rotation,
                     * from -90 degrees to 90 degrees, and positive values stand
                     * for counterclockwise.
                     *
                     * Besides, it can be string `'radial'`, standing for radial
                     * rotation; or `'tangential'`, standing for tangential
                     * rotation.
                     *
                     * By default, it is `'radial'`.
                     * If no rotation is wanted, it can be set to `0`.
                     *
                     * The following example shows different `rotate` settings:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.label)
                     *
                     *
                     * @default
                     * "radial"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rotate
                     */
                    rotate?: number | string | undefined;

                    /**
                     * Align of text, which can be `'left'`, `'center'`, or
                     * `'right'`.
                     * Note that `'left'` stands for inner side, and `'right'`
                     * stands for outer side.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.label)
                     *
                     *
                     * @default
                     * "center"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.align
                     */
                    align?: string | undefined;

                    /**
                     * If angle of data piece is smaller than this value (in
                     * degrees), then text is not displayed.
                     * This is used for hiding text for small piece of data.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.minAngle
                     */
                    minAngle?: number | undefined;

                    /**
                     * Whether to show label.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.distance
                     */
                    distance?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.formatter
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.fontSize
                     */
                    fontSize?: number | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;
                } | undefined;

                /**
                 * Style of Sunburst sectors.
                 *
                 * Style can be set in
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * for sectors of this series, or
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * for the whole level, or
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * for single sector. If
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * is defined, it will cover the setting of
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * and
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * .
                 *
                 * **Priority:
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * >
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * >
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * .**
                 *
                 * In ECharts, _emphasis_ is for styles when mouse hovers.
                 * For Sunburst charts, there are two extra states: _highlight_
                 * for highlighting items that relates to the emphasized one,
                 * and _downplay_ for others when emphasizing an item. See
                 * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.itemStyle
                 */
                itemStyle?: {
                    /**
                     * color. Color is taken from
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "white"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @default
                     * 1
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.downplay.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @default
                     * 1
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.downplay.itemStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;
            } | undefined;

            /**
             * **Multiple levels**
             *
             * Sunburst chart has a leveled structure.
             * To make it convenient, we provide a `levels` option, which is
             * an array.
             * The first element of it is for returning to parent node when
             * data mining.
             * The following elements are for levels from center to outside.
             *
             * For example, if we don't want the data mining, and want to set
             * the most inside sector to be red, and text to be blue, we can
             * set the option like:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst)
             *
             *
             * @default
             * []
             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels
             */
            levels?: {
                /**
                 * `label` sets the text style for every sectors.
                 *
                 * **Priority:
                 * [series.data.label](https://echarts.apache.org/en/option.html#series-sunburst.data.label)
                 * >
                 * [series.levels.label](https://echarts.apache.org/en/option.html#series-sunburst.levels.label)
                 * >
                 * [series.label](https://echarts.apache.org/en/option.html#series-sunburst.label)
                 * .**
                 *
                 * Text label of , to explain some data information about graphic
                 * item like value, name and so on.
                 * `label` is placed under `itemStyle` in ECharts 2.x.
                 * In ECharts 3, to make the configuration structure flatter,
                 * `label`is taken to be at the same level with `itemStyle`,
                 * and has `emphasis` as `itemStyle` does.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label
                 */
                label?: {
                    /**
                     * If it is `number` type, then is stands for rotation,
                     * from -90 degrees to 90 degrees, and positive values stand
                     * for counterclockwise.
                     *
                     * Besides, it can be string `'radial'`, standing for radial
                     * rotation; or `'tangential'`, standing for tangential
                     * rotation.
                     *
                     * By default, it is `'radial'`.
                     * If no rotation is wanted, it can be set to `0`.
                     *
                     * The following example shows different `rotate` settings:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.label)
                     *
                     *
                     * @default
                     * "radial"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rotate
                     */
                    rotate?: number | string | undefined;

                    /**
                     * Align of text, which can be `'left'`, `'center'`, or
                     * `'right'`.
                     * Note that `'left'` stands for inner side, and `'right'`
                     * stands for outer side.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.label)
                     *
                     *
                     * @default
                     * "center"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.align
                     */
                    align?: string | undefined;

                    /**
                     * If angle of data piece is smaller than this value (in
                     * degrees), then text is not displayed.
                     * This is used for hiding text for small piece of data.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.minAngle
                     */
                    minAngle?: number | undefined;

                    /**
                     * Whether to show label.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.distance
                     */
                    distance?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.formatter
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.fontSize
                     */
                    fontSize?: number | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;
                } | undefined;

                /**
                 * Style of Sunburst sectors.
                 *
                 * Style can be set in
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * for sectors of this series, or
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * for the whole level, or
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * for single sector. If
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * is defined, it will cover the setting of
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * and
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * .
                 *
                 * **Priority:
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * >
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * >
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * .**
                 *
                 * In ECharts, _emphasis_ is for styles when mouse hovers.
                 * For Sunburst charts, there are two extra states: _highlight_
                 * for highlighting items that relates to the emphasized one,
                 * and _downplay_ for others when emphasizing an item. See
                 * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle
                 */
                itemStyle?: {
                    /**
                     * color. Color is taken from
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "white"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @default
                     * 1
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @default
                     * 1
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;

                /**
                 * Item style when mouse is hovering. See
                 * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis
                 */
                emphasis?: {
                    /**
                     * `label` sets the text style for every sectors.
                     *
                     * **Priority:
                     * [series.data.label](https://echarts.apache.org/en/option.html#series-sunburst.data.label)
                     * >
                     * [series.levels.label](https://echarts.apache.org/en/option.html#series-sunburst.levels.label)
                     * >
                     * [series.label](https://echarts.apache.org/en/option.html#series-sunburst.label)
                     * .**
                     *
                     * Text label of , to explain some data information about
                     * graphic item like value, name and so on.
                     * `label` is placed under `itemStyle` in ECharts 2.x.
                     * In ECharts 3, to make the configuration structure flatter,
                     * `label`is taken to be at the same level with `itemStyle`,
                     * and has `emphasis` as `itemStyle` does.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label
                     */
                    label?: {
                        /**
                         * If it is `number` type, then is stands for rotation,
                         * from -90 degrees to 90 degrees, and positive values
                         * stand for counterclockwise.
                         *
                         * Besides, it can be string `'radial'`, standing for
                         * radial rotation; or `'tangential'`, standing for
                         * tangential rotation.
                         *
                         * By default, it is `'radial'`.
                         * If no rotation is wanted, it can be set to `0`.
                         *
                         * The following example shows different `rotate` settings:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.label)
                         *
                         *
                         * @default
                         * "radial"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rotate
                         */
                        rotate?: number | string | undefined;

                        /**
                         * Align of text, which can be `'left'`, `'center'`,
                         * or `'right'`.
                         * Note that `'left'` stands for inner side, and `'right'`
                         * stands for outer side.
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.label)
                         *
                         *
                         * @default
                         * "center"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.align
                         */
                        align?: string | undefined;

                        /**
                         * If angle of data piece is smaller than this value
                         * (in degrees), then text is not displayed.
                         * This is used for hiding text for small piece of data.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.minAngle
                         */
                        minAngle?: number | undefined;

                        /**
                         * Whether to show label.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.position
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.distance
                         */
                        distance?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.offset
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.formatter
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.color
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.fontSize
                         */
                        fontSize?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.height
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;

                    /**
                     * Style of Sunburst sectors.
                     *
                     * Style can be set in
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * for sectors of this series, or
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * for the whole level, or
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * for single sector. If
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * is defined, it will cover the setting of
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * and
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * .
                     *
                     * **Priority:
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * >
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * >
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * .**
                     *
                     * In ECharts, _emphasis_ is for styles when mouse hovers.
                     * For Sunburst charts, there are two extra states: _highlight_
                     * for highlighting items that relates to the emphasized
                     * one, and _downplay_ for others when emphasizing an item.
                     * See
                     * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.itemStyle
                     */
                    itemStyle?: {
                        /**
                         * color. Color is taken from
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.itemStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "white"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.itemStyle.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.itemStyle.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.itemStyle.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.emphasis.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.itemStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.itemStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.emphasis.itemStyle.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Item style when mouse is hovering related items. See
                 * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight
                 */
                highlight?: {
                    /**
                     * `label` sets the text style for every sectors.
                     *
                     * **Priority:
                     * [series.data.label](https://echarts.apache.org/en/option.html#series-sunburst.data.label)
                     * >
                     * [series.levels.label](https://echarts.apache.org/en/option.html#series-sunburst.levels.label)
                     * >
                     * [series.label](https://echarts.apache.org/en/option.html#series-sunburst.label)
                     * .**
                     *
                     * Text label of , to explain some data information about
                     * graphic item like value, name and so on.
                     * `label` is placed under `itemStyle` in ECharts 2.x.
                     * In ECharts 3, to make the configuration structure flatter,
                     * `label`is taken to be at the same level with `itemStyle`,
                     * and has `emphasis` as `itemStyle` does.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label
                     */
                    label?: {
                        /**
                         * If it is `number` type, then is stands for rotation,
                         * from -90 degrees to 90 degrees, and positive values
                         * stand for counterclockwise.
                         *
                         * Besides, it can be string `'radial'`, standing for
                         * radial rotation; or `'tangential'`, standing for
                         * tangential rotation.
                         *
                         * By default, it is `'radial'`.
                         * If no rotation is wanted, it can be set to `0`.
                         *
                         * The following example shows different `rotate` settings:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.label)
                         *
                         *
                         * @default
                         * "radial"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rotate
                         */
                        rotate?: number | string | undefined;

                        /**
                         * Align of text, which can be `'left'`, `'center'`,
                         * or `'right'`.
                         * Note that `'left'` stands for inner side, and `'right'`
                         * stands for outer side.
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.label)
                         *
                         *
                         * @default
                         * "center"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.align
                         */
                        align?: string | undefined;

                        /**
                         * If angle of data piece is smaller than this value
                         * (in degrees), then text is not displayed.
                         * This is used for hiding text for small piece of data.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.minAngle
                         */
                        minAngle?: number | undefined;

                        /**
                         * Whether to show label.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.position
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.distance
                         */
                        distance?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.offset
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.formatter
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.color
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.fontSize
                         */
                        fontSize?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.height
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;

                    /**
                     * Style of Sunburst sectors.
                     *
                     * Style can be set in
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * for sectors of this series, or
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * for the whole level, or
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * for single sector. If
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * is defined, it will cover the setting of
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * and
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * .
                     *
                     * **Priority:
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * >
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * >
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * .**
                     *
                     * In ECharts, _emphasis_ is for styles when mouse hovers.
                     * For Sunburst charts, there are two extra states: _highlight_
                     * for highlighting items that relates to the emphasized
                     * one, and _downplay_ for others when emphasizing an item.
                     * See
                     * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.itemStyle
                     */
                    itemStyle?: {
                        /**
                         * color. Color is taken from
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.itemStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "white"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.itemStyle.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.itemStyle.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.itemStyle.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.highlight.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.itemStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.itemStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.highlight.itemStyle.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Item style when mouse is hovering unrelated items. See
                 * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay
                 */
                downplay?: {
                    /**
                     * `label` sets the text style for every sectors.
                     *
                     * **Priority:
                     * [series.data.label](https://echarts.apache.org/en/option.html#series-sunburst.data.label)
                     * >
                     * [series.levels.label](https://echarts.apache.org/en/option.html#series-sunburst.levels.label)
                     * >
                     * [series.label](https://echarts.apache.org/en/option.html#series-sunburst.label)
                     * .**
                     *
                     * Text label of , to explain some data information about
                     * graphic item like value, name and so on.
                     * `label` is placed under `itemStyle` in ECharts 2.x.
                     * In ECharts 3, to make the configuration structure flatter,
                     * `label`is taken to be at the same level with `itemStyle`,
                     * and has `emphasis` as `itemStyle` does.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label
                     */
                    label?: {
                        /**
                         * If it is `number` type, then is stands for rotation,
                         * from -90 degrees to 90 degrees, and positive values
                         * stand for counterclockwise.
                         *
                         * Besides, it can be string `'radial'`, standing for
                         * radial rotation; or `'tangential'`, standing for
                         * tangential rotation.
                         *
                         * By default, it is `'radial'`.
                         * If no rotation is wanted, it can be set to `0`.
                         *
                         * The following example shows different `rotate` settings:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.label)
                         *
                         *
                         * @default
                         * "radial"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rotate
                         */
                        rotate?: number | string | undefined;

                        /**
                         * Align of text, which can be `'left'`, `'center'`,
                         * or `'right'`.
                         * Note that `'left'` stands for inner side, and `'right'`
                         * stands for outer side.
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.label)
                         *
                         *
                         * @default
                         * "center"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.align
                         */
                        align?: string | undefined;

                        /**
                         * If angle of data piece is smaller than this value
                         * (in degrees), then text is not displayed.
                         * This is used for hiding text for small piece of data.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.minAngle
                         */
                        minAngle?: number | undefined;

                        /**
                         * Whether to show label.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.position
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.distance
                         */
                        distance?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.offset
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.formatter
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.color
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.fontSize
                         */
                        fontSize?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.height
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;

                    /**
                     * Style of Sunburst sectors.
                     *
                     * Style can be set in
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * for sectors of this series, or
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * for the whole level, or
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * for single sector. If
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * is defined, it will cover the setting of
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * and
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * .
                     *
                     * **Priority:
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * >
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * >
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * .**
                     *
                     * In ECharts, _emphasis_ is for styles when mouse hovers.
                     * For Sunburst charts, there are two extra states: _highlight_
                     * for highlighting items that relates to the emphasized
                     * one, and _downplay_ for others when emphasizing an item.
                     * See
                     * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.itemStyle
                     */
                    itemStyle?: {
                        /**
                         * color. Color is taken from
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.itemStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "white"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.itemStyle.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.itemStyle.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.itemStyle.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.levels.downplay.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.itemStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.itemStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.levels.downplay.itemStyle.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;

            /**
             * Whether to enable animation.
             *
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-sunburst.animation
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
             * @see https://echarts.apache.org/en/option.html#series-sunburst.animationThreshold
             */
            animationThreshold?: number | undefined;

            /**
             * Duration of the first animation, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst)
             *
             *
             * @default
             * 1000
             * @see https://echarts.apache.org/en/option.html#series-sunburst.animationDuration
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
             * @see https://echarts.apache.org/en/option.html#series-sunburst.animationEasing
             */
            animationEasing?: string | undefined;

            /**
             * Delay before updating the first animation, which supports callback
             * function for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-sunburst.animationDelay
             */
            animationDelay?: Function | number | undefined;

            /**
             * Time for animation to complete, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst)
             *
             *
             * @default
             * 500
             * @see https://echarts.apache.org/en/option.html#series-sunburst.animationDurationUpdate
             */
            animationDurationUpdate?: Function | number | undefined;

            /**
             * Easing method used for animation.
             *
             *
             * @default
             * "cubicOut"
             * @see https://echarts.apache.org/en/option.html#series-sunburst.animationEasingUpdate
             */
            animationEasingUpdate?: string | undefined;

            /**
             * Delay before updating animation, which supports callback function
             * for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-sunburst.animationDelayUpdate
             */
            animationDelayUpdate?: Function | number | undefined;
        }

        namespace SeriesSunburst {
            interface DataObject {
                /**
                 * Value for each item.
                 * If contains children, value can be left unset, and sum of
                 * children values will be used in this case.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.value
                 */
                value?: number | undefined;

                /**
                 * Name displayed in each sector.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.name
                 */
                name?: string | undefined;

                /**
                 * Link address that redirects to when this sector is clicked.
                 * Only useful when
                 * [series-sunburst.nodeClick](https://echarts.apache.org/en/option.html#series-treemap.nodeClick)
                 * is set to be `'link'`.
                 *
                 * See
                 * [series-sunburst.data.target](https://echarts.apache.org/en/option.html#series-sunburst.data.target)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.link
                 */
                link?: string | undefined;

                /**
                 * Like `target` attribute of HTML `<a>`, which can either be
                 * `'blank'` or `'self'`. See
                 * [series-sunburst.data.link](https://echarts.apache.org/en/option.html#series-sunburst.data.link)
                 * .
                 *
                 *
                 * @default
                 * "blank"
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.target
                 */
                target?: string | undefined;

                /**
                 * `label` sets the text style for every sectors.
                 *
                 * **Priority:
                 * [series.data.label](https://echarts.apache.org/en/option.html#series-sunburst.data.label)
                 * >
                 * [series.levels.label](https://echarts.apache.org/en/option.html#series-sunburst.levels.label)
                 * >
                 * [series.label](https://echarts.apache.org/en/option.html#series-sunburst.label)
                 * .**
                 *
                 * Text label of , to explain some data information about graphic
                 * item like value, name and so on.
                 * `label` is placed under `itemStyle` in ECharts 2.x.
                 * In ECharts 3, to make the configuration structure flatter,
                 * `label`is taken to be at the same level with `itemStyle`,
                 * and has `emphasis` as `itemStyle` does.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label
                 */
                label?: {
                    /**
                     * If it is `number` type, then is stands for rotation,
                     * from -90 degrees to 90 degrees, and positive values stand
                     * for counterclockwise.
                     *
                     * Besides, it can be string `'radial'`, standing for radial
                     * rotation; or `'tangential'`, standing for tangential
                     * rotation.
                     *
                     * By default, it is `'radial'`.
                     * If no rotation is wanted, it can be set to `0`.
                     *
                     * The following example shows different `rotate` settings:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.label)
                     *
                     *
                     * @default
                     * "radial"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rotate
                     */
                    rotate?: number | string | undefined;

                    /**
                     * Align of text, which can be `'left'`, `'center'`, or
                     * `'right'`.
                     * Note that `'left'` stands for inner side, and `'right'`
                     * stands for outer side.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.label)
                     *
                     *
                     * @default
                     * "center"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.align
                     */
                    align?: string | undefined;

                    /**
                     * If angle of data piece is smaller than this value (in
                     * degrees), then text is not displayed.
                     * This is used for hiding text for small piece of data.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.minAngle
                     */
                    minAngle?: number | undefined;

                    /**
                     * Whether to show label.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.distance
                     */
                    distance?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.formatter
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.fontSize
                     */
                    fontSize?: number | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;
                } | undefined;

                /**
                 * Style of Sunburst sectors.
                 *
                 * Style can be set in
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * for sectors of this series, or
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * for the whole level, or
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * for single sector. If
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * is defined, it will cover the setting of
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * and
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * .
                 *
                 * **Priority:
                 * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                 * >
                 * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                 * >
                 * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                 * .**
                 *
                 * In ECharts, _emphasis_ is for styles when mouse hovers.
                 * For Sunburst charts, there are two extra states: _highlight_
                 * for highlighting items that relates to the emphasized one,
                 * and _downplay_ for others when emphasizing an item. See
                 * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle
                 */
                itemStyle?: {
                    /**
                     * color. Color is taken from
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "white"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @default
                     * 1
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @default
                     * 1
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;

                /**
                 * Item style when mouse is hovering. See
                 * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis
                 */
                emphasis?: {
                    /**
                     * `label` sets the text style for every sectors.
                     *
                     * **Priority:
                     * [series.data.label](https://echarts.apache.org/en/option.html#series-sunburst.data.label)
                     * >
                     * [series.levels.label](https://echarts.apache.org/en/option.html#series-sunburst.levels.label)
                     * >
                     * [series.label](https://echarts.apache.org/en/option.html#series-sunburst.label)
                     * .**
                     *
                     * Text label of , to explain some data information about
                     * graphic item like value, name and so on.
                     * `label` is placed under `itemStyle` in ECharts 2.x.
                     * In ECharts 3, to make the configuration structure flatter,
                     * `label`is taken to be at the same level with `itemStyle`,
                     * and has `emphasis` as `itemStyle` does.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label
                     */
                    label?: {
                        /**
                         * If it is `number` type, then is stands for rotation,
                         * from -90 degrees to 90 degrees, and positive values
                         * stand for counterclockwise.
                         *
                         * Besides, it can be string `'radial'`, standing for
                         * radial rotation; or `'tangential'`, standing for
                         * tangential rotation.
                         *
                         * By default, it is `'radial'`.
                         * If no rotation is wanted, it can be set to `0`.
                         *
                         * The following example shows different `rotate` settings:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.label)
                         *
                         *
                         * @default
                         * "radial"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rotate
                         */
                        rotate?: number | string | undefined;

                        /**
                         * Align of text, which can be `'left'`, `'center'`,
                         * or `'right'`.
                         * Note that `'left'` stands for inner side, and `'right'`
                         * stands for outer side.
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.label)
                         *
                         *
                         * @default
                         * "center"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.align
                         */
                        align?: string | undefined;

                        /**
                         * If angle of data piece is smaller than this value
                         * (in degrees), then text is not displayed.
                         * This is used for hiding text for small piece of data.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.minAngle
                         */
                        minAngle?: number | undefined;

                        /**
                         * Whether to show label.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.position
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.distance
                         */
                        distance?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.offset
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.formatter
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.color
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.fontSize
                         */
                        fontSize?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.height
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;

                    /**
                     * Style of Sunburst sectors.
                     *
                     * Style can be set in
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * for sectors of this series, or
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * for the whole level, or
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * for single sector. If
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * is defined, it will cover the setting of
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * and
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * .
                     *
                     * **Priority:
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * >
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * >
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * .**
                     *
                     * In ECharts, _emphasis_ is for styles when mouse hovers.
                     * For Sunburst charts, there are two extra states: _highlight_
                     * for highlighting items that relates to the emphasized
                     * one, and _downplay_ for others when emphasizing an item.
                     * See
                     * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.itemStyle
                     */
                    itemStyle?: {
                        /**
                         * color. Color is taken from
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.itemStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "white"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.itemStyle.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.itemStyle.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.itemStyle.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.emphasis.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.itemStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.itemStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.emphasis.itemStyle.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Item style when mouse is hovering related items. See
                 * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight
                 */
                highlight?: {
                    /**
                     * `label` sets the text style for every sectors.
                     *
                     * **Priority:
                     * [series.data.label](https://echarts.apache.org/en/option.html#series-sunburst.data.label)
                     * >
                     * [series.levels.label](https://echarts.apache.org/en/option.html#series-sunburst.levels.label)
                     * >
                     * [series.label](https://echarts.apache.org/en/option.html#series-sunburst.label)
                     * .**
                     *
                     * Text label of , to explain some data information about
                     * graphic item like value, name and so on.
                     * `label` is placed under `itemStyle` in ECharts 2.x.
                     * In ECharts 3, to make the configuration structure flatter,
                     * `label`is taken to be at the same level with `itemStyle`,
                     * and has `emphasis` as `itemStyle` does.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label
                     */
                    label?: {
                        /**
                         * If it is `number` type, then is stands for rotation,
                         * from -90 degrees to 90 degrees, and positive values
                         * stand for counterclockwise.
                         *
                         * Besides, it can be string `'radial'`, standing for
                         * radial rotation; or `'tangential'`, standing for
                         * tangential rotation.
                         *
                         * By default, it is `'radial'`.
                         * If no rotation is wanted, it can be set to `0`.
                         *
                         * The following example shows different `rotate` settings:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.label)
                         *
                         *
                         * @default
                         * "radial"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rotate
                         */
                        rotate?: number | string | undefined;

                        /**
                         * Align of text, which can be `'left'`, `'center'`,
                         * or `'right'`.
                         * Note that `'left'` stands for inner side, and `'right'`
                         * stands for outer side.
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.label)
                         *
                         *
                         * @default
                         * "center"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.align
                         */
                        align?: string | undefined;

                        /**
                         * If angle of data piece is smaller than this value
                         * (in degrees), then text is not displayed.
                         * This is used for hiding text for small piece of data.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.minAngle
                         */
                        minAngle?: number | undefined;

                        /**
                         * Whether to show label.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.position
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.distance
                         */
                        distance?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.offset
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.formatter
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.color
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.fontSize
                         */
                        fontSize?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.height
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;

                    /**
                     * Style of Sunburst sectors.
                     *
                     * Style can be set in
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * for sectors of this series, or
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * for the whole level, or
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * for single sector. If
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * is defined, it will cover the setting of
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * and
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * .
                     *
                     * **Priority:
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * >
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * >
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * .**
                     *
                     * In ECharts, _emphasis_ is for styles when mouse hovers.
                     * For Sunburst charts, there are two extra states: _highlight_
                     * for highlighting items that relates to the emphasized
                     * one, and _downplay_ for others when emphasizing an item.
                     * See
                     * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.itemStyle
                     */
                    itemStyle?: {
                        /**
                         * color. Color is taken from
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.itemStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "white"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.itemStyle.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.itemStyle.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.itemStyle.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.highlight.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.itemStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.itemStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.highlight.itemStyle.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Item style when mouse is hovering unrelated items. See
                 * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay
                 */
                downplay?: {
                    /**
                     * `label` sets the text style for every sectors.
                     *
                     * **Priority:
                     * [series.data.label](https://echarts.apache.org/en/option.html#series-sunburst.data.label)
                     * >
                     * [series.levels.label](https://echarts.apache.org/en/option.html#series-sunburst.levels.label)
                     * >
                     * [series.label](https://echarts.apache.org/en/option.html#series-sunburst.label)
                     * .**
                     *
                     * Text label of , to explain some data information about
                     * graphic item like value, name and so on.
                     * `label` is placed under `itemStyle` in ECharts 2.x.
                     * In ECharts 3, to make the configuration structure flatter,
                     * `label`is taken to be at the same level with `itemStyle`,
                     * and has `emphasis` as `itemStyle` does.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label
                     */
                    label?: {
                        /**
                         * If it is `number` type, then is stands for rotation,
                         * from -90 degrees to 90 degrees, and positive values
                         * stand for counterclockwise.
                         *
                         * Besides, it can be string `'radial'`, standing for
                         * radial rotation; or `'tangential'`, standing for
                         * tangential rotation.
                         *
                         * By default, it is `'radial'`.
                         * If no rotation is wanted, it can be set to `0`.
                         *
                         * The following example shows different `rotate` settings:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.label)
                         *
                         *
                         * @default
                         * "radial"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rotate
                         */
                        rotate?: number | string | undefined;

                        /**
                         * Align of text, which can be `'left'`, `'center'`,
                         * or `'right'`.
                         * Note that `'left'` stands for inner side, and `'right'`
                         * stands for outer side.
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.label)
                         *
                         *
                         * @default
                         * "center"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.align
                         */
                        align?: string | undefined;

                        /**
                         * If angle of data piece is smaller than this value
                         * (in degrees), then text is not displayed.
                         * This is used for hiding text for small piece of data.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.minAngle
                         */
                        minAngle?: number | undefined;

                        /**
                         * Whether to show label.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.position
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.distance
                         */
                        distance?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.offset
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.formatter
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.color
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.fontSize
                         */
                        fontSize?: number | undefined;

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
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.height
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
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;

                    /**
                     * Style of Sunburst sectors.
                     *
                     * Style can be set in
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * for sectors of this series, or
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * for the whole level, or
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * for single sector. If
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * is defined, it will cover the setting of
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * and
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * .
                     *
                     * **Priority:
                     * [series.data.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.data.itemStyle)
                     * >
                     * [series.levels.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.levels.itemStyle)
                     * >
                     * [series.itemStyle](https://echarts.apache.org/en/option.html#series-sunburst.itemStyle)
                     * .**
                     *
                     * In ECharts, _emphasis_ is for styles when mouse hovers.
                     * For Sunburst charts, there are two extra states: _highlight_
                     * for highlighting items that relates to the emphasized
                     * one, and _downplay_ for others when emphasizing an item.
                     * See
                     * [highlightPolicy](https://echarts.apache.org/en/option.html#series-sunburst.highlightPolicy)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.itemStyle
                     */
                    itemStyle?: {
                        /**
                         * color. Color is taken from
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.itemStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "white"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.itemStyle.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.itemStyle.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.itemStyle.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-sunburst.sunburst.data.downplay.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.itemStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.itemStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-sunburst.data.downplay.itemStyle.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Children nodes, which is recursively defined.
                 * In the same format to
                 * [series-sunburst.data](https://echarts.apache.org/en/option.html#series-sunburst.data)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-sunburst.data.children
                 */
                children?: DataObject[] | undefined;
            }
        }
    }
}
