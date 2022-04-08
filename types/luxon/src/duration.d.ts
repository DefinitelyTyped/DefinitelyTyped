import { DateTimeFormatOptions, NumberingSystem } from './misc';
import { ConversionAccuracy } from './datetime';

export interface DurationOptions {
    locale?: string;
    numberingSystem?: NumberingSystem;
    conversionAccuracy?: ConversionAccuracy;
}

export interface DurationObjectUnits {
    year?: number;
    years?: number;
    quarter?: number;
    quarters?: number;
    month?: number;
    months?: number;
    week?: number;
    weeks?: number;
    day?: number;
    days?: number;
    hour?: number;
    hours?: number;
    minute?: number;
    minutes?: number;
    second?: number;
    seconds?: number;
    millisecond?: number;
    milliseconds?: number;
}

export interface DurationObject extends DurationObjectUnits, DurationOptions {}

export type DurationUnit = keyof DurationObjectUnits;
export type DurationUnits = DurationUnit | DurationUnit[];

export interface DurationToFormatOptions extends DateTimeFormatOptions {
    floor?: boolean;
    round?: boolean;
}

export type ToISOFormat = 'basic' | 'extended';

export interface ToISOTimeDurationOptions {
    /**
     * Include the `T` prefix
     * @default false
     */
    includePrefix?: boolean;
    /**
     * Exclude milliseconds from the format if they're 0
     * @default false
     */
    suppressMilliseconds?: boolean;
    /**
     * Exclude seconds from the format if they're 0
     * @default false
     */
    suppressSeconds?: boolean;
    /**
     * Choose between the basic and extended format
     * @default 'extended'
     */
    format?: ToISOFormat;
}

/**
 * Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
 */
export type DurationInput = Duration | number | DurationObject;

/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour".
 * Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods
 * for creating, parsing, interrogating, transforming, and formatting them.
 * They can be used on their own or in conjunction with other Luxon types;
 * for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days},
 *                   {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize},
 *                      {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */
export class Duration {
    /**
     * Create a Duration from an ISO 8601 duration string.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example
     * Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
     * @example
     * Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
     * @example
     * Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
     */
    static fromISO(text: string, options?: DurationOptions): Duration;

    /**
     * Create a Duration from an ISO 8601 time string.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @example
     * Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
     * @example
     * Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example
     * Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example
     * Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example
     * Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     */
    static fromISOTime(text: string, options?: DurationOptions): Duration;

    /**
     * Create Duration from a number of milliseconds.
     * @param count of milliseconds
     * @param [options] - options for parsing
     * @param [options.locale='en-US'] - the locale to use
     * @param [options.numberingSystem] - the numbering system to use
     * @param [options.conversionAccuracy='casual'] - the conversion system to use
     */
    static fromMillis(count: number, options?: DurationOptions): Duration;

    /**
     * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
     * If this object is empty then a zero milliseconds duration is returned.
     */
    static fromObject(obj: DurationObject): Duration;

    /**
     * Create an invalid Duration.
     * @param reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
     * @param [explanation] - longer explanation, may include parameters and other useful debugging information
     */
    static invalid(reason: string, explanation?: string): Duration;

    /**
     * Check if an object is a Duration. Works across context boundaries
     */
    static isDuration(o: any): o is Duration;

    days: number;
    hours: number;
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     */
    invalidReason: string | null;
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     */
    invalidExplanation: string | null;

    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     */
    isValid: boolean;

    /**
     * Get the locale of a Duration, such 'en-GB'
     */
    locale: string;
    milliseconds: number;
    minutes: number;
    months: number;

    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     */
    numberingSystem: string;
    quarters: number;
    seconds: number;
    weeks: number;
    years: number;

    /**
     * Return the length of the duration in the specified unit.
     * @example
     * Duration.fromObject({years: 1}).as('days') //=> 365
     * @example
     * Duration.fromObject({years: 1}).as('months') //=> 12
     * @example
     * Duration.fromObject({hours: 60}).as('days') //=> 2.5
     */
    as(unit: DurationUnit): number;

    /**
     * Equality check
     * Two Durations are equal if they have the same units and the same values for each unit.
     */
    equals(other: Duration): boolean;

    /**
     * Get the value of unit.
     * @example
     * Duration.fromObject({years: 2, days: 3}).years //=> 2
     * @example
     * Duration.fromObject({years: 2, days: 3}).months //=> 0
     * @example
     * Duration.fromObject({years: 2, days: 3}).days //=> 3
     */
    get(unit: DurationUnit): number;

    /**
     * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
     */
    minus(duration: DurationInput): Duration;

    /**
     * Return the negative of this Duration.
     * @example
     * Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
     */
    negate(): Duration;

    /**
     * Reduce this Duration to its canonical representation in its current units.
     * @example
     * Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
     * @example
     * Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
     */
    normalize(): Duration;

    /**
     * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
     */
    plus(duration: DurationInput): Duration;

    /**
     * "Set" the Duration's options. Returns a newly-constructed Duration.
     */
    reconfigure(options: DurationOptions): Duration;

    /**
     * "Set" the values of specified units. Return a newly-constructed Duration.
     */
    set(values: DurationObjectUnits): Duration;

    /**
     * Convert this Duration into its representation in a different set of units.
     * @example
     * Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
     */
    shiftTo(...units: DurationUnit[]): Duration;

    /**
     * Scale this Duration by the specified amount. Return a newly-constructed Duration.
     * @example
     * Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
     * @example
     * Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
     */
    mapUnits(fn: (x: number, u: DurationUnit) => number): Duration;

    /**
     * Returns a string representation of this Duration formatted according to the specified format string.
     *
     * You may use these tokens:
     * * `S` for milliseconds
     * * `s` for seconds
     * * `m` for minutes
     * * `h` for hours
     * * `d` for days
     * * `M` for months
     * * `y` for years
     *
     * Notes:
     * * Add padding by repeating the token, e.g. `yy` pads the years to two digits, `hhhh` pads the hours out to four digits
     * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Duration's conversion accuracy setting.
     *
     * @param format - the format string
     * @param [options] - options
     * @param [options.floor=true] - floor numerical values
     * @example
     * Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
     * @example
     * Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
     * @example
     * Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
     */
    toFormat(format: string, options?: DurationToFormatOptions): string;

    /**
     * Returns an ISO 8601-compliant string representation of this Duration.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example
     * Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
     * @example
     * Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
     * @example
     * Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
     * @example
     * Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
     * @example
     * Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
     */
    toISO(): string;

    /**
     * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
     * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @example
     * Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
     * @example
     * Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
     * @example
     * Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
     * @example
     * Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
     * @example
     * Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
     */
    toISOTime(options?: ToISOTimeDurationOptions): string; // | null

    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
     * Called implicitly via {@link JSON.stringify}
     */
    toJSON(): string;

    /**
     * Returns a milliseconds value of this Duration.
     */
    toMillis(): number;

    /**
     * Returns a JavaScript object with this Duration's values.
     * @param [options] - options for generating the object
     * @param [options.includeConfig=false] - include configuration attributes in the output
     * @example
     * Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
     */
    toObject(options?: {
        /**
         * include configuration attributes in the output
         */
        includeConfig?: boolean
    }): DurationObject;

    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
     */
    toString(): string;

    /**
     * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
     * Called implicitly when coercing types.
     */
    valueOf(): number;
}
