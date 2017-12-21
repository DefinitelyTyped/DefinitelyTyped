// Type definitions for react-datepicker 0.62
// Project: https://github.com/Hacker0x01/react-datepicker
// Definitions by: Rajab Shakirov <https://github.com/radziksh>,
//                 Andrey Balokha <https://github.com/andrewBalekha>,
//                 Greg Smith <https://github.com/smrq>,
//                 Platon Pronko <https://github.com/Rogach>
//                 Roy Xue <https://github.com/royxue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from "react";
import * as moment from "moment";

export interface ReactDatePickerProps {
	allowSameDay?: boolean;
	autoComplete?: string;
	autoFocus?: boolean;
	calendarClassName?: string;
	children?: any;
	className?: string;
	customInput?: React.ReactNode;
	customInputRef?: string;
	dateFormat?: string | string[];
	dateFormatCalendar?: string;
	dayClassName?(date: moment.Moment): string | null;
	disabled?: boolean;
	disabledKeyboardNavigation?: boolean;
	dropdownMode?: string;
	endDate?: moment.Moment;
	excludeDates?: any[];
	filterDate?(date: moment.Moment): boolean;
	fixedHeight?: boolean;
	forceShowMonthNavigation?: boolean;
	formatWeekNumber?(date: moment.Moment): string | number;
	highlightDates?: any[];
	id?: string;
	includeDates?: any[];
	inline?: boolean;
	isClearable?: boolean;
	locale?: string;
	maxDate?: moment.Moment;
	minDate?: moment.Moment;
	monthsShown?: number;
	name?: string;
	onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
	onChange(date: moment.Moment | null, event: React.SyntheticEvent<any> | undefined): any;
	onChangeRaw?(event: React.FocusEvent<HTMLInputElement>): void;
	onClickOutside?(event: React.MouseEvent<HTMLDivElement>): void;
	onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
	onKeyDown?(event: React.KeyboardEvent<HTMLDivElement>): void;
	onMonthChange?(date: moment.Moment): void;
	onSelect?(date: moment.Moment, event: React.SyntheticEvent<any> | undefined): void;
	onWeekSelect?(firstDayOfWeek: moment.Moment, weekNumber: string | number, event: React.SyntheticEvent<any> | undefined): void;
	openToDate?: moment.Moment;
	peekNextMonth?: boolean;
	placeholderText?: string;
	popperClassName?: string;
	popperModifiers?: any;
	popperPlacement?: string;
	readOnly?: boolean;
	required?: boolean;
	scrollableYearDropdown?: boolean;
	selected?: moment.Moment | null;
	selectsEnd?: boolean;
	selectsStart?: boolean;
	showMonthDropdown?: boolean;
	showWeekNumbers?: boolean;
	showYearDropdown?: boolean;
	startDate?: moment.Moment;
	tabIndex?: number;
	title?: string;
	todayButton?: string;
	useWeekdaysShort?: boolean;
	utcOffset?: number;
	value?: string;
	weekLabel?: string;
	withPortal?: boolean;
	yearDropdownItemNumber?: number;
	shouldCloseOnSelect?: boolean;
	showTimeSelect?: boolean;
	timeFormat?: string;
	timeIntervals?: number;
	minTime?: moment.Moment;
	maxTime?: moment.Moment;
	excludeTimes?: any[];
}
declare const ReactDatePicker: React.ClassicComponentClass<ReactDatePickerProps>;
export default ReactDatePicker;
