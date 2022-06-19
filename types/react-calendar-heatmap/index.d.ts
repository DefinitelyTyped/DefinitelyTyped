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
    classForValue?: (value: HeatmapValue) => React.ReactNode;
    endDate?: HeatmapDate;
    gutterSize?: number;
    horizontal?: boolean;
    monthLabels?: string[];
    onClick?: (value: HeatmapValue) => void;
    onMouseLeave?: (e: any, value: HeatmapValue) => void;
    onMouseOver?: (e: any, value: HeatmapValue) => void;
    showMonthLabels?: boolean;
    showOutOfRangeDays?: boolean;
    showWeekdayLabels?: boolean;
    startDate?: HeatmapDate;
    titleForValue?: (value: HeatmapValue) => React.ReactNode;
    tooltipDataAttrs?: object | ((value: HeatmapValue) => object);
    transformDayElement?: (
        element: React.FunctionComponentElement<{ 'data-test': string }>,
        value: HeatmapValue,
        index: number,
    ) => React.ReactElement;
    values: HeatmapValue[];
    weekdayLabels?: string[];
}

declare class ReactCalendarHeatmap extends React.Component<HeatmapProps> {}
export = ReactCalendarHeatmap;
