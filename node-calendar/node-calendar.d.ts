// Type definitions for node-calendar v0.1.4
// Project: https://www.npmjs.com/package/node-calendar
// Definitions by: Luzian Zagadinow <https://github.com/luzianz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IDayOfWeekMonth extends Array<number> {
	/** dayOfMonth */
	0: number;
	
	/** dayOfWeek */
	1: number;
}

interface IWeekRow<T> extends Array<T> {
	[dayIndex: number]: T;
}

interface IMonthGrid<T> extends Array<IWeekRow<T>> {
	[weekRowIndex: number]: IWeekRow<T>;
}

interface IMonthRow<T> extends Array<IMonthGrid<T>> {
	[monthColumnIndex: number]: IMonthGrid<T>;
}

interface IYearGrid<T> extends Array<IMonthRow<T>>{
	[monthRowIndex: number]: IMonthRow<T>;
}

/**
 * This module allows you to output calendars like the Unix cal program, and provides
 * additional useful functions related to the calendar. By default, these calendars
 * have Monday as the first day of the week, and Sunday as the last (the European
 * convention). Use setfirstweekday() to set the first day of the week to Sunday
 * (6) or to any other weekday. Parameters that specify dates are given as integers.
 */
declare module 'node-calendar' {
	/** 0 */
	export var MONDAY: number;
	
	/** 1 */
	export var TUESDAY: number;
	
	/** 2 */
	export var WEDNESDAY: number;
	
	/** 3 */
	export var THURSDAY: number;
	
	/** 4 */
	export var FRIDAY: number;
	
	/** 5 */
	export var SATURDAY: number;
	
	/** 6 */
	export var SUNDAY: number;

	
	/** 1 */
	export var JANUARY: number;
	
	/** 2 */
	export var FEBRUARY: number;
	
	/** 3 */
	export var MARCH: number;
	
	/** 4 */
	export var APRIL:number;
	
	/** 5 */
	export var MAY: number;
	
	/** 6 */
	export var JUNE: number;
	
	/** 7 */
	export var JULY: number;
	
	/** 8 */
	export var AUGUST: number;
	
	/** 9 */
	export var SEPTEMBER: number;
	
	/** 10 */
	export var OCTOBER: number;
	
	/** 11 */
	export var NOVEMBER: number;
	
	/** 12 */
	export var DECEMBER: number;
	
	/**
	 * [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
	 */
	export var day_name: string[];
	
	/**
	 * [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
	 */
	export var day_abbr: string[];
	
	/**
	 * [ '', 'January', 'February', 'March',
	 * 'April', 'May', 'June', 'July', 'August',
	 * 'September', 'October', 'November', 'December' ]
	 */
	export var month_name: string[];
	
	/**
	 * [ '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
	 * 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
	 */
	export var month_abbr: string[];
	
	/**
	 * Base calendar class. This class doesn't do any formatting. It simply provides
	 * data to subclasses.
	 */
	export class Calendar {
		/**
		 * @param {number} firstweekday
		 *  Numerical day of the week the calendar weeks should start.
		 *  (0=MON, 1=TUE, ...) Default: 0
		 */
		constructor(firstweekday?: number);
		
		/**
		 * Numerical day of the week the calendar weeks should start.
		 * (0=MON, 1=TUE, ...)
		 * 
		 * @method getfirstweekday
		 */
		getfirstweekday(): number;
		
		/**
		 * Numerical day of the week the calendar weeks should start.
		 * (0=MON, 1=TUE, ...)
		 * 
		 * @param {number} firstweekday
		 *  Numerical day of the week the calendar weeks should start.
		 *  (0=MON, 1=TUE, ...) Default: 0
		 */
		setfirstweekday(firstweekday: number): void;
		
		/**
		 * One week of weekday numbers starting with the configured first one.
		 */
		iterweekdays(): number[];
		
		/**
		 * Dates for one month. The array will contain Date values and will always
		 * iterate through complete weeks, so it will yield dates outside the
		 * specified month.
		 * 
		 * @param {number} year
		 *  Year for which the calendar should be generated.
		 * @param {number} month
		 *  Month for which the calendar should be generated.
		 */
		itermonthdates(year: number, month: number): Date[];
		
		/**
		 * Like itermonthdates(), but will yield day numbers. For days outside
		 * the specified month the day number is 0.
		 * 
		 * @param {number} year
		 *  Year for which the calendar should be generated.
		 * @param {number} month
		 *  Month for which the calendar should be generated.
		 */
		itermonthdays(year: number, month: number): number[];
		
		/**
		 * Like itermonthdates(), but will yield [day number, weekday number]
		 * arrays. For days outside the specified month the day number is 0.
		 * 
		 * @param {number} year
		 *  Year for which the calendar should be generated.
		 * @param {number} month
		 *  Month for which the calendar should be generated.
		 */
		itermonthdays2(year: number, month: number): IDayOfWeekMonth[];
		
		/**
		 * A matrix (array of array) representing a month's calendar.
		 * Each row represents a week; week entries are Date values.
		 * 
		 * @param {number} year
		 *  Year for which the calendar should be generated.
		 * @param {number} month
		 *  Month for which the calendar should be generated.
		 */
		monthdatescalendar(year: number, month: number): IMonthGrid<Date>;
		
		/**
		 * A matrix representing a month's calendar. Each row represents a week;
		 * days outside this month are zero.
		 * 
		 * @param {number} year
		 *  Year for which the calendar should be generated.
		 * @param {number} month
		 *  Month for which the calendar should be generated.
		 */
		monthdayscalendar(year: number, month: number): IMonthGrid<number>;
		
		/**
		 * Return a matrix representing a month's calendar. Each row represents
		 * a week; week entries are [day number, weekday number] arrays. Day numbers
		 * outside this month are zero.
		 * 
		 * @param {number} year
		 *  Year for which the calendar should be generated.
		 * @param {number} month
		 *  Month for which the calendar should be generated.
		 */
		monthdays2calendar(year: number, month: number): IMonthGrid<IDayOfWeekMonth>;
		
		/**
		 * The specified year ready for formatting. The return value is an array
		 * of month rows. Each month row contains up to width months. Each month
		 * contains between 4 and 6 weeks and each week contains 1-7 days. Days
		 * are Date objects.
		 * 
		 * @param {number} year
		 *  Year for which the calendar should be generated.
		 * @param {number} width
		 *  The number of months to include in each row. Default: 3
		 */
		yeardatescalendar(year: number, width?: number): IYearGrid<Date>;
		
		/**
		 * the specified year ready for formatting (similar to yeardatescalendar()).
		 * Entries in the week arrays are day numbers. Day numbers outside this
		 * month are zero.
		 * 
		 * @param {number} year
		 *  Year for which the calendar should be generated.
		 * @param {number} width
		 *  The number of months to include in each row. Default: 3
		 */
		yeardayscalendar(year: number, width?: number): IYearGrid<number>;
		
		/**
		 * The specified year ready for formatting (similar to yeardatescalendar()).
		 * Entries in the week arrays are [day number, weekday number] arrays.
		 * Day numbers outside this month are zero.
		 * 
		 * @param {number} year
		 *  Year for which the calendar should be generated.
		 * @param {number} width
		 *  The number of months to include in each row. Default: 3
		 */
		yeardays2calendar(year: number, width?: number): IYearGrid<IDayOfWeekMonth>;
	}
	
	// Undocumented
	//export function isleap(year: number): boolean;
	//export function leapdays(beginYear: number, endYear: number): number;
	//export function monthrange(year: number, month: number): number[];
	//export function weekday(year: number, month: number, day: number): number;
	//export function timegm(dateParams: number[]): number;
	//export function IllegalLocaleError(): Error;
	//export function IllegalDayError(): Error;
	//export function IllegalMonthError(): Error;
	//export function IllegalTimeError(): Error;
	//export function IllegalWeekdayError(): Error;
}