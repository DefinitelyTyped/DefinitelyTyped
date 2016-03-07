declare module goog.locale {

    /**
     * Returns the displayable list of short timezone names paired with its id for
     * the current locale, selected based on the region or language provided.
     *
     * This method depends on goog.locale.TimeZone*__<locale> available
     * from http://go/js_locale_data. Users of this method must add a dependency on
     * this.
     *
     * @param {string=} opt_regionOrLang If region tag is provided, timezone ids
     *    specific this region are considered. If language is provided, all regions
     *    for which this language is defacto official is considered. If
     *    this parameter is not speficied, current locale is used to
     *    extract this information.
     *
     * @return {!Array<Object>} Localized and relevant list of timezone names
     *    and ids.
     */
    function getTimeZoneSelectedShortNames(opt_regionOrLang?: string): Array<Object>;

    /**
     * Returns the displayable list of long timezone names paired with its id for
     * the current locale, selected based on the region or language provided.
     *
     * This method depends on goog.locale.TimeZone*__<locale> available
     * from http://go/js_locale_data. Users of this method must add a dependency on
     * this.
     *
     * @param {string=} opt_regionOrLang If region tag is provided, timezone ids
     *    specific this region are considered. If language is provided, all regions
     *    for which this language is defacto official is considered. If
     *    this parameter is not speficied, current locale is used to
     *    extract this information.
     *
     * @return {!Array<Object>} Localized and relevant list of timezone names
     *    and ids.
     */
    function getTimeZoneSelectedLongNames(opt_regionOrLang?: string): Array<Object>;

    /**
     * Returns the displayable list of long timezone names paired with its id for
     * the current locale.
     *
     * This method depends on goog.locale.TimeZoneAllLongNames__<locale> available
     * from http://go/js_locale_data. Users of this method must add a dependency on
     * this.
     *
     * @return {Array<Object>} localized and relevant list of timezone names
     *    and ids.
     */
    function getTimeZoneAllLongNames(): Array<Object>;
}
