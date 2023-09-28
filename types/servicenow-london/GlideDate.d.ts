/**
 * The scoped GlideDate class provides methods for performing operations on GlideDate
 * objects, such as instantiating GlideDate objects or working with GlideDate fields.
 */
declare class GlideDate {
    /**
     * Creates a GlideDate object with the current date time.
     */
    constructor();

    /**
     * Gets the date in the specified date format.
     *
     * @param format the desired date format
     * @returns the date in the specified format
     * @example
     *
     * var gd = new GlideDate();
     * gd.setValue('2015-01-01');
     * gs.info(gd.getByFormat('dd-MM-yyyy'));
     * // 01-01-2015
     */
    getByFormat(format: string): string;

    /**
     * Gets the day of the month stored by the GlideDate object, expressed in the UTC time
     * zone.
     *
     * @returns The day of the month in the UTC time zone, from 1 to 31.
     * @example
     *
     * // Today's date is 2016-05-13
     * var gd = new GlideDate('2016-05-13');
     * gs.info(gd.getDayOfMonthNoTZ());
     * // 13
     */
    getDayOfMonthNoTZ(): number;

    /**
     * Gets the date in the current user's display format and time zone.
     *
     * @returns The date in the user's format and time zone. Keep in mind when designing
     * business rules or script includes that this method may return values in different
     * formats for different users.
     * @example
     *
     * var gd = new GlideDate();
     * gd.setValue('2015-01-01');
     * gs.info(gd.getDisplayValue());
     * // 2015-01-01
     */

    getDisplayValue(): string;

    /**
     * Gets the display value in the internal format (yyyy-MM-dd).
     *
     * @returns The date values for the GlideDate object in the current user's time zone and
     * the internal time format of yyyy-MM-dd.
     * @example
     *
     * var gd = new GlideDate();
     * gs.info(gd.getDisplayValueInternal());
     * // 2014-10-22
     */
    getDisplayValueInternal(): string;

    /**
     * Gets the month stored by the GlideDate object, expressed in the UTC time zone.
     * @returns The numerical value of the month from 1 to 12.
     *
     * @example
     *
     * // Today's date is 2016-05-13
     * var gd = new GlideDate();
     * gs.info(gd.getMonthNoTZ());
     * // 5
     */
    getMonthNoTZ(): number;

    /**
     * Gets the date value stored in the database by the GlideDate object in the internal
     * format, yyyy-MM-dd, and the system time zone, UTC by default.
     *
     * @returns The date value in the internal format and system time zone.
     * @example
     *
     * var gd = new GlideDate();
     * gd.setValue('2015-01-01');
     * gs.info(gd.getValue());
     * // 2015-01-01
     */
    getValue(): string;

    /**
     * Gets the year stored by the GlideDate object, expressed in the UTC time zone.
     *
     * @returns The numerical value of the year.
     * @example
     *
     * // Today's date is 2016-05-13
     * var gd = new GlideDate();
     * gs.info(gd.getYearNoTZ());
     * // 5
     */
    getYearNoTZ(): number;

    /**
     * Sets a date value using the current user's display format and time zone.
     *
     * @param asDisplayed The date in the current user's display format and time zone. The parameter must
     * be formatted using the current user's preferred display format, such as yyyy-MM-dd.
     * @returns Method does not return a value
     * @example
     *
     * var gd = new GlideDate();
     * gd.setDisplayValue('2011-01-01');
     * gs.info(gd.getValue());
     * // 2011-01-01
     */
    setDisplayValue(asDisplayed: string): void;

    /**
     * Sets the date of the GlideDate object.
     *
     * @param o The date and time to use.
     * @returns Method does not return a value
     * @example
     *
     * var gd = new GlideDate();
     * gd.setValue('2015-01-01');
     * gs.info(gd.getValue());
     * // 2015-01-01
     */
    setValue(o: string): void;

    /**
     * Gets the duration difference between two GlideDate values.
     *
     * @param start The start value.
     * @param end The end value.
     * @returns The duration between the two values.
     * @example
     *
     * var sgd1 = new GlideDate();
     * sgd1.setDisplayValue('2014-07-18');
     * var sgd2 = new GlideDate();
     * sgd2.setDisplayValue('2014-07-19');
     * var duration = GlideDate.subtract(sgd1, sgd2);
     * gs.info(duration.getDisplayValue());
     * // 1 Day
     */
    static subtract(start: GlideDate | GlideTime, end: GlideDate | GlideTime): GlideDuration;
}
