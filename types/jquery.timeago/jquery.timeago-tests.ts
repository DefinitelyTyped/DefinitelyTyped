// Basic usage

var jQueryElement: JQuery = jQuery("abbr.timeago").timeago();

// Programmatic use

var result1: string = jQuery.timeago(new Date());
var result2: string = jQuery.timeago("2008-07-17");
var result3: string = jQuery.timeago(jQuery("abbr#some_id"));
var result4: string = jQuery.timeago(document.getElementById("some_id"));

// Helpers

var string1: string = jQuery.timeago.inWords(new Date());
var string2: string = jQuery.timeago.inWords(123456);

var date1: Date = jQuery.timeago.parse("2008-07-17T09:24:17Z");

var date2: Date = jQuery.timeago.datetime(jQuery("abbr#some_id"));
var date3: Date = jQuery.timeago.datetime(document.getElementById("some_id"));

var isTime1: boolean = jQuery.timeago.isTime(jQuery("abbr#some_id"));
var isTime2: boolean = jQuery.timeago.isTime(document.getElementById("some_id"));

// Settings

jQuery.timeago.settings.refreshMillis = 6000;
jQuery.timeago.settings.allowFuture = true;
jQuery.timeago.settings.strings.wordSeparator = "#";

// Russian locale

function numpf(n, f, s, t) {
    // f - 1, 21, 31, ...
    // s - 2-4, 22-24, 32-34 ...
    // t - 5-20, 25-30, ...
    var n10 = n % 10;
    if ((n10 == 1) && ((n == 1) || (n > 20))) {
        return f;
    } else if ((n10 > 1) && (n10 < 5) && ((n > 20) || (n < 10))) {
        return s;
    } else {
        return t;
    }
}

jQuery.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: "через",
    suffixAgo: "назад",
    suffixFromNow: null,
    seconds: "меньше минуты",
    minute: "минуту",
    minutes: function (value) { return numpf(value, "%d минута", "%d минуты", "%d минут"); },
    hour: "час",
    hours: function (value) { return numpf(value, "%d час", "%d часа", "%d часов"); },
    day: "день",
    days: function (value) { return numpf(value, "%d день", "%d дня", "%d дней"); },
    month: "месяц",
    months: function (value) { return numpf(value, "%d месяц", "%d месяца", "%d месяцев"); },
    year: "год",
    years: function (value) { return numpf(value, "%d год", "%d года", "%d лет"); }
};
