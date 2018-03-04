// Type definitions for js-money 0.6
// Project: https://github.com/davidkalosi/js-money
// Definitions by: Kanat Kubash <https://github.com/kanatkubash>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Currency } from './lib/currency';

interface MoneyObjectOut {
	amount: number;
	currency: string;
}

type Rounders = 'round' | 'floor' | 'ceil';

type RoundFunction = (num: number) => number;

declare class Money {
	constructor(amount: number, currency: string | Currency);
	amount: number;
	currency: string;
	static fromInteger(amount: number, currency: string | Currency): Money;
	static fromDecimal(amount: number, currency: string | Currency, rounder?: Rounders | RoundFunction): Money;
	equals(other: Money): boolean;
	add(other: Money): Money;
	subtract(other: Money): Money;
	multiply(multiplier: number, rounder?: RoundFunction): Money;
	divide(divisor: number, rounder?: RoundFunction): Money;
	allocate(ratios: number[]): Money[];
	compare(other: Money): number;
	greaterThan(other: Money): boolean;
	greaterThanOrEqual(other: Money): boolean;
	lessThan(other: Money): boolean;
	lessThanOrEqual(other: Money): boolean;
	isZero(): boolean;
	isPositive(): boolean;
	isNegative(): boolean;
	toDecimal(): number;
	toString(): string;
	toJSON(): MoneyObjectOut;
	getAmount(): number;
	getCurrency(): string;
	//#region Currencies
	static USD: Currency;
	static CAD: Currency;
	static EUR: Currency;
	static BTC: Currency;
	static AED: Currency;
	static AFN: Currency;
	static ALL: Currency;
	static AMD: Currency;
	static ARS: Currency;
	static AUD: Currency;
	static AZN: Currency;
	static BAM: Currency;
	static BDT: Currency;
	static BGN: Currency;
	static BHD: Currency;
	static BIF: Currency;
	static BND: Currency;
	static BOB: Currency;
	static BRL: Currency;
	static BWP: Currency;
	static BYR: Currency;
	static BZD: Currency;
	static CDF: Currency;
	static CHF: Currency;
	static CLP: Currency;
	static CNY: Currency;
	static COP: Currency;
	static CRC: Currency;
	static CVE: Currency;
	static CZK: Currency;
	static DJF: Currency;
	static DKK: Currency;
	static DOP: Currency;
	static DZD: Currency;
	static EEK: Currency;
	static EGP: Currency;
	static ERN: Currency;
	static ETB: Currency;
	static GBP: Currency;
	static GEL: Currency;
	static GHS: Currency;
	static GNF: Currency;
	static GTQ: Currency;
	static HKD: Currency;
	static HNL: Currency;
	static HRK: Currency;
	static HUF: Currency;
	static IDR: Currency;
	static ILS: Currency;
	static INR: Currency;
	static IQD: Currency;
	static IRR: Currency;
	static ISK: Currency;
	static JMD: Currency;
	static JOD: Currency;
	static JPY: Currency;
	static KES: Currency;
	static KHR: Currency;
	static KMF: Currency;
	static KRW: Currency;
	static KWD: Currency;
	static KZT: Currency;
	static LAK: Currency;
	static LBP: Currency;
	static LKR: Currency;
	static LTL: Currency;
	static LVL: Currency;
	static LYD: Currency;
	static MAD: Currency;
	static MDL: Currency;
	static MGA: Currency;
	static MKD: Currency;
	static MMK: Currency;
	static MOP: Currency;
	static MUR: Currency;
	static MXN: Currency;
	static MYR: Currency;
	static MZN: Currency;
	static NAD: Currency;
	static NGN: Currency;
	static NIO: Currency;
	static NOK: Currency;
	static NPR: Currency;
	static NZD: Currency;
	static OMR: Currency;
	static PAB: Currency;
	static PEN: Currency;
	static PHP: Currency;
	static PKR: Currency;
	static PLN: Currency;
	static PYG: Currency;
	static QAR: Currency;
	static RON: Currency;
	static RSD: Currency;
	static RUB: Currency;
	static RWF: Currency;
	static SAR: Currency;
	static SDG: Currency;
	static SEK: Currency;
	static SGD: Currency;
	static SOS: Currency;
	static SYP: Currency;
	static THB: Currency;
	static TND: Currency;
	static TOP: Currency;
	static TRY: Currency;
	static TTD: Currency;
	static TWD: Currency;
	static TZS: Currency;
	static UAH: Currency;
	static UGX: Currency;
	static UYU: Currency;
	static UZS: Currency;
	static VEF: Currency;
	static VND: Currency;
	static XAF: Currency;
	static XOF: Currency;
	static YER: Currency;
	static ZAR: Currency;
	static ZMK: Currency;
	//#endregion
}

export = Money;
