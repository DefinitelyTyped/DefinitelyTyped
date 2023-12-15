import * as React from "react";

export type DateType = Date | string | number;

export enum EVENT_TYPE {
    START = 1,
    HOVER,
    END,
}

export interface RangedSelection {
    eventType: EVENT_TYPE;
    start: Date;
    end: Date;
}

export type RangedSelectFunction = (rangedDate: RangedSelection) => void;
export type DateSelectFunction = (date: Date) => void;

export interface ReactInfiniteCalendarProps {
    selected?: DateType | false | { start: DateType; end: DateType } | DateType[] | undefined;
    width?: number | "auto" | "100%" | undefined;
    height?: number | "auto" | undefined;
    min?: DateType | undefined;
    max?: DateType | undefined;
    minDate?: DateType | undefined;
    maxDate?: DateType | undefined;
    disabledDays?: Array<0 | 1 | 2 | 3 | 4 | 5 | 6> | undefined;
    disabledDates?: DateType[] | undefined;
    display?: "days" | "years" | undefined;
    displayOptions?: {
        hideYearsOnSelect?: boolean | undefined;
        layout?: "portrait" | "landscape" | undefined;
        overscanMonthCount?: number | undefined;
        shouldHeaderAnimate?: boolean | undefined;
        showHeader?: boolean | undefined;
        showMonthsForYears?: boolean | undefined;
        showOverlay?: boolean | undefined;
        showTodayHelper?: boolean | undefined;
        showWeekdays?: boolean | undefined;
        todayHelperRowOffset?: number | undefined;
    } | undefined;
    locale?: {
        locale?: {
            distanceInWords: (token: any, count: any, options: any) => any;
            format: () => any;
        } | undefined;
        blank?: string | undefined;
        headerFormat?: string | undefined;
        todayLabel?: {
            long: string;
        } | undefined;
        weekdays?: string[] | undefined;
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    } | undefined;
    theme?: {
        accentColor?: string | undefined;
        floatingNav?: {
            background?: string | undefined;
            chevron?: string | undefined;
            color?: string | undefined;
        } | undefined;
        headerColor?: string | undefined;
        selectionColor?: string | undefined;
        textColor?: {
            active?: string | undefined;
            default?: string | undefined;
        } | undefined;
        todayColor?: string | undefined;
        weekdayColor?: string | undefined;
    } | undefined;
    className?: string | undefined;
    onSelect?: DateSelectFunction | RangedSelectFunction | undefined;
    onScroll?: ((scrollTop: number) => void) | undefined;
    onScrollEnd?: ((scrollTop: number) => void) | undefined;
    rowHeight?: number | undefined;
    autoFocus?: boolean | undefined;
    tabIndex?: number | undefined;
    Component?: CalendarClass | undefined;
    interpolateSelection?: ((date: Date, selected: Date[]) => Date[]) | undefined;
}

export class Calendar extends React.Component<ReactInfiniteCalendarProps> {}
export type CalendarClass = React.ComponentClass<ReactInfiniteCalendarProps>;

export function withRange(component: CalendarClass): CalendarClass;
export function withDateSelection(component: CalendarClass): CalendarClass;
export function withMultipleDates(component: CalendarClass): CalendarClass;
export function withKeyboardSupport(component: CalendarClass): CalendarClass;
export function defaultMultipleDateInterpolation(component: CalendarClass): CalendarClass;

export default class ReactInfiniteCalendar extends React.Component<ReactInfiniteCalendarProps> {}
