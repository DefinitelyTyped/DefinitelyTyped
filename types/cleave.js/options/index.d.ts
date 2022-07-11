import { CreditCardTypeChangeHandler } from "./creditCard";

export interface CleaveOptions {
    creditCard?: boolean | undefined;
    creditCardStrictMode?: boolean | undefined;
    creditCardType?: string | undefined;
    onCreditCardTypeChanged?: CreditCardTypeChangeHandler | undefined;
}

// Phone Options
export interface CleaveOptions {
    phone?: boolean | undefined;
    phoneRegionCode?: string | undefined;
}

// Date Options
export interface CleaveOptions {
    date?: boolean | undefined;
    dateMin?: string | undefined;
    dateMax?: string | undefined;
    datePattern?: ReadonlyArray<string> | undefined;
}

// Time Options
export interface CleaveOptions {
    time?: boolean | undefined;
    timePattern?: ReadonlyArray<string> | undefined;
    timeFormat?: string | undefined;
}

// Numeral Options
export type NumeralThousandsGroupStyleType = "lakh" | "thousand" | "wan" | "none";

export interface CleaveOptions {
    numeral?: boolean | undefined;
    numeralDecimalMark?: string | undefined;
    numeralDecimalScale?: number | undefined;
    numeralIntegerScale?: number | undefined;
    numeralPositiveOnly?: boolean | undefined;
    numeralThousandsGroupStyle?: NumeralThousandsGroupStyleType | undefined;
    stripLeadingZeroes?: boolean | undefined;
    tailPrefix?: boolean | undefined;
}

// Extra Options
export interface CleaveOptions {
    blocks?: ReadonlyArray<number> | undefined;
    copyDelimiter?: boolean | undefined;
    delimiter?: string | undefined;
    delimiters?: ReadonlyArray<string> | undefined;
    delimiterLazyShow?: boolean | undefined;
    initValue?: any;
    lowercase?: boolean | undefined;
    numericOnly?: boolean | undefined;
    prefix?: string | undefined;
    noImmediatePrefix?: boolean | undefined;
    rawValueTrimPrefix?: boolean | undefined;
    uppercase?: boolean | undefined;
    onValueChanged?(event: any): void;
}
