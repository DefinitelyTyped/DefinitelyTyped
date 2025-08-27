declare function _exports(
    dateStr: string,
    opt_options?: {
        format?: typeof DateFormat;
        rangeLimit?: typeof Limit;
        baseDate?: Date;
    }
): Date;
export = _exports;
import DateFormat = require('./DateFormat.js');
import Limit = require('../range/Limit.js');
