/**
 * Returns the number of decimals after the floating point, with which
 * the amount should be formatted, depending on the currency.
 */
export function getDecimalsForCurrency(currency: string): number;

/**
 * Convert an amount of money from the smallest sub-unit of the currency.
 * For example, for a BTC account, this function will convert
 * 12345678 to 0.12345678.
 * Likewise, for a USD account, 12345 is converted to 123.45.
 * This function is the inverse of {@self::toSmallestSubUnit}
 */
export function fromSmallestSubunit(amount: number, currency: string): number;

/**
 * Convert an amount of smallest sub-unit to the actual currency unit.
 * For example, for a BTC account, this function will convert
 * 0.12345678 to 12345678.
 * Likewise, for a USD account, 123.45 is converted to 12345.
 * This function is the inverse of {@self::fromSmallestSubUnit}
 */
export function toSmallestSubunit(amount: number, currency: string): number;

/**
 * Convert between sub-unit amounts of two currencies with a given rate,
 * correctly converting between sub-units with different decimal amounts.
 * E.g. to convert 1 BTC to USD at rate 250, call
 * convertSubunitAmount( 100000000, 250, 'BTC', 'USD' )
 */
export function convertSubunitAmount(
    amountSubUnit: number,
    rate: number,
    fromCurrency: string,
    toCurrency: string,
): number;

/**
 * Computes a rate between two amounts in two different currencies.
 *
 * The result is fromAmount / toAmount (in the main units of their respective currencies)
 */
export function computeRateBetweenSubunitAmounts(
    fromCurrency: string,
    fromAmount: number,
    toCurrency: string,
    toAmount: number,
): number;

/**
 * Is the provided currency code a valid currency? (fiat or crypto)
 */
export function isValidCurrency(code: string): boolean;

/**
 * Is the provided currency code a valid fiat currency?
 */
export function isValidFiatCurrency(code: string): boolean;

/**
 * Is the provided currency code a valid crypto-currency?
 *
 * Currently, only BTC is supported
 */
export function isValidCryptoCurrency(code: string): boolean;

/**
 * Format the amount, depending on the currency
 */
export function formatAmount(amount: number, currency: string): string;

/**
 * Returns full name of currency by given code
 */
export function getName(code: string): string;
