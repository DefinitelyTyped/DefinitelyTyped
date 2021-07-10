// Type definitions for multicoin-address-validator 0.5
// Project: https://github.com/christsim/multicoin-address-validator
// Definitions by: Kyle McLean <https://github.com/kylemclean>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace WAValidator;

export function validate(address: string, currencyNameOrSymbol?: string, opts?: ValidateOpts | string): boolean;
export function getCurrencies(): Currency[];
export function findCurrency(symbol: string): Currency | null;

export interface Validator {
    isValidAddress: (address: string, currency: Currency, opts: ValidateOpts) => boolean;
}

export interface Currency {
    name: string;
    symbol: string;
    validator: Validator;
    [key: string]: any;
}

export interface ValidateOpts {
    networkType?: string;
}
