// Type definitions for react-datepicker 2.11
// Project: https://github.com/Hacker0x01/react-datepicker
// Definitions by: Rajab Shakirov <https://github.com/radziksh>,
//                 Andrey Balokha <https://github.com/andrewBalekha>,
//                 Greg Smith <https://github.com/smrq>,
//                 Platon Pronko <https://github.com/Rogach>
//                 Roy Xue <https://github.com/royxue>
//                 Koala Human <https://github.com/KoalaHuman>
//                 Justin Grant <https://github.com/justingrant>
//                 Jake Boone <https://github.com/jakeboone02>
//                 Roman Nuritdinov <https://github.com/Ky6uk>
//                 Avi Klaiman <https://github.com/aviklai>
//                 Naoki Sekiguchi <https://github.com/seckie>
//                 tu4mo <https://github.com/tu4mo>
//                 Kerry Gougeon <https://github.com/kerry-g>
//                 Walter Kennedy <https://github.com/wthefourth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as Popper from 'popper.js';
import { Locale } from 'date-fns';

export function registerLocale(localeName: string, localeData: {}): void;
export function setDefaultLocale(localeName: string): void;
export function getDefaultLocale(): string;

interface HighlightDates {
    [className: string]: Date[];
}

export interface ReactDatePickerProps {
    adjustDateOnChange?: boolean;
    allowSameDay?: boolean;
    ariaLabelledBy?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    calendarClassName?: string;
    calendarContainer?(props: { children: React.ReactNode[] }): React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    clearButtonTitle?: string;
    customInput?: React.ReactNode;
    customInputRef?: string;
    dateFormat?: string | string[];
    dateFormatCalendar?: string;
    dayClassName?(date: Date): string | null;
    disabled?: boolean;
    disabledKeyboardNavigation?: boolean;
    dropdownMode?: 'scroll' | 'select';
    endDate?: Date | null;
    excludeDates?: Date[];
    excludeTimes?: Date[];
    filterDate?(date: Date): boolean;
    fixedHeight?: boolean;
    forceShowMonthNavigation?: boolean;
    formatWeekDay?(formattedDate: string): string;
    formatWeekNumber?(date: Date): string | number;
    highlightDates?: Array<HighlightDates | Date>;
    id?: string;
    includeDates?: Date[];
    includeTimes?: Date[];
    injectTimes?: Date[];
    inline?: boolean;
    inlineFocusSelectedMonth?: boolean;
    isClearable?: boolean;
    locale?: string | Locale;
    maxDate?: Date | null;
    maxTime?: Date;
    minDate?: Date | null;
    minTime?: Date;
    monthsShown?: number;
    name?: string;
    nextMonthButtonLabel?: string;
    nextYearButtonLabel?: string;
    onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
    onCalendarClose?(): void;
    onCalendarOpen?(): void;
    onChange(date: Date | null, event: React.SyntheticEvent<any> | undefined): void;
    onChangeRaw?(event: React.FocusEvent<HTMLInputElement>): void;
    onClickOutside?(event: React.MouseEvent<HTMLDivElement>): void;
    onDayMouseEnter?: (date: Date) => void;
    onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
    onInputClick?(): void;
    onInputError?(err: { code: number; msg: string }): void;
    onKeyDown?(event: React.KeyboardEvent<HTMLDivElement>): void;
    onMonthChange?(date: Date): void;
    onMonthMouseLeave?: () => void;
    onSelect?(date: Date, event: React.SyntheticEvent<any> | undefined): void;
    onWeekSelect?(
        firstDayOfWeek: Date,
        weekNumber: string | number,
        event: React.SyntheticEvent<any> | undefined,
    ): void;
    onYearChange?(date: Date): void;
    open?: boolean;
    openToDate?: Date;
    peekNextMonth?: boolean;
    placeholderText?: string;
    popperClassName?: string;
    popperContainer?(props: { children: React.ReactNode[] }): React.ReactNode;
    popperModifiers?: Popper.Modifiers;
    popperPlacement?: string;
    popperProps?: {};
    preventOpenOnFocus?: boolean;
    previousMonthButtonLabel?: string;
    previousYearButtonLabel?: string;
    readOnly?: boolean;
    renderCustomHeader?(params: {
        date: Date;
        changeYear(year: number): void;
        changeMonth(month: number): void;
        decreaseMonth(): void;
        increaseMonth(): void;
        prevMonthButtonDisabled: boolean;
        nextMonthButtonDisabled: boolean;
        decreaseYear(): void;
        increaseYear(): void;
        prevYearButtonDisabled: boolean;
        nextYearButtonDisabled: boolean;
    }): React.ReactNode;
    renderDayContents?(dayOfMonth: number, date?: Date): React.ReactNode;
    required?: boolean;
    scrollableMonthYearDropdown?: boolean;
    scrollableYearDropdown?: boolean;
    selected?: Date | null;
    selectsEnd?: boolean;
    selectsStart?: boolean;
    shouldCloseOnSelect?: boolean;
    showDisabledMonthNavigation?: boolean;
    showMonthDropdown?: boolean;
    showMonthYearDropdown?: boolean;
    showMonthYearPicker?: boolean;
    showPopperArrow?: boolean;
    showPreviousMonths?: boolean;
    showQuarterYearPicker?: boolean;
    showTimeInput?: boolean;
    showTimeSelect?: boolean;
    showTimeSelectOnly?: boolean;
    showWeekNumbers?: boolean;
    showYearDropdown?: boolean;
    startDate?: Date | null;
    startOpen?: boolean;
    strictParsing?: boolean;
    tabIndex?: number;
    timeCaption?: string;
    timeFormat?: string;
    timeInputLabel?: string;
    timeIntervals?: number;
    title?: string;
    todayButton?: React.ReactNode;
    useShortMonthInDropdown?: boolean;
    useWeekdaysShort?: boolean;
    value?: string;
    weekLabel?: string;
    withPortal?: boolean;
    wrapperClassName?: string;
    yearDropdownItemNumber?: number;
}

declare class ReactDatePicker extends React.Component<ReactDatePickerProps> {
    readonly setBlur: () => void;
    readonly setFocus: () => void;
    readonly setOpen: (open: boolean, skipSetBlur?: boolean) => void;
    readonly isCalendarOpen: () => boolean;
}

export default ReactDatePicker;
