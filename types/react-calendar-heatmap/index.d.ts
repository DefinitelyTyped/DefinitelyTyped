import * as React from "react";

export interface Props {
    classForValue?: ((value: any) => any) | undefined;
    endDate?: string | number | Date | undefined;
    gutterSize?: number | undefined;
    horizontal?: boolean | undefined;
    monthLabels?: string[] | undefined;
    numDays?: number | undefined;
    onClick?: ((value: any) => void) | undefined;
    onMouseLeave?: ((e: any, value: any) => void) | undefined;
    onMouseOver?: ((e: any, value: any) => void) | undefined;
    showMonthLabels?: boolean | undefined;
    showOutOfRangeDays?: boolean | undefined;
    showWeekdayLabels?: boolean | undefined;
    startDate?: string | number | Date | undefined;
    titleForValue?: ((value: any) => any) | undefined;
    tooltipDataAttrs?: object | undefined;
    transformDayElement?: ((rect: any, value: any, index: number) => any) | undefined;
    values: any[];
    weekdayLabels?: string[] | undefined;
}

export default class ReactCalendarHeatmap extends React.Component<Props> {}
