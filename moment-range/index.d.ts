// Type definitions for Moment.js 2.17.1 && Moment-range.js 3.0.3
// Project: https://github.com/gf3/moment-range
// Definitions by: Bart van den Burg <https://github.com/Burgov>, Wilgert Velinga <https://github.com/wilgert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from 'moment';

export = moment;

type interval = 'years' | 'quarters' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds';

declare module 'moment' {
     interface Range {
        start: Moment;
        end: Moment;

        adjacent (other: Range): boolean;

        add (other: Range): Range;

        by(interval: interval, options?: {exclusive?: boolean, step?: number}): Iterable<Range>;

        byRange(interval: Range, options?: {exclusive?: boolean, step?: number}): Iterable<Range>;

        center (): Moment;

        clone (): Range;

        contains (other: Range, options?: {exclusive?: boolean}): boolean;

        diff (unit?: unitOfTime.Diff, precise?: boolean): number;

        duration (unit?: unitOfTime.Diff, precise?: boolean): number;

        intersect (other: Range): Range;

        isEqual (other: Range): boolean;

        isSame (other: Range): boolean;

        overlaps (range: Range, options?: {adjacent?: boolean}): boolean;

        reverseBy(interval: interval, options?: {exclusive?: boolean, step?: number}): Iterable<Range>;

        reverseByRange(interval: Range, options?: {exclusive?: boolean, step?: number}): Iterable<Range>;

        subtract (other: Range): Range[];

        toDate (): Date[];

        toString (): string;

        valueOf (): number;
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
