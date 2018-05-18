// Type definitions for react-infinite-calendar 2.3
// Project: https://github.com/clauderic/react-infinite-calendar
// Definitions by: Christian Chown <https://github.com/christianchown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface ReactInfiniteCalendarProps {
    selected?: Date | boolean;
    width?: number | 'auto';
    height?: number | 'auto';
    min?: Date;
    max?: Date;
    minDate?: Date;
    maxDate?: Date;
    disabledDays?: Array<0 | 1 | 2 | 3 | 4 | 5 | 6>;
    disabledDates?: Date[];
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
    onSelect?: (date: string) => void;
    onScroll?: (scrollTop: number) => void;
    onScrollEnd?: (scrollTop: number) => void;
    rowHeight?: number;
    autoFocus?: boolean;
    tabIndex?: number;
}

export default class ReactInfiniteCalendar extends React.Component<ReactInfiniteCalendarProps> {}
