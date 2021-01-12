// Type definitions for react-date-range 0.95
// Project: https://github.com/Adphorus/react-date-range/
// Definitions by: Junbong Lee <https://github.com/Junbong>
//                 John Demetriou <https://github.com/DevsAnon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import * as moment from "moment";

export type AnyDate = string | moment.Moment;
export type DateFunc = (now: moment.Moment) => AnyDate;
export type DateInputType = AnyDate | DateFunc;
export type LanguageType =
    | "cn"
    | "jp"
    | "fr"
    | "it"
    | "de"
    | "ko"
    | "es"
    | "ru"
    | "tr";
export type SizeType = number;

export interface DateContainerType {
    date: moment.Moment;
}

export interface CalendarTheme {
    DateRange?: React.CSSProperties;
    Calendar?: React.CSSProperties;
    Day?: React.CSSProperties;
    DayPassive?: React.CSSProperties;
    DayHover?: React.CSSProperties;
    DayToday?: React.CSSProperties;
    DaySunday?: React.CSSProperties;
    DaySpecialDay?: React.CSSProperties;
    DayActive?: React.CSSProperties;
    DaySelected?: React.CSSProperties;
    DayStartEdge?: React.CSSProperties;
    DayEndEdge?: React.CSSProperties;
    DayInRange?: React.CSSProperties;
    Weekday?: React.CSSProperties;
    MonthAndYear?: React.CSSProperties;
    MonthButton?: React.CSSProperties;
    MonthArrow?: React.CSSProperties;
    MonthArrowPrev?: React.CSSProperties;
    MonthArrowNext?: React.CSSProperties;
    PredefinedRanges?: React.CSSProperties;
    PredefinedRangesItem?: React.CSSProperties;
    PredefinedRangesItemActive?: React.CSSProperties;
}

export interface Range {
    /** default: today */
    startDate?: moment.Moment;
    /** default: today */
    endDate?: moment.Moment;
}

export interface CommonCalendarProps {
    /** default: DD/MM/YYY */
    format?: string;
    /** default: moment.localeData().firstDayOfWeek() */
    firstDayOfWeek?: number;
    theme?: CalendarTheme;
    /** default: none */
    onInit?: (range: Range) => void;
    /** default: none */
    onChange?: (range: Range) => void;
    /** default: none */
    minDate?: DateInputType;
    /** default: none */
    maxDate?: DateInputType;
    /**
     * Calendar languages.
     * ('cn' - Chinese, 'jp' - Japanese,
     * 'fr' - French, 'it' - Italian,
     * 'de' - German, 'ko' - Korean,
     * 'es' - Spanish, 'ru' - Russian,
     * 'tr' - Turkish) default: none
     */
    lang?: LanguageType;
}

export interface CalendarProps extends CommonCalendarProps {
    /** default: today */
    date: DateInputType;
}

export class Calendar extends React.Component<CalendarProps> { }

export interface DateRangeProps extends Range, CommonCalendarProps {
    /** default: enUs from locale. Complete list here https://github.com/Adphorus/react-date-range/blob/next/src/locale/index.js */
    locale?: object;
    /** default: false */
    linkedCalendars?: boolean;
    /** default: 2 */
    calendars?: number;
    /** default: none */
    ranges?: object;
    /** default: { enabled: false } */
    scroll?: object;
    /** default: false */
    showSelectionPreview?: boolean;
    /** default: false */
    twoStepChange?: boolean;
    /** default: true */
    showMonthArrow?: boolean;
    /** default: false */
    rangedCalendars?: boolean;
    /** default: none */
    specialDays?: DateContainerType[];
    /** default: 1 */
    months?: number;
    /** default: */
    weekStartsOn?: number;
    /** default: true */
    showMonthAndYearPickers?: boolean;
    /** default: [] */
    rangeColors?: string[];
    /** default: */
    shownDate?: Date;
    /** default: */
    disabledDates?: Date[];
    /** default: Early */
    startDatePlaceholder?: string;
    /** default: */
    className?: string;
    /** default: Continuous */
    endDatePlaceholder?: string;
    /** default: MMM d, yyyy */
    dateDisplayFormat?: string;
    /** default: d */
    dayDisplayFormat?: string;
    /** default: E */
    weekdayDisplayFormat?: string;
    /** default: MMM yyyy */
    monthDisplayFormat?: string;
    /** default: vertical */
    direction?: string;
    /** default: false */
    moveRangeOnFirstSelection?: boolean;
    /** default: false */
    editableDateInputs?: boolean;
}

export class DateRange extends React.Component<DateRangeProps> { }

export class DateRangePicker extends React.Component<DateRangeProps> { }

export type DateRangeIndex =
    | "Today"
    | "Yesterday"
    | "Last 7 Days"
    | "Last 30 Days";

export interface DateRangeObject {
    startDate: (now: moment.Moment) => moment.Moment;
    endDate: (now: moment.Moment) => moment.Moment;
}
export const defaultRanges: {
    [measure: string]: DateRangeObject;
};
