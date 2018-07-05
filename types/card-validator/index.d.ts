// Type definitions for card-validator 4.1
// Project: https://github.com/braintree/card-validator
// Definitions by: Gregory Moore <https://github.com/ChanceM>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Card {
    niceType: string;
    type: string;
    pattern: string;
    isAmex: boolean;
    gaps: number[];
    lengths: number[];
    code: {name: string, size: number};
}

export interface valid {
    isPotentiallyValid: boolean;
    isValid: boolean;
}

export interface validNumber extends valid {
    card: Card | null;
}

export interface validExpirationDate extends valid {
    month: string | null;
    year: string | null;
}

export interface validExpirationMonth extends valid {
    isValidForThisYear: boolean;
}

export interface validExpirationYear extends valid {
    isCurrentYear: boolean;
}

export function number(value: string): validNumber;
export function expirationDate(value: string | {month: string, year: string}): validExpirationDate;
export function expirationMonth(value: string): validExpirationMonth;
export function expirationYear(value: string): validExpirationYear;
export function cvv(value: string, maxLength?: number): valid;
export function postalCode(value: string, options?: {minLength?: number}): valid;
