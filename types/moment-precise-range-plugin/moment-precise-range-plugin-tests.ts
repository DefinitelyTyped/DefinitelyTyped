import moment = require("moment");
import * as momentPreciseRange from "moment-precise-range-plugin";

// Static methods
const m1 = moment.utc();
const m2 = moment.utc();
moment.preciseDiff(m1, m2);
moment.preciseDiff(m1, m2, true);
moment.preciseDiff(m1, m2, false);

// Instance methods
m1.preciseDiff(m2);
m1.preciseDiff(m2, true);
m1.preciseDiff(m2, false);
