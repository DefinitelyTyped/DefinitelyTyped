import { Zone } from './zone';

/**
 * Settings contains static getters and setters that control Luxon's overall behavior.
 * Luxon is a simple library with few options, but the ones it does have live here.
 */
export namespace Settings {
    /**
     * Get or set the callback function for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    function now(): number;

    /**
     * Get or set the default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code). When accessing
     * this value, it will always be an instance of Zone.
     */
    let defaultZone: Zone | string;

    /**
     * The default locale to create DateTimes with. Does not affect existing instances.
     */
    let defaultLocale: string;

    /**
     * The default numbering system to create DateTimes with. Does not affect existing instances.
     */
    let defaultNumberingSystem: string;

    /**
     * The default output calendar to create DateTimes with. Does not affect existing instances.
     */
    let defaultOutputCalendar: string;

    /**
     * Whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     */
    let throwOnInvalid: boolean;

    /**
     * Reset Luxon's global caches. Should only be necessary in testing scenarios.
     */
    function resetCaches(): void;
}
