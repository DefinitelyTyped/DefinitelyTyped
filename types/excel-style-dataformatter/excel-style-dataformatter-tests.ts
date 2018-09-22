import * as DataFormatter from "excel-style-dataformatter";
import * as enLocales from "excel-style-dataformatter/lib/locales/en-US";
import * as ruLocales from "excel-style-dataformatter/lib/locales/ru";

const localesOptions: DataFormatter.LocalesOptions = {
	name: "test",
	months: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
	monthsShort: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
	days: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
	daysShort: ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'],
	thousandSeparator: ',',
	decimalSeparator: '.',
	formats: {
		'Test format 1': '#.#',
		'Test format 2': '$ #,##0.00;[Red]$ -#,##0.00',
	}
};
const formatterOptions: DataFormatter.FormatterOptions = {
	debug: true,
	UTCOffset: 100,
	locale: "test",
	transformCode: (code: string): string => {
		return code + "string";
	},
	locales: [localesOptions, ruLocales]
};
const dataFormatter1 = new DataFormatter(formatterOptions);
const dataFormatter2 = new DataFormatter();
dataFormatter2.defineLocales([enLocales, ruLocales]);
dataFormatter2.setLocale("ru");
dataFormatter2.setUTCOffset(null);
dataFormatter2.setUTCOffset(100);
const result: DataFormatter.FormatResult = dataFormatter2.format("testValue", "testType", "testFormat");
