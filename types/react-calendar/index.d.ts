// Type definitions for react-calendar 3.4
// Project: https://github.com/wojtekmaj/react-calendar
// Definitions by: Stéphane Saquet <https://github.com/Guymestef>, Katie Soldau <https://github.com/ksoldau>, Danah <https://github.com/sweetmilkys>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { MouseEvent, ChangeEvent, MutableRefObject, RefObject } from "react";

export type CalendarType = "ISO 8601" | "US" | "Arabic" | "Hebrew";
export type Detail = "month" | "year" | "decade" | "century";
export type DateCallback = (value: Date, event: MouseEvent<HTMLButtonElement>) => void;
export type ClickWeekNumberCallback = (weekNumber: number, date: Date, event: MouseEvent<HTMLButtonElement>) => void;
export type OnChangeDateCallback = (value: Date, event: ChangeEvent<HTMLInputElement>) => void;
export type FormatterCallback = (locale: string, date: Date) => string;
export type ViewCallback = (props: ViewCallbackProperties) => void;
export type DrillCallback = (props: DrillCallbackProperties) => void;

export default function Calendar(props: CalendarProps): JSX.Element;

export interface CalendarProps {
    activeStartDate?: Date;
    allowPartialRange?: boolean;
    calendarType?: CalendarType;
    className?: string | string[];
    closeCalendar?: boolean;
    defaultActiveStartDate?: Date;
    defaultValue?: Date | Date[];
    defaultView?: Detail;
    formatDay?: FormatterCallback;
    formatLongDate?: FormatterCallback;
    formatMonth?: FormatterCallback;
    formatMonthYear?: FormatterCallback;
    formatShortWeekday?: FormatterCallback;
    formatYear?: FormatterCallback;
    inputRef?: (
        ref: HTMLInputElement | null,
    ) => void | RefObject<HTMLInputElement> | MutableRefObject<HTMLInputElement | null>;
    locale?: string;
    maxDate?: Date;
    maxDetail?: Detail;
    minDate?: Date;
    minDetail?: Detail;
    navigationAriaLabel?: string;
    navigationLabel?: (props: {
        date: Date;
        label: string;
        locale: string;
        view: Detail;
    }) => string | JSX.Element | null;
    nextAriaLabel?: string;
    nextLabel?: string | JSX.Element | null;
    next2AriaLabel?: string;
    next2Label?: string | JSX.Element | null;
    onActiveStartDateChange?: ViewCallback;
    onChange?: OnChangeDateCallback;
    onViewChange?: ViewCallback;
    onClickDay?: DateCallback;
    onClickDecade?: DateCallback;
    onClickMonth?: DateCallback;
    onClickWeekNumber?: ClickWeekNumberCallback;
    onClickYear?: DateCallback;
    onDrillDown?: DrillCallback;
    onDrillUp?: DrillCallback;
    prevAriaLabel?: string;
    prevLabel?: string | JSX.Element | null;
    prev2AriaLabel?: string;
    prev2Label?: string | JSX.Element | null;
    returnValue?: "start" | "end" | "range";
    showDoubleView?: boolean;
    showFixedNumberOfWeeks?: boolean;
    showNavigation?: boolean;
    showNeighboringMonth?: boolean;
    selectRange?: boolean;
    showWeekNumbers?: boolean;
    tileClassName?: string | string[] | ((props: CalendarTileProperties) => string | string[] | null);
    tileContent?: string | JSX.Element | ((props: CalendarTileProperties) => JSX.Element | null);
    tileDisabled?: (props: CalendarTileProperties) => boolean;
    value?: Date | Date[] | null;
    view?: Detail;
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
    calendarType?: CalendarType;
    locale?: string;
    hover?: Date;
    maxDate?: Date;
    minDate?: Date;
    onClick?: DateCallback;
    onMouseOver?: DateCallback;
    renderChildren?: (props: CalendarTileProperties) => JSX.Element | null; // For backwards compatibility
    tileClassName?: string | string[] | ((props: CalendarTileProperties) => string | string[] | null);
    tileContent?: JSX.Element | ((props: CalendarTileProperties) => JSX.Element | null);
    tileDisabled?: (props: CalendarTileProperties) => boolean;
    value?: Date | Date[];
}
