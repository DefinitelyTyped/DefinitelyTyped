import type { Component, MouseEvent, ReactNode, SVGAttributes, SVGProps } from "react";

declare namespace ReactCalendarHeatmap {
    type ReactCalendarHeatmapDate = string | number | Date;
    interface ReactCalendarHeatmapValue<T extends ReactCalendarHeatmapDate> {
        date: T;
        [key: string]: any;
    }

    type TooltipDataAttrs = Omit<
        SVGAttributes<SVGSVGElement>,
        | "key"
        | "width"
        | "height"
        | "x"
        | "y"
        | "className"
        | "onClick"
        | "onMouseOver"
        | "onMouseLeave"
    >;

    interface Props<T extends ReactCalendarHeatmapDate> {
        /**
         * Callback for determining CSS class to apply to each value.
         *
         * @default (value) => (value ? 'color-filled' : 'color-empty')
         */
        classForValue?: ((value: ReactCalendarHeatmapValue<T> | undefined) => string) | undefined;

        /**
         * End of date range.
         *
         * @default new Date()
         */
        endDate?: ReactCalendarHeatmapDate | undefined;

        /**
         * Size of gutters relative to squares.
         *
         * @default 1
         */
        gutterSize?: number | undefined;

        /**
         * Whether to orient horizontally or vertically.
         * Can be used in combination with `numDays` / `endDate` to show just the current month.
         *
         * @default true
         */
        horizontal?: boolean | undefined;

        /**
         * An array with 12 strings representing the text from January to December.
         *
         * @default ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
         */
        monthLabels?:
            | [string, string, string, string, string, string, string, string, string, string, string, string]
            | undefined;

        /**
         * @deprecated
         *
         * It will be removed in the next release. Consider using the startDate prop instead.
         */
        numDays?: number | undefined;

        /**
         * Callback to invoke when a square is clicked.
         */
        onClick?: ((value: ReactCalendarHeatmapValue<T> | undefined) => void) | undefined;

        /**
         * Callback to invoke when mouse pointer leaves a square.
         */
        onMouseLeave?:
            | (
                (
                    event: MouseEvent<SVGRectElement>,
                    value: ReactCalendarHeatmapValue<T> | undefined,
                ) => void
            )
            | undefined;

        /**
         * Callback to invoke when mouse pointer is over a square.
         */
        onMouseOver?:
            | (
                (
                    event: MouseEvent<SVGRectElement>,
                    value: ReactCalendarHeatmapValue<T> | undefined,
                ) => void
            )
            | undefined;

        /**
         * Toggle for removing month labels.
         *
         * @default true
         */
        showMonthLabels?: boolean | undefined;

        /**
         * Toggle display of extra days in week that are past endDate and before beginning of range.
         *
         * @default false
         */
        showOutOfRangeDays?: boolean | undefined;

        /**
         * Toggle for removing weekday labels.
         *
         * @default false
         */
        showWeekdayLabels?: boolean | undefined;

        /**
         * Start of date range.
         * If not specified, the default value will be a 200-day-ago date.
         */
        startDate?: ReactCalendarHeatmapDate | undefined;

        /**
         * Function to determine each square's title attribute,
         * for generating 3rd party hover tooltips (may also need to configure tooltipDataAttrs).
         */
        titleForValue?: ((value: ReactCalendarHeatmapValue<T> | undefined) => string) | undefined;

        /**
         * Set data attributes for all squares, for generating 3rd party hover tooltips.
         */
        tooltipDataAttrs?:
            | TooltipDataAttrs
            | ((value: ReactCalendarHeatmapValue<T> | undefined) => TooltipDataAttrs)
            | undefined;

        /**
         * A function to further transform generated svg element for a single day.
         * Can be used to attach event handlers, add tooltips and more.
         */
        transformDayElement?:
            | (
                (
                    element: SVGProps<SVGRectElement>,
                    value: ReactCalendarHeatmapValue<T> | undefined,
                    index: number,
                ) => ReactNode
            )
            | undefined;

        /**
         * Required array of objects which each have a date property,
         * which can be a Date object, parseable string, or millisecond timestamp.
         * Example: `[{ date: '2016-01-01', count: 6 }]`.
         */
        values: Array<ReactCalendarHeatmapValue<T>>;

        /**
         * An array with 7 strings representing the text from Sunday to Saturday.
         *
         * @default ["", "Mon", "", "Wed", "", "Fri", ""]
         */
        weekdayLabels?:
            | [string, string, string, string, string, string, string]
            | undefined;
    }
}

declare class ReactCalendarHeatmap<T extends ReactCalendarHeatmap.ReactCalendarHeatmapDate>
    extends Component<ReactCalendarHeatmap.Props<T>>
{}

export = ReactCalendarHeatmap;
