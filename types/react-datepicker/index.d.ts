// Type definitions for react-datepicker 1.1
// Project: https://github.com/Hacker0x01/react-datepicker
// Definitions by: Rajab Shakirov <https://github.com/radziksh>,
//                 Andrey Balokha <https://github.com/andrewBalekha>,
//                 Greg Smith <https://github.com/smrq>,
//                 Platon Pronko <https://github.com/Rogach>
//                 Roy Xue <https://github.com/royxue>
//                 Koala Human <https://github.com/KoalaHuman>
//                 Sean Kelley <https://github.com/seansfkelley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import * as moment from "moment";
import * as Popper from "popper.js";

export interface ReactDatePickerProps {
	adjustDateOnChange?: boolean;
	allowSameDay?: boolean;
	autoComplete?: string;
	autoFocus?: boolean;
	calendarClassName?: string;
	children?: React.ReactNode;
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
	excludeDates?: moment.Moment[];
	excludeTimes?: moment.Moment[];
	filterDate?(date: moment.Moment): boolean;
	fixedHeight?: boolean;
	forceShowMonthNavigation?: boolean;
	formatWeekNumber?(date: moment.Moment): string | number;
	highlightDates?: moment.Moment[];
	id?: string;
	includeDates?: moment.Moment[];
	includeTimes?: moment.Moment[];
	inline?: boolean;
	isClearable?: boolean;
	locale?: string;
	maxDate?: moment.Moment;
	maxTime?: moment.Moment;
	minDate?: moment.Moment;
	minTime?: moment.Moment;
	monthsShown?: number;
	name?: string;
	onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
	onChange(date: moment.Moment | null, event: React.SyntheticEvent<any> | undefined): void;
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
	popperContainer?(props: { children: React.ReactNode[] }): React.ReactNode;
	popperModifiers?: Popper.Modifiers;
	popperPlacement?: string;
	preventOpenOnFocus?: boolean;
	readOnly?: boolean;
	required?: boolean;
	scrollableMonthYearDropdown?: boolean;
	scrollableYearDropdown?: boolean;
	selected?: moment.Moment | null;
	selectsEnd?: boolean;
	selectsStart?: boolean;
	shouldCloseOnSelect?: boolean;
	showDisabledMonthNavigation?: boolean;
	showMonthDropdown?: boolean;
	showMonthYearDropdown?: boolean;
	showTimeSelect?: boolean;
	showTimeSelectOnly?: boolean;
	showWeekNumbers?: boolean;
	showYearDropdown?: boolean;
	startDate?: moment.Moment;
	startOpen?: boolean;
	tabIndex?: number;
	timeCaption?: string;
	timeFormat?: string;
	timeIntervals?: number;
	title?: string;
	todayButton?: string;
	useShortMonthInDropdown?: boolean;
	useWeekdaysShort?: boolean;
	utcOffset?: number;
	value?: string;
	weekLabel?: string;
	withPortal?: boolean;
	yearDropdownItemNumber?: number;
}
declare const ReactDatePicker: React.ClassicComponentClass<ReactDatePickerProps>;
export default ReactDatePicker;
