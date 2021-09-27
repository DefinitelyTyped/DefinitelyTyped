// Type definitions for react-calendar 3.4
// Project: https://github.com/wojtekmaj/react-calendar
// Definitions by: Stéphane Saquet <https://github.com/Guymestef>, Katie Soldau <https://github.com/ksoldau>, Danah <https://github.com/sweetmilkys>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { MouseEvent, ChangeEvent, MutableRefObject, RefObject } from 'react';

export type CalendarType = "ISO 8601" | 'US' | 'Arabic' | 'Hebrew';
export type Detail = 'month' | 'year' | 'decade' | 'century';
export type DateCallback = (value: Date, event: MouseEvent<HTMLButtonElement>) => void;
export type ClickWeekNumberCallback = (weekNumber: number, date: Date, event: MouseEvent<HTMLButtonElement>) => void;
export type OnChangeDateCallback = (value: Date, event: ChangeEvent<HTMLInputElement>) => void;
export type OnChangeDateRangeCallback = (values: [Date] | [Date, Date], event: ChangeEvent<HTMLInputElement>) => void;
export type FormatterCallback = (locale: string, date: Date) => string;
export type ViewCallback = (props: ViewCallbackProperties) => void;
export type DrillCallback = (props: DrillCallbackProperties) => void;

export default function Calendar(props: CalendarProps): JSX.Element;

export interface CalendarProps {
    activeStartDate?: Date | undefined;
    allowPartialRange?: boolean | undefined;
    calendarType?: CalendarType | undefined;
    className?: string | string[] | undefined;
    closeCalendar?: boolean | undefined;
    defaultActiveStartDate?: Date | undefined;
    defaultValue?: Date | Date[] | undefined;
    defaultView?: Detail | undefined;
    formatDay?: FormatterCallback | undefined;
    formatLongDate?: FormatterCallback | undefined;
    formatMonth?: FormatterCallback | undefined;
    formatMonthYear?: FormatterCallback | undefined;
    formatShortWeekday?: FormatterCallback | undefined;
    formatYear?: FormatterCallback | undefined;
    inputRef?: ((
        ref: HTMLInputElement | null,
    ) => void) | RefObject<HTMLInputElement> | MutableRefObject<HTMLInputElement | null> | undefined;
    locale?: string | undefined;
    maxDate?: Date | undefined;
    maxDetail?: Detail | undefined;
    minDate?: Date | undefined;
    minDetail?: Detail | undefined;
    navigationAriaLabel?: string | undefined;
    navigationLabel?: ((props: {
        date: Date;
        label: string;
        locale: string;
        view: Detail;
    }) => string | JSX.Element | null) | undefined;
    nextAriaLabel?: string | undefined;
    nextLabel?: string | JSX.Element | null | undefined;
    next2AriaLabel?: string | undefined;
    next2Label?: string | JSX.Element | null | undefined;
    onActiveStartDateChange?: ViewCallback | undefined;
    onChange?: OnChangeDateCallback | OnChangeDateRangeCallback | undefined;
    onViewChange?: ViewCallback | undefined;
    onClickDay?: DateCallback | undefined;
    onClickDecade?: DateCallback | undefined;
    onClickMonth?: DateCallback | undefined;
    onClickWeekNumber?: ClickWeekNumberCallback | undefined;
    onClickYear?: DateCallback | undefined;
    onDrillDown?: DrillCallback | undefined;
    onDrillUp?: DrillCallback | undefined;
    prevAriaLabel?: string | undefined;
    prevLabel?: string | JSX.Element | null | undefined;
    prev2AriaLabel?: string | undefined;
    prev2Label?: string | JSX.Element | null | undefined;
    returnValue?: "start" | "end" | "range" | undefined;
    showDoubleView?: boolean | undefined;
    showFixedNumberOfWeeks?: boolean | undefined;
    showNavigation?: boolean | undefined;
    showNeighboringMonth?: boolean | undefined;
    selectRange?: boolean | undefined;
    showWeekNumbers?: boolean | undefined;
    tileClassName?: string | string[] | ((props: CalendarTileProperties) => string | string[] | null) | undefined;
    tileContent?: string | JSX.Element | ((props: CalendarTileProperties) => JSX.Element | null) | undefined;
    tileDisabled?: ((props: CalendarTileProperties) => boolean) | undefined;
    value?: Date | Date[] | null | undefined;
    view?: Detail | undefined;
}

export interface CalendarTileProperties {
    activeStartDate: Date;
    date: Date;
    view: Detail;
}

export interface ViewCallbackProperties {
    activeStartDate: Date;
    value: Date;
    view: Detail;
}

export interface DrillCallbackProperties {
    activeStartDate: Date;
    view: Detail;
}

export function MonthView(props: DetailViewProps): JSX.Element;
export function YearView(props: DetailViewProps): JSX.Element;
export function DecadeView(props: DetailViewProps): JSX.Element;
export function CenturyView(props: DetailViewProps): JSX.Element;

export interface DetailViewProps {
    activeStartDate: Date;
    calendarType?: CalendarType | undefined;
    locale?: string | undefined;
    hover?: Date | undefined;
    maxDate?: Date | undefined;
    minDate?: Date | undefined;
    onClick?: DateCallback | undefined;
    onMouseOver?: DateCallback | undefined;
    renderChildren?: ((props: CalendarTileProperties) => JSX.Element | null) | undefined; // For backwards compatibility
    tileClassName?: string | string[] | ((props: CalendarTileProperties) => string | string[] | null) | undefined;
    tileContent?: JSX.Element | ((props: CalendarTileProperties) => JSX.Element | null) | undefined;
    tileDisabled?: ((props: CalendarTileProperties) => boolean) | undefined;
    value?: Date | Date[] | undefined;
}
