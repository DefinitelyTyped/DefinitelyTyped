// Type definitions for react-date-range 0.94
// Project: https://github.com/Adphorus/react-date-range/
// Definitions by: Junbong Lee <https://github.com/Junbong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from 'react';
import * as moment from "moment-timezone";

declare namespace reactDateRange {
    type AnyDate = string | moment.Moment;
    type DateFunc = (now: moment.Moment) => AnyDate;
    type DateInputType = AnyDate | DateFunc;
	type LanguageType = "cn" | "jp" | "fr" | "it" | "de" | "ko" | "es" | "ru" | "tr";
    type SizeType = number;

    interface DateContainerType {
        date: moment.Moment;
    }

	interface CalendarTheme {
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

	interface Range {
		/** default: today */
        startDate?: moment.Moment;
		/** default: today */
        endDate?: moment.Moment;
	}

	interface CommonCalendarProps {
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

	interface CalendarProps extends CommonCalendarProps {
		/** default: today */
        date: DateInputType;
	}

	class Calendar extends React.Component<CalendarProps> { }

	interface DateRangeProps extends Range, CommonCalendarProps {
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

	class DateRange extends React.Component<DateRangeProps> { }

    type DateRangeIndex = "Today" | "Yesterday" | "Last 7 Days" | "Last 30 Days";

	interface DateRangeObject {
		startDate: (now: moment.Moment) => moment.Moment;
		endDate: (now: moment.Moment) => moment.Moment;
	}
	const defaultRanges: {
		[measure: string]: DateRangeObject;
	};
}

export = reactDateRange;
