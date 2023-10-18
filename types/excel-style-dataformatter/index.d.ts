declare class DataFormatter {
    constructor(options?: DataFormatter.FormatterOptions);

    /**
     * Format a value
     * @param value
     * @param type value type
     * @param format format preset
     */
    format(value: any, type: string, format: string): DataFormatter.FormatResult;
    /**
     * Defines locales
     * @param  locales
     */
    defineLocales(locales: DataFormatter.LocalesOptions[]): void;
    /**
     * Sets locale
     * If locale doesn't exist, sets default
     * @param locale
     */
    setLocale(locale: string): void;
    /**
     * Sets UTC offset for dates
     * @param offset in minutes
     */
    setUTCOffset(offset: number | null): void;
}

declare namespace DataFormatter {
    interface LocalesOptions {
        name: string;
        months: string[];
        monthsShort: string[];
        days: string[];
        daysShort: string[];
        thousandSeparator: string;
        decimalSeparator: string;
        formats: {
            [index: string]: string;
        };
    }
    interface FormatterOptions {
        debug?: boolean | undefined;
        UTCOffset?: number | null | undefined;
        locale?: string | undefined;
        transformCode?: ((code: any) => any) | undefined;
        locales?: LocalesOptions[] | undefined;
    }

    interface FormatResult {
        value: string;
        align: string;
        color: string;
        pattern: string;
    }
}

export = DataFormatter;
