
// Type definitions for creditcards v3.1.0
// Project: https://github.com/bendrucker/creditcards
// Definitions by: Enrique Franco S. <https://github.com/enrifransch/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare module creditcards {
    /**
     * Returns a new copy of the main module with custom types.
     * An array of types from https://github.com/bendrucker/creditcards-types
     * @param types
     */
    export function withTypes(types: any[]): any;
    export const card: Card;
    export const cvc: CVC;
    export const expiration: Expiration;
}

 declare interface Card {
    /**
     * Remove all non-numeric characters from a card number, including punctuation and spacing.
     */
    parse(number: string): string;
    /**
     * Formats a card number as printed on the physical card
     * @param number
     * @param separator
     */
    format(number: string, separator?: string[]): string;
    /**
     * Returns the matched card type, or undefined if there was no match. For a full list of supported card types, see https://github.com/bendrucker/creditcards-types#card-types.
     * @param number The card number. Punctuation is not allowed. Sanitize input through card.parse first if needed.
     * @param eager When true, the card type will be eagerly matched using a more permissive pattern that can match partial card numbers.
     */
    type(number: string, eager?: boolean): string;
    /**
     * Checks the card number's validity using the Luhn algorithm.
     * @param number
     */
    luhn(number: string): boolean;
    /**
     * Detect if a card is a valid card of the specified type. If no type is provided, the card will be valid if any type is matched.
     * @param number
     * @param type
     */
    isValid(number: string, type?: [string]): boolean;
}

 declare interface CVC {
     /**
      * Detect if a card is a valid card of the specified type. If no type is provided, the card will be valid if any type is matched.
      * @param cvc
      * @param type
      */
    cvcIsValid(cvc: string, type?: string): boolean;
    /**
     * Detect if a CVC is valid card for the specified type.
     * @param cvc
     * @param type
     */
    isValid(cvc: string, type?: string[]): boolean;
}

 declare interface Expiration {
    month: Month;
    year: Year;
    isPast(month: number, year: number): boolean;
}

interface Month {
    parse(month: string | number): number;
    isValid(month: string | number): number;
}

interface Year {
    parse(year: string | number, expand: boolean): number;
    format(year: string | number, strip: boolean): string;
    isValid(year: number): boolean;
    isPast(year: number, year: number): boolean;
}
