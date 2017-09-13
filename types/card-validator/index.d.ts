// Type definitions for card-validator
// Project: https://github.com/braintree/card-validator
// Definitions by: Gregory Moore <https://github.com/ChanceM>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Card {
    niceType: string;
    type: string;
    pattern: string;
    isAmex: boolean;
    gaps: number[];
    lengths: number[];
    code: {name: string, size: number}
}

interface valid {
    isPotentiallyValid: boolean;
    isValid: boolean;
}

interface validNumber extends valid {
    card: Card | null;
}

interface validExpirationDate extends valid {
    month: string | null;
    year: string | null;
}

interface validExpirationMonth extends valid {
    isValidForThisYear: boolean;
}

interface validExpirationYear extends valid {
    isCurrentYear: boolean;
}


export declare function number(value: string): validNumber;
export declare function expirationDate(value: string | {month: string, year: string}): validExpirationDate;
export declare function expirationMonth(value: string): validExpirationMonth;
export declare function expirationYear(value: string): validExpirationYear;
export declare function cvv(value: string, maxLength?: number): valid;
export declare function postalCode(value: string, options?: {minLength?: number}): valid;
