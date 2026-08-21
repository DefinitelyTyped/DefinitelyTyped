export as namespace moment;

import moment = require("moment");

export = moment;

declare module "moment" {
    interface Moment {
        short(withoutPreOrSuffix?: boolean, now?: Moment): string;
    }
}
