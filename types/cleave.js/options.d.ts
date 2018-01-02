// Credit Card Options
export type CreditCardType =
    | "amex"
    | "dankort"
    | "diners"
    | "discover"
    | "instapayment"
    | "jcb"
    | "maestro"
    | "mastercard"
    | "uatp"
    | "unknown"
    | "unionPay"
    | "mir"
    | "visa";
export type CreditCardTypeChangeHandler = (owner: HTMLInputElement, type: CreditCardType) => void;

export interface CleaveOptions {
    creditCard?: boolean;
    creditCardStrictMode?: boolean;
    creditCardType?: string;
    onCreditCardTypeChanged?: CreditCardTypeChangeHandler;
}

// Phone Options
export interface CleaveOptions {
    phone?: boolean;
    phoneRegionCode?: string;
}

// Date Options
export interface CleaveOptions {
    date?: boolean;
    datePattern?: ReadonlyArray<string>;
}

// Numeral Options
export type NumeralThousandsGroupStyleType = "lakh" | "thousand" | "wan" | "none";

export interface CleaveOptions {
    numeral?: boolean;
    numeralDecimalMark?: string;
    numeralDecimalScale?: number;
    numeralIntegerScale?: number;
    numeralPositiveOnly?: boolean;
    numeralThousandsGroupStyle?: NumeralThousandsGroupStyleType;
    stripLeadingZeroes?: boolean;
}

// Extra Options
export interface CleaveOptions {
    blocks?: ReadonlyArray<number>;
    copyDelimiter?: boolean;
    delimiter?: string;
    delimiters?: ReadonlyArray<string>;
    initValue?: any;
    lowercase?: boolean;
    numericOnly?: boolean;
    prefix?: string;
    noImmediatePrefix?: boolean;
    rawValueTrimPrefix?: boolean;
    uppercase?: boolean;
}
