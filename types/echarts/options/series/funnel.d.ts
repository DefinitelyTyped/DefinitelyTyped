declare namespace echarts {
    namespace EChartOption {
        /**
         * **Funnel chart**
         *
         * **sample:**
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-funnel)
         *
         * @see https://echarts.apache.org/en/option.html#series-funnel
         */
        interface SeriesFunnel {
            /**
             * @default
             * "funnel"
             * @see https://echarts.apache.org/en/option.html#series-funnel.type
             */
            type?: string | undefined;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.id
             */
            id?: string | undefined;

            /**
             * Series name used for displaying in
             * [tooltip](https://echarts.apache.org/en/option.html#tooltip)
             * and filtering with
             * [legend](https://echarts.apache.org/en/option.html#legend)
             * , or updaing data and configuration with `setOption`.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.name
             */
            name?: string | undefined;

            /**
             * The specified minimum value.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.min
             */
            min?: number | undefined;

            /**
             * The specified maximum value.
             *
             * @default
             * 100
             * @see https://echarts.apache.org/en/option.html#series-funnel.max
             */
            max?: number | undefined;

            /**
             * The mapped width from minimum data value
             * [min](https://echarts.apache.org/en/option.html#series-funnel.min)
             * .
             *
             * It can be absolute pixel and also the percentage of
             * [layout width](https://echarts.apache.org/en/option.html#series-funnel.width)
             *
             * If you don't want the graph of minimum value to be a triangle,
             * you can set up this property larger than 0.
             *
             * @default
             * '0%'
             * @see https://echarts.apache.org/en/option.html#series-funnel.minSize
             */
            minSize?: string | undefined;

            /**
             * The mapped width from maximum data value
             * [max](https://echarts.apache.org/en/option.html#series-funnel.max)
             * .
             *
             * It can be absolute pixel and also the percentage of
             * [layout width](https://echarts.apache.org/en/option.html#series-funnel.width)
             * .
             *
             * @default
             * '100%'
             * @see https://echarts.apache.org/en/option.html#series-funnel.maxSize
             */
            maxSize?: string | undefined;

            /**
             * Orient of funnel，Can be 'vertical' or 'horizontal'.
             *
             * @default
             * "vertical"
             * @see https://echarts.apache.org/v4/en/option.html#series-funnel.orient
             */
            origin?: string | undefined;

            /**
             * Data sorting, which can be whether `'ascending'`, `'descending'`,
             * `'none'`(in data order) or a function, which is the same as `Array.prototype.sort(function
             * (a, b) { ... })`;
             *
             * @default
             * "descending"
             * @see https://echarts.apache.org/en/option.html#series-funnel.sort
             */
            sort?: string | undefined;

            /**
             * Gap between each trapezoid.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.gap
             */
            gap?: number | undefined;

            /**
             * Whether to enable highlighting chart when
             * [legend](https://echarts.apache.org/en/option.html#legend)
             * is being hovered.
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-funnel.legendHoverLink
             */
            legendHoverLink?: boolean | undefined;

            /**
             * Horizontal align.
             * Defaults to align center. Can be 'left', 'right', 'center'.
             *
             * @default
             * "center"
             * @see https://echarts.apache.org/en/option.html#series-funnel.funnelAlign
             */
            funnelAlign?: string | undefined;

            /**
             * Text label of funnel chart, to explain some data information
             * about graphic item like value, name and so on.
             * `label` is placed under `itemStyle` in ECharts 2.x.
             * In ECharts 3, to make the configuration structure flatter, `label`is
             * taken to be at the same level with `itemStyle`, and has `emphasis`
             * as `itemStyle` does.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.label
             */
            label?: {
                /**
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.show
                 */
                show?: boolean | undefined;

                /**
                 * Label position.
                 *
                 * **Options:**
                 *
                 * + `'left'`
                 *
                 * Left side of funnel chart.
                 * The corresponding trapezoid would be related to through
                 * [visual guide line](https://echarts.apache.org/en/option.html#series-funnel.labelLine)
                 * .
                 *
                 * + `'right'`
                 *
                 * Right side of funnel chart.
                 * The corresponding trapezoid would be related to through
                 * [visual guide line](https://echarts.apache.org/en/option.html#series-funnel.labelLine)
                 * .
                 *
                 * + `'inside'`
                 *
                 * Inside the trapezoid of funnel chart.
                 *
                 * + `'inner'` equals to `'inside'`.
                 *
                 * + `'center'` equals to `'inside'`.
                 *
                 * @default
                 * "outside"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.position
                 */
                position?: string | undefined;

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
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.label)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.formatter
                 */
                formatter?: Function | string | undefined;

                /**
                 * text color.
                 *
                 * @default
                 * ""#fff""
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.color
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
                 * @default
                 * "normal"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.fontStyle
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
                 * @default
                 * "normal"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.fontWeight
                 */
                fontWeight?: string | number | undefined;

                /**
                 * font family
                 *
                 * Can also be 'serif' , 'monospace', ...
                 *
                 * @default
                 * "sans-serif"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.fontFamily
                 */
                fontFamily?: string | undefined;

                /**
                 * font size
                 *
                 * @default
                 * 12
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.fontSize
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.label)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.align
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.label)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.verticalAlign
                 */
                verticalAlign?: string | undefined;

                /**
                 * Line height of the text fregment.
                 *
                 * If `lineHeight` is not set in `rich`, `lineHeight` in parent
                 * level will be used. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.label)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.lineHeight
                 */
                lineHeight?: number | undefined;

                /**
                 * Background color of the text fregment.
                 *
                 * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                 *
                 * Or image can be used, for example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.label)
                 *
                 * `width` or `height` can be specified when using background
                 * image, or auto adapted by default.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.backgroundColor
                 */
                backgroundColor?: object | string | undefined;

                /**
                 * Border color of the text fregment.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.borderColor
                 */
                borderColor?: string | undefined;

                /**
                 * Border width of the text fregment.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Border radius of the text fregment.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.borderRadius
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
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.padding
                 */
                padding?: any[] | number | undefined;

                /**
                 * Shadow color of the text block.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.shadowColor
                 */
                shadowColor?: string | undefined;

                /**
                 * Show blur of the text block.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text block.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text block.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.shadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.width
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
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.height
                 */
                height?: number | string | undefined;

                /**
                 * Storke color of the text.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.textBorderColor
                 */
                textBorderColor?: string | undefined;

                /**
                 * Storke line width of the text.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.textBorderWidth
                 */
                textBorderWidth?: number | undefined;

                /**
                 * Shadow color of the text itself.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.textShadowColor
                 */
                textShadowColor?: string | undefined;

                /**
                 * Shadow blue of the text itself.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.textShadowBlur
                 */
                textShadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text itself.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.textShadowOffsetX
                 */
                textShadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text itself.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.textShadowOffsetY
                 */
                textShadowOffsetY?: number | undefined;

                /**
                 * "Rich text styles" can be defined in this `rich` property.
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.label)
                 *
                 * For more details, see
                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                 * please.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich
                 */
                rich?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E
                     */
                    [userStyle: string]: {
                        /**
                         * text color.
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;
                    };
                } | undefined;
            } | undefined;

            /**
             * The visual guide line style of label. When
             * [label position](https://echarts.apache.org/en/option.html#series-funnel.label.position)
             * is set as `'left'`or`'right'`, the visual guide line will show.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine
             */
            labelLine?: {
                /**
                 * Whether to show visual guide line.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.show
                 */
                show?: boolean | undefined;

                /**
                 * The length of the first part from visual guide line.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.length
                 */
                length?: number | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.lineStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.labelLine.lineStyle)
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.lineStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * line width.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.lineStyle.width
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
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.lineStyle.type
                     */
                    type?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.labelLine.lineStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.lineStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.lineStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.lineStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;

                /**
                 * The style of visual guide line in emphasis status.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.emphasis
                 */
                emphasis?: {
                    /**
                     * Whether to show visual guide line.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.emphasis.show
                     */
                    show?: boolean | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.emphasis.lineStyle
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.labelLine.emphasis.lineStyle)
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.emphasis.lineStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * line width.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.emphasis.lineStyle.width
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
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.emphasis.lineStyle.type
                         */
                        type?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.labelLine.emphasis.lineStyle)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.emphasis.lineStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.emphasis.lineStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.emphasis.lineStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.emphasis.lineStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.labelLine.emphasis.lineStyle.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;

            /**
             * Graphic style of , `emphasis` is the style when it is highlighted,
             * like being hovered by mouse, or highlighted via legend connect.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.itemStyle
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
                 * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.itemStyle)
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
                 * @see https://echarts.apache.org/en/option.html#series-funnel.itemStyle.color
                 */
                color?: EChartOption.Color | Function | undefined;

                /**
                 * border color, whose format is similar to that of `color`.
                 *
                 * @default
                 * "#000"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.itemStyle.borderColor
                 */
                borderColor?: EChartOption.Color | undefined;

                /**
                 * border width. No border when it is set to be 0.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.itemStyle.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                 * `'solid'` by default.
                 *
                 * @default
                 * "solid"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.itemStyle.borderType
                 */
                borderType?: string | undefined;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.itemStyle)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.itemStyle.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.itemStyle.shadowColor
                 */
                shadowColor?: EChartOption.Color | undefined;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.itemStyle.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.itemStyle.shadowOffsetY
                 */
                shadowOffsetY?: number | undefined;

                /**
                 * Opacity of the component.
                 * Supports value from 0 to 1, and the component will not be
                 * drawn when set to 0.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.itemStyle.opacity
                 */
                opacity?: number | undefined;
            } | undefined;

            /**
             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis
             */
            emphasis?: {
                /**
                 * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label
                 */
                label?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.show
                     */
                    show?: boolean | undefined;

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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.formatter
                     */
                    formatter?: Function | string | undefined;

                    /**
                     * text color.
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.color
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
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.fontStyle
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
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.fontWeight
                     */
                    fontWeight?: string | number | undefined;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.backgroundColor
                     */
                    backgroundColor?: object | string | undefined;

                    /**
                     * Border color of the text fregment.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.height
                     */
                    height?: number | string | undefined;

                    /**
                     * Storke color of the text.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {
                            /**
                             * text color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;
                } | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.itemStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine
                 */
                labelLine?: {
                    /**
                     * Whether to show visual guide line.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.show
                     */
                    show?: boolean | undefined;

                    /**
                     * The length of the first part from visual guide line.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.length
                     */
                    length?: number | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.lineStyle
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.labelLine.lineStyle)
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.lineStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * line width.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.lineStyle.width
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
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.lineStyle.type
                         */
                        type?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.labelLine.lineStyle)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.lineStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.lineStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.lineStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.lineStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.lineStyle.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;

                    /**
                     * The style of visual guide line in emphasis status.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether to show visual guide line.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.emphasis.show
                         */
                        show?: boolean | undefined;

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.emphasis.lineStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.labelLine.emphasis.lineStyle)
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.emphasis.lineStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * line width.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.emphasis.lineStyle.width
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
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.emphasis.lineStyle.type
                             */
                            type?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.emphasis.labelLine.emphasis.lineStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.emphasis.lineStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.emphasis.lineStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.emphasis.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.emphasis.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.emphasis.labelLine.emphasis.lineStyle.opacity
                             */
                            opacity?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;

            /**
             * `zlevel` value of all graphical elements in .
             *
             * `zlevel` is used to make layers with Canvas. Graphical elements with different
             * `zlevel` values will be placed in different Canvases, which is a common optimization technique.
             * We can put those frequently changed elements (like those with animations) to a separate `zlevel`.
             * Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.
             *
             * Canvases with bigger `zlevel` will be placed on Canvases with smaller `zlevel`.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.zlevel
             */
            zlevel?: number | undefined;

            /**
             * `z` value of all graphical elements in , which controls order of drawing graphical components.
             * Components with smaller `z` values may be overwritten by those with larger `z` values.
             *
             * `z` has a lower priority to `zlevel`, and will not create new Canvas.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.z
             */
            z?: number | undefined;

            /**
             * Distance between funnel chart component and the left side of the container.
             *
             * `left` value can be instant pixel value like `20`;
             * it can also be a percentage value relative to container width like `'20%'`;
             * and it can also be `'left'`, `'center'`, or `'right'`.
             *
             * If the `left` value is set to be `'left'`, `'center'`, or `'right'`,
             * then the component will be aligned automatically based on position.
             *
             * @default
             * '80'
             * @see https://echarts.apache.org/en/option.html#series-funnel.left
             */
            left?: string | number | undefined;

            /**
             * Distance between funnel chart component and the top side of the container.
             *
             * `top` value can be instant pixel value like `20`;
             * it can also be a percentage value relative to container width like `'20%'`;
             * and it can also be `'top'`, `'middle'`, or `'bottom'`.
             *
             * If the left value is set to be `'top'`, `'middle'`, or `'bottom'`,
             * then the component will be aligned automatically based on position.
             *
             * @default
             * '60'
             * @see https://echarts.apache.org/en/option.html#series-funnel.top
             */
            top?: string | number | undefined;

            /**
             * Distance between funnel chart component and the right side of the container.
             *
             * `right` value can be instant pixel value like `20`;
             * it can also be a percentage value relative to container width like `'20%'`.
             *
             * @default
             * '80'
             * @see https://echarts.apache.org/en/option.html#series-funnel.right
             */
            right?: string | number | undefined;

            /**
             * Distance between funnel chart component and the bottom side of the container.
             * `bottom` value can be instant pixel value like `20`;
             * it can also be a percentage value relative to container width like `'20%'`.
             *
             * @default
             * '60'
             * @see https://echarts.apache.org/v4/en/option.html#series-funnel.bottom
             */
            bottom?: string | number | undefined;

            /**
             * Width of funnel chart component. Adaptive by default.
             *
             * @default
             * "auto"
             * @see https://echarts.apache.org/en/option.html#series-funnel.width
             */
            width?: string | number | undefined;

            /**
             * Height of funnel chart component. Adaptive by default.
             *
             * @default
             * "auto"
             * @see https://echarts.apache.org/en/option.html#series-funnel.height
             */
            height?: string | number | undefined;

            /**
             * When
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * is used, `seriesLayoutBy` specifies whether the column or the
             * row of `dataset` is mapped to the series, namely, the series
             * is "layout" on columns or rows. Optional values:
             *
             * + 'column': by default, the columns of `dataset` are mapped the
             * series. In this case, each column represents a dimension.
             * + 'row'：the rows of `dataset` are mapped to the series.
             * In this case, each row represents a dimension.
             *
             * Check this
             * [example](https://echarts.apache.org/examples/en/editor.html?c=dataset-series-layout-by)
             * .
             *
             * @default
             * "column"
             * @see https://echarts.apache.org/en/option.html#series-funnel.seriesLayoutBy
             */
            seriesLayoutBy?: string | undefined;

            /**
             * If
             * [series.data](https://echarts.apache.org/en/option.html#series.data)
             * is not specified, and
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * exists, the series will use `dataset`.
             * `datasetIndex` specifies which dataset will be used.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.datasetIndex
             */
            datasetIndex?: number | undefined;

            /**
             * Data array of series, which can be a single data value, like:
             *
             * ```
             * [12, 34, 56, 10, 23]
             *
             * ```
             *
             * Or, if need extra dimensions for components like
             * [visualMap](https://echarts.apache.org/en/option.html#visualMap)
             * to map to graphic attributes like color, it can also be in the
             * form of array. For example:
             *
             * ```
             * [[12, 14], [34, 50], [56, 30], [10, 15], [23, 10]]
             *
             * ```
             *
             * In this case, we can assgin the second value in each arrary item
             * to
             * [visualMap](https://echarts.apache.org/en/option.html#visualMap)
             * component.
             *
             * More likely, we need to assign name to each data item, in which
             * case each item should be an object:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel)
             *
             * Each data item can be further custerized:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel)
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.data
             */
            data?: number[] | number[][] | SeriesFunnel.DataObject[] | undefined;

            /**
             * Mark point in a chart.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint)
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint)
                 *
                 * @default
                 * "pin"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.symbol
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
                 * @default
                 * 50
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.symbolSize
                 */
                symbolSize?: any[] | Function | number | undefined;

                /**
                 * Rotate degree of symbol.
                 * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                 * `symbolRotate` value will be ignored, and compulsively use
                 * tangent angle.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.symbolRotate
                 */
                symbolRotate?: number | undefined;

                /**
                 * Whether to keep aspect for symbols in the form of `path://`.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.symbolKeepAspect
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
                 * @default
                 * [0, 0]
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.symbolOffset
                 */
                symbolOffset?: any[] | undefined;

                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.silent
                 */
                silent?: boolean | undefined;

                /**
                 * Label of mark point.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label)
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
                     * @default
                     * "inside"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.position
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
                     * @default
                     * 5
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.formatter
                     */
                    formatter?: Function | string | undefined;

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.color
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
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.fontStyle
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
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.fontWeight
                     */
                    fontWeight?: string | number | undefined;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.backgroundColor
                     */
                    backgroundColor?: object | string | undefined;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.height
                     */
                    height?: number | string | undefined;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {
                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether to show label.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.position
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
                         * @default
                         * 5
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.offset
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.formatter
                         */
                        formatter?: Function | string | undefined;

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.color
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
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.fontStyle
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
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.emphasis)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.width
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {
                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Mark point style.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.opacity
                     */
                    opacity?: number | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.emphasis
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.itemStyle.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.emphasis.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.emphasis.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.emphasis.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.itemStyle.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.itemStyle.emphasis.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Data array for mark points, each of which is an object.
                 * Here are some ways to assign mark point position.
                 *
                 * 1. Assign coordinate according to container with
                 * [x](https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * **For example:**
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data
                 */
                data?: {
                    /**
                     * Mark point name.
                     *
                     * @default
                     * ''
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.name
                     */
                    name?: string | undefined;

                    /**
                     * X position according to container, in pixel.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.x
                     */
                    x?: number | undefined;

                    /**
                     * Y position according to container, in pixel.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.y
                     */
                    y?: number | undefined;

                    /**
                     * Label value, which can be ignored.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.value
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data)
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.symbol
                     */
                    symbol?: string | undefined;

                    /**
                     * symbol size.
                     * It can be set to single numbers like `10`, or use an
                     * array to represent width and height.
                     * For example, `[20, 10]` means symbol width is `20`, and
                     * height is`10`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.symbolSize
                     */
                    symbolSize?: any[] | number | undefined;

                    /**
                     * Rotate degree of symbol.
                     * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                     * `symbolRotate` value will be ignored, and compulsively
                     * use tangent angle.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.symbolRotate
                     */
                    symbolRotate?: number | undefined;

                    /**
                     * Whether to keep aspect for symbols in the form of `path://`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.symbolKeepAspect
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
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.symbolOffset
                     */
                    symbolOffset?: any[] | undefined;

                    /**
                     * Mark point style.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.itemStyle)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.itemStyle)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.opacity
                         */
                        opacity?: number | undefined;

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.emphasis
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.itemStyle.emphasis)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.emphasis.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.emphasis.borderColor
                             */
                            borderColor?: EChartOption.Color | undefined;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.emphasis.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.emphasis.borderType
                             */
                            borderType?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.itemStyle.emphasis)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.emphasis.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.emphasis.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.emphasis.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.itemStyle.emphasis.opacity
                             */
                            opacity?: number | undefined;
                        } | undefined;
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label
                     */
                    label?: {
                        /**
                         * Whether to show label.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.position
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
                         * @default
                         * 5
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.offset
                         */
                        offset?: any[] | undefined;

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.color
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
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.fontStyle
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
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {
                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis
                         */
                        emphasis?: {
                            /**
                             * Whether to show label.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.show
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.emphasis)
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.position
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
                             * @default
                             * 5
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.distance
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rotate
                             */
                            rotate?: number | undefined;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.offset
                             */
                            offset?: any[] | undefined;

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.color
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.fontStyle
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.emphasis)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.emphasis)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.emphasis)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.emphasis)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.width
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.emphasis)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                                 */
                                [userStyle: string]: {
                                    /**
                                     * text color.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * ""#fff""
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                     * @default
                                     * "normal"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                     * @default
                                     * "normal"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string | number | undefined;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string | undefined;

                                    /**
                                     * font size
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string | undefined;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * `width` or `height` can be specified
                                     * when using background image, or auto
                                     * adapted by default.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string | undefined;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string | undefined;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number | undefined;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number | undefined;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string | undefined;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string | undefined;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string | undefined;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number | undefined;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string | undefined;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.animation
                 */
                animation?: boolean | undefined;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 * @default
                 * 2000
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.animationThreshold
                 */
                animationThreshold?: number | undefined;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint)
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.animationDuration
                 */
                animationDuration?: Function | number | undefined;

                /**
                 * Easing method used for the first animation.
                 * Varied easing effects can be found at
                 * [easing effect example](https://echarts.apache.org/examples/en/editor.html?c=line-easing)
                 * .
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.animationEasing
                 */
                animationEasing?: string | undefined;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.animationDelay
                 */
                animationDelay?: Function | number | undefined;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint)
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number | undefined;

                /**
                 * Easing method used for animation.
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.animationEasingUpdate
                 */
                animationEasingUpdate?: string | undefined;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markPoint)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * prefix
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markPoint.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number | undefined;
            } | undefined;

            /**
             * Use a line in the chart to illustrate.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine
             */
            markLine?: {
                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.silent
                 */
                silent?: boolean | undefined;

                /**
                 * Symbol type at the two ends of the mark line.
                 * It can be an array for two ends, or assigned seperately.
                 * See
                 * [data.symbol](https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.symbol)
                 * for more format information.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.symbol
                 */
                symbol?: any[] | string | undefined;

                /**
                 * Symbol size at the two ends of the mark line.
                 * It can be an array for two ends, or assigned seperately.
                 *
                 * **Attention:** You cannot assgin width and height seperately
                 * as normal `symbolSize`.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.symbolSize
                 */
                symbolSize?: any[] | number | undefined;

                /**
                 * Precison of marking line value, which is useful when displaying
                 * average value mark line.
                 *
                 * @default
                 * 2
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.precision
                 */
                precision?: number | undefined;

                /**
                 * Mark line text.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.label
                 */
                label?: {
                    /**
                     * Whether show label or not.
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.label.show
                     */
                    show?: boolean | undefined;

                    /**
                     * Positions of labels can be:
                     *
                     * + `'start'` starting point of the line.
                     * + `'middle'` middle point of the line.
                     * + `'end'` ending point of the line.
                     *
                     * @default
                     * "end"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.label.position
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.label.formatter
                     */
                    formatter?: Function | string | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether show label or not.
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.label.emphasis.show
                         */
                        show?: boolean | undefined;

                        /**
                         * Positions of labels can be:
                         *
                         * + `'start'` starting point of the line.
                         * + `'middle'` middle point of the line.
                         * + `'end'` ending point of the line.
                         *
                         * @default
                         * "end"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.label.emphasis.position
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.label.emphasis.formatter
                         */
                        formatter?: Function | string | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Mark line style.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.lineStyle)
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * line width.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.width
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
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.type
                     */
                    type?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.lineStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.opacity
                     */
                    opacity?: number | undefined;

                    /**
                     * Edge curvature, which supports value from 0 to 1.
                     * The larger the value, the greater the curvature.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.curveness
                     */
                    curveness?: number | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.emphasis
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.lineStyle.emphasis)
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.emphasis.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * line width.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.emphasis.width
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
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.emphasis.type
                         */
                        type?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.lineStyle.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.emphasis.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.lineStyle.emphasis.opacity
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
                 * [x](https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data
                 */
                data?: {
                    /**
                     * Data of the starting point.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0
                     */
                    0?: {
                        /**
                         * Name of the marker, which will display as a label.
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-funnel.markLine.data.0.name
                         */
                        name?: string | undefined;

                        /**
                         * X position according to container, in pixel.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.x
                         */
                        x?: number | undefined;

                        /**
                         * Y position according to container, in pixel.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.y
                         */
                        y?: number | undefined;

                        /**
                         * Label value, which can be ignored.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.value
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.0)
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.0)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.symbol
                         */
                        symbol?: string | undefined;

                        /**
                         * starting point symbol size.
                         * It can be set to single numbers like `10`, or use
                         * an array to represent width and height.
                         * For example, `[20, 10]` means symbol width is `20`,
                         * and height is`10`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.symbolSize
                         */
                        symbolSize?: any[] | number | undefined;

                        /**
                         * Rotate degree of starting point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.symbolRotate
                         */
                        symbolRotate?: number | undefined;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.symbolKeepAspect
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
                         * @default
                         * [0, 0]
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.symbolOffset
                         */
                        symbolOffset?: any[] | undefined;

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.0.lineStyle)
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * line width.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.width
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
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.type
                             */
                            type?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.0.lineStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.opacity
                             */
                            opacity?: number | undefined;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.curveness
                             */
                            curveness?: number | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.0.lineStyle.emphasis)
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.emphasis.color
                                 */
                                color?: EChartOption.Color | undefined;

                                /**
                                 * line width.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.emphasis.width
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
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.emphasis.type
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.0.lineStyle.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: EChartOption.Color | undefined;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.emphasis.opacity
                                 */
                                opacity?: number | undefined;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.lineStyle.emphasis.curveness
                                 */
                                curveness?: number | undefined;
                            } | undefined;
                        } | undefined;

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.label
                         */
                        label?: {
                            /**
                             * Whether show label or not.
                             *
                             * @default
                             * "true"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.label.show
                             */
                            show?: boolean | undefined;

                            /**
                             * Positions of labels can be:
                             *
                             * + `'start'` starting point of the line.
                             * + `'middle'` middle point of the line.
                             * + `'end'` ending point of the line.
                             *
                             * @default
                             * "end"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.label.position
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.0.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.label.formatter
                             */
                            formatter?: Function | string | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether show label or not.
                                 *
                                 * @default
                                 * "true"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.label.emphasis.show
                                 */
                                show?: boolean | undefined;

                                /**
                                 * Positions of labels can be:
                                 *
                                 * + `'start'` starting point of the line.
                                 * + `'middle'` middle point of the line.
                                 * + `'end'` ending point of the line.
                                 *
                                 * @default
                                 * "end"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.label.emphasis.position
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.0.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.0.label.emphasis.formatter
                                 */
                                formatter?: Function | string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;

                    /**
                     * Data of the ending point.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1
                     */
                    1?: {
                        /**
                         * Name of the marker, which will display as a label.
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-funnel.markLine.data.1.name
                         */
                        name?: string | undefined;

                        /**
                         * X position according to container, in pixel.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.x
                         */
                        x?: number | undefined;

                        /**
                         * Y position according to container, in pixel.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.y
                         */
                        y?: number | undefined;

                        /**
                         * Label value, which can be ignored.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.value
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.1)
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.1)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.symbol
                         */
                        symbol?: string | undefined;

                        /**
                         * ending point symbol size.
                         * It can be set to single numbers like `10`, or use
                         * an array to represent width and height.
                         * For example, `[20, 10]` means symbol width is `20`,
                         * and height is`10`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.symbolSize
                         */
                        symbolSize?: any[] | number | undefined;

                        /**
                         * Rotate degree of ending point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.symbolRotate
                         */
                        symbolRotate?: number | undefined;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.symbolKeepAspect
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
                         * @default
                         * [0, 0]
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.symbolOffset
                         */
                        symbolOffset?: any[] | undefined;

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.1.lineStyle)
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * line width.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.width
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
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.type
                             */
                            type?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.1.lineStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.opacity
                             */
                            opacity?: number | undefined;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.curveness
                             */
                            curveness?: number | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.1.lineStyle.emphasis)
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.emphasis.color
                                 */
                                color?: EChartOption.Color | undefined;

                                /**
                                 * line width.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.emphasis.width
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
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.emphasis.type
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.1.lineStyle.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: EChartOption.Color | undefined;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.emphasis.opacity
                                 */
                                opacity?: number | undefined;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.lineStyle.emphasis.curveness
                                 */
                                curveness?: number | undefined;
                            } | undefined;
                        } | undefined;

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.label
                         */
                        label?: {
                            /**
                             * Whether show label or not.
                             *
                             * @default
                             * "true"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.label.show
                             */
                            show?: boolean | undefined;

                            /**
                             * Positions of labels can be:
                             *
                             * + `'start'` starting point of the line.
                             * + `'middle'` middle point of the line.
                             * + `'end'` ending point of the line.
                             *
                             * @default
                             * "end"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.label.position
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.1.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.label.formatter
                             */
                            formatter?: Function | string | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether show label or not.
                                 *
                                 * @default
                                 * "true"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.label.emphasis.show
                                 */
                                show?: boolean | undefined;

                                /**
                                 * Positions of labels can be:
                                 *
                                 * + `'start'` starting point of the line.
                                 * + `'middle'` middle point of the line.
                                 * + `'end'` ending point of the line.
                                 *
                                 * @default
                                 * "end"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.label.emphasis.position
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine.data.1.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.data.1.label.emphasis.formatter
                                 */
                                formatter?: Function | string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Whether to enable animation.
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.animation
                 */
                animation?: boolean | undefined;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 * @default
                 * 2000
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.animationThreshold
                 */
                animationThreshold?: number | undefined;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine)
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.animationDuration
                 */
                animationDuration?: Function | number | undefined;

                /**
                 * Easing method used for the first animation.
                 * Varied easing effects can be found at
                 * [easing effect example](https://echarts.apache.org/examples/en/editor.html?c=line-easing)
                 * .
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.animationEasing
                 */
                animationEasing?: string | undefined;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.animationDelay
                 */
                animationDelay?: Function | number | undefined;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine)
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number | undefined;

                /**
                 * Easing method used for animation.
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.animationEasingUpdate
                 */
                animationEasingUpdate?: string | undefined;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markLine)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markLine.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number | undefined;
            } | undefined;

            /**
             * Used to mark an area in chart.
             * For example, mark a time interval.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea
             */
            markArea?: {
                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.silent
                 */
                silent?: boolean | undefined;

                /**
                 * Label in mark area.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.position
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
                     * @default
                     * 5
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.offset
                     */
                    offset?: any[] | undefined;

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.color
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
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.fontStyle
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
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.fontWeight
                     */
                    fontWeight?: string | number | undefined;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.backgroundColor
                     */
                    backgroundColor?: object | string | undefined;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.height
                     */
                    height?: number | string | undefined;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {
                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether to show label.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.position
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
                         * @default
                         * 5
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.offset
                         */
                        offset?: any[] | undefined;

                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.color
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
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.fontStyle
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
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.emphasis)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.width
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {
                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * Style of the mark area.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.opacity
                     */
                    opacity?: number | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.emphasis
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.itemStyle.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.emphasis.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.emphasis.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.emphasis.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.itemStyle.emphasis)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.itemStyle.emphasis.opacity
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
                 * [x](https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.y)
                 * , where the unit is pixel (e.g.,
                 * the value is `5`), or percent (e.g.,
                 * the value is `'35%'`).
                 *
                 * The priority follows as above if more than one above definition
                 * used.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data
                 */
                data?: {
                    /**
                     * Specify the left-top point.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0
                     */
                    0?: {
                        /**
                         * Name of the marker, which will display as a label.
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-funnel.markArea.data.0.name
                         */
                        name?: string | undefined;

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.x
                         */
                        x?: number | undefined;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.y
                         */
                        y?: number | undefined;

                        /**
                         * value of the item, not necessary.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.value
                         */
                        value?: number | undefined;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.itemStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.borderColor
                             */
                            borderColor?: EChartOption.Color | undefined;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.borderType
                             */
                            borderType?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.itemStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.opacity
                             */
                            opacity?: number | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.itemStyle.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.emphasis.color
                                 */
                                color?: EChartOption.Color | undefined;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: EChartOption.Color | undefined;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.emphasis.borderType
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.itemStyle.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: EChartOption.Color | undefined;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.itemStyle.emphasis.opacity
                                 */
                                opacity?: number | undefined;
                            } | undefined;
                        } | undefined;

                        /**
                         * Label style of the item.
                         * Label style of start point and end point will be
                         * merged together.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label
                         */
                        label?: {
                            /**
                             * Whether to show label.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.show
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.position
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
                             * @default
                             * 5
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.distance
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rotate
                             */
                            rotate?: number | undefined;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.offset
                             */
                            offset?: any[] | undefined;

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.color
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.fontStyle
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.width
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E
                                 */
                                [userStyle: string]: {
                                    /**
                                     * text color.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * ""#fff""
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                     * @default
                                     * "normal"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                     * @default
                                     * "normal"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string | number | undefined;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string | undefined;

                                    /**
                                     * font size
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string | undefined;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * `width` or `height` can be specified
                                     * when using background image, or auto
                                     * adapted by default.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string | undefined;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string | undefined;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number | undefined;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number | undefined;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string | undefined;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string | undefined;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string | undefined;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number | undefined;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string | undefined;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number | undefined;
                                };
                            } | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether to show label.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.show
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.position
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
                                 * @default
                                 * 5
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.distance
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rotate
                                 */
                                rotate?: number | undefined;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.offset
                                 */
                                offset?: any[] | undefined;

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.color
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
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.fontStyle
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
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.emphasis)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich
                                 */
                                rich?: {
                                    /**
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                                     */
                                    [userStyle: string]: {
                                        /**
                                         * text color.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * ""#fff""
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                         * @default
                                         * "normal"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                         * @default
                                         * "normal"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                         */
                                        fontWeight?: string | number | undefined;

                                        /**
                                         * font family
                                         *
                                         * Can also be 'serif' , 'monospace',
                                         * ...
                                         *
                                         * @default
                                         * "sans-serif"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string | undefined;

                                        /**
                                         * font size
                                         *
                                         * @default
                                         * 12
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string | undefined;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * `width` or `height` can be specified
                                         * when using background image, or auto
                                         * adapted by default.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                         */
                                        backgroundColor?: object | string | undefined;

                                        /**
                                         * Border color of the text fregment.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string | undefined;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number | undefined;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number | undefined;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string | undefined;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number | undefined;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number | undefined;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                         */
                                        height?: number | string | undefined;

                                        /**
                                         * Storke color of the text.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string | undefined;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number | undefined;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string | undefined;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number | undefined;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number | undefined;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1
                     */
                    1?: {
                        /**
                         * Name of the marker, which will display as a label.
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-funnel.markArea.data.1.name
                         */
                        name?: string | undefined;

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.x
                         */
                        x?: number | undefined;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.y
                         */
                        y?: number | undefined;

                        /**
                         * value of the item, not necessary.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.value
                         */
                        value?: number | undefined;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.itemStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.borderColor
                             */
                            borderColor?: EChartOption.Color | undefined;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.borderType
                             */
                            borderType?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.itemStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.opacity
                             */
                            opacity?: number | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.itemStyle.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.emphasis.color
                                 */
                                color?: EChartOption.Color | undefined;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: EChartOption.Color | undefined;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.emphasis.borderType
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.itemStyle.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: EChartOption.Color | undefined;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.itemStyle.emphasis.opacity
                                 */
                                opacity?: number | undefined;
                            } | undefined;
                        } | undefined;

                        /**
                         * Label style of the item.
                         * Label style of start point and end point will be
                         * merged together.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label
                         */
                        label?: {
                            /**
                             * Whether to show label.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.show
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.position
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
                             * @default
                             * 5
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.distance
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rotate
                             */
                            rotate?: number | undefined;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.offset
                             */
                            offset?: any[] | undefined;

                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.color
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.fontStyle
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.width
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E
                                 */
                                [userStyle: string]: {
                                    /**
                                     * text color.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * ""#fff""
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                     * @default
                                     * "normal"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                     * @default
                                     * "normal"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string | number | undefined;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string | undefined;

                                    /**
                                     * font size
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string | undefined;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * `width` or `height` can be specified
                                     * when using background image, or auto
                                     * adapted by default.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string | undefined;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string | undefined;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number | undefined;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number | undefined;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string | undefined;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string | undefined;

                                    /**
                                     * Storke color of the text.
                                     *
                                     * If set as `'auto'`, the color will assigned
                                     * as visual color, such as series color.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string | undefined;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number | undefined;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string | undefined;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number | undefined;
                                };
                            } | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis
                             */
                            emphasis?: {
                                /**
                                 * Whether to show label.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.show
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.position
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
                                 * @default
                                 * 5
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.distance
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rotate
                                 */
                                rotate?: number | undefined;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.offset
                                 */
                                offset?: any[] | undefined;

                                /**
                                 * text color.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.color
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
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.fontStyle
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
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.emphasis)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.emphasis)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * If set as `'auto'`, the color will assigned
                                 * as visual color, such as series color.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich
                                 */
                                rich?: {
                                    /**
                                     * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
                                     */
                                    [userStyle: string]: {
                                        /**
                                         * text color.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * ""#fff""
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                         * @default
                                         * "normal"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                         * @default
                                         * "normal"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                         */
                                        fontWeight?: string | number | undefined;

                                        /**
                                         * font family
                                         *
                                         * Can also be 'serif' , 'monospace',
                                         * ...
                                         *
                                         * @default
                                         * "sans-serif"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string | undefined;

                                        /**
                                         * font size
                                         *
                                         * @default
                                         * 12
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string | undefined;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         * `width` or `height` can be specified
                                         * when using background image, or auto
                                         * adapted by default.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                         */
                                        backgroundColor?: object | string | undefined;

                                        /**
                                         * Border color of the text fregment.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string | undefined;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number | undefined;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number | undefined;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string | undefined;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number | undefined;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number | undefined;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
                                         */
                                        height?: number | string | undefined;

                                        /**
                                         * Storke color of the text.
                                         *
                                         * If set as `'auto'`, the color will
                                         * assigned as visual color, such as
                                         * series color.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string | undefined;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number | undefined;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string | undefined;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number | undefined;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number | undefined;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.animation
                 */
                animation?: boolean | undefined;

                /**
                 * Whether to set graphic number threshold to animation.
                 * Animation will be disabled when graphic number is larger
                 * than threshold.
                 *
                 * @default
                 * 2000
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.animationThreshold
                 */
                animationThreshold?: number | undefined;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea)
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.animationDuration
                 */
                animationDuration?: Function | number | undefined;

                /**
                 * Easing method used for the first animation.
                 * Varied easing effects can be found at
                 * [easing effect example](https://echarts.apache.org/examples/en/editor.html?c=line-easing)
                 * .
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.animationEasing
                 */
                animationEasing?: string | undefined;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.animationDelay
                 */
                animationDelay?: Function | number | undefined;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea)
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number | undefined;

                /**
                 * Easing method used for animation.
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.animationEasingUpdate
                 */
                animationEasingUpdate?: string | undefined;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.markArea)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.markArea.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number | undefined;
            } | undefined;

            /**
             * Whether to enable animation.
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-funnel.animation
             */
            animation?: boolean | undefined;

            /**
             * Whether to set graphic number threshold to animation.
             * Animation will be disabled when graphic number is larger than
             * threshold.
             *
             * @default
             * 2000
             * @see https://echarts.apache.org/en/option.html#series-funnel.animationThreshold
             */
            animationThreshold?: number | undefined;

            /**
             * Duration of the first animation, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel)
             *
             * @default
             * 1000
             * @see https://echarts.apache.org/en/option.html#series-funnel.animationDuration
             */
            animationDuration?: Function | number | undefined;

            /**
             * Easing method used for the first animation.
             * Varied easing effects can be found at
             * [easing effect example](https://echarts.apache.org/examples/en/editor.html?c=line-easing)
             * .
             *
             * @default
             * "cubicOut"
             * @see https://echarts.apache.org/en/option.html#series-funnel.animationEasing
             */
            animationEasing?: string | undefined;

            /**
             * Delay before updating the first animation, which supports callback
             * function for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.animationDelay
             */
            animationDelay?: Function | number | undefined;

            /**
             * Time for animation to complete, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel)
             *
             * @default
             * 300
             * @see https://echarts.apache.org/en/option.html#series-funnel.animationDurationUpdate
             */
            animationDurationUpdate?: Function | number | undefined;

            /**
             * Easing method used for animation.
             *
             * @default
             * "cubicOut"
             * @see https://echarts.apache.org/en/option.html#series-funnel.animationEasingUpdate
             */
            animationEasingUpdate?: string | undefined;

            /**
             * Delay before updating animation, which supports callback function
             * for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.animationDelayUpdate
             */
            animationDelayUpdate?: Function | number | undefined;

            /**
             * tooltip settings in this series.
             *
             * @see https://echarts.apache.org/en/option.html#series-funnel.tooltip
             */
            tooltip?: BaseTooltip | undefined;
        }

        namespace SeriesFunnel {
            interface DataObject {
                /**
                 * the name of data item.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.name
                 */
                name?: string | undefined;

                /**
                 * data value.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.value
                 */
                value?: number | undefined;

                /**
                 * Graphic style of , `emphasis` is the style when it is highlighted,
                 * like being hovered by mouse, or highlighted via legend connect.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.itemStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;

                /**
                 * The label configuration of a single data item.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.label
                 */
                label?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.show
                     */
                    show?: boolean | undefined;

                    /**
                     * Label position.
                     *
                     * **Options:**
                     *
                     * + `'left'`
                     *
                     * Left side of funnel chart.
                     * The corresponding trapezoid would be related to through
                     * [visual guide line](https://echarts.apache.org/en/option.html#series-funnel.labelLine)
                     * .
                     *
                     * + `'right'`
                     *
                     * Right side of funnel chart.
                     * The corresponding trapezoid would be related to through
                     * [visual guide line](https://echarts.apache.org/en/option.html#series-funnel.labelLine)
                     * .
                     *
                     * + `'inside'`
                     *
                     * Inside the trapezoid of funnel chart.
                     *
                     * + `'inner'` equals to `'inside'`.
                     *
                     * + `'center'` equals to `'inside'`.
                     *
                     * @default
                     * "outside"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.position
                     */
                    position?: string | undefined;

                    /**
                     * text color.
                     *
                     * @default
                     * ""#fff""
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.color
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
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.fontStyle
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
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.fontWeight
                     */
                    fontWeight?: string | number | undefined;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.backgroundColor
                     */
                    backgroundColor?: object | string | undefined;

                    /**
                     * Border color of the text fregment.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.height
                     */
                    height?: number | string | undefined;

                    /**
                     * Storke color of the text.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {
                            /**
                             * text color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;
                } | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine
                 */
                labelLine?: {
                    /**
                     * Whether to show visual guide line.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.show
                     */
                    show?: boolean | undefined;

                    /**
                     * The length of the first part from visual guide line.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.length
                     */
                    length?: number | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.lineStyle
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.labelLine.lineStyle)
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.lineStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * line width.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.lineStyle.width
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
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.lineStyle.type
                         */
                        type?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.labelLine.lineStyle)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.lineStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.lineStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.lineStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.lineStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.lineStyle.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;

                    /**
                     * The style of visual guide line in emphasis status.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.emphasis
                     */
                    emphasis?: {
                        /**
                         * Whether to show visual guide line.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.emphasis.show
                         */
                        show?: boolean | undefined;

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.emphasis.lineStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.labelLine.emphasis.lineStyle)
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.emphasis.lineStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * line width.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.emphasis.lineStyle.width
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
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.emphasis.lineStyle.type
                             */
                            type?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.labelLine.emphasis.lineStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.emphasis.lineStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.emphasis.lineStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.emphasis.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.emphasis.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.labelLine.emphasis.lineStyle.opacity
                             */
                            opacity?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis
                 */
                emphasis?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.itemStyle
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.itemStyle)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.itemStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.itemStyle.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.itemStyle.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.itemStyle.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.itemStyle)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.itemStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.itemStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.itemStyle.opacity
                         */
                        opacity?: number | undefined;
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label
                     */
                    label?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.show
                         */
                        show?: boolean | undefined;

                        /**
                         * text color.
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.color
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
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.fontStyle
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
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.label)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.label)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.label)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.label)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {
                                /**
                                 * text color.
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @default
                                 * "normal"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                 */
                                fontWeight?: string | number | undefined;

                                /**
                                 * font family
                                 *
                                 * Can also be 'serif' , 'monospace', ...
                                 *
                                 * @default
                                 * "sans-serif"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine
                     */
                    labelLine?: {
                        /**
                         * Whether to show visual guide line.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.show
                         */
                        show?: boolean | undefined;

                        /**
                         * The length of the first part from visual guide line.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.length
                         */
                        length?: number | undefined;

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.lineStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.labelLine.lineStyle)
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.lineStyle.color
                             */
                            color?: EChartOption.Color | undefined;

                            /**
                             * line width.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.lineStyle.width
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
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.lineStyle.type
                             */
                            type?: string | undefined;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.labelLine.lineStyle)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.lineStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.lineStyle.shadowColor
                             */
                            shadowColor?: EChartOption.Color | undefined;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.lineStyle.opacity
                             */
                            opacity?: number | undefined;
                        } | undefined;

                        /**
                         * The style of visual guide line in emphasis status.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.emphasis
                         */
                        emphasis?: {
                            /**
                             * Whether to show visual guide line.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.emphasis.show
                             */
                            show?: boolean | undefined;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.emphasis.lineStyle
                             */
                            lineStyle?: {
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.labelLine.emphasis.lineStyle)
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.emphasis.lineStyle.color
                                 */
                                color?: EChartOption.Color | undefined;

                                /**
                                 * line width.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.emphasis.lineStyle.width
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
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.emphasis.lineStyle.type
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-funnel.funnel.data.emphasis.labelLine.emphasis.lineStyle)
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.emphasis.lineStyle.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.emphasis.lineStyle.shadowColor
                                 */
                                shadowColor?: EChartOption.Color | undefined;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.emphasis.lineStyle.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.emphasis.lineStyle.shadowOffsetY
                                 */
                                shadowOffsetY?: number | undefined;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.emphasis.labelLine.emphasis.lineStyle.opacity
                                 */
                                opacity?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * tooltip settings in this series data.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-funnel.data.tooltip
                 */
                tooltip?: BaseTooltip | undefined;
            }
        }
    }
}
