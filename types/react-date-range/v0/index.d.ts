// Type definitions for react-date-range 0.95
// Project: https://github.com/Adphorus/react-date-range/
// Definitions by: Junbong Lee <https://github.com/Junbong>
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
    DateRange?: React.CSSProperties | undefined;
    Calendar?: React.CSSProperties | undefined;
    Day?: React.CSSProperties | undefined;
    DayPassive?: React.CSSProperties | undefined;
    DayHover?: React.CSSProperties | undefined;
    DayToday?: React.CSSProperties | undefined;
    DaySunday?: React.CSSProperties | undefined;
    DaySpecialDay?: React.CSSProperties | undefined;
    DayActive?: React.CSSProperties | undefined;
    DaySelected?: React.CSSProperties | undefined;
    DayStartEdge?: React.CSSProperties | undefined;
    DayEndEdge?: React.CSSProperties | undefined;
    DayInRange?: React.CSSProperties | undefined;
    Weekday?: React.CSSProperties | undefined;
    MonthAndYear?: React.CSSProperties | undefined;
    MonthButton?: React.CSSProperties | undefined;
    MonthArrow?: React.CSSProperties | undefined;
    MonthArrowPrev?: React.CSSProperties | undefined;
    MonthArrowNext?: React.CSSProperties | undefined;
    PredefinedRanges?: React.CSSProperties | undefined;
    PredefinedRangesItem?: React.CSSProperties | undefined;
    PredefinedRangesItemActive?: React.CSSProperties | undefined;
}

export interface Range {
    /** default: today */
    startDate?: moment.Moment | undefined;
    /** default: today */
    endDate?: moment.Moment | undefined;
}

export interface CommonCalendarProps {
    /** default: DD/MM/YYY */
    format?: string | undefined;
    /** default: moment.localeData().firstDayOfWeek() */
    firstDayOfWeek?: number | undefined;
    theme?: CalendarTheme | undefined;
    /** default: none */
    onInit?: ((range: Range) => void) | undefined;
    /** default: none */
    onChange?: ((range: Range) => void) | undefined;
    /** default: none */
    minDate?: DateInputType | undefined;
    /** default: none */
    maxDate?: DateInputType | undefined;
    /**
     * Calendar languages.
     * ('cn' - Chinese, 'jp' - Japanese,
     * 'fr' - French, 'it' - Italian,
     * 'de' - German, 'ko' - Korean,
     * 'es' - Spanish, 'ru' - Russian,
     * 'tr' - Turkish) default: none
     */
    lang?: LanguageType | undefined;
}

export interface CalendarProps extends CommonCalendarProps {
    /** default: today */
    date: DateInputType;
}

export class Calendar extends React.Component<CalendarProps> { }

export interface DateRangeProps extends Range, CommonCalendarProps {
    /** default: enUs from locale. Complete list here https://github.com/Adphorus/react-date-range/blob/next/src/locale/index.js */
    locale?: object | undefined;
    /** default: false */
    linkedCalendars?: boolean | undefined;
    /** default: 2 */
    calendars?: number | undefined;
    /** default: none */
    ranges?: object | undefined;
    /** default: { enabled: false } */
    scroll?: object | undefined;
    /** default: false */
    showSelectionPreview?: boolean | undefined;
    /** default: false */
    twoStepChange?: boolean | undefined;
    /** default: true */
    showMonthArrow?: boolean | undefined;
    /** default: false */
    rangedCalendars?: boolean | undefined;
    /** default: none */
    specialDays?: DateContainerType[] | undefined;
    /** default: 1 */
    months?: number | undefined;
    /** default: */
    weekStartsOn?: number | undefined;
    /** default: true */
    showMonthAndYearPickers?: boolean | undefined;
    /** default: [] */
    rangeColors?: string[] | undefined;
    /** default: */
    shownDate?: Date | undefined;
    /** default: */
    disabledDates?: Date[] | undefined;
    /** default: Early */
    startDatePlaceholder?: string | undefined;
    /** default: */
    className?: string | undefined;
    /** default: Continuous */
    endDatePlaceholder?: string | undefined;
    /** default: MMM d, yyyy */
    dateDisplayFormat?: string | undefined;
    /** default: d */
    dayDisplayFormat?: string | undefined;
    /** default: E */
    weekdayDisplayFormat?: string | undefined;
    /** default: MMM yyyy */
    monthDisplayFormat?: string | undefined;
    /** default: vertical */
    direction?: string | undefined;
    /** default: false */
    moveRangeOnFirstSelection?: boolean | undefined;
    /** default: false */
    retainEndDateOnFirstSelection?: boolean;
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
