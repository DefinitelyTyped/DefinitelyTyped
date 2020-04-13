declare namespace echarts {
    namespace EChartOption {
        /**
         * **custom series**
         *
         * `custom series` supports customizing graphic elements, and then generate
         * more types of charts.
         *
         * echarts manages the creation, deletion, animation and interaction
         * with other components (like
         * [dataZoom](https://echarts.apache.org/en/option.html#dataZoom)
         * 、
         * [visualMap](https://echarts.apache.org/en/option.html#visualMap)
         * ), which frees developers from handle those issue themselves.
         *
         * **For example, a "x-range" chart is made by custom sereis:**
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-custom)
         *
         * **
         * [More samples of custom series](https://echarts.apache.org/examples/en/index.html#chart-type-custom)
         * **
         *
         * **
         * [A tutotial of custom series](https://echarts.apache.org/en/tutorial.html#Custom%20Series)
         * **
         *
         * **Customize the render logic (in renderItem method)**
         *
         * `custom series` requires developers to write a render logic by themselves.
         * This render logic is called
         * [renderItem](https://echarts.apache.org/en/option.html#series-custom.renderItem)
         * .
         *
         * For example:
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-custom)
         *
         * [renderItem](https://echarts.apache.org/en/option.html#series-custom.renderItem)
         * will be called on each data item.
         *
         * [renderItem](https://echarts.apache.org/en/option.html#series-custom.renderItem)
         * provides two parameters:
         *
         * + [params](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.params)
         * : provides info about the current series and data and coordinate
         * system.
         * + [api](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api)
         * : includes some methods.
         *
         * [renderItem](https://echarts.apache.org/en/option.html#series-custom.renderItem)
         * method should returns graphic elements definitions.See
         * [renderItem.return](https://echarts.apache.org/en/option.html#series-custom.renderItem.return)
         * .
         *
         * Generally, the main process of
         * [renderItem](https://echarts.apache.org/en/option.html#series-custom.renderItem)
         * is that retrieve value from data and convert them to graphic elements
         * on the current coordinate system. Two methods in
         * [renderItem.arguments.api](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api)
         * are always used in this procedure:
         *
         * + [api.value(...)](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.value)
         * is used to retrieve value from data.
         * For example, `api.value(0)`
         * retrieve the value of the first dimension in the current data item.
         * + [api.coord(...)](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.coord)
         * is used to convert data to coordinate.
         * For example, `var point = api.coord([api.value(0),
         * api.value(1)])`
         * converet the data to the point on the current coordinate system.
         *
         * Sometimes
         * [api.size(...)](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.size)
         * method is needed, which calculates the size on the coordinate system
         * by a given data range.
         *
         * Moreover,
         * [api.style(...)](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.style)
         * method can be used to set style.
         * It provides not only the style settings specified in
         * [series.itemStyle](https://echarts.apache.org/en/option.html#series-custom.itemStyle)
         * , but also the result of visual mapping.
         * This method can also be called like `api.style({fill:
         * 'green', stroke: 'yellow'})` to override those style settings.
         *
         * **Dimension mapping (by encode and dimension option)**
         *
         * In most cases,
         * [series.encode](https://echarts.apache.org/en/option.html#series-custom.encode)
         * is needed to be specified when using `custom series` serise, which
         * indicate the mapping of dimensions, and then echarts can render appropriate
         * axis by the extent of those data.
         *
         * `encode.tooltip`
         * and `encode.label`
         * can also be specified to define the content of default `tooltip`
         * and `label`.
         * [series.dimensions](https://echarts.apache.org/en/option.html#series-custom.dimensions)
         * can also be specified to defined names of each dimensions, which
         * will be displayed in tooltip.
         *
         * For example:
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-custom)
         *
         * **Controlled by dataZoom**
         *
         * When use `custom series` with
         * [dataZoom](https://echarts.apache.org/en/option.html#dataZoom)
         * ,
         * [dataZoom.filterMode](https://echarts.apache.org/en/option.html#dataZoom.filterMode)
         * usually be set as `'weakFilter'`, which prevent `dataItem` from being
         * filtered when only part of its dimensions are out of the current
         * data window.
         *
         * **Difference between `dataIndex` and `dataIndexInside`**
         *
         * + `dataIndex` is the index of a `dataItem` in the original data.
         * + `dataIndexInside` is the index of a `dataItem` in the current data
         * window (see
         * [dataZoom](https://echarts.apache.org/en/option.html#dataZoom)
         * .
         *
         * [renderItem.arguments.api](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api)
         * uses `dataIndexInside` as the input parameter but not `dataIndex`,
         * because conversion from `dataIndex` to `dataIndexInside` is time-consuming.
         *
         * **Event listener**
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-custom)
         *
         *
         * @see https://echarts.apache.org/en/option.html#series-custom
         */
        interface SeriesCustom {

            /**
             * @default
             * "custom"
             * @see https://echarts.apache.org/en/option.html#series-custom.type
             */
            type?: string;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.id
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
             * @see https://echarts.apache.org/en/option.html#series-custom.name
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
             * @see https://echarts.apache.org/en/option.html#series-custom.legendHoverLink
             */
            legendHoverLink?: boolean;

            /**
             * The coordinate used in the series, whose options are:
             *
             * + `null` or `'none'`
             *
             * No coordinate.
             *
             * + `'cartesian2d'`
             *
             * Use a two-dimensional rectangular coordinate (also known as Cartesian
             * coordinate), with
             * [xAxisIndex](https://echarts.apache.org/en/option.html#series-custom.xAxisIndex)
             * and
             * [yAxisIndex](https://echarts.apache.org/en/option.html#series-custom.yAxisIndex)
             * to assign the corresponding axis component.
             *
             * + `'polar'`
             *
             * Use polar coordinates, with
             * [polarIndex](https://echarts.apache.org/en/option.html#series-custom.polarIndex)
             * to assign the corresponding polar coordinate component.
             *
             * + `'geo'`
             *
             * Use geographic coordinate, with
             * [geoIndex](https://echarts.apache.org/en/option.html#series-custom.geoIndex)
             * to assign the corresponding geographic coordinate components.
             *
             * + `'none'`
             *
             * Do not use coordinate system.
             *
             *
             * @default
             * "cartesian2d"
             * @see https://echarts.apache.org/en/option.html#series-custom.coordinateSystem
             */
            coordinateSystem?: string;

            /**
             * Index of
             * [x axis](https://echarts.apache.org/en/option.html#xAxis)
             * to combine with, which is useful for multiple x axes in one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.xAxisIndex
             */
            xAxisIndex?: number;

            /**
             * Index of
             * [y axis](https://echarts.apache.org/en/option.html#yAxis)
             * to combine with, which is useful for multiple y axes in one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.yAxisIndex
             */
            yAxisIndex?: number;

            /**
             * Index of
             * [polar coordinate](https://echarts.apache.org/en/option.html#polar)
             * to combine with, which is useful for multiple polar axes in one
             * chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.polarIndex
             */
            polarIndex?: number;

            /**
             * Index of
             * [geographic coordinate](https://echarts.apache.org/en/option.html#geo)
             * to combine with, which is useful for multiple geographic axes
             * in one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.geoIndex
             */
            geoIndex?: number;

            /**
             * Index of
             * [calendar coordinates](https://echarts.apache.org/en/option.html#calendar)
             * to combine with, which is useful for multiple calendar coordinates
             * in one chart.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.calendarIndex
             */
            calendarIndex?: number;

            /**
             * `custom series` requires developers to write a render logic by
             * themselves. This render logic is called
             * [renderItem](https://echarts.apache.org/en/option.html#series-custom.renderItem)
             * .
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
             *
             * [renderItem](https://echarts.apache.org/en/option.html#series-custom.renderItem)
             * will be called on each data item.
             *
             * [renderItem](https://echarts.apache.org/en/option.html#series-custom.renderItem)
             * provides two parameters:
             *
             * + [params](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.params)
             * : provides info about the current series and data and coordinate
             * system.
             * + [api](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api)
             * : includes some methods.
             *
             * [renderItem](https://echarts.apache.org/en/option.html#series-custom.renderItem)
             * method should returns graphic elements definitions.See
             * [renderItem.return](https://echarts.apache.org/en/option.html#series-custom.renderItem.return)
             * .
             *
             * Generally, the main process of
             * [renderItem](https://echarts.apache.org/en/option.html#series-custom.renderItem)
             * is that retrieve value from data and convert them to graphic
             * elements on the current coordinate system. Two methods in
             * [renderItem.arguments.api](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api)
             * are always used in this procedure:
             *
             * + [api.value(...)](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.value)
             * is used to retrieve value from data.
             * For example, `api.value(0)`
             * retrieve the value of the first dimension in the current data
             * item.
             * + [api.coord(...)](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.coord)
             * is used to convert data to coordinate.
             * For example, `var point = api.coord([api.value(0),
             * api.value(1)])`
             * converet the data to the point on the current coordinate system.
             *
             * Sometimes
             * [api.size(...)](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.size)
             * method is needed, which calculates the size on the coordinate
             * system by a given data range.
             *
             * Moreover,
             * [api.style(...)](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.style)
             * method can be used to set style.
             * It provides not only the style settings specified in
             * [series.itemStyle](https://echarts.apache.org/en/option.html#series-custom.itemStyle)
             * , but also the result of visual mapping.
             * This method can also be called like `api.style({fill:
             * 'green', stroke: 'yellow'})` to override those style settings.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.renderItem
             */
            renderItem?: {

                /**
                 * Parameters of `renderItem`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments
                 */
                arguments?: {

                    /**
                     * The first parameter of `renderItem`, including:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.arguments)
                     *
                     * Difference between `dataIndex` and `dataIndexInside`:
                     *
                     * + `dataIndex` is the index of a `dataItem` in the original
                     * data.
                     * + `dataIndexInside` is the index of a `dataItem` in the
                     * current data window (see
                     * [dataZoom](https://echarts.apache.org/en/option.html#dataZoom)
                     * .
                     *
                     * [renderItem.arguments.api](https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api)
                     * uses `dataIndexInside` as the input parameter but not
                     * `dataIndex`, because conversion from `dataIndex` to `dataIndexInside`
                     * is time-consuming.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.params
                     */
                    params?: object;

                    /**
                     * The second parameter of `renderItem`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api
                     */
                    api?: {

                        /**
                         * Get value on the given dimension.
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.arguments.api)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.value
                         */
                        value?: Function;

                        /**
                         * Convert data to coordinate.
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.arguments.api)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.coord
                         */
                        coord?: Function;

                        /**
                         * Get the size by the given data range.
                         *
                         * For example, in `cartesian2d`, suppose calling `api.size([2,
                         * 4])` returns `[12.4,
                         * 55]`.
                         * It represents that on x axis, data range `2` corresponds
                         * to size `12.4`,
                         * and on y axis data range `4` corresponds to size
                         * `55`.
                         *
                         * In some coordinate systems (for example, polar) or
                         * when log axis is used, the size is different in different
                         * point.
                         * So the second parameter is necessary to calculate
                         * size on the given point.
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.arguments.api)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.size
                         */
                        size?: Function;

                        /**
                         * The method obtains style info defined in
                         * [series.itemStyle](https://echarts.apache.org/en/option.html#series-custom.itemStyle)
                         * , and visual info obtained by visual mapping, and
                         * return them.
                         * Those returned info can be assigned to `style` attribute
                         * of graphic element definition directly.
                         * Developers can also override style info by calling
                         * this method like this: `api.style({fill:
                         * 'green', stroke: 'yellow'})`.
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.arguments.api)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.style
                         */
                        style?: Function;

                        /**
                         * The method obtains style info defined in
                         * [series.itemStyle.emphasis](https://echarts.apache.org/en/option.html#series-custom.itemStyle.emphasis)
                         * , and visual info obtained by visual mapping, and
                         * return them.
                         * Those returned info can be assigned to `style` attribute
                         * of graphic element definition directly.
                         * Developers can also override style info by calling
                         * this method like this: `api.style({fill:
                         * 'green', stroke: 'yellow'})`.
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.arguments.api)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.styleEmphasis
                         */
                        styleEmphasis?: Function;

                        /**
                         * Get the visual info. It is rarely be used.
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.arguments.api)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.visual
                         */
                        visual?: Function;

                        /**
                         * When `barLayout` is needed, (for example, when attaching
                         * some extra graphic elements to bar chart), this method
                         * can be used to obtain bar layout info.
                         *
                         * See a
                         * [sample](https://echarts.apache.org/examples/en/editor.html?c=custom-bar-trend)
                         * .
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.arguments.api)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.barLayout
                         */
                        barLayout?: Function;

                        /**
                         * Obtain the current series index.
                         * Notice that the `currentSeriesIndex` is different
                         * from `seriesIndex` when legend is used to filter
                         * some series.
                         *
                         * ```
                         * @return {number}
                         *
                         * ```
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.currentSeriesIndices
                         */
                        currentSeriesIndices?: Function;

                        /**
                         * Obtain font string, which can be used on style setting
                         * directly.
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.arguments.api)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.font
                         */
                        font?: Function;

                        /**
                         * ```
                         * @return {number} Width of echarts containter.
                         *
                         * ```
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.getWidth
                         */
                        getWidth?: Function;

                        /**
                         * ```
                         * @return {number} Height of echarts container.
                         *
                         * ```
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.getHeight
                         */
                        getHeight?: Function;

                        /**
                         * ```
                         * @return {module:zrender} zrender instance.
                         *
                         * ```
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.getZr
                         */
                        getZr?: Function;

                        /**
                         * ```
                         * @return {number} The current devicePixelRatio。
                         *
                         * ```
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.arguments.api.getDevicePixelRatio
                         */
                        getDevicePixelRatio?: Function;
                    };
                };

                /**
                 * `renderItem` should returns graphic element definitions.
                 * Each graphic element is an object. See
                 * [graphic](https://echarts.apache.org/en/option.html#graphic.elements)
                 * for detailed info.
                 * (But width\\height\\top\\bottom is not supported here)
                 *
                 * If nothing should be rendered in this data item, just returns
                 * nothing.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem)
                 * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return
                 */
                return?: object;

                /**
                 * `group` is the only type that can contain children, so that
                 * a group of elements can be positioned and transformed together.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group
                 */
                return_group?: {

                    /**
                     * Must be specified when define a graphic element at the
                     * first time.
                     *
                     * Optional values:
                     *
                     * [image](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image)
                     * ,
                     * [text](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text)
                     * ,
                     * [circle](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle)
                     * ,
                     * [sector](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector)
                     * ,
                     * [ring](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring)
                     * ,
                     * [polygon](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon)
                     * ,
                     * [polyline](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline)
                     * ,
                     * [rect](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect)
                     * ,
                     * [line](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line)
                     * ,
                     * [bezierCurve](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve)
                     * ,
                     * [arc](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc)
                     * ,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * ,
                     *
                     *
                     * @default
                     * "group"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.type
                     */
                    type?: string;

                    /**
                     * id is used to specifying element when willing to update
                     * it. id can be ignored if you do not need it.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.id
                     */
                    id?: string;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.position
                     */
                    position?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.rotation
                     */
                    rotation?: number;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [1, 1]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.scale
                     */
                    scale?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.origin
                     */
                    origin?: number;

                    /**
                     * Define the overlap relationship between graphic elements.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.z2
                     */
                    z2?: number;

                    /**
                     * See
                     * [diffChildrenByName](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.diffChildrenByName)
                     * 。
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.name
                     */
                    name?: string;

                    /**
                     * User defined data, can be visited in event listeners.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_group)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.info
                     */
                    info?: any;

                    /**
                     * Whether response to mouse events / touch events.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.silent
                     */
                    silent?: boolean;

                    /**
                     * Whether the element is visible.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.invisible
                     */
                    invisible?: boolean;

                    /**
                     * Whether the element is totally ignored (neither render
                     * nor listen events).
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.ignore
                     */
                    ignore?: boolean;

                    /**
                     * Specify width of this `group`.
                     *
                     * This width is only used for the positioning of its children.
                     *
                     * When width is `0`, children can also be positioned according
                     * to its parent using `left: 'center'`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.width
                     */
                    width?: number;

                    /**
                     * Specify height of this `group`.
                     *
                     * This height is only used for the positioning of its children.
                     *
                     * When height is `0`, children can also be positioned according
                     * to its parent using `top: 'middle'`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.height
                     */
                    height?: number;

                    /**
                     * In
                     * [custom series](https://echarts.apache.org/en/option.html#series-custom)
                     * , when `diffChildrenByName` is set as `true`, for each
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * returned from
                     * [renderItem](https://echarts.apache.org/en/option.html#series-custom.renderItem)
                     * , "diff" will be performed to its
                     * [children](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.children)
                     * according to the
                     * [name](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.name)
                     * attribute of each graphic elements.
                     * Here "diff" means that map the coming graphic elements
                     * to the existing graphic elements when repainting according
                     * to `name`, which enables the transition animation if
                     * data is modified.
                     *
                     * But notice that the operation is performance consuming,
                     * do not use it for large data amount.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.diffChildrenByName
                     */
                    diffChildrenByName?: boolean;

                    /**
                     * A list of children, each item is a declaration of an
                     * element.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.children
                     */
                    children?: any[];

                    /**
                     * Empahsis style of the graphic element, whose structure
                     * is the same as
                     * [style](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group.styleEmphasis
                     */
                    styleEmphasis?: object;
                };

                /**
                 * Use
                 * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                 * to describe a path.
                 * Can be used to draw icons or any other shapes fitting the
                 * specified size by auto transforming.
                 *
                 * See examples:
                 * [icons](https://echarts.apache.org/examples/en/editor.html?c=custom-calendar-icon)
                 * and
                 * [shapes](https://echarts.apache.org/examples/en/editor.html?c=custom-gantt-flight)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path
                 */
                return_path?: {

                    /**
                     * Must be specified when define a graphic element at the
                     * first time.
                     *
                     * Optional values:
                     *
                     * [image](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image)
                     * ,
                     * [text](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text)
                     * ,
                     * [circle](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle)
                     * ,
                     * [sector](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector)
                     * ,
                     * [ring](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring)
                     * ,
                     * [polygon](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon)
                     * ,
                     * [polyline](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline)
                     * ,
                     * [rect](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect)
                     * ,
                     * [line](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line)
                     * ,
                     * [bezierCurve](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve)
                     * ,
                     * [arc](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc)
                     * ,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * ,
                     *
                     *
                     * @default
                     * "path"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.type
                     */
                    type?: string;

                    /**
                     * id is used to specifying element when willing to update
                     * it. id can be ignored if you do not need it.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.id
                     */
                    id?: string;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.position
                     */
                    position?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.rotation
                     */
                    rotation?: number;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [1, 1]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.scale
                     */
                    scale?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.origin
                     */
                    origin?: number;

                    /**
                     * Define the overlap relationship between graphic elements.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.z2
                     */
                    z2?: number;

                    /**
                     * See
                     * [diffChildrenByName](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.diffChildrenByName)
                     * 。
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.name
                     */
                    name?: string;

                    /**
                     * User defined data, can be visited in event listeners.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_path)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.info
                     */
                    info?: any;

                    /**
                     * Whether response to mouse events / touch events.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.silent
                     */
                    silent?: boolean;

                    /**
                     * Whether the element is visible.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.invisible
                     */
                    invisible?: boolean;

                    /**
                     * Whether the element is totally ignored (neither render
                     * nor listen events).
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.ignore
                     */
                    ignore?: boolean;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape
                     */
                    shape?: {

                        /**
                         * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
                         * .
                         *
                         * For example, `'M0,0 L0,-20 L30,-20 C42,-20 38,-1
                         * 50,-1 L70,-1 L70,0 Z'`。
                         *
                         * If
                         * [width](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.width)
                         * ,
                         * [height](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.height)
                         * ,
                         * [x](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.x)
                         * and
                         * [y](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.y)
                         * specified, `pathData` will be transformed to fit
                         * the defined rect.
                         * If they are not specified, do not do that.
                         *
                         * [layout](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.layout)
                         * can be used to specify the transform strategy.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.pathData
                         */
                        pathData?: string;

                        /**
                         * Alias of
                         * [pathData](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.pathData)
                         * .
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.d
                         */
                        d?: string;

                        /**
                         * If
                         * [width](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.width)
                         * ,
                         * [height](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.height)
                         * ,
                         * [x](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.x)
                         * and
                         * [y](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.y)
                         * specified, `pathData` will be transformed to fit
                         * the defined rect.
                         *
                         * `layout` can be used to specify the transform strategy.
                         *
                         * Optional value:
                         *
                         * + `'center'`: Keep aspect ratio, put the path in
                         * the center of the rect, expand as far as possible
                         * but never overflow.
                         * + `'cover'`: Transform the path according to the
                         * aspect ratio of the rect, fill the rect and do not
                         * overflow.
                         *
                         *
                         * @default
                         * "center"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.layout
                         */
                        layout?: string;

                        /**
                         * The x value of the left-top corner of the element
                         * in the coordinate system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.x
                         */
                        x?: number;

                        /**
                         * The y value of the left-top corner of the element
                         * in the coordinate system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.y
                         */
                        y?: number;

                        /**
                         * The width of the shape of the element.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.width
                         */
                        width?: number;

                        /**
                         * The height of the shape of the element.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.shape.height
                         */
                        height?: number;
                    };

                    /**
                     * More attributes in `style` (for example,
                     * [rich text](https://echarts.apache.org/en/tutorial.html#Rich%20Text)
                     * ), see the `style` related attributes in
                     * [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable)
                     * .
                     *
                     * Notice, the attribute names of the `style` of graphic
                     * elements is derived from `zrender`, which may be different
                     * from the attribute names in `echarts label`, `echarts
                     * itemStyle`, etc.,
                     * although they have the same meaning. For example:
                     *
                     * + [itemStyle.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.fill`
                     * + [itemStyle.borderColor](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.stroke`
                     * + [label.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.textFill`
                     * + [label.textBorderColor](https://echarts.apache.org/en/option.html#series-scatter.label.textBorderColor)
                     * => `style.textStroke`
                     * + ...
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.style
                     */
                    style?: {

                        /**
                         * Color filled in this element.
                         *
                         *
                         * @default
                         * '#000'
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.style.fill
                         */
                        fill?: string;

                        /**
                         * Color of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.style.stroke
                         */
                        stroke?: string;

                        /**
                         * Width of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.style.lineWidth
                         */
                        lineWidth?: number;

                        /**
                         * Width of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.style.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * X offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.style.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Y offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.style.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * color of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.style.shadowColor
                         */
                        shadowColor?: number;
                    };

                    /**
                     * Empahsis style of the graphic element, whose structure
                     * is the same as
                     * [style](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_path.styleEmphasis
                     */
                    styleEmphasis?: object;
                };

                /**
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image
                 */
                return_image?: {

                    /**
                     * Must be specified when define a graphic element at the
                     * first time.
                     *
                     * Optional values:
                     *
                     * [image](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image)
                     * ,
                     * [text](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text)
                     * ,
                     * [circle](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle)
                     * ,
                     * [sector](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector)
                     * ,
                     * [ring](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring)
                     * ,
                     * [polygon](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon)
                     * ,
                     * [polyline](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline)
                     * ,
                     * [rect](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect)
                     * ,
                     * [line](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line)
                     * ,
                     * [bezierCurve](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve)
                     * ,
                     * [arc](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc)
                     * ,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * ,
                     *
                     *
                     * @default
                     * "image"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.type
                     */
                    type?: string;

                    /**
                     * id is used to specifying element when willing to update
                     * it. id can be ignored if you do not need it.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.id
                     */
                    id?: string;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.position
                     */
                    position?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.rotation
                     */
                    rotation?: number;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [1, 1]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.scale
                     */
                    scale?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.origin
                     */
                    origin?: number;

                    /**
                     * Define the overlap relationship between graphic elements.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.z2
                     */
                    z2?: number;

                    /**
                     * See
                     * [diffChildrenByName](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.diffChildrenByName)
                     * 。
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.name
                     */
                    name?: string;

                    /**
                     * User defined data, can be visited in event listeners.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_image)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.info
                     */
                    info?: any;

                    /**
                     * Whether response to mouse events / touch events.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.silent
                     */
                    silent?: boolean;

                    /**
                     * Whether the element is visible.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.invisible
                     */
                    invisible?: boolean;

                    /**
                     * Whether the element is totally ignored (neither render
                     * nor listen events).
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.ignore
                     */
                    ignore?: boolean;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.style
                     */
                    style?: {

                        /**
                         * Specify contant of the image, can be a URL, or
                         * [dataURI](https://tools.ietf.org/html/rfc2397)
                         * .
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.style.image
                         */
                        image?: string;

                        /**
                         * The x value of the left-top corner of the element
                         * in the coordinate system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.style.x
                         */
                        x?: number;

                        /**
                         * The y value of the left-top corner of the element
                         * in the coordinate system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.style.y
                         */
                        y?: number;

                        /**
                         * The width of the shape of the element.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.style.width
                         */
                        width?: number;

                        /**
                         * The height of the shape of the element.
                         *
                         * More attributes in `style` (for example,
                         * [rich text](https://echarts.apache.org/en/tutorial.html#Rich%20Text)
                         * ), see the `style` related attributes in
                         * [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable)
                         * .
                         *
                         * Notice, the attribute names of the `style` of graphic
                         * elements is derived from `zrender`, which may be
                         * different from the attribute names in `echarts label`,
                         * `echarts itemStyle`, etc.,
                         * although they have the same meaning. For example:
                         *
                         * + [itemStyle.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                         * => `style.fill`
                         * + [itemStyle.borderColor](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                         * => `style.stroke`
                         * + [label.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                         * => `style.textFill`
                         * + [label.textBorderColor](https://echarts.apache.org/en/option.html#series-scatter.label.textBorderColor)
                         * => `style.textStroke`
                         * + ...
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.style.height
                         */
                        height?: number;

                        /**
                         * Color filled in this element.
                         *
                         *
                         * @default
                         * '#000'
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.style.fill
                         */
                        fill?: string;

                        /**
                         * Color of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.style.stroke
                         */
                        stroke?: string;

                        /**
                         * Width of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.style.lineWidth
                         */
                        lineWidth?: number;

                        /**
                         * Width of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.style.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * X offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.style.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Y offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.style.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * color of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.style.shadowColor
                         */
                        shadowColor?: number;
                    };

                    /**
                     * Empahsis style of the graphic element, whose structure
                     * is the same as
                     * [style](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image.styleEmphasis
                     */
                    styleEmphasis?: object;
                };

                /**
                 * Text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text
                 */
                return_text?: {

                    /**
                     * Must be specified when define a graphic element at the
                     * first time.
                     *
                     * Optional values:
                     *
                     * [image](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image)
                     * ,
                     * [text](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text)
                     * ,
                     * [circle](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle)
                     * ,
                     * [sector](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector)
                     * ,
                     * [ring](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring)
                     * ,
                     * [polygon](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon)
                     * ,
                     * [polyline](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline)
                     * ,
                     * [rect](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect)
                     * ,
                     * [line](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line)
                     * ,
                     * [bezierCurve](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve)
                     * ,
                     * [arc](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc)
                     * ,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * ,
                     *
                     *
                     * @default
                     * "text"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.type
                     */
                    type?: string;

                    /**
                     * id is used to specifying element when willing to update
                     * it. id can be ignored if you do not need it.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.id
                     */
                    id?: string;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.position
                     */
                    position?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.rotation
                     */
                    rotation?: number;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [1, 1]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.scale
                     */
                    scale?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.origin
                     */
                    origin?: number;

                    /**
                     * Define the overlap relationship between graphic elements.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.z2
                     */
                    z2?: number;

                    /**
                     * See
                     * [diffChildrenByName](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.diffChildrenByName)
                     * 。
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.name
                     */
                    name?: string;

                    /**
                     * User defined data, can be visited in event listeners.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_text)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.info
                     */
                    info?: any;

                    /**
                     * Whether response to mouse events / touch events.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.silent
                     */
                    silent?: boolean;

                    /**
                     * Whether the element is visible.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.invisible
                     */
                    invisible?: boolean;

                    /**
                     * Whether the element is totally ignored (neither render
                     * nor listen events).
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.ignore
                     */
                    ignore?: boolean;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style
                     */
                    style?: {

                        /**
                         * Text content. `\n` can be used as a line break.
                         *
                         *
                         * @default
                         * ''
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.text
                         */
                        text?: string;

                        /**
                         * The x value of the left-top corner of the element
                         * in the coordinate system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.x
                         */
                        x?: number;

                        /**
                         * The y value of the left-top corner of the element
                         * in the coordinate system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.y
                         */
                        y?: number;

                        /**
                         * Font size, font type, font weight, font color, follow
                         * the form of
                         * [css font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
                         * .
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_text.style)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.font
                         */
                        font?: string;

                        /**
                         * Text horizontal alignment.
                         * Optional values: `'left'`, `'center'`, `'right'`.
                         *
                         * `'left'` means the left side of the text block is
                         * specified by the
                         * [style.x](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.x)
                         * , while `'right'` means the right side of the text
                         * block is specified by
                         * [style.y](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.y)
                         * .
                         *
                         *
                         * @default
                         * "left"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.textAlign
                         */
                        textAlign?: string;

                        /**
                         * Text vertical alignment.
                         * Optional values: `'top'`, `'middle'`, `'bottom'`.
                         *
                         * More attributes in `style` (for example,
                         * [rich text](https://echarts.apache.org/en/tutorial.html#Rich%20Text)
                         * ), see the `style` related attributes in
                         * [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable)
                         * .
                         *
                         * Notice, the attribute names of the `style` of graphic
                         * elements is derived from `zrender`, which may be
                         * different from the attribute names in `echarts label`,
                         * `echarts itemStyle`, etc.,
                         * although they have the same meaning. For example:
                         *
                         * + [itemStyle.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                         * => `style.fill`
                         * + [itemStyle.borderColor](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                         * => `style.stroke`
                         * + [label.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                         * => `style.textFill`
                         * + [label.textBorderColor](https://echarts.apache.org/en/option.html#series-scatter.label.textBorderColor)
                         * => `style.textStroke`
                         * + ...
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.textVerticalAlign
                         */
                        textVerticalAlign?: string;

                        /**
                         * Color filled in this element.
                         *
                         *
                         * @default
                         * '#000'
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.fill
                         */
                        fill?: string;

                        /**
                         * Color of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.stroke
                         */
                        stroke?: string;

                        /**
                         * Width of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.lineWidth
                         */
                        lineWidth?: number;

                        /**
                         * Width of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * X offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Y offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * color of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.style.shadowColor
                         */
                        shadowColor?: number;
                    };

                    /**
                     * Empahsis style of the graphic element, whose structure
                     * is the same as
                     * [style](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text.styleEmphasis
                     */
                    styleEmphasis?: object;
                };

                /**
                 * Rectangle element.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect
                 */
                return_rect?: {

                    /**
                     * Must be specified when define a graphic element at the
                     * first time.
                     *
                     * Optional values:
                     *
                     * [image](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image)
                     * ,
                     * [text](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text)
                     * ,
                     * [circle](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle)
                     * ,
                     * [sector](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector)
                     * ,
                     * [ring](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring)
                     * ,
                     * [polygon](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon)
                     * ,
                     * [polyline](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline)
                     * ,
                     * [rect](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect)
                     * ,
                     * [line](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line)
                     * ,
                     * [bezierCurve](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve)
                     * ,
                     * [arc](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc)
                     * ,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * ,
                     *
                     *
                     * @default
                     * "rect"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.type
                     */
                    type?: string;

                    /**
                     * id is used to specifying element when willing to update
                     * it. id can be ignored if you do not need it.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.id
                     */
                    id?: string;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.position
                     */
                    position?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.rotation
                     */
                    rotation?: number;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [1, 1]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.scale
                     */
                    scale?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.origin
                     */
                    origin?: number;

                    /**
                     * Define the overlap relationship between graphic elements.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.z2
                     */
                    z2?: number;

                    /**
                     * See
                     * [diffChildrenByName](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.diffChildrenByName)
                     * 。
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.name
                     */
                    name?: string;

                    /**
                     * User defined data, can be visited in event listeners.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_rect)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.info
                     */
                    info?: any;

                    /**
                     * Whether response to mouse events / touch events.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.silent
                     */
                    silent?: boolean;

                    /**
                     * Whether the element is visible.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.invisible
                     */
                    invisible?: boolean;

                    /**
                     * Whether the element is totally ignored (neither render
                     * nor listen events).
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.ignore
                     */
                    ignore?: boolean;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.shape
                     */
                    shape?: {

                        /**
                         * The x value of the left-top corner of the element
                         * in the coordinate system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.shape.x
                         */
                        x?: number;

                        /**
                         * The y value of the left-top corner of the element
                         * in the coordinate system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.shape.y
                         */
                        y?: number;

                        /**
                         * The width of the shape of the element.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.shape.width
                         */
                        width?: number;

                        /**
                         * The height of the shape of the element.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.shape.height
                         */
                        height?: number;

                        /**
                         * Specify border radius of the rectangular here.
                         * Generally, `r` should be `[topLeftRadius, topRightRadius,
                         * BottomRightRadius, bottomLeftRadius]`, where each
                         * item is a number.
                         *
                         * Abbreviation is enabled, for example:
                         *
                         * + `r`: `1` means `[1, 1, 1, 1]`
                         * + `r`: `[1]` means `[1, 1, 1, 1]`
                         * + `r`: `[1, 2]` means `[1, 2, 1, 2]`
                         * + `r`: `[1, 2, 3]` means `[1, 2, 3, 2]`
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.shape.r
                         */
                        r?: any[];
                    };

                    /**
                     * More attributes in `style` (for example,
                     * [rich text](https://echarts.apache.org/en/tutorial.html#Rich%20Text)
                     * ), see the `style` related attributes in
                     * [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable)
                     * .
                     *
                     * Notice, the attribute names of the `style` of graphic
                     * elements is derived from `zrender`, which may be different
                     * from the attribute names in `echarts label`, `echarts
                     * itemStyle`, etc.,
                     * although they have the same meaning. For example:
                     *
                     * + [itemStyle.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.fill`
                     * + [itemStyle.borderColor](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.stroke`
                     * + [label.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.textFill`
                     * + [label.textBorderColor](https://echarts.apache.org/en/option.html#series-scatter.label.textBorderColor)
                     * => `style.textStroke`
                     * + ...
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.style
                     */
                    style?: {

                        /**
                         * Color filled in this element.
                         *
                         *
                         * @default
                         * '#000'
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.style.fill
                         */
                        fill?: string;

                        /**
                         * Color of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.style.stroke
                         */
                        stroke?: string;

                        /**
                         * Width of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.style.lineWidth
                         */
                        lineWidth?: number;

                        /**
                         * Width of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.style.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * X offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.style.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Y offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.style.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * color of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.style.shadowColor
                         */
                        shadowColor?: number;
                    };

                    /**
                     * Empahsis style of the graphic element, whose structure
                     * is the same as
                     * [style](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect.styleEmphasis
                     */
                    styleEmphasis?: object;
                };

                /**
                 * Circle element.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle
                 */
                return_circle?: {

                    /**
                     * Must be specified when define a graphic element at the
                     * first time.
                     *
                     * Optional values:
                     *
                     * [image](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image)
                     * ,
                     * [text](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text)
                     * ,
                     * [circle](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle)
                     * ,
                     * [sector](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector)
                     * ,
                     * [ring](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring)
                     * ,
                     * [polygon](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon)
                     * ,
                     * [polyline](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline)
                     * ,
                     * [rect](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect)
                     * ,
                     * [line](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line)
                     * ,
                     * [bezierCurve](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve)
                     * ,
                     * [arc](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc)
                     * ,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * ,
                     *
                     *
                     * @default
                     * "circle"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.type
                     */
                    type?: string;

                    /**
                     * id is used to specifying element when willing to update
                     * it. id can be ignored if you do not need it.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.id
                     */
                    id?: string;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.position
                     */
                    position?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.rotation
                     */
                    rotation?: number;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [1, 1]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.scale
                     */
                    scale?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.origin
                     */
                    origin?: number;

                    /**
                     * Define the overlap relationship between graphic elements.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.z2
                     */
                    z2?: number;

                    /**
                     * See
                     * [diffChildrenByName](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.diffChildrenByName)
                     * 。
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.name
                     */
                    name?: string;

                    /**
                     * User defined data, can be visited in event listeners.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_circle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.info
                     */
                    info?: any;

                    /**
                     * Whether response to mouse events / touch events.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.silent
                     */
                    silent?: boolean;

                    /**
                     * Whether the element is visible.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.invisible
                     */
                    invisible?: boolean;

                    /**
                     * Whether the element is totally ignored (neither render
                     * nor listen events).
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.ignore
                     */
                    ignore?: boolean;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.shape
                     */
                    shape?: {

                        /**
                         * The x value of the center of the element in the coordinate
                         * system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.shape.cx
                         */
                        cx?: number;

                        /**
                         * The y value of the center of the element in the coordinate
                         * system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.shape.cy
                         */
                        cy?: number;

                        /**
                         * Outside radius.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.shape.r
                         */
                        r?: number;
                    };

                    /**
                     * More attributes in `style` (for example,
                     * [rich text](https://echarts.apache.org/en/tutorial.html#Rich%20Text)
                     * ), see the `style` related attributes in
                     * [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable)
                     * .
                     *
                     * Notice, the attribute names of the `style` of graphic
                     * elements is derived from `zrender`, which may be different
                     * from the attribute names in `echarts label`, `echarts
                     * itemStyle`, etc.,
                     * although they have the same meaning. For example:
                     *
                     * + [itemStyle.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.fill`
                     * + [itemStyle.borderColor](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.stroke`
                     * + [label.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.textFill`
                     * + [label.textBorderColor](https://echarts.apache.org/en/option.html#series-scatter.label.textBorderColor)
                     * => `style.textStroke`
                     * + ...
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.style
                     */
                    style?: {

                        /**
                         * Color filled in this element.
                         *
                         *
                         * @default
                         * '#000'
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.style.fill
                         */
                        fill?: string;

                        /**
                         * Color of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.style.stroke
                         */
                        stroke?: string;

                        /**
                         * Width of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.style.lineWidth
                         */
                        lineWidth?: number;

                        /**
                         * Width of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.style.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * X offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.style.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Y offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.style.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * color of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.style.shadowColor
                         */
                        shadowColor?: number;
                    };

                    /**
                     * Empahsis style of the graphic element, whose structure
                     * is the same as
                     * [style](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle.styleEmphasis
                     */
                    styleEmphasis?: object;
                };

                /**
                 * Ring element.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring
                 */
                return_ring?: {

                    /**
                     * Must be specified when define a graphic element at the
                     * first time.
                     *
                     * Optional values:
                     *
                     * [image](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image)
                     * ,
                     * [text](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text)
                     * ,
                     * [circle](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle)
                     * ,
                     * [sector](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector)
                     * ,
                     * [ring](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring)
                     * ,
                     * [polygon](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon)
                     * ,
                     * [polyline](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline)
                     * ,
                     * [rect](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect)
                     * ,
                     * [line](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line)
                     * ,
                     * [bezierCurve](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve)
                     * ,
                     * [arc](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc)
                     * ,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * ,
                     *
                     *
                     * @default
                     * "ring"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.type
                     */
                    type?: string;

                    /**
                     * id is used to specifying element when willing to update
                     * it. id can be ignored if you do not need it.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.id
                     */
                    id?: string;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.position
                     */
                    position?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.rotation
                     */
                    rotation?: number;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [1, 1]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.scale
                     */
                    scale?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.origin
                     */
                    origin?: number;

                    /**
                     * Define the overlap relationship between graphic elements.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.z2
                     */
                    z2?: number;

                    /**
                     * See
                     * [diffChildrenByName](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.diffChildrenByName)
                     * 。
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.name
                     */
                    name?: string;

                    /**
                     * User defined data, can be visited in event listeners.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_ring)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.info
                     */
                    info?: any;

                    /**
                     * Whether response to mouse events / touch events.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.silent
                     */
                    silent?: boolean;

                    /**
                     * Whether the element is visible.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.invisible
                     */
                    invisible?: boolean;

                    /**
                     * Whether the element is totally ignored (neither render
                     * nor listen events).
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.ignore
                     */
                    ignore?: boolean;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.shape
                     */
                    shape?: {

                        /**
                         * The x value of the center of the element in the coordinate
                         * system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.shape.cx
                         */
                        cx?: number;

                        /**
                         * The y value of the center of the element in the coordinate
                         * system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.shape.cy
                         */
                        cy?: number;

                        /**
                         * Outside radius.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.shape.r
                         */
                        r?: number;

                        /**
                         * Inside radius.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.shape.r0
                         */
                        r0?: number;
                    };

                    /**
                     * More attributes in `style` (for example,
                     * [rich text](https://echarts.apache.org/en/tutorial.html#Rich%20Text)
                     * ), see the `style` related attributes in
                     * [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable)
                     * .
                     *
                     * Notice, the attribute names of the `style` of graphic
                     * elements is derived from `zrender`, which may be different
                     * from the attribute names in `echarts label`, `echarts
                     * itemStyle`, etc.,
                     * although they have the same meaning. For example:
                     *
                     * + [itemStyle.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.fill`
                     * + [itemStyle.borderColor](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.stroke`
                     * + [label.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.textFill`
                     * + [label.textBorderColor](https://echarts.apache.org/en/option.html#series-scatter.label.textBorderColor)
                     * => `style.textStroke`
                     * + ...
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.style
                     */
                    style?: {

                        /**
                         * Color filled in this element.
                         *
                         *
                         * @default
                         * '#000'
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.style.fill
                         */
                        fill?: string;

                        /**
                         * Color of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.style.stroke
                         */
                        stroke?: string;

                        /**
                         * Width of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.style.lineWidth
                         */
                        lineWidth?: number;

                        /**
                         * Width of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.style.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * X offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.style.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Y offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.style.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * color of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.style.shadowColor
                         */
                        shadowColor?: number;
                    };

                    /**
                     * Empahsis style of the graphic element, whose structure
                     * is the same as
                     * [style](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring.styleEmphasis
                     */
                    styleEmphasis?: object;
                };

                /**
                 * Sector element.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector
                 */
                return_sector?: {

                    /**
                     * Must be specified when define a graphic element at the
                     * first time.
                     *
                     * Optional values:
                     *
                     * [image](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image)
                     * ,
                     * [text](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text)
                     * ,
                     * [circle](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle)
                     * ,
                     * [sector](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector)
                     * ,
                     * [ring](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring)
                     * ,
                     * [polygon](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon)
                     * ,
                     * [polyline](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline)
                     * ,
                     * [rect](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect)
                     * ,
                     * [line](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line)
                     * ,
                     * [bezierCurve](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve)
                     * ,
                     * [arc](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc)
                     * ,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * ,
                     *
                     *
                     * @default
                     * "sector"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.type
                     */
                    type?: string;

                    /**
                     * id is used to specifying element when willing to update
                     * it. id can be ignored if you do not need it.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.id
                     */
                    id?: string;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.position
                     */
                    position?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.rotation
                     */
                    rotation?: number;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [1, 1]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.scale
                     */
                    scale?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.origin
                     */
                    origin?: number;

                    /**
                     * Define the overlap relationship between graphic elements.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.z2
                     */
                    z2?: number;

                    /**
                     * See
                     * [diffChildrenByName](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.diffChildrenByName)
                     * 。
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.name
                     */
                    name?: string;

                    /**
                     * User defined data, can be visited in event listeners.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_sector)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.info
                     */
                    info?: any;

                    /**
                     * Whether response to mouse events / touch events.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.silent
                     */
                    silent?: boolean;

                    /**
                     * Whether the element is visible.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.invisible
                     */
                    invisible?: boolean;

                    /**
                     * Whether the element is totally ignored (neither render
                     * nor listen events).
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.ignore
                     */
                    ignore?: boolean;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.shape
                     */
                    shape?: {

                        /**
                         * The x value of the center of the element in the coordinate
                         * system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.shape.cx
                         */
                        cx?: number;

                        /**
                         * The y value of the center of the element in the coordinate
                         * system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.shape.cy
                         */
                        cy?: number;

                        /**
                         * Outside radius.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.shape.r
                         */
                        r?: number;

                        /**
                         * Inside radius.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.shape.r0
                         */
                        r0?: number;

                        /**
                         * start angle, in radian.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.shape.startAngle
                         */
                        startAngle?: number;

                        /**
                         * end anble, in radian.
                         *
                         *
                         * @default
                         * "Math.PI * 2"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.shape.endAngle
                         */
                        endAngle?: number;

                        /**
                         * Whether draw clockwise.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.shape.clockwise
                         */
                        clockwise?: boolean;
                    };

                    /**
                     * More attributes in `style` (for example,
                     * [rich text](https://echarts.apache.org/en/tutorial.html#Rich%20Text)
                     * ), see the `style` related attributes in
                     * [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable)
                     * .
                     *
                     * Notice, the attribute names of the `style` of graphic
                     * elements is derived from `zrender`, which may be different
                     * from the attribute names in `echarts label`, `echarts
                     * itemStyle`, etc.,
                     * although they have the same meaning. For example:
                     *
                     * + [itemStyle.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.fill`
                     * + [itemStyle.borderColor](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.stroke`
                     * + [label.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.textFill`
                     * + [label.textBorderColor](https://echarts.apache.org/en/option.html#series-scatter.label.textBorderColor)
                     * => `style.textStroke`
                     * + ...
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.style
                     */
                    style?: {

                        /**
                         * Color filled in this element.
                         *
                         *
                         * @default
                         * '#000'
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.style.fill
                         */
                        fill?: string;

                        /**
                         * Color of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.style.stroke
                         */
                        stroke?: string;

                        /**
                         * Width of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.style.lineWidth
                         */
                        lineWidth?: number;

                        /**
                         * Width of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.style.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * X offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.style.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Y offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.style.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * color of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.style.shadowColor
                         */
                        shadowColor?: number;
                    };

                    /**
                     * Empahsis style of the graphic element, whose structure
                     * is the same as
                     * [style](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector.styleEmphasis
                     */
                    styleEmphasis?: object;
                };

                /**
                 * Arc element.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc
                 */
                return_arc?: {

                    /**
                     * Must be specified when define a graphic element at the
                     * first time.
                     *
                     * Optional values:
                     *
                     * [image](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image)
                     * ,
                     * [text](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text)
                     * ,
                     * [circle](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle)
                     * ,
                     * [sector](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector)
                     * ,
                     * [ring](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring)
                     * ,
                     * [polygon](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon)
                     * ,
                     * [polyline](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline)
                     * ,
                     * [rect](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect)
                     * ,
                     * [line](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line)
                     * ,
                     * [bezierCurve](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve)
                     * ,
                     * [arc](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc)
                     * ,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * ,
                     *
                     *
                     * @default
                     * "arc"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.type
                     */
                    type?: string;

                    /**
                     * id is used to specifying element when willing to update
                     * it. id can be ignored if you do not need it.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.id
                     */
                    id?: string;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.position
                     */
                    position?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.rotation
                     */
                    rotation?: number;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [1, 1]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.scale
                     */
                    scale?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.origin
                     */
                    origin?: number;

                    /**
                     * Define the overlap relationship between graphic elements.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.z2
                     */
                    z2?: number;

                    /**
                     * See
                     * [diffChildrenByName](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.diffChildrenByName)
                     * 。
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.name
                     */
                    name?: string;

                    /**
                     * User defined data, can be visited in event listeners.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_arc)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.info
                     */
                    info?: any;

                    /**
                     * Whether response to mouse events / touch events.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.silent
                     */
                    silent?: boolean;

                    /**
                     * Whether the element is visible.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.invisible
                     */
                    invisible?: boolean;

                    /**
                     * Whether the element is totally ignored (neither render
                     * nor listen events).
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.ignore
                     */
                    ignore?: boolean;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.shape
                     */
                    shape?: {

                        /**
                         * The x value of the center of the element in the coordinate
                         * system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.shape.cx
                         */
                        cx?: number;

                        /**
                         * The y value of the center of the element in the coordinate
                         * system of its parent.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.shape.cy
                         */
                        cy?: number;

                        /**
                         * Outside radius.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.shape.r
                         */
                        r?: number;

                        /**
                         * Inside radius.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.shape.r0
                         */
                        r0?: number;

                        /**
                         * start angle, in radian.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.shape.startAngle
                         */
                        startAngle?: number;

                        /**
                         * end anble, in radian.
                         *
                         *
                         * @default
                         * "Math.PI * 2"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.shape.endAngle
                         */
                        endAngle?: number;

                        /**
                         * Whether draw clockwise.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.shape.clockwise
                         */
                        clockwise?: boolean;
                    };

                    /**
                     * More attributes in `style` (for example,
                     * [rich text](https://echarts.apache.org/en/tutorial.html#Rich%20Text)
                     * ), see the `style` related attributes in
                     * [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable)
                     * .
                     *
                     * Notice, the attribute names of the `style` of graphic
                     * elements is derived from `zrender`, which may be different
                     * from the attribute names in `echarts label`, `echarts
                     * itemStyle`, etc.,
                     * although they have the same meaning. For example:
                     *
                     * + [itemStyle.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.fill`
                     * + [itemStyle.borderColor](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.stroke`
                     * + [label.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.textFill`
                     * + [label.textBorderColor](https://echarts.apache.org/en/option.html#series-scatter.label.textBorderColor)
                     * => `style.textStroke`
                     * + ...
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.style
                     */
                    style?: {

                        /**
                         * Color filled in this element.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.style.fill
                         */
                        fill?: string;

                        /**
                         * Color of stroke.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.style.stroke
                         */
                        stroke?: string;

                        /**
                         * Width of stroke.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.style.lineWidth
                         */
                        lineWidth?: number;

                        /**
                         * Width of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.style.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * X offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.style.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Y offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.style.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * color of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.style.shadowColor
                         */
                        shadowColor?: number;
                    };

                    /**
                     * Empahsis style of the graphic element, whose structure
                     * is the same as
                     * [style](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc.styleEmphasis
                     */
                    styleEmphasis?: object;
                };

                /**
                 * Polygon element.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon
                 */
                return_polygon?: {

                    /**
                     * Must be specified when define a graphic element at the
                     * first time.
                     *
                     * Optional values:
                     *
                     * [image](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image)
                     * ,
                     * [text](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text)
                     * ,
                     * [circle](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle)
                     * ,
                     * [sector](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector)
                     * ,
                     * [ring](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring)
                     * ,
                     * [polygon](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon)
                     * ,
                     * [polyline](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline)
                     * ,
                     * [rect](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect)
                     * ,
                     * [line](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line)
                     * ,
                     * [bezierCurve](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve)
                     * ,
                     * [arc](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc)
                     * ,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * ,
                     *
                     *
                     * @default
                     * "polygon"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.type
                     */
                    type?: string;

                    /**
                     * id is used to specifying element when willing to update
                     * it. id can be ignored if you do not need it.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.id
                     */
                    id?: string;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position
                     */
                    position?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation
                     */
                    rotation?: number;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [1, 1]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale
                     */
                    scale?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin
                     */
                    origin?: number;

                    /**
                     * Define the overlap relationship between graphic elements.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.z2
                     */
                    z2?: number;

                    /**
                     * See
                     * [diffChildrenByName](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.diffChildrenByName)
                     * 。
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.name
                     */
                    name?: string;

                    /**
                     * User defined data, can be visited in event listeners.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_polygon)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.info
                     */
                    info?: any;

                    /**
                     * Whether response to mouse events / touch events.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.silent
                     */
                    silent?: boolean;

                    /**
                     * Whether the element is visible.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.invisible
                     */
                    invisible?: boolean;

                    /**
                     * Whether the element is totally ignored (neither render
                     * nor listen events).
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.ignore
                     */
                    ignore?: boolean;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.shape
                     */
                    shape?: {

                        /**
                         * A list of points, which defines the shape, like `[[22,
                         * 44], [44, 55], [11, 44], ...]`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.shape.points
                         */
                        points?: any[];

                        /**
                         * Whether smooth the line.
                         *
                         * + If the value is number, bezier interpolation is
                         * used, and the value specified the level of smooth,
                         * which is in the range of `[0, 1]`.
                         * + If the value is `'spline'`, Catmull-Rom spline
                         * interpolation is used.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.shape.smooth
                         */
                        smooth?: number | string;

                        /**
                         * Whether prevent the smooth process cause the line
                         * out of the bounding box.
                         *
                         * Only works when `smooth` is `number` (bezier smooth).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.shape.smoothConstraint
                         */
                        smoothConstraint?: boolean;
                    };

                    /**
                     * More attributes in `style` (for example,
                     * [rich text](https://echarts.apache.org/en/tutorial.html#Rich%20Text)
                     * ), see the `style` related attributes in
                     * [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable)
                     * .
                     *
                     * Notice, the attribute names of the `style` of graphic
                     * elements is derived from `zrender`, which may be different
                     * from the attribute names in `echarts label`, `echarts
                     * itemStyle`, etc.,
                     * although they have the same meaning. For example:
                     *
                     * + [itemStyle.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.fill`
                     * + [itemStyle.borderColor](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.stroke`
                     * + [label.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.textFill`
                     * + [label.textBorderColor](https://echarts.apache.org/en/option.html#series-scatter.label.textBorderColor)
                     * => `style.textStroke`
                     * + ...
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style
                     */
                    style?: {

                        /**
                         * Color filled in this element.
                         *
                         *
                         * @default
                         * '#000'
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style.fill
                         */
                        fill?: string;

                        /**
                         * Color of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style.stroke
                         */
                        stroke?: string;

                        /**
                         * Width of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style.lineWidth
                         */
                        lineWidth?: number;

                        /**
                         * Width of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * X offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Y offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * color of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style.shadowColor
                         */
                        shadowColor?: number;
                    };

                    /**
                     * Empahsis style of the graphic element, whose structure
                     * is the same as
                     * [style](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.styleEmphasis
                     */
                    styleEmphasis?: object;
                };

                /**
                 * Polyline element.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline
                 */
                return_polyline?: {

                    /**
                     * Must be specified when define a graphic element at the
                     * first time.
                     *
                     * Optional values:
                     *
                     * [image](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image)
                     * ,
                     * [text](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text)
                     * ,
                     * [circle](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle)
                     * ,
                     * [sector](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector)
                     * ,
                     * [ring](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring)
                     * ,
                     * [polygon](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon)
                     * ,
                     * [polyline](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline)
                     * ,
                     * [rect](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect)
                     * ,
                     * [line](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line)
                     * ,
                     * [bezierCurve](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve)
                     * ,
                     * [arc](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc)
                     * ,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * ,
                     *
                     *
                     * @default
                     * "polyline"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.type
                     */
                    type?: string;

                    /**
                     * id is used to specifying element when willing to update
                     * it. id can be ignored if you do not need it.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.id
                     */
                    id?: string;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.position
                     */
                    position?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.rotation
                     */
                    rotation?: number;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [1, 1]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.scale
                     */
                    scale?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.origin
                     */
                    origin?: number;

                    /**
                     * Define the overlap relationship between graphic elements.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.z2
                     */
                    z2?: number;

                    /**
                     * See
                     * [diffChildrenByName](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.diffChildrenByName)
                     * 。
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.name
                     */
                    name?: string;

                    /**
                     * User defined data, can be visited in event listeners.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_polyline)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.info
                     */
                    info?: any;

                    /**
                     * Whether response to mouse events / touch events.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.silent
                     */
                    silent?: boolean;

                    /**
                     * Whether the element is visible.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.invisible
                     */
                    invisible?: boolean;

                    /**
                     * Whether the element is totally ignored (neither render
                     * nor listen events).
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.ignore
                     */
                    ignore?: boolean;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.shape
                     */
                    shape?: {

                        /**
                         * A list of points, which defines the shape, like `[[22,
                         * 44], [44, 55], [11, 44], ...]`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.shape.points
                         */
                        points?: any[];

                        /**
                         * Whether smooth the line.
                         *
                         * + If the value is number, bezier interpolation is
                         * used, and the value specified the level of smooth,
                         * which is in the range of `[0, 1]`.
                         * + If the value is `'spline'`, Catmull-Rom spline
                         * interpolation is used.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.shape.smooth
                         */
                        smooth?: number | string;

                        /**
                         * Whether prevent the smooth process cause the line
                         * out of the bounding box.
                         *
                         * Only works when `smooth` is `number` (bezier smooth).
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.shape.smoothConstraint
                         */
                        smoothConstraint?: boolean;
                    };

                    /**
                     * More attributes in `style` (for example,
                     * [rich text](https://echarts.apache.org/en/tutorial.html#Rich%20Text)
                     * ), see the `style` related attributes in
                     * [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable)
                     * .
                     *
                     * Notice, the attribute names of the `style` of graphic
                     * elements is derived from `zrender`, which may be different
                     * from the attribute names in `echarts label`, `echarts
                     * itemStyle`, etc.,
                     * although they have the same meaning. For example:
                     *
                     * + [itemStyle.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.fill`
                     * + [itemStyle.borderColor](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.stroke`
                     * + [label.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.textFill`
                     * + [label.textBorderColor](https://echarts.apache.org/en/option.html#series-scatter.label.textBorderColor)
                     * => `style.textStroke`
                     * + ...
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.style
                     */
                    style?: {

                        /**
                         * Color filled in this element.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.style.fill
                         */
                        fill?: string;

                        /**
                         * Color of stroke.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.style.stroke
                         */
                        stroke?: string;

                        /**
                         * Width of stroke.
                         *
                         *
                         * @default
                         * 5
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.style.lineWidth
                         */
                        lineWidth?: number;

                        /**
                         * Width of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.style.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * X offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.style.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Y offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.style.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * color of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.style.shadowColor
                         */
                        shadowColor?: number;
                    };

                    /**
                     * Empahsis style of the graphic element, whose structure
                     * is the same as
                     * [style](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline.styleEmphasis
                     */
                    styleEmphasis?: object;
                };

                /**
                 * Line element.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line
                 */
                return_line?: {

                    /**
                     * Must be specified when define a graphic element at the
                     * first time.
                     *
                     * Optional values:
                     *
                     * [image](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image)
                     * ,
                     * [text](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text)
                     * ,
                     * [circle](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle)
                     * ,
                     * [sector](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector)
                     * ,
                     * [ring](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring)
                     * ,
                     * [polygon](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon)
                     * ,
                     * [polyline](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline)
                     * ,
                     * [rect](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect)
                     * ,
                     * [line](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line)
                     * ,
                     * [bezierCurve](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve)
                     * ,
                     * [arc](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc)
                     * ,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * ,
                     *
                     *
                     * @default
                     * "line"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.type
                     */
                    type?: string;

                    /**
                     * id is used to specifying element when willing to update
                     * it. id can be ignored if you do not need it.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.id
                     */
                    id?: string;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.position
                     */
                    position?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.rotation
                     */
                    rotation?: number;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [1, 1]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.scale
                     */
                    scale?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.origin
                     */
                    origin?: number;

                    /**
                     * Define the overlap relationship between graphic elements.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.z2
                     */
                    z2?: number;

                    /**
                     * See
                     * [diffChildrenByName](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.diffChildrenByName)
                     * 。
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.name
                     */
                    name?: string;

                    /**
                     * User defined data, can be visited in event listeners.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_line)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.info
                     */
                    info?: any;

                    /**
                     * Whether response to mouse events / touch events.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.silent
                     */
                    silent?: boolean;

                    /**
                     * Whether the element is visible.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.invisible
                     */
                    invisible?: boolean;

                    /**
                     * Whether the element is totally ignored (neither render
                     * nor listen events).
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.ignore
                     */
                    ignore?: boolean;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.shape
                     */
                    shape?: {

                        /**
                         * x value of the start point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.shape.x1
                         */
                        x1?: number;

                        /**
                         * y value of the start point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.shape.y1
                         */
                        y1?: number;

                        /**
                         * x value of the end point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.shape.x2
                         */
                        x2?: number;

                        /**
                         * y value of the end point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.shape.y2
                         */
                        y2?: number;

                        /**
                         * Specify the percentage of drawing, useful in animation.
                         *
                         * Value range: \[0, 1\].
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.shape.percent
                         */
                        percent?: number;
                    };

                    /**
                     * More attributes in `style` (for example,
                     * [rich text](https://echarts.apache.org/en/tutorial.html#Rich%20Text)
                     * ), see the `style` related attributes in
                     * [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable)
                     * .
                     *
                     * Notice, the attribute names of the `style` of graphic
                     * elements is derived from `zrender`, which may be different
                     * from the attribute names in `echarts label`, `echarts
                     * itemStyle`, etc.,
                     * although they have the same meaning. For example:
                     *
                     * + [itemStyle.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.fill`
                     * + [itemStyle.borderColor](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.stroke`
                     * + [label.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.textFill`
                     * + [label.textBorderColor](https://echarts.apache.org/en/option.html#series-scatter.label.textBorderColor)
                     * => `style.textStroke`
                     * + ...
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.style
                     */
                    style?: {

                        /**
                         * Color filled in this element.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.style.fill
                         */
                        fill?: string;

                        /**
                         * Color of stroke.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.style.stroke
                         */
                        stroke?: string;

                        /**
                         * Width of stroke.
                         *
                         *
                         * @default
                         * 5
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.style.lineWidth
                         */
                        lineWidth?: number;

                        /**
                         * Width of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.style.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * X offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.style.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Y offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.style.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * color of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.style.shadowColor
                         */
                        shadowColor?: number;
                    };

                    /**
                     * Empahsis style of the graphic element, whose structure
                     * is the same as
                     * [style](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line.styleEmphasis
                     */
                    styleEmphasis?: object;
                };

                /**
                 * Quadratic bezier curve or cubic bezier curve.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve
                 */
                return_bezierCurve?: {

                    /**
                     * Must be specified when define a graphic element at the
                     * first time.
                     *
                     * Optional values:
                     *
                     * [image](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_image)
                     * ,
                     * [text](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_text)
                     * ,
                     * [circle](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_circle)
                     * ,
                     * [sector](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_sector)
                     * ,
                     * [ring](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_ring)
                     * ,
                     * [polygon](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon)
                     * ,
                     * [polyline](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polyline)
                     * ,
                     * [rect](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_rect)
                     * ,
                     * [line](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_line)
                     * ,
                     * [bezierCurve](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve)
                     * ,
                     * [arc](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_arc)
                     * ,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * ,
                     *
                     *
                     * @default
                     * "bezierCurve"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.type
                     */
                    type?: string;

                    /**
                     * id is used to specifying element when willing to update
                     * it. id can be ignored if you do not need it.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.id
                     */
                    id?: string;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.position
                     */
                    position?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.rotation
                     */
                    rotation?: number;

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [1, 1]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.scale
                     */
                    scale?: any[];

                    /**
                     * `2D transform` can be applied to graphic elements, including:
                     *
                     * + [position](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.position)
                     * : `[horizontal translate offset, vertical translate offset]`,
                     * `[0, 0]` by default.
                     * Positive value means translate towards right or bottom.
                     * + [rotation](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.rotation)
                     * : Rotation in radian, `0` by default.
                     * Positive when anticlockwise.
                     * + [scale](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.scale)
                     * : `[horizontal scale factor, vertical scale factor]`,
                     * `[1, 1]` by default.
                     *
                     * [origin](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.origin)
                     * specifies the origin point of rotation and scaling, `[0,
                     * 0]` by default.
                     *
                     * Notice:
                     *
                     * + The coordinates specified in the transform attribute
                     * above are relative to the `[0, 0]` of the parent element
                     * (that is,
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * or the root canvas). Thus we are able to
                     * [group](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * multiple elements, and
                     * [groups](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_group)
                     * can be nested.
                     * + The order that the transform attributes are applied
                     * to a single graphic element is: Firstly, `rotation`,
                     * then, `scale`, finally, `position`.
                     *
                     *
                     * @default
                     * [0, 0]
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.origin
                     */
                    origin?: number;

                    /**
                     * Define the overlap relationship between graphic elements.
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.z2
                     */
                    z2?: number;

                    /**
                     * See
                     * [diffChildrenByName](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.diffChildrenByName)
                     * 。
                     *
                     *
                     * @default
                     * "undefined"
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.name
                     */
                    name?: string;

                    /**
                     * User defined data, can be visited in event listeners.
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.renderItem.return_bezierCurve)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.info
                     */
                    info?: any;

                    /**
                     * Whether response to mouse events / touch events.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.silent
                     */
                    silent?: boolean;

                    /**
                     * Whether the element is visible.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.invisible
                     */
                    invisible?: boolean;

                    /**
                     * Whether the element is totally ignored (neither render
                     * nor listen events).
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.ignore
                     */
                    ignore?: boolean;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.shape
                     */
                    shape?: {

                        /**
                         * x value of the start point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.shape.x1
                         */
                        x1?: number;

                        /**
                         * y value of the start point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.shape.y1
                         */
                        y1?: number;

                        /**
                         * x value of the end point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.shape.x2
                         */
                        x2?: number;

                        /**
                         * y value of the end point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.shape.y2
                         */
                        y2?: number;

                        /**
                         * x of control point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.shape.cpx1
                         */
                        cpx1?: number;

                        /**
                         * y of control point.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.shape.cpy1
                         */
                        cpy1?: number;

                        /**
                         * x of the second control point.
                         * If specified, cubic bezier is used.
                         *
                         * If both `cpx2` and `cpy2` are not set, quatratic
                         * bezier is used.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.shape.cpx2
                         */
                        cpx2?: number;

                        /**
                         * y of the second control point.
                         * If specified, cubic bezier is used.
                         *
                         * If both `cpx2` and `cpy2` are not set, quatratic
                         * bezier is used.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.shape.cpy2
                         */
                        cpy2?: number;

                        /**
                         * Specify the percentage of drawing, useful in animation.
                         *
                         * Value range: \[0, 1\].
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.shape.percent
                         */
                        percent?: number;
                    };

                    /**
                     * More attributes in `style` (for example,
                     * [rich text](https://echarts.apache.org/en/tutorial.html#Rich%20Text)
                     * ), see the `style` related attributes in
                     * [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable)
                     * .
                     *
                     * Notice, the attribute names of the `style` of graphic
                     * elements is derived from `zrender`, which may be different
                     * from the attribute names in `echarts label`, `echarts
                     * itemStyle`, etc.,
                     * although they have the same meaning. For example:
                     *
                     * + [itemStyle.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.fill`
                     * + [itemStyle.borderColor](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.stroke`
                     * + [label.color](https://echarts.apache.org/en/option.html#series-scatter.label.color)
                     * => `style.textFill`
                     * + [label.textBorderColor](https://echarts.apache.org/en/option.html#series-scatter.label.textBorderColor)
                     * => `style.textStroke`
                     * + ...
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.style
                     */
                    style?: {

                        /**
                         * Color filled in this element.
                         *
                         *
                         * @default
                         * '#000'
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.style.fill
                         */
                        fill?: string;

                        /**
                         * Color of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.style.stroke
                         */
                        stroke?: string;

                        /**
                         * Width of stroke.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.style.lineWidth
                         */
                        lineWidth?: number;

                        /**
                         * Width of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.style.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * X offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.style.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Y offset of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.style.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * color of shadow.
                         *
                         *
                         * @default
                         * "undefined"
                         * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.style.shadowColor
                         */
                        shadowColor?: number;
                    };

                    /**
                     * Empahsis style of the graphic element, whose structure
                     * is the same as
                     * [style](https://echarts.apache.org/en/option.html#series-custom.renderItem.return_polygon.style)
                     * .
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.renderItem.return_bezierCurve.styleEmphasis
                     */
                    styleEmphasis?: object;
                };
            };

            /**
             * Graphic style of , `emphasis` is the style when it is highlighted,
             * like being hovered by mouse, or highlighted via legend connect.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.itemStyle
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
                 * > [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.itemStyle)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.itemStyle.color
                 */
                color?: string;

                /**
                 * border color, whose format is similar to that of `color`.
                 *
                 *
                 * @default
                 * "#000"
                 * @see https://echarts.apache.org/en/option.html#series-custom.itemStyle.borderColor
                 */
                borderColor?: string;

                /**
                 * border width. No border when it is set to be 0.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.itemStyle.borderWidth
                 */
                borderWidth?: number;

                /**
                 * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                 * `'solid'` by default.
                 *
                 *
                 * @default
                 * "solid"
                 * @see https://echarts.apache.org/en/option.html#series-custom.itemStyle.borderType
                 */
                borderType?: string;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.itemStyle)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.itemStyle.shadowBlur
                 */
                shadowBlur?: number;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.itemStyle.shadowColor
                 */
                shadowColor?: string;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.itemStyle.shadowOffsetX
                 */
                shadowOffsetX?: number;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.itemStyle.shadowOffsetY
                 */
                shadowOffsetY?: number;

                /**
                 * Opacity of the component.
                 * Supports value from 0 to 1, and the component will not be
                 * drawn when set to 0.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.itemStyle.opacity
                 */
                opacity?: number;
            };

            /**
             * @see https://echarts.apache.org/en/option.html#series-custom.emphasis
             */
            emphasis?: {

                /**
                 * @see https://echarts.apache.org/en/option.html#series-custom.emphasis.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.emphasis.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.emphasis.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-custom.emphasis.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.emphasis.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-custom.emphasis.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.emphasis.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.emphasis.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.emphasis.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.emphasis.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.emphasis.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.emphasis.itemStyle.opacity
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
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
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
             * @see https://echarts.apache.org/en/option.html#series-custom.dimensions
             */
            dimensions?: any[];

            /**
             * Define what is encoded to for each dimension of `data`.
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
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
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
             *
             * Specially, in \[custom series(~series-custom), some property
             * in `encode`, corresponding to axis, can be set as null to make
             * the series not controlled by the axis, that is, the series data
             * will not be count in the extent of the axis, and the
             * [dataZoom](https://echarts.apache.org/en/option.html#dataZoom)
             * on the axis will not filter the series.
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.encode
             */
            encode?: object;

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
             *
             * @default
             * "column"
             * @see https://echarts.apache.org/en/option.html#series-custom.seriesLayoutBy
             */
            seriesLayoutBy?: string;

            /**
             * If
             * [series.data](https://echarts.apache.org/en/option.html#series.data)
             * is not specified, and
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * exists, the series will use `dataset`.
             * `datasetIndex` specifies which dataset will be used.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.datasetIndex
             */
            datasetIndex?: number;

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
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
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
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
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
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
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
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
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
             * @see https://echarts.apache.org/en/option.html#series-custom.data
             */
            data?: (
                (void | string | number | SeriesCustom.DataObject)[]
                | (void | string | number | SeriesCustom.DataObject)[][]
            );

            /**
             * `zlevel` value of all graghical elements in custom series.
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
             * @see https://echarts.apache.org/en/option.html#series-custom.zlevel
             */
            zlevel?: number;

            /**
             * `z` value of all graghical elements in custom series, which controls
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
             * @see https://echarts.apache.org/en/option.html#series-custom.z
             */
            z?: number;

            /**
             * Whether to ignore mouse events.
             * Default value is false, for triggering and responding to mouse
             * events.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.silent
             */
            silent?: boolean;

            /**
             * Whether to enable animation.
             *
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-custom.animation
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
             * @see https://echarts.apache.org/en/option.html#series-custom.animationThreshold
             */
            animationThreshold?: number;

            /**
             * Duration of the first animation, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
             *
             *
             * @default
             * 1000
             * @see https://echarts.apache.org/en/option.html#series-custom.animationDuration
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
             * @see https://echarts.apache.org/en/option.html#series-custom.animationEasing
             */
            animationEasing?: string;

            /**
             * Delay before updating the first animation, which supports callback
             * function for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.animationDelay
             */
            animationDelay?: Function | number;

            /**
             * Time for animation to complete, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
             *
             *
             * @default
             * 300
             * @see https://echarts.apache.org/en/option.html#series-custom.animationDurationUpdate
             */
            animationDurationUpdate?: Function | number;

            /**
             * Easing method used for animation.
             *
             *
             * @default
             * "cubicOut"
             * @see https://echarts.apache.org/en/option.html#series-custom.animationEasingUpdate
             */
            animationEasingUpdate?: string;

            /**
             * Delay before updating animation, which supports callback function
             * for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.animationDelayUpdate
             */
            animationDelayUpdate?: Function | number;

            /**
             * tooltip settings in this series.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-custom.tooltip
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.tooltip)
                 *
                 * + `Function`
                 *
                 * Callback function in the following form:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.tooltip)
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.tooltip)
                 *
                 * Or:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.tooltip)
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
                 * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.position
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.tooltip)
                 *
                 * The first parameter `params` is the data that the formatter
                 * needs. Its format is shown as follows:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.tooltip)
                 *
                 * When
                 * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                 * is `'axis'`, or when tooltip is triggered by
                 * [axisPointer](https://echarts.apache.org/en/option.html#xAxis.axisPointer)
                 * , `params` is the data array of multiple series.
                 * The content of each item of the array is the same as above.
                 * Besides,
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.tooltip)
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.tooltip)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.formatter
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
                 * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.backgroundColor
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
                 * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.borderColor
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
                 * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.borderWidth
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.tooltip)
                 *
                 *
                 * @default
                 * 5
                 * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.padding
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
                 * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle
                 */
                textStyle?: {

                    /**
                     * text color.
                     *
                     *
                     * @default
                     * "#fff"
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.color
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
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 14
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.fontSize
                     */
                    fontSize?: number;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.tooltip.textStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.lineHeight
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
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.width
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
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.height
                     */
                    height?: number | string;

                    /**
                     * Storke color of the text.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.textStyle.textShadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-custom.tooltip.extraCssText
                 */
                extraCssText?: string;
            };
        }

        namespace SeriesCustom {
            interface DataObject {

                /**
                 * Name of data item.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.data.name
                 */
                name?: string;

                /**
                 * Value of data item.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.data.value
                 */
                value?: number | number[];

                /**
                 * @see https://echarts.apache.org/en/option.html#series-custom.data.itemStyle
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
                     * > [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.itemStyle)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.itemStyle.opacity
                     */
                    opacity?: number;
                };

                /**
                 * @see https://echarts.apache.org/en/option.html#series-custom.data.emphasis
                 */
                emphasis?: {

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.emphasis.itemStyle
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.emphasis.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.emphasis.itemStyle.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.emphasis.itemStyle.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.emphasis.itemStyle.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.emphasis.itemStyle.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.emphasis.itemStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.emphasis.itemStyle.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.emphasis.itemStyle.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.emphasis.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.emphasis.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.emphasis.itemStyle.opacity
                         */
                        opacity?: number;
                    };
                };

                /**
                 * tooltip settings in this series data.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip
                 */
                tooltip?: {

                    /**
                     * > **Notice：**series.data.tooltip only works when
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
                     * array, which supports absolute position and relative
                     * percentage.
                     *
                     * Example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.tooltip)
                     *
                     * + `Function`
                     *
                     * Callback function in the following form:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.tooltip)
                     *
                     * **Parameters:**
                     * point: Mouse position.
                     * param: The same as formatter.
                     * dom: The DOM object of tooltip.
                     * rect: It is valid only when mouse is on graphic elements,
                     * which stands for a bounding box with `x`, `y`, `width`,
                     * and `height`.
                     * size: The size of dom echarts container.
                     * For example: `{contentSize: [width, height], viewSize:
                     * [width, height]}`.
                     *
                     * **Return:**
                     * Return value is an array standing for tooltip position,
                     * which can be absolute pixels, or relative percentage.
                     * Or can be an object, like `{left: 10, top: 30}`, or `{right:
                     * '20%', bottom: 40}`.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.tooltip)
                     *
                     * Or:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.tooltip)
                     *
                     * + `'inside'`
                     *
                     * Center position of the graphic element where the mouse
                     * is in, which is only valid when
                     * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     * + `'top'`
                     *
                     * Top position of the graphic element where the mouse is
                     * in, which is only valid when
                     * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     * + `'left'`
                     *
                     * Left position of the graphic element where the mouse
                     * is in, which is only valid when
                     * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     * + `'right'`
                     *
                     * Right position of the graphic element where the mouse
                     * is in, which is only valid when
                     * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     * + `'bottom'`
                     *
                     * Bottom position of the graphic element where the mouse
                     * is in, which is only valid when
                     * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.position
                     */
                    position?: any[] | string;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The content formatter of tooltip's floating layer which
                     * supports string template and callback function.
                     *
                     * **1\. String template**
                     *
                     * The template variables are `{a}`, `{b}`, `{c}`, `{d}`
                     * and `{e}`, which stands for series name, data name and
                     * data value and ect. When
                     * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                     * is set to be `'axis'`, there may be data from multiple
                     * series.
                     * In this time, series index can be refered as `{a0}`,
                     * `{a1}`, or `{a2}`.
                     *
                     * `{a}`, `{b}`, `{c}`, `{d}` have different meanings for
                     * different series types:
                     *
                     * + Line (area) charts, bar (column) charts, K charts:
                     * `{a}` for series name, `{b}` for category name, `{c}`
                     * for data value, `{d}` for none;
                     *
                     * + Scatter (bubble) charts: `{a}` for series name, `{b}`
                     * for data name, `{c}` for data value, `{d}` for none;
                     *
                     * + Map: `{a}` for series name, `{b}` for area name, `{c}`
                     * for merging data, `{d}` for none;
                     *
                     * + Pie charts, gauge charts, funnel charts: `{a}` for
                     * series name, `{b}` for data item name, `{c}` for data
                     * value, `{d}` for percentage.
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.tooltip)
                     *
                     * The first parameter `params` is the data that the formatter
                     * needs. Its format is shown as follows:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.tooltip)
                     *
                     * When
                     * [trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                     * is `'axis'`, or when tooltip is triggered by
                     * [axisPointer](https://echarts.apache.org/en/option.html#xAxis.axisPointer)
                     * , `params` is the data array of multiple series.
                     * The content of each item of the array is the same as
                     * above. Besides,
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.tooltip)
                     *
                     * **Note:** Using array to present all the parameters in
                     * ECharts 2.x is not supported anymore.
                     *
                     * The second parameter `ticket` is the asynchronous callback
                     * flag which should be used along with the third parameter
                     * `callback` when it is used.
                     *
                     * The third parameter `callback` is asynchronous callback.
                     * When the content of tooltip is acquired asynchronously,
                     * `ticket` and `htm` as introduced above can be used to
                     * update tooltip with callback.
                     *
                     * Example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.tooltip)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.formatter
                     */
                    formatter?: Function | string;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The background color of tooltip's floating layer.
                     *
                     *
                     * @default
                     * "rgba(50,50,50,0.7)"
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.backgroundColor
                     */
                    backgroundColor?: string;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The border color of tooltip's floating layer.
                     *
                     *
                     * @default
                     * '#333'
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.borderColor
                     */
                    borderColor?: string;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The border width of tooltip's floating layer.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * > **Notice：**series.data.tooltip only works when
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.tooltip)
                     *
                     *
                     * @default
                     * 5
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.padding
                     */
                    padding?: number;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://echarts.apache.org/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The text syle of tooltip's floating layer.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle
                     */
                    textStyle?: {

                        /**
                         * text color.
                         *
                         *
                         * @default
                         * "#fff"
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.color
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
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 14
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.fontSize
                         */
                        fontSize?: number;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-custom.custom.data.tooltip.textStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.lineHeight
                         */
                        lineHeight?: number;

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
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.width
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
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.height
                         */
                        height?: number | string;

                        /**
                         * Storke color of the text.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.textStyle.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;
                    };

                    /**
                     * > **Notice：**series.data.tooltip only works when
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
                     * @see https://echarts.apache.org/en/option.html#series-custom.data.tooltip.extraCssText
                     */
                    extraCssText?: string;
                };
            }
        }
    }
}
