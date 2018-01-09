// Type definitions for react-date-range 0.94
// Project: https://github.com/Adphorus/react-date-range/
// Definitions by: Junbong Lee <https://github.com/Junbong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from 'react';
import * as moment from "moment-timezone";

export type AnyDate = string | moment.Moment;
export type DateFunc = (now: moment.Moment) => AnyDate;
export type DateInputType = AnyDate | DateFunc;
export type LanguageType = "cn" | "jp" | "fr" | "it" | "de" | "ko" | "es" | "ru" | "tr";
export type SizeType = number;

export interface DateContainerType {
	date: moment.Moment;
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
	startDate?: moment.Moment;
	/** default: today */
	endDate?: moment.Moment;
}

export interface CommonCalendarProps {
	/** default: DD/MM/YYY */
	format?: string;
	/** default: moment.localeData().firstDayOfWeek() */
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
}

export interface CalendarProps extends CommonCalendarProps {
	/** default: today */
	date: DateInputType;
}

export class Calendar extends React.Component<CalendarProps> { }

export interface DateRangeProps extends Range, CommonCalendarProps {
	/** default: false */
	linkedCalendars?: boolean;
	/** default: 2 */
	calendars?: number;
	/** default: none */
	ranges?: object;
	/** default: false */
	twoStepChange?: boolean;
	/** default: false */
	rangedCalendars?: boolean;
	/** default: none */
	specialDays?: DateContainerType[];
}

export class DateRange extends React.Component<DateRangeProps> { }

export type DateRangeIndex = "Today" | "Yesterday" | "Last 7 Days" | "Last 30 Days";

export interface DateRangeObject {
	startDate: (now: moment.Moment) => moment.Moment;
	endDate: (now: moment.Moment) => moment.Moment;
}
export const defaultRanges: {
	[measure: string]: DateRangeObject;
};
