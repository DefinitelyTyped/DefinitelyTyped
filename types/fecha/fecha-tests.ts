import fecha = require('fecha');

// test fecha.parse
fecha.parse("February 3rd, 2014", "MMMM Do, YYYY");
fecha.parse("5/3/98", "shortDate");

// test override fecha.i18n
fecha.i18n = {
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  amPm: ["am", "pm"],
  DoFn(D: number) {
    return D + "th";
  }
};

// just change one default mask
fecha.masks.shortDate = "M/D/YY";

// test override fecha.masks with an object. Must implement all keys.
// if you want to implement partially, use
// fecha.masks = Object.assign(fecha.masks, {shortDate: 'M/D/YY'}) for example.
fecha.masks = {
  default: "ddd MMM DD YYYY HH:mm:ss",
  shortDate: "M/D/YY",
  mediumDate: "MMM D, YYYY",
  longDate: "MMMM D, YYYY",
  fullDate: "dddd, MMMM D, YYYY",
  shortTime: "HH:mm",
  mediumTime: "HH:mm:ss",
  longTime: "HH:mm:ss.SSS"
};

// test add custom named mask.
// fecha.masks.myMask = "HH:mm:ss YY/MM/DD"; does not work for now.
fecha.masks['myMask'] = "HH:mm:ss YY/MM/DD";

// test fecha.format without i18nSettings, with Date object.
fecha.format(new Date(2014, 5, 6, 14, 10, 45), "myMask");

// test fecha.format without i18nSettings with number.
fecha.format(Date.now(), "myMask");

// test override i18nSettings with fecha.format
fecha.format(new Date(2014, 5, 6, 14, 10, 45), "myMask", {
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  amPm: ["am", "pm"],
  DoFn(D: number) {
    return D + "th";
  }
});
