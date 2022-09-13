/**
 * The Scoped GlideFilter API provides a method to determine if a record meets a specified set of
 * requirements.
 *
 * There is no constructor for Scoped GlideFilter. It is accessed by using the global object
 * `GlideFilter`.
 */
declare const GlideFilter: {
    /**
     * The filter parameter is an encoded query string.
     *
     * The method returns true when the record meets the filter condition. If the filter is composed
     * of one or more "AND" conditions for example `active=true^number=abc^category=request` and the
     * matchAll parameter is set to false, then if any of the conditions is true then true is
     * returned. If the matchAll parameter is true, then all conditions in the filter must be true
     * in order to return true.
     *
     * @param gr The GlideRecord to be evaluated.
     * @param filter An encoded query string.
     * @param matchAll (Optional) If true and the encoded query string contains multiple conditions
     * then all conditions must be true for the method to return true. If false and the encoded
     * query string contains multiple conditions then only one condition needs to be true for the
     * method to return true. If the encoded query string has only one condition, this parameter has
     * no impact.
     * @returns True when the record meets the filter conditions.
     * @example
     *
     * var rec = new GlideRecord('incident');
     * rec.query();
     * var bool = true;
     * while(rec.next()) {
     *   bool = GlideFilter.checkRecord(rec, 'active=true');
     *   gs.info('number ' + rec. number + ' is ' + bool);
     * }
     */
    checkRecord(gr: ScopedGlideRecord, filter: string, matchAll?: object): boolean;
};
