import { CalendarSystem, NumberingSystem, StringUnitLength, UnitLength } from './misc';
import { Zone } from './zone';

export interface InfoOptions {
    locale?: string;
}

export interface InfoUnitOptions extends InfoOptions {
    numberingSystem?: NumberingSystem;
}

/** @deprecated */
export type UnitOptions = InfoUnitOptions;

export interface InfoCalendarOptions extends InfoUnitOptions {
    outputCalendar?: CalendarSystem;
}

export interface Features {
    /**
     * Whether this environment supports general internationalization
     */
    intl: boolean;
    /**
     * Whether this environment supports internationalized token-based formatting/parsing
     */
    intlTokens: boolean;
    /**
     * Whether this environment supports IANA timezones
     */
    zones: boolean;
    /**
     * Whether this environment supports relative time formatting
     */
    relative: boolean;
}

/**
 * The Info "class" contains static methods for retrieving general time and date related data.
 * For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale,
 * and for discovering which of Luxon features are available in the current environment.
 */
export namespace Info {
    /**
     * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
     * @param [length='short'] - the length of the era representation, such as "short" or "long".
     * @param [options] - options
     * @param [options.locale] - the locale code
     * @example
     * Info.eras() //=> [ 'BC', 'AD' ]
     * @example
     * Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
     * @example
     * Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
     */
    function eras(length?: StringUnitLength, options?: InfoOptions): string[];

    /**
     * Return the set of available features in this environment.
     * Some features of Luxon are not available in all environments.
     * For example, on older browsers, timezone support is not available.
     * Use this function to figure out if that's the case.
     * Keys:
     * * `zones`: whether this environment supports IANA timezones
     * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
     * * `intl`: whether this environment supports general internationalization
     * * `relative`: whether this environment supports relative time formatting
     */
    function features(): Features;

    /**
     * Return whether the specified zone contains a DST.
     * @param [zone='local'] - Zone to check. Defaults to the environment's local zone.
     */
    function hasDST(zone?: string | Zone): boolean;

    /**
     * Return whether the specified zone is a valid IANA specifier.
     * @param zone - Zone to check
     */
    function isValidIANAZone(zone: string): boolean;

    /**
     * Converts the input into a {@link Zone} instance.
     *
     * * If `input` is already a Zone instance, it is returned unchanged.
     * * If `input` is a string containing a valid time zone name, a Zone instance
     *   with that name is returned.
     * * If `input` is a string that doesn't refer to a known time zone, a Zone
     *   instance with {@link Zone.isValid} == false is returned.
     * * If `input is a number, a Zone instance with the specified fixed offset
     *   in minutes is returned.
     * * If `input` is `null` or `undefined`, the default zone is returned.
     * @param [input] - the value to be converted
     */
    function normalizeZone(input?: number | string | Zone): Zone;

    /**
     * Return an array of meridiems.
     * @param [options] - options
     * @param [options.locale] - the locale code
     * @example
     * Info.meridiems() //=> [ 'AM', 'PM' ]
     * @example
     * Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
     */
    function meridiems(options?: InfoOptions): string[];

    /**
     * Return an array of standalone month names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param [length='long'] - the length of the month representation
     * @param [options] - options
     * @param [options.locale] - the locale code
     * @param [options.numberingSystem=null] - the numbering system
     * @param [options.outputCalendar='gregory'] - the calendar
     * @example
     * Info.months()[0] //=> 'January'
     * @example
     * Info.months('short')[0] //=> 'Jan'
     * @example
     * Info.months('numeric')[0] //=> '1'
     * @example
     * Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
     * @example
     * Info.months('numeric', { locale: 'ar' })[0] //=> '١'
     * @example
     * Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
     */
    function months(length?: UnitLength, options?: InfoCalendarOptions): string[];

    /**
     * Return an array of format month names.
     * Format months differ from standalone months in that they're meant to appear next to the day of the month.
     * In some languages, that changes the string.
     * See {@link months}
     * @param [length='long'] - the length of the month representation
     * @param [options] - options
     * @param [options.locale] - the locale code
     * @param [options.numberingSystem=null] - the numbering system
     * @param [options.outputCalendar='gregory'] - the calendar
     */
    function monthsFormat(length?: UnitLength, options?: InfoCalendarOptions): string[];

    /**
     * Return an array of standalone week names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param [length='long'] - the length of the weekday representation
     * @param [options] - options
     * @param [options.locale] - the locale code
     * @param [options.numberingSystem=null] - the numbering system
     * @example
     * Info.weekdays()[0] //=> 'Monday'
     * @example
     * Info.weekdays('short')[0] //=> 'Mon'
     * @example
     * Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
     * @example
     * Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
     */
    function weekdays(length?: StringUnitLength, options?: InfoUnitOptions): string[];

    /**
     * Return an array of format week names.
     * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information.
     * In some languages, that changes the string.
     * See {@link weekdays}
     * @param [length='long'] - the length of the weekday representation
     * @param [options] - options
     * @param [options.locale=null] - the locale code
     * @param [options.numberingSystem=null] - the numbering system
     */
    function weekdaysFormat(length?: StringUnitLength, options?: InfoUnitOptions): string[];
}
