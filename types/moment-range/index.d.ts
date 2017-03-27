// Type definitions for Moment.js 2.0.4
// Project: https://github.com/gf3/moment-range
// Definitions by: Bart van den Burg <https://github.com/Burgov>, Wilgert Velinga <https://github.com/wilgert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from 'moment';

export = moment;

declare module 'moment' {
     interface Range {
        start: Moment;
        end: Moment;

        contains (other: Date, exclusive?: boolean): boolean;
        contains (other: Moment, exclusive?: boolean): boolean;

        overlaps (range: Range): boolean;

        intersect (other: Range): Range;

        add (other: Range): Range;

        subtract (other: Range): Range[];

        by (range: string, hollaback: (current: Moment) => void, exclusive?: boolean): void;
        by (range: Range, hollaback: (current: Moment) => void, exclusive?: boolean): void;

        isSame (other: Range): boolean;

        diff (unit?: string): number;

        toDate (): Date;

        toString (): string;

        toArray (by: Range|String, exclusive?: boolean): Moment[];

        valueOf (): number;

        center (): number;

        clone (): Range;
    }

    interface Moment {
        within (x: moment.Range): boolean;
    }

    function range(range: string): moment.Range;
    function range(range: Date[]): moment.Range;
    function range(range: Moment[]): moment.Range;
    function range(start: Date, end: Date): moment.Range;
    function range(start: Moment, end: Moment): moment.Range;
}
