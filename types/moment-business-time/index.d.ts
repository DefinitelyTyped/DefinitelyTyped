// Type definitions for moment-business-time 0.7
// Project: https://github.com/lennym/moment-business-time
// Definitions by: Tomasz Nguyen <https://github.com/swist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ On this line, import the module which this module adds to */
import * as moment from 'moment';

/*~ Here, declare the same module as the one you imported above */
declare module 'moment' {
    interface Moment {
        nextWorkingDay: () => Moment;
        nextWorkingTime: () => Moment;

        lastWorkingDay: () => Moment;
        lastWorkingTime: () => Moment;

        addWorkingTime: (...args: Array<number | unitOfTime.Base>) => Moment;
        subtractWorkingTime: (...args: Array<number | unitOfTime.Base>) => Moment;

        workingDiff: (moment: Moment, unit: unitOfTime.Base, fractions?: boolean) => Moment;

        isWorkingDay: () => boolean;
        isWorkingTime: () => boolean;
    }

    interface WorkingHoursMap {
        0: string[] | null;
        1: string[] | null;
        2: string[] | null;
        3: string[] | null;
        4: string[] | null;
        5: string[] | null;
        6: string[] | null;
    }

    interface LocaleSpecification {
        workinghours?: WorkingHoursMap;
        holidays?: string[];
    }
}
