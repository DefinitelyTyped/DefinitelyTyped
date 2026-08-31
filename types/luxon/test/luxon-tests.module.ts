import {
    CanBeInvalid,
    DateTime,
    DefaultValidity,
    Duration,
    FixedOffsetZone,
    IANAZone,
    IfValid,
    Info,
    Interval,
    Invalid,
    Settings,
    SystemZone,
    Valid,
    VERSION,
    Zone,
    ZoneOffsetFormat,
    ZoneOffsetOptions,
} from "luxon";

/*
 * ============================================================
 * VERSION
 * ============================================================
 */

function luxon_version() {
    VERSION; // $ExpectType string
}

/*
 * ============================================================
 * DateTime
 * ============================================================
 */

function DateTime_staticFormatPresets() {
    DateTime.DATETIME_MED; // $ExpectType DateTimeFormatOptions
    DateTime.DATETIME_MED_WITH_WEEKDAY; // $ExpectType DateTimeFormatOptions
    DateTime.DATE_MED; // $ExpectType DateTimeFormatOptions
    DateTime.DATE_MED_WITH_WEEKDAY; // $ExpectType DateTimeFormatOptions
}

function DateTime_localOverloads() {
    DateTime.local({ zone: "Atlantic/Azores" }); // $ExpectType DateTime<true>
    DateTime.local(2021, 8, 28, { zone: "Atlantic/Azores" }); // $ExpectType DateTime<true> | DateTime<false>
}

function DateTime_utcOverloads() {
    DateTime.utc(); // $ExpectType DateTime<true>
    DateTime.utc({ locale: "en-US" }); // $ExpectType DateTime<true>
    DateTime.utc(2018, 5, 31, 23, { numberingSystem: "arabext" }); // $ExpectType DateTime<true> | DateTime<false>
    // @ts-expect-error
    DateTime.utc(2019, { locale: "en-GB" }, 5);
}

function DateTime_isDateTime(anything: unknown) {
    DateTime.isDateTime(anything); // $ExpectType boolean
}

function DateTime_parseFormatForOpts() {
    DateTime.parseFormatForOpts(DateTime.DATETIME_FULL); // $ExpectType string | null
}

function DateTime_expandFormat() {
    DateTime.expandFormat("d", { locale: "en-US" }); // $ExpectType string
}

function DateTime_buildFormatParserAndFromFormatParser() {
    const parser = DateTime.buildFormatParser("dd/MM/yyyy", { locale: "en-US" });
    DateTime.fromFormatParser("22/11/1948", parser);
}

function DateTime_constructorIsPrivate() {
    // @ts-expect-error
    new DateTime();
}

function DateTime_fromObjectWithNumberingSystemAndZone() {
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
}

function DateTime_ianaZoneFormatOffset(testIanaZone: IANAZone, dt: DateTime) {
    // @ts-expect-error
    testIanaZone.formatOffset(dt.toMillis());
    testIanaZone.formatOffset(dt.toMillis(), "narrow"); // $ExpectType string
    testIanaZone.formatOffset(dt.toMillis(), "short"); // $ExpectType string
    testIanaZone.formatOffset(dt.toMillis(), "techie"); // $ExpectType string
    // @ts-expect-error
    testIanaZone.formatOffset(dt.toMillis(), "other_string");
}

function DateTime_ianaZoneOffsetName(testIanaZone: IANAZone, dt: DateTime) {
    // @ts-expect-error
    testIanaZone.offsetName(dt.toMillis());
    testIanaZone.offsetName(dt.toMillis(), { format: "short" }); // $ExpectType string | null
    testIanaZone.offsetName(dt.toMillis(), { format: "long" }); // $ExpectType string | null
    // @ts-expect-error
    testIanaZone.offsetName(dt.toMillis(), { format: "other_string" });
    testIanaZone.offsetName(dt.toMillis(), { format: "short", locale: "en-us" }); // $ExpectType string | null
    testIanaZone.offsetName(dt.toMillis(), { locale: "en-gb" }); // $ExpectType string | null
}

function DateTime_ianaZoneStatics() {
    IANAZone.isValidSpecifier("Europe/London");
    IANAZone.isValidZone("Europe/London");
    IANAZone.resetCache();
}

function DateTime_fromObjectWithZoneInstance(testIanaZone: IANAZone) {
    const ianaZoneTest = DateTime.fromObject(
        {},
        {
            zone: testIanaZone,
        },
    );
}

function DateTime_fixedOffsetZone() {
    FixedOffsetZone.utcInstance.equals(FixedOffsetZone.instance(0));

    FixedOffsetZone.instance(60);
    FixedOffsetZone.parseSpecifier("UTC+6");
}

function DateTime_systemZoneInstance() {
    SystemZone.instance; // $ExpectType SystemZone
}

function DateTime_fromISOBasic() {
    const fromIso = DateTime.fromISO("2017-05-15"); // => May 15, 2017 at midnight
    const fromIso2 = DateTime.fromISO("2017-05-15T08:30:00"); // => May 15, 2017 at midnight
}

function DateTime_localToString() {
    DateTime.local().toString(); // => '2017-09-14T03:20:34.091-04:00'
}

function DateTime_getters(getters: DateTime<true>) {
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
}

function DateTime_toBSON(dt: DateTime) {
    dt.toBSON(); // $ExpectType Date
}

function DateTime_toHTTP(dt: DateTime) {
    dt.toHTTP(); // $ExpectType string | null
}

function DateTime_toISO(dt: DateTime) {
    dt.toISO(); // $ExpectType string | null
    dt.toISO({}); // $ExpectType string | null
    // $ExpectType string | null
    dt.toISO({
        includePrefix: true,
        suppressMilliseconds: true,
        suppressSeconds: true,
        format: "basic",
        includeOffset: true,
        extendedZone: true,
        precision: "hours",
    });
}

function DateTime_toISODate(dt: DateTime) {
    dt.toISODate(); // $ExpectType string | null
    dt.toISODate({}); // $ExpectType string | null
    dt.toISODate({ format: "basic", precision: "months" }); // $ExpectType string | null
}

function DateTime_toISOTime(dt: DateTime) {
    dt.toISOTime(); // $ExpectType string | null
    dt.toISOTime({}); // $ExpectType string | null
    // $ExpectType string | null
    dt.toISOTime({
        includePrefix: true,
        suppressMilliseconds: true,
        suppressSeconds: true,
        format: "basic",
        includeOffset: true,
        extendedZone: true,
        precision: "hours",
    });
}

function DateTime_toISOWeekDate(dt: DateTime) {
    dt.toISOWeekDate(); // $ExpectType string | null
}

function DateTime_toJSDate(dt: DateTime) {
    dt.toJSDate(); // $ExpectType Date
}

function DateTime_toJSON(dt: DateTime) {
    dt.toJSON(); // $ExpectType string | null
}

function DateTime_toLocaleParts(dt: DateTime) {
    dt.toLocaleParts(); // $ExpectType DateTimeFormatPart[]
    dt.toLocaleParts()[0].type; // $ExpectType DateTimeFormatPartTypes || keyof DateTimeFormatPartTypesRegistry
    dt.toLocaleParts()[0].value; // $ExpectType string
}

function DateTime_toLocaleString(dt: DateTime) {
    dt.toLocaleString(); // $ExpectType string
    dt.toLocaleString({ month: "long", day: "numeric" }); // $ExpectType string
    dt.toLocaleString(DateTime.DATE_MED); // $ExpectType string
    dt.toLocaleString(DateTime.DATE_MED, {}); // $ExpectType string
}

function DateTime_toMillis(dt: DateTime) {
    dt.toMillis(); // $ExpectType number
    dt.toMillis(); // $ExpectType number
}

function DateTime_toRelative(dt: DateTime) {
    dt.toRelative(); // $ExpectType string | null
    dt.toRelative({}); // $ExpectType string | null
    // $ExpectType string | null
    dt.toRelative({
        base: DateTime.local(),
        locale: "fr",
        numberingSystem: "bali",
        style: "long",
        unit: Math.random() < 0.5 ? "days" : ["days"],
        round: true,
        rounding: "expand",
        padding: 10,
    });
}

function DateTime_toRelativeCalendar(dt: DateTime) {
    dt.toRelativeCalendar(); // $ExpectType string | null
    dt.toRelativeCalendar({}); // $ExpectType string | null
    // $ExpectType string | null
    dt.toRelativeCalendar({ base: DateTime.local(), locale: "fr", unit: "days", numberingSystem: "bali" });
}

function DateTime_toRFC2822(dt: DateTime) {
    dt.toRFC2822(); // $ExpectType string | null
}

function DateTime_toSeconds(dt: DateTime) {
    dt.toSeconds(); // $ExpectType number
}

function DateTime_toSQL(dt: DateTime) {
    dt.toSQL(); // $ExpectType string | null
    dt.toSQL({ includeOffset: false, includeZone: true }); // $ExpectType string | null
}

function DateTime_toSQLDate(dt: DateTime) {
    dt.toSQLDate(); // $ExpectType string | null
}

function DateTime_toSQLTime(dt: DateTime) {
    dt.toSQLTime(); // $ExpectType string | null
    dt.toSQLTime({ includeOffset: false, includeZone: true }); // $ExpectType string | null
    dt.toSQLTime({ includeOffsetSpace: false, includeZone: true }); // $ExpectType string | null
}

function DateTime_valueOf(dt: DateTime) {
    dt.valueOf(); // $ExpectType number
}

function DateTime_toObject(dt: DateTime) {
    dt.toObject(); // $ExpectType Record<_ToObjectUnit, number> | Partial<Record<_ToObjectUnit, number>>
    // @ts-expect-error
    dt.toObject().locale;
    dt.toObject({ includeConfig: true }); // $ExpectType _ToObjectOutput<true> | Partial<_ToObjectOutput<true>>
    dt.toObject({ includeConfig: true }).locale; // $ExpectType string | undefined
}

function DateTime_toUnixInteger(dt: DateTime) {
    dt.toUnixInteger(); // $ExpectType number
}

function DateTime_knownValidNarrowsOutInvalid() {
    const now = DateTime.now();

    // Known valid DateTime narrows out invalid returns
    now.toHTTP(); // $ExpectType string
    now.toISO(); // $ExpectType string
    now.toISO({}); // $ExpectType string
    // $ExpectType string
    now.toISO({
        includePrefix: true,
        suppressMilliseconds: true,
        suppressSeconds: true,
        format: "basic",
        includeOffset: true,
        extendedZone: true,
        precision: "hours",
    });
    now.toISODate(); // $ExpectType string
    now.toISODate({}); // $ExpectType string
    now.toISODate({ format: "basic", precision: "months" }); // $ExpectType string
    now.toISOTime(); // $ExpectType string
    now.toISOTime({}); // $ExpectType string
    // $ExpectType string
    now.toISOTime({
        includePrefix: true,
        suppressMilliseconds: true,
        suppressSeconds: true,
        format: "basic",
        includeOffset: true,
        extendedZone: true,
        precision: "hours",
    });
    now.toISOWeekDate(); // $ExpectType string
    now.toJSON(); // $ExpectType string
    now.toRelative(); // $ExpectType string
    now.toRelative({}); // $ExpectType string
    // $ExpectType string
    now.toRelative({
        base: DateTime.local(),
        locale: "fr",
        numberingSystem: "bali",
        style: "long",
        unit: Math.random() < 0.5 ? "days" : ["days"],
        round: true,
        rounding: "expand",
        padding: 10,
    });
    now.toRelativeCalendar(); // $ExpectType string
    now.toRelativeCalendar({}); // $ExpectType string
    // $ExpectType string
    now.toRelativeCalendar({ base: DateTime.local(), locale: "fr", unit: "days", numberingSystem: "bali" });
    now.toRFC2822(); // $ExpectType string
    now.toSQL(); // $ExpectType string
    now.toSQL({ includeOffset: false, includeZone: true }); // $ExpectType string
    now.toSQLDate(); // $ExpectType string
    now.toSQLTime(); // $ExpectType string
    now.toSQLTime({ includeOffset: false, includeZone: true }); // $ExpectType string
    now.toSQLTime({ includeOffsetSpace: false, includeZone: true }); // $ExpectType string
    now.toObject(); // $ExpectType Record<_ToObjectUnit, number>
}

function DateTime_plusMinusStartOfEndOf(dt: DateTime) {
    dt.plus({ hours: 3, minutes: 2 });
    dt.minus({ days: 7 });
    dt.startOf("day");
    dt.startOf("day", { useLocaleWeeks: true });
    // @ts-expect-error
    dt.startOf("day", { nonExistentProp: true });
    dt.endOf("hour");
}

function DateTime_zoneProperties(dt: DateTime) {
    dt.zone;
    dt.zoneName; // $ExpectType string | null
    dt.offset; // $ExpectType number
    dt.offsetNameShort; // $ExpectType string | null
    dt.offsetNameLong; // $ExpectType string | null
    dt.isOffsetFixed; // $ExpectType boolean | null
    dt.isInDST; // $ExpectType boolean
}

function DateTime_set(dt: DateTime) {
    dt.set({ hour: 3 }).hour; // $ExpectType number
}

function DateTime_setLocale(dt: DateTime) {
    const f: { month: "long"; day: "numeric" } = { month: "long", day: "numeric" };
    dt.setLocale("fr").toLocaleString(f);
    dt.setLocale("en-GB").toLocaleString(f);
    dt.setLocale("en-US").toLocaleString(f);
}

function DateTime_setZone() {
    DateTime.local().setZone("America/Los_Angeles");
}

function DateTime_utcAndLocalConversions() {
    DateTime.utc(2017, 5, 15); // $ExpectType DateTime<true> | DateTime<false>
    DateTime.utc(); // $ExpectType DateTime<true>
    DateTime.local().toUTC(); // $ExpectType DateTime<true>
    DateTime.utc().toLocal(); // $ExpectType DateTime<true>
}

function DateTime_maxMin(dt: DateTime, now: DateTime<true>) {
    DateTime.max(dt, now); // $ExpectType DateTime<true> | DateTime<false>
    DateTime.max(now, now); // $ExpectType DateTime<true>
    DateTime.max(...[dt, now].filter(date => date)); // $ExpectType DateTime<true> | DateTime<false> | undefined
    DateTime.max(); // $ExpectType undefined
    DateTime.min(dt, now); // $ExpectType DateTime<true> | DateTime<false>
    DateTime.min(now, now); // $ExpectType DateTime<true>
    DateTime.min(...[dt, now].filter(date => date)); // $ExpectType DateTime<true> | DateTime<false> | undefined
    DateTime.min(); // $ExpectType undefined
}

function DateTime_isDateTimeTypeGuardNarrowing(
    case1: DateTime | string,
    case2: DateTime<true> | number,
    case3: DateTime<false> | boolean,
) {
    if (DateTime.isDateTime(case1)) {
        case1; // $ExpectType DateTime<boolean>
    } else {
        case1; // $ExpectType string
    }

    if (DateTime.isDateTime(case2)) {
        case2; // $ExpectType DateTime<true>
    } else {
        case2; // $ExpectType number
    }

    if (DateTime.isDateTime(case3)) {
        case3; // $ExpectType DateTime<false>
    } else {
        case3; // $ExpectType boolean
    }
}

function DateTime_fromFormatExplain() {
    const { input, result, zone } = DateTime.fromFormatExplain("Aug 6 1982", "MMMM d yyyy");
}

function DateTime_invalid(invalidDateTime: DateTime<false>) {
    invalidDateTime.invalidReason; // $ExpectType string
    invalidDateTime.invalidExplanation; // $ExpectType string | null
}

/*
 * ============================================================
 * Duration
 * ============================================================
 */

function Duration_fromObject() {
    Duration.fromObject({ hours: 2, minutes: 7 }); // $ExpectType Duration<true>
    Duration.fromObject({ hour: 2, minute: 7 }); // $ExpectType Duration<true>
    // @ts-expect-error
    Duration.fromObject({ locale: "ru" });
    // @ts-expect-error
    Duration.fromObject({ conversionAccuracy: "casual" });
    Duration.fromObject({}, { conversionAccuracy: "casual" }); // $ExpectType Duration<true>
}

function Duration_fromDurationLike(dur: Duration) {
    Duration.fromDurationLike({ hours: 1 }); // $ExpectType Duration<true>
    Duration.fromDurationLike(1000); // $ExpectType Duration<true>
    Duration.fromDurationLike(dur); // $ExpectType Duration<true>
    // @ts-expect-error
    Duration.fromDurationLike("");
}

function Duration_constructorIsPrivate() {
    // @ts-expect-error
    new Duration({ hour: 2, minute: 7 });
}

function DateTime_plusDuration(dt: DateTime, dur: Duration) {
    dt.plus(dur); // $ExpectType DateTime<boolean>
    dt.plus({ quarters: 2, months: 1 }); // $ExpectType DateTime<boolean>
}

function Duration_getters(dur: Duration<true>) {
    dur.hours; // $ExpectType number
    dur.minutes; // $ExpectType number
    dur.seconds; // $ExpectType number
}

function Duration_set(dur: Duration<true>) {
    dur.set({ hour: 2, minutes: 15 }); // $ExpectType Duration<true>
}

function Duration_as(dur: Duration<true>) {
    dur.as("seconds"); // $ExpectType number
}

function Duration_toObject(dur: Duration<true>) {
    dur.toObject();
}

function Duration_toISO(dur: Duration<true>) {
    dur.toISO(); // $ExpectType string
}

function Duration_toISOTime(dur: Duration<true>) {
    dur.toISOTime(); // $ExpectType string
}

function Duration_normalize(dur: Duration<true>) {
    dur.normalize(); // $ExpectType Duration<true>
}

function Duration_rescale(dur: Duration<true>) {
    dur.rescale(); // $ExpectType Duration<true>
}

function Duration_shiftToAll(dur: Duration<true>) {
    dur.shiftToAll(); // $ExpectType Duration<true>
}

function Duration_toMillis(dur: Duration<true>) {
    dur.toMillis(); // $ExpectType number
}

function Duration_mapUnits(dur: Duration<true>) {
    dur.mapUnits((x, u) => (u === "hours" ? x * 2 : x)); // $ExpectType Duration<true>
}

function Duration_toHuman(dur: Duration) {
    // $ExpectType string
    dur.toHuman();
    // $ExpectType string
    dur.toHuman({});
    // $ExpectType string
    dur.toHuman({
        compactDisplay: "long",
        notation: "engineering",
        signDisplay: "always",
        unit: "",
        unitDisplay: "long",
        currencySign: "accounting",
        listStyle: "narrow",
        showZeros: true,
    });
}

function Duration_removeZeros(dur: Duration<true>) {
    // $ExpectType Duration<true>
    dur.removeZeros();
}

function Duration_toFormat(dur: Duration<true>) {
    // $ExpectType string
    dur.toFormat("");
    // $ExpectType string
    dur.toFormat("", {});
    // $ExpectType string
    dur.toFormat("", {
        floor: true,
        signMode: "negativeLargestOnly",
    });
}

function Duration_isDurationTypeGuardNarrowing(anything: unknown) {
    if (Duration.isDuration(anything)) {
        anything; // $ExpectType Duration<boolean>
    }
}

function Duration_invalidStatics() {
    // @ts-expect-error
    Duration.invalid();
    const invalidDuration = Duration.invalid("code", "because I said so"); // $ExpectType Duration<false>
    invalidDuration.invalidReason; // $ExpectType string
    invalidDuration.invalidExplanation; // $ExpectType string | null
}

function Duration_isDuration(anything: unknown) {
    Duration.isDuration(anything); // $ExpectType boolean
}

/*
 * ============================================================
 * Interval
 * ============================================================
 */

function Interval_fromDateTimes(now: DateTime<true>, later: DateTime<true>) {
    const i = Interval.fromDateTimes(now, later);
    i;
}

function Interval_length(i: Interval) {
    i.length(); // $ExpectType number
    i.length("years"); // $ExpectType number
}

function Interval_contains(i: Interval) {
    i.contains(DateTime.local(2019)); // $ExpectType boolean
}

function Interval_set(i: Interval) {
    i.set({ end: DateTime.local(2020) }); // $ExpectType Interval<true> | Interval<false>
}

function Interval_mapEndpoints(i: Interval) {
    i.mapEndpoints(d => d); // $ExpectType Interval<true> | Interval<false>
}

function Interval_intersection(i: Interval) {
    i.intersection(i); // $ExpectType Interval<boolean> | null
}

function Interval_invalidProperties(i: Interval) {
    i.invalidReason; // $ExpectType string | null
    i.invalidExplanation; // $ExpectType string | null
}

function Interval_toStringMethods(i: Interval) {
    i.toISO(); // $ExpectType string
    i.toISODate(); // $ExpectType string
    i.toISOTime(); // $ExpectType string
    i.toString(); // $ExpectType string
    i.toLocaleString(); // $ExpectType string
}

function Interval_toDuration(i: Interval) {
    i.toDuration("months"); // $ExpectType Duration<true> | Duration<false>
    i.toDuration(); // $ExpectType Duration<true> | Duration<false>
}

function Interval_divideEqually(i: Interval) {
    // @ts-expect-error
    i.divideEqually();
    i.divideEqually(5);
}

function Interval_isIntervalTypeGuardNarrowing(anything: unknown) {
    if (Interval.isInterval(anything)) {
        anything; // $ExpectType Interval<boolean>
    }
}

function Interval_constructorIsPrivate(now: DateTime<true>, later: DateTime<true>) {
    // @ts-expect-error
    new Interval(now, later);
}

function Interval_invalidStatics() {
    // @ts-expect-error
    Interval.invalid();
    const invalidInterval = Interval.invalid("code", "because I said so"); // $ExpectType Interval<false>
    invalidInterval.invalidReason; // $ExpectType string
    invalidInterval.invalidExplanation; // $ExpectType string | null
}

function Interval_isInterval(anything: unknown) {
    Interval.isInterval(anything); // $ExpectType boolean
}

/*
 * ============================================================
 * Info
 * ============================================================
 */

function Info_monthsAndWeekdays() {
    Info.months();
    Info.weekdays("long");
    // @ts-expect-error
    Info.weekdays("2-digit");
}

function Info_features() {
    // @ts-expect-error
    Info.features().intl;
    // @ts-expect-error
    Info.features().intlTokens;
    // @ts-expect-error
    Info.features().zones;
    Info.features().relative; // $ExpectType boolean
    Info.features().localeWeek; // $ExpectType boolean
}

function Info_weekSettings() {
    Info.getStartOfWeek(); // $ExpectType WeekdayNumbers
    Info.getStartOfWeek({ locale: "en-US" }); // $ExpectType WeekdayNumbers
    Info.getStartOfWeek({ locObj: {} }); // $ExpectType WeekdayNumbers
    Info.getMinimumDaysInFirstWeek(); // $ExpectType WeekdayNumbers
    Info.getWeekendWeekdays(); // $ExpectType WeekdayNumbers[]
}

/*
 * ============================================================
 * Settings
 * ============================================================
 */

function Settings_localeAndInvalid() {
    Settings.defaultLocale;
    Settings.defaultLocale = "en";
    Settings.throwOnInvalid = true;
    Settings.now();
    Settings.now = () => 0;
    // @ts-expect-error
    Settings.now = 0;
    Settings.resetCaches();
}

function Settings_defaultZone(ianaZone: IANAZone) {
    Settings.defaultZone = ianaZone;
    Settings.defaultZone = "America/Los_Angeles";
    Settings.defaultZone = Settings.defaultZone;
    Settings.defaultZone; // $ExpectType Zone<true> | Zone<false>
}

function Settings_twoDigitCutoffYear() {
    Settings.twoDigitCutoffYear;
    Settings.twoDigitCutoffYear = 42;
    // @ts-expect-error
    Settings.twoDigitCutoffYear = "123";
}

function Settings_defaultWeekSettings() {
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
}

/*
 * ============================================================
 * Settings
 * ============================================================
 */
// The following tests were coped from the docs
// http://moment.github.io/luxon/docs/manual/

function Intl_localeString() {
    // prettier-ignore
    DateTime.local().setLocale("el").toLocaleString(DateTime.DATE_FULL); // $ExpectType string
}

function Intl_localeGetter(dt: DateTime) {
    dt.locale; // $ExpectType string | null
    DateTime.local().setLocale("fr").locale; // $ExpectType string
    DateTime.local().reconfigure({ locale: "fr" }).locale; // $ExpectType string
}

function Intl_defaultLocale() {
    Settings.defaultLocale = "fr";
    DateTime.local().locale; // $ExpectType string
}

function Intl_resolvedLocaleOptions() {
    Settings.defaultLocale = DateTime.local().resolvedLocaleOptions().locale;
    DateTime.local().resolvedLocaleOptions({ locale: "de" }); // $ExpectType Required<LocaleOptions>
}

function Intl_formattingWithLocale(dt: DateTime) {
    dt.setLocale("fr").toLocaleString(DateTime.DATE_FULL); // $ExpectType string
    dt.toLocaleString({ ...DateTime.DATE_FULL }, { locale: "es" }); // $ExpectType string
    dt.setLocale("fr").toFormat("MMMM dd, yyyy GG"); // $ExpectType string
    dt.toFormat("MMMM dd, yyyy GG", { locale: "de" });
}

function Intl_fromFormatWithLocale() {
    DateTime.fromFormat("septembre 25, 2017 après Jésus-Christ", "MMMM dd, yyyy GG", { locale: "fr" });
}

function Intl_infoWithLocale() {
    Info.months("long", { locale: "fr" }); // $ExpectType string[]
    Info.weekdays("long", { locale: "fr" }); // $ExpectType string[]
    Info.eras("long", { locale: "fr" }); // $ExpectType string[]
}

function Intl_reconfigureNumberingSystem() {
    DateTime.local().reconfigure({ locale: "it", numberingSystem: "beng" });
    Settings.defaultNumberingSystem = "beng";
}

/*
 * ============================================================
 * Time zones and offsets
 * ============================================================
 */

function Zones_featureCheck() {
    // @ts-expect-error
    Info.features().zones;
}

function Zones_invalidZone(bogus: DateTime) {
    bogus.isValid; // $ExpectType boolean
    bogus.invalidReason; // $ExpectType string | null
    bogus.invalidExplanation; // $ExpectType string | null
}

function Zones_setZone(local: DateTime) {
    local.zoneName; // $ExpectType string | null
    local.toString(); // $ExpectType string
    local.setZone("America/Los_Angeles"); // $ExpectType DateTime<true> | DateTime<false>
    local.setZone("America/Los_Angeles", { keepLocalTime: true }); // $ExpectType DateTime<true> | DateTime<false>
}

function Zones_fromISOZoneName(iso: DateTime) {
    iso.zoneName; // $ExpectType string | null
    iso.toString(); // $ExpectType string
}

function DateTime_zonesFromISOAndFromFormatWithZone() {
    DateTime.fromISO("2017-05-15T09:10:23", { zone: "Europe/Paris", setZone: true }); // $ExpectType DateTime<true> | DateTime<false>
    DateTime.fromFormat("2017-05-15T09:10:23 Europe/Paris", "yyyy-MM-dd'T'HH:mm:ss z"); // $ExpectType DateTime<true> | DateTime<false>
}

/*
 * ============================================================
 * Time zones and offsets
 * ============================================================
 */

function DateTime_calendarsISOWeekDate() {
    // prettier-ignore
    DateTime.fromISO("2017-W23-3").plus({ weeks: 1, days: 2 }).toISOWeekDate(); // $ExpectType string | null
}

function DateTime_calendarsOutputCalendar() {
    const dtHebrew = DateTime.local().reconfigure({ outputCalendar: "hebrew" });
    dtHebrew.outputCalendar; // $ExpectType string
    dtHebrew.numberingSystem; // $ExpectType string
    dtHebrew.toLocaleString(); // $ExpectType string
}

function DateTime_calendarsFromObjectAndDefaultOutputCalendar() {
    DateTime.fromObject({}, { outputCalendar: "buddhist" }).toLocaleString(DateTime.DATE_FULL);
    Settings.defaultOutputCalendar = "persian";
}

/*
 * ============================================================
 * Formatting
 * ============================================================
 */

function DateTime_formattingToFormat() {
    DateTime.fromISO("2014-08-06T13:07:04.054").toFormat("yyyy LLL dd"); // $ExpectType string
}

/*
 * ============================================================
 * Parsing
 * ============================================================
 */

function DateTime_parsingFromObject() {
    // @ts-expect-error
    DateTime.fromObject();
    DateTime.fromObject({}, { zone: "America/Los_Angeles" }); // $ExpectType DateTime<true> | DateTime<false>
    DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }); // $ExpectType DateTime<true> | DateTime<false>
}

function DateTime_parsingFromISO() {
    // @ts-expect-error
    DateTime.fromISO();
    DateTime.fromISO("2016-05-25"); // $ExpectType DateTime<true> | DateTime<false>
}

function DateTime_parsingFromJSDate() {
    // @ts-expect-error
    DateTime.fromJSDate();
    DateTime.fromJSDate(new Date()); // $ExpectType DateTime<true> | DateTime<false>
}

function DateTime_parsingFromRFC2822() {
    // @ts-expect-error
    DateTime.fromRFC2822();
    DateTime.fromRFC2822("Tue, 01 Nov 2016 13:23:12 +0630"); // $ExpectType DateTime<true> | DateTime<false>
}

function DateTime_parsingFromHTTP() {
    // @ts-expect-error
    DateTime.fromHTTP();
    DateTime.fromHTTP("Sunday, 06-Nov-94 08:49:37 GMT"); // $ExpectType DateTime<true> | DateTime<false>
}

function DateTime_parsingFromSQL() {
    // @ts-expect-error
    DateTime.fromSQL();
    DateTime.fromSQL("2017-05-15 09:24:15"); // $ExpectType DateTime<true> | DateTime<false>
}

function DateTime_parsingFromMillis() {
    // @ts-expect-error
    DateTime.fromMillis();
    DateTime.fromMillis(1542674993410); // $ExpectType DateTime<true> | DateTime<false>
}

function DateTime_parsingFromSeconds() {
    // @ts-expect-error
    DateTime.fromSeconds();
    DateTime.fromSeconds(1542674993); // $ExpectType DateTime<true> | DateTime<false>
}

function DateTime_parsingFromFormat() {
    // @ts-expect-error
    DateTime.fromFormat();
    DateTime.fromFormat("May 25 1982", "LLLL dd yyyy"); // $ExpectType DateTime<true> | DateTime<false>
    DateTime.fromFormat("mai 25 1982", "LLLL dd yyyy", { locale: "fr" }); // $ExpectType DateTime<true> | DateTime<false>
}

function DateTime_parsingFromFormatExplain() {
    DateTime.fromFormatExplain("Aug 6 1982", "MMMM d yyyy").regex;
}

function DateTime_parsingInvalid() {
    DateTime.invalid("Timestamp out of range");
    DateTime.invalid("mismatched weekday", "you can't specify both a weekday and a date");
}

/*
 * ============================================================
 * Math
 * ============================================================
 */

function Math_comparisons(d1: DateTime, d2: DateTime) {
    if (d1 < d2 || +d1 === +d2) {
        //
    }

    d1.hasSame(d2, "millisecond"); // $ExpectType boolean
    d1.hasSame(d2, "minute"); // $ExpectType boolean
    d1.hasSame(d2, "year"); // $ExpectType boolean
}

function Math_toObjectAndAs(dur: Duration) {
    dur.toObject().days; // $ExpectType number | undefined
    // @ts-expect-error
    dur.toObject().day;
    dur.as("minutes"); // $ExpectType number
    dur.shiftTo("minutes").toObject().minutes; // $ExpectType number | undefined
}

function Math_plusDuration(dur: Duration) {
    // prettier-ignore
    DateTime.fromISO("2017-05-15").plus(dur).toISO(); // $ExpectType string | null
}

function Math_diff(end: DateTime, start: DateTime) {
    const diffInMonths = end.diff(start, "months");
    diffInMonths.toObject().months; // $ExpectType number | undefined

    const diff = end.diff(start);
    diff.toObject().milliseconds; // $ExpectType number | undefined
    end.diff(start, ["months", "days"]).months; // $ExpectType number
    end.diffNow(["months", "days"]); // $ExpectType Duration<true>
}

function Math_asAndShiftToDays(dur: Duration) {
    dur.as("days"); // $ExpectType number
    dur.shiftTo("days").toObject().days; // $ExpectType number | undefined
    dur.shiftTo("weeks", "hours").toObject().weeks; // $ExpectType number | undefined
}

function Math_plusShiftedDuration(dur: Duration) {
    DateTime.local().plus(dur.shiftTo("milliseconds")).year; // $ExpectType number
}

function Math_fromISO() {
    Duration.fromISO("PY23", { conversionAccuracy: "longterm" }); // $ExpectType Duration<true> | Duration<false>
    Duration.fromISOTime("21:37.000"); // $ExpectType Duration<true> | Duration<false>
    Duration.fromISOTime("21:37.000", { conversionAccuracy: "longterm" }); // $ExpectType Duration<true> | Duration<false>
}

function Math_diffWithAccuracyAndUnits(end: DateTime, start: DateTime) {
    end.diff(start, "hours", { conversionAccuracy: "longterm" }); // $ExpectType Duration<boolean>
    end.diff(start, ["months", "days", "hours"]); // $ExpectType Duration<boolean>
}

function Math_reconfigure(dur: Duration<true>) {
    dur.reconfigure({ conversionAccuracy: "longterm" }); // $ExpectType Duration<true>
}

function Math_untilAndIntervalToDuration(end: DateTime, start: DateTime, i: Interval) {
    start.until(end); // $ExpectType Interval<true> | DateTime<false> || DateTime<false> | Interval<true>
    i.toDuration(["years", "months", "days"]); // $ExpectType Duration<true> | Duration<false>
}

function Math_invalidProperties(dur: Duration<true>) {
    dur.invalidReason; // $ExpectType null
    dur.invalidExplanation; // $ExpectType null
}

/*
 * ============================================================
 * Sample Zone implementation
 * ============================================================
 */

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

function DateTime_toLocaleStringWithSpreadFullFormat() {
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
}

/*
 * ============================================================
 * Type guards
 * ============================================================
 */
function isValidDateTime(dt: DateTime): dt is DateTime<true> {
    return dt.isValid;
}

function DateTime_typeGuardCheck(dt: DateTime): void {
    if (isValidDateTime(dt)) {
        dt; // $ExpectType DateTime<true>
        dt.toISO(); // $ExpectType string
        return;
    }

    dt; // $ExpectType DateTime<boolean>
}

/*
 * ============================================================
 * Validity narrowing
 * ============================================================
 */
function DateTime_isValidNarrowsFactoryResult() {
    const dt = DateTime.fromISO("2016-05-25");

    if (dt.isValid) {
        dt; // $ExpectType DateTime<true>
        dt.toISO(); // $ExpectType string
        dt.toISODate(); // $ExpectType string
        return;
    }

    dt; // $ExpectType DateTime<false>
    dt.toISO(); // $ExpectType null
}

function Duration_isValidNarrowsFactoryResult() {
    const dur = Duration.fromISO("P3Y6M1W4DT12H30M5S");

    if (dur.isValid) {
        dur; // $ExpectType Duration<true>
        dur.toISO(); // $ExpectType string
        return;
    }

    dur; // $ExpectType Duration<false>
    dur.toISO(); // $ExpectType null
}

function Interval_isValidNarrowsFactoryResult() {
    const interval = Interval.fromISO("2016-05-25/2016-05-27");

    if (interval.isValid) {
        interval; // $ExpectType Interval<true>
        interval.toISO(); // $ExpectType string
        return;
    }

    interval; // $ExpectType Interval<false>
    interval.toISO(); // $ExpectType "Invalid Interval"
}

function Validity_helperTypes() {
    const canBeInvalid: CanBeInvalid = true;
    const valid = DateTime.now() as DateTime<Valid>;
    const invalid = DateTime.fromISO("nope") as DateTime<Invalid>;
    const maybeValid = DateTime.now() as DateTime<DefaultValidity>;
    const start: IfValid<DateTime<Valid>, null, DefaultValidity> = Interval.fromISO("2016-05-25/2016-05-27").start;

    canBeInvalid; // $ExpectType true
    valid.toISO(); // $ExpectType string
    invalid.toISO(); // $ExpectType null
    maybeValid.toISO(); // $ExpectType string | null
    start?.toISO(); // $ExpectType string | undefined
}
