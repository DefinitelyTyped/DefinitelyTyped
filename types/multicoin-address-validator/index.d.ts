export as namespace WAValidator;

export function validate(address: string, currencyNameOrSymbol?: string, opts?: ValidateOpts | string): boolean;
export function getCurrencies(): Currency[];
export function findCurrency(symbol: string): Currency | null;
export type NetworkType = "prod" | "testnet" | "both" | "stagenet";
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
    networkType?: NetworkType;
}
