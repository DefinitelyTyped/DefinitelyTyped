import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import to from "javascript-time-ago/locale/to";
import zhHansHK from "javascript-time-ago/locale/zh-Hant-HK";

// Statically add locales
TimeAgo.locale(en);
TimeAgo.addLocale(to);
TimeAgo.addLocale(zhHansHK);

TimeAgo.intlDateTimeFormatSupportedLocale("en");

const ta = new TimeAgo();

// Format one minute ago using twitter style
ta.format(new Date().getTime() - 60 * 1000, "twitter");

// Format random date using "twitter" style
ta.format(111111, "twitter");

// Format a number using default style
ta.formatNumber(1111111);

// Format value using in hour units using the long english formatting
ta.formatValue(new Date(), "hour", en.long);

// Get formatters
ta.getFormatter("long");
ta.getLocaleData("long");

// Get rule used to format
ta.getRule(new Date(), "hour", en.long);
