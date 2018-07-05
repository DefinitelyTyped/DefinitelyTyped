namespace datetimeTests {
    const { datetime } = adone;

    { const a: string = datetime.defaultFormat; }
    { const a: string = datetime.defaultFormatUtc; }
    { const a: adone.I.datetime.Datetime = datetime(); }
    datetime(datetime());
    datetime(new Date());
    datetime("hello");
    datetime(123);
    datetime([1, 2, 3]);
    datetime(["a"]);
    datetime();
    datetime({
        y: 1
    });
    datetime({
        year: 1
    });
    datetime({
        years: 1
    });
    datetime({
        month: 1
    });
    datetime({
        months: 1
    });
    datetime({
        M: 1
    });
    datetime({
        days: 1
    });
    datetime({
        day: 1
    });
    datetime({
        d: 1
    });
    datetime({
        y: 1000
    });
    datetime({
        months: 1
    });
    datetime({
        month: 1
    });
    datetime({
        M: 1
    });
    datetime({
        days: 1
    });
    datetime({
        day: 1
    });
    datetime({
        d: 1
    });
    datetime({
        dates: 1
    });
    datetime({
        date: 1
    });
    datetime({
        D: 1
    });
    datetime({
        hours: 1
    });
    datetime({
        hour: 1
    });
    datetime({
        h: 1
    });
    datetime({
        minutes: 1
    });
    datetime({
        minute: 1
    });
    datetime({
        m: 1
    });
    datetime({
        seconds: 1
    });
    datetime({
        second: 1
    });
    datetime({
        s: 1
    });
    datetime({
        milliseconds: 1
    });
    datetime({
        millisecond: 1
    });
    datetime({
        ms: 1
    });
    datetime(101, "DD MM");
    datetime(101, "DD MM", true);
    datetime(101, undefined, true);
    datetime(101, undefined, "ru", true);
    datetime.utc(datetime());
    datetime.utc(new Date());
    datetime.utc("hello");
    datetime.utc(123);
    datetime.utc([1, 2, 3]);
    datetime.utc(["a"]);
    datetime.utc();
    datetime.utc({
        y: 1
    });
    datetime.utc({
        year: 1
    });
    datetime.utc({
        years: 1
    });
    datetime.utc({
        month: 1
    });
    datetime.utc({
        months: 1
    });
    datetime.utc({
        M: 1
    });
    datetime.utc({
        days: 1
    });
    datetime({
        day: 1
    });
    datetime.utc({
        d: 1
    });
    datetime.utc({
        y: 1000
    });
    datetime.utc({
        months: 1
    });
    datetime({
        month: 1
    });
    datetime.utc({
        M: 1
    });
    datetime.utc({
        days: 1
    });
    datetime.utc({
        day: 1
    });
    datetime.utc({
        d: 1
    });
    datetime.utc({
        dates: 1
    });
    datetime.utc({
        date: 1
    });
    datetime({
        D: 1
    });
    datetime.utc({
        hours: 1
    });
    datetime.utc({
        hour: 1
    });
    datetime.utc({
        h: 1
    });
    datetime.utc({
        minutes: 1
    });
    datetime.utc({
        minute: 1
    });
    datetime.utc({
        m: 1
    });
    datetime.utc({
        seconds: 1
    });
    datetime.utc({
        second: 1
    });
    datetime.utc({
        s: 1
    });
    datetime.utc({
        milliseconds: 1
    });
    datetime.utc({
        millisecond: 1
    });
    datetime.utc({
        ms: 1
    });
    datetime.utc(101, "DD MM");
    datetime.utc(101, "DD MM", true);
    datetime.utc(101, undefined, true);
    datetime.utc(101, undefined, "ru", true);
    datetime.unix(101010).clone();

    datetime.dos({ time: 100, date: 100 }).clone();

    datetime.invalid();
    datetime.invalid({ charsLeftOver: 100 });
    datetime.invalid({ empty: true });
    datetime.invalid({ invalidFormat: false });
    datetime.invalid({ invalidMonth: "jan" });
    datetime.invalid({ iso: false });
    datetime.invalid({ meridiem: "am" });
    datetime.invalid({ nullInput: false });
    datetime.invalid({ overflow: 1 });
    datetime.invalid({ parsedDateParts: [1] });
    datetime.invalid({ unusedInput: ["1"] });
    datetime.invalid({ unusedTokens: ["1"] });
    datetime.invalid({ userInvalidated: false });
    datetime.isDuration(12);
    { const a: string = datetime.locale(); }
    { const a: string = datetime.locale("he"); }
    { const a: string = datetime.locale(["he"]); }
    { const a: string = datetime.locale("he", {}); }
    { const a: string = datetime.locale("he", { calendar: { lastDay: "ha" } }); }
    { const a: string = datetime.locale("he", { calendar: { lastWeek: "ha" } }); }
    { const a: string = datetime.locale("he", { calendar: { nextDay: "ha" } }); }
    { const a: string = datetime.locale("he", { calendar: { nextWeek: "ha" } }); }
    { const a: string = datetime.locale("he", { calendar: { sameDay: "ha" } }); }
    { const a: string = datetime.locale("he", { calendar: { sameElse: "ha" } }); }
    { const a: string = datetime.locale("he", { invalidDate: "ha" }); }
    { const a: string = datetime.locale("he", { isPM: (x: string) => true }); }
    {
        const a: string = datetime.locale("he", {
            longDateFormat: {
                l: "", ll: "", lll: "",  llll: "",
                L: "", LL: "", LLL: "", LLLL: "",
                LT: "", lt: "", LTS: "", lts: ""
            }
        });
    }
    { const a: string = datetime.locale("he", { meridiem: (hour: number, minute: number, isLower: boolean) => "ba" }); }
    { const a: string = datetime.locale("he", { meridiemParse: /ab/ }); }

    { const a: string = datetime.locale("he", { monthsShort: ["a"] }); }
    {
        const a: string = datetime.locale("he", {
            monthsShort: {
                format: ["1"],
                standalone: ["1"],
                isFormat: /a/
            }
        });
    }
    {
        const a: string = datetime.locale("he", {
            monthsShort: (d) => d.clone() && "123"
        });
        const b: string = datetime.locale("he", {
            monthsShort: (d, f?: string) => d.clone() && "123"
        });
    }

    { const a: string = datetime.locale("he", { monthsShort: ["a"] }); }
    {
        const a: string = datetime.locale("he", {
            monthsShort: {
                format: ["1"],
                standalone: ["1"],
                isFormat: /a/
            }
        });
    }
    {
        const a: string = datetime.locale("he", {
            monthsShort: (d) => d.clone() && "123"
        });
        const b: string = datetime.locale("he", {
            monthsShort: (d, f?: string) => d.clone() && "123"
        });
    }

    { const a: string = datetime.locale("he", { ordinal: (n: number) => "1" }); }
    { const a: string = datetime.locale("he", { ordinalParse: /a/ }); }
    {
        const a: string = datetime.locale("he", {
            relativeTime: {
                future: "he",
                past: "he",
                s: "he",
                m: "he",
                mm: "he",
                h: "he",
                hh: "he",
                d: "he",
                dd: "he",
                M: "he",
                MM: "he",
                y: "he",
                yy: 'he"'
            }
        });
        const b: string = datetime.locale("he", {
            relativeTime: {
                future: (x: string) => "he",
                past: (x: string) => "he",
                s: (x: number, y: boolean, z: string, a: boolean) => "he",
                m: (x: number, y: boolean, z: string, a: boolean) => "he",
                mm: (x: number, y: boolean, z: string, a: boolean) => "he",
                h: (x: number, y: boolean, z: string, a: boolean) => "he",
                hh: (x: number, y: boolean, z: string, a: boolean) => "he",
                d: (x: number, y: boolean, z: string, a: boolean) => "he",
                dd: (x: number, y: boolean, z: string, a: boolean) => "he",
                M: (x: number, y: boolean, z: string, a: boolean) => "he",
                MM: (x: number, y: boolean, z: string, a: boolean) => "he",
                y: (x: number, y: boolean, z: string, a: boolean) => "he",
                yy: (x: number, y: boolean, z: string, a: boolean) => 'he"'
            }
        });
    }

    { const a: string = datetime.locale("he", { week: { dow: 1, doy: 2 } }); }

    { const a: string = datetime.locale("he", { weekDays: ["a"] }); }
    {
        const a: string = datetime.locale("he", {
            weekDays: {
                format: ["1"],
                standalone: ["1"],
                isFormat: /a/
            }
        });
    }
    {
        const a: string = datetime.locale("he", {
            weekDays: (d: adone.I.datetime.Datetime) => d.clone() && "123"
        });
        const b: string = datetime.locale("he", {
            weekDays: (d: adone.I.datetime.Datetime, f?: string) => d.clone() && "123"
        });
    }

    { const a: string = datetime.locale("he", { weekdaysMin: ["a"] }); }
    {
        const a: string = datetime.locale("he", {
            weekdaysMin: {
                format: ["1"],
                standalone: ["1"],
                isFormat: /a/
            }
        });
    }
    {
        const a: string = datetime.locale("he", {
            weekdaysMin: (d: adone.I.datetime.Datetime) => d.clone() && "123"
        });
        const b: string = datetime.locale("he", {
            weekdaysMin: (d: adone.I.datetime.Datetime, f?: string) => d.clone() && "123"
        });
    }

    { const a: string = datetime.locale("he", { weekdaysShort: ["a"] }); }
    {
        const a: string = datetime.locale("he", {
            weekdaysShort: {
                format: ["1"],
                standalone: ["1"],
                isFormat: /a/
            }
        });
    }
    {
        const a: string = datetime.locale("he", {
            weekdaysShort: (d: adone.I.datetime.Datetime) => d.clone() && "123"
        });
        const b: string = datetime.locale("he", {
            weekdaysShort: (d: adone.I.datetime.Datetime, f?: string) => d.clone() && "123"
        });
    }

    datetime.localeData();
    datetime.localeData("en");
    datetime.localeData(["en"]);
    { const a: string = datetime.localeData().calendar(); }
    { const a: string = datetime.localeData().calendar("lastDay"); }
    { const a: string = datetime.localeData().calendar("lastWeek"); }
    { const a: string = datetime.localeData().calendar("nextDay"); }
    { const a: string = datetime.localeData().calendar("nextWeek"); }
    { const a: string = datetime.localeData().calendar("sameDay"); }
    { const a: string = datetime.localeData().calendar("sameElse"); }
    { const a: number = datetime.localeData().firstDayOfWeek(); }
    { const a: string = datetime.localeData().invalidDate(); }
    { const a: boolean = datetime.localeData().isPM("a"); }
    { const a: string = datetime.localeData().longDateFormat("LL"); }
    { const a: string = datetime.localeData().meridiem(10, 10, true); }
    { const a: string[] = datetime.localeData().months(); }
    { const a: string = datetime.localeData().months(adone.datetime()); }
    { const a: number = datetime.localeData().monthsParse("he", "fa", false); }
    { const a: RegExp = datetime.localeData().monthsRegex(false); }
    { const a: string[] = datetime.localeData().monthsShort(); }
    { const a: string = datetime.localeData().monthsShort(adone.datetime()); }
    { const a: RegExp = datetime.localeData().monthsShortRegex(false); }
    { const a: number = datetime.localeData().weekdaysParse("he", "fa", true); }
    { const a: RegExp = datetime.localeData().weekdaysRegex(true); }
    { const a: string[] = datetime.localeData().weekdaysShort(); }
    { const a: string = datetime.localeData().weekdaysShort(adone.datetime()); }
    { const a: RegExp = datetime.localeData().weekdaysShortRegex(false); }
    { const a: adone.I.datetime.Duration = datetime.duration(); }
    { const a: adone.I.datetime.Duration = datetime.duration(100, "days"); }
    {
        const a: adone.I.datetime.Duration = datetime.duration({
            years: 10,
            year: 10,
            y: 10,
            months: 10,
            month: 10,
            M: 10,
            days: 10,
            day: 10,
            d: 10,
            dates: 0,
            date: 10,
            D: 10,
            hours: 10,
            hour: 10,
            h: 10,
            minutes: 10,
            minute: 10,
            m: 10,
            seconds: 10,
            second: 10,
            s: 10,
            milliseconds: 10,
            millisecond: 10,
            ms: 10,
            quarters: 10,
            quarter: 10,
            Q: 10,
            weeks: 10,
            week: 10,
            w: 10
        });
        { const b: adone.I.datetime.Duration = a.abs(); }
        { const b: adone.I.datetime.Duration = a.add(1, "year"); }
        { const b: adone.I.datetime.Duration = a.add(1); }
        { const b: number = a.as("millisecond"); }
        { const b: number = a.asDays(); }
        { const b: number = a.asHours(); }
        { const b: number = a.asMilliseconds(); }
        { const b: number = a.asMinutes(); }
        { const b: number = a.asMonths(); }
        { const b: number = a.asSeconds(); }
        { const b: number = a.asWeeks(); }
        { const b: number = a.asYears(); }
        { const b: number = a.days(); }
        { const b: number = a.get("year"); }
        { const b: number = a.hours(); }
        { const b: string = a.humanize(); }
        { const b: string = a.humanize(false); }
        { const b: string = a.locale(); }
        { const b: adone.I.datetime.Locale = a.localeData(); }
        { const b: number = a.milliseconds(); }
        { const b: number = a.minutes(); }
        { const b: number = a.months(); }
        { const b: number = a.seconds(); }
        { const b: adone.I.datetime.Duration = a.subtract(1, "minute"); }
        { const b: string = a.toISOString(); }
        { const b: string = a.toJSON(); }
        { const b: number = a.weeks(); }
        { const b: number = a.years(); }
    }

    { const a: adone.I.datetime.Datetime = datetime.parseZone(1230, "DD"); }
    { const a: adone.I.datetime.Datetime = datetime.parseZone(1230, "DD", false); }
    { const a: adone.I.datetime.Datetime = datetime.parseZone(1230, "DD", "en", false); }

    { const a: string[] = datetime.months(); }
    { const a: string = datetime.months(1); }
    { const a: string = datetime.months("format", 1); }

    { const a: string[] = datetime.monthsShort(); }
    { const a: string = datetime.monthsShort(1); }
    { const a: string = datetime.monthsShort("format", 1); }

    { const a: string[] = datetime.weekdays(); }
    { const a: string = datetime.weekdays(1); }
    { const a: string[] = datetime.weekdays("format"); }
    { const a: string = datetime.weekdays("format", 1); }
    { const a: string[] = datetime.weekdays(true); }
    { const a: string = datetime.weekdays(true, 1); }
    { const a: string = datetime.weekdays(true, "format", 1); }

    { const a: string[] = datetime.weekdaysShort(); }
    { const a: string = datetime.weekdaysShort(1); }
    { const a: string[] = datetime.weekdaysShort("format"); }
    { const a: string = datetime.weekdaysShort("format", 1); }
    { const a: string[] = datetime.weekdaysShort(true); }
    { const a: string = datetime.weekdaysShort(true, 1); }
    { const a: string = datetime.weekdaysShort(true, "format", 1); }

    { const a: string[] = datetime.weekdaysMin(); }
    { const a: string = datetime.weekdaysMin(1); }
    { const a: string[] = datetime.weekdaysMin("format"); }
    { const a: string = datetime.weekdaysMin("format", 1); }
    { const a: string[] = datetime.weekdaysMin(true); }
    { const a: string = datetime.weekdaysMin(true, 1); }
    { const a: string = datetime.weekdaysMin(true, "format", 1); }

    { const a: adone.I.datetime.Datetime = adone.datetime.min(adone.datetime(), adone.datetime()); }
    { const a: adone.I.datetime.Datetime = adone.datetime.max(adone.datetime(), adone.datetime()); }
    { const a: number = adone.datetime.now(); }
    {
        const a: adone.I.datetime.Locale = adone.datetime.defineLocale("he", {});
        const b: adone.I.datetime.Locale = adone.datetime.defineLocale("he", {
            calendar: {
                lastDay: ""
            },
            invalidDate: "h",
            isPM: (x: string) => true,
            longDateFormat: {
                l: "", L: "", LL: "", ll: "", LLL: "", lll: "", LLLL: "", llll: "",
                LT: "", lt: "", LTS: "", lts: ""
            },
            ordinalParse: /ab/
        });
    }
    {
        const a: adone.I.datetime.Locale = adone.datetime.updateLocale("he", {
            ordinal: (k: number) => "hello"
        });
    }

    { const a: string[] = adone.datetime.locales(); }

    { const a: string = adone.datetime.normalizeUnits("y"); }

    { const a: number = adone.datetime.relativeTimeThreshold("y"); }
    { const a: boolean = adone.datetime.relativeTimeThreshold("y", 10); }

    { const a: (x: number) => number = adone.datetime.relativeTimeRounding(); }
    { const a: boolean = adone.datetime.relativeTimeRounding((x: number) => 123); }

    { const a: string = adone.datetime.calendarFormat(adone.datetime(), adone.datetime()); }

    const d = adone.datetime();

    { const a: adone.I.datetime.Datetime = d.add(1, "day"); }
    { const a: adone.I.datetime.Datetime = d.add(1, "hour"); }
    { const a: adone.I.datetime.Datetime = d.add(1); }

    { const a: string = d.calendar("h"); }
    { const a: string = d.calendar(1); }
    { const a: string = d.calendar(adone.datetime()); }
    { const a: string = d.calendar(new Date()); }
    { const a: string = d.calendar([1, 2, 3]); }
    { const a: string = d.calendar(["1", "2", "3"]); }

    { const a: adone.I.datetime.Datetime = d.clone(); }
    {
        const a: adone.I.datetime.DatetimeCreationData = d.creationData();
        a.format;
        a.input;
        a.isUTC;
        a.locale;
        a.strict;
    }
    { const a: number = d.date(); }
    { const a: number = d.dates(); }
    { const a: number = d.day(); }
    { const a: number = d.dayOfYear(); }
    { const a: number = d.days(); }
    { const a: number = d.daysInMonth(); }
    { const a: number = d.diff(adone.datetime()); }
    { const a: number = d.diff(1001); }
    { const a: number = d.diff("asdasd"); }
    { const a: number = d.diff(new Date()); }
    { const a: number = d.diff(new Date(), "years"); }
    { const a: adone.I.datetime.Datetime = d.endOf("year"); }
    { const a: string = d.format("YYYY"); }
    { const a: string = d.from(100); }
    { const a: string = d.from(adone.datetime()); }
    { const a: string = d.from(new Date()); }
    { const a: string = d.from(100, true); }
    { const a: string = d.fromNow(); }
    { const a: string = d.fromNow(true); }
    { const a: number = d.get("hours"); }
    { const a: boolean = d.hasAlignedHourOffset(); }
    { const a: boolean = d.hasAlignedHourOffset("123"); }
    { const a: boolean = d.hasAlignedHourOffset(new Date()); }
    { const a: boolean = d.hasAlignedHourOffset(123); }
    { const a: boolean = d.hasAlignedHourOffset(adone.datetime()); }
    { const a: number = d.hour(); }
    { const a: number = d.hours(); }
    { const a: string = d.inspect(); }
    { const a: number = d.invalidAt(); }
    { const a: boolean = d.isAfter(123123); }
    { const a: boolean = d.isAfter(adone.datetime()); }
    { const a: boolean = d.isBefore(123123); }
    { const a: boolean = d.isBefore(adone.datetime()); }
    { const a: boolean = d.isBetween(adone.datetime(), adone.datetime()); }
    { const a: boolean = d.isBetween(adone.datetime(), 123); }
    { const a: boolean = d.isDST(); }
    { const a: boolean = d.isDSTShifted(); }
    { const a: boolean = d.isLeapYear(); }
    { const a: boolean = d.isLocal(); }
    { const a: number = d.isoWeek(); }
    { const a: number = d.isoWeekday(); }
    { const a: number = d.isoWeeks(); }
    { const a: number = d.isoWeeksInYear(); }
    { const a: number = d.isoWeekYear(); }
    { const a: boolean = d.isSame(13); }
    { const a: boolean = d.isSame(adone.datetime()); }
    { const a: boolean = d.isSame("23"); }
    { const a: boolean = d.isSameOrAfter("123"); }
    { const a: boolean = d.isSameOrAfter(123); }
    { const a: boolean = d.isSameOrAfter(adone.datetime()); }
    { const a: boolean = d.isSameOrBefore("123"); }
    { const a: boolean = d.isSameOrBefore(123); }
    { const a: boolean = d.isSameOrBefore(adone.datetime()); }
    { const a: boolean = d.isUTC(); }
    { const a: boolean = d.isUtc(); }
    { const a: boolean = d.isUtcOffset(); }
    { const a: boolean = d.isValid(); }
    { const a: adone.I.datetime.Datetime = d.local(); }
    { const a: string = d.locale(); }
    { const a: adone.I.datetime.Locale = d.localeData(); }
    { const a: number = d.millisecond(); }
    { const a: number = d.milliseconds(); }
    { const a: number = d.minute(); }
    { const a: number = d.minutes(); }
    { const a: number = d.months(); }
    { const a: adone.I.datetime.Datetime = d.parseZone(); }
    {
        const a: adone.I.datetime.DatetimeParsingFlags = d.parsingFlags();
        a.charsLeftOver;
        a.empty;
        a.invalidFormat;
        a.invalidMonth;
        a.iso;
        a.meridiem;
        a.nullInput;
        a.overflow;
        a.parsedDateParts;
        a.unusedInput;
        a.unusedTokens;
        a.userInvalidated;
    }
    { const a: number = d.quarter(); }
    { const a: number = d.quarters(); }
    { const a: number = d.second(); }
    { const a: number = d.seconds(); }
    { const a: adone.I.datetime.Datetime = d.set("year", 2); }
    { const a: adone.I.datetime.Datetime = d.startOf("year"); }
    { const a: adone.I.datetime.Datetime = d.subtract(1, "day"); }
    { const a: adone.I.datetime.Datetime = d.subtract(1); }
    { const a: string = d.to(100); }
    { const a: string = d.to(adone.datetime()); }
    { const a: string = d.to("asdjasd"); }
    { const a: number[] = d.toArray(); }
    { const a: Date = d.toDate(); }
    { const a: string = d.toISOString(); }
    { const a: string = d.toJSON(); }
    { const b: { date: number, time: number } = d.toDOS(); }
    { const a: string = d.toNow(); }
    {
        const a: adone.I.datetime.DatetimeObjectOutput = d.toObject();
        a.date;
        a.hours;
        a.milliseconds;
        a.minutes;
        a.months;
        a.seconds;
        a.years;
    }
    { const a: number = d.unix(); }
    { const a: adone.I.datetime.Datetime = d.utc(); }
    { const a: number = d.utcOffset(); }
    { const a: number = d.week(); }
    { const a: number = d.weekday(); }
    { const a: number = d.weeks(); }
    { const a: number = d.weeksInYear(); }
    { const a: number = d.weekYear(); }
    { const a: number = d.year(); }
    { const a: number = d.years(); }
    { const a: string = d.zoneAbbr(); }
    { const a: string = d.zoneName(); }
}
