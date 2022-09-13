import {
    VERSION,
    DateTime,
    Duration,
    FixedOffsetZone,
    IANAZone,
    Info,
    Interval,
    SystemZone,
    Settings,
    Zone,
    ZoneOffsetFormat,
    ZoneOffsetOptions,
} from 'luxon';

/* VERSION */
VERSION; // $ExpectType string

/* DateTime */
DateTime.DATETIME_MED; // $ExpectType DateTimeFormatOptions
DateTime.DATETIME_MED_WITH_WEEKDAY; // $ExpectType DateTimeFormatOptions
DateTime.DATE_MED; // $ExpectType DateTimeFormatOptions
DateTime.DATE_MED_WITH_WEEKDAY; // $ExpectType DateTimeFormatOptions

DateTime.local({ zone: 'Atlantic/Azores' }); // $ExpectType DateTime
DateTime.local(2021, 8, 28, { zone: 'Atlantic/Azores' }); // $ExpectType DateTime
DateTime.utc(); // $ExpectType DateTime
DateTime.utc({ locale: 'en-US' }); // $ExpectType DateTime
DateTime.utc(2018, 5, 31, 23, { numberingSystem: 'arabext' }); // $ExpectType DateTime
// @ts-expect-error
DateTime.utc(2019, { locale: 'en-GB' }, 5);
DateTime.isDateTime(0 as unknown); // $ExpectType boolean
DateTime.parseFormatForOpts(DateTime.DATETIME_FULL); // $ExpectType string | null
DateTime.expandFormat('d', { locale: 'en-US' }); // $ExpectType string
// @ts-expect-error
new DateTime();

const dt = DateTime.local(2017, 5, 15, 8, 30);

const now = DateTime.now();

const fromObject = DateTime.fromObject(
    {
        month: 4,
        day: 22,
        hour: 12,
    },
    {
        numberingSystem: 'beng',
        zone: 'America/Los_Angeles',
    },
);

const ianaZone = new IANAZone('America/Los_Angeles');
const testIanaZone = IANAZone.create('Europe/London');
IANAZone.isValidSpecifier('Europe/London');
IANAZone.isValidZone('Europe/London');
IANAZone.resetCache();
// @ts-expect-error
testIanaZone.formatOffset(dt.toMillis());
testIanaZone.formatOffset(dt.toMillis(), 'narrow'); // $ExpectType string
testIanaZone.formatOffset(dt.toMillis(), 'short'); // $ExpectType string
testIanaZone.formatOffset(dt.toMillis(), 'techie'); // $ExpectType string
// @ts-expect-error
testIanaZone.formatOffset(dt.toMillis(), 'other_string');
// @ts-expect-error
testIanaZone.offsetName(dt.toMillis());
testIanaZone.offsetName(dt.toMillis(), { format: 'short' }); // $ExpectType string
testIanaZone.offsetName(dt.toMillis(), { format: 'long' }); // $ExpectType string
// @ts-expect-error
testIanaZone.offsetName(dt.toMillis(), { format: 'other_string' });
testIanaZone.offsetName(dt.toMillis(), { format: 'short', locale: 'en-us' }); // $ExpectType string
testIanaZone.offsetName(dt.toMillis(), { locale: 'en-gb' }); // $ExpectType string
const ianaZoneTest = DateTime.fromObject(
    {},
    {
        zone: ianaZone,
    },
);

FixedOffsetZone.utcInstance.equals(FixedOffsetZone.instance(0));

FixedOffsetZone.instance(60);
FixedOffsetZone.parseSpecifier('UTC+6');

SystemZone.instance; // $ExpectType SystemZone

const fromIso = DateTime.fromISO('2017-05-15'); // => May 15, 2017 at midnight
const fromIso2 = DateTime.fromISO('2017-05-15T08:30:00'); // => May 15, 2017 at midnight

DateTime.local().toString(); // => '2017-09-14T03:20:34.091-04:00'

const getters = DateTime.local();
getters.year; // $ExpectType number
getters.month; // $ExpectType MonthNumbers
getters.day; // $ExpectType DayNumbers
getters.minute; // $ExpectType SecondNumbers
getters.second; // $ExpectType SecondNumbers
getters.weekday; // $ExpectType WeekdayNumbers
getters.zoneName; // $ExpectType string
getters.offset; // $ExpectType number
getters.daysInMonth; // $ExpectType PossibleDaysInMonth
getters.daysInYear; // $ExpectType PossibleDaysInYear
getters.weeksInWeekYear; // $ExpectType PossibleWeeksInYear
getters.ordinal; // $ExpectType number
getters.isInLeapYear; // $ExpectType boolean

dt.toBSON(); // $ExpectType Date
dt.toHTTP(); // $ExpectType string
dt.toISO(); // $ExpectType string
dt.toISO({ includeOffset: true, format: 'extended' }); // $ExpectType string
dt.toISO({ extendedZone: true, format: 'extended' }); // $ExpectType string
dt.toISODate(); // $ExpectType string
dt.toISODate({ format: 'basic' }); // $ExpectType string
dt.toISOTime(); // $ExpectType string
dt.toISOTime({ format: 'basic' }); // $ExpectType string
dt.toISOWeekDate(); // $ExpectType string
dt.toJSDate(); // $ExpectType Date
dt.toJSON(); // $ExpectType string
dt.toLocaleParts(); // $ExpectType DateTimeFormatPart[]
dt.toLocaleParts()[0].type; // $ExpectType DateTimeFormatPartTypes || keyof DateTimeFormatPartTypesRegistry
dt.toLocaleParts()[0].value; // $ExpectType string
dt.toLocaleString(); // $ExpectType string
dt.toLocaleString({ month: 'long', day: 'numeric' }); // $ExpectType string
dt.toLocaleString(DateTime.DATE_MED); // $ExpectType string
dt.toLocaleString(DateTime.DATE_MED, {}); // $ExpectType string
dt.toMillis(); // $ExpectType number
dt.toMillis(); // $ExpectType number
dt.toRelative(); // $ExpectType string | null
dt.toRelativeCalendar(); // $ExpectType string | null
dt.toRFC2822(); // $ExpectType string
dt.toSeconds(); // $ExpectType number
dt.toSQL(); // $ExpectType string
dt.toSQL({ includeOffset: false, includeZone: true }); // $ExpectType string
dt.toSQLDate(); // $ExpectType string
dt.toSQLTime(); // $ExpectType string
dt.toSQLTime({ includeOffset: false, includeZone: true }); // $ExpectType string
dt.toSQLTime({ includeOffsetSpace: false, includeZone: true }); // $ExpectType string
dt.valueOf(); // $ExpectType number
dt.toObject(); // $ExpectType ToObjectOutput
dt.toObject({ includeConfig: true }); // $ExpectType ToObjectOutput
dt.toUnixInteger(); // $ExpectType number

// $ExpectType string | null
dt.toRelative({
    base: DateTime.local(),
    locale: 'fr',
    style: 'long',
    unit: 'days',
    round: true,
    padding: 10,
    numberingSystem: 'bali',
});

// $ExpectType string | null
dt.toRelative({
    base: DateTime.local(),
    locale: 'fr',
    style: 'long',
    unit: ['days'],
    round: true,
    padding: 10,
    numberingSystem: 'bali',
});

// $ExpectType string | null
dt.toRelativeCalendar({
    base: DateTime.local(),
    locale: 'fr',
    unit: 'days',
    numberingSystem: 'bali',
});

dt.plus({ hours: 3, minutes: 2 });
dt.minus({ days: 7 });
dt.startOf('day');
dt.endOf('hour');
dt.zone;
dt.zoneName; // $ExpectType string
dt.offset; // $ExpectType number
dt.offsetNameShort; // $ExpectType string
dt.offsetNameLong; // $ExpectType string
dt.isOffsetFixed; // $ExpectType boolean
dt.isInDST; // $ExpectType boolean

dt.set({ hour: 3 }).hour; // $ExpectType HourNumbers

const f: { month: 'long'; day: 'numeric' } = { month: 'long', day: 'numeric' };
dt.setLocale('fr').toLocaleString(f);
dt.setLocale('en-GB').toLocaleString(f);
dt.setLocale('en-US').toLocaleString(f);

DateTime.local().setZone('America/Los_Angeles');

DateTime.utc(2017, 5, 15); // $ExpectType DateTime
DateTime.utc(); // $ExpectType DateTime
DateTime.local().toUTC(); // $ExpectType DateTime
DateTime.utc().toLocal(); // $ExpectType DateTime

DateTime.max(dt, now); // $ExpectType DateTime
DateTime.min(dt, now); // $ExpectType DateTime

const anything: any = 0;
if (DateTime.isDateTime(anything)) {
    anything; // $ExpectType DateTime
}

const { input, result, zone } = DateTime.fromFormatExplain('Aug 6 1982', 'MMMM d yyyy');

/* Duration */
const dur = Duration.fromObject({ hours: 2, minutes: 7 }); // $ExpectType Duration
Duration.fromObject({ hour: 2, minute: 7 }); // $ExpectType Duration
// @ts-expect-error
Duration.fromObject({ locale: 'ru' });
// @ts-expect-error
Duration.fromObject({ conversionAccuracy: 'casual' });
Duration.fromObject({}, { conversionAccuracy: 'casual' }); // $ExpectType Duration
Duration.fromDurationLike({ hours: 1 }); // $ExpectType Duration
Duration.fromDurationLike(1000); // $ExpectType Duration
Duration.fromDurationLike(dur); // $ExpectType Duration
// @ts-expect-error
Duration.fromDurationLike('');
// @ts-expect-error
new Duration({ hour: 2, minute: 7 });
dt.plus(dur); // $ExpectType DateTime
dt.plus({ quarters: 2, months: 1 }); // $ExpectType DateTime
dur.hours; // $ExpectType number
dur.minutes; // $ExpectType number
dur.seconds; // $ExpectType number
dur.set({ hour: 2, minutes: 15 }); // $ExpectType Duration

dur.as('seconds'); // $ExpectType number
dur.toObject();
dur.toISO(); // $ExpectType string
dur.toISOTime(); // $ExpectType string
dur.normalize(); // $ExpectType Duration
dur.toMillis(); // $ExpectType number
dur.mapUnits((x, u) => (u === 'hours' ? x * 2 : x)); // $ExpectType Duration

if (Duration.isDuration(anything)) {
    anything; // $ExpectType Duration
}
// @ts-expect-error
Duration.invalid();
Duration.invalid('code', 'because I said so'); // $ExpectType Duration
Duration.isDuration(0 as unknown); // $ExpectType boolean

/* Interval */
const later = DateTime.local();
const i = Interval.fromDateTimes(now, later);
i.length(); // $ExpectType number
i.length('years'); // $ExpectType number
i.contains(DateTime.local(2019)); // $ExpectType boolean
i.set({ end: DateTime.local(2020) }); // $ExpectType Interval
i.mapEndpoints(d => d); // $ExpectType Interval
i.intersection(i); // $ExpectType Interval | null

i.toISO(); // $ExpectType string
i.toISODate(); // $ExpectType string
i.toISOTime(); // $ExpectType string
i.toString(); // $ExpectType string
i.toDuration('months'); // $ExpectType Duration
i.toDuration(); // $ExpectType Duration
// @ts-expect-error
i.divideEqually();
i.divideEqually(5);

if (Interval.isInterval(anything)) {
    anything; // $ExpectType Interval
}
// @ts-expect-error
new Interval(now, later);
// @ts-expect-error
Interval.invalid();
Interval.invalid('code', 'because I said so'); // $ExpectType Interval
Interval.isInterval(0 as unknown); // $ExpectType boolean

/* Info */
Info.months();
Info.weekdays('long');
// @ts-expect-error
Info.weekdays('2-digit');
// @ts-expect-error
Info.features().intl;
// @ts-expect-error
Info.features().intlTokens;
// @ts-expect-error
Info.features().zones;
Info.features().relative; // $ExpectType boolean

/* Settings */
Settings.defaultLocale;
Settings.defaultLocale = 'en';
Settings.throwOnInvalid = true;
Settings.now();
Settings.now = () => 0;
// @ts-expect-error
Settings.now = 0;
Settings.resetCaches();

Settings.defaultZone = ianaZone;
Settings.defaultZone = 'America/Los_Angeles';
Settings.defaultZone = Settings.defaultZone;

// The following tests were coped from the docs
// http://moment.github.io/luxon/docs/manual/

/* Intl */
// prettier-ignore
DateTime.local().setLocale('el').toLocaleString(DateTime.DATE_FULL); // $ExpectType string
dt.locale; // $ExpectType string
DateTime.local().setLocale('fr').locale; // $ExpectType string
DateTime.local().reconfigure({ locale: 'fr' }).locale; // $ExpectType string

Settings.defaultLocale = 'fr';
DateTime.local().locale; // $ExpectType string

Settings.defaultLocale = DateTime.local().resolvedLocaleOptions().locale;
DateTime.local().resolvedLocaleOptions({ locale: 'de' }); // $ExpectType Required<LocaleOptions>

dt.setLocale('fr').toLocaleString(DateTime.DATE_FULL); // $ExpectType string
dt.toLocaleString({ ...DateTime.DATE_FULL }, { locale: 'es' }); // $ExpectType string
dt.setLocale('fr').toFormat('MMMM dd, yyyy GG'); // $ExpectType string
dt.toFormat('MMMM dd, yyyy GG', { locale: 'de' });

DateTime.fromFormat('septembre 25, 2017 après Jésus-Christ', 'MMMM dd, yyyy GG', { locale: 'fr' });

Info.months('long', { locale: 'fr' }); // $ExpectType string[]
Info.weekdays('long', { locale: 'fr' }); // $ExpectType string[]
Info.eras('long', { locale: 'fr' }); // $ExpectType string[]

DateTime.local().reconfigure({ locale: 'it', numberingSystem: 'beng' });
Settings.defaultNumberingSystem = 'beng';

/* Time zones and offsets */
// @ts-expect-error
Info.features().zones;

const bogus = DateTime.local().setZone('America/Bogus');
bogus.isValid; // $ExpectType boolean
bogus.invalidReason; // $ExpectType string | null
bogus.invalidExplanation; // $ExpectType string | null

const local = DateTime.local(2017, 5, 15, 9, 10, 23);
local.zoneName; // $ExpectType string
local.toString(); // $ExpectType string
local.setZone('America/Los_Angeles'); // $ExpectType DateTime
local.setZone('America/Los_Angeles', { keepLocalTime: true }); // $ExpectType DateTime

const iso = DateTime.fromISO('2017-05-15T09:10:23');
iso.zoneName; // $ExpectType string
iso.toString(); // $ExpectType string

DateTime.fromISO('2017-05-15T09:10:23', { zone: 'Europe/Paris', setZone: true }); // $ExpectType DateTime
DateTime.fromFormat('2017-05-15T09:10:23 Europe/Paris', "yyyy-MM-dd'T'HH:mm:ss z"); // $ExpectType DateTime

/* Calendars */
// prettier-ignore
DateTime.fromISO('2017-W23-3').plus({ weeks: 1, days: 2 }).toISOWeekDate(); // $ExpectType string

const dtHebrew = DateTime.local().reconfigure({ outputCalendar: 'hebrew' });
dtHebrew.outputCalendar; // $ExpectType string
dtHebrew.numberingSystem; // $ExpectType string
dtHebrew.toLocaleString(); // $ExpectType string

DateTime.fromObject({}, { outputCalendar: 'buddhist' }).toLocaleString(DateTime.DATE_FULL);
Settings.defaultOutputCalendar = 'persian';

/* Formatting */
DateTime.fromISO('2014-08-06T13:07:04.054').toFormat('yyyy LLL dd'); // $ExpectType string

/* Parsing */
// @ts-expect-error
DateTime.fromObject();
DateTime.fromObject({}, { zone: 'America/Los_Angeles' }); // $ExpectType DateTime
// @ts-expect-error
DateTime.fromISO();
DateTime.fromISO('2016-05-25'); // $ExpectType DateTime
// @ts-expect-error
DateTime.fromJSDate();
DateTime.fromJSDate(new Date()); // $ExpectType DateTime
// @ts-expect-error
DateTime.fromRFC2822();
DateTime.fromRFC2822('Tue, 01 Nov 2016 13:23:12 +0630'); // $ExpectType DateTime
// @ts-expect-error
DateTime.fromHTTP();
DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT'); // $ExpectType DateTime
// @ts-expect-error
DateTime.fromSQL();
DateTime.fromSQL('2017-05-15 09:24:15'); // $ExpectType DateTime
// @ts-expect-error
DateTime.fromMillis();
DateTime.fromMillis(1542674993410); // $ExpectType DateTime
// @ts-expect-error
DateTime.fromSeconds();
DateTime.fromSeconds(1542674993); // $ExpectType DateTime
// @ts-expect-error
DateTime.fromFormat();
DateTime.fromFormat('May 25 1982', 'LLLL dd yyyy'); // $ExpectType DateTime
DateTime.fromFormat('mai 25 1982', 'LLLL dd yyyy', { locale: 'fr' }); // $ExpectType DateTime

DateTime.fromFormatExplain('Aug 6 1982', 'MMMM d yyyy').regex;
DateTime.invalid('Timestamp out of range');
DateTime.invalid('mismatched weekday', "you can't specify both a weekday and a date");

/* Math */
const d1: DateTime = DateTime.local(2017, 2, 13).plus({ days: 30 });
const d2: DateTime = DateTime.fromISO('2017-04-30').plus({ days: 1 }).plus({ months: 1 });

if (d1 < d2 || +d1 === +d2) {
    //
}

d1.hasSame(d2, 'millisecond'); // $ExpectType boolean
d1.hasSame(d2, 'minute'); // $ExpectType boolean
d1.hasSame(d2, 'year'); // $ExpectType boolean

dur.toObject().days; // $ExpectType number | undefined
// @ts-expect-error
dur.toObject().day;
dur.as('minutes'); // $ExpectType number
dur.shiftTo('minutes').toObject().minutes; // $ExpectType number | undefined
// prettier-ignore
DateTime.fromISO('2017-05-15').plus(dur).toISO(); // $ExpectType string

const end = DateTime.fromISO('2017-03-13');
const start = DateTime.fromISO('2017-02-13');

const diffInMonths = end.diff(start, 'months');
diffInMonths.toObject().months; // $ExpectType number | undefined

const diff = end.diff(start);
diff.toObject().milliseconds; // $ExpectType number | undefined
end.diff(start, ['months', 'days']).months; // $ExpectType number
end.diffNow(['months', 'days']); // $ExpectType Duration

dur.as('days'); // $ExpectType number
dur.shiftTo('days').toObject().days; // $ExpectType number | undefined
dur.shiftTo('weeks', 'hours').toObject().weeks; // $ExpectType number | undefined
DateTime.local().plus(dur.shiftTo('milliseconds')).year; // $ExpectType number

Duration.fromISO('PY23', { conversionAccuracy: 'longterm' }); // $ExpectType Duration
Duration.fromISOTime('21:37.000'); // $ExpectType Duration
Duration.fromISOTime('21:37.000', { conversionAccuracy: 'longterm' }); // $ExpectType Duration

end.diff(start, 'hours', { conversionAccuracy: 'longterm' }); // $ExpectType Duration
end.diff(start, ['months', 'days', 'hours']); // $ExpectType Duration
dur.reconfigure({ conversionAccuracy: 'longterm' }); // $ExpectType Duration

start.until(end); // $ExpectType Interval
i.toDuration(['years', 'months', 'days']); // $ExpectType Duration

/* Sample Zone Implementation */
class SampleZone extends Zone {
    offsetName(ts: number, options?: ZoneOffsetOptions) {
        return 'SampleZone';
    }
    formatOffset(ts: number, format: ZoneOffsetFormat) {
        return '+6';
    }
    equals(other: Zone) {
        return other.name === this.name;
    }
    offset(ts: number) {
        return 0;
    }
}

DateTime.fromISO('2021-09-13T07:52:27.697Z').toLocaleString({
    ...DateTime.DATETIME_FULL_WITH_SECONDS,
    hour: '2-digit',
    second: '2-digit',
});

DateTime.fromISO('2021-09-13T07:52:27.697Z').toLocaleString({
    ...DateTime.DATETIME_MED,
    hour: '2-digit',
    day: '2-digit',
});
