// Type definitions for Moment-range.js 3.0.3
// Project: https://github.com/gf3/moment-range
// Definitions by: Bart van den Burg <https://github.com/Burgov>, Wilgert Velinga <https://github.com/wilgert>, Juan Francisco Adame <https://github.com/franjuan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from 'moment';

export = moment;

type interval = 'years' | 'quarters' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds';

declare module 'moment' {
     interface Range {
        start: Moment;
        end: Moment;

        contains (other: Range, options?: {exclusive?: boolean}): boolean;

        overlaps (range: Range, options?: {adjacent?: boolean}): boolean;

        intersect (other: Range, options?: {adjacent?: boolean}): Range;

        add (other: Range): Range;

        subtract (other: Range): Range[];

        by(interval: interval, options?: {exclusive?: boolean, step?: number}): Iterable<Range>;

        byRange(interval: Range, options?: {exclusive?: boolean, step?: number}): Iterable<Range>;

        isSame (other: Range): boolean;

        diff (unit?: unitOfTime.Diff, precise?: boolean): number;

        toDate (): Date[];

        toString (): string;

        valueOf (): number;

        center (): Moment;

        clone (): Range;

        isEqual (other: Range): boolean;

        adjacent (other: Range): boolean;

        duration (unit?: unitOfTime.Diff, precise?: boolean): number;

        reverseBy(interval: interval, options?: {exclusive?: boolean, step?: number}): Iterable<Range>;

        reverseByRange(interval: Range, options?: {exclusive?: boolean, step?: number}): Iterable<Range>;

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
