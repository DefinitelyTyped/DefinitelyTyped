declare namespace later {
    interface ScheduleData {
        /**
         * A list of recurrence information as a composite schedule.
         */
        schedules: Recurrence[];

        /**
         * A list of exceptions to the composite recurrence information.
         */
        exceptions: Recurrence[];

        /**
         * A code to identify any errors in the composite schedule and exceptions.
         * The number tells you the position of the error within the schedule.
         */
        error: number;
    }

    interface Recurrence {
        /** Time in seconds from midnight. */
        t?: number[] | undefined;
        /** Seconds in minute. */
        s?: number[] | undefined;
        /** Minutes in hour. */
        m?: number[] | undefined;
        /** Hour in day. */
        h?: number[] | undefined;
        /** Day of the month. */
        D?: number[] | undefined;
        /** Day in week. */
        dw?: number[] | undefined;
        /** Nth day of the week in month. */
        dc?: number[] | undefined;
        /** Day in year. */
        dy?: number[] | undefined;
        /** Week in month. */
        wm?: number[] | undefined;
        /** ISO week in year. */
        wy?: number[] | undefined;
        /** Month in year. */
        M?: number[] | undefined;
        /** Year. */
        Y?: number[] | undefined;

        /** After modifiers. */
        t_a?: number[] | undefined;
        /** After modifiers. */
        s_a?: number[] | undefined;
        /** After modifiers. */
        m_a?: number[] | undefined;
        /** After modifiers. */
        h_a?: number[] | undefined;
        /** After modifiers. */
        D_a?: number[] | undefined;
        /** After modifiers. */
        dw_a?: number[] | undefined;
        /** After modifiers. */
        dc_a?: number[] | undefined;
        /** After modifiers. */
        dy_a?: number[] | undefined;
        /** After modifiers. */
        wm_a?: number[] | undefined;
        /** After modifiers. */
        wy_a?: number[] | undefined;
        /** After modifiers. */
        M_a?: number[] | undefined;
        /** After modifiers. */
        Y_a?: number[] | undefined;

        /** Before modifiers. */
        t_b?: number[] | undefined;
        /** Before modifiers. */
        s_b?: number[] | undefined;
        /** Before modifiers. */
        m_b?: number[] | undefined;
        /** Before modifiers. */
        h_b?: number[] | undefined;
        /** Before modifiers. */
        D_b?: number[] | undefined;
        /** Before modifiers. */
        dw_b?: number[] | undefined;
        /** Before modifiers. */
        dc_b?: number[] | undefined;
        /** Before modifiers. */
        dy_b?: number[] | undefined;
        /** Before modifiers. */
        wm_b?: number[] | undefined;
        /** Before modifiers. */
        wy_b?: number[] | undefined;
        /** Before modifiers. */
        M_b?: number[] | undefined;
        /** Before modifiers. */
        Y_b?: number[] | undefined;

        /*
         * Custom Time Periods and Modifiers
         * For acces to custom time periods created as extension to the later static type
         * and modifiers created on the later modifier static type.
         */
        [timeperiodAndModifierName: string]: number[] | undefined;
    }

    interface ParseStatic {
        /**
         * Create a recurrence builder for building schedule data.
         */
        recur(): RecurrenceBuilder;

        /**
         * Create schedule data by parsing a cron string
         *
         * @param [input] - A string value to parse.
         * @param [hasSeconds] - Whether the cron expression has second part.
         */
        cron(input?: string, hasSeconds?: boolean): ScheduleData;

        /**
         * Create schedule data by paring a human readable string.
         *
         * @param [input] - A string value to parse.
         */
        text(input?: string): ScheduleData;
    }

    interface Timer {
        /**
         * Clear the timer and end execution.
         */
        clear(): void;
    }

    interface Schedule {
        /**
         * Finds the next valid instance or instances of the current schedule,
         * optionally between a specified start and end date. Start date is
         * Date.now() by default, end date is unspecified. Start date must be
         * smaller than end date.
         *
         * @param numberOfInst: The number of instances to return
         * @param dateFrom: The earliest a valid instance can occur
         * @param dateTo: The latest a valid instance can occur
         */
        next(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[] | Date;

        /**
         * Finds the next valid range or ranges of the current schedule,
         * optionally between a specified start and end date. Start date is
         * Date.now() by default, end date is unspecified. Start date must be
         * greater than end date.
         *
         * @param numberOfInst: The number of ranges to return
         * @param dateFrom: The earliest a valid range can occur
         * @param dateTo: The latest a valid range can occur
         */
        nextRange(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[] | Date;

        /**
         * Finds the previous valid instance or instances of the current schedule,
         * optionally between a specified start and end date. Start date is
         * Date.now() by default, end date is unspecified. Start date must be
         * greater than end date.
         *
         * @param numberOfInst: The number of instances to return
         * @param dateFrom: The earliest a valid instance can occur
         * @param dateTo: The latest a valid instance can occur
         */
        prev(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[] | Date;

        /**
         * Finds the previous valid range or ranges of the current schedule,
         * optionally between a specified start and end date. Start date is
         * Date.now() by default, end date is unspecified. Start date must be
         * greater than end date.
         *
         * @param numberOfInst: The number of ranges to return
         * @param dateFrom: The earliest a valid range can occur
         * @param dateTo: The latest a valid range can occur
         */
        prevRange(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[] | Date;
    }

    interface RecurrenceBuilder extends ScheduleData {
        /** a time period */
        second(): RecurrenceBuilder;
        /** a time period */
        minute(): RecurrenceBuilder;
        /** a time period */
        hour(): RecurrenceBuilder;
        /** a time period */
        time(): RecurrenceBuilder;
        /** a time period */
        dayOfWeek(): RecurrenceBuilder;
        /** a time period */
        dayOfWeekCount(): RecurrenceBuilder;
        /** a time period */
        dayOfMonth(): RecurrenceBuilder;
        /** a time period */
        dayOfYear(): RecurrenceBuilder;
        /** a time period */
        weekOfMonth(): RecurrenceBuilder;
        /** a time period */
        weekOfYear(): RecurrenceBuilder;
        /** a time period */
        month(): RecurrenceBuilder;
        /** a time period */
        year(): RecurrenceBuilder;

        /** a time period */
        fullDate(): RecurrenceBuilder;
        /**
         * Specifies one or more specific vals of a time period information provider.
         * When used to specify a time, a string indicating the 24-hour time may be used.
         *
         * @param values - A list of values.
         */
        on(...values: number[]): RecurrenceBuilder;
        /**
         * Specifies one or more specific vals of a time period information provider.
         * When used to specify a time, a string indicating the 24-hour time may be used.
         *
         * @param value - A Date or string representing your value.
         */
        on(value: Date | string): RecurrenceBuilder;

        /**
         * Preceed a time period.
         *
         * @param [value] - A number or string representing your value.
         */
        every(value?: number | string): RecurrenceBuilder;

        /**
         * Preceed a time period.
         *
         * @param start - A number representing your start value.
         * @param end - A number representing your end value.
         */
        between(start: number, end: number): RecurrenceBuilder;
        /**
         * Preceed a time period.
         *
         * @param start - A string representing your start value.
         * @param end - A string representing your end value.
         */
        between(start: string, end: string): RecurrenceBuilder;

        /**
         * After a time period.
         *
         * @param value - A number or string representing your value.
         */
        after(value: number | string): RecurrenceBuilder;

        /**
         * Before a time period.
         *
         * @param value - A number or string representing your value.
         */
        before(value: number | string): RecurrenceBuilder;

        /**
         * After a time period.
         *
         * @param value - A number or string representing your value.
         */
        startingOn(value: number | string): RecurrenceBuilder;

        /**
         * Equivalent to .on(min)
         */
        first(): RecurrenceBuilder;

        /**
         * Equivalent to .on(max)
         */
        last(): RecurrenceBuilder;

        /**
         * Equivalent to .on(1,7).dayOfWeek()
         */
        onWeekend(): RecurrenceBuilder;

        /**
         * Equivalent to .on(2,3,4,5,6).dayOfWeek()
         */
        onWeekday(): RecurrenceBuilder;

        /**
         * Add a new schedule value to schedules, composite schedule.
         */
        and(): RecurrenceBuilder;

        /**
         * Add exceptions.
         */
        except(): RecurrenceBuilder;

        /**
         * Custom Timeperiod Recurrences.
         * Using a key as defined by the custom period in any extension to Later.IStatic.
         */
        customPeriod(key: string): RecurrenceBuilder;

        /**
         * Customise Recurrences.
         * Using a key as defined by the custom modifier in any extension to Later.IModifierStatic.
         */
        customModifier(key: string, values: number): RecurrenceBuilder;
    }

    interface DateProvider {
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
         * @param [Y]: Four digit year
         * @param [M]: Month between 1 and 12, defaults to 1
         * @param [D]: Date between 1 and 31, defaults to 1
         * @param [h]: Hour between 0 and 23, defaults to 0
         * @param [m]: Minute between 0 and 59, defaults to 0
         * @param [s]: Second between 0 and 59, defaults to 0
         */
        next(Y?: number, M?: number, D?: number, h?: number, m?: number, s?: number): Date;

        /**
         * Builds and returns a new Date using the specified values.  Date
         * returned is either using Local time or UTC based on isLocal.
         *
         * @param [Y]: Four digit year
         * @param [M]: Month between 0 and 11, defaults to 11
         * @param [D]: Date between 1 and 31, defaults to last day of month
         * @param [h]: Hour between 0 and 23, defaults to 23
         * @param [m]: Minute between 0 and 59, defaults to 59
         * @param [s]: Second between 0 and 59, defaults to 59
         */
        prev(Y?: number, M?: number, D?: number, h?: number, m?: number, s?: number): Date;

        /**
         * Determines if a value will cause a particular constraint to rollover to the
         * next largest time period. Used primarily when a constraint has a
         * variable extent.
         *
         * @param d: Date
         * @param val: Value
         * @param constraint: A modifier
         * @param period: A time period
         */
        nextRollover(d: Date, val: number, constraint: Modifier, period: TimePeriod): Date;

        /**
         * Determines if a value will cause a particular constraint to rollover to the
         * previous largest time period. Used primarily when a constraint has a
         * variable extent.
         *
         * @param d: Date
         * @param val: Value
         * @param constraint: A modifier
         * @param period: A time period
         */
        prevRollover(d: Date, val: number, constraint: Modifier, period: TimePeriod): Date;
    }

    interface TimePeriod {
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
         * @param date - The given date.
         */
        val(date: Date): number;

        /**
         * True if the specified value is valid for the specified date, false otherwise.
         *
         * @param date - The given date.
         * @param value - The value to test for the date.
         */
        isValid(date: Date, value: any): boolean;

        /**
         * The minimum and maximum valid values for the time period for the specified date.
         * If the minimum value is not 0, 0 can be specified in schedules to indicate the maximum value.
         * This makes working with non - constant extents(like days in a month) easier.
         *
         * @param [date] - The given date.
         */
        extent(date?: Date): number[];

        /**
         * The first second in which the value is the same as the value of the specified date.
         *  For example, the start of an hour would be the hour with 0 minutes and 0 seconds.
         *
         * @param date - The given date.
         */
        start(date: Date): Date;

        /**
         * The last second in which the value is the same as the value of the specified date.
         * For example, the end of an hour would be the hour with 59 minutes and 59 seconds.
         *
         * @param date - The given date.
         */
        end(date: Date): Date;

        /**
         * Returns the next date where the value is the value specified.
         * Sets the value to 1 if value specified is greater than the max allowed value.
         *
         * @param date - The given date.
         * @param value - The value to test for the date.
         */
        next(date: Date, value: any): Date;

        /**
         * Returns the previous date where the value is the value specified.
         * Sets the value to the max allowed value if the value specified is greater than the max allowed value.
         *
         * @param date - The given date.
         * @param value - The value to test for the date.
         */
        prev(date: Date, value: any): Date;
    }

    interface Modifier extends TimePeriod {
        /**
         * Creates a new modified constraint.
         *
         * @param constraint: The constraint to be modified
         * @param value: The starting value of the after constraint
         */
        (constraint: TimePeriod, value: number): TimePeriod;
    }

    interface ModifierStatic {
        /**
         * After Modifier
         */
        after: Modifier;

        /**
         * Before Modifier
         */
        before: Modifier;
    }

    interface Static {
        /**
         * Schedule
         * Generates instances from schedule data.
         */
        schedule(input: any): Schedule;

        /**
         * Parse
         * For generating schedule data.
         */
        parse: ParseStatic;

        /** Date Provider */
        date: DateProvider;

        /**
         * Set timeout on window using given recurrence next.
         *
         * @param callback - A callback called after first instance of recurrence pattern.
         * @param - A recurrence instance.
         */
        setTimeout(callback: () => void, time: ScheduleData): Timer;
        /**
         * Set interval on window using given recurrence
         *
         * @param callback - A callback called after each instance of recurrence pattern.
         * @param - A recurrence instance.
         */
        setInterval(callback: () => void, time: ScheduleData): Timer;

        /**
         * time period information provider.
         */
        time: TimePeriod;
        /**
         * Second time period information provider.
         */
        second: TimePeriod;
        /**
         * Minute time period information provider.
         */
        minute: TimePeriod;
        /**
         * Hour time period information provider.
         */
        hour: TimePeriod;
        /**
         * Day time period information provider.
         */
        day: TimePeriod;
        /**
         * Day of week time period information provider.
         */
        dayOfWeek: TimePeriod;
        /**
         * Day of week in month time period information provider.
         */
        dayOfWeekCount: TimePeriod;
        /**
         * Day in year time period information provider.
         */
        dayOfYear: TimePeriod;
        /**
         * Week of mobth time period information provider.
         */
        weekOfMonth: TimePeriod;
        /**
         * Week of yearfrom ISO 8601 time period information provider.
         */
        weekOfYear: TimePeriod;
        /**
         * Month time period information provider.
         */
        month: TimePeriod;
        /**
         * Year time period information provider.
         */
        year: TimePeriod;

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
        modifier: ModifierStatic;
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
declare var later: later.Static;

export = later;
export as namespace later;
