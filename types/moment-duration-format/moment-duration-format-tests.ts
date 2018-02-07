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

moment.duration(123, "minutes").format("d[d] h:mm:ss");
// "2:03:00"

moment.duration(123, "minutes").format("s [seconds], m [minutes], h [hours], d [days]");
// "0 seconds, 3 minutes, 2 hours"

moment.duration(123, "minutes").format("d[d] h:mm:ss", {
  trim: false
});
// "0d 2:03:00"

moment.duration(123, "minutes").format("d[d] h:mm:ss");
// "2:03:00"

moment.duration(123, "minutes").format("d[d] h:mm:ss", {
    trim: "large"
});
// "2:03:00"

moment.duration(0, "minutes").format("d[d] h:mm:ss", {
    trim: "large"
});
// "0"

moment.duration(123, "minutes").format("d[d] h:mm:ss", {
  trim: "small"
});
// "0d 2:03"

moment.duration(0, "minutes").format("d[d] h:mm:ss", {
  trim: "small"
});
// "0d"

moment.duration(123, "minutes").format("d[d] h[h] m[m] s[s]", {
  trim: "both"
});
// "2h 3m"

moment.duration(0, "minutes").format("d[d] h[h] m[m] s[s]", {
  trim: "both"
});
// "0s"

moment.duration(1441, "minutes").format("w[w] d[d] h[h] m[m] s[s]", {
  trim: "mid"
});
// "0w 1d 1m 0s"

moment.duration(1441, "minutes").format("w[w] d[d] h[h] m[m] s[s]", {
  trim: "large mid"
});
// "1d 1m 0s"

moment.duration(1441, "minutes").format("w[w] d[d] h[h] m[m] s[s]", {
  trim: "small mid"
});
// "0w 1d 1m"

moment.duration(1441, "minutes").format("w[w] d[d] h[h] m[m] s[s]", {
  trim: "both mid"
});
// "1d 1m"

moment.duration(0, "minutes").format("w[w] d[d] h[h] m[m] s[s]", {
  trim: "both mid"
});
// "0s"

moment.duration(0, "minutes").format("d[d] h:mm:ss", {
  trim: "large final"
});
// ""

moment.duration(0, "minutes").format("d[d] h:mm:ss", {
  trim: "small final"
});
// ""

moment.duration(0, "minutes").format("d[d] h[h] m[m] s[s]", {
  trim: "both final"
});
// ""

moment.duration(0, "minutes").format("d[d] h[h] m[m] s[s]", {
  trim: "all"
});
// ""

moment.duration(7322, "seconds").format("d [days], h [hours], m [minutes], s [seconds]", {
  largest: 2
});
// "2 hours, 2 minutes"

moment.duration(1216922, "seconds").format("y [years], w [weeks], d [days], h [hours], m [minutes], s [seconds]", {
  largest: 2
});
// "2 weeks, 2 hours"

moment.duration(23, "minutes").format("d[d] h:mm:ss", {
  stopTrim: "h"
});
// "0:23:00"

moment.duration(23, "minutes").format("d[d] *h:mm:ss");
// "0:23:00"

moment.duration(2, "hours").format("y [years], d [days], h [hours], m [minutes], s [seconds]", {
  trim: "both",
  stopTrim: "d m"
});
// "0 days, 2 hours, 0 minutes"

moment.duration(2, "hours").format("y [years], *d [days], h [hours], *m [minutes], s [seconds]", {
  trim: "both"
});
// "0 days, 2 hours, 0 minutes"

moment.duration(2, "hours").format("y [years], d [days], h [hours], m [minutes], s [seconds]", {
  trim: "both",
  stopTrim: "d m",
  largest: 2
});
// "2 hours"

moment.duration(179, "seconds").format("m [minutes]");
// "3 minutes"

moment.duration(3780, "seconds").format("h [hours]", 1);
// "1.1 hours"

moment.duration(179, "seconds").format("m [minutes]", {
  trunc: true
});
// "2 minutes"

moment.duration(3780, "seconds").format("h [hours]", 1, {
  trunc: true
});
// "1.0 hours"

moment.duration(59, "seconds").format("d [days], h [hours], m [minutes]", {
  trunc: true,
  trim: "both"
});
// "0 minutes"

moment.duration(59, "seconds").format("d [days], h [hours], m [minutes]", {
  trunc: true,
  trim: "all"
});
// ""

moment.duration(59, "seconds").format("d [days], h [hours], m [minutes]", {
  trunc: true,
  largest: 1
});
// ""

moment.duration(59, "seconds").format("h [hours], m [minutes]", {
  minValue: 1
});
// "< 1 minute"

moment.duration(59, "seconds").format("h [hours], m [minutes]", {
  minValue: 1,
  trim: "both"
});
// "< 1 minute"

moment.duration(7229, "seconds").format("h [hours], m [minutes]", {
  minValue: 1,
  trim: "both"
});
// "2 hours"

moment.duration(59, "seconds").format("h [hours], m [minutes]", {
  minValue: 1,
  trunc: true,
  trim: "all"
});
// ""

moment.duration(-59, "seconds").format("h [hours], m [minutes]", {
  minValue: 1
});
// "> -1 minute"

moment.duration(59, "seconds").format("h [hours], m [minutes]", {
  minValue: 1,
  trim: false,
  largest: 2
});
// "< 1 minute"

moment.duration(15, "days").format("w [weeks]", {
  maxValue: 2
});
// "> 2 weeks"

moment.duration(-15, "days").format("w [weeks]]", {
  maxValue: 2
});
// "< -2 weeks"

moment.duration(15, "days").format("w [weeks], d [days]", {
  maxValue: 2,
  trim: false,
  largest: 2
});
// "> 2 weeks"

moment.duration(123, "seconds").format("h:mm:ss");
// "2:03"

moment.duration(123, "seconds").format("hh:mm:ss");
// "02:03"

moment.duration(123, "seconds").format("h:mm:ss", {
  forceLength: true
});
// "02:03"

moment.duration(99999, "seconds").format("d [days], h [hours], m [minutes], s [seconds]", {
  useSignificantDigits: true,
  precision: 3
});
// "1 day, 3 hours, 50 minutes"

moment.duration(99999, "seconds").format("d [days], h [hours], m [minutes], s [seconds]", {
  useSignificantDigits: true,
  precision: 3,
  trunc: true
});
// "1 day, 3 hours, 40 minutes"

moment.duration(99999, "seconds").format("d [days], h [hours], m [minutes], s [seconds]", {
  useSignificantDigits: true,
  precision: 5
});
// "1 day, 3 hours, 46 minutes, 40 seconds"

moment.duration(99999, "seconds").format("d [days], h [hours], m [minutes], s [seconds]", {
  useSignificantDigits: true,
  trunc: true,
  precision: 5
});
// "1 day, 3 hours, 46 minutes, 30 seconds"

moment.duration(99999, "seconds").format("d [days], h [hours], m [minutes], s [seconds]", {
  useSignificantDigits: true,
  precision: 6
});
// "1 day, 3 hours, 46 minutes, 39 seconds"

moment.duration(1234567, "seconds").format("m [minutes]", 3);
// "20,576.117 minutes"

moment.duration(1234567, "seconds").format("m [minutes]", 3, {
    userLocale: "de-DE"
});
// "20.576,117 minutes"

moment.duration(2, "minutes").format("m _");
// "2 mins"

moment.duration(2, "minutes").format("m __");
// "2 minutes"

moment.duration(3661, "seconds").format("_HMS_");
// "1:01:01"

moment.duration(3661, "seconds").format("_HM_");
// "1:01"

moment.duration(61, "seconds").format("_MS_");
// "1:01"

moment.duration(1, "minutes").format("m [minutes]");
// "1 minute"

moment.duration(1, "minutes").format("m [mins]");
// "1 min"

moment.duration(2, "minutes").format("m [minute]");
// "2 minutes"

moment.duration(2, "minutes").format("m [min]");
// "2 mins"

moment.duration(1, "minutes").format("m [minutes]", {
  usePlural: false
});
// "1 minutes"

moment.duration(1, "minutes").format("m [mins]", {
  usePlural: false
});
// "1 mins"

moment.duration(2, "minutes").format("m [minute]", {
  usePlural: false
});
// "2 minute"

moment.duration(2, "minutes").format("m [min]", {
  usePlural: false
});
// "2 min"

moment.duration(1, "minutes").format("m [minutes]", 2);
// "1.00 minutes"

moment.duration(7322, "seconds").format("_ h, _ m, _ s", {
  useLeftUnits: true
});
// "hrs 2, mins 2, secs 2"

moment.duration(1234, "seconds").format("s [seconds]");
// "1,234 seconds"

moment.duration(1234, "seconds").format("s [seconds]", {
    useGrouping: false
});
// "1234 seconds"

moment.duration(1234567, "seconds").format("m [minutes]", 3, {
  userLocale: "de-DE"
});
// "20.576,117 minutes"
