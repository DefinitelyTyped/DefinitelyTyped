// Type definitions for react-calendar-heatmap v1.6.1
// Project: https://github.com/patientslikeme/react-calendar-heatmap
// Definitions by: Keisuke Kan <https://github.com/9renpoto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="react" />

declare module "react-calendar-heatmap" {
    interface Props {
        classForValue?: Function
        endDate?: string | number | Date
        gutterSize?: number
        horizontal?: boolean
        monthLabels?: string[]
        numDays?: number
        onClick?: Function
        onMouseLeave?: Function, 
        onMouseOver?: Function, 
        showMonthLabels?: boolean
        showOutOfRangeDays?: boolean
        showWeekdayLabels?: boolean, 
        startDate?: string | number | Date,
        titleForValue?: Function,
        tooltipDataAttrs?: Object | Function
        transformDayElement?: Function,
        values: any[]
        weekdayLabels?: string[] 
    }
    let ReactCalendarHeatmap : React.ClassicComponentClass<Props>;
    export default ReactCalendarHeatmap;
}