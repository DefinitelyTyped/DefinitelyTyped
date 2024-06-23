declare namespace echarts {
    namespace EChartOption {
        /**
         * @see https://echarts.apache.org/en/option.html#legend
         */
        interface Legend {
            /**
             * Type of legend.
             * Optional values:
             *  'plain': Simple legend. (default)
             *  'scroll': Scrollable legend. It helps when too
             *   many legend items needed to be shown.
             *
             * @default 'plain'
             */
            type?: "plain" | "scroll" | undefined;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option or API.
             */
            id?: string | undefined;
            /**
             * Whether to show the legend component.
             * @default true
             */
            show?: boolean | undefined;
            /**
             * zlevel value of all graphical elements in.
             * zlevel is used to make layers with Canvas.
             * Graphical elements with different zlevel values will be placed in different Canvases,
             * which is a common optimization technique.
             * We can put those frequently changed elements (like those with animations) to a seperate zlevel.
             * Notice that too many Canvases will increase memory cost,
             * and should be used carefully on mobile phones to avoid crash.
             * Canvases with bigger zlevel will be placed on Canvases with smaller zlevel.
             *
             * @default 0
             */
            zlevel?: number | undefined;
            /**
             * z value of all graphical elements in, which controls order of drawing graphical components.
             * Components with smaller z values may be overwritten by those with larger z values.
             * z has a lower priority to zlevel, and will not create new Canvas.
             *
             * @default 2
             */
            z?: number | undefined;
            /**
             * Distance between legend component and the left side of the container.
             * left value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%';
             * and it can also be 'left', 'center', or 'right'.
             * If the left value is set to be 'left', 'center', or 'right',
             * then the component will be aligned automatically based on position.
             *
             * @default 'auto'
             */
            left?: string | number | undefined;
            /**
             * Distance between legend component and the top side of the container.
             * top value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%';
             * and it can also be 'top', 'middle', or 'bottom'.
             * If the left value is set to be 'top', 'middle', or 'bottom',
             * then the component will be aligned automatically based on position.
             *
             * @default 'auto'
             */
            top?: string | number | undefined;
            /**
             * Distance between legend component and the right side of the container.
             * right value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%'.
             * Adaptive by default.
             *
             * @default 'auto'
             */
            right?: string | number | undefined;
            /**
             * Distance between legend component and the bottom side of the container.
             * bottom value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%'.
             * Adaptive by default.
             *
             * @default 'auto'
             */
            bottom?: string | number | undefined;
            /**
             * Width of legend component. Adaptive by default.
             *
             * @default 'auto'
             */
            width?: string | number | undefined;
            /**
             * Height of legend component. Adaptive by default.
             *
             * @default 'auto'
             */
            height?: string | number | undefined;
            /**
             * The layout orientation of legend.
             *
             * @default 'horizontal'
             */
            orient?: "horizontal" | "vertical" | undefined;
            /**
             * Legend mrker and text aligning. By default,
             * it automatically calculates from component location and orient.
             * When left value of this component is 'right',
             * and the vertical layout (orient is 'vertical'),
             * it would be aligned to 'right'.
             *
             * @default 'auto'
             */
            align?: "auto" | "left" | "right" | undefined;
            /**
             * Legend space around content.
             * The unit is px. Default values for each position are 5.
             * And they can be set to different values with left, right, top, and bottom.
             *
             * @example
             * ```
             * // Set padding to be 5
             * padding: 5
             * // Set the top and bottom paddings to be 5, and left and right paddings to be 10
             * padding: [5, 10]
             * // Set each of the four paddings seperately
             * padding: [
             *    5,  // up
             *    10, // right
             *    5,  // down
             *    10, // left
             * ]
             * ```
             */
            padding?: number | number[] | undefined;
            /**
             * The distance between each legend, horizontal distance in horizontal layout,
             * and vertical distance in vertical layout.
             *
             * @default 10
             */
            itemGap?: number | undefined;
            /**
             * Image width of legend symbol.
             *
             * @default 25
             */
            itemWidth?: number | undefined;
            /**
             * Image height of legend symbol.
             *
             * @default 14
             */
            itemHeight?: number | undefined;
            /**
             * Whether to keep aspect for icons
             * (from series.symbol or user-defined legend.data.icon) in the form of path://.
             *
             * @default true
             */
            symbolKeepAspect?: boolean | undefined;
            /**
             * Formatter is used to format label of legend, which supports string template and callback function.
             *
             * @default null
             */
            formatter?: string | Legend.Formatter | undefined;
            /**
             * Selected mode of legend, which controls whether series can be toggled displaying by clicking legends.
             * It is enabled by default, and you may set it to be false to disabled it.
             * Besides, it can be set to 'single' or 'multiple', for single selection and multiple selection.
             *
             * @default true
             */
            selectedMode?: boolean | "single" | "multiple" | undefined;
            /**
             * Legend color when not selected.
             *
             * @default '#ccc'
             */
            inactiveColor?: string | undefined;
            /**
             * State table of selected legend.
             *
             * @example
             * ```
             * selected: {
             *   // selected'series 1'
             *   'series 1': true,
             *   // unselected'series 2'
             *   'series 2': false
             * }
             * ```
             */
            selected?: object | undefined;
            /**
             * Legend text style.
             */
            textStyle?: TextStyleWithRich | undefined;
            /**
             * Tooltip configuration for legend tooltip, which is similar to tooltip.
             *
             * @see https://echarts.apache.org/en/option.html#legend.tooltip
             */
            tooltip?: Tooltip | undefined;
            /**
             * Icon of the legend items.
             * Icon types provided by ECharts includes 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
             * It can be set to an image with 'image://url' , in which URL is the link to an image, or dataURI of an image.
             * Icons can be set to arbitrary vector path via 'path://' in ECharts.
             * As compared with raster image, vector paths prevent from jagging and blurring when scaled,
             * and have a better control over changing colors. Size of vectoer icon will be adapted automatically.
             * Refer to SVG PathData for more information about format of path. You may export vector paths from tools like Adobe Illustrator.
             *
             * @see https://echarts.apache.org/en/option.html#legend.icon
             */
            icon?: string | undefined;
            /**
             * Data array of legend. An array item is usually a name representing string.
             * (If it is a pie chart, it could also be the name of a single data in the pie chart) of a series.
             * Legend component would automatically calculate the color and icon according to series.
             * Special string '' (null string) or '\n' (new line string) can be used for a new line.
             * If data is not specified, it will be auto collected from series. For most of series,
             * it will be collected from series.name or the dimension name specified by seriesName of series.encode.
             * For some types of series like pie and funnel, it will be collected from the name field of series.data.
             * If you need to set the style for a single item, you may also set the configuration of it.
             * In this case, name attribute is used to represent name of series.
             *
             * @see https://echarts.apache.org/en/option.html#legend.data
             */
            data?: string[] | Legend.LegendDataObject[] | undefined;
            /**
             * Background color of legend, which is transparent by default.
             * Color can be represented in RGB, for example 'rgb(128, 128, 128)'.
             * RGBA can be used when you need alpha channel, for example 'rgba(128, 128, 128, 0.5)'.
             * You may also use hexadecimal format, for example '#ccc'.
             *
             * @default 'transparent'
             */
            backgroundColor?: string | undefined;
            /**
             * Border color of legend. Support the same color format as backgroundColor.
             *
             * @default '#ccc'
             */
            borderColor?: string | undefined;
            /**
             * Border width of legend.
             *
             * @default 1
             */
            borderWidth?: number | undefined;
            /**
             * The radius of rounded corner. Its unit is px.
             * And it supports use array to respectively specify the 4 corner radiuses.
             *
             * @default 0
             *
             * @example
             *
             * ```
             * borderRadius: 5, // consistently set the size of 4 rounded corners
             * borderRadius: [5, 5, 0, 0] // (clockwise upper left, upper right, bottom right and bottom left)
             * ```
             */
            borderRadius?: number | number[] | undefined;
            /**
             * Size of shadow blur. This attribute should be used along with shadowColor,
             * shadowOffsetX, shadowOffsetY to set shadow to component.
             * Attention:
             * This property works only if show: true is configured and backgroundColor is defined other than transparent.
             */
            shadowBlur?: number | undefined;
            /**
             * Shadow color. Support same format as color.
             * Attention: This property works only if show: true configured.
             */
            shadowColor?: string | undefined;
            /**
             * Offset distance on the horizontal direction of shadow.
             * Attention: This property works only if show: true configured.
             *
             * @default 0
             */
            shadowOffsetX?: number | undefined;
            /**
             * Offset distance on the vertical direction of shadow.
             * Attention: This property works only if show: true configured.
             *
             * @default 0
             */
            shadowOffsetY?: number | undefined;
            /**
             * It works when legend.type is 'scroll'.
             * dataIndex of the left top most displayed item.
             * Although the scrolling of legend items can be controlled by calling setOption and specifying this property,
             * we suggest that do not controll legend in this way unless necessary (setOption might be time-consuming),
             * but just use action legendScroll to do that.
             *
             * @default 0
             * @see https://echarts.apache.org/en/option.html#legend.scrollDataIndex
             */
            scrollDataIndex?: number | undefined;
            /**
             * It works when legend.type is 'scroll'.
             * The gap between page buttons and page info text.
             *
             * @default 5
             */
            pageButtonItemGap?: number | undefined;
            /**
             * It works when legend.type is 'scroll'.
             * The gap between page buttons and legend items.
             *
             * @default null
             */
            pageButtonGap?: number | undefined;
            /**
             * It works when legend.type is 'scroll'.
             * The position of page buttons and page info. Optional values:
             * 'start': on the left or top.
             * 'end': on the right or bottom.
             *
             * @default 'end'
             */
            pageButtonPosition?: "start" | "end" | undefined;
            /**
             * It works when legend.type is 'scroll'.
             * Page info formatter. It is '{current}/{total}' by default,
             * where {current} is current page number (start from 1), and {total} is the total page number.
             *
             * @default '{current}/{total}'
             */
            pageFormatter?: string | Legend.PageFormatter | undefined;
            /**
             * @see https://echarts.apache.org/en/option.html#legend.pageIcons
             */
            pageIcons?: Legend.PageIcons | undefined;
            /**
             * It works when legend.type is 'scroll'.
             * The color of page buttons.
             *
             * @default '#2f4554'
             */
            pageIconColor?: string | undefined;
            /**
             * It works when legend.type is 'scroll'.
             * The color of page buttons when they are inactive.
             *
             * @default '#aaa'
             */
            pageIconInactiveColor?: string | undefined;
            /**
             * It works when legend.type is 'scroll'.
             * The size of page buttons. It can be a number, or an array, like [10, 3], represents [width, height].
             *
             * @default 15
             */
            pageIconSize?: number | number[] | undefined;
            /**
             * It works when legend.type is 'scroll'.
             * The text style of page info.
             */
            pageTextStyle?: TextStyle | undefined;
            /**
             * Whether to use animation when page scrolll.
             */
            animation?: boolean | undefined;
            /**
             * Duration of the page scroll animation.
             *
             * @default 800
             */
            animationDurationUpdate?: number | undefined;
            /**
             * The selector button in the legend component.
             * Currently includes both a full selection and an inverse selection.
             * The selector button doesn't display by default, the user can manually configure it.
             */
            selector?: boolean | string[] | Array<{ type: string; title: string }> | undefined;
            /**
             * The text label style of the selector button, which is displayed by default.
             */
            selectorLabel?: Legend.SelectorLabel | undefined;
            /**
             * The position of the selector button, which can be placed at the end or start of the legend component,
             * the corresponding values are 'end' and 'start'.
             * By default, when the legend is laid out horizontally, the selector is placed at the end of it,
             * and when the legend is laid out vertically, the selector is placed at the start of it.
             *
             * @default 'auto'
             */
            selectorPosition?: string | undefined;
            /**
             * The gap between the selector button.
             *
             * @default 7
             */
            selectorItemGap?: number | undefined;
            /**
             * The gap between selector button and legend component.
             *
             * @default 10
             */
            selectorButtonGap?: number | undefined;
        }

        namespace Legend {
            interface Formatter {
                (name: string): string;
            }
            interface LegendDataObject {
                /**
                 * Name of legend, which should be the name value of a certain series.
                 * If it is a pie chart, legend name can also be the name of a single data item.
                 */
                name?: string | undefined;
                /**
                 * Icon of the legend items.
                 * Icon types provided by ECharts includes 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                 * It can be set to an image with 'image://url' , in which URL is the link to an image, or dataURI of an image.
                 * Icons can be set to arbitrary vector path via 'path://' in ECharts.
                 * As compared with raster image, vector paths prevent from jagging and blurring when scaled,
                 * and have a better control over changing colors. Size of vectoer icon will be adapted automatically.
                 * Refer to SVG PathData for more information about format of path. You may export vector paths from tools like Adobe Illustrator.
                 *
                 * @see https://echarts.apache.org/en/option.html#legend.data.icon
                 */
                icon?: string | undefined;
                /**
                 * Text style of legend.
                 */
                textStyle?: TextStyle | undefined;
            }
            interface PageFormatter {
                (current: number, total: number): string;
            }
            interface PageIcons {
                /**
                 * The icons of page buttons when legend.orient is 'horizontal'.
                 * It should be an array, [previous page button, next page button], ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z'] by default.
                 *
                 * @see https://echarts.apache.org/en/option.html#legend.pageIcons.horizontal
                 */
                horizontal?: string[] | undefined;
                /**
                 * The icons of page buttons when legend.orient is 'vertical'.
                 * It should be an array, [previous page button, next page button], ['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z'] by default.
                 *
                 * @see https://echarts.apache.org/en/option.html#legend.pageIcons.vertical
                 */
                vertical?: string[] | undefined;
            }
            interface SelectorLabel {
                /**
                 * Whether to show label.
                 *
                 * @default false
                 */
                show?: boolean | undefined;
                /**
                 * Distance to the host graphic element. Works when position is string value (like 'top'、'insideRight').
                 *
                 * @default 5
                 *
                 * @see https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position
                 */
                distance?: number | undefined;
                /**
                 * Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.
                 *
                 * @see https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation
                 */
                rotate?: number | undefined;
                /**
                 * text color.
                 * If set as 'auto', the color will assigned as visual color, such as series color.
                 *
                 * @default '#fff'
                 */
                color?: Color | undefined;
                /**
                 * font style.
                 * Options are:'normal','italic','oblique'
                 *
                 * @default 'normal'
                 */
                fontStyle?: "normal" | "italic" | "oblique" | undefined;
                /**
                 * font thick weight.
                 *
                 * @default 'normal'
                 */
                fontWeight?:
                    | "normal"
                    | "bold"
                    | "bolder"
                    | "lighter"
                    | 100
                    | 200
                    | 300
                    | 400
                    | 500
                    | 600
                    | 700
                    | 800
                    | 900
                    | undefined;
                /**
                 * font family.
                 *
                 * @default 'sans-serif'
                 */
                fontFamily?: string | undefined;
                /**
                 * font size
                 *
                 * @default 12
                 */
                fontSize?: number | undefined;
                /**
                 * Horizontal alignment of text, automatic by default.
                 */
                align?: "left" | "center" | "right" | undefined;
                /**
                 * Vertical alignment of text, automatic by default.
                 */
                verticalAlign?: "top" | "middle" | "bottom" | undefined;
                /**
                 * Line height of the text fragment.
                 */
                lineHeight?: number | undefined;
                /**
                 * Background color of the text fragment.
                 * Can be color string, like '#123234', 'red', 'rgba(0,23,11,0.3)'.
                 * Or image can be used, for example:
                 * @example
                 * ```ts
                 * backgroundColor: {
                 *     image: 'xxx/xxx.png'
                 *     // It can be URL of a image,
                 *     // or dataURI,
                 *     // or HTMLImageElement,
                 *     // or HTMLCanvasElement.
                 * }
                 * ```
                 *
                 * width or height can be specified when using background image, or auto adapted by default.
                 * If set as 'auto', the color will assigned as visual color, such as series color.
                 *
                 * @default 'transparent'
                 */
                backgroundColor?: string | object | undefined;
                /**
                 * Border color of the text fragment.
                 * If set as 'auto', the color will assigned as visual color, such as series color.
                 * @default 'transparent'
                 */
                borderColor?: Color | undefined;
                /**
                 * Border width of the text fragment.
                 */
                borderWidth?: number | undefined;
                /**
                 * Border radius of the text fragment.
                 */
                borderRadius?: number | undefined;
                /**
                 * Padding of the text fragment, for example:
                 * padding: [3, 4, 5, 6]: represents padding of [top, right, bottom, left].
                 * padding: 4: represents padding: [4, 4, 4, 4].
                 * padding: [3, 4]: represents padding: [3, 4, 3, 4].
                 * Notice, width and height specifies the width and height of the content, without padding
                 */
                padding?: number | number[] | undefined;
                /**
                 * Shadow color of the text block.
                 *
                 * @default 'transparent'
                 */
                shadowColor?: Color | undefined;
                /**
                 * Show blur of the text block.
                 */
                shadowBlur?: number | undefined;
                /**
                 * Shadow X offset of the text block.
                 */
                shadowOffsetX?: number | undefined;
                /**
                 * Shadow Y offset of the text block.
                 */
                shadowOffsetY?: number | undefined;
                /**
                 * Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see backgroundColor).
                 * Notice, width and height specifies the width and height of the content, without padding. width can also be percent string, like '100%', which represents the percent of contentWidth (that is, the width without padding) of its container box. It is based on contentWidth because that each text fragment is layout based on the content box, where it makes no sense that calculating width based on outerWith in prectice.
                 * Notice, width and height only work when rich specified.
                 */
                width?: number | string | undefined;
                /**
                 * Height of the text block. It is the width of the text by default.
                 * You may want to use it in some cases like using background image (see backgroundColor).
                 * Notice, width and height specifies the width and height of the content, without padding.
                 * Notice, width and height only work when rich specified.
                 */
                height?: number | string | undefined;
                /**
                 * Storke color of the text.
                 * If set as 'auto', the color will assigned as visual color, such as series color.
                 *
                 * @default 'transparent'
                 */
                textBorderColor?: Color | undefined;
                /**
                 * Storke line width of the text.
                 */
                textBorderWidth?: number | undefined;
                /**
                 * Shadow color of the text itself.
                 *
                 * @default 'transparent'
                 */
                textShadowColor?: Color | undefined;
                /**
                 * Shadow blue of the text itself.
                 */
                textShadowBlur?: number | undefined;
                /**
                 * Shadow X offset of the text itself.
                 */
                textShadowOffsetX?: number | undefined;
                /**
                 * Shadow Y offset of the text itself.
                 */
                textShadowOffsetY?: number | undefined;
                /**
                 * "Rich text styles" can be defined in this rich property
                 *
                 * @see https://echarts.apache.org/en/tutorial.html#Rich%20Text
                 */
                rich?: RichStyle | undefined;
            }
        }
    }
}
