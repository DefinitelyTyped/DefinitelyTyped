// Type definitions for react-day-picker v1.1.4
// Project: https://github.com/gpbl/react-day-picker
// Definitions by: Giampaolo Bellavite <https://github.com/gpbl>, Jason Killian <https://github.com/jkillian>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "react-day-picker" {
    import DayPicker = ReactDayPicker.DayPicker;
    export = DayPicker;
}

declare var DayPicker: typeof ReactDayPicker.DayPicker;

declare namespace ReactDayPicker {
    interface LocaleUtils {
        formatMonthTitle: (month: Date, locale: string) => string;
        formatWeekdayShort: (weekday: number, locale: string) => string;
        formatWeekdayLong: (weekday: number, locale: string) => string;
        getFirstDayOfWeek: (locale: string) => number;
    }

    interface Modifiers {
        [name: string]: (date: Date) => boolean;
    }

    interface Props extends __React.Props<DayPicker>{
        modifiers?: Modifiers;
        initialMonth?: Date;
        numberOfMonths?: number;
        renderDay?: (date: Date) => number | string | JSX.Element;
        enableOutsideDays?: boolean;
        canChangeMonth?: boolean;
        fromMonth?: Date;
        toMonth?: Date;
        localeUtils?: LocaleUtils;
        locale?: string;
        onDayClick?: (e: __React.SyntheticEvent, day: Date, modifiers: string[]) => any;
        onDayTouchTap?: (e: __React.SyntheticEvent, day: Date, modifiers: string[]) => any;
        onDayMouseEnter?: (e: __React.SyntheticEvent, day: Date, modifiers: string[]) => any;
        onDayMouseLeave?: (e: __React.SyntheticEvent, day: Date, modifiers: string[]) => any;
        onMonthChange?: (month: Date) => any;
        onCaptionClick?: (e: __React.SyntheticEvent, month: Date) => any;
        className?: string;
        style?: __React.CSSProperties;
        tabIndex?: number;
    }

    class DayPicker extends __React.Component<Props, {}> {
        showMonth(month: Date): void;
        showPreviousMonth(): void;
        showNextMonth(): void;
    }

    namespace DayPicker {
        var LocaleUtils: LocaleUtils;
        namespace DateUtils {
            function clone(d: Date): Date;
            function isSameDay(d1?: Date, d2?: Date): boolean;
            function isPastDay(d: Date): boolean;
            function isDayBetween(day: Date, startDate: Date, endDate: Date): boolean;
            function addDayToRange(day: Date, range: { from?: Date, to?: Date }): { from?: Date, to?: Date };
            function isDayInRange(day: Date, range: { from?: Date, to?: Date }): boolean;
        }  
    }
}
