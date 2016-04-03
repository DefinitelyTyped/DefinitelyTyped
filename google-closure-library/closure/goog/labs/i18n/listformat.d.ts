declare module goog {
    function require(name: 'goog.labs.i18n.ListFormat'): typeof goog.labs.i18n.ListFormat;
    function require(name: 'goog.labs.i18n.GenderInfo'): typeof goog.labs.i18n.GenderInfo;
    function require(name: 'goog.labs.i18n.GenderInfo.Gender'): typeof goog.labs.i18n.GenderInfo.Gender;
}

declare module goog.labs.i18n {

    /**
     * ListFormat provides a method to format a list/array of objects to a string,
     * in a user friendly way and in a locale sensitive manner.
     * If the objects are not strings, toString is called to convert them.
     * The constructor initializes the object based on the locale data from
     * the current goog.labs.i18n.ListFormatSymbols.
     *
     * Similar to the ICU4J class com.ibm.icu.text.ListFormatter:
     *   http://icu-project.org/apiref/icu4j/com/ibm/icu/text/ListFormatter.html
     * @constructor
     * @final
     */
    class ListFormat {
        constructor();
        
        /**
         * Formats an array of strings into a string.
         * It is a user facing, locale-aware list (i.e. 'red, green, and blue').
         *
         * @param {!Array<string|number>} items Items to format.
         * @return {string} The items formatted into a string, as a list.
         */
        format(items: Array<string|number>): string;
    }

    /**
     * GenderInfo provides a method to determine the gender of a list/array
     * of objects when one knows the gender of each item of the list.
     * It does this in a locale sensitive manner.
     * The constructor initializes the object based on the locale data from
     * the current goog.labs.i18n.ListFormatSymbols.
     *
     * Similar to the ICU4J class com.icu.util.GenderInfo:
     *   http://icu-project.org/apiref/icu4j/com/ibm/icu/util/GenderInfo.html
     * @constructor
     * @final
     */
    class GenderInfo {
        constructor();
        
        /**
         * Determines the overal gender of a list based on the gender of all the list
         * items, in a locale-aware way.
         * @param {!Array<!goog.labs.i18n.GenderInfo.Gender>} genders An array of
         *        genders, will give the gender of the list.
         * @return {goog.labs.i18n.GenderInfo.Gender} Get the gender of the list.
        */
        getListGender(genders: Array<goog.labs.i18n.GenderInfo.Gender>): goog.labs.i18n.GenderInfo.Gender;
    }
}

declare module goog.labs.i18n.GenderInfo {

    /**
     * Enumeration for the possible ways to generate list genders.
     * Indicates the category for the locale.
     * This only affects gender for lists more than one. For lists of 1 item,
     * the gender of the list always equals the gender of that sole item.
     * This is for internal use, matching ICU.
     * @enum {number}
     * @private
     */
    type ListGenderStyle_ = number;
    var ListGenderStyle_: {
        NEUTRAL: ListGenderStyle_;
        MIXED_NEUTRAL: ListGenderStyle_;
        MALE_TAINTS: ListGenderStyle_;
    };

    /**
     * Enumeration for the possible gender values.
     * Gender: OTHER means either the information is unavailable,
     * or the person has declined to state MALE or FEMALE.
     * @enum {number}
     */
    type Gender = number;
    var Gender: {
        MALE: Gender;
        FEMALE: Gender;
        OTHER: Gender;
    };
}
