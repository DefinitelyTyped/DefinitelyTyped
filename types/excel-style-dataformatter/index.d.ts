// Type definitions for excel-style-dataformatter v2.0.1
// Project: https://github.com/fakundo/Excel-Style-Javascript-DataFormatter
// Definitions by: SanderDeWaal1992 <https://github.com/SanderDeWaal1992>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "excel-style-dataformatter" {
	class DataFormatter {
		constructor(options?: DataFormatter.FormatterOptions);

		/**
		 * Format a value
		 * @param value
		 * @param type value type
		 * @param format format preset
		 */
		public format(value: any, type: string, format: string): DataFormatter.FormatResult;
		/**
		 * Defines locales
		 * @param  locales
		 */
		public defineLocales(locales: DataFormatter.LocalesOptions[]): void;
		/**
		 * Sets locale
		 * If locale doesn't exist, sets default
		 * @param locale
		 */
		public setLocale(locale: string): void;
		/**
		 * Sets UTC offset for dates
		 * @param offset in minutes
		 */
		public setUTCOffset(offset: number | null): void;
	}

	namespace DataFormatter {
		export interface LocalesOptions {
			name: string,
			months: string[],
			monthsShort: string[],
			days: string[],
			daysShort: string[],
			thousandSeparator: string,
			decimalSeparator: string,
			formats: {
				[index: string]: string
			}
		}
		export interface FormatterOptions {
			debug?: boolean,
			UTCOffset?: number | null,
			locale?: string,
			transformCode?: (code: any) => any,
			locales?: LocalesOptions[]
		}

		export interface FormatResult {
			value: string,
			align: string,
			color: string,
			pattern: string
		}
	}

	export = DataFormatter;
}

declare module "excel-style-dataformatter/lib/locales/en-US" {
	import * as DataFormatter from "excel-style-dataformatter";
	const locale: DataFormatter.LocalesOptions;
	export = locale;
}

declare module "excel-style-dataformatter/lib/locales/ru" {
	import * as DataFormatter from "excel-style-dataformatter";
	const locale: DataFormatter.LocalesOptions;
	export = locale;
}
