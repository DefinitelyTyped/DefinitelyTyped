// Type definitions for DateJS
// Project: http://www.datejs.com/
// Definitions by: David Khristepher Santos <http://github.com/rupertavery>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/** Defines a structure to be used in the add and set instance methods */
interface IDateJSLiteral {
    milliseconds: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    months: number;
    years: number;
}

/** DateJS Public Static Methods */
interface IDateJSStatic extends IDateJS {
    /** Gets a date that is set to the current date. The time is set to the start of the day (00:00 or 12:00 AM) */
    today(): IDateJS;
    /** Compares the first date to the second date and returns an number indication of their relative values. -1 = this is lessthan date. 0 = values are equal. 1 = this is greaterthan date. */
    compare(date1: IDateJS, date2: IDateJS): number;
    /** Compares the first Date object to the second Date object and returns true if they are equal. */
    equals(date1: IDateJS, date2?: IDateJS): boolean;
    /** Gets the day number (0-6) if given a culture-specific string which is a valid full or abbreviated day name. */
    getDayNumberFromName(dayName: string): number;
    /** Gets the month number (0-11) if given a culture-specific string which is a valid full or abbreviated month name. */
    getMonthNumberFromName(monthName: string): number;
    /** Returns true if the given year is a leap year, false otherwise. */
    isLeapYear(year: number): boolean;
    /** Gets the number of days in the month, given a year and month value. Automatically corrects for leap year. */
    getDaysInMonth(year: number, month: number): number;
    /** Returns a culture-specific timezone abbreviation based on a given offset and a boolean indicating whether daylight savings time is in effect. */
    getTimezoneAbbreviation(timezoneOffset: number, isDayLightSavingsTime: boolean): string;
    /** Gets the timezone offset if given a culture-specific string which is a valid full or abbreviated timezone name and a boolean indicating whether daylight savings time is in effect. */
    getTimezoneOffset(timezoneAbbreviation?: string, isDayLightSavingsTime?: boolean): number;
    /** Converts the specified string value into its JavaScript Date equivalent using culture-specific format information. */
    parse(dateString: string): IDateJS;
    /** Converts the specified string value into its JavaScript Date equivalent using the specified format. The format of the string value must match one of the supplied formats exactly. */
    parseExact(dateString: string, formatString: string): IDateJS;
    /** Converts the specified string value into its JavaScript Date equivalent using the specified formats (array). The format of the string value must match one of the supplied formats exactly. */
    parseExact(dateString: string, formatArray: string[]): IDateJS;
    /** Validates the number is within an acceptable range for the days in a month [0-MaxDaysInMonth]. */
    validateDay(day: number, fullYear: number, monthNumber: number): boolean;
    /** Validates the number is within an acceptable range for hours[0 - 23].Returns true if within range, otherwise false. */
    validateHour(hour: number): boolean;
    /** Validates the number is within an acceptable range for milliseconds[0 - 999].Returns true if within range, otherwise false. */
    validateMillisecond(milliseconds: number): boolean;
    /** Validates the number is within an acceptable range for minutes[0 - 59].Returns true if within range, otherwise false. */
    validateMinute(minutes: number): boolean;
    /** Validates the number is within an acceptable range for months[0 - 11]. */
    validateMonth(month: number): boolean;
    /** Validates the number is within an acceptable range for seconds[0 - 59].Returns true if within range, otherwise false. */
    validateSecond(second: number): boolean;
    /** Validates the number is within an acceptable range for years[0 - 9999]. */
    validateYear(year: number): boolean;
}

/** DateJS Public Instance Methods */
interface IDateJS extends Date {
    /** Adds(or subtracts) to the value of the year, month, day, hour, minute, second, millisecond of the date instance using given configuration object. Positive and Negative values allowed. */
    add(config?: IDateJSLiteral): IDateJS;
    /** Adds the specified number of milliseconds to this instance. */
    addMilliseconds(milliseconds: number): IDateJS;
    /** Adds the specified number of seconds to this instance given the number of seconds to add.The number can be positive or negative. */
    addSeconds(seconds: number): IDateJS;
    /** Adds the specified number of minutes to this instance given the number of minutes to add.The number can be positive or negative. */
    addMinutes(minutes: number): IDateJS;
    /** Adds the specified number of hours to this instance given the number of hours to add.The number can be positive or negative. */
    addHours(hours: number): IDateJS;
    /** Adds the specified number of days to this instance.The number can be positive or negative. */
    addDays(days: number): IDateJS;
    /** Adds the specified number of weeks to this instance given the number of weeks to add.The number can be positive or negative. */
    addWeeks(weeks: number): IDateJS;
    /** Adds the specified number of months to this instance given the number of months to add.The number can be positive or negative. */
    addMonths(months: number): IDateJS;
    /** Adds the specified number of years to this instance given the number of years to add.The number can be positive or negative. */
    addYears(years: number): IDateJS;
    /** Resets the time of this Date object to 12:00 AM(00:00), which is the start of the day. */
    clearTime(): IDateJS;
    /** Resets the time of this Date object to the current time('now'). */
    setTimeToNow(): IDateJS;
    /** Returns a new Date object that is an exact date and time copy of the original instance. */
    clone(): IDateJS;
    /** Determines if this instance is between a range of two dates or equal to either the start or end dates. */
    between(startDate: IDateJS, endDate: IDateJS): boolean;
    /** Compares this instance to a Date object and returns an number indication of their relative values. -1 = this is lessthan date. 0 = values are equal. 1 = this is greaterthan date. */
    compareTo(date: IDateJS): number;
    /** Compares this instance to another Date object and returns true if they are equal, otherwise false. */
    equals(date: IDateJS): boolean;
    /** Determines if this date occurs after the date to compare to. */
    isAfter(date: IDateJS): boolean;
    /** Determines if this date occurs before the date to compare to. */
    isBefore(date: IDateJS): boolean;
    /** Determines if the current Date instance occurs on the same Date as the supplied 'date'. */
    isToday(date: IDateJS): boolean;
    /** Returns the number of milliseconds between this date and date. */
    getElapsed(date: IDateJS): number;
    /** Get the Ordinal day (numeric day number) of the year, adjusted for leap year. Returns 1 through 365 (366 in leap years) */
    getOrdinalNumber(): number;
    /** Get the timezone abbreviation of the current date. */
    getTimezone(): string;
    /** Get the offset from UTC of the current date. Returns the 4-character offset string prefixed with + or - (e.g. "-0500"). */
    getUTCOffset(): string;
    /** Get the week number. Week one (1) is the week which contains the first Thursday of the year. Monday is considered the first day of the week. */
    getWeek(): number;
    /** Get the ISO 8601 week number. Week one ("01") is the week which contains the first Thursday of the year. Monday is considered the first day of the week. */
    getISOWeek(): string;
    /** Moves the date to Monday of the week set. Week one (1) is the week which contains the first Thursday of the year. */
    setWeek(week: number): IDateJS;
    /** Indicates whether Daylight Saving Time is observed in the current time zone. */
    hasDaylightSavingTime(): boolean;
    /** Indicates whether this Date instance is within the Daylight Saving Time range for the current time zone. */
    isDaylightSavingTime(): boolean;
    /** Move to the next or previous dayOfWeek. Whether to move into the future (+1) or past(-1) is controlled by the optional direction parameter. */
    moveToDayOfWeek(dayOfWeek: number, direction: number): IDateJS;
    /** Moves the date to the first day of the month. */
    moveToFirstDayOfMonth(): IDateJS;
    /** Moves the date to the last day of the month. */
    moveToLastDayOfMonth(): IDateJS;
    /** Move to the next or previous month.Whether to move into the future(+1) or past(-1) is controlled by the optional direction parameter. */
    moveToMonth(month: number, direction: number): IDateJS;
    /** Moves the date to the next nth occurrence of the dayOfWeek starting from the beginning of the month. The number (-1) is a magic number and will return the last occurrence of the dayOfWeek in the month. */
    moveToNthOccurrence(dayOfWeek: number, occurrence: number): IDateJS;
    /** Set the value of year, month, day, hour, minute, second, millisecond of date instance using given configuration object. */
    set(config: IDateJSLiteral): IDateJS;
    /** Set the timezone for the current date using a culture - specific timezone abbreviation("PST").Note that in most JavaScript implementations, this will appear to change the time since the timezone is always based on the locale. */
    setTimezone(timezoneAbbreviation: string): IDateJS;
    /** Set the timezone for the current date using an offset(-0700).Note that in most JavaScript implementations, this will appear to change the time since the timezone is always based on the locale. */
    setTimezoneOffset(timezoneOffset: number): IDateJS;
    /** Converts the current date instance into a string with an ISO 8601 format.The date is converted to it's UTC value. As per the ISO 8601 specification, the string will be wrapped with double quotation marks ("). */
    toISOString(): string;
    /** Converts the value of the current Date object to its equivalent string representation.Use format argument to specify format(optional).See FormatSpecifiers for more info. */
    toString(format?: string): string;
}

