// Type definitions for creditcardutils 1.0
// Project: https://github.com/faaez/creditcardutils#readme
// Definitions by: Steven Conaway <https://github.com/SConaway>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Validates a credit card number. Returns a boolean.
 */
export function validateCardNumber(cardNumber: string): boolean;

/**
 * Takes an unformatted credit card number and returns a formatted string.
 */
export function formatCardNumber(unformatted: string): string;

/**
 * Gets credit card type from its number. Returns a string.
 */
export function parseCardType(cardNumber: string): string;

/**
 * Validates a credit card expiry. Returns a boolean.
 */
export function validateCardExpiry(month: string, year: string): boolean;

/**
 * Gets credit card expiration from its date. Returns a formatted string of the shape MM / YY.
 */
export function formatCardExpiry(expiration: string): string;

/**
 * Parses credit card expiration from the date. Returns an object of the shape { month: 4, year: 2021 }.
 */
export function parseCardExpiry(expiration: string): object;

/**
 * Validates a credit card CVC. Returns a boolean.
 */
export function validateCardCVC(cvc: string, type?: string): boolean;

// /**
//  * Validates a credit card CVC. Returns a boolean.
//  */
// export function validateCardCVC(cvc: string, type: string): boolean;

export as namespace creditcardutils;
