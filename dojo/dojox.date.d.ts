// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module dojox {
    
    module date {
        module timezone {
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/buddhist.html
         *
         * 
         */
        interface buddhist {
            /**
             * 
             */
            locale: Object;
            /**
             * Add to a Date in intervals of different size, from milliseconds to years
             * 
             * @param date Date object to start with             
             * @param interval A string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond", "week", "weekday"             
             * @param amount How much to add to the date.             
             */
            add(date: dojox.date.buddhist.Date, interval: String, amount: number): void;
            /**
             * Compare two buddhist date objects by date, time, or both.
             * 
             * @param date1             
             * @param date2             
             * @param portion               Optional            
             */
            compare(date1: dojox.date.buddhist.Date, date2: dojox.date.buddhist.Date, portion: String): void;
            /**
             * date2 - date1
             * 
             * @param date1             
             * @param date2               OptionalIf not specified, the current hebrew.Date is used.             
             * @param interval               OptionalA string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond",  "week", "weekday"Defaults to "day".             
             */
            difference(date1: dojox.date.hebrew.Date, date2: dojox.date.hebrew.Date, interval: String): void;
            /**
             * 
             * @param dateObject             
             */
            getDaysInMonth(dateObject: dojox.date.buddhist.Date): void;
            /**
             * 
             * @param dateObject             
             */
            isLeapYear(dateObject: dojox.date.buddhist.Date): void;
        }
        module buddhist {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/buddhist/Date.html
             *
             * 
             */
            class Date {
                constructor();
                /**
                 * This function sets this Date to the Hebrew Date corresponding to the Gregorian Date
                 * 
                 * @param gdate             
                 */
                fromGregorian(gdate: Date): Function;
                /**
                 * This function returns the date value (0 - 30)
                 * 
                 * @param isNumber               Optional            
                 */
                getDate(isNumber: boolean): any;
                /**
                 * This function return Week Day value ( 0 - 6 )
                 * 
                 */
                getDay(): any;
                /**
                 * This function return the Year value
                 * 
                 */
                getFullYear(): any;
                /**
                 * returns the Hour value
                 * 
                 */
                getHours(): any;
                /**
                 * returns the Milliseconds value
                 * 
                 */
                getMilliseconds(): any;
                /**
                 * returns the Minutes value
                 * 
                 */
                getMinutes(): any;
                /**
                 * This function return the month value ( 0 - 11 )
                 * 
                 */
                getMonth(): any;
                /**
                 * returns the Seconds value
                 * 
                 */
                getSeconds(): any;
                /**
                 * This function sets the Date
                 * 
                 * @param date             
                 */
                setDate(date: number): Function;
                /**
                 * This function set Year
                 * 
                 * @param year             
                 * @param month               Optional            
                 * @param date               Optional            
                 */
                setFullYear(year: number, month: number, date: number): void;
                /**
                 * set the Hours  0-23
                 * 
                 */
                setHours(): void;
                /**
                 * 
                 * @param milliseconds             
                 */
                setMilliseconds(milliseconds: number): Function;
                /**
                 * sets the minutes (0-59) only.
                 * 
                 * @param minutes             
                 */
                setMinutes(minutes: number): Function;
                /**
                 * This function set Month
                 * 
                 * @param month             
                 */
                setMonth(month: number): void;
                /**
                 * sets the seconds (0-59) only.
                 * 
                 * @param seconds             
                 */
                setSeconds(seconds: number): Function;
                /**
                 * This returns the equivalent Gregorian date value as a Date object
                 * 
                 */
                toGregorian(): any;
                /**
                 * This returns a string representation of the date in "dd, MM, YYYY HH:MM:SS" format
                 * 
                 */
                toString(): String;
                /**
                 * 
                 */
                valueOf(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/buddhist/locale.html
             *
             * 
             */
            interface locale {
                /**
                 * Add a reference to a bundle containing localized custom formats to be
                 * used by date/time formatting and parsing routines.
                 * 
                 * @param packageName             
                 * @param bundleName             
                 */
                addCustomFormats(packageName: String, bundleName: String): void;
                /**
                 * Format a Date object as a String, using  settings.
                 * 
                 * @param dateObject             
                 * @param options               Optional            
                 */
                format(dateObject: dojox.date.buddhist.Date, options: Object): void;
                /**
                 * Used to get localized strings from dojo.cldr for day or month names.
                 * 
                 * @param item             
                 * @param type             
                 * @param context               Optional            
                 * @param locale               Optional            
                 * @param date               Optional            
                 */
                getNames(item: String, type: String, context: String, locale: String, date: dojox.date.buddhist.Date): void;
                /**
                 * This function parses string date value according to options
                 * 
                 * @param value             
                 * @param options               Optional            
                 */
                parse(value: String, options: Object): void;
                /**
                 * Builds the regular needed to parse a buddhist.Date
                 * 
                 * @param options               Optional            
                 */
                regexp(options: Object): void;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/hebrew.html
         *
         * 
         */
        interface hebrew {
            /**
             * 
             */
            locale: Object;
            /**
             * 
             */
            numerals: Object;
            /**
             * Add to a Date in intervals of different size, from milliseconds to years
             * 
             * @param date Date object to start with             
             * @param interval A string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond", "week", "weekday"             
             * @param amount How much to add to the date.             
             */
            add(date: dojox.date.hebrew.Date, interval: String, amount: number): void;
            /**
             * Compare two hebrew date objects by date, time, or both.
             * Returns 0 if equal, positive if a > b, else negative.
             * 
             * @param dateheb1             
             * @param dateheb2             
             * @param portion               OptionalA string indicating the "date" or "time" portion of a Date object.Compares both "date" and "time" by default.  One of the following:"date", "time", "datetime"             
             */
            compare(dateheb1: dojox.date.hebrew.Date, dateheb2: dojox.date.hebrew.Date, portion: String): void;
            /**
             * date2 - date1
             * 
             * @param date1             
             * @param date2               OptionalIf not specified, the current dojox.date.hebrew.Date is used.             
             * @param interval               OptionalA string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond",  "week", "weekday"Defaults to "day".             
             */
            difference(date1: dojox.date.hebrew.Date, date2: dojox.date.hebrew.Date, interval: String): void;
            /**
             * 
             * @param month             
             */
            getDaysInMonth(month: dojox.date.hebrew.Date): void;
        }
        module hebrew {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/hebrew/Date.html
             *
             * A Date-like object which implements the Hebrew calendar
             * A Date-like object which implements the Hebrew Calendar.  Because this object
             * implements many of the same methods as the native JavaScript Date object, which
             * implements the Gregorian calendar, it can often be used its place.  Note that
             * this object does not extend Date or use its prototype.
             * 
             */
            class Date {
                constructor();
                /**
                 * This function sets this Date to the Hebrew Date corresponding to the Gregorian Date
                 * 
                 * @param gdate             
                 */
                fromGregorian(gdate: Date): Function;
                /**
                 * returns the date value (1 - 30)
                 * 
                 */
                getDate(): any;
                /**
                 * returns the date value as hebrew numerals for the Hebrew locale,
                 * a number for all others.
                 * 
                 * @param locale               Optional            
                 */
                getDateLocalized(locale: String): any;
                /**
                 * returns weekday value (0 - 6)
                 * 
                 */
                getDay(): number;
                /**
                 * returns the number of days in the given month and year
                 * 
                 * @param month             
                 * @param year             
                 */
                getDaysInHebrewMonth(month: number, year: number): any;
                /**
                 * returns the Year value
                 * 
                 */
                getFullYear(): any;
                /**
                 * returns the hour value
                 * 
                 */
                getHours(): any;
                /**
                 * returns the milliseconds value
                 * 
                 */
                getMilliseconds(): any;
                /**
                 * returns the minutes value
                 * 
                 */
                getMinutes(): any;
                /**
                 * returns the month value (0 - 12)
                 * the result is the index in the month array:
                 * 
                 * Tishri
                 * Heshvan
                 * Kislev
                 * Tevet
                 * Shevat
                 * Adar I (leap years only)
                 * Adar
                 * Nisan
                 * Iyar
                 * Sivan
                 * Tammuz
                 * Av
                 * Elul - 12
                 * For non leap years, for months after Shevat, the actual position of
                 * the month in the year (used for short format) is less than
                 * the "absolute" index by 1.
                 * 
                 */
                getMonth(): any;
                /**
                 * returns the seconds value
                 * 
                 */
                getSeconds(): any;
                /**
                 * Determines if the year (argument) is a leap year
                 * The Leap year contains additional month adar sheni
                 * 
                 * @param year             
                 */
                isLeapYear(year: number): boolean;
                /**
                 * sets the date number for a given month
                 * 
                 * @param date             
                 */
                setDate(date: number): Function;
                /**
                 * set the year
                 * 
                 * @param year             
                 * @param month               Optional            
                 * @param date               Optional            
                 */
                setFullYear(year: number, month: number, date: number): Function;
                /**
                 * sets the hour
                 * Sets the hour and optionally minutes, seconds, milliseconds also.
                 * 
                 */
                setHours(): Function;
                /**
                 * 
                 * @param milliseconds             
                 */
                setMilliseconds(milliseconds: number): Function;
                /**
                 * sets the minutes (0-59) only.
                 * 
                 * @param minutes             
                 */
                setMinutes(minutes: number): Function;
                /**
                 * sets the month.  You should use "absolute" index in the month array:
                 * 
                 * Tishri
                 * Heshvan
                 * Kislev
                 * Tevet
                 * Shevat
                 * Adar I (leap years only)
                 * Adar
                 * Nisan
                 * Iyar
                 * Sivan
                 * Tammuz
                 * Av
                 * Elul - 12
                 * For non leap years, for months after Shevat, the actual position of
                 * the month in the year (used for short format) is less than
                 * the "absolute" index by 1.
                 * 
                 * @param month             
                 */
                setMonth(month: number): Function;
                /**
                 * sets the seconds (0-59) only.
                 * 
                 * @param seconds             
                 */
                setSeconds(seconds: number): Function;
                /**
                 * returns the equivalent Gregorian date value as a native Date object
                 * 
                 */
                toGregorian(): any;
                /**
                 * returns a string representation of the date in "dd, MM, yyyy HH:mm:ss" format
                 * returns a string representation of the date in "dd, MM, yyyy HH:mm:ss" format (all numeric)
                 * For user presentation, use dojox.date.hebrew.locale.format which will present in the appropriate language
                 * and format.  toString() language- and culturally-specific conventions to keep this module free of
                 * dependencies on dojox.date.locale and dojo.cldr.
                 * 
                 */
                toString(): String;
                /**
                 * 
                 */
                valueOf(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/hebrew/locale.html
             *
             * 
             */
            interface locale {
                /**
                 * Add a reference to a bundle containing localized custom formats to be
                 * used by date/time formatting and parsing routines.
                 * The user may add custom localized formats where the bundle has properties following the
                 * same naming convention used by dojo.cldr: dateFormat-xxxx / timeFormat-xxxx
                 * The pattern string should match the format used by the CLDR.
                 * See dojo.date.locale.format() for details.
                 * The resources must be loaded by dojo.requireLocalization() prior to use
                 * 
                 * @param packageName             
                 * @param bundleName             
                 */
                addCustomFormats(packageName: String, bundleName: String): void;
                /**
                 * Format a Date object as a String, using  settings.
                 * Create a string from a hebrew.Date object using a known pattern.
                 * By default, this method formats both date and time from dateObject.
                 * Default formatting lengths is 'short'
                 * 
                 * @param dateObject the date and/or time to be formatted.  If a time only is formatted,the values in the year, month, and day fields are irrelevant.  Theopposite is true when formatting only dates.             
                 * @param options               Optional            
                 */
                format(dateObject: dojox.date.hebrew, options: Object): void;
                /**
                 * Used to get localized strings from dojo.cldr for day or month names.
                 * 
                 * @param item 'months' || 'days'             
                 * @param type 'wide' || 'narrow' || 'abbr' (e.g. "Monday", "Mon", or "M" respectively, in English)             
                 * @param context               Optional            
                 * @param locale               Optionaloverride locale used to find the names             
                 * @param date               Optionalrequired for item=months to determine leap month name             
                 */
                getNames(item: String, type: String, context: String, locale: String, date: dojox.date.hebrew.Date): void;
                /**
                 * This function parse string date value according to options
                 * 
                 * @param value             
                 * @param options               Optional            
                 */
                parse(value: String, options: Object): void;
                /**
                 * Builds the regular needed to parse a hebrew.Date
                 * 
                 * @param options               Optional            
                 */
                regexp(options: Object): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/hebrew/numerals.html
             *
             * 
             */
            interface numerals {
                /**
                 * converts an integer to a String representing the number in Hebrew numerals.
                 * Can be formatted with or without geresh ×³
                 * 
                 * @param day             
                 * @param nogrsh               Optional            
                 */
                getDayHebrewLetters(day: any, nogrsh: boolean): void;
                /**
                 * converts an integer representing a  month to a String written in Hebrew numerals
                 * 
                 * @param month             
                 */
                getMonthHebrewLetters(month: number): void;
                /**
                 * converts the year from an integer to Hebrew numerals.
                 * 
                 * @param year             
                 */
                getYearHebrewLetters(year: number): void;
                /**
                 * converts the string containing a Hebrew numeral to an integer
                 * 
                 * @param day             
                 */
                parseDayHebrewLetters(day: String): void;
                /**
                 * converts a Hebrew numeral string representing
                 * a month to an integer.  The returned value
                 * is indexed in the month name array.  To use it for
                 * setMonth, do correction for leap year
                 * 
                 * @param monthStr             
                 */
                parseMonthHebrewLetters(monthStr: String): void;
                /**
                 * converts the year written in Hebrew numerals to an integer
                 * 
                 * @param year             
                 */
                parseYearHebrewLetters(year: String): void;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/islamic.html
         *
         * 
         */
        interface islamic {
            /**
             * 
             */
            locale: Object;
            /**
             * Add to a Date in intervals of different size, from milliseconds to years
             * 
             * @param date Date object to start with             
             * @param interval A string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond", "week", "weekday"             
             * @param amount How much to add to the date.             
             */
            add(date: dojox.date.islamic.Date, interval: String, amount: number): void;
            /**
             * Compare two islamic date objects by date, time, or both.
             * Returns 0 if equal, positive if a > b, else negative.
             * 
             * @param date1             
             * @param date2 If not specified, the current islamic.Date is used.             
             * @param portion               OptionalA string indicating the "date" or "time" portion of a Date object.Compares both "date" and "time" by default.  One of the following:"date", "time", "datetime"             
             */
            compare(date1: dojox.date.islamic.Date, date2: dojox.date.islamic.Date, portion: String): void;
            /**
             * date2 - date1
             * 
             * @param date1             
             * @param date2               OptionalIf not specified, the current dojox.date.islamic.Date is used.             
             * @param interval               OptionalA string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond",  "week", "weekday"Defaults to "day".             
             */
            difference(date1: dojox.date.islamic.Date, date2: dojox.date.islamic.Date, interval: String): void;
            /**
             * 
             * @param month             
             */
            getDaysInMonth(month: dojox.date.islamic.Date): void;
        }
        module islamic {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/islamic/Date.html
             *
             * The component defines the Islamic (Hijri) Calendar Object
             * This module is similar to the Date() object provided by JavaScript
             * 
             */
            class Date {
                constructor();
                /**
                 * This function returns the equivalent Islamic Date value for the Gregorian Date
                 * 
                 * @param gdate             
                 */
                fromGregorian(gdate: Date): Function;
                /**
                 * This function returns the date value (1 - 30)
                 * 
                 */
                getDate(): any;
                /**
                 * This function return Week Day value ( 0 - 6 )
                 * 
                 */
                getDay(): any;
                /**
                 * returns the number of days in the given Islamic Month
                 * 
                 * @param month             
                 * @param year             
                 */
                getDaysInIslamicMonth(month: number, year: number): number;
                /**
                 * 
                 * @param month             
                 */
                getDaysInIslamicMonth(month: dojox.date.islamic.Date): void;
                /**
                 * This function return the Year value
                 * 
                 */
                getFullYear(): any;
                /**
                 * returns the Hour value
                 * 
                 */
                getHours(): any;
                /**
                 * returns the Milliseconds value
                 * 
                 */
                getMilliseconds(): any;
                /**
                 * returns the Minutes value
                 * 
                 */
                getMinutes(): any;
                /**
                 * This function return the month value ( 0 - 11 )
                 * 
                 */
                getMonth(): any;
                /**
                 * returns the seconds value
                 * 
                 */
                getSeconds(): any;
                /**
                 * This function sets the Date
                 * 
                 * @param date             
                 */
                setDate(date: number): Function;
                /**
                 * This function set Year
                 * 
                 * @param year             
                 */
                setFullYear(year: number): void;
                /**
                 * set the Hours
                 * 
                 */
                setHours(): void;
                /**
                 * 
                 * @param milliseconds             
                 */
                setMilliseconds(milliseconds: number): Function;
                /**
                 * sets the minutes (0-59) only.
                 * 
                 * @param minutes             
                 */
                setMinutes(minutes: number): Function;
                /**
                 * This function set Month
                 * 
                 * @param month             
                 */
                setMonth(month: number): void;
                /**
                 * sets the seconds (0-59) only.
                 * 
                 * @param seconds             
                 */
                setSeconds(seconds: number): Function;
                /**
                 * This returns the equevalent Grogorian date value in Date object
                 * 
                 */
                toGregorian(): any;
                /**
                 * This returns a string representation of the date in "DDDD MMMM DD YYYY HH:MM:SS" format
                 * 
                 */
                toString(): String;
                /**
                 * This function returns The stored time value in milliseconds
                 * since midnight, January 1, 1970 UTC
                 * 
                 */
                valueOf(): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/islamic/locale.html
             *
             * 
             */
            interface locale {
                /**
                 * 
                 */
                months: Object;
                /**
                 * 
                 */
                weekDays: Object;
                /**
                 * Add a reference to a bundle containing localized custom formats to be
                 * used by date/time formatting and parsing routines.
                 * 
                 * @param packageName             
                 * @param bundleName             
                 */
                addCustomFormats(packageName: String, bundleName: String): void;
                /**
                 * Format a Date object as a String, using  settings.
                 * 
                 * @param dateObject             
                 * @param options               Optional            
                 */
                format(dateObject: dojox.date.islamic.Date, options: Object): void;
                /**
                 * Used to get localized strings from dojo.cldr for day or month names.
                 * 
                 * @param item             
                 * @param type             
                 * @param context               Optional            
                 * @param locale               Optional            
                 * @param date               Optional            
                 */
                getNames(item: String, type: String, context: String, locale: String, date: dojox.date.islamic.Date): any;
                /**
                 * This function parse string date value according to options
                 * 
                 * @param value             
                 * @param options               Optional            
                 */
                parse(value: String, options: Object): void;
                /**
                 * Builds the regular needed to parse a islamic.Date
                 * 
                 * @param options               Optional            
                 */
                regexp(options: Object): void;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/persian.html
         *
         * 
         */
        interface persian {
            /**
             * 
             */
            locale: Object;
            /**
             * Add to a Date in intervals of different size, from milliseconds to years
             * 
             * @param date Date object to start with             
             * @param interval A string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond", "week", "weekday"             
             * @param amount How much to add to the date.             
             */
            add(date: dojox.date.persian.Date, interval: String, amount: number): void;
            /**
             * Compare two persian date objects by date, time, or both.
             * Returns 0 if equal, positive if a > b, else negative.
             * 
             * @param date1             
             * @param date2 If not specified, the current persian.Date is used.             
             * @param portion               OptionalA string indicating the "date" or "time" portion of a Date object.Compares both "date" and "time" by default.  One of the following:"date", "time", "datetime"             
             */
            compare(date1: dojox.date.persian.Date, date2: dojox.date.persian.Date, portion: String): void;
            /**
             * date2 - date1
             * 
             * @param date1             
             * @param date2               OptionalIf not specified, the current dojox.date.persian.Date is used.             
             * @param interval               OptionalA string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond",  "week", "weekday"Defaults to "day".             
             */
            difference(date1: dojox.date.persian.Date, date2: dojox.date.persian.Date, interval: String): void;
            /**
             * 
             * @param month             
             */
            getDaysInMonth(month: dojox.date.persian.Date): void;
        }
        module persian {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/persian/Date.html
             *
             * The component defines the Persian (Hijri) Calendar Object
             * This module is similar to the Date() object provided by JavaScript
             * 
             */
            class Date {
                constructor();
                /**
                 * 
                 */
                "daysInMonth": any[];
                /**
                 * 
                 * @param year             
                 * @param month             
                 * @param day             
                 */
                calcGregorian(year: any, month: any, day: any): any;
                /**
                 * This function returns the equivalent Persian Date value for the Gregorian Date
                 * 
                 * @param gdate             
                 */
                fromGregorian(gdate: Date): Function;
                /**
                 * This function returns the date value (1 - 30)
                 * 
                 */
                getDate(): any;
                /**
                 * This function return Week Day value ( 0 - 6 )
                 * 
                 */
                getDay(): any;
                /**
                 * returns the number of days in the given Persian Month
                 * 
                 * @param month             
                 * @param year             
                 */
                getDaysInPersianMonth(month: number, year: number): any;
                /**
                 * 
                 * @param month             
                 */
                getDaysInPersianMonth(month: dojox.date.persian.Date): void;
                /**
                 * This function return the Year value
                 * 
                 */
                getFullYear(): any;
                /**
                 * returns the Hour value
                 * 
                 */
                getHours(): any;
                /**
                 * returns the Milliseconds value
                 * 
                 */
                getMilliseconds(): any;
                /**
                 * returns the Minutes value
                 * 
                 */
                getMinutes(): any;
                /**
                 * This function return the month value ( 0 - 11 )
                 * 
                 */
                getMonth(): any;
                /**
                 * returns the seconds value
                 * 
                 */
                getSeconds(): any;
                /**
                 * 
                 * @param year             
                 * @param month             
                 * @param day             
                 */
                gregorian_to_jd(year: any, month: any, day: any): number;
                /**
                 * return Boolean value if Persian leap year
                 * 
                 * @param j_y             
                 * @param j_m             
                 * @param j_d             
                 */
                isLeapYear(j_y: any, j_m: any, j_d: any): boolean;
                /**
                 * 
                 * @param jd             
                 * @param jmonth             
                 */
                jd_to_gregorian(jd: any, jmonth: any): any;
                /**
                 * 
                 * @param jd             
                 */
                jd_to_persian(jd: any): any;
                /**
                 * 
                 * @param j             
                 */
                jwday(j: any): any;
                /**
                 * 
                 * @param year             
                 */
                leap_gregorian(year: any): boolean;
                /**
                 * 
                 * @param year             
                 * @param month             
                 * @param day             
                 */
                persian_to_jd(year: any, month: any, day: any): number;
                /**
                 * This function sets the Date
                 * 
                 * @param date             
                 */
                setDate(date: number): Function;
                /**
                 * This function set Year
                 * 
                 * @param year             
                 */
                setFullYear(year: number): void;
                /**
                 * set the Hours
                 * 
                 */
                setHours(): void;
                /**
                 * 
                 * @param milliseconds             
                 */
                setMilliseconds(milliseconds: number): Function;
                /**
                 * sets the minutes (0-59) only.
                 * 
                 * @param minutes             
                 */
                setMinutes(minutes: number): Function;
                /**
                 * This function set Month
                 * 
                 * @param month             
                 */
                setMonth(month: number): void;
                /**
                 * sets the seconds (0-59) only.
                 * 
                 * @param seconds             
                 */
                setSeconds(seconds: number): Function;
                /**
                 * This returns the equevalent Grogorian date value in Date object
                 * 
                 */
                toGregorian(): any;
                /**
                 * This returns a string representation of the date in "DDDD MMMM DD YYYY HH:MM:SS" format
                 * 
                 */
                toString(): String;
                /**
                 * This function returns The stored time value in milliseconds
                 * since midnight, January 1, 1970 UTC
                 * 
                 */
                valueOf(): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/persian/locale.html
             *
             * 
             */
            interface locale {
                /**
                 * 
                 */
                months: Object;
                /**
                 * 
                 */
                weekDays: Object;
                /**
                 * Add a reference to a bundle containing localized custom formats to be
                 * used by date/time formatting and parsing routines.
                 * 
                 * @param packageName             
                 * @param bundleName             
                 */
                addCustomFormats(packageName: String, bundleName: String): void;
                /**
                 * Format a Date object as a String, using  settings.
                 * 
                 * @param dateObject             
                 * @param options               Optional            
                 */
                format(dateObject: dojox.date.persian.Date, options: Object): void;
                /**
                 * Used to get localized strings from dojo.cldr for day or month names.
                 * 
                 * @param item             
                 * @param type             
                 * @param context               Optional            
                 * @param locale               Optional            
                 * @param date               Optional            
                 */
                getNames(item: String, type: String, context: String, locale: String, date: dojox.date.persian.Date): any;
                /**
                 * This function parse string date value according to options
                 * 
                 * @param value             
                 * @param options               Optional            
                 */
                parse(value: String, options: Object): void;
                /**
                 * Builds the regular needed to parse a persian.Date
                 * 
                 * @param options               Optional            
                 */
                regexp(options: Object): void;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/umalqura.html
         *
         * 
         */
        interface umalqura {
            /**
             * 
             */
            locale: Object;
            /**
             * Add to a Date in intervals of different size, from milliseconds to years
             * 
             * @param date Date object to start with             
             * @param interval A string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond", "week", "weekday"             
             * @param amount How much to add to the date.             
             */
            add(date: dojox.date.umalqura.Date, interval: String, amount: number): void;
            /**
             * Compare two umalqura date objects by date, time, or both.
             * Returns 0 if equal, positive if a > b, else negative.
             * 
             * @param date1             
             * @param date2 If not specified, the current umalqura.Date is used.             
             * @param portion               OptionalA string indicating the "date" or "time" portion of a Date object.Compares both "date" and "time" by default.  One of the following:"date", "time", "datetime"             
             */
            compare(date1: dojox.date.umalqura.Date, date2: dojox.date.umalqura.Date, portion: String): void;
            /**
             * date2 - date1
             * 
             * @param date1             
             * @param date2               OptionalIf not specified, the current dojox.date.umalqura.Date is used.             
             * @param interval               OptionalA string representing the interval.  One of the following:"year", "month", "day", "hour", "minute", "second","millisecond",  "week", "weekday"Defaults to "day".             
             */
            difference(date1: dojox.date.umalqura.Date, date2: dojox.date.umalqura.Date, interval: String): void;
            /**
             * 
             * @param month             
             */
            getDaysInMonth(month: dojox.date.umalqura.Date): void;
        }
        module umalqura {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/umalqura/Date.html
             *
             * The component defines the UmAlqura (Hijri) Calendar Object according to Umalqura calculations
             * This module is similar to the Date() object provided by JavaScript
             * 
             */
            class Date {
                constructor();
                /**
                 * This function returns the equivalent UmAlqura Date value for the Gregorian Date
                 * 
                 * @param gdate             
                 */
                fromGregorian(gdate: Date): Function;
                /**
                 * This function returns the date value (1 - 30)
                 * 
                 */
                getDate(): any;
                /**
                 * This function returns the week day value ( 0 - 6 )
                 * sunday is 0, monday is 1,...etc
                 * 
                 */
                getDay(): any;
                /**
                 * returns the number of days in the given Islamic month
                 * 
                 * @param month             
                 * @param year             
                 */
                getDaysInIslamicMonth(month: number, year: number): any;
                /**
                 * 
                 * @param month             
                 */
                getDaysInIslamicMonth(month: dojox.date.umalqura.Date): void;
                /**
                 * This function return the year value
                 * 
                 */
                getFullYear(): any;
                /**
                 * returns the hour value
                 * 
                 */
                getHours(): any;
                /**
                 * returns the milliseconds value
                 * 
                 */
                getMilliseconds(): any;
                /**
                 * returns the minutes value
                 * 
                 */
                getMinutes(): any;
                /**
                 * This function return the month value ( 0 - 11 )
                 * 
                 */
                getMonth(): any;
                /**
                 * returns the seconds value
                 * 
                 */
                getSeconds(): any;
                /**
                 * This function sets the date
                 * 
                 * @param date             
                 */
                setDate(date: number): Function;
                /**
                 * This function set Year
                 * 
                 * @param year             
                 */
                setFullYear(year: number): void;
                /**
                 * set the hours
                 * 
                 */
                setHours(): void;
                /**
                 * set the milliseconds
                 * 
                 * @param milliseconds             
                 */
                setMilliseconds(milliseconds: number): void;
                /**
                 * set the minutes
                 * 
                 * @param minutes             
                 */
                setMinutes(minutes: number): void;
                /**
                 * This function sets the month
                 * 
                 * @param month             
                 */
                setMonth(month: number): void;
                /**
                 * set seconds
                 * 
                 * @param seconds             
                 */
                setSeconds(seconds: number): void;
                /**
                 * This returns the equivalent gregorian date value in Date object
                 * 
                 */
                toGregorian(): any;
                /**
                 * This returns a string representation of the date in "DDDD MMMM DD YYYY HH:MM:SS" format
                 * 
                 */
                toString(): String;
                /**
                 * This function returns the stored time value in milliseconds
                 * since midnight, January 1, 1970 UTC
                 * 
                 */
                valueOf(): any;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/umalqura/locale.html
             *
             * 
             */
            interface locale {
                /**
                 * 
                 */
                months: Object;
                /**
                 * 
                 */
                weekDays: Object;
                /**
                 * Add a reference to a bundle containing localized custom formats to be
                 * used by date/time formatting and parsing routines.
                 * 
                 * @param packageName             
                 * @param bundleName             
                 */
                addCustomFormats(packageName: String, bundleName: String): void;
                /**
                 * Format a Date object as a String, using  settings.
                 * 
                 * @param dateObject             
                 * @param options               Optional            
                 */
                format(dateObject: dojox.date.umalqura.Date, options: Object): void;
                /**
                 * Used to get localized strings from dojo.cldr for day or month names.
                 * 
                 * @param item             
                 * @param type             
                 * @param context               Optional            
                 * @param locale               Optional            
                 * @param date               Optional            
                 */
                getNames(item: String, type: String, context: String, locale: String, date: dojox.date.umalqura.Date): any;
                /**
                 * This function parse string date value according to options
                 * 
                 * @param value             
                 * @param options               Optional            
                 */
                parse(value: String, options: Object): void;
                /**
                 * Builds the regular needed to parse a umalqura.Date
                 * 
                 * @param options               Optional            
                 */
                regexp(options: Object): void;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/php.html
         *
         * 
         */
        interface php {
            /**
             * Format the internal date object
             * 
             * @param format             
             */
            DateFormat(format: String): void;
            /**
             * Get a formatted string for a given date object
             * 
             * @param date             
             * @param format             
             */
            format(date: Date, format: String): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/relative.html
         *
         * 
         */
        interface relative {
            /**
             * Format a Date object as a String, using locale-specific settings,
             * relative to the current date or some other date.
             * Create a string from a Date object using the most significant information
             * and a known localized pattern.  This method formats both the date and
             * time from dateObject.  Formatting patterns are chosen appropriate to
             * the locale.
             * 
             * If the day portion of the date falls within the current date (or the
             * relativeDate option, if present), then the time will be all that
             * is displayed
             * 
             * If the day portion of the date falls within the past week (or the
             * week preceeding relativeDate, if present), then the display will show
             * day of week and time.  This functionality can be turned off by setting
             * weekCheck to false.
             * 
             * If the year portion of the date falls within the current year (or the
             * year portion of relativeDate, if present), then the display will show
             * month and day.
             * 
             * Otherwise, this function is equivalent to calling dojo.date.format with
             * formatLength of "medium"
             * 
             * @param dateObject the date and time to be formatted.             
             * @param options               OptionalAn object with the following properties:locale (String): override the locale used to determine formatting rulesrelativeDate (Date): Date to calculate relation to (defaults to new Date())weekCheck (boolean): Whether or not to display the day of week (defaults true)            
             */
            format(dateObject: Date, options: Object): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/date/posix.html
         *
         * 
         */
        interface posix {
            /**
             * Get the ISO8601 week number of the given date.
             * The week containing January 4th is the first week of the year.
             * See http://en.wikipedia.org/wiki/ISO_week_date
             * 
             * @param dateObject             
             */
            getIsoWeekOfYear(dateObject: Date): void;
            /**
             * Determine the number of ISO8601 weeks in the year of the given
             * date. Most years have 52 but some have 53.
             * See http://www.phys.uu.nl/~vgent/calendar/isocalendar_text3.htm
             * 
             * @param dateObject             
             */
            getIsoWeeksInYear(dateObject: Date): void;
            /**
             * Return a date object representing the first day of the given
             * date's week.
             * 
             * @param dateObject             
             * @param firstDay             
             */
            getStartOfWeek(dateObject: Date, firstDay: number): void;
            /**
             * Set the ISO8601 week number of the given date.
             * The week containing January 4th is the first week of the year.
             * 
             * @param dateObject             
             * @param week can be positive or negative: -1 is the year's last week.             
             */
            setIsoWeekOfYear(dateObject: Date, week: number): void;
            /**
             * 
             * @param dateObject             
             * @param format             
             * @param locale               Optional            
             */
            strftime(dateObject: Date, format: String, locale: String): void;
        }
    }

}