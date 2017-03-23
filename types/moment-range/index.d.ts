// Type definitions for Moment-range.js 3.0.3
// Project: https://github.com/gf3/moment-range
// Definitions by: Bart van den Burg <https://github.com/Burgov>, Wilgert Velinga <https://github.com/wilgert>, Juan Francisco Adame <https://github.com/franjuan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from 'moment';

export = momentRange;

declare namespace momentRange {
    type interval = 'years' | 'quarters' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds';

    class DateRange {
        start: moment.Moment;
        end: moment.Moment;

        constructor(range: string | Date[] | moment.Moment[]);
        constructor(start: Date | moment.Moment, end: Date | moment.Moment);

        contains(other: DateRange | moment.Moment | Date, options?: { exclusive?: boolean }): boolean;

        overlaps(range: DateRange, options?: { adjacent?: boolean }): boolean;

        intersect(other: DateRange, options?: { adjacent?: boolean }): DateRange;

        add(other: DateRange): DateRange;

        subtract(other: DateRange): DateRange[];

        by(interval: interval, options?: { exclusive?: boolean, step?: number }): Iterable<moment.Moment>;

        byRange(interval: DateRange, options?: { exclusive?: boolean, step?: number }): Iterable<moment.Moment>;

        isSame(other: DateRange): boolean;

        diff(unit?: moment.unitOfTime.Diff, rounded?: boolean): number;

        toDate(): Date[];

        toString(): string;

        valueOf(): number;

        center(): moment.Moment;

        clone(): DateRange;

        isEqual(other: DateRange): boolean;

        adjacent(other: DateRange): boolean;

        duration(unit?: moment.unitOfTime.Diff, precise?: boolean): number;

        reverseBy(interval: interval, options?: { exclusive?: boolean, step?: number }): Iterable<moment.Moment>;

        reverseByRange(interval: DateRange, options?: { exclusive?: boolean, step?: number }): Iterable<moment.Moment>;

    }
}
