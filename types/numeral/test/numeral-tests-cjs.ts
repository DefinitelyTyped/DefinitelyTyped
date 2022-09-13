import numeral = require('numeral');
import { Numeral } from 'numeral';

const valueFormat: string = numeral(1000).format('0,0');
// '1,000'

const valueFormatFloor: string = numeral(1.357).format('0.00', Math.floor);
// '1.35'

const value3: Numeral = numeral(1000);
const added: Numeral = value3.add(10);
// 1010

const value4: Numeral = numeral(1000);
const formatValue4a: string = value4.format('0,0');
// '1,000'
const formatValue4b: number | null = value4.value();
// 1000

const value5: Numeral = numeral();
value5.set(1000);
const value5Num: number | null = value5.value();
// 1000

const value6: Numeral = numeral(1000);
const value = 100;
const difference = value6.difference(value);
// 900

const value7: Numeral = numeral(0);
numeral.zeroFormat('N/A');
const zeroString: string = value7.format('0.0');
// 'N/A'

const a: Numeral = numeral(1000);
const b: Numeral = numeral(a);
const c: Numeral = a.clone();

const aVal: number | null = a.set(2000).value();
// 2000
const bVal: number | null = b.value();
// 1000
const cVal: number | null = c.add(10).value();
// 1010

// Formats
numeral.register('format', 'percentage', {
    regexps: {
        format: /(%)/,
        unformat: /(%)/,
    },
    format(value, format, roundingFunction) {
        return 'foo';
    },
    unformat(string) {
        return 123;
    },
});

const customFormatted = numeral().format('0%');

// Locales
// load a locale
numeral.register('locale', 'fr', {
    delimiters: {
        thousands: ' ',
        decimal: ',',
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't',
    },
    ordinal(number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '€',
    },
});

// switch between locales
numeral.locale('fr');

// return the current locale
numeral.locale();
// 'fr'

// return the current locale data
numeral.localeData();

// return a specific locale data
const localeData = numeral.localeData('es');

// test accessing locale data
const currencySymbol = localeData.currency.symbol;
const billionShorthand = localeData.abbreviations.billion;
const decimalDelimiter = localeData.delimiters.decimal;
const ordinalResult = localeData.ordinal(2);

// test changing an option
numeral.options.scalePercentBy100 = false;
numeral(50).format('0%');
// '50%'

// test isNumeral
numeral.isNumeral(numeral(1000));
numeral.isNumeral(1000);

numeral(null).value(); // $ExpectType number | null
numeral(null).value() || 0; // $ExpectType number

// dict of configurations
numeral.formats.currency;
numeral.locales.fr;

// Numeral utilities
numeral._.numberToFormat(1000, '0,0');
numeral._.numberToFormat(1000, '0,0', (value: number) => value / 3);
numeral._.stringToNumber('1.32k');
