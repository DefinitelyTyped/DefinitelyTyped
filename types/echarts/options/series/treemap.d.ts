declare namespace echarts {
    namespace EChartOption {
        /**
         * [Treemap](https://en.wikipedia.org/wiki/Treemapping)
         * is a common way to present "hierarchical data" or "tree data".It
         * primarily highlights the important nodes at all hierarchies in 『Tree』with
         * area.
         *
         * **Example:**
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-treemap)
         *
         * **Visual Mapping:**
         *
         * treemap maps the numerical values to area.
         *
         * Moreover, it is able to map some dimensions of data to other visual
         * channel, like colors, lightness of colors and etc.
         *
         * About visual encoding, see details in
         * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
         * .
         *
         * **Drill Down:**
         *
         * The feature `drill down` means: when clicking a tree node, this node
         * will be set as root and its children will be shown. When
         * [leafDepth](https://echarts.apache.org/en/option.html#series-treemap.leafDepth)
         * is set, this feature is enabled.
         *
         * **An example about drill down:**
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-treemap)
         *
         * Notice: There are some difference in treemap configuration between
         * ECharts3 and ECharts2.
         * Some immature configuration ways are no longer supported:
         *
         * + The position method using `center/size` is no longer supported,
         * and `left/top/bottom/right/width/height` are used to position treemap,
         * as other components do.
         *
         * + The configuration item `breadcrumb` is moved outside `itemStyle/itemStyle.emphasis`,
         * and it is in the same level with `itemStyle` now.
         *
         * + The configuration item `root` is not avaliable temporarily.User
         * can zoom treemap to see some tiny or deep descendants, or using
         * [leafDepth](https://echarts.apache.org/en/option.html#series-treemap.leafDepth)
         * to enable the feature of "drill down".
         *
         * + The configuration item `label` is moved outside the `itemStyle/itemStyle.emphasis`,
         * and it is in the same level with `itemStyle` now.
         *
         * + The configuration items `itemStyle.childBorderWidth`
         * and `itemStyle.childBorderColor`
         * are not supported anymore (because in this way only 2 levels can
         * be defined).
         * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
         * is used to define all levels now.
         *
         *
         * @see https://echarts.apache.org/en/option.html#series-treemap
         */
        interface SeriesTreemap {
            /**
             * @default
             * "treemap"
             * @see https://echarts.apache.org/en/option.html#series-treemap.type
             */
            type?: string | undefined;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.id
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
             * @see https://echarts.apache.org/en/option.html#series-treemap.name
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
             * @see https://echarts.apache.org/en/option.html#series-treemap.zlevel
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
             * @see https://echarts.apache.org/en/option.html#series-treemap.z
             */
            z?: number | undefined;

            /**
             * Distance between treemap component and the left side of the container.
             *
             * `left` value can be instant pixel value like `20`; it can also
             * be percentage value relative to container width like `'20%'`;
             * and it can also be `'left'`, `'center'`, or `'right'`.
             *
             * If the `left` value is set to be `'left'`, `'center'`, or `'right'`,
             * then the component will be aligned automatically based on position.
             *
             *
             * @default
             * "center"
             * @see https://echarts.apache.org/en/option.html#series-treemap.left
             */
            left?: number | string | undefined;

            /**
             * Distance between treemap component and the top side of the container.
             *
             * `top` value can be instant pixel value like `20`; it can also
             * be percentage value relative to container width like `'20%'`;
             * and it can also be `'top'`, `'middle'`, or `'bottom'`.
             *
             * If the `left` value is set to be `'top'`, `'middle'`, or `'bottom'`,
             * then the component will be aligned automatically based on position.
             *
             *
             * @default
             * "middle"
             * @see https://echarts.apache.org/en/option.html#series-treemap.top
             */
            top?: number | string | undefined;

            /**
             * Distance between treemap component and the right side of the
             * container.
             *
             * `right` value can be instant pixel value like `20`; it can also
             * be percentage value relative to container width like `'20%'`.
             *
             * Adaptive by default.
             *
             *
             * @default
             * "auto"
             * @see https://echarts.apache.org/en/option.html#series-treemap.right
             */
            right?: number | string | undefined;

            /**
             * Distance between treemap component and the bottom side of the
             * container.
             *
             * `bottom` value can be instant pixel value like `20`; it can also
             * be percentage value relative to container width like `'20%'`.
             *
             * Adaptive by default.
             *
             *
             * @default
             * "auto"
             * @see https://echarts.apache.org/en/option.html#series-treemap.bottom
             */
            bottom?: number | string | undefined;

            /**
             * Width of treemap component.
             *
             *
             * @default
             * 80%
             * @see https://echarts.apache.org/en/option.html#series-treemap.width
             */
            width?: number | string | undefined;

            /**
             * Height of treemap component.
             *
             *
             * @default
             * 80%
             * @see https://echarts.apache.org/en/option.html#series-treemap.height
             */
            height?: number | string | undefined;

            /**
             * The expected square ratio.
             * Layout would approach the ratio as close as possible.
             *
             * It defaults to be the golden ratio: `0.5
             * * (1 + Math.sqrt(5))`.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.squareRatio
             */
            squareRatio?: number | undefined;

            /**
             * When `leafDepth` is set, the feature "drill down" is enabled,
             * which means when clicking a tree node, this node will be set
             * as root and its children will be shown.
             *
             * `leafDepth` represents how many levels are shown at most.
             * For example, when `leafDepth` is set to `1`, only one level will
             * be shown.
             *
             * `leafDepth` is `null`/`undefined` by default, which means that
             * "drill down" is disabled.
             *
             * **An example about drill down:**
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap)
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.leafDepth
             */
            leafDepth?: number | undefined;

            /**
             * Marker when the node is able to be drilled down.
             *
             *
             * @default
             * '▶'
             * @see https://echarts.apache.org/en/option.html#series-treemap.drillDownIcon
             */
            drillDownIcon?: string | undefined;

            /**
             * Whether to enable dragging roam (move and zoom).
             * Optional values are:
             *
             * + `false`: roam is disabled.
             * + `'scale'` or `'zoom'`: zoom only.
             * + `'move'` or `'pan'`: move (translation) only.
             * + `true`: both zoom and move (translation) are avaliable.
             *
             *
             * @default
             * "true"
             * @see https://echarts.apache.org/en/option.html#series-treemap.roam
             */
            roam?: boolean | string | undefined;

            /**
             * The behaviour when clicking a node. Optional values are:
             *
             * + `false`: Do nothing after clicked.
             * + `'zoomToNode'`: Zoom to clicked node.
             * + `'link'`: If there is
             * [link](https://echarts.apache.org/en/option.html#series-treemap.data.link)
             * in node data, do hyperlink jump after clicked.
             *
             *
             * @default
             * "zoomToNode"
             * @see https://echarts.apache.org/en/option.html#series-treemap.nodeClick
             */
            nodeClick?: boolean | string | undefined;

            /**
             * The treemap will be auto zoomed to a appropriate ratio when a
             * node is clicked (when
             * [nodeClick](https://echarts.apache.org/en/option.html#series-treemap.nodeClick)
             * is set as `'zoomToNode'` and no drill down happens).
             * This configuration item indicates the ratio.
             *
             *
             * @default
             * 0.32*0.32
             * @see https://echarts.apache.org/en/option.html#series-treemap.zoomToNodeRatio
             */
            zoomToNodeRatio?: number | undefined;

            /**
             * **Multiple Levels Configuration**
             *
             * treemap adopts 4-level configuration:
             *
             * ```
             * "each node" --> "each level" --> "each series".
             *
             * ```
             *
             * That is, we can configurate each node, can also configurate each
             * level of the tree, or set overall configurations on each series.
             * The highest priority is node configuration.
             *
             * `levels` is configurations on each levels, which is used most.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap)
             *
             * **The Rules about Visual Mapping**
             *
             * When designing a treemap, we primarily focus on how to visually
             * distinguish "different levels", "different categories in the
             * same level", which requires appropriate settings of "rectangular
             * color", "border thickness", "border color" and even "color saturation
             * of rectangular" and so on on each level.
             *
             * See
             * [example](https://echarts.apache.org/examples/en/editor.html?c=treemap-disk&edit=1&reset=1)
             *
             * The top level is divided into several parts by colors "red",
             * "green", "blue", and etc
             *
             *
             *
             * In each color block, `colorSaturation` is used to distinguish
             * nodes in sublevel.
             * The border color of the top level is "white", while the border
             * color of the sublevel is the color that based on the current
             * block color and processed by `borderColorSaturation`.
             *
             * `treemap` uses this rule of visual configuration: each level
             * computes its visual value based on the configurations (`color`,
             * `colorSaturation`, `borderColor`, `colorSaturation`) on this
             * level.
             * If there is no certain configuration in a node, it inherits the
             * configuration from its parent.
             *
             * In this way, this effect can be configured: set a `color` list
             * on the parent level, and set `colorSaturation` on the child level,
             * and then each node in the parent level would obtain a color from
             * the `color` list, and each node in the child level would obtain
             * a value from `colorSaturation` and compound it with the color
             * inherited from its parent node to get its final color.
             *
             * **Dimensions and "Extra Visual Mapping"**
             *
             * See the example below: every `value` field is set as an Array,
             * in which each item in the array represents a dimension respectively.
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap)
             *
             * `treemap` will map the first dimension (the first item of the
             * array) to "area".
             * If we want to express more information, we could map another
             * dimension (specified by
             * [series-treemap.visualDimension](https://echarts.apache.org/en/option.html#series-treemap.viusalDimension)
             * ) to another visual types, such as `colorSaturation` and so on.
             * See the
             * [example](https://echarts.apache.org/examples/en/editor.html?c=treemap-obama&edit=1&reset=1)
             * and select the legend 'Growth'.
             *
             * **How to avoid confusion by setting border/gap of node**
             *
             * If all of the border/gaps are set with the same color, confusion
             * might occur when rectangulars in different levels display at
             * the same time.
             *
             * See the
             * [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/treemap-borderColor&edit=1&reset=1)
             *
             * Noticed that the child rectangles in the red area are in the
             * deeper level than rectangles that are saparated by white gap.
             * So in the red area, basically we set gap color with red, and
             * use `borderColorSaturation` to lift the saturation.
             *
             * **Explanation about borderWidth, gapWidth, borderColor**
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap)
             *
             *
             * @default
             * []
             * @see https://echarts.apache.org/en/option.html#series-treemap.levels
             */
            levels?: {
                /**
                 * `treemap` is able to map any dimensions of data to visual.
                 *
                 * The value of
                 * [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * can be an array.
                 * And each item of the array represents a "dimension".
                 * `visualDimension` specifies the dimension on which visual
                 * mapping will be performed.
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `visualDimension` attribute could appear
                 * in more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.visualDimension
                 */
                visualDimension?: number | undefined;

                /**
                 * The minimal value of current level.
                 * Auto-statistics by default.
                 *
                 * When
                 * [colorMappingBy](https://echarts.apache.org/en/option.html#series-treemap.levels.colorMappingBy)
                 * is set to `'value'`, you are able to specify extent manually
                 * for visual mapping by specifying `visualMin` or `visualMax`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.visualMin
                 */
                visualMin?: number | undefined;

                /**
                 * The maximal value of current level.
                 * Auto-statistics by default.
                 *
                 * When
                 * [colorMappingBy](https://echarts.apache.org/en/option.html#series-treemap.levels.colorMappingBy)
                 * is set to `'value'`, you are able to specify extent manually
                 * for visual mapping by specifying `visualMin` or `visualMax`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.visualMax
                 */
                visualMax?: number | undefined;

                /**
                 * A color list for a level.
                 * Each node in the level will obtain a color from the color
                 * list (the rule see
                 * [colorMappingBy](https://echarts.apache.org/en/option.html#series-treemap.levels.colorMappingBy)
                 * ).
                 * It is empty by default, which means the global color list
                 * will be used.
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `color` attribute could appear in more
                 * than one places:
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.color
                 */
                color?: any[] | undefined;

                /**
                 * It indicates the range of tranparent rate (color alpha) for
                 * nodes in a level . The range of values is 0 ~ 1.
                 *
                 * For example, `colorAlpha` can be `[0.3, 1]`.
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `colorAlpha` attribute could appear in
                 * more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.colorAlpha
                 */
                colorAlpha?: any[] | undefined;

                /**
                 * It indicates the range of saturation (color alpha) for nodes
                 * in a level . The range of values is 0 ~ 1.
                 *
                 * For example, `colorSaturation` can be `[0.3, 1]`.
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `colorSaturation` attribute could appear
                 * in more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.colorSaturation
                 */
                colorSaturation?: number | undefined;

                /**
                 * Specify the rule according to which each node obtain color
                 * from
                 * [color list](https://echarts.apache.org/en/option.html#series-treemap.levels.color)
                 * . Optional values:
                 *
                 * + `'value'`:
                 *
                 * Map
                 * [series-treemap.data.value](https://echarts.apache.org/en/option.html#series-treemap.data.value)
                 * to color.
                 *
                 * In this way, the color of each node indicate its value.
                 *
                 * [visualDimension](https://echarts.apache.org/en/option.html#series-treemap.levels.visualDimension)
                 * can be used to specify which dimension of
                 * [data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * is used to perform visual mapping.
                 *
                 * + `'index'`:
                 *
                 * Map the `index` (ordinal number) of nodes to color.
                 * Namely, in a level, the first node is mapped to the first
                 * color of
                 * [color list](https://echarts.apache.org/en/option.html#series-treemap.levels.color)
                 * , and the second node gets the second color.
                 *
                 * In this way, adjacent nodes are distinguished by color.
                 *
                 * + `'id'`:
                 *
                 * Map
                 * [series-treemap.data.id](https://echarts.apache.org/en/option.html#series-treemap.data.id)
                 * to color.
                 *
                 * Since `id` is used to identify node, if user call `setOption`
                 * to modify the tree, each node will remain the original color
                 * before and after `setOption` called. See this
                 * [example](https://echarts.apache.org/examples/en/editor.html?c=treemap-obama&edit=1&reset=1)
                 * .
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `colorMappingBy` attribute could appear
                 * in more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @default
                 * "index"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.colorMappingBy
                 */
                colorMappingBy?: string | undefined;

                /**
                 * A node will not be shown when its area size is smaller than
                 * this value (unit: px square).
                 *
                 * In this way, tiny nodes will be hidden, otherwise they will
                 * huddle together.
                 * When user zoom the treemap, the area size will increase and
                 * the rectangle will be shown if the area size is larger than
                 * this threshold.
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `visibleMin` attribute could appear in
                 * more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @default
                 * 10
                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.visibleMin
                 */
                visibleMin?: number | undefined;

                /**
                 * Children will not be shown when area size of a node is smaller
                 * than this value (unit: px square).
                 *
                 * This can hide the details of nodes when the rectangular area
                 * is not large enough.
                 * When users zoom nodes, the child node would show if the area
                 * is larger than this threshold.
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `childrenVisibleMin` attribute could appear
                 * in more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.childrenVisibleMin
                 */
                childrenVisibleMin?: number | undefined;

                /**
                 * `label` decribes the style of the label in each node.
                 *
                 * > Tps: In treemap, `label` attribute could appear in more
                 * than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.formatter
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;

                    /**
                     * When the text is overflow, whether to replace the excess
                     * part with apostrophe.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.label.ellipsis
                     */
                    ellipsis?: boolean | undefined;
                } | undefined;

                /**
                 * `upperLabel` is used to specify whether show label when the
                 * node has children. When
                 * [upperLabel.show](https://echarts.apache.org/en/option.html#series-treemap.upperLabel.show)
                 * is set as `true`, the feature that "show parent label" is
                 * enabled.
                 *
                 * The same as
                 * [series-treemap.label](https://echarts.apache.org/en/option.html#series-treemap.label)
                 * , the option `upperLabel` can be placed at the root of
                 * [series-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * directly, or in
                 * [series-treemap.level](https://echarts.apache.org/en/option.html#series-treemap.level)
                 * , or in each item of
                 * [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * .
                 *
                 * Specifically,
                 * [series-treemap.label](https://echarts.apache.org/en/option.html#series-treemap.label)
                 * specifies the style when a node is a leaf, while `upperLabel`
                 * specifies the style when a node has children, in which case
                 * the label is displayed in the inner top of the node.
                 *
                 * See:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels)
                 *
                 * > Tps: In treemap, `label` attribute could appear in more
                 * than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel
                 */
                upperLabel?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.upperLabel)
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.position
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.upperLabel)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.formatter
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.color
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.upperLabel)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.upperLabel)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.upperLabel)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.upperLabel)
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.width
                     */
                    width?: number | string | undefined;

                    /**
                     * Height of label area.
                     *
                     *
                     * @default
                     * 20
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.height
                     */
                    height?: number | undefined;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.upperLabel)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;

                    /**
                     * When the text is overflow, whether to replace the excess
                     * part with apostrophe.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.upperLabel.ellipsis
                     */
                    ellipsis?: boolean | undefined;
                } | undefined;

                /**
                 *
                 * > Tps: In treemap, `itemStyle` attribute could appear in
                 * more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.itemStyle
                 */
                itemStyle?: {
                    /**
                     * The color of a node. It use global palette
                     * [option.color](https://echarts.apache.org/en/option.html#color)
                     * by default.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.itemStyle.color
                     */
                    color?: string | undefined;

                    /**
                     * The tranparent rate of a node, the range is between 0
                     * ~ 1.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.itemStyle.colorAlpha
                     */
                    colorAlpha?: number | undefined;

                    /**
                     * The color saturation of a node.
                     * The range is between 0 ~ 1.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.itemStyle.colorSaturation
                     */
                    colorSaturation?: number | undefined;

                    /**
                     * The border width of a node.
                     * There is no border when it is set as `0`.
                     *
                     * Tip, gaps between child nodes are specified by
                     * [gapWidth](https://echarts.apache.org/en/option.html#series-treemap.levels.gapWidth)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Gaps between child nodes.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.itemStyle.gapWidth
                     */
                    gapWidth?: number | undefined;

                    /**
                     * The border color and gap color of a node.
                     *
                     *
                     * @default
                     * "#fff',"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.itemStyle.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * The color saturation of a border or gap.
                     * The value range is between 0 ~ 1.
                     *
                     * Tips:
                     *
                     * When `borderColorSaturation` is set, the `borderColor`
                     * is disabled, and, instead, the final border color is
                     * calculated based on the color of this node (this color
                     * could be sepcified explicitly or inherited from its parent
                     * node) and mixing with `borderColorSaturation`.
                     *
                     * In this way, a effect can be implemented: different sections
                     * have different hue of gap color repectively, which makes
                     * users easy to distinguish both sections and levels.
                     *
                     * **How to avoid confusion by setting border/gap of node**
                     *
                     * If all of the border/gaps are set with the same color,
                     * confusion might occur when rectangulars in different
                     * levels display at the same time.
                     *
                     * See the
                     * [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/treemap-borderColor&edit=1&reset=1)
                     *
                     * Noticed that the child rectangles in the red area are
                     * in the deeper level than rectangles that are saparated
                     * by white gap.
                     * So in the red area, basically we set gap color with red,
                     * and use `borderColorSaturation` to lift the saturation.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.itemStyle.borderColorSaturation
                     */
                    borderColorSaturation?: string | undefined;

                    /**
                     * Stroke color of each rect.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.itemStyle.strokeColor
                     */
                    strokeColor?: string | undefined;

                    /**
                     * Stroke width of each rect.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.itemStyle.strokeWidth
                     */
                    strokeWidth?: number | undefined;
                } | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis
                 */
                emphasis?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label
                     */
                    label?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.position
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.offset
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.formatter
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.color
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.height
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;

                        /**
                         * When the text is overflow, whether to replace the
                         * excess part with apostrophe.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.label.ellipsis
                         */
                        ellipsis?: boolean | undefined;
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel
                     */
                    upperLabel?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.upperLabel)
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.position
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.offset
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.upperLabel)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.formatter
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.color
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.upperLabel)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.upperLabel)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.upperLabel)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.upperLabel)
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.width
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.height
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.upperLabel)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;

                        /**
                         * When the text is overflow, whether to replace the
                         * excess part with apostrophe.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.upperLabel.ellipsis
                         */
                        ellipsis?: boolean | undefined;
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.itemStyle
                     */
                    itemStyle?: {
                        /**
                         * The color of a node. It use global palette
                         * [option.color](https://echarts.apache.org/en/option.html#color)
                         * by default.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.levels.emphasis.itemStyle.color
                         */
                        color?: string | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;

            /**
             * Whether to ignore mouse events.
             * Default value is false, for triggering and responding to mouse
             * events.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.silent
             */
            silent?: {
                /**
                 * Enable hyperlink jump when clicking on node.
                 * It is avaliable when
                 * [series-treemap.nodeClick](https://echarts.apache.org/en/option.html#series-treemap.nodeClick)
                 * is `'link'`.
                 *
                 * See
                 * [series-treemap.data.target](https://echarts.apache.org/en/option.html#series-treemap.data.target)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.silent.link
                 */
                link?: string | undefined;

                /**
                 * The same meaning as `target` in `html` `<a>` label, See
                 * [series-treemap.data.link](https://echarts.apache.org/en/option.html#series-treemap.data.link)
                 * . Option values are: `'blank'` or `'self'`.
                 *
                 *
                 * @default
                 * "blank"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.silent.target
                 */
                target?: string | undefined;

                /**
                 * child nodes, recursive definition, configurations are the
                 * same as
                 * [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * .
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.silent.children
                 */
                children?: any[] | undefined;

                /**
                 * tooltip settings in this series data.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.silent.tooltip
                 */
                tooltip?: BaseTooltip | undefined;
            } | undefined;

            /**
             * `treemap` is able to map any dimensions of data to visual.
             *
             * The value of
             * [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
             * can be an array.
             * And each item of the array represents a "dimension".
             * `visualDimension` specifies the dimension on which visual mapping
             * will be performed.
             *
             * About visual encoding, see details in
             * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * .
             *
             * > Tps: In treemap, `visualDimension` attribute could appear in
             * more than one places:
             * >
             * > + It could appear in
             * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
             * > , indicating the unified setting of the series.
             * >
             * > + It could appear in each array element of
             * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * > , indicating the unified setting of each level of the tree.
             * >
             * > + It could appear in each node of
             * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
             * > , indicating the particular setting of each node.
             * >
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.visualDimension
             */
            visualDimension?: number | undefined;

            /**
             * The minimal value of current level.
             * Auto-statistics by default.
             *
             * When
             * [colorMappingBy](https://echarts.apache.org/en/option.html#series-treemap.levels.colorMappingBy)
             * is set to `'value'`, you are able to specify extent manually
             * for visual mapping by specifying `visualMin` or `visualMax`.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.visualMin
             */
            visualMin?: number | undefined;

            /**
             * The maximal value of current level.
             * Auto-statistics by default.
             *
             * When
             * [colorMappingBy](https://echarts.apache.org/en/option.html#series-treemap.levels.colorMappingBy)
             * is set to `'value'`, you are able to specify extent manually
             * for visual mapping by specifying `visualMin` or `visualMax`.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.visualMax
             */
            visualMax?: number | undefined;

            /**
             * It indicates the range of tranparent rate (color alpha) of the
             * series. The range of values is 0 ~ 1.
             *
             * For example, `colorAlpha` can be `[0.3, 1]`.
             *
             * About visual encoding, see details in
             * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * .
             *
             * > Tps: In treemap, `colorAlpha` attribute could appear in more
             * than one places:
             * >
             * > + It could appear in
             * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
             * > , indicating the unified setting of the series.
             * >
             * > + It could appear in each array element of
             * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * > , indicating the unified setting of each level of the tree.
             * >
             * > + It could appear in each node of
             * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
             * > , indicating the particular setting of each node.
             * >
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.colorAlpha
             */
            colorAlpha?: any[] | undefined;

            /**
             * It indicates the range of saturation (color alpha) of the series.
             * The range of values is 0 ~ 1.
             *
             * For example, `colorSaturation` can be `[0.3, 1]`.
             *
             * About visual encoding, see details in
             * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * .
             *
             * > Tps: In treemap, `colorSaturation` attribute could appear in
             * more than one places:
             * >
             * > + It could appear in
             * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
             * > , indicating the unified setting of the series.
             * >
             * > + It could appear in each array element of
             * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * > , indicating the unified setting of each level of the tree.
             * >
             * > + It could appear in each node of
             * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
             * > , indicating the particular setting of each node.
             * >
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.colorSaturation
             */
            colorSaturation?: number | undefined;

            /**
             * Specify the rule according to which each node obtain color from
             * [color list](https://echarts.apache.org/en/option.html#series-treemap.levels.color)
             * . Optional values:
             *
             * + `'value'`:
             *
             * Map
             * [series-treemap.data.value](https://echarts.apache.org/en/option.html#series-treemap.data.value)
             * to color.
             *
             * In this way, the color of each node indicate its value.
             *
             * [visualDimension](https://echarts.apache.org/en/option.html#series-treemap.levels.visualDimension)
             * can be used to specify which dimension of
             * [data](https://echarts.apache.org/en/option.html#series-treemap.data)
             * is used to perform visual mapping.
             *
             * + `'index'`:
             *
             * Map the `index` (ordinal number) of nodes to color.
             * Namely, in a level, the first node is mapped to the first color
             * of
             * [color list](https://echarts.apache.org/en/option.html#series-treemap.levels.color)
             * , and the second node gets the second color.
             *
             * In this way, adjacent nodes are distinguished by color.
             *
             * + `'id'`:
             *
             * Map
             * [series-treemap.data.id](https://echarts.apache.org/en/option.html#series-treemap.data.id)
             * to color.
             *
             * Since `id` is used to identify node, if user call `setOption`
             * to modify the tree, each node will remain the original color
             * before and after `setOption` called. See this
             * [example](https://echarts.apache.org/examples/en/editor.html?c=treemap-obama&edit=1&reset=1)
             * .
             *
             * About visual encoding, see details in
             * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * .
             *
             * > Tps: In treemap, `colorMappingBy` attribute could appear in
             * more than one places:
             * >
             * > + It could appear in
             * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
             * > , indicating the unified setting of the series.
             * >
             * > + It could appear in each array element of
             * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * > , indicating the unified setting of each level of the tree.
             * >
             * > + It could appear in each node of
             * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
             * > , indicating the particular setting of each node.
             * >
             *
             *
             * @default
             * "index"
             * @see https://echarts.apache.org/en/option.html#series-treemap.colorMappingBy
             */
            colorMappingBy?: string | undefined;

            /**
             * A node will not be shown when its area size is smaller than this
             * value (unit: px square).
             *
             * In this way, tiny nodes will be hidden, otherwise they will huddle
             * together.
             * When user zoom the treemap, the area size will increase and the
             * rectangle will be shown if the area size is larger than this
             * threshold.
             *
             * About visual encoding, see details in
             * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * .
             *
             * > Tps: In treemap, `visibleMin` attribute could appear in more
             * than one places:
             * >
             * > + It could appear in
             * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
             * > , indicating the unified setting of the series.
             * >
             * > + It could appear in each array element of
             * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * > , indicating the unified setting of each level of the tree.
             * >
             * > + It could appear in each node of
             * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
             * > , indicating the particular setting of each node.
             * >
             *
             *
             * @default
             * 10
             * @see https://echarts.apache.org/en/option.html#series-treemap.visibleMin
             */
            visibleMin?: number | undefined;

            /**
             * Children will not be shown when area size of a node is smaller
             * than this value (unit: px square).
             *
             * This can hide the details of nodes when the rectangular area
             * is not large enough.
             * When users zoom nodes, the child node would show if the area
             * is larger than this threshold.
             *
             * About visual encoding, see details in
             * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * .
             *
             * > Tps: In treemap, `childrenVisibleMin` attribute could appear
             * in more than one places:
             * >
             * > + It could appear in
             * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
             * > , indicating the unified setting of the series.
             * >
             * > + It could appear in each array element of
             * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * > , indicating the unified setting of each level of the tree.
             * >
             * > + It could appear in each node of
             * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
             * > , indicating the particular setting of each node.
             * >
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.childrenVisibleMin
             */
            childrenVisibleMin?: number | undefined;

            /**
             * `label` decribes the style of the label in each node.
             *
             * > Tps: In treemap, `label` attribute could appear in more than
             * one places:
             * >
             * > + It could appear in
             * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
             * > , indicating the unified setting of the series.
             * >
             * > + It could appear in each array element of
             * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * > , indicating the unified setting of each level of the tree.
             * >
             * > + It could appear in each node of
             * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
             * > , indicating the particular setting of each node.
             * >
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.label
             */
            label?: {
                /**
                 * Whether to show label.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.show
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.label)
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.position
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.distance
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.rotate
                 */
                rotate?: number | undefined;

                /**
                 * Whether to move text slightly.
                 * For example: `[30, 40]` means move `30` horizontally and
                 * move `40` vertically.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.offset
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.formatter
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.color
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.fontStyle
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.fontWeight
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.fontFamily
                 */
                fontFamily?: string | undefined;

                /**
                 * font size
                 *
                 *
                 * @default
                 * 12
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.fontSize
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.align
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.verticalAlign
                 */
                verticalAlign?: string | undefined;

                /**
                 * Line height of the text fregment.
                 *
                 * If `lineHeight` is not set in `rich`, `lineHeight` in parent
                 * level will be used. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.label)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.lineHeight
                 */
                lineHeight?: number | undefined;

                /**
                 * Background color of the text fregment.
                 *
                 * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                 *
                 * Or image can be used, for example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.label)
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.backgroundColor
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.borderColor
                 */
                borderColor?: string | undefined;

                /**
                 * Border width of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Border radius of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.borderRadius
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.padding
                 */
                padding?: any[] | number | undefined;

                /**
                 * Shadow color of the text block.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.shadowColor
                 */
                shadowColor?: string | undefined;

                /**
                 * Show blur of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.shadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.width
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.height
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.textBorderColor
                 */
                textBorderColor?: string | undefined;

                /**
                 * Storke line width of the text.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.textBorderWidth
                 */
                textBorderWidth?: number | undefined;

                /**
                 * Shadow color of the text itself.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.textShadowColor
                 */
                textShadowColor?: string | undefined;

                /**
                 * Shadow blue of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.textShadowBlur
                 */
                textShadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.textShadowOffsetX
                 */
                textShadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.textShadowOffsetY
                 */
                textShadowOffsetY?: number | undefined;

                /**
                 * "Rich text styles" can be defined in this `rich` property.
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.label)
                 *
                 * For more details, see
                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                 * please.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich
                 */
                rich?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;
                    };
                } | undefined;

                /**
                 * When the text is overflow, whether to replace the excess
                 * part with apostrophe.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.label.ellipsis
                 */
                ellipsis?: boolean | undefined;
            } | undefined;

            /**
             * `upperLabel` is used to specify whether show label when the node
             * has children. When
             * [upperLabel.show](https://echarts.apache.org/en/option.html#series-treemap.upperLabel.show)
             * is set as `true`, the feature that "show parent label" is enabled.
             *
             * The same as
             * [series-treemap.label](https://echarts.apache.org/en/option.html#series-treemap.label)
             * , the option `upperLabel` can be placed at the root of
             * [series-treemap](https://echarts.apache.org/en/option.html#series-treemap)
             * directly, or in
             * [series-treemap.level](https://echarts.apache.org/en/option.html#series-treemap.level)
             * , or in each item of
             * [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
             * .
             *
             * Specifically,
             * [series-treemap.label](https://echarts.apache.org/en/option.html#series-treemap.label)
             * specifies the style when a node is a leaf, while `upperLabel`
             * specifies the style when a node has children, in which case the
             * label is displayed in the inner top of the node.
             *
             * See:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap)
             *
             * > Tps: In treemap, `label` attribute could appear in more than
             * one places:
             * >
             * > + It could appear in
             * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
             * > , indicating the unified setting of the series.
             * >
             * > + It could appear in each array element of
             * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * > , indicating the unified setting of each level of the tree.
             * >
             * > + It could appear in each node of
             * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
             * > , indicating the particular setting of each node.
             * >
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel
             */
            upperLabel?: {
                /**
                 * Whether to show label.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.show
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.upperLabel)
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.position
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.distance
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rotate
                 */
                rotate?: number | undefined;

                /**
                 * Whether to move text slightly.
                 * For example: `[30, 40]` means move `30` horizontally and
                 * move `40` vertically.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.offset
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.upperLabel)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.formatter
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.color
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.fontStyle
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.fontWeight
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.fontFamily
                 */
                fontFamily?: string | undefined;

                /**
                 * font size
                 *
                 *
                 * @default
                 * 12
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.fontSize
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.upperLabel)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.align
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
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.upperLabel)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.verticalAlign
                 */
                verticalAlign?: string | undefined;

                /**
                 * Line height of the text fregment.
                 *
                 * If `lineHeight` is not set in `rich`, `lineHeight` in parent
                 * level will be used. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.upperLabel)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.lineHeight
                 */
                lineHeight?: number | undefined;

                /**
                 * Background color of the text fregment.
                 *
                 * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                 *
                 * Or image can be used, for example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.upperLabel)
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.backgroundColor
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.borderColor
                 */
                borderColor?: string | undefined;

                /**
                 * Border width of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Border radius of the text fregment.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.borderRadius
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.padding
                 */
                padding?: any[] | number | undefined;

                /**
                 * Shadow color of the text block.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.shadowColor
                 */
                shadowColor?: string | undefined;

                /**
                 * Show blur of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text block.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.shadowOffsetY
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
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.width
                 */
                width?: number | string | undefined;

                /**
                 * Height of label area.
                 *
                 *
                 * @default
                 * 20
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.height
                 */
                height?: number | undefined;

                /**
                 * Storke color of the text.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.textBorderColor
                 */
                textBorderColor?: string | undefined;

                /**
                 * Storke line width of the text.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.textBorderWidth
                 */
                textBorderWidth?: number | undefined;

                /**
                 * Shadow color of the text itself.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.textShadowColor
                 */
                textShadowColor?: string | undefined;

                /**
                 * Shadow blue of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.textShadowBlur
                 */
                textShadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.textShadowOffsetX
                 */
                textShadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text itself.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.textShadowOffsetY
                 */
                textShadowOffsetY?: number | undefined;

                /**
                 * "Rich text styles" can be defined in this `rich` property.
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.upperLabel)
                 *
                 * For more details, see
                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                 * please.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich
                 */
                rich?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.color
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.width
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.height
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;
                    };
                } | undefined;

                /**
                 * When the text is overflow, whether to replace the excess
                 * part with apostrophe.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.upperLabel.ellipsis
                 */
                ellipsis?: boolean | undefined;
            } | undefined;

            /**
             *
             * > Tps: In treemap, `itemStyle` attribute could appear in more
             * than one places:
             * >
             * > + It could appear in
             * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
             * > , indicating the unified setting of the series.
             * >
             * > + It could appear in each array element of
             * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
             * > , indicating the unified setting of each level of the tree.
             * >
             * > + It could appear in each node of
             * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
             * > , indicating the particular setting of each node.
             * >
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.itemStyle
             */
            itemStyle?: {
                /**
                 * The color of a node. It use global palette
                 * [option.color](https://echarts.apache.org/en/option.html#color)
                 * by default.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.itemStyle.color
                 */
                color?: string | undefined;

                /**
                 * The tranparent rate of a node, the range is between 0 ~ 1.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.itemStyle.colorAlpha
                 */
                colorAlpha?: number | undefined;

                /**
                 * The color saturation of a node.
                 * The range is between 0 ~ 1.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.itemStyle.colorSaturation
                 */
                colorSaturation?: number | undefined;

                /**
                 * The border width of a node.
                 * There is no border when it is set as `0`.
                 *
                 * Tip, gaps between child nodes are specified by
                 * [gapWidth](https://echarts.apache.org/en/option.html#series-treemap.levels.gapWidth)
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.itemStyle.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Gaps between child nodes.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.itemStyle.gapWidth
                 */
                gapWidth?: number | undefined;

                /**
                 * The border color and gap color of a node.
                 *
                 *
                 * @default
                 * "#fff',"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.itemStyle.borderColor
                 */
                borderColor?: string | undefined;

                /**
                 * The color saturation of a border or gap.
                 * The value range is between 0 ~ 1.
                 *
                 * Tips:
                 *
                 * When `borderColorSaturation` is set, the `borderColor` is
                 * disabled, and, instead, the final border color is calculated
                 * based on the color of this node (this color could be sepcified
                 * explicitly or inherited from its parent node) and mixing
                 * with `borderColorSaturation`.
                 *
                 * In this way, a effect can be implemented: different sections
                 * have different hue of gap color repectively, which makes
                 * users easy to distinguish both sections and levels.
                 *
                 * **How to avoid confusion by setting border/gap of node**
                 *
                 * If all of the border/gaps are set with the same color, confusion
                 * might occur when rectangulars in different levels display
                 * at the same time.
                 *
                 * See the
                 * [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/treemap-borderColor&edit=1&reset=1)
                 *
                 * Noticed that the child rectangles in the red area are in
                 * the deeper level than rectangles that are saparated by white
                 * gap.
                 * So in the red area, basically we set gap color with red,
                 * and use `borderColorSaturation` to lift the saturation.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.itemStyle.borderColorSaturation
                 */
                borderColorSaturation?: string | undefined;

                /**
                 * Stroke color of each rect.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.itemStyle.strokeColor
                 */
                strokeColor?: string | undefined;

                /**
                 * Stroke width of each rect.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.itemStyle.strokeWidth
                 */
                strokeWidth?: number | undefined;
            } | undefined;

            /**
             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis
             */
            emphasis?: {
                /**
                 * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.formatter
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;

                    /**
                     * When the text is overflow, whether to replace the excess
                     * part with apostrophe.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.label.ellipsis
                     */
                    ellipsis?: boolean | undefined;
                } | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel
                 */
                upperLabel?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.upperLabel)
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.position
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.upperLabel)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.formatter
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.color
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.upperLabel)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.upperLabel)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.upperLabel)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.upperLabel)
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.width
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.height
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.upperLabel)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;

                    /**
                     * When the text is overflow, whether to replace the excess
                     * part with apostrophe.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.upperLabel.ellipsis
                     */
                    ellipsis?: boolean | undefined;
                } | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.itemStyle
                 */
                itemStyle?: {
                    /**
                     * The color of a node. It use global palette
                     * [option.color](https://echarts.apache.org/en/option.html#color)
                     * by default.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.emphasis.itemStyle.color
                     */
                    color?: string | undefined;
                } | undefined;
            } | undefined;

            /**
             * breadcrumb, showing the path of the current node.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb
             */
            breadcrumb?: {
                /**
                 * Whether to show the breadcrumb.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.show
                 */
                show?: boolean | undefined;

                /**
                 * Distance between asdf component and the left side of the
                 * container.
                 *
                 * `left` value can be instant pixel value like `20`; it can
                 * also be percentage value relative to container width like
                 * `'20%'`; and it can also be `'left'`, `'center'`, or `'right'`.
                 *
                 * If the `left` value is set to be `'left'`, `'center'`, or
                 * `'right'`, then the component will be aligned automatically
                 * based on position.
                 *
                 *
                 * @default
                 * "center"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.left
                 */
                left?: number | string | undefined;

                /**
                 * Distance between asdf component and the top side of the container.
                 *
                 * `top` value can be instant pixel value like `20`; it can
                 * also be percentage value relative to container width like
                 * `'20%'`; and it can also be `'top'`, `'middle'`, or `'bottom'`.
                 *
                 * If the `left` value is set to be `'top'`, `'middle'`, or
                 * `'bottom'`, then the component will be aligned automatically
                 * based on position.
                 *
                 *
                 * @default
                 * "auto"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.top
                 */
                top?: number | string | undefined;

                /**
                 * Distance between asdf component and the right side of the
                 * container.
                 *
                 * `right` value can be instant pixel value like `20`; it can
                 * also be percentage value relative to container width like
                 * `'20%'`.
                 *
                 * Adaptive by default.
                 *
                 *
                 * @default
                 * "auto"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.right
                 */
                right?: number | string | undefined;

                /**
                 * Distance between asdf component and the bottom side of the
                 * container.
                 *
                 * `bottom` value can be instant pixel value like `20`; it can
                 * also be percentage value relative to container width like
                 * `'20%'`.
                 *
                 * Adaptive by default.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.bottom
                 */
                bottom?: number | string | undefined;

                /**
                 * The height of breadcrumb.
                 *
                 *
                 * @default
                 * 22
                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.height
                 */
                height?: number | undefined;

                /**
                 * When is no content in breadcrumb, this minimal width need
                 * to be set up.
                 *
                 *
                 * @default
                 * 25
                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emptyItemWidth
                 */
                emptyItemWidth?: number | undefined;

                /**
                 * Graphic style of , `emphasis` is the style when it is highlighted,
                 * like being hovered by mouse, or highlighted via legend connect.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle
                 */
                itemStyle?: {
                    /**
                     * boxplot color.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.itemStyle)
                     *
                     *
                     * @default
                     * "rgba(0,0,0,0.7)"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * boxplot border color, whose format is similar to that
                     * of `color`.
                     *
                     *
                     * @default
                     * "rgba(255,255,255,0.7)"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * boxplot border width.
                     * No border when it is set to be 0.
                     *
                     *
                     * @default
                     * 1
                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.itemStyle)
                     *
                     *
                     * @default
                     * 3
                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @default
                     * "rgba(150,150,150,1)"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.opacity
                     */
                    opacity?: number | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle
                     */
                    textStyle?: {
                        /**
                         * text color.
                         *
                         *
                         * @default
                         * "#fff"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.color
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.itemStyle.textStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.itemStyle.textStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.itemStyle.textStyle)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.itemStyle.textStyle)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.width
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.itemStyle.textStyle)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E
                             */
                            [userStyle: string]: {
                                /**
                                 * text color.
                                 *
                                 *
                                 * @default
                                 * ""#fff""
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 * `width` or `height` can be specified when
                                 * using background image, or auto adapted by
                                 * default.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                 */
                                backgroundColor?: object | string | undefined;

                                /**
                                 * Border color of the text fregment.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.height
                                 */
                                height?: number | string | undefined;

                                /**
                                 * Storke color of the text.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;
                    } | undefined;
                } | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis
                 */
                emphasis?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle
                     */
                    itemStyle?: {
                        /**
                         * boxplot color.
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
                         * > [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.emphasis.itemStyle)
                         *
                         *
                         * @default
                         * "rgba(0,0,0,0.7)"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.color
                         */
                        color?: EChartOption.Color | undefined;

                        /**
                         * boxplot border color, whose format is similar to
                         * that of `color`.
                         *
                         *
                         * @default
                         * "rgba(255,255,255,0.7)"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.borderColor
                         */
                        borderColor?: EChartOption.Color | undefined;

                        /**
                         * boxplot border width.
                         * No border when it is set to be 0.
                         *
                         *
                         * @default
                         * 1
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.borderType
                         */
                        borderType?: string | undefined;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.emphasis.itemStyle)
                         *
                         *
                         * @default
                         * 3
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @default
                         * "rgba(150,150,150,1)"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.shadowColor
                         */
                        shadowColor?: EChartOption.Color | undefined;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.opacity
                         */
                        opacity?: number | undefined;

                        /**
                         * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle
                         */
                        textStyle?: {
                            /**
                             * text color.
                             *
                             *
                             * @default
                             * "#fff"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.color
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.emphasis.itemStyle.textStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.emphasis.itemStyle.textStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.emphasis.itemStyle.textStyle)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.emphasis.itemStyle.textStyle)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.width
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;

                            /**
                             * "Rich text styles" can be defined in this `rich`
                             * property. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.emphasis.itemStyle.textStyle)
                             *
                             * For more details, see
                             * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                             * please.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich
                             */
                            rich?: {
                                /**
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E
                                 */
                                [userStyle: string]: {
                                    /**
                                     * text color.
                                     *
                                     *
                                     * @default
                                     * ""#fff""
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                     */
                                    fontFamily?: string | undefined;

                                    /**
                                     * font size
                                     *
                                     *
                                     * @default
                                     * 12
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                     */
                                    verticalAlign?: string | undefined;

                                    /**
                                     * Line height of the text fregment.
                                     *
                                     * If `lineHeight` is not set in `rich`,
                                     * `lineHeight` in parent level will be
                                     * used. For example:
                                     *
                                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E)
                                     *
                                     * `width` or `height` can be specified
                                     * when using background image, or auto
                                     * adapted by default.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                                     */
                                    backgroundColor?: object | string | undefined;

                                    /**
                                     * Border color of the text fregment.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                     */
                                    borderColor?: string | undefined;

                                    /**
                                     * Border width of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                     */
                                    borderWidth?: number | undefined;

                                    /**
                                     * Border radius of the text fregment.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.padding
                                     */
                                    padding?: any[] | number | undefined;

                                    /**
                                     * Shadow color of the text block.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                     */
                                    shadowColor?: string | undefined;

                                    /**
                                     * Show blur of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                     */
                                    shadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                     */
                                    shadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text block.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.height
                                     */
                                    height?: number | string | undefined;

                                    /**
                                     * Storke color of the text.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                     */
                                    textBorderColor?: string | undefined;

                                    /**
                                     * Storke line width of the text.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                     */
                                    textBorderWidth?: number | undefined;

                                    /**
                                     * Shadow color of the text itself.
                                     *
                                     *
                                     * @default
                                     * "transparent"
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                     */
                                    textShadowColor?: string | undefined;

                                    /**
                                     * Shadow blue of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                     */
                                    textShadowBlur?: number | undefined;

                                    /**
                                     * Shadow X offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                     */
                                    textShadowOffsetX?: number | undefined;

                                    /**
                                     * Shadow Y offset of the text itself.
                                     *
                                     *
                                     * @see https://echarts.apache.org/en/option.html#series-treemap.breadcrumb.emphasis.itemStyle.textStyle.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                     */
                                    textShadowOffsetY?: number | undefined;
                                };
                            } | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;

            /**
             * the the data format of
             * [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
             * is a forest. For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap)
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.data
             */
            data?: SeriesTreemap.DataObject[] | undefined;

            /**
             * Duration of the first animation, which supports callback function
             * for different data to have different animation effect:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap)
             *
             *
             * @default
             * 1500
             * @see https://echarts.apache.org/en/option.html#series-treemap.animationDuration
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
             * "quinticInOut"
             * @see https://echarts.apache.org/en/option.html#series-treemap.animationEasing
             */
            animationEasing?: string | undefined;

            /**
             * Delay before updating the first animation, which supports callback
             * function for different data to have different animation effect.
             *
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap)
             *
             * See
             * [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay)
             * for more information.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.animationDelay
             */
            animationDelay?: Function | number | undefined;

            /**
             * tooltip settings in this series.
             *
             *
             * @see https://echarts.apache.org/en/option.html#series-treemap.tooltip
             */
            tooltip?: BaseTooltip | undefined;
        }

        namespace SeriesTreemap {
            interface DataObject {
                children?: DataObject[] | undefined;

                /**
                 * The value of this node, indicating the area size.
                 *
                 * It could also be an array, such as \[2323, 43, 55\], in which
                 * the first item of array indicates the area size.
                 *
                 * The other items of the array can be used for extra visual
                 * mapping. See details in series-treemp.levels.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.value
                 */
                value?: any[] | number | undefined;

                /**
                 * `id` is not mandatory.
                 * But if using API, id is used to locate node.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.id
                 */
                id?: string | undefined;

                /**
                 * Show the description text in rectangle.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.name
                 */
                name?: string | undefined;

                /**
                 * `treemap` is able to map any dimensions of data to visual.
                 *
                 * The value of
                 * [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * can be an array.
                 * And each item of the array represents a "dimension".
                 * `visualDimension` specifies the dimension on which visual
                 * mapping will be performed.
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `visualDimension` attribute could appear
                 * in more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.visualDimension
                 */
                visualDimension?: number | undefined;

                /**
                 * The minimal value of current level.
                 * Auto-statistics by default.
                 *
                 * When
                 * [colorMappingBy](https://echarts.apache.org/en/option.html#series-treemap.levels.colorMappingBy)
                 * is set to `'value'`, you are able to specify extent manually
                 * for visual mapping by specifying `visualMin` or `visualMax`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.visualMin
                 */
                visualMin?: number | undefined;

                /**
                 * The maximal value of current level.
                 * Auto-statistics by default.
                 *
                 * When
                 * [colorMappingBy](https://echarts.apache.org/en/option.html#series-treemap.levels.colorMappingBy)
                 * is set to `'value'`, you are able to specify extent manually
                 * for visual mapping by specifying `visualMin` or `visualMax`.
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.visualMax
                 */
                visualMax?: number | undefined;

                /**
                 * A color list for a level.
                 * Each node in the level will obtain a color from the color
                 * list (the rule see
                 * [colorMappingBy](https://echarts.apache.org/en/option.html#series-treemap.levels.colorMappingBy)
                 * ).
                 * It is empty by default, which means the global color list
                 * will be used.
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `color` attribute could appear in more
                 * than one places:
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.color
                 */
                color?: any[] | undefined;

                /**
                 * It indicates the range of tranparent rate (color alpha) for
                 * nodes in a level . The range of values is 0 ~ 1.
                 *
                 * For example, `colorAlpha` can be `[0.3, 1]`.
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `colorAlpha` attribute could appear in
                 * more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.colorAlpha
                 */
                colorAlpha?: any[] | undefined;

                /**
                 * It indicates the range of saturation (color alpha) for nodes
                 * in a level . The range of values is 0 ~ 1.
                 *
                 * For example, `colorSaturation` can be `[0.3, 1]`.
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `colorSaturation` attribute could appear
                 * in more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.colorSaturation
                 */
                colorSaturation?: number | undefined;

                /**
                 * Specify the rule according to which each node obtain color
                 * from
                 * [color list](https://echarts.apache.org/en/option.html#series-treemap.levels.color)
                 * . Optional values:
                 *
                 * + `'value'`:
                 *
                 * Map
                 * [series-treemap.data.value](https://echarts.apache.org/en/option.html#series-treemap.data.value)
                 * to color.
                 *
                 * In this way, the color of each node indicate its value.
                 *
                 * [visualDimension](https://echarts.apache.org/en/option.html#series-treemap.levels.visualDimension)
                 * can be used to specify which dimension of
                 * [data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * is used to perform visual mapping.
                 *
                 * + `'index'`:
                 *
                 * Map the `index` (ordinal number) of nodes to color.
                 * Namely, in a level, the first node is mapped to the first
                 * color of
                 * [color list](https://echarts.apache.org/en/option.html#series-treemap.levels.color)
                 * , and the second node gets the second color.
                 *
                 * In this way, adjacent nodes are distinguished by color.
                 *
                 * + `'id'`:
                 *
                 * Map
                 * [series-treemap.data.id](https://echarts.apache.org/en/option.html#series-treemap.data.id)
                 * to color.
                 *
                 * Since `id` is used to identify node, if user call `setOption`
                 * to modify the tree, each node will remain the original color
                 * before and after `setOption` called. See this
                 * [example](https://echarts.apache.org/examples/en/editor.html?c=treemap-obama&edit=1&reset=1)
                 * .
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `colorMappingBy` attribute could appear
                 * in more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @default
                 * "index"
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.colorMappingBy
                 */
                colorMappingBy?: string | undefined;

                /**
                 * A node will not be shown when its area size is smaller than
                 * this value (unit: px square).
                 *
                 * In this way, tiny nodes will be hidden, otherwise they will
                 * huddle together.
                 * When user zoom the treemap, the area size will increase and
                 * the rectangle will be shown if the area size is larger than
                 * this threshold.
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `visibleMin` attribute could appear in
                 * more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @default
                 * 10
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.visibleMin
                 */
                visibleMin?: number | undefined;

                /**
                 * Children will not be shown when area size of a node is smaller
                 * than this value (unit: px square).
                 *
                 * This can hide the details of nodes when the rectangular area
                 * is not large enough.
                 * When users zoom nodes, the child node would show if the area
                 * is larger than this threshold.
                 *
                 * About visual encoding, see details in
                 * [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * .
                 *
                 * > Tps: In treemap, `childrenVisibleMin` attribute could appear
                 * in more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.childrenVisibleMin
                 */
                childrenVisibleMin?: number | undefined;

                /**
                 * `label` decribes the style of the label in each node.
                 *
                 * > Tps: In treemap, `label` attribute could appear in more
                 * than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.position
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.formatter
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.color
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.label)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.label)
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.width
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.height
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;

                    /**
                     * When the text is overflow, whether to replace the excess
                     * part with apostrophe.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.label.ellipsis
                     */
                    ellipsis?: boolean | undefined;
                } | undefined;

                /**
                 * `upperLabel` is used to specify whether show label when the
                 * node has children. When
                 * [upperLabel.show](https://echarts.apache.org/en/option.html#series-treemap.upperLabel.show)
                 * is set as `true`, the feature that "show parent label" is
                 * enabled.
                 *
                 * The same as
                 * [series-treemap.label](https://echarts.apache.org/en/option.html#series-treemap.label)
                 * , the option `upperLabel` can be placed at the root of
                 * [series-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * directly, or in
                 * [series-treemap.level](https://echarts.apache.org/en/option.html#series-treemap.level)
                 * , or in each item of
                 * [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * .
                 *
                 * Specifically,
                 * [series-treemap.label](https://echarts.apache.org/en/option.html#series-treemap.label)
                 * specifies the style when a node is a leaf, while `upperLabel`
                 * specifies the style when a node has children, in which case
                 * the label is displayed in the inner top of the node.
                 *
                 * See:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data)
                 *
                 * > Tps: In treemap, `label` attribute could appear in more
                 * than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel
                 */
                upperLabel?: {
                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.show
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.upperLabel)
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.position
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.distance
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.offset
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.upperLabel)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.formatter
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.color
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.fontStyle
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.fontWeight
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.fontSize
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.upperLabel)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.align
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
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.upperLabel)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.verticalAlign
                     */
                    verticalAlign?: string | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.upperLabel)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.upperLabel)
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.backgroundColor
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.borderRadius
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.shadowOffsetY
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
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.width
                     */
                    width?: number | string | undefined;

                    /**
                     * Height of label area.
                     *
                     *
                     * @default
                     * 20
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.height
                     */
                    height?: number | undefined;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.upperLabel)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;

                    /**
                     * When the text is overflow, whether to replace the excess
                     * part with apostrophe.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.upperLabel.ellipsis
                     */
                    ellipsis?: boolean | undefined;
                } | undefined;

                /**
                 *
                 * > Tps: In treemap, `itemStyle` attribute could appear in
                 * more than one places:
                 * >
                 * > + It could appear in
                 * > [sereis-treemap](https://echarts.apache.org/en/option.html#series-treemap)
                 * > , indicating the unified setting of the series.
                 * >
                 * > + It could appear in each array element of
                 * > [series-treemap.levels](https://echarts.apache.org/en/option.html#series-treemap.levels)
                 * > , indicating the unified setting of each level of the tree.
                 * >
                 * > + It could appear in each node of
                 * > [series-treemap.data](https://echarts.apache.org/en/option.html#series-treemap.data)
                 * > , indicating the particular setting of each node.
                 * >
                 *
                 *
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.itemStyle
                 */
                itemStyle?: {
                    /**
                     * The color of a node. It use global palette
                     * [option.color](https://echarts.apache.org/en/option.html#color)
                     * by default.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.itemStyle.color
                     */
                    color?: string | undefined;

                    /**
                     * The tranparent rate of a node, the range is between 0
                     * ~ 1.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.itemStyle.colorAlpha
                     */
                    colorAlpha?: number | undefined;

                    /**
                     * The color saturation of a node.
                     * The range is between 0 ~ 1.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.itemStyle.colorSaturation
                     */
                    colorSaturation?: number | undefined;

                    /**
                     * The border width of a node.
                     * There is no border when it is set as `0`.
                     *
                     * Tip, gaps between child nodes are specified by
                     * [gapWidth](https://echarts.apache.org/en/option.html#series-treemap.levels.gapWidth)
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Gaps between child nodes.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.itemStyle.gapWidth
                     */
                    gapWidth?: number | undefined;

                    /**
                     * The border color and gap color of a node.
                     *
                     *
                     * @default
                     * "#fff',"
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.itemStyle.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * The color saturation of a border or gap.
                     * The value range is between 0 ~ 1.
                     *
                     * Tips:
                     *
                     * When `borderColorSaturation` is set, the `borderColor`
                     * is disabled, and, instead, the final border color is
                     * calculated based on the color of this node (this color
                     * could be sepcified explicitly or inherited from its parent
                     * node) and mixing with `borderColorSaturation`.
                     *
                     * In this way, a effect can be implemented: different sections
                     * have different hue of gap color repectively, which makes
                     * users easy to distinguish both sections and levels.
                     *
                     * **How to avoid confusion by setting border/gap of node**
                     *
                     * If all of the border/gaps are set with the same color,
                     * confusion might occur when rectangulars in different
                     * levels display at the same time.
                     *
                     * See the
                     * [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/treemap-borderColor&edit=1&reset=1)
                     *
                     * Noticed that the child rectangles in the red area are
                     * in the deeper level than rectangles that are saparated
                     * by white gap.
                     * So in the red area, basically we set gap color with red,
                     * and use `borderColorSaturation` to lift the saturation.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.itemStyle.borderColorSaturation
                     */
                    borderColorSaturation?: string | undefined;

                    /**
                     * Stroke color of each rect.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.itemStyle.strokeColor
                     */
                    strokeColor?: string | undefined;

                    /**
                     * Stroke width of each rect.
                     *
                     *
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.itemStyle.strokeWidth
                     */
                    strokeWidth?: number | undefined;
                } | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis
                 */
                emphasis?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label
                     */
                    label?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.position
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.offset
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.formatter
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.color
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.label)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.label)
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.width
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.height
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.label)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;

                        /**
                         * When the text is overflow, whether to replace the
                         * excess part with apostrophe.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.label.ellipsis
                         */
                        ellipsis?: boolean | undefined;
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel
                     */
                    upperLabel?: {
                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.show
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.upperLabel)
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.position
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.distance
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rotate
                         */
                        rotate?: number | undefined;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.offset
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.upperLabel)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.formatter
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.color
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.fontStyle
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.fontWeight
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.fontSize
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.upperLabel)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.align
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
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.upperLabel)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.upperLabel)
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.upperLabel)
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.backgroundColor
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.borderRadius
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.shadowOffsetY
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.width
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.height
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
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.upperLabel)
                         *
                         * For more details, see
                         * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich
                         */
                        rich?: {
                            /**
                             * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string | undefined;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string | undefined;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://echarts.apache.org/en/option.html#series-treemap.treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string | undefined;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number | undefined;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number | undefined;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string | undefined;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string | undefined;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number | undefined;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string | undefined;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number | undefined;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number | undefined;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number | undefined;
                            };
                        } | undefined;

                        /**
                         * When the text is overflow, whether to replace the
                         * excess part with apostrophe.
                         *
                         *
                         * @default
                         * "true"
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.upperLabel.ellipsis
                         */
                        ellipsis?: boolean | undefined;
                    } | undefined;

                    /**
                     * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.itemStyle
                     */
                    itemStyle?: {
                        /**
                         * The color of a node. It use global palette
                         * [option.color](https://echarts.apache.org/en/option.html#color)
                         * by default.
                         *
                         *
                         * @see https://echarts.apache.org/en/option.html#series-treemap.data.emphasis.itemStyle.color
                         */
                        color?: string | undefined;
                    } | undefined;
                } | undefined;
            }
        }
    }
}
