// Type definitions for react-day-picker 5.2
// Project: https://github.com/gpbl/react-day-picker
// Definitions by: Giampaolo Bellavite <https://github.com/gpbl>, Jason Killian <https://github.com/jkillian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';

declare namespace DayPicker {
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
        classNames: ClassNames;
        localeUtils: LocaleUtils;
        locale: string;
        months: undefined;
        onClick?: React.MouseEventHandler<HTMLElement>;
    }

    interface NavbarElementProps {
        className: string;
        classNames: ClassNames;
        previousMonth: Date;
        nextMonth: Date;
        showPreviousButton: boolean;
        showNextButton: boolean;
        onPreviousClick(callback?: () => void): void;
        onNextClick(callback?: () => void): void;
        dir?: string;
        labels: { previousMonth: string; nextMonth: string; };
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
    type FunctionModifier = (date: Date) => boolean;
    type Modifier = Date | RangeModifier | BeforeModifier | AfterModifier | FunctionModifier;

    interface Modifiers {
        today: Modifier | Modifier[];
        outside: Modifier | Modifier[];
        [other: string]: Modifier | Modifier[] | undefined;
    }

    interface Props {
        canChangeMonth?: boolean;
        captionElement?: React.ReactElement<Partial<CaptionElementProps>> |
            React.ComponentClass<CaptionElementProps> |
            React.SFC<CaptionElementProps>;
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
        modifiers?: Partial<Modifiers>;
        month?: Date;
        months?: [string, string, string, string, string, string, string, string, string, string, string, string];
        navbarElement?: React.ReactElement<Partial<NavbarElementProps>> |
            React.ComponentClass<NavbarElementProps> |
            React.SFC<NavbarElementProps>;
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
        weekdayElement?: React.ReactElement<Partial<WeekdayElementProps>> |
            React.ComponentClass<WeekdayElementProps> |
            React.SFC<WeekdayElementProps>;
        weekdaysLong?: [string, string, string, string, string, string, string];
        weekdaysShort?: [string, string, string, string, string, string, string];
    }
    const VERSION: string;
    const LocaleUtils: DayPicker.LocaleUtils;
    const DateUtils: DayPicker.DateUtils;
}

declare class DayPicker extends React.Component<DayPicker.Props, never> {
    showMonth(month: Date): void;

    showPreviousMonth(): void;

    showNextMonth(): void;

    showPreviousYear(): void;

    showNextYear(): void;
}

export = DayPicker;
