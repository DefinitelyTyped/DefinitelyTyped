import { CreditCardTypeChangeHandler } from "./creditCard";

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

// Time Options
export interface CleaveOptions {
    time?: boolean;
    timePattern?: ReadonlyArray<string>;
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
    delimiterLazyShow?: boolean;
    initValue?: any;
    lowercase?: boolean;
    numericOnly?: boolean;
    prefix?: string;
    noImmediatePrefix?: boolean;
    rawValueTrimPrefix?: boolean;
    uppercase?: boolean;
    onValueChanged?(event: any): void;
}
