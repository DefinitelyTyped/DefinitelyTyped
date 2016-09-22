// Type definitions for rrule 2.1.0
// Project: https://github.com/jkbrzt/rrule
// Definitions by: James Bracy <https://github.com/waratuman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'rrule' {
    export = RRule;
}

declare namespace RRule {

    /**
    * see <http://labix.org/python-dateutil/#head-cf004ee9a75592797e076752b2a889c10f445418>
    * The only required option is `freq`, one of RRule.YEARLY, RRule.MONTHLY, ...
    */
    interface Options {
        freq: any; // Should be enum
        dtstart?: Date;
        interval?: number;
        wkst?: number // | day enum
        count?: number;
        until?: Date;
        bysetpos?: number;
        bymonth?: number;
        bymonthday?: number;
        byyearday?: number;
        byweekno?: number;
        byweekday?: Weekday[];
        byhour?: number;
        byminute?: number;
        bysecond?: number;
    }

    interface Weekday {
        new (n: number): Weekday;
        nth(n: number): Weekday;
        equals(other: Weekday): boolean;
        toString(): string;
        getJsWeekday(): number;
    }

}

declare class RRule {

    /**
    * @param {Object?} options - see <http://labix.org/python-dateutil/#head-cf004ee9a75592797e076752b2a889c10f445418>
    *        The only required option is `freq`, one of RRule.YEARLY, RRule.MONTHLY, ...
    * @constructor
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
    * @param {Function} iterator - optional function that will be called
    *                   on each date that is added. It can return false
    *                   to stop the iteration.
    * @return Array containing all recurrences.
    */
    all(iterator?: (date: Date) => void): Date[];

    /**
    * Returns all the occurrences of the rrule between after and before.
    * The inc keyword defines what happens if after and/or before are
    * themselves occurrences. With inc == True, they will be included in the
    * list, if they are found in the recurrence set.
    * @return Array
    */
    between(a: Date, b: Date, iterator?: (date: Date) => void): Date[];

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

    const FREQUENCIES: ['YEARLY' | 'MONTHLY' | 'WEEKLY' | 'DAILY' | 'HOURLY' | 'MINUTELY' | 'SECONDLY'];

    const YEARLY: number;
    const MONTHLY: number;
    const WEEKLY: number;
    const DAILY: number;
    const HOURLY: number;
    const MINUTELY: number;
    const SECONDLY: number;

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

    class RRuleSet {
        constructor(noCache?: boolean);

        /**
        * @param {RRule}
        */
        rrule(rrule: RRule): void;

        /**
        * @param {Date}
        */
        rdate(date: Date): void;
    
        /**
        * @param {RRule}
        */
        exrule(rrule: RRule): void;

        /**
        * @param {Date}
        */
        exdate(date: Date): void;
            
        valueOf(): string;

        /**
        * to generate recurrence field sush as:
        *   ["RRULE:FREQ=YEARLY;COUNT=2;BYDAY=TU;DTSTART=19970902T010000Z","RRULE:FREQ=YEARLY;COUNT=1;BYDAY=TH;DTSTART=19970902T010000Z"]
        */
        toString(): string;
            
        /**
        * Create a new RRuleSet Object completely base on current instance
        */
        clone(): RRuleSet;

        /**
        * Returns the first recurrence after the given datetime instance.
        * The inc keyword defines what happens if dt is an occurrence.
        * With inc == True, if dt itself is an occurrence, it will be returned.
        * @return Date or null
        */
        after(dt: Date, inc?: boolean): Date;

        /**
        * @param {Function} iterator - optional function that will be called
        *                   on each date that is added. It can return false
        *                   to stop the iteration.
        * @return Array containing all recurrences.
        */
        all(iterator?: (date: Date) => void): Date[]

        /**
        * Returns all the occurrences of the rrule between after and before.
        * The inc keyword defines what happens if after and/or before are
        * themselves occurrences. With inc == True, they will be included in the
        * list, if they are found in the recurrence set.
        * @return Array
        */
        between(a: Date, b: Date, iterator?: (date: Date) => void): Date[];

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

    }

    /**
    * RRuleStr
    *  To parse a set of rrule strings
    */
    class RRuleString {
        constructor();
        parse(s: string, options: RRuleString.Options): RRuleSet | RRule;
    }

    namespace RRuleString {
        interface Options {
            dtstart: Date;
            cache: boolean;
            unfold: boolean;
            forceset: boolean;
            compatible: boolean;
            ignoretz: boolean;
            tzinfos: any;
        } 

        const DEFAULT_OPTIONS: Options;
    }

    const rrulestr: RRuleString;

}
