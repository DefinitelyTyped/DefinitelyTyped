// Type definitions for moment-business-time 1.1
// Project: https://github.com/lennym/moment-business-time
// Definitions by: Tomasz Nguyen <https://github.com/swist>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from 'moment';

declare module 'moment' {
    interface Moment {
        nextWorkingDay: () => Moment;
        nextWorkingTime: () => Moment;

        /**
         * Returns a new object with moment and transition properties representing
         * the next moment when the business will transition between 'open' and 'closed' states.
         */
        nextTransitionTime: () => TransitionTime;

        /**
         * Returns a new object with moment and transition properties representing
         * the most recent moment when the business transitioned between 'open' and 'closed' states.
         */
        lastTransitionTime: () => TransitionTime;

        lastWorkingDay: () => Moment;
        lastWorkingTime: () => Moment;

        addWorkingTime: (...args: Array<number | unitOfTime.Base>) => Moment;
        subtractWorkingTime: (...args: Array<number | unitOfTime.Base>) => Moment;

        workingDiff: (moment: Moment, unit: unitOfTime.Base, fractions?: boolean) => number;

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

    interface TransitionTime {
        moment: Moment;
        transition: 'open' | 'close';
    }
}
