import * as React from "react";

export type ReactCalendarHeatmapDate = string | number | Date;
export interface ReactCalendarHeatmapValue<T extends ReactCalendarHeatmapDate> {
    date: T;
    [key: string]: any;
}

export interface Props<T extends ReactCalendarHeatmapDate> {
    classForValue?: ((value: ReactCalendarHeatmapValue<T> | undefined) => string) | undefined;
    endDate?: string | number | Date | undefined;
    gutterSize?: number | undefined;
    horizontal?: boolean | undefined;
    monthLabels?: string[] | undefined;
    numDays?: number | undefined;
    onClick?: ((value: ReactCalendarHeatmapValue<T> | undefined) => void) | undefined;
    onMouseLeave?:
        | ((e: React.MouseEvent<SVGRectElement, MouseEvent>, value: ReactCalendarHeatmapValue<T> | undefined) => void)
        | undefined;
    onMouseOver?:
        | ((e: React.MouseEvent<SVGRectElement, MouseEvent>, value: ReactCalendarHeatmapValue<T> | undefined) => void)
        | undefined;
    showMonthLabels?: boolean | undefined;
    showOutOfRangeDays?: boolean | undefined;
    showWeekdayLabels?: boolean | undefined;
    startDate?: string | number | Date | undefined;
    titleForValue?: ((value: ReactCalendarHeatmapValue<T> | undefined) => string) | undefined;
    tooltipDataAttrs?: object | undefined;
    transformDayElement?:
        | ((
            element: React.ReactElement,
            value: ReactCalendarHeatmapValue<T> | undefined,
            index: number,
        ) => React.ReactNode)
        | undefined;
    values: Array<ReactCalendarHeatmapValue<T>>;
    weekdayLabels?: string[] | undefined;
}

export default class ReactCalendarHeatmap<T extends ReactCalendarHeatmapDate> extends React.Component<Props<T>> {}
