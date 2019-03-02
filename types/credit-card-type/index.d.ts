// Type definitions for Credit Card Type v7.0.0
// Project: https://github.com/braintree/credit-card-type
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

declare namespace creditCardType {
    type CardBrand =
        | "american-express"
        | "diners-club"
        | "discover"
        | "jcb"
        | "maestro"
        | "mastercard"
        | "unionpay"
        | "visa";

    interface CreditCardTypeInfo {
        niceType?: string;
        type?: CardBrand;
        prefixPattern?: RegExp;
        exactPattern?: RegExp;
        gaps?: Array<number>;
        lengths?: Array<number>;
        code?: {
            name?: string;
            size?: number;
        };
    }

    interface CreditCardType {
        (number: string): Array<CreditCardTypeInfo>;
        getTypeInfo(type: string): CreditCardTypeInfo;
        types: { [type: string]: string };
    }
}

declare const creditCardType: creditCardType.CreditCardType;
export = creditCardType;
