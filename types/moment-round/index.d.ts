// Type definitions for moment-round 1.0
// Project: https://github.com/WebDevTmas/moment-round
// Definitions by: Jacob Baskin <https://github.com/jacobbaskin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from 'moment';

export = moment;

declare module 'moment' {
    interface Moment {
        round(precision: number, key: string, direction?: 'round' | 'ceil' | 'floor'): Moment;
        ceil(precision: number, key: string): Moment;
        floor(precision: number, key: string): Moment;
    }
}
