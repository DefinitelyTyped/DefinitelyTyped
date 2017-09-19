import * as moment from "moment";
import 'moment-duration-format';

moment.duration(123, "minutes").format();
// "2:03:00"

moment.duration(123, "months").format();
// "10y 3m"

moment.duration(123, "minutes").format("h:mm");
// "2:03"

moment.duration(123, "minutes").format("h [hrs], m [min]");
// "2 hrs, 3 min"

moment.duration(123, "minutes").format("h [hrs]");
// "2 hrs"

moment.duration(123, "minutes").format("h [hrs]", 2);
// "2.04 hrs"

moment.duration(123, "minutes").format("m [min]", -1);
// "120 min"

moment.duration(123, "minutes").format({ template: "h [hrs]", precision: 2 });
// "2.04 hrs"

moment.duration(123, "minutes").format("d[d] h:mm:ss");
// "2:03:00"

moment.duration(123, "minutes").format("d[d] h:mm:ss", { trim: false });
// "0d 2:03:00"

moment.duration(123, "minutes").format("[seconds:] s -- [minutes:] m -- [hours:] h -- [days:] d", { trim: "right" });
// "seconds: 0 -- minutes: 3 -- hours: 2"

moment.duration(123, "seconds").format("h:mm:ss");
// "2:03"

moment.duration(123, "seconds").format("hh:mm:ss");
// "02:03"

moment.duration(123, "seconds").format("h:mm:ss", { forceLength: true });
// "02:03"

moment.duration.fn.format.defaults.escape = /\((.+?)\)/;
moment.duration(123, "seconds").format("m (minutes)", 2);
// "2.04 minutes"

moment.duration.fn.format.defaults.years = /[Aa]+/;
moment.duration(123, "weeks").format("a [años]", 2);
// "2.35 años"

moment.duration.fn.format.defaults.months = /m+/;
moment.duration(123, "weeks").format("m M", 2);
// "28.36 M"

moment.duration.fn.format.defaults.weeks = /w+/;
moment.duration(123, "days").format("w W", 2);
// "17.57 W"

moment.duration.fn.format.defaults.days = /d+/;
moment.duration(123, "hours").format("d D", 2);
// "5.12 D"

moment.duration.fn.format.defaults.hours = /h+/;
moment.duration(123, "minutes").format("h H", 2);
// "2.04 H"

moment.duration.fn.format.defaults.minutes = /n+/;
moment.duration(123, "seconds").format("n:ss");
// "2:03"
