declare namespace fx {
    type Currency = string;

    type Rates = Record<string, number | string>;

    interface Options {
        from?: Currency;
        to?: Currency;
    }

    type Value = string | number | string[] | number[];

    type Result<T_VAL extends Value> = T_VAL extends string | number ? number : number[];

    interface Wrapper<T_VAL extends Value> {
        convert: (opts?: Options) => Result<T_VAL>;

        from: (currency: Currency) => Wrapper<T_VAL>;

        to: (currency: Currency) => Result<T_VAL>;
    }

    interface FX {
        /**
         * If fx(val) is called as a function, it returns a wrapped object that can be used OO-style
         */
        <T_VAL extends Value>(val: T_VAL): Wrapper<T_VAL>;
        new<T_VAL extends Value>(val: T_VAL): Wrapper<T_VAL>;

        /**
         * Current version
         */
        version: string;

        /**
         * Object containing exchange rates relative to the fx.base currency, eg { "GBP" : "0.64" }
         */
        rates: Rates;

        /**
         * Default exchange rate base currency (eg "USD"), which all the exchange rates are relative to
         */
        base: Currency;

        /**
         * Default from / to currencies for conversion via `convert()`
         */
        settings: {
            from: Currency;
            to: Currency;
        };

        /**
         * Converts a value from one currency to another
         */
        convert: <T_VAL extends Value>(val: T_VAL, opts?: Options) => Result<T_VAL>;
    }
}

/**
 * Library for realtime currency conversion and exchange rate calculation
 */
declare const fx: fx.FX;

export as namespace fx;

export = fx;
