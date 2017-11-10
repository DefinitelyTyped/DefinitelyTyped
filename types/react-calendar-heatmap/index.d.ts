// Type definitions for react-calendar-heatmap 1.6
// Project: https://github.com/patientslikeme/react-calendar-heatmap
// Definitions by: Keisuke Kan <https://github.com/9renpoto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export interface Props {
    classForValue?: (value: any) => any;
    endDate?: string | number | Date;
    gutterSize?: number;
    horizontal?: boolean;
    monthLabels?: string[];
    numDays?: number;
    onClick?: (value: any) => void;
    onMouseLeave?: (e: any, value: any) => void;
    onMouseOver?: (e: any, value: any) => void;
    showMonthLabels?: boolean;
    showOutOfRangeDays?: boolean;
    showWeekdayLabels?: boolean;
    startDate?: string | number | Date;
    titleForValue?: (value: any) => any;
    tooltipDataAttrs?: object;
    transformDayElement?: (rect: any, value: any, index: number) => any;
    values: any[];
    weekdayLabels?: string[];
}

export default class ReactCalendarHeatmap extends React.Component<Props> {}
