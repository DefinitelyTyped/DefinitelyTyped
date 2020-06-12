import * as Globalize from "./number";

declare module "../globalize" {
    interface DateFormatterOptions {
        /**
         * String value indicating a skeleton (see description above), eg. { skeleton: "GyMMMd" }.
         * Skeleton provides a more flexible formatting mechanism than the predefined list full, long, medium, or short represented by date, time, or datetime.
         * Instead, they are an open-ended list of patterns containing only date field information, and in a canonical order.
         */
        skeleton?: string;
        /**
         * One of the following String values: full, long, medium, or short, eg. { date: "full" }.
         */
        date?: "full" | "long" | "medium" | "short";
        /**
         * One of the following String values: full, long, medium, or short, eg. { time: "full" }.
         */
        time?: "full" | "long" | "medium" | "short";
        /**
         * One of the following String values: full, long, medium, or short, eg. { datetime: "full" }
         */
        datetime?: "full" | "long" | "medium" | "short";
        /**
         * String value indicating a machine raw pattern (anything in the "Sym." column) eg. { raw: "dd/mm" }.
         * Note this is NOT recommended for i18n in general. Use skeleton instead.
         */
        raw?: string;

        /**
         * String based on the time zone names of the IANA time zone database,
         * such as "Asia/Shanghai", "Asia/Kolkata", "America/New_York".
         */
        timeZone?: string;
    }
    type DateFormatPartTypes = "day" | "dayperiod" | "era" | "hour" | "literal" | "minute" | "month" | "second" | "zone" | "weekday" | "year";
    interface DateFormatPart {
        type: DateFormatPartTypes;
        value: string;
    }
    interface Static {
        /**
         * Globalize.loadTimeZone ( ianaTzData, ... )
         * This method allows you to load IANA time zone data to enable options.timeZone feature on date formatters and parsers.
         * @param {Object} ianaTzData A JSON object with zdumped IANA timezone data. Get the data via https://github.com/rxaviers/iana-tz-data
         */
        loadTimeZone(ianaTzData: Object): void;
    }

    interface Shared {
        /**
         * .dateFormatter( options )
         * @param {DateFormatterOptions} options see date/expand_pattern for more info.
         * @returns {Function} Return a function that formats a date according to the given `options` and the default/instance locale.
         */
        dateFormatter(options?: DateFormatterOptions): (value: Date) => string;

        /**
         * .dateToPartsFormatter( options )
         * @param {DateFormatterOptions} options see date/expand_pattern for more info.
         * @returns {Function} Return a function that formats a date into parts tokens according to the given options. The default formatting is numeric year, month, and day (i.e., `{ skeleton: "yMd" }`).
         */
        dateToPartsFormatter(options?: DateFormatterOptions): (value: Date) => DateFormatPart[];

        //Return a function that parses a string representing a date into a JavaScript Date object according to the given options. The default parsing assumes numeric year, month, and day (i.e., { skeleton: "yMd" }).
        dateParser(options?: DateFormatterOptions): (value: string) => Date;

        //Alias for .dateFormatter( [options] )( value ).
        formatDate(value: Date, options?: DateFormatterOptions): string;

        //Alias for .dateToPartsFormatter( [options] )( value ).
        formatDateToParts(value: Date, options?: DateFormatterOptions): DateFormatPart[];

        /**
         * Alias for .dateParser( [options] )( value ).
         * @param {string} value The object whose module id you wish to determine.
         * @param {DateFormatterOptions} options The object whose module id you wish to determine.
         * @returns {Date} Return the value as a Date.
         */
        parseDate(value: string, options?: DateFormatterOptions): Date;
    }
}

export = Globalize;
