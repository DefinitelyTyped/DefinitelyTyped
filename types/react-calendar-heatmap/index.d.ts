// Type definitions for react-calendar-heatmap 1.8
// Project: https://github.com/patientslikeme/react-calendar-heatmap
// Definitions by: Keisuke Kan <https://github.com/9renpoto>
//                 Seungbin Oh <https://github.com/sboh1214>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, FunctionComponentElement, ReactElement, ReactNode } from 'react';

type DateType = Date | string | number;

interface HeatmapValue {
    date: DateType;
    count: number;
}

interface HeatmapProps {
    values: HeatmapValue[];
    startDate?: DateType;
    endDate?: DateType;
    showMonthLabels?: boolean;
    showWeekdayLabels?: boolean;
    showOutOfRangeDays?: boolean;
    horizontal?: boolean;
    gutterSize?: number;
    onClick?: (value: HeatmapValue) => void;
    onMouseOver?: (e: any, value: HeatmapValue) => void;
    onMouseLeave?: (e: any, value: HeatmapValue) => void;
    titleForValue?: (value: HeatmapValue) => ReactNode;
    tooltipDataAttrs?: object | ((value: HeatmapValue) => object);
    classForValue?: (value: HeatmapValue) => ReactNode;
    monthLabels?: string[];
    weekdayLabels?: string[];
    transformDayElement?: (
        element: FunctionComponentElement<{ 'data-test': string }>,
        value: HeatmapValue,
        index: number,
    ) => ReactElement;
}

declare class ReactCalendarHeatmap extends Component<HeatmapProps> {}
export = ReactCalendarHeatmap;
