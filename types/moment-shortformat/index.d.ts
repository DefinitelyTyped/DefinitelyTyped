// Type definitions for moment-shortformat 2.1
// Project: https://github.com/researchgate/moment-shortformat#readme
// Definitions by: whatasoda <https://github.com/whatasoda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace moment;

import moment = require('moment');

export = moment;

declare module 'moment' {
    interface Moment {
        short(withoutPreOrSuffix?: boolean, now?: Moment): string;
    }
}
