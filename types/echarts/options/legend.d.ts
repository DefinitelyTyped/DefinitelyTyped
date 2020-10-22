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
            type?: 'plain' | 'scroll';

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option or API.
             */
            id?: string;
            /**
             * Whether to show the legend component.
             * @default true
             */
            show?: boolean;
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
            zlevel?: number;
            /**
             * z value of all graphical elements in, which controls order of drawing graphical components.
             * Components with smaller z values may be overwritten by those with larger z values.
             * z has a lower priority to zlevel, and will not create new Canvas.
             *
             * @deafult 2
             */
            z?: number;
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
            left?: string | number;
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
            top?: string | number;
            /**
             * Distance between legend component and the right side of the container.
             * right value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%'.
             * Adaptive by default.
             *
             * @default 'auto'
             */
            right?: string | number;
            /**
             * Distance between legend component and the bottom side of the container.
             * bottom value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%'.
             * Adaptive by default.
             *
             * @default 'auto'
             */
            bottom?: string | number;
            /**
             * Width of legend component. Adaptive by default.
             *
             * @default 'auto'
             */
            width?: number;
            /**
             * Height of legend component. Adaptive by default.
             *
             * @default 'auto'
             */
            height?: number;
            /**
             * The layout orientation of legend.
             *
             * @default 'horizontal'
             */
            orient?: 'horizontal' | 'vertical';
            /**
             * Legend mrker and text aligning. By default,
             * it automatically calculates from component location and orient.
             * When left value of this component is 'right',
             * and the vertical layout (orient is 'vertical'),
             * it would be aligned to 'right'.
             *
             * @default 'auto'
             */
            align?: 'auto' | 'left' | 'right';
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
            padding?: number | number[];
            /**
             * The distance between each legend, horizontal distance in horizontal layout,
             * and vertical distance in vertical layout.
             *
             * @default 10
             */
            itemGap?: number;
            /**
             * Image width of legend symbol.
             *
             * @default 25
             */
            itemWidth?: number;
            /**
             * Image height of legend symbol.
             *
             * @default 14
             */
            itemHeight?: number;
            /**
             * Whether to keep aspect for icons
             * (from series.symbol or user-defined legend.data.icon) in the form of path://.
             *
             * @default true
             */
            symbolKeepAspect?: boolean;
            /**
             * Formatter is used to format label of legend, which supports string template and callback function.
             *
             * @default null
             */
            formatter?: string | Legend.Formatter;
            /**
             * Selected mode of legend, which controls whether series can be toggled displaying by clicking legends.
             * It is enabled by default, and you may set it to be false to disabled it.
             * Besides, it can be set to 'single' or 'multiple', for single selection and multiple selection.
             *
             * @default true
             */
            selectedMode?: boolean | 'single' | 'multiple';
            /**
             * Legend color when not selected.
             *
             * @default '#ccc'
             */
            inactiveColor?: string;
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
            selected?: object;
            /**
             * Legend text style.
             */
            textStyle?: TextStyleWithRich;
            /**
             * Tooltip configuration for legend tooltip, which is similar to tooltip.
             *
             * @see https://echarts.apache.org/en/option.html#legend.tooltip
             */
            tooltip?: Tooltip;
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
            icon?: string;
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
            data?: string[] | Legend.LegendDataObject[];
            /**
             * Background color of legend, which is transparent by default.
             * Color can be represented in RGB, for example 'rgb(128, 128, 128)'.
             * RGBA can be used when you need alpha channel, for example 'rgba(128, 128, 128, 0.5)'.
             * You may also use hexadecimal format, for example '#ccc'.
             *
             * @default 'transparent'
             */
            backgroundColor?: string;
            /**
             * Border color of legend. Support the same color format as backgroundColor.
             *
             * @default '#ccc'
             */
            borderColor?: string;
            /**
             * Border width of legend.
             *
             * @default 1
             */
            borderWidth?: number;
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
            borderRadius?: number | number[];
            /**
             * Size of shadow blur. This attribute should be used along with shadowColor,
             * shadowOffsetX, shadowOffsetY to set shadow to component.
             * Attention:
             * This property works only if show: true is configured and backgroundColor is defined other than transparent.
             */
            shadowBlur?: number;
            /**
             * Shadow color. Support same format as color.
             * Attention: This property works only if show: true configured.
             */
            shadowColor?: string;
            /**
             * Offset distance on the horizontal direction of shadow.
             * Attention: This property works only if show: true configured.
             *
             * @default 0
             */
            shadowOffsetX?: number;
            /**
             * Offset distance on the vertical direction of shadow.
             * Attention: This property works only if show: true configured.
             *
             * @default 0
             */
            shadowOffsetY?: number;
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
            scrollDataIndex?: number;
            /**
             * It works when legend.type is 'scroll'.
             * The gap between page buttons and page info text.
             *
             * @default 5
             */
            pageButtonItemGap?: number;
            /**
             * It works when legend.type is 'scroll'.
             * The gap between page buttons and legend items.
             *
             * @default null
             */
            pageButtonGap?: number;
            /**
             * It works when legend.type is 'scroll'.
             * The position of page buttons and page info. Optional values:
             * 'start': on the left or top.
             * 'end': on the right or bottom.
             *
             * @default 'end'
             */
            pageButtonPosition?: 'start' | 'end';
            /**
             * It works when legend.type is 'scroll'.
             * Page info formatter. It is '{current}/{total}' by default,
             * where {current} is current page number (start from 1), and {total} is the total page number.
             *
             * @default '{current}/{total}'
             */
            pageFormatter?: string | Legend.PageFormatter;
            /**
             * @see https://echarts.apache.org/en/option.html#legend.pageIcons
             */
            pageIcons?: Legend.PageIcons;
            /**
             * It works when legend.type is 'scroll'.
             * The color of page buttons.
             *
             * @default '#2f4554'
             */
            pageIconColor?: string;
            /**
             * It works when legend.type is 'scroll'.
             * The color of page buttons when they are inactive.
             *
             * @default '#aaa'
             */
            pageIconInactiveColor?: string;
            /**
             * It works when legend.type is 'scroll'.
             * The size of page buttons. It can be a number, or an array, like [10, 3], represents [width, height].
             *
             * @default 15
             */
            pageIconSize?: number | number[];
            /**
             * It works when legend.type is 'scroll'.
             * The text style of page info.
             */
            pageTextStyle?: TextStyle;
            /**
             * Whether to use animation when page scrolll.
             */
            animation?: boolean;
            /**
             * Duration of the page scroll animation.
             *
             * @default 800
             */
            animationDurationUpdate?: number;
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
                name?: string;
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
                icon?: string;
                /**
                 * Text style of legend.
                 */
                textStyle?: TextStyle;
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
                horizontal?: string[];
                /**
                 * The icons of page buttons when legend.orient is 'vertical'.
                 * It should be an array, [previous page button, next page button], ['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z'] by default.
                 *
                 * @see https://echarts.apache.org/en/option.html#legend.pageIcons.vertical
                 */
                vertical?: string[];
            }
        }
    }
}
