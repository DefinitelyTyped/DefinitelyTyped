// Type definitions for react-date-range 1.1
// Project: https://github.com/Adphorus/react-date-range/
// Definitions by: Junbong Lee <https://github.com/Junbong>
//                 John Demetriou <https://github.com/DevsAnon>
//                 Minseok Choi <https://github.com/Curzy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { Locale } from "date-fns";

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
    startDate?: Date | undefined;
    /** default: today */
    endDate?: Date | undefined;
}

export interface RangeWithKey extends Range {
    key: 'selection';
}

export type OnChangeProps = Range | { selection: RangeWithKey } | Date;

export interface CommonCalendarProps {
    /** default: DD/MM/YYY */
    format?: string | undefined;
    firstDayOfWeek?: number | undefined;
    theme?: CalendarTheme | undefined;
    /** default: none */
    onInit?: ((range: Range) => void) | undefined;
    /** default: none */
    onChange?: ((range: OnChangeProps) => void) | undefined;
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
    /** Custom class names for elements */
    classNames?: Partial<ClassNames> | undefined;
    /** default: none */
    navigatorRenderer?: ((
        currentFocusedDate: Date,
        changeShownDate: (shownDate: Date) => void,
        props: CommonCalendarProps
    ) => JSX.Element) | undefined;
    /** default: none */
    onShownDateChange?: ((visibleMonth: Date) => void) | undefined;
    /** default: false */
    editableDateInputs?: boolean | undefined;
    /** default: true */
    dragSelectionEnabled?: boolean | undefined;
    /** default: false */
    fixedHeight?: boolean | undefined;
}

export interface CalendarProps extends CommonCalendarProps {
    /** default: today */
    date: DateInputType;
}

export class Calendar extends React.Component<CalendarProps> { }

export interface DateRangeProps extends Range, CommonCalendarProps {
    /** default: enUs from locale. Complete list here https://github.com/Adphorus/react-date-range/blob/next/src/locale/index.js */
    locale?: Locale | undefined;
    /** default: false */
    linkedCalendars?: boolean | undefined;
    /** default: 2 */
    calendars?: number | undefined;
    /** default: none */
    ranges?: Range[] | undefined;
    /** default: { enabled: false } */
    scroll?: ScrollOptions | undefined;
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
    /** default: */
    disabledDay?: ((date: Date) => boolean) | undefined;
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
    editableDateInputs?: boolean | undefined;
    /** default: */
    focusedRange?: RangeFocus | undefined;
    /** default: [0, 0] */
    initialFocusedRange?: RangeFocus | undefined;
    /** default: */
    onRangeFocusChange?: ((focusedRange: RangeFocus) => void) | undefined;
    /** default: */
    preview?: Preview | undefined;
    /** default: true */
    showPreview?: boolean | undefined;
    /** default: */
    onPreviewChange?: ((preview: Preview) => void) | undefined;
}

export interface DateRangePickerProps extends DateRangeProps {
    renderStaticRangeLabel?: ((range: DefinedRange) => JSX.Element) | undefined;
    staticRanges?: StaticRange[] | undefined;
    inputRanges?: InputRange[] | undefined;
}

export class DateRange extends React.Component<DateRangeProps> {}

export class DateRangePicker extends React.Component<DateRangePickerProps> { }

export type DateRangeIndex =
    | "Today"
    | "Yesterday"
    | "Last 7 Days"
    | "Last 30 Days";

export interface Range {
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    color?: string | undefined;
    key?: string | undefined;
    autoFocus?: boolean | undefined;
    disabled?: boolean | undefined;
    showDateDisplay?: boolean | undefined;
}

export interface ScrollOptions {
    enabled: boolean;
    monthHeight?: number | undefined;
    longMonthHeight?: number | undefined;
    monthWidth?: number | undefined;
    calendarWidth?: number | undefined;
    calendarHeight?: number | undefined;
}

export interface DefinedRangeCommon {
    label: string;
    isSelected: (range: Range) => boolean;
    hasCustomRendering?: boolean | undefined;
}

export interface StaticRange extends DefinedRangeCommon {
    range: (props: CommonCalendarProps) => Range;
}

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

export interface InputRange extends DefinedRangeCommon {
    range: (value: string, props: CommonCalendarProps) => Range;
    getCurrentValue: (range: Range) => string;
}

export type DefinedRange = StaticRange | InputRange;

/**
 * Represents range focus `[range, rangeElement]`. `range` represents the index of the range
 * that's focused and the `rangeElement` the element of the range that's
 * focused, `0` for start date and `1` for end date
 */
export type RangeFocus = [number, number];

export interface Preview {
    startDate: Date;
    endDate: Date;
    color?: string | undefined;
}

export const defaultStaticRanges: StaticRange[];
export const defaultInputRanges: InputRange[];
export function createStaticRanges(ranges: StaticRange[]): StaticRange[];
