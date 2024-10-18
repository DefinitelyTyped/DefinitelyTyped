declare namespace echarts {
    namespace EChartOption {
        /**
         * Calendar coordinates.
         *
         * @see https://echarts.apache.org/en/option.html#calendar
         */
        interface Calendar {
            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option or API.
             */
            id?: string | undefined;
            /**
             * zlevel value of all graphical elements in.
             * zlevel is used to make layers with Canvas.
             * Graphical elements with different zlevel values will be placed in different Canvases,
             * which is a common optimization technique.
             * We can put those frequently changed elements (like those with animations) to a seperate zlevel.
             * Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.
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
             * Distance between calendar component and the left side of the container.
             * left value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%';
             * and it can also be 'left', 'center', or 'right'.
             * If the left value is set to be 'left', 'center', or 'right',
             * then the component will be aligned automatically based on position.
             *
             * @default 80
             */
            left?: number | string | undefined;
            /**
             * Distance between calendar component and the top side of the container.
             * top value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%';
             * and it can also be 'top', 'middle', or 'bottom'.
             * If the left value is set to be 'top', 'middle', or 'bottom',
             * then the component will be aligned automatically based on position.
             *
             * @default 60
             */
            top?: number | string | undefined;
            /**
             * Distance between calendar component and the right side of the container.
             * right value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%'.
             * Adaptive by default.
             *
             * @default 'auto'
             */
            right?: number | string | undefined;
            /**
             * Distance between calendar component and the bottom side of the container.
             * bottom value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%'.
             * Adaptive by default.
             *
             * @default 'auto'
             */
            bottom?: number | string | undefined;
            /**
             * The height of calendar coordinates.
             * Note: cellSize is 20 by default.
             * If width is set, cellSize[0] will be forced to auto;
             *
             * @default 'auto'
             */
            width?: number | string | undefined;
            /**
             * The height of calendar coordinates.
             * Note: cellSize is 20 by default.
             * If height is set, cellSize[1] will be forced to auto;
             */
            height?: number | string | undefined;
            /**
             * Required, range of Calendar coordinates, support multiple formats.
             *
             * @see https://echarts.apache.org/en/option.html#calendar
             */
            range?: number | string | number[] | string[] | undefined;
            /**
             * The size of each rect of calendar coordinates,
             * can be set to a single value or array,
             * the first element is width and the second element is height.
             * Support setting self-adaptation: auto, the default width and height to be 20.
             *
             * @default 20
             */
            cellSize?: number | "auto" | Array<"auto" | number> | undefined;
            /**
             * The layout orientation of calendar.
             */
            orient?: "horizontal" | "vertical" | undefined;
            /**
             * Calendar coordinates splitLine style.
             */
            splitLine?: {
                /**
                 * Set this to false to prevent the splitLine from showing
                 *
                 * @default true
                 */
                show?: boolean | undefined;
                lineStyle?: LineStyle | undefined;
            } | undefined;
            /**
             * Every rect style in calendar coordinates.
             *
             * @see https://echarts.apache.org/en/option.html#calendar.itemStyle
             */
            itemStyle?: {
                color?: EChartOption.Color | undefined;
                borderColor?: EChartOption.Color | undefined;
                borderWidth?: number | undefined;
                borderType?: "solid" | "dashed" | "dotted" | undefined;
                shadowBlur?: number | undefined;
                shadowColor?: EChartOption.Color | undefined;
                shadowOffsetX?: number | undefined;
                shadowOffsetY?: number | undefined;
                opacity?: number | undefined;
            } | undefined;
            /**
             * Day style in calendar coordinates.
             * @see https://echarts.apache.org/en/option.html#calendar.dayLabel
             */
            dayLabel?: Calendar.DayLabel | undefined;
            /**
             * Month label in calendar coordinates.
             * @see https://echarts.apache.org/en/option.html#calendar.monthLabel
             */
            monthLabel?: Calendar.MonthLabel | undefined;
            /**
             * Year label in calendar coordinates.
             * @see https://echarts.apache.org/en/option.html#calendar.yearLabel
             */
            yearLabel?: Calendar.YearLabel | undefined;
            /**
             * Whether to ignore mouse events.
             * Default value is false, for triggering and responding to mouse events.
             *
             * @default false
             */
            silent?: boolean | undefined;
        }
        namespace Calendar {
            interface Label extends TextStyleWithRich {
                /**
                 * Set this to false to prevent label from showing.
                 *
                 * @default true
                 */
                show?: boolean | undefined;
                /**
                 * The margin between the label and the axis line.
                 */
                margin?: number | undefined;
                /**
                 * Week text content, defaults to 'en'; It supports Chinese, English, and custom;
                 * index 0 always means Sunday;
                 *
                 * @default 'en'
                 */
                nameMap?: string | number | Array<string | number> | undefined;
            }
            interface DayLabel extends Label {
                /**
                 * A week from the beginning of the week, the default starting on Sunday.
                 *
                 * @default 0
                 */
                firstDay?: number | undefined;
                /**
                 * Position of week, at the beginning or end of the range.
                 *
                 * @default 'start'
                 */
                position?: "start" | "end" | undefined;
            }
            interface MonthLabel extends Label {
                /**
                 * Formatter of month text label, which supports string template and callback function.
                 */
                formatter?: string | MonthLabelFormatter | undefined;
                /**
                 * Position of week, at the beginning or end of the range.
                 *
                 * @default 'start'
                 */
                position?: "start" | "end" | undefined;
            }
            interface MonthLabelFormatter {
                (params: MonthLabelFormatterParams): string;
            }
            interface MonthLabelFormatterParams {
                nameMap?: string | number | Array<string | number> | undefined;
                yyyy?: number | undefined;
                yy?: number | undefined;
                MM?: number | undefined;
                M?: number | undefined;
            }
            interface YearLabel extends Label {
                /**
                 * Formatter of year text label, which supports string template and callback function.
                 * By default, the current range of the year,
                 * if the interval across the year, showing the first year and the last year
                 */
                formatter?: string | undefined;
                /**
                 * Position of year.
                 * Default: when orient is set as horizontal,
                 * position is left when orient is set as vertical, position is top
                 */
                position?: "top" | "bottom" | "left" | "right" | undefined;
            }
            interface YearLabelFormatter {
                (params: YearLabelFormatterParams): string;
            }
            interface YearLabelFormatterParams {
                nameMap?: string | number | Array<string | number> | undefined;
                start?: number | undefined;
                end?: number | undefined;
            }
        }
    }
}
