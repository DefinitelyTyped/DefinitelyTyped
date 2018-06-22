// Type definitions for moment-business-days 1.0.6
// Project: https://github.com/kalmecak/moment-business-days
// Definitions by: David Gasperoni <https://github.com/mcdado>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ On this line, import the module which this module adds to */
import * as moment from 'moment';

/*~ Here, declare the same module as the one you imported above */
declare module 'moment' {
    interface Moment {
        isHoliday: () => boolean;
        isBusinessDay: () => boolean;

        businessDaysIntoMonth: () => Moment;

        businessDiff: (param: Moment) => number;
        businessAdd: (param: number, period?: unitOfTime.Base) => Moment;
        businessSubtract: (param: number, period?: unitOfTime.Base) => Moment;

        nextBusinessDay: () => Moment;
        prevBusinessDay: () => Moment;

        monthBusinessDays: (partialEndDate?: Moment) => Moment[];
        monthNaturalDays: (fromToday?: boolean) => Moment[];
        monthBusinessWeeks: (fromToday?: boolean) => Moment[][];
        monthNaturalWeeks: (fromToday?: boolean) => Moment[][];
    }

    interface LocaleSpecification {
        holidays?: string[];
        holidayFormat?: string;
    }
}
