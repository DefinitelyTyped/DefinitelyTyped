// Type definitions for moment-precise-range 0.2
// Project: https://github.com/codebox/moment-precise-range
// Definitions by: Mitchell Grice <https://github.com/gricey432>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import moment = require('moment');

export = moment;

declare module "moment" {
    interface PreciseRangeValueObject {
        years: number;
        months: number;
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
        firstDateWasLater: boolean;
    }

    interface Moment {
        preciseDiff(d2: Moment, returnValueObject?: false): string;
        preciseDiff(d2: Moment, returnValueObject: true): PreciseRangeValueObject;
    }

    function preciseDiff(d1: Moment, d2: Moment, returnValueObject?: false): string;
    function preciseDiff(d1: Moment, d2: Moment, returnValueObject: true): PreciseRangeValueObject;
}
