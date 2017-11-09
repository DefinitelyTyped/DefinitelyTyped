// Type definitions for rrule 2.1
// Project: https://github.com/jkbrzt/rrule
// Definitions by: James Bracy <https://github.com/waratuman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace RRule;

/**
 * Use `import rrule = require("rrule")` for AMD and `import { RRule } from "rrule"` for CommonJS loading.
 */
export = RRule;

// For CommonJS it must be imported as `require("rrule").RRule`.
import RRuleAlias = RRule;
declare module "rrule" {
    type RRule = RRuleAlias;
    const RRule: typeof RRuleAlias;
}

declare namespace RRule {
    /**
     * see <http://labix.org/python-dateutil/#head-cf004ee9a75592797e076752b2a889c10f445418>
     * The only required option is `freq`, one of RRule.YEARLY, RRule.MONTHLY, ...
     */
    interface Options {
        freq: RRule.Frequency;
        dtstart?: Date;
        interval?: number;
        wkst?: number | Weekday;
        count?: number;
        until?: Date;
        bysetpos?: number | number[];
        bymonth?: number | number[];
        bymonthday?: number | number[];
        byyearday?: number | number[];
        byweekno?: number | number[];
        byweekday?: Weekday | Weekday[] | number | number[];
        byhour?: number | number[];
        byminute?: number | number[];
        bysecond?: number | number[];
    }

    class Weekday {
        constructor(weekday: number, n: number);

        nth(n: number): Weekday;

        equals(other: Weekday): boolean;

        toString(): string;

        getJsWeekday(): number;
    }
}

declare class RRule {
    /**
     * @param options - see <http://labix.org/python-dateutil/#head-cf004ee9a75592797e076752b2a889c10f445418>
     *        The only required option is `freq`, one of RRule.YEARLY, RRule.MONTHLY, ...
     */
    constructor(options: RRule.Options, noCache?: boolean);

    options: RRule.Options;

    origOptions: RRule.Options;

    /**
     * Returns the first recurrence after the given datetime instance.
     * The inc keyword defines what happens if dt is an occurrence.
     * With inc == True, if dt itself is an occurrence, it will be returned.
     * @return Date or null
     */
    after(dt: Date, inc?: boolean): Date;

    /**
     * @param iterator - optional function that will be called
     *                   on each date that is added. It can return false
     *                   to stop the iteration.
     * @return Array containing all recurrences.
     */
    all(iterator?: (date: Date, index?: number) => void): Date[];

    /**
     * Returns all the occurrences of the rrule between after and before.
     * The inc keyword defines what happens if after and/or before are
     * themselves occurrences. With inc == True, they will be included in the
     * list, if they are found in the recurrence set.
     * @return Array
     */
    between(a: Date, b: Date, inc?: boolean, iterator?: (date: Date, index: number) => void): Date[];

    /**
     * Returns the last recurrence before the given datetime instance.
     * The inc keyword defines what happens if dt is an occurrence.
     * With inc == True, if dt itself is an occurrence, it will be returned.
     * @return Date or null
     */
    before(dt: Date, inc?: boolean): Date;

    /**
     * Returns the number of recurrences in this set. It will have go trough
     * the whole recurrence, if this hasn't been done before.
     */
    count(): number;

    /**
     * Converts the rrule into its string representation
     * @see <http://www.ietf.org/rfc/rfc2445.txt>
     * @return String
     */
    toString(): string;

    /**
     * Will convert all rules described in nlp:ToText
     * to text.
     */
    toText(gettext?: (str: string) => string, language?: any): string;

    isFullyConvertibleToText(): boolean;

    clone(): RRule;
}

declare namespace RRule {
    const FREQUENCIES: "YEARLY" | "MONTHLY" | "WEEKLY" | "DAILY" | "HOURLY" | "MINUTELY" | "SECONDLY";

    enum Frequency {
        YEARLY      = 0,
        MONTHLY     = 1,
        WEEKLY      = 2,
        DAILY       = 3,
        HOURLY      = 4,
        MINUTELY    = 5,
        SECONDLY    = 6
    }

    const YEARLY: Frequency;
    const MONTHLY: Frequency;
    const WEEKLY: Frequency;
    const DAILY: Frequency;
    const HOURLY: Frequency;
    const MINUTELY: Frequency;
    const SECONDLY: Frequency;

    const MO: Weekday;
    const TU: Weekday;
    const WE: Weekday;
    const TH: Weekday;
    const FR: Weekday;
    const SA: Weekday;
    const SU: Weekday;

    const DEFAULT_OPTIONS: RRule.Options;

    function parseText(text: string, language?: any): RRule.Options;

    function fromText(text: string, language?: any): RRule;

    function optionsToString(options: RRule.Options): string;

    function parseString(rfcString: string): RRule.Options;

    function fromString(value: string): RRule;

    class RRuleSet extends RRule {
      /**
       * @param noCache  The same stratagy as RRule on cache, default to false
       */
      constructor(noCache?: boolean);
      rrule(rrule: RRule): void;
      rdate(date: Date): void;
      exrule(rrule: RRule): void;
      exdate(date: Date): void;
      valueOf(): string[];
      /**
       * to generate recurrence field sush as:
       *   ["RRULE:FREQ=YEARLY;COUNT=2;BYDAY=TU;DTSTART=19970902T010000Z","RRULE:FREQ=YEARLY;COUNT=1;BYDAY=TH;DTSTART=19970902T010000Z"]
       */
      toString(): string;
      /**
       * Create a new RRuleSet Object completely base on current instance
       */
      clone(): RRuleSet;
    }
}
