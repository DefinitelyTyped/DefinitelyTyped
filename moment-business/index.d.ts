// Type definitions for moment-business.js
// Project: https://github.com/jmeas/moment-business
// Definitions by: Greg Sieranski <https://github.com/wonbyte>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from "moment";

declare module "moment" {
    interface MomentBusiness {
        weekDays(startMoment: moment.Moment, endMoment: moment.Moment): number;
        weekendDays(startMoment: moment.Moment, endMoment: moment.Moment): number;
        addWeekDays(moment: moment.Moment, amount: number): moment.Moment;
        subtractWeekDays(moment: moment.Moment, amount: number): moment.Moment;
        isWeekDay(moment: moment.Moment): boolean;
        isWeekendDay(moment: moment.Moment): boolean;
    }

    const momentbusiness: MomentBusiness;
}

// require("moment-business") === require("moment")
export = moment;
