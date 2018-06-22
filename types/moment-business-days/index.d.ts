// Type definitions for moment-business-days 0.1
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

        businessDiff: (param: Moment) => Number;
        businessAdd: (param: Number, period?: unitOfTime.Base) => Moment;
        businessSubtract: (param: Number, period?: unitOfTime.Base) => Moment;

        nextBusinessDay: () => Moment;
        prevBusinessDay: () => Moment;

        monthBusinessDays: (partialEndDate?: Moment) => Array<Moment>;
        monthNaturalDays: (fromToday?: boolean) => Array<Moment>;
        monthBusinessWeeks: (fromToday?: boolean) => Array<Array<Moment>>;
        monthNaturalWeeks: (fromToday?: boolean) => Array<Array<Moment>>;
    }

    interface LocaleSpecification {
        holidays?: string[];
        holidayFormat?: string;
    }
}
