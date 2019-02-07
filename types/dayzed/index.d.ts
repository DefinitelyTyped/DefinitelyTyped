// Type definitions for dayzed 2.2
// Project: https://github.com/deseretdigital/dayzed
// Definitions by: Sam A. Horvath-Hunt <https://github.com/samhh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactNode } from 'react';

export interface DateObj {
    date: Date;
    nextMonth: boolean;
    prevMonth: boolean;
    selectable: boolean;
    selected: boolean;
    today: boolean;
}

interface Calendar {
    firstDayOfMonth: Date;
    lastDayOfMonth: Date;
    month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    weeks: Array<Array<DateObj | ''>>;
    year: number;
}

interface RenderProps {
    calendars: Calendar[];
    getBackProps: (data: { calendars: Calendar[]; offset?: number; }) => Record<string, any>;
    getForwardProps: (data: { calendars: Calendar[]; offset?: number; }) => Record<string, any>;
    getDateProps: (data: { dateObj: DateObj; }) => Record<string, any>;
}

type RenderFn = (renderProps: RenderProps) => ReactNode;

interface Props {
    date?: Date;
    maxDate?: Date;
    minDate?: Date;
    monthsToDisplay?: number;
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    showOutsideDays?: boolean;
    selected?: Date | Date[];
    children?: RenderFn;
    render?: RenderFn;
    offset?: number;
    onOffsetChanged?(offset: number): void;
    onDateSelected(selectedDate: DateObj): void;
}

declare class Dayzed extends Component<Props> { }

export default Dayzed;
