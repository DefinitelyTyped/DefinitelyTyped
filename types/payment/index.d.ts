interface Fns {
    /**
     * Validates a card number:
     * * Validates numbers
     * * Validates Luhn algorithm
     * * Validates length
     */
    validateCardNumber(cardNumber: string): boolean;
    /**
     * Formats a card number
     */
    formatCardNumber(cardNumber: string): string;
    /**
     * Validates a card expiry:
     * * Validates numbers
     * * Validates in the future
     * * Supports year shorthand
     * * Supports formatted as formatCardExpiry input value
     */
    validateCardExpiry(monthYear: string, year?: string): boolean;
    /**
     * Validates a card CVC:
     * * Validates number
     * * Validates length to 4
     */
    validateCardCVC(cvc: string, type?: string): boolean;
    /**
     * Returns a card type. Either:
     * * visa
     * * mastercard
     * * discover
     * * amex
     * * jcb
     * * dinersclub
     * * maestro
     * * laser
     * * unionpay
     * * elo
     *
     * The function will return null if the card type can't be determined.
     */
    cardType(cardNumber: string): string;
    /**
     * Parses a credit card expiry in the form of MM/YYYY, returning an object containing the `month` and `year`.
     * Shorthand years, such as `13` are also supported (and converted into the longhand, e.g. `2013`).
     */
    cardExpiryVal(monthYear: string | HTMLInputElement): MonthYear;
}

interface MonthYear {
    month: number;
    year: number;
}

interface CardType {
    type: string;
    pattern: RegExp;
    length: number[];
    cvcLength: number[];
    luhn: boolean;
    format: RegExp;
}

declare var Payment: {
    /**
     * Formats card numbers:
     * * Includes a space between every 4 digits
     * * Restricts input to numbers
     * * Limits to 16 numbers
     * * Supports American Express formatting
     * * Adds a class of the card type (e.g. 'visa') to the input
     */
    formatCardNumber(elem: HTMLInputElement): HTMLInputElement;
    /**
     * Formats card expiry:
     * * Includes a / between the month and year
     * * Restricts input to numbers
     * * Restricts length
     */
    formatCardExpiry(elem: HTMLInputElement): HTMLInputElement;
    /**
     * Formats card CVC:
     * * Restricts length to 4 numbers
     * * Restricts input to numbers
     */
    formatCardCVC(elem: HTMLInputElement): HTMLInputElement;
    /**
     * General numeric input restriction.
     */
    restrictNumeric(elem: HTMLInputElement): HTMLInputElement;

    /**
     * Returns the array of card types.
     */
    getCardArray(): CardType[];
    /**
     * Overrides the array of card types with a new array.
     */
    setCardArray(cardTypes: ReadonlyArray<CardType>): void;
    /**
     * Add a new card type to the card array.
     */
    addToCardArray(cardType: CardType): void;
    /**
     * Remove a card type from the card array.
     */
    removeFromCardArray(cardName: string): void;

    fns: Fns;
};

export = Payment;
