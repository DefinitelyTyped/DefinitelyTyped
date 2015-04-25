// Type definitions for LaterJS
// Project: http://bunkat.github.io/later/
// Definitions by: Jason D Dryhurst-Smith <http://jasonds.co.uk/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Later {

    export interface IScheduleData {

        /** 
         * A list of recurrence information as a composite schedule.
         */
        schedules: IRecurrence[];

        /** 
         * A list of exceptions to the composite recurrence information.
         */
        exceptions: IRecurrence[];

        /** 
         * A code to identify any errors in the composite schedule and exceptions.
         * The number tells you the position of the error within the schedule.
         */
        error: number;
    }

    export interface IRecurrence {

        /** Time in seconds from midnight.
         */
        t?: number[];
        /** Seconds in minute.
         */
        s?: number[];
        /** Minutes in hour.
         */
        m?: number[];
        /** Hour in day.
         */
        h?: number[];
        /** Day of the month.
         */
        D?: number[];
        /** Day in week.
         */
        dw?: number[];
        /** Nth day of the week in month.
         */
        dc?: number[];
        /** Day in year.
         */
        dy?: number[];
        /** Week in month.
         */
        wm?: number[];
        /** ISO week in year.
         */
        wy?: number[];
        /** Month in year.
         */
        M?: number[];
        /** Year.
         */
        Y?: number[];

        /** After modifiers.
         */
        t_a?: number[];
        /** After modifiers.
         */
        s_a?: number[];
        /** After modifiers.
         */
        m_a?: number[];
        /** After modifiers.
         */
        h_a?: number[];
        /** After modifiers.
         */
        D_a?: number[];
        /** After modifiers.
         */
        dw_a?: number[];
        /** After modifiers.
         */
        dc_a?: number[];
        /** After modifiers.
         */
        dy_a?: number[];
        /** After modifiers.
         */
        wm_a?: number[];
        /** After modifiers.
         */
        wy_a?: number[];
        /** After modifiers.
         */
        M_a?: number[];
        /** After modifiers.
         */
        Y_a?: number[];

        /** Before modifiers.
         */
        t_b?: number[];
        /** Before modifiers.
         */
        s_b?: number[];
        /** Before modifiers.
         */
        m_b?: number[];
        /** Before modifiers.
         */
        h_b?: number[];
        /** Before modifiers.
         */
        D_b?: number[];
        /** Before modifiers.
         */
        dw_b?: number[];
        /** Before modifiers.
         */
        dc_b?: number[];
        /** Before modifiers.
         */
        dy_b?: number[];
        /** Before modifiers.
         */
        wm_b?: number[];
        /** Before modifiers.
         */
        wy_b?: number[];
        /** Before modifiers.
         */
        M_b?: number[];
        /** Before modifiers.
         */
        Y_b?: number[];
        
        /*
         * Custom Time Periods and Modifiers
         * For acces to custom time periods created as extension to the later static type
         * and modifiers created on the later modifier static type.
         */
        [ timeperiodAndModifierName: string ]: number[]; 
    }
    
    export interface IParseStatic {

        /** 
         * Create a recurrence builder for building schedule data.
         */
        recur(): IRecurrenceBuilder;

        /** 
         * Create schedule data by parsing a cron string
         *
         * @param {string} [input] - A string value to parse.
         */
        cron(input?: string): IScheduleData;

        /** 
         * Create schedule data by paring a human readable string.
         *
         * @param {string} [input] - A string value to parse.
         */
        text(input?: string): IScheduleData;
    }

    export interface ITimer {

        /** 
         * Clear the timer and end execution.
         */
        clear(): void;
    }

    export interface ISchedule {

        /**
        * Finds the next valid instance or instances of the current schedule,
        * optionally between a specified start and end date. Start date is
        * Date.now() by default, end date is unspecified. Start date must be
        * smaller than end date.
        *
        * @param {number} numberOfInst: The number of instances to return
        * @param {Date} dateFrom: The earliest a valid instance can occur
        * @param {Date} dateTo: The latest a valid instance can occur
        */
        next(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[];

        /**
        * Finds the next valid range or ranges of the current schedule,
        * optionally between a specified start and end date. Start date is
        * Date.now() by default, end date is unspecified. Start date must be
        * greater than end date.
        *
        * @param {number} numberOfInst: The number of ranges to return
        * @param {Date} dateFrom: The earliest a valid range can occur
        * @param {Date} dateTo: The latest a valid range can occur
        */
        nextRange(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[];

        /**
        * Finds the previous valid instance or instances of the current schedule,
        * optionally between a specified start and end date. Start date is
        * Date.now() by default, end date is unspecified. Start date must be
        * greater than end date.
        *
        * @param {number} numberOfInst: The number of instances to return
        * @param {Date} dateFrom: The earliest a valid instance can occur
        * @param {Date} dateTo: The latest a valid instance can occur
        */
        prev(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[];

        /**
        * Finds the previous valid range or ranges of the current schedule,
        * optionally between a specified start and end date. Start date is
        * Date.now() by default, end date is unspecified. Start date must be
        * greater than end date.
        *
        * @param {number} numberOfInst: The number of ranges to return
        * @param {Date} dateFrom: The earliest a valid range can occur
        * @param {Date} dateTo: The latest a valid range can occur
        */
        prevRange(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[];
    }

    export interface IRecurrenceBuilder extends IScheduleData {

        /** a time period
         */
        second(): IRecurrenceBuilder;
        /** a time period
         */
        minute(): IRecurrenceBuilder;
        /** a time period
         */
        hour(): IRecurrenceBuilder;
        /** a time period
         */
        time(): IRecurrenceBuilder;
        /** a time period
         */
        dayOfWeek(): IRecurrenceBuilder;
        /** a time period
         */
        dayOfWeekCount(): IRecurrenceBuilder;
        /** a time period
         */
        dayOfMonth(): IRecurrenceBuilder;
        /** a time period
         */
        dayOfYear(): IRecurrenceBuilder;
        /** a time period
         */
        weekOfMonth(): IRecurrenceBuilder;
        /** a time period
         */
        weekOfYear(): IRecurrenceBuilder;
        /** a time period
         */
        month(): IRecurrenceBuilder;
        /** a time period
         */
        year(): IRecurrenceBuilder;
        
        /** a time period
         */
        fullDate(): IRecurrenceBuilder;

        /** 
         * Specifies one or more specific vals of a time period information provider. 
         * When used to specify a time, a string indicating the 24-hour time may be used.
         * 
         * @param {number[]} values - A list of values.
         */
        on(...values: number[]): IRecurrenceBuilder;
        /** 
         * Specifies one or more specific vals of a time period information provider. 
         * When used to specify a time, a string indicating the 24-hour time may be used.
         * 
         * @param {string} value - A string representing your value.
         */
        on(value: string): IRecurrenceBuilder;
        /** 
         * Specifies one or more specific vals of a time period information provider. 
         * When used to specify a time, a string indicating the 24-hour time may be used.
         * 
         * @param {Date} date - A Date representing your value.
         */
        on(date: Date): IRecurrenceBuilder;

        /** 
         * Preceed a time period. 
         *
         * @param {number} [value] - A number representing your value.
         */ 
        every(value?: number): IRecurrenceBuilder;
        /** 
         * Preceed a time period. 
         *
         * @param {string} [value] - A string representing your value.
         */ 
        every(value?: string): IRecurrenceBuilder;

        /** 
         * Preceed a time period. 
         *
         * @param {number} start - A number representing your start value.
         * @param {number} end - A number representing your end value.
         */
        between(start: number, end: number): IRecurrenceBuilder;
        /** 
         * Preceed a time period. 
         *
         * @param {string} start - A string representing your start value.
         * @param {string} end - A string representing your end value.
         */
        between(start: string, end: string): IRecurrenceBuilder;

        /** 
         * After a time period. 
         *
         * @param {number} value - A number representing your value.
         */ 
        after(value: number): IRecurrenceBuilder;
        /** 
         * After a time period. 
         *
         * @param {string} value - A string representing your value.
         */ 
        after(value: string): IRecurrenceBuilder;
        
        /** 
         * After a time period. 
         *
         * @param {number} value - A number representing your value.
         */ 
        before(value: number): IRecurrenceBuilder;
        /** 
         * After a time period. 
         *
         * @param {string} value - A string representing your value.
         */ 
        before(value: string): IRecurrenceBuilder;
        
        /** 
         * After a time period. 
         *
         * @param {number} value - A number representing your value.
         */ 
        startingOn(value: number): IRecurrenceBuilder;
        /** 
         * After a time period. 
         *
         * @param {string} value - A string representing your value.
         */  
        startingOn(value: string): IRecurrenceBuilder;

        /** 
         * Equivalent to .on(min)
         */
        first(): IRecurrenceBuilder;

        /** 
         * Equivalent to .on(max)
         */
        last(): IRecurrenceBuilder;

        /** 
         * Equivalent to .on(1,7).dayOfWeek()
         */
        onWeekend(): IRecurrenceBuilder;

        /** 
         * Equivalent to .on(2,3,4,5,6).dayOfWeek()
         */
        onWeekday(): IRecurrenceBuilder;

        /** 
         * Add a new schedule value to schedules, composite schedule.
         */
        and(): IRecurrenceBuilder;

        /** 
         * Add exceptions.
         */
        except(): IRecurrenceBuilder;

        /** 
         * Custom Timeperiod Recurrences.
         * Using a key as defined by the custom period in any extension to Later.IStatic.
         */
        customPeriod(key: string): IRecurrenceBuilder;

        /** 
         * Customise Recurrences.
         * Using a key as defined by the custom modifier in any extension to Later.IModifierStatic.
         */
        customModifier(key: string, values: number): IRecurrenceBuilder;
    }

    export interface IDateProvider {

        /** 
         * Set later to use UTC time. 
         */
        UTC(): void;

        /** 
         * Set later to use local time.
         */
        localTime(): void;

        /**
         * Builds and returns a new Date using the specified values.  Date
         * returned is either using Local time or UTC based on isLocal.
         *
         * @param {number} [Y]: Four digit year
         * @param {number} [M]: Month between 1 and 12, defaults to 1
         * @param {number} [D]: Date between 1 and 31, defaults to 1
         * @param {number} [h]: Hour between 0 and 23, defaults to 0
         * @param {number} [m]: Minute between 0 and 59, defaults to 0
         * @param {number} [s]: Second between 0 and 59, defaults to 0
         */
        next(Y?: number, M?: number, D?: number, h?: number, m?: number, s?: number): Date;

        /**
         * Builds and returns a new Date using the specified values.  Date
         * returned is either using Local time or UTC based on isLocal.
         *
         * @param {number} [Y]: Four digit year
         * @param {number} [M]: Month between 0 and 11, defaults to 11
         * @param {number} [D]: Date between 1 and 31, defaults to last day of month
         * @param {number} [h]: Hour between 0 and 23, defaults to 23
         * @param {number} [m]: Minute between 0 and 59, defaults to 59
         * @param {number} [s]: Second between 0 and 59, defaults to 59
         */
        prev(Y?: number, M?: number, D?: number, h?: number, m?: number, s?: number): Date;

        /**
         * Determines if a value will cause a particular constraint to rollover to the
         * next largest time period. Used primarily when a constraint has a
         * variable extent.
         *
         * @param {Date} d: Date
         * @param {number} val: Value
         * @param {IModifier} constraint: A modifier
         * @param {ITimePeriod} period: A time period
         */
        nextRollover(d: Date, val: number, constraint: IModifier, period: ITimePeriod): Date;

        /**
         * Determines if a value will cause a particular constraint to rollover to the
         * previous largest time period. Used primarily when a constraint has a
         * variable extent.
         *
         * @param {Date} d: Date
         * @param {number} val: Value
         * @param {IModifier} constraint: A modifier
         * @param {ITimePeriod} period: A time period
         */
        prevRollover(d: Date, val: number, constraint: IModifier, period: ITimePeriod): Date;
    }
    
    export interface ITimePeriod {

        /** 
         * The name of the time period information provider.
         */
        name: string;

        /** 
         * The rough number of seconds that are covered when moving from one instance of this time period to the next instance.
         */
        range: number;

        /** 
         * The value of this time period for the date specified.
         *
         * @param {Date} date - The given date.
         */
        val(date: Date): number;

        /** 
         * True if the specified value is valid for the specified date, false otherwise.
         *
         * @param {Date} date - The given date.
         * @param {any} value - The value to test for the date.
         */
        isValid(date: Date, value: any): boolean;

        /** 
         * The minimum and maximum valid values for the time period for the specified date.
         * If the minimum value is not 0, 0 can be specified in schedules to indicate the maximum value.
         * This makes working with non - constant extents(like days in a month) easier.
         *
         * @param {Date} [date] - The given date.
         */
        extent(date?: Date): number[];

        /** 
         * The first second in which the value is the same as the value of the specified date.
         *  For example, the start of an hour would be the hour with 0 minutes and 0 seconds.
         *
         * @param {Date} date - The given date.
         */
        start(date: Date): Date;

        /** 
         * The last second in which the value is the same as the value of the specified date.
         * For example, the end of an hour would be the hour with 59 minutes and 59 seconds.
         *
         * @param {Date} date - The given date.
         */
        end(date: Date): Date;

        /** 
         * Returns the next date where the value is the value specified.
         * Sets the value to 1 if value specified is greater than the max allowed value.
         *
         * @param {Date} date - The given date.
         * @param {any} value - The value to test for the date.
         */
        next(date: Date, value: any): Date;

        /** 
         * Returns the previous date where the value is the value specified.
         * Sets the value to the max allowed value if the value specified is greater than the max allowed value. 
         *
         * @param {Date} date - The given date.
         * @param {any} value - The value to test for the date.
         */
        prev(date: Date, value: any): Date;
    }

    export interface IModifier extends ITimePeriod {
        /**
         * Creates a new modified constraint.
         *
         * @param {ITimePeriod} constraint: The constraint to be modified
         * @param {number} value: The starting value of the after constraint
         */
        (constraint: ITimePeriod, value: number): ITimePeriod;
    }

    export interface IModifierStatic {
        
        /**
         * After Modifier
         */
        after: IModifier;

        /**
         * Before Modifier
         */
        before: IModifier;
    }

    export interface IStatic {
        
        /** 
         * Schedule
         * Generates instances from schedule data.
         */
        schedule(input: any): ISchedule;

        /** 
         * Parse 
         * For generating schedule data.
         */
        parse: IParseStatic;

        /** Date Provider
         */
        date: IDateProvider;

        /** 
         * Set timeout on window using given recurrence next.
         *  
         * @param {function} callback - A callback called after first instance of recurrence pattern.
         * @param {Later.IReccurence} - A recurrence instance.
         */
        setTimeout(callback: () => void, time: IScheduleData): ITimer;
        /** 
         * Set interval on window using given recurrence
         *  
         * @param {function} callback - A callback called after each instance of recurrence pattern.
         * @param {Later.IReccurence} - A recurrence instance.
         */
        setInterval(callback: () => void, time: IScheduleData): ITimer;

        /** 
         * time period information provider.
         */
        time: ITimePeriod;
        /** 
         * Second time period information provider.
         */
        second: ITimePeriod;
        /** 
         * Minute time period information provider.
         */
        minute: ITimePeriod;
        /** 
         * Hour time period information provider.
         */
        hour: ITimePeriod;
        /** 
         * Day time period information provider.
         */
        day: ITimePeriod;
        /** 
         * Day of week time period information provider.
         */
        dayOfWeek: ITimePeriod;
        /** 
         * Day of week in month time period information provider.
         */
        dayOfWeekCount: ITimePeriod;
        /** 
         * Day in year time period information provider.
         */
        dayOfYear: ITimePeriod;
        /**
         * Week of mobth time period information provider.
         */
        weekOfMonth: ITimePeriod;
        /**
         * Week of yearfrom ISO 8601 time period information provider.
         */
        weekOfYear: ITimePeriod;
        /**
         * Month time period information provider.
         */
        month: ITimePeriod;
        /**
         * Year time period information provider.
         */
        year: ITimePeriod;
        
        /**
         * Later Modifiers:
         * 
         * This type can be easily extended to include any custom IModifiers that you desire.
         * These can then be used to create schedules of your own custom type.
         * 
         * interface IGandalfsLaterModifier extends Later.IModifierStatic {
         *     duringTheThirdAge: IModifier
         * }
         * 
         * Be sure to use this interface when dealing with Later.modifier
         */
        modifier: IModifierStatic
    }
}

/** 
 * Later Module:
 * 
 * Easily define complex schedules then quickly calculate future or previous schedule occurrences.
 * 
 * This type can be easily extended to include any custom ITimePeriods that you desire.
 * These can then be used to create schedules of your own custom type.
 * 
 * interface IGandalfsLater extends Later.IStatic {
 *     agesOfMiddleEarth: ITimePeriod
 * }
 * 
 * Be sure to use this interface when dealing with Later. 
 */
declare var later: Later.IStatic;