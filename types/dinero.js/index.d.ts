// Type definitions for dinero.js 1.6
// Project: https://sarahdayan.github.io/dinero.js
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 David Acosta <https://github.com/juandaco>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export as namespace Dinero;

export = DineroFactory;

declare function DineroFactory(options?: Dinero.Options): DineroFactory.Dinero;

declare namespace DineroFactory {
    let defaultAmount: number;
    let defaultCurrency: Currency;
    let defaultPrecision: number;
    let globalLocale: string;
    let globalFormat: string;
    let globalRoundingMode: RoundingMode;
    let globalFormatRoundingMode: string;
    let globalExchangeRatesApi: ExchangeRatesApiOptions;
    function normalizePrecision(objects: ReadonlyArray<Dinero>): Dinero[];
    function minimum(objects: ReadonlyArray<Dinero>): Dinero;
    function maximum(objects: ReadonlyArray<Dinero>): Dinero;

    interface Options {
        amount?: number;
        currency?: Currency;
        precision?: number;
    }

    interface Dinero {
        getAmount(): number;
        getCurrency(): Currency;
        getLocale(): string;
        setLocale(newLocale: string): Dinero;
        getPrecision(): number;
        convertPrecision(newPrecision: number, roundingMode?: RoundingMode): Dinero;
        add(addend: Dinero): Dinero;
        subtract(subtrahend: Dinero): Dinero;
        multiply(multiplier: number, roundingMode?: RoundingMode): Dinero;
        divide(divisor: number, roundingMode?: RoundingMode): Dinero;
        percentage(percentage: number): Dinero;
        allocate(ratios: ReadonlyArray<number>): Dinero[];
        convert(currency: string, options?: ExchangeRatesApiOptions): Promise<Dinero>;
        equalsTo(comparator: Dinero): boolean;
        lessThan(comparator: Dinero): boolean;
        lessThanOrEqual(comparator: Dinero): boolean;
        greaterThan(comparator: Dinero): boolean;
        greaterThanOrEqual(comparator: Dinero): boolean;
        isZero(): boolean;
        isPositive(): boolean;
        isNegative(): boolean;
        hasSubUnits(): boolean;
        /**
         * @deprecated since version 2.0
         */
        hasCents(): boolean;
        hasSameCurrency(comparator: Dinero): boolean;
        hasSameAmount(comparator: Dinero): boolean;
        toFormat(format?: string, roundingMode?: RoundingMode): string;
        toUnit(): number;
        toRoundedUnit(digits: number, roundingMode?: RoundingMode): number;
        toObject(): DineroObject;
        toJSON(): DineroObject;
    }

    type RoundingMode =
        | 'HALF_ODD'
        | 'HALF_EVEN'
        | 'HALF_UP'
        | 'HALF_DOWN'
        | 'HALF_TOWARDS_ZERO'
        | 'HALF_AWAY_FROM_ZERO';

    interface ExchangeRatesApiOptions {
        endpoint: string | Promise<{[key: string]: any}>;
        propertyPath?: string;
        headers?: { [header: string]: string };
        roundingMode?: RoundingMode;
    }

    interface DineroObject {
        amount: number;
        currency: Currency;
        precision: number;
    }

    /**
     * ISO 4217 CURRENCY CODES as specified in the documentation
     * Taken from https://www.iso.org/iso-4217-currency-codes.html
     * sorted and parsed
     */
    type Currency =
        | 'AED'
        | 'AFN'
        | 'ALL'
        | 'AMD'
        | 'ANG'
        | 'AOA'
        | 'ARS'
        | 'AUD'
        | 'AWG'
        | 'AZN'
        | 'BAM'
        | 'BBD'
        | 'BDT'
        | 'BGN'
        | 'BHD'
        | 'BIF'
        | 'BMD'
        | 'BND'
        | 'BOB'
        | 'BOV'
        | 'BRL'
        | 'BSD'
        | 'BTN'
        | 'BWP'
        | 'BYN'
        | 'BZD'
        | 'CAD'
        | 'CDF'
        | 'CHE'
        | 'CHF'
        | 'CHW'
        | 'CLF'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'COU'
        | 'CRC'
        | 'CUC'
        | 'CUP'
        | 'CVE'
        | 'CZK'
        | 'DJF'
        | 'DKK'
        | 'DOP'
        | 'DZD'
        | 'EGP'
        | 'ERN'
        | 'ETB'
        | 'EUR'
        | 'FJD'
        | 'FKP'
        | 'GBP'
        | 'GEL'
        | 'GHS'
        | 'GIP'
        | 'GMD'
        | 'GNF'
        | 'GTQ'
        | 'GYD'
        | 'HKD'
        | 'HNL'
        | 'HRK'
        | 'HTG'
        | 'HUF'
        | 'IDR'
        | 'ILS'
        | 'INR'
        | 'IQD'
        | 'IRR'
        | 'ISK'
        | 'JMD'
        | 'JOD'
        | 'JPY'
        | 'KES'
        | 'KGS'
        | 'KHR'
        | 'KMF'
        | 'KPW'
        | 'KRW'
        | 'KWD'
        | 'KYD'
        | 'KZT'
        | 'LAK'
        | 'LBP'
        | 'LKR'
        | 'LRD'
        | 'LSL'
        | 'LYD'
        | 'MAD'
        | 'MDL'
        | 'MGA'
        | 'MKD'
        | 'MMK'
        | 'MNT'
        | 'MOP'
        | 'MRU'
        | 'MUR'
        | 'MVR'
        | 'MWK'
        | 'MXN'
        | 'MXV'
        | 'MYR'
        | 'MZN'
        | 'NAD'
        | 'NGN'
        | 'NIO'
        | 'NOK'
        | 'NPR'
        | 'NZD'
        | 'OMR'
        | 'PAB'
        | 'PEN'
        | 'PGK'
        | 'PHP'
        | 'PKR'
        | 'PLN'
        | 'PYG'
        | 'QAR'
        | 'RON'
        | 'RSD'
        | 'RUB'
        | 'RWF'
        | 'SAR'
        | 'SBD'
        | 'SCR'
        | 'SDG'
        | 'SEK'
        | 'SGD'
        | 'SHP'
        | 'SLL'
        | 'SOS'
        | 'SRD'
        | 'SSP'
        | 'STN'
        | 'SVC'
        | 'SYP'
        | 'SZL'
        | 'THB'
        | 'TJS'
        | 'TMT'
        | 'TND'
        | 'TOP'
        | 'TRY'
        | 'TTD'
        | 'TWD'
        | 'TZS'
        | 'UAH'
        | 'UGX'
        | 'USD'
        | 'USN'
        | 'UYI'
        | 'UYU'
        | 'UYW'
        | 'UZS'
        | 'VES'
        | 'VND'
        | 'VUV'
        | 'WST'
        | 'XAF'
        | 'XAG'
        | 'XAU'
        | 'XBA'
        | 'XBB'
        | 'XBC'
        | 'XBD'
        | 'XCD'
        | 'XDR'
        | 'XOF'
        | 'XPD'
        | 'XPF'
        | 'XPT'
        | 'XSU'
        | 'XTS'
        | 'XUA'
        | 'XXX'
        | 'YER'
        | 'ZAR'
        | 'ZMW'
        | 'ZWL';
}
