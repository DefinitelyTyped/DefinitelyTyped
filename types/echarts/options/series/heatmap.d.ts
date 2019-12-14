declare namespace echarts {
    namespace EChartOption {
        /**
         * **heat map**
         *
         * Heat map mainly use colors to represent values, which must be used
         * along with
         * [visualMap](https://echarts.apache.org/en/option.html#visualMap)
         * component.
         *
         * It can be used in either
         * [rectangular coordinate](https://echarts.apache.org/en/option.html#grid)
         * or
         * [geographic coordinate](https://echarts.apache.org/en/option.html#geo)
         *
         * But the behaviour on them are quite different.
         * Rectangular coordinate must have two catagories to use it.
         *
         * Here are the examples using it in rectangular coordinate and geographic
         * coordinate:
         *
         * **rectangular coordinate:**
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap)
         *
         * **geographic coordinate:**
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap)
         *
         *
         * @see https://echarts.apache.org/en/option.html#series-heatmap
         */
        interface SeriesHeatmap {

            /**
             * @default
             * "heatmap"
             * @see https://echarts.apache.org/en/option.html#series-heatmap.type
             */
            type?: string;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.id
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
             * @see https://echarts.apache.org/en/option.html#series-heatmap.name
             */
            name?: string;

            /**
             * The coordinate used in the series, whose options are:
             *
             * + `'cartesian2d'`
             *
             * Use a two-dimensional rectangular coordinate (also known as Cartesian
             * coordinate), with
             * [xAxisIndex](https://echarts.apache.org/en/option.html#series-heatmap.xAxisIndex)
             * and
             * [yAxisIndex](https://echarts.apache.org/en/option.html#series-heatmap.yAxisIndex)
             * to assign the corresponding axis component.
             *
             * + `'geo'`
             *
             * Use geographic coordinate, with
             * [geoIndex](https://echarts.apache.org/en/option.html#series-heatmap.geoIndex)
             * to assign the corresponding geographic coordinate components.
             *
             *
             * @default
             * "cartesian2d"
             * @see https://echarts.apache.org/en/option.html#series-heatmap.coordinateSystem
             */
            coordinateSystem?: string;

            /**
             * Index of
             * [x axis](https://echarts.apache.org/en/option.html#xAxis)
             * to combine with, which is useful for multiple x axes in one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.xAxisIndex
             */
            xAxisIndex?: number;

            /**
             * Index of
             * [y axis](https://echarts.apache.org/en/option.html#yAxis)
             * to combine with, which is useful for multiple y axes in one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.yAxisIndex
             */
            yAxisIndex?: number;

            /**
             * Index of
             * [geographic coordinate](https://echarts.apache.org/en/option.html#geo)
             * to combine with, which is useful for multiple geographic axes
             * in one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.geoIndex
             */
            geoIndex?: number;

            /**
             * Index of
             * [calendar coordinates](https://echarts.apache.org/en/option.html#calendar)
             * to combine with, which is useful for multiple calendar coordinates
             * in one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.calendarIndex
             */
            calendarIndex?: number;

            /**
             * Blur size of each data point. It is valid with
             * [coordinateSystem](https://echarts.apache.org/en/option.html#series-heatmap.coordinateSystem)
             * of 'geo' value.
             *
             *
             * @default
             * 20
             * @see https://echarts.apache.org/en/option.html#series-heatmap.blurSize
             */
            blurSize?: number;

            /**
             * Minimum opacity. It is valid with
             * [coordinateSystem](https://echarts.apache.org/en/option.html#series-heatmap.coordinateSystem)
             * of 'geo' value.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.minOpacity
             */
            minOpacity?: number;

            /**
             * Maximum opacity. It is valid with
             * [coordinateSystem](https://echarts.apache.org/en/option.html#series-heatmap.coordinateSystem)
             * of 'geo' value.
             *
             *
             * @default
             * 1
             * @see https://echarts.apache.org/en/option.html#series-heatmap.maxOpacity
             */
            maxOpacity?: number;

            /**
             * Work for
             * [coordinateSystem](https://echarts.apache.org/en/option.html#series-heatmap.coordinateSystem)
             * : 'cartesian2d'.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.label
             */
            label?: {

                /**
                 * Whether to show label.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.show
                 */
                show?: boolean;

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
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.label)
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.position
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.distance
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rotate
                 */
                rotate?: number;

                /**
                 * Whether to move text slightly.
                 * For example: `[30, 40]` means move `30` horizontally and
                 * move `40` vertically.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.offset
                 */
                offset?: any[];

                /**
                 * text color.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 *
                 * @default
                 * ""#fff""
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.color
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.fontStyle
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.fontWeight
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.fontFamily
                 */
                fontFamily?: string;

                /**
                 * font size
                 *
                 *
                 * @default
                 * 12
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.fontSize
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.align
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.verticalAlign
                 */
                verticalAlign?: string;

                /**
                 * Line height of the text fregment.
                 *
                 * If `lineHeight` is not set in `rich`, `lineHeight` in parent
                 * level will be used. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.lineHeight
                 */
                lineHeight?: number;

                /**
                 * Background color of the text fregment.
                 *
                 * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                 *
                 * Or image can be used, for example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.label)
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.backgroundColor
                 */
                backgroundColor?: object | string;

                /**
                 * Border color of the text fregment.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.borderColor
                 */
                borderColor?: string;

                /**
                 * Border width of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.borderWidth
                 */
                borderWidth?: number;

                /**
                 * Border radius of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.borderRadius
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.padding
                 */
                padding?: any[] | number;

                /**
                 * Shadow color of the text block.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.shadowColor
                 */
                shadowColor?: string;

                /**
                 * Show blur of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.shadowBlur
                 */
                shadowBlur?: number;

                /**
                 * Shadow X offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.shadowOffsetX
                 */
                shadowOffsetX?: number;

                /**
                 * Shadow Y offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.shadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.width
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.height
                 */
                height?: number | string;

                /**
                 * Storke color of the text.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.textBorderColor
                 */
                textBorderColor?: string;

                /**
                 * Storke line width of the text.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.textBorderWidth
                 */
                textBorderWidth?: number;

                /**
                 * Shadow color of the text itself.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.textShadowColor
                 */
                textShadowColor?: string;

                /**
                 * Shadow blue of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.textShadowBlur
                 */
                textShadowBlur?: number;

                /**
                 * Shadow X offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.textShadowOffsetX
                 */
                textShadowOffsetX?: number;

                /**
                 * Shadow Y offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.textShadowOffsetY
                 */
                textShadowOffsetY?: number;

                /**
                 * "Rich text styles" can be defined in this `rich` property.
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.label)
                 *
                 * For more details, see
                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                 * please.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich
                 */
                rich?: {

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;
                    };
                };
            };

            /**
             * Work for
             * [coordinateSystem](https://echarts.apache.org/en/option.html#series-heatmap.coordinateSystem)
             * : 'cartesian2d'.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.itemStyle
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
                 * Gradient color and texture are also supported besides single
                 * colors.
                 * >
                 * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.itemStyle)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.itemStyle.color
                 */
                color?: string;

                /**
                 * border color, whose format is similar to that of `color`.
                 *
                 *
                 * @default
                 * "#000"
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.itemStyle.borderColor
                 */
                borderColor?: string;

                /**
                 * border width. No border when it is set to be 0.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.itemStyle.borderWidth
                 */
                borderWidth?: number;

                /**
                 * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                 * `'solid'` by default.
                 *
                 *
                 * @default
                 * "solid"
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.itemStyle.borderType
                 */
                borderType?: string;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.itemStyle)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.itemStyle.shadowBlur
                 */
                shadowBlur?: number;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.itemStyle.shadowColor
                 */
                shadowColor?: string;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.itemStyle.shadowOffsetX
                 */
                shadowOffsetX?: number;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.itemStyle.shadowOffsetY
                 */
                shadowOffsetY?: number;

                /**
                 * Opacity of the component.
                 * Supports value from 0 to 1, and the component will not be
                 * drawn when set to 0.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.itemStyle.opacity
                 */
                opacity?: number;
            };

            /**
             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis
             */
            emphasis?: {

                /**
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.emphasis.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.emphasis.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.itemStyle.opacity
                     */
                    opacity?: number;
                };

                /**
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label
                 */
                label?: {

                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.emphasis.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.offset
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.emphasis.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.emphasis.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich
                     */
                    rich?: {

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };
                };
            };

            /**
             * Data array of series, which can be in the following forms:
             *
             * Notice, if no `data` specified in series, and there is
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * in option, series will use the first
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * as its datasource. If `data` has been specified,
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * will not used.
             *
             * `series.datasetIndex` can be used to specify other
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * .
             *
             * Basically, data is represented by a two-dimension array, like
             * the example below, where each colum is named as a "dimension".
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap)
             *
             * + In
             * [cartesian (grid)](https://echarts.apache.org/en/option.html#grid)
             * , "dimX" and "dimY" correspond to
             * [xAxis](https://echarts.apache.org/en/option.html#xAxis)
             * and
             * [yAxis](https://echarts.apache.org/en/option.html#yAxis)
             * repectively.
             * + In
             * [polar](https://echarts.apache.org/en/option.html#polar)
             * "dimX" and "dimY" correspond to
             * [radiusAxis](https://echarts.apache.org/en/option.html#radiusAxis)
             * 和
             * [angleAxis](https://echarts.apache.org/en/option.html#anbleAxis)
             * repectively.
             * + Other dimensions are optional, which can be used in other place.
             * For example:
             * + [visualMap](https://echarts.apache.org/en/option.html#visualMap)
             * can map one or more dimensions to viusal (color, symbol size
             * ...).
             * + [series.symbolSize](https://echarts.apache.org/en/option.html#series.symbolSize)
             * can be set as a callback function, where symbol size can be calculated
             * by values of a certain dimension.
             * + Values in other dimensions can be shown by
             * [tooltip.formatter](https://echarts.apache.org/en/option.html#tooltip.formatter)
             * or
             * [series.label.formatter](https://echarts.apache.org/en/option.html#series.label.formatter)
             * .
             *
             * Especially, when there is one and only one category axis (axis.type
             * is `'category'`), data can be simply be represented by a one-dimension
             * array, like:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap)
             *
             * **Relationship between "value" and
             * [axis.type](https://echarts.apache.org/en/option.html#xAxis.type)
             * **
             *
             * + When a dimension corresponds to a value axis (axis.type
             * is `'value'` or `'log'`):
             *
             * The value can be a `number` (like `12`) (can also be a number
             * in a `string` format, like `'12'`).
             *
             * + When a dimension corresponds to a category axis (axis.type
             * is `'category'`):
             *
             * The value should be the ordinal of the axis.data
             * (based on `0`), the string value of the axis.data.
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap)
             *
             * There is an example of double category axes:
             * [Github Punchcard](https://echarts.apache.org/examples/en/editor.html?c=scatter-punchCard)
             * .
             *
             * + When a dimension corresponds to a time axis (type is `'time'`),
             * the value can be:
             *
             * + a timestamp, like `1484141700832`, which represents a UTC time.
             * + a date string, in one of the formats below:
             * + a subset of
             * [ISO 8601](http://www.ecma-international.org/ecma-262/5.1/#se
             * c-15.9.1.15)
             * , only including (all of these are treated as local time unless
             * timezone is specified, which is consistent with
             * [moment](https://momentjs.com/)
             * ):
             * + only part of year/month/date/time are specified: `'2012-03'`,
             * `'2012-03-01'`, `'2012-03-01 05'`, `'2012-03-01 05:06'`.
             * + separated by `"T"` or a space: `'2012-03-01T12:22:33.123'`,
             * `'2012-03-01 12:22:33.123'`.
             * + timezone specified: `'2012-03-01T12:22:33Z'`, `'2012-03-01T12:22:33+8000'`,
             * `'2012-03-01T12:22:33-05:00'`.
             * + other date string format (all of these are treated as local
             * time): `'2012'`, `'2012-3-1'`, `'2012/3/1'`, `'2012/03/01'`,
             * `'2009/6/12 2:00'`, `'2009/6/12 2:05:08'`, `'2009/6/12 2:05:08.123'`.
             * + a JavaScript Date instance created by user:
             * + Caution, when using a data string to create a Date instance,
             * [browser differences and inconsistencies](http://dygraphs.com/date-formats.html)
             * should be considered.
             * + For example: In chrome, `new Date('2012-01-01')` is treated
             * as a Jan 1st 2012 in UTC, while `new Date('2012-1-1')` and `new
             * Date('2012/01/01')` are treated as Jan 1st 2012 in local timezone.
             * In safari `new Date('2012-1-1')` is not supported.
             * + So if you intent to perform `new Date(dateString)`, it is strongly
             * recommended to use a time parse library (e.g.,
             * [moment](https://momentjs.com/)
             * ), or use `echarts.number.parseDate`, or check
             * [this](http://dygraphs.com/date-formats.html)
             * .
             *
             * **Customize a data item:**
             *
             * When needing to customize a data item, it can be set as an object,
             * where property `value` reprensent real value. For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap)
             *
             * **Empty value:**
             *
             * `'-'` or `null` or `undefined` or `NaN` can be used to describe
             * that a data item is not exists (ps：_not exist_ does not means
             * its value is `0`).
             *
             * For example, line chart can break when encounter an empty value,
             * and scatter chart do not display graphic elements for empty values.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.data
             */
            data?: (
                (void | number | string | SeriesHeatmap.DataObject)[]
                | (void | number | string | SeriesHeatmap.DataObject)[][]
            );

            /**
             * Mark point in a chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint)
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint)
                 *
                 *
                 * @default
                 * "pin"
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.symbol
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.symbolSize
                 */
                symbolSize?: any[] | Function | number;

                /**
                 * Rotate degree of symbol.
                 * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                 * `symbolRotate` value will be ignored, and compulsively use
                 * tangent angle.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.symbolRotate
                 */
                symbolRotate?: number;

                /**
                 * Whether to keep aspect for symbols in the form of `path://`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.symbolKeepAspect
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.symbolOffset
                 */
                symbolOffset?: any[];

                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.silent
                 */
                silent?: boolean;

                /**
                 * Label of mark point.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label
                 */
                label?: {

                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.formatter
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich
                     */
                    rich?: {

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis
                     */
                    emphasis?: {

                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.position
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.offset
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.formatter
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.color
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.width
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.height
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich
                         */
                        rich?: {

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.emphasis
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.emphasis.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.emphasis.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.itemStyle.emphasis.opacity
                         */
                        opacity?: number;
                    };
                };

                /**
                 * Data array for mark points, each of which is an object.
                 * Here are some ways to assign mark point position.
                 *
                 * 1. Assign coordinate according to container with
                 * [x](https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * **For example:**
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data
                 */
                data?: {

                    /**
                     * Mark point name.
                     *
                     *
                     * @default
                     * ''
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.name
                     */
                    name?: string;

                    /**
                     * X position according to container, in pixel.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.x
                     */
                    x?: number;

                    /**
                     * Y position according to container, in pixel.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.y
                     */
                    y?: number;

                    /**
                     * Label value, which can be ignored.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.value
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data)
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.symbol
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.symbolSize
                     */
                    symbolSize?: any[] | number;

                    /**
                     * Rotate degree of symbol.
                     * Note that when `symbol` is set to be `'arrow'` in `markLine`,
                     * `symbolRotate` value will be ignored, and compulsively
                     * use tangent angle.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.symbolRotate
                     */
                    symbolRotate?: number;

                    /**
                     * Whether to keep aspect for symbols in the form of `path://`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.symbolKeepAspect
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.symbolOffset
                     */
                    symbolOffset?: any[];

                    /**
                     * Mark point style.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.opacity
                         */
                        opacity?: number;

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.emphasis
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.itemStyle.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.emphasis.color
                             */
                            color?: string;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.emphasis.borderColor
                             */
                            borderColor?: string;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.emphasis.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.emphasis.borderType
                             */
                            borderType?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.itemStyle.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.emphasis.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.emphasis.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.emphasis.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.itemStyle.emphasis.opacity
                             */
                            opacity?: number;
                        };
                    };

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label
                     */
                    label?: {

                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.position
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.offset
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.color
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.height
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich
                         */
                        rich?: {

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;
                            };
                        };

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis
                         */
                        emphasis?: {

                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.show
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.emphasis)
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.position
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.distance
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rotate
                             */
                            rotate?: number;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.offset
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.color
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.emphasis)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.emphasis)
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.width
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.height
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.emphasis)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich
                             */
                            rich?: {

                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.data.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.animation
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.animationThreshold
                 */
                animationThreshold?: number;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.animationDuration
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.animationEasing
                 */
                animationEasing?: string;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.animationDelay
                 */
                animationDelay?: Function | number;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint)
                 *
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.animationEasingUpdate
                 */
                animationEasingUpdate?: string;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markPoint)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 * prefix
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markPoint.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number;
            };

            /**
             * Use a line in the chart to illustrate.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine
             */
            markLine?: {

                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.silent
                 */
                silent?: boolean;

                /**
                 * Symbol type at the two ends of the mark line.
                 * It can be an array for two ends, or assigned seperately.
                 * See
                 * [data.symbol](https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.symbol)
                 * for more format information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.symbol
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.symbolSize
                 */
                symbolSize?: any[] | number;

                /**
                 * Precison of marking line value, which is useful when displaying
                 * average value mark line.
                 *
                 *
                 * @default
                 * 2
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.precision
                 */
                precision?: number;

                /**
                 * Mark line text.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.label
                 */
                label?: {

                    /**
                     * Whether show label or not.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.label.show
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.label.position
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.label.formatter
                     */
                    formatter?: Function | string;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.label.emphasis
                     */
                    emphasis?: {

                        /**
                         * Whether show label or not.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.label.emphasis.show
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.label.emphasis.position
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.label.emphasis.formatter
                         */
                        formatter?: Function | string;
                    };
                };

                /**
                 * Mark line style.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.lineStyle)
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.color
                     */
                    color?: string;

                    /**
                     * line width.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.width
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.type
                     */
                    type?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.lineStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * Edge curvature, which supports value from 0 to 1.
                     * The larger the value, the greater the curvature.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.curveness
                     */
                    curveness?: number;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.emphasis
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.lineStyle.emphasis)
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.emphasis.color
                         */
                        color?: string;

                        /**
                         * line width.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.emphasis.width
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.emphasis.type
                         */
                        type?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.lineStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.lineStyle.emphasis.opacity
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
                 * [x](https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.y)
                 * attribute, in which pixel values and percentage are supported.
                 *
                 * When multiple attributes exist, priority is as the above
                 * order.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data
                 */
                data?: {

                    /**
                     * Data of the starting point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0
                     */
                    0?: {

                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-heatmap.markLine.data.0.name
                         */
                        name?: string;

                        /**
                         * X position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.x
                         */
                        x?: number;

                        /**
                         * Y position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.y
                         */
                        y?: number;

                        /**
                         * Label value, which can be ignored.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.value
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.0)
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.0)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.symbol
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.symbolSize
                         */
                        symbolSize?: any[] | number;

                        /**
                         * Rotate degree of starting point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.symbolRotate
                         */
                        symbolRotate?: number;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.symbolKeepAspect
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.symbolOffset
                         */
                        symbolOffset?: any[];

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.0.lineStyle)
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.color
                             */
                            color?: string;

                            /**
                             * line width.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.width
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.type
                             */
                            type?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.0.lineStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.curveness
                             */
                            curveness?: number;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.0.lineStyle.emphasis)
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * line width.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.emphasis.type
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.0.lineStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.emphasis.opacity
                                 */
                                opacity?: number;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.lineStyle.emphasis.curveness
                                 */
                                curveness?: number;
                            };
                        };

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.label
                         */
                        label?: {

                            /**
                             * Whether show label or not.
                             *
                             *
                             * @default
                             * "true"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.label.show
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.label.position
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.label.formatter
                             */
                            formatter?: Function | string;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.label.emphasis
                             */
                            emphasis?: {

                                /**
                                 * Whether show label or not.
                                 *
                                 *
                                 * @default
                                 * "true"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.label.emphasis.show
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.label.emphasis.position
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.0.label.emphasis.formatter
                                 */
                                formatter?: Function | string;
                            };
                        };
                    };

                    /**
                     * Data of the ending point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1
                     */
                    1?: {

                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-heatmap.markLine.data.1.name
                         */
                        name?: string;

                        /**
                         * X position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.x
                         */
                        x?: number;

                        /**
                         * Y position according to container, in pixel.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.y
                         */
                        y?: number;

                        /**
                         * Label value, which can be ignored.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.value
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.1)
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.1)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.symbol
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.symbolSize
                         */
                        symbolSize?: any[] | number;

                        /**
                         * Rotate degree of ending point symbol.
                         * Note that when `symbol` is set to be `'arrow'` in
                         * `markLine`, `symbolRotate` value will be ignored,
                         * and compulsively use tangent angle.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.symbolRotate
                         */
                        symbolRotate?: number;

                        /**
                         * Whether to keep aspect for symbols in the form of
                         * `path://`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.symbolKeepAspect
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.symbolOffset
                         */
                        symbolOffset?: any[];

                        /**
                         * Line style of this data item, which will be merged
                         * with `lineStyle` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.1.lineStyle)
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.color
                             */
                            color?: string;

                            /**
                             * line width.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.width
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.type
                             */
                            type?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.1.lineStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * Edge curvature, which supports value from 0 to
                             * 1.
                             * The larger the value, the greater the curvature.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.curveness
                             */
                            curveness?: number;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.1.lineStyle.emphasis)
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * line width.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.emphasis.type
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.1.lineStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.emphasis.opacity
                                 */
                                opacity?: number;

                                /**
                                 * Edge curvature, which supports value from
                                 * 0 to 1.
                                 * The larger the value, the greater the curvature.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.lineStyle.emphasis.curveness
                                 */
                                curveness?: number;
                            };
                        };

                        /**
                         * Label of this data item, which will be merged with
                         * `label` of starting point and ending point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.label
                         */
                        label?: {

                            /**
                             * Whether show label or not.
                             *
                             *
                             * @default
                             * "true"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.label.show
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.label.position
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.label.formatter
                             */
                            formatter?: Function | string;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.label.emphasis
                             */
                            emphasis?: {

                                /**
                                 * Whether show label or not.
                                 *
                                 *
                                 * @default
                                 * "true"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.label.emphasis.show
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.label.emphasis.position
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.data.1.label.emphasis.formatter
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.animation
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.animationThreshold
                 */
                animationThreshold?: number;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.animationDuration
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.animationEasing
                 */
                animationEasing?: string;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.animationDelay
                 */
                animationDelay?: Function | number;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine)
                 *
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.animationEasingUpdate
                 */
                animationEasingUpdate?: string;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markLine)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markLine.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number;
            };

            /**
             * Used to mark an area in chart.
             * For example, mark a time interval.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea
             */
            markArea?: {

                /**
                 * Whether to ignore mouse events.
                 * Default value is false, for triggering and responding to
                 * mouse events.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.silent
                 */
                silent?: boolean;

                /**
                 * Label in mark area.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label
                 */
                label?: {

                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.offset
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich
                     */
                    rich?: {

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis
                     */
                    emphasis?: {

                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.position
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.offset
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.color
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.emphasis)
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.width
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.height
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.emphasis)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich
                         */
                        rich?: {

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.opacity
                     */
                    opacity?: number;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.emphasis
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.emphasis.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.emphasis.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.emphasis.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.emphasis.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.itemStyle.emphasis)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.emphasis.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.emphasis.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.emphasis.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.emphasis.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.itemStyle.emphasis.opacity
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
                 * [x](https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.x)
                 * ,
                 * [y](https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.y)
                 * , where the unit is pixel (e.g.,
                 * the value is `5`), or percent (e.g.,
                 * the value is `'35%'`).
                 *
                 * The priority follows as above if more than one above definition
                 * used.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data
                 */
                data?: {

                    /**
                     * Specify the left-top point.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0
                     */
                    0?: {

                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-heatmap.markArea.data.0.name
                         */
                        name?: string;

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.x
                         */
                        x?: number;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.y
                         */
                        y?: number;

                        /**
                         * value of the item, not necessary.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.value
                         */
                        value?: number;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.color
                             */
                            color?: string;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.borderColor
                             */
                            borderColor?: string;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.borderType
                             */
                            borderType?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.emphasis.borderType
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.itemStyle.emphasis.opacity
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label
                         */
                        label?: {

                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.show
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.position
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.distance
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rotate
                             */
                            rotate?: number;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.offset
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.color
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.width
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.height
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich
                             */
                            rich?: {

                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number;
                                };
                            };

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis
                             */
                            emphasis?: {

                                /**
                                 * Whether to show label.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.show
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.position
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.distance
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rotate
                                 */
                                rotate?: number;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.offset
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich
                                 */
                                rich?: {

                                    /**
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                         */
                                        fontWeight?: string;

                                        /**
                                         * font family
                                         *
                                         * Can also be 'serif' , 'monospace',
                                         * ...
                                         *
                                         *
                                         * @default
                                         * "sans-serif"
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string;

                                        /**
                                         * font size
                                         *
                                         *
                                         * @default
                                         * 12
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.0.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1
                     */
                    1?: {

                        /**
                         * Name of the marker, which will display as a label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-heatmap.markArea.data.1.name
                         */
                        name?: string;

                        /**
                         * x value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.x
                         */
                        x?: number;

                        /**
                         * y value on screen coordinate system, can be pixel
                         * number (like `5`), or percent value (like `'20%'`).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.y
                         */
                        y?: number;

                        /**
                         * value of the item, not necessary.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.value
                         */
                        value?: number;

                        /**
                         * Style of the item.
                         * `itemStyle` of start point and end point will be
                         * merged together.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle
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
                             * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.color
                             */
                            color?: string;

                            /**
                             * border color, whose format is similar to that
                             * of `color`.
                             *
                             *
                             * @default
                             * "#000"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.borderColor
                             */
                            borderColor?: string;

                            /**
                             * border width.
                             * No border when it is set to be 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border type, which can be `'solid'`, `'dashed'`,
                             * or `'dotted'`. `'solid'` by default.
                             *
                             *
                             * @default
                             * "solid"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.borderType
                             */
                            borderType?: string;

                            /**
                             * Size of shadow blur.
                             * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                             * `shadowOffsetY` to set shadow to component.
                             *
                             * For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.itemStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow color. Support same format as `color`.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Offset distance on the horizontal direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Offset distance on the vertical direction of
                             * shadow.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.shadowOffsetY
                             */
                            shadowOffsetY?: number;

                            /**
                             * Opacity of the component.
                             * Supports value from 0 to 1, and the component
                             * will not be drawn when set to 0.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.opacity
                             */
                            opacity?: number;

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.emphasis
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
                                 * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.emphasis.color
                                 */
                                color?: string;

                                /**
                                 * border color, whose format is similar to
                                 * that of `color`.
                                 *
                                 *
                                 * @default
                                 * "#000"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * border width.
                                 * No border when it is set to be 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border type, which can be `'solid'`, `'dashed'`,
                                 * or `'dotted'`. `'solid'` by default.
                                 *
                                 *
                                 * @default
                                 * "solid"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.emphasis.borderType
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.itemStyle.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow color.
                                 * Support same format as `color`.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Offset distance on the horizontal direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Offset distance on the vertical direction
                                 * of shadow.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.emphasis.shadowOffsetY
                                 */
                                shadowOffsetY?: number;

                                /**
                                 * Opacity of the component.
                                 * Supports value from 0 to 1, and the component
                                 * will not be drawn when set to 0.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.itemStyle.emphasis.opacity
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label
                         */
                        label?: {

                            /**
                             * Whether to show label.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.show
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.position
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.distance
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rotate
                             */
                            rotate?: number;

                            /**
                             * Whether to move text slightly.
                             * For example: `[30, 40]` means move `30` horizontally
                             * and move `40` vertically.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.offset
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.color
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label)
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.width
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.height
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich
                             */
                            rich?: {

                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                     */
                                    fontWeight?: string;

                                    /**
                                     * font family
                                     *
                                     * Can also be 'serif' , 'monospace',
                                     * ...
                                     *
                                     *
                                     * @default
                                     * "sans-serif"
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number;
                                };
                            };

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis
                             */
                            emphasis?: {

                                /**
                                 * Whether to show label.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.show
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.position
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.distance
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rotate
                                 */
                                rotate?: number;

                                /**
                                 * Whether to move text slightly.
                                 * For example: `[30, 40]` means move `30` horizontally
                                 * and move `40` vertically.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.offset
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.emphasis)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.emphasis)
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;

                                /**
                                 * "Rich text styles" can be defined in this
                                 * `rich` property. For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.emphasis)
                                 *
                                 * For more details, see
                                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                                 * please.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich
                                 */
                                rich?: {

                                    /**
                                     * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                                         */
                                        fontWeight?: string;

                                        /**
                                         * font family
                                         *
                                         * Can also be 'serif' , 'monospace',
                                         * ...
                                         *
                                         *
                                         * @default
                                         * "sans-serif"
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                         */
                                        fontFamily?: string;

                                        /**
                                         * font size
                                         *
                                         *
                                         * @default
                                         * 12
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                         */
                                        verticalAlign?: string;

                                        /**
                                         * Line height of the text fregment.
                                         *
                                         * If `lineHeight` is not set in `rich`,
                                         * `lineHeight` in parent level will
                                         * be used. For example:
                                         *
                                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E)
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                         */
                                        borderColor?: string;

                                        /**
                                         * Border width of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                         */
                                        borderWidth?: number;

                                        /**
                                         * Border radius of the text fregment.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.padding
                                         */
                                        padding?: any[] | number;

                                        /**
                                         * Shadow color of the text block.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                         */
                                        shadowColor?: string;

                                        /**
                                         * Show blur of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                         */
                                        shadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                         */
                                        shadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text block.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                         */
                                        textBorderColor?: string;

                                        /**
                                         * Storke line width of the text.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                         */
                                        textBorderWidth?: number;

                                        /**
                                         * Shadow color of the text itself.
                                         *
                                         *
                                         * @default
                                         * "transparent"
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                         */
                                        textShadowColor?: string;

                                        /**
                                         * Shadow blue of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                         */
                                        textShadowBlur?: number;

                                        /**
                                         * Shadow X offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                         */
                                        textShadowOffsetX?: number;

                                        /**
                                         * Shadow Y offset of the text itself.
                                         *
                                         *
                                         * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.data.1.label.emphasis.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.animation
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.animationThreshold
                 */
                animationThreshold?: number;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.animationDuration
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.animationEasing
                 */
                animationEasing?: string;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.animationDelay
                 */
                animationDelay?: Function | number;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea)
                 *
                 *
                 * @default
                 * 300
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.animationEasingUpdate
                 */
                animationEasingUpdate?: string;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.markArea)
                 *
                 * See
                 * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.markArea.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number;
            };

            /**
             * `zlevel` value of all graghical elements in heatmap.
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
             * @see https://echarts.apache.org/en/option.html#series-heatmap.zlevel
             */
            zlevel?: number;

            /**
             * `z` value of all graghical elements in heatmap, which controls
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
             * @see https://echarts.apache.org/en/option.html#series-heatmap.z
             */
            z?: number;

            /**
             * Whether to ignore mouse events.
             * Default value is false, for triggering and responding to mouse
             * events.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.silent
             */
            silent?: boolean;

            /**
             * tooltip settings in this series.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.tooltip)
                 *
                 * + `Function`
                 *
                 * Callback function in the following form:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.tooltip)
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.tooltip)
                 *
                 * Or:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.tooltip)
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.position
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.tooltip)
                 *
                 * The first parameter `params` is the data that the formatter
                 * needs. Its format is shown as follows:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.tooltip)
                 *
                 * When
                 * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * is `'axis'`, or when tooltip is triggered by
                 * [axisPointer](https://echarts.apache.org/en/option.html#xAxis.axisPointer)
                 * , `params` is the data array of multiple series.
                 * The content of each item of the array is the same as above.
                 * Besides,
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.tooltip)
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.tooltip)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.formatter
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.backgroundColor
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.borderColor
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.borderWidth
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.tooltip)
                 *
                 *
                 * @default
                 * 5
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.padding
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle
                 */
                textStyle?: {

                    /**
                     * text color.
                     *
                     *
                     * @default
                     * "#fff"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.color
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 14
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.fontSize
                     */
                    fontSize?: number;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.tooltip.textStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.lineHeight
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.width
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.height
                     */
                    height?: number | string;

                    /**
                     * Storke color of the text.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.textStyle.textShadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.tooltip.extraCssText
                 */
                extraCssText?: string;
            };
        }

        namespace SeriesHeatmap {
            interface DataObject {

                /**
                 * Name of data item.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.name
                 */
                name?: string;

                /**
                 * Value of data item.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.value
                 */
                value?: any[];

                /**
                 * It is valid with
                 * [coordinateSystem](https://echarts.apache.org/en/option.html#series-heatmap.coordinateSystem)
                 * of 'cartesian2d' value.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label
                 */
                label?: {

                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.offset
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich
                     */
                    rich?: {

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };
                };

                /**
                 * Style of a single data point. It is valid with
                 * [coordinateSystem](https://echarts.apache.org/en/option.html#series-heatmap.coordinateSystem)
                 * of 'cartesian2d' value.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.itemStyle.opacity
                     */
                    opacity?: number;
                };

                /**
                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis
                 */
                emphasis?: {

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.itemStyle
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.emphasis.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.itemStyle.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.itemStyle.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.itemStyle.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.itemStyle.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.emphasis.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.itemStyle.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.itemStyle.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.itemStyle.opacity
                         */
                        opacity?: number;
                    };

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label
                     */
                    label?: {

                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.emphasis.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.position
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.offset
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.color
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.emphasis.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.height
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
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.emphasis.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich
                         */
                        rich?: {

                            /**
                             * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-heatmap.heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-heatmap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
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
