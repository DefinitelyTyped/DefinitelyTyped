// Type definitions for react-infinite-calendar 2.3
// Project: https://github.com/clauderic/react-infinite-calendar
// Definitions by: Christian Chown <https://github.com/christianchown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type DateType = Date | string | number;

export enum EVENT_TYPE {
    START = 1,
    HOVER,
    END
}

export interface RangedSelection {
    eventType: EVENT_TYPE;
    start: Date;
    end: Date;
}

export type RangedSelectFunction = (rangedDate: RangedSelection) => void;
export type DateSelectFunction = (date: Date) => void;

export interface ReactInfiniteCalendarProps {
    selected?: DateType | false | { start: DateType; end: DateType };
    width?: number | 'auto' | '100%';
    height?: number | 'auto';
    min?: DateType;
    max?: DateType;
    minDate?: DateType;
    maxDate?: DateType;
    disabledDays?: Array<0 | 1 | 2 | 3 | 4 | 5 | 6>;
    disabledDates?: DateType[];
    display?: 'days' | 'years';
    displayOptions?: {
        hideYearsOnSelect?: boolean;
        layout?: 'portrait' | 'landscape';
        overscanMonthCount?: number;
        shouldHeaderAnimate?: boolean;
        showHeader?: boolean;
        showMonthsForYears?: boolean;
        showOverlay?: boolean;
        showTodayHelper?: boolean;
        showWeekdays?: boolean;
        todayHelperRowOffset?: number;
    };
    locale?: {
        blank?: string;
        headerFormat?: string;
        todayLabel?: {
            long: string;
        };
        weekdays?: string[];
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    };
    theme?: {
        accentColor?: string;
        floatingNav?: {
            background?: string;
            chevron?: string;
            color?: string;
        };
        headerColor?: string;
        selectionColor?: string;
        textColor?: {
            active?: string;
            default?: string;
        };
        todayColor?: string;
        weekdayColor?: string;
    };
    className?: string;
    onSelect?: DateSelectFunction | RangedSelectFunction;
    onScroll?: (scrollTop: number) => void;
    onScrollEnd?: (scrollTop: number) => void;
    rowHeight?: number;
    autoFocus?: boolean;
    tabIndex?: number;
    Component?: CalendarClass;
    interpolateSelection?: (date: Date, selected: Date[]) => Date[];
}

export class Calendar extends React.Component<ReactInfiniteCalendarProps> {}
export type CalendarClass = React.ComponentClass<ReactInfiniteCalendarProps>;

export function withRange(component: CalendarClass): CalendarClass;
export function withDateSelection(component: CalendarClass): CalendarClass;
export function withMultipleDates(component: CalendarClass): CalendarClass;
export function withKeyboardSupport(component: CalendarClass): CalendarClass;
export function defaultMultipleDateInterpolation(component: CalendarClass): CalendarClass;

export default class ReactInfiniteCalendar extends React.Component<ReactInfiniteCalendarProps> {}
