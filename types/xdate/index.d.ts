// Type definitions for XDate 0.8
// Project: http://arshaw.com/xdate/
// Definitions by: yamada28go <https://github.com/yamada28go>
// Definitions: https://github.com/daptiv/DefinitelyTyped


interface formatters_info
{
    i?: string;
    u?: string;
    xxx? : string;
    vvv?: (xdate : XDate , useutc : boolean ) => string;
}

interface locale_detail
{
    monthNames? : string [];
    monthNamesShort?: string [];
    dayNames?: string[];
    dayNamesShort?: string [];
    amDesignator?: string;
    pmDesignator?: string;
}


declare class XDate {

    //------------
    //Constructors
    //------------

    public constructor();

    public constructor( utcmode : boolean );

    /**
     * constructor
     */
    public constructor(xdate : XDate ,  utcmode? : boolean ) ;

    /**
     * constructor
     * @param {Date} [nativeDate] - JavaScript native date
     */
    public constructor(nativeDate : Date ,  utcmode? : boolean ) ;

    /**
     * constructor
     * @param {number} [milliseconds] - milliseconds
     */
    public constructor(milliseconds: number ,  utcmode? : boolean ) ;

    /**
     * constructor
     * @param {number} [year] - year
     * @param {number} [month] - month
     * @param {number} [date] - date
     * @param {number} [hours] - hours
     * @param {number} [minutes] - minutes
     * @param {number} [seconds] - seconds
     * @param {number} [milliseconds] - milliseconds
     */
    public constructor( year : number , month : number , date : number ,
			hours? : number , minutes? : number , seconds? : number , milliseconds? : number , utcmode? : boolean );

    /**
     * constructor
     * @param {string} [dateString] - formatted date string
     */
    public constructor( dateString : string ,  utcmode? : boolean  );

    //------------
    //Getters
    //------------

    /**
     * Returns the 4-digit year (ex: 2012)
     * @return {number} 4-digit year (ex: 2012)
     */
    public getFullYear() : number ;

    /*
     *Returns the month of the year. (0-11)
     *Value is zero-index, meaning Jan=0, Feb=1, Mar=2, etc.
     */
    public getMonth() : number;

    /*
     *Returns the ISO week number of the year. (1-53)
     */
    public getWeek(): number;

    /*
     *Returns the date of the month. (1-31)
     */
    public getDate() : number;

    /*
     *Returns the day-of-week as a number. (0-6)
     *Sun=0, Mon=1, Tue=2, etc.
     */
    public getDay() : number;

    /*
     *Returns the hour of the day. (0-23)
     */
    public getHours() : number;

    /*
     *Returns the minute of the hour. (0-59)
     */
    public getMinutes() : number;

    /*
     *Returns the second of the minute. (0-59)
     */
    public getSeconds() : number;

    /*
     *Returns the millisecond of the second. (0-999)
     */
    public getMilliseconds() : number;

    /*
     *Returns the number of milliseconds since the epoch.
     */
    public getTime() : number;

    /*
     *Returns the number of milliseconds since the epoch. Identical to getTime.
     */
    public valueOf() : number;

    //------------
    //Setters
    //------------

    /*
     *year is a 4-digit year
     */
    public setFullYear(year : number , preventOverflow? : boolean) : XDate;

    /*
      month is zero-indexed, meaning Jan=0, Feb=1, Mar=2, etc.
    */
    public setMonth(month : number , preventOverflow? : boolean ) : XDate;

    /*
     *Moves the xdate to the Monday of the given week with time 00:00:00.
     *The week is represented by a given ISO week number and an optional year. If year is omitted, the xdate's year with be used.
     */
    public setWeek(week : number , year? :  number) : XDate;

    /*
     *Sets the date of the month. (1-31)
     */
    public setDate(date : number ) : XDate;

    /*
     *Sets the hour of the day. (0-23)
     */
    public setHours(hours: number ) :XDate;

    /*
     *Sets the minute of the hour. (0-59)
     */
    public setMinutes(minutes : number) : XDate;

    /*
     *Sets the second of the minute. (0-59)
     */
    public setSeconds(seconds : number) : XDate;

    /*
     *Sets the millisecond of the second. (0-999)
     */
    public setMilliseconds(milliseconds : number) : XDate;

    /*
     *Sets the number of milliseconds since the epoch.
     */
    public setTime(milliseconds : number ) : XDate;

    //------------
    //Adding
    //------------
    public addYears(years : number, preventOverflow? : boolean) : XDate;
    public addMonths(months : number , preventOverflow? : boolean) : XDate;
    public addWeeks(weeks : number) : XDate;
    public addDays(days : number) : XDate;
    public addHours(hours : number) : XDate;
    public addMinutes(minutes : number) : XDate;
    public addSeconds(seconds : number) : XDate;
    public addMilliseconds(milliseconds : number) :XDate;


    //------------
    //Diffing
    //------------
    public diffYears(otherDate : string) : number ;
    public diffYears(otherDate : XDate) : number ;
    public diffMonths(otherDate : string) : number ;
    public diffMonths(otherDate : XDate) : number ;
    public diffWeeks(otherDate : string) : number ;
    public diffWeeks(otherDate : XDate) : number ;
    public diffDays(otherDate : string) : number ;
    public diffDays(otherDate : XDate) : number ;
    public diffHours(otherDate : string) : number ;
    public diffHours(otherDate : XDate) : number ;
    public diffMinutes(otherDate : string) : number ;
    public diffMinutes(otherDate : XDate) : number ;
    public diffSeconds(otherDate : string) : number ;
    public diffSeconds(otherDate : XDate) : number ;
    public diffMilliseconds(otherDate : string) : number ;
    public diffMilliseconds(otherDate : XDate) : number ;


    //------------
    //Formatting
    //------------

    /*
     *If formatString is not specified, a browser-produced IETF string will be returned.
     * settings can be a name of an available locale or an object that overrides the default locale's settings.
     */
    public toString(formatString? : string , settings? : Object) : string;

    /*
     *Same as toString but gets its values from the UTC version of the date.
     *As a result, "Z" will be displayed as the timezone.
     */
    public toUTCString(formatString? : string , settings? : Object) : string;
    public toGMTString(formatString? : string , settings? : Object) : string;

    /*
     *Returns an ISO8601 string that has been normalized to UTC. Will have a "Z" timezone indicator.
     *See the native Date's specs for toISOString.
     */
    public toISOString() : string;

    /*
     *Same as native Date's toDateString
     */
    public toDateString() : string;

    /*
     *Same as native Date's toTimeString
     */
    public toTimeString() : string;

    /*
     *Same as native Date's toLocaleString
     */
    public toLocaleString() : string;

    /*
     *Same as native Date's toLocaleDateString
     */
    public toLocaleDateString() : string;

    /*
     *Same as native Date's toLocaleTimeString
     */
    public toLocaleTimeString() : string;


    //------------
    //Formatting
    //------------
    public getUTCFullYear() : number ;
    public getUTCMonth()  : number ;
    public getUTCWeek()  : number ;
    public getUTCDate()  : number ;
    public getUTCDay()  : number ;
    public getUTCHours()  : number ;
    public getUTCMinutes()  : number ;
    public getUTCSeconds()  : number ;
    public getUTCMilliseconds()  : number ;
    public setUTCFullYear(year : number) : XDate;
    public setUTCMonth(month : number)  : XDate;
    public setUTCWeek(week : number , year? : number )  : XDate;
    public setUTCDate(date : number )  : XDate;
    public setUTCHours(hours : number )  : XDate;
    public setUTCMinutes(minutes : number )  : XDate;
    public setUTCSeconds(seconds : number )  : XDate;
    public setUTCMilliseconds(milliseconds : number)  : XDate;

    //------------
    //UTC Mode
    //------------

    /*
     *Returns true if the date is in UTC-mode and false otherwise
     */
    public getUTCMode() : boolean;

    /*
     *utcMode must be either true or false. If the optional doCoercion parameters is set to true,
     *the underlying millisecond time of the date will be coerced in such a way that methods like
     *getDate and getHours will have the same values before and after the conversion.
     */
    public setUTCMode(utcMode : boolean , doCoercion? : boolean ) : XDate;

    /*
     *Returns the number of minutes from UTC, just like the native Date's getTimezoneOffset.
     *However, if the XDate is in UTC-mode, 0 will be returned.
     */
    public getTimezoneOffset() : number;

    //------------
    //Utilities
    //------------

    /*
     *returns a copy of the XDate
     */
    public clone() : XDate;

    /*
     *sets the hours, minutes, seconds, and milliseconds to zero
     */
    public clearTime() : XDate ;

    /*
     *return true if the XDate is a valid date, false otherwise
     */
    public valid() : boolean ;

    /*
     *Returns a conversion to a native Date
     */
    public toDate() : Date;

    //------------
    //Static function
    //------------


    /*
     *Returns the number of days in the given month
     */
    public static getDaysInMonth(year : number , month : number) : number;

    /*
     *Parses a date-string and returns milliseconds since the epoch. You'll probably want to use new XDate(dateString) instead.
     */
    public static parse(dateString : string ) : number;


    /*
     *Returns the current date, as milliseconds since the epoch. You'll probably want to use new XDate() instead.
     */
    public static now() : number ;


    /*
     *Returns the current date with time cleared, as an XDate object
     */
    public static today() : XDate ;

    /*
     *Returns a milliseconds time since the epoch for the given UTC date
     */
    public static UTC(year : number , month : number , date : number , hours : number,
		      minutes : number , seconds : number , milliseconds : number ) : XDate;

    public static locales : { [key: string]: locale_detail; };

    public static defaultLocale : string;
    public static formatters : formatters_info;

    public static getDaysInMonth(year : number, month : number) : number;
    public static UTC(year : number, month : number, day : number , hours? : number , minutes? : number , seconds?:number,ms?:number): number;

}

export = XDate;
export as namespace XDate;
