import {
    DateTime,
    Duration,
    FixedOffsetZone,
    IANAZone,
    Info,
    Interval,
    Settings,
    SystemZone,
    VERSION,
    Zone,
    ZoneOffsetFormat,
    ZoneOffsetOptions,
} from "luxon";

/* VERSION */
VERSION; // $ExpectType string

/* DateTime */
DateTime.DATETIME_MED; // $ExpectType DateTimeFormatOptions
DateTime.DATETIME_MED_WITH_WEEKDAY; // $ExpectType DateTimeFormatOptions
DateTime.DATE_MED; // $ExpectType DateTimeFormatOptions
DateTime.DATE_MED_WITH_WEEKDAY; // $ExpectType DateTimeFormatOptions

DateTime.local({ zone: "Atlantic/Azores" }); // $ExpectType DateTime<true>
DateTime.local(2021, 8, 28, { zone: "Atlantic/Azores" }); // $ExpectType DateTime<true> | DateTime<false>
DateTime.utc(); // $ExpectType DateTime<true>
DateTime.utc({ locale: "en-US" }); // $ExpectType DateTime<true>
DateTime.utc(2018, 5, 31, 23, { numberingSystem: "arabext" }); // $ExpectType DateTime<true> | DateTime<false>
// @ts-expect-error
DateTime.utc(2019, { locale: "en-GB" }, 5);
DateTime.isDateTime(0 as unknown); // $ExpectType boolean
DateTime.parseFormatForOpts(DateTime.DATETIME_FULL); // $ExpectType string | null
DateTime.expandFormat("d", { locale: "en-US" }); // $ExpectType string
// @ts-expect-error
new DateTime();

const dt = DateTime.local(2017, 5, 15, 8, 30);

const now = DateTime.now(); // $ExpectType DateTime<true>

const fromObject = DateTime.fromObject(
    {
        month: 4,
        day: 22,
        hour: 12,
    },
    {
        numberingSystem: "beng",
        zone: "America/Los_Angeles",
    },
);

const ianaZone = new IANAZone("America/Los_Angeles");
const testIanaZone = IANAZone.create("Europe/London");
IANAZone.isValidSpecifier("Europe/London");
IANAZone.isValidZone("Europe/London");
IANAZone.resetCache();
// @ts-expect-error
testIanaZone.formatOffset(dt.toMillis());
testIanaZone.formatOffset(dt.toMillis(), "narrow"); // $ExpectType string
testIanaZone.formatOffset(dt.toMillis(), "short"); // $ExpectType string
testIanaZone.formatOffset(dt.toMillis(), "techie"); // $ExpectType string
// @ts-expect-error
testIanaZone.formatOffset(dt.toMillis(), "other_string");
// @ts-expect-error
testIanaZone.offsetName(dt.toMillis());
testIanaZone.offsetName(dt.toMillis(), { format: "short" }); // $ExpectType string | null
testIanaZone.offsetName(dt.toMillis(), { format: "long" }); // $ExpectType string | null
// @ts-expect-error
testIanaZone.offsetName(dt.toMillis(), { format: "other_string" });
testIanaZone.offsetName(dt.toMillis(), { format: "short", locale: "en-us" }); // $ExpectType string | null
testIanaZone.offsetName(dt.toMillis(), { locale: "en-gb" }); // $ExpectType string | null
const ianaZoneTest = DateTime.fromObject(
    {},
    {
        zone: testIanaZone,
    },
);

FixedOffsetZone.utcInstance.equals(FixedOffsetZone.instance(0));

FixedOffsetZone.instance(60);
FixedOffsetZone.parseSpecifier("UTC+6");

SystemZone.instance; // $ExpectType SystemZone

const fromIso = DateTime.fromISO("2017-05-15"); // => May 15, 2017 at midnight
const fromIso2 = DateTime.fromISO("2017-05-15T08:30:00"); // => May 15, 2017 at midnight

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
getters.isWeekend; // $ExpectType boolean
getters.localWeekday; // $ExpectType WeekdayNumbers
getters.localWeekNumber; // $ExpectType number
getters.localWeekYear; // $ExpectType number
getters.weeksInLocalWeekYear; // $ExpectType PossibleWeeksInYear

dt.toBSON(); // $ExpectType Date
dt.toHTTP(); // $ExpectType string | null
dt.toISO(); // $ExpectType string | null
dt.toISO({ includeOffset: true, format: "extended" }); // $ExpectType string | null
dt.toISO({ extendedZone: true, format: "extended" }); // $ExpectType string | null
dt.toISODate(); // $ExpectType string | null
dt.toISODate({ format: "basic" }); // $ExpectType string | null
dt.toISOTime(); // $ExpectType string | null
dt.toISOTime({ format: "basic" }); // $ExpectType string | null
dt.toISOWeekDate(); // $ExpectType string | null
dt.toJSDate(); // $ExpectType Date
dt.toJSON(); // $ExpectType string | null
dt.toLocaleParts(); // $ExpectType DateTimeFormatPart[]
dt.toLocaleParts()[0].type; // $ExpectType DateTimeFormatPartTypes || keyof DateTimeFormatPartTypesRegistry
dt.toLocaleParts()[0].value; // $ExpectType string
dt.toLocaleString(); // $ExpectType string
dt.toLocaleString({ month: "long", day: "numeric" }); // $ExpectType string
dt.toLocaleString(DateTime.DATE_MED); // $ExpectType string
dt.toLocaleString(DateTime.DATE_MED, {}); // $ExpectType string
dt.toMillis(); // $ExpectType number
dt.toMillis(); // $ExpectType number
dt.toRelative(); // $ExpectType string | null
dt.toRelativeCalendar(); // $ExpectType string | null
dt.toRFC2822(); // $ExpectType string | null
dt.toSeconds(); // $ExpectType number
dt.toSQL(); // $ExpectType string | null
dt.toSQL({ includeOffset: false, includeZone: true }); // $ExpectType string | null
dt.toSQLDate(); // $ExpectType string | null
dt.toSQLTime(); // $ExpectType string | null
dt.toSQLTime({ includeOffset: false, includeZone: true }); // $ExpectType string | null
dt.toSQLTime({ includeOffsetSpace: false, includeZone: true }); // $ExpectType string | null
dt.valueOf(); // $ExpectType number
dt.toObject(); // $ExpectType Record<_ToObjectUnit, number> | Partial<Record<_ToObjectUnit, number>>
// @ts-expect-error
dt.toObject().locale;
dt.toObject({ includeConfig: true }); // $ExpectType _ToObjectOutput<true> | Partial<_ToObjectOutput<true>>
dt.toObject({ includeConfig: true }).locale; // $ExpectType string | undefined
dt.toUnixInteger(); // $ExpectType number

// Known valid DateTime narrows out invalid returns
now.toHTTP(); // $ExpectType string
now.toISO(); // $ExpectType string
now.toISO({ includeOffset: true, format: "extended" }); // $ExpectType string
now.toISO({ extendedZone: true, format: "extended" }); // $ExpectType string
now.toISODate(); // $ExpectType string
now.toISODate({ format: "basic" }); // $ExpectType string
now.toISOTime(); // $ExpectType string
now.toISOTime({ format: "basic" }); // $ExpectType string
now.toISOWeekDate(); // $ExpectType string
now.toJSON(); // $ExpectType string
now.toRelative(); // $ExpectType string
now.toRelativeCalendar(); // $ExpectType string
now.toRFC2822(); // $ExpectType string
now.toSQL(); // $ExpectType string
now.toSQL({ includeOffset: false, includeZone: true }); // $ExpectType string
now.toSQLDate(); // $ExpectType string
now.toSQLTime(); // $ExpectType string
now.toSQLTime({ includeOffset: false, includeZone: true }); // $ExpectType string
now.toSQLTime({ includeOffsetSpace: false, includeZone: true }); // $ExpectType string
now.toObject(); // $ExpectType Record<_ToObjectUnit, number>

// $ExpectType string | null
dt.toRelative({
    base: DateTime.local(),
    locale: "fr",
    style: "long",
    unit: "days",
    round: true,
    padding: 10,
    numberingSystem: "bali",
});

// $ExpectType string | null
dt.toRelative({
    base: DateTime.local(),
    locale: "fr",
    style: "long",
    unit: ["days"],
    round: true,
    padding: 10,
    numberingSystem: "bali",
});

// $ExpectType string | null
dt.toRelativeCalendar({
    base: DateTime.local(),
    locale: "fr",
    unit: "days",
    numberingSystem: "bali",
});

dt.plus({ hours: 3, minutes: 2 });
dt.minus({ days: 7 });
dt.startOf("day");
dt.startOf("day", { useLocaleWeeks: true });
// @ts-expect-error
dt.startOf("day", { nonExistentProp: true });
dt.endOf("hour");
dt.zone;
dt.zoneName; // $ExpectType string | null
dt.offset; // $ExpectType number
dt.offsetNameShort; // $ExpectType string | null
dt.offsetNameLong; // $ExpectType string | null
dt.isOffsetFixed; // $ExpectType boolean | null
dt.isInDST; // $ExpectType boolean

dt.set({ hour: 3 }).hour; // $ExpectType number

const f: { month: "long"; day: "numeric" } = { month: "long", day: "numeric" };
dt.setLocale("fr").toLocaleString(f);
dt.setLocale("en-GB").toLocaleString(f);
dt.setLocale("en-US").toLocaleString(f);

DateTime.local().setZone("America/Los_Angeles");

DateTime.utc(2017, 5, 15); // $ExpectType DateTime<true> | DateTime<false>
DateTime.utc(); // $ExpectType DateTime<true>
DateTime.local().toUTC(); // $ExpectType DateTime<true>
DateTime.utc().toLocal(); // $ExpectType DateTime<true>

DateTime.max(dt, now); // $ExpectType DateTime<true> | DateTime<false>
DateTime.min(dt, now); // $ExpectType DateTime<true> | DateTime<false>
DateTime.min(now, now); // $ExpectType DateTime<true>

const anything: unknown = 0;
if (DateTime.isDateTime(anything)) {
    anything; // $ExpectType DateTime<true> | DateTime<false>
}

const { input, result, zone } = DateTime.fromFormatExplain("Aug 6 1982", "MMMM d yyyy");

const invalidDateTime = DateTime.invalid("some reason", "some explanation");
invalidDateTime.invalidReason; // $ExpectType string
invalidDateTime.invalidExplanation; // $ExpectType string | null

/* Duration */
const dur = Duration.fromObject({ hours: 2, minutes: 7 }); // $ExpectType Duration<true>
Duration.fromObject({ hour: 2, minute: 7 }); // $ExpectType Duration<true>
// @ts-expect-error
Duration.fromObject({ locale: "ru" });
// @ts-expect-error
Duration.fromObject({ conversionAccuracy: "casual" });
Duration.fromObject({}, { conversionAccuracy: "casual" }); // $ExpectType Duration<true>
Duration.fromDurationLike({ hours: 1 }); // $ExpectType Duration<true>
Duration.fromDurationLike(1000); // $ExpectType Duration<true>
Duration.fromDurationLike(dur); // $ExpectType Duration<true>
// @ts-expect-error
Duration.fromDurationLike("");
// @ts-expect-error
new Duration({ hour: 2, minute: 7 });
dt.plus(dur); // $ExpectType DateTime<true> | DateTime<false>
dt.plus({ quarters: 2, months: 1 }); // $ExpectType DateTime<true> | DateTime<false>
dur.hours; // $ExpectType number
dur.minutes; // $ExpectType number
dur.seconds; // $ExpectType number
dur.set({ hour: 2, minutes: 15 }); // $ExpectType Duration<true>

dur.as("seconds"); // $ExpectType number
dur.toObject();
dur.toISO(); // $ExpectType string
dur.toISOTime(); // $ExpectType string
dur.normalize(); // $ExpectType Duration<true>
dur.rescale(); // $ExpectType Duration<true>
dur.shiftToAll(); // $ExpectType Duration<true>
dur.toMillis(); // $ExpectType number
dur.mapUnits((x, u) => (u === "hours" ? x * 2 : x)); // $ExpectType Duration<true>

if (Duration.isDuration(anything)) {
    anything; // $ExpectType Duration<true> | Duration<false>
}
// @ts-expect-error
Duration.invalid();
const invalidDuration = Duration.invalid("code", "because I said so"); // $ExpectType Duration<false>
invalidDuration.invalidReason; // $ExpectType string
invalidDuration.invalidExplanation; // $ExpectType string | null
Duration.isDuration(0 as unknown); // $ExpectType boolean

/* Interval */
const later = DateTime.local();
const i = Interval.fromDateTimes(now, later);
i.length(); // $ExpectType number
i.length("years"); // $ExpectType number
i.contains(DateTime.local(2019)); // $ExpectType boolean
i.set({ end: DateTime.local(2020) }); // $ExpectType Interval<true> | Interval<false>
i.mapEndpoints(d => d); // $ExpectType Interval<true> | Interval<false>
i.intersection(i); // $ExpectType Interval<boolean> | null

i.invalidReason; // $ExpectType string | null
i.invalidExplanation; // $ExpectType string | null

i.toISO(); // $ExpectType string
i.toISODate(); // $ExpectType string
i.toISOTime(); // $ExpectType string
i.toString(); // $ExpectType string
i.toLocaleString(); // $ExpectType string
i.toDuration("months"); // $ExpectType Duration<true> | Duration<false>
i.toDuration(); // $ExpectType Duration<true> | Duration<false>
// @ts-expect-error
i.divideEqually();
i.divideEqually(5);

if (Interval.isInterval(anything)) {
    anything; // $ExpectType Interval<true> | Interval<false>
}
// @ts-expect-error
new Interval(now, later);
// @ts-expect-error
Interval.invalid();
const invalidInterval = Interval.invalid("code", "because I said so"); // $ExpectType Interval<false>
invalidInterval.invalidReason; // $ExpectType string
invalidInterval.invalidExplanation; // $ExpectType string | null
Interval.isInterval(0 as unknown); // $ExpectType boolean

/* Info */
Info.months();
Info.weekdays("long");
// @ts-expect-error
Info.weekdays("2-digit");
// @ts-expect-error
Info.features().intl;
// @ts-expect-error
Info.features().intlTokens;
// @ts-expect-error
Info.features().zones;
Info.features().relative; // $ExpectType boolean
Info.features().localeWeek; // $ExpectType boolean

Info.getStartOfWeek(); // $ExpectType WeekdayNumbers
Info.getStartOfWeek({ locale: "en-US" }); // $ExpectType WeekdayNumbers
Info.getStartOfWeek({ locObj: {} }); // $ExpectType WeekdayNumbers
Info.getMinimumDaysInFirstWeek(); // $ExpectType WeekdayNumbers
Info.getWeekendWeekdays(); // $ExpectType WeekdayNumbers[]

/* Settings */
Settings.defaultLocale;
Settings.defaultLocale = "en";
Settings.throwOnInvalid = true;
Settings.now();
Settings.now = () => 0;
// @ts-expect-error
Settings.now = 0;
Settings.resetCaches();

Settings.defaultZone = ianaZone;
Settings.defaultZone = "America/Los_Angeles";
Settings.defaultZone = Settings.defaultZone;
Settings.defaultZone; // $ExpectType Zone<true> | Zone<false>

Settings.twoDigitCutoffYear;
Settings.twoDigitCutoffYear = 42;
// @ts-expect-error
Settings.twoDigitCutoffYear = "123";

Settings.defaultWeekSettings = null;
Settings.defaultWeekSettings; // $ExpectType null
Settings.defaultWeekSettings = { firstDay: 1, minimalDays: 4, weekend: [6, 7] };
Settings.defaultWeekSettings; // $ExpectType WeekSettings
// @ts-expect-error
Settings.defaultWeekSettings = { firstDay: 8, minimalDays: 4, weekend: [6, 7] };
Settings.defaultWeekSettings; // $ExpectType WeekSettings | null
// @ts-expect-error
Settings.defaultWeekSettings = { firstDay: 1, minimalDays: 0, weekend: [6, 7] };
Settings.defaultWeekSettings; // $ExpectType WeekSettings | null
// @ts-expect-error
Settings.defaultWeekSettings = { firstDay: 1, minimalDays: 4, weekend: [0, 8] };
Settings.defaultWeekSettings; // $ExpectType WeekSettings | null

// The following tests were coped from the docs
// http://moment.github.io/luxon/docs/manual/

/* Intl */
// prettier-ignore
DateTime.local().setLocale("el").toLocaleString(DateTime.DATE_FULL); // $ExpectType string
dt.locale; // $ExpectType string | null
DateTime.local().setLocale("fr").locale; // $ExpectType string
DateTime.local().reconfigure({ locale: "fr" }).locale; // $ExpectType string

Settings.defaultLocale = "fr";
DateTime.local().locale; // $ExpectType string

Settings.defaultLocale = DateTime.local().resolvedLocaleOptions().locale;
DateTime.local().resolvedLocaleOptions({ locale: "de" }); // $ExpectType Required<LocaleOptions>

dt.setLocale("fr").toLocaleString(DateTime.DATE_FULL); // $ExpectType string
dt.toLocaleString({ ...DateTime.DATE_FULL }, { locale: "es" }); // $ExpectType string
dt.setLocale("fr").toFormat("MMMM dd, yyyy GG"); // $ExpectType string
dt.toFormat("MMMM dd, yyyy GG", { locale: "de" });

DateTime.fromFormat("septembre 25, 2017 après Jésus-Christ", "MMMM dd, yyyy GG", { locale: "fr" });

Info.months("long", { locale: "fr" }); // $ExpectType string[]
Info.weekdays("long", { locale: "fr" }); // $ExpectType string[]
Info.eras("long", { locale: "fr" }); // $ExpectType string[]

DateTime.local().reconfigure({ locale: "it", numberingSystem: "beng" });
Settings.defaultNumberingSystem = "beng";

/* Time zones and offsets */
// @ts-expect-error
Info.features().zones;

const bogus = DateTime.local().setZone("America/Bogus");
bogus.isValid; // $ExpectType boolean
bogus.invalidReason; // $ExpectType string | null
bogus.invalidExplanation; // $ExpectType string | null

const local = DateTime.local(2017, 5, 15, 9, 10, 23);
local.zoneName; // $ExpectType string | null
local.toString(); // $ExpectType string
local.setZone("America/Los_Angeles"); // $ExpectType DateTime<true> | DateTime<false>
local.setZone("America/Los_Angeles", { keepLocalTime: true }); // $ExpectType DateTime<true> | DateTime<false>

const iso = DateTime.fromISO("2017-05-15T09:10:23");
iso.zoneName; // $ExpectType string | null
iso.toString(); // $ExpectType string

DateTime.fromISO("2017-05-15T09:10:23", { zone: "Europe/Paris", setZone: true }); // $ExpectType DateTime<true> | DateTime<false>
DateTime.fromFormat("2017-05-15T09:10:23 Europe/Paris", "yyyy-MM-dd'T'HH:mm:ss z"); // $ExpectType DateTime<true> | DateTime<false>

/* Calendars */
// prettier-ignore
DateTime.fromISO("2017-W23-3").plus({ weeks: 1, days: 2 }).toISOWeekDate(); // $ExpectType string | null

const dtHebrew = DateTime.local().reconfigure({ outputCalendar: "hebrew" });
dtHebrew.outputCalendar; // $ExpectType string
dtHebrew.numberingSystem; // $ExpectType string
dtHebrew.toLocaleString(); // $ExpectType string

DateTime.fromObject({}, { outputCalendar: "buddhist" }).toLocaleString(DateTime.DATE_FULL);
Settings.defaultOutputCalendar = "persian";

/* Formatting */
DateTime.fromISO("2014-08-06T13:07:04.054").toFormat("yyyy LLL dd"); // $ExpectType string

/* Parsing */
// @ts-expect-error
DateTime.fromObject();
DateTime.fromObject({}, { zone: "America/Los_Angeles" }); // $ExpectType DateTime<true> | DateTime<false>
DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }); // $ExpectType DateTime<true> | DateTime<false>
// @ts-expect-error
DateTime.fromISO();
DateTime.fromISO("2016-05-25"); // $ExpectType DateTime<true> | DateTime<false>
// @ts-expect-error
DateTime.fromJSDate();
DateTime.fromJSDate(new Date()); // $ExpectType DateTime<true> | DateTime<false>
// @ts-expect-error
DateTime.fromRFC2822();
DateTime.fromRFC2822("Tue, 01 Nov 2016 13:23:12 +0630"); // $ExpectType DateTime<true> | DateTime<false>
// @ts-expect-error
DateTime.fromHTTP();
DateTime.fromHTTP("Sunday, 06-Nov-94 08:49:37 GMT"); // $ExpectType DateTime<true> | DateTime<false>
// @ts-expect-error
DateTime.fromSQL();
DateTime.fromSQL("2017-05-15 09:24:15"); // $ExpectType DateTime<true> | DateTime<false>
// @ts-expect-error
DateTime.fromMillis();
DateTime.fromMillis(1542674993410); // $ExpectType DateTime<true> | DateTime<false>
// @ts-expect-error
DateTime.fromSeconds();
DateTime.fromSeconds(1542674993); // $ExpectType DateTime<true>
// @ts-expect-error
DateTime.fromFormat();
DateTime.fromFormat("May 25 1982", "LLLL dd yyyy"); // $ExpectType DateTime<true> | DateTime<false>
DateTime.fromFormat("mai 25 1982", "LLLL dd yyyy", { locale: "fr" }); // $ExpectType DateTime<true> | DateTime<false>

DateTime.fromFormatExplain("Aug 6 1982", "MMMM d yyyy").regex;
DateTime.invalid("Timestamp out of range");
DateTime.invalid("mismatched weekday", "you can't specify both a weekday and a date");

/* Math */
const d1: DateTime = DateTime.local(2017, 2, 13).plus({ days: 30 });
const d2: DateTime = DateTime.fromISO("2017-04-30").plus({ days: 1 }).plus({ months: 1 });

if (d1 < d2 || +d1 === +d2) {
    //
}

d1.hasSame(d2, "millisecond"); // $ExpectType boolean
d1.hasSame(d2, "minute"); // $ExpectType boolean
d1.hasSame(d2, "year"); // $ExpectType boolean

dur.toObject().days; // $ExpectType number | undefined
// @ts-expect-error
dur.toObject().day;
dur.as("minutes"); // $ExpectType number
dur.shiftTo("minutes").toObject().minutes; // $ExpectType number | undefined
// prettier-ignore
DateTime.fromISO("2017-05-15").plus(dur).toISO(); // $ExpectType string | null

const end = DateTime.fromISO("2017-03-13");
const start = DateTime.fromISO("2017-02-13");

const diffInMonths = end.diff(start, "months");
diffInMonths.toObject().months; // $ExpectType number | undefined

const diff = end.diff(start);
diff.toObject().milliseconds; // $ExpectType number | undefined
end.diff(start, ["months", "days"]).months; // $ExpectType number
end.diffNow(["months", "days"]); // $ExpectType Duration<true>

dur.as("days"); // $ExpectType number
dur.shiftTo("days").toObject().days; // $ExpectType number | undefined
dur.shiftTo("weeks", "hours").toObject().weeks; // $ExpectType number | undefined
DateTime.local().plus(dur.shiftTo("milliseconds")).year; // $ExpectType number

Duration.fromISO("PY23", { conversionAccuracy: "longterm" }); // $ExpectType Duration<true> | Duration<false>
Duration.fromISOTime("21:37.000"); // $ExpectType Duration<true> | Duration<false>
Duration.fromISOTime("21:37.000", { conversionAccuracy: "longterm" }); // $ExpectType Duration<true> | Duration<false>

end.diff(start, "hours", { conversionAccuracy: "longterm" }); // $ExpectType Duration<true> | Duration<false>
end.diff(start, ["months", "days", "hours"]); // $ExpectType Duration<true> | Duration<false>
dur.reconfigure({ conversionAccuracy: "longterm" }); // $ExpectType Duration<true>

start.until(end); // $ExpectType Interval<true> | DateTime<false> || DateTime<false> | Interval<true>
i.toDuration(["years", "months", "days"]); // $ExpectType Duration<true> | Duration<false>

dur.invalidReason; // $ExpectType null
dur.invalidExplanation; // $ExpectType null

/* Sample Zone Implementation */
class SampleZone extends Zone {
    offsetName(ts: number, options?: ZoneOffsetOptions) {
        return "SampleZone";
    }
    formatOffset(ts: number, format: ZoneOffsetFormat) {
        return "+6";
    }
    equals(other: Zone) {
        return other.name === this.name;
    }
    offset(ts: number) {
        return 0;
    }
}

DateTime.fromISO("2021-09-13T07:52:27.697Z").toLocaleString({
    ...DateTime.DATETIME_FULL_WITH_SECONDS,
    hour: "2-digit",
    second: "2-digit",
});

DateTime.fromISO("2021-09-13T07:52:27.697Z").toLocaleString({
    ...DateTime.DATETIME_MED,
    hour: "2-digit",
    day: "2-digit",
});
