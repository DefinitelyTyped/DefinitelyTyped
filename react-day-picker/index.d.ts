// Type definitions for react-day-picker 1.2
// Project: https://github.com/gpbl/react-day-picker
// Definitions by: Giampaolo Bellavite <https://github.com/gpbl>, Jason Killian <https://github.com/jkillian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';

interface LocaleUtils {
    formatDay(day: Date, locale: string): string;
    formatMonthTitle(month: Date, locale: string): string;
    formatWeekdayLong(weekday: number, locale: string): string;
    formatWeekdayShort(weekday: number, locale: string): string;
    getFirstDayOfWeek(locale: string): number;
    getMonths(locale: string): [string, string, string, string, string, string, string, string, string, string, string, string];
}

interface DateUtils {
    addMonths(d: Date, n: number): Date;
    clone(d: Date): Date;
    isSameDay(d1: Date, d2: Date): Date;
    isPastDay(d: Date): boolean;
    isFutureDay(d: Date): boolean;
    isDayBetween(day: Date, begin: Date, end: Date): boolean;
    addDayToRange(day: Date, range: RangeModifier): RangeModifier;
    isDayInRange(day: Date, range: RangeModifier): boolean;
}

interface CaptionElementProps {
    date: Date;
    localeUtils: LocaleUtils;
    locale: string;
    onClick: typeof Props.onCaptionClick;
}

interface NavbarElementProps {
    className: string;
    previousMonth: Date;
    nextMonth: Date;
    showPreviousButton: boolean;
    showNextButton: boolean;
    onPreviousClick(): void;
    onNextClick(): void;
    dir: string;
    localeUtils: LocaleUtils;
    locale: string;
}

interface WeekdayElementProps {
    weekday: number;
    className: string;
    localeUtils: LocaleUtils;
    locale: string;
}

interface ClassNames {
    container: string;
    interactionDisabled: string;
    navBar: string;
    navButtonPrev: string;
    navButtonNext: string;

    month: string;
    caption: string;
    weekdays: string;
    weekdaysRow: string;
    weekday: string;
    body: string;
    week: string;
    day: string;

    today: string;
    selected: string;
    disabled: string;
    outside: string;
}

interface RangeModifier {
    from: Date;
    to: Date;
}
interface BeforeModifier {
    before: Date;
}
interface AfterModifier {
    after: Date;
}
interface FunctionModifier {
    (date: Date): boolean;
}
type Modifier = RangeModifier | BeforeModifier | AfterModifier | FunctionModifier;

interface Modifiers {
    today: Modifier | Modifier[];
    outside: Modifier | Modifier[];
    [other: string]: Modifier | Modifier[] | undefined;
}

interface Props {
    canChangeMonth?: boolean;
    captionElement?: React.SFC<CaptionElementProps>;
    className?: string;
    classNames?: ClassNames;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    disabledDays?: Modifier | Modifier[];
    enableOutsideDays?: boolean;
    firstDayOfWeek?: number;
    fixedWeeks?: boolean;
    fromMonth?: Date;
    initialMonth?: Date;
    labels?: { previousMonth: string; nextMonth: string; };
    locale?: string;
    localeUtils?: LocaleUtils;
    modifiers?: Modifiers;
    month?: Date;
    months?: [string, string, string, string, string, string, string, string, string, string, string, string];
    navbarElement?: React.SFC<NavbarElementProps> | React.ComponentClass<NavbarElementProps>;
    numberOfMonths?: number;
    onBlur?(e: React.FocusEvent<HTMLDivElement>): void;
    onCaptionClick?(month: Date, e: React.MouseEvent<HTMLDivElement>): void;
    onDayClick?(day: Date, modifiers: Modifiers, e: React.MouseEvent<HTMLDivElement>): void;
    onDayKeyDown?(day: Date, modifiers: Modifiers, e: React.KeyboardEvent<HTMLDivElement>): void;
    onDayMouseEnter?(day: Date, modifiers: Modifiers, e: React.MouseEvent<HTMLDivElement>): void;
    onDayMouseLeave?(day: Date, modifiers: Modifiers, e: React.MouseEvent<HTMLDivElement>): void;
    onDayTouchEnd?(day: Date, modifiers: Modifiers, e: React.TouchEvent<HTMLDivElement>): void;
    onDayTouchStart?(day: Date, modifiers: Modifiers, e: React.TouchEvent<HTMLDivElement>): void;
    onFocus?(e: React.FocusEvent<HTMLDivElement>): void;
    onKeyDown?(e: React.KeyboardEvent<HTMLDivElement>): void;
    onMonthChange?(month: Date): void;
    pagedNavigation?: boolean;
    renderDay?(date: Date, modifiers: Modifiers): React.ReactNode;
    reverseMonths?: boolean;
    selectedDays?: Modifier | Modifier[];
    toMonth?: Date;
    weekdayElement?: React.SFC<WeekdayElementProps> | React.ComponentClass<WeekdayElementProps>;
    weekdaysLong?: [string, string, string, string, string, string, string];
    weekdaysShort?: [string, string, string, string, string, string, string];
}


class DayPicker extends React.Component<Props, {}> {
    showMonth(month: Date): void;

    showPreviousMonth(): void;

    showNextMonth(): void;

    showPreviousYear(): void;

    showNextYear(): void;

    static readonly VERSION: string;
    static readonly LocaleUtils: LocaleUtils;
    static readonly DateUtils: DateUtils;
}

export = DayPicker;
