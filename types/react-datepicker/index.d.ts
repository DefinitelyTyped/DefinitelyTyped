// Type definitions for react-datepicker 1.1
// Project: https://github.com/Hacker0x01/react-datepicker
// Definitions by: Rajab Shakirov <https://github.com/radziksh>,
//                 Andrey Balokha <https://github.com/andrewBalekha>,
//                 Greg Smith <https://github.com/smrq>,
//                 Platon Pronko <https://github.com/Rogach>
//                 Roy Xue <https://github.com/royxue>
// 				   Koala Human <https://github.com/KoalaHuman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from "react";
import * as moment from "moment";

export interface ReactDatePickerProps {
	adjustDateOnChange?: boolean;
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
	dropdownMode?: 'scroll' | 'select';
	endDate?: moment.Moment;
	excludeDates?: any[];
	filterDate?(date: moment.Moment): boolean;
	fixedHeight?: boolean;
	forceShowMonthNavigation?: boolean;
	formatWeekNumber?(date: moment.Moment): string | number;
	highlightDates?: any[];
	id?: string;
	includeDates?: any[];
	includeTimes?: any[];
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
	onYearChange?(date: moment.Moment): void;
	openToDate?: moment.Moment;
	peekNextMonth?: boolean;
	placeholderText?: string;
	popperClassName?: string;
	popperModifiers?: any;
	popperPlacement?: string;
	preventOpenOnFocus?: boolean;
	readOnly?: boolean;
	required?: boolean;
	scrollableYearDropdown?: boolean;
	scrollableMonthYearDropdown?: boolean;
	selected?: moment.Moment | null;
	selectsEnd?: boolean;
	selectsStart?: boolean;
	showDisabledMonthNavigation?: boolean;
	showMonthDropdown?: boolean;
	showMonthYearDropdown?: boolean;
	showWeekNumbers?: boolean;
	showYearDropdown?: boolean;
	startDate?: moment.Moment;
	tabIndex?: number;
	title?: string;
	todayButton?: string;
	useWeekdaysShort?: boolean;
	useShortMonthInDropdown?: boolean;
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
