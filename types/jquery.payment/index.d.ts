// Type definitions for jQuery.payment
// Project: https://github.com/stripe/jquery.payment
// Definitions by: Eric J. Smith <https://github.com/ejsmith/>, John Rutherford <https://github.com/johnrutherford/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace JQueryPayment {

    interface Payment {
        /**
         * Validates a card number:
         * * Validates numbers
         * * Validates Luhn algorithm
         * * Validates length
         *
         * @param cardNumber The card number to validate.
         */
        validateCardNumber(cardNumber: string): boolean;

        /**
         * Validates a card expiry:
         * * Validates numbers
         * * Validates in the future
         * * Supports year shorthand
         *
         * @param year The year to validate.
         * @param month The months to validate.
         */
        validateCardExpiry(year: string, month: string): boolean;

        /**
         * Validates a card expiry:
         * * Validates numbers
         * * Validates in the future
         * * Supports year shorthand
         *
         * @param expiry An object with the year and month to validate.
         */
        validateCardExpiry(expiry: ExpiryInfo): boolean;

        /**
         * Validates a card CVC:
         * * Validates number
         * * Validates length to 4
         *
         * @param cvc The CVC value to validate.
         * @param type Optional card type.
         */
        validateCardCVC(cvc: string, type?: string): boolean;

        /**
         * Returns a card type. The function will return null if the card type can't be determined.
         *
         * @param cardNumber The card number to parse.
         */
        cardType(cardNumber: string): string;

        /**
         * Parses a credit card expiry in the form of MM/YYYY, returning an object containing the month and
         * year. Shorthand years, such as 13 are also supported (and converted into the longhand, e.g. 2013).
         *
         * @param monthYear The value to parse.
         */
        cardExpiryVal(monthYear: string): ExpiryInfo;

        /**
         * Array of objects that describe valid card types.
         */
        cards: CardInfo[];
    }

    interface ExpiryInfo {
        month: number;
        year: number;
    }

    interface CardInfo {
        /**
         * Card type
         */
        type?: string;

        /**
         * Regex used to identify the card type. For the best experience, this should be
         * the shortest pattern that can guarantee the card is of a particular type.
         */
        pattern?: RegExp;

        /**
         * Array of prefixes used to identify the card type.
         */
        patterns?: number[];

        /**
         * Array of valid card number lengths.
         */
        length?: number[];

        /**
         * Array of valid card CVC lengths.
         */
        cvcLength?: number[];

        /**
         * Boolean indicating whether a valid card number should satisfy the Luhn check.
         */
        luhn?: boolean;

        /**
         * Regex used to format the card number. Each match is joined with a space.
         */
        format?: RegExp;
    }
}

interface JQuery {
    payment(command: string): JQuery;
}

interface JQueryStatic {
    payment: JQueryPayment.Payment;
}
