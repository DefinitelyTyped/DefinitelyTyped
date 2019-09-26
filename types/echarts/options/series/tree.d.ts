declare namespace echarts {
    namespace EChartOption {
        /**
         * **Tree Diagram**
         *
         * The tree diagram is mainly used to visualize the tree data structure,
         * which is a special hierarchical type with a unique root node, left
         * subtree, and right subtree.
         *
         * **Note: Forests are not currently supported directly in a single
         * series, and can be implemented by configuring multiple series in
         * an option**
         *
         * **Tree example：**
         *
         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree)
         *
         * **Multiple series are combined into forest：**
         *
         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree)
         *
         *
         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree
         */
        interface SeriesTree {

            /**
             * @default
             * "tree"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.type
             */
            type?: string;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.id
             */
            id?: string;

            /**
             * Series name used for displaying in
             * [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip)
             * and filtering with
             * [legend](https://ecomfe.github.io/echarts-doc/public/en/option.html#legend)
             * , or updaing data and configuration with `setOption`.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.name
             */
            name?: string;

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
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.zlevel
             */
            zlevel?: number;

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
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.z
             */
            z?: number;

            /**
             * Distance between tree component and the left side of the container.
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
             * 12%
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.left
             */
            left?: number | string;

            /**
             * Distance between tree component and the top side of the container.
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
             * 12%
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.top
             */
            top?: number | string;

            /**
             * Distance between tree component and the right side of the container.
             *
             * `right` value can be instant pixel value like `20`; it can also
             * be percentage value relative to container width like `'20%'`.
             *
             *
             * @default
             * 12%
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.right
             */
            right?: number | string;

            /**
             * Distance between tree component and the bottom side of the container.
             *
             * `bottom` value can be instant pixel value like `20`; it can also
             * be percentage value relative to container width like `'20%'`.
             *
             *
             * @default
             * 12%
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.bottom
             */
            bottom?: number | string;

            /**
             * Width of tree component.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.width
             */
            width?: number | string;

            /**
             * Height of tree component.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.height
             */
            height?: number | string;

            /**
             * The layout of the tree, which can be `orthogonal` and `radial`
             * 。Here the `orthogonal` layout is what we usually refer to the
             * `horizontal` and `vertical` direction, the corresponding parameter
             * value is `orthogonal`.
             * The `radial` layout refers to the view that the root node as
             * the center and each layer of nodes as the ring, the corresponding
             * parameter value is `radial`.
             *
             * **Orthogonal Example：**
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree)
             *
             * **Radial Example：**
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree)
             *
             *
             * @default
             * "orthogonal"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.layout
             */
            layout?: string;

            /**
             * The direction of the `orthogonal` layout in the tree diagram.
             * That means this configuration takes effect only if `layout =
             * 'orthogonal'`.
             * The corresponding directions are `from left to right`, `from
             * right to left`, `from top to bottom`, `from bottom to top`, with
             * shorthand values `'LR'`, `'RL'`, `'TB'`, `'BT'`.
             * **Note: The previous configuration value `'horizontal'` is equivalent
             * to `'LR'`, `'vertical'` is equivalent to `'TB'`.**
             *
             *
             * @default
             * "LR"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.orient
             */
            orient?: string;

            /**
             * Symbol of .
             *
             * Icon types provided by ECharts includes `'circle'`, `'rect'`,
             * `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`,
             * `'none'`
             *
             * It can be set to an image with `'image://url'` , in which URL
             * is the link to an image, or `dataURI` of an image.
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
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree)
             *
             * Icons can be set to arbitrary vector path via `'path://'` in
             * ECharts.
             * As compared with raster image, vector paths prevent from jagging
             * and blurring when scaled, and have a better control over changing
             * colors.
             * Size of vectoer icon will be adapted automatically. Refer to
             * [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)
             * for more information about format of path.
             * You may export vector paths from tools like Adobe Illustrator.
             *
             * For example:
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree)
             *
             *
             * @default
             * "emptyCircle"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.symbol
             */
            symbol?: string;

            /**
             * symbol size.
             * It can be set to single numbers like `10`, or use an array to
             * represent width and height.
             * For example, `[20, 10]` means symbol width is `20`, and height
             * is`10`.
             *
             * If size of symbols needs to be different, you can set with callback
             * function in the following format:
             *
             * ```
             * (value: Array|number, params: Object) => number|Array
             *
             * ```
             *
             * The first parameter `value` is the value in
             * [data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data)
             * , and the second parameter `params` is the rest parameters of
             * data item.
             *
             *
             * @default
             * 7
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.symbolSize
             */
            symbolSize?: any[] | Function | number;

            /**
             * Rotate degree of symbol.
             * Note that when `symbol` is set to be `'arrow'` in `markLine`,
             * `symbolRotate` value will be ignored, and compulsively use tangent
             * angle.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.symbolRotate
             */
            symbolRotate?: number;

            /**
             * Whether to keep aspect for symbols in the form of `path://`.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.symbolKeepAspect
             */
            symbolKeepAspect?: boolean;

            /**
             * Offset of symbol relative to original position.
             * By default, symbol will be put in the center position of data.
             * But if symbol is from user-defined vector path or image, you
             * may not expect symbol to be in center.
             * In this case, you may use this attribute to set offset to default
             * position.
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
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.symbolOffset
             */
            symbolOffset?: any[];

            /**
             * Whether to enable mouse zooming and translating.
             * `false` by default.
             * If either zooming or translating is wanted, it can be set to
             * `'scale'` or `'move'`.
             * Otherwise, set it to be `true` to enable both.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.roam
             */
            roam?: boolean | string;

            /**
             * Subtree collapses and expands interaction, `default true`.
             * As the drawing area is limited, and usually the nodes of a tree
             * may be more, so there will be hidden between the nodes.
             * In order to avoid this problem, you can put a temporary unrelated
             * subtree folded away, until you need to start when necessary.
             * Such as the above radial layout tree example, the center of the
             * node is filled with blue is the folded away subtree, you can
             * click to expand it.
             *
             * **Note: If you configure a custom image as the tag for a node,
             * it is not possible to distinguish whether the current node has
             * a collapsed subtree by the fill color.
             * And currently do not support, upload two pictures, respectively
             * represent the collapsing and expansion state of the node.
             * So, if you want to explicitly show the two states of the node,
             * it is recommended to use `ECharts` regular tag types, such as
             * `emptyCircle`.**
             *
             *
             * @default
             * "true"
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.expandAndCollapse
             */
            expandAndCollapse?: boolean;

            /**
             * The initial level (depth) of the tree.
             * The root node is the 0th layer, then the first layer, the second
             * layer,
             *
             *
             *
             * , until the leaf node.
             * This configuration item is primarily used in conjunction with
             * `collapsing and expansion` interactions.
             * The purpose is to prevent the nodes from obscuring each other.
             * If set as -1 or `null` or `undefined`, all nodes are expanded.
             *
             *
             * @default
             * 2
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.initialTreeDepth
             */
            initialTreeDepth?: number;

            /**
             * The style of each node in the tree, where \[itemStyle.color\]
             * (~ series-tree.itemStyle.color)
             * represents the fill color of the node, to distinguish the state
             * of the subtree corresponding to `collapsing` or `expansion`.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.itemStyle
             */
            itemStyle?: {

                /**
                 * color. Color is taken from
                 * [option.color Palette](https://ecomfe.github.io/echarts-doc/public/en/option.html#color)
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
                 * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.itemStyle)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.itemStyle.color
                 */
                color?: string;

                /**
                 * border color, whose format is similar to that of `color`.
                 *
                 *
                 * @default
                 * "#c23531"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.itemStyle.borderColor
                 */
                borderColor?: string;

                /**
                 * border width. No border when it is set to be 0.
                 *
                 *
                 * @default
                 * 1.5
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.itemStyle.borderWidth
                 */
                borderWidth?: number;

                /**
                 * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                 * `'solid'` by default.
                 *
                 *
                 * @default
                 * "solid"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.itemStyle.borderType
                 */
                borderType?: string;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.itemStyle)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.itemStyle.shadowBlur
                 */
                shadowBlur?: number;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.itemStyle.shadowColor
                 */
                shadowColor?: string;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.itemStyle.shadowOffsetX
                 */
                shadowOffsetX?: number;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.itemStyle.shadowOffsetY
                 */
                shadowOffsetY?: number;

                /**
                 * Opacity of the component.
                 * Supports value from 0 to 1, and the component will not be
                 * drawn when set to 0.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.itemStyle.opacity
                 */
                opacity?: number;
            };

            /**
             * `label` describes the style of the text corresponding to each
             * node.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label
             */
            label?: {

                /**
                 * Whether to show label.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.show
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
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.label)
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
                 * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                 * .
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.position
                 */
                position?: any[] | string;

                /**
                 * Distance to the host graphic element.
                 * Works when position is string value (like `'top'`、`'insideRight'`).
                 *
                 * See:
                 * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                 * .
                 *
                 *
                 * @default
                 * 5
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.distance
                 */
                distance?: number;

                /**
                 * Rotate label, from -90 degree to 90, positive value represents
                 * rotate anti-clockwise.
                 *
                 * See:
                 * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                 * .
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rotate
                 */
                rotate?: number;

                /**
                 * Whether to move text slightly.
                 * For example: `[30, 40]` means move `30` horizontally and
                 * move `40` vertically.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.offset
                 */
                offset?: any[];

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
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.label)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.formatter
                 */
                formatter?: Function | string;

                /**
                 * text color.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 *
                 * @default
                 * ""#fff""
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.color
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
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.fontStyle
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
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.fontWeight
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
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.fontFamily
                 */
                fontFamily?: string;

                /**
                 * font size
                 *
                 *
                 * @default
                 * 12
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.fontSize
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
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.label)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.align
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
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.label)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.verticalAlign
                 */
                verticalAlign?: string;

                /**
                 * Line height of the text fregment.
                 *
                 * If `lineHeight` is not set in `rich`, `lineHeight` in parent
                 * level will be used. For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.label)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.lineHeight
                 */
                lineHeight?: number;

                /**
                 * Background color of the text fregment.
                 *
                 * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                 *
                 * Or image can be used, for example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.label)
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
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.backgroundColor
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
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.borderColor
                 */
                borderColor?: string;

                /**
                 * Border width of the text fregment.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.borderWidth
                 */
                borderWidth?: number;

                /**
                 * Border radius of the text fregment.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.borderRadius
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
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.padding
                 */
                padding?: any[] | number;

                /**
                 * Shadow color of the text block.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.shadowColor
                 */
                shadowColor?: string;

                /**
                 * Show blur of the text block.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.shadowBlur
                 */
                shadowBlur?: number;

                /**
                 * Shadow X offset of the text block.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.shadowOffsetX
                 */
                shadowOffsetX?: number;

                /**
                 * Shadow Y offset of the text block.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.shadowOffsetY
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
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.width
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
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.height
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
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.textBorderColor
                 */
                textBorderColor?: string;

                /**
                 * Storke line width of the text.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.textBorderWidth
                 */
                textBorderWidth?: number;

                /**
                 * Shadow color of the text itself.
                 *
                 *
                 * @default
                 * "transparent"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.textShadowColor
                 */
                textShadowColor?: string;

                /**
                 * Shadow blue of the text itself.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.textShadowBlur
                 */
                textShadowBlur?: number;

                /**
                 * Shadow X offset of the text itself.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.textShadowOffsetX
                 */
                textShadowOffsetX?: number;

                /**
                 * Shadow Y offset of the text itself.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.textShadowOffsetY
                 */
                textShadowOffsetY?: number;

                /**
                 * "Rich text styles" can be defined in this `rich` property.
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.label)
                 *
                 * For more details, see
                 * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                 * please.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich
                 */
                rich?: {

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;
                    };
                };
            };

            /**
             * Defines the style of the tree edge.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.lineStyle
             */
            lineStyle?: {

                /**
                 * The color of the tree edge.
                 *
                 *
                 * @default
                 * ""#ccc""
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.lineStyle.color
                 */
                color?: string;

                /**
                 * The width of the tree edge.
                 *
                 *
                 * @default
                 * 1.5
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.lineStyle.width
                 */
                width?: number;

                /**
                 * The curvature of the tree edge.
                 *
                 *
                 * @default
                 * 0.5
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.lineStyle.curveness
                 */
                curveness?: number;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.lineStyle)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.lineStyle.shadowBlur
                 */
                shadowBlur?: number;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.lineStyle.shadowColor
                 */
                shadowColor?: string;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.lineStyle.shadowOffsetX
                 */
                shadowOffsetX?: number;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.lineStyle.shadowOffsetY
                 */
                shadowOffsetY?: number;
            };

            /**
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis
             */
            emphasis?: {

                /**
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.itemStyle
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
                     * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.itemStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.itemStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.itemStyle.opacity
                     */
                    opacity?: number;
                };

                /**
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.lineStyle
                 */
                lineStyle?: {

                    /**
                     * The color of the tree edge.
                     *
                     *
                     * @default
                     * ""#ccc""
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.lineStyle.color
                     */
                    color?: string;

                    /**
                     * The width of the tree edge.
                     *
                     *
                     * @default
                     * 1.5
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.lineStyle.width
                     */
                    width?: number;

                    /**
                     * The curvature of the tree edge.
                     *
                     *
                     * @default
                     * 0.5
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.lineStyle.curveness
                     */
                    curveness?: number;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.lineStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.lineStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.lineStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.lineStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.lineStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;
                };

                /**
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label
                 */
                label?: {

                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.show
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.label)
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
                     * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.position
                     */
                    position?: any[] | string;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @default
                     * 5
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.distance
                     */
                    distance?: number;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                     * .
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.offset
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.formatter
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.color
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.fontStyle
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.fontWeight
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.fontSize
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.align
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.label)
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.backgroundColor
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.borderRadius
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.shadowOffsetY
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.width
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.height
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.label)
                     *
                     * For more details, see
                     * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich
                     */
                    rich?: {

                        /**
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };
                };
            };

            /**
             * Leaf node special configuration, such as the above tree diagram
             * example, the leaf node and non-leaf node label location is different.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves
             */
            leaves?: {

                /**
                 * Describes the style of the text label corresponding to the
                 * leaf node.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label
                 */
                label?: {

                    /**
                     * Whether to show label.
                     *
                     *
                     * @default
                     * "true"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.show
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.label)
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
                     * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.position
                     */
                    position?: any[] | string;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @default
                     * 5
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.distance
                     */
                    distance?: number;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                     * .
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.offset
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.formatter
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.color
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.fontStyle
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.fontWeight
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.fontSize
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.align
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.label)
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.backgroundColor
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.borderRadius
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.shadowOffsetY
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.width
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.height
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.label)
                     *
                     * For more details, see
                     * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich
                     */
                    rich?: {

                        /**
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };
                };

                /**
                 * The style of the leaf node in the tree.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.itemStyle
                 */
                itemStyle?: {

                    /**
                     * color. Color is taken from
                     * [option.color Palette](https://ecomfe.github.io/echarts-doc/public/en/option.html#color)
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
                     * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.itemStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.itemStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.itemStyle.opacity
                     */
                    opacity?: number;
                };

                /**
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis
                 */
                emphasis?: {

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label
                     */
                    label?: {

                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.show
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
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.emphasis.label)
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
                         * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.position
                         */
                        position?: any[] | string;

                        /**
                         * Distance to the host graphic element.
                         * Works when position is string value (like `'top'`、`'insideRight'`).
                         *
                         * See:
                         * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @default
                         * 5
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.distance
                         */
                        distance?: number;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.offset
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
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.emphasis.label)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.formatter
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.color
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.fontStyle
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.fontWeight
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.fontSize
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
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.emphasis.label)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.align
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
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.emphasis.label)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.emphasis.label)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.emphasis.label)
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.backgroundColor
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.borderRadius
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.shadowOffsetY
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.width
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.height
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.emphasis.label)
                         *
                         * For more details, see
                         * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich
                         */
                        rich?: {

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;
                            };
                        };
                    };

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.itemStyle
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
                         * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.emphasis.itemStyle)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.itemStyle.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.itemStyle.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.itemStyle.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.itemStyle.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.leaves.emphasis.itemStyle)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.itemStyle.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.itemStyle.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.leaves.emphasis.itemStyle.opacity
                         */
                        opacity?: number;
                    };
                };
            };

            /**
             * [series-tree.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data)
             * the data format is a tree structure，for example：
             *
             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree)
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data
             */
            data?: SeriesTree.DataObject[];

            /**
             * tooltip settings in this series.
             *
             *
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip
             */
            tooltip?: {

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
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
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.tooltip)
                 *
                 * + `Function`
                 *
                 * Callback function in the following form:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.tooltip)
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
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.tooltip)
                 *
                 * Or:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.tooltip)
                 *
                 * + `'inside'`
                 *
                 * Center position of the graphic element where the mouse is
                 * in, which is only valid when
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 * + `'top'`
                 *
                 * Top position of the graphic element where the mouse is in,
                 * which is only valid when
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 * + `'left'`
                 *
                 * Left position of the graphic element where the mouse is in,
                 * which is only valid when
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 * + `'right'`
                 *
                 * Right position of the graphic element where the mouse is
                 * in, which is only valid when
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 * + `'bottom'`
                 *
                 * Bottom position of the graphic element where the mouse is
                 * in, which is only valid when
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * is `'item'`.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.position
                 */
                position?: any[] | string;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
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
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
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
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.tooltip)
                 *
                 * The first parameter `params` is the data that the formatter
                 * needs. Its format is shown as follows:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.tooltip)
                 *
                 * When
                 * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * is `'axis'`, or when tooltip is triggered by
                 * [axisPointer](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisPointer)
                 * , `params` is the data array of multiple series.
                 * The content of each item of the array is the same as above.
                 * Besides,
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.tooltip)
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
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.tooltip)
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.formatter
                 */
                formatter?: Function | string;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The background color of tooltip's floating layer.
                 *
                 *
                 * @default
                 * "rgba(50,50,50,0.7)"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.backgroundColor
                 */
                backgroundColor?: string;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The border color of tooltip's floating layer.
                 *
                 *
                 * @default
                 * '#333'
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.borderColor
                 */
                borderColor?: string;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The border width of tooltip's floating layer.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.borderWidth
                 */
                borderWidth?: number;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
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
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.tooltip)
                 *
                 *
                 * @default
                 * 5
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.padding
                 */
                padding?: number;

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                 * > is `'item'`.
                 *
                 * The text syle of tooltip's floating layer.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle
                 */
                textStyle?: {

                    /**
                     * text color.
                     *
                     *
                     * @default
                     * "#fff"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.color
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.fontStyle
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.fontWeight
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 14
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.fontSize
                     */
                    fontSize?: number;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.tooltip.textStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.lineHeight
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.width
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.height
                     */
                    height?: number | string;

                    /**
                     * Storke color of the text.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.textStyle.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;
                };

                /**
                 *
                 * > **Notice：**series.tooltip only works when
                 * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
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
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tooltip.extraCssText
                 */
                extraCssText?: string;
            };
        }

        namespace SeriesTree {
            interface DataObject {
                children?: DataObject[];

                /**
                 * The name of the tree node, used to identify each node.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.name
                 */
                name?: string;

                /**
                 * The value of the node, displayed in the tooltip.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.value
                 */
                value?: number;

                /**
                 * The style of the node.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.itemStyle
                 */
                itemStyle?: {

                    /**
                     * color. Color is taken from
                     * [option.color Palette](https://ecomfe.github.io/echarts-doc/public/en/option.html#color)
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
                     * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.itemStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.itemStyle.color
                     */
                    color?: string;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     *
                     * @default
                     * "#000"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.itemStyle.borderColor
                     */
                    borderColor?: string;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.itemStyle.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     *
                     * @default
                     * "solid"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.itemStyle.borderType
                     */
                    borderType?: string;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.itemStyle)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.itemStyle.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.itemStyle.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.itemStyle.opacity
                     */
                    opacity?: number;
                };

                /**
                 * The label of the node.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label
                 */
                label?: {

                    /**
                     * Whether to show label.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.show
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.label)
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
                     * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.position
                     */
                    position?: any[] | string;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                     * .
                     *
                     *
                     * @default
                     * 5
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.distance
                     */
                    distance?: number;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                     * .
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rotate
                     */
                    rotate?: number;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.offset
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.color
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.fontStyle
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.fontWeight
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.fontFamily
                     */
                    fontFamily?: string;

                    /**
                     * font size
                     *
                     *
                     * @default
                     * 12
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.fontSize
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.align
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.verticalAlign
                     */
                    verticalAlign?: string;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.label)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.lineHeight
                     */
                    lineHeight?: number;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.label)
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.backgroundColor
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.borderColor
                     */
                    borderColor?: string;

                    /**
                     * Border width of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * Border radius of the text fregment.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.borderRadius
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.padding
                     */
                    padding?: any[] | number;

                    /**
                     * Shadow color of the text block.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.shadowColor
                     */
                    shadowColor?: string;

                    /**
                     * Show blur of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.shadowBlur
                     */
                    shadowBlur?: number;

                    /**
                     * Shadow X offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.shadowOffsetX
                     */
                    shadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.shadowOffsetY
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.width
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.height
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.textBorderColor
                     */
                    textBorderColor?: string;

                    /**
                     * Storke line width of the text.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.textBorderWidth
                     */
                    textBorderWidth?: number;

                    /**
                     * Shadow color of the text itself.
                     *
                     *
                     * @default
                     * "transparent"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.textShadowColor
                     */
                    textShadowColor?: string;

                    /**
                     * Shadow blue of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.textShadowBlur
                     */
                    textShadowBlur?: number;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.label)
                     *
                     * For more details, see
                     * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich
                     */
                    rich?: {

                        /**
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string;

                            /**
                             * font size
                             *
                             *
                             * @default
                             * 12
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                             * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string;

                            /**
                             * Border width of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number;

                            /**
                             * Border radius of the text fregment.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number;

                            /**
                             * Shadow color of the text block.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string;

                            /**
                             * Show blur of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number;

                            /**
                             * Shadow X offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string;

                            /**
                             * Storke line width of the text.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number;

                            /**
                             * Shadow color of the text itself.
                             *
                             *
                             * @default
                             * "transparent"
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string;

                            /**
                             * Shadow blue of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             *
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number;
                        };
                    };
                };

                /**
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis
                 */
                emphasis?: {

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label
                     */
                    label?: {

                        /**
                         * Whether to show label.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.show
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
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.emphasis.label)
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
                         * [label position](https://ecomfe.github.io/echarts-examples/public/view.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.position
                         */
                        position?: any[] | string;

                        /**
                         * Distance to the host graphic element.
                         * Works when position is string value (like `'top'`、`'insideRight'`).
                         *
                         * See:
                         * [label position](https://ecomfe.github.io/echarts-examples/public/editor.html?c=doc-example/label-position)
                         * .
                         *
                         *
                         * @default
                         * 5
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.distance
                         */
                        distance?: number;

                        /**
                         * Rotate label, from -90 degree to 90, positive value
                         * represents rotate anti-clockwise.
                         *
                         * See:
                         * [label rotation](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation)
                         * .
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rotate
                         */
                        rotate?: number;

                        /**
                         * Whether to move text slightly.
                         * For example: `[30, 40]` means move `30` horizontally
                         * and move `40` vertically.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.offset
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.color
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.fontStyle
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.fontWeight
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 12
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.fontSize
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
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.emphasis.label)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.align
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
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.emphasis.label)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.verticalAlign
                         */
                        verticalAlign?: string;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.emphasis.label)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.lineHeight
                         */
                        lineHeight?: number;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.emphasis.label)
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.backgroundColor
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.borderColor
                         */
                        borderColor?: string;

                        /**
                         * Border width of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border radius of the text fregment.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.borderRadius
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.padding
                         */
                        padding?: any[] | number;

                        /**
                         * Shadow color of the text block.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Show blur of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow X offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.shadowOffsetY
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.width
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.height
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;

                        /**
                         * "Rich text styles" can be defined in this `rich`
                         * property. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.emphasis.label)
                         *
                         * For more details, see
                         * [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/option.htmltutorial.html#Rich%20Text)
                         * please.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich
                         */
                        rich?: {

                            /**
                             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                                 */
                                fontFamily?: string;

                                /**
                                 * font size
                                 *
                                 *
                                 * @default
                                 * 12
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
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
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
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
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                                 */
                                verticalAlign?: string;

                                /**
                                 * Line height of the text fregment.
                                 *
                                 * If `lineHeight` is not set in `rich`, `lineHeight`
                                 * in parent level will be used.
                                 * For example:
                                 *
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
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
                                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                                 */
                                borderColor?: string;

                                /**
                                 * Border width of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                                 */
                                borderWidth?: number;

                                /**
                                 * Border radius of the text fregment.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                                 */
                                padding?: any[] | number;

                                /**
                                 * Shadow color of the text block.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                                 */
                                shadowColor?: string;

                                /**
                                 * Show blur of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                                 */
                                shadowBlur?: number;

                                /**
                                 * Shadow X offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                                 */
                                shadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text block.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
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
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                                 */
                                textBorderColor?: string;

                                /**
                                 * Storke line width of the text.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                                 */
                                textBorderWidth?: number;

                                /**
                                 * Shadow color of the text itself.
                                 *
                                 *
                                 * @default
                                 * "transparent"
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                                 */
                                textShadowColor?: string;

                                /**
                                 * Shadow blue of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                                 */
                                textShadowBlur?: number;

                                /**
                                 * Shadow X offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                                 */
                                textShadowOffsetX?: number;

                                /**
                                 * Shadow Y offset of the text itself.
                                 *
                                 *
                                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                                 */
                                textShadowOffsetY?: number;
                            };
                        };
                    };

                    /**
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.itemStyle
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
                         * > [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.emphasis.itemStyle)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.itemStyle.color
                         */
                        color?: string;

                        /**
                         * border color, whose format is similar to that of
                         * `color`.
                         *
                         *
                         * @default
                         * "#000"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.itemStyle.borderColor
                         */
                        borderColor?: string;

                        /**
                         * border width. No border when it is set to be 0.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.itemStyle.borderWidth
                         */
                        borderWidth?: number;

                        /**
                         * Border type, which can be `'solid'`, `'dashed'`,
                         * or `'dotted'`. `'solid'` by default.
                         *
                         *
                         * @default
                         * "solid"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.itemStyle.borderType
                         */
                        borderType?: string;

                        /**
                         * Size of shadow blur.
                         * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                         * `shadowOffsetY` to set shadow to component.
                         *
                         * For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.emphasis.itemStyle)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.itemStyle.shadowBlur
                         */
                        shadowBlur?: number;

                        /**
                         * Shadow color. Support same format as `color`.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.itemStyle.shadowColor
                         */
                        shadowColor?: string;

                        /**
                         * Offset distance on the horizontal direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.itemStyle.shadowOffsetX
                         */
                        shadowOffsetX?: number;

                        /**
                         * Offset distance on the vertical direction of shadow.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.itemStyle.shadowOffsetY
                         */
                        shadowOffsetY?: number;

                        /**
                         * Opacity of the component.
                         * Supports value from 0 to 1, and the component will
                         * not be drawn when set to 0.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.emphasis.itemStyle.opacity
                         */
                        opacity?: number;
                    };
                };

                /**
                 * tooltip settings in this series data.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip
                 */
                tooltip?: {

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.tooltip)
                     *
                     * + `Function`
                     *
                     * Callback function in the following form:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.tooltip)
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.tooltip)
                     *
                     * Or:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.tooltip)
                     *
                     * + `'inside'`
                     *
                     * Center position of the graphic element where the mouse
                     * is in, which is only valid when
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     * + `'top'`
                     *
                     * Top position of the graphic element where the mouse is
                     * in, which is only valid when
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     * + `'left'`
                     *
                     * Left position of the graphic element where the mouse
                     * is in, which is only valid when
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     * + `'right'`
                     *
                     * Right position of the graphic element where the mouse
                     * is in, which is only valid when
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     * + `'bottom'`
                     *
                     * Bottom position of the graphic element where the mouse
                     * is in, which is only valid when
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * is `'item'`.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.position
                     */
                    position?: any[] | string;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
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
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.tooltip)
                     *
                     * The first parameter `params` is the data that the formatter
                     * needs. Its format is shown as follows:
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.tooltip)
                     *
                     * When
                     * [trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * is `'axis'`, or when tooltip is triggered by
                     * [axisPointer](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisPointer)
                     * , `params` is the data array of multiple series.
                     * The content of each item of the array is the same as
                     * above. Besides,
                     *
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.tooltip)
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.tooltip)
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.formatter
                     */
                    formatter?: Function | string;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The background color of tooltip's floating layer.
                     *
                     *
                     * @default
                     * "rgba(50,50,50,0.7)"
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.backgroundColor
                     */
                    backgroundColor?: string;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The border color of tooltip's floating layer.
                     *
                     *
                     * @default
                     * '#333'
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.borderColor
                     */
                    borderColor?: string;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The border width of tooltip's floating layer.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.borderWidth
                     */
                    borderWidth?: number;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
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
                     * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.tooltip)
                     *
                     *
                     * @default
                     * 5
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.padding
                     */
                    padding?: number;

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
                     * > is `'item'`.
                     *
                     * The text syle of tooltip's floating layer.
                     *
                     *
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle
                     */
                    textStyle?: {

                        /**
                         * text color.
                         *
                         *
                         * @default
                         * "#fff"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.color
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.fontStyle
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.fontWeight
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.fontFamily
                         */
                        fontFamily?: string;

                        /**
                         * font size
                         *
                         *
                         * @default
                         * 14
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.fontSize
                         */
                        fontSize?: number;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data.tooltip.textStyle)
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.lineHeight
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.width
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
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.height
                         */
                        height?: number | string;

                        /**
                         * Storke color of the text.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.textBorderColor
                         */
                        textBorderColor?: string;

                        /**
                         * Storke line width of the text.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.textBorderWidth
                         */
                        textBorderWidth?: number;

                        /**
                         * Shadow color of the text itself.
                         *
                         *
                         * @default
                         * "transparent"
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.textShadowColor
                         */
                        textShadowColor?: string;

                        /**
                         * Shadow blue of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.textShadowBlur
                         */
                        textShadowBlur?: number;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.textShadowOffsetX
                         */
                        textShadowOffsetX?: number;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         *
                         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.textStyle.textShadowOffsetY
                         */
                        textShadowOffsetY?: number;
                    };

                    /**
                     * > **Notice：**series.data.tooltip only works when
                     * > [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger)
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
                     * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.tooltip.extraCssText
                     */
                    extraCssText?: string;
                };

                /**
                 * Whether to enable animation.
                 *
                 *
                 * @default
                 * "true"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.animation
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
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.animationThreshold
                 */
                animationThreshold?: number;

                /**
                 * Duration of the first animation, which supports callback
                 * function for different data to have different animation effect:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data)
                 *
                 *
                 * @default
                 * 1000
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.animationDuration
                 */
                animationDuration?: Function | number;

                /**
                 * Easing method used for the first animation.
                 * Varied easing effects can be found at
                 * [easing effect example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=line-easing)
                 * .
                 *
                 *
                 * @default
                 * "linear"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.animationEasing
                 */
                animationEasing?: string;

                /**
                 * Delay before updating the first animation, which supports
                 * callback function for different data to have different animation
                 * effect.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data)
                 *
                 * See
                 * [this example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.animationDelay
                 */
                animationDelay?: Function | number;

                /**
                 * Time for animation to complete, which supports callback function
                 * for different data to have different animation effect:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data)
                 *
                 *
                 * @default
                 * 300
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.animationDurationUpdate
                 */
                animationDurationUpdate?: Function | number;

                /**
                 * Easing method used for animation.
                 *
                 *
                 * @default
                 * "cubicOut"
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.animationEasingUpdate
                 */
                animationEasingUpdate?: string;

                /**
                 * Delay before updating animation, which supports callback
                 * function for different data to have different animation effect.
                 *
                 * For example:
                 *
                 * [see doc](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.tree.data)
                 *
                 * See
                 * [this example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-animation-delay)
                 * for more information.
                 *
                 *
                 * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.data.animationDelayUpdate
                 */
                animationDelayUpdate?: Function | number;
            }
        }
    }
}
