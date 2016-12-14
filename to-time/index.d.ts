// Type definitions for to-time v1.0.2
// Project: https://github.com/hafuta/to-time
// Definitions by: Matan Hafuta <https://github.com/hafuta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace toTime {

    export interface TimeFrame {
        /**
         * Get TimeFrame value in milliseconds 
         * @return {number} number of milliseconds
        */
        ms(): number;

        /**
         * Get TimeFrame value in seconds
         * @return {number} number of seconds
        */
        seconds(): number;

        /**
         * Get TimeFrame value in minutes
         * @return {number} number of minutes
        */
        minutes(): number;

        /**
         * Get TimeFrame value in hours
         * @return {number} number of hours
        */
        hours(): number;

        /**
         * Get TimeFrame value in days
         * @return {number} number of days
        */
        days(): number;

        /**
         * Get TimeFrame value in weeks
         * @return {number} number of weeks
        */
        weeks(): number;

        /**
         * Get TimeFrame value in years
         * @return {number} number of years
        */
        years(): number;

        /**
         * Append milliseconds to the TimeFrame value
         * @param {number} number of milliseconds
         * @return {TimeFrame} the instance
        */
        addMilliseconds(milliseconds: number): TimeFrame;

        /**
         * Append seconds to the TimeFrame value
         * @param {number} number of seconds
         * @return {TimeFrame} the instance
        */
        addSeconds(seconds: number): TimeFrame;

        /**
         * Append minutes to the TimeFrame value
         * @param {number} number of minutes
         * @return {TimeFrame} the instance
        */
        addMinutes(minutes: number): TimeFrame;

        /**
         * Append hours to the TimeFrame value
         * @param {number} number of hours
         * @return {TimeFrame} the instance
        */
        addHours(hours: number): TimeFrame;

        /**
         * Append days to the TimeFrame value
         * @param {number} number of days
         * @return {TimeFrame} the instance
        */
        addDays(days: number): TimeFrame;

        /**
         * Append weeks to the TimeFrame value
         * @param {number} number of weeks
         * @return {TimeFrame} the instance
        */
        addWeeks(weeks: number): TimeFrame;

        /**
         * Append years to the TimeFrame value
         * @param {number} number of years
         * @return {TimeFrame} the instance
        */
        addYears(years: number): TimeFrame;

        /**
         * Transforms the TimeFrame object into human readable string representation
         * e.g: `toTime('36930 hours').humanize()` would become "4 Years, 11 Weeks, 1 Day, 18 Hours"
         * @return {string} human readable string representation
        */
        humanize(): string;
    }

    export interface toTime {




        (data: string): TimeFrame;
        
        /**
         * Initialize a new TimeFrame object with milliseconds 
         * @return {TimeFrame} new TimeFrame instance
        */
        fromMilliseconds(milliseconds: number): TimeFrame;

        /**
         * Initialize a new TimeFrame object with seconds 
         * @return {TimeFrame} new TimeFrame instance
        */
        fromSeconds(seconds: number): TimeFrame;

        /**
         * Initialize a new TimeFrame object with minutes 
         * @return {TimeFrame} new TimeFrame instance
        */
        fromMinutes(minutes: number) : TimeFrame;

        /**
         * Initialize a new TimeFrame object with hours 
         * @return {TimeFrame} new TimeFrame instance
        */
        fromHours(hours: number) : TimeFrame;

        /**
         * Initialize a new TimeFrame object with days 
         * @return {TimeFrame} new TimeFrame instance
        */
        fromDays(days: number) : TimeFrame;

        /**
         * Initialize a new TimeFrame object with weeks 
         * @return {TimeFrame} new TimeFrame instance
        */
        fromWeeks(weeks: number) : TimeFrame;

        /**
         * Initialize a new TimeFrame object with years 
         * @return {TimeFrame} new TimeFrame instance
        */
        fromYears(years: number) : TimeFrame;
    }

}

declare module 'to-time' {
    var t : toTime.toTime;
    export = t;
}