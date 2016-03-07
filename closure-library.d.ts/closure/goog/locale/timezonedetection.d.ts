declare module goog {
    function require(name: 'goog.locale.timeZoneDetection'): typeof goog.locale.timeZoneDetection;
}

declare module goog.locale.timeZoneDetection {

    /**
     * Calculates time zone fingerprint by poking time zone offsets for 13
     * preselected time points.
     * See {@link goog.locale.timeZoneDetection.TZ_POKE_POINTS_}
     * @param {Date} date Date for calculating the fingerprint.
     * @return {number} Fingerprint of user's time zone setting.
     */
    function getFingerprint(date: Date): number;

    /**
     * Detects browser's time zone setting. If user's country is known, a better
     * time zone choice could be guessed.
     * @param {string=} opt_country Two-letter ISO 3166 country code.
     * @param {Date=} opt_date Date for calculating the fingerprint. Defaults to the
     *     current date.
     * @return {string} Time zone ID of best guess.
     */
    function detectTimeZone(opt_country?: string, opt_date?: Date): string;

    /**
     * Returns an array of time zones that are consistent with user's platform
     * setting. If user's country is given, only the time zone for that country is
     * returned.
     * @param {string=} opt_country 2 letter ISO 3166 country code. Helps in making
     *     a better guess for user's time zone.
     * @param {Date=} opt_date Date for retrieving timezone list. Defaults to the
     *     current date.
     * @return {!Array<string>} Array of time zone IDs.
     */
    function getTimeZoneList(opt_country?: string, opt_date?: Date): Array<string>;
}
