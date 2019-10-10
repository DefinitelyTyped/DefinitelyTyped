import moment = require('moment-timezone');

const june = moment("2014-06-01T12:00:00Z");
june.tz('America/Los_Angeles').format('ha z');

const a = moment.tz("2013-11-18 11:55", "America/Toronto");
const b = moment.tz("May 12th 2014 8PM", "MMM Do YYYY hA", "America/Toronto");
const c = moment.tz(1403454068850, "America/Toronto");
const d = moment.tz("May 12th 2014 8PM", "MMM Do YYYY hA", true, "America/Toronto");

a.tz();

const num = 1367337600000;
const arr = [2013, 5, 1];
const str = "2013-12-01";
const date = new Date(2013, 4, 1);
const mo = moment([2013, 4, 1]);
const obj = { year : 2013, month : 5, day : 1 };
const format = "YYYY-MM-DD";
const formats = ["YYYY-MM-DD", "YYYY/MM/DD"];
const formatsIncludingSpecial = ["YYYY-MM-DD", moment.ISO_8601];
const language = "en";

moment.tz();
moment.tz("America/Los_Angeles");
moment.tz("America/Los_Angeles").tz("Asia/Tomsk", true);

moment.tz(num, "America/Los_Angeles");
moment.tz(arr, "America/Los_Angeles");
moment.tz(str, "America/Los_Angeles");
moment.tz(str, format, "America/Los_Angeles");
moment.tz(str, format, true, "America/Los_Angeles");
moment.tz(str, format, language, "America/Los_Angeles");
moment.tz(str, format, language, true, "America/Los_Angeles");
moment.tz(str, formats, "America/Los_Angeles");
moment.tz(str, formats, true, "America/Los_Angeles");
moment.tz(str, formats, language, "America/Los_Angeles");
moment.tz(str, formats, language, true, "America/Los_Angeles");
moment.tz(str, moment.ISO_8601, "America/Los_Angeles");
moment.tz(str, moment.ISO_8601, true, "America/Los_Angeles");
moment.tz(str, moment.ISO_8601, language, "America/Los_Angeles");
moment.tz(str, moment.ISO_8601, language, true, "America/Los_Angeles");
moment.tz(str, formatsIncludingSpecial, "America/Los_Angeles");
moment.tz(str, formatsIncludingSpecial, true, "America/Los_Angeles");
moment.tz(str, formatsIncludingSpecial, language, "America/Los_Angeles");
moment.tz(str, formatsIncludingSpecial, language, true, "America/Los_Angeles");

moment.tz(date, "America/Los_Angeles");
moment.tz(mo, "America/Los_Angeles");
moment.tz(obj, "America/Los_Angeles");

moment.tz.zone('America/Los_Angeles').abbr(1403465838805);
moment.tz.zone('America/Los_Angeles').utcOffset(1403465838805);

const zone = moment.tz.zone('America/New_York');
zone.parse(Date.UTC(2012, 2, 19, 8, 30)); // 240

moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0');
moment.tz.add([
    'America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0',
    'America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0'
]);

moment.tz.link('America/Los_Angeles|US/Pacific');
moment.tz.link([
    'America/Los_Angeles|US/Pacific',
    'America/New_York|US/Eastern'
]);

moment.tz.load({
    zones : [],
    links : [],
    version : '2014e'
});

moment.tz.names();

moment.tz.setDefault('America/Los_Angeles');

moment.tz.setDefault();

moment.tz.guess();

moment.tz.guess(true);

const zoneAbbr: string = moment.tz('America/Los_Angeles').zoneAbbr();

const zoneName: string = moment.tz('America/Los_Angeles').zoneName();

const zoneType: string | undefined = moment.tz('2013-11-18 11:55').tz();
