import { DateTime, DateObject, DateTimeOptions, DiffOptions, ToISOTimeOptions } from './datetime';
import { Duration, DurationInput, DurationUnit } from './duration';

export interface IntervalObject {
    start?: DateTime;
    end?: DateTime;
}

export type DateInput = DateTime | DateObject | Date;

/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}.
 * Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating,
 * comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge},
 *                      {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}.
 * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
 */
export class Interval {
    /**
     * Create an Interval from a start DateTime and a Duration to extend to.
     */
    static after(start: DateInput, duration: DurationInput): Interval;

    /**
     * Create an Interval from an end DateTime and a Duration to extend backwards to.
     */
    static before(end: DateInput, duration: DurationInput): Interval;

    /**
     * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
     */
    static fromDateTimes(start: DateInput, end: DateInput): Interval;

    /**
     * Create an Interval from an ISO 8601 string.
     * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     */
    static fromISO(text: string, options?: DateTimeOptions): Interval;

    /**
     * Create an invalid Interval.
     * @param reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
     * @param [explanation] - longer explanation, may include parameters and other useful debugging information
     */
    static invalid(reason: string, explanation?: string): Interval;

    /**
     * Check if an object is an Interval. Works across context boundaries
     */
    static isInterval(o: any): o is Interval;

    /**
     * Merge an array of Intervals into a equivalent minimal set of Intervals.
     * Combines overlapping and adjacent Intervals.
     */
    static merge(intervals: Interval[]): Interval[];

    /**
     * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
     */
    static xor(intervals: Interval[]): Interval[];

    /**
     * Returns the end of the Interval
     */
    end: DateTime;

    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     */
    invalidReason: string | null;

    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     */
    invalidExplanation: string | null;

    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     */
    isValid: boolean;

    /**
     * Returns the start of the Interval
     */
    start: DateTime;

    /**
     * Return whether this Interval's start is adjacent to the specified Interval's end.
     */
    abutsEnd(other: Interval): boolean;

    /**
     * Return whether this Interval's end is adjacent to the specified Interval's start.
     */
    abutsStart(other: Interval): boolean;

    /**
     * Return whether this Interval contains the specified DateTime.
     */
    contains(dateTime: DateTime): boolean;

    /**
     * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
     * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
     * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
     * @param [unit='milliseconds'] - the unit of time to count.
     */
    count(unit?: DurationUnit): number;

    /**
     * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
     */
    difference(...intervals: Interval[]): Interval[];

    /**
     * Split this Interval into the specified number of smaller intervals.
     * @param numberOfParts - The number of Intervals to divide the Interval into.
     */
    divideEqually(numberOfParts: number): Interval[];

    /**
     * Return whether this Interval engulfs the start and end of the specified Interval.
     */
    engulfs(other: Interval): boolean;

    /**
     * Return whether this Interval has the same start and end as the specified Interval.
     * Two DateTimes are equal if they represent the same millisecond, have the same zone and location, and are both valid.
     */
    equals(other: Interval): boolean;

    /**
     * Returns whether this Interval's start and end are both in the same unit of time
     * @param unit - the unit of time to check sameness on
     */
    hasSame(unit: DurationUnit): boolean;

    /**
     * Return an Interval representing the intersection of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
     * Returns null if the intersection is empty, meaning, the intervals don't intersect.
     */
    intersection(other: Interval): Interval | null;

    /**
     * Return whether this Interval's start is after the specified DateTime.
     */
    isAfter(dateTime: DateTime): boolean;

    /**
     * Return whether this Interval's end is before the specified DateTime.
     */
    isBefore(dateTime: DateTime): boolean;

    /**
     * Return whether this Interval has the same start and end DateTimes.
     */
    isEmpty(): boolean;

    /**
     * Returns the length of the Interval in the specified unit.
     * @param [unit='milliseconds'] - the unit to return the length in.
     */
    length(unit?: DurationUnit): number;

    /**
     * Return whether this Interval overlaps with the specified Interval
     */
    overlaps(other: Interval): boolean;

    /**
     * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
     */
    set(values?: IntervalObject): Interval;

    /**
     * Split this Interval at each of the specified DateTimes
     */
    splitAt(...dateTimes: DateTime[]): Interval[];

    /**
     * Split this Interval into smaller Intervals, each of the specified length.
     * Left over time is grouped into a smaller interval
     * @param duration - The length of each resulting interval.
     */
    splitBy(duration: DurationInput): Interval[];

    /**
     * Return a Duration representing the time spanned by this interval.
     * @param [unit=['milliseconds']] - the unit or units to include in the duration.
     * @param [options] - options that affect the creation of the Duration
     * @param [options.conversionAccuracy='casual'] - the conversion system to use
     * @example
     * Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
     * @example
     * Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
     * @example
     * Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
     * @example
     * Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
     * @example
     * Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
     */
    toDuration(unit?: DurationUnit | DurationUnit[], options?: DiffOptions): Duration;

    /**
     * Returns a string representation of this Interval formatted according to the specified format string.
     * @param dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
     * @param [options] - options
     * @param [options.separator=' - '] - a separator to place between the start and end representations
     */
    toFormat(
        dateFormat: string,
        options?: {
            separator?: string;
        },
    ): string;

    /**
     * Returns an ISO 8601-compliant string representation of this Interval.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     */
    toISO(options?: ToISOTimeOptions): string;

    /**
     * Returns an ISO 8601-compliant string representation of date of this Interval.
     * The time components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     */
    toISODate(): string;

    /**
     * Returns an ISO 8601-compliant string representation of time of this Interval.
     * The date components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     */
    toISOTime(options?: ToISOTimeOptions): string;

    /**
     * Returns a string representation of this Interval appropriate for debugging.
     */
    toString(): string;

    /**
     * Return an Interval representing the union of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
     */
    union(other: Interval): Interval;

    /**
     * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
     * @example
     * Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
     * @example
     * Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
     */
    mapEndpoints(mapFn: (d: DateTime) => DateTime): Interval;
}
