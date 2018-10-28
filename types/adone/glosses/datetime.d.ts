// based on https://github.com/moment/moment/blob/develop/moment.d.ts

declare namespace adone {
    namespace I {
        namespace datetime {
            type RelativeTimeKey = "s" | "m" | "mm" | "h" | "hh" | "d" | "dd" | "M" | "MM" | "y" | "yy";
            type CalendarKey = "sameDay" | "nextDay" | "lastDay" | "nextWeek" | "lastWeek" | "sameElse";
            type LongDateFormatKey = "LTS" | "LT" | "L" | "LL" | "LLL" | "LLLL" | "lts" | "lt" | "l" | "ll" | "lll" | "llll";

            interface Locale {
                calendar(key?: CalendarKey, m?: Datetime, now?: Datetime): string;

                longDateFormat(key: LongDateFormatKey): string;
                invalidDate(): string;
                ordinal(n: number): string;

                preparse(inp: string): string;
                postformat(inp: string): string;
                relativeTime(n: number, withoutSuffix: boolean, key: RelativeTimeKey, isFuture: boolean): string;
                pastFuture(diff: number, absRelTime: string): string;
                set(config: object): void;

                months(): string[];
                months(m: Datetime, format?: string): string;
                monthsShort(): string[];
                monthsShort(m: Datetime, format?: string): string;
                monthsParse(monthName: string, format: string, strict: boolean): number;
                monthsRegex(strict: boolean): RegExp;
                monthsShortRegex(strict: boolean): RegExp;

                week(m: Datetime): number;
                firstDayOfYear(): number;
                firstDayOfWeek(): number;

                weekdays(): string[];
                weekdays(m: Datetime, format?: string): string;
                weekdaysMin(): string[];
                weekdaysMin(m: Datetime): string;
                weekdaysShort(): string[];
                weekdaysShort(m: Datetime): string;
                weekdaysParse(weekdayName: string, format: string, strict: boolean): number;
                weekdaysRegex(strict: boolean): RegExp;
                weekdaysShortRegex(strict: boolean): RegExp;
                weekdaysMinRegex(strict: boolean): RegExp;

                isPM(input: string): boolean;
                meridiem(hour: number, minute: number, isLower: boolean): string;
            }

            interface StandaloneFormatSpec {
                format: string[];
                standalone: string[];
                isFormat?: RegExp;
            }

            interface WeekSpec {
                dow: number;
                doy: number;
            }

            type CalendarSpecVal = string | ((m?: DatetimeInput, now?: Datetime) => string);
            interface CalendarSpec {
                sameDay?: CalendarSpecVal;
                nextDay?: CalendarSpecVal;
                lastDay?: CalendarSpecVal;
                nextWeek?: CalendarSpecVal;
                lastWeek?: CalendarSpecVal;
                sameElse?: CalendarSpecVal;

                // any additional properties might be used with datetime.calendarFormat
                [x: string]: CalendarSpecVal | undefined;
            }

            type RelativeTimeSpecVal = (
                string |
                ((n: number, withoutSuffix: boolean, key: RelativeTimeKey, isFuture: boolean) => string)
            );
            type RelativeTimeFuturePastVal = string | ((relTime: string) => string);

            interface RelativeTimeSpec {
                future: RelativeTimeFuturePastVal;
                past: RelativeTimeFuturePastVal;
                s: RelativeTimeSpecVal;
                m: RelativeTimeSpecVal;
                mm: RelativeTimeSpecVal;
                h: RelativeTimeSpecVal;
                hh: RelativeTimeSpecVal;
                d: RelativeTimeSpecVal;
                dd: RelativeTimeSpecVal;
                M: RelativeTimeSpecVal;
                MM: RelativeTimeSpecVal;
                y: RelativeTimeSpecVal;
                yy: RelativeTimeSpecVal;
            }

            interface LongDateFormatSpec {
                LTS: string;
                LT: string;
                L: string;
                LL: string;
                LLL: string;
                LLLL: string;

                // lets forget for a sec that any upper/lower permutation will also work
                lts?: string;
                lt?: string;
                l?: string;
                ll?: string;
                lll?: string;
                llll?: string;
            }

            type MonthWeekdayFn = (datetimeToFormat: Datetime, format?: string) => string;
            type WeekdaySimpleFn = (datetimeToFormat: Datetime) => string;

            interface LocaleSpecification {
                months?: string[] | StandaloneFormatSpec | MonthWeekdayFn;
                monthsShort?: string[] | StandaloneFormatSpec | MonthWeekdayFn;

                weekdays?: string[] | StandaloneFormatSpec | MonthWeekdayFn;
                weekdaysShort?: string[] | StandaloneFormatSpec | WeekdaySimpleFn;
                weekdaysMin?: string[] | StandaloneFormatSpec | WeekdaySimpleFn;

                meridiemParse?: RegExp;
                meridiem?(hour: number, minute: number, isLower: boolean): string;

                isPM?(input: string): boolean;

                longDateFormat?: LongDateFormatSpec;
                calendar?: CalendarSpec;
                relativeTime?: RelativeTimeSpec;
                invalidDate?: string;
                ordinal?(n: number): string;
                ordinalParse?: RegExp;

                week?: WeekSpec;

                // Allow anything: in general any property that is passed as locale spec is
                // put in the locale object so it can be used by locale functions
                [x: string]: any;
            }

            interface DatetimeObjectOutput {
                years: number;
                /* One digit */
                months: number;
                /* Day of the month */
                date: number;
                hours: number;
                minutes: number;
                seconds: number;
                milliseconds: number;
            }

            interface Duration {
                /**
                 * Returns a human readable representation
                 */
                humanize(withSuffix?: boolean): string;

                abs(): Duration;

                /**
                 * Returns the length of the duration in the given units
                 */
                as(units: unitOfTime.Base): number;

                /**
                 * Returns the value of the given unit
                 */
                get(units: unitOfTime.Base): number;

                /**
                 * Returns the number of milliseconds in the duration
                 */
                milliseconds(): number;

                /**
                 * Returns the length of the duration in milliseconds
                 */
                asMilliseconds(): number;

                /**
                 * Returns the number of seconds in the duration
                 */
                seconds(): number;

                /**
                 * Returns the length of the duration in seconds
                 */
                asSeconds(): number;

                /**
                 * Returns the number of minutes in the duration
                 */
                minutes(): number;

                /**
                 * Returns the length of the duration in minutes
                 */
                asMinutes(): number;

                /**
                 * Returns the number of hours in the duration
                 */
                hours(): number;

                /**
                 * Returns the length of the duration in hours
                 */
                asHours(): number;

                /**
                 * Returns the number of days in the duration
                 */
                days(): number;

                /**
                 * Returns the length of the duration in days
                 */
                asDays(): number;

                /**
                 * Returns the number of weeks in the duration
                 */
                weeks(): number;

                /**
                 * Returns the length of the duration in weeks
                 */
                asWeeks(): number;

                /**
                 * Returns the number of months in the duration
                 */
                months(): number;

                /**
                 * Returns the length of the duration in months
                 */
                asMonths(): number;

                /**
                 * Returns the number of years in the duration
                 */
                years(): number;

                /**
                 * Returns the length of the duration in years
                 */
                asYears(): number;

                /**
                 * Mutates the original duration by adding time
                 */
                add(inp?: DurationInputArg1, unit?: DurationInputArg2): Duration;

                /**
                 * Mutates the original duration by subtracting time.
                 */
                subtract(inp?: DurationInputArg1, unit?: DurationInputArg2): Duration;

                /**
                 * Returns the using locale
                 */
                locale(): string;

                /**
                 * Sets a new locale
                 */
                locale(locale: LocaleSpecifier): Duration;

                /**
                 * Returns the data of the using locale
                 */
                localeData(): Locale;

                /**
                 * Returns duration in string as specified by ISO 8601 standard.
                 */
                toISOString(): string;

                /**
                 * When serializing a duration object to JSON, it will be represented as an ISO8601 string.
                 */
                toJSON(): string;
            }

            interface DatetimeParsingFlags {
                empty: boolean;
                unusedTokens: string[];
                unusedInput: string[];
                overflow: number;
                charsLeftOver: number;
                nullInput: boolean;
                invalidMonth: string | null;
                invalidFormat: boolean;
                userInvalidated: boolean;
                iso: boolean;
                parsedDateParts: any[];
                meridiem: string | null;
            }

            interface DatetimeParsingFlagsOpt {
                empty?: boolean;
                unusedTokens?: string[];
                unusedInput?: string[];
                overflow?: number;
                charsLeftOver?: number;
                nullInput?: boolean;
                invalidMonth?: string;
                invalidFormat?: boolean;
                userInvalidated?: boolean;
                iso?: boolean;
                parsedDateParts?: any[];
                meridiem?: string;
            }

            type DatetimeFormatSpecification = string | string[];

            namespace unitOfTime {
                type Base = (
                    "year" | "years" | "y" |
                    "month" | "months" | "M" |
                    "week" | "weeks" | "w" |
                    "day" | "days" | "d" |
                    "hour" | "hours" | "h" |
                    "minute" | "minutes" | "m" |
                    "second" | "seconds" | "s" |
                    "millisecond" | "milliseconds" | "ms"
                );

                type _quarter = "quarter" | "quarters" | "Q";
                type _isoWeek = "isoWeek" | "isoWeeks" | "W";
                type _date = "date" | "dates" | "D";
                type DurationConstructor = Base | _quarter;

                type DurationAs = Base;

                type StartOf = Base | _quarter | _isoWeek | _date;

                type Diff = Base | _quarter;

                type DatetimeConstructor = Base | _date;

                type All = Base | _quarter | _isoWeek | _date |
                    "weekYear" | "weekYears" | "gg" |
                    "isoWeekYear" | "isoWeekYears" | "GG" |
                    "dayOfYear" | "dayOfYears" | "DDD" |
                    "weekday" | "weekdays" | "e" |
                    "isoWeekday" | "isoWeekdays" | "E";
            }

            interface DatetimeInputObject {
                /**
                 * Year
                 */
                years?: number;
                /**
                 * Year
                 */
                year?: number;
                /**
                 * Year
                 */
                y?: number;

                /**
                 * Month, 0..11
                 */
                months?: number;
                /**
                 * Month, 0..11
                 */
                month?: number;
                /**
                 * Month, 0..11
                 */
                M?: number;

                /**
                 * Day of week, 0..6
                 */
                days?: number;
                /**
                 * Day of week, 0..6
                 */
                day?: number;
                /**
                 * Day of week, 0..6
                 */
                d?: number;

                /**
                 * Day of month, 1..31
                 */
                dates?: number;
                /**
                 * Day of month, 1..31
                 */
                date?: number;
                /**
                 * Day of month, 1..31
                 */
                D?: number;

                /**
                 * Hour, 0..23
                 */
                hours?: number;
                /**
                 * Hour, 0..23
                 */
                hour?: number;
                /**
                 * Hour, 0..23
                 */
                h?: number;

                /**
                 * Minute, 0..59
                 */
                minutes?: number;
                /**
                 * Minute, 0..59
                 */
                minute?: number;
                /**
                 * Minute, 0..59
                 */
                m?: number;

                /**
                 * Second, 0..59
                 */
                seconds?: number;
                /**
                 * Second, 0..59
                 */
                second?: number;
                /**
                 * Second, 0..59
                 */
                s?: number;

                /**
                 * Millisecond, 0..999
                 */
                milliseconds?: number;
                /**
                 * Millisecond, 0..999
                 */
                millisecond?: number;
                /**
                 * Millisecond, 0..999
                 */
                ms?: number;
            }

            interface DurationInputObject extends DatetimeInputObject {
                /**
                 * Quarter, 1..4
                 */
                quarters?: number;
                /**
                 * Quarter, 1..4
                 */
                quarter?: number;
                /**
                 * Quarter, 1..4
                 */
                Q?: number;

                /**
                 * Week of the year, 1..53
                 */
                weeks?: number;
                /**
                 * Week of the year, 1..53
                 */
                week?: number;
                /**
                 * Week of the year, 1..53
                 */
                w?: number;
            }

            interface DatetimeSetObject extends DatetimeInputObject {
                /**
                 * Week-year according to the locale
                 */
                weekYears?: number;

                /**
                 * Week-year according to the locale
                 */
                weekYear?: number;

                /**
                 * Week-year according to the locale
                 */
                gg?: number;

                /**
                 * ISO week-year
                 */
                isoWeekYears?: number;

                /**
                 * ISO week-year
                 */
                isoWeekYear?: number;

                /**
                 * ISO week-year
                 */
                GG?: number;

                /**
                 * Quarter, 1..4
                 */
                quarters?: number;

                /**
                 * Quarter, 1..4
                 */
                quarter?: number;

                /**
                 * Quarter, 1..4
                 */
                Q?: number;

                /**
                 * Week of the year, 1..53
                 */
                weeks?: number;

                /**
                 * Week of the year, 1..53
                 */
                week?: number;

                /**
                 * Week of the year, 1..53
                 */
                w?: number;

                /**
                 *  ISO week of the year, 1..53
                 */
                isoWeeks?: number;

                /**
                 *  ISO week of the year, 1..53
                 */
                isoWeek?: number;

                /**
                 *  ISO week of the year, 1..53
                 */
                W?: number;

                /**
                 * Day of the year, 1..366
                 */
                dayOfYears?: number;

                /**
                 * Day of the year, 1..366
                 */
                dayOfYear?: number;

                /**
                 * Day of the year, 1..366
                 */
                DDD?: number;

                /**
                 * Day of Week according to the locale
                 */
                weekdays?: number;

                /**
                 * Day of Week according to the locale
                 */
                weekday?: number;

                /**
                 * Day of Week according to the locale
                 */
                e?: number;

                /**
                 * ISO Day of Week
                 */
                isoWeekdays?: number;

                /**
                 * ISO Day of Week
                 */
                isoWeekday?: number;

                /**
                 * ISO Day of Week
                 */
                E?: number;
            }

            interface FromTo {
                from: DatetimeInput;
                to: DatetimeInput;
            }

            type DatetimeInput = string | number | Array<number | string> | DatetimeInputObject | Datetime | Date | null | undefined;
            type DurationInputArg1 = Duration | number | string | FromTo | DurationInputObject | null | undefined;
            type DurationInputArg2 = unitOfTime.DurationConstructor;
            type LocaleSpecifier = string | Datetime | Duration | string[] | boolean;

            interface DatetimeCreationData {
                input: DatetimeInput;
                format?: DatetimeFormatSpecification;
                locale: Locale;
                isUTC: boolean;
                strict?: boolean;
            }

            interface MSDOSFormat {
                /**
                 * an unsigned 16-bit integer represents MS-DOS date
                 */
                date: number;

                /**
                 * an unsigned 16-bit integer represents MS-DOS time
                 */
                time: number;
            }

            interface Datetime extends Object {
                /**
                 * Formats the datetime using the given format.
                 * It takes a string of tokens and replaces them with their corresponding values
                 */
                format(format?: string): string;

                /**
                 * Mutates the original datetime by setting it to the start of a unit of time
                 */
                startOf(unitOfTime: unitOfTime.StartOf): Datetime;

                /**
                 * Mutates the original moment by setting it to the end of a unit of time
                 */
                endOf(unitOfTime: unitOfTime.StartOf): Datetime;

                /**
                 * Mutates the original moment by adding time, by default milliseconds
                 */
                add(amount?: DurationInputArg1, unit?: DurationInputArg2): Datetime;

                /**
                 * Mutates the original moment by subtracting time, by default milliseconds
                 */
                subtract(amount?: DurationInputArg1, unit?: DurationInputArg2): Datetime;

                /**
                 * Calendar time displays time relative to a given referenceTime (defaults to now)
                 */
                calendar(time?: DatetimeInput, formats?: CalendarSpec): string;

                /**
                 * Clones the datetime object
                 */
                clone(): Datetime;

                /**
                 * Returns unix timestamp in milliseconds
                 */
                valueOf(): number;

                /**
                 * Sets a flag on the original datetime to use local time to display a datetime instead of the original datetime's time
                 */
                local(keepLocalTime?: boolean): Datetime;

                /**
                 * Returns true if local flag is set
                 */
                isLocal(): boolean;

                /**
                 * Sets a flag on the original datetime to use UTC to display a datetime instead of the original datetime's time
                 */
                utc(keepLocalTime?: boolean): Datetime;

                /**
                 * Return true if utc flag is set
                 */
                isUTC(): boolean;

                /**
                 * Return true if utc flag is set
                 */
                isUtc(): boolean;

                parseZone(): Datetime;

                /**
                 * Return true if the datetime object is valid
                 */
                isValid(): boolean;

                /**
                 * Returns the index of the first overflowed unit
                 *
                 * 0 - years
                 * 1 - months
                 * 2 - days
                 * 3 - hours
                 * 4 - minutes
                 * 5 - seconds
                 * 6 - milliseconds
                 */
                invalidAt(): number;

                hasAlignedHourOffset(other?: DatetimeInput): boolean;

                /**
                 * Returns all the constructor inputs of this datatime object
                 */
                creationData(): DatetimeCreationData;

                parsingFlags(): DatetimeParsingFlags;

                /**
                 * Gets the year
                 */
                year(): number;

                /**
                 * Sets the year
                 */
                year(y: number): Datetime;

                /**
                 * Gets the year
                 *
                 * @deprecated use year(y)
                 */
                years(y: number): Datetime;

                /**
                 * Sets the year
                 * @deprecated use year()
                 */
                years(): number;

                /**
                 * Gets the quarter, 1..4
                 */
                quarter(): number;

                /**
                 * Sets the quarter, 1..4
                 */
                quarter(q: number): Datetime;

                /**
                 * Gets the quarter, 1..4
                 */
                quarters(): number;

                /**
                 * Sets the quarter, 1..4
                 */
                quarters(q: number): Datetime;

                /**
                 * Gets the month, 0..11
                 */
                month(): number;

                /**
                 * Sets the month, 0..11.
                 * If the range is exceeded, it will bubble up to the year
                 */
                month(M: number | string): Datetime;

                /**
                 * Sets the month, 0..11.
                 * If the range is exceeded, it will bubble up to the year
                 *
                 * @deprecated use month(M)
                 */
                months(M: number | string): Datetime;

                /**
                 * Gets the month, 0..11
                 *
                 * @deprecated use month()
                 */
                months(): number;

                /**
                 * Gets the day of week, 0(Sunday)..6(Saturday)
                 */
                day(): number;

                /**
                 * Sets the day of week, 0(Sunday)..6(Saturday).
                 * If the range is exceeded, it will bubble up to other weeks
                 */
                day(d: number | string): Datetime;

                /**
                 * Sets the day of week, 0(Sunday)..6(Saturday).
                 * If the range is exceeded, it will bubble up to other weeks
                 */
                days(d: number | string): Datetime;

                /**
                 * Gets the day of week, 0(Sunday)..6(Saturday)
                 */
                days(): number;

                /**
                 * Gets the day of the month, 1..31
                 */
                date(): number;

                /**
                 * Sets the day of the month, 1..31.
                 * If the range is exceeded, it will bubble up to the months.
                 */
                date(d: number): Datetime;

                /**
                 * Gets the day of the month, 1..31
                 *
                 * @deprecated use date(d)
                 */
                dates(d: number): Datetime;

                /**
                 * Sets the day of the month, 1..31.
                 * If the range is exceeded, it will bubble up to the months.
                 *
                 * @deprecated use date()
                 */
                dates(): number;

                /**
                 * Gets the hour, 0..23
                 */
                hour(): number;

                /**
                 * Sets the hour, 0..23.
                 * If the range is exceeded, it will bubble up to the day.
                 */
                hour(h: number): Datetime;

                /**
                 * Gets the hour, 0..23
                 */
                hours(): number;

                /**
                 * Sets the hour, 0..23.
                 * If the range is exceeded, it will bubble up to the day.
                 */
                hours(h: number): Datetime;

                /**
                 * Gets the minute, 0..59
                 */
                minute(): number;

                /**
                 * Sets the minute, 0..59.
                 * If the range is exceeded, it will bubble up to the hour.
                 */
                minute(m: number): Datetime;

                /**
                 * Gets the minute, 0..59
                 */
                minutes(): number;

                /**
                 * Sets the minute, 0..59.
                 * If the range is exceeded, it will bubble up to the hour.
                 */
                minutes(m: number): Datetime;

                /**
                 * Gets the second, 0..59
                 */
                second(): number;

                /**
                 * Sets the second, 0..59.
                 * If the range is exceeded, it will bubble up to the minutes.
                 */
                second(s: number): Datetime;

                /**
                 * Gets the second, 0..59
                 */
                seconds(): number;

                /**
                 * Sets the second, 0..59.
                 * If the range is exceeded, it will bubble up to the minutes.
                 */
                seconds(s: number): Datetime;

                /**
                 * Gets the millisecond, 0..999
                 */
                millisecond(): number;

                /**
                 * Sets the millisecond, 0..999.
                 * If the range is exceeded, it will bubble up to the seconds.
                 */
                millisecond(ms: number): Datetime;

                /**
                 * Gets the millisecond, 0..999
                 */
                milliseconds(): number;

                /**
                 * Sets the millisecond, 0..999.
                 * If the range is exceeded, it will bubble up to the seconds.
                 */
                milliseconds(ms: number): Datetime;

                /**
                 * Gets the day of the week according to the locale, 0..6.
                 * If the locale assigns Monday as the first day of the week, datetime().weekday() will be Monday (0).
                 */
                weekday(): number;

                /**
                 * Sets the day of the week according to the locale, 0..6.
                 * If the locale assigns Monday as the first day of the week, datetime().weekday(0) will be Monday.
                 * If Sunday is the first day of the week, moment().weekday(0) will be Sunday.
                 */
                weekday(d: number): Datetime;

                /**
                 * Gets the ISO day of the week, 1(Monday)..7(Sunday)
                 */
                isoWeekday(): number;

                /**
                 * Sets the ISO day of the week, 1(Monday)..7(Sunday)
                 * If the range is exceeded, it will bubble up to other weeks.
                 */
                isoWeekday(d: number | string): Datetime;

                /**
                 * Gets the week-year according to the locale
                 */
                weekYear(): number;

                /**
                 * Gets or sets the week-year according to the locale
                 *
                 */
                weekYear(d: number): Datetime;

                /**
                 * Gets the ISO week-year
                 */
                isoWeekYear(): number;

                /**
                 * Sets the ISO week-year
                 */
                isoWeekYear(d: number): Datetime;

                /**
                 * Gets the week of the year, 1..53
                 */
                week(): number;

                /**
                 * Sets the week of the year, 1..53
                 */
                week(d: number): Datetime;

                /**
                 * Gets the week of the year, 1..53
                 */
                weeks(): number;

                /**
                 * Sets the week of the year, 1..53
                 */
                weeks(d: number): Datetime;

                /**
                 * Gets the ISO week of the year, 1..53
                 */
                isoWeek(): number;

                /**
                 * Sets the ISO week of the year, 1..53
                 */
                isoWeek(d: number): Datetime;

                /**
                 * Gets the ISO week of the year, 1..53
                 */
                isoWeeks(): number;

                /**
                 * Sets the ISO week of the year, 1..53
                 */
                isoWeeks(d: number): Datetime;

                /**
                 * Gets the number of weeks according to locale in the current datetime's year
                 */
                weeksInYear(): number;

                /**
                 * Gets the number of weeks in the current datetime's year, according to ISO weeks
                 */
                isoWeeksInYear(): number;

                /**
                 * Gets the day of the year, 1..366
                 */
                dayOfYear(): number;

                /**
                 * Sets the day of the year, 1..366.
                 * If the range is exceeded, it will bubble up to the years
                 */
                dayOfYear(d: number): Datetime;

                /**
                 * Displays a datetime in relation to a time other than now
                 */
                from(inp: DatetimeInput, suffix?: boolean): string;

                /**
                 * Displays the datetime in relation to a time other than now
                 */
                to(inp: DatetimeInput, suffix?: boolean): string;

                /**
                 * Displays the datatime in relation to now
                 */
                fromNow(withoutSuffix?: boolean): string;

                /**
                 * Displays the datatime in relation to now
                 */
                toNow(withoutPrefix?: boolean): string;

                /**
                 * Returns the difference in the given unit, default is milliseconds
                 */
                diff(b: DatetimeInput, unitOfTime?: unitOfTime.Diff, precise?: boolean): number;

                /**
                 * Returns an array that mirrors the parameters from new Date()
                 */
                toArray(): number[];

                /**
                 * Conver the datetime to MS-DOS date/time format
                 */
                toDOS(): MSDOSFormat;

                /**
                 * Returns a copy of the native Date object that the datetime wraps
                 */
                toDate(): Date;

                /**
                 * Formats a string to the ISO8601 standard
                 */
                toISOString(): string;

                /**
                 * Returns a machine readable string, that can be evaluated to produce the same datetime
                 */
                inspect(): string;

                /**
                 * When serializing a duration object to JSON, it will be represented as an ISO8601 string
                 */
                toJSON(): string;

                /**
                 * Returns a Unix timestamp (the number of seconds since the Unix Epoch)
                 */
                unix(): number;

                /**
                 * Returns true if that year is a leap year, and false if it is not.
                 */
                isLeapYear(): boolean;

                /**
                 * Get the UTC offset in minutes.
                 */
                utcOffset(): number;

                /**
                 * Sets the UTC offset
                 */
                utcOffset(b: number | string, keepLocalTime?: boolean): Datetime;

                isUtcOffset(): boolean;

                /**
                 * Returns the number of days in the current month
                 */
                daysInMonth(): number;

                /**
                 * Checks if the current moment is in daylight saving time
                 */
                isDST(): boolean;

                /**
                 * Returns the zone abbreviation
                 */
                zoneAbbr(): string;

                /**
                 * Returns the zone name
                 */
                zoneName(): string;

                /**
                 * Check if the datetime is before another datetime.
                 */
                isBefore(inp?: DatetimeInput, granularity?: unitOfTime.StartOf): boolean;

                /**
                 * Check if the datetime is after another datetime.
                 */
                isAfter(inp?: DatetimeInput, granularity?: unitOfTime.StartOf): boolean;

                /**
                 * Check if the datetime is the same as another datetime.
                 */
                isSame(inp?: DatetimeInput, granularity?: unitOfTime.StartOf): boolean;

                /**
                 * Check if a datetime is after or the same as another datetime.
                 */
                isSameOrAfter(inp?: DatetimeInput, granularity?: unitOfTime.StartOf): boolean;

                /**
                 * Check if a datetime is before or the same as another datetime.
                 */
                isSameOrBefore(inp?: DatetimeInput, granularity?: unitOfTime.StartOf): boolean;

                /**
                 * Check if a datetime is between two other datetimes, optionally looking at unit scale (minutes, hours, days, etc).
                 * The match is exclusive.
                 */
                isBetween(a: DatetimeInput, b: DatetimeInput, granularity?: unitOfTime.StartOf, inclusivity?: "()" | "[)" | "(]" | "[]"): boolean;

                /**
                 * Returns the using locale
                 */
                locale(): string;

                /**
                 * Sets a new locale
                 */
                locale(locale: LocaleSpecifier): Datetime;

                /**
                 * Returns the data of the using locale
                 */
                localeData(): Locale;

                /**
                 * @deprecated no reliable implementation
                 */
                isDSTShifted(): boolean;

                /**
                 * Returns the value of the given unit
                 */
                get(unit: unitOfTime.All): number;

                /**
                 * Sets the value of the given unit
                 */
                set(unit: unitOfTime.All, value: number): Datetime;

                /**
                 * Sets the values of the given units represented as an object
                 */
                set(objectLiteral: DatetimeSetObject): Datetime;

                /**
                 * Returns an object containing year, month, day-of-month, hour, minute, seconds, milliseconds.
                 */
                toObject(): DatetimeObjectOutput;
            }

            interface DatetimeFunction {
                (inp?: DatetimeInput, format?: DatetimeFormatSpecification, strict?: boolean): Datetime;
                (inp?: DatetimeInput, format?: DatetimeFormatSpecification, language?: string, strict?: boolean): Datetime;

                /**
                 * Creates a datetime in UTC
                 */
                utc(inp?: DatetimeInput, format?: DatetimeFormatSpecification, strict?: boolean): Datetime;
                utc(inp?: DatetimeInput, format?: DatetimeFormatSpecification, language?: string, strict?: boolean): Datetime;

                /**
                 * Creates a datetime from the given UNIX timestamp
                 */
                unix(timestamp: number): Datetime;

                /**
                 * Creates a datetime from the given MS-DOS date and time
                 */
                dos(inp: MSDOSFormat): Datetime;

                /**
                 * Crates an invalid datetime object
                 */
                invalid(flags?: DatetimeParsingFlagsOpt): Datetime;

                /**
                 * Checks whether the given object is a Duration
                 */
                isDuration(d: any): d is Duration;

                /**
                 * Changes the using locale
                 */
                locale(language?: string): string;

                /**
                 * Changes the using locale, will use the first one it has localizations for.
                 */
                locale(language?: string[]): string;

                /**
                 * Changes the using locale with customization
                 */
                locale(language?: string, definition?: LocaleSpecification | null): string;

                /**
                 * Returns a locale by the given key or the current locale
                 */
                localeData(key?: string | string[]): Locale;

                /**
                 * Creates a new Duration object
                 */
                duration(inp?: DurationInputArg1, unit?: DurationInputArg2): Duration;

                parseZone(inp?: DatetimeInput, format?: DatetimeFormatSpecification, strict?: boolean): Datetime;
                parseZone(inp?: DatetimeInput, format?: DatetimeFormatSpecification, language?: string, strict?: boolean): Datetime;

                /**
                 * Returns the months of the current locale
                 */
                months(): string[];

                /**
                 * Returns a month of the current locale at the given index
                 */
                months(index: number): string;

                months(format: string): string[];
                months(format: string, index: number): string;

                /**
                 * Returns the short form of the months of the current locale
                 */
                monthsShort(): string[];

                monthsShort(index: number): string;
                monthsShort(format: string): string[];
                monthsShort(format: string, index: number): string;

                /**
                 * Returns the weekdays of the current locale
                 */
                weekdays(): string[];
                weekdays(index: number): string;
                weekdays(format: string): string[];
                weekdays(format: string, index: number): string;
                weekdays(localeSorted: boolean): string[];
                weekdays(localeSorted: boolean, index: number): string;
                weekdays(localeSorted: boolean, format: string): string[];
                weekdays(localeSorted: boolean, format: string, index: number): string;

                /**
                 * Returns the short form of the weekdays of the current locale
                 */
                weekdaysShort(): string[];
                weekdaysShort(index: number): string;
                weekdaysShort(format: string): string[];
                weekdaysShort(format: string, index: number): string;
                weekdaysShort(localeSorted: boolean): string[];
                weekdaysShort(localeSorted: boolean, index: number): string;
                weekdaysShort(localeSorted: boolean, format: string): string[];
                weekdaysShort(localeSorted: boolean, format: string, index: number): string;

                /**
                 * Returns the min form of the weekdays of the current locale
                 */
                weekdaysMin(): string[];
                weekdaysMin(index: number): string;
                weekdaysMin(format: string): string[];
                weekdaysMin(format: string, index: number): string;
                weekdaysMin(localeSorted: boolean): string[];
                weekdaysMin(localeSorted: boolean, index: number): string;
                weekdaysMin(localeSorted: boolean, format: string): string[];
                weekdaysMin(localeSorted: boolean, format: string, index: number): string;

                /**
                 * Returns the minimum of the given datetimes
                 */
                min(...datetimes: DatetimeInput[]): Datetime;

                /**
                 * Returns the maximum of the given datetimes
                 */
                max(...datetimes: DatetimeInput[]): Datetime;

                /**
                 * Returns the number of milliseconds since the Unix epoch (January 1, 1970)
                 */
                now(): number;

                /**
                 * Defines a new locale
                 */
                defineLocale(language: string, localeSpec: LocaleSpecification | null): Locale;

                /**
                 * Updates an existing locale
                 */
                updateLocale(language: string, localeSpec: LocaleSpecification | null): Locale;

                /**
                 * Returns a list of the defined locales (lazy-loaded locales are not listed until they are loaded)
                 */
                locales(): string[];

                /**
                 * Returns the original name of the given unit alias
                 */
                normalizeUnits(unit: unitOfTime.All): string;

                relativeTimeThreshold(threshold: string): number;
                relativeTimeThreshold(threshold: string, limit: number): boolean;
                relativeTimeRounding(fn: (num: number) => number): boolean;
                relativeTimeRounding(): (num: number) => number;

                calendarFormat(m: Datetime, now: Datetime): string;

                /**
                 * Default format for datetime.format()
                 */
                defaultFormat: string;

                /**
                 * Default utc format for datetime.format()
                 */
                defaultFormatUtc: string;
            }
        }
    }

    /**
     * Creates a new datetime object
     */
    const datetime: I.datetime.DatetimeFunction;
}
