// Type definitions for react-calendar-heatmap 1.6
// Project: https://github.com/patientslikeme/react-calendar-heatmap
// Definitions by: Keisuke Kan <https://github.com/9renpoto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
