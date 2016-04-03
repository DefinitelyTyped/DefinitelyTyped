declare module goog {
    function require(name: 'goog.i18n.TimeZone'): typeof goog.i18n.TimeZone;
}

declare module goog.i18n {

    /**
     * TimeZone class implemented a time zone resolution and name information
     * source for client applications. The time zone object is initiated from
     * a time zone information object. Application can initiate a time zone
     * statically, or it may choose to initiate from a data obtained from server.
     * Each time zone information array is small, but the whole set of data
     * is too much for client application to download. If end user is allowed to
     * change time zone setting, dynamic retrieval should be the method to use.
     * In case only time zone offset is known, there is a decent fallback
     * that only use the time zone offset to create a TimeZone object.
     * A whole set of time zone information array was available under
     * http://go/js_locale_data. It is generated based on CLDR and
     * Olson time zone data base (through pytz), and will be updated timely.
     *
     * @constructor
     * @final
     */
    class TimeZone {
        constructor();
        
        /**
         * This factory method creates a time zone instance.  It takes either an object
         * containing complete time zone information, or a single number representing a
         * constant time zone offset.  If the latter form is used, DST functionality is
         * not available.
         *
         * @param {number|Object} timeZoneData If this parameter is a number, it should
         *     indicate minutes WEST of UTC to be used as a constant time zone offset.
         *     Otherwise, it should be an object with these four fields:
         *     <ul>
         *     <li>id: A string ID for the time zone.
         *     <li>std_offset: The standard time zone offset in minutes EAST of UTC.
         *     <li>names: An array of four names (standard short name, standard long
         *           name, daylight short name, daylight long, name)
         *     <li>transitions: An array of numbers which are interpreted in pairs:
         *           [time1, adjustment1, time2, adjustment2, ...] where each time is
         *           a DST transition point given as a number of hours since 00:00 UTC,
         *           January 1, 1970, and each adjustment is the adjustment to apply
         *           for times after the DST transition, given as minutes EAST of UTC.
         *     </ul>
         * @return {!goog.i18n.TimeZone} A goog.i18n.TimeZone object for the given
         *     time zone data.
         */
        static createTimeZone(timeZoneData: number|Object): goog.i18n.TimeZone;
        
        /**
         * Convert the contents of time zone object to a timeZoneData object, suitable
         * for passing to goog.i18n.TimeZone.createTimeZone.
         * @return {!Object} A timeZoneData object (see the documentation for
         *     goog.i18n.TimeZone.createTimeZone).
         */
        getTimeZoneData(): Object;
        
        /**
         * Return the DST adjustment to the time zone offset for a given time.
         * While Daylight Saving Time is in effect, this number is positive.
         * Otherwise, it is zero.
         * @param {goog.date.DateLike} date The time to check.
         * @return {number} The DST adjustment in minutes EAST of UTC.
         */
        getDaylightAdjustment(date: goog.date.DateLike): number;
        
        /**
         * Return the GMT representation of this time zone object.
         * @param {goog.date.DateLike} date The date for which time to retrieve
         *     GMT string.
         * @return {string} GMT representation string.
         */
        getGMTString(date: goog.date.DateLike): string;
        
        /**
         * Get the long time zone name for a given date/time.
         * @param {goog.date.DateLike} date The time for which to retrieve
         *     the long time zone name.
         * @return {string} The long time zone name.
         */
        getLongName(date: goog.date.DateLike): string;
        
        /**
         * Get the time zone offset in minutes WEST of UTC for a given date/time.
         * @param {goog.date.DateLike} date The time for which to retrieve
         *     the time zone offset.
         * @return {number} The time zone offset in minutes WEST of UTC.
         */
        getOffset(date: goog.date.DateLike): number;
        
        /**
         * Get the RFC representation of the time zone for a given date/time.
         * @param {goog.date.DateLike} date The time for which to retrieve the
         *     RFC time zone string.
         * @return {string} The RFC time zone string.
         */
        getRFCTimeZoneString(date: goog.date.DateLike): string;
        
        /**
         * Get the short time zone name for given date/time.
         * @param {goog.date.DateLike} date The time for which to retrieve
         *     the short time zone name.
         * @return {string} The short time zone name.
         */
        getShortName(date: goog.date.DateLike): string;
        
        /**
         * Return the time zone ID for this time zone.
         * @return {string} The time zone ID.
         */
        getTimeZoneId(): string;
        
        /**
         * Check if Daylight Saving Time is in effect at a given time in this time zone.
         * @param {goog.date.DateLike} date The time to check.
         * @return {boolean} True if Daylight Saving Time is in effect.
         */
        isDaylightTime(date: goog.date.DateLike): boolean;
    }
}

declare module goog.i18n.TimeZone {

    /**
     * Indices into the array of time zone names.
     * @enum {number}
     */
    type NameType = number;
    var NameType: {
        STD_SHORT_NAME: NameType;
        STD_LONG_NAME: NameType;
        DLT_SHORT_NAME: NameType;
        DLT_LONG_NAME: NameType;
    };
}
