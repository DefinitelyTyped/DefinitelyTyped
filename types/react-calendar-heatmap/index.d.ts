// Type definitions for react-calendar-heatmap 1.8
// Project: https://github.com/patientslikeme/react-calendar-heatmap
// Definitions by: Keisuke Kan <https://github.com/9renpoto>
//                 Seungbin Oh <https://github.com/sboh1214>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

type HeatmapDate = Date | string | number;

interface HeatmapValue {
    date: HeatmapDate;
    count: number;
}

interface HeatmapProps {
    classForValue?: (value: HeatmapValue) => React.ReactNode | undefined;
    endDate?: HeatmapDate | undefined;
    gutterSize?: number | undefined;
    horizontal?: boolean | undefined;
    monthLabels?: string[] | undefined;
    onClick?: (value: HeatmapValue) => void | undefined;
    onMouseLeave?: (e: any, value: HeatmapValue) => void | undefined;
    onMouseOver?: (e: any, value: HeatmapValue) => void | undefined;
    showMonthLabels?: boolean | undefined;
    showOutOfRangeDays?: boolean | undefined;
    showWeekdayLabels?: boolean | undefined;
    startDate?: HeatmapDate | undefined;
    titleForValue?: (value: HeatmapValue) => React.ReactNode | undefined;
    tooltipDataAttrs?: object | ((value: HeatmapValue) => object) | undefined;
    transformDayElement?: (
        element: React.FunctionComponentElement<{ 'data-test': string }>,
        value: HeatmapValue,
        index: number,
    ) => React.ReactElement | undefined;
    values: HeatmapValue[];
    weekdayLabels?: string[] | undefined;
}

declare class ReactCalendarHeatmap extends React.Component<HeatmapProps> {}
export = ReactCalendarHeatmap;
