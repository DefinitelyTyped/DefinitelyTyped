declare function _exports(
    date: Date,
    opt_options?: {
        format?: typeof DateFormat;
    }
): string;
export = _exports;
import DateFormat = require('./DateFormat.js');
