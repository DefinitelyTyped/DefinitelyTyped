import { Zone } from './zone';

/**
 * `Settings` contains static getters and setters that control Luxon's overall behavior.
 * Luxon is a simple library with few options, but the ones it does have live here.
 */
// tslint:disable-next-line:no-unnecessary-class
export class Settings {
    /**
     * Get the callback for returning the current timestamp.
     */
    static get now(): () => number;

    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     *
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it is Jan 1, 1970 at midnight in UTC time
     */
    static set now(now: () => number);

    /**
     * The default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code).
     */
    static get defaultZone(): Zone;
    static set defaultZone(zone: Zone | string);

    /**
     * The default locale to create DateTimes with. Does not affect existing instances.
     */
    static defaultLocale: string;

    /**
     * The default numbering system to create DateTimes with. Does not affect existing instances.
     */
    static defaultNumberingSystem: string;

    /**
     * The default output calendar to create DateTimes with. Does not affect existing instances.
     */
    static defaultOutputCalendar: string;

    /**
     * Whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     *
     * If setting this to true, be sure to opt-out of Luxon's invalid return types.
     * @example
     * Settings.throwOnInvalid = true;
     * declare module 'luxon' {
     *   interface TSSettings {
     *     throwOnInvalid: true;
     *   }
     * }
     */
    static throwOnInvalid: boolean;

    /**
     * Reset Luxon's global caches. Should only be necessary in testing scenarios.
     */
    static resetCaches(): void;
}

/**
 * TS only settings. Consumers can declaration merge this interface to change TS options.
 *
 * @see Settings.throwOnInvalid
 */
// tslint:disable-next-line:no-empty-interface
export interface TSSettings {}
