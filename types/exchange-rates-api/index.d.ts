/**
 * Convert the given amount from one currency to another using the exchange rate of the given date
 */
export function convert(amount: number, fromCurrency: string, toCurrency: string, date: Date | string): Promise<number>;

export const currencies: {
    [key: string]: string;
};

/**
 * Return a new instance of `ExchangeRates`
 */
export function exchangeRates(): ExchangeRates;

export {};

/**
 * ExchangeRates
 */
declare class ExchangeRates {
    constructor();

    /**
     * Set the date to get historical rates for that specific day
     */
    at(date: Date): ExchangeRates;

    /**
     * Set the date to get the latest exchange rates
     */
    latest(): ExchangeRates;

    /**
     * Set the date from which to request historical rates
     */
    from(date: Date): ExchangeRates;

    /**
     * Set the date to which to request historical rates
     */
    to(date: Date): ExchangeRates;

    /**
     * Set the base currency (if not explicitly set, it defaults to 'EUR')
     */
    base(currency: string): ExchangeRates;

    /**
     * Set symbols to limit results to specific exchange rate(s)
     */
    symbols(currencies: string | string[]): ExchangeRates;

    /**
     * The API url to request
     */
    get url(): string;

    /**
     * Fetch the exchange rates from exchangeratesapi.io, parse the response and return it
     */
    fetch(): Promise<object | number>;

    /**
     * Return the average value of each exchange rate for the selected time period
     * To select a time period, create a chain with `.from()` and `.to()` before `.avg()`
     */
    avg(decimalPlaces?: number): Promise<object | number>;
}
