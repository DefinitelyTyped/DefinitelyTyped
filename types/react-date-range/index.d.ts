// Type definitions for react-date-range 1.0
// Project: https://github.com/Adphorus/react-date-range/
// Definitions by: Junbong Lee <https://github.com/Junbong>
//                 John Demetriou <https://github.com/DevsAnon>
//                 Minseok Choi <https://github.com/Curzy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export type AnyDate = string | Date;
export type DateFunc = (now: Date) => AnyDate;
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
    date: Date;
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
    startDate?: Date;
    /** default: today */
    endDate?: Date;
}

export interface CommonCalendarProps {
    /** default: DD/MM/YYY */
    format?: string;
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
    /** Custom class names for elements */
    classNames?: Partial<ClassNames>;
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
    startDate: (now: Date) => Date;
    endDate: (now: Date) => Date;
}
export const defaultRanges: {
    [measure: string]: DateRangeObject;
};

export interface ClassNames {
    dateRangeWrapper: string;
    calendarWrapper: string;
    dateDisplay: string;
    dateDisplayItem: string;
    dateDisplayItemActive: string;
    monthAndYearWrapper: string;
    monthAndYearPickers: string;
    nextPrevButton: string;
    month: string;
    weekDays: string;
    weekDay: string;
    days: string;
    day: string;
    dayNumber: string;
    dayPassive: string;
    dayToday: string;
    dayStartOfWeek: string;
    dayEndOfWeek: string;
    daySelected: string;
    dayDisabled: string;
    dayStartOfMonth: string;
    dayEndOfMonth: string;
    dayWeekend: string;
    dayStartPreview: string;
    dayInPreview: string;
    dayEndPreview: string;
    dayHovered: string;
    dayActive: string;
    inRange: string;
    endEdge: string;
    startEdge: string;
    prevButton: string;
    nextButton: string;
    selected: string;
    months: string;
    monthPicker: string;
    yearPicker: string;
    dateDisplayWrapper: string;
    definedRangesWrapper: string;
    staticRanges: string;
    staticRange: string;
    inputRanges: string;
    inputRange: string;
    inputRangeInput: string;
    dateRangePickerWrapper: string;
    staticRangeLabel: string;
    staticRangeSelected: string;
    monthName: string;
    infiniteMonths: string;
    monthsVertical: string;
    monthsHorizontal: string; 
}
