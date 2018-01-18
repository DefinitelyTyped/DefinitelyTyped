import { DateTime, Duration, Interval, Info, Settings } from 'luxon';

/* DateTime */
const dt = DateTime.local(2017, 5, 15, 8, 30);

const now = DateTime.local();

const fromObject = DateTime.fromObject({
    month: 4,
    day: 22,
    hour: 12,
    zone: 'America/Los_Angeles',
    numberingSystem: 'beng'
});

const fromIso = DateTime.fromISO('2017-05-15'); // => May 15, 2017 at midnight
const fromIso2 = DateTime.fromISO('2017-05-15T08:30:00'); // => May 15, 2017 at midnight

DateTime.local().toString(); // => '2017-09-14T03:20:34.091-04:00'

const getters = DateTime.local();
getters.year;
getters.month;
getters.day;
getters.second;
getters.weekday;
getters.zoneName;
getters.offset;
getters.daysInMonth;
getters.ordinal;

dt.toLocaleString();
dt.toLocaleString(DateTime.DATE_MED);
dt.toISO();
dt.toISO({includeOffset: true});

dt.plus({ hours: 3, minutes: 2 });
dt.minus({ days: 7 });
dt.startOf('day');
dt.endOf('hour');

dt.set({ hour: 3 }).hour;

const f = { month: 'long', day: 'numeric' };
dt.setLocale('fr').toLocaleString(f);
dt.setLocale('en-GB').toLocaleString(f);
dt.setLocale('en-US').toLocaleString(f);

DateTime.fromObject({ zone: 'America/Los_Angeles' });
DateTime.local().setZone('America/Los_Angeles');

DateTime.utc(2017, 5, 15);
DateTime.utc();
DateTime.local().toUTC();
DateTime.utc().toLocal();

/* Duration */
const dur = Duration.fromObject({ hours: 2, minutes: 7 });
dt.plus(dur);
dur.hours;
dur.minutes;
dur.seconds;

dur.as('seconds');
dur.toObject();
dur.toISO();

/* Interval */
const later = DateTime.local();
const i = Interval.fromDateTimes(now, later);
i.length();
i.length('years');
i.contains(DateTime.local(2019));

i.toISO();
i.toString();

/* Info */
Info.months();
Info.weekdays('long');

/* Settings */
Settings.defaultLocale;
Settings.defaultLocale = 'en';
Settings.defaultZoneName = 'Europe/Paris';
Settings.now();
Settings.now = () => 0;

// $ExpectError
Settings.defaultZone = Settings.defaultZone;

/* Zone */
