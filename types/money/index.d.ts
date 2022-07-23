// Type definitions for money 0.2
// Project: https://github.com/openexchangerates/money.js
// Definitions by: Ivan Ergunov <https://github.com/hozblok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace fx {
    type Currency = string;

    type Rates = Record<string, number | string>;

    type Options = {
        from?: Currency | null;
        to?: Currency | null;
    } | null;

    type Value = string | number | string[] | number[];

    type Result<T_VAL extends Value> = T_VAL extends string | number ? number : number[];

    interface WrapperPrototype<T_VAL extends Value> {
        convert: {
            (opts?: Options): Result<T_VAL>;
        };

        from: {
            (currency: Currency): Wrapper<T_VAL>;
        };

        to: {
            (currency: Currency): Result<T_VAL>;
        };
    }

    interface Wrapper<T_VAL extends Value> extends WrapperPrototype<T_VAL> {
        readonly _v: number;
        readonly _fx?: Currency;
    }

    interface WrapperConstructor<T_VAL extends Value> {
        readonly prototype: WrapperPrototype<T_VAL>;
        new (val: T_VAL): Wrapper<T_VAL>;
    }
}

interface FX {
    /**
     * If fx(val) is called as a function, it returns a wrapped object that can be used OO-style
     */
    <T_VAL extends fx.Value>(val: T_VAL): fx.Wrapper<T_VAL>;
    new <T_VAL extends fx.Value>(val: T_VAL): fx.Wrapper<T_VAL>;

    /**
     * Current version
     */
    version: string;

    /**
     * Object containing exchange rates relative to the fx.base currency, eg { "GBP" : "0.64" }
     */
    rates: fx.Rates;

    /**
     * Default exchange rate base currency (eg "USD"), which all the exchange rates are relative to
     */
    base: fx.Currency;

    /**
     * Default from / to currencies for conversion via `convert()`
     */
    settings: {
        from: fx.Currency;
        to: fx.Currency;
    };

    /**
     * Converts a value from one currency to another
     */
    convert: {
        <T_VAL extends fx.Value>(val: T_VAL, opts?: fx.Options): fx.Result<T_VAL>;
    };
}

/**
 * Library for realtime currency conversion and exchange rate calculation
 */
declare const fx: FX;
export = fx;
